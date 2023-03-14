# Class: PavementMaterial

CustomMaterial 材质

## Hierarchy

- `PhysicMaterial`

  ↳ **`PavementMaterial`**


### Properties

- [name](PavementMaterial.md#name)
- [uuid](PavementMaterial.md#uuid)
- [isPassMaterial](PavementMaterial.md#ispassmaterial)
- [receiveEnv](PavementMaterial.md#receiveenv)
- [renderPasses](PavementMaterial.md#renderpasses)
- [transparent](PavementMaterial.md#transparent)
- [enable](PavementMaterial.md#enable)
- [renderShader](PavementMaterial.md#rendershader)

### Accessors

- [shaderState](PavementMaterial.md#shaderstate)
- [tintColor](PavementMaterial.md#tintcolor)
- [baseMap](PavementMaterial.md#basemap)
- [normalMap](PavementMaterial.md#normalmap)
- [emissiveColor](PavementMaterial.md#emissivecolor)
- [emissiveIntensity](PavementMaterial.md#emissiveintensity)
- [alphaCutoff](PavementMaterial.md#alphacutoff)
- [irradianceMap](PavementMaterial.md#irradiancemap)
- [irradianceDepthMap](PavementMaterial.md#irradiancedepthmap)
- [baseColor](PavementMaterial.md#basecolor)
- [sort](PavementMaterial.md#sort)
- [shaderID](PavementMaterial.md#shaderid)
- [blendMode](PavementMaterial.md#blendmode)
- [frontFace](PavementMaterial.md#frontface)
- [doubleSide](PavementMaterial.md#doubleside)
- [cullMode](PavementMaterial.md#cullmode)
- [depthBias](PavementMaterial.md#depthbias)
- [depthCompare](PavementMaterial.md#depthcompare)
- [envMap](PavementMaterial.md#envmap)
- [shadowMap](PavementMaterial.md#shadowmap)
- [uvTransform\_1](PavementMaterial.md#uvtransform_1)
- [uvTransform\_2](PavementMaterial.md#uvtransform_2)
- [materialF0](PavementMaterial.md#materialf0)
- [roughness](PavementMaterial.md#roughness)
- [metallic](PavementMaterial.md#metallic)
- [ao](PavementMaterial.md#ao)
- [metallic\_min](PavementMaterial.md#metallic_min)
- [metallic\_max](PavementMaterial.md#metallic_max)
- [roughness\_min](PavementMaterial.md#roughness_min)
- [roughness\_max](PavementMaterial.md#roughness_max)
- [normalScale](PavementMaterial.md#normalscale)
- [maskMap](PavementMaterial.md#maskmap)
- [aoMap](PavementMaterial.md#aomap)
- [clearCoatRoughnessMap](PavementMaterial.md#clearcoatroughnessmap)
- [brdfLUT](PavementMaterial.md#brdflut)
- [emissiveMap](PavementMaterial.md#emissivemap)
- [envIntensity](PavementMaterial.md#envintensity)
- [ior](PavementMaterial.md#ior)
- [clearcoatFactor](PavementMaterial.md#clearcoatfactor)
- [clearcoatRoughnessFactor](PavementMaterial.md#clearcoatroughnessfactor)
- [clearcoatWeight](PavementMaterial.md#clearcoatweight)
- [clearcoatColor](PavementMaterial.md#clearcoatcolor)

### Methods

- [useDefine](PavementMaterial.md#usedefine)
- [getTextures](PavementMaterial.md#gettextures)
- [setDefine](PavementMaterial.md#setdefine)
- [addPass](PavementMaterial.md#addpass)
- [removePass](PavementMaterial.md#removepass)
- [destroy](PavementMaterial.md#destroy)
- [clone](PavementMaterial.md#clone)
- [serialization](PavementMaterial.md#serialization)
- [unSerialization](PavementMaterial.md#unserialization)
- [setShader](PavementMaterial.md#setshader)
- [getShader](PavementMaterial.md#getshader)
- [debug](PavementMaterial.md#debug)
- [useCleanCoat](PavementMaterial.md#usecleancoat)

### Constructors

- [constructor](PavementMaterial.md#constructor)

## Properties

### name

• **name**: `string`

材质名称

#### Inherited from

PhysicMaterial.name

#### Defined in

[src/engine/materials/MaterialBase.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L26)

___

### uuid

• **uuid**: `string`

材质唯一标识符

#### Inherited from

PhysicMaterial.uuid

#### Defined in

[src/engine/materials/MaterialBase.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L31)

___

### isPassMaterial

• **isPassMaterial**: `boolean` = `false`

是否为PassMaterial

#### Inherited from

PhysicMaterial.isPassMaterial

#### Defined in

[src/engine/materials/MaterialBase.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L35)

___

### receiveEnv

• **receiveEnv**: `boolean` = `true`

是否接收Env

#### Inherited from

PhysicMaterial.receiveEnv

#### Defined in

[src/engine/materials/MaterialBase.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L44)

___

### renderPasses

• **renderPasses**: `Map`<`RendererType`, [`MaterialPass`](MaterialPass.md)[]\>

#### Inherited from

PhysicMaterial.renderPasses

#### Defined in

[src/engine/materials/MaterialPass.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L7)

___

### transparent

• **transparent**: `boolean` = `false`

是否透明

#### Inherited from

PhysicMaterial.transparent

#### Defined in

[src/engine/materials/MaterialPass.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L13)

___

### enable

• **enable**: `boolean` = `true`

材质是否启用

#### Inherited from

PhysicMaterial.enable

#### Defined in

[src/engine/materials/MaterialPass.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L18)

___

### renderShader

• **renderShader**: [`RenderShader`](RenderShader.md)

#### Inherited from

PhysicMaterial.renderShader

#### Defined in

[src/engine/materials/MaterialPass.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L20)

## Accessors

### shaderState

• `get` **shaderState**(): `ShaderState`

#### Returns

`ShaderState`

#### Inherited from

PhysicMaterial.shaderState

#### Defined in

[src/engine/materials/MaterialBase.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L49)

• `set` **shaderState**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `ShaderState` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.shaderState

#### Defined in

[src/engine/materials/MaterialBase.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L53)

___

### tintColor

• `get` **tintColor**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Inherited from

PhysicMaterial.tintColor

#### Defined in

[src/engine/materials/MaterialBase.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L57)

• `set` **tintColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.tintColor

#### Defined in

[src/engine/materials/MaterialBase.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L61)

___

### baseMap

• `get` **baseMap**(): [`Texture`](Texture.md)

获取基础贴图

#### Returns

[`Texture`](Texture.md)

#### Inherited from

PhysicMaterial.baseMap

#### Defined in

[src/engine/materials/MaterialBase.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L89)

• `set` **baseMap**(`texture`): `void`

设置基础贴图

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.baseMap

#### Defined in

[src/engine/materials/MaterialBase.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L82)

___

### normalMap

• `get` **normalMap**(): [`Texture`](Texture.md)

获取法线贴图

#### Returns

[`Texture`](Texture.md)

#### Inherited from

PhysicMaterial.normalMap

#### Defined in

[src/engine/materials/MaterialBase.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L96)

• `set` **normalMap**(`value`): `void`

设置法线贴图

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.normalMap

#### Defined in

[src/engine/materials/MaterialBase.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L103)

___

### emissiveColor

• `get` **emissiveColor**(): [`Color`](Color.md)

获取发光颜色

#### Returns

[`Color`](Color.md)

#### Inherited from

PhysicMaterial.emissiveColor

#### Defined in

[src/engine/materials/MaterialBase.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L118)

• `set` **emissiveColor**(`value`): `void`

设置发光颜色

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.emissiveColor

#### Defined in

[src/engine/materials/MaterialBase.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L125)

___

### emissiveIntensity

• `get` **emissiveIntensity**(): `number`

获取发光强度

#### Returns

`number`

#### Inherited from

PhysicMaterial.emissiveIntensity

#### Defined in

[src/engine/materials/MaterialBase.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L145)

• `set` **emissiveIntensity**(`value`): `void`

设置发光强度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.emissiveIntensity

#### Defined in

[src/engine/materials/MaterialBase.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L135)

___

### alphaCutoff

• `get` **alphaCutoff**(): `number`

获取alphaCutoff，通道透明阈值参数

#### Returns

`number`

#### Inherited from

PhysicMaterial.alphaCutoff

#### Defined in

[src/engine/materials/MaterialBase.ts:199](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L199)

• `set` **alphaCutoff**(`value`): `void`

设置alphaCutoff，通道透明阈值参数

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.alphaCutoff

#### Defined in

[src/engine/materials/MaterialBase.ts:206](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L206)

___

### irradianceMap

• `get` **irradianceMap**(): [`Texture`](Texture.md)

获取irradiance发光贴图

#### Returns

[`Texture`](Texture.md)

#### Inherited from

PhysicMaterial.irradianceMap

#### Defined in

[src/engine/materials/MaterialBase.ts:213](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L213)

• `set` **irradianceMap**(`value`): `void`

设置irradiance发光贴图

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.irradianceMap

#### Defined in

[src/engine/materials/MaterialBase.ts:220](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L220)

___

### irradianceDepthMap

• `get` **irradianceDepthMap**(): [`Texture`](Texture.md)

获取发光深度贴图

#### Returns

[`Texture`](Texture.md)

#### Inherited from

PhysicMaterial.irradianceDepthMap

#### Defined in

[src/engine/materials/MaterialBase.ts:229](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L229)

• `set` **irradianceDepthMap**(`value`): `void`

设置发光深度贴图

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.irradianceDepthMap

#### Defined in

[src/engine/materials/MaterialBase.ts:236](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L236)

___

### baseColor

• `get` **baseColor**(): [`Color`](Color.md)

获取基础颜色

#### Returns

[`Color`](Color.md)

#### Inherited from

PhysicMaterial.baseColor

#### Defined in

[src/engine/materials/MaterialBase.ts:245](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L245)

• `set` **baseColor**(`value`): `void`

设置基础颜色

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.baseColor

#### Defined in

[src/engine/materials/MaterialBase.ts:252](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L252)

___

### sort

• `get` **sort**(): `number`

#### Returns

`number`

#### Inherited from

PhysicMaterial.sort

#### Defined in

[src/engine/materials/MaterialPass.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L26)

• `set` **sort**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.sort

#### Defined in

[src/engine/materials/MaterialPass.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L30)

___

### shaderID

• `get` **shaderID**(): `string`

#### Returns

`string`

#### Inherited from

PhysicMaterial.shaderID

#### Defined in

[src/engine/materials/MaterialPass.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L34)

• `set` **shaderID**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.shaderID

#### Defined in

[src/engine/materials/MaterialPass.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L38)

___

### blendMode

• `get` **blendMode**(): [`BlendMode`](../enums/BlendMode.md)

获取混合模式

#### Returns

[`BlendMode`](../enums/BlendMode.md)

#### Inherited from

PhysicMaterial.blendMode

#### Defined in

[src/engine/materials/MaterialPass.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L56)

• `set` **blendMode**(`value`): `void`

设置混合模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlendMode`](../enums/BlendMode.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.blendMode

#### Defined in

[src/engine/materials/MaterialPass.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L63)

___

### frontFace

• `get` **frontFace**(): `GPUFrontFace`

获取面朝向

#### Returns

`GPUFrontFace`

#### Inherited from

PhysicMaterial.frontFace

#### Defined in

[src/engine/materials/MaterialPass.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L72)

• `set` **frontFace**(`value`): `void`

设置面朝向

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFrontFace` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.frontFace

#### Defined in

[src/engine/materials/MaterialPass.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L79)

___

### doubleSide

• `get` **doubleSide**(): `boolean`

获取是否为双面模式

#### Returns

`boolean`

#### Inherited from

PhysicMaterial.doubleSide

#### Defined in

[src/engine/materials/MaterialPass.ts:86](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L86)

• `set` **doubleSide**(`value`): `void`

设置是否为双面模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.doubleSide

#### Defined in

[src/engine/materials/MaterialPass.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L93)

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

获取剔除模式

#### Returns

`GPUCullMode`

#### Inherited from

PhysicMaterial.cullMode

#### Defined in

[src/engine/materials/MaterialPass.ts:100](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L100)

• `set` **cullMode**(`value`): `void`

设置剔除模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCullMode` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.cullMode

#### Defined in

[src/engine/materials/MaterialPass.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L107)

___

### depthBias

• `get` **depthBias**(): `number`

#### Returns

`number`

#### Inherited from

PhysicMaterial.depthBias

#### Defined in

[src/engine/materials/MaterialPass.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L111)

• `set` **depthBias**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.depthBias

#### Defined in

[src/engine/materials/MaterialPass.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L115)

___

### depthCompare

• `get` **depthCompare**(): `GPUCompareFunction`

获取剔除模式

#### Returns

`GPUCompareFunction`

#### Inherited from

PhysicMaterial.depthCompare

#### Defined in

[src/engine/materials/MaterialPass.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L122)

• `set` **depthCompare**(`value`): `void`

设置剔除模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.depthCompare

#### Defined in

[src/engine/materials/MaterialPass.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L129)

___

### envMap

• `set` **envMap**(`texture`): `void`

设置材质环境贴图

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Overrides

PhysicMaterial.envMap

#### Defined in

[src/engine/materials/PavementMaterial.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PavementMaterial.ts#L56)

___

### shadowMap

• `set` **shadowMap**(`texture`): `void`

设置材质阴影贴图

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Overrides

PhysicMaterial.shadowMap

#### Defined in

[src/engine/materials/PavementMaterial.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PavementMaterial.ts#L63)

___

### uvTransform\_1

• `get` **uvTransform_1**(): `Vector4`

获取uvTransform_1

#### Returns

`Vector4`

#### Inherited from

PhysicMaterial.uvTransform\_1

#### Defined in

[src/engine/materials/PhysicMaterial.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L22)

• `set` **uvTransform_1**(`value`): `void`

设置uvTransform_1

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector4` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.uvTransform\_1

#### Defined in

[src/engine/materials/PhysicMaterial.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L29)

___

### uvTransform\_2

• `get` **uvTransform_2**(): `Vector4`

获取uvTransform_2

#### Returns

`Vector4`

#### Inherited from

PhysicMaterial.uvTransform\_2

#### Defined in

[src/engine/materials/PhysicMaterial.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L37)

• `set` **uvTransform_2**(`value`): `void`

设置uvTransform_2

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector4` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.uvTransform\_2

#### Defined in

[src/engine/materials/PhysicMaterial.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L44)

___

### materialF0

• `get` **materialF0**(): `Vector4`

获取材质反射率

#### Returns

`Vector4`

#### Inherited from

PhysicMaterial.materialF0

#### Defined in

[src/engine/materials/PhysicMaterial.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L56)

• `set` **materialF0**(`value`): `void`

设置材质反射率

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector4` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.materialF0

#### Defined in

[src/engine/materials/PhysicMaterial.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L63)

___

### roughness

• `get` **roughness**(): `number`

获取材质粗糙程度

#### Returns

`number`

#### Inherited from

PhysicMaterial.roughness

#### Defined in

[src/engine/materials/PhysicMaterial.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L70)

• `set` **roughness**(`value`): `void`

设置材质粗糙程度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.roughness

#### Defined in

[src/engine/materials/PhysicMaterial.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L77)

___

### metallic

• `get` **metallic**(): `number`

获取材质金属度

#### Returns

`number`

#### Inherited from

PhysicMaterial.metallic

#### Defined in

[src/engine/materials/PhysicMaterial.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L84)

• `set` **metallic**(`value`): `void`

设置材质金属度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.metallic

#### Defined in

[src/engine/materials/PhysicMaterial.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L91)

___

### ao

• `get` **ao**(): `number`

获取Ambient Occlussion, 处理环境光对物体遮挡的效果

#### Returns

`number`

#### Inherited from

PhysicMaterial.ao

#### Defined in

[src/engine/materials/PhysicMaterial.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L98)

• `set` **ao**(`value`): `void`

设置Ambient Occlussion, 处理环境光对物体遮挡的效果

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.ao

#### Defined in

[src/engine/materials/PhysicMaterial.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L105)

___

### metallic\_min

• `get` **metallic_min**(): `number`

获取最小金属度

#### Returns

`number`

#### Inherited from

PhysicMaterial.metallic\_min

#### Defined in

[src/engine/materials/PhysicMaterial.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L112)

• `set` **metallic_min**(`value`): `void`

设置最小金属度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.metallic\_min

#### Defined in

[src/engine/materials/PhysicMaterial.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L119)

___

### metallic\_max

• `get` **metallic_max**(): `number`

获取最大金属度

#### Returns

`number`

#### Inherited from

PhysicMaterial.metallic\_max

#### Defined in

[src/engine/materials/PhysicMaterial.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L126)

• `set` **metallic_max**(`value`): `void`

设置最大金属度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.metallic\_max

#### Defined in

[src/engine/materials/PhysicMaterial.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L133)

___

### roughness\_min

• `get` **roughness_min**(): `number`

设置最小粗糙程度

#### Returns

`number`

#### Inherited from

PhysicMaterial.roughness\_min

#### Defined in

[src/engine/materials/PhysicMaterial.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L140)

• `set` **roughness_min**(`value`): `void`

设置最小粗糙程度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.roughness\_min

#### Defined in

[src/engine/materials/PhysicMaterial.ts:147](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L147)

___

### roughness\_max

• `get` **roughness_max**(): `number`

获取最大粗糙程度

#### Returns

`number`

#### Inherited from

PhysicMaterial.roughness\_max

#### Defined in

[src/engine/materials/PhysicMaterial.ts:154](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L154)

• `set` **roughness_max**(`value`): `void`

设置最大粗糙程度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.roughness\_max

#### Defined in

[src/engine/materials/PhysicMaterial.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L161)

___

### normalScale

• `get` **normalScale**(): `number`

获取法线贴图对材质的影响程度

#### Returns

`number`

#### Inherited from

PhysicMaterial.normalScale

#### Defined in

[src/engine/materials/PhysicMaterial.ts:168](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L168)

• `set` **normalScale**(`value`): `void`

设置法线贴图对材质的影响程度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.normalScale

#### Defined in

[src/engine/materials/PhysicMaterial.ts:175](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L175)

___

### maskMap

• `get` **maskMap**(): [`Texture`](Texture.md)

获取遮罩贴图

#### Returns

[`Texture`](Texture.md)

#### Inherited from

PhysicMaterial.maskMap

#### Defined in

[src/engine/materials/PhysicMaterial.ts:204](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L204)

• `set` **maskMap**(`value`): `void`

设置遮罩贴图
R_chanel -> AoMap 
G_chanel -> Roughness
B_chanel -> Metallic
A_chanel -> C

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.maskMap

#### Defined in

[src/engine/materials/PhysicMaterial.ts:215](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L215)

___

### aoMap

• `get` **aoMap**(): [`Texture`](Texture.md)

获取ao贴图

#### Returns

[`Texture`](Texture.md)

#### Inherited from

PhysicMaterial.aoMap

#### Defined in

[src/engine/materials/PhysicMaterial.ts:234](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L234)

• `set` **aoMap**(`value`): `void`

设置ao贴图

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.aoMap

#### Defined in

[src/engine/materials/PhysicMaterial.ts:223](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L223)

___

### clearCoatRoughnessMap

• `get` **clearCoatRoughnessMap**(): [`Texture`](Texture.md)

获取clearCoatRoughnessMap贴图

#### Returns

[`Texture`](Texture.md)

#### Inherited from

PhysicMaterial.clearCoatRoughnessMap

#### Defined in

[src/engine/materials/PhysicMaterial.ts:250](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L250)

• `set` **clearCoatRoughnessMap**(`value`): `void`

设置clearCoatRoughnessMap贴图

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.clearCoatRoughnessMap

#### Defined in

[src/engine/materials/PhysicMaterial.ts:241](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L241)

___

### brdfLUT

• `get` **brdfLUT**(): [`Texture`](Texture.md)

获取brdf查询表

#### Returns

[`Texture`](Texture.md)

#### Inherited from

PhysicMaterial.brdfLUT

#### Defined in

[src/engine/materials/PhysicMaterial.ts:257](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L257)

• `set` **brdfLUT**(`value`): `void`

设置brdf查询表

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.brdfLUT

#### Defined in

[src/engine/materials/PhysicMaterial.ts:264](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L264)

___

### emissiveMap

• `get` **emissiveMap**(): [`Texture`](Texture.md)

获取发光贴图

#### Returns

[`Texture`](Texture.md)

#### Inherited from

PhysicMaterial.emissiveMap

#### Defined in

[src/engine/materials/PhysicMaterial.ts:272](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L272)

• `set` **emissiveMap**(`value`): `void`

设置发光贴图

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.emissiveMap

#### Defined in

[src/engine/materials/PhysicMaterial.ts:279](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L279)

___

### envIntensity

• `get` **envIntensity**(): `number`

获取环境强度

#### Returns

`number`

#### Inherited from

PhysicMaterial.envIntensity

#### Defined in

[src/engine/materials/PhysicMaterial.ts:293](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L293)

• `set` **envIntensity**(`value`): `void`

设置环境强度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.envIntensity

#### Defined in

[src/engine/materials/PhysicMaterial.ts:286](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L286)

___

### ior

• `get` **ior**(): `number`

获取折射系数

#### Returns

`number`

#### Inherited from

PhysicMaterial.ior

#### Defined in

[src/engine/materials/PhysicMaterial.ts:307](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L307)

• `set` **ior**(`value`): `void`

设置折射系数

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.ior

#### Defined in

[src/engine/materials/PhysicMaterial.ts:300](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L300)

___

### clearcoatFactor

• `get` **clearcoatFactor**(): `number`

获取透明涂层强度系数

#### Returns

`number`

#### Inherited from

PhysicMaterial.clearcoatFactor

#### Defined in

[src/engine/materials/PhysicMaterial.ts:325](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L325)

• `set` **clearcoatFactor**(`value`): `void`

设置透明涂层强度系数

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.clearcoatFactor

#### Defined in

[src/engine/materials/PhysicMaterial.ts:318](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L318)

___

### clearcoatRoughnessFactor

• `get` **clearcoatRoughnessFactor**(): `number`

获取透明涂层粗糙程度系数

#### Returns

`number`

#### Inherited from

PhysicMaterial.clearcoatRoughnessFactor

#### Defined in

[src/engine/materials/PhysicMaterial.ts:339](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L339)

• `set` **clearcoatRoughnessFactor**(`value`): `void`

设置透明涂层粗糙程度系数

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.clearcoatRoughnessFactor

#### Defined in

[src/engine/materials/PhysicMaterial.ts:332](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L332)

___

### clearcoatWeight

• `get` **clearcoatWeight**(): `number`

获取透明涂层权重

#### Returns

`number`

#### Inherited from

PhysicMaterial.clearcoatWeight

#### Defined in

[src/engine/materials/PhysicMaterial.ts:353](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L353)

• `set` **clearcoatWeight**(`value`): `void`

设置透明涂层权重

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.clearcoatWeight

#### Defined in

[src/engine/materials/PhysicMaterial.ts:346](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L346)

___

### clearcoatColor

• `get` **clearcoatColor**(): [`Color`](Color.md)

获取透明涂层颜色

#### Returns

[`Color`](Color.md)

#### Inherited from

PhysicMaterial.clearcoatColor

#### Defined in

[src/engine/materials/PhysicMaterial.ts:367](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L367)

• `set` **clearcoatColor**(`value`): `void`

设置透明涂层颜色

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.clearcoatColor

#### Defined in

[src/engine/materials/PhysicMaterial.ts:360](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L360)

## Methods

### useDefine

▸ **useDefine**(`define`, `value?`): `void`

启用材质球的定义

**`Memberof`**

MaterialBase

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `define` | `string` | `undefined` |
| `value?` | `boolean` | `true` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.useDefine

#### Defined in

[src/engine/materials/MaterialBase.ts:155](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L155)

___

### getTextures

▸ **getTextures**(): `Object`

获取纹理

#### Returns

`Object`

返回材质纹理

#### Inherited from

PhysicMaterial.getTextures

#### Defined in

[src/engine/materials/MaterialBase.ts:300](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L300)

___

### setDefine

▸ **setDefine**(`define`, `bool`): `void`

设置当前定义状态

#### Parameters

| Name | Type |
| :------ | :------ |
| `define` | `string` |
| `bool` | `boolean` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.setDefine

#### Defined in

[src/engine/materials/MaterialBase.ts:309](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L309)

___

### addPass

▸ **addPass**(`passType`, `pass`, `index?`): [`MaterialPass`](MaterialPass.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `passType` | `RendererType` | `undefined` |
| `pass` | [`MaterialPass`](MaterialPass.md) | `undefined` |
| `index` | `number` | `-1` |

#### Returns

[`MaterialPass`](MaterialPass.md)[]

#### Inherited from

PhysicMaterial.addPass

#### Defined in

[src/engine/materials/MaterialBase.ts:313](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L313)

___

### removePass

▸ **removePass**(`passType`, `index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `passType` | `RendererType` |
| `index` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.removePass

#### Defined in

[src/engine/materials/MaterialBase.ts:329](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L329)

___

### destroy

▸ **destroy**(): `void`

材质球资源回收

#### Returns

`void`

#### Inherited from

PhysicMaterial.destroy

#### Defined in

[src/engine/materials/MaterialBase.ts:342](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L342)

___

### clone

▸ **clone**(): `any`

复制材质

#### Returns

`any`

返回复制的材质

#### Inherited from

PhysicMaterial.clone

#### Defined in

[src/engine/materials/MaterialBase.ts:353](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L353)

___

### serialization

▸ **serialization**(): [`SerializeMaterialInstance`](SerializeMaterialInstance.md)

#### Returns

[`SerializeMaterialInstance`](SerializeMaterialInstance.md)

#### Inherited from

PhysicMaterial.serialization

#### Defined in

[src/engine/materials/MaterialBase.ts:357](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L357)

___

### unSerialization

▸ **unSerialization**(`instance`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`SerializeMaterialInstance`](SerializeMaterialInstance.md) |
| `data` | [`UnSerializeData`](UnSerializeData.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.unSerialization

#### Defined in

[src/engine/materials/MaterialBase.ts:373](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L373)

___

### setShader

▸ **setShader**(`vs`, `fs`): [`RenderShader`](RenderShader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vs` | `string` |
| `fs` | `string` |

#### Returns

[`RenderShader`](RenderShader.md)

#### Inherited from

PhysicMaterial.setShader

#### Defined in

[src/engine/materials/MaterialPass.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L42)

___

### getShader

▸ **getShader**(): [`RenderShader`](RenderShader.md)

#### Returns

[`RenderShader`](RenderShader.md)

#### Inherited from

PhysicMaterial.getShader

#### Defined in

[src/engine/materials/MaterialPass.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L49)

___

### debug

▸ **debug**(): `void`

启用GUI调试

#### Returns

`void`

#### Overrides

PhysicMaterial.debug

#### Defined in

[src/engine/materials/PavementMaterial.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PavementMaterial.ts#L70)

___

### useCleanCoat

▸ **useCleanCoat**(): `void`

#### Returns

`void`

#### Inherited from

PhysicMaterial.useCleanCoat

#### Defined in

[src/engine/materials/PhysicMaterial.ts:311](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PhysicMaterial.ts#L311)

## Constructors

### constructor

• **new PavementMaterial**()

创建新的UnLit材质对象

#### Overrides

PhysicMaterial.constructor

#### Defined in

[src/engine/materials/PavementMaterial.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/PavementMaterial.ts#L18)
