# Class: TextureCubeFaceData

### Constructors

- [constructor](TextureCubeFaceData.md#constructor)

### Properties

- [faceTextureRef](TextureCubeFaceData.md#facetextureref)

### Methods

- [uploadTexture](TextureCubeFaceData.md#uploadtexture)
- [getGpuSource](TextureCubeFaceData.md#getgpusource)

## Constructors

### constructor

• **new TextureCubeFaceData**(`texture`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Defined in

[src/textures/TextureCubeFaceData.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/textures/TextureCubeFaceData.ts#L9)

## Properties

### faceTextureRef

• **faceTextureRef**: `Object`

#### Index signature

▪ [key: `string`]: { `t`: `GPUTexture` ; `v`: `GPUTextureView`  }

#### Defined in

[src/textures/TextureCubeFaceData.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/textures/TextureCubeFaceData.ts#L6)

## Methods

### uploadTexture

▸ **uploadTexture**(`mip`, `texture`): [`TextureCubeFaceData`](TextureCubeFaceData.md)

fill this texture by a texture2D, which is a 360 panorama image
assign mipmap level

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mip` | `number` | mipmap level |
| `texture` | [`Texture`](Texture.md) | a panorama image |

#### Returns

[`TextureCubeFaceData`](TextureCubeFaceData.md)

#### Defined in

[src/textures/TextureCubeFaceData.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/textures/TextureCubeFaceData.ts#L22)

___

### getGpuSource

▸ **getGpuSource**(`mip`): `Object`

get GPU texture raw data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mip` | `number` | mipmap level |

#### Returns

`Object`

GPU texture raw data, including t: GPUTexture and v: GPUTextureView

| Name | Type |
| :------ | :------ |
| `t` | `GPUTexture` |
| `v` | `GPUTextureView` |

#### Defined in

[src/textures/TextureCubeFaceData.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/textures/TextureCubeFaceData.ts#L46)
