# Class: PrefabLoader

## Hierarchy

- `ParserBase`

  ↳ **`PrefabLoader`**


### Properties

- [format](PrefabLoader.md#format)
- [baseUrl](PrefabLoader.md#baseurl)
- [initUrl](PrefabLoader.md#initurl)
- [loaderFunctions](PrefabLoader.md#loaderfunctions)
- [userData](PrefabLoader.md#userdata)
- [data](PrefabLoader.md#data)

### Constructors

- [constructor](PrefabLoader.md#constructor)

### Methods

- [parserJson](PrefabLoader.md#parserjson)
- [parseBuffer](PrefabLoader.md#parsebuffer)
- [parserTexture](PrefabLoader.md#parsertexture)
- [parse](PrefabLoader.md#parse)
- [verification](PrefabLoader.md#verification)
- [parserString](PrefabLoader.md#parserstring)
- [applyEngineSetting](PrefabLoader.md#applyenginesetting)

## Properties

### format

▪ `Static` **format**: `string` = `'text'`

#### Overrides

ParserBase.format

#### Defined in

[src/engine/util/unserialize/PrefabLoader.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/unserialize/PrefabLoader.ts#L48)

___

### baseUrl

• **baseUrl**: `string`

#### Inherited from

ParserBase.baseUrl

#### Defined in

[src/engine/loader/parser/ParserBase.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/ParserBase.ts#L9)

___

### initUrl

• **initUrl**: `string`

#### Inherited from

ParserBase.initUrl

#### Defined in

[src/engine/loader/parser/ParserBase.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/ParserBase.ts#L10)

___

### loaderFunctions

• `Optional` **loaderFunctions**: [`LoaderFunctions`](../types/LoaderFunctions.md)

#### Inherited from

ParserBase.loaderFunctions

#### Defined in

[src/engine/loader/parser/ParserBase.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/ParserBase.ts#L11)

___

### userData

• `Optional` **userData**: `any`

#### Inherited from

ParserBase.userData

#### Defined in

[src/engine/loader/parser/ParserBase.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/ParserBase.ts#L12)

___

### data

• **data**: `any`

#### Inherited from

ParserBase.data

#### Defined in

[src/engine/loader/parser/ParserBase.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/ParserBase.ts#L25)

## Constructors

### constructor

• **new PrefabLoader**()

#### Inherited from

ParserBase.constructor

## Methods

### parserJson

▸ **parserJson**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `object` |

#### Returns

`void`

#### Inherited from

ParserBase.parserJson

#### Defined in

[src/engine/loader/parser/ParserBase.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/ParserBase.ts#L15)

___

### parseBuffer

▸ **parseBuffer**(`buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |

#### Returns

`void`

#### Inherited from

ParserBase.parseBuffer

#### Defined in

[src/engine/loader/parser/ParserBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/ParserBase.ts#L17)

___

### parserTexture

▸ **parserTexture**(`buffer`): [`Texture`](Texture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |

#### Returns

[`Texture`](Texture.md)

#### Inherited from

ParserBase.parserTexture

#### Defined in

[src/engine/loader/parser/ParserBase.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/ParserBase.ts#L19)

___

### parse

▸ **parse**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Inherited from

ParserBase.parse

#### Defined in

[src/engine/loader/parser/ParserBase.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/ParserBase.ts#L23)

___

### verification

▸ **verification**(): `boolean`

验证解析有效性

#### Returns

`boolean`

#### Overrides

ParserBase.verification

#### Defined in

[src/engine/util/unserialize/PrefabLoader.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/unserialize/PrefabLoader.ts#L58)

___

### parserString

▸ **parserString**(`data`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`Promise`<`void`\>

#### Overrides

ParserBase.parserString

#### Defined in

[src/engine/util/unserialize/PrefabLoader.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/unserialize/PrefabLoader.ts#L68)

___

### applyEngineSetting

▸ **applyEngineSetting**(`renderJob`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderJob` | [`ForwardRenderJob`](ForwardRenderJob.md) |

#### Returns

`void`

#### Defined in

[src/engine/util/unserialize/PrefabLoader.ts:371](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/unserialize/PrefabLoader.ts#L371)
