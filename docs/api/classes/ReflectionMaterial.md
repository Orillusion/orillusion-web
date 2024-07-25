# Class: ReflectionMaterial

Unlit Mateiral
A non glossy surface material without specular highlights.

## Hierarchy

- [`Material`](Material.md)

  ↳ **`ReflectionMaterial`**

### Constructors

- [constructor](ReflectionMaterial.md#constructor)

### Properties

- [instanceID](ReflectionMaterial.md#instanceid)
- [name](ReflectionMaterial.md#name)
- [enable](ReflectionMaterial.md#enable)

### Accessors

- [shader](ReflectionMaterial.md#shader)
- [doubleSide](ReflectionMaterial.md#doubleside)
- [castShadow](ReflectionMaterial.md#castshadow)
- [acceptShadow](ReflectionMaterial.md#acceptshadow)
- [castReflection](ReflectionMaterial.md#castreflection)
- [blendMode](ReflectionMaterial.md#blendmode)
- [depthCompare](ReflectionMaterial.md#depthcompare)
- [transparent](ReflectionMaterial.md#transparent)
- [cullMode](ReflectionMaterial.md#cullmode)
- [depthWriteEnabled](ReflectionMaterial.md#depthwriteenabled)
- [useBillboard](ReflectionMaterial.md#usebillboard)
- [baseMap](ReflectionMaterial.md#basemap)
- [baseColor](ReflectionMaterial.md#basecolor)
- [reflectionIndex](ReflectionMaterial.md#reflectionindex)
- [envMap](ReflectionMaterial.md#envmap)

### Methods

- [getPass](ReflectionMaterial.md#getpass)
- [getAllPass](ReflectionMaterial.md#getallpass)
- [clone](ReflectionMaterial.md#clone)
- [destroy](ReflectionMaterial.md#destroy)
- [setDefine](ReflectionMaterial.md#setdefine)
- [setTexture](ReflectionMaterial.md#settexture)
- [setStorageBuffer](ReflectionMaterial.md#setstoragebuffer)
- [setUniformBuffer](ReflectionMaterial.md#setuniformbuffer)
- [setUniformFloat](ReflectionMaterial.md#setuniformfloat)
- [setUniformVector2](ReflectionMaterial.md#setuniformvector2)
- [setUniformVector3](ReflectionMaterial.md#setuniformvector3)
- [setUniformVector4](ReflectionMaterial.md#setuniformvector4)
- [setUniformColor](ReflectionMaterial.md#setuniformcolor)
- [getUniformFloat](ReflectionMaterial.md#getuniformfloat)
- [getUniformV2](ReflectionMaterial.md#getuniformv2)
- [getUniformV3](ReflectionMaterial.md#getuniformv3)
- [getUniformV4](ReflectionMaterial.md#getuniformv4)
- [getUniformColor](ReflectionMaterial.md#getuniformcolor)
- [getTexture](ReflectionMaterial.md#gettexture)
- [getStorageBuffer](ReflectionMaterial.md#getstoragebuffer)
- [getStructStorageBuffer](ReflectionMaterial.md#getstructstoragebuffer)
- [getUniformBuffer](ReflectionMaterial.md#getuniformbuffer)
- [applyUniform](ReflectionMaterial.md#applyuniform)

## Constructors

### constructor

• **new ReflectionMaterial**(): [`ReflectionMaterial`](ReflectionMaterial.md)

#### Returns

[`ReflectionMaterial`](ReflectionMaterial.md)

#### Overrides

[Material](Material.md).[constructor](Material.md#constructor)

#### Defined in

[src/materials/ReflectionMaterial.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/materials/ReflectionMaterial.ts#L20)

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

### acceptShadow

• `get` **acceptShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Material.acceptShadow

#### Defined in

[src/materials/Material.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L64)

• `set` **acceptShadow**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Material.acceptShadow

#### Defined in

[src/materials/Material.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L68)

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Material.castReflection

#### Defined in

[src/materials/Material.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L77)

• `set` **castReflection**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Material.castReflection

#### Defined in

[src/materials/Material.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L81)

___

### blendMode

• `get` **blendMode**(): [`BlendMode`](../enums/BlendMode.md)

#### Returns

[`BlendMode`](../enums/BlendMode.md)

#### Inherited from

Material.blendMode

#### Defined in

[src/materials/Material.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L85)

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

[src/materials/Material.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L89)

___

### depthCompare

• `get` **depthCompare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Inherited from

Material.depthCompare

#### Defined in

[src/materials/Material.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L93)

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

[src/materials/Material.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L97)

___

### transparent

• `get` **transparent**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Material.transparent

#### Defined in

[src/materials/Material.ts:102](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L102)

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

[src/materials/Material.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L106)

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

#### Returns

`GPUCullMode`

#### Inherited from

Material.cullMode

#### Defined in

[src/materials/Material.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L113)

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

[src/materials/Material.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L117)

___

### depthWriteEnabled

• `get` **depthWriteEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Material.depthWriteEnabled

#### Defined in

[src/materials/Material.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L128)

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

[src/materials/Material.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L132)

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

[src/materials/Material.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L136)

___

### baseMap

• `get` **baseMap**(): [`Texture`](Texture.md)

#### Returns

[`Texture`](Texture.md)

#### Defined in

[src/materials/ReflectionMaterial.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/materials/ReflectionMaterial.ts#L33)

• `set` **baseMap**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/materials/ReflectionMaterial.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/materials/ReflectionMaterial.ts#L29)

___

### baseColor

• `get` **baseColor**(): [`Color`](Color.md)

get base color (tint color)

#### Returns

[`Color`](Color.md)

#### Defined in

[src/materials/ReflectionMaterial.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/materials/ReflectionMaterial.ts#L51)

• `set` **baseColor**(`color`): `void`

set base color (tint color)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

[src/materials/ReflectionMaterial.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/materials/ReflectionMaterial.ts#L40)

___

### reflectionIndex

• `set` **reflectionIndex**(`i`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |

#### Returns

`void`

#### Defined in

[src/materials/ReflectionMaterial.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/materials/ReflectionMaterial.ts#L44)

___

### envMap

• `set` **envMap**(`texture`): `void`

set environment texture, usually referring to cubemap

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/materials/ReflectionMaterial.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/materials/ReflectionMaterial.ts#L58)

## Methods

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

[src/materials/Material.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L145)

___

### getAllPass

▸ **getAllPass**(): [`RenderShaderPass`](RenderShaderPass.md)[]

get all color render pass

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)[]

#### Inherited from

[Material](Material.md).[getAllPass](Material.md#getallpass)

#### Defined in

[src/materials/Material.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L153)

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

[src/materials/Material.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L161)

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

[src/materials/Material.ts:168](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L168)

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

[src/materials/Material.ts:174](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L174)

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

[src/materials/Material.ts:178](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L178)

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

[src/materials/Material.ts:182](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L182)

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

[src/materials/Material.ts:186](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L186)

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

[src/materials/Material.ts:191](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L191)

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

[src/materials/Material.ts:195](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L195)

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

[src/materials/Material.ts:199](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L199)

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

[src/materials/Material.ts:203](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L203)

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

[src/materials/Material.ts:207](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L207)

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

[src/materials/Material.ts:211](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L211)

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

[src/materials/Material.ts:215](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L215)

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

[src/materials/Material.ts:219](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L219)

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

[src/materials/Material.ts:223](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L223)

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

[src/materials/Material.ts:227](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L227)

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

[src/materials/Material.ts:231](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L231)

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

[src/materials/Material.ts:235](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L235)

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

[src/materials/Material.ts:239](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L239)

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

[src/materials/Material.ts:243](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L243)

___

### applyUniform

▸ **applyUniform**(): `void`

#### Returns

`void`

#### Inherited from

[Material](Material.md).[applyUniform](Material.md#applyuniform)

#### Defined in

[src/materials/Material.ts:247](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L247)
