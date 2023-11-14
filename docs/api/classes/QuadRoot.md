# Class: QuadRoot

### Constructors

- [constructor](QuadRoot.md#constructor)

### Methods

- [createQuadTree](QuadRoot.md#createquadtree)
- [getNodesByAABB](QuadRoot.md#getnodesbyaabb)
- [getTriangleAtPoint](QuadRoot.md#gettriangleatpoint)

## Constructors

### constructor

• **new QuadRoot**(`maxNodesPerCell?`, `minCellSize?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `maxNodesPerCell` | `number` | `10` |
| `minCellSize` | `number` | `500` |

#### Defined in

[src/core/tree/quad/QuadRoot.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadRoot.ts#L20)

## Methods

### createQuadTree

▸ **createQuadTree**(`nodes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | [`IQuadNode`](../interfaces/IQuadNode.md)[] |

#### Returns

`void`

#### Defined in

[src/core/tree/quad/QuadRoot.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadRoot.ts#L28)

___

### getNodesByAABB

▸ **getNodesByAABB**(`minX`, `minY`, `maxX`, `maxY`): [`IQuadNode`](../interfaces/IQuadNode.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `minX` | `number` |
| `minY` | `number` |
| `maxX` | `number` |
| `maxY` | `number` |

#### Returns

[`IQuadNode`](../interfaces/IQuadNode.md)[]

#### Defined in

[src/core/tree/quad/QuadRoot.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadRoot.ts#L35)

___

### getTriangleAtPoint

▸ **getTriangleAtPoint**(`point`, `threshold?`): [`IQuadNode`](../interfaces/IQuadNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `point` | [`Vector3`](Vector3.md) | `undefined` |
| `threshold` | `number` | `5` |

#### Returns

[`IQuadNode`](../interfaces/IQuadNode.md)

#### Defined in

[src/core/tree/quad/QuadRoot.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadRoot.ts#L56)
