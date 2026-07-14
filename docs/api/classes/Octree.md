[**@orillusion/core**](../README.md)

***

# Class: Octree

Defined in: [src/core/tree/octree/Octree.ts:13](https://github.com/orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L13)

Spatial partitioning structure that recursively subdivides 3D space into
eight octants, used for accelerating frustum culling and ray queries.

## Constructors

### Constructor

> **new Octree**(`size`, `index?`, `parent?`, `level?`): `Octree`

Defined in: [src/core/tree/octree/Octree.ts:31](https://github.com/orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L31)

#### Parameters

##### size

`BoundingBox`

##### index?

`number` = `0`

##### parent?

`Octree` = `null`

##### level?

`number` = `0`

#### Returns

`Octree`

## Properties

### entities

> `readonly` **entities**: `Map`\<`string`, `OctreeEntity`\>

Defined in: [src/core/tree/octree/Octree.ts:21](https://github.com/orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L21)

***

### box

> `readonly` **box**: `BoundingBox`

Defined in: [src/core/tree/octree/Octree.ts:22](https://github.com/orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L22)

***

### subTrees

> `readonly` **subTrees**: `Octree`[] = `[]`

Defined in: [src/core/tree/octree/Octree.ts:23](https://github.com/orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L23)

***

### parent

> `readonly` **parent**: `Octree`

Defined in: [src/core/tree/octree/Octree.ts:24](https://github.com/orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L24)

***

### level

> `readonly` **level**: `number`

Defined in: [src/core/tree/octree/Octree.ts:25](https://github.com/orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L25)

***

### maxSplitLevel

> `readonly` `static` **maxSplitLevel**: `6` = `6`

Defined in: [src/core/tree/octree/Octree.ts:26](https://github.com/orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L26)

***

### index

> `readonly` **index**: `number`

Defined in: [src/core/tree/octree/Octree.ts:28](https://github.com/orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L28)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [src/core/tree/octree/Octree.ts:29](https://github.com/orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L29)

***

### \_\_rayCastTempVector

> **\_\_rayCastTempVector**: [`Vector3`](Vector3.md)

Defined in: [src/core/tree/octree/Octree.ts:89](https://github.com/orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L89)

## Methods

### tryInsertEntity()

> **tryInsertEntity**(`entity`): `boolean`

Defined in: [src/core/tree/octree/Octree.ts:40](https://github.com/orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L40)

#### Parameters

##### entity

`OctreeEntity`

#### Returns

`boolean`

***

### rayCasts()

> **rayCasts**(`ray`, `ret`): `boolean`

Defined in: [src/core/tree/octree/Octree.ts:90](https://github.com/orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L90)

#### Parameters

##### ray

[`Ray`](Ray.md)

##### ret

`OctreeEntity`[]

#### Returns

`boolean`

***

### frustumCasts()

> **frustumCasts**(`frustum`, `ret`): `boolean`

Defined in: [src/core/tree/octree/Octree.ts:103](https://github.com/orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L103)

#### Parameters

##### frustum

`Frustum`

##### ret

`OctreeEntity`[]

#### Returns

`boolean`

***

### getRenderNode()

> **getRenderNode**(`frustum`, `ret`): `boolean`

Defined in: [src/core/tree/octree/Octree.ts:120](https://github.com/orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L120)

#### Parameters

##### frustum

`Frustum`

##### ret

`CollectInfo`

#### Returns

`boolean`

***

### boxCasts()

> **boxCasts**(`box`, `ret`): `boolean`

Defined in: [src/core/tree/octree/Octree.ts:152](https://github.com/orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L152)

#### Parameters

##### box

`BoundingBox`

##### ret

`OctreeEntity`[]

#### Returns

`boolean`

***

### clean()

> **clean**(): `this`

Defined in: [src/core/tree/octree/Octree.ts:165](https://github.com/orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L165)

#### Returns

`this`
