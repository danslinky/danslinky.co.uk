# StatusCake

!!! info inline "[My Status Page](/status)"
    Please check my realtime status page for up to date information on the latest status of my page.

> HTTP, SSL, DNS and Domain monitoring using StatusCake.

- Google & Microsoft accounts are linked, with 2FA configured.
- Main dashboard at [app.statuscake.com](https://app.statuscake.com/)

## Developer 

- API documentation at [developers.statuscake.com](https://developers.statuscake.com/api)
- API key at [app.statuscake.com/User.php](https://app.statuscake.com/User.php)

## Terraform

- `danslinky/shenanigans/terraform/statuscake`
- it reads `statuscake.yaml`, and creates the tests and contact group

### Example statuscake.yaml

```yaml
tests:
- url: https://alumni.cern/ # (1)
- name: "Dan Slinky's portfolio website" # (2)
  url: https://rtfm.danslinky.co.uk/
  string: "Hergersheimer" # (3)
regions:
- london
- paris
tags: # (4)
- production
contacts:
- name: sysadmins
  email:
  - sysadmin@danslinky.co.uk
```

1. Required
2. Optional, uses `url`
3. Optional, uses `""`
4. Tags are used to gather tests on the public reporting page.
