[**@orillusion/physics-rapier**](../README.md)

***

# Class: CharacterController

Defined in: [packages/physics-rapier/character/CharacterController.ts:15](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/character/CharacterController.ts#L15)

Kinematic character controller — Rapier-only, no ammo equivalent.

Owns its own kinematic-position-based body and collider; user calls `move()`
each frame with a desired translation, controller resolves penetration,
slope climbing, snap-to-ground.

## Extends

- `ComponentBase`

## Constructors

### Constructor

> **new CharacterController**(): `CharacterController`

#### Returns

`CharacterController`

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

### shape

> **shape**: `ColliderDesc`

Defined in: [packages/physics-rapier/character/CharacterController.ts:26](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/character/CharacterController.ts#L26)

Collider descriptor (typically a capsule). Set BEFORE `start()`.

***

### offset

> **offset**: `number` = `0.01`

Defined in: [packages/physics-rapier/character/CharacterController.ts:29](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/character/CharacterController.ts#L29)

Penetration prediction offset. Default `0.01`.

***

### maxSlopeClimbAngle

> **maxSlopeClimbAngle**: `number`

Defined in: [packages/physics-rapier/character/CharacterController.ts:31](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/character/CharacterController.ts#L31)

Maximum slope angle the character can walk up (radians).

***

### minSlopeSlideAngle

> **minSlopeSlideAngle**: `number`

Defined in: [packages/physics-rapier/character/CharacterController.ts:33](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/character/CharacterController.ts#L33)

Below this slope angle the character starts sliding (radians).

***

### snapToGround

> **snapToGround**: `number` = `0.5`

Defined in: [packages/physics-rapier/character/CharacterController.ts:35](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/character/CharacterController.ts#L35)

Snap-to-ground distance. `0` disables snapping.

***

### applyImpulsesToDynamicBodies

> **applyImpulsesToDynamicBodies**: `boolean` = `true`

Defined in: [packages/physics-rapier/character/CharacterController.ts:37](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/character/CharacterController.ts#L37)

Whether character pushes dynamic bodies it collides with.

***

### autoStep

> **autoStep**: `object` = `null`

Defined in: [packages/physics-rapier/character/CharacterController.ts:39](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/character/CharacterController.ts#L39)

Auto-step config: `null` to disable.

#### maxHeight

> **maxHeight**: `number`

#### minWidth

> **minWidth**: `number`

#### includeDynamic

> **includeDynamic**: `boolean`

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

### body

#### Get Signature

> **get** **body**(): `RigidBody`

Defined in: [packages/physics-rapier/character/CharacterController.ts:112](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/character/CharacterController.ts#L112)

##### Returns

`RigidBody`

***

### collider

#### Get Signature

> **get** **collider**(): `Collider`

Defined in: [packages/physics-rapier/character/CharacterController.ts:113](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/character/CharacterController.ts#L113)

##### Returns

`Collider`

***

### native

#### Get Signature

> **get** **native**(): `KinematicCharacterController`

Defined in: [packages/physics-rapier/character/CharacterController.ts:114](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/character/CharacterController.ts#L114)

##### Returns

`KinematicCharacterController`

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

Defined in: [packages/physics-rapier/character/CharacterController.ts:41](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/character/CharacterController.ts#L41)

#### Returns

`void`

#### Overrides

`ComponentBase.start`

***

### move()

> **move**(`desiredTranslation`): `void`

Defined in: [packages/physics-rapier/character/CharacterController.ts:73](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/character/CharacterController.ts#L73)

Compute and apply a movement step. Internal pipeline:
1. computeColliderMovement(desired) → resolves penetration / slopes
2. read computedMovement() & computedGrounded()
3. setNextKinematicTranslation to apply

#### Parameters

##### desiredTranslation

`Vector3`

#### Returns

`void`

***

### onUpdate()

> **onUpdate**(): `void`

Defined in: [packages/physics-rapier/character/CharacterController.ts:91](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/character/CharacterController.ts#L91)

#### Returns

`void`

#### Overrides

`ComponentBase.onUpdate`

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [packages/physics-rapier/character/CharacterController.ts:97](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/character/CharacterController.ts#L97)

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

> **wait**(): `Promise`\<`void`\>

Defined in: [packages/physics-rapier/character/CharacterController.ts:107](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/character/CharacterController.ts#L107)

#### Returns

`Promise`\<`void`\>

***

### isGrounded()

> **isGrounded**(): `boolean`

Defined in: [packages/physics-rapier/character/CharacterController.ts:110](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/character/CharacterController.ts#L110)

Whether the character is touching the ground after the last `move()`.

#### Returns

`boolean`
