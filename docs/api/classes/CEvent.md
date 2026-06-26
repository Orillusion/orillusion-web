[**@orillusion/core**](../README.md)

***

# Class: CEvent

Defined in: [src/event/CEvent.ts:9](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L9)

Basic class of Event

## Extended by

- [`OAnimationEvent`](OAnimationEvent.md)
- [`KeyEvent`](KeyEvent.md)
- [`PointerEvent3D`](PointerEvent3D.md)

## Constructors

### Constructor

> **new CEvent**(`eventType?`, `data?`): `CEvent`

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

`CEvent`

## Properties

### target

> **target**: [`Object3D`](Object3D.md)

Defined in: [src/event/CEvent.ts:13](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L13)

Event target, it's usually event dispatcher

***

### currentTarget

> **currentTarget**: `CEventListener`

Defined in: [src/event/CEvent.ts:18](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L18)

Current event target, it's current bubble object

***

### type

> **type**: `string`

Defined in: [src/event/CEvent.ts:23](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L23)

event type, it's registered string of key

***

### data?

> `optional` **data?**: `any`

Defined in: [src/event/CEvent.ts:28](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L28)

extra data.Used for the transmission process of events, carrying data

***

### param

> **param**: `any`

Defined in: [src/event/CEvent.ts:34](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L34)

The param data when event is registered

***

### time

> **time**: `number` = `0`

Defined in: [src/event/CEvent.ts:40](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L40)

the time when event is

***

### delay

> **delay**: `number` = `0`

Defined in: [src/event/CEvent.ts:46](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L46)

the delay time when event is dispatched.

***

### mouseCode

> **mouseCode**: `number` = `0`

Defined in: [src/event/CEvent.ts:52](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L52)

mouse code, see

#### Mouse Code

[MouseCode](../enumerations/MouseCode.md)

***

### ctrlKey

> **ctrlKey**: `boolean`

Defined in: [src/event/CEvent.ts:57](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L57)

Is Ctrl key pressed when the event occurs

***

### metaKey

> **metaKey**: `boolean`

Defined in: [src/event/CEvent.ts:62](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L62)

Is Meta key pressed when the event occurs

***

### altKey

> **altKey**: `boolean`

Defined in: [src/event/CEvent.ts:67](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L67)

Is Alt key pressed when the event occurs

***

### shiftKey

> **shiftKey**: `boolean`

Defined in: [src/event/CEvent.ts:72](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L72)

Is Shift key pressed when the event occurs

***

### targetTouches

> **targetTouches**: `TouchData`[]

Defined in: [src/event/CEvent.ts:77](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L77)

Collection of finger touch points, which registered

***

### changedTouches

> **changedTouches**: `TouchData`[]

Defined in: [src/event/CEvent.ts:82](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L82)

Collection of finger touch points changed

***

### touches

> **touches**: `TouchData`[]

Defined in: [src/event/CEvent.ts:87](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L87)

Collection of finger touch points

***

### view

> **view**: [`View3D`](View3D.md)

Defined in: [src/event/CEvent.ts:94](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L94)

binded view3D object in event.

## Accessors

### isStopImmediatePropagation

#### Get Signature

> **get** **isStopImmediatePropagation**(): `boolean`

Defined in: [src/event/CEvent.ts:125](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L125)

Returns stopImmediatePropagation value

##### Returns

`boolean`

## Methods

### stopImmediatePropagation()

> **stopImmediatePropagation**(): `void`

Defined in: [src/event/CEvent.ts:110](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L110)

Prevent bubbling of all event listeners in subsequent nodes of the current node in the event flow.

#### Returns

`void`
