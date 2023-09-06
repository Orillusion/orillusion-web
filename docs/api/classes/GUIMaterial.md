# Class: GUIMaterial

material used in rendering GUI

## Hierarchy

- [`Material`](Material.md)

  ↳ **`GUIMaterial`**

### Constructors

- [constructor](GUIMaterial.md#constructor)

### Properties

- [name](GUIMaterial.md#name)
- [instanceID](GUIMaterial.md#instanceid)
- [enable](GUIMaterial.md#enable)

### Accessors

- [envMap](GUIMaterial.md#envmap)
- [shadowMap](GUIMaterial.md#shadowmap)
- [baseMap](GUIMaterial.md#basemap)
- [normalMap](GUIMaterial.md#normalmap)
- [emissiveMap](GUIMaterial.md#emissivemap)
- [irradianceMap](GUIMaterial.md#irradiancemap)
- [irradianceDepthMap](GUIMaterial.md#irradiancedepthmap)
- [depthCompare](GUIMaterial.md#depthcompare)
- [defaultPass](GUIMaterial.md#defaultpass)
- [doubleSide](GUIMaterial.md#doubleside)
- [castShadow](GUIMaterial.md#castshadow)
- [blendMode](GUIMaterial.md#blendmode)
- [transparent](GUIMaterial.md#transparent)
- [cullMode](GUIMaterial.md#cullmode)

### Methods

- [setLimitVertex](GUIMaterial.md#setlimitvertex)
- [setGUISolution](GUIMaterial.md#setguisolution)
- [setScissorRect](GUIMaterial.md#setscissorrect)
- [setScissorEnable](GUIMaterial.md#setscissorenable)
- [setScissorCorner](GUIMaterial.md#setscissorcorner)
- [setScreenSize](GUIMaterial.md#setscreensize)
- [setTextures](GUIMaterial.md#settextures)
- [hasPass](GUIMaterial.md#haspass)
- [getPass](GUIMaterial.md#getpass)
- [getAllPass](GUIMaterial.md#getallpass)
- [addPass](GUIMaterial.md#addpass)
- [removePass](GUIMaterial.md#removepass)
- [clone](GUIMaterial.md#clone)
- [destroy](GUIMaterial.md#destroy)

## Constructors

### constructor

• **new GUIMaterial**(`space`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `space` | [`GUISpace`](../enums/GUISpace.md) |

#### Overrides

[Material](Material.md).[constructor](Material.md#constructor)

#### Defined in

[src/components/gui/core/GUIMaterial.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L23)

## Properties

### name

• **name**: `string`

name of this material

#### Inherited from

[Material](Material.md).[name](Material.md#name)

#### Defined in

[src/materials/Material.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L11)

___

### instanceID

• **instanceID**: `string`

Material Unique Identifier

#### Inherited from

[Material](Material.md).[instanceID](Material.md#instanceid)

#### Defined in

[src/materials/Material.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L17)

___

### enable

• **enable**: `boolean` = `true`

#### Inherited from

[Material](Material.md).[enable](Material.md#enable)

#### Defined in

[src/materials/Material.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L19)

## Accessors

### envMap

• `set` **envMap**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIMaterial.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L129)

___

### shadowMap

• `set` **shadowMap**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIMaterial.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L130)

___

### baseMap

• `set` **baseMap**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIMaterial.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L131)

___

### normalMap

• `set` **normalMap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIMaterial.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L132)

___

### emissiveMap

• `set` **emissiveMap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIMaterial.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L133)

___

### irradianceMap

• `set` **irradianceMap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIMaterial.ts:134](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L134)

___

### irradianceDepthMap

• `set` **irradianceDepthMap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/core/GUIMaterial.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L135)

___

### depthCompare

• `get` **depthCompare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Inherited from

Material.depthCompare

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

Material.depthCompare

#### Defined in

[src/materials/Material.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L35)

___

### defaultPass

• `get` **defaultPass**(): [`RenderShader`](RenderShader.md)

#### Returns

[`RenderShader`](RenderShader.md)

#### Inherited from

Material.defaultPass

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

Material.defaultPass

#### Defined in

[src/materials/Material.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L44)

___

### doubleSide

• `get` **doubleSide**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Material.doubleSide

#### Defined in

[src/materials/Material.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L49)

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

[src/materials/Material.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L53)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Material.castShadow

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

Material.castShadow

#### Defined in

[src/materials/Material.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L62)

___

### blendMode

• `get` **blendMode**(): [`BlendMode`](../enums/BlendMode.md)

#### Returns

[`BlendMode`](../enums/BlendMode.md)

#### Inherited from

Material.blendMode

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

Material.blendMode

#### Defined in

[src/materials/Material.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L72)

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

[src/materials/Material.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L83)

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

#### Returns

`GPUCullMode`

#### Inherited from

Material.cullMode

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

Material.cullMode

#### Defined in

[src/materials/Material.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L96)

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

[src/components/gui/core/GUIMaterial.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L58)

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

[src/components/gui/core/GUIMaterial.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L62)

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

[src/components/gui/core/GUIMaterial.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L67)

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

[src/components/gui/core/GUIMaterial.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L73)

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

[src/components/gui/core/GUIMaterial.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L85)

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

[src/components/gui/core/GUIMaterial.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L93)

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

[src/components/gui/core/GUIMaterial.ts:102](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIMaterial.ts#L102)

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

[Material](Material.md).[hasPass](Material.md#haspass)

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

[Material](Material.md).[getPass](Material.md#getpass)

#### Defined in

[src/materials/Material.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L114)

___

### getAllPass

▸ **getAllPass**(): [`RenderShader`](RenderShader.md)[]

get all color render pass

#### Returns

[`RenderShader`](RenderShader.md)[]

#### Inherited from

[Material](Material.md).[getAllPass](Material.md#getallpass)

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

[Material](Material.md).[addPass](Material.md#addpass)

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

[Material](Material.md).[removePass](Material.md#removepass)

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

[Material](Material.md).[clone](Material.md#clone)

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

[Material](Material.md).[destroy](Material.md#destroy)

#### Defined in

[src/materials/Material.ts:162](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L162)
