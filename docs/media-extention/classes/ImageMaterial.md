# Class: ImageMaterial

ImageMaterial
Do not compute light, only read pixel color from a Image source

## Hierarchy

- `Material`

  ↳ **`ImageMaterial`**

### Constructors

- [constructor](ImageMaterial.md#constructor)

### Properties

- [instanceID](ImageMaterial.md#instanceid)
- [name](ImageMaterial.md#name)
- [enable](ImageMaterial.md#enable)

### Accessors

- [baseMap](ImageMaterial.md#basemap)
- [baseColor](ImageMaterial.md#basecolor)
- [rectClip](ImageMaterial.md#rectclip)
- [shader](ImageMaterial.md#shader)
- [doubleSide](ImageMaterial.md#doubleside)
- [castShadow](ImageMaterial.md#castshadow)
- [acceptShadow](ImageMaterial.md#acceptshadow)
- [castReflection](ImageMaterial.md#castreflection)
- [blendMode](ImageMaterial.md#blendmode)
- [depthCompare](ImageMaterial.md#depthcompare)
- [transparent](ImageMaterial.md#transparent)
- [cullMode](ImageMaterial.md#cullmode)
- [depthWriteEnabled](ImageMaterial.md#depthwriteenabled)
- [useBillboard](ImageMaterial.md#usebillboard)

### Methods

- [debug](ImageMaterial.md#debug)
- [getPass](ImageMaterial.md#getpass)
- [getAllPass](ImageMaterial.md#getallpass)
- [clone](ImageMaterial.md#clone)
- [destroy](ImageMaterial.md#destroy)
- [setDefine](ImageMaterial.md#setdefine)
- [setTexture](ImageMaterial.md#settexture)
- [setStorageBuffer](ImageMaterial.md#setstoragebuffer)
- [setUniformBuffer](ImageMaterial.md#setuniformbuffer)
- [setUniformFloat](ImageMaterial.md#setuniformfloat)
- [setUniformVector2](ImageMaterial.md#setuniformvector2)
- [setUniformVector3](ImageMaterial.md#setuniformvector3)
- [setUniformVector4](ImageMaterial.md#setuniformvector4)
- [setUniformColor](ImageMaterial.md#setuniformcolor)
- [getUniformFloat](ImageMaterial.md#getuniformfloat)
- [getUniformV2](ImageMaterial.md#getuniformv2)
- [getUniformV3](ImageMaterial.md#getuniformv3)
- [getUniformV4](ImageMaterial.md#getuniformv4)
- [getUniformColor](ImageMaterial.md#getuniformcolor)
- [getTexture](ImageMaterial.md#gettexture)
- [getStorageBuffer](ImageMaterial.md#getstoragebuffer)
- [getStructStorageBuffer](ImageMaterial.md#getstructstoragebuffer)
- [getUniformBuffer](ImageMaterial.md#getuniformbuffer)
- [applyUniform](ImageMaterial.md#applyuniform)

## Constructors

### constructor

• **new ImageMaterial**(): [`ImageMaterial`](ImageMaterial.md)

Create a new ImageMaterial

#### Returns

[`ImageMaterial`](ImageMaterial.md)

#### Overrides

Material.constructor

#### Defined in

[packages/media-extention/ImageMaterial.ts:15](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ImageMaterial.ts#L15)

## Properties

### instanceID

• **instanceID**: `string`

Material Unique Identifier

#### Inherited from

Material.instanceID

#### Defined in

[src/materials/Material.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L19)

___

### name

• **name**: `string`

name of this material

#### Inherited from

Material.name

#### Defined in

[src/materials/Material.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L25)

___

### enable

• **enable**: `boolean` = `true`

#### Inherited from

Material.enable

#### Defined in

[src/materials/Material.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L27)

## Accessors

### baseMap

• `get` **baseMap**(): `Texture`

#### Returns

`Texture`

#### Defined in

[packages/media-extention/ImageMaterial.ts:47](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ImageMaterial.ts#L47)

• `set` **baseMap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Texture` |

#### Returns

`void`

#### Defined in

[packages/media-extention/ImageMaterial.ts:43](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ImageMaterial.ts#L43)

___

### baseColor

• `get` **baseColor**(): `Color`

get base color (tint color)

#### Returns

`Color`

#### Defined in

[packages/media-extention/ImageMaterial.ts:61](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ImageMaterial.ts#L61)

• `set` **baseColor**(`color`): `void`

set base color (tint color)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `Color` |

#### Returns

`void`

#### Defined in

[packages/media-extention/ImageMaterial.ts:54](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ImageMaterial.ts#L54)

___

### rectClip

• `get` **rectClip**(): `Vector4`

Get the clip rect area

#### Returns

`Vector4`

#### Defined in

[packages/media-extention/ImageMaterial.ts:75](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ImageMaterial.ts#L75)

• `set` **rectClip**(`value`): `void`

Set the clip rect area

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector4` |

#### Returns

`void`

#### Defined in

[packages/media-extention/ImageMaterial.ts:68](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ImageMaterial.ts#L68)

___

### shader

• `get` **shader**(): `Shader`

#### Returns

`Shader`

#### Inherited from

Material.shader

#### Defined in

[src/materials/Material.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L41)

• `set` **shader**(`shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | `Shader` |

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

• `get` **blendMode**(): `BlendMode`

#### Returns

`BlendMode`

#### Inherited from

Material.blendMode

#### Defined in

[src/materials/Material.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L85)

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `BlendMode` |

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

## Methods

### debug

▸ **debug**(): `void`

Start debug GUI

#### Returns

`void`

#### Defined in

[packages/media-extention/ImageMaterial.ts:82](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/ImageMaterial.ts#L82)

___

### getPass

▸ **getPass**(`passType`): `RenderShaderPass`[]

get render pass by renderType

#### Parameters

| Name | Type |
| :------ | :------ |
| `passType` | `PassType` |

#### Returns

`RenderShaderPass`[]

#### Inherited from

Material.getPass

#### Defined in

[src/materials/Material.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L145)

___

### getAllPass

▸ **getAllPass**(): `RenderShaderPass`[]

get all color render pass

#### Returns

`RenderShaderPass`[]

#### Inherited from

Material.getAllPass

#### Defined in

[src/materials/Material.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L153)

___

### clone

▸ **clone**(): `Material`

clone one material

#### Returns

`Material`

Material

#### Inherited from

Material.clone

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

Material.destroy

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

Material.setDefine

#### Defined in

[src/materials/Material.ts:174](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L174)

___

### setTexture

▸ **setTexture**(`propertyName`, `texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `texture` | `Texture` |

#### Returns

`void`

#### Inherited from

Material.setTexture

#### Defined in

[src/materials/Material.ts:178](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L178)

___

### setStorageBuffer

▸ **setStorageBuffer**(`propertyName`, `buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `buffer` | `StorageGPUBuffer` |

#### Returns

`void`

#### Inherited from

Material.setStorageBuffer

#### Defined in

[src/materials/Material.ts:182](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L182)

___

### setUniformBuffer

▸ **setUniformBuffer**(`propertyName`, `buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `buffer` | `UniformGPUBuffer` |

#### Returns

`void`

#### Inherited from

Material.setUniformBuffer

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

Material.setUniformFloat

#### Defined in

[src/materials/Material.ts:191](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L191)

___

### setUniformVector2

▸ **setUniformVector2**(`propertyName`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `value` | `Vector2` |

#### Returns

`void`

#### Inherited from

Material.setUniformVector2

#### Defined in

[src/materials/Material.ts:195](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L195)

___

### setUniformVector3

▸ **setUniformVector3**(`propertyName`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `value` | `Vector3` |

#### Returns

`void`

#### Inherited from

Material.setUniformVector3

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

Material.setUniformVector4

#### Defined in

[src/materials/Material.ts:203](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L203)

___

### setUniformColor

▸ **setUniformColor**(`propertyName`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `value` | `Color` |

#### Returns

`void`

#### Inherited from

Material.setUniformColor

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

Material.getUniformFloat

#### Defined in

[src/materials/Material.ts:211](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L211)

___

### getUniformV2

▸ **getUniformV2**(`str`): `Vector2`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`Vector2`

#### Inherited from

Material.getUniformV2

#### Defined in

[src/materials/Material.ts:215](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L215)

___

### getUniformV3

▸ **getUniformV3**(`str`): `Vector3`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`Vector3`

#### Inherited from

Material.getUniformV3

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

Material.getUniformV4

#### Defined in

[src/materials/Material.ts:223](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L223)

___

### getUniformColor

▸ **getUniformColor**(`str`): `Color`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`Color`

#### Inherited from

Material.getUniformColor

#### Defined in

[src/materials/Material.ts:227](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L227)

___

### getTexture

▸ **getTexture**(`str`): `Texture`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`Texture`

#### Inherited from

Material.getTexture

#### Defined in

[src/materials/Material.ts:231](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L231)

___

### getStorageBuffer

▸ **getStorageBuffer**(`str`): `StorageGPUBuffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`StorageGPUBuffer`

#### Inherited from

Material.getStorageBuffer

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

Material.getStructStorageBuffer

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

Material.getUniformBuffer

#### Defined in

[src/materials/Material.ts:243](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L243)

___

### applyUniform

▸ **applyUniform**(): `void`

#### Returns

`void`

#### Inherited from

Material.applyUniform

#### Defined in

[src/materials/Material.ts:247](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L247)
