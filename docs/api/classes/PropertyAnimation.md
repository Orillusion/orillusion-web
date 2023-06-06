# Class: PropertyAnimation

Attribute Animation Component

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`PropertyAnimation`**

### Constructors

- [constructor](PropertyAnimation.md#constructor)

### Properties

- [object3D](PropertyAnimation.md#object3d)
- [defaultClip](PropertyAnimation.md#defaultclip)
- [autoPlay](PropertyAnimation.md#autoplay)

### Accessors

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
- [destroy](PropertyAnimation.md#destroy)
- [registerEventKeyFrame](PropertyAnimation.md#registereventkeyframe)
- [appendClip](PropertyAnimation.md#appendclip)
- [stop](PropertyAnimation.md#stop)
- [toggle](PropertyAnimation.md#toggle)
- [getClip](PropertyAnimation.md#getclip)
- [seek](PropertyAnimation.md#seek)
- [play](PropertyAnimation.md#play)
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

### speed

• `get` **speed**(): `number`

get playing speed

#### Returns

`number`

#### Defined in

[src/components/anim/curveAnim/PropertyAnimation.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L99)

• `set` **speed**(`value`): `void`

set playing speed

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/anim/curveAnim/PropertyAnimation.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L92)

___

### currentClip

• `get` **currentClip**(): `PropertyAnimClip`

get animation clip which is playing now

#### Returns

`PropertyAnimClip`

#### Defined in

[src/components/anim/curveAnim/PropertyAnimation.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L132)

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

[src/components/anim/curveAnim/PropertyAnimation.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L66)

___

### stop

▸ **stop**(): `void`

stop playing

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[stop](ComponentBase.md#stop)

#### Defined in

[src/components/anim/curveAnim/PropertyAnimation.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L106)

___

### toggle

▸ **toggle**(): `void`

stop or resume playing

#### Returns

`void`

#### Defined in

[src/components/anim/curveAnim/PropertyAnimation.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L113)

___

### getClip

▸ **getClip**(`clip`): `PropertyAnimClip`

get animation clip by clip name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clip` | `string` | name of PropertyAnimClip |

#### Returns

`PropertyAnimClip`

#### Defined in

[src/components/anim/curveAnim/PropertyAnimation.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L122)

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

▸ **play**(`clip`, `reset?`): `PropertyAnimClip`

play animation by given name

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `clip` | `string` | `undefined` | animation name |
| `reset` | `boolean` | `true` | if true, play the animation from time 0 |

#### Returns

`PropertyAnimClip`

#### Defined in

[src/components/anim/curveAnim/PropertyAnimation.ts:162](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L162)

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

[src/components/anim/curveAnim/PropertyAnimation.ts:185](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L185)
