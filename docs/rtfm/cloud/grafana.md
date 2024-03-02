# :simple-grafana: Grafana Cloud

- [Grafana Cloud Status Page](https://status.grafana.com/)

Grafana Cloud Free includes a lot, but has some limitations. Upgrade plans for pay-as-you-go usage, premium support and more are available.

It's a really good service to have on the spare monitor screen in your home office.

## @danslinky Org

- [Dashboards](https://danslinky.grafana.com/)
- [Stack Management](https://grafana.com/orgs/danslinky/stacks)

### Prometheus

### Grafana data source config

```yaml
Name: grafanacloud-danslinky-prom
Type: Prometheus
URL: https://prometheus-prod-39-prod-eu-north-0.grafana.net/api/prom
Access: Server (default)
BasicAuth: (checked)
User: changeme
Password: changeme
```

### Query endpoint

Endpoint for uploading your rule and alert definitions.

```yaml
endpoint: https://prometheus-prod-39-prod-eu-north-0.grafana.net/api/prom
```

### Remote write config


```yaml 
remote_write:
- url: https://prometheus-prod-39-prod-eu-north-0.grafana.net/api/prom/push
  basic_auth:
    username: changeme
    password: changeme
```

## AWS Private Link

You can send telemetry data from your AWS Virtual Private Cloud (VPC) to Grafana Cloud via AWS PrivateLink. Follow the instructions to get started. Then, use this Private DNS Name in place of the remote write endpoint above.

```yaml
ServiceName: com.amazonaws.vpce.eu-north-1.vpce-svc-02e115b4c1af3fea6
PrivateDNSName: mimir-prod-39-cortex-gw.eu-north-1.vpce.grafana.net
```
