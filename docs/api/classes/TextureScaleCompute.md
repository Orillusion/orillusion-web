[**@orillusion/core**](../README.md)

***

# Class: TextureScaleCompute

Defined in: [src/gfx/generate/convert/TextureScaleCompute.ts:8](https://github.com/orillusion/orillusion/blob/main/src/gfx/generate/convert/TextureScaleCompute.ts#L8)

Builds a compute shader that scales/compresses a set of input textures into output textures.

## Constructors

### Constructor

> **new TextureScaleCompute**(): `TextureScaleCompute`

#### Returns

`TextureScaleCompute`

## Properties

### computeShader

> **computeShader**: `ComputeShader`

Defined in: [src/gfx/generate/convert/TextureScaleCompute.ts:13](https://github.com/orillusion/orillusion/blob/main/src/gfx/generate/convert/TextureScaleCompute.ts#L13)

The underlying compute shader created from the input/output textures.

## Methods

### setInputes()

> **setInputes**(`colorMap`, `inputs`, `outputs`): `void`

Defined in: [src/gfx/generate/convert/TextureScaleCompute.ts:21](https://github.com/orillusion/orillusion/blob/main/src/gfx/generate/convert/TextureScaleCompute.ts#L21)

Configure the compute shader inputs and outputs.

#### Parameters

##### colorMap

[`Texture`](Texture.md)

optional color map sampled by the shader

##### inputs

[`Texture`](Texture.md)[]

source textures bound as sampled textures

##### outputs

[`Texture`](Texture.md)[]

destination textures bound as storage textures

#### Returns

`void`
