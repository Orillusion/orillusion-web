# Class: VideoMaterial

Video Material
Do not compute light, only read pixel color from a Video source

## Hierarchy

- `MaterialBase`

  ↳ **`VideoMaterial`**


### Constructors

- [constructor](VideoMaterial.md#constructor)

### Accessors

- [rectClip](VideoMaterial.md#rectclip)
- [envMap](VideoMaterial.md#envmap)
- [shadowMap](VideoMaterial.md#shadowmap)
- [shaderState](VideoMaterial.md#shaderstate)
- [normalMapYFlip](VideoMaterial.md#normalmapyflip)
- [baseMap](VideoMaterial.md#basemap)
- [normalMap](VideoMaterial.md#normalmap)
- [emissiveMap](VideoMaterial.md#emissivemap)
- [emissiveColor](VideoMaterial.md#emissivecolor)
- [emissiveIntensity](VideoMaterial.md#emissiveintensity)
- [envIntensity](VideoMaterial.md#envintensity)
- [normalScale](VideoMaterial.md#normalscale)
- [alphaCutoff](VideoMaterial.md#alphacutoff)
- [irradianceMap](VideoMaterial.md#irradiancemap)
- [irradianceDepthMap](VideoMaterial.md#irradiancedepthmap)
- [baseColor](VideoMaterial.md#basecolor)
- [uvTransform\_1](VideoMaterial.md#uvtransform_1)
- [uvTransform\_2](VideoMaterial.md#uvtransform_2)
- [sort](VideoMaterial.md#sort)
- [shaderID](VideoMaterial.md#shaderid)
- [blendMode](VideoMaterial.md#blendmode)
- [transparent](VideoMaterial.md#transparent)
- [frontFace](VideoMaterial.md#frontface)
- [doubleSide](VideoMaterial.md#doubleside)
- [cullMode](VideoMaterial.md#cullmode)
- [depthBias](VideoMaterial.md#depthbias)
- [depthCompare](VideoMaterial.md#depthcompare)

### Methods

- [debug](VideoMaterial.md#debug)
- [setDefine](VideoMaterial.md#setdefine)
- [hasPass](VideoMaterial.md#haspass)
- [addPass](VideoMaterial.md#addpass)
- [removePass](VideoMaterial.md#removepass)
- [destroy](VideoMaterial.md#destroy)
- [clone](VideoMaterial.md#clone)
- [setShader](VideoMaterial.md#setshader)
- [getShader](VideoMaterial.md#getshader)

### Properties

- [name](VideoMaterial.md#name)
- [instanceID](VideoMaterial.md#instanceid)
- [isPassMaterial](VideoMaterial.md#ispassmaterial)
- [receiveEnv](VideoMaterial.md#receiveenv)
- [renderPasses](VideoMaterial.md#renderpasses)
- [enable](VideoMaterial.md#enable)
- [renderShader](VideoMaterial.md#rendershader)

## Constructors

### constructor

• **new VideoMaterial**()

Create new VideoMaterial

#### Overrides

MaterialBase.constructor

#### Defined in

[packages/media-extention/VideoMaterial.ts:15](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/VideoMaterial.ts#L15)

## Accessors

### rectClip

• `get` **rectClip**(): `Vector4`

Get the clip rect area

#### Returns

`Vector4`

#### Defined in

[packages/media-extention/VideoMaterial.ts:47](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/VideoMaterial.ts#L47)

• `set` **rectClip**(`value`): `void`

Set the clip rect area

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector4` |

#### Returns

`void`

#### Defined in

[packages/media-extention/VideoMaterial.ts:40](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/VideoMaterial.ts#L40)

___

### envMap

• `set` **envMap**(`texture`): `void`

Set no envMap

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | `Texture` |

#### Returns

`void`

#### Overrides

MaterialBase.envMap

#### Defined in

[packages/media-extention/VideoMaterial.ts:54](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/VideoMaterial.ts#L54)

___

### shadowMap

• `set` **shadowMap**(`texture`): `void`

Set no shadowMap

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | `Texture` |

#### Returns

`void`

#### Overrides

MaterialBase.shadowMap

#### Defined in

[packages/media-extention/VideoMaterial.ts:61](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/VideoMaterial.ts#L61)

___

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

• `get` **baseMap**(): `Texture`

Get base map(main map)

#### Returns

`Texture`

#### Inherited from

MaterialBase.baseMap

#### Defined in

[src/materials/MaterialBase.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L90)

• `set` **baseMap**(`texture`): `void`

Set base map(main map)

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | `Texture` |

#### Returns

`void`

#### Inherited from

MaterialBase.baseMap

#### Defined in

[src/materials/MaterialBase.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L81)

___

### normalMap

• `get` **normalMap**(): `Texture`

Get normal map

#### Returns

`Texture`

#### Inherited from

MaterialBase.normalMap

#### Defined in

[src/materials/MaterialBase.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L97)

• `set` **normalMap**(`texture`): `void`

Set normal map

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | `Texture` |

#### Returns

`void`

#### Inherited from

MaterialBase.normalMap

#### Defined in

[src/materials/MaterialBase.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L104)

___

### emissiveMap

• `get` **emissiveMap**(): `Texture`

Get emissive map

#### Returns

`Texture`

#### Inherited from

MaterialBase.emissiveMap

#### Defined in

[src/materials/MaterialBase.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L112)

• `set` **emissiveMap**(`value`): `void`

Set emissive map

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Texture` |

#### Returns

`void`

#### Inherited from

MaterialBase.emissiveMap

#### Defined in

[src/materials/MaterialBase.ts:151](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L151)

___

### emissiveColor

• `get` **emissiveColor**(): `Color`

Get emissive color

#### Returns

`Color`

#### Inherited from

MaterialBase.emissiveColor

#### Defined in

[src/materials/MaterialBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L119)

• `set` **emissiveColor**(`value`): `void`

Set emissive color

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Color` |

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

• `get` **irradianceMap**(): `Texture`

Get irradiance map

#### Returns

`Texture`

#### Inherited from

MaterialBase.irradianceMap

#### Defined in

[src/materials/MaterialBase.ts:214](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L214)

• `set` **irradianceMap**(`value`): `void`

Set irradiance map

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Texture` |

#### Returns

`void`

#### Inherited from

MaterialBase.irradianceMap

#### Defined in

[src/materials/MaterialBase.ts:221](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L221)

___

### irradianceDepthMap

• `get` **irradianceDepthMap**(): `Texture`

Get irradiance depth map

#### Returns

`Texture`

#### Inherited from

MaterialBase.irradianceDepthMap

#### Defined in

[src/materials/MaterialBase.ts:229](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L229)

• `set` **irradianceDepthMap**(`value`): `void`

Set irradiance depth map

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Texture` |

#### Returns

`void`

#### Inherited from

MaterialBase.irradianceDepthMap

#### Defined in

[src/materials/MaterialBase.ts:236](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L236)

___

### baseColor

• `get` **baseColor**(): `Color`

Get base color(tint color)

#### Returns

`Color`

#### Inherited from

MaterialBase.baseColor

#### Defined in

[src/materials/MaterialBase.ts:244](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L244)

• `set` **baseColor**(`value`): `void`

Set base color(tint color)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Color` |

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

• `get` **blendMode**(): `BlendMode`

Get blend mode, see BlendMode

#### Returns

`BlendMode`

#### Inherited from

MaterialBase.blendMode

#### Defined in

[src/materials/MaterialPass.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L53)

• `set` **blendMode**(`value`): `void`

Set blend mode, see BlendMode

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `BlendMode` |

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

MaterialBase.transparent

#### Defined in

[src/materials/MaterialPass.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L75)

___

### frontFace

• `get` **frontFace**(): `GPUFrontFace`

Return GPUFrontFace

#### Returns

`GPUFrontFace`

#### Inherited from

MaterialBase.frontFace

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

MaterialBase.frontFace

#### Defined in

[src/materials/MaterialPass.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L89)

___

### doubleSide

• `get` **doubleSide**(): `boolean`

Get whether use double side to render object

#### Returns

`boolean`

#### Inherited from

MaterialBase.doubleSide

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

MaterialBase.doubleSide

#### Defined in

[src/materials/MaterialPass.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L103)

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

get cull mode, see GPUCullMode

#### Returns

`GPUCullMode`

#### Inherited from

MaterialBase.cullMode

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

MaterialBase.cullMode

#### Defined in

[src/materials/MaterialPass.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L117)

___

### depthBias

• `get` **depthBias**(): `number`

#### Returns

`number`

#### Inherited from

MaterialBase.depthBias

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

MaterialBase.depthBias

#### Defined in

[src/materials/MaterialPass.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L125)

___

### depthCompare

• `get` **depthCompare**(): `GPUCompareFunction`

get depth compare mode, see GPUCompareFunction

#### Returns

`GPUCompareFunction`

#### Inherited from

MaterialBase.depthCompare

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

MaterialBase.depthCompare

#### Defined in

[src/materials/MaterialPass.ts:139](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L139)

## Methods

### debug

▸ **debug**(): `void`

Start debug GUI

#### Returns

`void`

#### Overrides

MaterialBase.debug

#### Defined in

[packages/media-extention/VideoMaterial.ts:68](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/VideoMaterial.ts#L68)

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

▸ **addPass**(`passType`, `pass`, `index?`): `MaterialPass`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `passType` | `RendererType` | `undefined` |
| `pass` | `MaterialPass` | `undefined` |
| `index` | `number` | `-1` |

#### Returns

`MaterialPass`[]

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

▸ **destroy**(): `void`

destroy self

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

▸ **setShader**(`vs`, `fs`): `RenderShader`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vs` | `string` |
| `fs` | `string` |

#### Returns

`RenderShader`

#### Inherited from

MaterialBase.setShader

#### Defined in

[src/materials/MaterialPass.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L39)

___

### getShader

▸ **getShader**(): `RenderShader`

#### Returns

`RenderShader`

#### Inherited from

MaterialBase.getShader

#### Defined in

[src/materials/MaterialPass.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L46)

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

• **renderPasses**: `Map`<`RendererType`, `MaterialPass`[]\>

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

• **renderShader**: `RenderShader`

#### Inherited from

MaterialBase.renderShader

#### Defined in

[src/materials/MaterialPass.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L15)
