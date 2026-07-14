[**@orillusion/core**](../README.md)

***

# Variable: COLOR\_BUFFER

> `const` **COLOR\_BUFFER**: `"_ColorBuffer"` = `'_ColorBuffer'`

Defined in: [src/gfx/renderJob/graph/passes/ColorPass.ts:45](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/ColorPass.ts#L45)

Published handle names for the main color pass outputs.

- `_ColorBuffer`: the final shaded color target (rgba16float,
  scene-sized). Post passes read this as their first input.
- `_NormalBuffer`: the compressed G-buffer attachment that packs
  normal + position + material data (rgba32float). Post passes
  that need geometry info (SSR, SSGI, outline) decode it themselves.
