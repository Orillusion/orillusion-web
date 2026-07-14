[**@orillusion/physics**](../../../../README.md)

***

# Class: btSphereShape

Defined in: [packages/ammo/ammo.d.ts:321](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L321)

## Extends

- [`btCollisionShape`](btCollisionShape.md)

## Constructors

### Constructor

> **new btSphereShape**(`radius`): `btSphereShape`

Defined in: [packages/ammo/ammo.d.ts:322](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L322)

#### Parameters

##### radius

`number`

#### Returns

`btSphereShape`

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

Defined in: [packages/ammo/ammo.d.ts:323](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L323)

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

Defined in: [packages/ammo/ammo.d.ts:324](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L324)

#### Returns

`number`

#### Overrides

[`btCollisionShape`](btCollisionShape.md).[`getMargin`](btCollisionShape.md#getmargin)
