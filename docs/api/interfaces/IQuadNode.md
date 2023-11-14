# Interface: IQuadNode

## Implemented by

- [`Navi3DTriangle`](../classes/Navi3DTriangle.md)

### Properties

- [isTriangle](IQuadNode.md#istriangle)
- [aabb](IQuadNode.md#aabb)
- [plane](IQuadNode.md#plane)

### Methods

- [initAABB](IQuadNode.md#initaabb)
- [calcGlobalQuadAABB](IQuadNode.md#calcglobalquadaabb)

## Properties

### isTriangle

• **isTriangle**: `boolean`

#### Defined in

[src/core/tree/quad/IQuadNode.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/IQuadNode.ts#L8)

___

### aabb

• **aabb**: [`QuadAABB`](../classes/QuadAABB.md)

#### Defined in

[src/core/tree/quad/IQuadNode.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/IQuadNode.ts#L10)

___

### plane

• `Optional` **plane**: [`Plane3D`](../classes/Plane3D.md)

#### Defined in

[src/core/tree/quad/IQuadNode.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/IQuadNode.ts#L14)

## Methods

### initAABB

▸ **initAABB**(): `void`

#### Returns

`void`

#### Defined in

[src/core/tree/quad/IQuadNode.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/IQuadNode.ts#L6)

___

### calcGlobalQuadAABB

▸ **calcGlobalQuadAABB**(): `void`

#### Returns

`void`

#### Defined in

[src/core/tree/quad/IQuadNode.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/IQuadNode.ts#L12)
