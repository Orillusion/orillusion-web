[**@orillusion/core**](../README.md)

***

# Class: AtlasParser

Defined in: [src/loader/parser/AtlasParser.ts:14](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/AtlasParser.ts#L14)

Parser for texture atlas descriptor files. Loads the companion atlas
image and builds a [TextureAtlas](TextureAtlas.md) whose regions are normalized
from the pixel rectangles described in the JSON.

## Constructors

### Constructor

> **new AtlasParser**(): `AtlasParser`

#### Returns

`AtlasParser`

#### Inherited from

`ParserBase.constructor`

## Properties

### format

> `static` **format**: [`ParserFormat`](../enumerations/ParserFormat.md) = `ParserFormat.TEXT`

Defined in: [src/loader/parser/AtlasParser.ts:15](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/AtlasParser.ts#L15)

#### Overrides

`ParserBase.format`

***

### baseUrl

> **baseUrl**: `string`

Defined in: [src/loader/parser/ParserBase.ts:12](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L12)

#### Inherited from

`ParserBase.baseUrl`

***

### initUrl

> **initUrl**: `string`

Defined in: [src/loader/parser/ParserBase.ts:13](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L13)

#### Inherited from

`ParserBase.initUrl`

***

### loaderFunctions?

> `optional` **loaderFunctions?**: [`LoaderFunctions`](../type-aliases/LoaderFunctions.md)

Defined in: [src/loader/parser/ParserBase.ts:14](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L14)

#### Inherited from

`ParserBase.loaderFunctions`

***

### userData?

> `optional` **userData?**: `any`

Defined in: [src/loader/parser/ParserBase.ts:15](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L15)

#### Inherited from

`ParserBase.userData`

***

### data

> **data**: `any`

Defined in: [src/loader/parser/ParserBase.ts:16](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L16)

#### Inherited from

`ParserBase.data`

***

### ctx?

> `optional` **ctx?**: [`Context3D`](Context3D.md)

Defined in: [src/loader/parser/ParserBase.ts:20](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L20)

Context3D this parser is operating under. Populated by FileLoader
 so default-texture lookups (`Engine3D.resFor(this.ctx)`) resolve
 against the owning engine's device rather than the global shim.

#### Inherited from

`ParserBase.ctx`

## Methods

### parseString()

> **parseString**(`data`): `Promise`\<`void`\>

Defined in: [src/loader/parser/AtlasParser.ts:25](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/AtlasParser.ts#L25)

Parse the atlas JSON, load its sibling `.png` texture, and build
the [TextureAtlas](TextureAtlas.md).

#### Parameters

##### data

`string`

Raw atlas descriptor JSON string.

#### Returns

`Promise`\<`void`\>

#### Overrides

`ParserBase.parseString`

***

### verification()

> **verification**(): `boolean`

Defined in: [src/loader/parser/AtlasParser.ts:37](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/AtlasParser.ts#L37)

Verify that parsing produced valid data.

#### Returns

`boolean`

true when data is present; throws otherwise.

#### Overrides

`ParserBase.verification`

***

### parseJson()

> **parseJson**(`obj`): `void`

Defined in: [src/loader/parser/ParserBase.ts:24](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L24)

#### Parameters

##### obj

`object`

#### Returns

`void`

#### Inherited from

`ParserBase.parseJson`

***

### parseBuffer()

> **parseBuffer**(`buffer`): `void`

Defined in: [src/loader/parser/ParserBase.ts:26](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L26)

#### Parameters

##### buffer

`ArrayBuffer`

#### Returns

`void`

#### Inherited from

`ParserBase.parseBuffer`

***

### parseTexture()

> **parseTexture**(`buffer`): [`Texture`](Texture.md)

Defined in: [src/loader/parser/ParserBase.ts:28](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L28)

#### Parameters

##### buffer

`ArrayBuffer`

#### Returns

[`Texture`](Texture.md)

#### Inherited from

`ParserBase.parseTexture`

***

### parse()

> **parse**(`data`): `void`

Defined in: [src/loader/parser/ParserBase.ts:32](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L32)

#### Parameters

##### data

`any`

#### Returns

`void`

#### Inherited from

`ParserBase.parse`
