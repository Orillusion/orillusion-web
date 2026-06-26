[**@orillusion/core**](../README.md)

***

# Class: Entity

Defined in: [src/core/entities/Entity.ts:18](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L18)

The entity class provides an abstract base class for all scene objects that are considered to have "existence" in the scene,
 which can be considered as actual objects with positions and sizes.
Entity class is an abstract class and cannot be instantiated. If you want to instantiate it, please use the Object 3D class.

## Extends

- [`CEventDispatcher`](CEventDispatcher.md)

## Extended by

- [`Object3D`](Object3D.md)

## Constructors

### Constructor

> **new Entity**(): `Entity`

Defined in: [src/core/entities/Entity.ts:101](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L101)

#### Returns

`Entity`

#### Overrides

[`CEventDispatcher`](CEventDispatcher.md).[`constructor`](CEventDispatcher.md#constructor)

## Properties

### name

> **name**: `string` = `''`

Defined in: [src/core/entities/Entity.ts:23](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L23)

The name of the object. The default value is an empty string.

***

### transform

> **transform**: [`Transform`](Transform.md)

Defined in: [src/core/entities/Entity.ts:38](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L38)

The Transform attached to this object.

***

### renderNode

> **renderNode**: `RenderNode`

Defined in: [src/core/entities/Entity.ts:43](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L43)

Renderer components

***

### entityChildren

> **entityChildren**: `Entity`[]

Defined in: [src/core/entities/Entity.ts:48](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L48)

An array containing sub objects of an object

***

### components

> **components**: `Map`\<`any`, [`IComponent`](../interfaces/IComponent.md)\>

Defined in: [src/core/entities/Entity.ts:53](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L53)

List of components attached to an object

## Accessors

### instanceID

#### Get Signature

> **get** **instanceID**(): `string`

Defined in: [src/core/entities/Entity.ts:31](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L31)

The unique identifier of the object.

##### Returns

`string`

***

### dispose

#### Get Signature

> **get** **dispose**(): `boolean`

Defined in: [src/core/entities/Entity.ts:67](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L67)

##### Returns

`boolean`

***

### numChildren

#### Get Signature

> **get** **numChildren**(): `number`

Defined in: [src/core/entities/Entity.ts:113](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L113)

Returns the number of child objects of an object

##### Returns

`number`

***

### bound

#### Get Signature

> **get** **bound**(): `IBound`

Defined in: [src/core/entities/Entity.ts:274](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L274)

##### Returns

`IBound`

#### Set Signature

> **set** **bound**(`value`): `void`

Defined in: [src/core/entities/Entity.ts:279](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L279)

##### Parameters

###### value

`IBound`

##### Returns

`void`

## Methods

### getObjectByName()

> **getObjectByName**(`name`): `Entity`

Defined in: [src/core/entities/Entity.ts:78](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L78)

Starting from the object itself, search for the object and its children, and return the first child object with a matching name.
For most objects, the name is an empty string by default. You must manually set it to use this method.

#### Parameters

##### name

`string`

input name

#### Returns

`Entity`

result Entity

***

### addChild()

> **addChild**(`child`): `Entity`

Defined in: [src/core/entities/Entity.ts:124](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L124)

Add an object as a child of this object. You can add any number of objects.
Any current parent object on the object passed here will be deleted, as an object can only have at most one parent object.

#### Parameters

##### child

`Entity`

target child entity

#### Returns

`Entity`

***

### removeChild()

> **removeChild**(`child`): `void`

Defined in: [src/core/entities/Entity.ts:149](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L149)

Remove the child objects of the object. You can remove any number of objects.

#### Parameters

##### child

`Entity`

Removed objects

#### Returns

`void`

***

### removeAllChild()

> **removeAllChild**(): `void`

Defined in: [src/core/entities/Entity.ts:165](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L165)

Remove all children of the current object

#### Returns

`void`

***

### removeSelf()

> **removeSelf**(): `this`

Defined in: [src/core/entities/Entity.ts:176](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L176)

Remove the current node from the parent

#### Returns

`this`

this

***

### removeChildByIndex()

> **removeChildByIndex**(`index`): `void`

Defined in: [src/core/entities/Entity.ts:186](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L186)

Search for child nodes of objects and remove child objects with matching indexes.

#### Parameters

##### index

`number`

assign index

#### Returns

`void`

***

### hasChild()

> **hasChild**(`child`): `boolean`

Defined in: [src/core/entities/Entity.ts:200](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L200)

Does the current object contain a certain object

#### Parameters

##### child

`Entity`

certain object

#### Returns

`boolean`

boolean

***

### removeFromParent()

> **removeFromParent**(): `this`

Defined in: [src/core/entities/Entity.ts:210](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L210)

Remove the current node from the parent

#### Returns

`this`

this

***

### getChildByIndex()

> **getChildByIndex**(`index`): `Entity`

Defined in: [src/core/entities/Entity.ts:224](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L224)

Search for object children and return the first child object with a matching index.

#### Parameters

##### index

`number`

matching index

#### Returns

`Entity`

child entity

***

### getChildByName()

> **getChildByName**(`name`, `loopChild?`): `any`

Defined in: [src/core/entities/Entity.ts:239](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L239)

Search for object children and return a child object with a matching name.

#### Parameters

##### name

`string`

matching name

##### loopChild?

`boolean` = `true`

Whether to traverse the children of the child object. The default value is true

#### Returns

`any`

result

***

### noticeComponents()

> **noticeComponents**(`key`, `data`): `void`

Defined in: [src/core/entities/Entity.ts:325](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L325)

#### Parameters

##### key

keyof [`IComponent`](../interfaces/IComponent.md)

##### data

`any`

#### Returns

`void`

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [src/core/entities/Entity.ts:336](https://github.com/orillusion/orillusion/blob/main/src/core/entities/Entity.ts#L336)

release current object

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Overrides

[`CEventDispatcher`](CEventDispatcher.md).[`destroy`](CEventDispatcher.md#destroy)

***

### dispatchEvent()

> **dispatchEvent**(`event`): `void`

Defined in: [src/event/CEventDispatcher.ts:24](https://github.com/orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L24)

Dispatch an event to all registered objects with a specific type of listener.

#### Parameters

##### event

[`CEvent`](CEvent.md)

#### Returns

`void`

#### Inherited from

[`CEventDispatcher`](CEventDispatcher.md).[`dispatchEvent`](CEventDispatcher.md#dispatchevent)

***

### addEventListener()

> **addEventListener**(`type`, `callback`, `thisObject`, `param?`, `priority?`): `number`

Defined in: [src/event/CEventDispatcher.ts:78](https://github.com/orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L78)

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

Defined in: [src/event/CEventDispatcher.ts:112](https://github.com/orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L112)

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

Defined in: [src/event/CEventDispatcher.ts:132](https://github.com/orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L132)

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

Defined in: [src/event/CEventDispatcher.ts:152](https://github.com/orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L152)

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

Defined in: [src/event/CEventDispatcher.ts:184](https://github.com/orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L184)

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

Defined in: [src/event/CEventDispatcher.ts:197](https://github.com/orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L197)

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
