# Class: AtlasParser

## Hierarchy

- `ParserBase`

  ↳ **`AtlasParser`**


### Properties

- [format](AtlasParser.md#format)
- [baseUrl](AtlasParser.md#baseurl)
- [initUrl](AtlasParser.md#initurl)
- [loaderFunctions](AtlasParser.md#loaderfunctions)
- [userData](AtlasParser.md#userdata)
- [data](AtlasParser.md#data)

### Constructors

- [constructor](AtlasParser.md#constructor)

### Methods

- [verification](AtlasParser.md#verification)
- [parserString](AtlasParser.md#parserstring)
- [parserJson](AtlasParser.md#parserjson)
- [parseBuffer](AtlasParser.md#parsebuffer)
- [parserTexture](AtlasParser.md#parsertexture)
- [parse](AtlasParser.md#parse)

## Properties

### format

▪ `Static` **format**: `string` = `'text'`

#### Overrides

ParserBase.format

#### Defined in

[src/engine/loader/parser/AtlasParser.ts:5](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/AtlasParser.ts#L5)

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

• **new AtlasParser**()

#### Inherited from

ParserBase.constructor

## Methods

### verification

▸ **verification**(): `boolean`

验证解析有效性

#### Returns

`boolean`

#### Overrides

ParserBase.verification

#### Defined in

[src/engine/loader/parser/AtlasParser.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/AtlasParser.ts#L12)

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

[src/engine/loader/parser/AtlasParser.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/AtlasParser.ts#L26)

___

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
