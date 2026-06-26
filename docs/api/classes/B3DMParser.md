[**@orillusion/core**](../README.md)

***

# Class: B3DMParser

Defined in: [src/loader/parser/B3DMParser.ts:10](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/B3DMParser.ts#L10)

Parser for Batched 3D Model (`.b3dm`) tiles used by 3D Tiles datasets.
Decodes the binary buffer into an [Object3D](Object3D.md) scene graph.

## Constructors

### Constructor

> **new B3DMParser**(): `B3DMParser`

#### Returns

`B3DMParser`

#### Inherited from

`ParserBase.constructor`

## Properties

### format

> `static` **format**: [`ParserFormat`](../enumerations/ParserFormat.md) = `ParserFormat.JSON`

Defined in: [src/loader/parser/B3DMParser.ts:11](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/B3DMParser.ts#L11)

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

> **parseBuffer**(`buffer`, `customLoader?`): `Promise`\<`void`\>

Defined in: [src/loader/parser/B3DMParser.ts:18](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/B3DMParser.ts#L18)

Parse a `.b3dm` binary buffer into an [Object3D](Object3D.md).

#### Parameters

##### buffer

`ArrayBuffer`

Raw `.b3dm` binary data.

##### customLoader?

(`array`) => `Promise`\<[`Object3D`](Object3D.md)\>

Optional hook to load the embedded glTF/GLB payload.

#### Returns

`Promise`\<`void`\>

#### Overrides

`ParserBase.parseBuffer`

***

### verification()

> **verification**(): `boolean`

Defined in: [src/loader/parser/B3DMParser.ts:28](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/B3DMParser.ts#L28)

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
