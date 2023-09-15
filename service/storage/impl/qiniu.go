package filestorageimpl

import (
	"context"
	"github.com/go-sonic/sonic/consts"
	"github.com/go-sonic/sonic/model/dto"
	"github.com/go-sonic/sonic/model/property"
	"github.com/go-sonic/sonic/service"
	"github.com/go-sonic/sonic/util/xerr"
	"github.com/qiniu/go-sdk/v7/auth/qbox"
	qiniustorage "github.com/qiniu/go-sdk/v7/storage"
	"image"
	"io"
	"net/url"

	"mime/multipart"
)

type Qiniu struct {
	OptionService service.OptionService
}

func NewQiniu(optionService service.OptionService) *Qiniu {
	return &Qiniu{
		OptionService: optionService,
	}
}

type qiniuClient struct {
	*qbox.Mac
	BucketName     string
	EndPoint       string
	Source         string
	Domain         string
	Protocol       string
	ThubmnailStyle string
}

func (q Qiniu) Upload(ctx context.Context, fileHeader *multipart.FileHeader) (*dto.AttachmentDTO, error) {
	client, err := q.getQiNiuClient(ctx)
	if err != nil {
		return nil, err
	}
	putPolicy := &qiniustorage.PutPolicy{
		Scope: client.BucketName,
	}
	token := putPolicy.UploadToken(client.Mac)
	cfg := qiniustorage.Config{}
	// 是否使用https域名
	cfg.UseHTTPS = client.isHttps()

	formUploader := qiniustorage.NewFormUploader(&cfg)
	ret := qiniustorage.PutRet{}
	putExtra := qiniustorage.PutExtra{
		Params: map[string]string{
			"x:from": "blog.wushr.cn",
		},
	}

	file, err := fileHeader.Open()
	if err != nil {
		return nil, err
	}
	filename := fileHeader.Filename
	if client.Source != "" {
		filename = client.Source + "/" + filename
	}
	err = formUploader.Put(ctx, &ret, token, filename, file, fileHeader.Size, &putExtra)
	if err != nil {
		return nil, xerr.WithMsg(err, "upload to qiniu oss error: "+err.Error()).WithStatus(xerr.StatusInternalServerError)
	}

	fd, err := newURLFileDescriptor(
		withBaseURL(client.Protocol+client.Domain),
		withSubURLPath(client.Source),
		withShouldRenameURLOption(commonRenamePredicateFunc(ctx, consts.AttachmentTypeQiNiuOSS)),
		withOriginalNameURLOption(filename),
	)

	mediaType, _ := getFileContentType(file)
	result := &dto.AttachmentDTO{
		Name:           fd.getFileName(),
		Path:           fd.getRelativePath(),
		FileKey:        fd.getRelativePath(),
		Suffix:         fd.getExtensionName(),
		MediaType:      mediaType,
		AttachmentType: consts.AttachmentTypeQiNiuOSS,
		Size:           fileHeader.Size,
	}
	_, err = file.Seek(0, io.SeekStart)
	if err != nil {
		return nil, xerr.WithStatus(err, xerr.StatusInternalServerError)
	}
	err = handleImageMeta(file, result, func(_ image.Image) (string, error) {
		if client.ThubmnailStyle != "" {
			return fd.getRelativePath() + client.ThubmnailStyle, nil
		} else {
			return fd.getRelativePath(), nil
		}
	})
	if err != nil {
		return nil, err
	}
	return result, nil
}

func (q Qiniu) Delete(ctx context.Context, fileKey string) error {
	client, err := q.getQiNiuClient(ctx)
	if err != nil {
		return err
	}
	cfg := qiniustorage.Config{
		UseHTTPS: client.isHttps(),
	}
	bucketManager := qiniustorage.NewBucketManager(client.Mac, &cfg)
	err = bucketManager.Delete(client.BucketName, fileKey)
	if err != nil {
		return xerr.WithMsg(err, "delete file err from qiniu oss").WithStatus(xerr.StatusInternalServerError)
	}
	return nil
}

func (q Qiniu) GetAttachmentType() consts.AttachmentType {
	return consts.AttachmentTypeQiNiuOSS

}

func (q Qiniu) GetFilePath(ctx context.Context, relativePath string) (string, error) {
	client, err := q.getQiNiuClient(ctx)
	if err != nil {
		return "", err
	}

	basePath := client.Protocol + client.Domain

	fullPath, _ := url.JoinPath(basePath, relativePath)
	fullPath, _ = url.PathUnescape(fullPath)
	return fullPath, nil
}

func (q *qiniuClient) isHttps() bool {
	return q.Domain == "https://"
}
func (q *Qiniu) getQiNiuClient(ctx context.Context) (*qiniuClient, error) {
	getClientProperty := func(propertyValue *string, property property.Property, e error) error {
		if e != nil {
			return e
		}
		value, err := q.OptionService.GetOrByDefaultWithErr(ctx, property, property.DefaultValue)
		if err != nil {
			return err
		}
		strValue, ok := value.(string)
		if !ok {
			return xerr.WithStatus(nil, xerr.StatusBadRequest).WithErrMsgf("wrong property type")
		}
		*propertyValue = strValue
		return nil
	}
	var bucketName, accessKey, accessSecret, domain, protocol, source, thumbnailStyleRule string
	err := getClientProperty(&bucketName, property.QiniuOssBucket, nil)
	err = getClientProperty(&accessKey, property.QiniuOssAccessKey, err)
	err = getClientProperty(&accessSecret, property.QiniuOssAccessSecret, err)
	err = getClientProperty(&domain, property.QiniuOssDomain, err)
	err = getClientProperty(&source, property.QiniuOssSource, err)
	err = getClientProperty(&protocol, property.QiniuDomainProtocol, err)
	err = getClientProperty(&thumbnailStyleRule, property.QiniuOssThumbnailStyleRule, err)
	if err != nil {
		return nil, err
	}
	mac := qbox.NewMac(accessKey, accessSecret)
	if err != nil {
		return nil, xerr.WithStatus(err, xerr.StatusInternalServerError).WithMsg("failed to initialize qiniu oss client: " + err.Error())
	}
	qiniuInstance := &qiniuClient{}
	qiniuInstance.Mac = mac
	qiniuInstance.BucketName = bucketName
	qiniuInstance.Domain = domain
	qiniuInstance.Protocol = protocol
	qiniuInstance.Source = source
	qiniuInstance.ThubmnailStyle = thumbnailStyleRule

	return qiniuInstance, nil
}
