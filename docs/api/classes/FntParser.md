# Class: FntParser

## Hierarchy

- `ParserBase`

  ↳ **`FntParser`**


### Properties

- [format](FntParser.md#format)
- [baseUrl](FntParser.md#baseurl)
- [initUrl](FntParser.md#initurl)
- [loaderFunctions](FntParser.md#loaderfunctions)
- [userData](FntParser.md#userdata)
- [data](FntParser.md#data)

### Methods

- [parserSubTexture](FntParser.md#parsersubtexture)
- [verification](FntParser.md#verification)
- [getNewLine](FntParser.md#getnewline)
- [parserString](FntParser.md#parserstring)
- [loadFontTextures](FntParser.md#loadfonttextures)
- [parserJson](FntParser.md#parserjson)
- [parseBuffer](FntParser.md#parsebuffer)
- [parserTexture](FntParser.md#parsertexture)
- [parse](FntParser.md#parse)

### Constructors

- [constructor](FntParser.md#constructor)

## Properties

### format

▪ `Static` **format**: `string` = `'text'`

#### Overrides

ParserBase.format

#### Defined in

[src/engine/loader/parser/FntParser.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/FntParser.ts#L52)

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

## Methods

### parserSubTexture

▸ `Static` **parserSubTexture**(`sources`, `fontData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sources` | [`GUITextureSource`](GUITextureSource.md)[] |
| `fontData` | [`FontInfo`](FontInfo.md) |

#### Returns

`void`

#### Defined in

[src/engine/loader/parser/FntParser.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/FntParser.ts#L130)

___

### verification

▸ **verification**(): `boolean`

验证解析有效性

#### Returns

`boolean`

#### Overrides

ParserBase.verification

#### Defined in

[src/engine/loader/parser/FntParser.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/FntParser.ts#L59)

___

### getNewLine

▸ **getNewLine**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[src/engine/loader/parser/FntParser.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/FntParser.ts#L81)

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

[src/engine/loader/parser/FntParser.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/FntParser.ts#L87)

___

### loadFontTextures

▸ **loadFontTextures**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/engine/loader/parser/FntParser.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/FntParser.ts#L117)

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

## Constructors

### constructor

• **new FntParser**()

#### Inherited from

ParserBase.constructor
