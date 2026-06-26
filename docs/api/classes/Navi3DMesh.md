[**@orillusion/core**](../README.md)

***

# Class: Navi3DMesh

Defined in: [src/math/navigation/Navi3DMesh.ts:15](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DMesh.ts#L15)

Navigation mesh built from geometry, used for 3D path-finding queries.

## Constructors

### Constructor

> **new Navi3DMesh**(`pointList`, `triangleIndexList`): `Navi3DMesh`

Defined in: [src/math/navigation/Navi3DMesh.ts:52](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DMesh.ts#L52)

Creates a navigation mesh from a list of points and triangle index lists.

#### Parameters

##### pointList

[`Vector3`](Vector3.md)[]

##### triangleIndexList

`number`[][]

#### Returns

`Navi3DMesh`

## Accessors

### edges

#### Get Signature

> **get** **edges**(): `Navi3DEdge`[]

Defined in: [src/math/navigation/Navi3DMesh.ts:32](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DMesh.ts#L32)

The edges that make up this navigation mesh.

##### Returns

`Navi3DEdge`[]

***

### points

#### Get Signature

> **get** **points**(): `Navi3DPoint`[]

Defined in: [src/math/navigation/Navi3DMesh.ts:37](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DMesh.ts#L37)

The points (vertices) that make up this navigation mesh.

##### Returns

`Navi3DPoint`[]

***

### path

#### Get Signature

> **get** **path**(): [`Vector3`](Vector3.md)[]

Defined in: [src/math/navigation/Navi3DMesh.ts:42](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DMesh.ts#L42)

The path computed by the most recent [findPath](#findpath) call.

##### Returns

[`Vector3`](Vector3.md)[]

***

### triangles

#### Get Signature

> **get** **triangles**(): `Navi3DTriangle`[]

Defined in: [src/math/navigation/Navi3DMesh.ts:47](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DMesh.ts#L47)

The triangles that make up this navigation mesh.

##### Returns

`Navi3DTriangle`[]

## Methods

### getTriangleAtPoint()

> **getTriangleAtPoint**(`point`, `threshold?`): [`IQuadNode`](../interfaces/IQuadNode.md)

Defined in: [src/math/navigation/Navi3DMesh.ts:73](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DMesh.ts#L73)

Returns the triangle located at the given point within the given threshold.

#### Parameters

##### point

[`Vector3`](Vector3.md)

##### threshold?

`number` = `5`

#### Returns

[`IQuadNode`](../interfaces/IQuadNode.md)

***

### findPath()

> **findPath**(`startPt`, `endPt`, `aiRadius?`): `boolean`

Defined in: [src/math/navigation/Navi3DMesh.ts:78](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DMesh.ts#L78)

Finds a path between two points for an agent of the given radius; returns whether a path was found.

#### Parameters

##### startPt

[`Vector3`](Vector3.md)

##### endPt

[`Vector3`](Vector3.md)

##### aiRadius?

`number` = `5`

#### Returns

`boolean`
