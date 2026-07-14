[**@orillusion/core**](../README.md)

***

# Type Alias: SizeSpec

> **SizeSpec** = `number` \| `"screen"` \| `"screen/2"` \| `"screen/4"` \| `"screen/8"`

Defined in: [src/gfx/renderJob/graph/transient/ResourceDesc.ts:25](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/ResourceDesc.ts#L25)

Symbolic size token. Resolved against the owning view's
`ctx.presentationSize` each time the graph compiles, so passes can
declare "screen-sized scratch" without knowing the concrete viewport
resolution at setup time.

Numeric value => literal pixels (use for fixed-size lookups like
shadow atlases or LUTs).
