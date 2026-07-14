[**@orillusion/physics**](../../../../README.md)

***

# Class: btGhostObject

Defined in: [packages/ammo/ammo.d.ts:873](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L873)

## Extends

- [`btCollisionObject`](btCollisionObject.md)

## Extended by

- [`btPairCachingGhostObject`](btPairCachingGhostObject.md)

## Constructors

### Constructor

> **new btGhostObject**(): `btGhostObject`

Defined in: [packages/ammo/ammo.d.ts:874](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L874)

#### Returns

`btGhostObject`

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

### getNumOverlappingObjects()

> **getNumOverlappingObjects**(): `number`

Defined in: [packages/ammo/ammo.d.ts:875](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L875)

#### Returns

`number`

***

### getOverlappingObject()

> **getOverlappingObject**(`index`): [`btCollisionObject`](btCollisionObject.md)

Defined in: [packages/ammo/ammo.d.ts:876](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L876)

#### Parameters

##### index

`number`

#### Returns

[`btCollisionObject`](btCollisionObject.md)
