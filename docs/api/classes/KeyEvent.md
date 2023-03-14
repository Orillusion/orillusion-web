# Class: KeyEvent

KeyEvent3D 按键事件。[InputSystem](InputSystem.md)

## Hierarchy

- [`CEvent`](CEvent.md)

  ↳ **`KeyEvent`**


### Properties

- [target](KeyEvent.md#target)
- [currentTarget](KeyEvent.md#currenttarget)
- [type](KeyEvent.md#type)
- [data](KeyEvent.md#data)
- [param](KeyEvent.md#param)
- [time](KeyEvent.md#time)
- [delay](KeyEvent.md#delay)
- [mouseCode](KeyEvent.md#mousecode)
- [ctrlKey](KeyEvent.md#ctrlkey)
- [altKey](KeyEvent.md#altkey)
- [shiftKey](KeyEvent.md#shiftkey)
- [targetTouches](KeyEvent.md#targettouches)
- [changedTouches](KeyEvent.md#changedtouches)
- [touches](KeyEvent.md#touches)
- [KEY\_DOWN](KeyEvent.md#key_down)
- [KEY\_UP](KeyEvent.md#key_up)
- [keyCode](KeyEvent.md#keycode)

### Constructors

- [constructor](KeyEvent.md#constructor)

### Methods

- [stopImmediatePropagation](KeyEvent.md#stopimmediatepropagation)

### Accessors

- [isStopImmediatePropagation](KeyEvent.md#isstopimmediatepropagation)

## Properties

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

___

### KEY\_DOWN

▪ `Static` **KEY\_DOWN**: `string` = `'onKeyDown'`

KEY_DOWN 常量定义  按键按下事件标识。
可注册对象 : Input类型。
事件响应状态 : 按键每次按下时响应。
响应事件参数 : KeyEvent3D类型,其中KeyEvent3D.keyCode的内容即为Key的值。

**`Default`**

"onKeyDown"

**`Platform`**

Web,Native

#### Defined in

[src/engine/event/eventConst/KeyEvent.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/KeyEvent.ts#L29)

___

### KEY\_UP

▪ `Static` **KEY\_UP**: `string` = `'onKeyUp'`

KEY_UP 常量定义 按键回弹事件标识。
可注册对象 : Input类型。
事件响应状态 : 按键每次回弹时响应。
响应事件参数 : KeyEvent3D类型,其中KeyEvent3D.keyCode的内容即为Key的值。

**`Default`**

"onKeyUp"

**`Platform`**

Web,Native

#### Defined in

[src/engine/event/eventConst/KeyEvent.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/KeyEvent.ts#L40)

___

### keyCode

• **keyCode**: `number` = `0`

按键code值,枚举类型可以参考KeyCode [KeyCode](../enums/KeyCode.md)

**`Default`**

0

**`Platform`**

Web,Native

#### Defined in

[src/engine/event/eventConst/KeyEvent.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/KeyEvent.ts#L48)

## Constructors

### constructor

• **new KeyEvent**(`eventType?`, `data?`)

创建一个作为参数传递给事件侦听器的 Event对象。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `eventType` | `string` | `null` | {any} 事件类型 |
| `data` | `any` | `null` | {any} 附加数据(可选) |

#### Inherited from

[CEvent](CEvent.md).[constructor](CEvent.md#constructor)

#### Defined in

[src/engine/event/CEvent.ts:100](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEvent.ts#L100)

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
