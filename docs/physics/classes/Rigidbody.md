[**@orillusion/physics**](../README.md)

***

# Class: Rigidbody

Defined in: [packages/physics/rigidbody/Rigidbody.ts:15](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L15)

Rigidbody Component
Rigid bodies can endow game objects with physical properties, allowing them to be controlled by the physics system and subjected to forces and torques, thus achieving realistic motion effects.

## Extends

- `ComponentBase`

## Constructors

### Constructor

> **new Rigidbody**(): `Rigidbody`

#### Returns

`Rigidbody`

#### Inherited from

`ComponentBase.constructor`

## Properties

### collisionShape

> `readonly` `static` **collisionShape**: *typeof* [`CollisionShapeUtil`](CollisionShapeUtil.md) = `CollisionShapeUtil`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:40](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L40)

***

### object3D

> **object3D**: `Object3D` = `null`

Defined in: [src/components/ComponentBase.ts:29](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L29)

owner object3D

#### Inherited from

`ComponentBase.object3D`

***

### isDestroyed

> **isDestroyed**: `boolean` = `false`

Defined in: [src/components/ComponentBase.ts:77](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L77)

#### Inherited from

`ComponentBase.isDestroyed`

***

### group

> **group**: `number`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:233](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L233)

The collision group of the rigid body.

***

### mask

> **mask**: `number`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:238](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L238)

The collision mask of the rigid body.

## Accessors

### visibleLayer

#### Get Signature

> **get** **visibleLayer**(): `number`

Defined in: [src/components/ComponentBase.ts:46](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L46)

Composition-layer membership bitmask. The pass / camera /
collector filters via

    (component.visibleLayer & pass.layerMask & camera.cullingMask) !== 0

Defaults to VisibleLayer.Default (bit 0) so a fresh
subclass is visible to passes whose `layerMask` is
VisibleLayer.All (which includes bit 0). Application code
can assign project-specific bits (1..31) to organise the scene
into composition layers.

##### Returns

`number`

#### Set Signature

> **set** **visibleLayer**(`value`): `void`

Defined in: [src/components/ComponentBase.ts:50](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L50)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`ComponentBase.visibleLayer`

***

### eventDispatcher

#### Get Signature

> **get** **eventDispatcher**(): `CEventDispatcher`

Defined in: [src/components/ComponentBase.ts:63](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L63)

##### Returns

`CEventDispatcher`

#### Set Signature

> **set** **eventDispatcher**(`value`): `void`

Defined in: [src/components/ComponentBase.ts:68](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L68)

##### Parameters

###### value

`CEventDispatcher`

##### Returns

`void`

#### Inherited from

`ComponentBase.eventDispatcher`

***

### isStart

#### Get Signature

> **get** **isStart**(): `boolean`

Defined in: [src/components/ComponentBase.ts:79](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L79)

##### Returns

`boolean`

#### Inherited from

`ComponentBase.isStart`

***

### transform

#### Get Signature

> **get** **transform**(): `Transform`

Defined in: [src/components/ComponentBase.ts:89](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L89)

Return the Transform component attached to the Object3D.
Null before the component is attached — `addComponent` assigns
`object3D` only after construction — so constructor-time callers
can probe safely via `this.transform?.`.

##### Returns

`Transform`

#### Inherited from

`ComponentBase.transform`

***

### enable

#### Get Signature

> **get** **enable**(): `boolean`

Defined in: [src/components/ComponentBase.ts:113](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

##### Returns

`boolean`

#### Set Signature

> **set** **enable**(`value`): `void`

Defined in: [src/components/ComponentBase.ts:96](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L96)

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`ComponentBase.enable`

***

### btBodyInited

#### Get Signature

> **get** **btBodyInited**(): `boolean`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:193](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L193)

Check if rigidbody inited

##### Returns

`boolean`

***

### btRigidbody

#### Get Signature

> **get** **btRigidbody**(): [`btRigidBody`](../@orillusion/namespaces/Ammo/classes/btRigidBody.md)

Defined in: [packages/physics/rigidbody/Rigidbody.ts:200](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L200)

Return internal Ammo.btRigidBody

##### Returns

[`btRigidBody`](../@orillusion/namespaces/Ammo/classes/btRigidBody.md)

***

### shape

#### Get Signature

> **get** **shape**(): [`btCollisionShape`](../@orillusion/namespaces/Ammo/classes/btCollisionShape.md)

Defined in: [packages/physics/rigidbody/Rigidbody.ts:214](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L214)

The collision shape of the rigid body.

