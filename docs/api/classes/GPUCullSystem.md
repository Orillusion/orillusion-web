[**@orillusion/core**](../README.md)

***

# Class: GPUCullSystem

Defined in: [src/gfx/renderJob/cull/GPUCullSystem.ts:37](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/cull/GPUCullSystem.ts#L37)

GPU-driven mesh culling system.

Maintains a per-engine-instance storage buffer of mesh metadata
(world-space AABB + matrix index + indexCount/firstIndex/baseVertex)
synced from the scene's RenderNode set. Each frame, dispatches a
compute pass that:
  1. Tests every mesh's AABB against the camera's 6 frustum planes.
  2. (Optional, off by default) Tests against `_HiZPyramid` for
     occlusion rejection.
  3. Atomically appends visible meshes' indirect-draw args to a
     `drawCmds` storage buffer, with a `drawCount` atomic counter.

**Output buffers**:
  - `visibilityBuffer` (u32 per mesh) — 1 visible / 0 culled
  - `drawCmdsBuffer` ({u32, u32, u32, i32, u32} per visible mesh)
  - `drawCountBuffer` (u32, atomic counter)

Renderer integration is OPT-IN and follow-up work — see
`GPUCullFeature.execute()`. Without integration the buffers are still
computed and observable in dev tools, allowing perf measurement and
incremental adoption.

## Constructors

### Constructor

> **new GPUCullSystem**(`ctx`): `GPUCullSystem`

Defined in: [src/gfx/renderJob/cull/GPUCullSystem.ts:62](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/cull/GPUCullSystem.ts#L62)

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

#### Returns

`GPUCullSystem`

## Accessors

### meshCount

#### Get Signature

> **get** **meshCount**(): `number`

Defined in: [src/gfx/renderJob/cull/GPUCullSystem.ts:66](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/cull/GPUCullSystem.ts#L66)

##### Returns

`number`

***

### visibilityBuffer

#### Get Signature

> **get** **visibilityBuffer**(): [`StorageGPUBuffer`](StorageGPUBuffer.md)

Defined in: [src/gfx/renderJob/cull/GPUCullSystem.ts:67](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/cull/GPUCullSystem.ts#L67)

##### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

***

### drawCmdsBuffer

#### Get Signature

> **get** **drawCmdsBuffer**(): [`StorageGPUBuffer`](StorageGPUBuffer.md)

Defined in: [src/gfx/renderJob/cull/GPUCullSystem.ts:68](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/cull/GPUCullSystem.ts#L68)

##### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

***

### drawCountBuffer

#### Get Signature

> **get** **drawCountBuffer**(): [`StorageGPUBuffer`](StorageGPUBuffer.md)

Defined in: [src/gfx/renderJob/cull/GPUCullSystem.ts:69](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/cull/GPUCullSystem.ts#L69)

##### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

***

### useHiZ

#### Get Signature

> **get** **useHiZ**(): `boolean`

Defined in: [src/gfx/renderJob/cull/GPUCullSystem.ts:75](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/cull/GPUCullSystem.ts#L75)

##### Returns

`boolean`

#### Set Signature

> **set** **useHiZ**(`v`): `void`

Defined in: [src/gfx/renderJob/cull/GPUCullSystem.ts:74](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/cull/GPUCullSystem.ts#L74)

Toggle Hi-Z occlusion testing (in addition to frustum culling).
 Caller is responsible for ensuring the `_HiZPyramid` texture
 exists in the engine's RTResourceMap before flipping to true.

##### Parameters

###### v

`boolean`

##### Returns

`void`

## Methods

### registerNode()

> **registerNode**(`node`): `number`

Defined in: [src/gfx/renderJob/cull/GPUCullSystem.ts:94](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/cull/GPUCullSystem.ts#L94)

Register a RenderNode in the cull system, returning its SSBO slot.
 Idempotent; calling with an existing node updates its metadata.

#### Parameters

##### node

`RenderNode`

#### Returns

`number`

***

### unregisterNode()

> **unregisterNode**(`node`): `void`

Defined in: [src/gfx/renderJob/cull/GPUCullSystem.ts:106](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/cull/GPUCullSystem.ts#L106)

#### Parameters

##### node

`RenderNode`

#### Returns

`void`

***

### execute()

> **execute**(`view`): `void`

Defined in: [src/gfx/renderJob/cull/GPUCullSystem.ts:143](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/cull/GPUCullSystem.ts#L143)

Dispatch the cull compute pass for the given camera.

#### Parameters

##### view

[`View3D`](View3D.md)

#### Returns

`void`
