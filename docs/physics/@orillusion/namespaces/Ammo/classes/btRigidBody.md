[**@orillusion/physics**](../../../../README.md)

***

# Class: btRigidBody

Defined in: [packages/ammo/ammo.d.ts:496](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L496)

## Extends

- [`btCollisionObject`](btCollisionObject.md)

## Constructors

### Constructor

> **new btRigidBody**(`constructionInfo`): `btRigidBody`

Defined in: [packages/ammo/ammo.d.ts:497](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L497)

#### Parameters

##### constructionInfo

[`btRigidBodyConstructionInfo`](btRigidBodyConstructionInfo.md)

#### Returns

`btRigidBody`

#### Overrides

[`btCollisionObject`](btCollisionObject.md).[`constructor`](btCollisionObject.md#constructor)

## Properties

### kB

> **kB**: `number`

Defined in: [packages/ammo/ammo.d.ts:128](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L128)

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`kB`](btCollisionObject.md#kb)

## Methods

### setAnisotropicFriction()

> **setAnisotropicFriction**(`anisotropicFriction`, `frictionMode`): `void`

Defined in: [packages/ammo/ammo.d.ts:129](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L129)

#### Parameters

##### anisotropicFriction

[`btVector3`](btVector3.md)

##### frictionMode

`number`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setAnisotropicFriction`](btCollisionObject.md#setanisotropicfriction)

***

### getCollisionShape()

> **getCollisionShape**(): [`btCollisionShape`](btCollisionShape.md)

Defined in: [packages/ammo/ammo.d.ts:130](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L130)

#### Returns

[`btCollisionShape`](btCollisionShape.md)

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`getCollisionShape`](btCollisionObject.md#getcollisionshape)

***

### setContactProcessingThreshold()

> **setContactProcessingThreshold**(`contactProcessingThreshold`): `void`

Defined in: [packages/ammo/ammo.d.ts:131](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L131)

#### Parameters

##### contactProcessingThreshold

`number`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setContactProcessingThreshold`](btCollisionObject.md#setcontactprocessingthreshold)

***

### setActivationState()

> **setActivationState**(`newState`): `void`

Defined in: [packages/ammo/ammo.d.ts:132](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L132)

#### Parameters

##### newState

`number`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setActivationState`](btCollisionObject.md#setactivationstate)

***

### forceActivationState()

> **forceActivationState**(`newState`): `void`

Defined in: [packages/ammo/ammo.d.ts:133](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L133)

#### Parameters

##### newState

`number`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`forceActivationState`](btCollisionObject.md#forceactivationstate)

***

### activate()

> **activate**(`forceActivation?`): `void`

Defined in: [packages/ammo/ammo.d.ts:134](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L134)

#### Parameters

##### forceActivation?

`boolean`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`activate`](btCollisionObject.md#activate)

***

### isActive()

> **isActive**(): `boolean`

Defined in: [packages/ammo/ammo.d.ts:135](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L135)

#### Returns

`boolean`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`isActive`](btCollisionObject.md#isactive)

***

### isKinematicObject()

> **isKinematicObject**(): `boolean`

Defined in: [packages/ammo/ammo.d.ts:136](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L136)

#### Returns

`boolean`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`isKinematicObject`](btCollisionObject.md#iskinematicobject)

***

### isStaticObject()

> **isStaticObject**(): `boolean`

Defined in: [packages/ammo/ammo.d.ts:137](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L137)

#### Returns

`boolean`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`isStaticObject`](btCollisionObject.md#isstaticobject)

***

### isStaticOrKinematicObject()

> **isStaticOrKinematicObject**(): `boolean`

Defined in: [packages/ammo/ammo.d.ts:138](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L138)

#### Returns

`boolean`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`isStaticOrKinematicObject`](btCollisionObject.md#isstaticorkinematicobject)

***

### getRestitution()

> **getRestitution**(): `number`

Defined in: [packages/ammo/ammo.d.ts:139](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L139)

#### Returns

`number`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`getRestitution`](btCollisionObject.md#getrestitution)

***

### getFriction()

> **getFriction**(): `number`

Defined in: [packages/ammo/ammo.d.ts:140](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L140)

#### Returns

`number`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`getFriction`](btCollisionObject.md#getfriction)

***

### getRollingFriction()

> **getRollingFriction**(): `number`

Defined in: [packages/ammo/ammo.d.ts:141](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L141)

#### Returns

`number`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`getRollingFriction`](btCollisionObject.md#getrollingfriction)

***

### setRestitution()

> **setRestitution**(`rest`): `void`

Defined in: [packages/ammo/ammo.d.ts:142](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L142)

#### Parameters

##### rest

`number`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setRestitution`](btCollisionObject.md#setrestitution)

***

### setFriction()

> **setFriction**(`frict`): `void`

Defined in: [packages/ammo/ammo.d.ts:143](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L143)

#### Parameters

##### frict

`number`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setFriction`](btCollisionObject.md#setfriction)

***

### setRollingFriction()

> **setRollingFriction**(`frict`): `void`

Defined in: [packages/ammo/ammo.d.ts:144](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L144)

#### Parameters

##### frict

`number`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setRollingFriction`](btCollisionObject.md#setrollingfriction)

***

### getWorldTransform()

> **getWorldTransform**(): [`btTransform`](btTransform.md)

Defined in: [packages/ammo/ammo.d.ts:145](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L145)

#### Returns

[`btTransform`](btTransform.md)

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`getWorldTransform`](btCollisionObject.md#getworldtransform)

***

### getCollisionFlags()

> **getCollisionFlags**(): `number`

Defined in: [packages/ammo/ammo.d.ts:146](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L146)

#### Returns

`number`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`getCollisionFlags`](btCollisionObject.md#getcollisionflags)

***

### setCollisionFlags()

> **setCollisionFlags**(`flags`): `void`

Defined in: [packages/ammo/ammo.d.ts:147](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L147)

#### Parameters

##### flags

`number`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setCollisionFlags`](btCollisionObject.md#setcollisionflags)

***

### setWorldTransform()

> **setWorldTransform**(`worldTrans`): `void`

Defined in: [packages/ammo/ammo.d.ts:148](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L148)

#### Parameters

##### worldTrans

[`btTransform`](btTransform.md)

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setWorldTransform`](btCollisionObject.md#setworldtransform)

***

### setCollisionShape()

> **setCollisionShape**(`collisionShape`): `void`

Defined in: [packages/ammo/ammo.d.ts:149](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L149)

#### Parameters

##### collisionShape

[`btCollisionShape`](btCollisionShape.md)

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setCollisionShape`](btCollisionObject.md#setcollisionshape)

***

### setCcdMotionThreshold()

> **setCcdMotionThreshold**(`ccdMotionThreshold`): `void`

Defined in: [packages/ammo/ammo.d.ts:150](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L150)

#### Parameters

##### ccdMotionThreshold

`number`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setCcdMotionThreshold`](btCollisionObject.md#setccdmotionthreshold)

***

### setCcdSweptSphereRadius()

> **setCcdSweptSphereRadius**(`radius`): `void`

Defined in: [packages/ammo/ammo.d.ts:151](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L151)

#### Parameters

##### radius

`number`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setCcdSweptSphereRadius`](btCollisionObject.md#setccdsweptsphereradius)

***

### getUserIndex()

> **getUserIndex**(): `number`

Defined in: [packages/ammo/ammo.d.ts:152](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L152)

#### Returns

`number`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`getUserIndex`](btCollisionObject.md#getuserindex)

***

### setUserIndex()

> **setUserIndex**(`index`): `void`

Defined in: [packages/ammo/ammo.d.ts:153](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L153)

#### Parameters

##### index

`number`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setUserIndex`](btCollisionObject.md#setuserindex)

***

### getUserPointer()

> **getUserPointer**(): `unknown`

Defined in: [packages/ammo/ammo.d.ts:154](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L154)

#### Returns

`unknown`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`getUserPointer`](btCollisionObject.md#getuserpointer)

***

### setUserPointer()

> **setUserPointer**(`userPointer`): `void`

Defined in: [packages/ammo/ammo.d.ts:155](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L155)

#### Parameters

##### userPointer

`unknown`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setUserPointer`](btCollisionObject.md#setuserpointer)

***

### getBroadphaseHandle()

> **getBroadphaseHandle**(): [`btBroadphaseProxy`](btBroadphaseProxy.md)

Defined in: [packages/ammo/ammo.d.ts:156](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L156)

#### Returns

[`btBroadphaseProxy`](btBroadphaseProxy.md)

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`getBroadphaseHandle`](btCollisionObject.md#getbroadphasehandle)

***

### getCenterOfMassTransform()

> **getCenterOfMassTransform**(): [`btTransform`](btTransform.md)

Defined in: [packages/ammo/ammo.d.ts:498](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L498)

#### Returns

[`btTransform`](btTransform.md)

***

### setCenterOfMassTransform()

> **setCenterOfMassTransform**(`xform`): `void`

Defined in: [packages/ammo/ammo.d.ts:499](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L499)

#### Parameters

##### xform

[`btTransform`](btTransform.md)

#### Returns

`void`

***

### setSleepingThresholds()

> **setSleepingThresholds**(`linear`, `angular`): `void`

Defined in: [packages/ammo/ammo.d.ts:500](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L500)

#### Parameters

##### linear

`number`

##### angular

`number`

#### Returns

`void`

***

### getLinearDamping()

> **getLinearDamping**(): `number`

Defined in: [packages/ammo/ammo.d.ts:501](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L501)

#### Returns

`number`

***

### getAngularDamping()

> **getAngularDamping**(): `number`

Defined in: [packages/ammo/ammo.d.ts:502](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L502)

#### Returns

`number`

***

### setDamping()

> **setDamping**(`lin_damping`, `ang_damping`): `void`

Defined in: [packages/ammo/ammo.d.ts:503](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L503)

#### Parameters

##### lin\_damping

`number`

##### ang\_damping

`number`

#### Returns

`void`

***

### setMassProps()

> **setMassProps**(`mass`, `inertia`): `void`

Defined in: [packages/ammo/ammo.d.ts:504](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L504)

#### Parameters

##### mass

`number`

##### inertia

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### getLinearFactor()

> **getLinearFactor**(): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:505](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L505)

#### Returns

[`btVector3`](btVector3.md)

***

### setLinearFactor()

> **setLinearFactor**(`linearFactor`): `void`

Defined in: [packages/ammo/ammo.d.ts:506](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L506)

#### Parameters

##### linearFactor

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### applyTorque()

> **applyTorque**(`torque`): `void`

Defined in: [packages/ammo/ammo.d.ts:507](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L507)

#### Parameters

##### torque

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### applyLocalTorque()

> **applyLocalTorque**(`torque`): `void`

Defined in: [packages/ammo/ammo.d.ts:508](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L508)

#### Parameters

##### torque

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### applyForce()

> **applyForce**(`force`, `rel_pos`): `void`

Defined in: [packages/ammo/ammo.d.ts:509](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L509)

#### Parameters

##### force

[`btVector3`](btVector3.md)

##### rel\_pos

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### applyCentralForce()

> **applyCentralForce**(`force`): `void`

Defined in: [packages/ammo/ammo.d.ts:510](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L510)

#### Parameters

##### force

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### applyCentralLocalForce()

> **applyCentralLocalForce**(`force`): `void`

Defined in: [packages/ammo/ammo.d.ts:511](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L511)

#### Parameters

##### force

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### applyTorqueImpulse()

> **applyTorqueImpulse**(`torque`): `void`

Defined in: [packages/ammo/ammo.d.ts:512](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L512)

#### Parameters

##### torque

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### applyImpulse()

> **applyImpulse**(`impulse`, `rel_pos`): `void`

Defined in: [packages/ammo/ammo.d.ts:513](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L513)

#### Parameters

##### impulse

[`btVector3`](btVector3.md)

##### rel\_pos

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### applyCentralImpulse()

> **applyCentralImpulse**(`impulse`): `void`

Defined in: [packages/ammo/ammo.d.ts:514](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L514)

#### Parameters

##### impulse

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### updateInertiaTensor()

> **updateInertiaTensor**(): `void`

Defined in: [packages/ammo/ammo.d.ts:515](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L515)

#### Returns

`void`

***

### getLinearVelocity()

> **getLinearVelocity**(): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:516](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L516)

#### Returns

[`btVector3`](btVector3.md)

***

### getAngularVelocity()

> **getAngularVelocity**(): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:517](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L517)

#### Returns

[`btVector3`](btVector3.md)

***

### setLinearVelocity()

> **setLinearVelocity**(`lin_vel`): `void`

Defined in: [packages/ammo/ammo.d.ts:518](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L518)

#### Parameters

##### lin\_vel

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### setAngularVelocity()

> **setAngularVelocity**(`ang_vel`): `void`

Defined in: [packages/ammo/ammo.d.ts:519](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L519)

#### Parameters

##### ang\_vel

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### getMotionState()

> **getMotionState**(): [`btMotionState`](btMotionState.md)

Defined in: [packages/ammo/ammo.d.ts:520](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L520)

#### Returns

[`btMotionState`](btMotionState.md)

***

### setMotionState()

> **setMotionState**(`motionState`): `void`

Defined in: [packages/ammo/ammo.d.ts:521](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L521)

#### Parameters

##### motionState

[`btMotionState`](btMotionState.md)

#### Returns

`void`

***

### getAngularFactor()

> **getAngularFactor**(): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:522](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L522)

#### Returns

[`btVector3`](btVector3.md)

***

### setAngularFactor()

> **setAngularFactor**(`angularFactor`): `void`

Defined in: [packages/ammo/ammo.d.ts:523](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L523)

#### Parameters

##### angularFactor

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### upcast()

> **upcast**(`colObj`): `btRigidBody`

Defined in: [packages/ammo/ammo.d.ts:524](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L524)

#### Parameters

##### colObj

[`btCollisionObject`](btCollisionObject.md)

#### Returns

`btRigidBody`

***

### getAabb()

> **getAabb**(`aabbMin`, `aabbMax`): `void`

Defined in: [packages/ammo/ammo.d.ts:525](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L525)

#### Parameters

##### aabbMin

[`btVector3`](btVector3.md)

##### aabbMax

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### applyGravity()

> **applyGravity**(): `void`

Defined in: [packages/ammo/ammo.d.ts:526](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L526)

#### Returns

`void`

***

### getGravity()

> **getGravity**(): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:527](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L527)

#### Returns

[`btVector3`](btVector3.md)

***

### setGravity()

> **setGravity**(`acceleration`): `void`

Defined in: [packages/ammo/ammo.d.ts:528](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L528)

#### Parameters

##### acceleration

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### getBroadphaseProxy()

> **getBroadphaseProxy**(): [`btBroadphaseProxy`](btBroadphaseProxy.md)

Defined in: [packages/ammo/ammo.d.ts:529](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L529)

#### Returns

[`btBroadphaseProxy`](btBroadphaseProxy.md)

***

### clearForces()

> **clearForces**(): `void`

Defined in: [packages/ammo/ammo.d.ts:530](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L530)

#### Returns

`void`
