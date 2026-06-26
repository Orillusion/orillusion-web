[**@orillusion/physics**](../../../../README.md)

***

# Class: btPairCachingGhostObject

Defined in: [packages/ammo/ammo.d.ts:878](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L878)

## Extends

- [`btGhostObject`](btGhostObject.md)

## Constructors

### Constructor

> **new btPairCachingGhostObject**(): `btPairCachingGhostObject`

Defined in: [packages/ammo/ammo.d.ts:879](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L879)

#### Returns

`btPairCachingGhostObject`

#### Overrides

[`btGhostObject`](btGhostObject.md).[`constructor`](btGhostObject.md#constructor)

## Properties

### kB

> **kB**: `number`

Defined in: [packages/ammo/ammo.d.ts:128](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L128)

#### Inherited from

[`btGhostObject`](btGhostObject.md).[`kB`](btGhostObject.md#kb)

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

[`btGhostObject`](btGhostObject.md).[`setAnisotropicFriction`](btGhostObject.md#setanisotropicfriction)

***

### getCollisionShape()

> **getCollisionShape**(): [`btCollisionShape`](btCollisionShape.md)

Defined in: [packages/ammo/ammo.d.ts:130](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L130)

#### Returns

[`btCollisionShape`](btCollisionShape.md)

#### Inherited from

[`btGhostObject`](btGhostObject.md).[`getCollisionShape`](btGhostObject.md#getcollisionshape)

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

[`btGhostObject`](btGhostObject.md).[`setContactProcessingThreshold`](btGhostObject.md#setcontactprocessingthreshold)

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

[`btGhostObject`](btGhostObject.md).[`setActivationState`](btGhostObject.md#setactivationstate)

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

[`btGhostObject`](btGhostObject.md).[`forceActivationState`](btGhostObject.md#forceactivationstate)

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

[`btGhostObject`](btGhostObject.md).[`activate`](btGhostObject.md#activate)

***

### isActive()

> **isActive**(): `boolean`

Defined in: [packages/ammo/ammo.d.ts:135](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L135)

#### Returns

`boolean`

#### Inherited from

[`btGhostObject`](btGhostObject.md).[`isActive`](btGhostObject.md#isactive)

***

### isKinematicObject()

> **isKinematicObject**(): `boolean`

Defined in: [packages/ammo/ammo.d.ts:136](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L136)

#### Returns

`boolean`

#### Inherited from

[`btGhostObject`](btGhostObject.md).[`isKinematicObject`](btGhostObject.md#iskinematicobject)

***

### isStaticObject()

> **isStaticObject**(): `boolean`

Defined in: [packages/ammo/ammo.d.ts:137](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L137)

#### Returns

`boolean`

#### Inherited from

[`btGhostObject`](btGhostObject.md).[`isStaticObject`](btGhostObject.md#isstaticobject)

***

### isStaticOrKinematicObject()

> **isStaticOrKinematicObject**(): `boolean`

Defined in: [packages/ammo/ammo.d.ts:138](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L138)

#### Returns

`boolean`

#### Inherited from

[`btGhostObject`](btGhostObject.md).[`isStaticOrKinematicObject`](btGhostObject.md#isstaticorkinematicobject)

***

### getRestitution()

> **getRestitution**(): `number`

Defined in: [packages/ammo/ammo.d.ts:139](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L139)

#### Returns

`number`

#### Inherited from

[`btGhostObject`](btGhostObject.md).[`getRestitution`](btGhostObject.md#getrestitution)

***

### getFriction()

> **getFriction**(): `number`

Defined in: [packages/ammo/ammo.d.ts:140](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L140)

#### Returns

`number`

#### Inherited from

[`btGhostObject`](btGhostObject.md).[`getFriction`](btGhostObject.md#getfriction)

***

### getRollingFriction()

> **getRollingFriction**(): `number`

Defined in: [packages/ammo/ammo.d.ts:141](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L141)

#### Returns

`number`

#### Inherited from

[`btGhostObject`](btGhostObject.md).[`getRollingFriction`](btGhostObject.md#getrollingfriction)

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

[`btGhostObject`](btGhostObject.md).[`setRestitution`](btGhostObject.md#setrestitution)

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

[`btGhostObject`](btGhostObject.md).[`setFriction`](btGhostObject.md#setfriction)

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

[`btGhostObject`](btGhostObject.md).[`setRollingFriction`](btGhostObject.md#setrollingfriction)

***

### getWorldTransform()

> **getWorldTransform**(): [`btTransform`](btTransform.md)

Defined in: [packages/ammo/ammo.d.ts:145](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L145)

#### Returns

[`btTransform`](btTransform.md)

#### Inherited from

[`btGhostObject`](btGhostObject.md).[`getWorldTransform`](btGhostObject.md#getworldtransform)

***

### getCollisionFlags()

> **getCollisionFlags**(): `number`

Defined in: [packages/ammo/ammo.d.ts:146](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L146)

#### Returns

`number`

#### Inherited from

[`btGhostObject`](btGhostObject.md).[`getCollisionFlags`](btGhostObject.md#getcollisionflags)

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

[`btGhostObject`](btGhostObject.md).[`setCollisionFlags`](btGhostObject.md#setcollisionflags)

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

[`btGhostObject`](btGhostObject.md).[`setWorldTransform`](btGhostObject.md#setworldtransform)

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

[`btGhostObject`](btGhostObject.md).[`setCollisionShape`](btGhostObject.md#setcollisionshape)

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

[`btGhostObject`](btGhostObject.md).[`setCcdMotionThreshold`](btGhostObject.md#setccdmotionthreshold)

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

[`btGhostObject`](btGhostObject.md).[`setCcdSweptSphereRadius`](btGhostObject.md#setccdsweptsphereradius)

***

### getUserIndex()

> **getUserIndex**(): `number`

Defined in: [packages/ammo/ammo.d.ts:152](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L152)

#### Returns

`number`

#### Inherited from

[`btGhostObject`](btGhostObject.md).[`getUserIndex`](btGhostObject.md#getuserindex)

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

[`btGhostObject`](btGhostObject.md).[`setUserIndex`](btGhostObject.md#setuserindex)

***

### getUserPointer()

> **getUserPointer**(): `unknown`

Defined in: [packages/ammo/ammo.d.ts:154](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L154)

#### Returns

`unknown`

#### Inherited from

[`btGhostObject`](btGhostObject.md).[`getUserPointer`](btGhostObject.md#getuserpointer)

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

[`btGhostObject`](btGhostObject.md).[`setUserPointer`](btGhostObject.md#setuserpointer)

***

### getBroadphaseHandle()

> **getBroadphaseHandle**(): [`btBroadphaseProxy`](btBroadphaseProxy.md)

Defined in: [packages/ammo/ammo.d.ts:156](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L156)

#### Returns

[`btBroadphaseProxy`](btBroadphaseProxy.md)

#### Inherited from

[`btGhostObject`](btGhostObject.md).[`getBroadphaseHandle`](btGhostObject.md#getbroadphasehandle)

***

### getNumOverlappingObjects()

> **getNumOverlappingObjects**(): `number`

Defined in: [packages/ammo/ammo.d.ts:875](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L875)

#### Returns

`number`

#### Inherited from

[`btGhostObject`](btGhostObject.md).[`getNumOverlappingObjects`](btGhostObject.md#getnumoverlappingobjects)

***

### getOverlappingObject()

> **getOverlappingObject**(`index`): [`btCollisionObject`](btCollisionObject.md)

Defined in: [packages/ammo/ammo.d.ts:876](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L876)

#### Parameters

##### index

`number`

#### Returns

[`btCollisionObject`](btCollisionObject.md)

#### Inherited from

[`btGhostObject`](btGhostObject.md).[`getOverlappingObject`](btGhostObject.md#getoverlappingobject)
