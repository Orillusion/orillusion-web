[**@orillusion/core**](../README.md)

***

# Class: OctreeEntity

Defined in: [src/core/tree/octree/OctreeEntity.ts:4](https://github.com/orillusion/orillusion/blob/main/src/core/tree/octree/OctreeEntity.ts#L4)

## Constructors

### Constructor

> **new OctreeEntity**(`renderer`): `OctreeEntity`

Defined in: [src/core/tree/octree/OctreeEntity.ts:8](https://github.com/orillusion/orillusion/blob/main/src/core/tree/octree/OctreeEntity.ts#L8)

#### Parameters

##### renderer

`RenderNode`

#### Returns

`OctreeEntity`

## Properties

### renderer

> `readonly` **renderer**: `RenderNode`

Defined in: [src/core/tree/octree/OctreeEntity.ts:5](https://github.com/orillusion/orillusion/blob/main/src/core/tree/octree/OctreeEntity.ts#L5)

***

### owner

> **owner**: [`Octree`](Octree.md)

Defined in: [src/core/tree/octree/OctreeEntity.ts:6](https://github.com/orillusion/orillusion/blob/main/src/core/tree/octree/OctreeEntity.ts#L6)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [src/core/tree/octree/OctreeEntity.ts:7](https://github.com/orillusion/orillusion/blob/main/src/core/tree/octree/OctreeEntity.ts#L7)

## Methods

### leaveNode()

> **leaveNode**(): `void`

Defined in: [src/core/tree/octree/OctreeEntity.ts:13](https://github.com/orillusion/orillusion/blob/main/src/core/tree/octree/OctreeEntity.ts#L13)

#### Returns

`void`

***

### enterNode()

> **enterNode**(`node`): `void`

Defined in: [src/core/tree/octree/OctreeEntity.ts:20](https://github.com/orillusion/orillusion/blob/main/src/core/tree/octree/OctreeEntity.ts#L20)

#### Parameters

##### node

[`Octree`](Octree.md)

#### Returns

`void`

***

### update()

> **update**(`root`): [`Octree`](Octree.md)

Defined in: [src/core/tree/octree/OctreeEntity.ts:26](https://github.com/orillusion/orillusion/blob/main/src/core/tree/octree/OctreeEntity.ts#L26)

#### Parameters

##### root

[`Octree`](Octree.md)

#### Returns

[`Octree`](Octree.md)
