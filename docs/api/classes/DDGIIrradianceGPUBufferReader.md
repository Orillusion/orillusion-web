[**@orillusion/core**](../README.md)

***

# Class: DDGIIrradianceGPUBufferReader

Defined in: [src/gfx/renderJob/passRenderer/ddgi/DDGIIrradianceGPUBufferReader.ts:17](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/ddgi/DDGIIrradianceGPUBufferReader.ts#L17)

Reads the DDGI probe irradiance/depth octahedral maps back from the GPU
into CPU Float32Arrays. Listens for the [GIPass](GIPass.md) render-complete
event, copies the color and depth textures into mappable buffers, and
dispatches [IrradianceDataReaderCompleteEvent](../variables/IrradianceDataReaderCompleteEvent.md) once both arrays
are populated.

## Extends

- [`CEventDispatcher`](CEventDispatcher.md)

## Constructors

### Constructor

> **new DDGIIrradianceGPUBufferReader**(): `DDGIIrradianceGPUBufferReader`

#### Returns

`DDGIIrradianceGPUBufferReader`

#### Inherited from

[`CEventDispatcher`](CEventDispatcher.md).[`constructor`](CEventDispatcher.md#constructor)

## Properties

### opDepthArray

> **opDepthArray**: `Float32Array`

Defined in: [src/gfx/renderJob/passRenderer/ddgi/DDGIIrradianceGPUBufferReader.ts:26](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/ddgi/DDGIIrradianceGPUBufferReader.ts#L26)

CPU copy of the probe depth octahedral map.

***

### opColorArray

> **opColorArray**: `Float32Array`

Defined in: [src/gfx/renderJob/passRenderer/ddgi/DDGIIrradianceGPUBufferReader.ts:28](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/ddgi/DDGIIrradianceGPUBufferReader.ts#L28)

CPU copy of the probe irradiance (color) octahedral map.

***

### \_boundCtx

> **\_boundCtx**: [`Context3D`](Context3D.md) = `null`

Defined in: [src/gfx/renderJob/passRenderer/ddgi/DDGIIrradianceGPUBufferReader.ts:30](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/ddgi/DDGIIrradianceGPUBufferReader.ts#L30)

Context3D this reader's GPU buffers are bound to.

## Methods

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

### destroy()

> **destroy**(): `void`

Defined in: [src/event/CEventDispatcher.ts:54](https://github.com/orillusion/orillusion/blob/main/src/event/CEventDispatcher.ts#L54)

release all registered event.

#### Returns

`void`

#### Inherited from

[`CEventDispatcher`](CEventDispatcher.md).[`destroy`](CEventDispatcher.md#destroy)

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

***

### initReader()

> **initReader**(`ctx`, `probeRender`, `colorMap`, `depthMap`): `void`

Defined in: [src/gfx/renderJob/passRenderer/ddgi/DDGIIrradianceGPUBufferReader.ts:33](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/ddgi/DDGIIrradianceGPUBufferReader.ts#L33)

Allocate the readback buffers and subscribe to the GI pass's render-complete event.

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

##### probeRender

[`GIPass`](GIPass.md)

##### colorMap

`RenderTexture`

##### depthMap

`RenderTexture`

#### Returns

`void`