##### Returns

[`btCollisionShape`](../@orillusion/namespaces/Ammo/classes/btCollisionShape.md)

#### Set Signature

> **set** **shape**(`value`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:217](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L217)

##### Parameters

###### value

[`btCollisionShape`](../@orillusion/namespaces/Ammo/classes/btCollisionShape.md)

##### Returns

`void`

***

### userIndex

#### Get Signature

> **get** **userIndex**(): `number`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:243](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L243)

User index, which can be used as an identifier for the rigid body.

##### Returns

`number`

#### Set Signature

> **set** **userIndex**(`value`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:250](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L250)

Sets the user index for the rigid body.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### activationState

#### Get Signature

> **get** **activationState**(): [`ActivationState`](../enumerations/ActivationState.md)

Defined in: [packages/physics/rigidbody/Rigidbody.ts:258](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L258)

Activation state of the rigid body.

##### Returns

[`ActivationState`](../enumerations/ActivationState.md)

#### Set Signature

> **set** **activationState**(`value`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:265](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L265)

Sets the activation state of the rigid body.

##### Parameters

###### value

[`ActivationState`](../enumerations/ActivationState.md)

##### Returns

`void`

***

### collisionFlags

#### Get Signature

> **get** **collisionFlags**(): `number`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:273](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L273)

Collision flags of the rigid body.

##### Returns

`number`

***

### isKinematic

#### Get Signature

> **get** **isKinematic**(): `boolean`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:295](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L295)

Check if the rigidbody affect physics system

##### Returns

`boolean`

#### Set Signature

> **set** **isKinematic**(`value`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:301](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L301)

Set the rigid body to a kinematic object

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### isTrigger

#### Get Signature

> **get** **isTrigger**(): `boolean`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:327](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L327)

Check if the rigid body is a trigger

##### Returns

`boolean`

#### Set Signature

> **set** **isTrigger**(`value`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:333](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L333)

Set the rigid body as a trigger

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### isDisableDebugVisible

#### Get Signature

> **get** **isDisableDebugVisible**(): `boolean`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:340](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L340)

Check if the rigid body is visible in debug mode

##### Returns

`boolean`

#### Set Signature

> **set** **isDisableDebugVisible**(`value`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:346](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L346)

Set the rigid body to be visible in debug mode

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### margin

#### Get Signature

> **get** **margin**(): `number`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:353](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L353)

Margin of the collision shape.

##### Returns

`number`

#### Set Signature

> **set** **margin**(`value`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:360](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L360)

Sets the margin of the collision shape.

##### Default

```ts
0.02
```

##### Parameters

###### value

`number`

##### Returns

`void`

***

### damping

#### Get Signature

> **get** **damping**(): \[`number`, `number`\]

Defined in: [packages/physics/rigidbody/Rigidbody.ts:371](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L371)

Damping of the rigid body. 

Sets the damping parameters. The first value is the linear damping, the second is the angular damping.

##### Returns

\[`number`, `number`\]

#### Set Signature

> **set** **damping**(`params`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:375](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L375)

##### Parameters

###### params

\[`number`, `number`\]

##### Returns

`void`

***

### contactProcessingThreshold

#### Get Signature

> **get** **contactProcessingThreshold**(): `number`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:382](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L382)

Contact processing threshold of the rigid body.

##### Returns

`number`

#### Set Signature

> **set** **contactProcessingThreshold**(`value`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:388](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L388)

Sets the contact processing threshold of the rigid body.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### gravity

#### Get Signature

> **get** **gravity**(): `Vector3`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:395](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L395)

Gravity vector applied to the rigid body.

##### Returns

`Vector3`

#### Set Signature

> **set** **gravity**(`value`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:401](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L401)

Sets the gravity vector applied to the rigid body.

##### Parameters

###### value

`Vector3`

##### Returns

`void`

***

### friction

#### Get Signature

> **get** **friction**(): `number`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:408](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L408)

Get friction value

##### Returns

`number`

#### Set Signature

> **set** **friction**(`value`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:414](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L414)

Set friction value. default `0.5`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### rollingFriction

#### Get Signature

> **get** **rollingFriction**(): `number`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:421](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L421)

Get rolling friction value

##### Returns

`number`

#### Set Signature

> **set** **rollingFriction**(`value`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:427](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L427)

Set rolling friction value

##### Parameters

###### value

`number`

##### Returns

`void`

***

### restitution

#### Get Signature

> **get** **restitution**(): `number`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:434](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L434)

Get restitution value

##### Returns

`number`

