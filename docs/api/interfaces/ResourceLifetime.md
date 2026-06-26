[**@orillusion/core**](../README.md)

***

# Interface: ResourceLifetime

Defined in: [src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts:12](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts#L12)

Per-resource analysis result. The transient pool consumes these to
decide aliasing (same bucket key, disjoint `[firstUseIdx, lastUseIdx]`
intervals can share a physical wrapper) and final allocation.

## Properties

### name

> **name**: `string`

Defined in: [src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts:13](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts#L13)

***

### kind

> **kind**: [`TransientResourceKind`](../type-aliases/TransientResourceKind.md)

Defined in: [src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts:14](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts#L14)

***

### desc

> **desc**: [`TextureDesc`](TextureDesc.md) \| [`BufferDesc`](BufferDesc.md)

Defined in: [src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts:17](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts#L17)

Original desc as passed to `b.declareTexture` /
 `b.declareBuffer`. The analyzer never mutates it.

***

### firstUseIdx

> **firstUseIdx**: `number`

Defined in: [src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts:22](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts#L22)

Index into the topo-sorted pass order at which this resource is
 first written or read. `Number.POSITIVE_INFINITY` if no enabled
 pass references it — the analyzer emits a console.warn for
 these "orphan" declarations.

***

### lastUseIdx

> **lastUseIdx**: `number`

Defined in: [src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts:25](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts#L25)

Last index at which this resource is referenced. `-1` if no
 enabled pass references it.

***

### resolvedUsage

> **resolvedUsage**: `number`

Defined in: [src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts:29](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts#L29)

Final unioned `GPUTextureUsage` / `GPUBufferUsage` bitmask after
 combining the desc's `usage` field with every access hint
 contribution recorded in [TransientResourceRegistry](../classes/TransientResourceRegistry.md).

***

### resolvedWidth?

> `optional` **resolvedWidth?**: `number`

Defined in: [src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts:31](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts#L31)

Resolved pixel width (textures only). Undefined for buffers.

***

### resolvedHeight?

> `optional` **resolvedHeight?**: `number`

Defined in: [src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts:33](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts#L33)

Resolved pixel height (textures only). Undefined for buffers.

***

### resolvedSize?

> `optional` **resolvedSize?**: `number`

Defined in: [src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts:35](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts#L35)

Resolved byte size (buffers only). Undefined for textures.

***

### persistent

> **persistent**: `boolean`

Defined in: [src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts:39](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/LifetimeAnalyzer.ts#L39)

True ⇒ this resource is externally owned (imported) or
 explicitly marked `aliasable: false`. The pool MUST NOT alias
 it with any other lifetime in the same bucket.
