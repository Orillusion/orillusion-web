# Class: GrassMaterial

## Hierarchy

- `Material`

  ↳ **`GrassMaterial`**

### Constructors

- [constructor](GrassMaterial.md#constructor)

### Properties

- [instanceID](GrassMaterial.md#instanceid)
- [name](GrassMaterial.md#name)
- [enable](GrassMaterial.md#enable)

### Accessors

- [baseMap](GrassMaterial.md#basemap)
- [windMap](GrassMaterial.md#windmap)
- [windBound](GrassMaterial.md#windbound)
- [grassBaseColor](GrassMaterial.md#grassbasecolor)
- [grassTopColor](GrassMaterial.md#grasstopcolor)
- [windDirection](GrassMaterial.md#winddirection)
- [windPower](GrassMaterial.md#windpower)
- [windSpeed](GrassMaterial.md#windspeed)
- [grassHeight](GrassMaterial.md#grassheight)
- [curvature](GrassMaterial.md#curvature)
- [roughness](GrassMaterial.md#roughness)
- [translucent](GrassMaterial.md#translucent)
- [soft](GrassMaterial.md#soft)
- [specular](GrassMaterial.md#specular)
- [shader](GrassMaterial.md#shader)
- [doubleSide](GrassMaterial.md#doubleside)
- [castShadow](GrassMaterial.md#castshadow)
- [acceptShadow](GrassMaterial.md#acceptshadow)
- [castReflection](GrassMaterial.md#castreflection)
- [blendMode](GrassMaterial.md#blendmode)
- [depthCompare](GrassMaterial.md#depthcompare)
- [transparent](GrassMaterial.md#transparent)
- [cullMode](GrassMaterial.md#cullmode)
- [depthWriteEnabled](GrassMaterial.md#depthwriteenabled)
- [useBillboard](GrassMaterial.md#usebillboard)
- [topology](GrassMaterial.md#topology)

### Methods

- [getPass](GrassMaterial.md#getpass)
- [getAllPass](GrassMaterial.md#getallpass)
- [clone](GrassMaterial.md#clone)
- [destroy](GrassMaterial.md#destroy)
- [setDefine](GrassMaterial.md#setdefine)
- [setTexture](GrassMaterial.md#settexture)
- [setStorageBuffer](GrassMaterial.md#setstoragebuffer)
- [setUniformBuffer](GrassMaterial.md#setuniformbuffer)
- [setUniformFloat](GrassMaterial.md#setuniformfloat)
- [setUniformVector2](GrassMaterial.md#setuniformvector2)
- [setUniformVector3](GrassMaterial.md#setuniformvector3)
- [setUniformVector4](GrassMaterial.md#setuniformvector4)
- [setUniformColor](GrassMaterial.md#setuniformcolor)
- [getUniformFloat](GrassMaterial.md#getuniformfloat)
- [getUniformV2](GrassMaterial.md#getuniformv2)
- [getUniformV3](GrassMaterial.md#getuniformv3)
- [getUniformV4](GrassMaterial.md#getuniformv4)
- [getUniformColor](GrassMaterial.md#getuniformcolor)
- [getTexture](GrassMaterial.md#gettexture)
- [getStorageBuffer](GrassMaterial.md#getstoragebuffer)
- [getStructStorageBuffer](GrassMaterial.md#getstructstoragebuffer)
- [getUniformBuffer](GrassMaterial.md#getuniformbuffer)
- [applyUniform](GrassMaterial.md#applyuniform)

## Constructors

### constructor

• **new GrassMaterial**(): [`GrassMaterial`](GrassMaterial.md)

#### Returns

[`GrassMaterial`](GrassMaterial.md)

#### Overrides

Material.constructor

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:7](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L7)

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

[packages/geometry/grass/material/GrassMaterial.ts:80](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L80)

• `set` **baseMap**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | `Texture` |

#### Returns

`void`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:76](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L76)

___

### windMap

• `set` **windMap**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | `Texture` |

#### Returns

`void`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:84](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L84)

___

### windBound

• `get` **windBound**(): `Vector4`

#### Returns

`Vector4`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:95](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L95)

• `set` **windBound**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Vector4` |

#### Returns

`void`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:91](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L91)

___

### grassBaseColor

• `get` **grassBaseColor**(): `Color`

#### Returns

`Color`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:103](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L103)

• `set` **grassBaseColor**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Color` |

#### Returns

`void`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:99](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L99)

___

### grassTopColor

• `get` **grassTopColor**(): `Color`

#### Returns

`Color`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:111](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L111)

• `set` **grassTopColor**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Color` |

#### Returns

`void`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:107](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L107)

___

### windDirection

• `get` **windDirection**(): `Vector2`

#### Returns

`Vector2`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:119](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L119)

• `set` **windDirection**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Vector2` |

#### Returns

`void`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:115](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L115)

___

### windPower

• `get` **windPower**(): `number`

#### Returns

`number`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:127](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L127)

• `set` **windPower**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:123](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L123)

___

### windSpeed

• `get` **windSpeed**(): `number`

#### Returns

`number`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:135](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L135)

• `set` **windSpeed**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:131](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L131)

___

### grassHeight

• `get` **grassHeight**(): `number`

#### Returns

`number`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:143](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L143)

• `set` **grassHeight**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:139](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L139)

___

### curvature

• `get` **curvature**(): `number`

#### Returns

`number`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:151](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L151)

• `set` **curvature**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:147](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L147)

___

### roughness

• `get` **roughness**(): `number`

#### Returns

`number`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:159](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L159)

• `set` **roughness**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:155](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L155)

___

### translucent

• `get` **translucent**(): `number`

#### Returns

`number`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:167](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L167)

• `set` **translucent**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:163](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L163)

___

### soft

• `get` **soft**(): `number`

#### Returns

`number`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:175](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L175)

• `set` **soft**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:171](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L171)

___

### specular

• `get` **specular**(): `number`

#### Returns

`number`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:183](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L183)

• `set` **specular**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[packages/geometry/grass/material/GrassMaterial.ts:179](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/grass/material/GrassMaterial.ts#L179)

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

___

### topology

• `get` **topology**(): `GPUPrimitiveTopology`

#### Returns

`GPUPrimitiveTopology`

#### Inherited from

Material.topology

#### Defined in

[src/materials/Material.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L140)

• `set` **topology**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUPrimitiveTopology` |

#### Returns

`void`

#### Inherited from

Material.topology

#### Defined in

[src/materials/Material.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L144)

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

[src/materials/Material.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L153)

___

### getAllPass

▸ **getAllPass**(): `RenderShaderPass`[]

get all color render pass

#### Returns

`RenderShaderPass`[]

#### Inherited from

Material.getAllPass

#### Defined in

[src/materials/Material.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L161)

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

[src/materials/Material.ts:169](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L169)

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

[src/materials/Material.ts:176](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L176)

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

[src/materials/Material.ts:182](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L182)

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

[src/materials/Material.ts:186](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L186)

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

[src/materials/Material.ts:190](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L190)

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

[src/materials/Material.ts:194](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L194)

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

[src/materials/Material.ts:199](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L199)

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

[src/materials/Material.ts:203](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L203)

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

[src/materials/Material.ts:207](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L207)

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

[src/materials/Material.ts:211](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L211)

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

[src/materials/Material.ts:215](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L215)

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

[src/materials/Material.ts:219](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L219)

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

[src/materials/Material.ts:223](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L223)

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

[src/materials/Material.ts:227](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L227)

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

[src/materials/Material.ts:231](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L231)

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

[src/materials/Material.ts:235](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L235)

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

[src/materials/Material.ts:239](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L239)

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

[src/materials/Material.ts:243](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L243)

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

[src/materials/Material.ts:247](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L247)

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

[src/materials/Material.ts:251](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L251)

___

### applyUniform

▸ **applyUniform**(): `void`

#### Returns

`void`

#### Inherited from

Material.applyUniform

#### Defined in

[src/materials/Material.ts:255](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L255)
