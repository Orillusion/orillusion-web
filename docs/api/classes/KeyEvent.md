# Class: KeyEvent

enum keyboard event[InputSystem](InputSystem.md)

## Hierarchy

- [`CEvent`](CEvent.md)

  ↳ **`KeyEvent`**

### Constructors

- [constructor](KeyEvent.md#constructor)

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
- [view](KeyEvent.md#view)
- [KEY\_DOWN](KeyEvent.md#key_down)
- [KEY\_UP](KeyEvent.md#key_up)
- [keyCode](KeyEvent.md#keycode)

### Accessors

- [isStopImmediatePropagation](KeyEvent.md#isstopimmediatepropagation)

### Methods

- [stopImmediatePropagation](KeyEvent.md#stopimmediatepropagation)

## Constructors

### constructor

• **new KeyEvent**(`eventType?`, `data?`)

Create a new event, with type and data

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `eventType` | `string` | `null` | {any} eventType |
| `data` | `any` | `null` | {any} param |

#### Inherited from

[CEvent](CEvent.md).[constructor](CEvent.md#constructor)

#### Defined in

[src/event/CEvent.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L97)

## Properties

### target

• **target**: [`Object3D`](Object3D.md)

Event target, it's usually event dispatcher

#### Inherited from

[CEvent](CEvent.md).[target](CEvent.md#target)

#### Defined in

[src/event/CEvent.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L13)

___

### currentTarget

• **currentTarget**: `CEventListener`

Current event target, it's current bubble object

#### Inherited from

[CEvent](CEvent.md).[currentTarget](CEvent.md#currenttarget)

#### Defined in

[src/event/CEvent.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L18)

___

### type

• **type**: `string`

event type, it's registered string of key

#### Inherited from

[CEvent](CEvent.md).[type](CEvent.md#type)

#### Defined in

[src/event/CEvent.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L23)

___

### data

• **data**: `any`

extra data.Used for the transmission process of events, carrying data

#### Inherited from

[CEvent](CEvent.md).[data](CEvent.md#data)

#### Defined in

[src/event/CEvent.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L28)

___

### param

• **param**: `any`

The param data when event is registered

#### Inherited from

[CEvent](CEvent.md).[param](CEvent.md#param)

#### Defined in

[src/event/CEvent.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L34)

___

### time

• **time**: `number` = `0`

the time when event is

#### Inherited from

[CEvent](CEvent.md).[time](CEvent.md#time)

#### Defined in

[src/event/CEvent.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L40)

___

### delay

• **delay**: `number` = `0`

the delay time when event is dispatched.

#### Inherited from

[CEvent](CEvent.md).[delay](CEvent.md#delay)

#### Defined in

[src/event/CEvent.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L46)

___

### mouseCode

• **mouseCode**: `number` = `0`

mouse code, see

**`Mouse Code`**

[MouseCode](../enums/MouseCode.md)

#### Inherited from

[CEvent](CEvent.md).[mouseCode](CEvent.md#mousecode)

#### Defined in

[src/event/CEvent.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L52)

___

### ctrlKey

• **ctrlKey**: `boolean`

Is Ctrl key pressed when the event occurs

#### Inherited from

[CEvent](CEvent.md).[ctrlKey](CEvent.md#ctrlkey)

#### Defined in

[src/event/CEvent.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L57)

___

### altKey

• **altKey**: `boolean`

Is Alt key pressed when the event occurs

#### Inherited from

[CEvent](CEvent.md).[altKey](CEvent.md#altkey)

#### Defined in

[src/event/CEvent.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L62)

___

### shiftKey

• **shiftKey**: `boolean`

Is Shift key pressed when the event occurs

#### Inherited from

[CEvent](CEvent.md).[shiftKey](CEvent.md#shiftkey)

#### Defined in

[src/event/CEvent.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L67)

___

### targetTouches

• **targetTouches**: `TouchData`[]

Collection of finger touch points, which registered

#### Inherited from

[CEvent](CEvent.md).[targetTouches](CEvent.md#targettouches)

#### Defined in

[src/event/CEvent.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L72)

___

### changedTouches

• **changedTouches**: `TouchData`[]

Collection of finger touch points changed

#### Inherited from

[CEvent](CEvent.md).[changedTouches](CEvent.md#changedtouches)

#### Defined in

[src/event/CEvent.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L77)

___

### touches

• **touches**: `TouchData`[]

Collection of finger touch points

#### Inherited from

[CEvent](CEvent.md).[touches](CEvent.md#touches)

#### Defined in

[src/event/CEvent.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L82)

___

### view

• **view**: [`View3D`](View3D.md)

binded view3D object in event.

#### Inherited from

[CEvent](CEvent.md).[view](CEvent.md#view)

#### Defined in

[src/event/CEvent.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L89)

___

### KEY\_DOWN

▪ `Static` **KEY\_DOWN**: `string` = `'onKeyDown'`

Constant Definition Key Press Event Identification
Event response status: Responds every time the keyboard is pressed.
Response event parameters: keyboard key

**`Platform`**

Web,Native

#### Defined in

[src/event/eventConst/KeyEvent.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/KeyEvent.ts#L15)

___

### KEY\_UP

▪ `Static` **KEY\_UP**: `string` = `'onKeyUp'`

Constant Definition Key up Event Identification
Event response status: Responds every time the keyboard is released.
Response event parameters: keyboard key

**`Platform`**

Web,Native

#### Defined in

[src/event/eventConst/KeyEvent.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/KeyEvent.ts#L24)

___

### keyCode

• **keyCode**: `number` = `0`

Key code value, enumeration type see KeyCode [KeyCode](../enums/KeyCode.md)

**`Default`**

```ts
0
```

**`Platform`**

Web,Native

#### Defined in

[src/event/eventConst/KeyEvent.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/KeyEvent.ts#L32)

## Accessors

### isStopImmediatePropagation

• `get` **isStopImmediatePropagation**(): `boolean`

Returns stopImmediatePropagation value

#### Returns

`boolean`

#### Inherited from

CEvent.isStopImmediatePropagation

#### Defined in

[src/event/CEvent.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L120)

## Methods

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

Prevent bubbling of all event listeners in subsequent nodes of the current node in the event flow.

#### Returns

`void`

#### Inherited from

[CEvent](CEvent.md).[stopImmediatePropagation](CEvent.md#stopimmediatepropagation)

#### Defined in

[src/event/CEvent.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/event/CEvent.ts#L105)