#### Set Signature

> **set** **restitution**(`value`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:440](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L440)

Set restitution value default `0.5`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### velocity

#### Get Signature

> **get** **velocity**(): `Vector3`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:447](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L447)

Get velocity value of current object

##### Returns

`Vector3`

#### Set Signature

> **set** **velocity**(`value`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:453](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L453)

Set velocity value of current object

##### Parameters

###### value

`Vector3`

##### Returns

`void`

***

### angularVelocity

#### Get Signature

> **get** **angularVelocity**(): `Vector3`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:461](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L461)

Get the angular velocity value of current object

##### Returns

`Vector3`

#### Set Signature

> **set** **angularVelocity**(`value`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:470](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L470)

Set the angular velocity value of current object

##### Parameters

###### value

`Vector3`

##### Returns

`void`

***

### linearVelocity

#### Get Signature

> **get** **linearVelocity**(): `Vector3`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:477](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L477)

Get the linear velocity value of current object

##### Returns

`Vector3`

#### Set Signature

> **set** **linearVelocity**(`value`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:486](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L486)

Set the linear velocity value of current object

##### Parameters

###### value

`Vector3`

##### Returns

`void`

***

### mass

#### Get Signature

> **get** **mass**(): `number`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:493](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L493)

Get mass value

##### Returns

`number`

#### Set Signature

> **set** **mass**(`value`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:499](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L499)

Set mass value. default `0.01`

##### Parameters

###### value

`number`

##### Returns

`void`

***

### isSilent

#### Get Signature

> **get** **isSilent**(): `boolean`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:526](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L526)

The silent state of the rigid body.
If true, no collision callbacks on either side will be triggered when any physics object collides with this silent-state object.

##### Returns

`boolean`

#### Set Signature

> **set** **isSilent**(`value`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:529](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L529)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### ccdSettings

#### Get Signature

> **get** **ccdSettings**(): \[`number`, `number`\]

Defined in: [packages/physics/rigidbody/Rigidbody.ts:550](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L550)

##### Returns

\[`number`, `number`\]

#### Set Signature

> **set** **ccdSettings**(`params`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:544](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L544)

CCD (Continuous Collision Detection)

Sets the CCD parameters. The first value is the motion threshold, the second is the swept sphere radius.

##### Parameters

###### params

\[`number`, `number`\]

[motion threshold, swept sphere radius]

##### Returns

`void`

***

### enableCollisionEvent

#### Get Signature

> **get** **enableCollisionEvent**(): `boolean`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:557](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L557)

Enable/disable collision callbacks

##### Returns

`boolean`

#### Set Signature

> **set** **enableCollisionEvent**(`value`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:560](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L560)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### collisionEvent

#### Get Signature

