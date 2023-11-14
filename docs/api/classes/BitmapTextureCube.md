# Class: BitmapTextureCube

## Hierarchy

- `TextureCube`

  ↳ **`BitmapTextureCube`**

### Constructors

- [constructor](BitmapTextureCube.md#constructor)

### Properties

- [name](BitmapTextureCube.md#name)
- [url](BitmapTextureCube.md#url)
- [pid](BitmapTextureCube.md#pid)
- [view](BitmapTextureCube.md#view)
- [gpuSampler](BitmapTextureCube.md#gpusampler)
- [gpuSampler\_comparison](BitmapTextureCube.md#gpusampler_comparison)
- [format](BitmapTextureCube.md#format)
- [usage](BitmapTextureCube.md#usage)
- [numberLayer](BitmapTextureCube.md#numberlayer)
- [viewDescriptor](BitmapTextureCube.md#viewdescriptor)
- [textureDescriptor](BitmapTextureCube.md#texturedescriptor)
- [sampler\_comparisonBindingLayout](BitmapTextureCube.md#sampler_comparisonbindinglayout)
- [flipY](BitmapTextureCube.md#flipy)
- [isVideoTexture](BitmapTextureCube.md#isvideotexture)
- [isHDRTexture](BitmapTextureCube.md#ishdrtexture)
- [mipmapCount](BitmapTextureCube.md#mipmapcount)
- [width](BitmapTextureCube.md#width)
- [height](BitmapTextureCube.md#height)
- [depthOrArrayLayers](BitmapTextureCube.md#depthorarraylayers)
- [visibility](BitmapTextureCube.md#visibility)
- [textureBindingLayout](BitmapTextureCube.md#texturebindinglayout)
- [samplerBindingLayout](BitmapTextureCube.md#samplerbindinglayout)

### Accessors

- [useMipmap](BitmapTextureCube.md#usemipmap)
- [sourceImageData](BitmapTextureCube.md#sourceimagedata)
- [addressModeU](BitmapTextureCube.md#addressmodeu)
- [addressModeV](BitmapTextureCube.md#addressmodev)
- [addressModeW](BitmapTextureCube.md#addressmodew)
- [magFilter](BitmapTextureCube.md#magfilter)
- [minFilter](BitmapTextureCube.md#minfilter)
- [mipmapFilter](BitmapTextureCube.md#mipmapfilter)
- [lodMinClamp](BitmapTextureCube.md#lodminclamp)
- [lodMaxClamp](BitmapTextureCube.md#lodmaxclamp)
- [compare](BitmapTextureCube.md#compare)
- [maxAnisotropy](BitmapTextureCube.md#maxanisotropy)
- [images](BitmapTextureCube.md#images)

### Methods

- [init](BitmapTextureCube.md#init)
- [getMipmapCount](BitmapTextureCube.md#getmipmapcount)
- [getGPUTexture](BitmapTextureCube.md#getgputexture)
- [getGPUView](BitmapTextureCube.md#getgpuview)
- [bindStateChange](BitmapTextureCube.md#bindstatechange)
- [unBindStateChange](BitmapTextureCube.md#unbindstatechange)
- [destroy](BitmapTextureCube.md#destroy)
- [delayDestroyTexture](BitmapTextureCube.md#delaydestroytexture)
- [destroyTexture](BitmapTextureCube.md#destroytexture)
- [load](BitmapTextureCube.md#load)
- [loadStd](BitmapTextureCube.md#loadstd)

## Constructors

### constructor

• **new BitmapTextureCube**()

#### Overrides

TextureCube.constructor

#### Defined in

[src/textures/BitmapTextureCube.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/textures/BitmapTextureCube.ts#L20)

## Properties

### name

• **name**: `string`

name of texture

#### Inherited from

TextureCube.name

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L15)

___

### url

• **url**: `string`

source url

#### Inherited from

TextureCube.url

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L20)

___

### pid

• **pid**: `number`

Return index in texture array

#### Inherited from

TextureCube.pid

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L30)

___

### view

• **view**: `GPUTextureView` \| `GPUExternalTexture`

GPUTextureView

#### Inherited from

TextureCube.view

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L35)

___

### gpuSampler

• **gpuSampler**: `GPUSampler`

GPUSampler

#### Inherited from

TextureCube.gpuSampler

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L40)

___

### gpuSampler\_comparison

• **gpuSampler\_comparison**: `GPUSampler`

GPUSampler for comparison

#### Inherited from

TextureCube.gpuSampler\_comparison

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L45)

___

### format

• **format**: `GPUTextureFormat`

GPUTextureFormat

#### Inherited from

TextureCube.format

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L50)

___

### usage

• **usage**: `number`

GPUTextureUsage

#### Inherited from

TextureCube.usage

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L55)

___

### numberLayer

• **numberLayer**: `number` = `1`

depth or layers, default value is 1

#### Inherited from

TextureCube.numberLayer

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L75)

___

### viewDescriptor

• **viewDescriptor**: `GPUTextureViewDescriptor`

GPUTextureViewDescriptor

#### Inherited from

TextureCube.viewDescriptor

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L80)

___

### textureDescriptor

• **textureDescriptor**: `GPUTextureDescriptor`

GPUTextureDescriptor

#### Inherited from

TextureCube.textureDescriptor

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L85)

___

### sampler\_comparisonBindingLayout

• **sampler\_comparisonBindingLayout**: `GPUSamplerBindingLayout`

GPUSamplerBindingLayout

#### Inherited from

TextureCube.sampler\_comparisonBindingLayout

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L111)

___

### flipY

• **flipY**: `boolean`

whether to flip the image on the y-axis

#### Inherited from

TextureCube.flipY

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L118)

___

### isVideoTexture

• `Optional` **isVideoTexture**: `boolean`

whether is video texture

#### Inherited from

TextureCube.isVideoTexture

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L123)

___

### isHDRTexture

• `Optional` **isHDRTexture**: `boolean`

#### Inherited from

TextureCube.isHDRTexture

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L124)

___

### mipmapCount

• **mipmapCount**: `number` = `1`

mipmap Count, default value is 1

#### Inherited from

TextureCube.mipmapCount

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:191](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L191)

___

### width

• **width**: `number` = `4`

texture width, default value is 4

#### Inherited from

TextureCube.width

#### Defined in

[src/gfx/graphics/webGpu/core/texture/TextureCube.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/TextureCube.ts#L12)

___

### height

• **height**: `number` = `4`

texture height, default value is 4

#### Inherited from

TextureCube.height

#### Defined in

[src/gfx/graphics/webGpu/core/texture/TextureCube.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/TextureCube.ts#L16)

___

### depthOrArrayLayers

• **depthOrArrayLayers**: `number` = `6`

depth or array layers, default value is 6

#### Inherited from

TextureCube.depthOrArrayLayers

#### Defined in

[src/gfx/graphics/webGpu/core/texture/TextureCube.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/TextureCube.ts#L20)

___

### visibility

• **visibility**: `number` = `GPUShaderStage.FRAGMENT`

GPUShaderStage

#### Inherited from

TextureCube.visibility

#### Defined in

[src/gfx/graphics/webGpu/core/texture/TextureCube.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/TextureCube.ts#L25)

___

### textureBindingLayout

• **textureBindingLayout**: `GPUTextureBindingLayout`

GPUTextureBindingLayout

#### Inherited from

TextureCube.textureBindingLayout

#### Defined in

[src/gfx/graphics/webGpu/core/texture/TextureCube.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/TextureCube.ts#L30)

___

### samplerBindingLayout

• **samplerBindingLayout**: `GPUSamplerBindingLayout`

GPUSamplerBindingLayout

#### Inherited from

TextureCube.samplerBindingLayout

#### Defined in

[src/gfx/graphics/webGpu/core/texture/TextureCube.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/TextureCube.ts#L38)

## Accessors

### useMipmap

• `get` **useMipmap**(): `boolean`

enable/disable mipmap

#### Returns

`boolean`

#### Inherited from

TextureCube.useMipmap

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:313](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L313)

• `set` **useMipmap**(`value`): `void`

get mipmap

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

TextureCube.useMipmap

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:320](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L320)

___

### sourceImageData

• `get` **sourceImageData**(): `HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas`

#### Returns

`HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas`

#### Inherited from

TextureCube.sourceImageData

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:351](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L351)

___

### addressModeU

• `get` **addressModeU**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

TextureCube.addressModeU

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:436](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L436)

• `set` **addressModeU**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUAddressMode` |

#### Returns

`void`

#### Inherited from

TextureCube.addressModeU

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:440](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L440)

___

### addressModeV

• `get` **addressModeV**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

TextureCube.addressModeV

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:447](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L447)

• `set` **addressModeV**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUAddressMode` |

#### Returns

`void`

#### Inherited from

TextureCube.addressModeV

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:451](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L451)

___

### addressModeW

• `get` **addressModeW**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

TextureCube.addressModeW

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:458](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L458)

• `set` **addressModeW**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUAddressMode` |

#### Returns

`void`

#### Inherited from

TextureCube.addressModeW

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:462](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L462)

___

### magFilter

• `get` **magFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

TextureCube.magFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:469](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L469)

• `set` **magFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFilterMode` |

#### Returns

`void`

#### Inherited from

TextureCube.magFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:473](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L473)

___

### minFilter

• `get` **minFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

TextureCube.minFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:480](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L480)

• `set` **minFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFilterMode` |

#### Returns

`void`

#### Inherited from

TextureCube.minFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:484](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L484)

___

### mipmapFilter

• `get` **mipmapFilter**(): `GPUMipmapFilterMode`

#### Returns

`GPUMipmapFilterMode`

#### Inherited from

TextureCube.mipmapFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:491](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L491)

• `set` **mipmapFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUMipmapFilterMode` |

#### Returns

`void`

#### Inherited from

TextureCube.mipmapFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:495](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L495)

___

### lodMinClamp

• `get` **lodMinClamp**(): `number`

#### Returns

`number`

#### Inherited from

TextureCube.lodMinClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:502](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L502)

• `set` **lodMinClamp**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

TextureCube.lodMinClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:506](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L506)

___

### lodMaxClamp

• `get` **lodMaxClamp**(): `number`

#### Returns

`number`

#### Inherited from

TextureCube.lodMaxClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:513](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L513)

• `set` **lodMaxClamp**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

TextureCube.lodMaxClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:517](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L517)

___

### compare

• `get` **compare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Inherited from

TextureCube.compare

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:524](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L524)

• `set` **compare**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Inherited from

TextureCube.compare

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:528](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L528)

___

### maxAnisotropy

• `get` **maxAnisotropy**(): `number`

#### Returns

`number`

#### Inherited from

TextureCube.maxAnisotropy

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:535](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L535)

• `set` **maxAnisotropy**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

TextureCube.maxAnisotropy

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:539](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L539)

___

### images

• `get` **images**(): `HTMLCanvasElement`[] \| `ImageBitmap`[] \| `OffscreenCanvas`[]

get images of this texture

#### Returns

`HTMLCanvasElement`[] \| `ImageBitmap`[] \| `OffscreenCanvas`[]

#### Defined in

[src/textures/BitmapTextureCube.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/textures/BitmapTextureCube.ts#L131)

• `set` **images**(`value`): `void`

set images of this texture

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `HTMLCanvasElement`[] \| `ImageBitmap`[] \| `OffscreenCanvas`[] |

#### Returns

`void`

#### Defined in

[src/textures/BitmapTextureCube.ts:138](https://github.com/Orillusion/orillusion/blob/main/src/textures/BitmapTextureCube.ts#L138)

## Methods

### init

▸ **init**(): [`BitmapTextureCube`](BitmapTextureCube.md)

#### Returns

[`BitmapTextureCube`](BitmapTextureCube.md)

#### Inherited from

TextureCube.init

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:215](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L215)

___

### getMipmapCount

▸ **getMipmapCount**(): `number`

#### Returns

`number`

#### Inherited from

TextureCube.getMipmapCount

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:355](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L355)

___

### getGPUTexture

▸ **getGPUTexture**(): `GPUTexture`

create or get GPUTexture

#### Returns

`GPUTexture`

GPUTexture

#### Inherited from

TextureCube.getGPUTexture

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:382](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L382)

___

### getGPUView

▸ **getGPUView**(`index?`): `GPUTextureView` \| `GPUExternalTexture`

create or get GPUTextureView

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `0` |

#### Returns

`GPUTextureView` \| `GPUExternalTexture`

GPUTextureView | GPUExternalTexture

#### Inherited from

TextureCube.getGPUView

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:393](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L393)

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

TextureCube.bindStateChange

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:406](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L406)

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

TextureCube.unBindStateChange

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:410](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L410)

___

### destroy

▸ **destroy**(`force?`): `void`

release the texture

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

TextureCube.destroy

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:424](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L424)

___

### delayDestroyTexture

▸ `Static` **delayDestroyTexture**(`tex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tex` | `GPUTexture` |

#### Returns

`void`

#### Inherited from

TextureCube.delayDestroyTexture

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:547](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L547)

___

### destroyTexture

▸ `Static` **destroyTexture**(): `void`

#### Returns

`void`

#### Inherited from

TextureCube.destroyTexture

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:553](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L553)

___

### load

▸ **load**(`urls`): `Promise`<`boolean`\>

load texture data from array of web url.
make sure there are six images in a group,
and the order is: nx, px, py, ny, nz, pz

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `urls` | `string`[] | array of image url |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/textures/BitmapTextureCube.ts:173](https://github.com/Orillusion/orillusion/blob/main/src/textures/BitmapTextureCube.ts#L173)

___

### loadStd

▸ **loadStd**(`url`): `Promise`<`boolean`\>

load texture data from url.
the image is assembled from six images into cross shaped image.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | the path of image |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/textures/BitmapTextureCube.ts:204](https://github.com/Orillusion/orillusion/blob/main/src/textures/BitmapTextureCube.ts#L204)
