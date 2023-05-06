# Class: btPairCachingGhostObject

[Ammo](../modules/Ammo.md).btPairCachingGhostObject

## Hierarchy

- [`btGhostObject`](Ammo.btGhostObject.md)

  ↳ **`btPairCachingGhostObject`**


### Methods

- [setAnisotropicFriction](Ammo.btPairCachingGhostObject.md#setanisotropicfriction)
- [getCollisionShape](Ammo.btPairCachingGhostObject.md#getcollisionshape)
- [setContactProcessingThreshold](Ammo.btPairCachingGhostObject.md#setcontactprocessingthreshold)
- [setActivationState](Ammo.btPairCachingGhostObject.md#setactivationstate)
- [forceActivationState](Ammo.btPairCachingGhostObject.md#forceactivationstate)
- [activate](Ammo.btPairCachingGhostObject.md#activate)
- [isActive](Ammo.btPairCachingGhostObject.md#isactive)
- [isKinematicObject](Ammo.btPairCachingGhostObject.md#iskinematicobject)
- [isStaticObject](Ammo.btPairCachingGhostObject.md#isstaticobject)
- [isStaticOrKinematicObject](Ammo.btPairCachingGhostObject.md#isstaticorkinematicobject)
- [getRestitution](Ammo.btPairCachingGhostObject.md#getrestitution)
- [getFriction](Ammo.btPairCachingGhostObject.md#getfriction)
- [getRollingFriction](Ammo.btPairCachingGhostObject.md#getrollingfriction)
- [setRestitution](Ammo.btPairCachingGhostObject.md#setrestitution)
- [setFriction](Ammo.btPairCachingGhostObject.md#setfriction)
- [setRollingFriction](Ammo.btPairCachingGhostObject.md#setrollingfriction)
- [getWorldTransform](Ammo.btPairCachingGhostObject.md#getworldtransform)
- [getCollisionFlags](Ammo.btPairCachingGhostObject.md#getcollisionflags)
- [setCollisionFlags](Ammo.btPairCachingGhostObject.md#setcollisionflags)
- [setWorldTransform](Ammo.btPairCachingGhostObject.md#setworldtransform)
- [setCollisionShape](Ammo.btPairCachingGhostObject.md#setcollisionshape)
- [setCcdMotionThreshold](Ammo.btPairCachingGhostObject.md#setccdmotionthreshold)
- [setCcdSweptSphereRadius](Ammo.btPairCachingGhostObject.md#setccdsweptsphereradius)
- [getUserIndex](Ammo.btPairCachingGhostObject.md#getuserindex)
- [setUserIndex](Ammo.btPairCachingGhostObject.md#setuserindex)
- [getUserPointer](Ammo.btPairCachingGhostObject.md#getuserpointer)
- [setUserPointer](Ammo.btPairCachingGhostObject.md#setuserpointer)
- [getBroadphaseHandle](Ammo.btPairCachingGhostObject.md#getbroadphasehandle)
- [getNumOverlappingObjects](Ammo.btPairCachingGhostObject.md#getnumoverlappingobjects)
- [getOverlappingObject](Ammo.btPairCachingGhostObject.md#getoverlappingobject)

### Constructors

- [constructor](Ammo.btPairCachingGhostObject.md#constructor)

## Methods

### setAnisotropicFriction

▸ **setAnisotropicFriction**(`anisotropicFriction`, `frictionMode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anisotropicFriction` | [`btVector3`](Ammo.btVector3.md) |
| `frictionMode` | `number` |

#### Returns

`void`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[setAnisotropicFriction](Ammo.btGhostObject.md#setanisotropicfriction)

#### Defined in

[packages/ammo/ammo.d.ts:123](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L123)

___

### getCollisionShape

▸ **getCollisionShape**(): [`btCollisionShape`](Ammo.btCollisionShape.md)

#### Returns

[`btCollisionShape`](Ammo.btCollisionShape.md)

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[getCollisionShape](Ammo.btGhostObject.md#getcollisionshape)

#### Defined in

[packages/ammo/ammo.d.ts:124](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L124)

___

### setContactProcessingThreshold

▸ **setContactProcessingThreshold**(`contactProcessingThreshold`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contactProcessingThreshold` | `number` |

#### Returns

`void`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[setContactProcessingThreshold](Ammo.btGhostObject.md#setcontactprocessingthreshold)

#### Defined in

[packages/ammo/ammo.d.ts:125](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L125)

___

### setActivationState

▸ **setActivationState**(`newState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | `number` |

#### Returns

`void`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[setActivationState](Ammo.btGhostObject.md#setactivationstate)

#### Defined in

[packages/ammo/ammo.d.ts:126](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L126)

___

### forceActivationState

▸ **forceActivationState**(`newState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | `number` |

#### Returns

`void`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[forceActivationState](Ammo.btGhostObject.md#forceactivationstate)

#### Defined in

[packages/ammo/ammo.d.ts:127](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L127)

___

### activate

▸ **activate**(`forceActivation?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forceActivation?` | `boolean` |

#### Returns

`void`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[activate](Ammo.btGhostObject.md#activate)

#### Defined in

[packages/ammo/ammo.d.ts:128](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L128)

___

### isActive

▸ **isActive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[isActive](Ammo.btGhostObject.md#isactive)

#### Defined in

[packages/ammo/ammo.d.ts:129](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L129)

___

### isKinematicObject

▸ **isKinematicObject**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[isKinematicObject](Ammo.btGhostObject.md#iskinematicobject)

#### Defined in

[packages/ammo/ammo.d.ts:130](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L130)

___

### isStaticObject

▸ **isStaticObject**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[isStaticObject](Ammo.btGhostObject.md#isstaticobject)

#### Defined in

[packages/ammo/ammo.d.ts:131](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L131)

___

### isStaticOrKinematicObject

▸ **isStaticOrKinematicObject**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[isStaticOrKinematicObject](Ammo.btGhostObject.md#isstaticorkinematicobject)

#### Defined in

[packages/ammo/ammo.d.ts:132](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L132)

___

### getRestitution

▸ **getRestitution**(): `number`

#### Returns

`number`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[getRestitution](Ammo.btGhostObject.md#getrestitution)

#### Defined in

[packages/ammo/ammo.d.ts:133](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L133)

___

### getFriction

▸ **getFriction**(): `number`

#### Returns

`number`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[getFriction](Ammo.btGhostObject.md#getfriction)

#### Defined in

[packages/ammo/ammo.d.ts:134](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L134)

___

### getRollingFriction

▸ **getRollingFriction**(): `number`

#### Returns

`number`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[getRollingFriction](Ammo.btGhostObject.md#getrollingfriction)

#### Defined in

[packages/ammo/ammo.d.ts:135](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L135)

___

### setRestitution

▸ **setRestitution**(`rest`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rest` | `number` |

#### Returns

`void`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[setRestitution](Ammo.btGhostObject.md#setrestitution)

#### Defined in

[packages/ammo/ammo.d.ts:136](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L136)

___

### setFriction

▸ **setFriction**(`frict`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `frict` | `number` |

#### Returns

`void`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[setFriction](Ammo.btGhostObject.md#setfriction)

#### Defined in

[packages/ammo/ammo.d.ts:137](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L137)

___

### setRollingFriction

▸ **setRollingFriction**(`frict`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `frict` | `number` |

#### Returns

`void`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[setRollingFriction](Ammo.btGhostObject.md#setrollingfriction)

#### Defined in

[packages/ammo/ammo.d.ts:138](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L138)

___

### getWorldTransform

▸ **getWorldTransform**(): [`btTransform`](Ammo.btTransform.md)

#### Returns

[`btTransform`](Ammo.btTransform.md)

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[getWorldTransform](Ammo.btGhostObject.md#getworldtransform)

#### Defined in

[packages/ammo/ammo.d.ts:139](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L139)

___

### getCollisionFlags

▸ **getCollisionFlags**(): `number`

#### Returns

`number`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[getCollisionFlags](Ammo.btGhostObject.md#getcollisionflags)

#### Defined in

[packages/ammo/ammo.d.ts:140](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L140)

___

### setCollisionFlags

▸ **setCollisionFlags**(`flags`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `number` |

#### Returns

`void`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[setCollisionFlags](Ammo.btGhostObject.md#setcollisionflags)

#### Defined in

[packages/ammo/ammo.d.ts:141](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L141)

___

### setWorldTransform

▸ **setWorldTransform**(`worldTrans`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldTrans` | [`btTransform`](Ammo.btTransform.md) |

#### Returns

`void`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[setWorldTransform](Ammo.btGhostObject.md#setworldtransform)

#### Defined in

[packages/ammo/ammo.d.ts:142](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L142)

___

### setCollisionShape

▸ **setCollisionShape**(`collisionShape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collisionShape` | [`btCollisionShape`](Ammo.btCollisionShape.md) |

#### Returns

`void`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[setCollisionShape](Ammo.btGhostObject.md#setcollisionshape)

#### Defined in

[packages/ammo/ammo.d.ts:143](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L143)

___

### setCcdMotionThreshold

▸ **setCcdMotionThreshold**(`ccdMotionThreshold`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ccdMotionThreshold` | `number` |

#### Returns

`void`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[setCcdMotionThreshold](Ammo.btGhostObject.md#setccdmotionthreshold)

#### Defined in

[packages/ammo/ammo.d.ts:144](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L144)

___

### setCcdSweptSphereRadius

▸ **setCcdSweptSphereRadius**(`radius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |

#### Returns

`void`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[setCcdSweptSphereRadius](Ammo.btGhostObject.md#setccdsweptsphereradius)

#### Defined in

[packages/ammo/ammo.d.ts:145](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L145)

___

### getUserIndex

▸ **getUserIndex**(): `number`

#### Returns

`number`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[getUserIndex](Ammo.btGhostObject.md#getuserindex)

#### Defined in

[packages/ammo/ammo.d.ts:146](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L146)

___

### setUserIndex

▸ **setUserIndex**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[setUserIndex](Ammo.btGhostObject.md#setuserindex)

#### Defined in

[packages/ammo/ammo.d.ts:147](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L147)

___

### getUserPointer

▸ **getUserPointer**(): `unknown`

#### Returns

`unknown`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[getUserPointer](Ammo.btGhostObject.md#getuserpointer)

#### Defined in

[packages/ammo/ammo.d.ts:148](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L148)

___

### setUserPointer

▸ **setUserPointer**(`userPointer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `userPointer` | `unknown` |

#### Returns

`void`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[setUserPointer](Ammo.btGhostObject.md#setuserpointer)

#### Defined in

[packages/ammo/ammo.d.ts:149](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L149)

___

### getBroadphaseHandle

▸ **getBroadphaseHandle**(): [`btBroadphaseProxy`](Ammo.btBroadphaseProxy.md)

#### Returns

[`btBroadphaseProxy`](Ammo.btBroadphaseProxy.md)

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[getBroadphaseHandle](Ammo.btGhostObject.md#getbroadphasehandle)

#### Defined in

[packages/ammo/ammo.d.ts:150](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L150)

___

### getNumOverlappingObjects

▸ **getNumOverlappingObjects**(): `number`

#### Returns

`number`

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[getNumOverlappingObjects](Ammo.btGhostObject.md#getnumoverlappingobjects)

#### Defined in

[packages/ammo/ammo.d.ts:860](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L860)

___

### getOverlappingObject

▸ **getOverlappingObject**(`index`): [`btCollisionObject`](Ammo.btCollisionObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`btCollisionObject`](Ammo.btCollisionObject.md)

#### Inherited from

[btGhostObject](Ammo.btGhostObject.md).[getOverlappingObject](Ammo.btGhostObject.md#getoverlappingobject)

#### Defined in

[packages/ammo/ammo.d.ts:861](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L861)

## Constructors

### constructor

• **new btPairCachingGhostObject**()

#### Overrides

[btGhostObject](Ammo.btGhostObject.md).[constructor](Ammo.btGhostObject.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:864](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L864)
