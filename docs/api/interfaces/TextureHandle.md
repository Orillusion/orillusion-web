[**@orillusion/core**](../README.md)

***

# Interface: TextureHandle

Defined in: [src/gfx/renderJob/graph/transient/ResourceHandle.ts:30](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/ResourceHandle.ts#L30)

Opaque handle to a transient (or imported) texture resource owned by
the [RenderGraph](../classes/RenderGraph.md). Pass it to `b.read` / `b.write` /
`b.readWrite` to declare an access, then resolve to the actual
RenderTexture via `ctx.getTexture(handle.name)` inside
`execute()`.

## Properties

### \[\_\_\_texBrand\]

> `readonly` **\[\_\_\_texBrand\]**: `void`

Defined in: [src/gfx/renderJob/graph/transient/ResourceHandle.ts:31](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/ResourceHandle.ts#L31)

***

### name

> `readonly` **name**: `string`

Defined in: [src/gfx/renderJob/graph/transient/ResourceHandle.ts:32](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/ResourceHandle.ts#L32)
