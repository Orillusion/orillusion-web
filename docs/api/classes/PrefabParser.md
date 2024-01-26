# Class: PrefabParser

## Hierarchy

- `ParserBase`

  ↳ **`PrefabParser`**

### Constructors

- [constructor](PrefabParser.md#constructor)

### Properties

- [baseUrl](PrefabParser.md#baseurl)
- [initUrl](PrefabParser.md#initurl)
- [useWebp](PrefabParser.md#usewebp)
- [format](PrefabParser.md#format)
- [loaderFunctions](PrefabParser.md#loaderfunctions)
- [userData](PrefabParser.md#userdata)
- [data](PrefabParser.md#data)
- [avatarDic](PrefabParser.md#avatardic)
- [nodeData](PrefabParser.md#nodedata)

### Methods

- [parseString](PrefabParser.md#parsestring)
- [parseJson](PrefabParser.md#parsejson)
- [parseTexture](PrefabParser.md#parsetexture)
- [parse](PrefabParser.md#parse)
- [parseBuffer](PrefabParser.md#parsebuffer)
- [verification](PrefabParser.md#verification)

## Constructors

### constructor

• **new PrefabParser**(): [`PrefabParser`](PrefabParser.md)

#### Returns

[`PrefabParser`](PrefabParser.md)

#### Inherited from

ParserBase.constructor

## Properties

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

### useWebp

▪ `Static` **useWebp**: `boolean` = `true`

#### Defined in

[src/loader/parser/prefab/PrefabParser.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabParser.ts#L26)

___

### format

▪ `Static` **format**: [`ParserFormat`](../enums/ParserFormat.md) = `ParserFormat.BIN`

#### Overrides

ParserBase.format

#### Defined in

[src/loader/parser/prefab/PrefabParser.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabParser.ts#L27)

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

___

### avatarDic

• **avatarDic**: `Object`

#### Index signature

▪ [name: `string`]: [`PrefabAvatarData`](PrefabAvatarData.md)

#### Defined in

[src/loader/parser/prefab/PrefabParser.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabParser.ts#L28)

___

### nodeData

• **nodeData**: [`PrefabNode`](PrefabNode.md)

#### Defined in

[src/loader/parser/prefab/PrefabParser.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabParser.ts#L29)

## Methods

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

___

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

[src/loader/parser/prefab/PrefabParser.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabParser.ts#L30)

___

### verification

▸ **verification**(): `boolean`

Verify parsing validity

#### Returns

`boolean`

#### Overrides

ParserBase.verification

#### Defined in

[src/loader/parser/prefab/PrefabParser.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/prefab/PrefabParser.ts#L92)
