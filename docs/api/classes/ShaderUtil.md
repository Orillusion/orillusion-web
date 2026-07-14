[**@orillusion/core**](../README.md)

***

# Class: ShaderUtil

Defined in: [src/gfx/graphics/webGpu/shader/util/ShaderUtil.ts:32](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/util/ShaderUtil.ts#L32)

Holds the per-context caches of compiled GPU shader modules and render shader passes.

## Constructors

### Constructor

> **new ShaderUtil**(): `ShaderUtil`

#### Returns

`ShaderUtil`

## Methods

### renderShaderModulePool()

> `static` **renderShaderModulePool**(`ctx`): `Map`\<`string`, `GPUShaderModule`\>

Defined in: [src/gfx/graphics/webGpu/shader/util/ShaderUtil.ts:38](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/util/ShaderUtil.ts#L38)

Per-Context3D shader state accessors. Device-bound GPU shader modules
are keyed per-device; the RenderShaderPass cache is also per-device
(since the passes internally hold device-bound pipelines).

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

#### Returns

`Map`\<`string`, `GPUShaderModule`\>

***

### renderShader()

> `static` **renderShader**(`ctx`): `Map`\<`string`, [`RenderShaderPass`](RenderShaderPass.md)\>

Defined in: [src/gfx/graphics/webGpu/shader/util/ShaderUtil.ts:45](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/util/ShaderUtil.ts#L45)

Get the per-context cache of render shader passes.

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

the rendering context

#### Returns

`Map`\<`string`, [`RenderShaderPass`](RenderShaderPass.md)\>

***

### init()

> `static` **init**(`ctx`): `void`

Defined in: [src/gfx/graphics/webGpu/shader/util/ShaderUtil.ts:60](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/shader/util/ShaderUtil.ts#L60)

Initialize the per-context shader state caches.

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

the rendering context

#### Returns

`void`
