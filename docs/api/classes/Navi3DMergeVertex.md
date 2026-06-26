[**@orillusion/core**](../README.md)

***

# Class: Navi3DMergeVertex

Defined in: [src/math/navigation/Navi3DMergeVertex.ts:9](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DMergeVertex.ts#L9)

Utility that merges coincident vertices when building a navigation mesh from geometry.

## Constructors

### Constructor

> **new Navi3DMergeVertex**(): `Navi3DMergeVertex`

#### Returns

`Navi3DMergeVertex`

## Properties

### vertex

> **vertex**: [`Vector3`](Vector3.md)[]

Defined in: [src/math/navigation/Navi3DMergeVertex.ts:11](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DMergeVertex.ts#L11)

The vertex positions extracted from the source geometry.

***

### indices

> **indices**: `number`[]

Defined in: [src/math/navigation/Navi3DMergeVertex.ts:13](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DMergeVertex.ts#L13)

The (possibly remapped) triangle indices into [vertex](#vertex).

## Methods

### merge()

> **merge**(`geometry`, `threshould?`): `this`

Defined in: [src/math/navigation/Navi3DMergeVertex.ts:16](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DMergeVertex.ts#L16)

Extracts vertices and indices from the geometry, merging vertices closer than the given threshold.

#### Parameters

##### geometry

[`GeometryBase`](GeometryBase.md)

##### threshould?

`number` = `0.1`

#### Returns

`this`

***

### parse()

> **parse**(`geometry`): `this`

Defined in: [src/math/navigation/Navi3DMergeVertex.ts:49](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DMergeVertex.ts#L49)

Extracts vertices and indices from the geometry without merging any vertices.

#### Parameters

##### geometry

[`GeometryBase`](GeometryBase.md)

#### Returns

`this`
