[**@orillusion/core**](../README.md)

***

# Type Alias: TransmissionFilter

> **TransmissionFilter** = `"exclude"` \| `"only"` \| `null`

Defined in: [src/gfx/renderJob/graph/passes/\_transparentDraw.ts:114](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/_transparentDraw.ts#L114)

Per-node transmission split filter. `'exclude'` skips materials
 with `transmissionFactor > 0`; `'only'` keeps only those.
