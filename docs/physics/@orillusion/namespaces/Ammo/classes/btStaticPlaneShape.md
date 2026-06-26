[**@orillusion/physics**](../../../../README.md)

***

# Class: btStaticPlaneShape

Defined in: [packages/ammo/ammo.d.ts:412](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L412)

## Extends

- [`btConcaveShape`](btConcaveShape.md)

## Constructors

### Constructor

> **new btStaticPlaneShape**(`planeNormal`, `planeConstant`): `btStaticPlaneShape`

Defined in: [packages/ammo/ammo.d.ts:413](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L413)

#### Parameters

##### planeNormal

[`btVector3`](btVector3.md)

##### planeConstant

`number`

#### Returns

`btStaticPlaneShape`

#### Overrides

[`btConcaveShape`](btConcaveShape.md).[`constructor`](btConcaveShape.md#constructor)

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

[`btConcaveShape`](btConcaveShape.md).[`setLocalScaling`](btConcaveShape.md#setlocalscaling)

***

### getLocalScaling()

> **getLocalScaling**(): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:274](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L274)

#### Returns

[`btVector3`](btVector3.md)

#### Inherited from

[`btConcaveShape`](btConcaveShape.md).[`getLocalScaling`](btConcaveShape.md#getlocalscaling)

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

[`btConcaveShape`](btConcaveShape.md).[`calculateLocalInertia`](btConcaveShape.md#calculatelocalinertia)

***

### setMargin()

> **setMargin**(`margin`): `void`

Defined in: [packages/ammo/ammo.d.ts:276](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L276)

#### Parameters

##### margin

`number`

#### Returns

`void`

#### Inherited from

[`btConcaveShape`](btConcaveShape.md).[`setMargin`](btConcaveShape.md#setmargin)

***

### getMargin()

> **getMargin**(): `number`

Defined in: [packages/ammo/ammo.d.ts:277](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L277)

#### Returns

`number`

#### Inherited from

[`btConcaveShape`](btConcaveShape.md).[`getMargin`](btConcaveShape.md#getmargin)
