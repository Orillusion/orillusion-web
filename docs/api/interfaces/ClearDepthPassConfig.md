[**@orillusion/core**](../README.md)

***

# Interface: ClearDepthPassConfig

Defined in: [src/gfx/renderJob/graph/passes/ClearDepthPass.ts:20](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/ClearDepthPass.ts#L20)

Configuration for [ClearDepthPass](../classes/ClearDepthPass.md).

- `name`: optional override so multiple ClearDepth nodes can coexist
  in one graph (each registered RenderGraphPass needs a unique name).
  Defaults to `'ClearDepthPass'`.
- `after`: optional upstream pass name to bind a `dependsOn` edge to.
  When omitted, callers are expected to set the ordering by other
  means (e.g. mutating `pass.dependencies` directly, or relying on
  insertion order if there's nothing else to disambiguate).
- `rtName`: which typed render target to clear depth on. Defaults to
  [MAIN\_COLOR\_RT](../variables/MAIN_COLOR_RT.md) (the engine's main color GBuffer). Custom
  pipelines that adopt their own GBuffer through `b.adoptRenderTarget`
  can point this at that handle.

## Properties

### name?

> `optional` **name?**: `string`

Defined in: [src/gfx/renderJob/graph/passes/ClearDepthPass.ts:21](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/ClearDepthPass.ts#L21)

***

### after?

> `optional` **after?**: `string`

Defined in: [src/gfx/renderJob/graph/passes/ClearDepthPass.ts:22](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/ClearDepthPass.ts#L22)

***

### rtName?

> `optional` **rtName?**: `string`

Defined in: [src/gfx/renderJob/graph/passes/ClearDepthPass.ts:23](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/passes/ClearDepthPass.ts#L23)
