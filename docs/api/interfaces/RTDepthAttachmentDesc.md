[**@orillusion/core**](../README.md)

***

# Interface: RTDepthAttachmentDesc

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:83](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L83)

Depth (+ optional stencil) attachment description.

## Properties

### format

> **format**: `GPUTextureFormat`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:84](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L84)

***

### depthClearValue?

> `optional` **depthClearValue?**: `number`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:86](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L86)

Default 1.0.

***

### depthStoreOp?

> `optional` **depthStoreOp?**: `GPUStoreOp`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:88](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L88)

Default `'store'`.

***

### stencilLoadOp?

> `optional` **stencilLoadOp?**: `GPULoadOp`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:89](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L89)

***

### stencilStoreOp?

> `optional` **stencilStoreOp?**: `GPUStoreOp`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:90](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L90)

***

### texture?

> `optional` **texture?**: `RenderTexture`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:91](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L91)
