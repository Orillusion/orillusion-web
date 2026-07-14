[**@orillusion/core**](../README.md)

***

# Class: RendererJob

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:29](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L29)

The base render job for one View3D. Owns:

- the per-view [RenderGraph](RenderGraph.md) — *empty* by default; subclasses
  compose pass sets via `this.graph.add(...)`;
  - lifecycle (`start`/`stop`/`pause`/`resume`) and frame driving via
  `renderFrame()` (which invokes `graph.execute(...)`);
- the public `addPost`/`removePost` entry points used by
  `PostProcessingComponent`, which route into the graph's `PostPass`
  when one is registered.

`RendererJob` itself does NOT register any passes — that's the job
of subclasses like [ForwardRendererJob](ForwardRendererJob.md), or of user code
extending `RendererJob` directly. This keeps the base class
pipeline-agnostic so deferred / VR / custom flows can share it.

## Extended by

- [`DeferredRendererJob`](DeferredRendererJob.md)
- [`ForwardRendererJob`](ForwardRendererJob.md)

## Constructors

### Constructor

> **new RendererJob**(`view`): `RendererJob`

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:40](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L40)

#### Parameters

##### view

[`View3D`](View3D.md)

#### Returns

`RendererJob`

## Properties

### graph

> `readonly` **graph**: [`RenderGraph`](RenderGraph.md)

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:30](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L30)

***

### occlusionSystem

> **occlusionSystem**: `OcclusionSystem`

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:31](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L31)

***

### pauseRender

> **pauseRender**: `boolean` = `false`

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:33](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L33)

***

### pickFire

> **pickFire**: [`PickFire`](PickFire.md)

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:34](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L34)

***

### renderState

> **renderState**: `boolean` = `false`

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:35](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L35)

## Accessors

### view

#### Get Signature

> **get** **view**(): [`View3D`](View3D.md)

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:46](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L46)

##### Returns

[`View3D`](View3D.md)

#### Set Signature

> **set** **view**(`view`): `void`

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:49](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L49)

##### Parameters

###### view

[`View3D`](View3D.md)

##### Returns

`void`

## Methods

### start()

> **start**(): `void`

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:53](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L53)

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:67](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L67)

#### Returns

`void`

***

### pause()

> **pause**(): `void`

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:68](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L68)

#### Returns

`void`

***

### resume()

> **resume**(): `void`

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:69](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L69)

#### Returns

`void`

***

### debug()

> **debug**(): `void`

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:70](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L70)

#### Returns

`void`

***

### renderFrame()

> **renderFrame**(): `void`

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:76](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L76)

Drive one frame through the graph. Pre-graph bookkeeping that
 sits outside any pass (camera, light / reflection entries,
 occlusion snapshot) runs inline; everything else is owned by
 passes registered into `this.graph`.

#### Returns

`void`

***

### addPost()

> **addPost**(`post`): `PostBase` \| `PostBase`[]

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:89](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L89)

Attach a post-processing effect. Routes into the graph's
 PostPass; if no PostPass is in the graph (e.g. a custom job
 without a post chain), this is a no-op.

#### Parameters

##### post

`PostBase`

#### Returns

`PostBase` \| `PostBase`[]

***

### removePost()

> **removePost**(`post`): `void`

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:95](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L95)

#### Parameters

##### post

`PostBase` \| `PostBase`[]

#### Returns

`void`

***

### destroy()

> **destroy**(`_force?`): `void`

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:105](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L105)

#### Parameters

##### \_force?

`boolean`

#### Returns

`void`
