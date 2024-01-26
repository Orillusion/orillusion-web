# Class: StandShader

## Hierarchy

- [`Shader`](Shader.md)

  ↳ **`StandShader`**

### Constructors

- [constructor](StandShader.md#constructor)

### Properties

- [computes](StandShader.md#computes)
- [passShader](StandShader.md#passshader)

### Accessors

- [baseMap](StandShader.md#basemap)
- [baseColor](StandShader.md#basecolor)
- [normalMap](StandShader.md#normalmap)
- [doubleSide](StandShader.md#doubleside)
- [alphaCutoff](StandShader.md#alphacutoff)
- [emissiveColor](StandShader.md#emissivecolor)
- [emissiveIntensity](StandShader.md#emissiveintensity)
- [uvTransform\_1](StandShader.md#uvtransform_1)
- [uvTransform\_2](StandShader.md#uvtransform_2)
- [depthWriteEnabled](StandShader.md#depthwriteenabled)
- [materialF0](StandShader.md#materialf0)
- [specularColor](StandShader.md#specularcolor)
- [roughness](StandShader.md#roughness)
- [metallic](StandShader.md#metallic)
- [ao](StandShader.md#ao)
- [metallic\_min](StandShader.md#metallic_min)
- [metallic\_max](StandShader.md#metallic_max)
- [roughness\_min](StandShader.md#roughness_min)
- [roughness\_max](StandShader.md#roughness_max)
- [normalScale](StandShader.md#normalscale)
- [maskMap](StandShader.md#maskmap)
- [aoMap](StandShader.md#aomap)
- [clearCoatRoughnessMap](StandShader.md#clearcoatroughnessmap)
- [brdfLUT](StandShader.md#brdflut)
- [emissiveMap](StandShader.md#emissivemap)
- [envIntensity](StandShader.md#envintensity)
- [ior](StandShader.md#ior)
- [clearcoatFactor](StandShader.md#clearcoatfactor)
- [clearcoatRoughnessFactor](StandShader.md#clearcoatroughnessfactor)
- [clearcoatWeight](StandShader.md#clearcoatweight)
- [clearcoatColor](StandShader.md#clearcoatcolor)

### Methods

- [addRenderPass](StandShader.md#addrenderpass)
- [removeShader](StandShader.md#removeshader)
- [removeShaderByIndex](StandShader.md#removeshaderbyindex)
- [getSubShaders](StandShader.md#getsubshaders)
- [hasSubShaders](StandShader.md#hassubshaders)
- [getDefaultShaders](StandShader.md#getdefaultshaders)
- [getDefaultColorShader](StandShader.md#getdefaultcolorshader)
- [setDefine](StandShader.md#setdefine)
- [deleteDefine](StandShader.md#deletedefine)
- [setUniform](StandShader.md#setuniform)
- [setUniformFloat](StandShader.md#setuniformfloat)
- [setUniformVector2](StandShader.md#setuniformvector2)
- [setUniformVector3](StandShader.md#setuniformvector3)
- [setUniformVector4](StandShader.md#setuniformvector4)
- [setUniformColor](StandShader.md#setuniformcolor)
- [getUniform](StandShader.md#getuniform)
- [getUniformFloat](StandShader.md#getuniformfloat)
- [getUniformVector2](StandShader.md#getuniformvector2)
- [getUniformVector3](StandShader.md#getuniformvector3)
- [getUniformVector4](StandShader.md#getuniformvector4)
- [getUniformColor](StandShader.md#getuniformcolor)
- [setTexture](StandShader.md#settexture)
- [getTexture](StandShader.md#gettexture)
- [setUniformBuffer](StandShader.md#setuniformbuffer)
- [getUniformBuffer](StandShader.md#getuniformbuffer)
- [setStorageBuffer](StandShader.md#setstoragebuffer)
- [getStorageBuffer](StandShader.md#getstoragebuffer)
- [setStructStorageBuffer](StandShader.md#setstructstoragebuffer)
- [getStructStorageBuffer](StandShader.md#getstructstoragebuffer)
- [noticeValueChange](StandShader.md#noticevaluechange)
- [destroy](StandShader.md#destroy)
- [clone](StandShader.md#clone)
- [applyUniform](StandShader.md#applyuniform)
- [setDefault](StandShader.md#setdefault)
- [useCleanCoat](StandShader.md#usecleancoat)

## Constructors

### constructor

• **new StandShader**(): [`StandShader`](StandShader.md)

#### Returns

[`StandShader`](StandShader.md)

#### Overrides

[Shader](Shader.md).[constructor](Shader.md#constructor)

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L13)

## Properties

### computes

• **computes**: [`RenderShaderCompute`](RenderShaderCompute.md)[]

#### Inherited from

[Shader](Shader.md).[computes](Shader.md#computes)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L19)

___

### passShader

• **passShader**: `Map`\<`PassType`, [`RenderShaderPass`](RenderShaderPass.md)[]\>

#### Inherited from

[Shader](Shader.md).[passShader](Shader.md#passshader)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L21)

## Accessors

### baseMap

• `get` **baseMap**(): [`Texture`](Texture.md)

#### Returns

[`Texture`](Texture.md)

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L66)

• `set` **baseMap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L70)

___

### baseColor

• `get` **baseColor**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L74)

• `set` **baseColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L78)

___

### normalMap

• `get` **normalMap**(): [`Texture`](Texture.md)

#### Returns

[`Texture`](Texture.md)

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L82)

• `set` **normalMap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:86](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L86)

___

### doubleSide

• `get` **doubleSide**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L90)

• `set` **doubleSide**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L93)

___

### alphaCutoff

• `get` **alphaCutoff**(): `any`

#### Returns

`any`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L97)

• `set` **alphaCutoff**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:100](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L100)

___

### emissiveColor

• `get` **emissiveColor**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L106)

• `set` **emissiveColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L110)

___

### emissiveIntensity

• `get` **emissiveIntensity**(): `number`

#### Returns

`number`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L114)

• `set` **emissiveIntensity**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L118)

___

### uvTransform\_1

• `get` **uvTransform_1**(): `Vector4`

get transformUV1

#### Returns

`Vector4`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L125)

• `set` **uvTransform_1**(`value`): `void`

set transformUV1

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector4` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L132)

___

### uvTransform\_2

• `get` **uvTransform_2**(): `Vector4`

get transformUV2

#### Returns

`Vector4`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L140)

• `set` **uvTransform_2**(`value`): `void`

set transformUV2

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector4` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:147](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L147)

___

### depthWriteEnabled

• `get` **depthWriteEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L152)

• `set` **depthWriteEnabled**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:155](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L155)

___

### materialF0

• `get` **materialF0**(): `Vector4`

get reflectivity

#### Returns

`Vector4`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:162](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L162)

• `set` **materialF0**(`value`): `void`

set reflectivity

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector4` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:169](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L169)

___

### specularColor

• `get` **specularColor**(): [`Color`](Color.md)

get specularColor

#### Returns

[`Color`](Color.md)

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:176](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L176)

• `set` **specularColor**(`value`): `void`

specularColor
set reflectivity

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:183](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L183)

___

### roughness

• `get` **roughness**(): `number`

get roughness

#### Returns

`number`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:190](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L190)

• `set` **roughness**(`value`): `void`

set roughness

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:197](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L197)

___

### metallic

• `get` **metallic**(): `number`

get metallic

#### Returns

`number`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:204](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L204)

• `set` **metallic**(`value`): `void`

set metallic

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:211](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L211)

___

### ao

• `get` **ao**(): `number`

get Ambient Occlussion, dealing with the effect of ambient light on object occlusion

#### Returns

`number`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:218](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L218)

• `set` **ao**(`value`): `void`

set Ambient Occlussion, dealing with the effect of ambient light on object occlusion

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:225](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L225)

___

### metallic\_min

• `get` **metallic_min**(): `number`

get min metallic

#### Returns

`number`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:232](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L232)

• `set` **metallic_min**(`value`): `void`

set min metallic

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:239](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L239)

___

### metallic\_max

• `get` **metallic_max**(): `number`

get max metallic

#### Returns

`number`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:246](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L246)

• `set` **metallic_max**(`value`): `void`

set max metallic

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:253](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L253)

___

### roughness\_min

• `get` **roughness_min**(): `number`

get min roughness

#### Returns

`number`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:260](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L260)

• `set` **roughness_min**(`value`): `void`

set min roughness

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:267](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L267)

___

### roughness\_max

• `get` **roughness_max**(): `number`

get max roughness

#### Returns

`number`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:274](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L274)

• `set` **roughness_max**(`value`): `void`

set max roughness

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:281](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L281)

___

### normalScale

• `get` **normalScale**(): `number`

Get the influence of Normal mapping on materials

#### Returns

`number`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:288](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L288)

• `set` **normalScale**(`value`): `void`

Set the influence of Normal mapping on materials

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:295](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L295)

___

### maskMap

• `get` **maskMap**(): [`Texture`](Texture.md)

get Mask Map
R_chanel -> AoMap 
G_chanel -> Roughness
B_chanel -> Metallic
A_chanel -> C

#### Returns

[`Texture`](Texture.md)

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:306](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L306)

• `set` **maskMap**(`value`): `void`

set Mask Map
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

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:317](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L317)

___

### aoMap

• `get` **aoMap**(): [`Texture`](Texture.md)

get Ambient Occlussion Map, dealing with the effect of ambient light on object occlusion

#### Returns

[`Texture`](Texture.md)

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:340](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L340)

• `set` **aoMap**(`value`): `void`

set Ambient Occlussion Map, dealing with the effect of ambient light on object occlusion

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:329](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L329)

___

### clearCoatRoughnessMap

• `get` **clearCoatRoughnessMap**(): [`Texture`](Texture.md)

get clearCoatRoughnessMap

#### Returns

[`Texture`](Texture.md)

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:358](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L358)

• `set` **clearCoatRoughnessMap**(`value`): `void`

set clearCoatRoughnessMap

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:347](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L347)

___

### brdfLUT

• `get` **brdfLUT**(): [`Texture`](Texture.md)

get brdf query map

#### Returns

[`Texture`](Texture.md)

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:365](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L365)

• `set` **brdfLUT**(`value`): `void`

set brdf query map

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:372](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L372)

___

### emissiveMap

• `get` **emissiveMap**(): [`Texture`](Texture.md)

get emissive map

#### Returns

[`Texture`](Texture.md)

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:380](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L380)

• `set` **emissiveMap**(`value`): `void`

set emissive map

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:387](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L387)

___

### envIntensity

• `get` **envIntensity**(): `number`

get intensity of environment light or color of sampled by texture

#### Returns

`number`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:401](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L401)

• `set` **envIntensity**(`value`): `void`

set intensity of environment light or color of sampled by texture

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:394](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L394)

___

### ior

• `get` **ior**(): `number`

get factor of refractive

#### Returns

`number`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:415](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L415)

• `set` **ior**(`value`): `void`

set factor of refractive

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:408](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L408)

___

### clearcoatFactor

• `get` **clearcoatFactor**(): `number`

get the factor of the clearcoat

#### Returns

`number`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:437](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L437)

• `set` **clearcoatFactor**(`value`): `void`

Set the factor of the clearcoat

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:429](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L429)

___

### clearcoatRoughnessFactor

• `get` **clearcoatRoughnessFactor**(): `number`

get the factor of the clearcoat Roughness

#### Returns

`number`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:452](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L452)

• `set` **clearcoatRoughnessFactor**(`value`): `void`

set the factor of the clearcoat Roughness

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:444](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L444)

___

### clearcoatWeight

• `get` **clearcoatWeight**(): `number`

get the weight of the clearcoat

#### Returns

`number`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:467](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L467)

• `set` **clearcoatWeight**(`value`): `void`

set the weight of the clearcoat

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:459](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L459)

___

### clearcoatColor

• `get` **clearcoatColor**(): [`Color`](Color.md)

set the color of the clearcoat

#### Returns

[`Color`](Color.md)

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:482](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L482)

• `set` **clearcoatColor**(`value`): `void`

get the color of the clearcoat

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:474](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L474)

## Methods

### addRenderPass

▸ **addRenderPass**(`renderShader`, `index?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `renderShader` | [`RenderShaderPass`](RenderShaderPass.md) | `undefined` |
| `index` | `number` | `-1` |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[addRenderPass](Shader.md#addrenderpass)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L28)

___

### removeShader

▸ **removeShader**(`renderShader`, `index?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `renderShader` | [`RenderShaderPass`](RenderShaderPass.md) | `undefined` |
| `index` | `number` | `-1` |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[removeShader](Shader.md#removeshader)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L38)

___

### removeShaderByIndex

▸ **removeShaderByIndex**(`passType`, `index?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `passType` | `PassType` | `undefined` |
| `index` | `number` | `-1` |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[removeShaderByIndex](Shader.md#removeshaderbyindex)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L52)

___

### getSubShaders

▸ **getSubShaders**(`passType`): [`RenderShaderPass`](RenderShaderPass.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `passType` | `PassType` |

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)[]

#### Inherited from

[Shader](Shader.md).[getSubShaders](Shader.md#getsubshaders)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L63)

___

### hasSubShaders

▸ **hasSubShaders**(`passType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `passType` | `PassType` |

#### Returns

`boolean`

#### Inherited from

[Shader](Shader.md).[hasSubShaders](Shader.md#hassubshaders)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L67)

___

### getDefaultShaders

▸ **getDefaultShaders**(): [`RenderShaderPass`](RenderShaderPass.md)[]

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)[]

#### Inherited from

[Shader](Shader.md).[getDefaultShaders](Shader.md#getdefaultshaders)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L72)

___

### getDefaultColorShader

▸ **getDefaultColorShader**(): [`RenderShaderPass`](RenderShaderPass.md)

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)

#### Inherited from

[Shader](Shader.md).[getDefaultColorShader](Shader.md#getdefaultcolorshader)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L76)

___

### setDefine

▸ **setDefine**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `boolean` |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setDefine](Shader.md#setdefine)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L80)

___

### deleteDefine

▸ **deleteDefine**(`arg0`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[deleteDefine](Shader.md#deletedefine)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L88)

___

### setUniform

▸ **setUniform**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `any` |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setUniform](Shader.md#setuniform)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L96)

___

### setUniformFloat

▸ **setUniformFloat**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `number` |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setUniformFloat](Shader.md#setuniformfloat)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L104)

___

### setUniformVector2

▸ **setUniformVector2**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | [`Vector2`](Vector2.md) |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setUniformVector2](Shader.md#setuniformvector2)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L112)

___

### setUniformVector3

▸ **setUniformVector3**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setUniformVector3](Shader.md#setuniformvector3)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L120)

___

### setUniformVector4

▸ **setUniformVector4**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `Vector4` |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setUniformVector4](Shader.md#setuniformvector4)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L128)

___

### setUniformColor

▸ **setUniformColor**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setUniformColor](Shader.md#setuniformcolor)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L136)

___

### getUniform

▸ **getUniform**(`arg0`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

`any`

#### Inherited from

[Shader](Shader.md).[getUniform](Shader.md#getuniform)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L144)

___

### getUniformFloat

▸ **getUniformFloat**(`arg0`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

`number`

#### Inherited from

[Shader](Shader.md).[getUniformFloat](Shader.md#getuniformfloat)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L148)

___

### getUniformVector2

▸ **getUniformVector2**(`arg0`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

[`Vector2`](Vector2.md)

#### Inherited from

[Shader](Shader.md).[getUniformVector2](Shader.md#getuniformvector2)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L152)

___

### getUniformVector3

▸ **getUniformVector3**(`arg0`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Shader](Shader.md).[getUniformVector3](Shader.md#getuniformvector3)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:156](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L156)

___

### getUniformVector4

▸ **getUniformVector4**(`arg0`): `Vector4`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

`Vector4`

#### Inherited from

[Shader](Shader.md).[getUniformVector4](Shader.md#getuniformvector4)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:160](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L160)

___

### getUniformColor

▸ **getUniformColor**(`arg0`): [`Color`](Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

[`Color`](Color.md)

#### Inherited from

[Shader](Shader.md).[getUniformColor](Shader.md#getuniformcolor)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:164](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L164)

___

### setTexture

▸ **setTexture**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setTexture](Shader.md#settexture)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:168](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L168)

___

### getTexture

▸ **getTexture**(`arg0`): [`Texture`](Texture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

[`Texture`](Texture.md)

#### Inherited from

[Shader](Shader.md).[getTexture](Shader.md#gettexture)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:177](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L177)

___

### setUniformBuffer

▸ **setUniformBuffer**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | [`UniformGPUBuffer`](UniformGPUBuffer.md) |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setUniformBuffer](Shader.md#setuniformbuffer)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:181](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L181)

___

### getUniformBuffer

▸ **getUniformBuffer**(`arg0`): `GPUBufferBase`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

`GPUBufferBase`

#### Inherited from

[Shader](Shader.md).[getUniformBuffer](Shader.md#getuniformbuffer)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:189](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L189)

___

### setStorageBuffer

▸ **setStorageBuffer**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | [`StorageGPUBuffer`](StorageGPUBuffer.md) |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setStorageBuffer](Shader.md#setstoragebuffer)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:193](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L193)

___

### getStorageBuffer

▸ **getStorageBuffer**(`arg0`): [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Inherited from

[Shader](Shader.md).[getStorageBuffer](Shader.md#getstoragebuffer)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:201](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L201)

___

### setStructStorageBuffer

▸ **setStructStorageBuffer**\<`T`\>(`arg0`, `arg1`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](Struct.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | [`StructStorageGPUBuffer`](StructStorageGPUBuffer.md)\<`T`\> |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setStructStorageBuffer](Shader.md#setstructstoragebuffer)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:205](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L205)

___

### getStructStorageBuffer

▸ **getStructStorageBuffer**(`arg0`): `GPUBufferBase`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

`GPUBufferBase`

#### Inherited from

[Shader](Shader.md).[getStructStorageBuffer](Shader.md#getstructstoragebuffer)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:213](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L213)

___

### noticeValueChange

▸ **noticeValueChange**(): `void`

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[noticeValueChange](Shader.md#noticevaluechange)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:217](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L217)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[destroy](Shader.md#destroy)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:225](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L225)

___

### clone

▸ **clone**(): [`Shader`](Shader.md)

#### Returns

[`Shader`](Shader.md)

#### Inherited from

[Shader](Shader.md).[clone](Shader.md#clone)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:229](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L229)

___

### applyUniform

▸ **applyUniform**(): `void`

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[applyUniform](Shader.md#applyuniform)

#### Defined in

[src/gfx/graphics/webGpu/shader/Shader.ts:238](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/Shader.ts#L238)

___

### setDefault

▸ **setDefault**(): `void`

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L36)

___

### useCleanCoat

▸ **useCleanCoat**(): `void`

valid USE_CLEARCOAT define in shader

#### Returns

`void`

#### Defined in

[src/loader/parser/prefab/mats/shader/StandShader.ts:422](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/mats/shader/StandShader.ts#L422)
