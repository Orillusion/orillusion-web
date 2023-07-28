# Class: GUIMaterial

material used in rendering GUI

## Hierarchy

- `MaterialBase`

  ↳ **`GUIMaterial`**

### Constructors

- [constructor](GUIMaterial.md#constructor)

### Properties

- [name](GUIMaterial.md#name)
- [instanceID](GUIMaterial.md#instanceid)
- [isPassMaterial](GUIMaterial.md#ispassmaterial)
- [receiveEnv](GUIMaterial.md#receiveenv)
- [renderPasses](GUIMaterial.md#renderpasses)
- [enable](GUIMaterial.md#enable)
- [renderShader](GUIMaterial.md#rendershader)

### Accessors

- [envMap](GUIMaterial.md#envmap)
- [shadowMap](GUIMaterial.md#shadowmap)
- [baseMap](GUIMaterial.md#basemap)
- [normalMap](GUIMaterial.md#normalmap)
- [emissiveMap](GUIMaterial.md#emissivemap)
- [irradianceMap](GUIMaterial.md#irradiancemap)
- [irradianceDepthMap](GUIMaterial.md#irradiancedepthmap)
- [shaderState](GUIMaterial.md#shaderstate)
- [normalMapYFlip](GUIMaterial.md#normalmapyflip)
- [emissiveColor](GUIMaterial.md#emissivecolor)
- [emissiveIntensity](GUIMaterial.md#emissiveintensity)
- [envIntensity](GUIMaterial.md#envintensity)
- [normalScale](GUIMaterial.md#normalscale)
- [alphaCutoff](GUIMaterial.md#alphacutoff)
- [baseColor](GUIMaterial.md#basecolor)
- [uvTransform\_1](GUIMaterial.md#uvtransform_1)
- [uvTransform\_2](GUIMaterial.md#uvtransform_2)
- [topology](GUIMaterial.md#topology)
- [sort](GUIMaterial.md#sort)
- [shaderID](GUIMaterial.md#shaderid)
- [blendMode](GUIMaterial.md#blendmode)
- [transparent](GUIMaterial.md#transparent)
- [frontFace](GUIMaterial.md#frontface)
- [doubleSide](GUIMaterial.md#doubleside)
- [cullMode](GUIMaterial.md#cullmode)
- [depthBias](GUIMaterial.md#depthbias)
- [depthCompare](GUIMaterial.md#depthcompare)

### Methods

- [setLimitVertex](GUIMaterial.md#setlimitvertex)
- [setGUISolution](GUIMaterial.md#setguisolution)
- [setScissorRect](GUIMaterial.md#setscissorrect)
- [setScissorEnable](GUIMaterial.md#setscissorenable)
- [setScissorCorner](GUIMaterial.md#setscissorcorner)
- [setScreenSize](GUIMaterial.md#setscreensize)
- [setTextures](GUIMaterial.md#settextures)
- [getBaseColor](GUIMaterial.md#getbasecolor)
- [setDefine](GUIMaterial.md#setdefine)
- [hasPass](GUIMaterial.md#haspass)
- [addPass](GUIMaterial.md#addpass)
- [removePass](GUIMaterial.md#removepass)
- [destroy](GUIMaterial.md#destroy)
- [clone](GUIMaterial.md#clone)
- [setShader](GUIMaterial.md#setshader)
- [getShader](GUIMaterial.md#getshader)
- [debug](GUIMaterial.md#debug)

## Constructors

### constructor

• **new GUIMaterial**(`space`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `space` | [`GUISpace`](../enums/GUISpace.md) |

#### Overrides

MaterialBase.constructor

#### Defined in

[src/components/gui/core/GUIMaterial.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L21)

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

### envMap

• `set` **envMap**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Overrides

MaterialBase.envMap

#### Defined in

[src/components/gui/core/GUIMaterial.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L124)

___

### shadowMap

• `set` **shadowMap**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Overrides

MaterialBase.shadowMap

#### Defined in

[src/components/gui/core/GUIMaterial.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L125)

___

### baseMap

• `set` **baseMap**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Overrides

MaterialBase.baseMap

#### Defined in

[src/components/gui/core/GUIMaterial.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L126)

___

### normalMap

• `set` **normalMap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Overrides

MaterialBase.normalMap

#### Defined in

[src/components/gui/core/GUIMaterial.ts:127](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L127)

___

### emissiveMap

• `set` **emissiveMap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Overrides

MaterialBase.emissiveMap

#### Defined in

[src/components/gui/core/GUIMaterial.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L128)

___

### irradianceMap

• `set` **irradianceMap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Overrides

MaterialBase.irradianceMap

#### Defined in

[src/components/gui/core/GUIMaterial.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L129)

___

### irradianceDepthMap

• `set` **irradianceDepthMap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Overrides

MaterialBase.irradianceDepthMap

#### Defined in

[src/components/gui/core/GUIMaterial.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L130)

___

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

## Methods

### setLimitVertex

▸ **setLimitVertex**(`vertexCount`): `void`

Write effective vertex count (vertex index < vertexCount)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertexCount` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIMaterial.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L53)

___

### setGUISolution

▸ **setGUISolution**(`value`, `pixelRatio`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector2`](Vector2.md) |
| `pixelRatio` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIMaterial.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L57)

___

### setScissorRect

▸ **setScissorRect**(`left`, `bottom`, `right`, `top`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `left` | `number` |
| `bottom` | `number` |
| `right` | `number` |
| `top` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIMaterial.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L62)

___

### setScissorEnable

▸ **setScissorEnable**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIMaterial.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L68)

___

### setScissorCorner

▸ **setScissorCorner**(`radius`, `fadeOut`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |
| `fadeOut` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIMaterial.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L80)

___

### setScreenSize

▸ **setScreenSize**(`width`, `height`): [`GUIMaterial`](GUIMaterial.md)

Write screenSize size to the shader

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

[`GUIMaterial`](GUIMaterial.md)

#### Defined in

[src/components/gui/core/GUIMaterial.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L88)

___

### setTextures

▸ **setTextures**(`list`): `void`

Update texture used in GUI

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`Texture`](Texture.md)[] |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIMaterial.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L97)

___

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

### clone

▸ **clone**(): `any`

clone one material

#### Returns

`any`

Material

#### Inherited from

MaterialBase.clone

#### Defined in

[src/materials/MaterialBase.ts:383](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialBase.ts#L383)

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

#### Inherited from

MaterialBase.debug

#### Defined in

[src/materials/MaterialPass.ts:171](https://github.com/Orillusion/orillusion/blob/main/src/materials/MaterialPass.ts#L171)
