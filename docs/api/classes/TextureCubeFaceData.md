[**@orillusion/core**](../README.md)

***

# Class: TextureCubeFaceData

Defined in: [src/textures/TextureCubeFaceData.ts:10](https://github.com/orillusion/orillusion/blob/main/src/textures/TextureCubeFaceData.ts#L10)

Manages the per-mip GPU texture and array-view references for the six
faces of a cube texture, and builds the cube map from panorama sources.

## Constructors

### Constructor

> **new TextureCubeFaceData**(`texture`): `TextureCubeFaceData`

Defined in: [src/textures/TextureCubeFaceData.ts:17](https://github.com/orillusion/orillusion/blob/main/src/textures/TextureCubeFaceData.ts#L17)

#### Parameters

##### texture

[`Texture`](Texture.md)

#### Returns

`TextureCubeFaceData`

## Properties

### faceTextureRef

> **faceTextureRef**: `object`

Defined in: [src/textures/TextureCubeFaceData.ts:14](https://github.com/orillusion/orillusion/blob/main/src/textures/TextureCubeFaceData.ts#L14)

Cache of per-mip-level GPU texture and array texture-view references.

#### Index Signature

\[`key`: `string`\]: `object`

## Methods

### uploadTexture()

> **uploadTexture**(`mip`, `texture`): `this`

Defined in: [src/textures/TextureCubeFaceData.ts:30](https://github.com/orillusion/orillusion/blob/main/src/textures/TextureCubeFaceData.ts#L30)

fill this texture by a texture2D, which is a 360 panorama image
assign mipmap level

#### Parameters

##### mip

`number`

mipmap level

##### texture

[`Texture`](Texture.md)

a panorama image

#### Returns

`this`

***

### getGpuSource()

> **getGpuSource**(`mip`): `object`

Defined in: [src/textures/TextureCubeFaceData.ts:54](https://github.com/orillusion/orillusion/blob/main/src/textures/TextureCubeFaceData.ts#L54)

get GPU texture raw data

#### Parameters

##### mip

`number`

mipmap level

#### Returns

`object`

GPU texture raw data, including t: GPUTexture and v: GPUTextureView

##### t

> **t**: `GPUTexture`

##### v

> **v**: `GPUTextureView`
