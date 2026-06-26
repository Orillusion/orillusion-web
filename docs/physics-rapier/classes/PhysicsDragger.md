[**@orillusion/physics-rapier**](../README.md)

***

# Class: PhysicsDragger

Defined in: [packages/physics-rapier/utils/PhysicsDragger.ts:13](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/utils/PhysicsDragger.ts#L13)

Mouse-driven rigid-body dragger.

Mirrors `@orillusion/physics`'s `PhysicsDragger`. Implementation differs
from the ammo version: rather than juggling collision flags, it switches
the body to KinematicPositionBased while dragging, then restores the
original type on release.

## Constructors

### Constructor

> **new PhysicsDragger**(`view`): `PhysicsDragger`

Defined in: [packages/physics-rapier/utils/PhysicsDragger.ts:28](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/utils/PhysicsDragger.ts#L28)

#### Parameters

##### view

`View3D`

#### Returns

`PhysicsDragger`

## Properties

### filterStatic

> **filterStatic**: `boolean` = `true`

Defined in: [packages/physics-rapier/utils/PhysicsDragger.ts:26](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/utils/PhysicsDragger.ts#L26)

## Accessors

### enable

#### Get Signature

> **get** **enable**(): `boolean`

Defined in: [packages/physics-rapier/utils/PhysicsDragger.ts:38](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/utils/PhysicsDragger.ts#L38)

##### Returns

`boolean`

#### Set Signature

> **set** **enable**(`value`): `void`

Defined in: [packages/physics-rapier/utils/PhysicsDragger.ts:33](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/utils/PhysicsDragger.ts#L33)

##### Parameters

###### value

`boolean`

##### Returns

`void`
