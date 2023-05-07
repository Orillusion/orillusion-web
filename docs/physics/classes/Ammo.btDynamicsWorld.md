# Class: btDynamicsWorld

[Ammo](../modules/Ammo.md).btDynamicsWorld

## Hierarchy

- [`btCollisionWorld`](Ammo.btCollisionWorld.md)

  ↳ **`btDynamicsWorld`**

  ↳↳ [`btDiscreteDynamicsWorld`](Ammo.btDiscreteDynamicsWorld.md)


### Constructors

- [constructor](Ammo.btDynamicsWorld.md#constructor)

### Methods

- [getDispatcher](Ammo.btDynamicsWorld.md#getdispatcher)
- [rayTest](Ammo.btDynamicsWorld.md#raytest)
- [getPairCache](Ammo.btDynamicsWorld.md#getpaircache)
- [getDispatchInfo](Ammo.btDynamicsWorld.md#getdispatchinfo)
- [addCollisionObject](Ammo.btDynamicsWorld.md#addcollisionobject)
- [removeCollisionObject](Ammo.btDynamicsWorld.md#removecollisionobject)
- [getBroadphase](Ammo.btDynamicsWorld.md#getbroadphase)
- [convexSweepTest](Ammo.btDynamicsWorld.md#convexsweeptest)
- [contactPairTest](Ammo.btDynamicsWorld.md#contactpairtest)
- [contactTest](Ammo.btDynamicsWorld.md#contacttest)
- [updateSingleAabb](Ammo.btDynamicsWorld.md#updatesingleaabb)
- [setDebugDrawer](Ammo.btDynamicsWorld.md#setdebugdrawer)
- [getDebugDrawer](Ammo.btDynamicsWorld.md#getdebugdrawer)
- [debugDrawWorld](Ammo.btDynamicsWorld.md#debugdrawworld)
- [debugDrawObject](Ammo.btDynamicsWorld.md#debugdrawobject)
- [addAction](Ammo.btDynamicsWorld.md#addaction)
- [removeAction](Ammo.btDynamicsWorld.md#removeaction)
- [getSolverInfo](Ammo.btDynamicsWorld.md#getsolverinfo)
- [setInternalTickCallback](Ammo.btDynamicsWorld.md#setinternaltickcallback)

## Constructors

### constructor

• **new btDynamicsWorld**()

#### Inherited from

[btCollisionWorld](Ammo.btCollisionWorld.md).[constructor](Ammo.btCollisionWorld.md#constructor)

## Methods

### getDispatcher

▸ **getDispatcher**(): [`btDispatcher`](Ammo.btDispatcher.md)

#### Returns

[`btDispatcher`](Ammo.btDispatcher.md)

#### Inherited from

[btCollisionWorld](Ammo.btCollisionWorld.md).[getDispatcher](Ammo.btCollisionWorld.md#getdispatcher)

#### Defined in

[packages/ammo/ammo.d.ts:631](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L631)

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

#### Inherited from

[btCollisionWorld](Ammo.btCollisionWorld.md).[rayTest](Ammo.btCollisionWorld.md#raytest)

#### Defined in

[packages/ammo/ammo.d.ts:632](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L632)

___

### getPairCache

▸ **getPairCache**(): [`btOverlappingPairCache`](Ammo.btOverlappingPairCache.md)

#### Returns

[`btOverlappingPairCache`](Ammo.btOverlappingPairCache.md)

#### Inherited from

[btCollisionWorld](Ammo.btCollisionWorld.md).[getPairCache](Ammo.btCollisionWorld.md#getpaircache)

#### Defined in

[packages/ammo/ammo.d.ts:633](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L633)

___

### getDispatchInfo

▸ **getDispatchInfo**(): [`btDispatcherInfo`](Ammo.btDispatcherInfo.md)

#### Returns

[`btDispatcherInfo`](Ammo.btDispatcherInfo.md)

#### Inherited from

[btCollisionWorld](Ammo.btCollisionWorld.md).[getDispatchInfo](Ammo.btCollisionWorld.md#getdispatchinfo)

#### Defined in

[packages/ammo/ammo.d.ts:634](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L634)

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

#### Inherited from

[btCollisionWorld](Ammo.btCollisionWorld.md).[addCollisionObject](Ammo.btCollisionWorld.md#addcollisionobject)

#### Defined in

[packages/ammo/ammo.d.ts:635](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L635)

___

### removeCollisionObject

▸ **removeCollisionObject**(`collisionObject`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collisionObject` | [`btCollisionObject`](Ammo.btCollisionObject.md) |

#### Returns

`void`

#### Inherited from

[btCollisionWorld](Ammo.btCollisionWorld.md).[removeCollisionObject](Ammo.btCollisionWorld.md#removecollisionobject)

#### Defined in

[packages/ammo/ammo.d.ts:636](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L636)

___

### getBroadphase

▸ **getBroadphase**(): [`btBroadphaseInterface`](Ammo.btBroadphaseInterface.md)

#### Returns

[`btBroadphaseInterface`](Ammo.btBroadphaseInterface.md)

#### Inherited from

[btCollisionWorld](Ammo.btCollisionWorld.md).[getBroadphase](Ammo.btCollisionWorld.md#getbroadphase)

#### Defined in

[packages/ammo/ammo.d.ts:637](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L637)

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

#### Inherited from

[btCollisionWorld](Ammo.btCollisionWorld.md).[convexSweepTest](Ammo.btCollisionWorld.md#convexsweeptest)

#### Defined in

[packages/ammo/ammo.d.ts:638](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L638)

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

#### Inherited from

[btCollisionWorld](Ammo.btCollisionWorld.md).[contactPairTest](Ammo.btCollisionWorld.md#contactpairtest)

#### Defined in

[packages/ammo/ammo.d.ts:639](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L639)

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

#### Inherited from

[btCollisionWorld](Ammo.btCollisionWorld.md).[contactTest](Ammo.btCollisionWorld.md#contacttest)

#### Defined in

[packages/ammo/ammo.d.ts:640](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L640)

___

### updateSingleAabb

▸ **updateSingleAabb**(`colObj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `colObj` | [`btCollisionObject`](Ammo.btCollisionObject.md) |

#### Returns

`void`

#### Inherited from

[btCollisionWorld](Ammo.btCollisionWorld.md).[updateSingleAabb](Ammo.btCollisionWorld.md#updatesingleaabb)

#### Defined in

[packages/ammo/ammo.d.ts:641](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L641)

___

### setDebugDrawer

▸ **setDebugDrawer**(`debugDrawer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `debugDrawer` | [`btIDebugDraw`](Ammo.btIDebugDraw.md) |

#### Returns

`void`

#### Inherited from

[btCollisionWorld](Ammo.btCollisionWorld.md).[setDebugDrawer](Ammo.btCollisionWorld.md#setdebugdrawer)

#### Defined in

[packages/ammo/ammo.d.ts:642](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L642)

___

### getDebugDrawer

▸ **getDebugDrawer**(): [`btIDebugDraw`](Ammo.btIDebugDraw.md)

#### Returns

[`btIDebugDraw`](Ammo.btIDebugDraw.md)

#### Inherited from

[btCollisionWorld](Ammo.btCollisionWorld.md).[getDebugDrawer](Ammo.btCollisionWorld.md#getdebugdrawer)

#### Defined in

[packages/ammo/ammo.d.ts:643](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L643)

___

### debugDrawWorld

▸ **debugDrawWorld**(): `void`

#### Returns

`void`

#### Inherited from

[btCollisionWorld](Ammo.btCollisionWorld.md).[debugDrawWorld](Ammo.btCollisionWorld.md#debugdrawworld)

#### Defined in

[packages/ammo/ammo.d.ts:644](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L644)

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

#### Inherited from

[btCollisionWorld](Ammo.btCollisionWorld.md).[debugDrawObject](Ammo.btCollisionWorld.md#debugdrawobject)

#### Defined in

[packages/ammo/ammo.d.ts:645](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L645)

___

### addAction

▸ **addAction**(`action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`btActionInterface`](Ammo.btActionInterface.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:657](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L657)

___

### removeAction

▸ **removeAction**(`action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`btActionInterface`](Ammo.btActionInterface.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:658](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L658)

___

### getSolverInfo

▸ **getSolverInfo**(): [`btContactSolverInfo`](Ammo.btContactSolverInfo.md)

#### Returns

[`btContactSolverInfo`](Ammo.btContactSolverInfo.md)

#### Defined in

[packages/ammo/ammo.d.ts:659](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L659)

___

### setInternalTickCallback

▸ **setInternalTickCallback**(`cb`, `worldUserInfo?`, `isPreTick?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`btInternalTickCallback`](../types/Ammo.btInternalTickCallback.md) |
| `worldUserInfo?` | `unknown` |
| `isPreTick?` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:660](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L660)
