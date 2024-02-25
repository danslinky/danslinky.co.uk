# Terraform

## tfenv

```sh
git clone --depth=1 https://github.com/tfutils/tfenv.git $CODESPACE_VSCODE_FOLDER/.tfenv
export PATH="$CODESPACE_VSCODE_FOLDER/.tfenv/bin:$PATH"
tfenv install
tfenv list
echo 1.7.4 > $CODESPACE_VSCODE_FOLDER/.tfenv/version 
terraform version
```

[Terraform Releases](https://github.com/hashicorp/terraform/releases)

## Terraform Cloud

```
git clone git@github.com:danslinky/shenanigans
cd shenanigans/terraform/project
terraform login
terraform init
terraform plan
```

## Spacelift
## Control Monkey

## Terragrunt

https://github.com/gruntwork-io/terragrunt/releases/download/v0.55.9/terragrunt_linux_amd64

## Projects

- [statuscake](statuscake.md)
  - https://developers.statuscake.com/guides/terraform/introduction
- github
- datadog
- google cloud
- xcp-ng
- digitalocean

