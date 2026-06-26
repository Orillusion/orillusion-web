[**@orillusion/core**](../README.md)

***

# Class: QuadRoot

Defined in: [src/core/tree/quad/QuadRoot.ts:11](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadRoot.ts#L11)

Root container of a quad-tree that owns the cells and manages node
insertion against a maximum-nodes-per-cell budget.

## Constructors

### Constructor

> **new QuadRoot**(`maxNodesPerCell?`, `minCellSize?`): `QuadRoot`

Defined in: [src/core/tree/quad/QuadRoot.ts:25](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadRoot.ts#L25)

#### Parameters

##### maxNodesPerCell?

`number` = `10`

##### minCellSize?

`number` = `500`

#### Returns

`QuadRoot`

## Methods

### createQuadTree()

> **createQuadTree**(`nodes`): `void`

Defined in: [src/core/tree/quad/QuadRoot.ts:33](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadRoot.ts#L33)

#### Parameters

##### nodes

[`IQuadNode`](../interfaces/IQuadNode.md)[]

#### Returns

`void`

***

### getNodesByAABB()

> **getNodesByAABB**(`minX`, `minY`, `maxX`, `maxY`): [`IQuadNode`](../interfaces/IQuadNode.md)[]

Defined in: [src/core/tree/quad/QuadRoot.ts:40](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadRoot.ts#L40)

#### Parameters

##### minX

`number`

##### minY

`number`

##### maxX

`number`

##### maxY

`number`

#### Returns

[`IQuadNode`](../interfaces/IQuadNode.md)[]

***

### getTriangleAtPoint()

> **getTriangleAtPoint**(`point`, `threshold?`): [`IQuadNode`](../interfaces/IQuadNode.md)

Defined in: [src/core/tree/quad/QuadRoot.ts:61](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadRoot.ts#L61)

#### Parameters

##### point

[`Vector3`](Vector3.md)

##### threshold?

`number` = `5`

#### Returns

[`IQuadNode`](../interfaces/IQuadNode.md)
