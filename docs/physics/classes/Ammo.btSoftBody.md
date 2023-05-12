# Class: btSoftBody

[Ammo](../modules/Ammo.md).btSoftBody

## Hierarchy

- [`btCollisionObject`](Ammo.btCollisionObject.md)

  ↳ **`btSoftBody`**


### Methods

- [setAnisotropicFriction](Ammo.btSoftBody.md#setanisotropicfriction)
- [getCollisionShape](Ammo.btSoftBody.md#getcollisionshape)
- [setContactProcessingThreshold](Ammo.btSoftBody.md#setcontactprocessingthreshold)
- [setActivationState](Ammo.btSoftBody.md#setactivationstate)
- [forceActivationState](Ammo.btSoftBody.md#forceactivationstate)
- [activate](Ammo.btSoftBody.md#activate)
- [isActive](Ammo.btSoftBody.md#isactive)
- [isKinematicObject](Ammo.btSoftBody.md#iskinematicobject)
- [isStaticObject](Ammo.btSoftBody.md#isstaticobject)
- [isStaticOrKinematicObject](Ammo.btSoftBody.md#isstaticorkinematicobject)
- [getRestitution](Ammo.btSoftBody.md#getrestitution)
- [getFriction](Ammo.btSoftBody.md#getfriction)
- [getRollingFriction](Ammo.btSoftBody.md#getrollingfriction)
- [setRestitution](Ammo.btSoftBody.md#setrestitution)
- [setFriction](Ammo.btSoftBody.md#setfriction)
- [setRollingFriction](Ammo.btSoftBody.md#setrollingfriction)
- [getWorldTransform](Ammo.btSoftBody.md#getworldtransform)
- [getCollisionFlags](Ammo.btSoftBody.md#getcollisionflags)
- [setCollisionFlags](Ammo.btSoftBody.md#setcollisionflags)
- [setWorldTransform](Ammo.btSoftBody.md#setworldtransform)
- [setCollisionShape](Ammo.btSoftBody.md#setcollisionshape)
- [setCcdMotionThreshold](Ammo.btSoftBody.md#setccdmotionthreshold)
- [setCcdSweptSphereRadius](Ammo.btSoftBody.md#setccdsweptsphereradius)
- [getUserIndex](Ammo.btSoftBody.md#getuserindex)
- [setUserIndex](Ammo.btSoftBody.md#setuserindex)
- [getUserPointer](Ammo.btSoftBody.md#getuserpointer)
- [setUserPointer](Ammo.btSoftBody.md#setuserpointer)
- [getBroadphaseHandle](Ammo.btSoftBody.md#getbroadphasehandle)
- [get\_m\_cfg](Ammo.btSoftBody.md#get_m_cfg)
- [set\_m\_cfg](Ammo.btSoftBody.md#set_m_cfg)
- [get\_m\_nodes](Ammo.btSoftBody.md#get_m_nodes)
- [set\_m\_nodes](Ammo.btSoftBody.md#set_m_nodes)
- [get\_m\_faces](Ammo.btSoftBody.md#get_m_faces)
- [set\_m\_faces](Ammo.btSoftBody.md#set_m_faces)
- [get\_m\_materials](Ammo.btSoftBody.md#get_m_materials)
- [set\_m\_materials](Ammo.btSoftBody.md#set_m_materials)
- [get\_m\_anchors](Ammo.btSoftBody.md#get_m_anchors)
- [set\_m\_anchors](Ammo.btSoftBody.md#set_m_anchors)
- [checkLink](Ammo.btSoftBody.md#checklink)
- [checkFace](Ammo.btSoftBody.md#checkface)
- [appendMaterial](Ammo.btSoftBody.md#appendmaterial)
- [appendNode](Ammo.btSoftBody.md#appendnode)
- [appendLink](Ammo.btSoftBody.md#appendlink)
- [appendFace](Ammo.btSoftBody.md#appendface)
- [appendTetra](Ammo.btSoftBody.md#appendtetra)
- [appendAnchor](Ammo.btSoftBody.md#appendanchor)
- [addForce](Ammo.btSoftBody.md#addforce)
- [addAeroForceToNode](Ammo.btSoftBody.md#addaeroforcetonode)
- [getTotalMass](Ammo.btSoftBody.md#gettotalmass)
- [setTotalMass](Ammo.btSoftBody.md#settotalmass)
- [setMass](Ammo.btSoftBody.md#setmass)
- [transform](Ammo.btSoftBody.md#transform)
- [translate](Ammo.btSoftBody.md#translate)
- [rotate](Ammo.btSoftBody.md#rotate)
- [scale](Ammo.btSoftBody.md#scale)
- [generateClusters](Ammo.btSoftBody.md#generateclusters)
- [generateBendingConstraints](Ammo.btSoftBody.md#generatebendingconstraints)
- [upcast](Ammo.btSoftBody.md#upcast)

### Constructors

- [constructor](Ammo.btSoftBody.md#constructor)

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

### get\_m\_cfg

▸ **get_m_cfg**(): [`Config`](Ammo.Config.md)

#### Returns

[`Config`](Ammo.Config.md)

#### Defined in

[packages/ammo/ammo.d.ts:1011](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1011)

___

### set\_m\_cfg

▸ **set_m_cfg**(`m_cfg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_cfg` | [`Config`](Ammo.Config.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:1012](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1012)

___

### get\_m\_nodes

▸ **get_m_nodes**(): [`tNodeArray`](Ammo.tNodeArray.md)

#### Returns

[`tNodeArray`](Ammo.tNodeArray.md)

#### Defined in

[packages/ammo/ammo.d.ts:1013](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1013)

___

### set\_m\_nodes

▸ **set_m_nodes**(`m_nodes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_nodes` | [`tNodeArray`](Ammo.tNodeArray.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:1014](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1014)

___

### get\_m\_faces

▸ **get_m_faces**(): [`tFaceArray`](Ammo.tFaceArray.md)

#### Returns

[`tFaceArray`](Ammo.tFaceArray.md)

#### Defined in

[packages/ammo/ammo.d.ts:1015](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1015)

___

### set\_m\_faces

▸ **set_m_faces**(`m_faces`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_faces` | [`tFaceArray`](Ammo.tFaceArray.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:1016](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1016)

___

### get\_m\_materials

▸ **get_m_materials**(): [`tMaterialArray`](Ammo.tMaterialArray.md)

#### Returns

[`tMaterialArray`](Ammo.tMaterialArray.md)

#### Defined in

[packages/ammo/ammo.d.ts:1017](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1017)

___

### set\_m\_materials

▸ **set_m_materials**(`m_materials`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_materials` | [`tMaterialArray`](Ammo.tMaterialArray.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:1018](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1018)

___

### get\_m\_anchors

▸ **get_m_anchors**(): [`tAnchorArray`](Ammo.tAnchorArray.md)

#### Returns

[`tAnchorArray`](Ammo.tAnchorArray.md)

#### Defined in

[packages/ammo/ammo.d.ts:1019](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1019)

___

### set\_m\_anchors

▸ **set_m_anchors**(`m_anchors`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_anchors` | [`tAnchorArray`](Ammo.tAnchorArray.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:1020](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1020)

___

### checkLink

▸ **checkLink**(`node0`, `node1`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node0` | `number` |
| `node1` | `number` |

#### Returns

`boolean`

#### Defined in

[packages/ammo/ammo.d.ts:1021](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1021)

___

### checkFace

▸ **checkFace**(`node0`, `node1`, `node2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node0` | `number` |
| `node1` | `number` |
| `node2` | `number` |

#### Returns

`boolean`

#### Defined in

[packages/ammo/ammo.d.ts:1022](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1022)

___

### appendMaterial

▸ **appendMaterial**(): [`Material`](Ammo.Material.md)

#### Returns

[`Material`](Ammo.Material.md)

#### Defined in

[packages/ammo/ammo.d.ts:1023](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1023)

___

### appendNode

▸ **appendNode**(`x`, `m`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`btVector3`](Ammo.btVector3.md) |
| `m` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:1024](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1024)

___

### appendLink

▸ **appendLink**(`node0`, `node1`, `mat`, `bcheckexist`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node0` | `number` |
| `node1` | `number` |
| `mat` | [`Material`](Ammo.Material.md) |
| `bcheckexist` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:1025](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1025)

___

### appendFace

▸ **appendFace**(`node0`, `node1`, `node2`, `mat`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node0` | `number` |
| `node1` | `number` |
| `node2` | `number` |
| `mat` | [`Material`](Ammo.Material.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:1026](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1026)

___

### appendTetra

▸ **appendTetra**(`node0`, `node1`, `node2`, `node3`, `mat`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node0` | `number` |
| `node1` | `number` |
| `node2` | `number` |
| `node3` | `number` |
| `mat` | [`Material`](Ammo.Material.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:1027](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1027)

___

### appendAnchor

▸ **appendAnchor**(`node`, `body`, `disableCollisionBetweenLinkedBodies`, `influence`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `number` |
| `body` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `disableCollisionBetweenLinkedBodies` | `boolean` |
| `influence` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:1028](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1028)

___

### addForce

▸ **addForce**(`force`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:1029](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1029)

▸ **addForce**(`force`, `node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force` | [`btVector3`](Ammo.btVector3.md) |
| `node` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:1030](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1030)

___

### addAeroForceToNode

▸ **addAeroForceToNode**(`windVelocity`, `nodeIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `windVelocity` | [`btVector3`](Ammo.btVector3.md) |
| `nodeIndex` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:1031](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1031)

___

### getTotalMass

▸ **getTotalMass**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:1032](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1032)

___

### setTotalMass

▸ **setTotalMass**(`mass`, `fromfaces`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mass` | `number` |
| `fromfaces` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:1033](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1033)

___

### setMass

▸ **setMass**(`node`, `mass`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `number` |
| `mass` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:1034](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1034)

___

### transform

▸ **transform**(`trs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `trs` | [`btTransform`](Ammo.btTransform.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:1035](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1035)

___

### translate

▸ **translate**(`trs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `trs` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:1036](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1036)

___

### rotate

▸ **rotate**(`rot`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rot` | [`btQuaternion`](Ammo.btQuaternion.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:1037](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1037)

___

### scale

▸ **scale**(`scl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scl` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:1038](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1038)

___

### generateClusters

▸ **generateClusters**(`k`, `maxiterations?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `number` |
| `maxiterations?` | `number` |

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:1039](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1039)

___

### generateBendingConstraints

▸ **generateBendingConstraints**(`distance`, `mat`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `distance` | `number` |
| `mat` | [`Material`](Ammo.Material.md) |

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:1040](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1040)

___

### upcast

▸ **upcast**(`colObj`): [`btSoftBody`](Ammo.btSoftBody.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `colObj` | [`btCollisionObject`](Ammo.btCollisionObject.md) |

#### Returns

[`btSoftBody`](Ammo.btSoftBody.md)

#### Defined in

[packages/ammo/ammo.d.ts:1041](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1041)

## Constructors

### constructor

• **new btSoftBody**(`worldInfo`, `node_count`, `x`, `m`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldInfo` | [`btSoftBodyWorldInfo`](Ammo.btSoftBodyWorldInfo.md) |
| `node_count` | `number` |
| `x` | [`btVector3`](Ammo.btVector3.md) |
| `m` | readonly `number`[] |

#### Overrides

[btCollisionObject](Ammo.btCollisionObject.md).[constructor](Ammo.btCollisionObject.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:1010](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1010)
