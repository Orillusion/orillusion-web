# Class: B3DMParser

## Hierarchy

- `ParserBase`

  ↳ **`B3DMParser`**

### Constructors

- [constructor](B3DMParser.md#constructor)

### Properties

- [format](B3DMParser.md#format)
- [baseUrl](B3DMParser.md#baseurl)
- [initUrl](B3DMParser.md#initurl)
- [loaderFunctions](B3DMParser.md#loaderfunctions)
- [userData](B3DMParser.md#userdata)
- [data](B3DMParser.md#data)

### Methods

- [parseBuffer](B3DMParser.md#parsebuffer)
- [verification](B3DMParser.md#verification)
- [parseString](B3DMParser.md#parsestring)
- [parseJson](B3DMParser.md#parsejson)
- [parseTexture](B3DMParser.md#parsetexture)
- [parse](B3DMParser.md#parse)

## Constructors

### constructor

• **new B3DMParser**(): [`B3DMParser`](B3DMParser.md)

#### Returns

[`B3DMParser`](B3DMParser.md)

#### Inherited from

ParserBase.constructor

## Properties

### format

▪ `Static` **format**: [`ParserFormat`](../enums/ParserFormat.md) = `ParserFormat.JSON`

#### Overrides

ParserBase.format

#### Defined in

[src/loader/parser/B3DMParser.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/B3DMParser.ts#L6)

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

[src/loader/parser/B3DMParser.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/B3DMParser.ts#L8)

___

### verification

▸ **verification**(): `boolean`

Verify parsing validity

#### Returns

`boolean`

#### Overrides

ParserBase.verification

#### Defined in

[src/loader/parser/B3DMParser.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/B3DMParser.ts#L19)

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
