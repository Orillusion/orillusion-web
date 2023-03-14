# Class: InputSystem

处理输入设备,鼠标.键盘.触摸。
当点事件产生时如果没有点击到任何的View3D内，
当前事件将不用派发.

## Hierarchy

- [`CEventDispatcher`](CEventDispatcher.md)

  ↳ **`InputSystem`**


### Constructors

- [constructor](InputSystem.md#constructor)

### Methods

- [dispatchEvent](InputSystem.md#dispatchevent)
- [dispose](InputSystem.md#dispose)
- [addEventListener](InputSystem.md#addeventlistener)
- [removeEventListener](InputSystem.md#removeeventlistener)
- [removeEventListenerAt](InputSystem.md#removeeventlistenerat)
- [removeAllEventListener](InputSystem.md#removealleventlistener)
- [containEventListener](InputSystem.md#containeventlistener)
- [hasEventListener](InputSystem.md#haseventlistener)
- [initCanvas](InputSystem.md#initcanvas)
- [GetSlideDirection](InputSystem.md#getslidedirection)

### Properties

- [canvasX](InputSystem.md#canvasx)
- [canvasY](InputSystem.md#canvasy)
- [isMouseDown](InputSystem.md#ismousedown)
- [isRightMouseDown](InputSystem.md#isrightmousedown)
- [canvas](InputSystem.md#canvas)
- [mouseX](InputSystem.md#mousex)
- [mouseY](InputSystem.md#mousey)
- [wheelDelta](InputSystem.md#wheeldelta)
- [mouseOffsetX](InputSystem.md#mouseoffsetx)
- [mouseOffsetY](InputSystem.md#mouseoffsety)
- [mouseLastX](InputSystem.md#mouselastx)
- [mouseLastY](InputSystem.md#mouselasty)

## Constructors

### constructor

• **new InputSystem**()

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[constructor](CEventDispatcher.md#constructor)

## Methods

### dispatchEvent

▸ **dispatchEvent**(`event`): `void`

派发一个 Event3D 事件到所有注册了特定类型侦听器的对象中。

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`CEvent`](CEvent.md) |

#### Returns

`void`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[dispatchEvent](CEventDispatcher.md#dispatchevent)

#### Defined in

[src/engine/event/CEventDispatcher.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEventDispatcher.ts#L22)

___

### dispose

▸ **dispose**(): `void`

释放所有数据。

#### Returns

`void`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[dispose](CEventDispatcher.md#dispose)

#### Defined in

[src/engine/event/CEventDispatcher.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEventDispatcher.ts#L53)

___

### addEventListener

▸ **addEventListener**(`type`, `callback`, `thisObject`, `param?`, `priority?`): `number`

使用 EventDispatcher 对象注册事件侦听器对象，以使侦听器能够接收事件通知。可以为特定类型的事件和优先级注册事件侦听器。成功注册一个事件侦听器后，无法通过额外调用 addCEventListener() 来更改其优先级。要更改侦听器的优先级，必须首先调用 removeCEventListener()。然后，可以使用新的优先级再次注册该侦听器。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | `string` \| `number` | `undefined` | {string} 事件的类型标识符。 |
| `callback` | `Function` | `undefined` | {Function} 处理事件的侦听器函数。此函数必须接受 Event3D 对象作为其唯一的参数，并且不能返回任何结果， 如下面的示例所示： function(evt:Event3D):void 函数可以有任何名称。 |
| `thisObject` | `any` | `undefined` | {any} 当前注册对象。 |
| `param` | `any` | `null` | {any} 事件携带参数，默认为空。 |
| `priority` | `number` | `0` | {number} 事件侦听器的优先级。优先级由一个带符号的 32 位整数指定。数字越大，优先级越高。优先级为 n 的所有侦听器会在 优先级为 n -1 的侦听器之前得到处理。如果两个或更多个侦听器共享相同的优先级，则按照它们的添加顺序进行处理。默认优先级为 0。 |

#### Returns

`number`

注册事件位置标识id

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[addEventListener](CEventDispatcher.md#addeventlistener)

#### Defined in

[src/engine/event/CEventDispatcher.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEventDispatcher.ts#L77)

___

### removeEventListener

▸ **removeEventListener**(`type`, `callback`, `thisObject`): `void`

移除事件侦听器。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` \| `number` | {string} 事件名。 |
| `callback` | `Function` | {Function} 侦听函数。 |
| `thisObject` | `any` | {any} 当前注册对象。 |

#### Returns

`void`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[removeEventListener](CEventDispatcher.md#removeeventlistener)

#### Defined in

[src/engine/event/CEventDispatcher.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEventDispatcher.ts#L111)

___

### removeEventListenerAt

▸ **removeEventListenerAt**(`id`): `void`

移除事件侦听器。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | 事件id,调用addCEventListener的返回值即为事件id. |

#### Returns

`void`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[removeEventListenerAt](CEventDispatcher.md#removeeventlistenerat)

#### Defined in

[src/engine/event/CEventDispatcher.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEventDispatcher.ts#L130)

___

### removeAllEventListener

▸ **removeAllEventListener**(`eventType?`): `void`

移除指定类型的事件侦听器。
eventType 不指定类型 则移除所有的事件

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `eventType` | `string` \| `number` | `null` |

#### Returns

`void`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[removeAllEventListener](CEventDispatcher.md#removealleventlistener)

#### Defined in

[src/engine/event/CEventDispatcher.ts:149](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEventDispatcher.ts#L149)

___

### containEventListener

▸ **containEventListener**(`type`): `boolean`

检测是否存在监听器。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | {string} 事件类型标识符 |

#### Returns

`boolean`

是否存在该类型监视器，true为存在，反之不存在。

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[containEventListener](CEventDispatcher.md#containeventlistener)

#### Defined in

[src/engine/event/CEventDispatcher.ts:181](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEventDispatcher.ts#L181)

___

### hasEventListener

▸ **hasEventListener**(`type`, `callback?`, `thisObject?`): `boolean`

检测是否存在监听器。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | `string` \| `number` | `undefined` | {string} 事件名 |
| `callback` | `Function` | `null` | {Function} 处理事件的侦听器函数 |
| `thisObject` | `any` | `null` | {any} 注册对象。 |

#### Returns

`boolean`

是否存在该事件，true为存在，反之不存在。

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[hasEventListener](CEventDispatcher.md#haseventlistener)

#### Defined in

[src/engine/event/CEventDispatcher.ts:194](https://github.com/Orillusion/orillusion/blob/main/src/engine/event/CEventDispatcher.ts#L194)

___

### initCanvas

▸ **initCanvas**(`canvas`): `void`

初始化输入系统

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvas` | `HTMLCanvasElement` | Canvas实例 |

#### Returns

`void`

#### Defined in

[src/engine/io/InputSystem.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/engine/io/InputSystem.ts#L124)

___

### GetSlideDirection

▸ **GetSlideDirection**(`startX`, `startY`, `endX`, `endY`): `number`

根据起点和终点返回方向

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startX` | `number` | {Number} 起点X坐标 |
| `startY` | `number` | {Number} 起点Y坐标 |
| `endX` | `number` | {Number} 终点X坐标 |
| `endY` | `number` | {Number} 终点Y坐标 |

#### Returns

`number`

result {number} 1：向上，2：向下，3：向左，4：向右,0：未滑动

#### Defined in

[src/engine/io/InputSystem.ts:658](https://github.com/Orillusion/orillusion/blob/main/src/engine/io/InputSystem.ts#L658)

## Properties

### canvasX

• **canvasX**: `number` = `0`

画布的x坐标

#### Defined in

[src/engine/io/InputSystem.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/engine/io/InputSystem.ts#L23)

___

### canvasY

• **canvasY**: `number` = `0`

画布的y坐标

#### Defined in

[src/engine/io/InputSystem.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/engine/io/InputSystem.ts#L27)

___

### isMouseDown

• **isMouseDown**: `boolean` = `false`

鼠标左键点击标识，是否按下

#### Defined in

[src/engine/io/InputSystem.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/engine/io/InputSystem.ts#L32)

___

### isRightMouseDown

• **isRightMouseDown**: `boolean` = `false`

鼠标右键点击标识，是否按下

#### Defined in

[src/engine/io/InputSystem.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/engine/io/InputSystem.ts#L37)

___

### canvas

• **canvas**: `HTMLCanvasElement`

对应的 Canvas 对象

#### Defined in

[src/engine/io/InputSystem.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/engine/io/InputSystem.ts#L42)

___

### mouseX

• **mouseX**: `number` = `0`

当前鼠标X坐标。
基于 Canvas 的x坐标

#### Defined in

[src/engine/io/InputSystem.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/engine/io/InputSystem.ts#L49)

___

### mouseY

• **mouseY**: `number` = `0`

当前鼠标Y坐标。
基于Canvas 的y坐标

#### Defined in

[src/engine/io/InputSystem.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/engine/io/InputSystem.ts#L56)

___

### wheelDelta

• **wheelDelta**: `number` = `0`

鼠标滚轮增量值。

#### Defined in

[src/engine/io/InputSystem.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/engine/io/InputSystem.ts#L62)

___

### mouseOffsetX

• **mouseOffsetX**: `number` = `0`

鼠标X坐标的偏移值。

#### Defined in

[src/engine/io/InputSystem.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/engine/io/InputSystem.ts#L69)

___

### mouseOffsetY

• **mouseOffsetY**: `number` = `0`

鼠标Y坐标的偏移值。

#### Defined in

[src/engine/io/InputSystem.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/engine/io/InputSystem.ts#L76)

___

### mouseLastX

• **mouseLastX**: `number` = `0`

上一次鼠标X坐标。

#### Defined in

[src/engine/io/InputSystem.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/engine/io/InputSystem.ts#L83)

___

### mouseLastY

• **mouseLastY**: `number` = `0`

上一次鼠标Y坐标。

#### Defined in

[src/engine/io/InputSystem.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/engine/io/InputSystem.ts#L90)
