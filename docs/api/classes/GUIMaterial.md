# Class: GUIMaterial

material used in rendering GUI

## Hierarchy

- [`Material`](Material.md)

  ↳ **`GUIMaterial`**

### Constructors

- [constructor](GUIMaterial.md#constructor)

### Properties

- [instanceID](GUIMaterial.md#instanceid)
- [name](GUIMaterial.md#name)
- [enable](GUIMaterial.md#enable)

### Accessors

- [envMap](GUIMaterial.md#envmap)
- [shadowMap](GUIMaterial.md#shadowmap)
- [baseMap](GUIMaterial.md#basemap)
- [normalMap](GUIMaterial.md#normalmap)
- [emissiveMap](GUIMaterial.md#emissivemap)
- [irradianceMap](GUIMaterial.md#irradiancemap)
- [irradianceDepthMap](GUIMaterial.md#irradiancedepthmap)
- [shader](GUIMaterial.md#shader)
- [doubleSide](GUIMaterial.md#doubleside)
- [castShadow](GUIMaterial.md#castshadow)
- [blendMode](GUIMaterial.md#blendmode)
- [depthCompare](GUIMaterial.md#depthcompare)
- [transparent](GUIMaterial.md#transparent)
- [cullMode](GUIMaterial.md#cullmode)
- [depthWriteEnabled](GUIMaterial.md#depthwriteenabled)
- [useBillboard](GUIMaterial.md#usebillboard)

### Methods

- [setGUISolution](GUIMaterial.md#setguisolution)
- [setScissorRect](GUIMaterial.md#setscissorrect)
- [setScissorEnable](GUIMaterial.md#setscissorenable)
- [setScissorCorner](GUIMaterial.md#setscissorcorner)
- [setScreenSize](GUIMaterial.md#setscreensize)
- [setTextures](GUIMaterial.md#settextures)
- [getPass](GUIMaterial.md#getpass)
- [getAllPass](GUIMaterial.md#getallpass)
- [clone](GUIMaterial.md#clone)
- [destroy](GUIMaterial.md#destroy)
- [setDefine](GUIMaterial.md#setdefine)
- [setTexture](GUIMaterial.md#settexture)
- [setStorageBuffer](GUIMaterial.md#setstoragebuffer)
- [setUniformBuffer](GUIMaterial.md#setuniformbuffer)
- [setUniformFloat](GUIMaterial.md#setuniformfloat)
- [setUniformVector2](GUIMaterial.md#setuniformvector2)
- [setUniformVector3](GUIMaterial.md#setuniformvector3)
- [setUniformVector4](GUIMaterial.md#setuniformvector4)
- [setUniformColor](GUIMaterial.md#setuniformcolor)
- [getUniformFloat](GUIMaterial.md#getuniformfloat)
- [getUniformV2](GUIMaterial.md#getuniformv2)
- [getUniformV3](GUIMaterial.md#getuniformv3)
- [getUniformV4](GUIMaterial.md#getuniformv4)
- [getUniformColor](GUIMaterial.md#getuniformcolor)
- [getTexture](GUIMaterial.md#gettexture)
- [getStorageBuffer](GUIMaterial.md#getstoragebuffer)
- [getStructStorageBuffer](GUIMaterial.md#getstructstoragebuffer)
- [getUniformBuffer](GUIMaterial.md#getuniformbuffer)
- [applyUniform](GUIMaterial.md#applyuniform)

## Constructors

### constructor

• **new GUIMaterial**(`space`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `space` | [`GUISpace`](../enums/GUISpace.md) |

#### Overrides

[Material](Material.md).[constructor](Material.md#constructor)

#### Defined in

[src/components/gui/core/GUIMaterial.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L22)

## Properties

### instanceID

• **instanceID**: `string`

Material Unique Identifier

#### Inherited from

[Material](Material.md).[instanceID](Material.md#instanceid)

#### Defined in

[src/materials/Material.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L19)

___

### name

• **name**: `string`

name of this material

#### Inherited from

[Material](Material.md).[name](Material.md#name)

#### Defined in

[src/materials/Material.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L25)

___

### enable

• **enable**: `boolean` = `true`

#### Inherited from

[Material](Material.md).[enable](Material.md#enable)

#### Defined in

[src/materials/Material.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L27)

## Accessors

### envMap

• `set` **envMap**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIMaterial.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L123)

___

### shadowMap

• `set` **shadowMap**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIMaterial.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L124)

___

### baseMap

• `set` **baseMap**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIMaterial.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L125)

___

### normalMap

• `set` **normalMap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIMaterial.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L126)

___

### emissiveMap

• `set` **emissiveMap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIMaterial.ts:127](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L127)

___

### irradianceMap

• `set` **irradianceMap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIMaterial.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L128)

___

### irradianceDepthMap

• `set` **irradianceDepthMap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIMaterial.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L129)

___

### shader

• `get` **shader**(): [`Shader`](Shader.md)

#### Returns

[`Shader`](Shader.md)

#### Inherited from

Material.shader

#### Defined in

[src/materials/Material.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L41)

• `set` **shader**(`shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | [`Shader`](Shader.md) |

#### Returns

`void`

#### Inherited from

Material.shader

#### Defined in

[src/materials/Material.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L36)

___

### doubleSide

• `get` **doubleSide**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Material.doubleSide

#### Defined in

[src/materials/Material.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L45)

• `set` **doubleSide**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Material.doubleSide

#### Defined in

[src/materials/Material.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L49)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Material.castShadow

#### Defined in

[src/materials/Material.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L53)

• `set` **castShadow**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Material.castShadow

#### Defined in

[src/materials/Material.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L57)

___

### blendMode

• `get` **blendMode**(): [`BlendMode`](../enums/BlendMode.md)

#### Returns

[`BlendMode`](../enums/BlendMode.md)

#### Inherited from

Material.blendMode

#### Defined in

[src/materials/Material.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L61)

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlendMode`](../enums/BlendMode.md) |

#### Returns

`void`

#### Inherited from

Material.blendMode

#### Defined in

[src/materials/Material.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L65)

___

### depthCompare

• `get` **depthCompare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Inherited from

Material.depthCompare

#### Defined in

[src/materials/Material.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L69)

• `set` **depthCompare**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Inherited from

Material.depthCompare

#### Defined in

[src/materials/Material.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L73)

___

### transparent

• `get` **transparent**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Material.transparent

#### Defined in

[src/materials/Material.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L78)

• `set` **transparent**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Material.transparent

#### Defined in

[src/materials/Material.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L82)

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

#### Returns

`GPUCullMode`

#### Inherited from

Material.cullMode

#### Defined in

[src/materials/Material.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L89)

• `set` **cullMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCullMode` |

#### Returns

`void`

#### Inherited from

Material.cullMode

#### Defined in

[src/materials/Material.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L93)

___

### depthWriteEnabled

• `get` **depthWriteEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Material.depthWriteEnabled

#### Defined in

[src/materials/Material.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L97)

• `set` **depthWriteEnabled**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Material.depthWriteEnabled

#### Defined in

[src/materials/Material.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L101)

___

### useBillboard

• `set` **useBillboard**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Material.useBillboard

#### Defined in

[src/materials/Material.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L105)

## Methods

### setGUISolution

▸ **setGUISolution**(`value`, `pixelRatio`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector2`](Vector2.md) |
| `pixelRatio` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIMaterial.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L56)

___

### setScissorRect

▸ **setScissorRect**(`left`, `bottom`, `right`, `top`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | `number` |
| `bottom` | `number` |
| `right` | `number` |
| `top` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIMaterial.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L61)

___

### setScissorEnable

▸ **setScissorEnable**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIMaterial.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L67)

___

### setScissorCorner

▸ **setScissorCorner**(`radius`, `fadeOut`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |
| `fadeOut` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIMaterial.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L79)

___

### setScreenSize

▸ **setScreenSize**(`width`, `height`): [`GUIMaterial`](GUIMaterial.md)

Write screenSize size to the shader

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

[`GUIMaterial`](GUIMaterial.md)

#### Defined in

[src/components/gui/core/GUIMaterial.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L87)

___

### setTextures

▸ **setTextures**(`list`): `void`

Update texture used in GUI

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`Texture`](Texture.md)[] |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIMaterial.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L96)

___

### getPass

▸ **getPass**(`passType`): [`RenderShaderPass`](RenderShaderPass.md)[]

get render pass by renderType

#### Parameters

| Name | Type |
| :------ | :------ |
| `passType` | `PassType` |

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)[]

#### Inherited from

[Material](Material.md).[getPass](Material.md#getpass)

#### Defined in

[src/materials/Material.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L114)

___

### getAllPass

▸ **getAllPass**(): [`RenderShaderPass`](RenderShaderPass.md)[]

get all color render pass

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)[]

#### Inherited from

[Material](Material.md).[getAllPass](Material.md#getallpass)

#### Defined in

[src/materials/Material.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L122)

___

### clone

▸ **clone**(): [`Material`](Material.md)

clone one material

#### Returns

[`Material`](Material.md)

Material

#### Inherited from

[Material](Material.md).[clone](Material.md#clone)

#### Defined in

[src/materials/Material.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L130)

___

### destroy

▸ **destroy**(`force`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force` | `boolean` |

#### Returns

`void`

#### Inherited from

[Material](Material.md).[destroy](Material.md#destroy)

#### Defined in

[src/materials/Material.ts:137](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L137)

___

### setDefine

▸ **setDefine**(`define`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `define` | `string` |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

[Material](Material.md).[setDefine](Material.md#setdefine)

#### Defined in

[src/materials/Material.ts:143](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L143)

___

### setTexture

▸ **setTexture**(`propertyName`, `texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

[Material](Material.md).[setTexture](Material.md#settexture)

#### Defined in

[src/materials/Material.ts:147](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L147)

___

### setStorageBuffer

▸ **setStorageBuffer**(`propertyName`, `buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `buffer` | [`StorageGPUBuffer`](StorageGPUBuffer.md) |

#### Returns

`void`

#### Inherited from

[Material](Material.md).[setStorageBuffer](Material.md#setstoragebuffer)

#### Defined in

[src/materials/Material.ts:151](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L151)

___

### setUniformBuffer

▸ **setUniformBuffer**(`propertyName`, `buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `buffer` | [`UniformGPUBuffer`](UniformGPUBuffer.md) |

#### Returns

`void`

#### Inherited from

[Material](Material.md).[setUniformBuffer](Material.md#setuniformbuffer)

#### Defined in

[src/materials/Material.ts:155](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L155)

___

### setUniformFloat

▸ **setUniformFloat**(`propertyName`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

[Material](Material.md).[setUniformFloat](Material.md#setuniformfloat)

#### Defined in

[src/materials/Material.ts:160](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L160)

___

### setUniformVector2

▸ **setUniformVector2**(`propertyName`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `value` | [`Vector2`](Vector2.md) |

#### Returns

`void`

#### Inherited from

[Material](Material.md).[setUniformVector2](Material.md#setuniformvector2)

#### Defined in

[src/materials/Material.ts:164](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L164)

___

### setUniformVector3

▸ **setUniformVector3**(`propertyName`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

[Material](Material.md).[setUniformVector3](Material.md#setuniformvector3)

#### Defined in

[src/materials/Material.ts:168](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L168)

___

### setUniformVector4

▸ **setUniformVector4**(`propertyName`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `value` | `Vector4` |

#### Returns

`void`

#### Inherited from

[Material](Material.md).[setUniformVector4](Material.md#setuniformvector4)

#### Defined in

[src/materials/Material.ts:172](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L172)

___

### setUniformColor

▸ **setUniformColor**(`propertyName`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

[Material](Material.md).[setUniformColor](Material.md#setuniformcolor)

#### Defined in

[src/materials/Material.ts:176](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L176)

___

### getUniformFloat

▸ **getUniformFloat**(`str`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`any`

#### Inherited from

[Material](Material.md).[getUniformFloat](Material.md#getuniformfloat)

#### Defined in

[src/materials/Material.ts:180](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L180)

___

### getUniformV2

▸ **getUniformV2**(`str`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`Vector2`](Vector2.md)

#### Inherited from

[Material](Material.md).[getUniformV2](Material.md#getuniformv2)

#### Defined in

[src/materials/Material.ts:184](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L184)

___

### getUniformV3

▸ **getUniformV3**(`str`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Material](Material.md).[getUniformV3](Material.md#getuniformv3)

#### Defined in

[src/materials/Material.ts:188](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L188)

___

### getUniformV4

▸ **getUniformV4**(`str`): `Vector4`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`Vector4`

#### Inherited from

[Material](Material.md).[getUniformV4](Material.md#getuniformv4)

#### Defined in

[src/materials/Material.ts:192](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L192)

___

### getUniformColor

▸ **getUniformColor**(`str`): [`Color`](Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`Color`](Color.md)

#### Inherited from

[Material](Material.md).[getUniformColor](Material.md#getuniformcolor)

#### Defined in

[src/materials/Material.ts:196](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L196)

___

### getTexture

▸ **getTexture**(`str`): [`Texture`](Texture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`Texture`](Texture.md)

#### Inherited from

[Material](Material.md).[getTexture](Material.md#gettexture)

#### Defined in

[src/materials/Material.ts:200](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L200)

___

### getStorageBuffer

▸ **getStorageBuffer**(`str`): [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Inherited from

[Material](Material.md).[getStorageBuffer](Material.md#getstoragebuffer)

#### Defined in

[src/materials/Material.ts:204](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L204)

___

### getStructStorageBuffer

▸ **getStructStorageBuffer**(`str`): `GPUBufferBase`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`GPUBufferBase`

#### Inherited from

[Material](Material.md).[getStructStorageBuffer](Material.md#getstructstoragebuffer)

#### Defined in

[src/materials/Material.ts:208](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L208)

___

### getUniformBuffer

▸ **getUniformBuffer**(`str`): `GPUBufferBase`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`GPUBufferBase`

#### Inherited from

[Material](Material.md).[getUniformBuffer](Material.md#getuniformbuffer)

#### Defined in

[src/materials/Material.ts:212](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L212)

___

### applyUniform

▸ **applyUniform**(): `void`

#### Returns

`void`

#### Inherited from

[Material](Material.md).[applyUniform](Material.md#applyuniform)

#### Defined in

[src/materials/Material.ts:216](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L216)
