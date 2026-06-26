[**@orillusion/core**](../README.md)

***

# Class: TransmissionOpaquePass

Defined in: [src/gfx/renderJob/graph/passes/TransmissionOpaquePass.ts:36](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/TransmissionOpaquePass.ts#L36)

Mutator pass that draws opaque materials with transmission
(`transmissionFactor > 0`) AFTER the SceneColorPyramid has captured
the rest of the opaque world. Mutates `_ColorBuffer` in place via a
continuation render pass against the same color attachment.

Why split: transmission materials sample the pyramid for refraction
(and, in alpha-cutout mode, alpha). If drawn alongside other opaque
materials in the main [ColorPass](ColorPass.md), their own writes would
land in the pyramid before they could sample it — at the dragon's
screen position the pyramid would store the dragon, not whatever
cloth / wall sits behind it.

Resource flow:
- read `_SceneColorPyramid` — chains topo-order strictly after
  [SceneColorPyramidPass](SceneColorPyramidPass.md).
- read `_TransparentDrawContext` — chains strictly after ColorPass
  (it's the resource ColorPass creates to share render state).
- mutator write on `_ColorBuffer` — declares the in-place write so
  downstream `_ColorBuffer` consumers route through this pass.

## Extends

- [`RenderGraphPass`](RenderGraphPass.md)

## Constructors

### Constructor

> **new TransmissionOpaquePass**(): `TransmissionOpaquePass`

#### Returns

`TransmissionOpaquePass`

#### Inherited from

[`RenderGraphPass`](RenderGraphPass.md).[`constructor`](RenderGraphPass.md#constructor)

## Properties

### materialPasses

> `readonly` **materialPasses**: readonly `PassType`[] = `[]`

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:324](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L324)

Material-side pass types consumed. Optional; defaults to none
 for pure compute / copy passes.

#### Inherited from

[`RenderGraphPass`](RenderGraphPass.md).[`materialPasses`](RenderGraphPass.md#materialpasses)

***

### enabled

> **enabled**: `boolean` = `true`

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:332](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L332)

Runtime kill switch. `graph.disablePass(name)` flips this. A
 disabled pass is treated as if it weren't in the graph: it's
 filtered out before validation + topo sort, and skipped during
 execute. Disabling a producer whose output is read by another
 enabled pass makes the next `compile()` throw
 `UnresolvedResourceError`.

#### Inherited from

[`RenderGraphPass`](RenderGraphPass.md).[`enabled`](RenderGraphPass.md#enabled)

***

### layerMask

> **layerMask**: `number` = `VisibleLayer.All`

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:347](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L347)

Which scene layers this pass consumes, as a bitmask. Default
 [VisibleLayer.All](../@orillusion/namespaces/VisibleLayer/variables/All.md) reproduces the legacy "draw every
 collected node" behaviour. Custom passes (or custom
 [RendererJob](RendererJob.md)s wiring built-in passes) override this to
 restrict the pass to specific composition layers — combined
 with the active camera's `cullingMask` at execute time via
 bitwise AND, then matched against each node's `visibleLayer`:

     (node.visibleLayer & pass.layerMask & camera.cullingMask) !== 0

 Use collectLayered from inside `execute()` to fetch the
 filtered opaque/transparent lists; it threads `layerMask` and
 the camera mask through EntityCollect.getLayerLists.

#### Inherited from

[`RenderGraphPass`](RenderGraphPass.md).[`layerMask`](RenderGraphPass.md#layermask)

***

### reads

> `readonly` **reads**: readonly `string`[]

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:353](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L353)

Names this pass reads. Populated on the first
 `RenderGraph.compile()` that processes this pass, from the
 `b.read(...)` calls inside its `setup()`. Empty frozen array
 before compile.

#### Inherited from

[`RenderGraphPass`](RenderGraphPass.md).[`reads`](RenderGraphPass.md#reads)

***

### writes

> `readonly` **writes**: readonly `string`[]

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:358](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L358)

Names this pass writes (creator + mutator combined). Populated
 on the first `RenderGraph.compile()` from the `b.write(...)`
 calls inside `setup()`. Empty frozen array before compile.

#### Inherited from

[`RenderGraphPass`](RenderGraphPass.md).[`writes`](RenderGraphPass.md#writes)

***

### creates

> `readonly` **creates**: readonly `string`[]

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:363](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L363)

Subset of `writes` for which this pass was the creator (called
 `b.write(name, factory)`, not `b.write(name)`). The validator's
 single-creator rule operates on this set.

#### Inherited from

[`RenderGraphPass`](RenderGraphPass.md).[`creates`](RenderGraphPass.md#creates)

***

### dependencies?

> `optional` **dependencies?**: `ReadonlySet`\<`string`\>

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:377](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L377)

Explicit ordering dependencies on other pass names, set either
 from `setup()` via `b.dependsOn(name)` or by direct assignment
 before the next compile. Each entry adds a topo-sort edge
 `<name> → this`, independent of any resource edge. Use for
 side-effect dependencies the graph can't see (indirect buffers,
 off-screen RTs consumed via materials, etc.).

 Beyond the edge, an entry here also positions this pass in the
 compiled schedule: the effective scheduling key collapses to
 "just after the latest dep", so a late-added pass with explicit
 dependencies runs next to its dep instead of trailing at the
 end of the queue. See [topoSort](../functions/topoSort.md) for the full rule.

