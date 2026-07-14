[**@orillusion/core**](../README.md)

***

# Class: QuadTreeCell

Defined in: [src/core/tree/quad/QuadTreeCell.ts:5](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadTreeCell.ts#L5)

## Constructors

### Constructor

> **new QuadTreeCell**(`aabox`): `QuadTreeCell`

Defined in: [src/core/tree/quad/QuadTreeCell.ts:17](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadTreeCell.ts#L17)

#### Parameters

##### aabox

[`QuadAABB`](QuadAABB.md)

#### Returns

`QuadTreeCell`

## Properties

### NUM\_CHILDREN

> `static` **NUM\_CHILDREN**: `number` = `4`

Defined in: [src/core/tree/quad/QuadTreeCell.ts:7](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadTreeCell.ts#L7)

***

### childCellIndices

> **childCellIndices**: `number`[]

Defined in: [src/core/tree/quad/QuadTreeCell.ts:9](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadTreeCell.ts#L9)

***

### nodeIndices

> **nodeIndices**: `number`[]

Defined in: [src/core/tree/quad/QuadTreeCell.ts:11](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadTreeCell.ts#L11)

***

### aabb

> **aabb**: [`QuadAABB`](QuadAABB.md)

Defined in: [src/core/tree/quad/QuadTreeCell.ts:13](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadTreeCell.ts#L13)

***

### points

> **points**: [`Vector3`](Vector3.md)[]

Defined in: [src/core/tree/quad/QuadTreeCell.ts:15](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadTreeCell.ts#L15)

## Methods

### isLeaf()

> **isLeaf**(): `boolean`

Defined in: [src/core/tree/quad/QuadTreeCell.ts:36](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadTreeCell.ts#L36)

#### Returns

`boolean`

#### Language

zh_CN
Indicates if we contain triangles (if not then we should/might have children)

***

### clear()

> **clear**(): `void`

Defined in: [src/core/tree/quad/QuadTreeCell.ts:40](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadTreeCell.ts#L40)

#### Returns

`void`
