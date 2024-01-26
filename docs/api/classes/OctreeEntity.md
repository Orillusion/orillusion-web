# Class: OctreeEntity

### Constructors

- [constructor](OctreeEntity.md#constructor)

### Properties

- [renderer](OctreeEntity.md#renderer)
- [owner](OctreeEntity.md#owner)
- [uuid](OctreeEntity.md#uuid)

### Methods

- [leaveNode](OctreeEntity.md#leavenode)
- [enterNode](OctreeEntity.md#enternode)
- [update](OctreeEntity.md#update)

## Constructors

### constructor

• **new OctreeEntity**(`renderer`): [`OctreeEntity`](OctreeEntity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `RenderNode` |

#### Returns

[`OctreeEntity`](OctreeEntity.md)

#### Defined in

[src/core/tree/octree/OctreeEntity.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/octree/OctreeEntity.ts#L8)

## Properties

### renderer

• `Readonly` **renderer**: `RenderNode`

#### Defined in

[src/core/tree/octree/OctreeEntity.ts:5](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/octree/OctreeEntity.ts#L5)

___

### owner

• **owner**: [`Octree`](Octree.md)

#### Defined in

[src/core/tree/octree/OctreeEntity.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/octree/OctreeEntity.ts#L6)

___

### uuid

• `Readonly` **uuid**: `string`

#### Defined in

[src/core/tree/octree/OctreeEntity.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/octree/OctreeEntity.ts#L7)

## Methods

### leaveNode

▸ **leaveNode**(): `void`

#### Returns

`void`

#### Defined in

[src/core/tree/octree/OctreeEntity.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/octree/OctreeEntity.ts#L13)

___

### enterNode

▸ **enterNode**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Octree`](Octree.md) |

#### Returns

`void`

#### Defined in

[src/core/tree/octree/OctreeEntity.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/octree/OctreeEntity.ts#L20)

___

### update

▸ **update**(`root`): [`Octree`](Octree.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | [`Octree`](Octree.md) |

#### Returns

[`Octree`](Octree.md)

#### Defined in

[src/core/tree/octree/OctreeEntity.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/octree/OctreeEntity.ts#L26)
