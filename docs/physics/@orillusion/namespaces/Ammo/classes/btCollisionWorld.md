[**@orillusion/physics**](../../../../README.md)

***

# Class: btCollisionWorld

Defined in: [packages/ammo/ammo.d.ts:645](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L645)

## Extended by

- [`btDynamicsWorld`](btDynamicsWorld.md)

## Constructors

### Constructor

> **new btCollisionWorld**(): `btCollisionWorld`

#### Returns

`btCollisionWorld`

## Methods

### getDispatcher()

> **getDispatcher**(): [`btDispatcher`](btDispatcher.md)

Defined in: [packages/ammo/ammo.d.ts:646](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L646)

#### Returns

[`btDispatcher`](btDispatcher.md)

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

***

### getPairCache()

> **getPairCache**(): [`btOverlappingPairCache`](btOverlappingPairCache.md)

Defined in: [packages/ammo/ammo.d.ts:648](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L648)

#### Returns

[`btOverlappingPairCache`](btOverlappingPairCache.md)

***

### getDispatchInfo()

> **getDispatchInfo**(): [`btDispatcherInfo`](btDispatcherInfo.md)

Defined in: [packages/ammo/ammo.d.ts:649](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L649)

#### Returns

[`btDispatcherInfo`](btDispatcherInfo.md)

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

***

### removeCollisionObject()

> **removeCollisionObject**(`collisionObject`): `void`

Defined in: [packages/ammo/ammo.d.ts:651](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L651)

#### Parameters

##### collisionObject

[`btCollisionObject`](btCollisionObject.md)

#### Returns

`void`

***

### getBroadphase()

> **getBroadphase**(): [`btBroadphaseInterface`](btBroadphaseInterface.md)

Defined in: [packages/ammo/ammo.d.ts:652](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L652)

#### Returns

[`btBroadphaseInterface`](btBroadphaseInterface.md)

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

***

### updateSingleAabb()

> **updateSingleAabb**(`colObj`): `void`

Defined in: [packages/ammo/ammo.d.ts:656](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L656)

#### Parameters

##### colObj

[`btCollisionObject`](btCollisionObject.md)

#### Returns

`void`

***

### setDebugDrawer()

> **setDebugDrawer**(`debugDrawer`): `void`

Defined in: [packages/ammo/ammo.d.ts:657](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L657)

#### Parameters

##### debugDrawer

[`btIDebugDraw`](btIDebugDraw.md)

#### Returns

`void`

***

### getDebugDrawer()

> **getDebugDrawer**(): [`btIDebugDraw`](btIDebugDraw.md)

Defined in: [packages/ammo/ammo.d.ts:658](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L658)

#### Returns

[`btIDebugDraw`](btIDebugDraw.md)

***

### debugDrawWorld()

> **debugDrawWorld**(): `void`

Defined in: [packages/ammo/ammo.d.ts:659](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L659)

#### Returns

`void`

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
