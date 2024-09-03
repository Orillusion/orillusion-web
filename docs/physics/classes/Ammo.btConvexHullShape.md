# Class: btConvexHullShape

[Ammo](../modules/Ammo.md).btConvexHullShape

## Hierarchy

- [`btCollisionShape`](Ammo.btCollisionShape.md)

  ↳ **`btConvexHullShape`**

### Constructors

- [constructor](Ammo.btConvexHullShape.md#constructor)

### Methods

- [setLocalScaling](Ammo.btConvexHullShape.md#setlocalscaling)
- [getLocalScaling](Ammo.btConvexHullShape.md#getlocalscaling)
- [calculateLocalInertia](Ammo.btConvexHullShape.md#calculatelocalinertia)
- [addPoint](Ammo.btConvexHullShape.md#addpoint)
- [setMargin](Ammo.btConvexHullShape.md#setmargin)
- [getMargin](Ammo.btConvexHullShape.md#getmargin)
- [getNumVertices](Ammo.btConvexHullShape.md#getnumvertices)
- [initializePolyhedralFeatures](Ammo.btConvexHullShape.md#initializepolyhedralfeatures)
- [recalcLocalAabb](Ammo.btConvexHullShape.md#recalclocalaabb)
- [getConvexPolyhedron](Ammo.btConvexHullShape.md#getconvexpolyhedron)

## Constructors

### constructor

• **new btConvexHullShape**(`points?`, `numPoints?`): [`btConvexHullShape`](Ammo.btConvexHullShape.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `points?` | readonly `number`[] |
| `numPoints?` | `number` |

#### Returns

[`btConvexHullShape`](Ammo.btConvexHullShape.md)

#### Overrides

[btCollisionShape](Ammo.btCollisionShape.md).[constructor](Ammo.btCollisionShape.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:363](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L363)

## Methods

### setLocalScaling

▸ **setLocalScaling**(`scaling`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaling` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Inherited from

[btCollisionShape](Ammo.btCollisionShape.md).[setLocalScaling](Ammo.btCollisionShape.md#setlocalscaling)

#### Defined in

[packages/ammo/ammo.d.ts:273](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L273)

___

### getLocalScaling

▸ **getLocalScaling**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Inherited from

[btCollisionShape](Ammo.btCollisionShape.md).[getLocalScaling](Ammo.btCollisionShape.md#getlocalscaling)

#### Defined in

[packages/ammo/ammo.d.ts:274](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L274)

___

### calculateLocalInertia

▸ **calculateLocalInertia**(`mass`, `inertia`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mass` | `number` |
| `inertia` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Inherited from

[btCollisionShape](Ammo.btCollisionShape.md).[calculateLocalInertia](Ammo.btCollisionShape.md#calculatelocalinertia)

#### Defined in

[packages/ammo/ammo.d.ts:275](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L275)

___

### addPoint

▸ **addPoint**(`point`, `recalculateLocalAABB?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`btVector3`](Ammo.btVector3.md) |
| `recalculateLocalAABB?` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:364](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L364)

___

### setMargin

▸ **setMargin**(`margin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `margin` | `number` |

#### Returns

`void`

#### Overrides

[btCollisionShape](Ammo.btCollisionShape.md).[setMargin](Ammo.btCollisionShape.md#setmargin)

#### Defined in

[packages/ammo/ammo.d.ts:365](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L365)

___

### getMargin

▸ **getMargin**(): `number`

#### Returns

`number`

#### Overrides

[btCollisionShape](Ammo.btCollisionShape.md).[getMargin](Ammo.btCollisionShape.md#getmargin)

#### Defined in

[packages/ammo/ammo.d.ts:366](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L366)

___

### getNumVertices

▸ **getNumVertices**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:367](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L367)

___

### initializePolyhedralFeatures

▸ **initializePolyhedralFeatures**(`shiftVerticesByMargin`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shiftVerticesByMargin` | `number` |

#### Returns

`boolean`

#### Defined in

[packages/ammo/ammo.d.ts:368](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L368)

___

### recalcLocalAabb

▸ **recalcLocalAabb**(): `void`

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:369](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L369)

___

### getConvexPolyhedron

▸ **getConvexPolyhedron**(): [`btConvexPolyhedron`](Ammo.btConvexPolyhedron.md)

#### Returns

[`btConvexPolyhedron`](Ammo.btConvexPolyhedron.md)

#### Defined in

[packages/ammo/ammo.d.ts:370](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L370)
