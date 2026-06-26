[**@orillusion/core**](../README.md)

***

# Class: I3DMParser

Defined in: [src/loader/parser/I3DMParser.ts:10](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/I3DMParser.ts#L10)

Parser for the Instanced 3D Model (i3dm) tile format used by 3D Tiles.
Decodes an i3dm buffer into an Object3D scene graph via the I3DMLoader.

## Constructors

### Constructor

> **new I3DMParser**(): `I3DMParser`

#### Returns

`I3DMParser`

#### Inherited from

`ParserBase.constructor`

## Properties

### format

> `static` **format**: [`ParserFormat`](../enumerations/ParserFormat.md) = `ParserFormat.BIN`

Defined in: [src/loader/parser/I3DMParser.ts:11](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/I3DMParser.ts#L11)

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

### parseBuffer()

> **parseBuffer**(`buffer`): `Promise`\<`void`\>

Defined in: [src/loader/parser/I3DMParser.ts:17](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/I3DMParser.ts#L17)

Parse an i3dm binary buffer and store the resulting model in `this.data`.

#### Parameters

##### buffer

`ArrayBuffer`

The raw i3dm file contents.

#### Returns

`Promise`\<`void`\>

#### Overrides

`ParserBase.parseBuffer`

***

### verification()

> **verification**(): `boolean`

Defined in: [src/loader/parser/I3DMParser.ts:27](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/I3DMParser.ts#L27)

Verify that parsing produced valid data.

#### Returns

`boolean`

true when data is present; throws otherwise.

#### Overrides

`ParserBase.verification`

***

### parseString()

> **parseString**(`str`): `void`

Defined in: [src/loader/parser/ParserBase.ts:22](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L22)

#### Parameters

##### str

`string`

#### Returns

`void`

#### Inherited from

`ParserBase.parseString`

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
