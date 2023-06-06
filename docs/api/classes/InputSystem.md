# Class: InputSystem

Processing input devices, such as mouse, keyboard, and touch.
If the current event does not occur within the View3D, it will not be dispatched

## Hierarchy

- [`CEventDispatcher`](CEventDispatcher.md)

  ↳ **`InputSystem`**

### Constructors

- [constructor](InputSystem.md#constructor)

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

## Constructors

### constructor

• **new InputSystem**()

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[constructor](CEventDispatcher.md#constructor)

## Properties

### canvasX

• **canvasX**: `number` = `0`

coord x of canvas

#### Defined in

[src/io/InputSystem.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/io/InputSystem.ts#L22)

___

### canvasY

• **canvasY**: `number` = `0`

coord y of canvas

#### Defined in

[src/io/InputSystem.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/io/InputSystem.ts#L26)

___

### isMouseDown

• **isMouseDown**: `boolean` = `false`

whether the mouse is down now

#### Defined in

[src/io/InputSystem.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/io/InputSystem.ts#L31)

___

### isRightMouseDown

• **isRightMouseDown**: `boolean` = `false`

whether the mouse right key is down now

#### Defined in

[src/io/InputSystem.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/io/InputSystem.ts#L36)

___

### canvas

• **canvas**: `HTMLCanvasElement`

reference of canvas

#### Defined in

[src/io/InputSystem.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/io/InputSystem.ts#L41)

___

### mouseX

• **mouseX**: `number` = `0`

current mouse coordinate x of Canvas

#### Defined in

[src/io/InputSystem.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/io/InputSystem.ts#L46)

___

### mouseY

• **mouseY**: `number` = `0`

current mouse coordinate y of Canvas

#### Defined in

[src/io/InputSystem.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/io/InputSystem.ts#L51)

___

### wheelDelta

• **wheelDelta**: `number` = `0`

the delta value when mouse wheeled

#### Defined in

[src/io/InputSystem.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/io/InputSystem.ts#L56)

___

### mouseOffsetX

• **mouseOffsetX**: `number` = `0`

the delta value of mouse x

#### Defined in

[src/io/InputSystem.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/io/InputSystem.ts#L61)

___

### mouseOffsetY

• **mouseOffsetY**: `number` = `0`

the delta value of mouse y

#### Defined in

[src/io/InputSystem.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/io/InputSystem.ts#L66)

___

### mouseLastX

• **mouseLastX**: `number` = `0`

the history value of mouse x

#### Defined in

[src/io/InputSystem.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/io/InputSystem.ts#L71)

___

### mouseLastY

• **mouseLastY**: `number` = `0`

the history value of mouse y

#### Defined in

[src/io/InputSystem.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/io/InputSystem.ts#L78)

## Methods

### dispatchEvent

▸ **dispatchEvent**(`event`): `void`

Dispatch an event to all registered objects with a specific type of listener.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`CEvent`](CEvent.md) |

#### Returns

`void`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[dispatchEvent](CEventDispatcher.md#dispatchevent)

#### Defined in

[src/event/CEventDispatcher.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L24)

___

### dispose

▸ **dispose**(): `void`

release all registered event.

#### Returns

`void`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[dispose](CEventDispatcher.md#dispose)

#### Defined in

[src/event/CEventDispatcher.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L55)

___

### addEventListener

▸ **addEventListener**(`type`, `callback`, `thisObject`, `param?`, `priority?`): `number`

register an event listener to event distancher.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | `string` \| `number` | `undefined` | {string} event type. |
| `callback` | `Function` | `undefined` | {Function} The callback function that handles events. This function must accept an Event3D object as its unique parameter and cannot return any result. for example: function(evt:Event3D):void. |
| `thisObject` | `any` | `undefined` | {any} Current registration object, it'll call callback function. |
| `param` | `any` | `null` | {any} the data binded to registered event, the default value is null. |
| `priority` | `number` | `0` | {number} The priority of callback function execution, with a larger set value having priority to call |

#### Returns

`number`

Returns register event id

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[addEventListener](CEventDispatcher.md#addeventlistener)

#### Defined in

[src/event/CEventDispatcher.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L79)

___

### removeEventListener

▸ **removeEventListener**(`type`, `callback`, `thisObject`): `void`

Remove Event Listening

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` \| `number` | {string} event type |
| `callback` | `Function` | {Function} callback function of event register |
| `thisObject` | `any` | {any} The current registered object. |

#### Returns

`void`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[removeEventListener](CEventDispatcher.md#removeeventlistener)

#### Defined in

[src/event/CEventDispatcher.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L113)

___

### removeEventListenerAt

▸ **removeEventListenerAt**(`id`): `boolean`

Remove an event Listening with id

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`boolean`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[removeEventListenerAt](CEventDispatcher.md#removeeventlistenerat)

#### Defined in

[src/event/CEventDispatcher.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L133)

___

### removeAllEventListener

▸ **removeAllEventListener**(`eventType?`): `void`

Specify a event type to remove all related event listeners
eventType event type, set null to remove all event listeners

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `eventType` | `string` \| `number` | `null` |

#### Returns

`void`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[removeAllEventListener](CEventDispatcher.md#removealleventlistener)

#### Defined in

[src/event/CEventDispatcher.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L153)

___

### containEventListener

▸ **containEventListener**(`type`): `boolean`

whether the target presence of a listener with event type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | {string} event type. |

#### Returns

`boolean`

Returns a boolean.

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[containEventListener](CEventDispatcher.md#containeventlistener)

#### Defined in

[src/event/CEventDispatcher.ts:185](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L185)

___

### hasEventListener

▸ **hasEventListener**(`type`, `callback?`, `thisObject?`): `boolean`

whether the target presence of a listener with event type. it associate more registration parameters.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | `string` \| `number` | `undefined` | {string} event name. |
| `callback` | `Function` | `null` | {Function} callback function of event register. |
| `thisObject` | `any` | `null` | {any} The registered object. |

#### Returns

`boolean`

Returns a boolean.

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[hasEventListener](CEventDispatcher.md#haseventlistener)

#### Defined in

[src/event/CEventDispatcher.ts:198](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L198)

___

### initCanvas

▸ **initCanvas**(`canvas`): `void`

init the input system

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvas` | `HTMLCanvasElement` | the reference of canvas |

#### Returns

`void`

#### Defined in

[src/io/InputSystem.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/io/InputSystem.ts#L95)

___

### GetSlideDirection

▸ **GetSlideDirection**(`startX`, `startY`, `endX`, `endY`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startX` | `number` | {Number} |
| `startY` | `number` | {Number} |
| `endX` | `number` | {Number} |
| `endY` | `number` | {Number} |

#### Returns

`number`

result {number} 1: up, 2: down, 3: left, 4: right, 0: not move

#### Defined in

[src/io/InputSystem.ts:452](https://github.com/Orillusion/orillusion/blob/main/src/io/InputSystem.ts#L452)
