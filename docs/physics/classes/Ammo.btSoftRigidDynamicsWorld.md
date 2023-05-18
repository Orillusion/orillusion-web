# Class: btSoftRigidDynamicsWorld

[Ammo](../modules/Ammo.md).btSoftRigidDynamicsWorld

## Hierarchy

- [`btDiscreteDynamicsWorld`](Ammo.btDiscreteDynamicsWorld.md)

  ↳ **`btSoftRigidDynamicsWorld`**


### Methods

- [getDispatcher](Ammo.btSoftRigidDynamicsWorld.md#getdispatcher)
- [rayTest](Ammo.btSoftRigidDynamicsWorld.md#raytest)
- [getPairCache](Ammo.btSoftRigidDynamicsWorld.md#getpaircache)
- [getDispatchInfo](Ammo.btSoftRigidDynamicsWorld.md#getdispatchinfo)
- [addCollisionObject](Ammo.btSoftRigidDynamicsWorld.md#addcollisionobject)
- [getBroadphase](Ammo.btSoftRigidDynamicsWorld.md#getbroadphase)
- [convexSweepTest](Ammo.btSoftRigidDynamicsWorld.md#convexsweeptest)
- [contactPairTest](Ammo.btSoftRigidDynamicsWorld.md#contactpairtest)
- [contactTest](Ammo.btSoftRigidDynamicsWorld.md#contacttest)
- [updateSingleAabb](Ammo.btSoftRigidDynamicsWorld.md#updatesingleaabb)
- [setDebugDrawer](Ammo.btSoftRigidDynamicsWorld.md#setdebugdrawer)
- [getDebugDrawer](Ammo.btSoftRigidDynamicsWorld.md#getdebugdrawer)
- [debugDrawWorld](Ammo.btSoftRigidDynamicsWorld.md#debugdrawworld)
- [debugDrawObject](Ammo.btSoftRigidDynamicsWorld.md#debugdrawobject)
- [addAction](Ammo.btSoftRigidDynamicsWorld.md#addaction)
- [removeAction](Ammo.btSoftRigidDynamicsWorld.md#removeaction)
- [getSolverInfo](Ammo.btSoftRigidDynamicsWorld.md#getsolverinfo)
- [setInternalTickCallback](Ammo.btSoftRigidDynamicsWorld.md#setinternaltickcallback)
- [setGravity](Ammo.btSoftRigidDynamicsWorld.md#setgravity)
- [getGravity](Ammo.btSoftRigidDynamicsWorld.md#getgravity)
- [addRigidBody](Ammo.btSoftRigidDynamicsWorld.md#addrigidbody)
- [removeRigidBody](Ammo.btSoftRigidDynamicsWorld.md#removerigidbody)
- [addConstraint](Ammo.btSoftRigidDynamicsWorld.md#addconstraint)
- [removeConstraint](Ammo.btSoftRigidDynamicsWorld.md#removeconstraint)
- [stepSimulation](Ammo.btSoftRigidDynamicsWorld.md#stepsimulation)
- [setContactAddedCallback](Ammo.btSoftRigidDynamicsWorld.md#setcontactaddedcallback)
- [setContactProcessedCallback](Ammo.btSoftRigidDynamicsWorld.md#setcontactprocessedcallback)
- [setContactDestroyedCallback](Ammo.btSoftRigidDynamicsWorld.md#setcontactdestroyedcallback)
- [addSoftBody](Ammo.btSoftRigidDynamicsWorld.md#addsoftbody)
- [removeSoftBody](Ammo.btSoftRigidDynamicsWorld.md#removesoftbody)
- [removeCollisionObject](Ammo.btSoftRigidDynamicsWorld.md#removecollisionobject)
- [getWorldInfo](Ammo.btSoftRigidDynamicsWorld.md#getworldinfo)
- [getSoftBodyArray](Ammo.btSoftRigidDynamicsWorld.md#getsoftbodyarray)

### Constructors

- [constructor](Ammo.btSoftRigidDynamicsWorld.md#constructor)

## Methods

### getDispatcher

▸ **getDispatcher**(): [`btDispatcher`](Ammo.btDispatcher.md)

#### Returns

[`btDispatcher`](Ammo.btDispatcher.md)

#### Inherited from

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[getDispatcher](Ammo.btDiscreteDynamicsWorld.md#getdispatcher)

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

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[rayTest](Ammo.btDiscreteDynamicsWorld.md#raytest)

#### Defined in

[packages/ammo/ammo.d.ts:632](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L632)

___

### getPairCache

▸ **getPairCache**(): [`btOverlappingPairCache`](Ammo.btOverlappingPairCache.md)

#### Returns

[`btOverlappingPairCache`](Ammo.btOverlappingPairCache.md)

#### Inherited from

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[getPairCache](Ammo.btDiscreteDynamicsWorld.md#getpaircache)

#### Defined in

[packages/ammo/ammo.d.ts:633](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L633)

___

### getDispatchInfo

▸ **getDispatchInfo**(): [`btDispatcherInfo`](Ammo.btDispatcherInfo.md)

#### Returns

[`btDispatcherInfo`](Ammo.btDispatcherInfo.md)

#### Inherited from

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[getDispatchInfo](Ammo.btDiscreteDynamicsWorld.md#getdispatchinfo)

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

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[addCollisionObject](Ammo.btDiscreteDynamicsWorld.md#addcollisionobject)

#### Defined in

[packages/ammo/ammo.d.ts:635](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L635)

___

### getBroadphase

▸ **getBroadphase**(): [`btBroadphaseInterface`](Ammo.btBroadphaseInterface.md)

#### Returns

[`btBroadphaseInterface`](Ammo.btBroadphaseInterface.md)

#### Inherited from

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[getBroadphase](Ammo.btDiscreteDynamicsWorld.md#getbroadphase)

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

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[convexSweepTest](Ammo.btDiscreteDynamicsWorld.md#convexsweeptest)

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

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[contactPairTest](Ammo.btDiscreteDynamicsWorld.md#contactpairtest)

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

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[contactTest](Ammo.btDiscreteDynamicsWorld.md#contacttest)

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

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[updateSingleAabb](Ammo.btDiscreteDynamicsWorld.md#updatesingleaabb)

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

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[setDebugDrawer](Ammo.btDiscreteDynamicsWorld.md#setdebugdrawer)

#### Defined in

[packages/ammo/ammo.d.ts:642](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L642)

___

### getDebugDrawer

▸ **getDebugDrawer**(): [`btIDebugDraw`](Ammo.btIDebugDraw.md)

#### Returns

[`btIDebugDraw`](Ammo.btIDebugDraw.md)

#### Inherited from

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[getDebugDrawer](Ammo.btDiscreteDynamicsWorld.md#getdebugdrawer)

#### Defined in

[packages/ammo/ammo.d.ts:643](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L643)

___

### debugDrawWorld

▸ **debugDrawWorld**(): `void`

#### Returns

`void`

#### Inherited from

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[debugDrawWorld](Ammo.btDiscreteDynamicsWorld.md#debugdrawworld)

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

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[debugDrawObject](Ammo.btDiscreteDynamicsWorld.md#debugdrawobject)

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

#### Inherited from

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[addAction](Ammo.btDiscreteDynamicsWorld.md#addaction)

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

#### Inherited from

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[removeAction](Ammo.btDiscreteDynamicsWorld.md#removeaction)

#### Defined in

[packages/ammo/ammo.d.ts:658](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L658)

___

### getSolverInfo

▸ **getSolverInfo**(): [`btContactSolverInfo`](Ammo.btContactSolverInfo.md)

#### Returns

[`btContactSolverInfo`](Ammo.btContactSolverInfo.md)

#### Inherited from

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[getSolverInfo](Ammo.btDiscreteDynamicsWorld.md#getsolverinfo)

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

#### Inherited from

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[setInternalTickCallback](Ammo.btDiscreteDynamicsWorld.md#setinternaltickcallback)

#### Defined in

[packages/ammo/ammo.d.ts:660](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L660)

___

### setGravity

▸ **setGravity**(`gravity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gravity` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Inherited from

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[setGravity](Ammo.btDiscreteDynamicsWorld.md#setgravity)

#### Defined in

[packages/ammo/ammo.d.ts:664](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L664)

___

### getGravity

▸ **getGravity**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Inherited from

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[getGravity](Ammo.btDiscreteDynamicsWorld.md#getgravity)

#### Defined in

[packages/ammo/ammo.d.ts:665](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L665)

___

### addRigidBody

▸ **addRigidBody**(`body`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`btRigidBody`](Ammo.btRigidBody.md) |

#### Returns

`void`

#### Inherited from

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[addRigidBody](Ammo.btDiscreteDynamicsWorld.md#addrigidbody)

#### Defined in

[packages/ammo/ammo.d.ts:666](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L666)

▸ **addRigidBody**(`body`, `group`, `mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `group` | `number` |
| `mask` | `number` |

#### Returns

`void`

#### Inherited from

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[addRigidBody](Ammo.btDiscreteDynamicsWorld.md#addrigidbody)

#### Defined in

[packages/ammo/ammo.d.ts:667](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L667)

___

### removeRigidBody

▸ **removeRigidBody**(`body`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`btRigidBody`](Ammo.btRigidBody.md) |

#### Returns

`void`

#### Inherited from

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[removeRigidBody](Ammo.btDiscreteDynamicsWorld.md#removerigidbody)

#### Defined in

[packages/ammo/ammo.d.ts:668](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L668)

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

#### Inherited from

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[addConstraint](Ammo.btDiscreteDynamicsWorld.md#addconstraint)

#### Defined in

[packages/ammo/ammo.d.ts:669](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L669)

___

### removeConstraint

▸ **removeConstraint**(`constraint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraint` | [`btTypedConstraint`](Ammo.btTypedConstraint.md) |

#### Returns

`void`

#### Inherited from

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[removeConstraint](Ammo.btDiscreteDynamicsWorld.md#removeconstraint)

#### Defined in

[packages/ammo/ammo.d.ts:670](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L670)

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

#### Inherited from

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[stepSimulation](Ammo.btDiscreteDynamicsWorld.md#stepsimulation)

#### Defined in

[packages/ammo/ammo.d.ts:671](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L671)

___

### setContactAddedCallback

▸ **setContactAddedCallback**(`funcpointer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `funcpointer` | `number` |

#### Returns

`void`

#### Inherited from

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[setContactAddedCallback](Ammo.btDiscreteDynamicsWorld.md#setcontactaddedcallback)

#### Defined in

[packages/ammo/ammo.d.ts:672](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L672)

___

### setContactProcessedCallback

▸ **setContactProcessedCallback**(`funcpointer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `funcpointer` | `number` |

#### Returns

`void`

#### Inherited from

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[setContactProcessedCallback](Ammo.btDiscreteDynamicsWorld.md#setcontactprocessedcallback)

#### Defined in

[packages/ammo/ammo.d.ts:673](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L673)

___

### setContactDestroyedCallback

▸ **setContactDestroyedCallback**(`funcpointer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `funcpointer` | `number` |

#### Returns

`void`

#### Inherited from

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[setContactDestroyedCallback](Ammo.btDiscreteDynamicsWorld.md#setcontactdestroyedcallback)

#### Defined in

[packages/ammo/ammo.d.ts:674](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L674)

___

### addSoftBody

▸ **addSoftBody**(`body`, `collisionFilterGroup`, `collisionFilterMask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`btSoftBody`](Ammo.btSoftBody.md) |
| `collisionFilterGroup` | `number` |
| `collisionFilterMask` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:1056](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1056)

___

### removeSoftBody

▸ **removeSoftBody**(`body`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`btSoftBody`](Ammo.btSoftBody.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:1057](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1057)

___

### removeCollisionObject

▸ **removeCollisionObject**(`collisionObject`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collisionObject` | [`btCollisionObject`](Ammo.btCollisionObject.md) |

#### Returns

`void`

#### Overrides

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[removeCollisionObject](Ammo.btDiscreteDynamicsWorld.md#removecollisionobject)

#### Defined in

[packages/ammo/ammo.d.ts:1058](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1058)

___

### getWorldInfo

▸ **getWorldInfo**(): [`btSoftBodyWorldInfo`](Ammo.btSoftBodyWorldInfo.md)

#### Returns

[`btSoftBodyWorldInfo`](Ammo.btSoftBodyWorldInfo.md)

#### Defined in

[packages/ammo/ammo.d.ts:1059](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1059)

___

### getSoftBodyArray

▸ **getSoftBodyArray**(): [`btSoftBodyArray`](Ammo.btSoftBodyArray.md)

#### Returns

[`btSoftBodyArray`](Ammo.btSoftBodyArray.md)

#### Defined in

[packages/ammo/ammo.d.ts:1060](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1060)

## Constructors

### constructor

• **new btSoftRigidDynamicsWorld**(`dispatcher`, `pairCache`, `constraintSolver`, `collisionConfiguration`, `softBodySolver`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`btDispatcher`](Ammo.btDispatcher.md) |
| `pairCache` | [`btBroadphaseInterface`](Ammo.btBroadphaseInterface.md) |
| `constraintSolver` | [`btConstraintSolver`](Ammo.btConstraintSolver.md) |
| `collisionConfiguration` | [`btCollisionConfiguration`](Ammo.btCollisionConfiguration.md) |
| `softBodySolver` | [`btSoftBodySolver`](Ammo.btSoftBodySolver.md) |

#### Overrides

[btDiscreteDynamicsWorld](Ammo.btDiscreteDynamicsWorld.md).[constructor](Ammo.btDiscreteDynamicsWorld.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:1055](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1055)
