# Class: PropertyAnimation

Attribute Animation Component

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`PropertyAnimation`**

### Constructors

- [constructor](PropertyAnimation.md#constructor)

### Properties

- [object3D](PropertyAnimation.md#object3d)
- [isDestroyed](PropertyAnimation.md#isdestroyed)
- [defaultClip](PropertyAnimation.md#defaultclip)
- [autoPlay](PropertyAnimation.md#autoplay)

### Accessors

- [eventDispatcher](PropertyAnimation.md#eventdispatcher)
- [isStart](PropertyAnimation.md#isstart)
- [transform](PropertyAnimation.md#transform)
- [enable](PropertyAnimation.md#enable)
- [speed](PropertyAnimation.md#speed)
- [currentClip](PropertyAnimation.md#currentclip)
- [time](PropertyAnimation.md#time)

### Methods

- [onEnable](PropertyAnimation.md#onenable)
- [onDisable](PropertyAnimation.md#ondisable)
- [onLateUpdate](PropertyAnimation.md#onlateupdate)
- [onBeforeUpdate](PropertyAnimation.md#onbeforeupdate)
- [onCompute](PropertyAnimation.md#oncompute)
- [onGraphic](PropertyAnimation.md#ongraphic)
- [onParentChange](PropertyAnimation.md#onparentchange)
- [beforeDestroy](PropertyAnimation.md#beforedestroy)
- [destroy](PropertyAnimation.md#destroy)
- [registerEventKeyFrame](PropertyAnimation.md#registereventkeyframe)
- [appendClip](PropertyAnimation.md#appendclip)
- [stop](PropertyAnimation.md#stop)
- [toggle](PropertyAnimation.md#toggle)
- [getClip](PropertyAnimation.md#getclip)
- [seek](PropertyAnimation.md#seek)
- [play](PropertyAnimation.md#play)
- [copyComponent](PropertyAnimation.md#copycomponent)
- [cloneTo](PropertyAnimation.md#cloneto)

## Constructors

### constructor

• **new PropertyAnimation**()

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/components/anim/curveAnim/PropertyAnimation.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L27)

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

### defaultClip

• **defaultClip**: `string`

name of default animation clip

#### Defined in

[src/components/anim/curveAnim/PropertyAnimation.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L17)

___

### autoPlay

• **autoPlay**: `boolean`

is it play auto

#### Defined in

[src/components/anim/curveAnim/PropertyAnimation.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L21)

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

### speed

• `get` **speed**(): `number`

get playing speed

#### Returns

`number`

#### Defined in

[src/components/anim/curveAnim/PropertyAnimation.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L98)

• `set` **speed**(`value`): `void`

set playing speed

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/anim/curveAnim/PropertyAnimation.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L91)

___

### currentClip

• `get` **currentClip**(): `PropertyAnimClip`

get animation clip which is playing now

#### Returns

`PropertyAnimClip`

#### Defined in

[src/components/anim/curveAnim/PropertyAnimation.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L135)

___

### time

• `get` **time**(): `number`

get time of current animator

#### Returns

`number`

#### Defined in

[src/components/anim/curveAnim/PropertyAnimation.ts:142](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L142)

## Methods

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

[src/components/ComponentBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L115)

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

[src/components/ComponentBase.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L116)

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

[src/components/ComponentBase.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L118)

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

[src/components/ComponentBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L119)

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

[src/components/ComponentBase.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L120)

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

[src/components/ComponentBase.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L121)

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

[src/components/ComponentBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L122)

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

### registerEventKeyFrame

▸ **registerEventKeyFrame**(`frame`): `void`

register a event to animator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `frame` | `AnimatorEventKeyframe` | source AnimatorEventKeyframe |

#### Returns

`void`

#### Defined in

[src/components/anim/curveAnim/PropertyAnimation.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L38)

___

### appendClip

▸ **appendClip**(`clip`): `void`

append a perperty animation clip

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clip` | `PropertyAnimClip` | source PropertyAnimClip |

#### Returns

`void`

#### Defined in

[src/components/anim/curveAnim/PropertyAnimation.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L65)

___

### stop

▸ **stop**(): `void`

stop playing

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[stop](ComponentBase.md#stop)

#### Defined in

[src/components/anim/curveAnim/PropertyAnimation.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L105)

___

### toggle

▸ **toggle**(): `void`

stop or resume playing

#### Returns

`void`

#### Defined in

[src/components/anim/curveAnim/PropertyAnimation.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L112)

___

### getClip

▸ **getClip**(`name`): `PropertyAnimClip`

get animation clip by clip name

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`PropertyAnimClip`

#### Defined in

[src/components/anim/curveAnim/PropertyAnimation.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L121)

___

### seek

▸ **seek**(`time`): `void`

seek the animation to assign time

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | assign time |

#### Returns

`void`

#### Defined in

[src/components/anim/curveAnim/PropertyAnimation.ts:150](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L150)

___

### play

▸ **play**(`name`, `reset?`): `PropertyAnimClip`

play animation by given name

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | animation name |
| `reset` | `boolean` | `true` | if true, play the animation from time 0 |

#### Returns

`PropertyAnimClip`

#### Defined in

[src/components/anim/curveAnim/PropertyAnimation.ts:160](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L160)

___

### copyComponent

▸ **copyComponent**(`from`): [`PropertyAnimation`](PropertyAnimation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`PropertyAnimation`](PropertyAnimation.md) |

#### Returns

[`PropertyAnimation`](PropertyAnimation.md)

#### Overrides

[ComponentBase](ComponentBase.md).[copyComponent](ComponentBase.md#copycomponent)

#### Defined in

[src/components/anim/curveAnim/PropertyAnimation.ts:179](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L179)

___

### cloneTo

▸ **cloneTo**(`obj`): `void`

Create a new PropertyAnimation component, copy the properties of the current component, 
and add them to the target object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) | target object3D |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[cloneTo](ComponentBase.md#cloneto)

#### Defined in

[src/components/anim/curveAnim/PropertyAnimation.ts:194](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L194)
