# Class: SolidColorSky

纯色天空纹理

## Hierarchy

- [`HDRTextureCube`](HDRTextureCube.md)

  ↳ **`SolidColorSky`**


### Properties

- [textureSource](SolidColorSky.md#texturesource)
- [name](SolidColorSky.md#name)
- [url](SolidColorSky.md#url)
- [pid](SolidColorSky.md#pid)
- [view](SolidColorSky.md#view)
- [gpuSampler](SolidColorSky.md#gpusampler)
- [gpuSampler\_comparison](SolidColorSky.md#gpusampler_comparison)
- [format](SolidColorSky.md#format)
- [usage](SolidColorSky.md#usage)
- [numberLayer](SolidColorSky.md#numberlayer)
- [viewDescriptor](SolidColorSky.md#viewdescriptor)
- [textureDescriptor](SolidColorSky.md#texturedescriptor)
- [sampler\_comparisonBindingLayout](SolidColorSky.md#sampler_comparisonbindinglayout)
- [flipY](SolidColorSky.md#flipy)
- [sourceImageData](SolidColorSky.md#sourceimagedata)
- [mipmapCount](SolidColorSky.md#mipmapcount)
- [width](SolidColorSky.md#width)
- [height](SolidColorSky.md#height)
- [depthOrArrayLayers](SolidColorSky.md#depthorarraylayers)
- [visibility](SolidColorSky.md#visibility)
- [textureBindingLayout](SolidColorSky.md#texturebindinglayout)
- [samplerBindingLayout](SolidColorSky.md#samplerbindinglayout)

### Methods

- [init](SolidColorSky.md#init)
- [getGPUTexture](SolidColorSky.md#getgputexture)
- [getGPUView](SolidColorSky.md#getgpuview)
- [bindStateChange](SolidColorSky.md#bindstatechange)
- [unBindStateChange](SolidColorSky.md#unbindstatechange)
- [destoryView](SolidColorSky.md#destoryview)
- [destroy](SolidColorSky.md#destroy)
- [unSerialization](SolidColorSky.md#unserialization)
- [createFromHDRData](SolidColorSky.md#createfromhdrdata)
- [createFromTexture](SolidColorSky.md#createfromtexture)
- [uploadErpTexture](SolidColorSky.md#uploaderptexture)
- [uploadTexture](SolidColorSky.md#uploadtexture)
- [load](SolidColorSky.md#load)
- [apply](SolidColorSky.md#apply)
- [serialization](SolidColorSky.md#serialization)

### Accessors

- [useMipmap](SolidColorSky.md#usemipmap)
- [addressModeU](SolidColorSky.md#addressmodeu)
- [addressModeV](SolidColorSky.md#addressmodev)
- [addressModeW](SolidColorSky.md#addressmodew)
- [magFilter](SolidColorSky.md#magfilter)
- [minFilter](SolidColorSky.md#minfilter)
- [mipmapFilter](SolidColorSky.md#mipmapfilter)
- [lodMinClamp](SolidColorSky.md#lodminclamp)
- [lodMaxClamp](SolidColorSky.md#lodmaxclamp)
- [compare](SolidColorSky.md#compare)
- [maxAnisotropy](SolidColorSky.md#maxanisotropy)
- [color](SolidColorSky.md#color)

### Constructors

- [constructor](SolidColorSky.md#constructor)

## Properties

### textureSource

• `Readonly` **textureSource**: [`SerializeTextureSource`](SerializeTextureSource.md)

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[textureSource](HDRTextureCube.md#texturesource)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L13)

___

### name

• **name**: `string`

纹理名称

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[name](HDRTextureCube.md#name)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L17)

___

### url

• **url**: `string`

纹理来源URL

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[url](HDRTextureCube.md#url)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L21)

___

### pid

• **pid**: `number`

数组贴图用到时的索引

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[pid](HDRTextureCube.md#pid)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L31)

___

### view

• **view**: `GPUTextureView`

纹理视图

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[view](HDRTextureCube.md#view)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L36)

___

### gpuSampler

• **gpuSampler**: `GPUSampler`

gpu采样器

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[gpuSampler](HDRTextureCube.md#gpusampler)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L41)

___

### gpuSampler\_comparison

• **gpuSampler\_comparison**: `GPUSampler`

gpu比较采样器

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[gpuSampler_comparison](HDRTextureCube.md#gpusampler_comparison)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L46)

___

### format

• **format**: `GPUTextureFormat`

格式

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[format](HDRTextureCube.md#format)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L51)

___

### usage

• **usage**: `number`

纹理用途

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[usage](HDRTextureCube.md#usage)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L55)

___

### numberLayer

• **numberLayer**: `number` = `1`

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[numberLayer](HDRTextureCube.md#numberlayer)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L68)

___

### viewDescriptor

• **viewDescriptor**: `GPUTextureViewDescriptor`

纹理视图描述符

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[viewDescriptor](HDRTextureCube.md#viewdescriptor)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L72)

___

### textureDescriptor

• **textureDescriptor**: `GPUTextureDescriptor`

纹理描述符

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[textureDescriptor](HDRTextureCube.md#texturedescriptor)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L76)

___

### sampler\_comparisonBindingLayout

• **sampler\_comparisonBindingLayout**: `GPUSamplerBindingLayout`

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[sampler_comparisonBindingLayout](HDRTextureCube.md#sampler_comparisonbindinglayout)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L96)

___

### flipY

• **flipY**: `boolean`

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[flipY](HDRTextureCube.md#flipy)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L101)

___

### sourceImageData

• **sourceImageData**: `HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas`

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[sourceImageData](HDRTextureCube.md#sourceimagedata)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L108)

___

### mipmapCount

• **mipmapCount**: `number` = `1`

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[mipmapCount](HDRTextureCube.md#mipmapcount)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L109)

___

### width

• **width**: `number` = `4`

立方体纹理宽度，默认为4

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[width](HDRTextureCube.md#width)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/TextureCube.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/TextureCube.ts#L12)

___

### height

• **height**: `number` = `4`

立方体纹理高度，默认为4

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[height](HDRTextureCube.md#height)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/TextureCube.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/TextureCube.ts#L16)

___

### depthOrArrayLayers

• **depthOrArrayLayers**: `number` = `6`

立方体纹理深度或层数，默认为6

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[depthOrArrayLayers](HDRTextureCube.md#depthorarraylayers)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/TextureCube.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/TextureCube.ts#L20)

___

### visibility

• **visibility**: `number` = `GPUShaderStage.FRAGMENT`

立方体纹理可视性

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[visibility](HDRTextureCube.md#visibility)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/TextureCube.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/TextureCube.ts#L25)

___

### textureBindingLayout

• **textureBindingLayout**: `GPUTextureBindingLayout`

绑定纹理，包含viewDimension和multisampled两个参数

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[textureBindingLayout](HDRTextureCube.md#texturebindinglayout)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/TextureCube.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/TextureCube.ts#L30)

___

### samplerBindingLayout

• **samplerBindingLayout**: `GPUSamplerBindingLayout`

绑定采样器，包含type参数

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[samplerBindingLayout](HDRTextureCube.md#samplerbindinglayout)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/TextureCube.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/TextureCube.ts#L38)

## Methods

### init

▸ **init**(): `void`

#### Returns

`void`

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[init](HDRTextureCube.md#init)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L126)

___

### getGPUTexture

▸ **getGPUTexture**(): `GPUTexture`

更新gpu纹理

#### Returns

`GPUTexture`

返回gpu纹理

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[getGPUTexture](HDRTextureCube.md#getgputexture)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:278](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L278)

___

### getGPUView

▸ **getGPUView**(`index?`): `GPUTextureView` \| `GPUExternalTexture`

获取gpu视图

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `0` |

#### Returns

`GPUTextureView` \| `GPUExternalTexture`

返回纹理视图

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[getGPUView](HDRTextureCube.md#getgpuview)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:289](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L289)

___

### bindStateChange

▸ **bindStateChange**(`fun`, `ref`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fun` | `Function` |
| `ref` | `any` |

#### Returns

`void`

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[bindStateChange](HDRTextureCube.md#bindstatechange)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:300](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L300)

___

### unBindStateChange

▸ **unBindStateChange**(`ref`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `any` |

#### Returns

`void`

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[unBindStateChange](HDRTextureCube.md#unbindstatechange)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:304](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L304)

___

### destoryView

▸ **destoryView**(): `void`

#### Returns

`void`

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[destoryView](HDRTextureCube.md#destoryview)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:315](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L315)

___

### destroy

▸ **destroy**(): `void`

销毁纹理

#### Returns

`void`

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[destroy](HDRTextureCube.md#destroy)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:322](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L322)

___

### unSerialization

▸ **unSerialization**(`instance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`SerializeTextureInstance`](SerializeTextureInstance.md) |

#### Returns

`void`

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[unSerialization](HDRTextureCube.md#unserialization)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:495](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L495)

___

### createFromHDRData

▸ **createFromHDRData**(`size`, `data`): [`SolidColorSky`](SolidColorSky.md)

创建一个纹理立方体

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | 立方体一个面的正方形边长 |
| `data` | `Object` | 加载的HDR图 |
| `data.width` | `number` | - |
| `data.height` | `number` | - |
| `data.array` | `Uint8Array` | - |

#### Returns

[`SolidColorSky`](SolidColorSky.md)

新的纹理立方体对象

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[createFromHDRData](HDRTextureCube.md#createfromhdrdata)

#### Defined in

[src/engine/textures/HDRTextureCube.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/engine/textures/HDRTextureCube.ts#L35)

___

### createFromTexture

▸ **createFromTexture**(`size`, `texture`): [`SolidColorSky`](SolidColorSky.md)

创建一个纹理立方体

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | 立方体一个面的正方形边长 |
| `texture` | [`Texture`](Texture.md) | 纹理对象 |

#### Returns

[`SolidColorSky`](SolidColorSky.md)

新的纹理立方体对象

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[createFromTexture](HDRTextureCube.md#createfromtexture)

#### Defined in

[src/engine/textures/HDRTextureCube.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/engine/textures/HDRTextureCube.ts#L51)

___

### uploadErpTexture

▸ **uploadErpTexture**(`texture`): [`SolidColorSky`](SolidColorSky.md)

上传Erp纹理

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `texture` | [`Texture`](Texture.md) | 纹理对象 |

#### Returns

[`SolidColorSky`](SolidColorSky.md)

纹理立方体对象

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[uploadErpTexture](HDRTextureCube.md#uploaderptexture)

#### Defined in

[src/engine/textures/HDRTextureCube.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/engine/textures/HDRTextureCube.ts#L76)

___

### uploadTexture

▸ **uploadTexture**(`mip`, `texture`): [`SolidColorSky`](SolidColorSky.md)

上传纹理

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mip` | `number` | Mipmap级数 |
| `texture` | [`Texture`](Texture.md) | 纹理对象 |

#### Returns

[`SolidColorSky`](SolidColorSky.md)

纹理立方体对象

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[uploadTexture](HDRTextureCube.md#uploadtexture)

#### Defined in

[src/engine/textures/HDRTextureCube.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/engine/textures/HDRTextureCube.ts#L91)

___

### load

▸ **load**(`url`, `loaderFunctions?`): `Promise`<[`HDRTextureCube`](HDRTextureCube.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) |

#### Returns

`Promise`<[`HDRTextureCube`](HDRTextureCube.md)\>

#### Inherited from

[HDRTextureCube](HDRTextureCube.md).[load](HDRTextureCube.md#load)

#### Defined in

[src/engine/textures/HDRTextureCube.ts:147](https://github.com/Orillusion/orillusion/blob/main/src/engine/textures/HDRTextureCube.ts#L147)

___

### apply

▸ **apply**(`color`): [`SolidColorSky`](SolidColorSky.md)

设置纹理颜色

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](Color.md) | Color对象 |

#### Returns

[`SolidColorSky`](SolidColorSky.md)

#### Defined in

[src/engine/textures/SolidColorSky.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/engine/textures/SolidColorSky.ts#L39)

___

### serialization

▸ **serialization**(): [`SerializeTextureInstance`](SerializeTextureInstance.md)

#### Returns

[`SerializeTextureInstance`](SerializeTextureInstance.md)

#### Overrides

[HDRTextureCube](HDRTextureCube.md).[serialization](HDRTextureCube.md#serialization)

#### Defined in

[src/engine/textures/SolidColorSky.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/engine/textures/SolidColorSky.ts#L55)

## Accessors

### useMipmap

• `get` **useMipmap**(): `boolean`

开启/关闭mipmap的使用

#### Returns

`boolean`

#### Inherited from

HDRTextureCube.useMipmap

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:220](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L220)

• `set` **useMipmap**(`value`): `void`

开启/关闭mipmap的使用

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

HDRTextureCube.useMipmap

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:227](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L227)

___

### addressModeU

• `get` **addressModeU**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

HDRTextureCube.addressModeU

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:340](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L340)

• `set` **addressModeU**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUAddressMode` |

#### Returns

`void`

#### Inherited from

HDRTextureCube.addressModeU

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:343](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L343)

___

### addressModeV

• `get` **addressModeV**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

HDRTextureCube.addressModeV

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:352](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L352)

• `set` **addressModeV**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUAddressMode` |

#### Returns

`void`

#### Inherited from

HDRTextureCube.addressModeV

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:355](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L355)

___

### addressModeW

• `get` **addressModeW**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

HDRTextureCube.addressModeW

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:366](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L366)

• `set` **addressModeW**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUAddressMode` |

#### Returns

`void`

#### Inherited from

HDRTextureCube.addressModeW

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:369](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L369)

___

### magFilter

• `get` **magFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

HDRTextureCube.magFilter

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:380](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L380)

• `set` **magFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFilterMode` |

#### Returns

`void`

#### Inherited from

HDRTextureCube.magFilter

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:383](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L383)

___

### minFilter

• `get` **minFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

HDRTextureCube.minFilter

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:393](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L393)

• `set` **minFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFilterMode` |

#### Returns

`void`

#### Inherited from

HDRTextureCube.minFilter

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:396](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L396)

___

### mipmapFilter

• `get` **mipmapFilter**(): `GPUMipmapFilterMode`

#### Returns

`GPUMipmapFilterMode`

#### Inherited from

HDRTextureCube.mipmapFilter

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:406](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L406)

• `set` **mipmapFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUMipmapFilterMode` |

#### Returns

`void`

#### Inherited from

HDRTextureCube.mipmapFilter

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:409](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L409)

___

### lodMinClamp

• `get` **lodMinClamp**(): `number`

#### Returns

`number`

#### Inherited from

HDRTextureCube.lodMinClamp

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:418](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L418)

• `set` **lodMinClamp**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

HDRTextureCube.lodMinClamp

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:421](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L421)

___

### lodMaxClamp

• `get` **lodMaxClamp**(): `number`

#### Returns

`number`

#### Inherited from

HDRTextureCube.lodMaxClamp

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:432](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L432)

• `set` **lodMaxClamp**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

HDRTextureCube.lodMaxClamp

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:435](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L435)

___

### compare

• `get` **compare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Inherited from

HDRTextureCube.compare

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:448](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L448)

• `set` **compare**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Inherited from

HDRTextureCube.compare

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:451](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L451)

___

### maxAnisotropy

• `get` **maxAnisotropy**(): `number`

#### Returns

`number`

#### Inherited from

HDRTextureCube.maxAnisotropy

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:464](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L464)

• `set` **maxAnisotropy**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

HDRTextureCube.maxAnisotropy

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:467](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L467)

___

### color

• `get` **color**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

[src/engine/textures/SolidColorSky.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/engine/textures/SolidColorSky.ts#L47)

• `set` **color**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

[src/engine/textures/SolidColorSky.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/engine/textures/SolidColorSky.ts#L51)

## Constructors

### constructor

• **new SolidColorSky**(`color`)

创建一个纯色天空纹理对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](Color.md) | Color对象 |

#### Overrides

[HDRTextureCube](HDRTextureCube.md).[constructor](HDRTextureCube.md#constructor)

#### Defined in

[src/engine/textures/SolidColorSky.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/engine/textures/SolidColorSky.ts#L23)
