---
editLink: false
---

# Share API

## Get share list
Get the share list of the current user.

**Request URL:**

/api/links/

**Method:**

GET  

**Request headers:**

See [Common request headers](/cdn/index.html#common-request-headers).

**Request parameters:**
| Parameter | Type | Description | Required |
| :----: | :----: | ---- |:----: |
| sort | string | Sort rule. viewer: view count; _createTime: creation time. Default: _createTime | Optional |
| limit | number | Maximum number of links to return, range: 100 to 100. Default: 100 | Optional |
| skip | number | Return links after the skip offset; combine with limit to paginate. Default: 0 | Optional |
| search | string | Only return links whose name contains search | Optional |

**Response parameters:**

| Parameter | Type | Description |
| :----: | :----: | ---- |
| links | array<`link`> | Array of link objects. For the link object structure, see the [Link structure](/cdn/links.html#link-structure) section below |
| models | array<`model`> | Array of model objects. For the model object structure, see the [Model structure](/cdn/models.html#model-structure) section |
| limit | number | Echo of the submitted limit parameter |
| skip | number | Echo of the submitted skip parameter |
| total | number | Total number of models matching the query; combine with limit and skip to implement page navigation |

### **Link structure**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| _id | string | Link id |
| user | string | id of the corresponding user |
| model | string | id of the corresponding model |
| auth | string | Access password; public access if empty |
| expire | number | Expiration time in seconds. 0: never |
| onetime | boolean | Burn after reading; the link becomes invalid after one view |
| download | boolean | Allow download |
| viewer | number | View count |
| des | string | Notes |


**Failure response:**

None

**Example:**
```
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token' -X GET  'https://3dhub.orillusion.com/api/links' 
```

**Error messages:**

Status code
* none

Error content
* none

## Get model share list
Get the share list of a specified model.

**Request URL:**

/api/links/:model_id

**params:**
| Parameter | Description |
| :----: | :----: |
| model_id | The model's _id |

**Method:**

GET  

**Request headers:**

See [Common request headers](/cdn/index.html#common-request-headers).

**Request parameters:**

None

**Response parameters:**

| Parameter | Type | Description |
| :----: | :----: |:----: |
| - | array`<link>` | Share list; for element structure see [Link structure](/cdn/links.html#link-structure) |


**Failure response:**

None

**Example:**
```
curl-H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token' -X GET  'https://3dhub.orillusion.com/api/links/model_id' 
```

**Error messages:**

Status code
* none

Error content
* none

## Create share
Create a share link.

**Request URL:**

/api/link

**Method:**  

POST

**Request headers:**

See [Common request headers](/cdn/index.html#common-request-headers).

**Request parameters:**
| Parameter | Type | Description | Required |
| :----: | :----: |:----: |:----: |
| model | string | Model id | Required |

**Response parameters:**

See [Link structure](/cdn/links.html#link-structure)

**Failure response:**

| Parameter | Type | Description |
| :----: | :----: |:----: |
| none | string | Error description |

**Example:**
```
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token'  -X POST --data-binary '{"model":"model_id"}'  'https://3dhub.orillusion.com/api/link' 
```

**Notes**
* You can create at most 20 share links.

**Error messages:**

Status code
* 403

Error content
* no model: no such model information
* no auth: no permission
* link count limited: number of shares exceeds the limit

## Get share info
Get the information of a share link.

**Request URL:**

/api/link/:link_id

**params:**
| Parameter | Description |
| :----: | :----: |
| link_id | The share link's _id |

**Method:** 

GET

**Request headers:**

See [Common request headers](/cdn/index.html#common-request-headers).

**Request parameters:**

None

**Response parameters:**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| link | object | For details see [Link structure](/cdn/links.html#link-structure) |
| model | object | For details see [Model structure](/cdn/models.html#model-structure) |
| sign | object | For details see the return parameters of the [signature API](/cdn/models.html#api-signature-model-id) |
| setting | object | Configuration information corresponding to the model |


**Failure response:**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| none | string | Error description |

**Example:**
```
curl-H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token' -X GET  'https://3dhub.orillusion.com/api/link/link_id' 
```

**Error messages:**

Status code
* 403

Error content
* no link: link not found
* link expires: expiration time too short
* require auth: no permission
* link count limited: number of shares exceeds the limit
* no model: invalid model


## Update share
Update a share link.

**Request URL:**

/api/link/:link_id

**params:**
| Parameter | Description |
| :----: | :----: |
| link_id | The share link's _id |

**Method:**  

PUT

**Request headers:**

See [Common request headers](/cdn/index.html#common-request-headers).

**Request parameters:**
| Parameter | Type | Description | Required |
| :----: | :----: |:----: | :----: |
| auth | string | Access password; public access if empty | Optional |
| expire | number | Expiration time in seconds. 0: never | Optional |
| onetime | boolean | Burn after reading; invalid after 1 view. Default: false | Optional |
| download | boolean | Whether to allow download. Default: false | Optional |
| des | string | Notes | Optional |

**Response parameters:**

None


**Failure response:**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| none | string | Error description |

**Example:**
```
curl-H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token' -X PUT --data-binary '{"des":"note"}' 'https://3dhub.orillusion.com/api/link/link_id' 
```

**Error messages:**

Status code
* 403

Error content
* no link: link not found
* no auth: no permission

## Delete share
Delete a share link.

**Request URL:**

/api/link/:link_id

**params:**
| Parameter | Description |
| :----: | :----: |
| link_id | The share link's _id |

**Method:**  

DELETE

**Request headers:**

See [Common request headers](/cdn/index.html#common-request-headers).

**Request parameters:**

None

**Response parameters:**

None

**Failure response:**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| none | string | Error description |

**Example:**
```
curl-H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token' -X DELETE 'https://3dhub.orillusion.com/api/link/link_id' 
```

**Error messages:**

Status code
* 403

Error content
* no link: link not found
* no auth: no permission


## Get shared model
Get the model source file corresponding to a share link.

**Request URL:**

/api/link/download/:link_id

**params:**
| Parameter | Description |
| :----: | :----: |
| link_id | The share link's _id |

**Method:**  

GET

**Request headers:**

See [Common request headers](/cdn/index.html#common-request-headers).

**Request parameters:**
| Parameter | Type | Description | Required |
| :----: | :----: |:----: | :----: |
| auth | string | Password | Optional |

**Response parameters:**
| Parameter | Type | Description |
| :----: | :----: | :----: |
| url | string | Download link |


**Failure response:**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| none | string | Error description |

**Example:**
```
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token'  -X GET 'https://3dhub.orillusion.com/api/link/download/link_id' 
```

**Error messages:**

Status code
* 403

Error content
* no link: link not found
* link expires: already expired
* no auth: no permission
* require auth: password verification failed
