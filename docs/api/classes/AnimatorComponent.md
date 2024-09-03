# Class: AnimatorComponent

Components are used to attach functionality to object3D, it has an owner object3D.
The component can receive update events at each frame.

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`AnimatorComponent`**

### Constructors

- [constructor](AnimatorComponent.md#constructor)

### Properties

- [object3D](AnimatorComponent.md#object3d)
- [isDestroyed](AnimatorComponent.md#isdestroyed)
- [timeScale](AnimatorComponent.md#timescale)
- [jointMatrixIndexTableBuffer](AnimatorComponent.md#jointmatrixindextablebuffer)
- [playBlendShapeLoop](AnimatorComponent.md#playblendshapeloop)
- [root](AnimatorComponent.md#root)

### Accessors

- [eventDispatcher](AnimatorComponent.md#eventdispatcher)
- [isStart](AnimatorComponent.md#isstart)
- [transform](AnimatorComponent.md#transform)
- [enable](AnimatorComponent.md#enable)
- [avatar](AnimatorComponent.md#avatar)
- [numJoint](AnimatorComponent.md#numjoint)
- [clips](AnimatorComponent.md#clips)
- [clipsState](AnimatorComponent.md#clipsstate)

### Methods

- [stop](AnimatorComponent.md#stop)
- [onEnable](AnimatorComponent.md#onenable)
- [onDisable](AnimatorComponent.md#ondisable)
- [onLateUpdate](AnimatorComponent.md#onlateupdate)
- [onBeforeUpdate](AnimatorComponent.md#onbeforeupdate)
- [onCompute](AnimatorComponent.md#oncompute)
- [onGraphic](AnimatorComponent.md#ongraphic)
- [onParentChange](AnimatorComponent.md#onparentchange)
- [onAddChild](AnimatorComponent.md#onaddchild)
- [onRemoveChild](AnimatorComponent.md#onremovechild)
- [copyComponent](AnimatorComponent.md#copycomponent)
- [beforeDestroy](AnimatorComponent.md#beforedestroy)
- [destroy](AnimatorComponent.md#destroy)
- [init](AnimatorComponent.md#init)
- [start](AnimatorComponent.md#start)
- [playAnim](AnimatorComponent.md#playanim)
- [crossFade](AnimatorComponent.md#crossfade)
- [playBlendShape](AnimatorComponent.md#playblendshape)
- [getJointIndexTable](AnimatorComponent.md#getjointindextable)
- [cloneTo](AnimatorComponent.md#cloneto)
- [onUpdate](AnimatorComponent.md#onupdate)
- [updateBlendShape](AnimatorComponent.md#updateblendshape)
- [getAnimationClipState](AnimatorComponent.md#getanimationclipstate)
- [cloneMorphRenderers](AnimatorComponent.md#clonemorphrenderers)

## Constructors

### constructor

• **new AnimatorComponent**(): [`AnimatorComponent`](AnimatorComponent.md)

#### Returns

[`AnimatorComponent`](AnimatorComponent.md)

#### Inherited from

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

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

### timeScale

• **timeScale**: `number` = `1.0`

#### Defined in

[src/components/anim/AnimatorComponent.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L8)

___

### jointMatrixIndexTableBuffer

• **jointMatrixIndexTableBuffer**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

[src/components/anim/AnimatorComponent.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L9)

___

### playBlendShapeLoop

• **playBlendShapeLoop**: `boolean` = `false`

#### Defined in

[src/components/anim/AnimatorComponent.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L10)

___

### root

• **root**: [`Object3D`](Object3D.md)

#### Defined in

[src/components/anim/AnimatorComponent.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L28)

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

### avatar

• `set` **avatar**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[src/components/anim/AnimatorComponent.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L125)

___

### numJoint

• `get` **numJoint**(): `number`

#### Returns

`number`

#### Defined in

[src/components/anim/AnimatorComponent.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L136)

___

### clips

• `get` **clips**(): [`PropertyAnimationClip`](PropertyAnimationClip.md)[]

#### Returns

[`PropertyAnimationClip`](PropertyAnimationClip.md)[]

#### Defined in

[src/components/anim/AnimatorComponent.ts:200](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L200)

• `set` **clips**(`clips`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clips` | [`PropertyAnimationClip`](PropertyAnimationClip.md)[] |

#### Returns

`void`

#### Defined in

[src/components/anim/AnimatorComponent.ts:186](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L186)

___

### clipsState

• `get` **clipsState**(): [`PropertyAnimationClipState`](PropertyAnimationClipState.md)[]

#### Returns

[`PropertyAnimationClipState`](PropertyAnimationClipState.md)[]

#### Defined in

[src/components/anim/AnimatorComponent.ts:204](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L204)

## Methods

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

### onAddChild

▸ **onAddChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onAddChild](ComponentBase.md#onaddchild)

#### Defined in

[src/components/ComponentBase.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L123)

___

### onRemoveChild

▸ **onRemoveChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onRemoveChild](ComponentBase.md#onremovechild)

#### Defined in

[src/components/ComponentBase.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L124)

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

[ComponentBase](ComponentBase.md).[beforeDestroy](ComponentBase.md#beforedestroy)

#### Defined in

[src/components/ComponentBase.ts:200](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L200)

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

[src/components/ComponentBase.ts:207](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L207)

___

### init

▸ **init**(`param?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[init](ComponentBase.md#init)

#### Defined in

[src/components/anim/AnimatorComponent.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L36)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[start](ComponentBase.md#start)

#### Defined in

[src/components/anim/AnimatorComponent.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L57)

___

### playAnim

▸ **playAnim**(`anim`, `time?`, `speed?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `anim` | `string` | `undefined` |
| `time` | `number` | `0` |
| `speed` | `number` | `1` |

#### Returns

`void`

#### Defined in

[src/components/anim/AnimatorComponent.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L64)

___

### crossFade

▸ **crossFade**(`anim`, `crossTime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anim` | `string` |
| `crossTime` | `number` |

#### Returns

`void`

#### Defined in

[src/components/anim/AnimatorComponent.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L80)

___

### playBlendShape

▸ **playBlendShape**(`shapeName`, `time?`, `speed?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `shapeName` | `string` | `undefined` |
| `time` | `number` | `0` |
| `speed` | `number` | `1` |

#### Returns

`void`

#### Defined in

[src/components/anim/AnimatorComponent.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L114)

___

### getJointIndexTable

▸ **getJointIndexTable**(`skinJointsName`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `skinJointsName` | `string`[] |

#### Returns

`number`[]

#### Defined in

[src/components/anim/AnimatorComponent.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L140)

___

### cloneTo

▸ **cloneTo**(`obj`): `void`

clone component data to target object3D

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) | target object3D |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[cloneTo](ComponentBase.md#cloneto)

#### Defined in

[src/components/anim/AnimatorComponent.ts:208](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L208)

___

### onUpdate

▸ **onUpdate**(`view?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onUpdate](ComponentBase.md#onupdate)

#### Defined in

[src/components/anim/AnimatorComponent.ts:240](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L240)

___

### updateBlendShape

▸ **updateBlendShape**(`attributes`, `key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `string`[] |
| `key` | `string` |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/anim/AnimatorComponent.ts:305](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L305)

___

### getAnimationClipState

▸ **getAnimationClipState**(`name`): [`PropertyAnimationClipState`](PropertyAnimationClipState.md)

Gets the animation clip data object with the specified name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of animation |

#### Returns

[`PropertyAnimationClipState`](PropertyAnimationClipState.md)

Animation clip data object

#### Defined in

[src/components/anim/AnimatorComponent.ts:413](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L413)

___

### cloneMorphRenderers

▸ **cloneMorphRenderers**(): `Object`

#### Returns

`Object`

#### Defined in

[src/components/anim/AnimatorComponent.ts:422](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L422)
