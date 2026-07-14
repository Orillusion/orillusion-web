[**@orillusion/core**](../README.md)

***

# Function: drawTransmissionContinuation()

> **drawTransmissionContinuation**(`view`, `cluster`, `state`, `opaqueList`): `void`

Defined in: [src/gfx/renderJob/graph/passes/\_transparentDraw.ts:199](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/_transparentDraw.ts#L199)

Reopen the color attachment with loadOp='load' and draw the deferred
transmission-opaque continuation — opaque materials whose
`transmissionFactor > 0`, deferred so they can sample the
SceneColorPyramid for refraction.

Called by [TransmissionOpaquePass](../classes/TransmissionOpaquePass.md). The pass owns no state of
its own — everything it needs flows through `state` (resolved from
the [TRANSPARENT\_DRAW\_CTX](../variables/TRANSPARENT_DRAW_CTX.md) graph resource), `cluster`
(resolved by the caller from ClusterLightingPass if present), and
`opaqueList` (pre-collected by the caller via
RenderGraphPass.collectLayered, so layer / camera-mask
filtering is applied before this function sees the list).

## Parameters

### view

[`View3D`](../classes/View3D.md)

### cluster

[`ClusterLightingBuffer`](../classes/ClusterLightingBuffer.md)

### state

[`TransparentDrawContext`](../interfaces/TransparentDrawContext.md)

### opaqueList

`RenderNode`[]

## Returns

`void`
