[**@orillusion/physics**](../../../../README.md)

***

# Class: btCapsuleShape

Defined in: [packages/ammo/ammo.d.ts:288](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L288)

## Extends

- [`btCollisionShape`](btCollisionShape.md)

## Extended by

- [`btCapsuleShapeX`](btCapsuleShapeX.md)
- [`btCapsuleShapeZ`](btCapsuleShapeZ.md)

## Constructors

### Constructor

> **new btCapsuleShape**(`radius`, `height`): `btCapsuleShape`

Defined in: [packages/ammo/ammo.d.ts:289](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L289)

#### Parameters

##### radius

`number`

##### height

`number`

#### Returns

`btCapsuleShape`

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

Defined in: [packages/ammo/ammo.d.ts:290](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L290)

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

Defined in: [packages/ammo/ammo.d.ts:291](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L291)

#### Returns

`number`

#### Overrides

[`btCollisionShape`](btCollisionShape.md).[`getMargin`](btCollisionShape.md#getmargin)

***

### getUpAxis()

> **getUpAxis**(): `number`

Defined in: [packages/ammo/ammo.d.ts:292](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L292)

#### Returns

`number`

***

### getRadius()

> **getRadius**(): `number`

Defined in: [packages/ammo/ammo.d.ts:293](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L293)

#### Returns

`number`

***

### getHalfHeight()

> **getHalfHeight**(): `number`

Defined in: [packages/ammo/ammo.d.ts:294](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L294)

#### Returns

`number`
