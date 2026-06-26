[**@orillusion/core**](../README.md)

***

# Class: ForwardRendererJob

Defined in: [src/gfx/renderJob/jobs/ForwardRendererJob.ts:42](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/ForwardRendererJob.ts#L42)

Forward+ rendering job — the engine's default. Composes the
standard pass set on construction:

  ClusterLighting → [PreDepth] → HiZ → MotionVector → [GPUCull]
    → Shadow → PointShadow → Reflection → [GI] → Color
    → SceneColorPyramid → TransmissionOpaque
    → SortedTransparent (+ optional WBOIT / DDP transparent path)
    → Post → GUI(present)

Bracketed passes are gated on engine settings (`zPrePass`,
`gpuCull`, `gi.enable`, `useOIT`).

## Extends

- [`RendererJob`](RendererJob.md)

## Constructors

### Constructor

> **new ForwardRendererJob**(`view`): `ForwardRendererJob`

Defined in: [src/gfx/renderJob/jobs/ForwardRendererJob.ts:43](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/ForwardRendererJob.ts#L43)

#### Parameters

##### view

[`View3D`](View3D.md)

#### Returns

`ForwardRendererJob`

#### Overrides

[`RendererJob`](RendererJob.md).[`constructor`](RendererJob.md#constructor)

## Properties

### graph

> `readonly` **graph**: [`RenderGraph`](RenderGraph.md)

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:30](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L30)

#### Inherited from

[`RendererJob`](RendererJob.md).[`graph`](RendererJob.md#graph)

***

### occlusionSystem

> **occlusionSystem**: `OcclusionSystem`

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:31](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L31)

#### Inherited from

[`RendererJob`](RendererJob.md).[`occlusionSystem`](RendererJob.md#occlusionsystem)

***

### pauseRender

> **pauseRender**: `boolean` = `false`

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:33](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L33)

#### Inherited from

[`RendererJob`](RendererJob.md).[`pauseRender`](RendererJob.md#pauserender)

***

### pickFire

> **pickFire**: [`PickFire`](PickFire.md)

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:34](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L34)

#### Inherited from

[`RendererJob`](RendererJob.md).[`pickFire`](RendererJob.md#pickfire)

***

### renderState

> **renderState**: `boolean` = `false`

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:35](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L35)

#### Inherited from

[`RendererJob`](RendererJob.md).[`renderState`](RendererJob.md#renderstate)

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

#### Inherited from

[`RendererJob`](RendererJob.md).[`view`](RendererJob.md#view)

## Methods

### start()

> **start**(): `void`

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:53](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L53)

#### Returns

`void`

#### Inherited from

[`RendererJob`](RendererJob.md).[`start`](RendererJob.md#start)

***

### stop()

> **stop**(): `void`

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:67](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L67)

#### Returns

`void`

#### Inherited from

[`RendererJob`](RendererJob.md).[`stop`](RendererJob.md#stop)

***

### pause()

> **pause**(): `void`

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:68](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L68)

#### Returns

`void`

#### Inherited from

[`RendererJob`](RendererJob.md).[`pause`](RendererJob.md#pause)

***

### resume()

> **resume**(): `void`

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:69](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L69)

#### Returns

`void`

#### Inherited from

[`RendererJob`](RendererJob.md).[`resume`](RendererJob.md#resume)

***

### debug()

> **debug**(): `void`

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:70](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L70)

#### Returns

`void`

#### Inherited from

[`RendererJob`](RendererJob.md).[`debug`](RendererJob.md#debug)

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

#### Inherited from

[`RendererJob`](RendererJob.md).[`renderFrame`](RendererJob.md#renderframe)

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

#### Inherited from

[`RendererJob`](RendererJob.md).[`addPost`](RendererJob.md#addpost)

***

### removePost()

> **removePost**(`post`): `void`

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:95](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L95)

#### Parameters

##### post

`PostBase` \| `PostBase`[]

#### Returns

`void`

#### Inherited from

[`RendererJob`](RendererJob.md).[`removePost`](RendererJob.md#removepost)

***

### destroy()

> **destroy**(`_force?`): `void`

Defined in: [src/gfx/renderJob/jobs/RendererJob.ts:105](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L105)

#### Parameters

##### \_force?

`boolean`

#### Returns

`void`

#### Inherited from

[`RendererJob`](RendererJob.md).[`destroy`](RendererJob.md#destroy)
