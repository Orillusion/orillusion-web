[**@orillusion/core**](../README.md)

***

# Class: TransientBufferPool

Defined in: [src/gfx/renderJob/graph/transient/TransientBufferPool.ts:43](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TransientBufferPool.ts#L43)

Physical pool for transient graph buffers. Mirrors
[TransientTexturePool](TransientTexturePool.md) but buckets by `(roundedSize, usage)`
and reuses GPUBufferBase wrappers by calling
`resizeBuffer(size)` when the existing capacity is short.

Phase 0 has no first-party consumers of `b.declareBuffer` — the pool
exists so the new API surface is symmetric with textures and so
future passes (GPU culling scratch, transient indirect args) can
adopt it without further engine work.

## Constructors

### Constructor

> **new TransientBufferPool**(`ctx`): `TransientBufferPool`

Defined in: [src/gfx/renderJob/graph/transient/TransientBufferPool.ts:50](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TransientBufferPool.ts#L50)

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

#### Returns

`TransientBufferPool`

## Methods

### assign()

> **assign**(`lifetimes`): [`TransientBufferAssignment`](../interfaces/TransientBufferAssignment.md)

Defined in: [src/gfx/renderJob/graph/transient/TransientBufferPool.ts:54](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TransientBufferPool.ts#L54)

#### Parameters

##### lifetimes

readonly [`ResourceLifetime`](../interfaces/ResourceLifetime.md)[]

#### Returns

[`TransientBufferAssignment`](../interfaces/TransientBufferAssignment.md)

***

### dispose()

> **dispose**(): `void`

Defined in: [src/gfx/renderJob/graph/transient/TransientBufferPool.ts:149](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TransientBufferPool.ts#L149)

#### Returns

`void`

***

### stats()

> **stats**(): `object`

Defined in: [src/gfx/renderJob/graph/transient/TransientBufferPool.ts:159](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/graph/transient/TransientBufferPool.ts#L159)

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
