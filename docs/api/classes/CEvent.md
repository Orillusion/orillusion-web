# Class: CEvent

所有事件类的基类

## Hierarchy

- **`CEvent`**

  ↳ [`AnimationEvent`](AnimationEvent.md)

  ↳ [`KeyEvent`](KeyEvent.md)

  ↳ [`PointerEvent3D`](PointerEvent3D.md)


### Properties

- [target](CEvent.md#target)
- [currentTarget](CEvent.md#currenttarget)
- [type](CEvent.md#type)
- [data](CEvent.md#data)
- [param](CEvent.md#param)
- [time](CEvent.md#time)
- [delay](CEvent.md#delay)
- [mouseCode](CEvent.md#mousecode)
- [ctrlKey](CEvent.md#ctrlkey)
- [altKey](CEvent.md#altkey)
- [shiftKey](CEvent.md#shiftkey)
- [targetTouches](CEvent.md#targettouches)
- [changedTouches](CEvent.md#changedtouches)
- [touches](CEvent.md#touches)

### Constructors

- [constructor](CEvent.md#constructor)

### Methods

- [stopImmediatePropagation](CEvent.md#stopimmediatepropagation)

### Accessors

- [isStopImmediatePropagation](CEvent.md#isstopimmediatepropagation)

## Properties

### target

• **target**: [`Object3D`](Object3D.md)

事件目标。
一般为注册事件的对象本身。

#### Defined in

[src/engine/event/CEvent.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L14)

___

### currentTarget

• **currentTarget**: `CEventListener`

事件当前目标。
一般为注册事件的对象本身。

#### Defined in

[src/engine/event/CEvent.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L20)

___

### type

• **type**: `string`

引擎中的事件的类型标识字符串

#### Defined in

[src/engine/event/CEvent.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L26)

___

### data

• **data**: `any`

附加数据。
例如,保存QueueLoader加载后的原始数据,加载完毕后,作为参数传出。

#### Defined in

[src/engine/event/CEvent.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L33)

___

### param

• **param**: `any`

注册事件时传递的参数

#### Defined in

[src/engine/event/CEvent.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L39)

___

### time

• **time**: `number` = `0`

当前时间戳。

#### Defined in

[src/engine/event/CEvent.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L45)

___

### delay

• **delay**: `number` = `0`

每帧间隔延时。

#### Defined in

[src/engine/event/CEvent.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L51)

___

### mouseCode

• **mouseCode**: `number` = `0`

鼠标code值,枚举值可以参考MouseCode [MouseCode](../enums/MouseCode.md)

#### Defined in

[src/engine/event/CEvent.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L57)

___

### ctrlKey

• **ctrlKey**: `boolean`

事件发生时 Ctrl 是否被按下

#### Defined in

[src/engine/event/CEvent.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L62)

___

### altKey

• **altKey**: `boolean`

事件发生时 Alt 是否被按下

#### Defined in

[src/engine/event/CEvent.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L67)

___

### shiftKey

• **shiftKey**: `boolean`

事件发生时 Shift 是否被按下

#### Defined in

[src/engine/event/CEvent.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L72)

___

### targetTouches

• **targetTouches**: `TouchData`[]

手指触摸到绑定事件的节点上的触摸点的集合
touch列表 TouchData

#### Defined in

[src/engine/event/CEvent.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L78)

___

### changedTouches

• **changedTouches**: `TouchData`[]

触摸事件时改变触摸点的集合
touch列表 TouchData

#### Defined in

[src/engine/event/CEvent.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L84)

___

### touches

• **touches**: `TouchData`[]

手指触摸到屏幕上引起的当前所有触摸点的集合
touch列表 TouchData

#### Defined in

[src/engine/event/CEvent.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L90)

## Constructors

### constructor

• **new CEvent**(`eventType?`, `data?`)

创建一个作为参数传递给事件侦听器的 Event对象。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `eventType` | `string` | `null` | {any} 事件类型 |
| `data` | `any` | `null` | {any} 附加数据(可选) |

#### Defined in

[src/engine/event/CEvent.ts:100](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L100)

## Methods

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

防止对事件流中当前节点的后续节点中的所有事件侦听器进行处理。

#### Returns

`void`

#### Defined in

[src/engine/event/CEvent.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L108)

## Accessors

### isStopImmediatePropagation

• `get` **isStopImmediatePropagation**(): `boolean`

(只读)是否调用过 stopImmediatePropagation() 方法.

#### Returns

`boolean`

#### Defined in

[src/engine/event/CEvent.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L123)
