[**@orillusion/physics**](../../../../README.md)

***

# Class: btGImpactMeshShape

Defined in: [packages/ammo/ammo.d.ts:419](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L419)

## Extends

- [`btTriangleMeshShape`](btTriangleMeshShape.md)

## Constructors

### Constructor

> **new btGImpactMeshShape**(`meshInterface`): `btGImpactMeshShape`

Defined in: [packages/ammo/ammo.d.ts:420](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L420)

#### Parameters

##### meshInterface

[`btStridingMeshInterface`](btStridingMeshInterface.md)

#### Returns

`btGImpactMeshShape`

#### Overrides

[`btTriangleMeshShape`](btTriangleMeshShape.md).[`constructor`](btTriangleMeshShape.md#constructor)

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

[`btTriangleMeshShape`](btTriangleMeshShape.md).[`setLocalScaling`](btTriangleMeshShape.md#setlocalscaling)

***

### getLocalScaling()

> **getLocalScaling**(): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:274](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L274)

#### Returns

[`btVector3`](btVector3.md)

#### Inherited from

[`btTriangleMeshShape`](btTriangleMeshShape.md).[`getLocalScaling`](btTriangleMeshShape.md#getlocalscaling)

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

[`btTriangleMeshShape`](btTriangleMeshShape.md).[`calculateLocalInertia`](btTriangleMeshShape.md#calculatelocalinertia)

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

[`btTriangleMeshShape`](btTriangleMeshShape.md).[`setMargin`](btTriangleMeshShape.md#setmargin)

***

### getMargin()

> **getMargin**(): `number`

Defined in: [packages/ammo/ammo.d.ts:277](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L277)

#### Returns

`number`

#### Inherited from

[`btTriangleMeshShape`](btTriangleMeshShape.md).[`getMargin`](btTriangleMeshShape.md#getmargin)

***

### updateBound()

> **updateBound**(): `void`

Defined in: [packages/ammo/ammo.d.ts:421](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L421)

#### Returns

`void`
