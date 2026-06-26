[**@orillusion/physics**](../../../../README.md)

***

# Class: btCollisionShape

Defined in: [packages/ammo/ammo.d.ts:272](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L272)

## Extended by

- [`btConvexShape`](btConvexShape.md)
- [`btBoxShape`](btBoxShape.md)
- [`btCapsuleShape`](btCapsuleShape.md)
- [`btCylinderShape`](btCylinderShape.md)
- [`btSphereShape`](btSphereShape.md)
- [`btMultiSphereShape`](btMultiSphereShape.md)
- [`btConeShape`](btConeShape.md)
- [`btConvexHullShape`](btConvexHullShape.md)
- [`btCompoundShape`](btCompoundShape.md)
- [`btConcaveShape`](btConcaveShape.md)

## Constructors

### Constructor

> **new btCollisionShape**(): `btCollisionShape`

#### Returns

`btCollisionShape`

## Methods

### setLocalScaling()

> **setLocalScaling**(`scaling`): `void`

Defined in: [packages/ammo/ammo.d.ts:273](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L273)

#### Parameters

##### scaling

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### getLocalScaling()

> **getLocalScaling**(): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:274](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L274)

#### Returns

[`btVector3`](btVector3.md)

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

***

### setMargin()

> **setMargin**(`margin`): `void`

Defined in: [packages/ammo/ammo.d.ts:276](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L276)

#### Parameters

##### margin

`number`

#### Returns

`void`

***

### getMargin()

> **getMargin**(): `number`

Defined in: [packages/ammo/ammo.d.ts:277](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L277)

#### Returns

`number`
