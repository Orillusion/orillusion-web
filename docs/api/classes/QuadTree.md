# Class: QuadTree

### Constructors

- [constructor](QuadTree.md#constructor)

### Methods

- [getQuadNode](QuadTree.md#getquadnode)
- [clear](QuadTree.md#clear)
- [initNodes](QuadTree.md#initnodes)
- [buildQuadTree](QuadTree.md#buildquadtree)
- [getNodesIntersectingtAABox](QuadTree.md#getnodesintersectingtaabox)

## Constructors

### constructor

• **new QuadTree**(): [`QuadTree`](QuadTree.md)

#### Returns

[`QuadTree`](QuadTree.md)

#### Defined in

[src/core/tree/quad/QuadTree.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadTree.ts#L20)

## Methods

### getQuadNode

▸ **getQuadNode**(`idx`): [`IQuadNode`](../interfaces/IQuadNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `idx` | `number` |

#### Returns

[`IQuadNode`](../interfaces/IQuadNode.md)

#### Defined in

[src/core/tree/quad/QuadTree.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadTree.ts#L28)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/core/tree/quad/QuadTree.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadTree.ts#L32)

___

### initNodes

▸ **initNodes**(`nodes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | [`IQuadNode`](../interfaces/IQuadNode.md)[] |

#### Returns

`void`

#### Defined in

[src/core/tree/quad/QuadTree.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadTree.ts#L37)

___

### buildQuadTree

▸ **buildQuadTree**(`maxNodesPerCell`, `minCellSize`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxNodesPerCell` | `number` |
| `minCellSize` | `number` |

#### Returns

`void`

#### Defined in

[src/core/tree/quad/QuadTree.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadTree.ts#L49)

___

### getNodesIntersectingtAABox

▸ **getNodesIntersectingtAABox**(`result`, `aabb`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `number`[] |
| `aabb` | [`QuadAABB`](QuadAABB.md) |

#### Returns

`number`

#### Defined in

[src/core/tree/quad/QuadTree.ts:176](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadTree.ts#L176)
