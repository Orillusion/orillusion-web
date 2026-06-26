[**@orillusion/physics-rapier**](../README.md)

***

# Class: Rigidbody

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:19](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L19)

Rigidbody Component (Rapier backend).

Public API mirrors `@orillusion/physics`'s `Rigidbody` where semantics line
up. Rapier-only switches (`lockTranslations`, `enableCcd`) replace ammo's
matrix-style `setLinearFactor / setCcdMotionThreshold + sweptSphereRadius`.

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

### isSensor

> **isSensor**: `boolean` = `false`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:42](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L42)

Whether this body is a sensor (no contact response, fires triggerEnter/Exit).
Must be set BEFORE `start()`.

***

### enableEvents

> **enableEvents**: `boolean` = `false`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:48](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L48)

Whether contact / trigger events are emitted. Must be set BEFORE
`start()`. Off by default for performance.

***

### onContactBegin?

> `optional` **onContactBegin?**: [`ContactCallback`](../type-aliases/ContactCallback.md)

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:51](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L51)

Fires once when contact between two non-sensor bodies begins.

***

### onContactStay?

> `optional` **onContactStay?**: [`ContactCallback`](../type-aliases/ContactCallback.md)

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:53](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L53)

Fires every frame while contact persists (after `onContactBegin`).

***

### onContactEnd?

> `optional` **onContactEnd?**: [`ContactCallback`](../type-aliases/ContactCallback.md)

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:55](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L55)

Fires once when contact ends.

***

### onTriggerEnter?

> `optional` **onTriggerEnter?**: [`ContactCallback`](../type-aliases/ContactCallback.md)

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:57](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L57)

Fires once when a non-sensor body enters this sensor.

***

### onTriggerExit?

> `optional` **onTriggerExit?**: [`ContactCallback`](../type-aliases/ContactCallback.md)

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:59](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L59)

Fires once when a non-sensor body leaves this sensor.

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

### bodyInited

#### Get Signature

> **get** **bodyInited**(): `boolean`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:198](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L198)

##### Returns

`boolean`

***

### native

#### Get Signature

> **get** **native**(): `RigidBody`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:201](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L201)

Escape hatch to the native Rapier RigidBody. Opts out of cross-backend portability.

##### Returns

`RigidBody`

***

### colliders

#### Get Signature

> **get** **colliders**(): `Collider`[]

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:203](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L203)

##### Returns

`Collider`[]

***

### shape

#### Get Signature

> **get** **shape**(): `ColliderDesc` \| `ColliderDesc`[]

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:210](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L210)

Collider descriptor used to build the body. Accepts a single shape, a
compound (`ChildShape[]`) or a flat array of `ColliderDesc`.
Set BEFORE `start()`.

##### Returns

`ColliderDesc` \| `ColliderDesc`[]

#### Set Signature

> **set** **shape**(`value`): `void`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:213](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L213)

##### Parameters

###### value

`ColliderDesc` \| [`ChildShape`](../interfaces/ChildShape.md)[] \| `ColliderDesc`[]

##### Returns

`void`

***

### bodyType

#### Get Signature

> **get** **bodyType**(): [`BodyType`](../enumerations/BodyType.md)

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:226](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L226)

##### Returns

[`BodyType`](../enumerations/BodyType.md)

#### Set Signature

> **set** **bodyType**(`value`): `void`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:227](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L227)

##### Parameters

###### value

[`BodyType`](../enumerations/BodyType.md)

##### Returns

`void`

***

### mass

#### Get Signature

> **get** **mass**(): `number`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:238](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L238)

##### Returns

`number`

#### Set Signature

> **set** **mass**(`value`): `void`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:239](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L239)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### restitution

#### Get Signature

> **get** **restitution**(): `number`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:244](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L244)

##### Returns

`number`

#### Set Signature

> **set** **restitution**(`value`): `void`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:245](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L245)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### friction

#### Get Signature

> **get** **friction**(): `number`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:250](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L250)

##### Returns

`number`

#### Set Signature

> **set** **friction**(`value`): `void`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:251](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L251)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### linearDamping

#### Get Signature

> **get** **linearDamping**(): `number`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:256](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L256)

##### Returns

`number`

#### Set Signature

> **set** **linearDamping**(`value`): `void`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:257](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L257)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### angularDamping

#### Get Signature

> **get** **angularDamping**(): `number`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:262](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L262)

##### Returns

`number`

#### Set Signature

> **set** **angularDamping**(`value`): `void`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:263](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L263)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### gravityScale

