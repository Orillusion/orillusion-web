[**@orillusion/physics**](../../../../README.md)

***

# Class: btSoftBody

Defined in: [packages/ammo/ammo.d.ts:1024](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1024)

## Extends

- [`btCollisionObject`](btCollisionObject.md)

## Constructors

### Constructor

> **new btSoftBody**(`worldInfo`, `node_count`, `x`, `m`): `btSoftBody`

Defined in: [packages/ammo/ammo.d.ts:1025](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1025)

#### Parameters

##### worldInfo

[`btSoftBodyWorldInfo`](btSoftBodyWorldInfo.md)

##### node\_count

`number`

##### x

[`btVector3`](btVector3.md)

##### m

readonly `number`[]

#### Returns

`btSoftBody`

#### Overrides

[`btCollisionObject`](btCollisionObject.md).[`constructor`](btCollisionObject.md#constructor)

## Properties

### kB

> **kB**: `number`

Defined in: [packages/ammo/ammo.d.ts:128](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L128)

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`kB`](btCollisionObject.md#kb)

## Methods

### setAnisotropicFriction()

> **setAnisotropicFriction**(`anisotropicFriction`, `frictionMode`): `void`

Defined in: [packages/ammo/ammo.d.ts:129](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L129)

#### Parameters

##### anisotropicFriction

[`btVector3`](btVector3.md)

##### frictionMode

`number`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setAnisotropicFriction`](btCollisionObject.md#setanisotropicfriction)

***

### getCollisionShape()

> **getCollisionShape**(): [`btCollisionShape`](btCollisionShape.md)

Defined in: [packages/ammo/ammo.d.ts:130](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L130)

#### Returns

[`btCollisionShape`](btCollisionShape.md)

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`getCollisionShape`](btCollisionObject.md#getcollisionshape)

***

### setContactProcessingThreshold()

> **setContactProcessingThreshold**(`contactProcessingThreshold`): `void`

Defined in: [packages/ammo/ammo.d.ts:131](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L131)

#### Parameters

##### contactProcessingThreshold

`number`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setContactProcessingThreshold`](btCollisionObject.md#setcontactprocessingthreshold)

***

### setActivationState()

> **setActivationState**(`newState`): `void`

Defined in: [packages/ammo/ammo.d.ts:132](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L132)

#### Parameters

##### newState

`number`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setActivationState`](btCollisionObject.md#setactivationstate)

***

### forceActivationState()

> **forceActivationState**(`newState`): `void`

Defined in: [packages/ammo/ammo.d.ts:133](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L133)

#### Parameters

##### newState

`number`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`forceActivationState`](btCollisionObject.md#forceactivationstate)

***

### activate()

> **activate**(`forceActivation?`): `void`

Defined in: [packages/ammo/ammo.d.ts:134](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L134)

#### Parameters

##### forceActivation?

`boolean`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`activate`](btCollisionObject.md#activate)

***

### isActive()

> **isActive**(): `boolean`

Defined in: [packages/ammo/ammo.d.ts:135](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L135)

#### Returns

`boolean`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`isActive`](btCollisionObject.md#isactive)

***

### isKinematicObject()

> **isKinematicObject**(): `boolean`

Defined in: [packages/ammo/ammo.d.ts:136](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L136)

#### Returns

`boolean`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`isKinematicObject`](btCollisionObject.md#iskinematicobject)

***

### isStaticObject()

> **isStaticObject**(): `boolean`

Defined in: [packages/ammo/ammo.d.ts:137](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L137)

#### Returns

`boolean`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`isStaticObject`](btCollisionObject.md#isstaticobject)

***

### isStaticOrKinematicObject()

> **isStaticOrKinematicObject**(): `boolean`

Defined in: [packages/ammo/ammo.d.ts:138](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L138)

#### Returns

`boolean`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`isStaticOrKinematicObject`](btCollisionObject.md#isstaticorkinematicobject)

***

### getRestitution()

> **getRestitution**(): `number`

Defined in: [packages/ammo/ammo.d.ts:139](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L139)

#### Returns

`number`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`getRestitution`](btCollisionObject.md#getrestitution)

***

### getFriction()

> **getFriction**(): `number`

Defined in: [packages/ammo/ammo.d.ts:140](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L140)

#### Returns

`number`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`getFriction`](btCollisionObject.md#getfriction)

***

### getRollingFriction()

> **getRollingFriction**(): `number`

Defined in: [packages/ammo/ammo.d.ts:141](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L141)

#### Returns

`number`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`getRollingFriction`](btCollisionObject.md#getrollingfriction)

***

### setRestitution()

> **setRestitution**(`rest`): `void`

Defined in: [packages/ammo/ammo.d.ts:142](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L142)

#### Parameters

##### rest

`number`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setRestitution`](btCollisionObject.md#setrestitution)

***

### setFriction()

> **setFriction**(`frict`): `void`

Defined in: [packages/ammo/ammo.d.ts:143](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L143)

#### Parameters

##### frict

`number`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setFriction`](btCollisionObject.md#setfriction)

***

### setRollingFriction()

> **setRollingFriction**(`frict`): `void`

Defined in: [packages/ammo/ammo.d.ts:144](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L144)

#### Parameters

##### frict

`number`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setRollingFriction`](btCollisionObject.md#setrollingfriction)

***

### getWorldTransform()

> **getWorldTransform**(): [`btTransform`](btTransform.md)

Defined in: [packages/ammo/ammo.d.ts:145](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L145)

#### Returns

[`btTransform`](btTransform.md)

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`getWorldTransform`](btCollisionObject.md#getworldtransform)

***

### getCollisionFlags()

> **getCollisionFlags**(): `number`

Defined in: [packages/ammo/ammo.d.ts:146](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L146)

#### Returns

`number`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`getCollisionFlags`](btCollisionObject.md#getcollisionflags)

***

### setCollisionFlags()

> **setCollisionFlags**(`flags`): `void`

Defined in: [packages/ammo/ammo.d.ts:147](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L147)

#### Parameters

##### flags

`number`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setCollisionFlags`](btCollisionObject.md#setcollisionflags)

***

### setWorldTransform()

> **setWorldTransform**(`worldTrans`): `void`

Defined in: [packages/ammo/ammo.d.ts:148](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L148)

#### Parameters

##### worldTrans

[`btTransform`](btTransform.md)

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setWorldTransform`](btCollisionObject.md#setworldtransform)

***

### setCollisionShape()

> **setCollisionShape**(`collisionShape`): `void`

Defined in: [packages/ammo/ammo.d.ts:149](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L149)

#### Parameters

##### collisionShape

[`btCollisionShape`](btCollisionShape.md)

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setCollisionShape`](btCollisionObject.md#setcollisionshape)

***

### setCcdMotionThreshold()

> **setCcdMotionThreshold**(`ccdMotionThreshold`): `void`

Defined in: [packages/ammo/ammo.d.ts:150](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L150)

#### Parameters

##### ccdMotionThreshold

`number`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setCcdMotionThreshold`](btCollisionObject.md#setccdmotionthreshold)

***

### setCcdSweptSphereRadius()

> **setCcdSweptSphereRadius**(`radius`): `void`

Defined in: [packages/ammo/ammo.d.ts:151](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L151)

#### Parameters

##### radius

`number`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setCcdSweptSphereRadius`](btCollisionObject.md#setccdsweptsphereradius)

***

### getUserIndex()

> **getUserIndex**(): `number`

Defined in: [packages/ammo/ammo.d.ts:152](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L152)

#### Returns

`number`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`getUserIndex`](btCollisionObject.md#getuserindex)

***

### setUserIndex()

> **setUserIndex**(`index`): `void`

Defined in: [packages/ammo/ammo.d.ts:153](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L153)

#### Parameters

##### index

`number`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setUserIndex`](btCollisionObject.md#setuserindex)

***

### getUserPointer()

> **getUserPointer**(): `unknown`

Defined in: [packages/ammo/ammo.d.ts:154](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L154)

#### Returns

`unknown`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`getUserPointer`](btCollisionObject.md#getuserpointer)

***

### setUserPointer()

> **setUserPointer**(`userPointer`): `void`

Defined in: [packages/ammo/ammo.d.ts:155](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L155)

#### Parameters

##### userPointer

`unknown`

#### Returns

`void`

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`setUserPointer`](btCollisionObject.md#setuserpointer)

***

### getBroadphaseHandle()

> **getBroadphaseHandle**(): [`btBroadphaseProxy`](btBroadphaseProxy.md)

Defined in: [packages/ammo/ammo.d.ts:156](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L156)

#### Returns

[`btBroadphaseProxy`](btBroadphaseProxy.md)

#### Inherited from

[`btCollisionObject`](btCollisionObject.md).[`getBroadphaseHandle`](btCollisionObject.md#getbroadphasehandle)

***

### get\_m\_cfg()

> **get\_m\_cfg**(): [`Config`](Config.md)

Defined in: [packages/ammo/ammo.d.ts:1026](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1026)

#### Returns

[`Config`](Config.md)

***

### set\_m\_cfg()

> **set\_m\_cfg**(`m_cfg`): `void`

Defined in: [packages/ammo/ammo.d.ts:1027](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1027)

#### Parameters

##### m\_cfg

[`Config`](Config.md)

#### Returns

`void`

***

### get\_m\_nodes()

> **get\_m\_nodes**(): [`tNodeArray`](tNodeArray.md)

Defined in: [packages/ammo/ammo.d.ts:1028](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1028)

#### Returns

[`tNodeArray`](tNodeArray.md)

***

### set\_m\_nodes()

> **set\_m\_nodes**(`m_nodes`): `void`

Defined in: [packages/ammo/ammo.d.ts:1029](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1029)

#### Parameters

##### m\_nodes

[`tNodeArray`](tNodeArray.md)

#### Returns

`void`

***

### get\_m\_faces()

> **get\_m\_faces**(): [`tFaceArray`](tFaceArray.md)

Defined in: [packages/ammo/ammo.d.ts:1030](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1030)

#### Returns

[`tFaceArray`](tFaceArray.md)

***

### set\_m\_faces()

> **set\_m\_faces**(`m_faces`): `void`

Defined in: [packages/ammo/ammo.d.ts:1031](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1031)

#### Parameters

##### m\_faces

[`tFaceArray`](tFaceArray.md)

#### Returns

`void`

***

### get\_m\_materials()

> **get\_m\_materials**(): [`tMaterialArray`](tMaterialArray.md)

Defined in: [packages/ammo/ammo.d.ts:1032](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1032)

#### Returns

[`tMaterialArray`](tMaterialArray.md)

***

### set\_m\_materials()

> **set\_m\_materials**(`m_materials`): `void`

Defined in: [packages/ammo/ammo.d.ts:1033](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1033)

#### Parameters

##### m\_materials

[`tMaterialArray`](tMaterialArray.md)

#### Returns

`void`

***

### get\_m\_anchors()

> **get\_m\_anchors**(): [`tAnchorArray`](tAnchorArray.md)

Defined in: [packages/ammo/ammo.d.ts:1034](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1034)

#### Returns

[`tAnchorArray`](tAnchorArray.md)

***

### set\_m\_anchors()

> **set\_m\_anchors**(`m_anchors`): `void`

Defined in: [packages/ammo/ammo.d.ts:1035](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1035)

#### Parameters

##### m\_anchors

[`tAnchorArray`](tAnchorArray.md)

#### Returns

`void`

***

### checkLink()

> **checkLink**(`node0`, `node1`): `boolean`

Defined in: [packages/ammo/ammo.d.ts:1036](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1036)

#### Parameters

##### node0

`number`

##### node1

`number`

#### Returns

`boolean`

***

### checkFace()

> **checkFace**(`node0`, `node1`, `node2`): `boolean`

Defined in: [packages/ammo/ammo.d.ts:1037](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1037)

#### Parameters

##### node0

`number`

##### node1

`number`

##### node2

`number`

#### Returns

`boolean`

***

### appendMaterial()

> **appendMaterial**(): [`Material`](Material.md)

Defined in: [packages/ammo/ammo.d.ts:1038](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1038)

#### Returns

[`Material`](Material.md)

***

### appendNode()

> **appendNode**(`x`, `m`): `void`

Defined in: [packages/ammo/ammo.d.ts:1039](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1039)

#### Parameters

##### x

[`btVector3`](btVector3.md)

##### m

`number`

#### Returns

`void`

***

### appendLink()

> **appendLink**(`node0`, `node1`, `mat`, `bcheckexist`): `void`

Defined in: [packages/ammo/ammo.d.ts:1040](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1040)

#### Parameters

##### node0

`number`

##### node1

`number`

##### mat

[`Material`](Material.md)

##### bcheckexist

`boolean`

#### Returns

`void`

***

### appendFace()

> **appendFace**(`node0`, `node1`, `node2`, `mat`): `void`

Defined in: [packages/ammo/ammo.d.ts:1041](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1041)

#### Parameters

##### node0

`number`

##### node1

`number`

##### node2

`number`

##### mat

[`Material`](Material.md)

#### Returns

`void`

***

### appendTetra()

> **appendTetra**(`node0`, `node1`, `node2`, `node3`, `mat`): `void`

Defined in: [packages/ammo/ammo.d.ts:1042](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1042)

#### Parameters

##### node0

`number`

##### node1

`number`

##### node2

`number`

##### node3

`number`

##### mat

[`Material`](Material.md)

#### Returns

`void`

***

### appendAnchor()

> **appendAnchor**(`node`, `body`, `disableCollisionBetweenLinkedBodies`, `influence`): `void`

Defined in: [packages/ammo/ammo.d.ts:1043](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1043)

#### Parameters

##### node

`number`

##### body

[`btRigidBody`](btRigidBody.md)

##### disableCollisionBetweenLinkedBodies

`boolean`

##### influence

`number`

#### Returns

`void`

***

### addForce()

#### Call Signature

> **addForce**(`force`): `void`

Defined in: [packages/ammo/ammo.d.ts:1044](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1044)

##### Parameters

###### force

[`btVector3`](btVector3.md)

##### Returns

`void`

#### Call Signature

> **addForce**(`force`, `node`): `void`

Defined in: [packages/ammo/ammo.d.ts:1045](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1045)

##### Parameters

###### force

[`btVector3`](btVector3.md)

###### node

`number`

##### Returns

`void`

***

### addAeroForceToNode()

> **addAeroForceToNode**(`windVelocity`, `nodeIndex`): `void`

Defined in: [packages/ammo/ammo.d.ts:1046](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1046)

#### Parameters

##### windVelocity

[`btVector3`](btVector3.md)

##### nodeIndex

`number`

#### Returns

`void`

***

### getTotalMass()

> **getTotalMass**(): `number`

Defined in: [packages/ammo/ammo.d.ts:1047](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1047)

#### Returns

`number`

***

### setTotalMass()

> **setTotalMass**(`mass`, `fromfaces`): `void`

Defined in: [packages/ammo/ammo.d.ts:1048](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1048)

#### Parameters

##### mass

`number`

##### fromfaces

`boolean`

#### Returns

`void`

***

### setMass()

> **setMass**(`node`, `mass`): `void`

Defined in: [packages/ammo/ammo.d.ts:1049](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1049)

#### Parameters

##### node

`number`

##### mass

`number`

#### Returns

`void`

***

### transform()

> **transform**(`trs`): `void`

Defined in: [packages/ammo/ammo.d.ts:1050](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1050)

#### Parameters

##### trs

[`btTransform`](btTransform.md)

#### Returns

`void`

***

### translate()

> **translate**(`trs`): `void`

Defined in: [packages/ammo/ammo.d.ts:1051](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1051)

#### Parameters

##### trs

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### rotate()

> **rotate**(`rot`): `void`

Defined in: [packages/ammo/ammo.d.ts:1052](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1052)

#### Parameters

##### rot

[`btQuaternion`](btQuaternion.md)

#### Returns

`void`

***

### scale()

> **scale**(`scl`): `void`

Defined in: [packages/ammo/ammo.d.ts:1053](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1053)

#### Parameters

##### scl

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### generateClusters()

> **generateClusters**(`k`, `maxiterations?`): `number`

Defined in: [packages/ammo/ammo.d.ts:1054](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1054)

#### Parameters

##### k

`number`

##### maxiterations?

`number`

#### Returns

`number`

***

### generateBendingConstraints()

> **generateBendingConstraints**(`distance`, `mat`): `number`

Defined in: [packages/ammo/ammo.d.ts:1055](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1055)

#### Parameters

##### distance

`number`

##### mat

[`Material`](Material.md)

#### Returns

`number`

***

### upcast()

> **upcast**(`colObj`): `btSoftBody`

Defined in: [packages/ammo/ammo.d.ts:1056](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L1056)

#### Parameters

##### colObj

[`btCollisionObject`](btCollisionObject.md)

#### Returns

`btSoftBody`
