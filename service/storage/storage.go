package storage

import (
	"context"
	"mime/multipart"

	"github.com/go-sonic/sonic/consts"
	"github.com/go-sonic/sonic/model/dto"
	storageimpl "github.com/go-sonic/sonic/service/storage/impl"
)

type FileStorage interface {
	Upload(ctx context.Context, file *multipart.FileHeader) (*dto.AttachmentDTO, error)
	Delete(ctx context.Context, fileKey string) error
	GetAttachmentType() consts.AttachmentType
	GetFilePath(ctx context.Context, relativePath string) (string, error)
}

type FileStorageComposite interface {
	GetFileStorage(storageType consts.AttachmentType) FileStorage
}
type fileStorageComposite struct {
	localStorage *storageimpl.LocalFileStorage
	minio        *storageimpl.MinIO
	aliyunOSS    *storageimpl.Aliyun
	qiniuOss     *storageimpl.Qiniu
}

func NewFileStorageComposite(localStorage *storageimpl.LocalFileStorage, minio *storageimpl.MinIO, aliyun *storageimpl.Aliyun, qiniu *storageimpl.Qiniu) FileStorageComposite {
	return &fileStorageComposite{
		localStorage: localStorage,
		minio:        minio,
		aliyunOSS:    aliyun,
		qiniuOss:     qiniu,
	}
}

func (f *fileStorageComposite) GetFileStorage(storageType consts.AttachmentType) FileStorage {
	switch storageType {
	case consts.AttachmentTypeLocal:
		return f.localStorage
	case consts.AttachmentTypeMinIO:
		return f.minio
	case consts.AttachmentTypeAliOSS:
		return f.aliyunOSS
	case consts.AttachmentTypeQiNiuOSS:
		return f.qiniuOss
	default:
		panic("Unsupported file storage")
	}
}
