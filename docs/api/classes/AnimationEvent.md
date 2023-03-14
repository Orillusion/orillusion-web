# Class: AnimationEvent

动画事件对象

## Hierarchy

- [`CEvent`](CEvent.md)

  ↳ **`AnimationEvent`**


### Properties

- [skeletonAnimation](AnimationEvent.md#skeletonanimation)
- [target](AnimationEvent.md#target)
- [currentTarget](AnimationEvent.md#currenttarget)
- [type](AnimationEvent.md#type)
- [data](AnimationEvent.md#data)
- [param](AnimationEvent.md#param)
- [time](AnimationEvent.md#time)
- [delay](AnimationEvent.md#delay)
- [mouseCode](AnimationEvent.md#mousecode)
- [ctrlKey](AnimationEvent.md#ctrlkey)
- [altKey](AnimationEvent.md#altkey)
- [shiftKey](AnimationEvent.md#shiftkey)
- [targetTouches](AnimationEvent.md#targettouches)
- [changedTouches](AnimationEvent.md#changedtouches)
- [touches](AnimationEvent.md#touches)

### Constructors

- [constructor](AnimationEvent.md#constructor)

### Methods

- [stopImmediatePropagation](AnimationEvent.md#stopimmediatepropagation)

### Accessors

- [isStopImmediatePropagation](AnimationEvent.md#isstopimmediatepropagation)

## Properties

### skeletonAnimation

• **skeletonAnimation**: [`SkeletonAnimation`](SkeletonAnimation.md)

骨骼动画对象

#### Defined in

[src/engine/components/anim/AnimationEvent.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/AnimationEvent.ts#L12)

___

### target

• **target**: [`Object3D`](Object3D.md)

事件目标。
一般为注册事件的对象本身。

#### Inherited from

[CEvent](CEvent.md).[target](CEvent.md#target)

#### Defined in

[src/engine/event/CEvent.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L14)

___

### currentTarget

• **currentTarget**: `CEventListener`

事件当前目标。
一般为注册事件的对象本身。

#### Inherited from

[CEvent](CEvent.md).[currentTarget](CEvent.md#currenttarget)

#### Defined in

[src/engine/event/CEvent.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L20)

___

### type

• **type**: `string`

引擎中的事件的类型标识字符串

#### Inherited from

[CEvent](CEvent.md).[type](CEvent.md#type)

#### Defined in

[src/engine/event/CEvent.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L26)

___

### data

• **data**: `any`

附加数据。
例如,保存QueueLoader加载后的原始数据,加载完毕后,作为参数传出。

#### Inherited from

[CEvent](CEvent.md).[data](CEvent.md#data)

#### Defined in

[src/engine/event/CEvent.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L33)

___

### param

• **param**: `any`

注册事件时传递的参数

#### Inherited from

[CEvent](CEvent.md).[param](CEvent.md#param)

#### Defined in

[src/engine/event/CEvent.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L39)

___

### time

• **time**: `number` = `0`

当前时间戳。

#### Inherited from

[CEvent](CEvent.md).[time](CEvent.md#time)

#### Defined in

[src/engine/event/CEvent.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L45)

___

### delay

• **delay**: `number` = `0`

每帧间隔延时。

#### Inherited from

[CEvent](CEvent.md).[delay](CEvent.md#delay)

#### Defined in

[src/engine/event/CEvent.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L51)

___

### mouseCode

• **mouseCode**: `number` = `0`

鼠标code值,枚举值可以参考MouseCode [MouseCode](../enums/MouseCode.md)

#### Inherited from

[CEvent](CEvent.md).[mouseCode](CEvent.md#mousecode)

#### Defined in

[src/engine/event/CEvent.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L57)

___

### ctrlKey

• **ctrlKey**: `boolean`

事件发生时 Ctrl 是否被按下

#### Inherited from

[CEvent](CEvent.md).[ctrlKey](CEvent.md#ctrlkey)

#### Defined in

[src/engine/event/CEvent.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L62)

___

### altKey

• **altKey**: `boolean`

事件发生时 Alt 是否被按下

#### Inherited from

[CEvent](CEvent.md).[altKey](CEvent.md#altkey)

#### Defined in

[src/engine/event/CEvent.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L67)

___

### shiftKey

• **shiftKey**: `boolean`

事件发生时 Shift 是否被按下

#### Inherited from

[CEvent](CEvent.md).[shiftKey](CEvent.md#shiftkey)

#### Defined in

[src/engine/event/CEvent.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L72)

___

### targetTouches

• **targetTouches**: `TouchData`[]

手指触摸到绑定事件的节点上的触摸点的集合
touch列表 TouchData

#### Inherited from

[CEvent](CEvent.md).[targetTouches](CEvent.md#targettouches)

#### Defined in

[src/engine/event/CEvent.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L78)

___

### changedTouches

• **changedTouches**: `TouchData`[]

触摸事件时改变触摸点的集合
touch列表 TouchData

#### Inherited from

[CEvent](CEvent.md).[changedTouches](CEvent.md#changedtouches)

#### Defined in

[src/engine/event/CEvent.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L84)

___

### touches

• **touches**: `TouchData`[]

手指触摸到屏幕上引起的当前所有触摸点的集合
touch列表 TouchData

#### Inherited from

[CEvent](CEvent.md).[touches](CEvent.md#touches)

#### Defined in

[src/engine/event/CEvent.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L90)

## Constructors

### constructor

• **new AnimationEvent**(`name`, `time`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `time` | `number` |

#### Overrides

[CEvent](CEvent.md).[constructor](CEvent.md#constructor)

#### Defined in

[src/engine/components/anim/AnimationEvent.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/anim/AnimationEvent.ts#L14)

## Methods

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

防止对事件流中当前节点的后续节点中的所有事件侦听器进行处理。

#### Returns

`void`

#### Inherited from

[CEvent](CEvent.md).[stopImmediatePropagation](CEvent.md#stopimmediatepropagation)

#### Defined in

[src/engine/event/CEvent.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L108)

## Accessors

### isStopImmediatePropagation

• `get` **isStopImmediatePropagation**(): `boolean`

(只读)是否调用过 stopImmediatePropagation() 方法.

#### Returns

`boolean`

#### Inherited from

CEvent.isStopImmediatePropagation

#### Defined in

[src/engine/event/CEvent.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L123)
