[**@orillusion/physics**](../../../../README.md)

***

# Class: btCylinderShape

Defined in: [packages/ammo/ammo.d.ts:306](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L306)

## Extends

- [`btCollisionShape`](btCollisionShape.md)

## Extended by

- [`btCylinderShapeX`](btCylinderShapeX.md)
- [`btCylinderShapeZ`](btCylinderShapeZ.md)

## Constructors

### Constructor

> **new btCylinderShape**(`halfExtents`): `btCylinderShape`

Defined in: [packages/ammo/ammo.d.ts:307](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L307)

#### Parameters

##### halfExtents

[`btVector3`](btVector3.md)

#### Returns

`btCylinderShape`

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

### setMargin()

> **setMargin**(`margin`): `void`

Defined in: [packages/ammo/ammo.d.ts:308](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L308)

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

Defined in: [packages/ammo/ammo.d.ts:309](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L309)

#### Returns

`number`

#### Overrides

[`btCollisionShape`](btCollisionShape.md).[`getMargin`](btCollisionShape.md#getmargin)
