---
editLink: false
---

# 分享 API

## 获取分享列表
获取当前用户下分享列表

**请求地址：**

/api/links/

**请求方法：**

GET  

**请求头：**

请参照[公共请求头](/cdn/index.html#公共请求头)。

**请求参数：**
| 参数名 | 类型 | 描述 | 必填 |
| :----: | :----: | ---- |:----: |
| sort | string | 排序规则，viewer：浏览数，_createTime：创建时间， 默认值：_createTime | 选填 |
| limit | number | 指定返回link最大数，取值范围:100至100，默认值：100 | 选填 |
| skip | number | 指定从skip之后返回link，可以和limit配合实现分页效果，默认值：0  | 选填 |
| search | string | 限定返回名称中包含search的link | 选填 |

**响应参数：**

| 参数名 | 类型 | 描述 |
| :----: | :----: | ---- |
| links | array<`link`> | 包含连接对象的数组，link对象结构请参照以下[link结构](/cdn/links.html#link结构：) 的link结构部分 |
| models | array<`model`> | 包含模型对象的数组，model对象结构请参照 [model结构](/cdn/models.html#model结构：) 的model结构部分 |
| limit | number | 上传limit参数的回传 |
| skip | number | 上传skip参数的回传 |
| total | number | 查询到符合条件的所有models的数目，配合limit，skip可实现页面跳转效果 |

### **link结构**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| _id | string | 链接id  |
| user | string | 对应用户的id |
| model | string | 对应模型的id |
| auth | string | 访问密码，无密码则公开访问 |
| expire | number | 过期时间，单位秒，0：永久 |
| onetime | boolean | 阅后即焚，查看一次后链接即失效 |
| download | boolean | 允许下载 |
| viewer | number | 访问次数 |
| des | string | 备注说明 |


**失败返回：**

无

**示例:**
```
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token' -X GET  'https://3dhub.orillusion.com/api/links' 
```

**错误提示：**

状态码
* 无

错误内容
* 无

## 获取模型分享列表
获取指定模型下的分享列表

**请求地址：**

/api/links/:model_id

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

| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| - | array`<link>` | 分享列表，元素参考 [link结构](/cdn/links.html#link结构：) |


**失败返回：**

无

**示例:**
```
curl-H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token' -X GET  'https://3dhub.orillusion.com/api/links/model_id' 
```

**错误提示：**

状态码
* 无

错误内容
* 无

## 创建分享
创建一个共享链接

**请求地址：**

/api/link

**请求方法：**  

POST

**请求头：**

请参照[公共请求头](/cdn/index.html#公共请求头)。

**请求参数：**
| 参数名 | 类型 | 描述 | 必填 |
| :----: | :----: |:----: |:----: |
| model | string | 模型Id | 必填 |

**响应参数：**

参考 [link结构](/cdn/links.html#link结构：)

**失败返回：**

| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| 无 | string | 错误描述 |

**示例:**
```
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token'  -X POST --data-binary '{"model":"model_id"}'  'https://3dhub.orillusion.com/api/link' 
```

**使用说明**
* 最多可创建20个分享连接

**错误提示：**

状态码
* 403

错误内容
* no model：没有该模型信息
* no auth：没有权限
* link count limited：分享数超过限制

## 获取分享信息
获取一个共享链接的信息

**请求地址：**

/api/link/:link_id

**params:**
| 参数名 | 描述 |
| :----: | :----: |
| link_id | 分享链接的_id |

**请求方法：** 

GET

**请求头：**

请参照[公共请求头](/cdn/index.html#公共请求头)。

**请求参数：**

无

**响应参数：**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| link | object | 详情请查看 [link结构](/cdn/links.html#link结构：)  |
| model | object | 详情请查看 [model结构](/cdn/models.html#model结构：)  |
| sign | object | 详情请查看 [signature API](/cdn/models.html#api-signature-model-id) 返回参数 |
| setting | object | 模型对应的配置信息 |


**失败返回：**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| 无 | string | 错误描述 |

**示例:**
```
curl-H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token' -X GET  'https://3dhub.orillusion.com/api/link/link_id' 
```

**错误提示：**

状态码
* 403

错误内容
* no link：没有找到连接
* link expires：超时时间太短
* require auth：没有权限
* link count limited：分享数超过限制
* no model：无效的模型


## 修改共享
修改一个共享链接

**请求地址：**

/api/link/:link_id

**params:**
| 参数名 | 描述 |
| :----: | :----: |
| link_id | 分享链接的_id |

**请求方法：**  

PUT

**请求头：**

请参照[公共请求头](/cdn/index.html#公共请求头)。

**请求参数：**
| 参数名 | 类型 | 描述 | 必填 |
| :----: | :----: |:----: | :----: |
| auth | string | 访问密码，无密码则公开访问 | 选填 |
| expire | number | 过期时间，单位秒，0：永久 | 选填 |
| onetime | boolean | 阅后即焚，访问1次后失效，默认值：false | 选填 |
| download | boolean | 是否允许下载，默认值：false | 选填 |
| des | string | 备注说明 | 选填 |

**响应参数：**

无


**失败返回：**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| 无 | string | 错误描述 |

**示例:**
```
curl-H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token' -X PUT --data-binary '{"des":"备注"}' 'https://3dhub.orillusion.com/api/link/link_id' 
```

**错误提示：**

状态码
* 403

错误内容
* no link：没有找到连接
* no auth：没有权限

## 删除共享
删除一个共享链接

**请求地址：**

/api/link/:link_id

**params:**
| 参数名 | 描述 |
| :----: | :----: |
| link_id | 分享链接的_id |

**请求方法：**  

DELETE

**请求头：**

请参照[公共请求头](/cdn/index.html#公共请求头)。

**请求参数：**

无

**响应参数：**

无

**失败返回：**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| 无 | string | 错误描述 |

**示例:**
```
curl-H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token' -X DELETE 'https://3dhub.orillusion.com/api/link/link_id' 
```

**错误提示：**

状态码
* 403

错误内容
* no link：没有找到连接
* no auth：没有权限


## 获取共享模型
获取共享连接所对应的模型源文件

**请求地址：**

/api/link/download/:link_id

**params:**
| 参数名 | 描述 |
| :----: | :----: |
| link_id | 分享链接的_id |

**请求方法：**  

GET

**请求头：**

请参照[公共请求头](/cdn/index.html#公共请求头)。

**请求参数：**
| 参数名 | 类型 | 描述 | 必填 |
| :----: | :----: |:----: | :----: |
| auth | string | 密码 | 选填 |

**响应参数：**
| 参数名 | 类型 | 描述 |
| :----: | :----: | :----: |
| url | string | 下载连接 |


**失败返回：**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| 无 | string | 错误描述 |

**示例:**
```
curl -H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token'  -X GET 'https://3dhub.orillusion.com/api/link/download/link_id' 
```

**错误提示：**

状态码
* 403

错误内容
* no link：没有找到连接
* link expires：已超时
* no auth：没有权限
* require auth：密码验证失败