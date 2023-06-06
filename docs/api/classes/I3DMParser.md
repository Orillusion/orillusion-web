# Class: I3DMParser

## Hierarchy

- `ParserBase`

  ↳ **`I3DMParser`**

### Constructors

- [constructor](I3DMParser.md#constructor)

### Properties

- [format](I3DMParser.md#format)
- [baseUrl](I3DMParser.md#baseurl)
- [initUrl](I3DMParser.md#initurl)
- [loaderFunctions](I3DMParser.md#loaderfunctions)
- [userData](I3DMParser.md#userdata)
- [data](I3DMParser.md#data)

### Methods

- [parseBuffer](I3DMParser.md#parsebuffer)
- [verification](I3DMParser.md#verification)
- [parseString](I3DMParser.md#parsestring)
- [parseJson](I3DMParser.md#parsejson)
- [parseTexture](I3DMParser.md#parsetexture)
- [parse](I3DMParser.md#parse)

## Constructors

### constructor

• **new I3DMParser**()

#### Inherited from

ParserBase.constructor

## Properties

### format

▪ `Static` **format**: `string` = `'bin'`

#### Overrides

ParserBase.format

#### Defined in

[src/loader/parser/I3DMParser.ts:5](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/I3DMParser.ts#L5)

___

### baseUrl

• **baseUrl**: `string`

#### Inherited from

ParserBase.baseUrl

#### Defined in

[src/loader/parser/ParserBase.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L10)

___

### initUrl

• **initUrl**: `string`

#### Inherited from

ParserBase.initUrl

#### Defined in

[src/loader/parser/ParserBase.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L11)

___

### loaderFunctions

• `Optional` **loaderFunctions**: [`LoaderFunctions`](../types/LoaderFunctions.md)

#### Inherited from

ParserBase.loaderFunctions

#### Defined in

[src/loader/parser/ParserBase.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L12)

___

### userData

• `Optional` **userData**: `any`

#### Inherited from

ParserBase.userData

#### Defined in

[src/loader/parser/ParserBase.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L13)

___

### data

• **data**: `any`

#### Inherited from

ParserBase.data

#### Defined in

[src/loader/parser/ParserBase.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L14)

## Methods

### parseBuffer

▸ **parseBuffer**(`buffer`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |

#### Returns

`Promise`<`void`\>

#### Overrides

ParserBase.parseBuffer

#### Defined in

[src/loader/parser/I3DMParser.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/I3DMParser.ts#L7)

___

### verification

▸ **verification**(): `boolean`

Verify parsing validity

#### Returns

`boolean`

#### Overrides

ParserBase.verification

#### Defined in

[src/loader/parser/I3DMParser.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/I3DMParser.ts#L18)

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

[src/loader/parser/ParserBase.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L16)

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

[src/loader/parser/ParserBase.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L18)

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

[src/loader/parser/ParserBase.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L22)

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

[src/loader/parser/ParserBase.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L26)
