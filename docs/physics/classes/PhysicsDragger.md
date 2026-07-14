[**@orillusion/physics**](../README.md)

***

# Class: PhysicsDragger

Defined in: [packages/physics/utils/PhysicsDragger.ts:10](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/PhysicsDragger.ts#L10)

The PhysicsDragger class is used to drag 3D objects with the mouse.
It uses ray casting in the physics engine to interact with rigid bodies, enabling real-time dragging of objects.

## Constructors

### Constructor

> **new PhysicsDragger**(`view`): `PhysicsDragger`

Defined in: [packages/physics/utils/PhysicsDragger.ts:54](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/PhysicsDragger.ts#L54)

#### Parameters

##### view

`View3D`

#### Returns

`PhysicsDragger`

## Properties

### filterStatic

> **filterStatic**: `boolean` = `true`

Defined in: [packages/physics/utils/PhysicsDragger.ts:38](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/PhysicsDragger.ts#L38)

Whether to filter out static rigid body objects. Default value is `true`

## Accessors

### enable

#### Get Signature

> **get** **enable**(): `boolean`

Defined in: [packages/physics/utils/PhysicsDragger.ts:22](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/PhysicsDragger.ts#L22)

##### Returns

`boolean`

#### Set Signature

> **set** **enable**(`value`): `void`

Defined in: [packages/physics/utils/PhysicsDragger.ts:29](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/PhysicsDragger.ts#L29)

Whether to enable the dragging feature

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### collisionFilterGroup

#### Set Signature

> **set** **collisionFilterGroup**(`value`): `void`

Defined in: [packages/physics/utils/PhysicsDragger.ts:43](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/PhysicsDragger.ts#L43)

Set the ray collision filter group

##### Parameters

###### value

`number`

##### Returns

`void`

***

### collisionFilterMask

#### Set Signature

> **set** **collisionFilterMask**(`value`): `void`

Defined in: [packages/physics/utils/PhysicsDragger.ts:50](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/PhysicsDragger.ts#L50)

Set the ray collision filter mask

##### Parameters

###### value

`number`

##### Returns

`void`
