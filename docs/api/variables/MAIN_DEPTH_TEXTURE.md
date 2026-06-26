[**@orillusion/core**](../README.md)

***

# Variable: MAIN\_DEPTH\_TEXTURE

> `const` **MAIN\_DEPTH\_TEXTURE**: `"_MainDepthTexture"` = `'_MainDepthTexture'`

Defined in: [src/gfx/renderJob/graph/passes/PreDepthPass.ts:24](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/PreDepthPass.ts#L24)

Published handle names for the depth prepass outputs. The color
pass hooks its pipeline's depth-load-op to `_MainDepthTexture` via
`rtFrame.zPreTexture`; opaque-stage post passes (SSR, SSGI, outline)
read from `_ZBufferTexture`.
