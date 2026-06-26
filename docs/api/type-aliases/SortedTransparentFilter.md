[**@orillusion/core**](../README.md)

***

# Type Alias: SortedTransparentFilter

> **SortedTransparentFilter** = `"all"` \| `"sorted"`

Defined in: [src/gfx/renderJob/graph/passes/SortedTransparentPass.ts:18](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/SortedTransparentPass.ts#L18)

Filter mode applied to the transparent draw list.
 - `'all'`: render every transparent node (default — used when
   TransparentOITPass isn't in the graph).
 - `'sorted'`: skip nodes whose material has `oitMode='weighted'`,
   leaving them for TransparentOITPass.
