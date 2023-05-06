# Class: btGhostObject

[Ammo](../modules/Ammo.md).btGhostObject

## Hierarchy

- [`btCollisionObject`](Ammo.btCollisionObject.md)

  ↳ **`btGhostObject`**

  ↳↳ [`btPairCachingGhostObject`](Ammo.btPairCachingGhostObject.md)


### Methods

- [setAnisotropicFriction](Ammo.btGhostObject.md#setanisotropicfriction)
- [getCollisionShape](Ammo.btGhostObject.md#getcollisionshape)
- [setContactProcessingThreshold](Ammo.btGhostObject.md#setcontactprocessingthreshold)
- [setActivationState](Ammo.btGhostObject.md#setactivationstate)
- [forceActivationState](Ammo.btGhostObject.md#forceactivationstate)
- [activate](Ammo.btGhostObject.md#activate)
- [isActive](Ammo.btGhostObject.md#isactive)
- [isKinematicObject](Ammo.btGhostObject.md#iskinematicobject)
- [isStaticObject](Ammo.btGhostObject.md#isstaticobject)
- [isStaticOrKinematicObject](Ammo.btGhostObject.md#isstaticorkinematicobject)
- [getRestitution](Ammo.btGhostObject.md#getrestitution)
- [getFriction](Ammo.btGhostObject.md#getfriction)
- [getRollingFriction](Ammo.btGhostObject.md#getrollingfriction)
- [setRestitution](Ammo.btGhostObject.md#setrestitution)
- [setFriction](Ammo.btGhostObject.md#setfriction)
- [setRollingFriction](Ammo.btGhostObject.md#setrollingfriction)
- [getWorldTransform](Ammo.btGhostObject.md#getworldtransform)
- [getCollisionFlags](Ammo.btGhostObject.md#getcollisionflags)
- [setCollisionFlags](Ammo.btGhostObject.md#setcollisionflags)
- [setWorldTransform](Ammo.btGhostObject.md#setworldtransform)
- [setCollisionShape](Ammo.btGhostObject.md#setcollisionshape)
- [setCcdMotionThreshold](Ammo.btGhostObject.md#setccdmotionthreshold)
- [setCcdSweptSphereRadius](Ammo.btGhostObject.md#setccdsweptsphereradius)
- [getUserIndex](Ammo.btGhostObject.md#getuserindex)
- [setUserIndex](Ammo.btGhostObject.md#setuserindex)
- [getUserPointer](Ammo.btGhostObject.md#getuserpointer)
- [setUserPointer](Ammo.btGhostObject.md#setuserpointer)
- [getBroadphaseHandle](Ammo.btGhostObject.md#getbroadphasehandle)
- [getNumOverlappingObjects](Ammo.btGhostObject.md#getnumoverlappingobjects)
- [getOverlappingObject](Ammo.btGhostObject.md#getoverlappingobject)

### Constructors

- [constructor](Ammo.btGhostObject.md#constructor)

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

[btCollisionObject](Ammo.btCollisionObject.md).[setAnisotropicFriction](Ammo.btCollisionObject.md#setanisotropicfriction)

#### Defined in

[packages/ammo/ammo.d.ts:123](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L123)

___

### getCollisionShape

▸ **getCollisionShape**(): [`btCollisionShape`](Ammo.btCollisionShape.md)

#### Returns

[`btCollisionShape`](Ammo.btCollisionShape.md)

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[getCollisionShape](Ammo.btCollisionObject.md#getcollisionshape)

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

[btCollisionObject](Ammo.btCollisionObject.md).[setContactProcessingThreshold](Ammo.btCollisionObject.md#setcontactprocessingthreshold)

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

[btCollisionObject](Ammo.btCollisionObject.md).[setActivationState](Ammo.btCollisionObject.md#setactivationstate)

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

[btCollisionObject](Ammo.btCollisionObject.md).[forceActivationState](Ammo.btCollisionObject.md#forceactivationstate)

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

[btCollisionObject](Ammo.btCollisionObject.md).[activate](Ammo.btCollisionObject.md#activate)

#### Defined in

[packages/ammo/ammo.d.ts:128](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L128)

___

### isActive

▸ **isActive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[isActive](Ammo.btCollisionObject.md#isactive)

#### Defined in

[packages/ammo/ammo.d.ts:129](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L129)

___

### isKinematicObject

▸ **isKinematicObject**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[isKinematicObject](Ammo.btCollisionObject.md#iskinematicobject)

#### Defined in

[packages/ammo/ammo.d.ts:130](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L130)

___

### isStaticObject

▸ **isStaticObject**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[isStaticObject](Ammo.btCollisionObject.md#isstaticobject)

#### Defined in

[packages/ammo/ammo.d.ts:131](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L131)

___

### isStaticOrKinematicObject

▸ **isStaticOrKinematicObject**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[isStaticOrKinematicObject](Ammo.btCollisionObject.md#isstaticorkinematicobject)

#### Defined in

[packages/ammo/ammo.d.ts:132](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L132)

___

### getRestitution

▸ **getRestitution**(): `number`

#### Returns

`number`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[getRestitution](Ammo.btCollisionObject.md#getrestitution)

#### Defined in

[packages/ammo/ammo.d.ts:133](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L133)

___

### getFriction

▸ **getFriction**(): `number`

#### Returns

`number`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[getFriction](Ammo.btCollisionObject.md#getfriction)

#### Defined in

[packages/ammo/ammo.d.ts:134](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L134)

___

### getRollingFriction

▸ **getRollingFriction**(): `number`

#### Returns

`number`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[getRollingFriction](Ammo.btCollisionObject.md#getrollingfriction)

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

[btCollisionObject](Ammo.btCollisionObject.md).[setRestitution](Ammo.btCollisionObject.md#setrestitution)

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

[btCollisionObject](Ammo.btCollisionObject.md).[setFriction](Ammo.btCollisionObject.md#setfriction)

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

[btCollisionObject](Ammo.btCollisionObject.md).[setRollingFriction](Ammo.btCollisionObject.md#setrollingfriction)

#### Defined in

[packages/ammo/ammo.d.ts:138](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L138)

___

### getWorldTransform

▸ **getWorldTransform**(): [`btTransform`](Ammo.btTransform.md)

#### Returns

[`btTransform`](Ammo.btTransform.md)

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[getWorldTransform](Ammo.btCollisionObject.md#getworldtransform)

#### Defined in

[packages/ammo/ammo.d.ts:139](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L139)

___

### getCollisionFlags

▸ **getCollisionFlags**(): `number`

#### Returns

`number`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[getCollisionFlags](Ammo.btCollisionObject.md#getcollisionflags)

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

[btCollisionObject](Ammo.btCollisionObject.md).[setCollisionFlags](Ammo.btCollisionObject.md#setcollisionflags)

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

[btCollisionObject](Ammo.btCollisionObject.md).[setWorldTransform](Ammo.btCollisionObject.md#setworldtransform)

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

[btCollisionObject](Ammo.btCollisionObject.md).[setCollisionShape](Ammo.btCollisionObject.md#setcollisionshape)

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

[btCollisionObject](Ammo.btCollisionObject.md).[setCcdMotionThreshold](Ammo.btCollisionObject.md#setccdmotionthreshold)

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

[btCollisionObject](Ammo.btCollisionObject.md).[setCcdSweptSphereRadius](Ammo.btCollisionObject.md#setccdsweptsphereradius)

#### Defined in

[packages/ammo/ammo.d.ts:145](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L145)

___

### getUserIndex

▸ **getUserIndex**(): `number`

#### Returns

`number`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[getUserIndex](Ammo.btCollisionObject.md#getuserindex)

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

[btCollisionObject](Ammo.btCollisionObject.md).[setUserIndex](Ammo.btCollisionObject.md#setuserindex)

#### Defined in

[packages/ammo/ammo.d.ts:147](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L147)

___

### getUserPointer

▸ **getUserPointer**(): `unknown`

#### Returns

`unknown`

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[getUserPointer](Ammo.btCollisionObject.md#getuserpointer)

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

[btCollisionObject](Ammo.btCollisionObject.md).[setUserPointer](Ammo.btCollisionObject.md#setuserpointer)

#### Defined in

[packages/ammo/ammo.d.ts:149](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L149)

___

### getBroadphaseHandle

▸ **getBroadphaseHandle**(): [`btBroadphaseProxy`](Ammo.btBroadphaseProxy.md)

#### Returns

[`btBroadphaseProxy`](Ammo.btBroadphaseProxy.md)

#### Inherited from

[btCollisionObject](Ammo.btCollisionObject.md).[getBroadphaseHandle](Ammo.btCollisionObject.md#getbroadphasehandle)

#### Defined in

[packages/ammo/ammo.d.ts:150](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L150)

___

### getNumOverlappingObjects

▸ **getNumOverlappingObjects**(): `number`

#### Returns

`number`

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

#### Defined in

[packages/ammo/ammo.d.ts:861](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L861)

## Constructors

### constructor

• **new btGhostObject**()

#### Overrides

[btCollisionObject](Ammo.btCollisionObject.md).[constructor](Ammo.btCollisionObject.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:859](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L859)
