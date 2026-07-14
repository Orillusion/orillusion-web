[**@orillusion/core**](../README.md)

***

# Variable: SCENE\_COLOR\_PYRAMID

> `const` **SCENE\_COLOR\_PYRAMID**: `"_SceneColorPyramid"` = `'_SceneColorPyramid'`

Defined in: [src/gfx/renderJob/graph/passes/SceneColorPyramidPass.ts:29](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/SceneColorPyramidPass.ts#L29)

Published handle name for the scene color snapshot produced after
opaque rendering finishes and before transparent rendering begins.
Transmission materials (glass / water / clear plastic) sample this
texture through a fragment shader refraction term — see
`KHR_materials_transmission` + `Transmission_frag.ts`.

The pyramid carries a full mip chain so frosted-glass / rough-glass
transmission can sample blurred levels via `textureSampleLevel`.
Mip 0 is the raw `_ColorBuffer` copy; mips 1..N are progressively
downsampled box filters generated each frame after the copy via
TextureMipmapGenerator. PBRLitShader's transmission block
picks an LOD from `roughness` so polished glass reads from mip 0
(sharp refraction) and frosted glass reads from a higher LOD
(blurred backdrop) — the standard roughness-aware transmission
sampling path.
