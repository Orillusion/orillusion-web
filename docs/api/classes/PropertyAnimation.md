# Class: PropertyAnimation

属性动画组件

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`PropertyAnimation`**


### Properties

- [object3D](PropertyAnimation.md#object3d)
- [serializeTag](PropertyAnimation.md#serializetag)
- [defaultClip](PropertyAnimation.md#defaultclip)
- [autoPlay](PropertyAnimation.md#autoplay)

### Accessors

- [transform](PropertyAnimation.md#transform)
- [enable](PropertyAnimation.md#enable)
- [eventDispatch](PropertyAnimation.md#eventdispatch)
- [speed](PropertyAnimation.md#speed)
- [currentClip](PropertyAnimation.md#currentclip)
- [time](PropertyAnimation.md#time)

### Methods

- [onVisible](PropertyAnimation.md#onvisible)
- [destroy](PropertyAnimation.md#destroy)
- [onUpdate](PropertyAnimation.md#onupdate)
- [onLateUpdate](PropertyAnimation.md#onlateupdate)
- [onBeforeUpdate](PropertyAnimation.md#onbeforeupdate)
- [serialization](PropertyAnimation.md#serialization)
- [unSerialization](PropertyAnimation.md#unserialization)
- [interestKeyFrame](PropertyAnimation.md#interestkeyframe)
- [appendClip](PropertyAnimation.md#appendclip)
- [stop](PropertyAnimation.md#stop)
- [toggle](PropertyAnimation.md#toggle)
- [getClip](PropertyAnimation.md#getclip)
- [seek](PropertyAnimation.md#seek)
- [play](PropertyAnimation.md#play)
- [cloneTo](PropertyAnimation.md#cloneto)

### Constructors

- [constructor](PropertyAnimation.md#constructor)

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

### defaultClip

• **defaultClip**: `string`

默认状态

#### Defined in

[src/engine/components/anim/curveAnim/PropertyAnimation.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/curveAnim/PropertyAnimation.ts#L18)

___

### autoPlay

• **autoPlay**: `boolean`

是否自动播放

#### Defined in

[src/engine/components/anim/curveAnim/PropertyAnimation.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/curveAnim/PropertyAnimation.ts#L22)

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

### eventDispatch

• `get` **eventDispatch**(): [`CEventDispatcher`](CEventDispatcher.md)

当前动画的事件派发器

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Defined in

[src/engine/components/anim/curveAnim/PropertyAnimation.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/curveAnim/PropertyAnimation.ts#L52)

___

### speed

• `get` **speed**(): `number`

获得播放速度

#### Returns

`number`

#### Defined in

[src/engine/components/anim/curveAnim/PropertyAnimation.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/curveAnim/PropertyAnimation.ts#L121)

• `set` **speed**(`value`): `void`

设置动画播放速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/components/anim/curveAnim/PropertyAnimation.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/curveAnim/PropertyAnimation.ts#L114)

___

### currentClip

• `get` **currentClip**(): `PropertyAnimClip`

获得当前正在播放的动画

#### Returns

`PropertyAnimClip`

#### Defined in

[src/engine/components/anim/curveAnim/PropertyAnimation.ts:154](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/curveAnim/PropertyAnimation.ts#L154)

___

### time

• `get` **time**(): `number`

动画播放的时间

#### Returns

`number`

#### Defined in

[src/engine/components/anim/curveAnim/PropertyAnimation.ts:164](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/curveAnim/PropertyAnimation.ts#L164)

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

### interestKeyFrame

▸ **interestKeyFrame**(`frame`): `void`

插入关键帧

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `frame` | `AnimatorEventKeyframe` | 关键帧数据 |

#### Returns

`void`

#### Defined in

[src/engine/components/anim/curveAnim/PropertyAnimation.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/curveAnim/PropertyAnimation.ts#L60)

___

### appendClip

▸ **appendClip**(`clip`): `void`

添加属性动画

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clip` | `PropertyAnimClip` | 属性动画数据 |

#### Returns

`void`

#### Defined in

[src/engine/components/anim/curveAnim/PropertyAnimation.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/curveAnim/PropertyAnimation.ts#L88)

___

### stop

▸ **stop**(): `void`

停止播放

#### Returns

`void`

#### Overrides

ComponentBase.stop

#### Defined in

[src/engine/components/anim/curveAnim/PropertyAnimation.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/curveAnim/PropertyAnimation.ts#L128)

___

### toggle

▸ **toggle**(): `void`

暂停或者恢复播放

#### Returns

`void`

#### Defined in

[src/engine/components/anim/curveAnim/PropertyAnimation.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/curveAnim/PropertyAnimation.ts#L135)

___

### getClip

▸ **getClip**(`clip`): `PropertyAnimClip`

获取动画

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clip` | `string` | 动画名称 |

#### Returns

`PropertyAnimClip`

#### Defined in

[src/engine/components/anim/curveAnim/PropertyAnimation.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/curveAnim/PropertyAnimation.ts#L144)

___

### seek

▸ **seek**(`time`): `void`

将动画设置到指定时间

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | 指定时间 |

#### Returns

`void`

#### Defined in

[src/engine/components/anim/curveAnim/PropertyAnimation.ts:172](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/curveAnim/PropertyAnimation.ts#L172)

___

### play

▸ **play**(`clip`, `reset?`): `PropertyAnimClip`

播放指定动画

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `clip` | `string` | `undefined` | 动画名称 |
| `reset` | `boolean` | `true` | 默认为true时，每次播放从头开始 |

#### Returns

`PropertyAnimClip`

#### Defined in

[src/engine/components/anim/curveAnim/PropertyAnimation.ts:184](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/curveAnim/PropertyAnimation.ts#L184)

___

### cloneTo

▸ **cloneTo**(`obj`): `void`

创建新的PropertyAnimation组件，复制当前组件的属性，并添加到目标对象上。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) | 目标对象 |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[cloneTo](ComponentBase.md#cloneto)

#### Defined in

[src/engine/components/anim/curveAnim/PropertyAnimation.ts:206](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/curveAnim/PropertyAnimation.ts#L206)

## Constructors

### constructor

• **new PropertyAnimation**()

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/engine/components/anim/curveAnim/PropertyAnimation.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/curveAnim/PropertyAnimation.ts#L29)
