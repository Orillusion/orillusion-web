[**@orillusion/core**](../README.md)

***

# Class: PointerEvent3D

Defined in: [src/event/eventConst/PointerEvent3D.ts:18](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L18)

enum event type of pointer.
[InputSystem](InputSystem.md)

## Extends

- [`CEvent`](CEvent.md)

## Constructors

### Constructor

> **new PointerEvent3D**(`eventType?`, `data?`): `PointerEvent3D`

Defined in: [src/event/CEvent.ts:102](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L102)

Create a new event, with type and data

#### Parameters

##### eventType?

`string` = `null`

{any} eventType

##### data?

`any` = `null`

{any} param

#### Returns

`PointerEvent3D`

#### Inherited from

[`CEvent`](CEvent.md).[`constructor`](CEvent.md#constructor)

## Properties

### target

> **target**: [`Object3D`](Object3D.md)

Defined in: [src/event/CEvent.ts:13](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L13)

Event target, it's usually event dispatcher

#### Inherited from

[`CEvent`](CEvent.md).[`target`](CEvent.md#target)

***

### currentTarget

> **currentTarget**: `CEventListener`

Defined in: [src/event/CEvent.ts:18](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L18)

Current event target, it's current bubble object

#### Inherited from

[`CEvent`](CEvent.md).[`currentTarget`](CEvent.md#currenttarget)

***

### type

> **type**: `string`

Defined in: [src/event/CEvent.ts:23](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L23)

event type, it's registered string of key

#### Inherited from

[`CEvent`](CEvent.md).[`type`](CEvent.md#type)

***

### param

> **param**: `any`

Defined in: [src/event/CEvent.ts:34](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L34)

The param data when event is registered

#### Inherited from

[`CEvent`](CEvent.md).[`param`](CEvent.md#param)

***

### time

> **time**: `number` = `0`

Defined in: [src/event/CEvent.ts:40](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L40)

the time when event is

#### Inherited from

[`CEvent`](CEvent.md).[`time`](CEvent.md#time)

***

### delay

> **delay**: `number` = `0`

Defined in: [src/event/CEvent.ts:46](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L46)

the delay time when event is dispatched.

#### Inherited from

[`CEvent`](CEvent.md).[`delay`](CEvent.md#delay)

***

### mouseCode

> **mouseCode**: `number` = `0`

Defined in: [src/event/CEvent.ts:52](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L52)

mouse code, see

#### Mouse Code

[MouseCode](../enumerations/MouseCode.md)

#### Inherited from

[`CEvent`](CEvent.md).[`mouseCode`](CEvent.md#mousecode)

***

### ctrlKey

> **ctrlKey**: `boolean`

Defined in: [src/event/CEvent.ts:57](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L57)

Is Ctrl key pressed when the event occurs

#### Inherited from

[`CEvent`](CEvent.md).[`ctrlKey`](CEvent.md#ctrlkey)

***

### metaKey

> **metaKey**: `boolean`

Defined in: [src/event/CEvent.ts:62](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L62)

Is Meta key pressed when the event occurs

#### Inherited from

[`CEvent`](CEvent.md).[`metaKey`](CEvent.md#metakey)

***

### altKey

> **altKey**: `boolean`

Defined in: [src/event/CEvent.ts:67](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L67)

Is Alt key pressed when the event occurs

#### Inherited from

[`CEvent`](CEvent.md).[`altKey`](CEvent.md#altkey)

***

### shiftKey

> **shiftKey**: `boolean`

Defined in: [src/event/CEvent.ts:72](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L72)

Is Shift key pressed when the event occurs

#### Inherited from

[`CEvent`](CEvent.md).[`shiftKey`](CEvent.md#shiftkey)

***

### targetTouches

> **targetTouches**: `TouchData`[]

Defined in: [src/event/CEvent.ts:77](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L77)

Collection of finger touch points, which registered

#### Inherited from

[`CEvent`](CEvent.md).[`targetTouches`](CEvent.md#targettouches)

***

### changedTouches

> **changedTouches**: `TouchData`[]

Defined in: [src/event/CEvent.ts:82](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L82)

Collection of finger touch points changed

#### Inherited from

[`CEvent`](CEvent.md).[`changedTouches`](CEvent.md#changedtouches)

***

### touches

> **touches**: `TouchData`[]

Defined in: [src/event/CEvent.ts:87](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L87)

Collection of finger touch points

#### Inherited from

[`CEvent`](CEvent.md).[`touches`](CEvent.md#touches)

***

### view

> **view**: [`View3D`](View3D.md)

Defined in: [src/event/CEvent.ts:94](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L94)

binded view3D object in event.

#### Inherited from

[`CEvent`](CEvent.md).[`view`](CEvent.md#view)

***

### PICK\_OVER

> `static` **PICK\_OVER**: `string` = `'onPickOver'`

Defined in: [src/event/eventConst/PointerEvent3D.ts:22](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L22)

Triggered when the touch point enters the collision

***

### PICK\_CLICK

> `static` **PICK\_CLICK**: `string` = `'onPickClick'`

Defined in: [src/event/eventConst/PointerEvent3D.ts:27](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L27)

Triggered when the touch point clicked the collision

***

### PICK\_OUT

> `static` **PICK\_OUT**: `string` = `'onPickOut'`

Defined in: [src/event/eventConst/PointerEvent3D.ts:32](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L32)

Triggered when the touch point leave the collision

***

### PICK\_MOVE

> `static` **PICK\_MOVE**: `string` = `'onPickMove'`

Defined in: [src/event/eventConst/PointerEvent3D.ts:37](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L37)

Triggered when the touch point move on the collision

***

### PICK\_UP

> `static` **PICK\_UP**: `string` = `'onPickUp'`

Defined in: [src/event/eventConst/PointerEvent3D.ts:42](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L42)

Triggered when the touch point release from the collision

***

### PICK\_DOWN

> `static` **PICK\_DOWN**: `string` = `'onPickDown'`

Defined in: [src/event/eventConst/PointerEvent3D.ts:47](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L47)

Triggered when the touch point pressed the collision

***

### POINTER\_RIGHT\_CLICK

> `static` **POINTER\_RIGHT\_CLICK**: `string` = `'onPointerRightClick'`

Defined in: [src/event/eventConst/PointerEvent3D.ts:53](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L53)

Triggered when the right pointer clicked

***

### POINTER\_CLICK

> `static` **POINTER\_CLICK**: `string` = `'onPointerClick'`

Defined in: [src/event/eventConst/PointerEvent3D.ts:58](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L58)

Triggered when the pointer clicked

***

### POINTER\_MOVE

> `static` **POINTER\_MOVE**: `string` = `'onPointerMove'`

Defined in: [src/event/eventConst/PointerEvent3D.ts:64](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L64)

Triggered when the pointer moved

***

### POINTER\_DOWN

> `static` **POINTER\_DOWN**: `string` = `'onPointerDown'`

Defined in: [src/event/eventConst/PointerEvent3D.ts:70](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L70)

Triggered when the pointer pressed

***

### POINTER\_UP

> `static` **POINTER\_UP**: `string` = `'onPointerUp'`

Defined in: [src/event/eventConst/PointerEvent3D.ts:76](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L76)

Triggered when the pointer released

***

### POINTER\_OUT

> `static` **POINTER\_OUT**: `string` = `'onPointerOut'`

Defined in: [src/event/eventConst/PointerEvent3D.ts:82](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L82)

Triggered when the pointer move out

***

### POINTER\_OVER

> `static` **POINTER\_OVER**: `string` = `'onPointerOver'`

Defined in: [src/event/eventConst/PointerEvent3D.ts:88](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L88)

Triggered when the pointer move over

***

### POINTER\_WHEEL

> `static` **POINTER\_WHEEL**: `string` = `'onPointerWheel'`

Defined in: [src/event/eventConst/PointerEvent3D.ts:94](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L94)

Triggered when the wheel pointer is used

***

### pointerId

> **pointerId**: `number`

Defined in: [src/event/eventConst/PointerEvent3D.ts:99](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L99)

A unique identifier for an event caused by a pointer.

***

### pointerType

> **pointerType**: `string` = `'onPointer'`

Defined in: [src/event/eventConst/PointerEvent3D.ts:104](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L104)

event type

***

### isPrimary

> **isPrimary**: `boolean`

Defined in: [src/event/eventConst/PointerEvent3D.ts:109](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L109)

whether it's the preferred pointer in this type of pointer.

***

### pressure

> **pressure**: `number`

Defined in: [src/event/eventConst/PointerEvent3D.ts:114](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L114)

Normalize values

***

### mouseX

> **mouseX**: `number`

Defined in: [src/event/eventConst/PointerEvent3D.ts:119](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L119)

coord x of mouse

***

### mouseY

> **mouseY**: `number`

Defined in: [src/event/eventConst/PointerEvent3D.ts:124](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L124)

coord y of mouse

***

### movementX

> **movementX**: `number`

Defined in: [src/event/eventConst/PointerEvent3D.ts:129](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L129)

delta of coord x of mouse

***

### movementY

> **movementY**: `number`

Defined in: [src/event/eventConst/PointerEvent3D.ts:134](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L134)

delta of coord y of mouse

***

### deltaX

> **deltaX**: `number`

Defined in: [src/event/eventConst/PointerEvent3D.ts:140](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L140)

Returns a negative value when scrolling left, 
a positive value when scrolling right, otherwise 0.

***

### deltaY

> **deltaY**: `number`

Defined in: [src/event/eventConst/PointerEvent3D.ts:146](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L146)

Returns a positive value when scrolling down,
a negative value when scrolling up, otherwise 0.

***

### data

> **data**: `pickResult`

Defined in: [src/event/eventConst/PointerEvent3D.ts:152](https://github.com/orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L152)

Pick result carried by PICK_* events: hit mesh id, world position/normal,
and optional screen UV and distance.

#### Overrides

[`CEvent`](CEvent.md).[`data`](CEvent.md#data)

## Accessors

### isStopImmediatePropagation

#### Get Signature

> **get** **isStopImmediatePropagation**(): `boolean`

Defined in: [src/event/CEvent.ts:125](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L125)

Returns stopImmediatePropagation value

##### Returns

`boolean`

#### Inherited from

[`CEvent`](CEvent.md).[`isStopImmediatePropagation`](CEvent.md#isstopimmediatepropagation)

## Methods

### stopImmediatePropagation()

> **stopImmediatePropagation**(): `void`

Defined in: [src/event/CEvent.ts:110](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L110)

Prevent bubbling of all event listeners in subsequent nodes of the current node in the event flow.

#### Returns

`void`

#### Inherited from

[`CEvent`](CEvent.md).[`stopImmediatePropagation`](CEvent.md#stopimmediatepropagation)