#### Inherited from

[`RenderGraphPass`](RenderGraphPass.md).[`dependencies`](RenderGraphPass.md#dependencies)

***

### name

> `readonly` **name**: `"TransmissionOpaquePass"` = `'TransmissionOpaquePass'`

Defined in: [src/gfx/renderJob/graph/passes/TransmissionOpaquePass.ts:37](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/TransmissionOpaquePass.ts#L37)

Unique pass identifier. Used as the graph-node key and in
 error messages — prefer PascalCase ending in `Pass`
 (e.g. `ShadowPass`, `ColorPass`).

#### Overrides

[`RenderGraphPass`](RenderGraphPass.md).[`name`](RenderGraphPass.md#name)

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

[`RenderGraphPass`](RenderGraphPass.md).[`dispatchEvent`](RenderGraphPass.md#dispatchevent)

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

[`RenderGraphPass`](RenderGraphPass.md).[`addEventListener`](RenderGraphPass.md#addeventlistener)

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

[`RenderGraphPass`](RenderGraphPass.md).[`removeEventListener`](RenderGraphPass.md#removeeventlistener)

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

[`RenderGraphPass`](RenderGraphPass.md).[`removeEventListenerAt`](RenderGraphPass.md#removeeventlistenerat)

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

[`RenderGraphPass`](RenderGraphPass.md).[`removeAllEventListener`](RenderGraphPass.md#removealleventlistener)

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

[`RenderGraphPass`](RenderGraphPass.md).[`containEventListener`](RenderGraphPass.md#containeventlistener)

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

[`RenderGraphPass`](RenderGraphPass.md).[`hasEventListener`](RenderGraphPass.md#haseventlistener)

***

### destroy()

> **destroy**(): `void`

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:397](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L397)

Optional teardown hook called from `graph.destroy()` — release
 orphan Object3Ds / view quads / device resources that the pass
 owns directly.

#### Returns

`void`

#### Inherited from

[`RenderGraphPass`](RenderGraphPass.md).[`destroy`](RenderGraphPass.md#destroy)

***

### setup()

> **setup**(`b`): `void`

Defined in: [src/gfx/renderJob/graph/passes/TransmissionOpaquePass.ts:39](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/TransmissionOpaquePass.ts#L39)

Allocate GPU resources, declare graph-level dependencies via
 `b.read` / `b.write`. Called from `RenderGraph.compile()` —
 setup is deferred from `add()` so `add()` call order doesn't
 constrain resource-dependency order. Forward references (reads
 to a resource a later-added pass creates) are resolved through
 a multi-round retry loop in `compile()`.

#### Parameters

##### b

[`RenderGraphBuilder`](../interfaces/RenderGraphBuilder.md)

#### Returns

`void`

#### Overrides

[`RenderGraphPass`](RenderGraphPass.md).[`setup`](RenderGraphPass.md#setup)

***

### execute()

> **execute**(`ctx`): `void`

Defined in: [src/gfx/renderJob/graph/passes/TransmissionOpaquePass.ts:51](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/TransmissionOpaquePass.ts#L51)

Execute the pass for one frame. Implementations build command
 encoders via `ctx.view.engine3D.context3D.gpuContext`, read
 inputs via `ctx.get('<name>')`, and submit GPU work.

#### Parameters

##### ctx

[`RenderGraphPassContext`](../interfaces/RenderGraphPassContext.md)

#### Returns

`void`

#### Overrides

[`RenderGraphPass`](RenderGraphPass.md).[`execute`](RenderGraphPass.md#execute)
