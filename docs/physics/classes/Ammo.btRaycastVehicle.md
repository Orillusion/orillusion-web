# Class: btRaycastVehicle

[Ammo](../modules/Ammo.md).btRaycastVehicle

## Hierarchy

- [`btActionInterface`](Ammo.btActionInterface.md)

  ↳ **`btRaycastVehicle`**


### Methods

- [updateAction](Ammo.btRaycastVehicle.md#updateaction)
- [applyEngineForce](Ammo.btRaycastVehicle.md#applyengineforce)
- [setSteeringValue](Ammo.btRaycastVehicle.md#setsteeringvalue)
- [getWheelTransformWS](Ammo.btRaycastVehicle.md#getwheeltransformws)
- [updateWheelTransform](Ammo.btRaycastVehicle.md#updatewheeltransform)
- [addWheel](Ammo.btRaycastVehicle.md#addwheel)
- [getNumWheels](Ammo.btRaycastVehicle.md#getnumwheels)
- [getRigidBody](Ammo.btRaycastVehicle.md#getrigidbody)
- [getWheelInfo](Ammo.btRaycastVehicle.md#getwheelinfo)
- [setBrake](Ammo.btRaycastVehicle.md#setbrake)
- [setCoordinateSystem](Ammo.btRaycastVehicle.md#setcoordinatesystem)
- [getCurrentSpeedKmHour](Ammo.btRaycastVehicle.md#getcurrentspeedkmhour)
- [getChassisWorldTransform](Ammo.btRaycastVehicle.md#getchassisworldtransform)
- [rayCast](Ammo.btRaycastVehicle.md#raycast)
- [updateVehicle](Ammo.btRaycastVehicle.md#updatevehicle)
- [resetSuspension](Ammo.btRaycastVehicle.md#resetsuspension)
- [getSteeringValue](Ammo.btRaycastVehicle.md#getsteeringvalue)
- [updateWheelTransformsWS](Ammo.btRaycastVehicle.md#updatewheeltransformsws)
- [setPitchControl](Ammo.btRaycastVehicle.md#setpitchcontrol)
- [updateSuspension](Ammo.btRaycastVehicle.md#updatesuspension)
- [updateFriction](Ammo.btRaycastVehicle.md#updatefriction)
- [getRightAxis](Ammo.btRaycastVehicle.md#getrightaxis)
- [getUpAxis](Ammo.btRaycastVehicle.md#getupaxis)
- [getForwardAxis](Ammo.btRaycastVehicle.md#getforwardaxis)
- [getForwardVector](Ammo.btRaycastVehicle.md#getforwardvector)
- [getUserConstraintType](Ammo.btRaycastVehicle.md#getuserconstrainttype)
- [setUserConstraintType](Ammo.btRaycastVehicle.md#setuserconstrainttype)
- [setUserConstraintId](Ammo.btRaycastVehicle.md#setuserconstraintid)
- [getUserConstraintId](Ammo.btRaycastVehicle.md#getuserconstraintid)

### Constructors

- [constructor](Ammo.btRaycastVehicle.md#constructor)

## Methods

### updateAction

▸ **updateAction**(`collisionWorld`, `deltaTimeStep`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collisionWorld` | [`btCollisionWorld`](Ammo.btCollisionWorld.md) |
| `deltaTimeStep` | `number` |

#### Returns

`void`

#### Inherited from

[btActionInterface](Ammo.btActionInterface.md).[updateAction](Ammo.btActionInterface.md#updateaction)

#### Defined in

[packages/ammo/ammo.d.ts:803](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L803)

___

### applyEngineForce

▸ **applyEngineForce**(`force`, `wheel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force` | `number` |
| `wheel` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:829](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L829)

___

### setSteeringValue

▸ **setSteeringValue**(`steering`, `wheel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `steering` | `number` |
| `wheel` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:830](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L830)

___

### getWheelTransformWS

▸ **getWheelTransformWS**(`wheelIndex`): [`btTransform`](Ammo.btTransform.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `wheelIndex` | `number` |

#### Returns

[`btTransform`](Ammo.btTransform.md)

#### Defined in

[packages/ammo/ammo.d.ts:831](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L831)

___

### updateWheelTransform

▸ **updateWheelTransform**(`wheelIndex`, `interpolatedTransform`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wheelIndex` | `number` |
| `interpolatedTransform` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:832](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L832)

___

### addWheel

▸ **addWheel**(`connectionPointCS0`, `wheelDirectionCS0`, `wheelAxleCS`, `suspensionRestLength`, `wheelRadius`, `tuning`, `isFrontWheel`): [`btWheelInfo`](Ammo.btWheelInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `connectionPointCS0` | [`btVector3`](Ammo.btVector3.md) |
| `wheelDirectionCS0` | [`btVector3`](Ammo.btVector3.md) |
| `wheelAxleCS` | [`btVector3`](Ammo.btVector3.md) |
| `suspensionRestLength` | `number` |
| `wheelRadius` | `number` |
| `tuning` | [`btVehicleTuning`](Ammo.btVehicleTuning.md) |
| `isFrontWheel` | `boolean` |

#### Returns

[`btWheelInfo`](Ammo.btWheelInfo.md)

#### Defined in

[packages/ammo/ammo.d.ts:833](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L833)

___

### getNumWheels

▸ **getNumWheels**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:834](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L834)

___

### getRigidBody

▸ **getRigidBody**(): [`btRigidBody`](Ammo.btRigidBody.md)

#### Returns

[`btRigidBody`](Ammo.btRigidBody.md)

#### Defined in

[packages/ammo/ammo.d.ts:835](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L835)

___

### getWheelInfo

▸ **getWheelInfo**(`index`): [`btWheelInfo`](Ammo.btWheelInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`btWheelInfo`](Ammo.btWheelInfo.md)

#### Defined in

[packages/ammo/ammo.d.ts:836](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L836)

___

### setBrake

▸ **setBrake**(`brake`, `wheelIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `brake` | `number` |
| `wheelIndex` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:837](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L837)

___

### setCoordinateSystem

▸ **setCoordinateSystem**(`rightIndex`, `upIndex`, `forwardIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rightIndex` | `number` |
| `upIndex` | `number` |
| `forwardIndex` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:838](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L838)

___

### getCurrentSpeedKmHour

▸ **getCurrentSpeedKmHour**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:839](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L839)

___

### getChassisWorldTransform

▸ **getChassisWorldTransform**(): [`btTransform`](Ammo.btTransform.md)

#### Returns

[`btTransform`](Ammo.btTransform.md)

#### Defined in

[packages/ammo/ammo.d.ts:840](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L840)

___

### rayCast

▸ **rayCast**(`wheel`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wheel` | [`btWheelInfo`](Ammo.btWheelInfo.md) |

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:841](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L841)

___

### updateVehicle

▸ **updateVehicle**(`step`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `step` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:842](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L842)

___

### resetSuspension

▸ **resetSuspension**(): `void`

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:843](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L843)

___

### getSteeringValue

▸ **getSteeringValue**(`wheel`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wheel` | `number` |

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:844](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L844)

___

### updateWheelTransformsWS

▸ **updateWheelTransformsWS**(`wheel`, `interpolatedTransform?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wheel` | [`btWheelInfo`](Ammo.btWheelInfo.md) |
| `interpolatedTransform?` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:845](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L845)

___

### setPitchControl

▸ **setPitchControl**(`pitch`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pitch` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:846](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L846)

___

### updateSuspension

▸ **updateSuspension**(`deltaTime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deltaTime` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:847](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L847)

___

### updateFriction

▸ **updateFriction**(`timeStep`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeStep` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:848](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L848)

___

### getRightAxis

▸ **getRightAxis**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:849](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L849)

___

### getUpAxis

▸ **getUpAxis**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:850](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L850)

___

### getForwardAxis

▸ **getForwardAxis**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:851](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L851)

___

### getForwardVector

▸ **getForwardVector**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/ammo/ammo.d.ts:852](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L852)

___

### getUserConstraintType

▸ **getUserConstraintType**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:853](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L853)

___

### setUserConstraintType

▸ **setUserConstraintType**(`userConstraintType`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `userConstraintType` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:854](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L854)

___

### setUserConstraintId

▸ **setUserConstraintId**(`uid`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `uid` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:855](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L855)

___

### getUserConstraintId

▸ **getUserConstraintId**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:856](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L856)

## Constructors

### constructor

• **new btRaycastVehicle**(`tuning`, `chassis`, `raycaster`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tuning` | [`btVehicleTuning`](Ammo.btVehicleTuning.md) |
| `chassis` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `raycaster` | [`btVehicleRaycaster`](Ammo.btVehicleRaycaster.md) |

#### Overrides

[btActionInterface](Ammo.btActionInterface.md).[constructor](Ammo.btActionInterface.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:828](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L828)
