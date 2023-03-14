# Class: PointerEvent3D

PointerEvent 是所有引擎中可操作触摸事件节点 的事件类型标记。
[InputSystem](InputSystem.md)

## Hierarchy

- [`CEvent`](CEvent.md)

  ↳ **`PointerEvent3D`**


### Properties

- [target](PointerEvent3D.md#target)
- [currentTarget](PointerEvent3D.md#currenttarget)
- [type](PointerEvent3D.md#type)
- [data](PointerEvent3D.md#data)
- [param](PointerEvent3D.md#param)
- [time](PointerEvent3D.md#time)
- [delay](PointerEvent3D.md#delay)
- [mouseCode](PointerEvent3D.md#mousecode)
- [ctrlKey](PointerEvent3D.md#ctrlkey)
- [altKey](PointerEvent3D.md#altkey)
- [shiftKey](PointerEvent3D.md#shiftkey)
- [targetTouches](PointerEvent3D.md#targettouches)
- [changedTouches](PointerEvent3D.md#changedtouches)
- [touches](PointerEvent3D.md#touches)
- [PICK\_OVER](PointerEvent3D.md#pick_over)
- [PICK\_OVER\_GUI](PointerEvent3D.md#pick_over_gui)
- [PICK\_CLICK](PointerEvent3D.md#pick_click)
- [PICK\_CLICK\_GUI](PointerEvent3D.md#pick_click_gui)
- [PICK\_OUT](PointerEvent3D.md#pick_out)
- [PICK\_OUT\_GUI](PointerEvent3D.md#pick_out_gui)
- [PICK\_MOVE](PointerEvent3D.md#pick_move)
- [PICK\_UP](PointerEvent3D.md#pick_up)
- [PICK\_UP\_GUI](PointerEvent3D.md#pick_up_gui)
- [PICK\_DOWN](PointerEvent3D.md#pick_down)
- [PICK\_DOWN\_GUI](PointerEvent3D.md#pick_down_gui)
- [POINTER\_RIGHT\_CLICK](PointerEvent3D.md#pointer_right_click)
- [POINTER\_MID\_UP](PointerEvent3D.md#pointer_mid_up)
- [POINTER\_MID\_DOWN](PointerEvent3D.md#pointer_mid_down)
- [POINTER\_CLICK](PointerEvent3D.md#pointer_click)
- [POINTER\_MOVE](PointerEvent3D.md#pointer_move)
- [POINTER\_DOWN](PointerEvent3D.md#pointer_down)
- [POINTER\_UP](PointerEvent3D.md#pointer_up)
- [POINTER\_OUT](PointerEvent3D.md#pointer_out)
- [POINTER\_OVER](PointerEvent3D.md#pointer_over)
- [POINTER\_WHEEL](PointerEvent3D.md#pointer_wheel)
- [pointerId](PointerEvent3D.md#pointerid)
- [pointerType](PointerEvent3D.md#pointertype)
- [isPrimary](PointerEvent3D.md#isprimary)
- [pressure](PointerEvent3D.md#pressure)
- [mouseX](PointerEvent3D.md#mousex)
- [mouseY](PointerEvent3D.md#mousey)
- [movementX](PointerEvent3D.md#movementx)
- [movementY](PointerEvent3D.md#movementy)
- [deltaX](PointerEvent3D.md#deltax)
- [deltaY](PointerEvent3D.md#deltay)

### Constructors

- [constructor](PointerEvent3D.md#constructor)

### Methods

- [stopImmediatePropagation](PointerEvent3D.md#stopimmediatepropagation)

### Accessors

- [isStopImmediatePropagation](PointerEvent3D.md#isstopimmediatepropagation)

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

### PICK\_OVER

▪ `Static` **PICK\_OVER**: `string` = `'onPickOver'`

当触控点进入碰撞体范围时触发一次

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L13)

___

### PICK\_OVER\_GUI

▪ `Static` **PICK\_OVER\_GUI**: `string` = `'onPickOverGUI'`

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L14)

___

### PICK\_CLICK

▪ `Static` **PICK\_CLICK**: `string` = `'onPickClick'`

当触控点在碰撞体范围内按下并松开，在松开时触发一次

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L19)

___

### PICK\_CLICK\_GUI

▪ `Static` **PICK\_CLICK\_GUI**: `string` = `'onPickClickGUI'`

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L20)

___

### PICK\_OUT

▪ `Static` **PICK\_OUT**: `string` = `'onPickOut'`

当触控点离开碰撞体范围时触发一次

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L25)

___

### PICK\_OUT\_GUI

▪ `Static` **PICK\_OUT\_GUI**: `string` = `'onPickOutGUI'`

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L26)

___

### PICK\_MOVE

▪ `Static` **PICK\_MOVE**: `string` = `'onPickMove'`

当触控点在碰撞体范围内移动时触发

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L31)

___

### PICK\_UP

▪ `Static` **PICK\_UP**: `string` = `'onPickUp'`

当触控点在碰撞体范围内松开时触发一次

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L36)

___

### PICK\_UP\_GUI

▪ `Static` **PICK\_UP\_GUI**: `string` = `'onPickUpGUI'`

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L37)

___

### PICK\_DOWN

▪ `Static` **PICK\_DOWN**: `string` = `'onPickDown'`

当触控点在碰撞体范围内按下时触发一次

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L42)

___

### PICK\_DOWN\_GUI

▪ `Static` **PICK\_DOWN\_GUI**: `string` = `'onPickDownGUI'`

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L43)

___

### POINTER\_RIGHT\_CLICK

▪ `Static` **POINTER\_RIGHT\_CLICK**: `string` = `'onPointerRightClick'`

POINTER_RIGHT_CLICK 常量定义 鼠标右击事件标识。
事件响应状态 : 鼠标右击时触发。

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L50)

___

### POINTER\_MID\_UP

▪ `Static` **POINTER\_MID\_UP**: `string` = `'onPointerMidUp'`

POINTER_MID_UP 常量定义 鼠标中键松开事件标识。
事件响应状态 : 鼠标中键松开时触发。

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L56)

___

### POINTER\_MID\_DOWN

▪ `Static` **POINTER\_MID\_DOWN**: `string` = `'onPointerMidDown'`

POINTER_MID_DOWN 常量定义 鼠标中键按下事件标识。
事件响应状态 : 鼠标中键按下时触发。

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L62)

___

### POINTER\_CLICK

▪ `Static` **POINTER\_CLICK**: `string` = `'onPointerClick'`

POINTER_CLICK 常量定义 指针点击事件标识。      
事件响应状态 : 指针点击时触发。

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L67)

___

### POINTER\_MOVE

▪ `Static` **POINTER\_MOVE**: `string` = `'onPointerMove'`

POINTER_MOVE 常量定义 指针移动事件标识。     
事件响应状态 : 指针移动时触发。

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L74)

___

### POINTER\_DOWN

▪ `Static` **POINTER\_DOWN**: `string` = `'onPointerDown'`

POINTER_DOWN 常量定义 指针按下事件标识。
事件响应状态 : 指针按下开始触发。

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L81)

___

### POINTER\_UP

▪ `Static` **POINTER\_UP**: `string` = `'onPointerUp'`

POINTER_UP 常量定义 指针松开事件标识。
事件响应状态 : 指针松开时触发。

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L88)

___

### POINTER\_OUT

▪ `Static` **POINTER\_OUT**: `string` = `'onPointerOut'`

POINTER_OUT 常量定义 指针滑出事件标识。
事件响应状态 : 指针滑出触发。

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L95)

___

### POINTER\_OVER

▪ `Static` **POINTER\_OVER**: `string` = `'onPointerOver'`

POINTER_OVER 常量定义 指针滑入事件标识。
事件响应状态 : 指针滑入触发。

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:102](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L102)

___

### POINTER\_WHEEL

▪ `Static` **POINTER\_WHEEL**: `string` = `'onPointerWheel'`

POINTER_WHEEL 常量定义 滚动事件标识。
事件响应状态 : 滚动触发。

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L109)

___

### pointerId

• **pointerId**: `number`

对于某个由指针引起的事件的唯一标识。

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L114)

___

### pointerType

• **pointerType**: `string`

表明引发该事件的设备类型（鼠标/笔/触摸等）。

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L119)

___

### isPrimary

• **isPrimary**: `boolean`

表示该指针是否为该类型指针中的首选指针。

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L123)

___

### pressure

• **pressure**: `number`

规范化后的指针输入的压力值，取值范围为 0 到 1，0 代表硬件可检测到的压力最小值，1 代表最大值。

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L128)

___

### mouseX

• **mouseX**: `number`

当前x坐标

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L133)

___

### mouseY

• **mouseY**: `number`

当前y坐标

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:138](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L138)

___

### movementX

• **movementX**: `number`

当前事件和上一个鼠标事件之间鼠标在水平方向上的移动值。

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:143](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L143)

___

### movementY

• **movementY**: `number`

当前事件和上一个鼠标事件之间鼠标在垂直方向上的移动值。

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L148)

___

### deltaX

• **deltaX**: `number`

在向左滚动时返回负双值，向右滚动时返回正双值，否则为0。

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L153)

___

### deltaY

• **deltaY**: `number`

在向下滚动时返回正值，向上滚动时返回负值，否则为0。

#### Defined in

[src/engine/event/eventConst/PointerEvent3D.ts:158](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/eventConst/PointerEvent3D.ts#L158)

## Constructors

### constructor

• **new PointerEvent3D**(`eventType?`, `data?`)

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
