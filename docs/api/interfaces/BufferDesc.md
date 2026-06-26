[**@orillusion/core**](../README.md)

***

# Interface: BufferDesc

Defined in: [src/gfx/renderJob/graph/transient/ResourceDesc.ts:105](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/ResourceDesc.ts#L105)

Declarative description of a transient buffer. The pool reuses
underlying `GPUBufferBase` wrappers by `(roundedSize, usage)` bucket;
if a reused buffer is smaller than the new requirement, it is
grown in place via `GPUBufferBase.resizeBuffer(...)`.

## Properties

### size

> **size**: `number`

Defined in: [src/gfx/renderJob/graph/transient/ResourceDesc.ts:109](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/ResourceDesc.ts#L109)

Byte size. The pool rounds this up to the next power-of-two to
 reduce bucket fragmentation; use createBuffer +
 resizeBuffer directly for capacity-mutable use cases.

***

### usage

> **usage**: `number`

Defined in: [src/gfx/renderJob/graph/transient/ResourceDesc.ts:110](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/ResourceDesc.ts#L110)

***

### aliasable?

> `optional` **aliasable?**: `boolean`

Defined in: [src/gfx/renderJob/graph/transient/ResourceDesc.ts:112](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/ResourceDesc.ts#L112)

Default `true`.

***

### label?

> `optional` **label?**: `string`

Defined in: [src/gfx/renderJob/graph/transient/ResourceDesc.ts:113](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/ResourceDesc.ts#L113)
