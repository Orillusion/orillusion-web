---
editLink: false
---

# Scene API
This section mainly covers reading and updating configuration information.

##  Get configuration
Get the configuration information of a model file.

**Request URL:**

/api/scene/:model_id

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
| scene | object | Configuration information |

#### **scene structure:**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| scene | object | Scene information |
| camera | object | Camera information |
| model | object | Transform information |
| lights | object[] | Light source information |
| shadow | object | Shadow information |
| globalFog | object | Fog information |
| bloomPost | object | Bloom effect information |
| gi | object | Global illumination information |

#### **scene**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| exposure | number | Exposure |
| roughness | number | Background blur |
| floor | boolean | Whether to show the floor |
| bgColor | string | Solid background color of the scene |
| bgSkyUrl | string | Skybox background panorama |

#### **camera**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| fov | number | FoV |
| x | number | Camera x coordinate |
| y | number | Camera y coordinate |
| z | number | Camera z coordinate |
| targetX | number | x coordinate of the camera controller target |
| targetY | number | y coordinate of the camera controller target |
| targetZ | number | z coordinate of the camera controller target |

#### **model**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| x | number | Model x coordinate |
| y | number | Model y coordinate |
| z | number | Model z coordinate |
| rotationX | number | Model rotation on the x axis |
| rotationY | number | Model rotation on the y axis |
| rotationZ | number | Model rotation on the z axis |
| scaleX | number | Model scale on the x axis |
| scaleY | number | Model scale on the y axis |
| scaleZ | number | Model scale on the z axis |

#### **light**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| enable | boolean | Whether to enable this lighting component |
| type | number | Light source type. 0: unknown; 1: point light; 2: directional light; 3: spotlight |
| x | number | Light source x coordinate |
| y | number | Light source y coordinate |
| z | number | Light source z coordinate |
| rotationX | number | Light source rotation on the x axis |
| rotationY | number | Light source rotation on the y axis |
| rotationZ | number | Light source rotation on the z axis |
| castShadow | boolean | Whether to cast shadows; currently only effective for directional lights |
| intensity | number | Light source intensity |
| color | string | Light source color, in rgb format |
| at | number | Lighting exponential attenuation coefficient |
| radius | number | Lighting radius |
| range | number | Maximum lighting distance |
| innerAngle | number | Inner cone angle; the spotlight emits light within this angle |
| outerAngle | number | Outer cone angle; light gradually attenuates to 0 between the inner and outer angles |

#### **shadow**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| enable | boolean | Whether to enable shadows |
| shadowBias | number | Shadow bias; setting a small offset value helps avoid shadow artifacts and reduces striping or moiré patterns |
| shadowBound | number | Shadow area range |
| shadowNear | number | Shadow near plane |
| shadowFar | number | Shadow far plane |

#### **globalFog**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| enable | boolean | Whether to enable |
| fogType | number | Fog type. Linear: Liner 0; exponential: Exp 1; exponential squared: Exp2 2 |
| start | number | Given an object's distance from the camera, the fog density is linearly interpolated between start and end |
| end | number | Given an object's distance from the camera, the fog density is linearly interpolated between start and end |
| height | number | Sets the effect of height on the fog |
| density | number | Additional fog density coefficient under the exponential / exponential squared fog types |
| ins | number | Sets the effect of height on the fog (works together with height) |
| fogColorHex | number | Fog color |

#### **bloomPost**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| enable | boolean | Whether to enable |
| `downSampleStep` | `number` | Number of downsampling passes |
| `downSampleBlurSize` | `number` | Downsampling blur range |
| `downSampleBlurSigma` | `number` | Downsampling blur exponent |
| `upSampleBlurSize` | `number` | Number of upsampling passes |
| `upSampleBlurSigma` | `number` | Upsampling blur range |
| `luminanceThreshole` | `number` | Bloom highlight area threshold |
| `bloomIntensity` | `boolean` | Bloom final brightness gain coefficient |

#### **gi**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| enable | boolean | Whether to enable |
| indirectIntensity | number | Lighting intensity of indirect light |
| bounceIntensity | number | Lighting intensity of bounced light |


**Failure response:**
| Parameter | Type | Description |
| :----: | :----: |:----: |
| none | string | Error description |

**Example:**
```
curl-H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token' -X GET 'https://3dhub.orillusion.com/api/scene/model_id' 
```

**Error messages:**

Status code
* 403

Error content
* no model: no model
* no auth: no permission

## Update configuration
Update the configuration information corresponding to a model file.

**Request URL:**

/api/scene/:model_id

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
| scene | object | Scene information; see [scene structure](#scene) | Optional |
| camera | object | Camera information; see [camera structure](#camera) | Optional |
| model | object | Model information; see [model structure](#model) | Optional |
| lights | object[] | Light source information; see [lights structure](#lights) | Optional |
| shadow | object | Shadow information; see [shadow structure](#shadow) | Optional |
| render | object | Render information; see [render structure](#render) | Optional |
| globalFog | object | Fog information; see [globalFog structure](#globalfog) | Optional |
| bloomPost | object | Bloom effect information; see [bloomPost structure](#bloompost) | Optional |
| gi | object | Global illumination information; see [gi structure](#gi) | Optional |

**Response parameters:**

See the configuration information structure


**Failure response:**
None

**Example:**
```
curl-H 'Content-Type: application/json' -H 'x-orillusion-id:accessId' -H 'x-orillusion-token:token'  --data-binary '{"model":"{x:10,y:10,z:10}"}'  -X PUT  'https://3dhub.orillusion.com/api/scene/model_id' 
```

**Error messages:**

Status code
* 403

Error content
* no model: model does not exist
* no auth: no permission
