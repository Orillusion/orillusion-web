# Class: CEvent

Basic class of Event

## Hierarchy

- **`CEvent`**

  ↳ [`OAnimationEvent`](OAnimationEvent.md)

  ↳ [`KeyEvent`](KeyEvent.md)

  ↳ [`PointerEvent3D`](PointerEvent3D.md)

### Constructors

- [constructor](CEvent.md#constructor)

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
- [view](CEvent.md#view)

### Accessors

- [isStopImmediatePropagation](CEvent.md#isstopimmediatepropagation)

### Methods

- [stopImmediatePropagation](CEvent.md#stopimmediatepropagation)

## Constructors

### constructor

• **new CEvent**(`eventType?`, `data?`)

Create a new event, with type and data

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `eventType` | `string` | `null` | {any} eventType |
| `data` | `any` | `null` | {any} param |

#### Defined in

[src/event/CEvent.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L97)

## Properties

### target

• **target**: [`Object3D`](Object3D.md)

Event target, it's usually event dispatcher

#### Defined in

[src/event/CEvent.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L13)

___

### currentTarget

• **currentTarget**: `CEventListener`

Current event target, it's current bubble object

#### Defined in

[src/event/CEvent.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L18)

___

### type

• **type**: `string`

event type, it's registered string of key

#### Defined in

[src/event/CEvent.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L23)

___

### data

• **data**: `any`

extra data.Used for the transmission process of events, carrying data

#### Defined in

[src/event/CEvent.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L28)

___

### param

• **param**: `any`

The param data when event is registered

#### Defined in

[src/event/CEvent.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L34)

___

### time

• **time**: `number` = `0`

the time when event is

#### Defined in

[src/event/CEvent.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L40)

___

### delay

• **delay**: `number` = `0`

the delay time when event is dispatched.

#### Defined in

[src/event/CEvent.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L46)

___

### mouseCode

• **mouseCode**: `number` = `0`

mouse code, see

**`Mouse Code`**

[MouseCode](../enums/MouseCode.md)

#### Defined in

[src/event/CEvent.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L52)

___

### ctrlKey

• **ctrlKey**: `boolean`

Is Ctrl key pressed when the event occurs

#### Defined in

[src/event/CEvent.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L57)

___

### altKey

• **altKey**: `boolean`

Is Alt key pressed when the event occurs

#### Defined in

[src/event/CEvent.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L62)

___

### shiftKey

• **shiftKey**: `boolean`

Is Shift key pressed when the event occurs

#### Defined in

[src/event/CEvent.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L67)

___

### targetTouches

• **targetTouches**: `TouchData`[]

Collection of finger touch points, which registered

#### Defined in

[src/event/CEvent.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L72)

___

### changedTouches

• **changedTouches**: `TouchData`[]

Collection of finger touch points changed

#### Defined in

[src/event/CEvent.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L77)

___

### touches

• **touches**: `TouchData`[]

Collection of finger touch points

#### Defined in

[src/event/CEvent.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L82)

___

### view

• **view**: [`View3D`](View3D.md)

binded view3D object in event.

#### Defined in

[src/event/CEvent.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L89)

## Accessors

### isStopImmediatePropagation

• `get` **isStopImmediatePropagation**(): `boolean`

Returns stopImmediatePropagation value

#### Returns

`boolean`

#### Defined in

[src/event/CEvent.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L120)

## Methods

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

Prevent bubbling of all event listeners in subsequent nodes of the current node in the event flow.

#### Returns

`void`

#### Defined in

[src/event/CEvent.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L105)
