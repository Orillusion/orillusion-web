[**@orillusion/core**](../README.md)

***

# Class: Context3D

Defined in: [src/gfx/graphics/webGpu/Context3D.ts:21](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/Context3D.ts#L21)

Per-instance WebGPU device/context. Each Engine3D instance owns its
own Context3D with a dedicated GPUAdapter, GPUDevice, canvas and
GPUCanvasContext. Devices are fully isolated — no GPU resource
(texture, buffer, pipeline, layout) can be shared across contexts.

Every GPU-bearing object in the scene graph (Texture, Material,
Geometry, GPUBuffer, RenderShaderPass, ComputeShader, ...) binds to
exactly one Context3D on first render and holds it in `_boundCtx`.
Attempting to render the same object under a different Context3D
throws — users must `.clone()` CPU data to share across engines.

## Extends

- [`CEventDispatcher`](CEventDispatcher.md)

## Constructors

### Constructor

> **new Context3D**(): `Context3D`

#### Returns

`Context3D`

#### Inherited from

[`CEventDispatcher`](CEventDispatcher.md).[`constructor`](CEventDispatcher.md#constructor)

## Properties

### DEVICE\_LOST

> `readonly` `static` **DEVICE\_LOST**: `string` = `'deviceLost'`

Defined in: [src/gfx/graphics/webGpu/Context3D.ts:72](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/Context3D.ts#L72)

Event type dispatched on this Context3D when `device.lost` fires.
 `event.data` is the `GPUDeviceLostInfo` (reason + message).

***

### aspect

> **aspect**: `number`

Defined in: [src/gfx/graphics/webGpu/Context3D.ts:23](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/Context3D.ts#L23)

Canvas aspect ratio (`windowWidth / windowHeight`), recomputed on resize.

***

### presentationSize

> **presentationSize**: `number`[]

Defined in: [src/gfx/graphics/webGpu/Context3D.ts:25](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/Context3D.ts#L25)

Drawable surface size in physical pixels as `[width, height]`.

***

### canvas

> **canvas**: `HTMLCanvasElement`

Defined in: [src/gfx/graphics/webGpu/Context3D.ts:27](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/Context3D.ts#L27)

The HTML canvas element this context renders into.

***

### context

> **context**: `GPUCanvasContext`

Defined in: [src/gfx/graphics/webGpu/Context3D.ts:29](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/Context3D.ts#L29)

The WebGPU canvas context obtained from `canvas.getContext('webgpu')`.

***

### windowWidth

> **windowWidth**: `number`

Defined in: [src/gfx/graphics/webGpu/Context3D.ts:31](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/Context3D.ts#L31)

Canvas backing-store width in physical pixels (clientWidth * pixelRatio).

***

### windowHeight

> **windowHeight**: `number`

Defined in: [src/gfx/graphics/webGpu/Context3D.ts:33](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/Context3D.ts#L33)

Canvas backing-store height in physical pixels (clientHeight * pixelRatio).

***

### canvasConfig

> **canvasConfig**: [`CanvasConfig`](../type-aliases/CanvasConfig.md)

Defined in: [src/gfx/graphics/webGpu/Context3D.ts:35](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/Context3D.ts#L35)

The canvas/configuration options supplied to `init()`.

***

### adapter

> **adapter**: `GPUAdapter`

Defined in: [src/gfx/graphics/webGpu/Context3D.ts:42](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/Context3D.ts#L42)

The GPUAdapter this context requested during `init()`.

***

### device

> **device**: `GPUDevice`

Defined in: [src/gfx/graphics/webGpu/Context3D.ts:44](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/Context3D.ts#L44)

The GPUDevice owned by this context; the root handle for all GPU work.

***

### presentationFormat

> **presentationFormat**: `GPUTextureFormat`

Defined in: [src/gfx/graphics/webGpu/Context3D.ts:48](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/Context3D.ts#L48)

The format pipelines target — the sRGB view variant, so the
 GPU does the linear→sRGB encode at write time. Must match the
 view created in `GPUContext.beginRenderPass`.

***

### engine

> **engine**: [`Engine3D`](Engine3D.md) = `null`

Defined in: [src/gfx/graphics/webGpu/Context3D.ts:58](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/Context3D.ts#L58)

Back-reference to the owning Engine3D. Populated by `new Engine3D()`
 immediately after constructing this Context3D. Used by per-context
 subsystems (GlobalUniformGroup, RenderShaderPass, ...) to read the
 engine's instance `setting` without needing a view/camera handle.

***

### lost

> **lost**: `boolean` = `false`

Defined in: [src/gfx/graphics/webGpu/Context3D.ts:66](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/Context3D.ts#L66)

Set to true when the underlying GPUDevice has been lost (driver reset,
 device unplug, tab/iframe suspended, explicit `device.destroy()`...).
 Once lost, the device is permanently unusable — all `_boundCtx`
 resources on this Context3D are stale. The owning Engine3D stops
 scheduling render frames. App code should listen for
 `Context3D.DEVICE_LOST` and call `Engine3D.init()` again to recover.

***

### lostInfo

> **lostInfo**: `GPUDeviceLostInfo` = `null`

Defined in: [src/gfx/graphics/webGpu/Context3D.ts:68](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/Context3D.ts#L68)

The `GPUDeviceLostInfo` captured when the device was lost, else null.

## Accessors

### gpuContext

#### Get Signature

> **get** **gpuContext**(): [`GPUContextInstance`](GPUContextInstance.md)

Defined in: [src/gfx/graphics/webGpu/Context3D.ts:85](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/Context3D.ts#L85)

The per-Context3D GPU command/pipeline state, created lazily on first
access. Requires GPUContext.ts to have been imported so its factory is
registered; throws otherwise.

##### Returns

[`GPUContextInstance`](GPUContextInstance.md)

the GPUContextInstance bound to this Context3D.

***

### pixelRatio

#### Get Signature

> **get** **pixelRatio**(): `number`

Defined in: [src/gfx/graphics/webGpu/Context3D.ts:94](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/Context3D.ts#L94)

Device pixel ratio used to scale the canvas backing store (clamped to 2.0).

##### Returns

`number`

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

### init()

> **init**(`canvasConfig?`): `Promise`\<`boolean`\>

Defined in: [src/gfx/graphics/webGpu/Context3D.ts:106](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/Context3D.ts#L106)

Initialize the WebGPU adapter, device, canvas and swapchain for this
context, wire up uncaptured-error and device-lost handlers, and start
observing the canvas for resize.

#### Parameters

##### canvasConfig?

[`CanvasConfig`](../type-aliases/CanvasConfig.md)

optional canvas/configuration; when omitted (or
       without a `canvas`), a full-screen canvas is created and owned
       by this context.

#### Returns

`Promise`\<`boolean`\>

a promise resolving to true once initialization completes.

***

### dispose()

> **dispose**(): `void`

Defined in: [src/gfx/graphics/webGpu/Context3D.ts:279](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/Context3D.ts#L279)

Release everything this context owns: the ResizeObserver, the
GPUCanvasContext configuration, the GPUDevice (frees the adapter
slot so the next Engine3D.init() can succeed without exhausting
the browser's per-origin device limit), and any canvas we created
ourselves. Safe to call more than once; idempotent after first run.

After dispose(), `this.lost` flips to true via the device.lost
promise resolver installed in init(); the shared render loop
already skips lost contexts.

#### Returns

`void`

***

### updateSize()

> **updateSize**(): `void`

Defined in: [src/gfx/graphics/webGpu/Context3D.ts:310](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/Context3D.ts#L310)

Recompute the pixel ratio and canvas backing-store size from the
current client size. When the size changes, updates `windowWidth`,
`windowHeight`, `presentationSize`, `aspect` and dispatches a RESIZE event.

#### Returns

`void`

***

### cache()

> **cache**\<`T`\>(`key`, `factory`): `T`

Defined in: [src/gfx/graphics/webGpu/Context3D.ts:337](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/Context3D.ts#L337)

#### Type Parameters

##### T

`T`

#### Parameters

##### key

`unknown`

##### factory

() => `T`

#### Returns

`T`
