[**@orillusion/physics**](../../../../README.md)

***

# Class: btConvexHullShape

Defined in: [packages/ammo/ammo.d.ts:362](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L362)

## Extends

- [`btCollisionShape`](btCollisionShape.md)

## Constructors

### Constructor

> **new btConvexHullShape**(`points?`, `numPoints?`): `btConvexHullShape`

Defined in: [packages/ammo/ammo.d.ts:363](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L363)

#### Parameters

##### points?

readonly `number`[]

##### numPoints?

`number`

#### Returns

`btConvexHullShape`

#### Overrides

[`btCollisionShape`](btCollisionShape.md).[`constructor`](btCollisionShape.md#constructor)

## Methods

### setLocalScaling()

> **setLocalScaling**(`scaling`): `void`

Defined in: [packages/ammo/ammo.d.ts:273](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L273)

#### Parameters

##### scaling

[`btVector3`](btVector3.md)

#### Returns

`void`

#### Inherited from

[`btCollisionShape`](btCollisionShape.md).[`setLocalScaling`](btCollisionShape.md#setlocalscaling)

***

### getLocalScaling()

> **getLocalScaling**(): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:274](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L274)

#### Returns

[`btVector3`](btVector3.md)

#### Inherited from

[`btCollisionShape`](btCollisionShape.md).[`getLocalScaling`](btCollisionShape.md#getlocalscaling)

***

### calculateLocalInertia()

> **calculateLocalInertia**(`mass`, `inertia`): `void`

Defined in: [packages/ammo/ammo.d.ts:275](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L275)

#### Parameters

##### mass

`number`

##### inertia

[`btVector3`](btVector3.md)

#### Returns

`void`

#### Inherited from

[`btCollisionShape`](btCollisionShape.md).[`calculateLocalInertia`](btCollisionShape.md#calculatelocalinertia)

***

### addPoint()

> **addPoint**(`point`, `recalculateLocalAABB?`): `void`

Defined in: [packages/ammo/ammo.d.ts:364](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L364)

#### Parameters

##### point

[`btVector3`](btVector3.md)

##### recalculateLocalAABB?

`boolean`

#### Returns

`void`

***

### setMargin()

> **setMargin**(`margin`): `void`

Defined in: [packages/ammo/ammo.d.ts:365](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L365)

#### Parameters

##### margin

`number`

#### Returns

`void`

#### Overrides

[`btCollisionShape`](btCollisionShape.md).[`setMargin`](btCollisionShape.md#setmargin)

***

### getMargin()

> **getMargin**(): `number`

Defined in: [packages/ammo/ammo.d.ts:366](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L366)

#### Returns

`number`

#### Overrides

[`btCollisionShape`](btCollisionShape.md).[`getMargin`](btCollisionShape.md#getmargin)

***

### getNumVertices()

> **getNumVertices**(): `number`

Defined in: [packages/ammo/ammo.d.ts:367](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L367)

#### Returns

`number`

***

### initializePolyhedralFeatures()

> **initializePolyhedralFeatures**(`shiftVerticesByMargin`): `boolean`

Defined in: [packages/ammo/ammo.d.ts:368](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L368)

#### Parameters

##### shiftVerticesByMargin

`number`

#### Returns

`boolean`

***

### recalcLocalAabb()

> **recalcLocalAabb**(): `void`

Defined in: [packages/ammo/ammo.d.ts:369](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L369)

#### Returns

`void`

***

### getConvexPolyhedron()

> **getConvexPolyhedron**(): [`btConvexPolyhedron`](btConvexPolyhedron.md)

Defined in: [packages/ammo/ammo.d.ts:370](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L370)

#### Returns

[`btConvexPolyhedron`](btConvexPolyhedron.md)
