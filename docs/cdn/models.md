---
editLink: false
---

# 模型 API

## 获取模型列表
获取当前用户的模型列表

**请求地址：**

/api/models

**请求方法：**

GET  

**请求头：**

请参照[公共请求头](/cdn/index.html#公共请求头)。

**请求参数：**
| 参数名 | 类型 | 描述 | 必填 |
| :----: | :----: | ---- |:----: |
| sort | string | 排序规则，viewer：浏览数，_createTime：创建时间， 默认值：_createTime | 选填 |
| limit | number | 指定返回model最大数，取值范围:100至1000，默认值：100 | 选填 |
| skip | number | 指定从skip之后返回model，可以和limit配合实现分页效果，默认值：0 | 选填 |
| search | string | 限定返回名称中包含search的model | 选填 |

**响应参数：**

| 参数名 | 类型 | 描述 |
| :----: | :----: | ---- |
| models | array<`model`> | 包含模型对象的数组，model对象结构请参照以下`model结构`部分 |
| limit | number | 上传limit参数的回传 |
| skip | number | 上传skip参数的回传 |
| total | number | 查询到符合条件的所有models的数目，配合limit，skip可实现页面跳转效果 |

#### **model结构：**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| _id | string | 模型唯一编号 |
| name | string | 模型名称 |
| des | string | 模型描述 |
| tags | array<`string`> | 模型标签 |
| zip | string | 原始压缩包文件名 |
| screenshot | string | 封面url |
| size | object | 模型尺寸信息，请查看下文size结构 |
| stats | string | 状态，wait：上传中，public：可访问，error：有错误，draft：未公开 |
| viewer | number | 访问次数 |
| _createTime | Date | 创建时间 |

**size结构：**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| size | number | 模型处理完毕后所有文件的总大小 |
| length | number | 模型包含的文件数 |

**失败返回：**

无

**示例:**
```
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token' 'https://3dhub.orillusion.com/api/models' 
```

**错误提示：**

状态码
* 无

错误内容
* 无

---

## 创建模型
创建一个模型文件，获得上传接口地址

**请求地址：**

/api/model

**请求方法：**  

POST
 
**请求头：**

请参照[公共请求头](/cdn/index.html#公共请求头)。

**请求参数：**
| 参数名 | 类型 | 描述 | 必填 |
| :----: | :----: |:----: |:----: |
| entry | string | 入口文件名 | 必填 |
| zip | string | 原始压缩包文件名 | 必填 |


**响应参数：**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| uploadUrl | string | 用于上传文件的url |
| model | object | 模型信息，请参考 [model结构](/cdn/models.html#model结构：) 说明 |

**失败返回：**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| 无 | string | 错误描述 |

**示例:**
```
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token' -X POST --data-binary '{"zip":"sample.zip","entry":"sample.gltf"}'  'https://3dhub.orillusion.com/api/model' 
```

**使用说明**
* 仅支持.zip文件上传，请将 gltf/glb/fbx 格式文件按相对路径压缩成zip文件；
* 调用该接口后返回的uploadUrl用于上传文件，请参照以下完整示例：
```ts
// 1. 申请创建 model 对象
let req = await fetch('https://3dhub.orillusion.com/api/model', {
    method: 'POST',
    body: JSON.stringify({
        entry: 'xxx.gltf', // 模型入口文件名
        zip: 'xxx.zip' // 压缩包文件名
    }),
    headers: {
        'x-orillusion-id': accessId,
        'x-orillusion-token': token,
        'Content-Type': 'application/json'
    },
    credentials: 'include',
    mode: 'cors'
})
// 返回模型对象和上传地址
let {model, uploadUrl} = await req.json()

// 2. 客户端使用 uploadUrl 地址上传 zip 原生 File 对象
let req = await fetch(uploadUrl, {
    method: 'PUT',
    body: zip,
    headers: {
        'Content-Type': 'application/octet-stream' // 必填项
    }
})
await req.json() // 等待上传完成
```

**错误提示：**

状态码
* 403

错误内容
* 无

## 获取模型地址
获取模型的访问地址

**请求地址：**

/api/signature/:model_id

**params:**
| 参数名 | 描述 |
| :----: | :----: |
| model_id | 模型的_id |

**请求方法：**  

GET

**请求头：**

请参照[公共请求头](/cdn/index.html#公共请求头)。

**请求参数：**
| 参数名 | 类型 | 描述 | 必填 |
| :----: | :----: |:----: |:----: |
| expire | number | 有效时长，单位秒 | 选填 |

**响应参数：**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| entry | string | 模型访问地址 |
| size | object | 模型大小信息 |
| signature | string | 模型访问签名，具体用法请参考下文使用说明 |
| time | Date | 发起时间戳 |
| expire | number | 有效时长 | |


**失败返回：**

无

**示例:**
```
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token'  -X GET 'https://3dhub.orillusion.com/api/signature/model_id?expire=100' 
```

**使用说明**
* 响应参数 `entry` 是模型的入口文件链接，例如：`https://object.orillusion.com/model/xxxxx/scene.gltf`

* CDN 上模型文件及其资源是无法直接访问的，需要添加 `signature` 信息进行鉴权后才有权限加载模型。目前有两种添加 `signature` 的方法，适用于不同的需求：
1. 可以对链接 url 添加 `cdn_sign` 的 query 参数，例如：`https://object.orillusion.com/model/xxxxx/scene.gltf?cdn_sign=xxxxxxx`。但请注意，因为签名是临时生成的，每次请求的链接地址都会不相同，所以无法在浏览器中进行缓存，相当于每次访问都需要重新通过网络加载所有模型资源，适合低频率或体积小的模型使用场景;
2. 也可以把在访问请求中添加自定义 header: `x-cdn-sign` 进行鉴权访问模型。由于不改变原始 url 链接，所以浏览器可以进行本地缓存，大幅降低二次加载的时间和流量，例如：
```ts
    let res = await fetch('https://object.orillusion.com/model/xxxxx/scene.gltf', {
        headers:{
            cdn_sign: 'xxxxxxxx'
        }
    })
    let gltf = await res.json()
```

* `gltf` 文件只是模型的入口文件，通常还需要加载相关的贴图等文件资源，需要对每一个请求都添加 `signature` 鉴权信息后才可以加载完整的模型。我们以 `Engine3D.res.loadGltf` 为例，用户需要设置 `onUrl` 回调或 `headers` 参数来动态加载 `gltf` 后续资源
```ts
// 以 url 形式进行鉴权
let model = await Engine3D.res.loadGltf('https://object.orillusion.com/model/xxxxx/scene.gltf?cdn_sign=xxxxxxx', {
    onUrl: url => url + '?cdn_sign=xxxxxxx'
})
// 以 header 形式进行鉴权
let model = await Engine3D.res.loadGltf('https://object.orillusion.com/model/xxxxx/scene.gltf', {
    headers: {
        cdn_sign: 'xxxxxxxx'
    }
})
```

**错误提示：**

状态码
* 403

错误内容
* no model：模型不存在
* model is not upload yet：模型文件未上传
* no auth：没有权限

## 获取模型信息
获取一个模型对象的详细信息

**请求地址：**

/api/model/:model_id

**params:**
| 参数名 | 描述 |
| :----: | :----: |
| model_id | 模型的_id |

**请求方法：**  

GET

**请求头：**

请参照[公共请求头](/cdn/index.html#公共请求头)。

**请求参数：**

无

**响应参数：**
请参考 [model结构](/cdn/models.html#model结构：) 说明


**失败返回：**

无

**示例:**
```
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token'  -X GET 'https://3dhub.orillusion.com/api/model/model_id' 
```

**错误提示：**

状态码
* 403

错误内容
* no model：模型不存在
* no auth：没有权限

## 更新模型
更新一个模型的信息

**请求地址：**

/api/model/:model_id

**params:**
| 参数名 | 描述 |
| :----: | :----: |
| model_id | 模型的_id |

**请求方法：**  

PUT

**请求头：**

请参照[公共请求头](/cdn/index.html#公共请求头)。

**请求参数：**
| 参数名 | 类型 | 描述 | 必填 |
| :----: | :----: |:----: |:----: |
| name | string | 模型名称 | 选填 |
| des | string | 模型描述 | 选填 |
| tags | array | 标签列表 | 选填 |
| screenshot | string | 封面地址 | 选填 |

**响应参数：**

请参考[model结构](/cdn/models.html#model结构：)说明

**失败返回：**

无

**示例:**
```
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token'  --data-binary '{“name”:"新的名称","des":"新的简介"}'  -X PUT  'https://3dhub.orillusion.com/api/model/model_id' 
```

**错误提示：**

状态码
* 403

错误内容
* no model：模型不存在
* no auth：没有权限

## 获取模型下载地址
获取一个模型下载地址

**请求地址：**

/api/download/:model_id

**params:**
| 参数名 | 描述 |
| :----: | :----: |
| model_id | 模型的_id |

**请求方法：**  

GET

**请求头：**

请参照[公共请求头](/cdn/index.html#公共请求头)。

**请求参数：**
| 参数名 | 类型 | 描述 | 必填 |
| :----: | :----: |:----: |:----: |
| expires | number | 下载网址过期时间，单位：秒，范围200秒至1小时，默认200秒 | 选填 |

**响应参数：**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| url | string | 用于下载的网址 |

**失败返回：**

无

**示例:**
```
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token' -X GET  'https://3dhub.orillusion.com/api/model/download/model_id' 
```

**错误提示：**

状态码
* 403

错误内容
* no model：模型不存在
* no auth：没有权限

### 删除模型
删除一个模型

**请求地址：**

/api/model/:model_id

**params:**
| 参数名 | 描述 |
| :----: | :----: |
| model_id | 模型的_id |

**请求方法：**  

DELETE

**请求头：**

请参照[公共请求头](/cdn/index.html#公共请求头)。

**请求参数：**

无

**响应参数：**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| msg | string | 成功返回:done |


**失败返回：**

无

**示例:**
```
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token' -X DELETE  'https://3dhub.orillusion.com/api/model/model_id' 
```

**错误提示：**

状态码
* 403

错误内容
* no model：模型不存在
* no auth：没有权限

## 查询模型状态
查询模型文件在云存储中的处理情况

**请求地址：**

/api/check/:model_id

**params:**
| 参数名 | 描述 |
| :----: | :----: |
| model_id | 模型的_id |

**请求方法：**  

GET

**请求头：**

请参照[公共请求头](/cdn/index.html#公共请求头)。

**请求参数：**

无


**响应参数：**

请参考 [model结构](/cdn/models.html#model结构：) 说明

**失败返回：**

无

**示例:**
```
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token' -X GET 'https://3dhub.orillusion.com/api/check/model_id' 
```

**错误提示：**

状态码
* 403

错误内容
* no model：模型不存在
* no auth：没有权限
* on progressing：处理中

## 生成模型封面地址
生成用于上传模型封面的地址

**请求地址：**

/api/screenshot/:model_id

**params:**
| 参数名 | 描述 |
| :----: | :----: |
| model_id | 模型的_id |

**请求方法：**  

POST

**请求头：**

请参照[公共请求头](/cdn/index.html#公共请求头)。

**请求参数：**

无

**响应参数：**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| uploadUrl | string | 用于上传文件的url |
| url | string | 可访问地址 |

**使用说明：**
* 每个模型只可以设置一个封面图片，新的上传会覆盖之前的封面图片；
* 调用该接口获得的 uploadUrl 用于上传文件地址，上传方法：
```ts
// 1. 申请创建新的截图
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
// 返回截图地址和上传地址
let {uploadUrl, url} = await req.json()

// 2. 客户端使用 uploadUrl 地址上传截图文件
let req = await fetch(uploadUrl, {
    method: 'PUT',
    body: screenshot, // Blob 或 File
    headers: {
        'Cache-Control': 'public, max-age=31536000' // 必填
    }
})
await req.json() // 等待上传完成
```
**失败返回：**

无

**示例:**
```
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token' -X POST  'https://3dhub.orillusion.com/api/screenshot/model_id' 
```

**错误提示：**

状态码
* 403

错误内容
* no model：模型不存在
* no auth：没有权限