# OPNSense 

It's a VM running on XCP-ng and lets me access the Internet. It also lets some parts of the Internet access me.

## Services

 - WAN IPv4 and IPv6
 - Either dhcpv6 is REALLY broken, or I have a mistake in the ipv6 config.
 - Unbound uses a DNS blocklist. It does not allow Facebook.
 - Wireguard service is active
 - Cloudflare is integrated using some scripts...
 - https://localhost.localdomain.workers.dev/ping
 - See [SSL](security/ssl.md) for more information on Certificates and things.

## Ports

`0`
: WAN (RED cable to ONT (RED cable)

`1`
: OFFICE (GREY cable UPSTAIRS)

`2`
: WIFI (GREEN cable to NETGEAR)

`3`
: SAMSUNG TV (GREY cable to WALL)

`4`
: RIPE PROBE

`5`
: unused

## Upgrades

Remember to Snapshot the VM first.

1. Open Termius app and `ssh gateway.home.arpa`
2. Open the `opnsense-shell` and select option 12.
3. **READ THE RELEASE NOTES**
4. Install, reboot, put the kettle on and wait for the Internet to work again.

Alteratviely, use the WebUI. Sometimes it doesn't work.

## Disaster Recovery Plan

Unplug the red cable, and use the BT HomeHub if it still works. 
Try the factory reset button if it does not just work after 5 minutes.
The wifi code is on a sticker on the R&D desk.