[**@orillusion/core**](../README.md)

***

# Interface: TransparentDrawContext

Defined in: [src/gfx/renderJob/graph/passes/\_transparentDraw.ts:95](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/_transparentDraw.ts#L95)

Shared render state owned by ColorPass (which creates the underlying
RTFrames in setup) and consumed by the transparent continuation
passes. The `renderContext` carries the active command encoder so
the loadOp='load' chain between halves stays coherent — closing one
half's render pass and opening the next must happen in order.

## Properties

### rendererPassState

> `readonly` **rendererPassState**: `RendererPassState`

Defined in: [src/gfx/renderJob/graph/passes/\_transparentDraw.ts:99](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/_transparentDraw.ts#L99)

Pass state for the main color attachment (depthLoadOp='clear',
 rt loadOp='clear'). Used for the opaque half and for the
 transparent half's per-node drawing.

***

### splitRendererPassState

> `readonly` **splitRendererPassState**: `RendererPassState`

Defined in: [src/gfx/renderJob/graph/passes/\_transparentDraw.ts:102](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/_transparentDraw.ts#L102)

Pass state with loadOp='load' / depthLoadOp='load' — used by
 Graphic3D overlays after any earlier render-pass split.

***

### renderContext

> `readonly` **renderContext**: [`RenderContext`](../classes/RenderContext.md)

Defined in: [src/gfx/renderJob/graph/passes/\_transparentDraw.ts:105](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/_transparentDraw.ts#L105)

Encoder host. Same instance across halves so beginOpaque /
 beginTransparent / endRenderPass interleave correctly.
