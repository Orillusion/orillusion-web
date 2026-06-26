[**@orillusion/core**](../README.md)

***

# Class: AnimatorComponent

Defined in: [src/components/anim/AnimatorComponent.ts:16](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L16)

Skeletal + blend-shape animation driver. Samples property-animation
clips to pose an avatar's joints, supports clip cross-fading, stacked
override/additive layers, a pluggable state machine, IK solvers and
cross-rig retargeting, and dispatches blend-shape (morph) influences.

## Extends

- [`ComponentBase`](ComponentBase.md)

## Constructors

### Constructor

> **new AnimatorComponent**(): `AnimatorComponent`

#### Returns

`AnimatorComponent`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`constructor`](ComponentBase.md#constructor)

## Properties

### object3D

> **object3D**: [`Object3D`](Object3D.md) = `null`

Defined in: [src/components/ComponentBase.ts:29](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L29)

owner object3D

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`object3D`](ComponentBase.md#object3d)

***

### isDestroyed

> **isDestroyed**: `boolean` = `false`

Defined in: [src/components/ComponentBase.ts:77](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L77)

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`isDestroyed`](ComponentBase.md#isdestroyed)

***

### timeScale

> **timeScale**: `number` = `1.0`

Defined in: [src/components/anim/AnimatorComponent.ts:18](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L18)

Global playback speed multiplier applied to all clips and layers.

***

### jointMatrixIndexTableBuffer

> **jointMatrixIndexTableBuffer**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

Defined in: [src/components/anim/AnimatorComponent.ts:20](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L20)

GPU buffer mapping joints to their world-matrix indices.

***

### playBlendShapeLoop

> **playBlendShapeLoop**: `boolean` = `false`

Defined in: [src/components/anim/AnimatorComponent.ts:22](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L22)

Whether the blend-shape (morph) animation loops.

***

### root

> **root**: [`Object3D`](Object3D.md)

Defined in: [src/components/anim/AnimatorComponent.ts:44](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L44)

## Accessors

### visibleLayer

#### Get Signature

> **get** **visibleLayer**(): `number`

Defined in: [src/components/ComponentBase.ts:46](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L46)

Composition-layer membership bitmask. The pass / camera /
collector filters via

    (component.visibleLayer & pass.layerMask & camera.cullingMask) !== 0

Defaults to [VisibleLayer.Default](../@orillusion/namespaces/VisibleLayer/variables/Default.md) (bit 0) so a fresh
subclass is visible to passes whose `layerMask` is
[VisibleLayer.All](../@orillusion/namespaces/VisibleLayer/variables/All.md) (which includes bit 0). Application code
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

[`ComponentBase`](ComponentBase.md).[`visibleLayer`](ComponentBase.md#visiblelayer)

***

### eventDispatcher

#### Get Signature

> **get** **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

Defined in: [src/components/ComponentBase.ts:63](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L63)

##### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Set Signature

> **set** **eventDispatcher**(`value`): `void`

Defined in: [src/components/ComponentBase.ts:68](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L68)

##### Parameters

###### value

[`CEventDispatcher`](CEventDispatcher.md)

##### Returns

`void`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`eventDispatcher`](ComponentBase.md#eventdispatcher)

***

### isStart

#### Get Signature

> **get** **isStart**(): `boolean`

Defined in: [src/components/ComponentBase.ts:79](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L79)

##### Returns

`boolean`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`isStart`](ComponentBase.md#isstart)

***

### transform

#### Get Signature

> **get** **transform**(): [`Transform`](Transform.md)

Defined in: [src/components/ComponentBase.ts:89](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L89)

Return the Transform component attached to the Object3D.
Null before the component is attached — `addComponent` assigns
`object3D` only after construction — so constructor-time callers
can probe safely via `this.transform?.`.

##### Returns

[`Transform`](Transform.md)

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`transform`](ComponentBase.md#transform)

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

[`ComponentBase`](ComponentBase.md).[`enable`](ComponentBase.md#enable)

***

### avatar

#### Set Signature

> **set** **avatar**(`name`): `void`

Defined in: [src/components/anim/AnimatorComponent.ts:219](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L219)

Assign the avatar (skeleton) by registered resource name and build its pose.

##### Parameters

###### name

`string`

##### Returns

`void`

***

### numJoint

#### Get Signature

> **get** **numJoint**(): `number`

Defined in: [src/components/anim/AnimatorComponent.ts:232](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L232)

Number of joints in the current avatar.

##### Returns

`number`

***

### clips

#### Get Signature

> **get** **clips**(): [`PropertyAnimationClip`](PropertyAnimationClip.md)[]

Defined in: [src/components/anim/AnimatorComponent.ts:377](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L377)

The animation clips assigned to this animator.

##### Returns

[`PropertyAnimationClip`](PropertyAnimationClip.md)[]

#### Set Signature

> **set** **clips**(`clips`): `void`

Defined in: [src/components/anim/AnimatorComponent.ts:358](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L358)

Assign the animation clips, building per-clip state and auto-playing the first.

##### Parameters

###### clips

[`PropertyAnimationClip`](PropertyAnimationClip.md)[]

##### Returns

`void`

***

### clipsState

#### Get Signature

> **get** **clipsState**(): [`PropertyAnimationClipState`](PropertyAnimationClipState.md)[]

Defined in: [src/components/anim/AnimatorComponent.ts:382](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L382)

Per-clip playback state (weights, etc.).

##### Returns

[`PropertyAnimationClipState`](PropertyAnimationClipState.md)[]

***

### layers

#### Get Signature

> **get** **layers**(): readonly [`AnimationLayer`](AnimationLayer.md)[]

Defined in: [src/components/anim/AnimatorComponent.ts:677](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L677)

All stacked layers (excluding the implicit base layer).

##### Returns

readonly [`AnimationLayer`](AnimationLayer.md)[]

## Methods

### stop()

> **stop**(): `void`

Defined in: [src/components/ComponentBase.ts:163](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L163)

#### Returns

`void`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`stop`](ComponentBase.md#stop)

***

### onEnable()?

> `optional` **onEnable**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:164](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L164)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onEnable`](ComponentBase.md#onenable)

***

### onDisable()?

> `optional` **onDisable**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:165](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L165)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onDisable`](ComponentBase.md#ondisable)

***

### onLateUpdate()?

> `optional` **onLateUpdate**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:167](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L167)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onLateUpdate`](ComponentBase.md#onlateupdate)

***

### onBeforeUpdate()?

> `optional` **onBeforeUpdate**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:168](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L168)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onBeforeUpdate`](ComponentBase.md#onbeforeupdate)

***

### onCompute()?

> `optional` **onCompute**(`view?`, `command?`): `any`

Defined in: [src/components/ComponentBase.ts:169](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L169)

#### Parameters

##### view?

[`View3D`](View3D.md)

##### command?

`GPUCommandEncoder`

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onCompute`](ComponentBase.md#oncompute)

***

### onGraphic()?

> `optional` **onGraphic**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:170](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L170)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onGraphic`](ComponentBase.md#ongraphic)

***

### onParentChange()?

> `optional` **onParentChange**(`lastParent?`, `currentParent?`): `any`

Defined in: [src/components/ComponentBase.ts:171](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L171)

#### Parameters

##### lastParent?

[`Object3D`](Object3D.md)

##### currentParent?

[`Object3D`](Object3D.md)

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onParentChange`](ComponentBase.md#onparentchange)

***

### onAddChild()?

> `optional` **onAddChild**(`child`): `any`

Defined in: [src/components/ComponentBase.ts:172](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L172)

#### Parameters

##### child

[`Object3D`](Object3D.md)

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onAddChild`](ComponentBase.md#onaddchild)

***

### onRemoveChild()?

> `optional` **onRemoveChild**(`child`): `any`

Defined in: [src/components/ComponentBase.ts:173](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L173)

#### Parameters

##### child

[`Object3D`](Object3D.md)

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onRemoveChild`](ComponentBase.md#onremovechild)

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

[`ComponentBase`](ComponentBase.md).[`copyComponent`](ComponentBase.md#copycomponent)

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

[`ComponentBase`](ComponentBase.md).[`beforeDestroy`](ComponentBase.md#beforedestroy)

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [src/components/ComponentBase.ts:256](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L256)

release this component

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`destroy`](ComponentBase.md#destroy)

***

### init()

> **init**(`param?`): `void`

Defined in: [src/components/anim/AnimatorComponent.ts:64](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L64)

Collect skinned/morph renderers in the hierarchy and prepare caches.

#### Parameters

##### param?

`any`

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`init`](ComponentBase.md#init)

***

### start()

> **start**(): `void`

Defined in: [src/components/anim/AnimatorComponent.ts:86](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L86)

Re-parent the skeleton root once the (possibly cloned) hierarchy is wired.

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`start`](ComponentBase.md#start)

***

### playAnim()

> **playAnim**(`anim`, `time?`, `speed?`): `void`

Defined in: [src/components/anim/AnimatorComponent.ts:121](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L121)

Play a skeleton animation clip immediately.

#### Parameters

##### anim

`string`

clip name

##### time?

`number` = `0`

start time in seconds

##### speed?

`number` = `1`

playback speed multiplier

#### Returns

`void`

***

### crossFade()

> **crossFade**(`anim`, `crossTime`): `void`

Defined in: [src/components/anim/AnimatorComponent.ts:142](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L142)

Cross-fade from the current clip to another over `crossTime` seconds.

#### Parameters

##### anim

`string`

destination clip name

##### crossTime

`number`

fade duration in seconds

#### Returns

`void`

***

### playBlendShape()

> **playBlendShape**(`shapeName`, `time?`, `speed?`): `void`

Defined in: [src/components/anim/AnimatorComponent.ts:182](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L182)

Play a blend-shape (morph) animation clip.

#### Parameters

##### shapeName

`string`

blend-shape clip name

##### time?

`number` = `0`

start time in seconds

##### speed?

`number` = `1`

playback speed multiplier

#### Returns

`void`

***

### retargetTo()

> **retargetTo**(`target`, `cfg?`): `void`

Defined in: [src/components/anim/AnimatorComponent.ts:199](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L199)

Drive another animator's skeleton from this one via retargeting.
Pass `null` to stop retargeting.

#### Parameters

##### target

`AnimatorComponent`

the animator to drive, or null to clear

##### cfg?

[`RetargeterConfig`](../interfaces/RetargeterConfig.md)

optional retargeting configuration

#### Returns

`void`

***

### getJointIndexTable()

> **getJointIndexTable**(`skinJointsName`): `number`[]

Defined in: [src/components/anim/AnimatorComponent.ts:240](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L240)

Map a list of skin joint names to their avatar bone IDs (-1 if absent).

#### Parameters

##### skinJointsName

`string`[]

joint names in skin order

#### Returns

`number`[]

***

### cloneTo()

> **cloneTo**(`obj`): `void`

Defined in: [src/components/anim/AnimatorComponent.ts:387](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L387)

Clone this animator (avatar + clips) onto another object.

#### Parameters

##### obj

[`Object3D`](Object3D.md)

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`cloneTo`](ComponentBase.md#cloneto)

***

### onUpdate()

> **onUpdate**(`view?`): `void`

Defined in: [src/components/anim/AnimatorComponent.ts:420](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L420)

Per-frame update: advance time, sample clips, apply layers, IK and morphs.

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`onUpdate`](ComponentBase.md#onupdate)

***

### updateBlendShape()

> **updateBlendShape**(`attributes`, `key`, `value`): `void`

Defined in: [src/components/anim/AnimatorComponent.ts:526](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L526)

Apply a blend-shape influence to all renderers, caching the resolved
setter per renderer to avoid per-frame property reflection.

#### Parameters

##### attributes

`string`[]

property path to the setter

##### key

`string`

morph target name (cache key)

##### value

`number`

influence value in [0,1]

#### Returns

`void`

***

### getAnimationClipState()

> **getAnimationClipState**(`name`): [`PropertyAnimationClipState`](PropertyAnimationClipState.md)

Defined in: [src/components/anim/AnimatorComponent.ts:646](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L646)

Gets the animation clip data object with the specified name

#### Parameters

##### name

`string`

Name of animation

#### Returns

[`PropertyAnimationClipState`](PropertyAnimationClipState.md)

Animation clip data object

***

### cloneMorphRenderers()

> **cloneMorphRenderers**(): `object`

Defined in: [src/components/anim/AnimatorComponent.ts:656](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L656)

Group the morph renderers by morph-target key.

#### Returns

`object`

***

### getLayer()

> **getLayer**(`name`): [`AnimationLayer`](AnimationLayer.md)

Defined in: [src/components/anim/AnimatorComponent.ts:673](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L673)

Get a stacked animation layer by name, or null if absent.

#### Parameters

##### name

`string`

#### Returns

[`AnimationLayer`](AnimationLayer.md)

***

### addLayer()

> **addLayer**(`layer`): [`AnimationLayer`](AnimationLayer.md)

Defined in: [src/components/anim/AnimatorComponent.ts:680](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L680)

Add a stacked animation layer (ignored if a layer with that name exists).

#### Parameters

##### layer

[`AnimationLayer`](AnimationLayer.md)

#### Returns

[`AnimationLayer`](AnimationLayer.md)

***

### removeLayer()

> **removeLayer**(`name`): `void`

Defined in: [src/components/anim/AnimatorComponent.ts:690](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L690)

Remove a stacked animation layer by name.

#### Parameters

##### name

`string`

#### Returns

`void`

***

### setLayerWeight()

> **setLayerWeight**(`name`, `weight`): `void`

Defined in: [src/components/anim/AnimatorComponent.ts:696](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L696)

Set the blend weight of a named layer.

#### Parameters

##### name

`string`

##### weight

`number`

#### Returns

`void`

***

### setLayerClip()

> **setLayerClip**(`name`, `clipName`, `time?`, `timeScale?`): `void`

Defined in: [src/components/anim/AnimatorComponent.ts:708](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L708)

Set (and start) the clip playing on a named layer.

#### Parameters

##### name

`string`

layer name

##### clipName

`string`

clip to play on the layer

##### time?

`number` = `0`

start time in seconds

##### timeScale?

`number` = `1.0`

layer-local time scale

#### Returns

`void`

***

### setStateMachine()

> **setStateMachine**(`fsm`): `void`

Defined in: [src/components/anim/AnimatorComponent.ts:896](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L896)

Attach (or clear) a state machine evaluated each frame before sampling.

#### Parameters

##### fsm

###### evaluate

#### Returns

`void`

***

### getStateMachine()

> **getStateMachine**(): `object`

Defined in: [src/components/anim/AnimatorComponent.ts:900](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L900)

The currently attached state machine, or null.

#### Returns

`object`

##### evaluate()

> **evaluate**(`animator`, `dt`): `void`

###### Parameters

###### animator

`AnimatorComponent`

###### dt

`number`

###### Returns

`void`

***

### addIK()

> **addIK**(`solver`): `void`

Defined in: [src/components/anim/AnimatorComponent.ts:909](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L909)

Register an IK solver, run after layer mixing each frame.

#### Parameters

##### solver

###### solve

#### Returns

`void`

***

### removeIK()

> **removeIK**(`solver`): `void`

Defined in: [src/components/anim/AnimatorComponent.ts:913](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L913)

Unregister a previously added IK solver.

#### Parameters

##### solver

###### solve

#### Returns

`void`

***

### getJointObject()

> **getJointObject**(`boneName`): [`Object3D`](Object3D.md)

Defined in: [src/components/anim/AnimatorComponent.ts:919](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L919)

Live joint Object3D by bone name. Used by IK solvers + retargeting.

#### Parameters

##### boneName

`string`

#### Returns

[`Object3D`](Object3D.md)

***

### getRestJointObject()

> **getRestJointObject**(`bonePath`): [`Object3D`](Object3D.md)

Defined in: [src/components/anim/AnimatorComponent.ts:923](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L923)

Rest-pose (T-pose) joint Object3D by bone path.

#### Parameters

##### bonePath

`string`

#### Returns

[`Object3D`](Object3D.md)

***

### getAvatar()

> **getAvatar**(): `PrefabAvatarData`

Defined in: [src/components/anim/AnimatorComponent.ts:927](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L927)

The current avatar (skeleton) data, or null.

#### Returns

`PrefabAvatarData`
