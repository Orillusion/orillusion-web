# Class: PickFire

Management and triggering for picking 3D objects

## Hierarchy

- [`CEventDispatcher`](CEventDispatcher.md)

  ↳ **`PickFire`**

### Constructors

- [constructor](PickFire.md#constructor)

### Properties

- [ray](PickFire.md#ray)
- [isTouching](PickFire.md#istouching)
- [mouseEnableMap](PickFire.md#mouseenablemap)

### Methods

- [dispatchEvent](PickFire.md#dispatchevent)
- [dispose](PickFire.md#dispose)
- [addEventListener](PickFire.md#addeventlistener)
- [removeEventListener](PickFire.md#removeeventlistener)
- [removeEventListenerAt](PickFire.md#removeeventlistenerat)
- [removeAllEventListener](PickFire.md#removealleventlistener)
- [containEventListener](PickFire.md#containeventlistener)
- [hasEventListener](PickFire.md#haseventlistener)
- [start](PickFire.md#start)
- [stop](PickFire.md#stop)

## Constructors

### constructor

• **new PickFire**(`view`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Overrides

[CEventDispatcher](CEventDispatcher.md).[constructor](CEventDispatcher.md#constructor)

#### Defined in

[src/io/PickFire.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/io/PickFire.ts#L44)

## Properties

### ray

• **ray**: [`Ray`](Ray.md)

The ray used to pick 3D objects

#### Defined in

[src/io/PickFire.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/io/PickFire.ts#L19)

___

### isTouching

• **isTouching**: `boolean` = `false`

whether it's touching

#### Defined in

[src/io/PickFire.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/io/PickFire.ts#L24)

___

### mouseEnableMap

• **mouseEnableMap**: `Map`<`number`, [`ColliderComponent`](ColliderComponent.md)\>

a map records the association information between meshID(matrix id) and ColliderComponent

#### Defined in

[src/io/PickFire.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/io/PickFire.ts#L41)

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

### start

▸ **start**(): `void`

start this manager

#### Returns

`void`

#### Defined in

[src/io/PickFire.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/io/PickFire.ts#L69)

___

### stop

▸ **stop**(): `void`

stop this manager

#### Returns

`void`

#### Defined in

[src/io/PickFire.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/io/PickFire.ts#L85)
