---
editLink: false
---
# Orillusion 3DHub CDN APIs
3DHub CDN 是一个 REST 服务，除了通过网页客户端进行管理，您还可以使用 REST API 向 3DHub 发起请求。

## 鉴权
系统会给所有用户分配一套 `AccessKey` 鉴权秘钥，包含 `accessId` 和 `accessSecret`。为了保证数据安全，所有 API 接口调用需要验证发送者秘钥。鉴权成功后，才可以操作相应的 CDN 资源。

### 鉴权方式
您可以直接发起 REST API 请求，通过以下两种认证方式进行鉴权：
- 直接使用 AccessKey 发起请求
在 header 中直接提供用户 `accessId` + `accessSecret` 进行鉴权。建议在安全的服务器环境中使用，不要泄露给客户端。请注意保护 `accessSecret`，可能造成数据泄露，如果泄露请及时注销 AccessKey

- 使用 `token` 临时凭证发起请求。
用户可以先通过 `accessId` + `accessSecret` 向 CDN 服务器请求一个临时的 token 凭证。然后使用该临时 token 在规定时间内访问 CDN 资源。 临时凭证无需泄露用户长期密钥，更加安全可靠。适用于在客户端/前端程序中请求 CDN 资源。使用流程大致如下：
1. 应用服务器先使用 `accessSecret` 在服务器端向 CDN 服务器请求一个临时 `token` 并返回给客户端。
2. 客户端可以缓存该 `token`, 并在规定的时间内，在 header 使用 `accessId` + `token` 的形式进行鉴权访问 CDN 资源。
3. 当临时凭证失效后，客户端再次向 App 服务器申请临时访问凭证，应用服务器可以再次通过 `accessSecret` 向 CDN 服务器请求新的临时 `token` 并返回给客户端使用。

### 公共请求头
未做特殊说明每个api默认必须包含以下 header 数据，`accessSecret` 优先级高于 `token`。

| 参数名 | 类型 | 描述 | 必填 |
| :----: | :----: | :----: | :----: |
| Content-Type | string | application/json | 必填 |
| x-orillusion-id | string | accessId | 必填 |
| x-orillusion-key | string | accessSecret | 若 `token` 为空则必填 |
| x-orillusion-token | string | 临时 token 凭证 | 若 `accessSecret` 为空则必填 |

## 获得令牌
获得或更新 临时令牌。

**请求地址：**

/api/refreshToken

**请求方法：**  

GET

**请求头：**

请参照[公共请求头](/cdn/index.html#公共请求头)。注意：该请求必须使用 `accessSecret` 进行鉴权，无法使用 `token` 请求。


**请求参数：**
| 参数名 | 类型 | 描述 | 必填 |
| :----: | :----: |:----: | :----: |
| expire | number | 超时时长，单位毫秒，最长24小时，默认值：15分钟 | 选填 |

**响应参数：**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| expire | number | 返回超时时长，单位毫秒 |
| token | string | 令牌 |

**失败返回：**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| 无 | string | 错误描述 |

**示例:**
```
# 只能以accessId + accessSecret 方式认证
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-key:accessSecret' 'https://3dhub.orillusion.com/refreshToken?expire=900000'
```

**使用说明:**
* 获得token后请自行保存，后续访问其它 API 中可使用 `accessId` + `token` 方式认证。

**错误提示：**

状态码
* 403

错误内容
* no accessSecret：没有使用 accessSecret 进行认证


## 获取秘钥
获得当前登陆用户的accessSecret。

**请求地址：**

/api/accesskey

**请求方法：**  

GET

**请求头：**

请参照[公共请求头](/cdn/index.html#公共请求头)。注意：该请求必须使用 `accessSecret` 进行鉴权，无法使用 `token` 请求。

**请求参数：**

无

**响应参数：**
| 参数名 | 类型 | 描述 |
| :----: | :----: | :----: |
| secret | string | AccessSecret |

**失败返回：**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| 无 | string | 错误描述 |

**示例:**
```
# 只能以accessId + accessSecret 方式认证
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-key:accessSecret' 'https://3dhub.orillusion.com/api/accesskey' 
```

**错误提示：**

状态码
* 403

错误内容
* no auth：未登陆
* require verified：邮箱未验证
* no accessSecret：没有使用 accessSecret 进行认证

## 更换秘钥
删除并生成新的accessSecret

**请求地址：**

/api/accesskey

**请求方法：**  

DELETE

**请求头：**

请参照[公共请求头](/cdn/index.html#公共请求头)。

**请求参数：**

无

**响应参数：**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| result | string | 操作成功返回:ok |

**失败返回：**
| 参数名 | 类型 | 描述 |
| :----: | :----: | :----: |
| 无 | string | 错误描述 |

**示例:**
```
# 只能以accessId + accessSecret 方式认证
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-key:accessSecret' -X DELETE  'https://3dhub.orillusion.com/api/accesskey' 
```

**错误提示：**

状态码
* 403

错误内容
* no auth：未登陆
* require verified：邮箱未验证
* no accessSecret：没有使用 accessSecret 进行认证
