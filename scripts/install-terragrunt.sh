WORKSPACE_BIN=$CODESPACE_VSCODE_FOLDER/.bin
mkdir -p $WORKSPACE_BIN
cd $WORKSPACE_BIN

rm -rfv terragrunt
curl -sSL -o terragrunt https://github.com/gruntwork-io/terragrunt/releases/download/v0.55.9/terragrunt_linux_amd64
chmod u+x terragrunt
./terragrunt
