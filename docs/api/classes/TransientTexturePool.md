[**@orillusion/core**](../README.md)

***

# Class: TransientTexturePool

Defined in: [src/gfx/renderJob/graph/transient/TransientTexturePool.ts:69](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TransientTexturePool.ts#L69)

Physical pool for transient render-graph textures with lifetime-aware
aliasing.

Lifecycle:

  compile() → LifetimeAnalyzer.analyze() → ResourceLifetime[]
            → pool.assign(lifetimes) → bindings Map
            → RenderGraphResourcePool registers () => binding
  execute() → ctx.getTexture(name) → pool-resolved RenderTexture

Aliasing happens **inside one compile window**: lifetimes are sorted
by `firstUseIdx` ascending; for each one the pool finds a same-bucket
entry whose `inUseUntilIdx < firstUseIdx` and reuses it, otherwise
allocates a fresh RenderTexture. Across compile windows the
pool retains every allocated wrapper — the next assign() reshuffles
which logical name maps to which physical slot. Dedicated slots
(`aliasable: false`, mip pyramids, etc.) keep their `RenderTexture`
identity stable across windows by binding to a per-name slot that
lives outside the bucket reuse pool.

On device-lost the pool calls `RenderTexture.destroy()` /
`Texture.delayDestroyTexture()` on every slot and clears the buckets;
the next compile re-allocates from scratch on the new device.

## Constructors

### Constructor

> **new TransientTexturePool**(`ctx`): `TransientTexturePool`

Defined in: [src/gfx/renderJob/graph/transient/TransientTexturePool.ts:79](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TransientTexturePool.ts#L79)

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

#### Returns

`TransientTexturePool`

## Methods

### assign()

> **assign**(`lifetimes`): [`TransientTextureAssignment`](../interfaces/TransientTextureAssignment.md)

Defined in: [src/gfx/renderJob/graph/transient/TransientTexturePool.ts:89](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TransientTexturePool.ts#L89)

Allocate (or reuse) physical wrappers for every transient
lifetime. Persistent (imported) lifetimes are ignored — those
are registered directly by the builder when the external
texture is imported.

#### Parameters

##### lifetimes

readonly [`ResourceLifetime`](../interfaces/ResourceLifetime.md)[]

#### Returns

[`TransientTextureAssignment`](../interfaces/TransientTextureAssignment.md)

***

### dispose()

> **dispose**(): `void`

Defined in: [src/gfx/renderJob/graph/transient/TransientTexturePool.ts:225](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TransientTexturePool.ts#L225)

Destroy every pooled wrapper. Called on graph destroy and
 device-lost.

#### Returns

`void`

***

### stats()

> **stats**(): `object`

Defined in: [src/gfx/renderJob/graph/transient/TransientTexturePool.ts:235](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TransientTexturePool.ts#L235)

#### Returns

`object`

##### currentBytes

> **currentBytes**: `number`

##### peakBytes

> **peakBytes**: `number`

##### bucketCount

> **bucketCount**: `number`

##### slotCount

> **slotCount**: `number`
