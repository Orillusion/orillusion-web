[**@orillusion/core**](../README.md)

***

# Variable: TRANSPARENT\_DRAW\_CTX

> `const` **TRANSPARENT\_DRAW\_CTX**: `"_TransparentDrawContext"` = `'_TransparentDrawContext'`

Defined in: [src/gfx/renderJob/graph/passes/\_transparentDraw.ts:84](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/_transparentDraw.ts#L84)

Resource handle name for the shared draw context published by
[ColorPass](../classes/ColorPass.md) and consumed by TransmissionOpaque /
SortedTransparent. Use in `b.read(TRANSPARENT_DRAW_CTX)` to declare
the dependency; resolve via `ctx.get<TransparentDrawContext>(...)`
at execute time.
