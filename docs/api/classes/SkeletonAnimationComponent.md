[**@orillusion/core**](../README.md)

***

# Class: SkeletonAnimationComponent

Defined in: [src/components/SkeletonAnimationComponent.ts:16](https://github.com/orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L16)

skeleton animation

## Extends

- [`ComponentBase`](ComponentBase.md)

## Constructors

### Constructor

> **new SkeletonAnimationComponent**(): `SkeletonAnimationComponent`

Defined in: [src/components/SkeletonAnimationComponent.ts:37](https://github.com/orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L37)

#### Returns

`SkeletonAnimationComponent`

#### Overrides

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

### isPlaying

> **isPlaying**: `boolean` = `true`

Defined in: [src/components/SkeletonAnimationComponent.ts:20](https://github.com/orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L20)

Whether it is playing

***

### timeScale

> **timeScale**: `number` = `1.0`

Defined in: [src/components/SkeletonAnimationComponent.ts:25](https://github.com/orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L25)

Global animation time scaling

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

### currName

#### Get Signature

> **get** **currName**(): `string`

Defined in: [src/components/SkeletonAnimationComponent.ts:48](https://github.com/orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L48)

The name of the currently playing animation

##### Returns

`string`

***

### skeleton

#### Get Signature

> **get** **skeleton**(): `Skeleton`

Defined in: [src/components/SkeletonAnimationComponent.ts:70](https://github.com/orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L70)

Skeleton data

##### Returns

`Skeleton`

#### Set Signature

> **set** **skeleton**(`value`): `void`

Defined in: [src/components/SkeletonAnimationComponent.ts:58](https://github.com/orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L58)

Skeleton data

##### Parameters

###### value

`Skeleton`

##### Returns

`void`

***

### finalSkeletonPose

#### Get Signature

> **get** **finalSkeletonPose**(): [`SkeletonPose`](SkeletonPose.md)

Defined in: [src/components/SkeletonAnimationComponent.ts:77](https://github.com/orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L77)

Current final skeleton posture data

##### Returns

[`SkeletonPose`](SkeletonPose.md)

***

### jointMatrixIndexTableBuffer

#### Get Signature

> **get** **jointMatrixIndexTableBuffer**(): [`StorageGPUBuffer`](StorageGPUBuffer.md)

Defined in: [src/components/SkeletonAnimationComponent.ts:84](https://github.com/orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L84)

Bone matrix index table data

##### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

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

[`ComponentBase`](ComponentBase.md).[`init`](ComponentBase.md#init)

***

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

### start()

> **start**(): `void`

Defined in: [src/components/SkeletonAnimationComponent.ts:41](https://github.com/orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L41)

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`start`](ComponentBase.md#start)

***

### getJointIndexTable()

> **getJointIndexTable**(`skinJointsName`): `number`[]

Defined in: [src/components/SkeletonAnimationComponent.ts:93](https://github.com/orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L93)

Get the bone index information by the bone name

#### Parameters

##### skinJointsName

`string`[]

bone name

#### Returns

`number`[]

bone index

***

### addAnimationClip()

> **addAnimationClip**(`clip`): `void`

Defined in: [src/components/SkeletonAnimationComponent.ts:107](https://github.com/orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L107)

Add a skeleton animation clip

#### Parameters

##### clip

`SkeletonAnimationClip`

Skeletal animation clip

#### Returns

`void`

***

### getAnimationClip()

> **getAnimationClip**(`name`): `SkeletonAnimationClip`

Defined in: [src/components/SkeletonAnimationComponent.ts:124](https://github.com/orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L124)

Gets the animation clip data object with the specified name

#### Parameters

##### name

`string`

Name of animation

#### Returns

`SkeletonAnimationClip`

Animation clip data object

***

### getAnimationClips()

> **getAnimationClips**(): `SkeletonAnimationClip`[]

Defined in: [src/components/SkeletonAnimationComponent.ts:136](https://github.com/orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L136)

Gets all animation clip data objects

#### Returns

`SkeletonAnimationClip`[]

Animation clip data object

***

### getAnimationClipState()

> **getAnimationClipState**(`name`): `SkeletonAnimationClipState`

Defined in: [src/components/SkeletonAnimationComponent.ts:145](https://github.com/orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L145)

Gets the animation clip state object with the specified name

#### Parameters

##### name

`string`

Name of animation

#### Returns

`SkeletonAnimationClipState`

Animation clip state object

***

### getAnimationClipStates()

> **getAnimationClipStates**(): `Map`\<`string`, `SkeletonAnimationClipState`\>

Defined in: [src/components/SkeletonAnimationComponent.ts:156](https://github.com/orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L156)

Gets all animation clip state objects

#### Returns

`Map`\<`string`, `SkeletonAnimationClipState`\>

Animation clip state object

***

### pause()

> **pause**(): `void`

Defined in: [src/components/SkeletonAnimationComponent.ts:163](https://github.com/orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L163)

stop playing

#### Returns

`void`

***

### resume()

> **resume**(): `void`

Defined in: [src/components/SkeletonAnimationComponent.ts:170](https://github.com/orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L170)

Resume playback

#### Returns

`void`

***

### play()

> **play**(`animName`, `speed?`, `reset?`): `boolean`

Defined in: [src/components/SkeletonAnimationComponent.ts:181](https://github.com/orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L181)

Play the specified animation

#### Parameters

##### animName

`string`

The data set name for the animation

##### speed?

`number` = `1`

Animation playback speed, default value is 1.0

##### reset?

`boolean` = `false`

When true, each play starts with the first frame

#### Returns

`boolean`

***

### crossFade()

> **crossFade**(`animName`, `crossTime`): `void`

Defined in: [src/components/SkeletonAnimationComponent.ts:211](https://github.com/orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L211)

Fades the current animation and fades into another animation state for a specified time.

#### Parameters

##### animName

`string`

The name of the animation to fade in.

##### crossTime

`number`

The time of transition, in seconds.

#### Returns

`void`

***

### setAnimIsLoop()

> **setAnimIsLoop**(`animName`, `isLoop`): `void`

Defined in: [src/components/SkeletonAnimationComponent.ts:251](https://github.com/orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L251)

Set the animation loop

#### Parameters

##### animName

`string`

The data set name for the animation

##### isLoop

`boolean`

If true, loop the animation

#### Returns

`void`

***

### addJointBind()

> **addJointBind**(`jointName`, `obj`): `void`

Defined in: [src/components/SkeletonAnimationComponent.ts:262](https://github.com/orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L262)

Add joint bindings to the object

#### Parameters

##### jointName

`string`

Name of joint

##### obj

[`Object3D`](Object3D.md)

Object of binding

#### Returns

`void`

***

### removeJointBind()

> **removeJointBind**(`obj`): `void`

Defined in: [src/components/SkeletonAnimationComponent.ts:274](https://github.com/orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L274)

Removes the joint binding of the specified object

#### Parameters

##### obj

[`Object3D`](Object3D.md)

Object of binding

#### Returns

`void`

***

### cloneTo()

> **cloneTo**(`obj`): `void`

Defined in: [src/components/SkeletonAnimationComponent.ts:322](https://github.com/orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L322)

Clones the current component to the specified object

#### Parameters

##### obj

[`Object3D`](Object3D.md)

target object

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`cloneTo`](ComponentBase.md#cloneto)
