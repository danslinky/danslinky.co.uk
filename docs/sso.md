# Single Sign On (SSO)

## Auth0

|Tenant|Region|Purpose|Domain|
|-|-|-|-|
|slinky|eu|development|slinky.eu.auth0.com|
|danslinky|uk|production|danslinky.uk.auth0.com|

## SAML

```
Version: 2.0
Issuer: urn:danslinky.uk.auth0.com
Certificate: https://danslinky.uk.auth0.com/pem
Fingerprint: 12:59:8B:88:FB:B2:F9:CE:B2:99:20:07:A2:82:81:E0:04:84:A9:4A
Login: https://danslinky.uk.auth0.com/samlp/WxS8x1LdxPVdjbgEnIuWJfVsdKN6zlTx
Metadata: https://danslinky.uk.auth0.com/samlp/metadata/WxS8x1LdxPVdjbgEnIuWJfVsdKN6zlTx)
```

Alternatively, you can add a connection parameter:
In this case, Auth0 will redirect users to the specified connectionand will not display the Login Widget. Make sure you send the SAMLRequest using HTTP POST.

## Integrations

 - DataDog (SAML)

## Social Logins

 - All of them.