---
editLink: false
---

# 场景 API
本节主要包含配置信息的读取与更新

##  获取配置
获取一个模型文件的配置信息

**请求地址：**

/api/scene/:model_id

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
| scene | object | 配置信息 |

#### **scene结构：**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| scene | object | 场景信息 |
| camera | object | 相机信息 |
| model | object | 变换信息  |
| lights | object[] | 光源信息 |
| shadow | object | 阴影信息 |
| globalFog | object | 雾信息 |
| bloomPost | object | 辉光特效信息 |
| gi | object | 全局光照信息 |

#### **scene**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| exposure | number | 曝光 |
| roughness | number | 背景模糊 |
| floor | boolean | 是否显示地板 |
| bgColor | string | 场景背景纯色 |
| bgSkyUrl | string | 天空盒背景合景图 |

#### **camera**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| fov | number | FoV |
| x | number | 相机x坐标 |
| y | number | 相机y坐标 |
| z | number | 相机z坐标 |
| targetX | number | 相机控制器目标对象x坐标 |
| targetY | number | 相机控制器目标对象y坐标 |
| targetZ | number | 相机控制器目标对象z坐标 |

#### **model**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| x | number | 模型x坐标 |
| y | number | 模型y坐标 |
| z | number | 模型z坐标 |
| rotationX | number | 模型在x方向上的旋转 |
| rotationY | number | 模型在y方向上的旋转 |
| rotationZ | number | 模型在z方向上的旋转 |
| scaleX | number | 模型在x方向上的缩放 |
| scaleY | number | 模型在y方向上的缩放 |
| scaleZ | number | 模型在z方向上的缩放 |

#### **light**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| enable | boolean | 是否启用该光照组件 |
| type | number | 光源类型，0：未知，1：点光源，2：平行光，3：聚光灯 |
| x | number | 光源的x坐标 |
| y | number | 光源的x坐标 |
| z | number | 光源的x坐标 |
| rotationX | number | 光源在x方向上的旋转 |
| rotationY | number | 光源在y方向上的旋转 |
| rotationZ | number | 光源在z方向上的旋转 |
| castShadow | boolean | 是否产生阴影，目前仅平行光有效 |
| intensity | number | 光源强度 |
| color | string | 光源颜色，rgb格式 |
| at | number | 光照指数衰减系数 |
| radius | number | 光照半径 |
| range | number | 光照最远距离 |
| innerAngle | number | 光锥内切角，聚光在小于这个角度的范围内有光线 |
| outerAngle | number | 光锥外切角，光线会在内切角到外切角的范围内逐步衰减到0 |

#### **shadow**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| enable | boolean | 是否启用阴影 |
| shadowBias | number | 阴影偏移值，一般设置一个小数值的偏移量可以避免阴影失真，减少条纹或波纹图案 |
| shadowBound | number | 阴影区域范围 |
| shadowNear | number | 阴影近截面 |
| shadowFar | number | 阴影远截面 |

#### **globalFog**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| enable | boolean | 是否启用 |
| fogType | number | 雾的类型：线性:Liner 0 ,指数:Exp 1,指数平方: Exp2: 2 |
| start | number | 设定物体距离相机为distance，则在start和end区间内，雾的浓度被线性插值 |
| end | number | 设定物体距离相机为distance，则在start和end区间内，雾的浓度被线性插值 |
| height | number | 设置高度对雾的影响 |
| density | number | 指数/指数平方雾类型下，雾浓度系数加成 |
| ins | number | 设置高度对于雾的影响（与height共同作用） |
| fogColorHex | number | 雾的颜色 |

#### **bloomPost**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| enable | boolean | 是否启用 |
| blurX | number | 屏幕横向模糊半径 |
| blurY | number | 屏幕纵向模糊半径 |
| bloomStrength | number | 强度设置 |
| bloomRadius | number | 亮度设置 |

#### **gi**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| enable | boolean | 是否启用 |
| indirectIntensity | number | 间接光的光照强度 |
| bounceIntensity | number | 反射光的光照强度 |


**失败返回：**
| 参数名 | 类型 | 描述 |
| :----: | :----: |:----: |
| 无 | string | 错误描述 |

**示例:**
```
curl-H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token' -X GET 'https://3dhub.orillusion.com/api/scene/model_id' 
```

**错误提示：**

状态码
* 403

错误内容
* no model：没有模型
* no auth：没有权限

## 更新配置
更新一个模型文件对应的配置信息

**请求地址：**

/api/scene/:model_id

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
| scene | object | 场景信息，请参考 [scene结构](#scene) | 选填 |
| camera | object | 相机信息，请参考 [camera结构](#camera) | 选填 |
| model | object | 模型信息，请参考 [model结构](#model)  | 选填 |
| lights | object[] | 光源信息，请参考 [lights结构](#lights) | 选填 |
| shadow | object | 阴影信息，请参考 [shadow结构](#shadow) | 选填 |
| render | object | 渲染信息，请参考 [render结构](#render) | 选填 |
| globalFog | object | 雾信息，请参考 [globalFog结构](#globalfog) | 选填 |
| bloomPost | object | 辉光特效信息，请参考 [bloomPost结构](#bloompost) | 选填 |
| gi | object | 全局光照信息，请参考 [gi结构](#gi) | 选填 |

**响应参数：**

请参照配置信息结构


**失败返回：**
无

**示例:**
```
curl-H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token'  --data-binary '{"model":"{x:10,y:10,z:10}"}'  -X PUT  'https://3dhub.orillusion.com/api/scene/model_id' 
```

**错误提示：**

状态码
* 403

错误内容
* no model：模型不存在
* no auth：没有权限