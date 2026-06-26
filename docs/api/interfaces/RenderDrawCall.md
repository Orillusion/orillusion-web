[**@orillusion/core**](../README.md)

***

# Interface: RenderDrawCall

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:64](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L64)

Optional convenience payload for [RenderGraphRenderPass.draw](../classes/RenderGraphRenderPass.md#draw).
Pass authors that need finer control (multiple draws per begin, custom
scissor/viewport, manual encoder calls) can drive
[RenderGraphRenderPass.encoder](../classes/RenderGraphRenderPass.md#encoder) directly instead.

## Properties

### bindGroups

> **bindGroups**: `GPUBindGroup`[]

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:65](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L65)

***

### vertexBuffers?

> `optional` **vertexBuffers?**: `GPUBuffer`[]

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:66](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L66)

***

### indexBuffer?

> `optional` **indexBuffer?**: `object`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:67](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L67)

#### buffer

> **buffer**: `GPUBuffer`

#### format

> **format**: `GPUIndexFormat`

#### offset?

> `optional` **offset?**: `number`

#### size?

> `optional` **size?**: `number`

***

### draw

> **draw**: \{ `kind`: `"draw"`; `vertexCount`: `number`; `instanceCount?`: `number`; `firstVertex?`: `number`; `firstInstance?`: `number`; \} \| \{ `kind`: `"drawIndexed"`; `indexCount`: `number`; `instanceCount?`: `number`; `firstIndex?`: `number`; `baseVertex?`: `number`; `firstInstance?`: `number`; \}

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderPass.ts:68](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderPass.ts#L68)
