[**@orillusion/physics**](../../../../README.md)

***

# Class: btConvexTriangleMeshShape

Defined in: [packages/ammo/ammo.d.ts:280](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L280)

## Extends

- [`btConvexShape`](btConvexShape.md)

## Constructors

### Constructor

> **new btConvexTriangleMeshShape**(`meshInterface`, `calcAabb?`): `btConvexTriangleMeshShape`

Defined in: [packages/ammo/ammo.d.ts:281](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L281)

#### Parameters

##### meshInterface

[`btStridingMeshInterface`](btStridingMeshInterface.md)

##### calcAabb?

`boolean`

#### Returns

`btConvexTriangleMeshShape`

#### Overrides

[`btConvexShape`](btConvexShape.md).[`constructor`](btConvexShape.md#constructor)

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

[`btConvexShape`](btConvexShape.md).[`setLocalScaling`](btConvexShape.md#setlocalscaling)

***

### getLocalScaling()

> **getLocalScaling**(): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:274](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L274)

#### Returns

[`btVector3`](btVector3.md)

#### Inherited from

[`btConvexShape`](btConvexShape.md).[`getLocalScaling`](btConvexShape.md#getlocalscaling)

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

[`btConvexShape`](btConvexShape.md).[`calculateLocalInertia`](btConvexShape.md#calculatelocalinertia)

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

[`btConvexShape`](btConvexShape.md).[`setMargin`](btConvexShape.md#setmargin)

***

### getMargin()

> **getMargin**(): `number`

Defined in: [packages/ammo/ammo.d.ts:277](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L277)

#### Returns

`number`

#### Inherited from

[`btConvexShape`](btConvexShape.md).[`getMargin`](btConvexShape.md#getmargin)
