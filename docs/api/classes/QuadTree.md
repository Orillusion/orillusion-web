[**@orillusion/core**](../README.md)

***

# Class: QuadTree

Defined in: [src/core/tree/quad/QuadTree.ts:11](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadTree.ts#L11)

2D spatial partitioning structure that recursively subdivides a region
into four quadrant cells for fast spatial queries.

## Constructors

### Constructor

> **new QuadTree**(): `QuadTree`

Defined in: [src/core/tree/quad/QuadTree.ts:25](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadTree.ts#L25)

#### Returns

`QuadTree`

## Methods

### getQuadNode()

> **getQuadNode**(`idx`): [`IQuadNode`](../interfaces/IQuadNode.md)

Defined in: [src/core/tree/quad/QuadTree.ts:33](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadTree.ts#L33)

#### Parameters

##### idx

`number`

#### Returns

[`IQuadNode`](../interfaces/IQuadNode.md)

***

### clear()

> **clear**(): `void`

Defined in: [src/core/tree/quad/QuadTree.ts:37](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadTree.ts#L37)

#### Returns

`void`

***

### initNodes()

> **initNodes**(`nodes`): `void`

Defined in: [src/core/tree/quad/QuadTree.ts:42](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadTree.ts#L42)

#### Parameters

##### nodes

[`IQuadNode`](../interfaces/IQuadNode.md)[]

#### Returns

`void`

***

### buildQuadTree()

> **buildQuadTree**(`maxNodesPerCell`, `minCellSize`): `void`

Defined in: [src/core/tree/quad/QuadTree.ts:54](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadTree.ts#L54)

#### Parameters

##### maxNodesPerCell

`number`

##### minCellSize

`number`

#### Returns

`void`

***

### getNodesIntersectingtAABox()

> **getNodesIntersectingtAABox**(`result`, `aabb`): `number`

Defined in: [src/core/tree/quad/QuadTree.ts:181](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadTree.ts#L181)

#### Parameters

##### result

`number`[]

##### aabb

[`QuadAABB`](QuadAABB.md)

#### Returns

`number`
