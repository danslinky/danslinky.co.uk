# StatusCake

<a href="https://www.statuscake.com" title="Website Uptime Monitoring"><img src="https://app.statuscake.com/button/index.php?Track=7149148&Days=1&Design=1" /></a>

HTTP, SSL, DNS and Domain monitoring using StatusCake.

- Google & Microsoft accounts are linked, with 2FA configured.
- Main dashboard at [app.statuscake.com](https://app.statuscake.com/)
- API documentation at [developers.statuscake.com](https://developers.statuscake.com/api)
- API key at [app.statuscake.com/User.php](https://app.statuscake.com/User.php)

Example

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
