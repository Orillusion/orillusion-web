# Class: ParticleMaterial

material of particle renderer

## Hierarchy

- `Material`

  ↳ **`ParticleMaterial`**

### Constructors

- [constructor](ParticleMaterial.md#constructor)

### Properties

- [instanceID](ParticleMaterial.md#instanceid)
- [name](ParticleMaterial.md#name)
- [enable](ParticleMaterial.md#enable)

### Accessors

- [baseMap](ParticleMaterial.md#basemap)
- [envMap](ParticleMaterial.md#envmap)
- [shadowMap](ParticleMaterial.md#shadowmap)
- [shader](ParticleMaterial.md#shader)
- [doubleSide](ParticleMaterial.md#doubleside)
- [castShadow](ParticleMaterial.md#castshadow)
- [blendMode](ParticleMaterial.md#blendmode)
- [depthCompare](ParticleMaterial.md#depthcompare)
- [transparent](ParticleMaterial.md#transparent)
- [cullMode](ParticleMaterial.md#cullmode)
- [depthWriteEnabled](ParticleMaterial.md#depthwriteenabled)
- [useBillboard](ParticleMaterial.md#usebillboard)

### Methods

- [getPass](ParticleMaterial.md#getpass)
- [getAllPass](ParticleMaterial.md#getallpass)
- [clone](ParticleMaterial.md#clone)
- [destroy](ParticleMaterial.md#destroy)
- [setDefine](ParticleMaterial.md#setdefine)
- [setTexture](ParticleMaterial.md#settexture)
- [setStorageBuffer](ParticleMaterial.md#setstoragebuffer)
- [setUniformBuffer](ParticleMaterial.md#setuniformbuffer)
- [setUniformFloat](ParticleMaterial.md#setuniformfloat)
- [setUniformVector2](ParticleMaterial.md#setuniformvector2)
- [setUniformVector3](ParticleMaterial.md#setuniformvector3)
- [setUniformVector4](ParticleMaterial.md#setuniformvector4)
- [setUniformColor](ParticleMaterial.md#setuniformcolor)
- [getUniformFloat](ParticleMaterial.md#getuniformfloat)
- [getUniformV2](ParticleMaterial.md#getuniformv2)
- [getUniformV3](ParticleMaterial.md#getuniformv3)
- [getUniformV4](ParticleMaterial.md#getuniformv4)
- [getUniformColor](ParticleMaterial.md#getuniformcolor)
- [getTexture](ParticleMaterial.md#gettexture)
- [getStorageBuffer](ParticleMaterial.md#getstoragebuffer)
- [getStructStorageBuffer](ParticleMaterial.md#getstructstoragebuffer)
- [getUniformBuffer](ParticleMaterial.md#getuniformbuffer)
- [applyUniform](ParticleMaterial.md#applyuniform)

## Constructors

### constructor

• **new ParticleMaterial**()

#### Overrides

Material.constructor

#### Defined in

[packages/particle/material/ParticleMaterial.ts:9](https://github.com/Orillusion/orillusion/blob/main/packages/particle/material/ParticleMaterial.ts#L9)

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

[packages/particle/material/ParticleMaterial.ts:46](https://github.com/Orillusion/orillusion/blob/main/packages/particle/material/ParticleMaterial.ts#L46)

• `set` **baseMap**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | `Texture` |

#### Returns

`void`

#### Defined in

[packages/particle/material/ParticleMaterial.ts:41](https://github.com/Orillusion/orillusion/blob/main/packages/particle/material/ParticleMaterial.ts#L41)

___

### envMap

• `set` **envMap**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | `Texture` |

#### Returns

`void`

#### Defined in

[packages/particle/material/ParticleMaterial.ts:50](https://github.com/Orillusion/orillusion/blob/main/packages/particle/material/ParticleMaterial.ts#L50)

___

### shadowMap

• `set` **shadowMap**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | `Texture` |

#### Returns

`void`

#### Defined in

[packages/particle/material/ParticleMaterial.ts:54](https://github.com/Orillusion/orillusion/blob/main/packages/particle/material/ParticleMaterial.ts#L54)

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

### blendMode

• `get` **blendMode**(): `BlendMode`

#### Returns

`BlendMode`

#### Inherited from

Material.blendMode

#### Defined in

[src/materials/Material.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L61)

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

[src/materials/Material.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L114)

___

### getAllPass

▸ **getAllPass**(): `RenderShaderPass`[]

get all color render pass

#### Returns

`RenderShaderPass`[]

#### Inherited from

Material.getAllPass

#### Defined in

[src/materials/Material.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L122)

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

Material.destroy

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

Material.setDefine

#### Defined in

[src/materials/Material.ts:143](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L143)

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

[src/materials/Material.ts:147](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L147)

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

[src/materials/Material.ts:151](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L151)

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

Material.setUniformFloat

#### Defined in

[src/materials/Material.ts:160](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L160)

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

[src/materials/Material.ts:164](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L164)

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

Material.setUniformVector4

#### Defined in

[src/materials/Material.ts:172](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L172)

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

Material.getUniformFloat

#### Defined in

[src/materials/Material.ts:180](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L180)

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

[src/materials/Material.ts:184](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L184)

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

Material.getUniformV4

#### Defined in

[src/materials/Material.ts:192](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L192)

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

[src/materials/Material.ts:196](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L196)

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

[src/materials/Material.ts:200](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L200)

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

Material.getStructStorageBuffer

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

Material.getUniformBuffer

#### Defined in

[src/materials/Material.ts:212](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L212)

___

### applyUniform

▸ **applyUniform**(): `void`

#### Returns

`void`

#### Inherited from

Material.applyUniform

#### Defined in

[src/materials/Material.ts:216](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L216)
