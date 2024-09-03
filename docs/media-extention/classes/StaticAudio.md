# Class: StaticAudio

Static audio component, volume level does not vary depending on the position of the monitor

## Hierarchy

- `ComponentBase`

  ↳ **`StaticAudio`**

  ↳↳ [`PositionAudio`](PositionAudio.md)

### Constructors

- [constructor](StaticAudio.md#constructor)

### Properties

- [context](StaticAudio.md#context)
- [gainNode](StaticAudio.md#gainnode)
- [source](StaticAudio.md#source)
- [playing](StaticAudio.md#playing)
- [object3D](StaticAudio.md#object3d)
- [isDestroyed](StaticAudio.md#isdestroyed)

### Accessors

- [eventDispatcher](StaticAudio.md#eventdispatcher)
- [isStart](StaticAudio.md#isstart)
- [transform](StaticAudio.md#transform)
- [enable](StaticAudio.md#enable)

### Methods

- [setLisenter](StaticAudio.md#setlisenter)
- [load](StaticAudio.md#load)
- [loadBuffer](StaticAudio.md#loadbuffer)
- [play](StaticAudio.md#play)
- [pause](StaticAudio.md#pause)
- [stop](StaticAudio.md#stop)
- [setVolume](StaticAudio.md#setvolume)
- [destroy](StaticAudio.md#destroy)
- [init](StaticAudio.md#init)
- [start](StaticAudio.md#start)
- [onEnable](StaticAudio.md#onenable)
- [onDisable](StaticAudio.md#ondisable)
- [onUpdate](StaticAudio.md#onupdate)
- [onLateUpdate](StaticAudio.md#onlateupdate)
- [onBeforeUpdate](StaticAudio.md#onbeforeupdate)
- [onCompute](StaticAudio.md#oncompute)
- [onGraphic](StaticAudio.md#ongraphic)
- [onParentChange](StaticAudio.md#onparentchange)
- [onAddChild](StaticAudio.md#onaddchild)
- [onRemoveChild](StaticAudio.md#onremovechild)
- [cloneTo](StaticAudio.md#cloneto)
- [copyComponent](StaticAudio.md#copycomponent)
- [beforeDestroy](StaticAudio.md#beforedestroy)

## Constructors

### constructor

• **new StaticAudio**(): [`StaticAudio`](StaticAudio.md)

#### Returns

[`StaticAudio`](StaticAudio.md)

#### Overrides

ComponentBase.constructor

#### Defined in

[packages/media-extention/StaticAudio.ts:19](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L19)

## Properties

### context

• **context**: `AudioContext` = `null`

#### Defined in

[packages/media-extention/StaticAudio.ts:9](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L9)

___

### gainNode

• **gainNode**: `GainNode` = `null`

#### Defined in

[packages/media-extention/StaticAudio.ts:10](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L10)

___

### source

• **source**: `AudioBufferSourceNode` = `null`

#### Defined in

[packages/media-extention/StaticAudio.ts:11](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L11)

___

### playing

• **playing**: `boolean` = `false`

#### Defined in

[packages/media-extention/StaticAudio.ts:16](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L16)

___

### object3D

• **object3D**: `Object3D` = `null`

owner object3D

#### Inherited from

ComponentBase.object3D

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### isDestroyed

• `Optional` **isDestroyed**: `boolean`

#### Inherited from

ComponentBase.isDestroyed

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): `CEventDispatcher`

#### Returns

`CEventDispatcher`

#### Inherited from

ComponentBase.eventDispatcher

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

• `get` **transform**(): `Transform`

Return the Transform component attached to the Object3D.

#### Returns

`Transform`

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

## Methods

### setLisenter

▸ **setLisenter**(`listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`AudioListener`](AudioListener.md) |

#### Returns

`this`

#### Defined in

[packages/media-extention/StaticAudio.ts:22](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L22)

___

### load

▸ **load**(`url`, `options?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options` | `Object` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/media-extention/StaticAudio.ts:40](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L40)

___

### loadBuffer

▸ **loadBuffer**(`buffer`, `options?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |
| `options` | `Object` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/media-extention/StaticAudio.ts:46](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L46)

___

### play

▸ **play**(): `this`

#### Returns

`this`

#### Defined in

[packages/media-extention/StaticAudio.ts:55](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L55)

___

### pause

▸ **pause**(): `this`

#### Returns

`this`

#### Defined in

[packages/media-extention/StaticAudio.ts:78](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L78)

___

### stop

▸ **stop**(): `this`

#### Returns

`this`

#### Overrides

ComponentBase.stop

#### Defined in

[packages/media-extention/StaticAudio.ts:89](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L89)

___

### setVolume

▸ **setVolume**(`value`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`this`

#### Defined in

[packages/media-extention/StaticAudio.ts:94](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L94)

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

ComponentBase.destroy

#### Defined in

[packages/media-extention/StaticAudio.ts:105](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L105)

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

ComponentBase.init

#### Defined in

[src/components/ComponentBase.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L112)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

ComponentBase.start

#### Defined in

[src/components/ComponentBase.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

___

### onEnable

▸ **onEnable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

ComponentBase.onEnable

#### Defined in

[src/components/ComponentBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L115)

___

### onDisable

▸ **onDisable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

ComponentBase.onDisable

#### Defined in

[src/components/ComponentBase.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L116)

___

### onUpdate

▸ **onUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

ComponentBase.onUpdate

#### Defined in

[src/components/ComponentBase.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L117)

___

### onLateUpdate

▸ **onLateUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

ComponentBase.onLateUpdate

#### Defined in

[src/components/ComponentBase.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L118)

___

### onBeforeUpdate

▸ **onBeforeUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

ComponentBase.onBeforeUpdate

#### Defined in

[src/components/ComponentBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L119)

___

### onCompute

▸ **onCompute**(`view?`, `command?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |
| `command?` | `GPUCommandEncoder` |

#### Returns

`any`

#### Inherited from

ComponentBase.onCompute

#### Defined in

[src/components/ComponentBase.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L120)

___

### onGraphic

▸ **onGraphic**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

ComponentBase.onGraphic

#### Defined in

[src/components/ComponentBase.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L121)

___

### onParentChange

▸ **onParentChange**(`lastParent?`, `currentParent?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lastParent?` | `Object3D` |
| `currentParent?` | `Object3D` |

#### Returns

`any`

#### Inherited from

ComponentBase.onParentChange

#### Defined in

[src/components/ComponentBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L122)

___

### onAddChild

▸ **onAddChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | `Object3D` |

#### Returns

`any`

#### Inherited from

ComponentBase.onAddChild

#### Defined in

[src/components/ComponentBase.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L123)

___

### onRemoveChild

▸ **onRemoveChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | `Object3D` |

#### Returns

`any`

#### Inherited from

ComponentBase.onRemoveChild

#### Defined in

[src/components/ComponentBase.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L124)

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

ComponentBase.cloneTo

#### Defined in

[src/components/ComponentBase.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L131)

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

ComponentBase.copyComponent

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

ComponentBase.beforeDestroy

#### Defined in

[src/components/ComponentBase.ts:200](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L200)
