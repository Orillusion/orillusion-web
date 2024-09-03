# Class: Rigidbody

Rigidbody Component
Rigid bodies can endow game objects with physical properties, allowing them to be controlled by the physics system and subjected to forces and torques, thus achieving realistic motion effects.

## Hierarchy

- `ComponentBase`

  ↳ **`Rigidbody`**

### Constructors

- [constructor](Rigidbody.md#constructor)

### Properties

- [collisionShape](Rigidbody.md#collisionshape)
- [group](Rigidbody.md#group)
- [mask](Rigidbody.md#mask)
- [object3D](Rigidbody.md#object3d)
- [isDestroyed](Rigidbody.md#isdestroyed)

### Accessors

- [btBodyInited](Rigidbody.md#btbodyinited)
- [btRigidbody](Rigidbody.md#btrigidbody)
- [shape](Rigidbody.md#shape)
- [userIndex](Rigidbody.md#userindex)
- [activationState](Rigidbody.md#activationstate)
- [collisionFlags](Rigidbody.md#collisionflags)
- [isKinematic](Rigidbody.md#iskinematic)
- [isTrigger](Rigidbody.md#istrigger)
- [isDisableDebugVisible](Rigidbody.md#isdisabledebugvisible)
- [margin](Rigidbody.md#margin)
- [damping](Rigidbody.md#damping)
- [contactProcessingThreshold](Rigidbody.md#contactprocessingthreshold)
- [gravity](Rigidbody.md#gravity)
- [friction](Rigidbody.md#friction)
- [rollingFriction](Rigidbody.md#rollingfriction)
- [restitution](Rigidbody.md#restitution)
- [velocity](Rigidbody.md#velocity)
- [angularVelocity](Rigidbody.md#angularvelocity)
- [linearVelocity](Rigidbody.md#linearvelocity)
- [mass](Rigidbody.md#mass)
- [isSilent](Rigidbody.md#issilent)
- [ccdSettings](Rigidbody.md#ccdsettings)
- [enableCollisionEvent](Rigidbody.md#enablecollisionevent)
- [collisionEvent](Rigidbody.md#collisionevent)
- [enablePhysicsTransformSync](Rigidbody.md#enablephysicstransformsync)
- [eventDispatcher](Rigidbody.md#eventdispatcher)
- [isStart](Rigidbody.md#isstart)
- [transform](Rigidbody.md#transform)
- [enable](Rigidbody.md#enable)

### Methods

- [init](Rigidbody.md#init)
- [start](Rigidbody.md#start)
- [onUpdate](Rigidbody.md#onupdate)
- [updateTransform](Rigidbody.md#updatetransform)
- [clearForcesAndVelocities](Rigidbody.md#clearforcesandvelocities)
- [wait](Rigidbody.md#wait)
- [addCollisionFlag](Rigidbody.md#addcollisionflag)
- [removeCollisionFlag](Rigidbody.md#removecollisionflag)
- [destroy](Rigidbody.md#destroy)
- [stop](Rigidbody.md#stop)
- [onEnable](Rigidbody.md#onenable)
- [onDisable](Rigidbody.md#ondisable)
- [onLateUpdate](Rigidbody.md#onlateupdate)
- [onBeforeUpdate](Rigidbody.md#onbeforeupdate)
- [onCompute](Rigidbody.md#oncompute)
- [onGraphic](Rigidbody.md#ongraphic)
- [onParentChange](Rigidbody.md#onparentchange)
- [onAddChild](Rigidbody.md#onaddchild)
- [onRemoveChild](Rigidbody.md#onremovechild)
- [cloneTo](Rigidbody.md#cloneto)
- [copyComponent](Rigidbody.md#copycomponent)
- [beforeDestroy](Rigidbody.md#beforedestroy)

## Constructors

### constructor

• **new Rigidbody**(): [`Rigidbody`](Rigidbody.md)

#### Returns

[`Rigidbody`](Rigidbody.md)

#### Inherited from

ComponentBase.constructor

## Properties

### collisionShape

▪ `Static` `Readonly` **collisionShape**: typeof [`CollisionShapeUtil`](CollisionShapeUtil.md) = `CollisionShapeUtil`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:40](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L40)

___

### group

• **group**: `number`

The collision group of the rigid body.

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:233](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L233)

___

### mask

• **mask**: `number`

The collision mask of the rigid body.

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:238](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L238)

___

### object3D

• **object3D**: `Object3D` = `null`

owner object3D

#### Inherited from

ComponentBase.object3D

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### isDestroyed

• `Optional` **isDestroyed**: `boolean`

#### Inherited from

ComponentBase.isDestroyed

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

## Accessors

### btBodyInited

• `get` **btBodyInited**(): `boolean`

Check if rigidbody inited

#### Returns

`boolean`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:193](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L193)

___

### btRigidbody

• `get` **btRigidbody**(): [`btRigidBody`](Ammo.btRigidBody.md)

Return internal Ammo.btRigidBody

#### Returns

[`btRigidBody`](Ammo.btRigidBody.md)

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:200](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L200)

___

### shape

• `get` **shape**(): [`btCollisionShape`](Ammo.btCollisionShape.md)

The collision shape of the rigid body.

#### Returns

[`btCollisionShape`](Ammo.btCollisionShape.md)

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:214](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L214)

• `set` **shape**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`btCollisionShape`](Ammo.btCollisionShape.md) |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:217](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L217)

___

### userIndex

• `get` **userIndex**(): `number`

User index, which can be used as an identifier for the rigid body.

#### Returns

`number`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:243](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L243)

• `set` **userIndex**(`value`): `void`

Sets the user index for the rigid body.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:250](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L250)

___

### activationState

• `get` **activationState**(): [`ActivationState`](../enums/ActivationState.md)

Activation state of the rigid body.

#### Returns

[`ActivationState`](../enums/ActivationState.md)

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:258](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L258)

• `set` **activationState**(`value`): `void`

Sets the activation state of the rigid body.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ActivationState`](../enums/ActivationState.md) |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:265](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L265)

___

### collisionFlags

• `get` **collisionFlags**(): `number`

Collision flags of the rigid body.

#### Returns

`number`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:273](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L273)

___

### isKinematic

• `get` **isKinematic**(): `boolean`

Check if the rigidbody affect physics system

#### Returns

`boolean`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:295](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L295)

• `set` **isKinematic**(`value`): `void`

Set the rigid body to a kinematic object

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:301](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L301)

___

### isTrigger

• `get` **isTrigger**(): `boolean`

Check if the rigid body is a trigger

#### Returns

`boolean`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:327](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L327)

• `set` **isTrigger**(`value`): `void`

Set the rigid body as a trigger

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:333](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L333)

___

### isDisableDebugVisible

• `get` **isDisableDebugVisible**(): `boolean`

Check if the rigid body is visible in debug mode

#### Returns

`boolean`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:340](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L340)

• `set` **isDisableDebugVisible**(`value`): `void`

Set the rigid body to be visible in debug mode

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:346](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L346)

___

### margin

• `get` **margin**(): `number`

Margin of the collision shape.

#### Returns

`number`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:353](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L353)

• `set` **margin**(`value`): `void`

Sets the margin of the collision shape.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

**`Default`**

```ts
0.02
```

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:360](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L360)

___

### damping

• `get` **damping**(): [`number`, `number`]

Damping of the rigid body. 

Sets the damping parameters. The first value is the linear damping, the second is the angular damping.

#### Returns

[`number`, `number`]

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:371](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L371)

• `set` **damping**(`params`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`number`, `number`] |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:375](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L375)

___

### contactProcessingThreshold

• `get` **contactProcessingThreshold**(): `number`

Contact processing threshold of the rigid body.

#### Returns

`number`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:382](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L382)

• `set` **contactProcessingThreshold**(`value`): `void`

Sets the contact processing threshold of the rigid body.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:388](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L388)

___

### gravity

• `get` **gravity**(): `Vector3`

Gravity vector applied to the rigid body.

#### Returns

`Vector3`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:395](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L395)

• `set` **gravity**(`value`): `void`

Sets the gravity vector applied to the rigid body.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector3` |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:401](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L401)

___

### friction

• `get` **friction**(): `number`

Get friction value

#### Returns

`number`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:408](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L408)

• `set` **friction**(`value`): `void`

Set friction value. default `0.5`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:414](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L414)

___

### rollingFriction

• `get` **rollingFriction**(): `number`

Get rolling friction value

#### Returns

`number`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:421](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L421)

• `set` **rollingFriction**(`value`): `void`

Set rolling friction value

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:427](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L427)

___

### restitution

• `get` **restitution**(): `number`

Get restitution value

#### Returns

`number`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:434](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L434)

• `set` **restitution**(`value`): `void`

Set restitution value default `0.5`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:440](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L440)

___

### velocity

• `get` **velocity**(): `Vector3`

Get velocity value of current object

#### Returns

`Vector3`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:447](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L447)

• `set` **velocity**(`value`): `void`

Set velocity value of current object

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector3` |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:453](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L453)

___

### angularVelocity

• `get` **angularVelocity**(): `Vector3`

Get the angular velocity value of current object

#### Returns

`Vector3`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:461](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L461)

• `set` **angularVelocity**(`value`): `void`

Set the angular velocity value of current object

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector3` |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:470](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L470)

___

### linearVelocity

• `get` **linearVelocity**(): `Vector3`

Get the linear velocity value of current object

#### Returns

`Vector3`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:477](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L477)

• `set` **linearVelocity**(`value`): `void`

Set the linear velocity value of current object

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector3` |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:486](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L486)

___

### mass

• `get` **mass**(): `number`

Get mass value

#### Returns

`number`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:493](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L493)

• `set` **mass**(`value`): `void`

Set mass value. default `0.01`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:499](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L499)

___

### isSilent

• `get` **isSilent**(): `boolean`

刚体的静默状态。
如果为 true 则任何物理对象与静默状态的对象发生碰撞时都不会触发双方的碰撞回调。

#### Returns

`boolean`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:526](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L526)

• `set` **isSilent**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:529](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L529)

___

### ccdSettings

• `get` **ccdSettings**(): [`number`, `number`]

#### Returns

[`number`, `number`]

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:550](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L550)

• `set` **ccdSettings**(`params`): `void`

CCD (Continuous Collision Detection)

Sets the CCD parameters. The first value is the motion threshold, the second is the swept sphere radius.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`number`, `number`] | [motion threshold, swept sphere radius] |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:544](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L544)

___

### enableCollisionEvent

• `get` **enableCollisionEvent**(): `boolean`

Enable/disable collision callbacks

#### Returns

`boolean`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:557](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L557)

• `set` **enableCollisionEvent**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:560](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L560)

___

### collisionEvent

• `get` **collisionEvent**(): (`contactPoint`: [`btManifoldPoint`](Ammo.btManifoldPoint.md), `selfBody`: [`btRigidBody`](Ammo.btRigidBody.md), `otherBody`: [`btRigidBody`](Ammo.btRigidBody.md)) => `void`

Collision callbacks

#### Returns

`fn`

▸ (`contactPoint`, `selfBody`, `otherBody`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `contactPoint` | [`btManifoldPoint`](Ammo.btManifoldPoint.md) |
| `selfBody` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `otherBody` | [`btRigidBody`](Ammo.btRigidBody.md) |

##### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:568](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L568)

• `set` **collisionEvent**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`contactPoint`: [`btManifoldPoint`](Ammo.btManifoldPoint.md), `selfBody`: [`btRigidBody`](Ammo.btRigidBody.md), `otherBody`: [`btRigidBody`](Ammo.btRigidBody.md)) => `void` |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:571](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L571)

___

### enablePhysicsTransformSync

• `get` **enablePhysicsTransformSync**(): `boolean`

Enables or disables the transform sync with physics.
If enabled, changes to the transform will automatically update the physics body.

#### Returns

`boolean`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:579](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L579)

• `set` **enablePhysicsTransformSync**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:582](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L582)

___

### eventDispatcher

• `get` **eventDispatcher**(): `CEventDispatcher`

#### Returns

`CEventDispatcher`

#### Inherited from

ComponentBase.eventDispatcher

#### Defined in

[src/components/ComponentBase.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L23)

• `set` **eventDispatcher**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `CEventDispatcher` |

#### Returns

`void`

#### Inherited from

ComponentBase.eventDispatcher

#### Defined in

[src/components/ComponentBase.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L28)

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ComponentBase.isStart

#### Defined in

[src/components/ComponentBase.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L40)

___

### transform

• `get` **transform**(): `Transform`

Return the Transform component attached to the Object3D.

#### Returns

`Transform`

#### Inherited from

ComponentBase.transform

#### Defined in

[src/components/ComponentBase.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L47)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

ComponentBase.enable

#### Defined in

[src/components/ComponentBase.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L68)

• `set` **enable**(`value`): `void`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

ComponentBase.enable

#### Defined in

[src/components/ComponentBase.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L54)

## Methods

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

ComponentBase.init

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:42](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L42)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

ComponentBase.start

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:47](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L47)

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Overrides

ComponentBase.onUpdate

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:123](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L123)

___

### updateTransform

▸ **updateTransform**(`position?`, `rotation?`, `clearFV?`): `void`

更新刚体的位置和旋转，并同步三维对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position?` | `Vector3` | 可选，默认为三维对象的位置 |
| `rotation?` | `Vector3` \| `Quaternion` | 可选，默认为三维对象的欧拉角旋转 |
| `clearFV?` | `boolean` | 可选，清除刚体的力和速度，默认为 false |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:173](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L173)

___

### clearForcesAndVelocities

▸ **clearForcesAndVelocities**(): `void`

Remove the force and velocity of the rigid body

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:184](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L184)

___

### wait

▸ **wait**(): `Promise`\<[`btRigidBody`](Ammo.btRigidBody.md)\>

Asynchronously retrieves the fully initialized rigid body instance.

#### Returns

`Promise`\<[`btRigidBody`](Ammo.btRigidBody.md)\>

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:206](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L206)

___

### addCollisionFlag

▸ **addCollisionFlag**(`value`): `void`

Adds a collision flag to the rigid body.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CollisionFlags`](../enums/CollisionFlags.md) |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:280](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L280)

___

### removeCollisionFlag

▸ **removeCollisionFlag**(`value`): `void`

Removes a collision flag from the rigid body.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CollisionFlags`](../enums/CollisionFlags.md) |

#### Returns

`void`

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:287](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L287)

___

### destroy

▸ **destroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Overrides

ComponentBase.destroy

#### Defined in

[packages/physics/rigidbody/Rigidbody.ts:587](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L587)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

ComponentBase.stop

#### Defined in

[src/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L114)

___

### onEnable

▸ **onEnable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

ComponentBase.onEnable

#### Defined in

[src/components/ComponentBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L115)

___

### onDisable

▸ **onDisable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

ComponentBase.onDisable

#### Defined in

[src/components/ComponentBase.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L116)

___

### onLateUpdate

▸ **onLateUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

ComponentBase.onLateUpdate

#### Defined in

[src/components/ComponentBase.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L118)

___

### onBeforeUpdate

▸ **onBeforeUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

ComponentBase.onBeforeUpdate

#### Defined in

[src/components/ComponentBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L119)

___

### onCompute

▸ **onCompute**(`view?`, `command?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |
| `command?` | `GPUCommandEncoder` |

#### Returns

`any`

#### Inherited from

ComponentBase.onCompute

#### Defined in

[src/components/ComponentBase.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L120)

___

### onGraphic

▸ **onGraphic**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

ComponentBase.onGraphic

#### Defined in

[src/components/ComponentBase.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L121)

___

### onParentChange

▸ **onParentChange**(`lastParent?`, `currentParent?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lastParent?` | `Object3D` |
| `currentParent?` | `Object3D` |

#### Returns

`any`

#### Inherited from

ComponentBase.onParentChange

#### Defined in

[src/components/ComponentBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L122)

___

### onAddChild

▸ **onAddChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | `Object3D` |

#### Returns

`any`

#### Inherited from

ComponentBase.onAddChild

#### Defined in

[src/components/ComponentBase.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L123)

___

### onRemoveChild

▸ **onRemoveChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | `Object3D` |

#### Returns

`any`

#### Inherited from

ComponentBase.onRemoveChild

#### Defined in

[src/components/ComponentBase.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L124)

___

### cloneTo

▸ **cloneTo**(`obj`): `void`

clone component data to target object3D

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `Object3D` | target object3D |

#### Returns

`void`

#### Inherited from

ComponentBase.cloneTo

#### Defined in

[src/components/ComponentBase.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L131)

___

### copyComponent

▸ **copyComponent**(`from`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `this` |

#### Returns

`this`

#### Inherited from

ComponentBase.copyComponent

#### Defined in

[src/components/ComponentBase.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L133)

___

### beforeDestroy

▸ **beforeDestroy**(`force?`): `void`

before release this component, object refrences are not be set null now.

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

ComponentBase.beforeDestroy

#### Defined in

[src/components/ComponentBase.ts:200](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L200)
