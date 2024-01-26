# Class: QuadTreeCell

### Constructors

- [constructor](QuadTreeCell.md#constructor)

### Properties

- [NUM\_CHILDREN](QuadTreeCell.md#num_children)
- [childCellIndices](QuadTreeCell.md#childcellindices)
- [nodeIndices](QuadTreeCell.md#nodeindices)
- [aabb](QuadTreeCell.md#aabb)
- [points](QuadTreeCell.md#points)

### Methods

- [isLeaf](QuadTreeCell.md#isleaf)
- [clear](QuadTreeCell.md#clear)

## Constructors

### constructor

• **new QuadTreeCell**(`aabox`): [`QuadTreeCell`](QuadTreeCell.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `aabox` | [`QuadAABB`](QuadAABB.md) |

#### Returns

[`QuadTreeCell`](QuadTreeCell.md)

#### Defined in

[src/core/tree/quad/QuadTreeCell.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadTreeCell.ts#L17)

## Properties

### NUM\_CHILDREN

▪ `Static` **NUM\_CHILDREN**: `number` = `4`

#### Defined in

[src/core/tree/quad/QuadTreeCell.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadTreeCell.ts#L7)

___

### childCellIndices

• **childCellIndices**: `number`[]

#### Defined in

[src/core/tree/quad/QuadTreeCell.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadTreeCell.ts#L9)

___

### nodeIndices

• **nodeIndices**: `number`[]

#### Defined in

[src/core/tree/quad/QuadTreeCell.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadTreeCell.ts#L11)

___

### aabb

• **aabb**: [`QuadAABB`](QuadAABB.md)

#### Defined in

[src/core/tree/quad/QuadTreeCell.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadTreeCell.ts#L13)

___

### points

• **points**: [`Vector3`](Vector3.md)[]

#### Defined in

[src/core/tree/quad/QuadTreeCell.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadTreeCell.ts#L15)

## Methods

### isLeaf

▸ **isLeaf**(): `boolean`

#### Returns

`boolean`

**`Language`**

zh_CN
Indicates if we contain triangles (if not then we should/might have children)

#### Defined in

[src/core/tree/quad/QuadTreeCell.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadTreeCell.ts#L36)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/core/tree/quad/QuadTreeCell.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadTreeCell.ts#L40)
