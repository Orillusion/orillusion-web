# Class: SkeletonAnimationComponent

skeleton animation

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`SkeletonAnimationComponent`**

### Constructors

- [constructor](SkeletonAnimationComponent.md#constructor)

### Properties

- [object3D](SkeletonAnimationComponent.md#object3d)
- [isDestroyed](SkeletonAnimationComponent.md#isdestroyed)
- [isPlaying](SkeletonAnimationComponent.md#isplaying)
- [timeScale](SkeletonAnimationComponent.md#timescale)

### Accessors

- [eventDispatcher](SkeletonAnimationComponent.md#eventdispatcher)
- [isStart](SkeletonAnimationComponent.md#isstart)
- [transform](SkeletonAnimationComponent.md#transform)
- [enable](SkeletonAnimationComponent.md#enable)
- [currName](SkeletonAnimationComponent.md#currname)
- [skeleton](SkeletonAnimationComponent.md#skeleton)
- [finalSkeletonPose](SkeletonAnimationComponent.md#finalskeletonpose)
- [jointMatrixIndexTableBuffer](SkeletonAnimationComponent.md#jointmatrixindextablebuffer)

### Methods

- [init](SkeletonAnimationComponent.md#init)
- [stop](SkeletonAnimationComponent.md#stop)
- [onEnable](SkeletonAnimationComponent.md#onenable)
- [onDisable](SkeletonAnimationComponent.md#ondisable)
- [onLateUpdate](SkeletonAnimationComponent.md#onlateupdate)
- [onBeforeUpdate](SkeletonAnimationComponent.md#onbeforeupdate)
- [onCompute](SkeletonAnimationComponent.md#oncompute)
- [onGraphic](SkeletonAnimationComponent.md#ongraphic)
- [onParentChange](SkeletonAnimationComponent.md#onparentchange)
- [copyComponent](SkeletonAnimationComponent.md#copycomponent)
- [beforeDestroy](SkeletonAnimationComponent.md#beforedestroy)
- [destroy](SkeletonAnimationComponent.md#destroy)
- [start](SkeletonAnimationComponent.md#start)
- [getJointIndexTable](SkeletonAnimationComponent.md#getjointindextable)
- [addAnimationClip](SkeletonAnimationComponent.md#addanimationclip)
- [getAnimationClip](SkeletonAnimationComponent.md#getanimationclip)
- [getAnimationClips](SkeletonAnimationComponent.md#getanimationclips)
- [getAnimationClipState](SkeletonAnimationComponent.md#getanimationclipstate)
- [getAnimationClipStates](SkeletonAnimationComponent.md#getanimationclipstates)
- [pause](SkeletonAnimationComponent.md#pause)
- [resume](SkeletonAnimationComponent.md#resume)
- [play](SkeletonAnimationComponent.md#play)
- [crossFade](SkeletonAnimationComponent.md#crossfade)
- [setAnimIsLoop](SkeletonAnimationComponent.md#setanimisloop)
- [addJointBind](SkeletonAnimationComponent.md#addjointbind)
- [removeJointBind](SkeletonAnimationComponent.md#removejointbind)
- [cloneTo](SkeletonAnimationComponent.md#cloneto)

## Constructors

### constructor

• **new SkeletonAnimationComponent**(): [`SkeletonAnimationComponent`](SkeletonAnimationComponent.md)

#### Returns

[`SkeletonAnimationComponent`](SkeletonAnimationComponent.md)

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/components/SkeletonAnimationComponent.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L37)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

[ComponentBase](ComponentBase.md).[object3D](ComponentBase.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### isDestroyed

• `Optional` **isDestroyed**: `boolean`

#### Inherited from

[ComponentBase](ComponentBase.md).[isDestroyed](ComponentBase.md#isdestroyed)

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### isPlaying

• **isPlaying**: `boolean` = `true`

Whether it is playing

#### Defined in

[src/components/SkeletonAnimationComponent.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L20)

___

### timeScale

• **timeScale**: `number` = `1.0`

Global animation time scaling

#### Defined in

[src/components/SkeletonAnimationComponent.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L25)

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

ComponentBase.eventDispatcher

#### Defined in

[src/components/ComponentBase.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L23)

• `set` **eventDispatcher**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CEventDispatcher`](CEventDispatcher.md) |

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

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

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

___

### currName

• `get` **currName**(): `string`

The name of the currently playing animation

#### Returns

`string`

#### Defined in

[src/components/SkeletonAnimationComponent.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L48)

___

### skeleton

• `get` **skeleton**(): `Skeleton`

Skeleton data

#### Returns

`Skeleton`

#### Defined in

[src/components/SkeletonAnimationComponent.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L70)

• `set` **skeleton**(`value`): `void`

Skeleton data

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Skeleton` |

#### Returns

`void`

#### Defined in

[src/components/SkeletonAnimationComponent.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L58)

___

### finalSkeletonPose

• `get` **finalSkeletonPose**(): [`SkeletonPose`](SkeletonPose.md)

Current final skeleton posture data

#### Returns

[`SkeletonPose`](SkeletonPose.md)

#### Defined in

[src/components/SkeletonAnimationComponent.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L77)

___

### jointMatrixIndexTableBuffer

• `get` **jointMatrixIndexTableBuffer**(): [`StorageGPUBuffer`](StorageGPUBuffer.md)

Bone matrix index table data

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

[src/components/SkeletonAnimationComponent.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L84)

## Methods

### init

▸ **init**(`param?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[init](ComponentBase.md#init)

#### Defined in

[src/components/ComponentBase.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L112)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[stop](ComponentBase.md#stop)

#### Defined in

[src/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L114)

___

### onEnable

▸ **onEnable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onEnable](ComponentBase.md#onenable)

#### Defined in

[src/components/ComponentBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L115)

___

### onDisable

▸ **onDisable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onDisable](ComponentBase.md#ondisable)

#### Defined in

[src/components/ComponentBase.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L116)

___

### onLateUpdate

▸ **onLateUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onLateUpdate](ComponentBase.md#onlateupdate)

#### Defined in

[src/components/ComponentBase.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L118)

___

### onBeforeUpdate

▸ **onBeforeUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onBeforeUpdate](ComponentBase.md#onbeforeupdate)

#### Defined in

[src/components/ComponentBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L119)

___

### onCompute

▸ **onCompute**(`view?`, `command?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |
| `command?` | `GPUCommandEncoder` |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onCompute](ComponentBase.md#oncompute)

#### Defined in

[src/components/ComponentBase.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L120)

___

### onGraphic

▸ **onGraphic**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onGraphic](ComponentBase.md#ongraphic)

#### Defined in

[src/components/ComponentBase.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L121)

___

### onParentChange

▸ **onParentChange**(`lastParent?`, `currentParent?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lastParent?` | [`Object3D`](Object3D.md) |
| `currentParent?` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onParentChange](ComponentBase.md#onparentchange)

#### Defined in

[src/components/ComponentBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L122)

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

[ComponentBase](ComponentBase.md).[copyComponent](ComponentBase.md#copycomponent)

#### Defined in

[src/components/ComponentBase.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L131)

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

[ComponentBase](ComponentBase.md).[beforeDestroy](ComponentBase.md#beforedestroy)

#### Defined in

[src/components/ComponentBase.ts:198](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L198)

___

### destroy

▸ **destroy**(`force?`): `void`

release this component

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[destroy](ComponentBase.md#destroy)

#### Defined in

[src/components/ComponentBase.ts:205](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L205)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[start](ComponentBase.md#start)

#### Defined in

[src/components/SkeletonAnimationComponent.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L41)

___

### getJointIndexTable

▸ **getJointIndexTable**(`skinJointsName`): `number`[]

Get the bone index information by the bone name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skinJointsName` | `string`[] | bone name |

#### Returns

`number`[]

bone index

#### Defined in

[src/components/SkeletonAnimationComponent.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L93)

___

### addAnimationClip

▸ **addAnimationClip**(`clip`): `void`

Add a skeleton animation clip

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clip` | `SkeletonAnimationClip` | Skeletal animation clip |

#### Returns

`void`

#### Defined in

[src/components/SkeletonAnimationComponent.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L107)

___

### getAnimationClip

▸ **getAnimationClip**(`name`): `SkeletonAnimationClip`

Gets the animation clip data object with the specified name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of animation |

#### Returns

`SkeletonAnimationClip`

Animation clip data object

#### Defined in

[src/components/SkeletonAnimationComponent.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L124)

___

### getAnimationClips

▸ **getAnimationClips**(): `SkeletonAnimationClip`[]

Gets all animation clip data objects

#### Returns

`SkeletonAnimationClip`[]

Animation clip data object

#### Defined in

[src/components/SkeletonAnimationComponent.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L136)

___

### getAnimationClipState

▸ **getAnimationClipState**(`name`): `SkeletonAnimationClipState`

Gets the animation clip state object with the specified name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of animation |

#### Returns

`SkeletonAnimationClipState`

Animation clip state object

#### Defined in

[src/components/SkeletonAnimationComponent.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L145)

___

### getAnimationClipStates

▸ **getAnimationClipStates**(): `Map`\<`string`, `SkeletonAnimationClipState`\>

Gets all animation clip state objects

#### Returns

`Map`\<`string`, `SkeletonAnimationClipState`\>

Animation clip state object

#### Defined in

[src/components/SkeletonAnimationComponent.ts:156](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L156)

___

### pause

▸ **pause**(): `void`

stop playing

#### Returns

`void`

#### Defined in

[src/components/SkeletonAnimationComponent.ts:163](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L163)

___

### resume

▸ **resume**(): `void`

Resume playback

#### Returns

`void`

#### Defined in

[src/components/SkeletonAnimationComponent.ts:170](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L170)

___

### play

▸ **play**(`animName`, `speed?`, `reset?`): `boolean`

Play the specified animation

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `animName` | `string` | `undefined` | The data set name for the animation |
| `speed` | `number` | `1` | Animation playback speed, default value is 1.0 |
| `reset` | `boolean` | `false` | When true, each play starts with the first frame |

#### Returns

`boolean`

#### Defined in

[src/components/SkeletonAnimationComponent.ts:181](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L181)

___

### crossFade

▸ **crossFade**(`animName`, `crossTime`): `void`

Fades the current animation and fades into another animation state for a specified time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `animName` | `string` | The name of the animation to fade in. |
| `crossTime` | `number` | The time of transition, in seconds. |

#### Returns

`void`

#### Defined in

[src/components/SkeletonAnimationComponent.ts:211](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L211)

___

### setAnimIsLoop

▸ **setAnimIsLoop**(`animName`, `isLoop`): `void`

Set the animation loop

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `animName` | `string` | The data set name for the animation |
| `isLoop` | `boolean` | If true, loop the animation |

#### Returns

`void`

#### Defined in

[src/components/SkeletonAnimationComponent.ts:251](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L251)

___

### addJointBind

▸ **addJointBind**(`jointName`, `obj`): `void`

Add joint bindings to the object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `jointName` | `string` | Name of joint |
| `obj` | [`Object3D`](Object3D.md) | Object of binding |

#### Returns

`void`

#### Defined in

[src/components/SkeletonAnimationComponent.ts:262](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L262)

___

### removeJointBind

▸ **removeJointBind**(`obj`): `void`

Removes the joint binding of the specified object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) | Object of binding |

#### Returns

`void`

#### Defined in

[src/components/SkeletonAnimationComponent.ts:274](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L274)

___

### cloneTo

▸ **cloneTo**(`obj`): `void`

Clones the current component to the specified object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) | target object |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[cloneTo](ComponentBase.md#cloneto)

#### Defined in

[src/components/SkeletonAnimationComponent.ts:322](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L322)
