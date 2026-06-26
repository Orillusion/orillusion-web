[**@orillusion/physics**](../../../../README.md)

***

# Class: btCompoundShape

Defined in: [packages/ammo/ammo.d.ts:378](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L378)

## Extends

- [`btCollisionShape`](btCollisionShape.md)

## Constructors

### Constructor

> **new btCompoundShape**(`enableDynamicAabbTree?`): `btCompoundShape`

Defined in: [packages/ammo/ammo.d.ts:379](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L379)

#### Parameters

##### enableDynamicAabbTree?

`boolean`

#### Returns

`btCompoundShape`

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

### addChildShape()

> **addChildShape**(`localTransform`, `shape`): `void`

Defined in: [packages/ammo/ammo.d.ts:380](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L380)

#### Parameters

##### localTransform

[`btTransform`](btTransform.md)

##### shape

[`btCollisionShape`](btCollisionShape.md)

#### Returns

`void`

***

### removeChildShape()

> **removeChildShape**(`shape`): `void`

Defined in: [packages/ammo/ammo.d.ts:381](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L381)

#### Parameters

##### shape

[`btCollisionShape`](btCollisionShape.md)

#### Returns

`void`

***

### removeChildShapeByIndex()

> **removeChildShapeByIndex**(`childShapeindex`): `void`

Defined in: [packages/ammo/ammo.d.ts:382](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L382)

#### Parameters

##### childShapeindex

`number`

#### Returns

`void`

***

### getNumChildShapes()

> **getNumChildShapes**(): `number`

Defined in: [packages/ammo/ammo.d.ts:383](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L383)

#### Returns

`number`

***

### getChildShape()

> **getChildShape**(`index`): [`btCollisionShape`](btCollisionShape.md)

Defined in: [packages/ammo/ammo.d.ts:384](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L384)

#### Parameters

##### index

`number`

#### Returns

[`btCollisionShape`](btCollisionShape.md)

***

### updateChildTransform()

> **updateChildTransform**(`childIndex`, `newChildTransform`, `shouldRecalculateLocalAabb?`): `void`

Defined in: [packages/ammo/ammo.d.ts:385](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L385)

#### Parameters

##### childIndex

`number`

##### newChildTransform

[`btTransform`](btTransform.md)

##### shouldRecalculateLocalAabb?

`boolean`

#### Returns

`void`

***

### setMargin()

> **setMargin**(`margin`): `void`

Defined in: [packages/ammo/ammo.d.ts:386](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L386)

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

Defined in: [packages/ammo/ammo.d.ts:387](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L387)

#### Returns

`number`

#### Overrides

[`btCollisionShape`](btCollisionShape.md).[`getMargin`](btCollisionShape.md#getmargin)
