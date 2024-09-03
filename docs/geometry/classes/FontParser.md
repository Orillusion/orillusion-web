# Class: FontParser

## Hierarchy

- `ParserBase`

  ↳ **`FontParser`**

### Constructors

- [constructor](FontParser.md#constructor)

### Properties

- [format](FontParser.md#format)
- [data](FontParser.md#data)
- [baseUrl](FontParser.md#baseurl)
- [initUrl](FontParser.md#initurl)
- [loaderFunctions](FontParser.md#loaderfunctions)
- [userData](FontParser.md#userdata)

### Methods

- [parseBuffer](FontParser.md#parsebuffer)
- [verification](FontParser.md#verification)
- [parseString](FontParser.md#parsestring)
- [parseJson](FontParser.md#parsejson)
- [parseTexture](FontParser.md#parsetexture)
- [parse](FontParser.md#parse)

## Constructors

### constructor

• **new FontParser**(): [`FontParser`](FontParser.md)

#### Returns

[`FontParser`](FontParser.md)

#### Inherited from

ParserBase.constructor

## Properties

### format

▪ `Static` **format**: `ParserFormat` = `ParserFormat.BIN`

#### Inherited from

ParserBase.format

#### Defined in

[src/loader/parser/ParserBase.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L10)

___

### data

• **data**: `Font`

#### Overrides

ParserBase.data

#### Defined in

[packages/geometry/parser/FontParser.ts:5](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/parser/FontParser.ts#L5)

___

### baseUrl

• **baseUrl**: `string`

#### Inherited from

ParserBase.baseUrl

#### Defined in

[src/loader/parser/ParserBase.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L11)

___

### initUrl

• **initUrl**: `string`

#### Inherited from

ParserBase.initUrl

#### Defined in

[src/loader/parser/ParserBase.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L12)

___

### loaderFunctions

• `Optional` **loaderFunctions**: `LoaderFunctions`

#### Inherited from

ParserBase.loaderFunctions

#### Defined in

[src/loader/parser/ParserBase.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L13)

___

### userData

• `Optional` **userData**: `any`

#### Inherited from

ParserBase.userData

#### Defined in

[src/loader/parser/ParserBase.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L14)

## Methods

### parseBuffer

▸ **parseBuffer**(`buffer`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |

#### Returns

`Promise`\<`void`\>

#### Overrides

ParserBase.parseBuffer

#### Defined in

[packages/geometry/parser/FontParser.ts:6](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/parser/FontParser.ts#L6)

___

### verification

▸ **verification**(): `boolean`

#### Returns

`boolean`

#### Overrides

ParserBase.verification

#### Defined in

[packages/geometry/parser/FontParser.ts:11](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/parser/FontParser.ts#L11)

___

### parseString

▸ **parseString**(`str`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`void`

#### Inherited from

ParserBase.parseString

#### Defined in

[src/loader/parser/ParserBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L17)

___

### parseJson

▸ **parseJson**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `object` |

#### Returns

`void`

#### Inherited from

ParserBase.parseJson

#### Defined in

[src/loader/parser/ParserBase.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L19)

___

### parseTexture

▸ **parseTexture**(`buffer`): `Texture`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |

#### Returns

`Texture`

#### Inherited from

ParserBase.parseTexture

#### Defined in

[src/loader/parser/ParserBase.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L23)

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

[src/loader/parser/ParserBase.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L27)
