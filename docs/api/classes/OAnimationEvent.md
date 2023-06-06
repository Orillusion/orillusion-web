# Class: OAnimationEvent

Skeleton animation event

## Hierarchy

- [`CEvent`](CEvent.md)

  ↳ **`OAnimationEvent`**

### Constructors

- [constructor](OAnimationEvent.md#constructor)

### Properties

- [skeletonAnimation](OAnimationEvent.md#skeletonanimation)
- [target](OAnimationEvent.md#target)
- [currentTarget](OAnimationEvent.md#currenttarget)
- [type](OAnimationEvent.md#type)
- [data](OAnimationEvent.md#data)
- [param](OAnimationEvent.md#param)
- [time](OAnimationEvent.md#time)
- [delay](OAnimationEvent.md#delay)
- [mouseCode](OAnimationEvent.md#mousecode)
- [ctrlKey](OAnimationEvent.md#ctrlkey)
- [altKey](OAnimationEvent.md#altkey)
- [shiftKey](OAnimationEvent.md#shiftkey)
- [targetTouches](OAnimationEvent.md#targettouches)
- [changedTouches](OAnimationEvent.md#changedtouches)
- [touches](OAnimationEvent.md#touches)
- [view](OAnimationEvent.md#view)

### Accessors

- [isStopImmediatePropagation](OAnimationEvent.md#isstopimmediatepropagation)

### Methods

- [stopImmediatePropagation](OAnimationEvent.md#stopimmediatepropagation)

## Constructors

### constructor

• **new OAnimationEvent**(`name`, `time`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `time` | `number` |

#### Overrides

[CEvent](CEvent.md).[constructor](CEvent.md#constructor)

#### Defined in

[src/components/anim/OAnimationEvent.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/OAnimationEvent.ts#L14)

## Properties

### skeletonAnimation

• **skeletonAnimation**: [`SkeletonAnimationComponent`](SkeletonAnimationComponent.md)

owner skeleton animation component

#### Defined in

[src/components/anim/OAnimationEvent.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/OAnimationEvent.ts#L12)

___

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
