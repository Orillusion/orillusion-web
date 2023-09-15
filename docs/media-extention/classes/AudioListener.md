# Class: AudioListener

Audio Listener
Used in conjunction [PositionAudio](PositionAudio.md) or [StaticAudio](StaticAudio.md)

## Hierarchy

- `ComponentBase`

  ↳ **`AudioListener`**


### Constructors

- [constructor](AudioListener.md#constructor)

### Properties

- [context](AudioListener.md#context)
- [gain](AudioListener.md#gain)
- [object3D](AudioListener.md#object3d)
- [isDestroyed](AudioListener.md#isdestroyed)

### Accessors

- [eventDispatcher](AudioListener.md#eventdispatcher)
- [isStart](AudioListener.md#isstart)
- [transform](AudioListener.md#transform)
- [enable](AudioListener.md#enable)

### Methods

- [onUpdate](AudioListener.md#onupdate)
- [destroy](AudioListener.md#destroy)
- [init](AudioListener.md#init)
- [start](AudioListener.md#start)
- [stop](AudioListener.md#stop)
- [onEnable](AudioListener.md#onenable)
- [onDisable](AudioListener.md#ondisable)
- [onLateUpdate](AudioListener.md#onlateupdate)
- [onBeforeUpdate](AudioListener.md#onbeforeupdate)
- [onCompute](AudioListener.md#oncompute)
- [onGraphic](AudioListener.md#ongraphic)
- [onParentChange](AudioListener.md#onparentchange)
- [cloneTo](AudioListener.md#cloneto)
- [copyComponent](AudioListener.md#copycomponent)
- [beforeDestroy](AudioListener.md#beforedestroy)

## Constructors

### constructor

• **new AudioListener**()

#### Overrides

ComponentBase.constructor

#### Defined in

[packages/media-extention/AudioListener.ts:11](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/AudioListener.ts#L11)

## Properties

### context

• `Readonly` **context**: `AudioContext`

#### Defined in

[packages/media-extention/AudioListener.ts:9](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/AudioListener.ts#L9)

___

### gain

• `Readonly` **gain**: `GainNode`

#### Defined in

[packages/media-extention/AudioListener.ts:10](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/AudioListener.ts#L10)

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

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Overrides

ComponentBase.onUpdate

#### Defined in

[packages/media-extention/AudioListener.ts:17](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/AudioListener.ts#L17)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Overrides

ComponentBase.destroy

#### Defined in

[packages/media-extention/AudioListener.ts:44](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/AudioListener.ts#L44)

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

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

ComponentBase.stop

#### Defined in

[src/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L114)

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

ComponentBase.onEnable

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

ComponentBase.onDisable

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

ComponentBase.onLateUpdate

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

ComponentBase.onBeforeUpdate

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

ComponentBase.onCompute

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

ComponentBase.onGraphic

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

ComponentBase.onParentChange

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

ComponentBase.cloneTo

#### Defined in

[src/components/ComponentBase.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L129)

___

### copyComponent

▸ **copyComponent**(`from`): [`AudioListener`](AudioListener.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`AudioListener`](AudioListener.md) |

#### Returns

[`AudioListener`](AudioListener.md)

#### Inherited from

ComponentBase.copyComponent

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

ComponentBase.beforeDestroy

#### Defined in

[src/components/ComponentBase.ts:198](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L198)
