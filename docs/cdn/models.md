---
editLink: false
---

# Model API

## Get model list
Get the model list of the current user.

**Request URL:**

/api/models

**Method:**

GET  

**Request headers:**

See [Common request headers](/cdn/index.html#common-request-headers).

**Request parameters:**
| Parameter | Type | Description | Required |
| :----: | :----: | ---- |:----: |
| sort | string | Sort rule. viewer: view count; _createTime: creation time. Default: _createTime | Optional |
| limit | number | Maximum number of models to return, range: 100 to 1000. Default: 100 | Optional |
| skip | number | Return models after the skip offset; combine with limit to paginate. Default: 0 | Optional |
| search | string | Only return models whose name contains search | Optional |

**Response parameters:**

| Parameter | Type | Description |
| :----: | :----: | ---- |
| models | array<`model`> | Array of model objects. For the model object structure, see the `Model structure` section below |
| limit | number | Echo of the submitted limit parameter |
| skip | number | Echo of the submitted skip parameter |
| total | number | Total number of models matching the query; combine with limit and skip to implement page navigation |

#### **Model structure:**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| _id | string | Unique model id |
| name | string | Model name |
| des | string | Model description |
| tags | array<`string`> | Model tags |
| zip | string | Original archive file name |
| screenshot | string | Cover url |
| size | object | Model size information; see the size structure below |
| stats | string | Status. wait: uploading; public: accessible; error: has errors; draft: not published |
| viewer | number | View count |
| _createTime | Date | Creation time |

**size structure:**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| size | number | Total size of all files after the model has been processed |
| length | number | Number of files the model contains |

**Failure response:**

None

**Example:**
```
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token' 'https://3dhub.orillusion.com/api/models' 
```

**Error messages:**

Status code
* none

Error content
* none

---

## Create model
Create a model file and obtain the upload endpoint URL.

**Request URL:**

/api/model

**Method:**  

POST
 
**Request headers:**

See [Common request headers](/cdn/index.html#common-request-headers).

**Request parameters:**
| Parameter | Type | Description | Required |
| :----: | :----: |:----: |:----: |
| entry | string | Entry file name | Required |
| zip | string | Original archive file name | Required |


**Response parameters:**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| uploadUrl | string | URL used to upload the file |
| model | object | Model information; see the [Model structure](/cdn/models.html#model-structure) notes |

**Failure response:**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| none | string | Error description |

**Example:**
```
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token' -X POST --data-binary '{"zip":"sample.zip","entry":"sample.gltf"}'  'https://3dhub.orillusion.com/api/model' 
```

**Notes**
* Only .zip file uploads are supported. Compress gltf/glb/fbx format files into a zip file by relative path.
* The uploadUrl returned by this endpoint is used to upload the file. See the complete example below:
```ts
// 1. Request creation of a model object
let req = await fetch('https://3dhub.orillusion.com/api/model', {
    method: 'POST',
    body: JSON.stringify({
        entry: 'xxx.gltf', // model entry file name
        zip: 'xxx.zip' // archive file name
    }),
    headers: {
        'x-orillusion-id': accessId,
        'x-orillusion-token': token,
        'Content-Type': 'application/json'
    },
    credentials: 'include',
    mode: 'cors'
})
// returns the model object and the upload URL
let {model, uploadUrl} = await req.json()

// 2. The client uses the uploadUrl to upload the native zip File object
let req = await fetch(uploadUrl, {
    method: 'PUT',
    body: zip,
    headers: {
        'Content-Type': 'application/octet-stream' // required
    }
})
await req.json() // wait for the upload to complete
```

**Error messages:**

Status code
* 403

Error content
* none

## Get model URL
Get the access URL of a model.

**Request URL:**

/api/signature/:model_id

**params:**
| Parameter | Description |
| :----: | :----: |
| model_id | The model's _id |

**Method:**  

GET

**Request headers:**

See [Common request headers](/cdn/index.html#common-request-headers).

**Request parameters:**
| Parameter | Type | Description | Required |
| :----: | :----: |:----: |:----: |
| expire | number | Valid duration in seconds | Optional |

**Response parameters:**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| entry | string | Model access URL |
| size | object | Model size information |
| signature | string | Model access signature; see the notes below for usage |
| time | Date | Request timestamp |
| expire | number | Valid duration | |


**Failure response:**

None

**Example:**
```
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token'  -X GET 'https://3dhub.orillusion.com/api/signature/model_id?expire=100' 
```

**Notes**
* The response parameter `entry` is the link to the model's entry file, for example: `https://object.orillusion.com/model/{model_id}/scene.gltf`

* Model files and their resources on the CDN cannot be accessed directly; you must add `signature` information for authentication before you have permission to load the model. There are currently three ways to add the `signature`, suited to different needs:
1. You can add a `cdn_sign` `query` parameter to the link url, for example: `https://object.orillusion.com/model/{model_id}/scene.gltf?cdn_sign={signature}`. Note, however, that because the signature is generated temporarily, the link URL differs on every request, so it cannot be cached long-term in the browser — effectively every visit requires reloading all model resources over the network;
```ts
    let res = await fetch('https://object.orillusion.com/model/{model_id}/scene.gltf?cdn_sign={signature}')
    let gltf = await res.json()
```
2. You can modify the `path` portion of the link url, for example: `https://object.orillusion.com/model/{model_id}/{signature}/scene.gltf`. This form keeps the directory consistent, making it convenient to load other dependency files in the same directory as the model; likewise, because the signature is generated temporarily, the link URL differs on every request, so it cannot be cached long-term in the browser;
```ts
    let res = await fetch('https://object.orillusion.com/model/{model_id}/{signature}/scene.gltf')
    let gltf = await res.json()
```
3. You can add a custom header `x-cdn-sign` to the access request to authenticate model access. Since the url link does not change, the browser can maintain a local cache long-term, greatly reducing the time and bandwidth of subsequent loads, for example:
```ts
    let res = await fetch('https://object.orillusion.com/model/{model_id}/scene.gltf', {
        headers:{
            cdn_sign: "{signature}" 
        }
    })
    let gltf = await res.json()
```

* The `gltf` file is only the model's entry file; you usually also need to load related resources such as textures. You must add `signature` authentication to every request to load the complete model. Taking `Engine3D.res.loadGltf` as an example, users can set the `onUrl` callback or the `headers` parameter to dynamically load subsequent resources in the same directory as the `gltf`:
```ts
// authenticate via url query
let model = await Engine3D.res.loadGltf('https://object.orillusion.com/model/{model_id}/scene.gltf', {
    onUrl: url => url + '?cdn_sign={signature}'
})
// authenticate via header
let model = await Engine3D.res.loadGltf('https://object.orillusion.com/model/{model_id}/scene.gltf', {
    headers: {
        cdn_sign: "{signature}" 
    }
})
// authenticate directly via url path
let model = await Engine3D.res.loadGltf('https://object.orillusion.com/model/{model_id}/{signature}/scene.gltf')
```

**Error messages:**

Status code
* 403

Error content
* no model: model does not exist
* model is not upload yet: model file not uploaded yet
* no auth: no permission

## Get model info
Get the detailed information of a model object.

**Request URL:**

/api/model/:model_id

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
See the [Model structure](/cdn/models.html#model-structure) notes


**Failure response:**

None

**Example:**
```
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token'  -X GET 'https://3dhub.orillusion.com/api/model/model_id' 
```

**Error messages:**

Status code
* 403

Error content
* no model: model does not exist
* no auth: no permission

## Update model
Update the information of a model.

**Request URL:**

/api/model/:model_id

**params:**
| Parameter | Description |
| :----: | :----: |
| model_id | The model's _id |

**Method:**  

PUT

**Request headers:**

See [Common request headers](/cdn/index.html#common-request-headers).

**Request parameters:**
| Parameter | Type | Description | Required |
| :----: | :----: |:----: |:----: |
| name | string | Model name | Optional |
| des | string | Model description | Optional |
| tags | array | Tag list | Optional |
| screenshot | string | Cover URL | Optional |

**Response parameters:**

See the [Model structure](/cdn/models.html#model-structure) notes

**Failure response:**

None

**Example:**
```
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token'  --data-binary '{“name”:"new name","des":"new description"}'  -X PUT  'https://3dhub.orillusion.com/api/model/model_id' 
```

**Error messages:**

Status code
* 403

Error content
* no model: model does not exist
* no auth: no permission

## Get model download URL
Get the download URL of a model.

**Request URL:**

/api/download/:model_id

**params:**
| Parameter | Description |
| :----: | :----: |
| model_id | The model's _id |

**Method:**  

GET

**Request headers:**

See [Common request headers](/cdn/index.html#common-request-headers).

**Request parameters:**
| Parameter | Type | Description | Required |
| :----: | :----: |:----: |:----: |
| expires | number | Expiration time of the download URL in seconds, range 200 seconds to 1 hour. Default 200 seconds | Optional |

**Response parameters:**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| url | string | URL used for download |

**Failure response:**

None

**Example:**
```
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token' -X GET  'https://3dhub.orillusion.com/api/model/download/model_id' 
```

**Error messages:**

Status code
* 403

Error content
* no model: model does not exist
* no auth: no permission

### Delete model
Delete a model.

**Request URL:**

/api/model/:model_id

**params:**
| Parameter | Description |
| :----: | :----: |
| model_id | The model's _id |

**Method:**  

DELETE

**Request headers:**

See [Common request headers](/cdn/index.html#common-request-headers).

**Request parameters:**

None

**Response parameters:**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| msg | string | Returns "done" on success |


**Failure response:**

None

**Example:**
```
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token' -X DELETE  'https://3dhub.orillusion.com/api/model/model_id' 
```

**Error messages:**

Status code
* 403

Error content
* no model: model does not exist
* no auth: no permission

## Query model status
Query the processing status of a model file in cloud storage.

**Request URL:**

/api/check/:model_id

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

See the [Model structure](/cdn/models.html#model-structure) notes

**Failure response:**

None

**Example:**
```
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token' -X GET 'https://3dhub.orillusion.com/api/check/model_id' 
```

**Error messages:**

Status code
* 403

Error content
* no model: model does not exist
* no auth: no permission
* on progressing: processing

## Generate model cover URL
Generate a URL for uploading a model cover.

**Request URL:**

/api/screenshot/:model_id

**params:**
| Parameter | Description |
| :----: | :----: |
| model_id | The model's _id |

**Method:**  

POST

**Request headers:**

See [Common request headers](/cdn/index.html#common-request-headers).

**Request parameters:**

None

**Response parameters:**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| uploadUrl | string | URL used to upload the file |
| url | string | Accessible URL |

**Notes:**
* Each model can have only one cover image; a new upload overwrites the previous cover image.
* The uploadUrl obtained from this endpoint is used as the file upload URL. Upload method:
```ts
// 1. Request creation of a new screenshot
let req = await fetch('https://3dhub.orillusion.com/api/screenshot/xxxx', {
    method: 'POST',
    headers: {
        'x-orillusion-id': accessId,
        'x-orillusion-token': token,
        'Content-Type': 'application/json'
    },
    credentials: 'include',
    mode: 'cors'
})
// returns the screenshot URL and the upload URL
let {uploadUrl, url} = await req.json()

// 2. The client uses the uploadUrl to upload the screenshot file
let req = await fetch(uploadUrl, {
    method: 'PUT',
    body: screenshot, // Blob or File
    headers: {
        'Cache-Control': 'public, max-age=31536000' // required
    }
})
await req.json() // wait for the upload to complete
```
**Failure response:**

None

**Example:**
```
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token' -X POST  'https://3dhub.orillusion.com/api/screenshot/model_id' 
```

**Error messages:**

Status code
* 403

Error content
* no model: model does not exist
* no auth: no permission
