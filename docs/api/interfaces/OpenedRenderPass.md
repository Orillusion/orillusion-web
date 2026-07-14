[**@orillusion/core**](../README.md)

***

# Interface: OpenedRenderPass

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:49](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L49)

Live handle returned by [RenderGraphRenderTarget.beginPass](../classes/RenderGraphRenderTarget.md#beginpass).
Carries the WebGPU encoder + the resolved RendererPassState
for the open invocation. Pass to [RenderGraphRenderTarget.endPass](../classes/RenderGraphRenderTarget.md#endpass)
to close the pass + submit the per-call command buffer.

## Properties

### encoder

> **encoder**: `GPURenderPassEncoder`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:50](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L50)

***

### command

> **command**: `GPUCommandEncoder`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:51](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L51)

***

### passState

> **passState**: `RendererPassState`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:52](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L52)
