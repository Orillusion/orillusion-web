---
editLink: false
---
# Orillusion 3DHub CDN APIs
3DHub CDN is a REST service. In addition to managing it through the web client, you can also send requests to 3DHub using the REST API.

## Authentication
The system assigns every user a set of `AccessKey` credentials, consisting of an `accessId` and an `accessSecret`. To keep data secure, all API calls must verify the sender's credentials. Only after successful authentication can you operate on the corresponding CDN resources.

### Authentication methods
You can send REST API requests directly, authenticating in either of the following two ways:
- Send requests directly with the AccessKey.
Provide the user's `accessId` + `accessSecret` directly in the header for authentication. This is recommended for use in a secure server environment and should not be exposed to the client. Please protect the `accessSecret`, as leaking it may lead to a data breach; if it is leaked, revoke the AccessKey promptly.

- Send requests using a temporary `token` credential.
A user can first request a temporary token credential from the CDN server using `accessId` + `accessSecret`, then use that temporary token to access CDN resources within a set time window. A temporary credential avoids exposing the user's long-term secret, making it more secure and reliable. It is suitable for requesting CDN resources from client/front-end programs. The general workflow is as follows:
1. The application server first uses the `accessSecret` on the server side to request a temporary `token` from the CDN server and returns it to the client.
2. The client can cache the `token` and, within the allotted time, authenticate access to CDN resources using `accessId` + `token` in the header.
3. When the temporary credential expires, the client requests a new temporary access credential from the app server again; the application server can once again use the `accessSecret` to request a new temporary `token` from the CDN server and return it to the client.

### Common request headers
Unless otherwise specified, every API must include the following header data by default. The `accessSecret` takes precedence over the `token`.

| Parameter | Type | Description | Required |
| :----: | :----: | :----: | :----: |
| Content-Type | string | application/json | Required |
| x-orillusion-id | string | accessId | Required |
| x-orillusion-key | string | accessSecret | Required if `token` is empty |
| x-orillusion-token | string | Temporary token credential | Required if `accessSecret` is empty |

## Obtain token
Obtain or refresh a temporary token.

**Request URL:**

/api/refreshToken

**Method:**  

GET

**Request headers:**

See [Common request headers](/cdn/index.html#common-request-headers). Note: this request must be authenticated with the `accessSecret`; it cannot be made using a `token`.


**Request parameters:**
| Parameter | Type | Description | Required |
| :----: | :----: |:----: | :----: |
| expire | number | Expiration duration in milliseconds, up to 24 hours. Default: 15 minutes | Optional |

**Response parameters:**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| expire | number | The returned expiration duration in milliseconds |
| token | string | Token |

**Failure response:**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| none | string | Error description |

**Example:**
```
# Can only be authenticated with accessId + accessSecret
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-key:accessSecret' 'https://3dhub.orillusion.com/refreshToken?expire=900000'
```

**Notes:**
* After obtaining the token, save it yourself. Subsequent calls to other APIs can then be authenticated using `accessId` + `token`.

**Error messages:**

Status code
* 403

Error content
* no accessSecret: did not authenticate with accessSecret


## Get secret
Get the accessSecret of the currently logged-in user.

**Request URL:**

/api/accesskey

**Method:**  

GET

**Request headers:**

See [Common request headers](/cdn/index.html#common-request-headers). Note: this request must be authenticated with the `accessSecret`; it cannot be made using a `token`.

**Request parameters:**

None

**Response parameters:**
| Parameter | Type | Description |
| :----: | :----: | :----: |
| secret | string | AccessSecret |

**Failure response:**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| none | string | Error description |

**Example:**
```
# Can only be authenticated with accessId + accessSecret
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-key:accessSecret' 'https://3dhub.orillusion.com/api/accesskey' 
```

**Error messages:**

Status code
* 403

Error content
* no auth: not logged in
* require verified: email not verified
* no accessSecret: did not authenticate with accessSecret

## Rotate secret
Delete and generate a new accessSecret.

**Request URL:**

/api/accesskey

**Method:**  

DELETE

**Request headers:**

See [Common request headers](/cdn/index.html#common-request-headers).

**Request parameters:**

None

**Response parameters:**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| result | string | Returns "ok" on success |

**Failure response:**
| Parameter | Type | Description |
| :----: | :----: | :----: |
| none | string | Error description |

**Example:**
```
# Can only be authenticated with accessId + accessSecret
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-key:accessSecret' -X DELETE  'https://3dhub.orillusion.com/api/accesskey' 
```

**Error messages:**

Status code
* 403

Error content
* no auth: not logged in
* require verified: email not verified
* no accessSecret: did not authenticate with accessSecret
