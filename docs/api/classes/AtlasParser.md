# Class: AtlasParser

## Hierarchy

- `ParserBase`

  ↳ **`AtlasParser`**

### Constructors

- [constructor](AtlasParser.md#constructor)

### Properties

- [format](AtlasParser.md#format)
- [baseUrl](AtlasParser.md#baseurl)
- [initUrl](AtlasParser.md#initurl)
- [loaderFunctions](AtlasParser.md#loaderfunctions)
- [userData](AtlasParser.md#userdata)
- [data](AtlasParser.md#data)

### Methods

- [parseString](AtlasParser.md#parsestring)
- [verification](AtlasParser.md#verification)
- [parseJson](AtlasParser.md#parsejson)
- [parseBuffer](AtlasParser.md#parsebuffer)
- [parseTexture](AtlasParser.md#parsetexture)
- [parse](AtlasParser.md#parse)

## Constructors

### constructor

• **new AtlasParser**()

#### Inherited from

ParserBase.constructor

## Properties

### format

▪ `Static` **format**: [`ParserFormat`](../enums/ParserFormat.md) = `ParserFormat.TEXT`

#### Overrides

ParserBase.format

#### Defined in

[src/loader/parser/AtlasParser.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/AtlasParser.ts#L9)

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

• `Optional` **loaderFunctions**: [`LoaderFunctions`](../types/LoaderFunctions.md)

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

___

### data

• **data**: `any`

#### Inherited from

ParserBase.data

#### Defined in

[src/loader/parser/ParserBase.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L15)

## Methods

### parseString

▸ **parseString**(`data`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`Promise`<`void`\>

#### Overrides

ParserBase.parseString

#### Defined in

[src/loader/parser/AtlasParser.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/AtlasParser.ts#L14)

___

### verification

▸ **verification**(): `boolean`

Verify parsing validity

#### Returns

`boolean`

#### Overrides

ParserBase.verification

#### Defined in

[src/loader/parser/AtlasParser.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/AtlasParser.ts#L28)

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

[src/loader/parser/ParserBase.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L21)

___

### parseTexture

▸ **parseTexture**(`buffer`): [`Texture`](Texture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |

#### Returns

[`Texture`](Texture.md)

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
