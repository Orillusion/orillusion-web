[**@orillusion/core**](../README.md)

***

# Class: TilesRenderer

Defined in: [src/loader/parser/tileRenderer/TilesRenderer.ts:16](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/tileRenderer/TilesRenderer.ts#L16)

Loads and assembles a 3D Tiles tileset into a scene graph.
Reads a tileset.json, applies the root/up-axis transforms, and recursively
loads each referenced tile (glb, b3dm, i3dm, or nested tileset) into `group`.

## Constructors

### Constructor

> **new TilesRenderer**(`ctx?`): `TilesRenderer`

Defined in: [src/loader/parser/tileRenderer/TilesRenderer.ts:23](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/tileRenderer/TilesRenderer.ts#L23)

#### Parameters

##### ctx?

[`Context3D`](Context3D.md)

#### Returns

`TilesRenderer`

## Properties

### group

> `readonly` **group**: [`Object3D`](Object3D.md)

Defined in: [src/loader/parser/tileRenderer/TilesRenderer.ts:17](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/tileRenderer/TilesRenderer.ts#L17)

## Methods

### loadTileSet()

> **loadTileSet**(`rootPath`, `file`): `Promise`\<`void`\>

Defined in: [src/loader/parser/tileRenderer/TilesRenderer.ts:33](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/tileRenderer/TilesRenderer.ts#L33)

Load a tileset and add all of its tiles as children of `group`.

#### Parameters

##### rootPath

`string`

Base directory used to resolve tile content URIs.

##### file

`string`

Tileset descriptor file name (e.g. `tileset.json`).

#### Returns

`Promise`\<`void`\>
