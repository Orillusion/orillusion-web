[**@orillusion/core**](../README.md)

***

# Interface: TextureDesc

Defined in: [src/gfx/renderJob/graph/transient/ResourceDesc.ts:53](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/ResourceDesc.ts#L53)

Declarative description of a transient texture. Passes hand this to
`b.declareTexture(name, desc)` during setup; the pool allocates
(or aliases) a RenderTexture after compilation and the pass
fetches it through `ctx.getTexture(name)` at execute time.

## Properties

### format

> **format**: `GPUTextureFormat`

Defined in: [src/gfx/renderJob/graph/transient/ResourceDesc.ts:54](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/ResourceDesc.ts#L54)

***

### width

> **width**: [`SizeSpec`](../type-aliases/SizeSpec.md)

Defined in: [src/gfx/renderJob/graph/transient/ResourceDesc.ts:57](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/ResourceDesc.ts#L57)

Width spec; `'screen'` etc. resolved per-compile against
 `ctx.presentationSize[0]`.

***

### height

> **height**: [`SizeSpec`](../type-aliases/SizeSpec.md)

Defined in: [src/gfx/renderJob/graph/transient/ResourceDesc.ts:60](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/ResourceDesc.ts#L60)

Height spec; `'screen'` etc. resolved per-compile against
 `ctx.presentationSize[1]`.

***

### mipLevelCount?

> `optional` **mipLevelCount?**: `number`

Defined in: [src/gfx/renderJob/graph/transient/ResourceDesc.ts:65](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/ResourceDesc.ts#L65)

Mip levels. Default 1. >1 unlocks mip-chain mode — note that
 mip-chain resources should usually opt out of aliasing via
 `aliasable: false` because cached bind groups can survive across
 compiles and reference specific mip views.

***

### sampleCount?

> `optional` **sampleCount?**: `number`

Defined in: [src/gfx/renderJob/graph/transient/ResourceDesc.ts:67](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/ResourceDesc.ts#L67)

WebGPU sample count; 0 or 1 => non-MSAA. Default 0.

***

### numberLayer?

> `optional` **numberLayer?**: `number`

Defined in: [src/gfx/renderJob/graph/transient/ResourceDesc.ts:69](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/ResourceDesc.ts#L69)

Array layers (>=1). Default 1.

***

### usage?

> `optional` **usage?**: `number` \| `"auto"`

Defined in: [src/gfx/renderJob/graph/transient/ResourceDesc.ts:75](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/ResourceDesc.ts#L75)

`'auto'` (default) ⇒ the compiler unions the final usage from
 every `read/write/readWrite` access hint that targets this
 resource. Otherwise an explicit bitmask. Even when explicit,
 the analyzer still unions any access hints it sees and emits a
 `console.warn` if a hint bit is missing from the user mask.

***

### aliasable?

> `optional` **aliasable?**: `boolean`

Defined in: [src/gfx/renderJob/graph/transient/ResourceDesc.ts:81](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/ResourceDesc.ts#L81)

When `false`, the physical pool MUST NOT alias this resource
 with another. Use for mip pyramids, history textures (TAA),
 arrays consumed via cached bind-group views — anything whose
 `GPUTexture` identity must remain stable across compile windows.
 Default `true`.

***

### publishToLegacyMap?

> `optional` **publishToLegacyMap?**: `boolean`

Defined in: [src/gfx/renderJob/graph/transient/ResourceDesc.ts:92](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/ResourceDesc.ts#L92)

When `true`, the graph also publishes the pool-bound wrapper
 into the legacy RTResourceMap under the resource's
 logical name after each compile. This is a back-compat shim
 for resources that historical material / system code reads
 via `RTResourceMap.getTexture(ctx, name)` (e.g. transmission
 materials looking up `_SceneColorPyramid`, GPU culling looking
 up `_HiZPyramid`). Should only be set when `aliasable: false`
 — publishing a pool-aliased wrapper to RTResourceMap would
 hand readers a stale pointer the next time the wrapper is
 reused by another logical resource. Default `false`.

***

### label?

> `optional` **label?**: `string`

Defined in: [src/gfx/renderJob/graph/transient/ResourceDesc.ts:94](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/ResourceDesc.ts#L94)

Debug label suffix forwarded to the underlying GPUTexture.
