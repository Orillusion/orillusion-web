[**@orillusion/core**](../README.md)

***

# Class: BoundUtil

Defined in: [src/util/BoundUtil.ts:11](https://github.com/orillusion/orillusion/blob/main/src/util/BoundUtil.ts#L11)

Utils for calculating bounding boxes

## Constructors

### Constructor

> **new BoundUtil**(): `BoundUtil`

#### Returns

`BoundUtil`

## Methods

### genMeshBounds()

> `static` **genMeshBounds**(`obj`, `bound?`): `BoundingBox`

Defined in: [src/util/BoundUtil.ts:21](https://github.com/orillusion/orillusion/blob/main/src/util/BoundUtil.ts#L21)

Merge the bounding boxes that have been added to the world matrix based on the mesh of the children node

#### Parameters

##### obj

[`Object3D`](Object3D.md)

##### bound?

`BoundingBox`

#### Returns

`BoundingBox`

***

### transformBound()

> `static` **transformBound**(`matrix`, `source`, `bound?`): `BoundingBox`

Defined in: [src/util/BoundUtil.ts:61](https://github.com/orillusion/orillusion/blob/main/src/util/BoundUtil.ts#L61)

#### Parameters

##### matrix

[`Matrix4`](Matrix4.md)

##### source

`BoundingBox`

##### bound?

`BoundingBox`

#### Returns

`BoundingBox`
