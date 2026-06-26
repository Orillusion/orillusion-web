[**@orillusion/core**](../README.md)

***

# Function: drawSortedTransparent()

> **drawSortedTransparent**(`view`, `cluster`, `state`, `filter`, `transparentList`): `void`

Defined in: [src/gfx/renderJob/graph/passes/\_transparentDraw.ts:245](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/_transparentDraw.ts#L245)

Reopen the color attachment with loadOp='load' and draw the
transparent half: sorted transparent geometry + Graphic3D overlays.
`filter='sorted'` skips WBOIT materials (those are handled by
TransparentOITPass); `'all'` draws everything and is the default
when no OIT pass is present.

Bundled tr-list execution is enabled only for the `'all'` path — the
sorted partition is per-node because cached bundles bake the full
transparent set and there is no per-OIT bundle re-keying yet.

Called by [SortedTransparentPass](../classes/SortedTransparentPass.md).

## Parameters

### view

[`View3D`](../classes/View3D.md)

### cluster

[`ClusterLightingBuffer`](../classes/ClusterLightingBuffer.md)

### state

[`TransparentDrawContext`](../interfaces/TransparentDrawContext.md)

### filter

`"all"` \| `"sorted"`

### transparentList

`RenderNode`[]

## Returns

`void`
