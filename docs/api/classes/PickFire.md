[**@orillusion/core**](../README.md)

***

# Class: PickFire

Defined in: [src/io/PickFire.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/io/PickFire.ts#L18)

Management and triggering for picking 3D objects

## Extends

- [`CEventDispatcher`](CEventDispatcher.md)

## Constructors

### Constructor

> **new PickFire**(`view`): `PickFire`

Defined in: [src/io/PickFire.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/io/PickFire.ts#L56)

#### Parameters

##### view

[`View3D`](View3D.md)

#### Returns

`PickFire`

#### Overrides

[`CEventDispatcher`](CEventDispatcher.md).[`constructor`](CEventDispatcher.md#constructor)

## Properties

### ray

> **ray**: [`Ray`](Ray.md)

Defined in: [src/io/PickFire.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/io/PickFire.ts#L22)

The ray used to pick 3D objects

***

### isTouching

> **isTouching**: `boolean` = `false`

Defined in: [src/io/PickFire.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/io/PickFire.ts#L27)

whether it's touching

***

### mouseEnableMap

> **mouseEnableMap**: `Map`\<`number`, [`ColliderComponent`](ColliderComponent.md)\>

Defined in: [src/io/PickFire.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/io/PickFire.ts#L44)

a map records the association information between meshID(matrix id) and ColliderComponent

***

### layerMask

> **layerMask**: `number` = `VisibleLayer.All`

Defined in: [src/io/PickFire.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/io/PickFire.ts#L50)

`bound` mode: only colliders whose `visibleLayer` shares a bit with
this mask are picked.

***

### filter

> **filter**: (`collider`) => `boolean` = `null`

Defined in: [src/io/PickFire.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/io/PickFire.ts#L53)

`bound` mode: optional per-collider filter; return false to skip a collider.

#### Parameters

##### collider

[`ColliderComponent`](ColliderComponent.md)

#### Returns

`boolean`

## Methods

### dispatchEvent()

> **dispatchEvent**(`event`): `void`

Defined in: [src/event/CEventDispatcher.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L24)

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

Defined in: [src/event/CEventDispatcher.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L54)

release all registered event.

#### Returns

`void`

#### Inherited from

[`CEventDispatcher`](CEventDispatcher.md).[`destroy`](CEventDispatcher.md#destroy)

***

### addEventListener()

> **addEventListener**(`type`, `callback`, `thisObject`, `param?`, `priority?`): `number`

Defined in: [src/event/CEventDispatcher.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L78)

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

Defined in: [src/event/CEventDispatcher.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L112)

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

Defined in: [src/event/CEventDispatcher.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L132)

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

Defined in: [src/event/CEventDispatcher.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L152)

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

Defined in: [src/event/CEventDispatcher.ts:184](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L184)

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

Defined in: [src/event/CEventDispatcher.ts:197](https://github.com/Orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L197)

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

### start()

> **start**(): `void`

Defined in: [src/io/PickFire.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/io/PickFire.ts#L88)

start this manager

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [src/io/PickFire.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/io/PickFire.ts#L110)

stop this manager

#### Returns

`void`
