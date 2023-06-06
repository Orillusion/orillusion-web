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

- [setDefine](UnLitMaterial.md#setdefine)
- [hasPass](UnLitMaterial.md#haspass)
- [addPass](UnLitMaterial.md#addpass)
- [removePass](UnLitMaterial.md#removepass)
- [destroy](UnLitMaterial.md#destroy)
- [clone](UnLitMaterial.md#clone)
- [setShader](UnLitMaterial.md#setshader)
- [getShader](UnLitMaterial.md#getshader)
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

[src/materials/MaterialBase.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L23)

___

### instanceID

• **instanceID**: `string`

Material Unique Identifier

#### Inherited from

MaterialBase.instanceID

#### Defined in

[src/materials/MaterialBase.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L29)

___

### isPassMaterial

• **isPassMaterial**: `boolean` = `false`

is PassMaterial

#### Inherited from

MaterialBase.isPassMaterial

#### Defined in

[src/materials/MaterialBase.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L34)

___

### receiveEnv

• **receiveEnv**: `boolean` = `true`

Whether to receive environment effect

#### Inherited from

MaterialBase.receiveEnv

#### Defined in

[src/materials/MaterialBase.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L39)

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

[src/materials/MaterialBase.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L44)

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

[src/materials/MaterialBase.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L48)

___

### normalMapYFlip

• `get` **normalMapYFlip**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MaterialBase.normalMapYFlip

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

MaterialBase.normalMapYFlip

#### Defined in

[src/materials/MaterialBase.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L57)

___

### baseMap

• `get` **baseMap**(): [`Texture`](Texture.md)

Get base map(main map)

#### Returns

[`Texture`](Texture.md)

#### Inherited from

MaterialBase.baseMap

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

MaterialBase.baseMap

#### Defined in

[src/materials/MaterialBase.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L81)

___

### normalMap

• `get` **normalMap**(): [`Texture`](Texture.md)

Get normal map

#### Returns

[`Texture`](Texture.md)

#### Inherited from

MaterialBase.normalMap

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

MaterialBase.normalMap

#### Defined in

[src/materials/MaterialBase.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L104)

___

### emissiveMap

• `get` **emissiveMap**(): [`Texture`](Texture.md)

Get emissive map

#### Returns

[`Texture`](Texture.md)

#### Inherited from

MaterialBase.emissiveMap

#### Defined in

[src/materials/MaterialBase.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L112)

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

[src/materials/MaterialBase.ts:151](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L151)

___

### emissiveColor

• `get` **emissiveColor**(): [`Color`](Color.md)

Get emissive color

#### Returns

[`Color`](Color.md)

#### Inherited from

MaterialBase.emissiveColor

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

MaterialBase.emissiveColor

#### Defined in

[src/materials/MaterialBase.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L126)

___

### emissiveIntensity

• `get` **emissiveIntensity**(): `number`

Get emissive intensity

#### Returns

`number`

#### Inherited from

MaterialBase.emissiveIntensity

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

MaterialBase.emissiveIntensity

#### Defined in

[src/materials/MaterialBase.ts:134](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L134)

___

### envIntensity

• `get` **envIntensity**(): `number`

Get envionment effect intensity

#### Returns

`number`

#### Inherited from

MaterialBase.envIntensity

#### Defined in

[src/materials/MaterialBase.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L161)

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

[src/materials/MaterialBase.ts:168](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L168)

___

### normalScale

• `get` **normalScale**(): `number`

Get normal strength

#### Returns

`number`

#### Inherited from

MaterialBase.normalScale

#### Defined in

[src/materials/MaterialBase.ts:176](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L176)

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

[src/materials/MaterialBase.ts:183](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L183)

___

### alphaCutoff

• `get` **alphaCutoff**(): `number`

Get alphaCutoff, channel transparency threshold parameter

#### Returns

`number`

#### Inherited from

MaterialBase.alphaCutoff

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

MaterialBase.alphaCutoff

#### Defined in

[src/materials/MaterialBase.ts:198](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L198)

___

### irradianceMap

• `get` **irradianceMap**(): [`Texture`](Texture.md)

Get irradiance map

#### Returns

[`Texture`](Texture.md)

#### Inherited from

MaterialBase.irradianceMap

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

MaterialBase.irradianceMap

#### Defined in

[src/materials/MaterialBase.ts:221](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L221)

___

### irradianceDepthMap

• `get` **irradianceDepthMap**(): [`Texture`](Texture.md)

Get irradiance depth map

#### Returns

[`Texture`](Texture.md)

#### Inherited from

MaterialBase.irradianceDepthMap

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

MaterialBase.irradianceDepthMap

#### Defined in

[src/materials/MaterialBase.ts:236](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L236)

___

### baseColor

• `get` **baseColor**(): [`Color`](Color.md)

Get base color(tint color)

#### Returns

[`Color`](Color.md)

#### Inherited from

MaterialBase.baseColor

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

MaterialBase.baseColor

#### Defined in

[src/materials/MaterialBase.ts:251](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L251)

___

### uvTransform\_1

• `get` **uvTransform_1**(): `Vector4`

Get uvTransform_1

#### Returns

`Vector4`

#### Inherited from

MaterialBase.uvTransform\_1

#### Defined in

[src/materials/MaterialBase.ts:260](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L260)

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

[src/materials/MaterialBase.ts:267](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L267)

___

### uvTransform\_2

• `get` **uvTransform_2**(): `Vector4`

Get uvTransform_2

#### Returns

`Vector4`

#### Inherited from

MaterialBase.uvTransform\_2

#### Defined in

[src/materials/MaterialBase.ts:275](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L275)

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

[src/materials/MaterialBase.ts:282](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L282)

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

MaterialBase.hasPass

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

MaterialBase.addPass

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

MaterialBase.removePass

#### Defined in

[src/materials/MaterialBase.ts:333](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L333)

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

[src/materials/MaterialBase.ts:346](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L346)

___

### clone

▸ **clone**(): `any`

clone one material

#### Returns

`any`

Material

#### Inherited from

MaterialBase.clone

#### Defined in

[src/materials/MaterialBase.ts:355](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L355)

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

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Overrides

MaterialBase.debug

#### Defined in

[src/materials/UnLitMaterial.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/materials/UnLitMaterial.ts#L57)
