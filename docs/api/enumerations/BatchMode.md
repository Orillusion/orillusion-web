[**@orillusion/core**](../README.md)

***

# Enumeration: BatchMode

Defined in: [src/gfx/renderJob/config/BatchMode.ts:14](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/config/BatchMode.ts#L14)

Batching mode for a RenderNode. Controls whether the node
participates in the engine's batched render-group path (instead of
the default per-node opaque/transparent lists).

Historically this enum was named `RenderLayer`, but the values
actually express *batching behavior*, not layer membership — it was
renamed to `BatchMode`, and the layer-mask concern now lives in
[VisibleLayer](../@orillusion/namespaces/VisibleLayer/README.md). Migration: replace `RenderLayer.*` usages with
`BatchMode.*` and `RenderLayerUtil` with BatchModeUtil.

## Enumeration Members

### None

> **None**: `2`

Defined in: [src/gfx/renderJob/config/BatchMode.ts:15](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/config/BatchMode.ts#L15)

***

### StaticBatch

> **StaticBatch**: `4`

Defined in: [src/gfx/renderJob/config/BatchMode.ts:16](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/config/BatchMode.ts#L16)

***

### DynamicBatch

> **DynamicBatch**: `8`

Defined in: [src/gfx/renderJob/config/BatchMode.ts:17](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/config/BatchMode.ts#L17)

***

### Hidden

> **Hidden**: `16`

Defined in: [src/gfx/renderJob/config/BatchMode.ts:18](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/config/BatchMode.ts#L18)
