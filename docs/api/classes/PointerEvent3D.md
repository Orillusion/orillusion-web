# Class: PointerEvent3D

enum event type of pointer.
[InputSystem](InputSystem.md)

## Hierarchy

- [`CEvent`](CEvent.md)

  ↳ **`PointerEvent3D`**

### Constructors

- [constructor](PointerEvent3D.md#constructor)

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
- [view](PointerEvent3D.md#view)
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

### Accessors

- [isStopImmediatePropagation](PointerEvent3D.md#isstopimmediatepropagation)

### Methods

- [stopImmediatePropagation](PointerEvent3D.md#stopimmediatepropagation)

## Constructors

### constructor

• **new PointerEvent3D**(`eventType?`, `data?`)

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

### PICK\_OVER

▪ `Static` **PICK\_OVER**: `string` = `'onPickOver'`

Triggered when the touch point enters the collision

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L13)

___

### PICK\_OVER\_GUI

▪ `Static` **PICK\_OVER\_GUI**: `string` = `'onPickOverGUI'`

Triggered when the touch point enters the interactive GUI

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L18)

___

### PICK\_CLICK

▪ `Static` **PICK\_CLICK**: `string` = `'onPickClick'`

Triggered when the touch point clicked the collision

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L23)

___

### PICK\_CLICK\_GUI

▪ `Static` **PICK\_CLICK\_GUI**: `string` = `'onPickClickGUI'`

Triggered when the touch point clicked the interactive GUI

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L28)

___

### PICK\_OUT

▪ `Static` **PICK\_OUT**: `string` = `'onPickOut'`

Triggered when the touch point leave the collision

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L33)

___

### PICK\_OUT\_GUI

▪ `Static` **PICK\_OUT\_GUI**: `string` = `'onPickOutGUI'`

Triggered when the touch point leave the interactive GUI

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L38)

___

### PICK\_MOVE

▪ `Static` **PICK\_MOVE**: `string` = `'onPickMove'`

Triggered when the touch point move on the collision

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L43)

___

### PICK\_UP

▪ `Static` **PICK\_UP**: `string` = `'onPickUp'`

Triggered when the touch point release from the collision

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L48)

___

### PICK\_UP\_GUI

▪ `Static` **PICK\_UP\_GUI**: `string` = `'onPickUpGUI'`

Triggered when the touch point release from the interactive GUI

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L53)

___

### PICK\_DOWN

▪ `Static` **PICK\_DOWN**: `string` = `'onPickDown'`

Triggered when the touch point pressed the collision

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L58)

___

### PICK\_DOWN\_GUI

▪ `Static` **PICK\_DOWN\_GUI**: `string` = `'onPickDownGUI'`

Triggered when the touch point pressed the interactive GUI

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L63)

___

### POINTER\_RIGHT\_CLICK

▪ `Static` **POINTER\_RIGHT\_CLICK**: `string` = `'onPointerRightClick'`

Triggered when the right pointer clicked

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L69)

___

### POINTER\_MID\_UP

▪ `Static` **POINTER\_MID\_UP**: `string` = `'onPointerMidUp'`

Triggered when the middle pointer released

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L74)

___

### POINTER\_MID\_DOWN

▪ `Static` **POINTER\_MID\_DOWN**: `string` = `'onPointerMidDown'`

Triggered when the middle pointer pressed

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L79)

___

### POINTER\_CLICK

▪ `Static` **POINTER\_CLICK**: `string` = `'onPointerClick'`

Triggered when the pointer clicked

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L84)

___

### POINTER\_MOVE

▪ `Static` **POINTER\_MOVE**: `string` = `'onPointerMove'`

Triggered when the pointer moved

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L90)

___

### POINTER\_DOWN

▪ `Static` **POINTER\_DOWN**: `string` = `'onPointerDown'`

Triggered when the pointer pressed

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L96)

___

### POINTER\_UP

▪ `Static` **POINTER\_UP**: `string` = `'onPointerUp'`

Triggered when the pointer released

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:102](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L102)

___

### POINTER\_OUT

▪ `Static` **POINTER\_OUT**: `string` = `'onPointerOut'`

Triggered when the pointer move out

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L108)

___

### POINTER\_OVER

▪ `Static` **POINTER\_OVER**: `string` = `'onPointerOver'`

Triggered when the pointer move over

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L114)

___

### POINTER\_WHEEL

▪ `Static` **POINTER\_WHEEL**: `string` = `'onPointerWheel'`

Triggered when the wheel pointer is used

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L120)

___

### pointerId

• **pointerId**: `number`

A unique identifier for an event caused by a pointer.

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L125)

___

### pointerType

• **pointerType**: `string`

event type

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L130)

___

### isPrimary

• **isPrimary**: `boolean`

whether it's the preferred pointer in this type of pointer.

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L135)

___

### pressure

• **pressure**: `number`

Normalize values

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L140)

___

### mouseX

• **mouseX**: `number`

coord x of mouse

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L145)

___

### mouseY

• **mouseY**: `number`

coord y of mouse

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:150](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L150)

___

### movementX

• **movementX**: `number`

delta of coord x of mouse

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:155](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L155)

___

### movementY

• **movementY**: `number`

delta of coord y of mouse

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:160](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L160)

___

### deltaX

• **deltaX**: `number`

Returns a negative value when scrolling left, 
a positive value when scrolling right, otherwise 0.

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:166](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L166)

___

### deltaY

• **deltaY**: `number`

Returns a positive value when scrolling down,
 a negative value when scrolling up, otherwise 0.

#### Defined in

[src/event/eventConst/PointerEvent3D.ts:172](https://github.com/Orillusion/orillusion/blob/main/src/event/eventConst/PointerEvent3D.ts#L172)

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
