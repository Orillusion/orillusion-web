# Class: UnLitMaterial

Unlit Mateiral
A non glossy surface material without specular highlights.

## Hierarchy

- [`Material`](Material.md)

  ↳ **`UnLitMaterial`**

### Constructors

- [constructor](UnLitMaterial.md#constructor)

### Properties

- [name](UnLitMaterial.md#name)
- [instanceID](UnLitMaterial.md#instanceid)
- [enable](UnLitMaterial.md#enable)

### Accessors

- [depthCompare](UnLitMaterial.md#depthcompare)
- [defaultPass](UnLitMaterial.md#defaultpass)
- [doubleSide](UnLitMaterial.md#doubleside)
- [castShadow](UnLitMaterial.md#castshadow)
- [blendMode](UnLitMaterial.md#blendmode)
- [transparent](UnLitMaterial.md#transparent)
- [cullMode](UnLitMaterial.md#cullmode)
- [baseMap](UnLitMaterial.md#basemap)
- [baseColor](UnLitMaterial.md#basecolor)
- [envMap](UnLitMaterial.md#envmap)

### Methods

- [hasPass](UnLitMaterial.md#haspass)
- [getPass](UnLitMaterial.md#getpass)
- [getAllPass](UnLitMaterial.md#getallpass)
- [addPass](UnLitMaterial.md#addpass)
- [removePass](UnLitMaterial.md#removepass)
- [clone](UnLitMaterial.md#clone)
- [destroy](UnLitMaterial.md#destroy)

## Constructors

### constructor

• **new UnLitMaterial**()

#### Overrides

[Material](Material.md).[constructor](Material.md#constructor)

#### Defined in

[src/materials/UnLitMaterial.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/materials/UnLitMaterial.ts#L18)

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

___

### baseMap

• `get` **baseMap**(): [`Texture`](Texture.md)

#### Returns

[`Texture`](Texture.md)

#### Defined in

[src/materials/UnLitMaterial.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/materials/UnLitMaterial.ts#L53)

• `set` **baseMap**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/materials/UnLitMaterial.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/materials/UnLitMaterial.ts#L49)

___

### baseColor

• `get` **baseColor**(): [`Color`](Color.md)

get base color (tint color)

#### Returns

[`Color`](Color.md)

#### Defined in

[src/materials/UnLitMaterial.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/materials/UnLitMaterial.ts#L67)

• `set` **baseColor**(`color`): `void`

set base color (tint color)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

[src/materials/UnLitMaterial.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/materials/UnLitMaterial.ts#L60)

___

### envMap

• `set` **envMap**(`texture`): `void`

set environment texture, usually referring to cubemap

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/materials/UnLitMaterial.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/materials/UnLitMaterial.ts#L74)

## Methods

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
