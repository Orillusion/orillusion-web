# Class: btDiscreteDynamicsWorld

[Ammo](../modules/Ammo.md).btDiscreteDynamicsWorld

## Hierarchy

- [`btDynamicsWorld`](Ammo.btDynamicsWorld.md)

  ↳ **`btDiscreteDynamicsWorld`**

  ↳↳ [`btSoftRigidDynamicsWorld`](Ammo.btSoftRigidDynamicsWorld.md)

### Constructors

- [constructor](Ammo.btDiscreteDynamicsWorld.md#constructor)

### Methods

- [getDispatcher](Ammo.btDiscreteDynamicsWorld.md#getdispatcher)
- [rayTest](Ammo.btDiscreteDynamicsWorld.md#raytest)
- [getPairCache](Ammo.btDiscreteDynamicsWorld.md#getpaircache)
- [getDispatchInfo](Ammo.btDiscreteDynamicsWorld.md#getdispatchinfo)
- [addCollisionObject](Ammo.btDiscreteDynamicsWorld.md#addcollisionobject)
- [removeCollisionObject](Ammo.btDiscreteDynamicsWorld.md#removecollisionobject)
- [getBroadphase](Ammo.btDiscreteDynamicsWorld.md#getbroadphase)
- [convexSweepTest](Ammo.btDiscreteDynamicsWorld.md#convexsweeptest)
- [contactPairTest](Ammo.btDiscreteDynamicsWorld.md#contactpairtest)
- [contactTest](Ammo.btDiscreteDynamicsWorld.md#contacttest)
- [updateSingleAabb](Ammo.btDiscreteDynamicsWorld.md#updatesingleaabb)
- [setDebugDrawer](Ammo.btDiscreteDynamicsWorld.md#setdebugdrawer)
- [getDebugDrawer](Ammo.btDiscreteDynamicsWorld.md#getdebugdrawer)
- [debugDrawWorld](Ammo.btDiscreteDynamicsWorld.md#debugdrawworld)
- [debugDrawObject](Ammo.btDiscreteDynamicsWorld.md#debugdrawobject)
- [addAction](Ammo.btDiscreteDynamicsWorld.md#addaction)
- [removeAction](Ammo.btDiscreteDynamicsWorld.md#removeaction)
- [getSolverInfo](Ammo.btDiscreteDynamicsWorld.md#getsolverinfo)
- [setInternalTickCallback](Ammo.btDiscreteDynamicsWorld.md#setinternaltickcallback)
- [setGravity](Ammo.btDiscreteDynamicsWorld.md#setgravity)
- [getGravity](Ammo.btDiscreteDynamicsWorld.md#getgravity)
- [addRigidBody](Ammo.btDiscreteDynamicsWorld.md#addrigidbody)
- [removeRigidBody](Ammo.btDiscreteDynamicsWorld.md#removerigidbody)
- [addConstraint](Ammo.btDiscreteDynamicsWorld.md#addconstraint)
- [removeConstraint](Ammo.btDiscreteDynamicsWorld.md#removeconstraint)
- [stepSimulation](Ammo.btDiscreteDynamicsWorld.md#stepsimulation)
- [setContactAddedCallback](Ammo.btDiscreteDynamicsWorld.md#setcontactaddedcallback)
- [setContactProcessedCallback](Ammo.btDiscreteDynamicsWorld.md#setcontactprocessedcallback)
- [setContactDestroyedCallback](Ammo.btDiscreteDynamicsWorld.md#setcontactdestroyedcallback)

## Constructors

### constructor

• **new btDiscreteDynamicsWorld**(`dispatcher`, `pairCache`, `constraintSolver`, `collisionConfiguration`): [`btDiscreteDynamicsWorld`](Ammo.btDiscreteDynamicsWorld.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`btDispatcher`](Ammo.btDispatcher.md) |
| `pairCache` | [`btBroadphaseInterface`](Ammo.btBroadphaseInterface.md) |
| `constraintSolver` | [`btConstraintSolver`](Ammo.btConstraintSolver.md) |
| `collisionConfiguration` | [`btCollisionConfiguration`](Ammo.btCollisionConfiguration.md) |

#### Returns

[`btDiscreteDynamicsWorld`](Ammo.btDiscreteDynamicsWorld.md)

#### Overrides

[btDynamicsWorld](Ammo.btDynamicsWorld.md).[constructor](Ammo.btDynamicsWorld.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:678](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L678)

## Methods

### getDispatcher

▸ **getDispatcher**(): [`btDispatcher`](Ammo.btDispatcher.md)

#### Returns

[`btDispatcher`](Ammo.btDispatcher.md)

#### Inherited from

[btDynamicsWorld](Ammo.btDynamicsWorld.md).[getDispatcher](Ammo.btDynamicsWorld.md#getdispatcher)

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

#### Inherited from

[btDynamicsWorld](Ammo.btDynamicsWorld.md).[rayTest](Ammo.btDynamicsWorld.md#raytest)

#### Defined in

[packages/ammo/ammo.d.ts:647](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L647)

___

### getPairCache

▸ **getPairCache**(): [`btOverlappingPairCache`](Ammo.btOverlappingPairCache.md)

#### Returns

[`btOverlappingPairCache`](Ammo.btOverlappingPairCache.md)

#### Inherited from

[btDynamicsWorld](Ammo.btDynamicsWorld.md).[getPairCache](Ammo.btDynamicsWorld.md#getpaircache)

#### Defined in

[packages/ammo/ammo.d.ts:648](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L648)

___

### getDispatchInfo

▸ **getDispatchInfo**(): [`btDispatcherInfo`](Ammo.btDispatcherInfo.md)

#### Returns

[`btDispatcherInfo`](Ammo.btDispatcherInfo.md)

#### Inherited from

[btDynamicsWorld](Ammo.btDynamicsWorld.md).[getDispatchInfo](Ammo.btDynamicsWorld.md#getdispatchinfo)

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

#### Inherited from

[btDynamicsWorld](Ammo.btDynamicsWorld.md).[addCollisionObject](Ammo.btDynamicsWorld.md#addcollisionobject)

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

#### Inherited from

[btDynamicsWorld](Ammo.btDynamicsWorld.md).[removeCollisionObject](Ammo.btDynamicsWorld.md#removecollisionobject)

#### Defined in

[packages/ammo/ammo.d.ts:651](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L651)

___

### getBroadphase

▸ **getBroadphase**(): [`btBroadphaseInterface`](Ammo.btBroadphaseInterface.md)

#### Returns

[`btBroadphaseInterface`](Ammo.btBroadphaseInterface.md)

#### Inherited from

[btDynamicsWorld](Ammo.btDynamicsWorld.md).[getBroadphase](Ammo.btDynamicsWorld.md#getbroadphase)

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

#### Inherited from

[btDynamicsWorld](Ammo.btDynamicsWorld.md).[convexSweepTest](Ammo.btDynamicsWorld.md#convexsweeptest)

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

#### Inherited from

[btDynamicsWorld](Ammo.btDynamicsWorld.md).[contactPairTest](Ammo.btDynamicsWorld.md#contactpairtest)

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

#### Inherited from

[btDynamicsWorld](Ammo.btDynamicsWorld.md).[contactTest](Ammo.btDynamicsWorld.md#contacttest)

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

#### Inherited from

[btDynamicsWorld](Ammo.btDynamicsWorld.md).[updateSingleAabb](Ammo.btDynamicsWorld.md#updatesingleaabb)

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

#### Inherited from

[btDynamicsWorld](Ammo.btDynamicsWorld.md).[setDebugDrawer](Ammo.btDynamicsWorld.md#setdebugdrawer)

#### Defined in

[packages/ammo/ammo.d.ts:657](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L657)

___

### getDebugDrawer

▸ **getDebugDrawer**(): [`btIDebugDraw`](Ammo.btIDebugDraw.md)

#### Returns

[`btIDebugDraw`](Ammo.btIDebugDraw.md)

#### Inherited from

[btDynamicsWorld](Ammo.btDynamicsWorld.md).[getDebugDrawer](Ammo.btDynamicsWorld.md#getdebugdrawer)

#### Defined in

[packages/ammo/ammo.d.ts:658](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L658)

___

### debugDrawWorld

▸ **debugDrawWorld**(): `void`

#### Returns

`void`

#### Inherited from

[btDynamicsWorld](Ammo.btDynamicsWorld.md).[debugDrawWorld](Ammo.btDynamicsWorld.md#debugdrawworld)

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

#### Inherited from

[btDynamicsWorld](Ammo.btDynamicsWorld.md).[debugDrawObject](Ammo.btDynamicsWorld.md#debugdrawobject)

#### Defined in

[packages/ammo/ammo.d.ts:660](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L660)

___

### addAction

▸ **addAction**(`action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`btActionInterface`](Ammo.btActionInterface.md) |

#### Returns

`void`

#### Inherited from

[btDynamicsWorld](Ammo.btDynamicsWorld.md).[addAction](Ammo.btDynamicsWorld.md#addaction)

#### Defined in

[packages/ammo/ammo.d.ts:672](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L672)

___

### removeAction

▸ **removeAction**(`action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`btActionInterface`](Ammo.btActionInterface.md) |

#### Returns

`void`

#### Inherited from

[btDynamicsWorld](Ammo.btDynamicsWorld.md).[removeAction](Ammo.btDynamicsWorld.md#removeaction)

#### Defined in

[packages/ammo/ammo.d.ts:673](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L673)

___

### getSolverInfo

▸ **getSolverInfo**(): [`btContactSolverInfo`](Ammo.btContactSolverInfo.md)

#### Returns

[`btContactSolverInfo`](Ammo.btContactSolverInfo.md)

#### Inherited from

[btDynamicsWorld](Ammo.btDynamicsWorld.md).[getSolverInfo](Ammo.btDynamicsWorld.md#getsolverinfo)

#### Defined in

[packages/ammo/ammo.d.ts:674](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L674)

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

#### Inherited from

[btDynamicsWorld](Ammo.btDynamicsWorld.md).[setInternalTickCallback](Ammo.btDynamicsWorld.md#setinternaltickcallback)

#### Defined in

[packages/ammo/ammo.d.ts:675](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L675)

___

### setGravity

▸ **setGravity**(`gravity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gravity` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:679](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L679)

___

### getGravity

▸ **getGravity**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/ammo/ammo.d.ts:680](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L680)

___

### addRigidBody

▸ **addRigidBody**(`body`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`btRigidBody`](Ammo.btRigidBody.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:681](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L681)

▸ **addRigidBody**(`body`, `group`, `mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `group` | `number` |
| `mask` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:682](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L682)

___

### removeRigidBody

▸ **removeRigidBody**(`body`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`btRigidBody`](Ammo.btRigidBody.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:683](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L683)

___

### addConstraint

▸ **addConstraint**(`constraint`, `disableCollisionsBetweenLinkedBodies?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraint` | [`btTypedConstraint`](Ammo.btTypedConstraint.md) |
| `disableCollisionsBetweenLinkedBodies?` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:684](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L684)

___

### removeConstraint

▸ **removeConstraint**(`constraint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraint` | [`btTypedConstraint`](Ammo.btTypedConstraint.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:685](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L685)

___

### stepSimulation

▸ **stepSimulation**(`timeStep`, `maxSubSteps?`, `fixedTimeStep?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeStep` | `number` |
| `maxSubSteps?` | `number` |
| `fixedTimeStep?` | `number` |

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:686](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L686)

___

### setContactAddedCallback

▸ **setContactAddedCallback**(`funcpointer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `funcpointer` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:687](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L687)

___

### setContactProcessedCallback

▸ **setContactProcessedCallback**(`funcpointer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `funcpointer` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:688](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L688)

___

### setContactDestroyedCallback

▸ **setContactDestroyedCallback**(`funcpointer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `funcpointer` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:689](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L689)
