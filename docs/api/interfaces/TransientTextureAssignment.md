[**@orillusion/core**](../README.md)

***

# Interface: TransientTextureAssignment

Defined in: [src/gfx/renderJob/graph/transient/TransientTexturePool.ts:33](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TransientTexturePool.ts#L33)

Snapshot of one assign() call's resource-to-physical mapping.

## Properties

### bindings

> **bindings**: `Map`\<`string`, `RenderTexture`\>

Defined in: [src/gfx/renderJob/graph/transient/TransientTexturePool.ts:36](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TransientTexturePool.ts#L36)

logical resource name → the RenderTexture that
 `ctx.getTexture(name)` should return for this compile window.

***

### debug

> **debug**: `Map`\<`string`, \{ `bucketKey`: `string`; `aliased`: `boolean`; `dedicated`: `boolean`; \}\>

Defined in: [src/gfx/renderJob/graph/transient/TransientTexturePool.ts:39](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TransientTexturePool.ts#L39)

Per-name debug info: which bucket key the resource landed in
 and whether it aliased an existing entry.
