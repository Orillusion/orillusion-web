[**@orillusion/core**](../README.md)

***

# Interface: BeginPassOptions

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:25](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L25)

Per-call open options for [RenderGraphRenderTarget.beginPass](../classes/RenderGraphRenderTarget.md#beginpass).

Any field left `undefined` (or any array slot left `undefined`)
defaults via the auto-derive rule:

  - first writer of the RT this frame ⇒ `'clear'`
  - subsequent writer of the same RT ⇒ `'load'`

Callers explicitly set a field when they need to override the
default — typical case is a mid-frame ClearDepth that wants
`depthLoadOp: 'clear'` even though it isn't the first writer.

## Properties

### colorLoadOps?

> `optional` **colorLoadOps?**: `GPULoadOp`[]

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:29](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L29)

Per-color-attachment loadOp. Length matches the RT's color
 count. Each slot independently auto-derives when left
 `undefined`.

***

### colorClearValues?

> `optional` **colorClearValues?**: `GPUColor`[]

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:32](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L32)

Optional override of per-attachment clearValue (defaults to the
 RT descriptor's clearValue).

***

### depthLoadOp?

> `optional` **depthLoadOp?**: `GPULoadOp`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:33](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L33)

***

### depthClearValue?

> `optional` **depthClearValue?**: `number`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:34](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L34)

***

### stencilLoadOp?

> `optional` **stencilLoadOp?**: `GPULoadOp`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:35](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L35)

***

### label?

> `optional` **label?**: `string`

Defined in: [src/gfx/renderJob/graph/RenderGraphRenderTarget.ts:38](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphRenderTarget.ts#L38)

Suffix appended to the underlying command encoder + render pass
 for devtools. Defaults to the target name.
