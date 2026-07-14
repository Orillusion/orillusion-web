[**@orillusion/core**](../README.md)

***

# Variable: POINT\_SHADOW\_CUBE\_ARRAY

> `const` **POINT\_SHADOW\_CUBE\_ARRAY**: `"_PointShadowCubeArray"` = `'_PointShadowCubeArray'`

Defined in: [src/gfx/renderJob/graph/passes/PointShadowPass.ts:31](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/PointShadowPass.ts#L31)

Published handle name for the point-light shadow cube array.
Each point light that casts shadows gets one cubemap slot
(6 faces) inside this array texture, indexed by `pointIndex`.
