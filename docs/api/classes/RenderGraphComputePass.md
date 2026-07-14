[**@orillusion/core**](../README.md)

***

# Class: RenderGraphComputePass

Defined in: [src/gfx/renderJob/graph/RenderGraphComputePass.ts:47](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphComputePass.ts#L47)

Handle for "open a compute pass". Owns the pipeline + bind-group
layouts (built lazily on first [begin](#begin)) and the per-call
encoder lifecycle.

Storage texture / buffer dependencies are still declared through the
standard `b.read` / `b.write` builder API — this handle is strictly
the encoder + pipeline wrapper. Pass authors that need finer control
can call `setPipeline` / `setBindGroup` / `dispatchWorkgroups`
directly on the returned encoder.

## Constructors

### Constructor

> **new RenderGraphComputePass**(`name`, `desc`): `RenderGraphComputePass`

Defined in: [src/gfx/renderJob/graph/RenderGraphComputePass.ts:58](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphComputePass.ts#L58)

#### Parameters

##### name

`string`

##### desc

[`ComputePipelineDesc`](../interfaces/ComputePipelineDesc.md)

#### Returns

`RenderGraphComputePass`

## Properties

### name

> `readonly` **name**: `string`

Defined in: [src/gfx/renderJob/graph/RenderGraphComputePass.ts:48](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphComputePass.ts#L48)

***

### desc

> `readonly` **desc**: `Readonly`\<[`ComputePipelineDesc`](../interfaces/ComputePipelineDesc.md)\>

Defined in: [src/gfx/renderJob/graph/RenderGraphComputePass.ts:49](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphComputePass.ts#L49)

***

### pipeline

> **pipeline**: `GPUComputePipeline` = `null`

Defined in: [src/gfx/renderJob/graph/RenderGraphComputePass.ts:51](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphComputePass.ts#L51)

***

### bindGroupLayouts

> **bindGroupLayouts**: `GPUBindGroupLayout`[] = `null`

Defined in: [src/gfx/renderJob/graph/RenderGraphComputePass.ts:52](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphComputePass.ts#L52)

***

### encoder

> **encoder**: `GPUComputePassEncoder` = `null`

Defined in: [src/gfx/renderJob/graph/RenderGraphComputePass.ts:55](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphComputePass.ts#L55)

Runtime fields — valid between [begin](#begin) and [end](#end).

***

### command

> **command**: `GPUCommandEncoder` = `null`

Defined in: [src/gfx/renderJob/graph/RenderGraphComputePass.ts:56](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphComputePass.ts#L56)

## Methods

### begin()

> **begin**(`ctx`): `GPUComputePassEncoder`

Defined in: [src/gfx/renderJob/graph/RenderGraphComputePass.ts:69](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphComputePass.ts#L69)

Open a fresh command encoder + compute pass encoder. Lazily
builds the pipeline on first call. The pipeline survives across
frames; layouts can be reused for bind-group creation by pass
authors via [bindGroupLayouts](#bindgrouplayouts).

#### Parameters

##### ctx

[`RenderGraphPassContext`](../interfaces/RenderGraphPassContext.md)

#### Returns

`GPUComputePassEncoder`

***

### dispatch()

> **dispatch**(`call`): `void`

Defined in: [src/gfx/renderJob/graph/RenderGraphComputePass.ts:88](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphComputePass.ts#L88)

Convenience: bind the provided bind groups (one per layout
index) and dispatch. Equivalent to manually iterating
`setBindGroup` + calling `dispatchWorkgroups` on
[encoder](#encoder).

#### Parameters

##### call

[`ComputeDispatchCall`](../interfaces/ComputeDispatchCall.md)

#### Returns

`void`

***

### end()

> **end**(`ctx`): `void`

Defined in: [src/gfx/renderJob/graph/RenderGraphComputePass.ts:98](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphComputePass.ts#L98)

#### Parameters

##### ctx

[`RenderGraphPassContext`](../interfaces/RenderGraphPassContext.md)

#### Returns

`void`
