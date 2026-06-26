[**@orillusion/core**](../README.md)

***

# Type Alias: OitFilter

> **OitFilter** = `"sorted"` \| `"weighted"` \| `null`

Defined in: [src/gfx/renderJob/graph/passes/\_transparentDraw.ts:110](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/_transparentDraw.ts#L110)

Per-node oit partition filter. `'sorted'` skips materials with
 `oitMode='weighted'`; `'weighted'` does the inverse.
