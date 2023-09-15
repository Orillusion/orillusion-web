# Class: PositionAudio

Dynamic audio component, with volume varying based on the relative position of the monitor

## Hierarchy

- [`StaticAudio`](StaticAudio.md)

  ↳ **`PositionAudio`**


### Constructors

- [constructor](PositionAudio.md#constructor)

### Properties

- [panner](PositionAudio.md#panner)
- [context](PositionAudio.md#context)
- [gainNode](PositionAudio.md#gainnode)
- [source](PositionAudio.md#source)
- [playing](PositionAudio.md#playing)
- [object3D](PositionAudio.md#object3d)
- [isDestroyed](PositionAudio.md#isdestroyed)

### Accessors

- [refDistance](PositionAudio.md#refdistance)
- [rolloffFactor](PositionAudio.md#rollofffactor)
- [distanceModel](PositionAudio.md#distancemodel)
- [maxDistance](PositionAudio.md#maxdistance)
- [eventDispatcher](PositionAudio.md#eventdispatcher)
- [isStart](PositionAudio.md#isstart)
- [transform](PositionAudio.md#transform)
- [enable](PositionAudio.md#enable)

### Methods

- [setLisenter](PositionAudio.md#setlisenter)
- [showHelper](PositionAudio.md#showhelper)
- [hideHelper](PositionAudio.md#hidehelper)
- [toggleHelper](PositionAudio.md#togglehelper)
- [updateHeler](PositionAudio.md#updateheler)
- [setDirectionalCone](PositionAudio.md#setdirectionalcone)
- [start](PositionAudio.md#start)
- [stop](PositionAudio.md#stop)
- [onUpdate](PositionAudio.md#onupdate)
- [destroy](PositionAudio.md#destroy)
- [load](PositionAudio.md#load)
- [loadBuffer](PositionAudio.md#loadbuffer)
- [play](PositionAudio.md#play)
- [pause](PositionAudio.md#pause)
- [setVolume](PositionAudio.md#setvolume)
- [init](PositionAudio.md#init)
- [onEnable](PositionAudio.md#onenable)
- [onDisable](PositionAudio.md#ondisable)
- [onLateUpdate](PositionAudio.md#onlateupdate)
- [onBeforeUpdate](PositionAudio.md#onbeforeupdate)
- [onCompute](PositionAudio.md#oncompute)
- [onGraphic](PositionAudio.md#ongraphic)
- [onParentChange](PositionAudio.md#onparentchange)
- [cloneTo](PositionAudio.md#cloneto)
- [copyComponent](PositionAudio.md#copycomponent)
- [beforeDestroy](PositionAudio.md#beforedestroy)

## Constructors

### constructor

• **new PositionAudio**()

#### Overrides

[StaticAudio](StaticAudio.md).[constructor](StaticAudio.md#constructor)

#### Defined in

[packages/media-extention/PositionAudio.ts:14](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L14)

## Properties

### panner

• **panner**: `PannerNode`

#### Defined in

[packages/media-extention/PositionAudio.ts:9](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L9)

___

### context

• **context**: `AudioContext` = `null`

#### Inherited from

[StaticAudio](StaticAudio.md).[context](StaticAudio.md#context)

#### Defined in

[packages/media-extention/StaticAudio.ts:9](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L9)

___

### gainNode

• **gainNode**: `GainNode` = `null`

#### Inherited from

[StaticAudio](StaticAudio.md).[gainNode](StaticAudio.md#gainnode)

#### Defined in

[packages/media-extention/StaticAudio.ts:10](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L10)

___

### source

• **source**: `AudioBufferSourceNode` = `null`

#### Inherited from

[StaticAudio](StaticAudio.md).[source](StaticAudio.md#source)

#### Defined in

[packages/media-extention/StaticAudio.ts:11](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L11)

___

### playing

• **playing**: `boolean` = `false`

#### Inherited from

[StaticAudio](StaticAudio.md).[playing](StaticAudio.md#playing)

#### Defined in

[packages/media-extention/StaticAudio.ts:16](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L16)

___

### object3D

• **object3D**: `Object3D` = `null`

owner object3D

#### Inherited from

[StaticAudio](StaticAudio.md).[object3D](StaticAudio.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### isDestroyed

• `Optional` **isDestroyed**: `boolean`

#### Inherited from

[StaticAudio](StaticAudio.md).[isDestroyed](StaticAudio.md#isdestroyed)

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

## Accessors

### refDistance

• `get` **refDistance**(): `number`

#### Returns

`number`

#### Defined in

[packages/media-extention/PositionAudio.ts:99](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L99)

• `set` **refDistance**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/media-extention/PositionAudio.ts:102](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L102)

___

### rolloffFactor

• `get` **rolloffFactor**(): `number`

#### Returns

`number`

#### Defined in

[packages/media-extention/PositionAudio.ts:108](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L108)

• `set` **rolloffFactor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/media-extention/PositionAudio.ts:111](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L111)

___

### distanceModel

• `get` **distanceModel**(): `DistanceModelType`

#### Returns

`DistanceModelType`

#### Defined in

[packages/media-extention/PositionAudio.ts:114](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L114)

• `set` **distanceModel**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `DistanceModelType` |

#### Returns

`void`

#### Defined in

[packages/media-extention/PositionAudio.ts:117](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L117)

___

### maxDistance

• `get` **maxDistance**(): `number`

#### Returns

`number`

#### Defined in

[packages/media-extention/PositionAudio.ts:120](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L120)

• `set` **maxDistance**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/media-extention/PositionAudio.ts:123](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L123)

___

### eventDispatcher

• `get` **eventDispatcher**(): `CEventDispatcher`

#### Returns

`CEventDispatcher`

#### Inherited from

StaticAudio.eventDispatcher

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

StaticAudio.eventDispatcher

#### Defined in

[src/components/ComponentBase.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L28)

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

StaticAudio.isStart

#### Defined in

[src/components/ComponentBase.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L40)

___

### transform

• `get` **transform**(): `Transform`

Return the Transform component attached to the Object3D.

#### Returns

`Transform`

#### Inherited from

StaticAudio.transform

#### Defined in

[src/components/ComponentBase.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L47)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

StaticAudio.enable

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

StaticAudio.enable

#### Defined in

[src/components/ComponentBase.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L54)

## Methods

### setLisenter

▸ **setLisenter**(`listener`): [`PositionAudio`](PositionAudio.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`AudioListener`](AudioListener.md) |

#### Returns

[`PositionAudio`](PositionAudio.md)

#### Overrides

[StaticAudio](StaticAudio.md).[setLisenter](StaticAudio.md#setlisenter)

#### Defined in

[packages/media-extention/PositionAudio.ts:17](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L17)

___

### showHelper

▸ **showHelper**(`thickness?`, `step?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `thickness?` | `number` |
| `step?` | `number` |

#### Returns

`void`

#### Defined in

[packages/media-extention/PositionAudio.ts:24](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L24)

___

### hideHelper

▸ **hideHelper**(): `void`

#### Returns

`void`

#### Defined in

[packages/media-extention/PositionAudio.ts:78](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L78)

___

### toggleHelper

▸ **toggleHelper**(): `void`

#### Returns

`void`

#### Defined in

[packages/media-extention/PositionAudio.ts:87](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L87)

___

### updateHeler

▸ **updateHeler**(): `void`

#### Returns

`void`

#### Defined in

[packages/media-extention/PositionAudio.ts:95](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L95)

___

### setDirectionalCone

▸ **setDirectionalCone**(`coneInnerAngle`, `coneOuterAngle`, `coneOuterGain`): [`PositionAudio`](PositionAudio.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coneInnerAngle` | `number` |
| `coneOuterAngle` | `number` |
| `coneOuterGain` | `number` |

#### Returns

[`PositionAudio`](PositionAudio.md)

#### Defined in

[packages/media-extention/PositionAudio.ts:130](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L130)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[StaticAudio](StaticAudio.md).[start](StaticAudio.md#start)

#### Defined in

[packages/media-extention/PositionAudio.ts:142](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L142)

___

### stop

▸ **stop**(): [`PositionAudio`](PositionAudio.md)

#### Returns

[`PositionAudio`](PositionAudio.md)

#### Overrides

[StaticAudio](StaticAudio.md).[stop](StaticAudio.md#stop)

#### Defined in

[packages/media-extention/PositionAudio.ts:144](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L144)

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Overrides

[StaticAudio](StaticAudio.md).[onUpdate](StaticAudio.md#onupdate)

#### Defined in

[packages/media-extention/PositionAudio.ts:147](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L147)

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

[StaticAudio](StaticAudio.md).[destroy](StaticAudio.md#destroy)

#### Defined in

[packages/media-extention/PositionAudio.ts:170](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L170)

___

### load

▸ **load**(`url`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[StaticAudio](StaticAudio.md).[load](StaticAudio.md#load)

#### Defined in

[packages/media-extention/StaticAudio.ts:40](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L40)

___

### loadBuffer

▸ **loadBuffer**(`buffer`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[StaticAudio](StaticAudio.md).[loadBuffer](StaticAudio.md#loadbuffer)

#### Defined in

[packages/media-extention/StaticAudio.ts:46](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L46)

___

### play

▸ **play**(): [`PositionAudio`](PositionAudio.md)

#### Returns

[`PositionAudio`](PositionAudio.md)

#### Inherited from

[StaticAudio](StaticAudio.md).[play](StaticAudio.md#play)

#### Defined in

[packages/media-extention/StaticAudio.ts:55](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L55)

___

### pause

▸ **pause**(): [`PositionAudio`](PositionAudio.md)

#### Returns

[`PositionAudio`](PositionAudio.md)

#### Inherited from

[StaticAudio](StaticAudio.md).[pause](StaticAudio.md#pause)

#### Defined in

[packages/media-extention/StaticAudio.ts:78](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L78)

___

### setVolume

▸ **setVolume**(`value`): [`PositionAudio`](PositionAudio.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`PositionAudio`](PositionAudio.md)

#### Inherited from

[StaticAudio](StaticAudio.md).[setVolume](StaticAudio.md#setvolume)

#### Defined in

[packages/media-extention/StaticAudio.ts:94](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L94)

___

### init

▸ **init**(`param?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`void`

#### Inherited from

[StaticAudio](StaticAudio.md).[init](StaticAudio.md#init)

#### Defined in

[src/components/ComponentBase.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L112)

___

### onEnable

▸ `Optional` **onEnable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

[StaticAudio](StaticAudio.md).[onEnable](StaticAudio.md#onenable)

#### Defined in

[src/components/ComponentBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L115)

___

### onDisable

▸ `Optional` **onDisable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

[StaticAudio](StaticAudio.md).[onDisable](StaticAudio.md#ondisable)

#### Defined in

[src/components/ComponentBase.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L116)

___

### onLateUpdate

▸ `Optional` **onLateUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

[StaticAudio](StaticAudio.md).[onLateUpdate](StaticAudio.md#onlateupdate)

#### Defined in

[src/components/ComponentBase.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L118)

___

### onBeforeUpdate

▸ `Optional` **onBeforeUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

[StaticAudio](StaticAudio.md).[onBeforeUpdate](StaticAudio.md#onbeforeupdate)

#### Defined in

[src/components/ComponentBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L119)

___

### onCompute

▸ `Optional` **onCompute**(`view?`, `command?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |
| `command?` | `GPUCommandEncoder` |

#### Returns

`any`

#### Inherited from

[StaticAudio](StaticAudio.md).[onCompute](StaticAudio.md#oncompute)

#### Defined in

[src/components/ComponentBase.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L120)

___

### onGraphic

▸ `Optional` **onGraphic**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

[StaticAudio](StaticAudio.md).[onGraphic](StaticAudio.md#ongraphic)

#### Defined in

[src/components/ComponentBase.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L121)

___

### onParentChange

▸ `Optional` **onParentChange**(`lastParent?`, `currentParent?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lastParent?` | `Object3D` |
| `currentParent?` | `Object3D` |

#### Returns

`any`

#### Inherited from

[StaticAudio](StaticAudio.md).[onParentChange](StaticAudio.md#onparentchange)

#### Defined in

[src/components/ComponentBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L122)

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

[StaticAudio](StaticAudio.md).[cloneTo](StaticAudio.md#cloneto)

#### Defined in

[src/components/ComponentBase.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L129)

___

### copyComponent

▸ **copyComponent**(`from`): [`PositionAudio`](PositionAudio.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`PositionAudio`](PositionAudio.md) |

#### Returns

[`PositionAudio`](PositionAudio.md)

#### Inherited from

[StaticAudio](StaticAudio.md).[copyComponent](StaticAudio.md#copycomponent)

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

[StaticAudio](StaticAudio.md).[beforeDestroy](StaticAudio.md#beforedestroy)

#### Defined in

[src/components/ComponentBase.ts:198](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L198)
