# Class: GlassMaterial

GlassMaterial
an rendering material implemented by simulating glass surfaces

## Hierarchy

- `PhysicMaterial`

  ↳ **`GlassMaterial`**


### Constructors

- [constructor](GlassMaterial.md#constructor)

### Methods

- [clone](GlassMaterial.md#clone)
- [setDefine](GlassMaterial.md#setdefine)
- [hasPass](GlassMaterial.md#haspass)
- [addPass](GlassMaterial.md#addpass)
- [removePass](GlassMaterial.md#removepass)
- [destroy](GlassMaterial.md#destroy)
- [setShader](GlassMaterial.md#setshader)
- [getShader](GlassMaterial.md#getshader)
- [useCleanCoat](GlassMaterial.md#usecleancoat)
- [debug](GlassMaterial.md#debug)

### Properties

- [name](GlassMaterial.md#name)
- [instanceID](GlassMaterial.md#instanceid)
- [isPassMaterial](GlassMaterial.md#ispassmaterial)
- [receiveEnv](GlassMaterial.md#receiveenv)
- [renderPasses](GlassMaterial.md#renderpasses)
- [enable](GlassMaterial.md#enable)
- [renderShader](GlassMaterial.md#rendershader)

### Accessors

- [shaderState](GlassMaterial.md#shaderstate)
- [normalMapYFlip](GlassMaterial.md#normalmapyflip)
- [shadowMap](GlassMaterial.md#shadowmap)
- [envMap](GlassMaterial.md#envmap)
- [baseMap](GlassMaterial.md#basemap)
- [normalMap](GlassMaterial.md#normalmap)
- [emissiveColor](GlassMaterial.md#emissivecolor)
- [emissiveIntensity](GlassMaterial.md#emissiveintensity)
- [alphaCutoff](GlassMaterial.md#alphacutoff)
- [irradianceMap](GlassMaterial.md#irradiancemap)
- [irradianceDepthMap](GlassMaterial.md#irradiancedepthmap)
- [baseColor](GlassMaterial.md#basecolor)
- [sort](GlassMaterial.md#sort)
- [shaderID](GlassMaterial.md#shaderid)
- [blendMode](GlassMaterial.md#blendmode)
- [transparent](GlassMaterial.md#transparent)
- [frontFace](GlassMaterial.md#frontface)
- [doubleSide](GlassMaterial.md#doubleside)
- [cullMode](GlassMaterial.md#cullmode)
- [depthBias](GlassMaterial.md#depthbias)
- [depthCompare](GlassMaterial.md#depthcompare)
- [uvTransform\_1](GlassMaterial.md#uvtransform_1)
- [uvTransform\_2](GlassMaterial.md#uvtransform_2)
- [materialF0](GlassMaterial.md#materialf0)
- [roughness](GlassMaterial.md#roughness)
- [metallic](GlassMaterial.md#metallic)
- [ao](GlassMaterial.md#ao)
- [metallic\_min](GlassMaterial.md#metallic_min)
- [metallic\_max](GlassMaterial.md#metallic_max)
- [roughness\_min](GlassMaterial.md#roughness_min)
- [roughness\_max](GlassMaterial.md#roughness_max)
- [normalScale](GlassMaterial.md#normalscale)
- [maskMap](GlassMaterial.md#maskmap)
- [aoMap](GlassMaterial.md#aomap)
- [clearCoatRoughnessMap](GlassMaterial.md#clearcoatroughnessmap)
- [brdfLUT](GlassMaterial.md#brdflut)
- [emissiveMap](GlassMaterial.md#emissivemap)
- [envIntensity](GlassMaterial.md#envintensity)
- [ior](GlassMaterial.md#ior)
- [clearcoatFactor](GlassMaterial.md#clearcoatfactor)
- [clearcoatRoughnessFactor](GlassMaterial.md#clearcoatroughnessfactor)
- [clearcoatWeight](GlassMaterial.md#clearcoatweight)
- [clearcoatColor](GlassMaterial.md#clearcoatcolor)

## Constructors

### constructor

• **new GlassMaterial**()

#### Overrides

PhysicMaterial.constructor

#### Defined in

[src/materials/GlassMaterial.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/materials/GlassMaterial.ts#L18)

## Methods

### clone

▸ **clone**(): [`GlassMaterial`](GlassMaterial.md)

#### Returns

[`GlassMaterial`](GlassMaterial.md)

#### Overrides

PhysicMaterial.clone

#### Defined in

[src/materials/GlassMaterial.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/materials/GlassMaterial.ts#L48)

___

### setDefine

▸ **setDefine**(`define`, `bool`): `void`

Enable/Disable the definition of shaders

**`Memberof`**

MaterialBase

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `define` | `string` | key |
| `bool` | `boolean` | - |

#### Returns

`void`

#### Inherited from

PhysicMaterial.setDefine

#### Defined in

[src/materials/MaterialBase.ts:309](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L309)

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

[src/materials/MaterialBase.ts:313](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L313)

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

[src/materials/MaterialBase.ts:317](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L317)

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

[src/materials/MaterialBase.ts:333](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L333)

___

### destroy

▸ **destroy**(): `void`

destroy self

#### Returns

`void`

#### Inherited from

PhysicMaterial.destroy

#### Defined in

[src/materials/MaterialBase.ts:346](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L346)

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

[src/materials/MaterialPass.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L39)

___

### getShader

▸ **getShader**(): [`RenderShader`](RenderShader.md)

#### Returns

[`RenderShader`](RenderShader.md)

#### Inherited from

PhysicMaterial.getShader

#### Defined in

[src/materials/MaterialPass.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L46)

___

### useCleanCoat

▸ **useCleanCoat**(): `void`

valid USE_CLEARCOAT define in shader

#### Returns

`void`

#### Inherited from

PhysicMaterial.useCleanCoat

#### Defined in

[src/materials/PhysicMaterial.ts:288](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L288)

___

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Inherited from

PhysicMaterial.debug

#### Defined in

[src/materials/PhysicMaterial.ts:349](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L349)

## Properties

### name

• **name**: `string`

name of this material

#### Inherited from

PhysicMaterial.name

#### Defined in

[src/materials/MaterialBase.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L23)

___

### instanceID

• **instanceID**: `string`

Material Unique Identifier

#### Inherited from

PhysicMaterial.instanceID

#### Defined in

[src/materials/MaterialBase.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L29)

___

### isPassMaterial

• **isPassMaterial**: `boolean` = `false`

is PassMaterial

#### Inherited from

PhysicMaterial.isPassMaterial

#### Defined in

[src/materials/MaterialBase.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L34)

___

### receiveEnv

• **receiveEnv**: `boolean` = `true`

Whether to receive environment effect

#### Inherited from

PhysicMaterial.receiveEnv

#### Defined in

[src/materials/MaterialBase.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L39)

___

### renderPasses

• **renderPasses**: `Map`<`RendererType`, [`MaterialPass`](MaterialPass.md)[]\>

#### Inherited from

PhysicMaterial.renderPasses

#### Defined in

[src/materials/MaterialPass.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L8)

___

### enable

• **enable**: `boolean` = `true`

whether the pass is enable

#### Inherited from

PhysicMaterial.enable

#### Defined in

[src/materials/MaterialPass.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L13)

___

### renderShader

• **renderShader**: [`RenderShader`](RenderShader.md)

#### Inherited from

PhysicMaterial.renderShader

#### Defined in

[src/materials/MaterialPass.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L15)

## Accessors

### shaderState

• `get` **shaderState**(): `ShaderState`

#### Returns

`ShaderState`

#### Inherited from

PhysicMaterial.shaderState

#### Defined in

[src/materials/MaterialBase.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L44)

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

[src/materials/MaterialBase.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L48)

___

### normalMapYFlip

• `get` **normalMapYFlip**(): `boolean`

#### Returns

`boolean`

#### Inherited from

PhysicMaterial.normalMapYFlip

#### Defined in

[src/materials/MaterialBase.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L53)

• `set` **normalMapYFlip**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.normalMapYFlip

#### Defined in

[src/materials/MaterialBase.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L57)

___

### shadowMap

• `set` **shadowMap**(`texture`): `void`

Set shadow map

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.shadowMap

#### Defined in

[src/materials/MaterialBase.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L67)

___

### envMap

• `set` **envMap**(`texture`): `void`

Set environment map

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.envMap

#### Defined in

[src/materials/MaterialBase.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L74)

___

### baseMap

• `get` **baseMap**(): [`Texture`](Texture.md)

Get base map(main map)

#### Returns

[`Texture`](Texture.md)

#### Inherited from

PhysicMaterial.baseMap

#### Defined in

[src/materials/MaterialBase.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L90)

• `set` **baseMap**(`texture`): `void`

Set base map(main map)

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.baseMap

#### Defined in

[src/materials/MaterialBase.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L81)

___

### normalMap

• `get` **normalMap**(): [`Texture`](Texture.md)

Get normal map

#### Returns

[`Texture`](Texture.md)

#### Inherited from

PhysicMaterial.normalMap

#### Defined in

[src/materials/MaterialBase.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L97)

• `set` **normalMap**(`texture`): `void`

Set normal map

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.normalMap

#### Defined in

[src/materials/MaterialBase.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L104)

___

### emissiveColor

• `get` **emissiveColor**(): [`Color`](Color.md)

Get emissive color

#### Returns

[`Color`](Color.md)

#### Inherited from

PhysicMaterial.emissiveColor

#### Defined in

[src/materials/MaterialBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L119)

• `set` **emissiveColor**(`value`): `void`

Set emissive color

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.emissiveColor

#### Defined in

[src/materials/MaterialBase.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L126)

___

### emissiveIntensity

• `get` **emissiveIntensity**(): `number`

Get emissive intensity

#### Returns

`number`

#### Inherited from

PhysicMaterial.emissiveIntensity

#### Defined in

[src/materials/MaterialBase.ts:142](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L142)

• `set` **emissiveIntensity**(`value`): `void`

Set emissive intensity

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.emissiveIntensity

#### Defined in

[src/materials/MaterialBase.ts:134](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L134)

___

### alphaCutoff

• `get` **alphaCutoff**(): `number`

Get alphaCutoff, channel transparency threshold parameter

#### Returns

`number`

#### Inherited from

PhysicMaterial.alphaCutoff

#### Defined in

[src/materials/MaterialBase.ts:191](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L191)

• `set` **alphaCutoff**(`value`): `void`

Set alphaCutoff, channel transparency threshold parameter

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.alphaCutoff

#### Defined in

[src/materials/MaterialBase.ts:198](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L198)

___

### irradianceMap

• `get` **irradianceMap**(): [`Texture`](Texture.md)

Get irradiance map

#### Returns

[`Texture`](Texture.md)

#### Inherited from

PhysicMaterial.irradianceMap

#### Defined in

[src/materials/MaterialBase.ts:214](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L214)

• `set` **irradianceMap**(`value`): `void`

Set irradiance map

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.irradianceMap

#### Defined in

[src/materials/MaterialBase.ts:221](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L221)

___

### irradianceDepthMap

• `get` **irradianceDepthMap**(): [`Texture`](Texture.md)

Get irradiance depth map

#### Returns

[`Texture`](Texture.md)

#### Inherited from

PhysicMaterial.irradianceDepthMap

#### Defined in

[src/materials/MaterialBase.ts:229](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L229)

• `set` **irradianceDepthMap**(`value`): `void`

Set irradiance depth map

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.irradianceDepthMap

#### Defined in

[src/materials/MaterialBase.ts:236](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L236)

___

### baseColor

• `get` **baseColor**(): [`Color`](Color.md)

Get base color(tint color)

#### Returns

[`Color`](Color.md)

#### Inherited from

PhysicMaterial.baseColor

#### Defined in

[src/materials/MaterialBase.ts:244](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L244)

• `set` **baseColor**(`value`): `void`

Set base color(tint color)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.baseColor

#### Defined in

[src/materials/MaterialBase.ts:251](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L251)

___

### sort

• `get` **sort**(): `number`

#### Returns

`number`

#### Inherited from

PhysicMaterial.sort

#### Defined in

[src/materials/MaterialPass.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L23)

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

[src/materials/MaterialPass.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L27)

___

### shaderID

• `get` **shaderID**(): `string`

#### Returns

`string`

#### Inherited from

PhysicMaterial.shaderID

#### Defined in

[src/materials/MaterialPass.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L31)

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

[src/materials/MaterialPass.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L35)

___

### blendMode

• `get` **blendMode**(): [`BlendMode`](../enums/BlendMode.md)

Get blend mode, see [BlendMode](../enums/BlendMode.md)

#### Returns

[`BlendMode`](../enums/BlendMode.md)

#### Inherited from

PhysicMaterial.blendMode

#### Defined in

[src/materials/MaterialPass.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L53)

• `set` **blendMode**(`value`): `void`

Set blend mode, see [BlendMode](../enums/BlendMode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlendMode`](../enums/BlendMode.md) |

#### Returns

`void`

#### Inherited from

PhysicMaterial.blendMode

#### Defined in

[src/materials/MaterialPass.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L60)

___

### transparent

• `get` **transparent**(): `boolean`

Get whether use transparent mode to render

#### Returns

`boolean`

#### Inherited from

PhysicMaterial.transparent

#### Defined in

[src/materials/MaterialPass.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L68)

• `set` **transparent**(`value`): `void`

Set whether use transparent mode to render

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.transparent

#### Defined in

[src/materials/MaterialPass.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L75)

___

### frontFace

• `get` **frontFace**(): `GPUFrontFace`

Return GPUFrontFace

#### Returns

`GPUFrontFace`

#### Inherited from

PhysicMaterial.frontFace

#### Defined in

[src/materials/MaterialPass.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L82)

• `set` **frontFace**(`value`): `void`

Set GPUFrontFace

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFrontFace` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.frontFace

#### Defined in

[src/materials/MaterialPass.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L89)

___

### doubleSide

• `get` **doubleSide**(): `boolean`

Get whether use double side to render object

#### Returns

`boolean`

#### Inherited from

PhysicMaterial.doubleSide

#### Defined in

[src/materials/MaterialPass.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L96)

• `set` **doubleSide**(`value`): `void`

Set whether use double side to render object

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.doubleSide

#### Defined in

[src/materials/MaterialPass.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L103)

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

get cull mode, see GPUCullMode

#### Returns

`GPUCullMode`

#### Inherited from

PhysicMaterial.cullMode

#### Defined in

[src/materials/MaterialPass.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L110)

• `set` **cullMode**(`value`): `void`

set cull mode, see GPUCullMode

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCullMode` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.cullMode

#### Defined in

[src/materials/MaterialPass.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L117)

___

### depthBias

• `get` **depthBias**(): `number`

#### Returns

`number`

#### Inherited from

PhysicMaterial.depthBias

#### Defined in

[src/materials/MaterialPass.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L121)

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

[src/materials/MaterialPass.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L125)

___

### depthCompare

• `get` **depthCompare**(): `GPUCompareFunction`

get depth compare mode, see GPUCompareFunction

#### Returns

`GPUCompareFunction`

#### Inherited from

PhysicMaterial.depthCompare

#### Defined in

[src/materials/MaterialPass.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L132)

• `set` **depthCompare**(`value`): `void`

set depth compare mode, see GPUCompareFunction

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Inherited from

PhysicMaterial.depthCompare

#### Defined in

[src/materials/MaterialPass.ts:139](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L139)

___

### uvTransform\_1

• `get` **uvTransform_1**(): `Vector4`

get transformUV1

#### Returns

`Vector4`

#### Inherited from

PhysicMaterial.uvTransform\_1

#### Defined in

[src/materials/PhysicMaterial.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L18)

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

[src/materials/PhysicMaterial.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L25)

___

### uvTransform\_2

• `get` **uvTransform_2**(): `Vector4`

get transformUV2

#### Returns

`Vector4`

#### Inherited from

PhysicMaterial.uvTransform\_2

#### Defined in

[src/materials/PhysicMaterial.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L33)

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

[src/materials/PhysicMaterial.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L40)

___

### materialF0

• `get` **materialF0**(): `Vector4`

get reflectivity

#### Returns

`Vector4`

#### Inherited from

PhysicMaterial.materialF0

#### Defined in

[src/materials/PhysicMaterial.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L48)

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

[src/materials/PhysicMaterial.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L55)

___

### roughness

• `get` **roughness**(): `number`

get roughness

#### Returns

`number`

#### Inherited from

PhysicMaterial.roughness

#### Defined in

[src/materials/PhysicMaterial.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L62)

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

[src/materials/PhysicMaterial.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L69)

___

### metallic

• `get` **metallic**(): `number`

get metallic

#### Returns

`number`

#### Inherited from

PhysicMaterial.metallic

#### Defined in

[src/materials/PhysicMaterial.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L76)

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

[src/materials/PhysicMaterial.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L83)

___

### ao

• `get` **ao**(): `number`

get Ambient Occlussion, dealing with the effect of ambient light on object occlusion

#### Returns

`number`

#### Inherited from

PhysicMaterial.ao

#### Defined in

[src/materials/PhysicMaterial.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L90)

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

[src/materials/PhysicMaterial.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L97)

___

### metallic\_min

• `get` **metallic_min**(): `number`

get min metallic

#### Returns

`number`

#### Inherited from

PhysicMaterial.metallic\_min

#### Defined in

[src/materials/PhysicMaterial.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L104)

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

[src/materials/PhysicMaterial.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L111)

___

### metallic\_max

• `get` **metallic_max**(): `number`

get max metallic

#### Returns

`number`

#### Inherited from

PhysicMaterial.metallic\_max

#### Defined in

[src/materials/PhysicMaterial.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L118)

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

[src/materials/PhysicMaterial.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L125)

___

### roughness\_min

• `get` **roughness_min**(): `number`

get min roughness

#### Returns

`number`

#### Inherited from

PhysicMaterial.roughness\_min

#### Defined in

[src/materials/PhysicMaterial.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L132)

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

[src/materials/PhysicMaterial.ts:139](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L139)

___

### roughness\_max

• `get` **roughness_max**(): `number`

get max roughness

#### Returns

`number`

#### Inherited from

PhysicMaterial.roughness\_max

#### Defined in

[src/materials/PhysicMaterial.ts:146](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L146)

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

[src/materials/PhysicMaterial.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L153)

___

### normalScale

• `get` **normalScale**(): `number`

Get the influence of Normal mapping on materials

#### Returns

`number`

#### Inherited from

PhysicMaterial.normalScale

#### Defined in

[src/materials/PhysicMaterial.ts:160](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L160)

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

[src/materials/PhysicMaterial.ts:167](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L167)

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

[src/materials/PhysicMaterial.ts:178](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L178)

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

[src/materials/PhysicMaterial.ts:189](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L189)

___

### aoMap

• `get` **aoMap**(): [`Texture`](Texture.md)

get Ambient Occlussion Map, dealing with the effect of ambient light on object occlusion

#### Returns

[`Texture`](Texture.md)

#### Inherited from

PhysicMaterial.aoMap

#### Defined in

[src/materials/PhysicMaterial.ts:208](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L208)

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

[src/materials/PhysicMaterial.ts:197](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L197)

___

### clearCoatRoughnessMap

• `get` **clearCoatRoughnessMap**(): [`Texture`](Texture.md)

get clearCoatRoughnessMap

#### Returns

[`Texture`](Texture.md)

#### Inherited from

PhysicMaterial.clearCoatRoughnessMap

#### Defined in

[src/materials/PhysicMaterial.ts:224](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L224)

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

[src/materials/PhysicMaterial.ts:215](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L215)

___

### brdfLUT

• `get` **brdfLUT**(): [`Texture`](Texture.md)

get brdf query map

#### Returns

[`Texture`](Texture.md)

#### Inherited from

PhysicMaterial.brdfLUT

#### Defined in

[src/materials/PhysicMaterial.ts:231](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L231)

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

[src/materials/PhysicMaterial.ts:238](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L238)

___

### emissiveMap

• `get` **emissiveMap**(): [`Texture`](Texture.md)

get emissive map

#### Returns

[`Texture`](Texture.md)

#### Inherited from

PhysicMaterial.emissiveMap

#### Defined in

[src/materials/PhysicMaterial.ts:246](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L246)

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

[src/materials/PhysicMaterial.ts:253](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L253)

___

### envIntensity

• `get` **envIntensity**(): `number`

get intensity of environment light or color of sampled by texture

#### Returns

`number`

#### Inherited from

PhysicMaterial.envIntensity

#### Defined in

[src/materials/PhysicMaterial.ts:267](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L267)

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

[src/materials/PhysicMaterial.ts:260](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L260)

___

### ior

• `get` **ior**(): `number`

get factor of refractive

#### Returns

`number`

#### Inherited from

PhysicMaterial.ior

#### Defined in

[src/materials/PhysicMaterial.ts:281](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L281)

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

[src/materials/PhysicMaterial.ts:274](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L274)

___

### clearcoatFactor

• `get` **clearcoatFactor**(): `number`

get the factor of the clearcoat

#### Returns

`number`

#### Inherited from

PhysicMaterial.clearcoatFactor

#### Defined in

[src/materials/PhysicMaterial.ts:302](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L302)

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

[src/materials/PhysicMaterial.ts:295](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L295)

___

### clearcoatRoughnessFactor

• `get` **clearcoatRoughnessFactor**(): `number`

get the factor of the clearcoat Roughness

#### Returns

`number`

#### Inherited from

PhysicMaterial.clearcoatRoughnessFactor

#### Defined in

[src/materials/PhysicMaterial.ts:316](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L316)

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

[src/materials/PhysicMaterial.ts:309](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L309)

___

### clearcoatWeight

• `get` **clearcoatWeight**(): `number`

get the weight of the clearcoat

#### Returns

`number`

#### Inherited from

PhysicMaterial.clearcoatWeight

#### Defined in

[src/materials/PhysicMaterial.ts:330](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L330)

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

[src/materials/PhysicMaterial.ts:323](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L323)

___

### clearcoatColor

• `get` **clearcoatColor**(): [`Color`](Color.md)

set the color of the clearcoat

#### Returns

[`Color`](Color.md)

#### Inherited from

PhysicMaterial.clearcoatColor

#### Defined in

[src/materials/PhysicMaterial.ts:344](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L344)

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

[src/materials/PhysicMaterial.ts:337](https://github.com/Orillusion/orillusion/blob/main/src/materials/PhysicMaterial.ts#L337)
