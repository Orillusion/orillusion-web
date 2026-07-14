[**@orillusion/core**](../README.md)

***

# Class: OAnimationEvent

Defined in: [src/components/anim/OAnimationEvent.ts:13](https://github.com/orillusion/orillusion/blob/main/src/components/anim/OAnimationEvent.ts#L13)

Animator event payload.

Dispatched by clip states when a tagged keyframe is reached. The
`animator` field references the AnimatorComponent that owns the clip,
letting the listener cross-check state, query weights, etc.

## Extends

- [`CEvent`](CEvent.md)

## Constructors

### Constructor

> **new OAnimationEvent**(`name`, `time`): `OAnimationEvent`

Defined in: [src/components/anim/OAnimationEvent.ts:16](https://github.com/orillusion/orillusion/blob/main/src/components/anim/OAnimationEvent.ts#L16)

#### Parameters

##### name

`string`

##### time

`number`

#### Returns

`OAnimationEvent`

#### Overrides

[`CEvent`](CEvent.md).[`constructor`](CEvent.md#constructor)

## Properties

### animator

> **animator**: [`AnimatorComponent`](AnimatorComponent.md)

Defined in: [src/components/anim/OAnimationEvent.ts:14](https://github.com/orillusion/orillusion/blob/main/src/components/anim/OAnimationEvent.ts#L14)

***

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

### data?

> `optional` **data?**: `any`

Defined in: [src/event/CEvent.ts:28](https://github.com/orillusion/orillusion/blob/main/src/event/CEvent.ts#L28)

extra data.Used for the transmission process of events, carrying data

#### Inherited from

[`CEvent`](CEvent.md).[`data`](CEvent.md#data)

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
