[**@orillusion/core**](../README.md)

***

# Variable: PRE\_DEPTH\_RT

> `const` **PRE\_DEPTH\_RT**: `"_PreDepthRT"` = `'_PreDepthRT'`

Defined in: [src/gfx/renderJob/graph/passes/PreDepthPass.ts:34](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/PreDepthPass.ts#L34)

Typed RT handle name for the pre-depth render target — depth-only,
exposed so custom prepass-style passes that want to chain onto the
same depth attachment can declare `b.useRenderTarget(PRE_DEPTH_RT)`.
