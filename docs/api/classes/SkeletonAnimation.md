# Class: SkeletonAnimation

骨骼动画组件

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`SkeletonAnimation`**


### Properties

- [object3D](SkeletonAnimation.md#object3d)
- [serializeTag](SkeletonAnimation.md#serializetag)
- [isPlaying](SkeletonAnimation.md#isplaying)
- [timeScale](SkeletonAnimation.md#timescale)

### Accessors

- [transform](SkeletonAnimation.md#transform)
- [enable](SkeletonAnimation.md#enable)
- [currName](SkeletonAnimation.md#currname)
- [skeleton](SkeletonAnimation.md#skeleton)
- [finalSkeletonPose](SkeletonAnimation.md#finalskeletonpose)
- [jointMatrixIndexTableBuffer](SkeletonAnimation.md#jointmatrixindextablebuffer)

### Methods

- [onVisible](SkeletonAnimation.md#onvisible)
- [destroy](SkeletonAnimation.md#destroy)
- [onUpdate](SkeletonAnimation.md#onupdate)
- [onLateUpdate](SkeletonAnimation.md#onlateupdate)
- [onBeforeUpdate](SkeletonAnimation.md#onbeforeupdate)
- [serialization](SkeletonAnimation.md#serialization)
- [unSerialization](SkeletonAnimation.md#unserialization)
- [getJointIndexTable](SkeletonAnimation.md#getjointindextable)
- [addAnimationClip](SkeletonAnimation.md#addanimationclip)
- [getAnimationClip](SkeletonAnimation.md#getanimationclip)
- [getAnimationClips](SkeletonAnimation.md#getanimationclips)
- [getAnimationClipState](SkeletonAnimation.md#getanimationclipstate)
- [getAnimationClipStates](SkeletonAnimation.md#getanimationclipstates)
- [pause](SkeletonAnimation.md#pause)
- [resume](SkeletonAnimation.md#resume)
- [play](SkeletonAnimation.md#play)
- [crossFade](SkeletonAnimation.md#crossfade)
- [setAnimIsLoop](SkeletonAnimation.md#setanimisloop)
- [addJointBind](SkeletonAnimation.md#addjointbind)
- [removeJointBind](SkeletonAnimation.md#removejointbind)
- [cloneTo](SkeletonAnimation.md#cloneto)

### Constructors

- [constructor](SkeletonAnimation.md#constructor)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

此组件附加到的Object3D对象。

#### Inherited from

[ComponentBase](ComponentBase.md).[object3D](ComponentBase.md#object3d)

#### Defined in

[src/engine/components/ComponentBase.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L14)

___

### serializeTag

• `Optional` **serializeTag**: [`SerializeTag`](../types/SerializeTag.md)

#### Inherited from

[ComponentBase](ComponentBase.md).[serializeTag](ComponentBase.md#serializetag)

#### Defined in

[src/engine/components/ComponentBase.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L30)

___

### isPlaying

• **isPlaying**: `boolean` = `true`

是否正在播放

#### Defined in

[src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts#L18)

___

### timeScale

• **timeScale**: `number` = `1.0`

全局动画时间缩放

#### Defined in

[src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts#L23)

## Accessors

### transform

• `get` **transform**(): [`Transform`](Transform.md)

附加到此 Object3D对象 的 Transform组件。

#### Returns

[`Transform`](Transform.md)

#### Inherited from

ComponentBase.transform

#### Defined in

[src/engine/components/ComponentBase.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L39)

___

### enable

• `get` **enable**(): `boolean`

启用/禁用 组件。启用的组件可更新，禁用的组件不可更新。

#### Returns

`boolean`

#### Inherited from

ComponentBase.enable

#### Defined in

[src/engine/components/ComponentBase.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L62)

• `set` **enable**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

ComponentBase.enable

#### Defined in

[src/engine/components/ComponentBase.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L43)

___

### currName

• `get` **currName**(): `string`

当前播放的动画名称

#### Returns

`string`

#### Defined in

[src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts#L45)

___

### skeleton

• `get` **skeleton**(): `Skeleton`

骨架数据

#### Returns

`Skeleton`

#### Defined in

[src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts#L67)

• `set` **skeleton**(`value`): `void`

骨架数据

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Skeleton` |

#### Returns

`void`

#### Defined in

[src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts#L55)

___

### finalSkeletonPose

• `get` **finalSkeletonPose**(): `SkeletonPose`

当前最终骨架姿势数据

#### Returns

`SkeletonPose`

#### Defined in

[src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts#L74)

___

### jointMatrixIndexTableBuffer

• `get` **jointMatrixIndexTableBuffer**(): `StorageGPUBuffer`

骨骼矩阵索引表数据

#### Returns

`StorageGPUBuffer`

#### Defined in

[src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts#L81)

## Methods

### onVisible

▸ **onVisible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[onVisible](ComponentBase.md#onvisible)

#### Defined in

[src/engine/components/ComponentBase.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L66)

___

### destroy

▸ **destroy**(): `void`

移除组件时候调用

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[destroy](ComponentBase.md#destroy)

#### Defined in

[src/engine/components/ComponentBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L119)

___

### onUpdate

▸ **onUpdate**(`call`): `void`

添加更新函数。会在每帧更新时执行。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `call` | `Function` | 回调函数 |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[onUpdate](ComponentBase.md#onupdate)

#### Defined in

[src/engine/components/ComponentBase.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L135)

___

### onLateUpdate

▸ **onLateUpdate**(`call`): `void`

添加延迟更新函数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `call` | `Function` | 回调函数 |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[onLateUpdate](ComponentBase.md#onlateupdate)

#### Defined in

[src/engine/components/ComponentBase.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L148)

___

### onBeforeUpdate

▸ **onBeforeUpdate**(`call`): `void`

添加帧更新前执行的函数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `call` | `Function` | 回调函数 |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[onBeforeUpdate](ComponentBase.md#onbeforeupdate)

#### Defined in

[src/engine/components/ComponentBase.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L161)

___

### serialization

▸ **serialization**(`assets`): [`SerializeComponentBase`](SerializeComponentBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `assets` | [`ISerializeAssetsCollect`](../interfaces/ISerializeAssetsCollect.md) |

#### Returns

[`SerializeComponentBase`](SerializeComponentBase.md)

#### Inherited from

[ComponentBase](ComponentBase.md).[serialization](ComponentBase.md#serialization)

#### Defined in

[src/engine/components/ComponentBase.ts:170](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L170)

___

### unSerialization

▸ **unSerialization**(`componentData`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `componentData` | [`SerializeComponentBase`](SerializeComponentBase.md) |
| `data` | [`UnSerializeData`](UnSerializeData.md) |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[unSerialization](ComponentBase.md#unserialization)

#### Defined in

[src/engine/components/ComponentBase.ts:175](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L175)

___

### getJointIndexTable

▸ **getJointIndexTable**(`skinJointsName`): `number`[]

通过骨骼名称获取骨骼索引信息

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skinJointsName` | `string`[] | 骨骼名称集合 |

#### Returns

`number`[]

对应的骨骼索引

#### Defined in

[src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts#L90)

___

### addAnimationClip

▸ **addAnimationClip**(`clip`): `void`

添加骨骼动画剪辑

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clip` | `SkeletonAnimationClip` | 骨骼动画数据 |

#### Returns

`void`

#### Defined in

[src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts#L104)

___

### getAnimationClip

▸ **getAnimationClip**(`name`): `SkeletonAnimationClip`

获取指定名称的动画剪辑数据对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 动画名称 |

#### Returns

`SkeletonAnimationClip`

动画剪辑数据对象

#### Defined in

[src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts#L121)

___

### getAnimationClips

▸ **getAnimationClips**(): `SkeletonAnimationClip`[]

获取所有动画剪辑数据对象

#### Returns

`SkeletonAnimationClip`[]

动画剪辑数据对象

#### Defined in

[src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts#L133)

___

### getAnimationClipState

▸ **getAnimationClipState**(`name`): `SkeletonAnimationClipState`

获取指定名称的动画剪辑状态对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 动画名称 |

#### Returns

`SkeletonAnimationClipState`

动画剪辑状态对象

#### Defined in

[src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts:142](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts#L142)

___

### getAnimationClipStates

▸ **getAnimationClipStates**(): `Map`<`string`, `SkeletonAnimationClipState`\>

获取所有动画剪辑状态对象

#### Returns

`Map`<`string`, `SkeletonAnimationClipState`\>

动画剪辑状态对象

#### Defined in

[src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts#L153)

___

### pause

▸ **pause**(): `void`

暂停播放

#### Returns

`void`

#### Defined in

[src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts:160](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts#L160)

___

### resume

▸ **resume**(): `void`

恢复播放

#### Returns

`void`

#### Defined in

[src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts:167](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts#L167)

___

### play

▸ **play**(`animName`, `speed?`, `reset?`): `boolean`

播放指定动画

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `animName` | `string` | `undefined` | 动画的数据集名称 |
| `speed` | `number` | `1` | 动画播放速度,默认值为1 |
| `reset` | `boolean` | `false` | 为true时，每次播放从首帧开始 |

#### Returns

`boolean`

#### Defined in

[src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts:187](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts#L187)

___

### crossFade

▸ **crossFade**(`animName`, `crossTime`): `void`

在指定的时间内将当前动画淡出，并淡入另一个动画状态。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `animName` | `string` | 需要淡入的动画名称。 |
| `crossTime` | `number` | 过渡的时间，单位秒。 |

#### Returns

`void`

#### Defined in

[src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts:217](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts#L217)

___

### setAnimIsLoop

▸ **setAnimIsLoop**(`animName`, `isLoop`): `void`

设置动画循环

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `animName` | `string` | 动画的数据集名称 |
| `isLoop` | `boolean` | 为true时循环播放动画 |

#### Returns

`void`

#### Defined in

[src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts:257](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts#L257)

___

### addJointBind

▸ **addJointBind**(`jointName`, `obj`): `void`

给对象添加关节绑定

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `jointName` | `string` | 关节名称 |
| `obj` | [`Object3D`](Object3D.md) | 绑定的对象 |

#### Returns

`void`

#### Defined in

[src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts:268](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts#L268)

___

### removeJointBind

▸ **removeJointBind**(`obj`): `void`

移除指定对象的关节绑定

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) | 绑定的对象 |

#### Returns

`void`

#### Defined in

[src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts:280](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts#L280)

___

### cloneTo

▸ **cloneTo**(`obj`): `void`

克隆当前组件到指定对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) | 目标对象 |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[cloneTo](ComponentBase.md#cloneto)

#### Defined in

[src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts:328](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts#L328)

## Constructors

### constructor

• **new SkeletonAnimation**()

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/skeletonAnim/SkeletonAnimation.ts#L34)
