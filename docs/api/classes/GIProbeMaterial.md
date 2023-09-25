# Class: GIProbeMaterial

## Hierarchy

- `PhysicMaterial`

  ↳ **`GIProbeMaterial`**

### Constructors

- [constructor](GIProbeMaterial.md#constructor)

### Properties

- [count](GIProbeMaterial.md#count)
- [name](GIProbeMaterial.md#name)
- [instanceID](GIProbeMaterial.md#instanceid)
- [enable](GIProbeMaterial.md#enable)

### Accessors

- [depthCompare](GIProbeMaterial.md#depthcompare)
- [defaultPass](GIProbeMaterial.md#defaultpass)
- [castShadow](GIProbeMaterial.md#castshadow)
- [blendMode](GIProbeMaterial.md#blendmode)
- [transparent](GIProbeMaterial.md#transparent)
- [cullMode](GIProbeMaterial.md#cullmode)
- [baseMap](GIProbeMaterial.md#basemap)
- [baseColor](GIProbeMaterial.md#basecolor)
- [normalMap](GIProbeMaterial.md#normalmap)
- [doubleSide](GIProbeMaterial.md#doubleside)
- [alphaCutoff](GIProbeMaterial.md#alphacutoff)
- [emissiveColor](GIProbeMaterial.md#emissivecolor)
- [emissiveIntensity](GIProbeMaterial.md#emissiveintensity)
- [uvTransform\_1](GIProbeMaterial.md#uvtransform_1)
- [uvTransform\_2](GIProbeMaterial.md#uvtransform_2)
- [depthWriteEnabled](GIProbeMaterial.md#depthwriteenabled)
- [materialF0](GIProbeMaterial.md#materialf0)
- [roughness](GIProbeMaterial.md#roughness)
- [metallic](GIProbeMaterial.md#metallic)
- [ao](GIProbeMaterial.md#ao)
- [metallic\_min](GIProbeMaterial.md#metallic_min)
- [metallic\_max](GIProbeMaterial.md#metallic_max)
- [roughness\_min](GIProbeMaterial.md#roughness_min)
- [roughness\_max](GIProbeMaterial.md#roughness_max)
- [normalScale](GIProbeMaterial.md#normalscale)
- [maskMap](GIProbeMaterial.md#maskmap)
- [aoMap](GIProbeMaterial.md#aomap)
- [clearCoatRoughnessMap](GIProbeMaterial.md#clearcoatroughnessmap)
- [brdfLUT](GIProbeMaterial.md#brdflut)
- [emissiveMap](GIProbeMaterial.md#emissivemap)
- [envIntensity](GIProbeMaterial.md#envintensity)
- [ior](GIProbeMaterial.md#ior)
- [clearcoatFactor](GIProbeMaterial.md#clearcoatfactor)
- [clearcoatRoughnessFactor](GIProbeMaterial.md#clearcoatroughnessfactor)
- [clearcoatWeight](GIProbeMaterial.md#clearcoatweight)
- [clearcoatColor](GIProbeMaterial.md#clearcoatcolor)

### Methods

- [debug](GIProbeMaterial.md#debug)
- [hasPass](GIProbeMaterial.md#haspass)
- [getPass](GIProbeMaterial.md#getpass)
- [getAllPass](GIProbeMaterial.md#getallpass)
- [addPass](GIProbeMaterial.md#addpass)
- [removePass](GIProbeMaterial.md#removepass)
- [clone](GIProbeMaterial.md#clone)
- [destroy](GIProbeMaterial.md#destroy)
- [setDefault](GIProbeMaterial.md#setdefault)
- [useCleanCoat](GIProbeMaterial.md#usecleancoat)

## Constructors

### constructor

• **new GIProbeMaterial**(`type?`, `index?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `GIProbeMaterialType` | `GIProbeMaterialType.CastGI` |
| `index` | `number` | `0` |

#### Overrides

PhysicMaterial.constructor

#### Defined in

[src/materials/GIProbeMaterial.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/materials/GIProbeMaterial.ts#L22)

## Properties

### count

▪ `Static` **count**: `number` = `0`

#### Defined in

[src/materials/GIProbeMaterial.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/materials/GIProbeMaterial.ts#L20)

___

### name

• **name**: `string`

name of this material

#### Inherited from

PhysicMaterial.name

#### Defined in

[src/materials/Material.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L11)

___

### instanceID

• **instanceID**: `string`

Material Unique Identifier

#### Inherited from

PhysicMaterial.instanceID

#### Defined in

[src/materials/Material.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L17)

___

### enable

• **enable**: `boolean` = `true`

#### Inherited from

PhysicMaterial.enable

#### Defined in

[src/materials/Material.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L19)

## Accessors

### depthCompare

• `get` **depthCompare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Inherited from

PhysicMaterial.depthCompare

#### Defined in

[src/materials/Material.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L31)

• `set` **depthCompare**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.depthCompare

#### Defined in

[src/materials/Material.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L35)

___

### defaultPass

• `get` **defaultPass**(): [`RenderShader`](RenderShader.md)

#### Returns

[`RenderShader`](RenderShader.md)

#### Inherited from

PhysicMaterial.defaultPass

#### Defined in

[src/materials/Material.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L40)

• `set` **defaultPass**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`RenderShader`](RenderShader.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.defaultPass

#### Defined in

[src/materials/Material.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L44)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

PhysicMaterial.castShadow

#### Defined in

[src/materials/Material.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L57)

• `set` **castShadow**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.castShadow

#### Defined in

[src/materials/Material.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L62)

___

### blendMode

• `get` **blendMode**(): [`BlendMode`](../enums/BlendMode.md)

#### Returns

[`BlendMode`](../enums/BlendMode.md)

#### Inherited from

PhysicMaterial.blendMode

#### Defined in

[src/materials/Material.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L67)

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlendMode`](../enums/BlendMode.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.blendMode

#### Defined in

[src/materials/Material.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L72)

___

### transparent

• `get` **transparent**(): `boolean`

#### Returns

`boolean`

#### Inherited from

PhysicMaterial.transparent

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

PhysicMaterial.transparent

#### Defined in

[src/materials/Material.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L83)

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

#### Returns

`GPUCullMode`

#### Inherited from

PhysicMaterial.cullMode

#### Defined in

[src/materials/Material.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L91)

• `set` **cullMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCullMode` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.cullMode

#### Defined in

[src/materials/Material.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L96)

___

### baseMap

• `get` **baseMap**(): [`Texture`](Texture.md)

#### Returns

[`Texture`](Texture.md)

#### Inherited from

PhysicMaterial.baseMap

#### Defined in

[src/materials/PhysicMaterial.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L49)

• `set` **baseMap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.baseMap

#### Defined in

[src/materials/PhysicMaterial.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L53)

___

### baseColor

• `get` **baseColor**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Inherited from

PhysicMaterial.baseColor

#### Defined in

[src/materials/PhysicMaterial.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L57)

• `set` **baseColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.baseColor

#### Defined in

[src/materials/PhysicMaterial.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L61)

___

### normalMap

• `get` **normalMap**(): [`Texture`](Texture.md)

#### Returns

[`Texture`](Texture.md)

#### Inherited from

PhysicMaterial.normalMap

#### Defined in

[src/materials/PhysicMaterial.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L65)

• `set` **normalMap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.normalMap

#### Defined in

[src/materials/PhysicMaterial.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L69)

___

### doubleSide

• `get` **doubleSide**(): `boolean`

#### Returns

`boolean`

#### Inherited from

PhysicMaterial.doubleSide

#### Defined in

[src/materials/PhysicMaterial.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L73)

• `set` **doubleSide**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.doubleSide

#### Defined in

[src/materials/PhysicMaterial.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L76)

___

### alphaCutoff

• `get` **alphaCutoff**(): `any`

#### Returns

`any`

#### Inherited from

PhysicMaterial.alphaCutoff

#### Defined in

[src/materials/PhysicMaterial.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L80)

• `set` **alphaCutoff**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.alphaCutoff

#### Defined in

[src/materials/PhysicMaterial.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L83)

___

### emissiveColor

• `get` **emissiveColor**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Inherited from

PhysicMaterial.emissiveColor

#### Defined in

[src/materials/PhysicMaterial.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L89)

• `set` **emissiveColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.emissiveColor

#### Defined in

[src/materials/PhysicMaterial.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L93)

___

### emissiveIntensity

• `get` **emissiveIntensity**(): `number`

#### Returns

`number`

#### Inherited from

PhysicMaterial.emissiveIntensity

#### Defined in

[src/materials/PhysicMaterial.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L97)

• `set` **emissiveIntensity**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.emissiveIntensity

#### Defined in

[src/materials/PhysicMaterial.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L101)

___

### uvTransform\_1

• `get` **uvTransform_1**(): `Vector4`

get transformUV1

#### Returns

`Vector4`

#### Inherited from

PhysicMaterial.uvTransform\_1

#### Defined in

[src/materials/PhysicMaterial.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L108)

• `set` **uvTransform_1**(`value`): `void`

set transformUV1

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector4` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.uvTransform\_1

#### Defined in

[src/materials/PhysicMaterial.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L115)

___

### uvTransform\_2

• `get` **uvTransform_2**(): `Vector4`

get transformUV2

#### Returns

`Vector4`

#### Inherited from

PhysicMaterial.uvTransform\_2

#### Defined in

[src/materials/PhysicMaterial.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L123)

• `set` **uvTransform_2**(`value`): `void`

set transformUV2

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector4` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.uvTransform\_2

#### Defined in

[src/materials/PhysicMaterial.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L130)

___

### depthWriteEnabled

• `get` **depthWriteEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

PhysicMaterial.depthWriteEnabled

#### Defined in

[src/materials/PhysicMaterial.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L135)

• `set` **depthWriteEnabled**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.depthWriteEnabled

#### Defined in

[src/materials/PhysicMaterial.ts:138](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L138)

___

### materialF0

• `get` **materialF0**(): `Vector4`

get reflectivity

#### Returns

`Vector4`

#### Inherited from

PhysicMaterial.materialF0

#### Defined in

[src/materials/PhysicMaterial.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L145)

• `set` **materialF0**(`value`): `void`

set reflectivity

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector4` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.materialF0

#### Defined in

[src/materials/PhysicMaterial.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L152)

___

### roughness

• `get` **roughness**(): `number`

get roughness

#### Returns

`number`

#### Inherited from

PhysicMaterial.roughness

#### Defined in

[src/materials/PhysicMaterial.ts:159](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L159)

• `set` **roughness**(`value`): `void`

set roughness

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.roughness

#### Defined in

[src/materials/PhysicMaterial.ts:166](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L166)

___

### metallic

• `get` **metallic**(): `number`

get metallic

#### Returns

`number`

#### Inherited from

PhysicMaterial.metallic

#### Defined in

[src/materials/PhysicMaterial.ts:173](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L173)

• `set` **metallic**(`value`): `void`

set metallic

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.metallic

#### Defined in

[src/materials/PhysicMaterial.ts:180](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L180)

___

### ao

• `get` **ao**(): `number`

get Ambient Occlussion, dealing with the effect of ambient light on object occlusion

#### Returns

`number`

#### Inherited from

PhysicMaterial.ao

#### Defined in

[src/materials/PhysicMaterial.ts:187](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L187)

• `set` **ao**(`value`): `void`

set Ambient Occlussion, dealing with the effect of ambient light on object occlusion

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.ao

#### Defined in

[src/materials/PhysicMaterial.ts:194](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L194)

___

### metallic\_min

• `get` **metallic_min**(): `number`

get min metallic

#### Returns

`number`

#### Inherited from

PhysicMaterial.metallic\_min

#### Defined in

[src/materials/PhysicMaterial.ts:201](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L201)

• `set` **metallic_min**(`value`): `void`

set min metallic

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.metallic\_min

#### Defined in

[src/materials/PhysicMaterial.ts:208](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L208)

___

### metallic\_max

• `get` **metallic_max**(): `number`

get max metallic

#### Returns

`number`

#### Inherited from

PhysicMaterial.metallic\_max

#### Defined in

[src/materials/PhysicMaterial.ts:215](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L215)

• `set` **metallic_max**(`value`): `void`

set max metallic

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.metallic\_max

#### Defined in

[src/materials/PhysicMaterial.ts:222](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L222)

___

### roughness\_min

• `get` **roughness_min**(): `number`

get min roughness

#### Returns

`number`

#### Inherited from

PhysicMaterial.roughness\_min

#### Defined in

[src/materials/PhysicMaterial.ts:229](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L229)

• `set` **roughness_min**(`value`): `void`

set min roughness

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.roughness\_min

#### Defined in

[src/materials/PhysicMaterial.ts:236](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L236)

___

### roughness\_max

• `get` **roughness_max**(): `number`

get max roughness

#### Returns

`number`

#### Inherited from

PhysicMaterial.roughness\_max

#### Defined in

[src/materials/PhysicMaterial.ts:243](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L243)

• `set` **roughness_max**(`value`): `void`

set max roughness

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.roughness\_max

#### Defined in

[src/materials/PhysicMaterial.ts:250](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L250)

___

### normalScale

• `get` **normalScale**(): `number`

Get the influence of Normal mapping on materials

#### Returns

`number`

#### Inherited from

PhysicMaterial.normalScale

#### Defined in

[src/materials/PhysicMaterial.ts:257](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L257)

• `set` **normalScale**(`value`): `void`

Set the influence of Normal mapping on materials

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.normalScale

#### Defined in

[src/materials/PhysicMaterial.ts:264](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L264)

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

#### Inherited from

PhysicMaterial.maskMap

#### Defined in

[src/materials/PhysicMaterial.ts:275](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L275)

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

#### Inherited from

PhysicMaterial.maskMap

#### Defined in

[src/materials/PhysicMaterial.ts:286](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L286)

___

### aoMap

• `get` **aoMap**(): [`Texture`](Texture.md)

get Ambient Occlussion Map, dealing with the effect of ambient light on object occlusion

#### Returns

[`Texture`](Texture.md)

#### Inherited from

PhysicMaterial.aoMap

#### Defined in

[src/materials/PhysicMaterial.ts:307](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L307)

• `set` **aoMap**(`value`): `void`

set Ambient Occlussion Map, dealing with the effect of ambient light on object occlusion

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.aoMap

#### Defined in

[src/materials/PhysicMaterial.ts:296](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L296)

___

### clearCoatRoughnessMap

• `get` **clearCoatRoughnessMap**(): [`Texture`](Texture.md)

get clearCoatRoughnessMap

#### Returns

[`Texture`](Texture.md)

#### Inherited from

PhysicMaterial.clearCoatRoughnessMap

#### Defined in

[src/materials/PhysicMaterial.ts:325](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L325)

• `set` **clearCoatRoughnessMap**(`value`): `void`

set clearCoatRoughnessMap

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.clearCoatRoughnessMap

#### Defined in

[src/materials/PhysicMaterial.ts:314](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L314)

___

### brdfLUT

• `get` **brdfLUT**(): [`Texture`](Texture.md)

get brdf query map

#### Returns

[`Texture`](Texture.md)

#### Inherited from

PhysicMaterial.brdfLUT

#### Defined in

[src/materials/PhysicMaterial.ts:332](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L332)

• `set` **brdfLUT**(`value`): `void`

set brdf query map

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.brdfLUT

#### Defined in

[src/materials/PhysicMaterial.ts:339](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L339)

___

### emissiveMap

• `get` **emissiveMap**(): [`Texture`](Texture.md)

get emissive map

#### Returns

[`Texture`](Texture.md)

#### Inherited from

PhysicMaterial.emissiveMap

#### Defined in

[src/materials/PhysicMaterial.ts:347](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L347)

• `set` **emissiveMap**(`value`): `void`

set emissive map

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.emissiveMap

#### Defined in

[src/materials/PhysicMaterial.ts:354](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L354)

___

### envIntensity

• `get` **envIntensity**(): `number`

get intensity of environment light or color of sampled by texture

#### Returns

`number`

#### Inherited from

PhysicMaterial.envIntensity

#### Defined in

[src/materials/PhysicMaterial.ts:368](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L368)

• `set` **envIntensity**(`value`): `void`

set intensity of environment light or color of sampled by texture

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.envIntensity

#### Defined in

[src/materials/PhysicMaterial.ts:361](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L361)

___

### ior

• `get` **ior**(): `number`

get factor of refractive

#### Returns

`number`

#### Inherited from

PhysicMaterial.ior

#### Defined in

[src/materials/PhysicMaterial.ts:382](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L382)

• `set` **ior**(`value`): `void`

set factor of refractive

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.ior

#### Defined in

[src/materials/PhysicMaterial.ts:375](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L375)

___

### clearcoatFactor

• `get` **clearcoatFactor**(): `number`

get the factor of the clearcoat

#### Returns

`number`

#### Inherited from

PhysicMaterial.clearcoatFactor

#### Defined in

[src/materials/PhysicMaterial.ts:404](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L404)

• `set` **clearcoatFactor**(`value`): `void`

Set the factor of the clearcoat

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.clearcoatFactor

#### Defined in

[src/materials/PhysicMaterial.ts:396](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L396)

___

### clearcoatRoughnessFactor

• `get` **clearcoatRoughnessFactor**(): `number`

get the factor of the clearcoat Roughness

#### Returns

`number`

#### Inherited from

PhysicMaterial.clearcoatRoughnessFactor

#### Defined in

[src/materials/PhysicMaterial.ts:419](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L419)

• `set` **clearcoatRoughnessFactor**(`value`): `void`

set the factor of the clearcoat Roughness

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.clearcoatRoughnessFactor

#### Defined in

[src/materials/PhysicMaterial.ts:411](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L411)

___

### clearcoatWeight

• `get` **clearcoatWeight**(): `number`

get the weight of the clearcoat

#### Returns

`number`

#### Inherited from

PhysicMaterial.clearcoatWeight

#### Defined in

[src/materials/PhysicMaterial.ts:434](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L434)

• `set` **clearcoatWeight**(`value`): `void`

set the weight of the clearcoat

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.clearcoatWeight

#### Defined in

[src/materials/PhysicMaterial.ts:426](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L426)

___

### clearcoatColor

• `get` **clearcoatColor**(): [`Color`](Color.md)

set the color of the clearcoat

#### Returns

[`Color`](Color.md)

#### Inherited from

PhysicMaterial.clearcoatColor

#### Defined in

[src/materials/PhysicMaterial.ts:449](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L449)

• `set` **clearcoatColor**(`value`): `void`

get the color of the clearcoat

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.clearcoatColor

#### Defined in

[src/materials/PhysicMaterial.ts:441](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L441)

## Methods

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Defined in

[src/materials/GIProbeMaterial.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/materials/GIProbeMaterial.ts#L50)

___

### hasPass

▸ **hasPass**(`passType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `passType` | `RendererType` |

#### Returns

`boolean`

#### Inherited from

PhysicMaterial.hasPass

#### Defined in

[src/materials/Material.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L105)

___

### getPass

▸ **getPass**(`passType`): [`RenderShader`](RenderShader.md)[]

get render pass by renderType

#### Parameters

| Name | Type |
| :------ | :------ |
| `passType` | `RendererType` |

#### Returns

[`RenderShader`](RenderShader.md)[]

#### Inherited from

PhysicMaterial.getPass

#### Defined in

[src/materials/Material.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L114)

___

### getAllPass

▸ **getAllPass**(): [`RenderShader`](RenderShader.md)[]

get all color render pass

#### Returns

[`RenderShader`](RenderShader.md)[]

#### Inherited from

PhysicMaterial.getAllPass

#### Defined in

[src/materials/Material.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L122)

___

### addPass

▸ **addPass**(`passType`, `pass`, `index?`): [`RenderShader`](RenderShader.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `passType` | `RendererType` | `undefined` |
| `pass` | [`RenderShader`](RenderShader.md) | `undefined` |
| `index` | `number` | `-1` |

#### Returns

[`RenderShader`](RenderShader.md)[]

#### Inherited from

PhysicMaterial.addPass

#### Defined in

[src/materials/Material.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L126)

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

[src/materials/Material.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L145)

___

### clone

▸ **clone**(): `any`

clone one material

#### Returns

`any`

Material

#### Inherited from

PhysicMaterial.clone

#### Defined in

[src/materials/Material.ts:158](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L158)

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

PhysicMaterial.destroy

#### Defined in

[src/materials/Material.ts:162](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L162)

___

### setDefault

▸ **setDefault**(): `void`

Set the render shader default value

#### Returns

`void`

#### Inherited from

PhysicMaterial.setDefault

#### Defined in

[src/materials/PhysicMaterial.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L22)

___

### useCleanCoat

▸ **useCleanCoat**(): `void`

valid USE_CLEARCOAT define in shader

#### Returns

`void`

#### Inherited from

PhysicMaterial.useCleanCoat

#### Defined in

[src/materials/PhysicMaterial.ts:389](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L389)
