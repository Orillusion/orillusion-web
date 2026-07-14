[**@orillusion/physics**](../../../../README.md)

***

# Class: btDiscreteDynamicsWorld

Defined in: [packages/ammo/ammo.d.ts:677](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L677)

## Extends

- [`btDynamicsWorld`](btDynamicsWorld.md)

## Extended by

- [`btSoftRigidDynamicsWorld`](btSoftRigidDynamicsWorld.md)

## Constructors

### Constructor

> **new btDiscreteDynamicsWorld**(`dispatcher`, `pairCache`, `constraintSolver`, `collisionConfiguration`): `btDiscreteDynamicsWorld`

Defined in: [packages/ammo/ammo.d.ts:678](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L678)

#### Parameters

##### dispatcher

[`btDispatcher`](btDispatcher.md)

##### pairCache

[`btBroadphaseInterface`](btBroadphaseInterface.md)

##### constraintSolver

[`btConstraintSolver`](btConstraintSolver.md)

##### collisionConfiguration

[`btCollisionConfiguration`](btCollisionConfiguration.md)

#### Returns

`btDiscreteDynamicsWorld`

#### Overrides

[`btDynamicsWorld`](btDynamicsWorld.md).[`constructor`](btDynamicsWorld.md#constructor)

## Methods

### getDispatcher()

> **getDispatcher**(): [`btDispatcher`](btDispatcher.md)

Defined in: [packages/ammo/ammo.d.ts:646](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L646)

#### Returns

[`btDispatcher`](btDispatcher.md)

#### Inherited from

[`btDynamicsWorld`](btDynamicsWorld.md).[`getDispatcher`](btDynamicsWorld.md#getdispatcher)

***

### rayTest()

> **rayTest**(`rayFromWorld`, `rayToWorld`, `resultCallback`): `void`

Defined in: [packages/ammo/ammo.d.ts:647](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L647)

#### Parameters

##### rayFromWorld

[`btVector3`](btVector3.md)

##### rayToWorld

[`btVector3`](btVector3.md)

##### resultCallback

[`RayResultCallback`](RayResultCallback.md)

#### Returns

`void`

#### Inherited from

[`btDynamicsWorld`](btDynamicsWorld.md).[`rayTest`](btDynamicsWorld.md#raytest)

***

### getPairCache()

> **getPairCache**(): [`btOverlappingPairCache`](btOverlappingPairCache.md)

Defined in: [packages/ammo/ammo.d.ts:648](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L648)

#### Returns

[`btOverlappingPairCache`](btOverlappingPairCache.md)

#### Inherited from

[`btDynamicsWorld`](btDynamicsWorld.md).[`getPairCache`](btDynamicsWorld.md#getpaircache)

***

### getDispatchInfo()

> **getDispatchInfo**(): [`btDispatcherInfo`](btDispatcherInfo.md)

Defined in: [packages/ammo/ammo.d.ts:649](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L649)

#### Returns

[`btDispatcherInfo`](btDispatcherInfo.md)

#### Inherited from

[`btDynamicsWorld`](btDynamicsWorld.md).[`getDispatchInfo`](btDynamicsWorld.md#getdispatchinfo)

***

### addCollisionObject()

> **addCollisionObject**(`collisionObject`, `collisionFilterGroup?`, `collisionFilterMask?`): `void`

Defined in: [packages/ammo/ammo.d.ts:650](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L650)

#### Parameters

##### collisionObject

[`btCollisionObject`](btCollisionObject.md)

##### collisionFilterGroup?

`number`

##### collisionFilterMask?

`number`

#### Returns

`void`

#### Inherited from

[`btDynamicsWorld`](btDynamicsWorld.md).[`addCollisionObject`](btDynamicsWorld.md#addcollisionobject)

***

### removeCollisionObject()

> **removeCollisionObject**(`collisionObject`): `void`

Defined in: [packages/ammo/ammo.d.ts:651](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L651)

#### Parameters

##### collisionObject

[`btCollisionObject`](btCollisionObject.md)

#### Returns

`void`

#### Inherited from

[`btDynamicsWorld`](btDynamicsWorld.md).[`removeCollisionObject`](btDynamicsWorld.md#removecollisionobject)

***

### getBroadphase()

> **getBroadphase**(): [`btBroadphaseInterface`](btBroadphaseInterface.md)

Defined in: [packages/ammo/ammo.d.ts:652](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L652)

#### Returns

[`btBroadphaseInterface`](btBroadphaseInterface.md)

#### Inherited from

[`btDynamicsWorld`](btDynamicsWorld.md).[`getBroadphase`](btDynamicsWorld.md#getbroadphase)

***

### convexSweepTest()

> **convexSweepTest**(`castShape`, `from`, `to`, `resultCallback`, `allowedCcdPenetration`): `void`

Defined in: [packages/ammo/ammo.d.ts:653](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L653)

#### Parameters

##### castShape

[`btConvexShape`](btConvexShape.md)

##### from

[`btTransform`](btTransform.md)

##### to

[`btTransform`](btTransform.md)

##### resultCallback

[`ConvexResultCallback`](ConvexResultCallback.md)

##### allowedCcdPenetration

`number`

#### Returns

`void`

#### Inherited from

[`btDynamicsWorld`](btDynamicsWorld.md).[`convexSweepTest`](btDynamicsWorld.md#convexsweeptest)

***

### contactPairTest()

> **contactPairTest**(`colObjA`, `colObjB`, `resultCallback`): `void`

Defined in: [packages/ammo/ammo.d.ts:654](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L654)

#### Parameters

##### colObjA

[`btCollisionObject`](btCollisionObject.md)

##### colObjB

[`btCollisionObject`](btCollisionObject.md)

##### resultCallback

[`ContactResultCallback`](ContactResultCallback.md)

#### Returns

`void`

#### Inherited from

[`btDynamicsWorld`](btDynamicsWorld.md).[`contactPairTest`](btDynamicsWorld.md#contactpairtest)

***

### contactTest()

> **contactTest**(`colObj`, `resultCallback`): `void`

Defined in: [packages/ammo/ammo.d.ts:655](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L655)

#### Parameters

##### colObj

[`btCollisionObject`](btCollisionObject.md)

##### resultCallback

[`ContactResultCallback`](ContactResultCallback.md)

#### Returns

`void`

#### Inherited from

[`btDynamicsWorld`](btDynamicsWorld.md).[`contactTest`](btDynamicsWorld.md#contacttest)

***

### updateSingleAabb()

> **updateSingleAabb**(`colObj`): `void`

Defined in: [packages/ammo/ammo.d.ts:656](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L656)

#### Parameters

##### colObj

[`btCollisionObject`](btCollisionObject.md)

#### Returns

`void`

#### Inherited from

[`btDynamicsWorld`](btDynamicsWorld.md).[`updateSingleAabb`](btDynamicsWorld.md#updatesingleaabb)

***

### setDebugDrawer()

> **setDebugDrawer**(`debugDrawer`): `void`

Defined in: [packages/ammo/ammo.d.ts:657](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L657)

#### Parameters

##### debugDrawer

[`btIDebugDraw`](btIDebugDraw.md)

#### Returns

`void`

#### Inherited from

[`btDynamicsWorld`](btDynamicsWorld.md).[`setDebugDrawer`](btDynamicsWorld.md#setdebugdrawer)

***

### getDebugDrawer()

> **getDebugDrawer**(): [`btIDebugDraw`](btIDebugDraw.md)

Defined in: [packages/ammo/ammo.d.ts:658](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L658)

#### Returns

[`btIDebugDraw`](btIDebugDraw.md)

#### Inherited from

[`btDynamicsWorld`](btDynamicsWorld.md).[`getDebugDrawer`](btDynamicsWorld.md#getdebugdrawer)

***

### debugDrawWorld()

> **debugDrawWorld**(): `void`

Defined in: [packages/ammo/ammo.d.ts:659](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L659)

#### Returns

`void`

#### Inherited from

[`btDynamicsWorld`](btDynamicsWorld.md).[`debugDrawWorld`](btDynamicsWorld.md#debugdrawworld)

***

### debugDrawObject()

> **debugDrawObject**(`worldTransform`, `shape`, `color`): `void`

Defined in: [packages/ammo/ammo.d.ts:660](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L660)

#### Parameters

##### worldTransform

[`btTransform`](btTransform.md)

##### shape

[`btCollisionShape`](btCollisionShape.md)

##### color

[`btVector3`](btVector3.md)

#### Returns

`void`

#### Inherited from

[`btDynamicsWorld`](btDynamicsWorld.md).[`debugDrawObject`](btDynamicsWorld.md#debugdrawobject)

***

### addAction()

> **addAction**(`action`): `void`

Defined in: [packages/ammo/ammo.d.ts:672](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L672)

#### Parameters

##### action

[`btActionInterface`](btActionInterface.md)

#### Returns

`void`

#### Inherited from

[`btDynamicsWorld`](btDynamicsWorld.md).[`addAction`](btDynamicsWorld.md#addaction)

***

### removeAction()

> **removeAction**(`action`): `void`

Defined in: [packages/ammo/ammo.d.ts:673](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L673)

#### Parameters

##### action

[`btActionInterface`](btActionInterface.md)

#### Returns

`void`

#### Inherited from

[`btDynamicsWorld`](btDynamicsWorld.md).[`removeAction`](btDynamicsWorld.md#removeaction)

***

### getSolverInfo()

> **getSolverInfo**(): [`btContactSolverInfo`](btContactSolverInfo.md)

Defined in: [packages/ammo/ammo.d.ts:674](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L674)

#### Returns

[`btContactSolverInfo`](btContactSolverInfo.md)

#### Inherited from

[`btDynamicsWorld`](btDynamicsWorld.md).[`getSolverInfo`](btDynamicsWorld.md#getsolverinfo)

***

### setInternalTickCallback()

> **setInternalTickCallback**(`cb`, `worldUserInfo?`, `isPreTick?`): `void`

Defined in: [packages/ammo/ammo.d.ts:675](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L675)

#### Parameters

##### cb

[`btInternalTickCallback`](../type-aliases/btInternalTickCallback.md)

##### worldUserInfo?

`unknown`

##### isPreTick?

`boolean`

#### Returns

`void`

#### Inherited from

[`btDynamicsWorld`](btDynamicsWorld.md).[`setInternalTickCallback`](btDynamicsWorld.md#setinternaltickcallback)

***

### setGravity()

> **setGravity**(`gravity`): `void`

Defined in: [packages/ammo/ammo.d.ts:679](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L679)

#### Parameters

##### gravity

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### getGravity()

> **getGravity**(): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:680](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L680)

#### Returns

[`btVector3`](btVector3.md)

***

### addRigidBody()

#### Call Signature

> **addRigidBody**(`body`): `void`

Defined in: [packages/ammo/ammo.d.ts:681](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L681)

##### Parameters

###### body

[`btRigidBody`](btRigidBody.md)

##### Returns

`void`

#### Call Signature

> **addRigidBody**(`body`, `group`, `mask`): `void`

Defined in: [packages/ammo/ammo.d.ts:682](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L682)

##### Parameters

###### body

[`btRigidBody`](btRigidBody.md)

###### group

`number`

###### mask

`number`

##### Returns

`void`

***

### removeRigidBody()

> **removeRigidBody**(`body`): `void`

Defined in: [packages/ammo/ammo.d.ts:683](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L683)

#### Parameters

##### body

[`btRigidBody`](btRigidBody.md)

#### Returns

`void`

***

### addConstraint()

> **addConstraint**(`constraint`, `disableCollisionsBetweenLinkedBodies?`): `void`

Defined in: [packages/ammo/ammo.d.ts:684](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L684)

#### Parameters

##### constraint

[`btTypedConstraint`](btTypedConstraint.md)

##### disableCollisionsBetweenLinkedBodies?

`boolean`

#### Returns

`void`

***

### removeConstraint()

> **removeConstraint**(`constraint`): `void`

Defined in: [packages/ammo/ammo.d.ts:685](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L685)

#### Parameters

##### constraint

[`btTypedConstraint`](btTypedConstraint.md)

#### Returns

`void`

***

### stepSimulation()

> **stepSimulation**(`timeStep`, `maxSubSteps?`, `fixedTimeStep?`): `number`

Defined in: [packages/ammo/ammo.d.ts:686](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L686)

#### Parameters

##### timeStep

`number`

##### maxSubSteps?

`number`

##### fixedTimeStep?

`number`

#### Returns

`number`

***

### setContactAddedCallback()

> **setContactAddedCallback**(`funcpointer`): `void`

Defined in: [packages/ammo/ammo.d.ts:687](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L687)

#### Parameters

##### funcpointer

`number`

#### Returns

`void`

***

### setContactProcessedCallback()

> **setContactProcessedCallback**(`funcpointer`): `void`

Defined in: [packages/ammo/ammo.d.ts:688](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L688)

#### Parameters

##### funcpointer

`number`

#### Returns

`void`

***

### setContactDestroyedCallback()

> **setContactDestroyedCallback**(`funcpointer`): `void`

Defined in: [packages/ammo/ammo.d.ts:689](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L689)

#### Parameters

##### funcpointer

`number`

#### Returns

`void`
