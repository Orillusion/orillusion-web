# Class: VideoTexture

Video Texture

## Hierarchy

- `Texture`

  ↳ **`VideoTexture`**

### Constructors

- [constructor](VideoTexture.md#constructor)

### Properties

- [media](VideoTexture.md#media)
- [name](VideoTexture.md#name)
- [url](VideoTexture.md#url)
- [pid](VideoTexture.md#pid)
- [view](VideoTexture.md#view)
- [gpuSampler](VideoTexture.md#gpusampler)
- [gpuSampler\_comparison](VideoTexture.md#gpusampler_comparison)
- [format](VideoTexture.md#format)
- [usage](VideoTexture.md#usage)
- [width](VideoTexture.md#width)
- [height](VideoTexture.md#height)
- [depthOrArrayLayers](VideoTexture.md#depthorarraylayers)
- [numberLayer](VideoTexture.md#numberlayer)
- [viewDescriptor](VideoTexture.md#viewdescriptor)
- [textureDescriptor](VideoTexture.md#texturedescriptor)
- [visibility](VideoTexture.md#visibility)
- [textureBindingLayout](VideoTexture.md#texturebindinglayout)
- [samplerBindingLayout](VideoTexture.md#samplerbindinglayout)
- [sampler\_comparisonBindingLayout](VideoTexture.md#sampler_comparisonbindinglayout)
- [flipY](VideoTexture.md#flipy)
- [isVideoTexture](VideoTexture.md#isvideotexture)
- [isHDRTexture](VideoTexture.md#ishdrtexture)
- [mipmapCount](VideoTexture.md#mipmapcount)

### Accessors

- [useMipmap](VideoTexture.md#usemipmap)
- [sourceImageData](VideoTexture.md#sourceimagedata)
- [addressModeU](VideoTexture.md#addressmodeu)
- [addressModeV](VideoTexture.md#addressmodev)
- [addressModeW](VideoTexture.md#addressmodew)
- [magFilter](VideoTexture.md#magfilter)
- [minFilter](VideoTexture.md#minfilter)
- [mipmapFilter](VideoTexture.md#mipmapfilter)
- [lodMinClamp](VideoTexture.md#lodminclamp)
- [lodMaxClamp](VideoTexture.md#lodmaxclamp)
- [compare](VideoTexture.md#compare)
- [maxAnisotropy](VideoTexture.md#maxanisotropy)

### Methods

- [load](VideoTexture.md#load)
- [getGPUTexture](VideoTexture.md#getgputexture)
- [getGPUView](VideoTexture.md#getgpuview)
- [init](VideoTexture.md#init)
- [getMipmapCount](VideoTexture.md#getmipmapcount)
- [bindStateChange](VideoTexture.md#bindstatechange)
- [unBindStateChange](VideoTexture.md#unbindstatechange)
- [destroy](VideoTexture.md#destroy)
- [delayDestroyTexture](VideoTexture.md#delaydestroytexture)
- [destroyTexture](VideoTexture.md#destroytexture)

## Constructors

### constructor

• **new VideoTexture**(): [`VideoTexture`](VideoTexture.md)

#### Returns

[`VideoTexture`](VideoTexture.md)

#### Overrides

Texture.constructor

#### Defined in

[packages/media-extention/VideoTexture.ts:20](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/VideoTexture.ts#L20)

## Properties

### media

• **media**: `HTMLVideoElement`

#### Defined in

[packages/media-extention/VideoTexture.ts:17](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/VideoTexture.ts#L17)

___

### name

• **name**: `string`

name of texture

#### Inherited from

Texture.name

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L15)

___

### url

• **url**: `string`

source url

#### Inherited from

Texture.url

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L20)

___

### pid

• **pid**: `number`

Return index in texture array

#### Inherited from

Texture.pid

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L30)

___

### view

• **view**: `GPUTextureView` \| `GPUExternalTexture`

GPUTextureView

#### Inherited from

Texture.view

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L35)

___

### gpuSampler

• **gpuSampler**: `GPUSampler`

GPUSampler

#### Inherited from

Texture.gpuSampler

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L40)

___

### gpuSampler\_comparison

• **gpuSampler\_comparison**: `GPUSampler`

GPUSampler for comparison

#### Inherited from

Texture.gpuSampler\_comparison

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L45)

___

### format

• **format**: `GPUTextureFormat`

GPUTextureFormat

#### Inherited from

Texture.format

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L50)

___

### usage

• **usage**: `number`

GPUTextureUsage

#### Inherited from

Texture.usage

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L55)

___

### width

• **width**: `number` = `4`

texture width

#### Inherited from

Texture.width

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L60)

___

### height

• **height**: `number` = `4`

texture height

#### Inherited from

Texture.height

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L65)

___

### depthOrArrayLayers

• **depthOrArrayLayers**: `number` = `1`

depth or layers, default value is 1

#### Inherited from

Texture.depthOrArrayLayers

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L70)

___

### numberLayer

• **numberLayer**: `number` = `1`

depth or layers, default value is 1

#### Inherited from

Texture.numberLayer

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L75)

___

### viewDescriptor

• **viewDescriptor**: `GPUTextureViewDescriptor`

GPUTextureViewDescriptor

#### Inherited from

Texture.viewDescriptor

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L80)

___

### textureDescriptor

• **textureDescriptor**: `GPUTextureDescriptor`

GPUTextureDescriptor

#### Inherited from

Texture.textureDescriptor

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L85)

___

### visibility

• **visibility**: `number`

GPUShaderStage

#### Inherited from

Texture.visibility

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L90)

___

### textureBindingLayout

• **textureBindingLayout**: `GPUTextureBindingLayout`

GPUTextureBindingLayout, contains viewDimension and multisampled

#### Inherited from

Texture.textureBindingLayout

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L96)

___

### samplerBindingLayout

• **samplerBindingLayout**: `GPUSamplerBindingLayout`

GPUSamplerBindingLayout

#### Inherited from

Texture.samplerBindingLayout

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L104)

___

### sampler\_comparisonBindingLayout

• **sampler\_comparisonBindingLayout**: `GPUSamplerBindingLayout`

GPUSamplerBindingLayout

#### Inherited from

Texture.sampler\_comparisonBindingLayout

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L111)

___

### flipY

• **flipY**: `boolean`

whether to flip the image on the y-axis

#### Inherited from

Texture.flipY

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L118)

___

### isVideoTexture

• `Optional` **isVideoTexture**: `boolean`

whether is video texture

#### Inherited from

Texture.isVideoTexture

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L123)

___

### isHDRTexture

• `Optional` **isHDRTexture**: `boolean`

#### Inherited from

Texture.isHDRTexture

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L124)

___

### mipmapCount

• **mipmapCount**: `number` = `1`

mipmap Count, default value is 1

#### Inherited from

Texture.mipmapCount

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:191](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L191)

## Accessors

### useMipmap

• `get` **useMipmap**(): `boolean`

enable/disable mipmap

#### Returns

`boolean`

#### Inherited from

Texture.useMipmap

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:315](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L315)

• `set` **useMipmap**(`value`): `void`

get mipmap

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Texture.useMipmap

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:322](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L322)

___

### sourceImageData

• `get` **sourceImageData**(): `HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas`

#### Returns

`HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas`

#### Inherited from

Texture.sourceImageData

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:353](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L353)

___

### addressModeU

• `get` **addressModeU**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

Texture.addressModeU

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:438](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L438)

• `set` **addressModeU**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUAddressMode` |

#### Returns

`void`

#### Inherited from

Texture.addressModeU

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:442](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L442)

___

### addressModeV

• `get` **addressModeV**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

Texture.addressModeV

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:449](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L449)

• `set` **addressModeV**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUAddressMode` |

#### Returns

`void`

#### Inherited from

Texture.addressModeV

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:453](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L453)

___

### addressModeW

• `get` **addressModeW**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

Texture.addressModeW

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:460](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L460)

• `set` **addressModeW**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUAddressMode` |

#### Returns

`void`

#### Inherited from

Texture.addressModeW

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:464](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L464)

___

### magFilter

• `get` **magFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

Texture.magFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:471](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L471)

• `set` **magFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFilterMode` |

#### Returns

`void`

#### Inherited from

Texture.magFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:475](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L475)

___

### minFilter

• `get` **minFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

Texture.minFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:482](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L482)

• `set` **minFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFilterMode` |

#### Returns

`void`

#### Inherited from

Texture.minFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:486](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L486)

___

### mipmapFilter

• `get` **mipmapFilter**(): `GPUMipmapFilterMode`

#### Returns

`GPUMipmapFilterMode`

#### Inherited from

Texture.mipmapFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:493](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L493)

• `set` **mipmapFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUMipmapFilterMode` |

#### Returns

`void`

#### Inherited from

Texture.mipmapFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:497](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L497)

___

### lodMinClamp

• `get` **lodMinClamp**(): `number`

#### Returns

`number`

#### Inherited from

Texture.lodMinClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:504](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L504)

• `set` **lodMinClamp**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Texture.lodMinClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:508](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L508)

___

### lodMaxClamp

• `get` **lodMaxClamp**(): `number`

#### Returns

`number`

#### Inherited from

Texture.lodMaxClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:515](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L515)

• `set` **lodMaxClamp**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Texture.lodMaxClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:519](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L519)

___

### compare

• `get` **compare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Inherited from

Texture.compare

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:526](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L526)

• `set` **compare**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Inherited from

Texture.compare

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:530](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L530)

___

### maxAnisotropy

• `get` **maxAnisotropy**(): `number`

#### Returns

`number`

#### Inherited from

Texture.maxAnisotropy

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:537](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L537)

• `set` **maxAnisotropy**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Texture.maxAnisotropy

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:541](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L541)

## Methods

### load

▸ **load**(`video`): `Promise`\<`void`\>

load one Video Source

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `video` | `string` \| `HTMLVideoElement` \| `MediaStream` | the url of a video source, or a MediaStream object, or a HTMLVideoElement |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/media-extention/VideoTexture.ts:31](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/VideoTexture.ts#L31)

___

### getGPUTexture

▸ **getGPUTexture**(): `any`

#### Returns

`any`

#### Overrides

Texture.getGPUTexture

#### Defined in

[packages/media-extention/VideoTexture.ts:60](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/VideoTexture.ts#L60)

___

### getGPUView

▸ **getGPUView**(): `GPUExternalTexture`

#### Returns

`GPUExternalTexture`

#### Overrides

Texture.getGPUView

#### Defined in

[packages/media-extention/VideoTexture.ts:68](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/VideoTexture.ts#L68)

___

### init

▸ **init**(): `this`

#### Returns

`this`

#### Inherited from

Texture.init

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:215](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L215)

___

### getMipmapCount

▸ **getMipmapCount**(): `number`

#### Returns

`number`

#### Inherited from

Texture.getMipmapCount

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:357](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L357)

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

Texture.bindStateChange

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:408](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L408)

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

Texture.unBindStateChange

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:412](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L412)

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

Texture.destroy

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:426](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L426)

___

### delayDestroyTexture

▸ **delayDestroyTexture**(`tex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tex` | `GPUTexture` |

#### Returns

`void`

#### Inherited from

Texture.delayDestroyTexture

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:549](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L549)

___

### destroyTexture

▸ **destroyTexture**(): `void`

#### Returns

`void`

#### Inherited from

Texture.destroyTexture

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:555](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L555)
