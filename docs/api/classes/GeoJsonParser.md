[**@orillusion/core**](../README.md)

***

# Class: GeoJsonParser

Defined in: [src/loader/parser/gis/GeoJsonParser.ts:37](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gis/GeoJsonParser.ts#L37)

Parser for GeoJSON feature collections. Parses the raw JSON text into
a typed [GeoJsonStruct](../interfaces/GeoJsonStruct.md) that downstream GIS utilities can consume.

## Constructors

### Constructor

> **new GeoJsonParser**(): `GeoJsonParser`

#### Returns

`GeoJsonParser`

#### Inherited from

`ParserBase.constructor`

## Properties

### format

> `static` **format**: [`ParserFormat`](../enumerations/ParserFormat.md) = `ParserFormat.JSON`

Defined in: [src/loader/parser/gis/GeoJsonParser.ts:38](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gis/GeoJsonParser.ts#L38)

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

***

### json

> **json**: `string`

Defined in: [src/loader/parser/gis/GeoJsonParser.ts:40](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gis/GeoJsonParser.ts#L40)

Raw GeoJSON source text passed to the parser.

## Methods

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

***

### verification()

> **verification**(`ret`): `boolean`

Defined in: [src/loader/parser/ParserBase.ts:34](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/ParserBase.ts#L34)

#### Parameters

##### ret

`void`

#### Returns

`boolean`

#### Inherited from

`ParserBase.verification`

***

### parseString()

> **parseString**(`data`): `Promise`\<`void`\>

Defined in: [src/loader/parser/gis/GeoJsonParser.ts:45](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gis/GeoJsonParser.ts#L45)

Parse GeoJSON text into a [GeoJsonStruct](../interfaces/GeoJsonStruct.md).

#### Parameters

##### data

`any`

Raw GeoJSON string.

#### Returns

`Promise`\<`void`\>

#### Overrides

`ParserBase.parseString`
