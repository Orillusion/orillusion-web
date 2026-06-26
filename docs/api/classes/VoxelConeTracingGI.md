[**@orillusion/core**](../README.md)

***

# Class: VoxelConeTracingGI

Defined in: [src/gfx/renderJob/gi/VoxelConeTracingGI.ts:28](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/gi/VoxelConeTracingGI.ts#L28)

Voxel Cone Tracing GI (skeleton).

Pure compute-shader GI alternative to DDGI. Steps:
  1. Voxelize the scene each N frames into a 3D storage texture
     (256³ rgba16float, ~256MB — tune by scene scale).
  2. Compute mip chain of the voxel volume (radiance pyramid).
  3. Per fragment, cone-trace 5-9 cones along the hemisphere; sum
     sampled radiance weighted by occlusion. Specular = single
     narrow cone along reflection direction.

**Status — skeleton**: this class allocates the voxel volume
texture and provides `init()` / `dispose()`. The voxelization
compute, mip generation, and cone-trace shaders are the multi-week
follow-up. Documented for the architecture sweep so consumers can
see the intended seam (`engine.setting.gi.algo = 'vct'`).

Compared to DDGI (already implemented):
  + Specular cone trace gives glossy GI without separate SSR
  + Single 3D texture vs probe array's many 2D layers
  - Higher memory cost
  - Needs voxelization pass (DDGI uses ray-marched probes)

## Constructors

### Constructor

> **new VoxelConeTracingGI**(`ctx`, `resolution?`): `VoxelConeTracingGI`

Defined in: [src/gfx/renderJob/gi/VoxelConeTracingGI.ts:32](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/gi/VoxelConeTracingGI.ts#L32)

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

##### resolution?

`number` = `128`

#### Returns

`VoxelConeTracingGI`

## Methods

### init()

> **init**(): `void`

Defined in: [src/gfx/renderJob/gi/VoxelConeTracingGI.ts:37](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/gi/VoxelConeTracingGI.ts#L37)

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [src/gfx/renderJob/gi/VoxelConeTracingGI.ts:49](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/gi/VoxelConeTracingGI.ts#L49)

#### Returns

`void`
