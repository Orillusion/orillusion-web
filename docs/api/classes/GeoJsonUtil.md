[**@orillusion/core**](../README.md)

***

# Class: GeoJsonUtil

Defined in: [src/loader/parser/gis/GeoJsonUtil.ts.ts:11](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gis/GeoJsonUtil.ts.ts#L11)

Helper utilities for converting parsed GeoJSON structures into engine
geometry data (e.g. polylines / polygon outlines in world space).

## Constructors

### Constructor

> **new GeoJsonUtil**(): `GeoJsonUtil`

#### Returns

`GeoJsonUtil`

## Methods

### getPath()

> `static` **getPath**(`data`): [`Vector3`](Vector3.md)[][]

Defined in: [src/loader/parser/gis/GeoJsonUtil.ts.ts:17](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/gis/GeoJsonUtil.ts.ts#L17)

Extract polyline paths from a GeoJSON structure.

#### Parameters

##### data

[`GeoJsonStruct`](../interfaces/GeoJsonStruct.md)

Parsed GeoJSON feature collection.

#### Returns

[`Vector3`](Vector3.md)[][]

Arrays of [Vector3](Vector3.md) points, one array per matching feature.
