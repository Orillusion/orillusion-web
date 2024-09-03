# Class: btCollisionWorld

[Ammo](../modules/Ammo.md).btCollisionWorld

## Hierarchy

- **`btCollisionWorld`**

  ↳ [`btDynamicsWorld`](Ammo.btDynamicsWorld.md)

### Constructors

- [constructor](Ammo.btCollisionWorld.md#constructor)

### Methods

- [getDispatcher](Ammo.btCollisionWorld.md#getdispatcher)
- [rayTest](Ammo.btCollisionWorld.md#raytest)
- [getPairCache](Ammo.btCollisionWorld.md#getpaircache)
- [getDispatchInfo](Ammo.btCollisionWorld.md#getdispatchinfo)
- [addCollisionObject](Ammo.btCollisionWorld.md#addcollisionobject)
- [removeCollisionObject](Ammo.btCollisionWorld.md#removecollisionobject)
- [getBroadphase](Ammo.btCollisionWorld.md#getbroadphase)
- [convexSweepTest](Ammo.btCollisionWorld.md#convexsweeptest)
- [contactPairTest](Ammo.btCollisionWorld.md#contactpairtest)
- [contactTest](Ammo.btCollisionWorld.md#contacttest)
- [updateSingleAabb](Ammo.btCollisionWorld.md#updatesingleaabb)
- [setDebugDrawer](Ammo.btCollisionWorld.md#setdebugdrawer)
- [getDebugDrawer](Ammo.btCollisionWorld.md#getdebugdrawer)
- [debugDrawWorld](Ammo.btCollisionWorld.md#debugdrawworld)
- [debugDrawObject](Ammo.btCollisionWorld.md#debugdrawobject)

## Constructors

### constructor

• **new btCollisionWorld**(): [`btCollisionWorld`](Ammo.btCollisionWorld.md)

#### Returns

[`btCollisionWorld`](Ammo.btCollisionWorld.md)

## Methods

### getDispatcher

▸ **getDispatcher**(): [`btDispatcher`](Ammo.btDispatcher.md)

#### Returns

[`btDispatcher`](Ammo.btDispatcher.md)

#### Defined in

[packages/ammo/ammo.d.ts:646](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L646)

___

### rayTest

▸ **rayTest**(`rayFromWorld`, `rayToWorld`, `resultCallback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rayFromWorld` | [`btVector3`](Ammo.btVector3.md) |
| `rayToWorld` | [`btVector3`](Ammo.btVector3.md) |
| `resultCallback` | [`RayResultCallback`](Ammo.RayResultCallback.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:647](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L647)

___

### getPairCache

▸ **getPairCache**(): [`btOverlappingPairCache`](Ammo.btOverlappingPairCache.md)

#### Returns

[`btOverlappingPairCache`](Ammo.btOverlappingPairCache.md)

#### Defined in

[packages/ammo/ammo.d.ts:648](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L648)

___

### getDispatchInfo

▸ **getDispatchInfo**(): [`btDispatcherInfo`](Ammo.btDispatcherInfo.md)

#### Returns

[`btDispatcherInfo`](Ammo.btDispatcherInfo.md)

#### Defined in

[packages/ammo/ammo.d.ts:649](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L649)

___

### addCollisionObject

▸ **addCollisionObject**(`collisionObject`, `collisionFilterGroup?`, `collisionFilterMask?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collisionObject` | [`btCollisionObject`](Ammo.btCollisionObject.md) |
| `collisionFilterGroup?` | `number` |
| `collisionFilterMask?` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:650](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L650)

___

### removeCollisionObject

▸ **removeCollisionObject**(`collisionObject`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collisionObject` | [`btCollisionObject`](Ammo.btCollisionObject.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:651](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L651)

___

### getBroadphase

▸ **getBroadphase**(): [`btBroadphaseInterface`](Ammo.btBroadphaseInterface.md)

#### Returns

[`btBroadphaseInterface`](Ammo.btBroadphaseInterface.md)

#### Defined in

[packages/ammo/ammo.d.ts:652](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L652)

___

### convexSweepTest

▸ **convexSweepTest**(`castShape`, `from`, `to`, `resultCallback`, `allowedCcdPenetration`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `castShape` | [`btConvexShape`](Ammo.btConvexShape.md) |
| `from` | [`btTransform`](Ammo.btTransform.md) |
| `to` | [`btTransform`](Ammo.btTransform.md) |
| `resultCallback` | [`ConvexResultCallback`](Ammo.ConvexResultCallback.md) |
| `allowedCcdPenetration` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:653](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L653)

___

### contactPairTest

▸ **contactPairTest**(`colObjA`, `colObjB`, `resultCallback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `colObjA` | [`btCollisionObject`](Ammo.btCollisionObject.md) |
| `colObjB` | [`btCollisionObject`](Ammo.btCollisionObject.md) |
| `resultCallback` | [`ContactResultCallback`](Ammo.ContactResultCallback.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:654](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L654)

___

### contactTest

▸ **contactTest**(`colObj`, `resultCallback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `colObj` | [`btCollisionObject`](Ammo.btCollisionObject.md) |
| `resultCallback` | [`ContactResultCallback`](Ammo.ContactResultCallback.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:655](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L655)

___

### updateSingleAabb

▸ **updateSingleAabb**(`colObj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `colObj` | [`btCollisionObject`](Ammo.btCollisionObject.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:656](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L656)

___

### setDebugDrawer

▸ **setDebugDrawer**(`debugDrawer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `debugDrawer` | [`btIDebugDraw`](Ammo.btIDebugDraw.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:657](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L657)

___

### getDebugDrawer

▸ **getDebugDrawer**(): [`btIDebugDraw`](Ammo.btIDebugDraw.md)

#### Returns

[`btIDebugDraw`](Ammo.btIDebugDraw.md)

#### Defined in

[packages/ammo/ammo.d.ts:658](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L658)

___

### debugDrawWorld

▸ **debugDrawWorld**(): `void`

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:659](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L659)

___

### debugDrawObject

▸ **debugDrawObject**(`worldTransform`, `shape`, `color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldTransform` | [`btTransform`](Ammo.btTransform.md) |
| `shape` | [`btCollisionShape`](Ammo.btCollisionShape.md) |
| `color` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:660](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L660)
