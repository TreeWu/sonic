package theme

import (
	"context"
	"os"
	"path/filepath"
	"strings"

	"github.com/go-git/go-git/v5"
	"go.uber.org/fx"

	"github.com/go-sonic/sonic/model/dto"
	"github.com/go-sonic/sonic/util/xerr"
)

type gitThemeFetcherImpl struct {
	fx.Out
	PropertyScanner PropertyScanner
}

func (g gitThemeFetcherImpl) FetchTheme(ctx context.Context, file interface{}) (*dto.ThemeProperty, error) {
	gitURL := file.(string)
	splits := strings.Split(gitURL, "/")
	lastSplit := splits[len(splits)-1]
	tempDir := os.TempDir()

	themeDirName := lastSplit
	path := filepath.Join(tempDir, themeDirName)
	//if file path exist, delete it
	if _, err := os.Stat(path); err == nil {
		err = os.RemoveAll(path)
		if err != nil {
			return nil, xerr.WithStatus(err, xerr.StatusBadRequest).WithMsg(err.Error())
		}
	}
	_, err := git.PlainClone(path, false, &git.CloneOptions{
		URL: gitURL,
	})
	if err != nil {
		return nil, xerr.WithStatus(err, xerr.StatusBadRequest).WithMsg(err.Error())
	}
	themeProperty, err := g.PropertyScanner.ReadThemeProperty(ctx, path)
	if err != nil {
		return nil, err
	}
	// delete themeProperty.FolderName .git stuff
	themeProperty.FolderName = strings.TrimSuffix(themeProperty.FolderName, ".git")
	return themeProperty, nil
}

func NewGitThemeFetcher(propertyScanner PropertyScanner) ThemeFetcher {
	return &gitThemeFetcherImpl{
		PropertyScanner: propertyScanner,
	}
}
