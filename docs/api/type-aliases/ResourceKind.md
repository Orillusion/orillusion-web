[**@orillusion/core**](../README.md)

***

# Type Alias: ResourceKind

> **ResourceKind** = `"opaque"` \| `"texture"` \| `"buffer"` \| `"rendertarget"` \| `"renderpass"` \| `"computepass"`

Defined in: [src/gfx/renderJob/graph/RenderGraphResourcePool.ts:21](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/RenderGraphResourcePool.ts#L21)

Typed kind tag for pool entries. Lets the validator distinguish
"you're trying to open a render pass on a non-RT handle" from a
plain wrong-name lookup, and lets `dumpDot` color attachment edges
differently from sampled edges.

- `opaque`: legacy / untyped handles (the historical default for
  `b.write(name, factory)` calls that don't go through one of the
  typed helpers).
- `texture` / `buffer`: typed plain resources.
- `rendertarget`: published by `b.createRenderTarget` /
  `b.adoptRenderTarget`; consumed by `b.useRenderTarget`.
- `renderpass` / `computepass`: reserved for future first-class
  pool entries (not currently registered — pass handles are
  owned by their host RenderGraphPass).
