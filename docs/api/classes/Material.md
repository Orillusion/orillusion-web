# Class: Material

## Hierarchy

- **`Material`**

  ↳ [`GUIMaterial`](GUIMaterial.md)

  ↳ [`ColorLitMaterial`](ColorLitMaterial.md)

  ↳ [`GIProbeMaterial`](GIProbeMaterial.md)

  ↳ [`GlassMaterial`](GlassMaterial.md)

  ↳ [`LambertMaterial`](LambertMaterial.md)

  ↳ [`LitMaterial`](LitMaterial.md)

  ↳ [`UnLitMaterial`](UnLitMaterial.md)

  ↳ [`UnLitTexArrayMaterial`](UnLitTexArrayMaterial.md)

### Constructors

- [constructor](Material.md#constructor)

### Properties

- [instanceID](Material.md#instanceid)
- [name](Material.md#name)
- [enable](Material.md#enable)

### Accessors

- [shader](Material.md#shader)
- [doubleSide](Material.md#doubleside)
- [castShadow](Material.md#castshadow)
- [blendMode](Material.md#blendmode)
- [depthCompare](Material.md#depthcompare)
- [transparent](Material.md#transparent)
- [cullMode](Material.md#cullmode)
- [depthWriteEnabled](Material.md#depthwriteenabled)
- [useBillboard](Material.md#usebillboard)

### Methods

- [getPass](Material.md#getpass)
- [getAllPass](Material.md#getallpass)
- [clone](Material.md#clone)
- [destroy](Material.md#destroy)
- [setDefine](Material.md#setdefine)
- [setTexture](Material.md#settexture)
- [setStorageBuffer](Material.md#setstoragebuffer)
- [setUniformBuffer](Material.md#setuniformbuffer)
- [setUniformFloat](Material.md#setuniformfloat)
- [setUniformVector2](Material.md#setuniformvector2)
- [setUniformVector3](Material.md#setuniformvector3)
- [setUniformVector4](Material.md#setuniformvector4)
- [setUniformColor](Material.md#setuniformcolor)
- [getUniformFloat](Material.md#getuniformfloat)
- [getUniformV2](Material.md#getuniformv2)
- [getUniformV3](Material.md#getuniformv3)
- [getUniformV4](Material.md#getuniformv4)
- [getUniformColor](Material.md#getuniformcolor)
- [getTexture](Material.md#gettexture)
- [getStorageBuffer](Material.md#getstoragebuffer)
- [getStructStorageBuffer](Material.md#getstructstoragebuffer)
- [getUniformBuffer](Material.md#getuniformbuffer)
- [applyUniform](Material.md#applyuniform)

## Constructors

### constructor

• **new Material**()

#### Defined in

[src/materials/Material.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L33)

## Properties

### instanceID

• **instanceID**: `string`

Material Unique Identifier

#### Defined in

[src/materials/Material.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L19)

___

### name

• **name**: `string`

name of this material

#### Defined in

[src/materials/Material.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L25)

___

### enable

• **enable**: `boolean` = `true`

#### Defined in

[src/materials/Material.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L27)

## Accessors

### shader

• `get` **shader**(): [`Shader`](Shader.md)

#### Returns

[`Shader`](Shader.md)

#### Defined in

[src/materials/Material.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L41)

• `set` **shader**(`shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | [`Shader`](Shader.md) |

#### Returns

`void`

#### Defined in

[src/materials/Material.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L36)

___

### doubleSide

• `get` **doubleSide**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/materials/Material.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L45)

• `set` **doubleSide**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/materials/Material.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L49)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/materials/Material.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L53)

• `set` **castShadow**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/materials/Material.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L57)

___

### blendMode

• `get` **blendMode**(): [`BlendMode`](../enums/BlendMode.md)

#### Returns

[`BlendMode`](../enums/BlendMode.md)

#### Defined in

[src/materials/Material.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L61)

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlendMode`](../enums/BlendMode.md) |

#### Returns

`void`

#### Defined in

[src/materials/Material.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L65)

___

### depthCompare

• `get` **depthCompare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Defined in

[src/materials/Material.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L69)

• `set` **depthCompare**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Defined in

[src/materials/Material.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L73)

___

### transparent

• `get` **transparent**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/materials/Material.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L78)

• `set` **transparent**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/materials/Material.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L82)

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

#### Returns

`GPUCullMode`

#### Defined in

[src/materials/Material.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L89)

• `set` **cullMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCullMode` |

#### Returns

`void`

#### Defined in

[src/materials/Material.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L93)

___

### depthWriteEnabled

• `get` **depthWriteEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/materials/Material.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L97)

• `set` **depthWriteEnabled**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

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

#### Defined in

[src/materials/Material.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L105)

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

#### Defined in

[src/materials/Material.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L114)

___

### getAllPass

▸ **getAllPass**(): [`RenderShaderPass`](RenderShaderPass.md)[]

get all color render pass

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)[]

#### Defined in

[src/materials/Material.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L122)

___

### clone

▸ **clone**(): [`Material`](Material.md)

clone one material

#### Returns

[`Material`](Material.md)

Material

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

#### Defined in

[src/materials/Material.ts:212](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L212)

___

### applyUniform

▸ **applyUniform**(): `void`

#### Returns

`void`

#### Defined in

[src/materials/Material.ts:216](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L216)
