# Class: UnLitMaterial

material without light
A basic material that can be rendered solely based on color and texture information without calculating lighting

## Hierarchy

- `MaterialBase`

  ↳ **`UnLitMaterial`**

### Constructors

- [constructor](UnLitMaterial.md#constructor)

### Properties

- [name](UnLitMaterial.md#name)
- [instanceID](UnLitMaterial.md#instanceid)
- [isPassMaterial](UnLitMaterial.md#ispassmaterial)
- [receiveEnv](UnLitMaterial.md#receiveenv)
- [renderPasses](UnLitMaterial.md#renderpasses)
- [enable](UnLitMaterial.md#enable)
- [renderShader](UnLitMaterial.md#rendershader)

### Accessors

- [shaderState](UnLitMaterial.md#shaderstate)
- [normalMapYFlip](UnLitMaterial.md#normalmapyflip)
- [baseMap](UnLitMaterial.md#basemap)
- [normalMap](UnLitMaterial.md#normalmap)
- [emissiveMap](UnLitMaterial.md#emissivemap)
- [emissiveColor](UnLitMaterial.md#emissivecolor)
- [emissiveIntensity](UnLitMaterial.md#emissiveintensity)
- [envIntensity](UnLitMaterial.md#envintensity)
- [normalScale](UnLitMaterial.md#normalscale)
- [alphaCutoff](UnLitMaterial.md#alphacutoff)
- [irradianceMap](UnLitMaterial.md#irradiancemap)
- [irradianceDepthMap](UnLitMaterial.md#irradiancedepthmap)
- [baseColor](UnLitMaterial.md#basecolor)
- [uvTransform\_1](UnLitMaterial.md#uvtransform_1)
- [uvTransform\_2](UnLitMaterial.md#uvtransform_2)
- [topology](UnLitMaterial.md#topology)
- [sort](UnLitMaterial.md#sort)
- [shaderID](UnLitMaterial.md#shaderid)
- [blendMode](UnLitMaterial.md#blendmode)
- [transparent](UnLitMaterial.md#transparent)
- [frontFace](UnLitMaterial.md#frontface)
- [doubleSide](UnLitMaterial.md#doubleside)
- [cullMode](UnLitMaterial.md#cullmode)
- [depthBias](UnLitMaterial.md#depthbias)
- [depthCompare](UnLitMaterial.md#depthcompare)
- [envMap](UnLitMaterial.md#envmap)
- [shadowMap](UnLitMaterial.md#shadowmap)

### Methods

- [getBaseColor](UnLitMaterial.md#getbasecolor)
- [setDefine](UnLitMaterial.md#setdefine)
- [hasPass](UnLitMaterial.md#haspass)
- [addPass](UnLitMaterial.md#addpass)
- [removePass](UnLitMaterial.md#removepass)
- [destroy](UnLitMaterial.md#destroy)
- [setShader](UnLitMaterial.md#setshader)
- [getShader](UnLitMaterial.md#getshader)
- [clone](UnLitMaterial.md#clone)
- [debug](UnLitMaterial.md#debug)

## Constructors

### constructor

• **new UnLitMaterial**()

#### Overrides

MaterialBase.constructor

#### Defined in

[src/materials/UnLitMaterial.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/materials/UnLitMaterial.ts#L20)

## Properties

### name

• **name**: `string`

name of this material

#### Inherited from

MaterialBase.name

#### Defined in

[src/materials/MaterialBase.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L25)

___

### instanceID

• **instanceID**: `string`

Material Unique Identifier

#### Inherited from

MaterialBase.instanceID

#### Defined in

[src/materials/MaterialBase.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L31)

___

### isPassMaterial

• **isPassMaterial**: `boolean` = `false`

is PassMaterial

#### Inherited from

MaterialBase.isPassMaterial

#### Defined in

[src/materials/MaterialBase.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L36)

___

### receiveEnv

• **receiveEnv**: `boolean` = `true`

Whether to receive environment effect

#### Inherited from

MaterialBase.receiveEnv

#### Defined in

[src/materials/MaterialBase.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L41)

___

### renderPasses

• **renderPasses**: `Map`<`RendererType`, [`MaterialPass`](MaterialPass.md)[]\>

#### Inherited from

MaterialBase.renderPasses

#### Defined in

[src/materials/MaterialPass.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L8)

___

### enable

• **enable**: `boolean` = `true`

whether the pass is enable

#### Inherited from

MaterialBase.enable

#### Defined in

[src/materials/MaterialPass.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L13)

___

### renderShader

• **renderShader**: [`RenderShader`](RenderShader.md)

#### Inherited from

MaterialBase.renderShader

#### Defined in

[src/materials/MaterialPass.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L15)

## Accessors

### shaderState

• `get` **shaderState**(): `ShaderState`

#### Returns

`ShaderState`

#### Inherited from

MaterialBase.shaderState

#### Defined in

[src/materials/MaterialBase.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L46)

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

[src/materials/MaterialBase.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L50)

___

### normalMapYFlip

• `get` **normalMapYFlip**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MaterialBase.normalMapYFlip

#### Defined in

[src/materials/MaterialBase.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L55)

• `set` **normalMapYFlip**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

MaterialBase.normalMapYFlip

#### Defined in

[src/materials/MaterialBase.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L59)

___

### baseMap

• `get` **baseMap**(): [`Texture`](Texture.md)

Get base map(main map)

#### Returns

[`Texture`](Texture.md)

#### Inherited from

MaterialBase.baseMap

#### Defined in

[src/materials/MaterialBase.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L93)

• `set` **baseMap**(`texture`): `void`

Set base map(main map)

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

MaterialBase.baseMap

#### Defined in

[src/materials/MaterialBase.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L83)

___

### normalMap

• `get` **normalMap**(): [`Texture`](Texture.md)

Get normal map

#### Returns

[`Texture`](Texture.md)

#### Inherited from

MaterialBase.normalMap

#### Defined in

[src/materials/MaterialBase.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L101)

• `set` **normalMap**(`texture`): `void`

Set normal map

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

MaterialBase.normalMap

#### Defined in

[src/materials/MaterialBase.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L108)

___

### emissiveMap

• `get` **emissiveMap**(): [`Texture`](Texture.md)

Get emissive map

#### Returns

[`Texture`](Texture.md)

#### Inherited from

MaterialBase.emissiveMap

#### Defined in

[src/materials/MaterialBase.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L116)

• `set` **emissiveMap**(`value`): `void`

Set emissive map

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

MaterialBase.emissiveMap

#### Defined in

[src/materials/MaterialBase.ts:159](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L159)

___

### emissiveColor

• `get` **emissiveColor**(): [`Color`](Color.md)

Get emissive color

#### Returns

[`Color`](Color.md)

#### Inherited from

MaterialBase.emissiveColor

#### Defined in

[src/materials/MaterialBase.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L123)

• `set` **emissiveColor**(`value`): `void`

Set emissive color

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

MaterialBase.emissiveColor

#### Defined in

[src/materials/MaterialBase.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L131)

___

### emissiveIntensity

• `get` **emissiveIntensity**(): `number`

Get emissive intensity

#### Returns

`number`

#### Inherited from

MaterialBase.emissiveIntensity

#### Defined in

[src/materials/MaterialBase.ts:149](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L149)

• `set` **emissiveIntensity**(`value`): `void`

Set emissive intensity

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

MaterialBase.emissiveIntensity

#### Defined in

[src/materials/MaterialBase.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L140)

___

### envIntensity

• `get` **envIntensity**(): `number`

Get envionment effect intensity

#### Returns

`number`

#### Inherited from

MaterialBase.envIntensity

#### Defined in

[src/materials/MaterialBase.ts:169](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L169)

• `set` **envIntensity**(`value`): `void`

Set envionment effect intensity

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

MaterialBase.envIntensity

#### Defined in

[src/materials/MaterialBase.ts:177](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L177)

___

### normalScale

• `get` **normalScale**(): `number`

Get normal strength

#### Returns

`number`

#### Inherited from

MaterialBase.normalScale

#### Defined in

[src/materials/MaterialBase.ts:186](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L186)

• `set` **normalScale**(`value`): `void`

Set normal strength

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

MaterialBase.normalScale

#### Defined in

[src/materials/MaterialBase.ts:193](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L193)

___

### alphaCutoff

• `get` **alphaCutoff**(): `number`

Get alphaCutoff, channel transparency threshold parameter

#### Returns

`number`

#### Inherited from

MaterialBase.alphaCutoff

#### Defined in

[src/materials/MaterialBase.ts:201](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L201)

• `set` **alphaCutoff**(`value`): `void`

Set alphaCutoff, channel transparency threshold parameter

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

MaterialBase.alphaCutoff

#### Defined in

[src/materials/MaterialBase.ts:209](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L209)

___

### irradianceMap

• `get` **irradianceMap**(): [`Texture`](Texture.md)

Get irradiance map

#### Returns

[`Texture`](Texture.md)

#### Inherited from

MaterialBase.irradianceMap

#### Defined in

[src/materials/MaterialBase.ts:226](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L226)

• `set` **irradianceMap**(`value`): `void`

Set irradiance map

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

MaterialBase.irradianceMap

#### Defined in

[src/materials/MaterialBase.ts:233](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L233)

___

### irradianceDepthMap

• `get` **irradianceDepthMap**(): [`Texture`](Texture.md)

Get irradiance depth map

#### Returns

[`Texture`](Texture.md)

#### Inherited from

MaterialBase.irradianceDepthMap

#### Defined in

[src/materials/MaterialBase.ts:241](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L241)

• `set` **irradianceDepthMap**(`value`): `void`

Set irradiance depth map

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

MaterialBase.irradianceDepthMap

#### Defined in

[src/materials/MaterialBase.ts:248](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L248)

___

### baseColor

• `get` **baseColor**(): [`Color`](Color.md)

Get base color(tint color)

#### Returns

[`Color`](Color.md)

#### Inherited from

MaterialBase.baseColor

#### Defined in

[src/materials/MaterialBase.ts:260](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L260)

• `set` **baseColor**(`value`): `void`

Set base color(tint color)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

MaterialBase.baseColor

#### Defined in

[src/materials/MaterialBase.ts:268](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L268)

___

### uvTransform\_1

• `get` **uvTransform_1**(): `Vector4`

Get uvTransform_1

#### Returns

`Vector4`

#### Inherited from

MaterialBase.uvTransform\_1

#### Defined in

[src/materials/MaterialBase.ts:278](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L278)

• `set` **uvTransform_1**(`value`): `void`

Set uvTransform_1

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector4` |

#### Returns

`void`

#### Inherited from

MaterialBase.uvTransform\_1

#### Defined in

[src/materials/MaterialBase.ts:285](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L285)

___

### uvTransform\_2

• `get` **uvTransform_2**(): `Vector4`

Get uvTransform_2

#### Returns

`Vector4`

#### Inherited from

MaterialBase.uvTransform\_2

#### Defined in

[src/materials/MaterialBase.ts:293](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L293)

• `set` **uvTransform_2**(`value`): `void`

Set uvTransform_2

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector4` |

#### Returns

`void`

#### Inherited from

MaterialBase.uvTransform\_2

#### Defined in

[src/materials/MaterialBase.ts:300](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L300)

___

### topology

• `set` **topology**(`topology`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `topology` | `GPUPrimitiveTopology` |

#### Returns

`void`

#### Inherited from

MaterialBase.topology

#### Defined in

[src/materials/MaterialBase.ts:321](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L321)

___

### sort

• `get` **sort**(): `number`

#### Returns

`number`

#### Inherited from

MaterialBase.sort

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

MaterialBase.sort

#### Defined in

[src/materials/MaterialPass.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L27)

___

### shaderID

• `get` **shaderID**(): `string`

#### Returns

`string`

#### Inherited from

MaterialBase.shaderID

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

MaterialBase.shaderID

#### Defined in

[src/materials/MaterialPass.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L35)

___

### blendMode

• `get` **blendMode**(): [`BlendMode`](../enums/BlendMode.md)

Get blend mode, see [BlendMode](../enums/BlendMode.md)

#### Returns

[`BlendMode`](../enums/BlendMode.md)

#### Inherited from

MaterialBase.blendMode

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

MaterialBase.blendMode

#### Defined in

[src/materials/MaterialPass.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L60)

___

### transparent

• `get` **transparent**(): `boolean`

Get whether use transparent mode to render

#### Returns

`boolean`

#### Inherited from

MaterialBase.transparent

#### Defined in

[src/materials/MaterialPass.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L67)

• `set` **transparent**(`value`): `void`

Set whether use transparent mode to render

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

MaterialBase.transparent

#### Defined in

[src/materials/MaterialPass.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L74)

___

### frontFace

• `get` **frontFace**(): `GPUFrontFace`

Return GPUFrontFace

#### Returns

`GPUFrontFace`

#### Inherited from

MaterialBase.frontFace

#### Defined in

[src/materials/MaterialPass.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L81)

• `set` **frontFace**(`value`): `void`

Set GPUFrontFace

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFrontFace` |

#### Returns

`void`

#### Inherited from

MaterialBase.frontFace

#### Defined in

[src/materials/MaterialPass.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L88)

___

### doubleSide

• `get` **doubleSide**(): `boolean`

Get whether use double side to render object

#### Returns

`boolean`

#### Inherited from

MaterialBase.doubleSide

#### Defined in

[src/materials/MaterialPass.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L95)

• `set` **doubleSide**(`value`): `void`

Set whether use double side to render object

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

MaterialBase.doubleSide

#### Defined in

[src/materials/MaterialPass.ts:102](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L102)

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

get cull mode, see GPUCullMode

#### Returns

`GPUCullMode`

#### Inherited from

MaterialBase.cullMode

#### Defined in

[src/materials/MaterialPass.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L114)

• `set` **cullMode**(`value`): `void`

set cull mode, see GPUCullMode

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCullMode` |

#### Returns

`void`

#### Inherited from

MaterialBase.cullMode

#### Defined in

[src/materials/MaterialPass.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L121)

___

### depthBias

• `get` **depthBias**(): `number`

#### Returns

`number`

#### Inherited from

MaterialBase.depthBias

#### Defined in

[src/materials/MaterialPass.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L125)

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

[src/materials/MaterialPass.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L129)

___

### depthCompare

• `get` **depthCompare**(): `GPUCompareFunction`

get depth compare mode, see GPUCompareFunction

#### Returns

`GPUCompareFunction`

#### Inherited from

MaterialBase.depthCompare

#### Defined in

[src/materials/MaterialPass.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L136)

• `set` **depthCompare**(`value`): `void`

set depth compare mode, see GPUCompareFunction

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Inherited from

MaterialBase.depthCompare

#### Defined in

[src/materials/MaterialPass.ts:143](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L143)

___

### envMap

• `set` **envMap**(`texture`): `void`

Set material environment map

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Overrides

MaterialBase.envMap

#### Defined in

[src/materials/UnLitMaterial.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/materials/UnLitMaterial.ts#L46)

___

### shadowMap

• `set` **shadowMap**(`texture`): `void`

Set material shadow map

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Overrides

MaterialBase.shadowMap

#### Defined in

[src/materials/UnLitMaterial.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/materials/UnLitMaterial.ts#L53)

## Methods

### getBaseColor

▸ **getBaseColor**(`ret?`): [`Color`](Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ret?` | [`Color`](Color.md) |

#### Returns

[`Color`](Color.md)

#### Inherited from

MaterialBase.getBaseColor

#### Defined in

[src/materials/MaterialBase.ts:253](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L253)

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

MaterialBase.setDefine

#### Defined in

[src/materials/MaterialBase.ts:333](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L333)

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

MaterialBase.hasPass

#### Defined in

[src/materials/MaterialBase.ts:337](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L337)

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

[src/materials/MaterialBase.ts:341](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L341)

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

[src/materials/MaterialBase.ts:357](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L357)

___

### destroy

▸ **destroy**(`force?`): `void`

destroy self

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

MaterialBase.destroy

#### Defined in

[src/materials/MaterialBase.ts:369](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L369)

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

[src/materials/MaterialPass.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L39)

___

### getShader

▸ **getShader**(): [`RenderShader`](RenderShader.md)

#### Returns

[`RenderShader`](RenderShader.md)

#### Inherited from

MaterialBase.getShader

#### Defined in

[src/materials/MaterialPass.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L46)

___

### clone

▸ **clone**(): [`UnLitMaterial`](UnLitMaterial.md)

#### Returns

[`UnLitMaterial`](UnLitMaterial.md)

#### Overrides

MaterialBase.clone

#### Defined in

[src/materials/UnLitMaterial.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/materials/UnLitMaterial.ts#L57)

___

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Overrides

MaterialBase.debug

#### Defined in

[src/materials/UnLitMaterial.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/materials/UnLitMaterial.ts#L84)
