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

• **new btCollisionWorld**()

## Methods

### getDispatcher

▸ **getDispatcher**(): [`btDispatcher`](Ammo.btDispatcher.md)

#### Returns

[`btDispatcher`](Ammo.btDispatcher.md)

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

#### Defined in

[packages/ammo/ammo.d.ts:632](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L632)

___

### getPairCache

▸ **getPairCache**(): [`btOverlappingPairCache`](Ammo.btOverlappingPairCache.md)

#### Returns

[`btOverlappingPairCache`](Ammo.btOverlappingPairCache.md)

#### Defined in

[packages/ammo/ammo.d.ts:633](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L633)

___

### getDispatchInfo

▸ **getDispatchInfo**(): [`btDispatcherInfo`](Ammo.btDispatcherInfo.md)

#### Returns

[`btDispatcherInfo`](Ammo.btDispatcherInfo.md)

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

#### Defined in

[packages/ammo/ammo.d.ts:636](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L636)

___

### getBroadphase

▸ **getBroadphase**(): [`btBroadphaseInterface`](Ammo.btBroadphaseInterface.md)

#### Returns

[`btBroadphaseInterface`](Ammo.btBroadphaseInterface.md)

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

#### Defined in

[packages/ammo/ammo.d.ts:642](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L642)

___

### getDebugDrawer

▸ **getDebugDrawer**(): [`btIDebugDraw`](Ammo.btIDebugDraw.md)

#### Returns

[`btIDebugDraw`](Ammo.btIDebugDraw.md)

#### Defined in

[packages/ammo/ammo.d.ts:643](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L643)

___

### debugDrawWorld

▸ **debugDrawWorld**(): `void`

#### Returns

`void`

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

#### Defined in

[packages/ammo/ammo.d.ts:645](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L645)
