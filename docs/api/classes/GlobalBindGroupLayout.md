[**@orillusion/core**](../README.md)

***

# Class: GlobalBindGroupLayout

Defined in: [src/gfx/graphics/webGpu/core/bindGroups/GlobalBindGroupLayout.ts:7](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/bindGroups/GlobalBindGroupLayout.ts#L7)

Provides the shared bind group layout for global render data, cached per context.

## Constructors

### Constructor

> **new GlobalBindGroupLayout**(): `GlobalBindGroupLayout`

#### Returns

`GlobalBindGroupLayout`

## Methods

### getGlobalDataBindGroupLayout()

> `static` **getGlobalDataBindGroupLayout**(`ctx`): `GPUBindGroupLayout`

Defined in: [src/gfx/graphics/webGpu/core/bindGroups/GlobalBindGroupLayout.ts:12](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/bindGroups/GlobalBindGroupLayout.ts#L12)

Get the cached global data bind group layout for the given context.

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

the rendering context

#### Returns

`GPUBindGroupLayout`
