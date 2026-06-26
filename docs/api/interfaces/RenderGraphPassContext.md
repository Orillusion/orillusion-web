[**@orillusion/core**](../README.md)

***

# Interface: RenderGraphPassContext

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:259](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L259)

Runtime context handed to [RenderGraphPass.execute](../classes/RenderGraphPass.md#execute) once per
frame. `get<T>(name)` resolves a named handle through the graph
pool; `graph` is exposed so passes can look up sibling passes for
RPC-style calls (e.g. transparent passes calling into ColorPass's
public render methods).

## Properties

### view

> `readonly` **view**: [`View3D`](../classes/View3D.md)

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:260](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L260)

***

### occlusion

> `readonly` **occlusion**: `OcclusionSystem`

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:261](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L261)

***

### graph

> `readonly` **graph**: [`RenderGraph`](../classes/RenderGraph.md)

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:262](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L262)

***

### frameIndex

> `readonly` **frameIndex**: `number`

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:263](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L263)

## Methods

### get()

> **get**\<`T`\>(`name`): `T`

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:266](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L266)

Resolve a named resource through the graph pool.

#### Type Parameters

##### T

`T`

#### Parameters

##### name

`string`

#### Returns

`T`

***

### getTexture()

> **getTexture**(`name`): `RenderTexture`

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:273](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L273)

Resolve a RenderTexture by name. Returns the pool-assigned
 physical wrapper for transient resources or the imported texture
 for resources registered via `b.importExternalTexture`. Throws if
 `name` is not a texture kind (validator should have caught the
 mismatch at compile; this is the defensive runtime check).

#### Parameters

##### name

`string` \| [`TextureHandle`](TextureHandle.md)

#### Returns

`RenderTexture`

***

### getBuffer()

> **getBuffer**(`name`): `GPUBufferBase`

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:277](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L277)

Resolve a GPUBufferBase by name. Symmetric with
 [getTexture](#gettexture).

#### Parameters

##### name

`string` \| [`BufferHandle`](BufferHandle.md)

#### Returns

`GPUBufferBase`

***

### getRenderTarget()

> **getRenderTarget**(`name`): [`RenderGraphRenderTarget`](../classes/RenderGraphRenderTarget.md)

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:283](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L283)

Resolve a [RenderGraphRenderTarget](../classes/RenderGraphRenderTarget.md) by name. Throws if
 the handle exists but is not a render target (validator should
 have caught it at compile, this is the defensive runtime
 check).

#### Parameters

##### name

`string`

#### Returns

[`RenderGraphRenderTarget`](../classes/RenderGraphRenderTarget.md)

***

### beginRenderPass()

> **beginRenderPass**(`handle`): `GPURenderPassEncoder`

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:288](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L288)

Open the underlying `GPURenderPassEncoder` for a handle
 returned from `b.useRenderTarget(...)`. The encoder lifetime
 extends to the matching [endRenderPass](#endrenderpass).

#### Parameters

##### handle

[`RenderGraphRenderPass`](../classes/RenderGraphRenderPass.md)

#### Returns

`GPURenderPassEncoder`

***

### endRenderPass()

> **endRenderPass**(`handle`): `void`

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:292](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L292)

Close the render pass encoder + submit the per-pass command
 buffer. Idempotent on already-ended handles.

#### Parameters

##### handle

[`RenderGraphRenderPass`](../classes/RenderGraphRenderPass.md)

#### Returns

`void`

***

### beginComputePass()

> **beginComputePass**(`handle`): `GPUComputePassEncoder`

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:296](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L296)

Open the underlying `GPUComputePassEncoder` for a compute
 handle. Pipeline is lazily built on the first call.

#### Parameters

##### handle

[`RenderGraphComputePass`](../classes/RenderGraphComputePass.md)

#### Returns

`GPUComputePassEncoder`

***

### endComputePass()

> **endComputePass**(`handle`): `void`

Defined in: [src/gfx/renderJob/graph/RenderGraphPass.ts:300](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphPass.ts#L300)

Close the compute pass encoder + submit the per-pass command
 buffer.

#### Parameters

##### handle

[`RenderGraphComputePass`](../classes/RenderGraphComputePass.md)

#### Returns

`void`
