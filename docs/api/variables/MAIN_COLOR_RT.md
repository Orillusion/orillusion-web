[**@orillusion/core**](../README.md)

***

# Variable: MAIN\_COLOR\_RT

> `const` **MAIN\_COLOR\_RT**: `"_MainColorRT"` = `'_MainColorRT'`

Defined in: [src/gfx/renderJob/graph/passes/GBufferResourcePass.ts:27](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/GBufferResourcePass.ts#L27)

Graph-pool handle for the engine's main color render target.
Published by [GBufferResourcePass](../classes/GBufferResourcePass.md) (adopt mode — wraps the
shared [GBufferFrame](../classes/GBufferFrame.md)). Downstream opaque + transparent
passes declare a mutator-write via `b.useRenderTarget(MAIN_COLOR_RT)`
and open per-frame render passes through the returned handle.

Replaces the legacy [TRANSPARENT\_DRAW\_CTX](TRANSPARENT_DRAW_CTX.md) channel for new
code — the latter remains published as a backwards-compatibility
shim for the `Sample_PassOrderControl` sample.
