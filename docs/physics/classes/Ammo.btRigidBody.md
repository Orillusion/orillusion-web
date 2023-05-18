# Class: btRigidBody

[Ammo](../modules/Ammo.md).btRigidBody

## Hierarchy

- [`btCollisionObject`](Ammo.btCollisionObject.md)

  ↳ **`btRigidBody`**


### Methods

- [setAnisotropicFriction](Ammo.btRigidBody.md#setanisotropicfriction)
- [getCollisionShape](Ammo.btRigidBody.md#getcollisionshape)
- [setContactProcessingThreshold](Ammo.btRigidBody.md#setcontactprocessingthreshold)
- [setActivationState](Ammo.btRigidBody.md#setactivationstate)
- [forceActivationState](Ammo.btRigidBody.md#forceactivationstate)
- [activate](Ammo.btRigidBody.md#activate)
- [isActive](Ammo.btRigidBody.md#isactive)
- [isKinematicObject](Ammo.btRigidBody.md#iskinematicobject)
- [isStaticObject](Ammo.btRigidBody.md#isstaticobject)
- [isStaticOrKinematicObject](Ammo.btRigidBody.md#isstaticorkinematicobject)
- [getRestitution](Ammo.btRigidBody.md#getrestitution)
- [getFriction](Ammo.btRigidBody.md#getfriction)
- [getRollingFriction](Ammo.btRigidBody.md#getrollingfriction)
- [setRestitution](Ammo.btRigidBody.md#setrestitution)
- [setFriction](Ammo.btRigidBody.md#setfriction)
- [setRollingFriction](Ammo.btRigidBody.md#setrollingfriction)
- [getWorldTransform](Ammo.btRigidBody.md#getworldtransform)
- [getCollisionFlags](Ammo.btRigidBody.md#getcollisionflags)
- [setCollisionFlags](Ammo.btRigidBody.md#setcollisionflags)
- [setWorldTransform](Ammo.btRigidBody.md#setworldtransform)
- [setCollisionShape](Ammo.btRigidBody.md#setcollisionshape)
- [setCcdMotionThreshold](Ammo.btRigidBody.md#setccdmotionthreshold)
- [setCcdSweptSphereRadius](Ammo.btRigidBody.md#setccdsweptsphereradius)
- [getUserIndex](Ammo.btRigidBody.md#getuserindex)
- [setUserIndex](Ammo.btRigidBody.md#setuserindex)
- [getUserPointer](Ammo.btRigidBody.md#getuserpointer)
- [setUserPointer](Ammo.btRigidBody.md#setuserpointer)
- [getBroadphaseHandle](Ammo.btRigidBody.md#getbroadphasehandle)
- [getCenterOfMassTransform](Ammo.btRigidBody.md#getcenterofmasstransform)
- [setCenterOfMassTransform](Ammo.btRigidBody.md#setcenterofmasstransform)
- [setSleepingThresholds](Ammo.btRigidBody.md#setsleepingthresholds)
- [getLinearDamping](Ammo.btRigidBody.md#getlineardamping)
- [getAngularDamping](Ammo.btRigidBody.md#getangulardamping)
- [setDamping](Ammo.btRigidBody.md#setdamping)
- [setMassProps](Ammo.btRigidBody.md#setmassprops)
- [getLinearFactor](Ammo.btRigidBody.md#getlinearfactor)
- [setLinearFactor](Ammo.btRigidBody.md#setlinearfactor)
- [applyTorque](Ammo.btRigidBody.md#applytorque)
- [applyLocalTorque](Ammo.btRigidBody.md#applylocaltorque)
- [applyForce](Ammo.btRigidBody.md#applyforce)
- [applyCentralForce](Ammo.btRigidBody.md#applycentralforce)
- [applyCentralLocalForce](Ammo.btRigidBody.md#applycentrallocalforce)
- [applyTorqueImpulse](Ammo.btRigidBody.md#applytorqueimpulse)
- [applyImpulse](Ammo.btRigidBody.md#applyimpulse)
- [applyCentralImpulse](Ammo.btRigidBody.md#applycentralimpulse)
- [updateInertiaTensor](Ammo.btRigidBody.md#updateinertiatensor)
- [getLinearVelocity](Ammo.btRigidBody.md#getlinearvelocity)
- [getAngularVelocity](Ammo.btRigidBody.md#getangularvelocity)
- [setLinearVelocity](Ammo.btRigidBody.md#setlinearvelocity)
- [setAngularVelocity](Ammo.btRigidBody.md#setangularvelocity)
- [getMotionState](Ammo.btRigidBody.md#getmotionstate)
- [setMotionState](Ammo.btRigidBody.md#setmotionstate)
- [getAngularFactor](Ammo.btRigidBody.md#getangularfactor)
- [setAngularFactor](Ammo.btRigidBody.md#setangularfactor)
- [upcast](Ammo.btRigidBody.md#upcast)
- [getAabb](Ammo.btRigidBody.md#getaabb)
- [applyGravity](Ammo.btRigidBody.md#applygravity)
- [getGravity](Ammo.btRigidBody.md#getgravity)
- [setGravity](Ammo.btRigidBody.md#setgravity)
- [getBroadphaseProxy](Ammo.btRigidBody.md#getbroadphaseproxy)
- [clearForces](Ammo.btRigidBody.md#clearforces)

### Constructors

- [constructor](Ammo.btRigidBody.md#constructor)

## Methods

### setAnisotropicFriction

▸ **setAnisotropicFriction**(`anisotropicFriction`, `frictionMode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anisotropicFriction` | [`btVector3`](Ammo.btVector3.md) |
| `frictionMode` | `number` |

#### Returns

`void`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[setAnisotropicFriction](Ammo.btCollisionObject.md#setanisotropicfriction)

#### Defined in

[packages/ammo/ammo.d.ts:123](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L123)

___

### getCollisionShape

▸ **getCollisionShape**(): [`btCollisionShape`](Ammo.btCollisionShape.md)

#### Returns

[`btCollisionShape`](Ammo.btCollisionShape.md)

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[getCollisionShape](Ammo.btCollisionObject.md#getcollisionshape)

#### Defined in

[packages/ammo/ammo.d.ts:124](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L124)

___

### setContactProcessingThreshold

▸ **setContactProcessingThreshold**(`contactProcessingThreshold`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactProcessingThreshold` | `number` |

#### Returns

`void`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[setContactProcessingThreshold](Ammo.btCollisionObject.md#setcontactprocessingthreshold)

#### Defined in

[packages/ammo/ammo.d.ts:125](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L125)

___

### setActivationState

▸ **setActivationState**(`newState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | `number` |

#### Returns

`void`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[setActivationState](Ammo.btCollisionObject.md#setactivationstate)

#### Defined in

[packages/ammo/ammo.d.ts:126](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L126)

___

### forceActivationState

▸ **forceActivationState**(`newState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | `number` |

#### Returns

`void`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[forceActivationState](Ammo.btCollisionObject.md#forceactivationstate)

#### Defined in

[packages/ammo/ammo.d.ts:127](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L127)

___

### activate

▸ **activate**(`forceActivation?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forceActivation?` | `boolean` |

#### Returns

`void`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[activate](Ammo.btCollisionObject.md#activate)

#### Defined in

[packages/ammo/ammo.d.ts:128](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L128)

___

### isActive

▸ **isActive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[isActive](Ammo.btCollisionObject.md#isactive)

#### Defined in

[packages/ammo/ammo.d.ts:129](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L129)

___

### isKinematicObject

▸ **isKinematicObject**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[isKinematicObject](Ammo.btCollisionObject.md#iskinematicobject)

#### Defined in

[packages/ammo/ammo.d.ts:130](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L130)

___

### isStaticObject

▸ **isStaticObject**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[isStaticObject](Ammo.btCollisionObject.md#isstaticobject)

#### Defined in

[packages/ammo/ammo.d.ts:131](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L131)

___

### isStaticOrKinematicObject

▸ **isStaticOrKinematicObject**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[isStaticOrKinematicObject](Ammo.btCollisionObject.md#isstaticorkinematicobject)

#### Defined in

[packages/ammo/ammo.d.ts:132](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L132)

___

### getRestitution

▸ **getRestitution**(): `number`

#### Returns

`number`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[getRestitution](Ammo.btCollisionObject.md#getrestitution)

#### Defined in

[packages/ammo/ammo.d.ts:133](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L133)

___

### getFriction

▸ **getFriction**(): `number`

#### Returns

`number`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[getFriction](Ammo.btCollisionObject.md#getfriction)

#### Defined in

[packages/ammo/ammo.d.ts:134](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L134)

___

### getRollingFriction

▸ **getRollingFriction**(): `number`

#### Returns

`number`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[getRollingFriction](Ammo.btCollisionObject.md#getrollingfriction)

#### Defined in

[packages/ammo/ammo.d.ts:135](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L135)

___

### setRestitution

▸ **setRestitution**(`rest`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rest` | `number` |

#### Returns

`void`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[setRestitution](Ammo.btCollisionObject.md#setrestitution)

#### Defined in

[packages/ammo/ammo.d.ts:136](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L136)

___

### setFriction

▸ **setFriction**(`frict`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `frict` | `number` |

#### Returns

`void`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[setFriction](Ammo.btCollisionObject.md#setfriction)

#### Defined in

[packages/ammo/ammo.d.ts:137](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L137)

___

### setRollingFriction

▸ **setRollingFriction**(`frict`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `frict` | `number` |

#### Returns

`void`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[setRollingFriction](Ammo.btCollisionObject.md#setrollingfriction)

#### Defined in

[packages/ammo/ammo.d.ts:138](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L138)

___

### getWorldTransform

▸ **getWorldTransform**(): [`btTransform`](Ammo.btTransform.md)

#### Returns

[`btTransform`](Ammo.btTransform.md)

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[getWorldTransform](Ammo.btCollisionObject.md#getworldtransform)

#### Defined in

[packages/ammo/ammo.d.ts:139](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L139)

___

### getCollisionFlags

▸ **getCollisionFlags**(): `number`

#### Returns

`number`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[getCollisionFlags](Ammo.btCollisionObject.md#getcollisionflags)

#### Defined in

[packages/ammo/ammo.d.ts:140](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L140)

___

### setCollisionFlags

▸ **setCollisionFlags**(`flags`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `number` |

#### Returns

`void`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[setCollisionFlags](Ammo.btCollisionObject.md#setcollisionflags)

#### Defined in

[packages/ammo/ammo.d.ts:141](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L141)

___

### setWorldTransform

▸ **setWorldTransform**(`worldTrans`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldTrans` | [`btTransform`](Ammo.btTransform.md) |

#### Returns

`void`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[setWorldTransform](Ammo.btCollisionObject.md#setworldtransform)

#### Defined in

[packages/ammo/ammo.d.ts:142](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L142)

___

### setCollisionShape

▸ **setCollisionShape**(`collisionShape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collisionShape` | [`btCollisionShape`](Ammo.btCollisionShape.md) |

#### Returns

`void`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[setCollisionShape](Ammo.btCollisionObject.md#setcollisionshape)

#### Defined in

[packages/ammo/ammo.d.ts:143](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L143)

___

### setCcdMotionThreshold

▸ **setCcdMotionThreshold**(`ccdMotionThreshold`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ccdMotionThreshold` | `number` |

#### Returns

`void`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[setCcdMotionThreshold](Ammo.btCollisionObject.md#setccdmotionthreshold)

#### Defined in

[packages/ammo/ammo.d.ts:144](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L144)

___

### setCcdSweptSphereRadius

▸ **setCcdSweptSphereRadius**(`radius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |

#### Returns

`void`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[setCcdSweptSphereRadius](Ammo.btCollisionObject.md#setccdsweptsphereradius)

#### Defined in

[packages/ammo/ammo.d.ts:145](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L145)

___

### getUserIndex

▸ **getUserIndex**(): `number`

#### Returns

`number`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[getUserIndex](Ammo.btCollisionObject.md#getuserindex)

#### Defined in

[packages/ammo/ammo.d.ts:146](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L146)

___

### setUserIndex

▸ **setUserIndex**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[setUserIndex](Ammo.btCollisionObject.md#setuserindex)

#### Defined in

[packages/ammo/ammo.d.ts:147](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L147)

___

### getUserPointer

▸ **getUserPointer**(): `unknown`

#### Returns

`unknown`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[getUserPointer](Ammo.btCollisionObject.md#getuserpointer)

#### Defined in

[packages/ammo/ammo.d.ts:148](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L148)

___

### setUserPointer

▸ **setUserPointer**(`userPointer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `userPointer` | `unknown` |

#### Returns

`void`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[setUserPointer](Ammo.btCollisionObject.md#setuserpointer)

#### Defined in

[packages/ammo/ammo.d.ts:149](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L149)

___

### getBroadphaseHandle

▸ **getBroadphaseHandle**(): [`btBroadphaseProxy`](Ammo.btBroadphaseProxy.md)

#### Returns

[`btBroadphaseProxy`](Ammo.btBroadphaseProxy.md)

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[getBroadphaseHandle](Ammo.btCollisionObject.md#getbroadphasehandle)

#### Defined in

[packages/ammo/ammo.d.ts:150](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L150)

___

### getCenterOfMassTransform

▸ **getCenterOfMassTransform**(): [`btTransform`](Ammo.btTransform.md)

#### Returns

[`btTransform`](Ammo.btTransform.md)

#### Defined in

[packages/ammo/ammo.d.ts:488](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L488)

___

### setCenterOfMassTransform

▸ **setCenterOfMassTransform**(`xform`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `xform` | [`btTransform`](Ammo.btTransform.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:489](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L489)

___

### setSleepingThresholds

▸ **setSleepingThresholds**(`linear`, `angular`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linear` | `number` |
| `angular` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:490](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L490)

___

### getLinearDamping

▸ **getLinearDamping**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:491](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L491)

___

### getAngularDamping

▸ **getAngularDamping**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:492](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L492)

___

### setDamping

▸ **setDamping**(`lin_damping`, `ang_damping`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lin_damping` | `number` |
| `ang_damping` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:493](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L493)

___

### setMassProps

▸ **setMassProps**(`mass`, `inertia`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mass` | `number` |
| `inertia` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:494](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L494)

___

### getLinearFactor

▸ **getLinearFactor**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/ammo/ammo.d.ts:495](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L495)

___

### setLinearFactor

▸ **setLinearFactor**(`linearFactor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearFactor` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:496](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L496)

___

### applyTorque

▸ **applyTorque**(`torque`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `torque` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:497](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L497)

___

### applyLocalTorque

▸ **applyLocalTorque**(`torque`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `torque` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:498](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L498)

___

### applyForce

▸ **applyForce**(`force`, `rel_pos`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force` | [`btVector3`](Ammo.btVector3.md) |
| `rel_pos` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:499](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L499)

___

### applyCentralForce

▸ **applyCentralForce**(`force`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:500](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L500)

___

### applyCentralLocalForce

▸ **applyCentralLocalForce**(`force`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:501](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L501)

___

### applyTorqueImpulse

▸ **applyTorqueImpulse**(`torque`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `torque` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:502](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L502)

___

### applyImpulse

▸ **applyImpulse**(`impulse`, `rel_pos`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `impulse` | [`btVector3`](Ammo.btVector3.md) |
| `rel_pos` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:503](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L503)

___

### applyCentralImpulse

▸ **applyCentralImpulse**(`impulse`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `impulse` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:504](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L504)

___

### updateInertiaTensor

▸ **updateInertiaTensor**(): `void`

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:505](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L505)

___

### getLinearVelocity

▸ **getLinearVelocity**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/ammo/ammo.d.ts:506](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L506)

___

### getAngularVelocity

▸ **getAngularVelocity**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/ammo/ammo.d.ts:507](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L507)

___

### setLinearVelocity

▸ **setLinearVelocity**(`lin_vel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lin_vel` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:508](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L508)

___

### setAngularVelocity

▸ **setAngularVelocity**(`ang_vel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ang_vel` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:509](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L509)

___

### getMotionState

▸ **getMotionState**(): [`btMotionState`](Ammo.btMotionState.md)

#### Returns

[`btMotionState`](Ammo.btMotionState.md)

#### Defined in

[packages/ammo/ammo.d.ts:510](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L510)

___

### setMotionState

▸ **setMotionState**(`motionState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `motionState` | [`btMotionState`](Ammo.btMotionState.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:511](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L511)

___

### getAngularFactor

▸ **getAngularFactor**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/ammo/ammo.d.ts:512](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L512)

___

### setAngularFactor

▸ **setAngularFactor**(`angularFactor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angularFactor` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:513](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L513)

___

### upcast

▸ **upcast**(`colObj`): [`btRigidBody`](Ammo.btRigidBody.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `colObj` | [`btCollisionObject`](Ammo.btCollisionObject.md) |

#### Returns

[`btRigidBody`](Ammo.btRigidBody.md)

#### Defined in

[packages/ammo/ammo.d.ts:514](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L514)

___

### getAabb

▸ **getAabb**(`aabbMin`, `aabbMax`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aabbMin` | [`btVector3`](Ammo.btVector3.md) |
| `aabbMax` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:515](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L515)

___

### applyGravity

▸ **applyGravity**(): `void`

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:516](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L516)

___

### getGravity

▸ **getGravity**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/ammo/ammo.d.ts:517](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L517)

___

### setGravity

▸ **setGravity**(`acceleration`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `acceleration` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:518](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L518)

___

### getBroadphaseProxy

▸ **getBroadphaseProxy**(): [`btBroadphaseProxy`](Ammo.btBroadphaseProxy.md)

#### Returns

[`btBroadphaseProxy`](Ammo.btBroadphaseProxy.md)

#### Defined in

[packages/ammo/ammo.d.ts:519](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L519)

___

### clearForces

▸ **clearForces**(): `void`

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:520](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L520)

## Constructors

### constructor

• **new btRigidBody**(`constructionInfo`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructionInfo` | [`btRigidBodyConstructionInfo`](Ammo.btRigidBodyConstructionInfo.md) |

#### Overrides

[btCollisionObject](Ammo.btCollisionObject.md).[constructor](Ammo.btCollisionObject.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:487](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L487)
