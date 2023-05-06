# Class: VideoTexture

Video Texture

## Hierarchy

- `Texture`

  ↳ **`VideoTexture`**


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
- [mipmapCount](VideoTexture.md#mipmapcount)

### Constructors

- [constructor](VideoTexture.md#constructor)

### Methods

- [load](VideoTexture.md#load)
- [getGPUTexture](VideoTexture.md#getgputexture)
- [getGPUView](VideoTexture.md#getgpuview)
- [init](VideoTexture.md#init)
- [bindStateChange](VideoTexture.md#bindstatechange)
- [unBindStateChange](VideoTexture.md#unbindstatechange)
- [destoryView](VideoTexture.md#destoryview)
- [destroy](VideoTexture.md#destroy)

### Accessors

- [useMipmap](VideoTexture.md#usemipmap)
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

## Properties

### media

• **media**: `HTMLVideoElement`

#### Defined in

[packages/media-extention/VideoTexture.ts:8](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/VideoTexture.ts#L8)

___

### name

• **name**: `string`

name of texture

#### Inherited from

Texture.name

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L14)

___

### url

• **url**: `string`

source url

#### Inherited from

Texture.url

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L18)

___

### pid

• **pid**: `number`

Return index in texture array

#### Inherited from

Texture.pid

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L27)

___

### view

• **view**: `GPUTextureView`

GPUTextureView

#### Inherited from

Texture.view

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L32)

___

### gpuSampler

• **gpuSampler**: `GPUSampler`

GPUSampler

#### Inherited from

Texture.gpuSampler

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L37)

___

### gpuSampler\_comparison

• **gpuSampler\_comparison**: `GPUSampler`

GPUSampler for comparison

#### Inherited from

Texture.gpuSampler\_comparison

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L42)

___

### format

• **format**: `GPUTextureFormat`

GPUTextureFormat

#### Inherited from

Texture.format

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L47)

___

### usage

• **usage**: `number`

GPUTextureUsage

#### Inherited from

Texture.usage

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L51)

___

### width

• **width**: `number` = `4`

texture width

#### Inherited from

Texture.width

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L55)

___

### height

• **height**: `number` = `4`

texture height

#### Inherited from

Texture.height

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L59)

___

### depthOrArrayLayers

• **depthOrArrayLayers**: `number` = `1`

depth or layers, default value is 1

#### Inherited from

Texture.depthOrArrayLayers

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L63)

___

### numberLayer

• **numberLayer**: `number` = `1`

depth or layers, default value is 1

#### Inherited from

Texture.numberLayer

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L67)

___

### viewDescriptor

• **viewDescriptor**: `GPUTextureViewDescriptor`

GPUTextureViewDescriptor

#### Inherited from

Texture.viewDescriptor

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L71)

___

### textureDescriptor

• **textureDescriptor**: `GPUTextureDescriptor`

GPUTextureDescriptor

#### Inherited from

Texture.textureDescriptor

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L75)

___

### visibility

• **visibility**: `number`

GPUShaderStage

#### Inherited from

Texture.visibility

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L79)

___

### textureBindingLayout

• **textureBindingLayout**: `GPUTextureBindingLayout`

GPUTextureBindingLayout, contains viewDimension and multisampled

#### Inherited from

Texture.textureBindingLayout

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L84)

___

### samplerBindingLayout

• **samplerBindingLayout**: `GPUSamplerBindingLayout`

GPUSamplerBindingLayout

#### Inherited from

Texture.samplerBindingLayout

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L91)

___

### sampler\_comparisonBindingLayout

• **sampler\_comparisonBindingLayout**: `GPUSamplerBindingLayout`

GPUSamplerBindingLayout

#### Inherited from

Texture.sampler\_comparisonBindingLayout

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L97)

___

### flipY

• **flipY**: `boolean`

whether to flip the image on the y-axis

#### Inherited from

Texture.flipY

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L104)

___

### isVideoTexture

• `Optional` **isVideoTexture**: `boolean`

whether is video texture

#### Inherited from

Texture.isVideoTexture

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L108)

___

### mipmapCount

• **mipmapCount**: `number` = `1`

mipmap Count, default value is 1

#### Inherited from

Texture.mipmapCount

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L116)

## Constructors

### constructor

• **new VideoTexture**()

#### Overrides

Texture.constructor

#### Defined in

[packages/media-extention/VideoTexture.ts:11](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/VideoTexture.ts#L11)

## Methods

### load

▸ **load**(`video`): `Promise`<`void`\>

load one Video Source

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `video` | `string` \| `HTMLVideoElement` \| `MediaStream` | the url of a video source, or a MediaStream object, or a HTMLVideoElement |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/media-extention/VideoTexture.ts:22](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/VideoTexture.ts#L22)

___

### getGPUTexture

▸ **getGPUTexture**(): `any`

#### Returns

`any`

#### Overrides

Texture.getGPUTexture

#### Defined in

[packages/media-extention/VideoTexture.ts:51](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/VideoTexture.ts#L51)

___

### getGPUView

▸ **getGPUView**(): `GPUExternalTexture`

#### Returns

`GPUExternalTexture`

#### Overrides

Texture.getGPUView

#### Defined in

[packages/media-extention/VideoTexture.ts:58](https://github.com/Orillusion/orillusion/blob/main/packages/media-extention/VideoTexture.ts#L58)

___

### init

▸ **init**(): [`VideoTexture`](VideoTexture.md)

#### Returns

[`VideoTexture`](VideoTexture.md)

#### Inherited from

Texture.init

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:138](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L138)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:313](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L313)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:317](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L317)

___

### destoryView

▸ **destoryView**(): [`VideoTexture`](VideoTexture.md)

#### Returns

[`VideoTexture`](VideoTexture.md)

#### Inherited from

Texture.destoryView

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:328](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L328)

___

### destroy

▸ **destroy**(): `void`

release the texture

#### Returns

`void`

#### Inherited from

Texture.destroy

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:336](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L336)

## Accessors

### useMipmap

• `get` **useMipmap**(): `boolean`

enable/disable mipmap

#### Returns

`boolean`

#### Inherited from

Texture.useMipmap

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:233](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L233)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:240](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L240)

___

### addressModeU

• `get` **addressModeU**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

Texture.addressModeU

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:346](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L346)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:349](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L349)

___

### addressModeV

• `get` **addressModeV**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

Texture.addressModeV

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:358](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L358)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:361](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L361)

___

### addressModeW

• `get` **addressModeW**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

Texture.addressModeW

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:372](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L372)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:375](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L375)

___

### magFilter

• `get` **magFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

Texture.magFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:386](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L386)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:389](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L389)

___

### minFilter

• `get` **minFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

Texture.minFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:399](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L399)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:402](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L402)

___

### mipmapFilter

• `get` **mipmapFilter**(): `GPUMipmapFilterMode`

#### Returns

`GPUMipmapFilterMode`

#### Inherited from

Texture.mipmapFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:412](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L412)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:415](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L415)

___

### lodMinClamp

• `get` **lodMinClamp**(): `number`

#### Returns

`number`

#### Inherited from

Texture.lodMinClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:424](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L424)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:427](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L427)

___

### lodMaxClamp

• `get` **lodMaxClamp**(): `number`

#### Returns

`number`

#### Inherited from

Texture.lodMaxClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:438](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L438)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:441](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L441)

___

### compare

• `get` **compare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Inherited from

Texture.compare

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:454](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L454)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:457](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L457)

___

### maxAnisotropy

• `get` **maxAnisotropy**(): `number`

#### Returns

`number`

#### Inherited from

Texture.maxAnisotropy

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:470](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L470)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:473](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L473)
