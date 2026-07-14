[**@orillusion/physics**](../../../../README.md)

***

# Class: btDynamicsWorld

Defined in: [packages/ammo/ammo.d.ts:671](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L671)

## Extends

- [`btCollisionWorld`](btCollisionWorld.md)

## Extended by

- [`btDiscreteDynamicsWorld`](btDiscreteDynamicsWorld.md)

## Constructors

### Constructor

> **new btDynamicsWorld**(): `btDynamicsWorld`

#### Returns

`btDynamicsWorld`

#### Inherited from

[`btCollisionWorld`](btCollisionWorld.md).[`constructor`](btCollisionWorld.md#constructor)

## Methods

### getDispatcher()

> **getDispatcher**(): [`btDispatcher`](btDispatcher.md)

Defined in: [packages/ammo/ammo.d.ts:646](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L646)

#### Returns

[`btDispatcher`](btDispatcher.md)

#### Inherited from

[`btCollisionWorld`](btCollisionWorld.md).[`getDispatcher`](btCollisionWorld.md#getdispatcher)

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

[`btCollisionWorld`](btCollisionWorld.md).[`rayTest`](btCollisionWorld.md#raytest)

***

### getPairCache()

> **getPairCache**(): [`btOverlappingPairCache`](btOverlappingPairCache.md)

Defined in: [packages/ammo/ammo.d.ts:648](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L648)

#### Returns

[`btOverlappingPairCache`](btOverlappingPairCache.md)

#### Inherited from

[`btCollisionWorld`](btCollisionWorld.md).[`getPairCache`](btCollisionWorld.md#getpaircache)

***

### getDispatchInfo()

> **getDispatchInfo**(): [`btDispatcherInfo`](btDispatcherInfo.md)

Defined in: [packages/ammo/ammo.d.ts:649](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L649)

#### Returns

[`btDispatcherInfo`](btDispatcherInfo.md)

#### Inherited from

[`btCollisionWorld`](btCollisionWorld.md).[`getDispatchInfo`](btCollisionWorld.md#getdispatchinfo)

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

[`btCollisionWorld`](btCollisionWorld.md).[`addCollisionObject`](btCollisionWorld.md#addcollisionobject)

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

[`btCollisionWorld`](btCollisionWorld.md).[`removeCollisionObject`](btCollisionWorld.md#removecollisionobject)

***

### getBroadphase()

> **getBroadphase**(): [`btBroadphaseInterface`](btBroadphaseInterface.md)

Defined in: [packages/ammo/ammo.d.ts:652](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L652)

#### Returns

[`btBroadphaseInterface`](btBroadphaseInterface.md)

#### Inherited from

[`btCollisionWorld`](btCollisionWorld.md).[`getBroadphase`](btCollisionWorld.md#getbroadphase)

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

[`btCollisionWorld`](btCollisionWorld.md).[`convexSweepTest`](btCollisionWorld.md#convexsweeptest)

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

[`btCollisionWorld`](btCollisionWorld.md).[`contactPairTest`](btCollisionWorld.md#contactpairtest)

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

[`btCollisionWorld`](btCollisionWorld.md).[`contactTest`](btCollisionWorld.md#contacttest)

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

[`btCollisionWorld`](btCollisionWorld.md).[`updateSingleAabb`](btCollisionWorld.md#updatesingleaabb)

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

[`btCollisionWorld`](btCollisionWorld.md).[`setDebugDrawer`](btCollisionWorld.md#setdebugdrawer)

***

### getDebugDrawer()

> **getDebugDrawer**(): [`btIDebugDraw`](btIDebugDraw.md)

Defined in: [packages/ammo/ammo.d.ts:658](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L658)

#### Returns

[`btIDebugDraw`](btIDebugDraw.md)

#### Inherited from

[`btCollisionWorld`](btCollisionWorld.md).[`getDebugDrawer`](btCollisionWorld.md#getdebugdrawer)

***

### debugDrawWorld()

> **debugDrawWorld**(): `void`

Defined in: [packages/ammo/ammo.d.ts:659](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L659)

#### Returns

`void`

#### Inherited from

[`btCollisionWorld`](btCollisionWorld.md).[`debugDrawWorld`](btCollisionWorld.md#debugdrawworld)

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

[`btCollisionWorld`](btCollisionWorld.md).[`debugDrawObject`](btCollisionWorld.md#debugdrawobject)

***

### addAction()

> **addAction**(`action`): `void`

Defined in: [packages/ammo/ammo.d.ts:672](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L672)

#### Parameters

##### action

[`btActionInterface`](btActionInterface.md)

#### Returns

`void`

***

### removeAction()

> **removeAction**(`action`): `void`

Defined in: [packages/ammo/ammo.d.ts:673](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L673)

#### Parameters

##### action

[`btActionInterface`](btActionInterface.md)

#### Returns

`void`

***

### getSolverInfo()

> **getSolverInfo**(): [`btContactSolverInfo`](btContactSolverInfo.md)

Defined in: [packages/ammo/ammo.d.ts:674](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L674)

#### Returns

[`btContactSolverInfo`](btContactSolverInfo.md)

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
