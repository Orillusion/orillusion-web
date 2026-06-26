[**@orillusion/physics**](../../../../README.md)

***

# Class: btRaycastVehicle

Defined in: [packages/ammo/ammo.d.ts:842](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L842)

## Extends

- [`btActionInterface`](btActionInterface.md)

## Constructors

### Constructor

> **new btRaycastVehicle**(`tuning`, `chassis`, `raycaster`): `btRaycastVehicle`

Defined in: [packages/ammo/ammo.d.ts:843](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L843)

#### Parameters

##### tuning

[`btVehicleTuning`](btVehicleTuning.md)

##### chassis

[`btRigidBody`](btRigidBody.md)

##### raycaster

[`btVehicleRaycaster`](btVehicleRaycaster.md)

#### Returns

`btRaycastVehicle`

#### Overrides

[`btActionInterface`](btActionInterface.md).[`constructor`](btActionInterface.md#constructor)

## Methods

### updateAction()

> **updateAction**(`collisionWorld`, `deltaTimeStep`): `void`

Defined in: [packages/ammo/ammo.d.ts:818](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L818)

#### Parameters

##### collisionWorld

[`btCollisionWorld`](btCollisionWorld.md)

##### deltaTimeStep

`number`

#### Returns

`void`

#### Inherited from

[`btActionInterface`](btActionInterface.md).[`updateAction`](btActionInterface.md#updateaction)

***

### applyEngineForce()

> **applyEngineForce**(`force`, `wheel`): `void`

Defined in: [packages/ammo/ammo.d.ts:844](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L844)

#### Parameters

##### force

`number`

##### wheel

`number`

#### Returns

`void`

***

### setSteeringValue()

> **setSteeringValue**(`steering`, `wheel`): `void`

Defined in: [packages/ammo/ammo.d.ts:845](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L845)

#### Parameters

##### steering

`number`

##### wheel

`number`

#### Returns

`void`

***

### getWheelTransformWS()

> **getWheelTransformWS**(`wheelIndex`): [`btTransform`](btTransform.md)

Defined in: [packages/ammo/ammo.d.ts:846](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L846)

#### Parameters

##### wheelIndex

`number`

#### Returns

[`btTransform`](btTransform.md)

***

### updateWheelTransform()

> **updateWheelTransform**(`wheelIndex`, `interpolatedTransform`): `void`

Defined in: [packages/ammo/ammo.d.ts:847](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L847)

#### Parameters

##### wheelIndex

`number`

##### interpolatedTransform

`boolean`

#### Returns

`void`

***

### addWheel()

> **addWheel**(`connectionPointCS0`, `wheelDirectionCS0`, `wheelAxleCS`, `suspensionRestLength`, `wheelRadius`, `tuning`, `isFrontWheel`): [`btWheelInfo`](btWheelInfo.md)

Defined in: [packages/ammo/ammo.d.ts:848](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L848)

#### Parameters

##### connectionPointCS0

[`btVector3`](btVector3.md)

##### wheelDirectionCS0

[`btVector3`](btVector3.md)

##### wheelAxleCS

[`btVector3`](btVector3.md)

##### suspensionRestLength

`number`

##### wheelRadius

`number`

##### tuning

[`btVehicleTuning`](btVehicleTuning.md)

##### isFrontWheel

`boolean`

#### Returns

[`btWheelInfo`](btWheelInfo.md)

***

### getNumWheels()

> **getNumWheels**(): `number`

Defined in: [packages/ammo/ammo.d.ts:849](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L849)

#### Returns

`number`

***

### getRigidBody()

> **getRigidBody**(): [`btRigidBody`](btRigidBody.md)

Defined in: [packages/ammo/ammo.d.ts:850](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L850)

#### Returns

[`btRigidBody`](btRigidBody.md)

***

### getWheelInfo()

> **getWheelInfo**(`index`): [`btWheelInfo`](btWheelInfo.md)

Defined in: [packages/ammo/ammo.d.ts:851](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L851)

#### Parameters

##### index

`number`

#### Returns

[`btWheelInfo`](btWheelInfo.md)

***

### setBrake()

> **setBrake**(`brake`, `wheelIndex`): `void`

Defined in: [packages/ammo/ammo.d.ts:852](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L852)

#### Parameters

##### brake

`number`

##### wheelIndex

`number`

#### Returns

`void`

***

### setCoordinateSystem()

> **setCoordinateSystem**(`rightIndex`, `upIndex`, `forwardIndex`): `void`

Defined in: [packages/ammo/ammo.d.ts:853](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L853)

#### Parameters

##### rightIndex

`number`

##### upIndex

`number`

##### forwardIndex

`number`

#### Returns

`void`

***

### getCurrentSpeedKmHour()

> **getCurrentSpeedKmHour**(): `number`

Defined in: [packages/ammo/ammo.d.ts:854](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L854)

#### Returns

`number`

***

### getChassisWorldTransform()

> **getChassisWorldTransform**(): [`btTransform`](btTransform.md)

Defined in: [packages/ammo/ammo.d.ts:855](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L855)

#### Returns

[`btTransform`](btTransform.md)

***

### rayCast()

> **rayCast**(`wheel`): `number`

Defined in: [packages/ammo/ammo.d.ts:856](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L856)

#### Parameters

##### wheel

[`btWheelInfo`](btWheelInfo.md)

#### Returns

`number`

***

### updateVehicle()

> **updateVehicle**(`step`): `void`

Defined in: [packages/ammo/ammo.d.ts:857](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L857)

#### Parameters

##### step

`number`

#### Returns

`void`

***

### resetSuspension()

> **resetSuspension**(): `void`

Defined in: [packages/ammo/ammo.d.ts:858](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L858)

#### Returns

`void`

***

### getSteeringValue()

> **getSteeringValue**(`wheel`): `number`

Defined in: [packages/ammo/ammo.d.ts:859](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L859)

#### Parameters

##### wheel

`number`

#### Returns

`number`

***

### updateWheelTransformsWS()

> **updateWheelTransformsWS**(`wheel`, `interpolatedTransform?`): `void`

Defined in: [packages/ammo/ammo.d.ts:860](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L860)

#### Parameters

##### wheel

[`btWheelInfo`](btWheelInfo.md)

##### interpolatedTransform?

`boolean`

#### Returns

`void`

***

### setPitchControl()

> **setPitchControl**(`pitch`): `void`

Defined in: [packages/ammo/ammo.d.ts:861](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L861)

#### Parameters

##### pitch

`number`

#### Returns

`void`

***

### updateSuspension()

> **updateSuspension**(`deltaTime`): `void`

Defined in: [packages/ammo/ammo.d.ts:862](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L862)

#### Parameters

##### deltaTime

`number`

#### Returns

`void`

***

### updateFriction()

> **updateFriction**(`timeStep`): `void`

Defined in: [packages/ammo/ammo.d.ts:863](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L863)

#### Parameters

##### timeStep

`number`

#### Returns

`void`

***

### getRightAxis()

> **getRightAxis**(): `number`

Defined in: [packages/ammo/ammo.d.ts:864](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L864)

#### Returns

`number`

***

### getUpAxis()

> **getUpAxis**(): `number`

Defined in: [packages/ammo/ammo.d.ts:865](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L865)

#### Returns

`number`

***

### getForwardAxis()

> **getForwardAxis**(): `number`

Defined in: [packages/ammo/ammo.d.ts:866](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L866)

#### Returns

`number`

***

### getForwardVector()

> **getForwardVector**(): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:867](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L867)

#### Returns

[`btVector3`](btVector3.md)

***

### getUserConstraintType()

> **getUserConstraintType**(): `number`

Defined in: [packages/ammo/ammo.d.ts:868](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L868)

#### Returns

`number`

***

### setUserConstraintType()

> **setUserConstraintType**(`userConstraintType`): `void`

Defined in: [packages/ammo/ammo.d.ts:869](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L869)

#### Parameters

##### userConstraintType

`number`

#### Returns

`void`

***

### setUserConstraintId()

> **setUserConstraintId**(`uid`): `void`

Defined in: [packages/ammo/ammo.d.ts:870](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L870)

#### Parameters

##### uid

`number`

#### Returns

`void`

***

### getUserConstraintId()

> **getUserConstraintId**(): `number`

Defined in: [packages/ammo/ammo.d.ts:871](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L871)

#### Returns

`number`
