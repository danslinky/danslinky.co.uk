# Single Sign On (SSO)

## Keycloak

 - [ ] Supported 

## Auth0

 - [x] Supported

I like using [Auth0](https://auth0.com/), having first proposed and implemented it at [Adarga](https://adarga.ai/careers) in 2017, where we also used the awesome [Auth0 Terraform](https://registry.terraform.io/providers/auth0/auth0/latest/docs) provider to configure multiple tenants, applications, SSO integrations and integrated secrets distribution with AWS Secrets.

I don't like Auth0's Enterprise vendor lockin practices, but I do like their platform for implementing Social and Enterprise identity, authentication and authorization, for free.

|Tenant|Region|Purpose|Domain|
|-|-|-|-|
|slinky|eu|development|slinky.eu.auth0.com|
|danslinky|uk|production|danslinky.uk.auth0.com|

## SAML

```sh
Version: 2.0
Issuer: urn:danslinky.uk.auth0.com
Certificate: https://danslinky.uk.auth0.com/pem
Fingerprint: 12:59:8B:88:FB:B2:F9:CE:B2:99:20:07:A2:82:81:E0:04:84:A9:4A
Login: https://danslinky.uk.auth0.com/samlp/WxS8x1LdxPVdjbgEnIuWJfVsdKN6zlTx
Metadata: https://danslinky.uk.auth0.com/samlp/metadata/WxS8x1LdxPVdjbgEnIuWJfVsdKN6zlTx)
```

Alternatively, you can add a connection parameter. In this case, Auth0 will redirect users to the specified connection, and will not display the Login Widget. Make sure you send the SAMLRequest using HTTP POST.

## Integrations

 - DataDog (SAML)

## Social Logins

 - All of them.

## Demos

 - [ ] Demo Auth0 Terraform
 - [ ] Demo Organizations
 - [ ] Review latest features