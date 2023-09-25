# Class: Material

## Hierarchy

- **`Material`**

  ↳ [`GUIMaterial`](GUIMaterial.md)

  ↳ [`LambertMaterial`](LambertMaterial.md)

  ↳ [`PointMaterial`](PointMaterial.md)

  ↳ [`UnLitMaterial`](UnLitMaterial.md)

### Constructors

- [constructor](Material.md#constructor)

### Properties

- [name](Material.md#name)
- [instanceID](Material.md#instanceid)
- [enable](Material.md#enable)

### Accessors

- [depthCompare](Material.md#depthcompare)
- [defaultPass](Material.md#defaultpass)
- [doubleSide](Material.md#doubleside)
- [castShadow](Material.md#castshadow)
- [blendMode](Material.md#blendmode)
- [transparent](Material.md#transparent)
- [cullMode](Material.md#cullmode)

### Methods

- [hasPass](Material.md#haspass)
- [getPass](Material.md#getpass)
- [getAllPass](Material.md#getallpass)
- [addPass](Material.md#addpass)
- [removePass](Material.md#removepass)
- [clone](Material.md#clone)
- [destroy](Material.md#destroy)

## Constructors

### constructor

• **new Material**()

#### Defined in

[src/materials/Material.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L27)

## Properties

### name

• **name**: `string`

name of this material

#### Defined in

[src/materials/Material.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L11)

___

### instanceID

• **instanceID**: `string`

Material Unique Identifier

#### Defined in

[src/materials/Material.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L17)

___

### enable

• **enable**: `boolean` = `true`

#### Defined in

[src/materials/Material.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L19)

## Accessors

### depthCompare

• `get` **depthCompare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Defined in

[src/materials/Material.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L31)

• `set` **depthCompare**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Defined in

[src/materials/Material.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L35)

___

### defaultPass

• `get` **defaultPass**(): [`RenderShader`](RenderShader.md)

#### Returns

[`RenderShader`](RenderShader.md)

#### Defined in

[src/materials/Material.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L40)

• `set` **defaultPass**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`RenderShader`](RenderShader.md) |

#### Returns

`void`

#### Defined in

[src/materials/Material.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L44)

___

### doubleSide

• `get` **doubleSide**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/materials/Material.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L49)

• `set` **doubleSide**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/materials/Material.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L53)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/materials/Material.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L57)

• `set` **castShadow**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/materials/Material.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L62)

___

### blendMode

• `get` **blendMode**(): [`BlendMode`](../enums/BlendMode.md)

#### Returns

[`BlendMode`](../enums/BlendMode.md)

#### Defined in

[src/materials/Material.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L67)

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlendMode`](../enums/BlendMode.md) |

#### Returns

`void`

#### Defined in

[src/materials/Material.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L72)

___

### transparent

• `get` **transparent**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/materials/Material.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L78)

• `set` **transparent**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/materials/Material.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L83)

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

#### Returns

`GPUCullMode`

#### Defined in

[src/materials/Material.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L91)

• `set` **cullMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCullMode` |

#### Returns

`void`

#### Defined in

[src/materials/Material.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L96)

## Methods

### hasPass

▸ **hasPass**(`passType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `passType` | `RendererType` |

#### Returns

`boolean`

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

#### Defined in

[src/materials/Material.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L114)

___

### getAllPass

▸ **getAllPass**(): [`RenderShader`](RenderShader.md)[]

get all color render pass

#### Returns

[`RenderShader`](RenderShader.md)[]

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

#### Defined in

[src/materials/Material.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L145)

___

### clone

▸ **clone**(): `any`

clone one material

#### Returns

`any`

Material

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

#### Defined in

[src/materials/Material.ts:162](https://github.com/Orillusion/orillusion/blob/main/src/materials/Material.ts#L162)
