# Class: SkeletonAnimationComponent

skeleton animation

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`SkeletonAnimationComponent`**

### Constructors

- [constructor](SkeletonAnimationComponent.md#constructor)

### Properties

- [object3D](SkeletonAnimationComponent.md#object3d)
- [isPlaying](SkeletonAnimationComponent.md#isplaying)
- [timeScale](SkeletonAnimationComponent.md#timescale)

### Accessors

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

• **new SkeletonAnimationComponent**()

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/components/SkeletonAnimationComponent.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L35)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

[ComponentBase](ComponentBase.md).[object3D](ComponentBase.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### isPlaying

• **isPlaying**: `boolean` = `true`

Whether it is playing

#### Defined in

[src/components/SkeletonAnimationComponent.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L18)

___

### timeScale

• **timeScale**: `number` = `1.0`

Global animation time scaling

#### Defined in

[src/components/SkeletonAnimationComponent.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L23)

## Accessors

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

ComponentBase.transform

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

ComponentBase.enable

#### Defined in

[src/components/ComponentBase.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L59)

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

[src/components/ComponentBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L45)

___

### currName

• `get` **currName**(): `string`

The name of the currently playing animation

#### Returns

`string`

#### Defined in

[src/components/SkeletonAnimationComponent.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L46)

___

### skeleton

• `get` **skeleton**(): `Skeleton`

Skeleton data

#### Returns

`Skeleton`

#### Defined in

[src/components/SkeletonAnimationComponent.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L68)

• `set` **skeleton**(`value`): `void`

Skeleton data

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Skeleton` |

#### Returns

`void`

#### Defined in

[src/components/SkeletonAnimationComponent.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L56)

___

### finalSkeletonPose

• `get` **finalSkeletonPose**(): [`SkeletonPose`](SkeletonPose.md)

Current final skeleton posture data

#### Returns

[`SkeletonPose`](SkeletonPose.md)

#### Defined in

[src/components/SkeletonAnimationComponent.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L75)

___

### jointMatrixIndexTableBuffer

• `get` **jointMatrixIndexTableBuffer**(): [`StorageGPUBuffer`](StorageGPUBuffer.md)

Bone matrix index table data

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

[src/components/SkeletonAnimationComponent.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L82)

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

[src/components/ComponentBase.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L106)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[stop](ComponentBase.md#stop)

#### Defined in

[src/components/ComponentBase.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L108)

___

### onEnable

▸ `Optional` **onEnable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onEnable](ComponentBase.md#onenable)

#### Defined in

[src/components/ComponentBase.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L109)

___

### onDisable

▸ `Optional` **onDisable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onDisable](ComponentBase.md#ondisable)

#### Defined in

[src/components/ComponentBase.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L110)

___

### onLateUpdate

▸ `Optional` **onLateUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onLateUpdate](ComponentBase.md#onlateupdate)

#### Defined in

[src/components/ComponentBase.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L112)

___

### onBeforeUpdate

▸ `Optional` **onBeforeUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onBeforeUpdate](ComponentBase.md#onbeforeupdate)

#### Defined in

[src/components/ComponentBase.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

___

### onCompute

▸ `Optional` **onCompute**(`view?`, `command?`): `any`

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

[src/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L114)

___

### onGraphic

▸ `Optional` **onGraphic**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onGraphic](ComponentBase.md#ongraphic)

#### Defined in

[src/components/ComponentBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L115)

___

### onParentChange

▸ `Optional` **onParentChange**(`lastParent?`, `currentParent?`): `any`

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

[src/components/ComponentBase.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L116)

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

[src/components/ComponentBase.ts:190](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L190)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[start](ComponentBase.md#start)

#### Defined in

[src/components/SkeletonAnimationComponent.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L39)

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

[src/components/SkeletonAnimationComponent.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L91)

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

[src/components/SkeletonAnimationComponent.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L105)

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

[src/components/SkeletonAnimationComponent.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L122)

___

### getAnimationClips

▸ **getAnimationClips**(): `SkeletonAnimationClip`[]

Gets all animation clip data objects

#### Returns

`SkeletonAnimationClip`[]

Animation clip data object

#### Defined in

[src/components/SkeletonAnimationComponent.ts:134](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L134)

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

[src/components/SkeletonAnimationComponent.ts:143](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L143)

___

### getAnimationClipStates

▸ **getAnimationClipStates**(): `Map`<`string`, `SkeletonAnimationClipState`\>

Gets all animation clip state objects

#### Returns

`Map`<`string`, `SkeletonAnimationClipState`\>

Animation clip state object

#### Defined in

[src/components/SkeletonAnimationComponent.ts:154](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L154)

___

### pause

▸ **pause**(): `void`

stop playing

#### Returns

`void`

#### Defined in

[src/components/SkeletonAnimationComponent.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L161)

___

### resume

▸ **resume**(): `void`

Resume playback

#### Returns

`void`

#### Defined in

[src/components/SkeletonAnimationComponent.ts:168](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L168)

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

[src/components/SkeletonAnimationComponent.ts:179](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L179)

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

[src/components/SkeletonAnimationComponent.ts:209](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L209)

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

[src/components/SkeletonAnimationComponent.ts:249](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L249)

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

[src/components/SkeletonAnimationComponent.ts:260](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L260)

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

[src/components/SkeletonAnimationComponent.ts:272](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L272)

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

[src/components/SkeletonAnimationComponent.ts:320](https://github.com/Orillusion/orillusion/blob/main/src/components/SkeletonAnimationComponent.ts#L320)
