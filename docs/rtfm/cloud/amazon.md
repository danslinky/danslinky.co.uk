# :fontawesome-brands-amazon: Amazon Web Services

I am an experienced member of Jeff's Cloud Nativity, having gained battle hardered experience using AWS roles at Capgemini, Torchbox, Cookpad and Adarga. I use Terraform, Terragrunt, and my mouse and keyboard to maintain my AWS Cloud.

## AWS CLI

```sh
# Visit: https://aws.amazon.com/cli/
#
cd ~/Downloads
curl "https://awscli.amazonaws.com/awscli-exe-linux-$(uname -m).zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
rm -vf ~/Downloads/awscliv2.zip ./aws
```

### 1password CLI support

AWS credentials are stored in 1Password, and I can make use of the CLI integration, but [only when the fingerprint reader works](https://www.reddit.com/r/AsahiLinux/comments/1677pnw/asahi_touch_id_logic_board_pairing/).

```sh
op plugin init aws
```

## AWS Organisation and Accounts

The `root` account has been secured with a really long password and MFA, and access credentials created for bootstrap have been revoked.

`Organisation`
: - `o-****ii0w`

`Management Account`
:   - `danslinky` :link: [console](https://danslinky.signin.aws.amazon.com/console).
    - An SSO login can be initiated from the IDP.
    - `arn:aws:organizations::****6988:account/o-****ii0w/****6988`
    - [redacted]@danslinky.co.uk
