# Class: btCollisionObject

[Ammo](../modules/Ammo.md).btCollisionObject

## Hierarchy

- **`btCollisionObject`**

  ↳ [`btRigidBody`](Ammo.btRigidBody.md)

  ↳ [`btGhostObject`](Ammo.btGhostObject.md)

  ↳ [`btSoftBody`](Ammo.btSoftBody.md)


### Constructors

- [constructor](Ammo.btCollisionObject.md#constructor)

### Methods

- [setAnisotropicFriction](Ammo.btCollisionObject.md#setanisotropicfriction)
- [getCollisionShape](Ammo.btCollisionObject.md#getcollisionshape)
- [setContactProcessingThreshold](Ammo.btCollisionObject.md#setcontactprocessingthreshold)
- [setActivationState](Ammo.btCollisionObject.md#setactivationstate)
- [forceActivationState](Ammo.btCollisionObject.md#forceactivationstate)
- [activate](Ammo.btCollisionObject.md#activate)
- [isActive](Ammo.btCollisionObject.md#isactive)
- [isKinematicObject](Ammo.btCollisionObject.md#iskinematicobject)
- [isStaticObject](Ammo.btCollisionObject.md#isstaticobject)
- [isStaticOrKinematicObject](Ammo.btCollisionObject.md#isstaticorkinematicobject)
- [getRestitution](Ammo.btCollisionObject.md#getrestitution)
- [getFriction](Ammo.btCollisionObject.md#getfriction)
- [getRollingFriction](Ammo.btCollisionObject.md#getrollingfriction)
- [setRestitution](Ammo.btCollisionObject.md#setrestitution)
- [setFriction](Ammo.btCollisionObject.md#setfriction)
- [setRollingFriction](Ammo.btCollisionObject.md#setrollingfriction)
- [getWorldTransform](Ammo.btCollisionObject.md#getworldtransform)
- [getCollisionFlags](Ammo.btCollisionObject.md#getcollisionflags)
- [setCollisionFlags](Ammo.btCollisionObject.md#setcollisionflags)
- [setWorldTransform](Ammo.btCollisionObject.md#setworldtransform)
- [setCollisionShape](Ammo.btCollisionObject.md#setcollisionshape)
- [setCcdMotionThreshold](Ammo.btCollisionObject.md#setccdmotionthreshold)
- [setCcdSweptSphereRadius](Ammo.btCollisionObject.md#setccdsweptsphereradius)
- [getUserIndex](Ammo.btCollisionObject.md#getuserindex)
- [setUserIndex](Ammo.btCollisionObject.md#setuserindex)
- [getUserPointer](Ammo.btCollisionObject.md#getuserpointer)
- [setUserPointer](Ammo.btCollisionObject.md#setuserpointer)
- [getBroadphaseHandle](Ammo.btCollisionObject.md#getbroadphasehandle)

## Constructors

### constructor

• **new btCollisionObject**()

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

#### Defined in

[packages/ammo/ammo.d.ts:123](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L123)

___

### getCollisionShape

▸ **getCollisionShape**(): [`btCollisionShape`](Ammo.btCollisionShape.md)

#### Returns

[`btCollisionShape`](Ammo.btCollisionShape.md)

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

#### Defined in

[packages/ammo/ammo.d.ts:128](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L128)

___

### isActive

▸ **isActive**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/ammo/ammo.d.ts:129](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L129)

___

### isKinematicObject

▸ **isKinematicObject**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/ammo/ammo.d.ts:130](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L130)

___

### isStaticObject

▸ **isStaticObject**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/ammo/ammo.d.ts:131](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L131)

___

### isStaticOrKinematicObject

▸ **isStaticOrKinematicObject**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/ammo/ammo.d.ts:132](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L132)

___

### getRestitution

▸ **getRestitution**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:133](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L133)

___

### getFriction

▸ **getFriction**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:134](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L134)

___

### getRollingFriction

▸ **getRollingFriction**(): `number`

#### Returns

`number`

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

#### Defined in

[packages/ammo/ammo.d.ts:138](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L138)

___

### getWorldTransform

▸ **getWorldTransform**(): [`btTransform`](Ammo.btTransform.md)

#### Returns

[`btTransform`](Ammo.btTransform.md)

#### Defined in

[packages/ammo/ammo.d.ts:139](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L139)

___

### getCollisionFlags

▸ **getCollisionFlags**(): `number`

#### Returns

`number`

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

#### Defined in

[packages/ammo/ammo.d.ts:145](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L145)

___

### getUserIndex

▸ **getUserIndex**(): `number`

#### Returns

`number`

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

#### Defined in

[packages/ammo/ammo.d.ts:147](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L147)

___

### getUserPointer

▸ **getUserPointer**(): `unknown`

#### Returns

`unknown`

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

#### Defined in

[packages/ammo/ammo.d.ts:149](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L149)

___

### getBroadphaseHandle

▸ **getBroadphaseHandle**(): [`btBroadphaseProxy`](Ammo.btBroadphaseProxy.md)

#### Returns

[`btBroadphaseProxy`](Ammo.btBroadphaseProxy.md)

#### Defined in

[packages/ammo/ammo.d.ts:150](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L150)
