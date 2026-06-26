[**@orillusion/core**](../README.md)

***

# Function: drawNodes()

> **drawNodes**(`view`, `renderContext`, `passState`, `nodes`, `cluster`, `options?`): `void`

Defined in: [src/gfx/renderJob/graph/passes/\_transparentDraw.ts:134](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/_transparentDraw.ts#L134)

Per-node draw loop. Walks the slice `[render.drawOpMin, drawOpMax)`,
applies optional oit / transmission partition filters inline, and
dispatches `node.renderPass` for each surviving node. Used by:

- ColorPass (opaque half, `transmissionFilter='exclude'`)
- TransmissionOpaquePass (continuation, `transmissionFilter='only'`)
- SortedTransparentPass (transparent half, `oitFilter` set by caller)

## Parameters

### view

[`View3D`](../classes/View3D.md)

### renderContext

[`RenderContext`](../classes/RenderContext.md)

### passState

`RendererPassState`

### nodes

`RenderNode`[]

### cluster

[`ClusterLightingBuffer`](../classes/ClusterLightingBuffer.md)

### options?

[`DrawNodesOptions`](../interfaces/DrawNodesOptions.md) = `{}`

## Returns

`void`
