[**@orillusion/core**](../README.md)

***

# Class: RenderGraphRenderPass

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:95](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L95)

Handle for "open a render pass driven by a single owned pipeline".
The render-side analog of [RenderGraphComputePass](RenderGraphComputePass.md): owns a
GPURenderPipeline + bind-group layouts (built lazily on first
[begin](#begin)) and the per-call encoder lifecycle. Encoder lifecycle
itself is delegated to the bound [RenderGraphRenderTarget](RenderGraphRenderTarget.md) so
the load-op resolution + RendererPassState caching live on
the target where they belong.

Created via `b.createRenderPass(name, target, desc, openOpts?)` from
inside another pass's `setup()`. Pass authors typically build several
of these to compose a custom rendering feature (e.g. a depth-only
pre-pass + a fullscreen lighting resolve) without falling back to the
heavyweight material-driven pipeline.

Scene passes that draw many heterogeneous materials per frame (the
canonical [ColorPass](ColorPass.md)-style flow) skip this class and call
`target.beginPass(ctx, opts)` directly — they don't have a single
pipeline to own.

## Constructors

### Constructor

> **new RenderGraphRenderPass**(`name`, `target`, `desc`, `openOptions?`): `RenderGraphRenderPass`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:109](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L109)

#### Parameters

##### name

`string`

##### target

[`RenderGraphRenderTarget`](RenderGraphRenderTarget.md)

##### desc

[`RenderPipelineDesc`](../interfaces/RenderPipelineDesc.md)

##### openOptions?

[`BeginPassOptions`](../interfaces/BeginPassOptions.md) = `{}`

#### Returns

`RenderGraphRenderPass`

## Properties

### name

> `readonly` **name**: `string`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:96](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L96)

***

### target

> `readonly` **target**: [`RenderGraphRenderTarget`](RenderGraphRenderTarget.md)

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:97](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L97)

***

### desc

> `readonly` **desc**: `Readonly`\<[`RenderPipelineDesc`](../interfaces/RenderPipelineDesc.md)\>

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:98](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L98)

***

### openOptions

> `readonly` **openOptions**: `Readonly`\<[`BeginPassOptions`](../interfaces/BeginPassOptions.md)\>

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:99](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L99)

***

### pipeline

> **pipeline**: `GPURenderPipeline` = `null`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:101](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L101)

***

### bindGroupLayouts

> **bindGroupLayouts**: `GPUBindGroupLayout`[] = `null`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:102](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L102)

***

### encoder

> **encoder**: `GPURenderPassEncoder` = `null`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:105](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L105)

Runtime fields — valid between [begin](#begin) and [end](#end).

***

### command

> **command**: `GPUCommandEncoder` = `null`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:106](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L106)

***

### passState

> **passState**: `RendererPassState` = `null`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:107](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L107)

## Methods

### begin()

> **begin**(`ctx`): `GPURenderPassEncoder`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:128](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L128)

Lazily build the pipeline (first call), open a fresh command +
render-pass encoder on the bound target with the resolved
load-op combination, bind the pipeline, and return the encoder.
Pass authors then call [draw](#draw) (or drive the returned
encoder directly) before invoking [end](#end).

#### Parameters

##### ctx

[`RenderGraphPassContext`](../interfaces/RenderGraphPassContext.md)

#### Returns

`GPURenderPassEncoder`

***

### draw()

> **draw**(`call`): `void`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:148](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L148)

Convenience: bind groups + (optional) vertex/index buffers +
dispatch one draw or drawIndexed call. Equivalent to manually
iterating `setBindGroup` / `setVertexBuffer` / `setIndexBuffer`
and calling the matching `draw*` on [encoder](#encoder).

#### Parameters

##### call

[`RenderDrawCall`](../interfaces/RenderDrawCall.md)

#### Returns

`void`

***

### end()

> **end**(`ctx`): `void`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:193](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L193)

Close the render-pass encoder and submit the per-pass command
buffer. Clears runtime fields so a stale handle from the previous
frame surfaces as a clear error rather than encoder misuse.

#### Parameters

##### ctx

[`RenderGraphPassContext`](../interfaces/RenderGraphPassContext.md)

#### Returns

`void`
