# Class: GUIMaterial

## Hierarchy

- `MaterialBase`

  ↳ **`GUIMaterial`**


### Constructors

- [constructor](GUIMaterial.md#constructor)

### Methods

- [setScreenSize](GUIMaterial.md#setscreensize)
- [setTextures](GUIMaterial.md#settextures)
- [useDefine](GUIMaterial.md#usedefine)
- [getTextures](GUIMaterial.md#gettextures)
- [setDefine](GUIMaterial.md#setdefine)
- [addPass](GUIMaterial.md#addpass)
- [removePass](GUIMaterial.md#removepass)
- [destroy](GUIMaterial.md#destroy)
- [clone](GUIMaterial.md#clone)
- [serialization](GUIMaterial.md#serialization)
- [unSerialization](GUIMaterial.md#unserialization)
- [setShader](GUIMaterial.md#setshader)
- [getShader](GUIMaterial.md#getshader)
- [debug](GUIMaterial.md#debug)

### Accessors

- [envMap](GUIMaterial.md#envmap)
- [shadowMap](GUIMaterial.md#shadowmap)
- [baseMap](GUIMaterial.md#basemap)
- [normalMap](GUIMaterial.md#normalmap)
- [emissiveMap](GUIMaterial.md#emissivemap)
- [irradianceMap](GUIMaterial.md#irradiancemap)
- [irradianceDepthMap](GUIMaterial.md#irradiancedepthmap)
- [shaderState](GUIMaterial.md#shaderstate)
- [tintColor](GUIMaterial.md#tintcolor)
- [emissiveColor](GUIMaterial.md#emissivecolor)
- [emissiveIntensity](GUIMaterial.md#emissiveintensity)
- [envIntensity](GUIMaterial.md#envintensity)
- [normalScale](GUIMaterial.md#normalscale)
- [alphaCutoff](GUIMaterial.md#alphacutoff)
- [baseColor](GUIMaterial.md#basecolor)
- [uvTransform\_1](GUIMaterial.md#uvtransform_1)
- [uvTransform\_2](GUIMaterial.md#uvtransform_2)
- [sort](GUIMaterial.md#sort)
- [shaderID](GUIMaterial.md#shaderid)
- [blendMode](GUIMaterial.md#blendmode)
- [frontFace](GUIMaterial.md#frontface)
- [doubleSide](GUIMaterial.md#doubleside)
- [cullMode](GUIMaterial.md#cullmode)
- [depthBias](GUIMaterial.md#depthbias)
- [depthCompare](GUIMaterial.md#depthcompare)

### Properties

- [name](GUIMaterial.md#name)
- [uuid](GUIMaterial.md#uuid)
- [isPassMaterial](GUIMaterial.md#ispassmaterial)
- [receiveEnv](GUIMaterial.md#receiveenv)
- [renderPasses](GUIMaterial.md#renderpasses)
- [transparent](GUIMaterial.md#transparent)
- [enable](GUIMaterial.md#enable)
- [renderShader](GUIMaterial.md#rendershader)

## Constructors

### constructor

• **new GUIMaterial**(`space`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `space` | [`GUISpace`](../enums/GUISpace.md) |

#### Overrides

MaterialBase.constructor

#### Defined in

[src/engine/gui/core/GUIMaterial.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIMaterial.ts#L13)

## Methods

### setScreenSize

▸ **setScreenSize**(`width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gui/core/GUIMaterial.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIMaterial.ts#L41)

___

### setTextures

▸ **setTextures**(`list`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`Texture`](Texture.md)[] |

#### Returns

`void`

#### Defined in

[src/engine/gui/core/GUIMaterial.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIMaterial.ts#L46)

___

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

MaterialBase.useDefine

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

MaterialBase.getTextures

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

MaterialBase.setDefine

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

MaterialBase.addPass

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

MaterialBase.removePass

#### Defined in

[src/engine/materials/MaterialBase.ts:329](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L329)

___

### destroy

▸ **destroy**(): `void`

材质球资源回收

#### Returns

`void`

#### Inherited from

MaterialBase.destroy

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

MaterialBase.clone

#### Defined in

[src/engine/materials/MaterialBase.ts:353](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L353)

___

### serialization

▸ **serialization**(): [`SerializeMaterialInstance`](SerializeMaterialInstance.md)

#### Returns

[`SerializeMaterialInstance`](SerializeMaterialInstance.md)

#### Inherited from

MaterialBase.serialization

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

MaterialBase.unSerialization

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

MaterialBase.setShader

#### Defined in

[src/engine/materials/MaterialPass.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L42)

___

### getShader

▸ **getShader**(): [`RenderShader`](RenderShader.md)

#### Returns

[`RenderShader`](RenderShader.md)

#### Inherited from

MaterialBase.getShader

#### Defined in

[src/engine/materials/MaterialPass.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L49)

___

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Inherited from

MaterialBase.debug

#### Defined in

[src/engine/materials/MaterialPass.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L152)

## Accessors

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

MaterialBase.envMap

#### Defined in

[src/engine/gui/core/GUIMaterial.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIMaterial.ts#L55)

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

MaterialBase.shadowMap

#### Defined in

[src/engine/gui/core/GUIMaterial.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIMaterial.ts#L60)

___

### baseMap

• `set` **baseMap**(`texture`): `void`

设置基础贴图

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Overrides

MaterialBase.baseMap

#### Defined in

[src/engine/gui/core/GUIMaterial.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIMaterial.ts#L65)

___

### normalMap

• `set` **normalMap**(`value`): `void`

设置法线贴图

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Overrides

MaterialBase.normalMap

#### Defined in

[src/engine/gui/core/GUIMaterial.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIMaterial.ts#L70)

___

### emissiveMap

• `set` **emissiveMap**(`value`): `void`

设置发光贴图

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Overrides

MaterialBase.emissiveMap

#### Defined in

[src/engine/gui/core/GUIMaterial.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIMaterial.ts#L75)

___

### irradianceMap

• `set` **irradianceMap**(`value`): `void`

设置irradiance发光贴图

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Overrides

MaterialBase.irradianceMap

#### Defined in

[src/engine/gui/core/GUIMaterial.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIMaterial.ts#L80)

___

### irradianceDepthMap

• `set` **irradianceDepthMap**(`value`): `void`

设置发光深度贴图

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Overrides

MaterialBase.irradianceDepthMap

#### Defined in

[src/engine/gui/core/GUIMaterial.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/GUIMaterial.ts#L85)

___

### shaderState

• `get` **shaderState**(): `ShaderState`

#### Returns

`ShaderState`

#### Inherited from

MaterialBase.shaderState

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

MaterialBase.shaderState

#### Defined in

[src/engine/materials/MaterialBase.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L53)

___

### tintColor

• `get` **tintColor**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Inherited from

MaterialBase.tintColor

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

MaterialBase.tintColor

#### Defined in

[src/engine/materials/MaterialBase.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L61)

___

### emissiveColor

• `get` **emissiveColor**(): [`Color`](Color.md)

获取发光颜色

#### Returns

[`Color`](Color.md)

#### Inherited from

MaterialBase.emissiveColor

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

MaterialBase.emissiveColor

#### Defined in

[src/engine/materials/MaterialBase.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L125)

___

### emissiveIntensity

• `get` **emissiveIntensity**(): `number`

获取发光强度

#### Returns

`number`

#### Inherited from

MaterialBase.emissiveIntensity

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

MaterialBase.emissiveIntensity

#### Defined in

[src/engine/materials/MaterialBase.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L135)

___

### envIntensity

• `get` **envIntensity**(): `number`

获取环境强度

#### Returns

`number`

#### Inherited from

MaterialBase.envIntensity

#### Defined in

[src/engine/materials/MaterialBase.ts:171](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L171)

• `set` **envIntensity**(`value`): `void`

设置环境强度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

MaterialBase.envIntensity

#### Defined in

[src/engine/materials/MaterialBase.ts:178](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L178)

___

### normalScale

• `get` **normalScale**(): `number`

获取环境强度

#### Returns

`number`

#### Inherited from

MaterialBase.normalScale

#### Defined in

[src/engine/materials/MaterialBase.ts:185](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L185)

• `set` **normalScale**(`value`): `void`

设置环境强度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

MaterialBase.normalScale

#### Defined in

[src/engine/materials/MaterialBase.ts:192](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L192)

___

### alphaCutoff

• `get` **alphaCutoff**(): `number`

获取alphaCutoff，通道透明阈值参数

#### Returns

`number`

#### Inherited from

MaterialBase.alphaCutoff

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

MaterialBase.alphaCutoff

#### Defined in

[src/engine/materials/MaterialBase.ts:206](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L206)

___

### baseColor

• `get` **baseColor**(): [`Color`](Color.md)

获取基础颜色

#### Returns

[`Color`](Color.md)

#### Inherited from

MaterialBase.baseColor

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

MaterialBase.baseColor

#### Defined in

[src/engine/materials/MaterialBase.ts:252](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L252)

___

### uvTransform\_1

• `get` **uvTransform_1**(): `Vector4`

获取uvTransform_1

#### Returns

`Vector4`

#### Inherited from

MaterialBase.uvTransform\_1

#### Defined in

[src/engine/materials/MaterialBase.ts:265](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L265)

• `set` **uvTransform_1**(`value`): `void`

设置uvTransform_1

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector4` |

#### Returns

`void`

#### Inherited from

MaterialBase.uvTransform\_1

#### Defined in

[src/engine/materials/MaterialBase.ts:272](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L272)

___

### uvTransform\_2

• `get` **uvTransform_2**(): `Vector4`

获取uvTransform_2

#### Returns

`Vector4`

#### Inherited from

MaterialBase.uvTransform\_2

#### Defined in

[src/engine/materials/MaterialBase.ts:279](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L279)

• `set` **uvTransform_2**(`value`): `void`

设置uvTransform_2

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector4` |

#### Returns

`void`

#### Inherited from

MaterialBase.uvTransform\_2

#### Defined in

[src/engine/materials/MaterialBase.ts:286](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L286)

___

### sort

• `get` **sort**(): `number`

#### Returns

`number`

#### Inherited from

MaterialBase.sort

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

MaterialBase.sort

#### Defined in

[src/engine/materials/MaterialPass.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L30)

___

### shaderID

• `get` **shaderID**(): `string`

#### Returns

`string`

#### Inherited from

MaterialBase.shaderID

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

MaterialBase.shaderID

#### Defined in

[src/engine/materials/MaterialPass.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L38)

___

### blendMode

• `get` **blendMode**(): [`BlendMode`](../enums/BlendMode.md)

获取混合模式

#### Returns

[`BlendMode`](../enums/BlendMode.md)

#### Inherited from

MaterialBase.blendMode

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

MaterialBase.blendMode

#### Defined in

[src/engine/materials/MaterialPass.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L63)

___

### frontFace

• `get` **frontFace**(): `GPUFrontFace`

获取面朝向

#### Returns

`GPUFrontFace`

#### Inherited from

MaterialBase.frontFace

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

MaterialBase.frontFace

#### Defined in

[src/engine/materials/MaterialPass.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L79)

___

### doubleSide

• `get` **doubleSide**(): `boolean`

获取是否为双面模式

#### Returns

`boolean`

#### Inherited from

MaterialBase.doubleSide

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

MaterialBase.doubleSide

#### Defined in

[src/engine/materials/MaterialPass.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L93)

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

获取剔除模式

#### Returns

`GPUCullMode`

#### Inherited from

MaterialBase.cullMode

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

MaterialBase.cullMode

#### Defined in

[src/engine/materials/MaterialPass.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L107)

___

### depthBias

• `get` **depthBias**(): `number`

#### Returns

`number`

#### Inherited from

MaterialBase.depthBias

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

MaterialBase.depthBias

#### Defined in

[src/engine/materials/MaterialPass.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L115)

___

### depthCompare

• `get` **depthCompare**(): `GPUCompareFunction`

获取剔除模式

#### Returns

`GPUCompareFunction`

#### Inherited from

MaterialBase.depthCompare

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

MaterialBase.depthCompare

#### Defined in

[src/engine/materials/MaterialPass.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L129)

## Properties

### name

• **name**: `string`

材质名称

#### Inherited from

MaterialBase.name

#### Defined in

[src/engine/materials/MaterialBase.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L26)

___

### uuid

• **uuid**: `string`

材质唯一标识符

#### Inherited from

MaterialBase.uuid

#### Defined in

[src/engine/materials/MaterialBase.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L31)

___

### isPassMaterial

• **isPassMaterial**: `boolean` = `false`

是否为PassMaterial

#### Inherited from

MaterialBase.isPassMaterial

#### Defined in

[src/engine/materials/MaterialBase.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L35)

___

### receiveEnv

• **receiveEnv**: `boolean` = `true`

是否接收Env

#### Inherited from

MaterialBase.receiveEnv

#### Defined in

[src/engine/materials/MaterialBase.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialBase.ts#L44)

___

### renderPasses

• **renderPasses**: `Map`<`RendererType`, [`MaterialPass`](MaterialPass.md)[]\>

#### Inherited from

MaterialBase.renderPasses

#### Defined in

[src/engine/materials/MaterialPass.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L7)

___

### transparent

• **transparent**: `boolean` = `false`

是否透明

#### Inherited from

MaterialBase.transparent

#### Defined in

[src/engine/materials/MaterialPass.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L13)

___

### enable

• **enable**: `boolean` = `true`

材质是否启用

#### Inherited from

MaterialBase.enable

#### Defined in

[src/engine/materials/MaterialPass.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L18)

___

### renderShader

• **renderShader**: [`RenderShader`](RenderShader.md)

#### Inherited from

MaterialBase.renderShader

#### Defined in

[src/engine/materials/MaterialPass.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/engine/materials/MaterialPass.ts#L20)
