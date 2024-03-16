---
tags: [security,luks,usb,secrets]
---
# USB drive encryption with LUKS (btrfs)

# Linked Documentation

- Fedora [encrypting drives using LUKS](https://docs.fedoraproject.org/en-US/quick-docs/encrypting-drives-using-LUKS)

## cryptsetup format new disk

```sh title="Format you device"

cryptsetup -V || echo "ERROR: cryptsetup not found"

DEVICE=/dev/sdX
LABEL="SECRET_KLAUS_HERGERSHEIMER"
#CIPHER="nsa"

sudo cryptsetup  --label $LABEL luksFormat $DEVICE -
sudo cryptsetup isLuks $DEVICE && echo Success
sudo cryptsetup luksDump $DEVICE | grep -E '^(Label|UUID):'

sudo cryptsetup luksOpen $DEVICE $LABEL 
sudo dmsetup info $LABEL
sudo mke2fs /dev/mapper/$LABEL

# make tea

sudo mount /dev/mapper/$LABEL $HOME/$LABEL
cd $HOME/$LABEL
sudo touch TEST && echo WriteOK
cd && sudo umount $HOME/$LABEL
```
