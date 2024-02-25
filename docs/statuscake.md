# StatusCake

<a href="https://www.statuscake.com" title="Website Uptime Monitoring"><img src="https://app.statuscake.com/button/index.php?Track=7149148&Days=1&Design=1" /></a>

HTTP, SSL, DNS and Domain monitoring using StatusCake.

- Google & Microsoft accounts are linked, with 2FA configured.
- Main dashboard at [app.statuscake.com](https://app.statuscake.com/)
- API documentation at [developers.statuscake.com](https://developers.statuscake.com/api)
- API key at [app.statuscake.com/User.php](https://app.statuscake.com/User.php)


## statuscake.yaml

Example

```yaml
tests:
- url: https://alumni.cern/
- name: "Dan Slinky's portfolio website"
  url: https://rtfm.danslinky.co.uk/
  string: "Hergersheimer"
regions:
- london
- paris
tags:
- statuscake
contacts:
- name: sysadmins
  email:
  - sysadmin@danslinky.co.uk
```
