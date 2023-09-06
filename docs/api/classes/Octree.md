# Class: Octree

### Constructors

- [constructor](Octree.md#constructor)

### Properties

- [entities](Octree.md#entities)
- [box](Octree.md#box)
- [subTrees](Octree.md#subtrees)
- [parent](Octree.md#parent)
- [level](Octree.md#level)
- [maxSplitLevel](Octree.md#maxsplitlevel)
- [index](Octree.md#index)
- [uuid](Octree.md#uuid)
- [\_\_rayCastTempVector](Octree.md#__raycasttempvector)

### Methods

- [tryInsertEntity](Octree.md#tryinsertentity)
- [rayCasts](Octree.md#raycasts)
- [frustumCasts](Octree.md#frustumcasts)
- [getRenderNode](Octree.md#getrendernode)
- [boxCasts](Octree.md#boxcasts)
- [clean](Octree.md#clean)

## Constructors

### constructor

• **new Octree**(`size`, `index?`, `parent?`, `level?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `size` | `BoundingBox` | `undefined` |
| `index` | `number` | `0` |
| `parent` | [`Octree`](Octree.md) | `null` |
| `level` | `number` | `0` |

#### Defined in

[src/core/tree/octree/Octree.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L26)

## Properties

### entities

• `Readonly` **entities**: `Map`<`string`, [`OctreeEntity`](OctreeEntity.md)\>

#### Defined in

[src/core/tree/octree/Octree.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L16)

___

### box

• `Readonly` **box**: `BoundingBox`

#### Defined in

[src/core/tree/octree/Octree.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L17)

___

### subTrees

• `Readonly` **subTrees**: [`Octree`](Octree.md)[] = `[]`

#### Defined in

[src/core/tree/octree/Octree.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L18)

___

### parent

• `Readonly` **parent**: [`Octree`](Octree.md)

#### Defined in

[src/core/tree/octree/Octree.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L19)

___

### level

• `Readonly` **level**: `number`

#### Defined in

[src/core/tree/octree/Octree.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L20)

___

### maxSplitLevel

▪ `Static` `Readonly` **maxSplitLevel**: ``6``

#### Defined in

[src/core/tree/octree/Octree.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L21)

___

### index

• `Readonly` **index**: `number`

#### Defined in

[src/core/tree/octree/Octree.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L23)

___

### uuid

• `Readonly` **uuid**: `string`

#### Defined in

[src/core/tree/octree/Octree.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L24)

___

### \_\_rayCastTempVector

• **\_\_rayCastTempVector**: [`Vector3`](Vector3.md)

#### Defined in

[src/core/tree/octree/Octree.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L84)

## Methods

### tryInsertEntity

▸ **tryInsertEntity**(`entity`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`OctreeEntity`](OctreeEntity.md) |

#### Returns

`boolean`

#### Defined in

[src/core/tree/octree/Octree.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L35)

___

### rayCasts

▸ **rayCasts**(`ray`, `ret`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ray` | [`Ray`](Ray.md) |
| `ret` | [`OctreeEntity`](OctreeEntity.md)[] |

#### Returns

`boolean`

#### Defined in

[src/core/tree/octree/Octree.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L85)

___

### frustumCasts

▸ **frustumCasts**(`frustum`, `ret`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `frustum` | `Frustum` |
| `ret` | [`OctreeEntity`](OctreeEntity.md)[] |

#### Returns

`boolean`

#### Defined in

[src/core/tree/octree/Octree.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L98)

___

### getRenderNode

▸ **getRenderNode**(`frustum`, `ret`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `frustum` | `Frustum` |
| `ret` | `CollectInfo` |

#### Returns

`boolean`

#### Defined in

[src/core/tree/octree/Octree.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L115)

___

### boxCasts

▸ **boxCasts**(`box`, `ret`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | `BoundingBox` |
| `ret` | [`OctreeEntity`](OctreeEntity.md)[] |

#### Returns

`boolean`

#### Defined in

[src/core/tree/octree/Octree.ts:147](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L147)

___

### clean

▸ **clean**(): [`Octree`](Octree.md)

#### Returns

[`Octree`](Octree.md)

#### Defined in

[src/core/tree/octree/Octree.ts:160](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/octree/Octree.ts#L160)
