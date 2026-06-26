[**@orillusion/core**](../README.md)

***

# Class: GPUParticleSystem

Defined in: [src/gfx/renderJob/particle/GPUParticleSystem.ts:26](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/particle/GPUParticleSystem.ts#L26)

GPU-driven particle system (skeleton).

Per-particle state lives entirely in a storage buffer; a compute
pass advances simulation each frame; render goes via
`drawIndexedIndirect` so the visible-particle count is also
GPU-decided. No CPU readback in the hot path → unlocks 100k+
particles at 60fps on desktop WebGPU.

**Status — skeleton**: this class provides the buffer + compute
pipeline scaffolding and a placeholder simulate shader that
advances `position += velocity * dt`. The render path (instanced
billboards via indirect draw) is the next step; the existing
`packages/particle` CPU particle system continues to work alongside.

Buffer layout (32 bytes / particle):
  - position (vec3) + life (f32)
  - velocity (vec3) + maxLife (f32)

## Constructors

### Constructor

> **new GPUParticleSystem**(`ctx`, `maxParticles?`): `GPUParticleSystem`

Defined in: [src/gfx/renderJob/particle/GPUParticleSystem.ts:32](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/particle/GPUParticleSystem.ts#L32)

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

##### maxParticles?

`number` = `100000`

#### Returns

`GPUParticleSystem`

## Accessors

### particleBuffer

#### Get Signature

> **get** **particleBuffer**(): [`StorageGPUBuffer`](StorageGPUBuffer.md)

Defined in: [src/gfx/renderJob/particle/GPUParticleSystem.ts:37](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/particle/GPUParticleSystem.ts#L37)

##### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

***

### maxParticles

#### Get Signature

> **get** **maxParticles**(): `number`

Defined in: [src/gfx/renderJob/particle/GPUParticleSystem.ts:38](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/particle/GPUParticleSystem.ts#L38)

##### Returns

`number`

## Methods

### init()

> **init**(): `void`

Defined in: [src/gfx/renderJob/particle/GPUParticleSystem.ts:42](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/particle/GPUParticleSystem.ts#L42)

#### Returns

`void`