> **get** **collisionEvent**(): (`contactPoint`, `selfBody`, `otherBody`) => `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:568](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L568)

Collision callbacks

##### Returns

(`contactPoint`, `selfBody`, `otherBody`) => `void`

#### Set Signature

> **set** **collisionEvent**(`callback`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:571](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L571)

##### Parameters

###### callback

(`contactPoint`, `selfBody`, `otherBody`) => `void`

##### Returns

`void`

***

### enablePhysicsTransformSync

#### Get Signature

> **get** **enablePhysicsTransformSync**(): `boolean`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:579](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L579)

Enables or disables the transform sync with physics.
If enabled, changes to the transform will automatically update the physics body.

##### Returns

`boolean`

#### Set Signature

> **set** **enablePhysicsTransformSync**(`value`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:582](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L582)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### stop()

> **stop**(): `void`

Defined in: [src/components/ComponentBase.ts:163](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L163)

#### Returns

`void`

#### Inherited from

`ComponentBase.stop`

***

### onEnable()?

> `optional` **onEnable**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:164](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L164)

#### Parameters

##### view?

`View3D`

#### Returns

`any`

#### Inherited from

`ComponentBase.onEnable`

***

### onDisable()?

> `optional` **onDisable**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:165](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L165)

#### Parameters

##### view?

`View3D`

#### Returns

`any`

#### Inherited from

`ComponentBase.onDisable`

***

### onLateUpdate()?

> `optional` **onLateUpdate**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:167](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L167)

#### Parameters

##### view?

`View3D`

#### Returns

`any`

#### Inherited from

`ComponentBase.onLateUpdate`

***

### onBeforeUpdate()?

> `optional` **onBeforeUpdate**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:168](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L168)

#### Parameters

##### view?

`View3D`

#### Returns

`any`

#### Inherited from

`ComponentBase.onBeforeUpdate`

***

### onCompute()?

> `optional` **onCompute**(`view?`, `command?`): `any`

Defined in: [src/components/ComponentBase.ts:169](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L169)

#### Parameters

##### view?

`View3D`

##### command?

`GPUCommandEncoder`

#### Returns

`any`

#### Inherited from

`ComponentBase.onCompute`

***

### onGraphic()?

> `optional` **onGraphic**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:170](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L170)

#### Parameters

##### view?

`View3D`

#### Returns

`any`

#### Inherited from

`ComponentBase.onGraphic`

***

### onParentChange()?

> `optional` **onParentChange**(`lastParent?`, `currentParent?`): `any`

Defined in: [src/components/ComponentBase.ts:171](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L171)

#### Parameters

##### lastParent?

`Object3D`

##### currentParent?

`Object3D`

#### Returns

`any`

#### Inherited from

`ComponentBase.onParentChange`

***

### onAddChild()?

> `optional` **onAddChild**(`child`): `any`

Defined in: [src/components/ComponentBase.ts:172](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L172)

#### Parameters

##### child

`Object3D`

#### Returns

`any`

#### Inherited from

`ComponentBase.onAddChild`

***

### onRemoveChild()?

> `optional` **onRemoveChild**(`child`): `any`

Defined in: [src/components/ComponentBase.ts:173](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L173)

#### Parameters

##### child

`Object3D`

#### Returns

`any`

#### Inherited from

`ComponentBase.onRemoveChild`

***

### cloneTo()

> **cloneTo**(`obj`): `void`

Defined in: [src/components/ComponentBase.ts:180](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L180)

clone component data to target object3D

#### Parameters

##### obj

`Object3D`

target object3D

#### Returns

`void`

#### Inherited from

`ComponentBase.cloneTo`

***

### copyComponent()

> **copyComponent**(`from`): `this`

Defined in: [src/components/ComponentBase.ts:182](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L182)

#### Parameters

##### from

`this`

#### Returns

`this`

#### Inherited from

`ComponentBase.copyComponent`

***

### beforeDestroy()

> **beforeDestroy**(`force?`): `void`

Defined in: [src/components/ComponentBase.ts:249](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L249)

before release this component, object refrences are not be set null now.

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

`ComponentBase.beforeDestroy`

***

### init()

> **init**(): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:42](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L42)

#### Returns

`void`

#### Overrides

`ComponentBase.init`

***

### start()

> **start**(): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:47](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L47)

#### Returns

`void`

#### Overrides

`ComponentBase.start`

***

### onUpdate()

> **onUpdate**(): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:123](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L123)

#### Returns

`void`

#### Overrides

`ComponentBase.onUpdate`

***

### updateTransform()

> **updateTransform**(`position?`, `rotation?`, `clearFV?`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:173](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L173)

Updates the position and rotation of the rigid body and synchronizes the 3D object

#### Parameters

##### position?

`Vector3`

Optional, defaults to the position of the 3D object

##### rotation?

`Vector3` \| `Quaternion`

Optional, defaults to the Euler-angle rotation of the 3D object

##### clearFV?

`boolean`

Optional, whether to clear the rigid body's forces and velocities; defaults to false

#### Returns

`void`

***

### clearForcesAndVelocities()

> **clearForcesAndVelocities**(): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:184](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L184)

Remove the force and velocity of the rigid body

#### Returns

`void`

***

### wait()

> **wait**(): `Promise`\<[`btRigidBody`](../@orillusion/namespaces/Ammo/classes/btRigidBody.md)\>

Defined in: [packages/physics/rigidbody/Rigidbody.ts:206](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L206)

Asynchronously retrieves the fully initialized rigid body instance.

#### Returns

`Promise`\<[`btRigidBody`](../@orillusion/namespaces/Ammo/classes/btRigidBody.md)\>

***

### addCollisionFlag()

> **addCollisionFlag**(`value`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:280](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L280)

Adds a collision flag to the rigid body.

#### Parameters

##### value

[`CollisionFlags`](../enumerations/CollisionFlags.md)

#### Returns

`void`

***

### removeCollisionFlag()

> **removeCollisionFlag**(`value`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:287](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L287)

Removes a collision flag from the rigid body.

#### Parameters

##### value

[`CollisionFlags`](../enumerations/CollisionFlags.md)

#### Returns

`void`

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [packages/physics/rigidbody/Rigidbody.ts:587](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/Rigidbody.ts#L587)

release this component

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Overrides

`ComponentBase.destroy`
