[**@orillusion/core**](../README.md)

***

# Class: InputSystem

Defined in: [src/io/InputSystem.ts:18](https://github.com/orillusion/orillusion/blob/main/src/io/InputSystem.ts#L18)

Processing input devices, such as mouse, keyboard, and touch.
If the current event does not occur within the View3D, it will not be dispatched

## Extends

- [`CEventDispatcher`](CEventDispatcher.md)

## Constructors

### Constructor

> **new InputSystem**(): `InputSystem`

#### Returns

`InputSystem`

#### Inherited from

[`CEventDispatcher`](CEventDispatcher.md).[`constructor`](CEventDispatcher.md#constructor)

## Properties

### canvasX

> **canvasX**: `number` = `0`

Defined in: [src/io/InputSystem.ts:22](https://github.com/orillusion/orillusion/blob/main/src/io/InputSystem.ts#L22)

coord x of canvas

***

### canvasY

> **canvasY**: `number` = `0`

Defined in: [src/io/InputSystem.ts:26](https://github.com/orillusion/orillusion/blob/main/src/io/InputSystem.ts#L26)

coord y of canvas

***

### isMouseDown

> **isMouseDown**: `boolean` = `false`

Defined in: [src/io/InputSystem.ts:31](https://github.com/orillusion/orillusion/blob/main/src/io/InputSystem.ts#L31)

whether the mouse is down now

***

### canvas

> **canvas**: `HTMLCanvasElement`

Defined in: [src/io/InputSystem.ts:36](https://github.com/orillusion/orillusion/blob/main/src/io/InputSystem.ts#L36)

reference of canvas

***

### mouseX

> **mouseX**: `number` = `0`

Defined in: [src/io/InputSystem.ts:41](https://github.com/orillusion/orillusion/blob/main/src/io/InputSystem.ts#L41)

current mouse coordinate x of Canvas

***

### mouseY

> **mouseY**: `number` = `0`

Defined in: [src/io/InputSystem.ts:46](https://github.com/orillusion/orillusion/blob/main/src/io/InputSystem.ts#L46)

current mouse coordinate y of Canvas

***

### wheelDelta

> **wheelDelta**: `number` = `0`

Defined in: [src/io/InputSystem.ts:51](https://github.com/orillusion/orillusion/blob/main/src/io/InputSystem.ts#L51)

the delta value when mouse wheeled

***

### mouseOffsetX

> **mouseOffsetX**: `number` = `0`

Defined in: [src/io/InputSystem.ts:56](https://github.com/orillusion/orillusion/blob/main/src/io/InputSystem.ts#L56)

the delta value of mouse x

***

### mouseOffsetY

> **mouseOffsetY**: `number` = `0`

Defined in: [src/io/InputSystem.ts:61](https://github.com/orillusion/orillusion/blob/main/src/io/InputSystem.ts#L61)

the delta value of mouse y

***

### mouseLastX

> **mouseLastX**: `number` = `0`

Defined in: [src/io/InputSystem.ts:66](https://github.com/orillusion/orillusion/blob/main/src/io/InputSystem.ts#L66)

the history value of mouse x

***

### mouseLastY

> **mouseLastY**: `number` = `0`

Defined in: [src/io/InputSystem.ts:73](https://github.com/orillusion/orillusion/blob/main/src/io/InputSystem.ts#L73)

the history value of mouse y

***

### mouseLock

> **mouseLock**: `boolean` = `false`

Defined in: [src/io/InputSystem.ts:84](https://github.com/orillusion/orillusion/blob/main/src/io/InputSystem.ts#L84)

Whether pointer lock is currently active.

## Methods

### dispatchEvent()

> **dispatchEvent**(`event`): `void`

Defined in: [src/event/CEventDispatcher.ts:24](https://github.com/orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L24)

Dispatch an event to all registered objects with a specific type of listener.

#### Parameters

##### event

[`CEvent`](CEvent.md)

#### Returns

`void`

#### Inherited from

[`CEventDispatcher`](CEventDispatcher.md).[`dispatchEvent`](CEventDispatcher.md#dispatchevent)

***

### destroy()

> **destroy**(): `void`

Defined in: [src/event/CEventDispatcher.ts:54](https://github.com/orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L54)

release all registered event.

#### Returns

`void`

#### Inherited from

[`CEventDispatcher`](CEventDispatcher.md).[`destroy`](CEventDispatcher.md#destroy)

***

### addEventListener()

> **addEventListener**(`type`, `callback`, `thisObject`, `param?`, `priority?`): `number`

Defined in: [src/event/CEventDispatcher.ts:78](https://github.com/orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L78)

register an event listener to event distancher.

#### Parameters

##### type

`string` \| `number`

{string} event type.

##### callback

`Function`

{Function} The callback function that handles events. 
This function must accept an Event3D object as its unique parameter and cannot return any result.
for example: function(evt:Event3D):void.

##### thisObject

`any`

{any} Current registration object, it'll call callback function.

##### param?

`any` = `null`

{any} the data binded to registered event, the default value is null.

##### priority?

`number` = `0`

{number} The priority of callback function execution, with a larger set value having priority to call

#### Returns

`number`

Returns register event id

#### Inherited from

[`CEventDispatcher`](CEventDispatcher.md).[`addEventListener`](CEventDispatcher.md#addeventlistener)

***

### removeEventListener()

> **removeEventListener**(`type`, `callback`, `thisObject`): `void`

Defined in: [src/event/CEventDispatcher.ts:112](https://github.com/orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L112)

Remove Event Listening

#### Parameters

##### type

`string` \| `number`

{string} event type

##### callback

`Function`

{Function} callback function of event register

##### thisObject

`any`

{any} The current registered object.

#### Returns

`void`

#### Inherited from

[`CEventDispatcher`](CEventDispatcher.md).[`removeEventListener`](CEventDispatcher.md#removeeventlistener)

***

### removeEventListenerAt()

> **removeEventListenerAt**(`id`): `boolean`

Defined in: [src/event/CEventDispatcher.ts:132](https://github.com/orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L132)

Remove an event Listening with id

#### Parameters

##### id

`number`

#### Returns

`boolean`

#### Inherited from

[`CEventDispatcher`](CEventDispatcher.md).[`removeEventListenerAt`](CEventDispatcher.md#removeeventlistenerat)

***

### removeAllEventListener()

> **removeAllEventListener**(`eventType?`): `void`

Defined in: [src/event/CEventDispatcher.ts:152](https://github.com/orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L152)

Specify a event type to remove all related event listeners
eventType event type, set null to remove all event listeners

#### Parameters

##### eventType?

`string` \| `number`

#### Returns

`void`

#### Inherited from

[`CEventDispatcher`](CEventDispatcher.md).[`removeAllEventListener`](CEventDispatcher.md#removealleventlistener)

***

### containEventListener()

> **containEventListener**(`type`): `boolean`

Defined in: [src/event/CEventDispatcher.ts:184](https://github.com/orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L184)

whether the target presence of a listener with event type.

#### Parameters

##### type

`string`

{string} event type.

#### Returns

`boolean`

Returns a boolean.

#### Inherited from

[`CEventDispatcher`](CEventDispatcher.md).[`containEventListener`](CEventDispatcher.md#containeventlistener)

***

### hasEventListener()

> **hasEventListener**(`type`, `callback?`, `thisObject?`): `boolean`

Defined in: [src/event/CEventDispatcher.ts:197](https://github.com/orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L197)

whether the target presence of a listener with event type. it associate more registration parameters.

#### Parameters

##### type

`string` \| `number`

{string} event name.

##### callback?

`Function` = `null`

{Function} callback function of event register.

##### thisObject?

`any` = `null`

{any} The registered object.

#### Returns

`boolean`

Returns a boolean.

#### Inherited from

[`CEventDispatcher`](CEventDispatcher.md).[`hasEventListener`](CEventDispatcher.md#haseventlistener)

***

### initCanvas()

> **initCanvas**(`canvas`): `void`

Defined in: [src/io/InputSystem.ts:95](https://github.com/orillusion/orillusion/blob/main/src/io/InputSystem.ts#L95)

init the input system

#### Parameters

##### canvas

`HTMLCanvasElement`

the reference of canvas

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [src/io/InputSystem.ts:164](https://github.com/orillusion/orillusion/blob/main/src/io/InputSystem.ts#L164)

Detach every listener this InputSystem installed (window keyboard
listeners + canvas pointer/wheel handlers). Idempotent. Called by
`Engine3D.dispose()` — without it, every disposed engine leaks a
pair of window-level keydown/keyup listeners that still reference
the engine's scene graph.

#### Returns

`void`

***

### useMouseLock()

> **useMouseLock**(): `void`

Defined in: [src/io/InputSystem.ts:191](https://github.com/orillusion/orillusion/blob/main/src/io/InputSystem.ts#L191)

Request pointer lock on the canvas and start tracking locked mouse movement.

#### Returns

`void`

***

### releaseMouseLock()

> **releaseMouseLock**(): `void`

Defined in: [src/io/InputSystem.ts:204](https://github.com/orillusion/orillusion/blob/main/src/io/InputSystem.ts#L204)

Exit pointer lock and stop tracking locked mouse movement.

#### Returns

`void`

***

### onMouseLockMove()

> **onMouseLockMove**(`e`): `void`

Defined in: [src/io/InputSystem.ts:213](https://github.com/orillusion/orillusion/blob/main/src/io/InputSystem.ts#L213)

#### Parameters

##### e

`MouseEvent`

#### Returns

`void`

***

### GetSlideDirection()

> **GetSlideDirection**(`startX`, `startY`, `endX`, `endY`): `number`

Defined in: [src/io/InputSystem.ts:481](https://github.com/orillusion/orillusion/blob/main/src/io/InputSystem.ts#L481)

#### Parameters

##### startX

`number`

{Number}

##### startY

`number`

{Number}

##### endX

`number`

{Number}

##### endY

`number`

{Number}

#### Returns

`number`

result {number} 1: up, 2: down, 3: left, 4: right, 0: not move
