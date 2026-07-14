[**@orillusion/core**](../README.md)

***

# Variable: CANVAS\_TEXTURE

> `const` **CANVAS\_TEXTURE**: `"_CanvasTexture"` = `'_CanvasTexture'`

Defined in: [src/gfx/renderJob/graph/passes/GUIPass.ts:20](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/GUIPass.ts#L20)

Published handle name for the canvas (swapchain) view that the
presentation pass draws into. Registered as a pure handle whose
getter returns null because the GPUTextureView comes from
`Context3D.context.getCurrentTexture()` and is owned by the
browser's compositor — the graph never allocates it.

Exposed mainly so custom passes can declare `b.read(CANVAS_TEXTURE)`
to order against present-to-canvas (e.g. a debug overlay that runs
after the swapchain copy).
