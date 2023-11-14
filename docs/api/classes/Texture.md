# Class: Texture

Texture

## Hierarchy

- **`Texture`**

  ↳ [`BitmapTexture2D`](BitmapTexture2D.md)

  ↳ [`HDRTexture`](HDRTexture.md)

  ↳ [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

## Implements

- `GPUSamplerDescriptor`

### Constructors

- [constructor](Texture.md#constructor)

### Properties

- [name](Texture.md#name)
- [url](Texture.md#url)
- [pid](Texture.md#pid)
- [view](Texture.md#view)
- [gpuSampler](Texture.md#gpusampler)
- [gpuSampler\_comparison](Texture.md#gpusampler_comparison)
- [format](Texture.md#format)
- [usage](Texture.md#usage)
- [width](Texture.md#width)
- [height](Texture.md#height)
- [depthOrArrayLayers](Texture.md#depthorarraylayers)
- [numberLayer](Texture.md#numberlayer)
- [viewDescriptor](Texture.md#viewdescriptor)
- [textureDescriptor](Texture.md#texturedescriptor)
- [visibility](Texture.md#visibility)
- [textureBindingLayout](Texture.md#texturebindinglayout)
- [samplerBindingLayout](Texture.md#samplerbindinglayout)
- [sampler\_comparisonBindingLayout](Texture.md#sampler_comparisonbindinglayout)
- [flipY](Texture.md#flipy)
- [isVideoTexture](Texture.md#isvideotexture)
- [isHDRTexture](Texture.md#ishdrtexture)
- [mipmapCount](Texture.md#mipmapcount)

### Accessors

- [useMipmap](Texture.md#usemipmap)
- [sourceImageData](Texture.md#sourceimagedata)
- [addressModeU](Texture.md#addressmodeu)
- [addressModeV](Texture.md#addressmodev)
- [addressModeW](Texture.md#addressmodew)
- [magFilter](Texture.md#magfilter)
- [minFilter](Texture.md#minfilter)
- [mipmapFilter](Texture.md#mipmapfilter)
- [lodMinClamp](Texture.md#lodminclamp)
- [lodMaxClamp](Texture.md#lodmaxclamp)
- [compare](Texture.md#compare)
- [maxAnisotropy](Texture.md#maxanisotropy)

### Methods

- [init](Texture.md#init)
- [getMipmapCount](Texture.md#getmipmapcount)
- [getGPUTexture](Texture.md#getgputexture)
- [getGPUView](Texture.md#getgpuview)
- [bindStateChange](Texture.md#bindstatechange)
- [unBindStateChange](Texture.md#unbindstatechange)
- [destroy](Texture.md#destroy)
- [delayDestroyTexture](Texture.md#delaydestroytexture)
- [destroyTexture](Texture.md#destroytexture)

## Constructors

### constructor

• **new Texture**(`width?`, `height?`, `numberLayer?`)

Create a texture2D

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `width` | `number` | `32` | size of texture width |
| `height` | `number` | `32` | height of texture width |
| `numberLayer` | `number` | `1` | number layer of texture |

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:202](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L202)

## Properties

### name

• **name**: `string`

name of texture

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L15)

___

### url

• **url**: `string`

source url

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L20)

___

### pid

• **pid**: `number`

Return index in texture array

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L30)

___

### view

• **view**: `GPUTextureView` \| `GPUExternalTexture`

GPUTextureView

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L35)

___

### gpuSampler

• **gpuSampler**: `GPUSampler`

GPUSampler

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L40)

___

### gpuSampler\_comparison

• **gpuSampler\_comparison**: `GPUSampler`

GPUSampler for comparison

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L45)

___

### format

• **format**: `GPUTextureFormat`

GPUTextureFormat

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L50)

___

### usage

• **usage**: `number`

GPUTextureUsage

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L55)

___

### width

• **width**: `number` = `4`

texture width

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L60)

___

### height

• **height**: `number` = `4`

texture height

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L65)

___

### depthOrArrayLayers

• **depthOrArrayLayers**: `number` = `1`

depth or layers, default value is 1

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L70)

___

### numberLayer

• **numberLayer**: `number` = `1`

depth or layers, default value is 1

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L75)

___

### viewDescriptor

• **viewDescriptor**: `GPUTextureViewDescriptor`

GPUTextureViewDescriptor

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L80)

___

### textureDescriptor

• **textureDescriptor**: `GPUTextureDescriptor`

GPUTextureDescriptor

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L85)

___

### visibility

• **visibility**: `number`

GPUShaderStage

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L90)

___

### textureBindingLayout

• **textureBindingLayout**: `GPUTextureBindingLayout`

GPUTextureBindingLayout, contains viewDimension and multisampled

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L96)

___

### samplerBindingLayout

• **samplerBindingLayout**: `GPUSamplerBindingLayout`

GPUSamplerBindingLayout

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L104)

___

### sampler\_comparisonBindingLayout

• **sampler\_comparisonBindingLayout**: `GPUSamplerBindingLayout`

GPUSamplerBindingLayout

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L111)

___

### flipY

• **flipY**: `boolean`

whether to flip the image on the y-axis

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L118)

___

### isVideoTexture

• `Optional` **isVideoTexture**: `boolean`

whether is video texture

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L123)

___

### isHDRTexture

• `Optional` **isHDRTexture**: `boolean`

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L124)

___

### mipmapCount

• **mipmapCount**: `number` = `1`

mipmap Count, default value is 1

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:191](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L191)

## Accessors

### useMipmap

• `get` **useMipmap**(): `boolean`

enable/disable mipmap

#### Returns

`boolean`

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

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:320](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L320)

___

### sourceImageData

• `get` **sourceImageData**(): `HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas`

#### Returns

`HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas`

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:351](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L351)

___

### addressModeU

• `get` **addressModeU**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Implementation of

GPUSamplerDescriptor.addressModeU

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:436](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L436)

• `set` **addressModeU**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUAddressMode` |

#### Returns

`void`

#### Implementation of

GPUSamplerDescriptor.addressModeU

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:440](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L440)

___

### addressModeV

• `get` **addressModeV**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Implementation of

GPUSamplerDescriptor.addressModeV

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:447](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L447)

• `set` **addressModeV**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUAddressMode` |

#### Returns

`void`

#### Implementation of

GPUSamplerDescriptor.addressModeV

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:451](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L451)

___

### addressModeW

• `get` **addressModeW**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Implementation of

GPUSamplerDescriptor.addressModeW

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:458](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L458)

• `set` **addressModeW**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUAddressMode` |

#### Returns

`void`

#### Implementation of

GPUSamplerDescriptor.addressModeW

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:462](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L462)

___

### magFilter

• `get` **magFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Implementation of

GPUSamplerDescriptor.magFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:469](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L469)

• `set` **magFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFilterMode` |

#### Returns

`void`

#### Implementation of

GPUSamplerDescriptor.magFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:473](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L473)

___

### minFilter

• `get` **minFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Implementation of

GPUSamplerDescriptor.minFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:480](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L480)

• `set` **minFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFilterMode` |

#### Returns

`void`

#### Implementation of

GPUSamplerDescriptor.minFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:484](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L484)

___

### mipmapFilter

• `get` **mipmapFilter**(): `GPUMipmapFilterMode`

#### Returns

`GPUMipmapFilterMode`

#### Implementation of

GPUSamplerDescriptor.mipmapFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:491](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L491)

• `set` **mipmapFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUMipmapFilterMode` |

#### Returns

`void`

#### Implementation of

GPUSamplerDescriptor.mipmapFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:495](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L495)

___

### lodMinClamp

• `get` **lodMinClamp**(): `number`

#### Returns

`number`

#### Implementation of

GPUSamplerDescriptor.lodMinClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:502](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L502)

• `set` **lodMinClamp**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Implementation of

GPUSamplerDescriptor.lodMinClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:506](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L506)

___

### lodMaxClamp

• `get` **lodMaxClamp**(): `number`

#### Returns

`number`

#### Implementation of

GPUSamplerDescriptor.lodMaxClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:513](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L513)

• `set` **lodMaxClamp**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Implementation of

GPUSamplerDescriptor.lodMaxClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:517](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L517)

___

### compare

• `get` **compare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Implementation of

GPUSamplerDescriptor.compare

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:524](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L524)

• `set` **compare**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Implementation of

GPUSamplerDescriptor.compare

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:528](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L528)

___

### maxAnisotropy

• `get` **maxAnisotropy**(): `number`

#### Returns

`number`

#### Implementation of

GPUSamplerDescriptor.maxAnisotropy

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:535](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L535)

• `set` **maxAnisotropy**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Implementation of

GPUSamplerDescriptor.maxAnisotropy

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:539](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L539)

## Methods

### init

▸ **init**(): [`Texture`](Texture.md)

#### Returns

[`Texture`](Texture.md)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:215](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L215)

___

### getMipmapCount

▸ **getMipmapCount**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:355](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L355)

___

### getGPUTexture

▸ **getGPUTexture**(): `GPUTexture`

create or get GPUTexture

#### Returns

`GPUTexture`

GPUTexture

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

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:547](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L547)

___

### destroyTexture

▸ `Static` **destroyTexture**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:553](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L553)