#### Get Signature

> **get** **gravityScale**(): `number`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:268](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L268)

##### Returns

`number`

#### Set Signature

> **set** **gravityScale**(`value`): `void`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:269](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L269)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### userIndex

#### Get Signature

> **get** **userIndex**(): `number`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:274](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L274)

##### Returns

`number`

#### Set Signature

> **set** **userIndex**(`value`): `void`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:275](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L275)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### linearVelocity

#### Get Signature

> **get** **linearVelocity**(): `Vector3`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:280](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L280)

##### Returns

`Vector3`

#### Set Signature

> **set** **linearVelocity**(`value`): `void`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:285](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L285)

##### Parameters

###### value

`Vector3`

##### Returns

`void`

***

### angularVelocity

#### Get Signature

> **get** **angularVelocity**(): `Vector3`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:289](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L289)

##### Returns

`Vector3`

#### Set Signature

> **set** **angularVelocity**(`value`): `void`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:294](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L294)

##### Parameters

###### value

`Vector3`

##### Returns

`void`

## Methods

### init()

> **init**(`param?`): `void`

Defined in: [src/components/ComponentBase.ts:161](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L161)

#### Parameters

##### param?

`any`

#### Returns

`void`

#### Inherited from

`ComponentBase.init`

***

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

### start()

> **start**(): `void`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:64](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L64)

#### Returns

`void`

#### Overrides

`ComponentBase.start`

***

### \_syncTransformFromBody()

> **\_syncTransformFromBody**(`force?`): `void`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:132](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L132)

Pull body pose into the owner Object3D. Called by `Physics.update` AFTER
`world.step` so the transform reflects the post-step pose in the SAME
frame's render. Doing this in `onUpdate` (which runs BEFORE the render-
loop callback) would render the pre-step pose and lag visuals one frame
behind physics — visible during kinematic drag where the body chases
mouse-set `setNextKinematicTranslation` targets every frame.

#### Parameters

##### force?

`boolean` = `false`

#### Returns

`void`

***

### onUpdate()

> **onUpdate**(): `void`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:153](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L153)

#### Returns

`void`

#### Overrides

`ComponentBase.onUpdate`

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:158](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L158)

release this component

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Overrides

`ComponentBase.destroy`

***

### wait()

> **wait**(): `Promise`\<`RigidBody`\>

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:193](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L193)

#### Returns

`Promise`\<`RigidBody`\>

***

### enableCcd()

> **enableCcd**(`value`): `void`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:299](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L299)

Continuous Collision Detection. Replaces ammo's two-knob CCD API.

#### Parameters

##### value

`boolean`

#### Returns

`void`

***

### lockTranslations()

> **lockTranslations**(`x`, `y`, `z`): `void`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:305](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L305)

Lock translation axes. `true` locks the axis. (Rapier-only)

#### Parameters

##### x

`boolean`

##### y

`boolean`

##### z

`boolean`

#### Returns

`void`

***

### lockRotations()

> **lockRotations**(`x`, `y`, `z`): `void`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:310](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L310)

Lock rotation axes. `true` locks the axis. (Rapier-only)

#### Parameters

##### x

`boolean`

##### y

`boolean`

##### z

`boolean`

#### Returns

`void`

***

### applyImpulse()

> **applyImpulse**(`impulse`, `point?`): `void`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:314](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L314)

#### Parameters

##### impulse

`Vector3`

##### point?

`Vector3`

#### Returns

`void`

***

### applyTorqueImpulse()

> **applyTorqueImpulse**(`torque`): `void`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:327](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L327)

#### Parameters

##### torque

`Vector3`

#### Returns

`void`

***

### applyForce()

> **applyForce**(`force`, `point?`): `void`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:331](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L331)

#### Parameters

##### force

`Vector3`

##### point?

`Vector3`

#### Returns

`void`

***

### clearForcesAndVelocities()

> **clearForcesAndVelocities**(): `void`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:344](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L344)

#### Returns

`void`

***

### updateTransform()

> **updateTransform**(`position?`, `rotation?`, `clearFV?`): `void`

Defined in: [packages/physics-rapier/rigidbody/Rigidbody.ts:353](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/Rigidbody.ts#L353)

Force pose; mirrors ammo plugin's `Rigidbody.updateTransform`.

#### Parameters

##### position?

`Vector3`

##### rotation?

`Vector3` \| `Quaternion`

##### clearFV?

`boolean`

#### Returns

`void`
