# Class: Entity

The entity class provides an abstract base class for all scene objects that are considered to have "existence" in the scene,
 which can be considered as actual objects with positions and sizes.
Entity class is an abstract class and cannot be instantiated. If you want to instantiate it, please use the Object 3D class.

## Hierarchy

- [`CEventDispatcher`](CEventDispatcher.md)

  ↳ **`Entity`**

  ↳↳ [`Object3D`](Object3D.md)


### Properties

- [name](Entity.md#name)
- [transform](Entity.md#transform)
- [renderNode](Entity.md#rendernode)
- [entityChildren](Entity.md#entitychildren)
- [components](Entity.md#components)

### Accessors

- [uuid](Entity.md#uuid)
- [renderLayer](Entity.md#renderlayer)
- [numChildren](Entity.md#numchildren)
- [bound](Entity.md#bound)

### Methods

- [getObjectByName](Entity.md#getobjectbyname)
- [addChild](Entity.md#addchild)
- [removeChild](Entity.md#removechild)
- [removeAllChild](Entity.md#removeallchild)
- [removeSelf](Entity.md#removeself)
- [removeChildByIndex](Entity.md#removechildbyindex)
- [hasChild](Entity.md#haschild)
- [removeFromParent](Entity.md#removefromparent)
- [getChildByIndex](Entity.md#getchildbyindex)
- [getChildByName](Entity.md#getchildbyname)
- [genBounds](Entity.md#genbounds)
- [destroy](Entity.md#destroy)
- [dispatchEvent](Entity.md#dispatchevent)
- [addEventListener](Entity.md#addeventlistener)
- [removeEventListener](Entity.md#removeeventlistener)
- [removeEventListenerAt](Entity.md#removeeventlistenerat)
- [removeAllEventListener](Entity.md#removealleventlistener)
- [containEventListener](Entity.md#containeventlistener)
- [hasEventListener](Entity.md#haseventlistener)

### Constructors

- [constructor](Entity.md#constructor)

## Properties

### name

• **name**: `string` = `''`

The name of the object. The default value is an empty string.

#### Defined in

[src/core/entities/Entity.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L24)

___

### transform

• **transform**: [`Transform`](Transform.md)

The Transform attached to this object.

#### Defined in

[src/core/entities/Entity.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L59)

___

### renderNode

• **renderNode**: `RenderNode`

Renderer components

#### Defined in

[src/core/entities/Entity.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L64)

___

### entityChildren

• **entityChildren**: [`Entity`](Entity.md)[]

An array containing sub objects of an object

#### Defined in

[src/core/entities/Entity.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L69)

___

### components

• **components**: `Map`<`any`, [`IComponent`](../interfaces/IComponent.md)\>

List of components attached to an object

#### Defined in

[src/core/entities/Entity.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L74)

## Accessors

### uuid

• `get` **uuid**(): `string`

The unique identifier of the object.

#### Returns

`string`

#### Defined in

[src/core/entities/Entity.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L31)

___

### renderLayer

• `get` **renderLayer**(): `RenderLayer`

#### Returns

`RenderLayer`

#### Defined in

[src/core/entities/Entity.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L43)

• `set` **renderLayer**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `RenderLayer` |

#### Returns

`void`

#### Defined in

[src/core/entities/Entity.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L47)

___

### numChildren

• `get` **numChildren**(): `number`

Returns the number of child objects of an object

#### Returns

`number`

#### Defined in

[src/core/entities/Entity.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L129)

___

### bound

• `get` **bound**(): `IBound`

#### Returns

`IBound`

#### Defined in

[src/core/entities/Entity.ts:317](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L317)

• `set` **bound**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `IBound` |

#### Returns

`void`

#### Defined in

[src/core/entities/Entity.ts:324](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L324)

## Methods

### getObjectByName

▸ **getObjectByName**(`name`): [`Entity`](Entity.md)

Starting from the object itself, search for the object and its children, and return the first child object with a matching name.
For most objects, the name is an empty string by default. You must manually set it to use this method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | input name |

#### Returns

[`Entity`](Entity.md)

result Entity

#### Defined in

[src/core/entities/Entity.ts:94](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L94)

___

### addChild

▸ **addChild**(`child`): [`Entity`](Entity.md)

Add an object as a child of this object. You can add any number of objects.
Any current parent object on the object passed here will be deleted, as an object can only have at most one parent object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`Entity`](Entity.md) | target child entity |

#### Returns

[`Entity`](Entity.md)

#### Defined in

[src/core/entities/Entity.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L140)

___

### removeChild

▸ **removeChild**(`child`): `any`

Remove the child objects of the object. You can remove any number of objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`Entity`](Entity.md) | Removed objects |

#### Returns

`any`

#### Defined in

[src/core/entities/Entity.ts:166](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L166)

___

### removeAllChild

▸ **removeAllChild**(): `void`

Remove all children of the current object

#### Returns

`void`

#### Defined in

[src/core/entities/Entity.ts:180](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L180)

___

### removeSelf

▸ **removeSelf**(): [`Entity`](Entity.md)

Remove the current node from the parent

#### Returns

[`Entity`](Entity.md)

this

#### Defined in

[src/core/entities/Entity.ts:191](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L191)

___

### removeChildByIndex

▸ **removeChildByIndex**(`index`): `void`

Search for child nodes of objects and remove child objects with matching indexes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | assign index |

#### Returns

`void`

#### Defined in

[src/core/entities/Entity.ts:201](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L201)

___

### hasChild

▸ **hasChild**(`child`): `boolean`

Does the current object contain a certain object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`Entity`](Entity.md) | certain object |

#### Returns

`boolean`

boolean

#### Defined in

[src/core/entities/Entity.ts:215](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L215)

___

### removeFromParent

▸ **removeFromParent**(): [`Entity`](Entity.md)

Remove the current node from the parent

#### Returns

[`Entity`](Entity.md)

this

#### Defined in

[src/core/entities/Entity.ts:225](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L225)

___

### getChildByIndex

▸ **getChildByIndex**(`index`): [`Entity`](Entity.md)

Search for object children and return the first child object with a matching index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | matching index |

#### Returns

[`Entity`](Entity.md)

child entity

#### Defined in

[src/core/entities/Entity.ts:239](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L239)

___

### getChildByName

▸ **getChildByName**(`name`, `loopChild?`): `any`

Search for object children and return a child object with a matching name.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | matching name |
| `loopChild` | `boolean` | `true` | Whether to traverse the children of the child object. The default value is true |

#### Returns

`any`

result

#### Defined in

[src/core/entities/Entity.ts:254](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L254)

___

### genBounds

▸ **genBounds**(): `IBound`

Returns a bounding box that defines the display area of the specified layer.

#### Returns

`IBound`

#### Defined in

[src/core/entities/Entity.ts:332](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L332)

___

### destroy

▸ **destroy**(): `void`

release current object

#### Returns

`void`

#### Defined in

[src/core/entities/Entity.ts:348](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L348)

___

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

## Constructors

### constructor

• **new Entity**()

#### Overrides

[CEventDispatcher](CEventDispatcher.md).[constructor](CEventDispatcher.md#constructor)

#### Defined in

[src/core/entities/Entity.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L117)
