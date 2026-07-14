[**@orillusion/core**](../README.md)

***

# Variable: MAIN\_SHADOW\_MAP

> `const` **MAIN\_SHADOW\_MAP**: `"_MainShadowMap"` = `'_MainShadowMap'`

Defined in: [src/gfx/renderJob/graph/passes/ShadowPass.ts:32](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/ShadowPass.ts#L32)

Published handle name for the directional-light shadow map array.
`_MainShadowMap` is the CSM cascade array texture. Each cascade
occupies one slice (0..maxCascades-1), successive directional
lights use subsequent slice ranges up to `shadow.maxShadowMapNum`.
