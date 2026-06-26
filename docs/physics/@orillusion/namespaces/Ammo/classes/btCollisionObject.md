[**@orillusion/physics**](../../../../README.md)

***

# Class: btCollisionObject

Defined in: [packages/ammo/ammo.d.ts:127](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L127)

## Extended by

- [`btRigidBody`](btRigidBody.md)
- [`btGhostObject`](btGhostObject.md)
- [`btSoftBody`](btSoftBody.md)

## Constructors

### Constructor

> **new btCollisionObject**(): `btCollisionObject`

#### Returns

`btCollisionObject`

## Properties

### kB

> **kB**: `number`

Defined in: [packages/ammo/ammo.d.ts:128](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L128)

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

***

### getCollisionShape()

> **getCollisionShape**(): [`btCollisionShape`](btCollisionShape.md)

Defined in: [packages/ammo/ammo.d.ts:130](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L130)

#### Returns

[`btCollisionShape`](btCollisionShape.md)

***

### setContactProcessingThreshold()

> **setContactProcessingThreshold**(`contactProcessingThreshold`): `void`

Defined in: [packages/ammo/ammo.d.ts:131](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L131)

#### Parameters

##### contactProcessingThreshold

`number`

#### Returns

`void`

***

### setActivationState()

> **setActivationState**(`newState`): `void`

Defined in: [packages/ammo/ammo.d.ts:132](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L132)

#### Parameters

##### newState

`number`

#### Returns

`void`

***

### forceActivationState()

> **forceActivationState**(`newState`): `void`

Defined in: [packages/ammo/ammo.d.ts:133](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L133)

#### Parameters

##### newState

`number`

#### Returns

`void`

***

### activate()

> **activate**(`forceActivation?`): `void`

Defined in: [packages/ammo/ammo.d.ts:134](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L134)

#### Parameters

##### forceActivation?

`boolean`

#### Returns

`void`

***

### isActive()

> **isActive**(): `boolean`

Defined in: [packages/ammo/ammo.d.ts:135](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L135)

#### Returns

`boolean`

***

### isKinematicObject()

> **isKinematicObject**(): `boolean`

Defined in: [packages/ammo/ammo.d.ts:136](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L136)

#### Returns

`boolean`

***

### isStaticObject()

> **isStaticObject**(): `boolean`

Defined in: [packages/ammo/ammo.d.ts:137](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L137)

#### Returns

`boolean`

***

### isStaticOrKinematicObject()

> **isStaticOrKinematicObject**(): `boolean`

Defined in: [packages/ammo/ammo.d.ts:138](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L138)

#### Returns

`boolean`

***

### getRestitution()

> **getRestitution**(): `number`

Defined in: [packages/ammo/ammo.d.ts:139](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L139)

#### Returns

`number`

***

### getFriction()

> **getFriction**(): `number`

Defined in: [packages/ammo/ammo.d.ts:140](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L140)

#### Returns

`number`

***

### getRollingFriction()

> **getRollingFriction**(): `number`

Defined in: [packages/ammo/ammo.d.ts:141](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L141)

#### Returns

`number`

***

### setRestitution()

> **setRestitution**(`rest`): `void`

Defined in: [packages/ammo/ammo.d.ts:142](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L142)

#### Parameters

##### rest

`number`

#### Returns

`void`

***

### setFriction()

> **setFriction**(`frict`): `void`

Defined in: [packages/ammo/ammo.d.ts:143](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L143)

#### Parameters

##### frict

`number`

#### Returns

`void`

***

### setRollingFriction()

> **setRollingFriction**(`frict`): `void`

Defined in: [packages/ammo/ammo.d.ts:144](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L144)

#### Parameters

##### frict

`number`

#### Returns

`void`

***

### getWorldTransform()

> **getWorldTransform**(): [`btTransform`](btTransform.md)

Defined in: [packages/ammo/ammo.d.ts:145](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L145)

#### Returns

[`btTransform`](btTransform.md)

***

### getCollisionFlags()

> **getCollisionFlags**(): `number`

Defined in: [packages/ammo/ammo.d.ts:146](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L146)

#### Returns

`number`

***

### setCollisionFlags()

> **setCollisionFlags**(`flags`): `void`

Defined in: [packages/ammo/ammo.d.ts:147](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L147)

#### Parameters

##### flags

`number`

#### Returns

`void`

***

### setWorldTransform()

> **setWorldTransform**(`worldTrans`): `void`

Defined in: [packages/ammo/ammo.d.ts:148](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L148)

#### Parameters

##### worldTrans

[`btTransform`](btTransform.md)

#### Returns

`void`

***

### setCollisionShape()

> **setCollisionShape**(`collisionShape`): `void`

Defined in: [packages/ammo/ammo.d.ts:149](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L149)

#### Parameters

##### collisionShape

[`btCollisionShape`](btCollisionShape.md)

#### Returns

`void`

***

### setCcdMotionThreshold()

> **setCcdMotionThreshold**(`ccdMotionThreshold`): `void`

Defined in: [packages/ammo/ammo.d.ts:150](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L150)

#### Parameters

##### ccdMotionThreshold

`number`

#### Returns

`void`

***

### setCcdSweptSphereRadius()

> **setCcdSweptSphereRadius**(`radius`): `void`

Defined in: [packages/ammo/ammo.d.ts:151](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L151)

#### Parameters

##### radius

`number`

#### Returns

`void`

***

### getUserIndex()

> **getUserIndex**(): `number`

Defined in: [packages/ammo/ammo.d.ts:152](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L152)

#### Returns

`number`

***

### setUserIndex()

> **setUserIndex**(`index`): `void`

Defined in: [packages/ammo/ammo.d.ts:153](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L153)

#### Parameters

##### index

`number`

#### Returns

`void`

***

### getUserPointer()

> **getUserPointer**(): `unknown`

Defined in: [packages/ammo/ammo.d.ts:154](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L154)

#### Returns

`unknown`

***

### setUserPointer()

> **setUserPointer**(`userPointer`): `void`

Defined in: [packages/ammo/ammo.d.ts:155](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L155)

#### Parameters

##### userPointer

`unknown`

#### Returns

`void`

***

### getBroadphaseHandle()

> **getBroadphaseHandle**(): [`btBroadphaseProxy`](btBroadphaseProxy.md)

Defined in: [packages/ammo/ammo.d.ts:156](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L156)

#### Returns

[`btBroadphaseProxy`](btBroadphaseProxy.md)
