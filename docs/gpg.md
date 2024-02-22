# GPG

```sh
gpg --import danslinky.priv
gpg --list-keys
gpg -a --export danslinky > danslinky.gpg
gh gpg-key add -t danslinky danslinky.gpg
gh gpg-key list
gh gpg-key delete KEY_ID
gpg --edit 
```

## Edit a key

```sh
gpg --list-secret-keys --keyid-format=long
gpg --edit-key KEY_ID
gpg> adduid
gpg> save
gpg> deluid
```