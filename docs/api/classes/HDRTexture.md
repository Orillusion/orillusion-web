# Class: HDRTexture

HDR Texture

## Hierarchy

- [`Texture`](Texture.md)

  ↳ **`HDRTexture`**

### Constructors

- [constructor](HDRTexture.md#constructor)

### Properties

- [name](HDRTexture.md#name)
- [url](HDRTexture.md#url)
- [pid](HDRTexture.md#pid)
- [view](HDRTexture.md#view)
- [gpuSampler](HDRTexture.md#gpusampler)
- [gpuSampler\_comparison](HDRTexture.md#gpusampler_comparison)
- [format](HDRTexture.md#format)
- [usage](HDRTexture.md#usage)
- [width](HDRTexture.md#width)
- [height](HDRTexture.md#height)
- [depthOrArrayLayers](HDRTexture.md#depthorarraylayers)
- [numberLayer](HDRTexture.md#numberlayer)
- [viewDescriptor](HDRTexture.md#viewdescriptor)
- [textureDescriptor](HDRTexture.md#texturedescriptor)
- [visibility](HDRTexture.md#visibility)
- [textureBindingLayout](HDRTexture.md#texturebindinglayout)
- [samplerBindingLayout](HDRTexture.md#samplerbindinglayout)
- [sampler\_comparisonBindingLayout](HDRTexture.md#sampler_comparisonbindinglayout)
- [flipY](HDRTexture.md#flipy)
- [isVideoTexture](HDRTexture.md#isvideotexture)
- [isHDRTexture](HDRTexture.md#ishdrtexture)
- [mipmapCount](HDRTexture.md#mipmapcount)

### Accessors

- [useMipmap](HDRTexture.md#usemipmap)
- [sourceImageData](HDRTexture.md#sourceimagedata)
- [addressModeU](HDRTexture.md#addressmodeu)
- [addressModeV](HDRTexture.md#addressmodev)
- [addressModeW](HDRTexture.md#addressmodew)
- [magFilter](HDRTexture.md#magfilter)
- [minFilter](HDRTexture.md#minfilter)
- [mipmapFilter](HDRTexture.md#mipmapfilter)
- [lodMinClamp](HDRTexture.md#lodminclamp)
- [lodMaxClamp](HDRTexture.md#lodmaxclamp)
- [compare](HDRTexture.md#compare)
- [maxAnisotropy](HDRTexture.md#maxanisotropy)

### Methods

- [init](HDRTexture.md#init)
- [getGPUTexture](HDRTexture.md#getgputexture)
- [getGPUView](HDRTexture.md#getgpuview)
- [bindStateChange](HDRTexture.md#bindstatechange)
- [unBindStateChange](HDRTexture.md#unbindstatechange)
- [destroy](HDRTexture.md#destroy)
- [create](HDRTexture.md#create)
- [load](HDRTexture.md#load)

## Constructors

### constructor

• **new HDRTexture**()

#### Overrides

[Texture](Texture.md).[constructor](Texture.md#constructor)

#### Defined in

[src/textures/HDRTexture.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/textures/HDRTexture.ts#L14)

## Properties

### name

• **name**: `string`

name of texture

#### Inherited from

[Texture](Texture.md).[name](Texture.md#name)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L14)

___

### url

• **url**: `string`

source url

#### Inherited from

[Texture](Texture.md).[url](Texture.md#url)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L19)

___

### pid

• **pid**: `number`

Return index in texture array

#### Inherited from

[Texture](Texture.md).[pid](Texture.md#pid)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L29)

___

### view

• **view**: `GPUTextureView`

GPUTextureView

#### Inherited from

[Texture](Texture.md).[view](Texture.md#view)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L34)

___

### gpuSampler

• **gpuSampler**: `GPUSampler`

GPUSampler

#### Inherited from

[Texture](Texture.md).[gpuSampler](Texture.md#gpusampler)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L39)

___

### gpuSampler\_comparison

• **gpuSampler\_comparison**: `GPUSampler`

GPUSampler for comparison

#### Inherited from

[Texture](Texture.md).[gpuSampler_comparison](Texture.md#gpusampler_comparison)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L44)

___

### format

• **format**: `GPUTextureFormat`

GPUTextureFormat

#### Inherited from

[Texture](Texture.md).[format](Texture.md#format)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L49)

___

### usage

• **usage**: `number`

GPUTextureUsage

#### Inherited from

[Texture](Texture.md).[usage](Texture.md#usage)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L54)

___

### width

• **width**: `number` = `4`

texture width

#### Inherited from

[Texture](Texture.md).[width](Texture.md#width)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L59)

___

### height

• **height**: `number` = `4`

texture height

#### Inherited from

[Texture](Texture.md).[height](Texture.md#height)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L64)

___

### depthOrArrayLayers

• **depthOrArrayLayers**: `number` = `1`

depth or layers, default value is 1

#### Inherited from

[Texture](Texture.md).[depthOrArrayLayers](Texture.md#depthorarraylayers)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L69)

___

### numberLayer

• **numberLayer**: `number` = `1`

depth or layers, default value is 1

#### Inherited from

[Texture](Texture.md).[numberLayer](Texture.md#numberlayer)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L74)

___

### viewDescriptor

• **viewDescriptor**: `GPUTextureViewDescriptor`

GPUTextureViewDescriptor

#### Inherited from

[Texture](Texture.md).[viewDescriptor](Texture.md#viewdescriptor)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L79)

___

### textureDescriptor

• **textureDescriptor**: `GPUTextureDescriptor`

GPUTextureDescriptor

#### Inherited from

[Texture](Texture.md).[textureDescriptor](Texture.md#texturedescriptor)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L84)

___

### visibility

• **visibility**: `number`

GPUShaderStage

#### Inherited from

[Texture](Texture.md).[visibility](Texture.md#visibility)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L89)

___

### textureBindingLayout

• **textureBindingLayout**: `GPUTextureBindingLayout`

GPUTextureBindingLayout, contains viewDimension and multisampled

#### Inherited from

[Texture](Texture.md).[textureBindingLayout](Texture.md#texturebindinglayout)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L95)

___

### samplerBindingLayout

• **samplerBindingLayout**: `GPUSamplerBindingLayout`

GPUSamplerBindingLayout

#### Inherited from

[Texture](Texture.md).[samplerBindingLayout](Texture.md#samplerbindinglayout)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L103)

___

### sampler\_comparisonBindingLayout

• **sampler\_comparisonBindingLayout**: `GPUSamplerBindingLayout`

GPUSamplerBindingLayout

#### Inherited from

[Texture](Texture.md).[sampler_comparisonBindingLayout](Texture.md#sampler_comparisonbindinglayout)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L110)

___

### flipY

• **flipY**: `boolean`

whether to flip the image on the y-axis

#### Inherited from

[Texture](Texture.md).[flipY](Texture.md#flipy)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L117)

___

### isVideoTexture

• `Optional` **isVideoTexture**: `boolean`

whether is video texture

#### Inherited from

[Texture](Texture.md).[isVideoTexture](Texture.md#isvideotexture)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L122)

___

### isHDRTexture

• `Optional` **isHDRTexture**: `boolean`

#### Inherited from

[Texture](Texture.md).[isHDRTexture](Texture.md#ishdrtexture)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L123)

___

### mipmapCount

• **mipmapCount**: `number` = `1`

mipmap Count, default value is 1

#### Inherited from

[Texture](Texture.md).[mipmapCount](Texture.md#mipmapcount)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:190](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L190)

## Accessors

### useMipmap

• `get` **useMipmap**(): `boolean`

enable/disable mipmap

#### Returns

`boolean`

#### Inherited from

Texture.useMipmap

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:309](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L309)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:316](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L316)

___

### sourceImageData

• `get` **sourceImageData**(): `HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas`

#### Returns

`HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas`

#### Inherited from

Texture.sourceImageData

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:347](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L347)

___

### addressModeU

• `get` **addressModeU**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

Texture.addressModeU

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:425](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L425)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:429](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L429)

___

### addressModeV

• `get` **addressModeV**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

Texture.addressModeV

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:436](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L436)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:440](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L440)

___

### addressModeW

• `get` **addressModeW**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

Texture.addressModeW

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:447](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L447)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:451](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L451)

___

### magFilter

• `get` **magFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

Texture.magFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:458](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L458)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:462](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L462)

___

### minFilter

• `get` **minFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

Texture.minFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:469](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L469)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:473](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L473)

___

### mipmapFilter

• `get` **mipmapFilter**(): `GPUMipmapFilterMode`

#### Returns

`GPUMipmapFilterMode`

#### Inherited from

Texture.mipmapFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:480](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L480)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:484](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L484)

___

### lodMinClamp

• `get` **lodMinClamp**(): `number`

#### Returns

`number`

#### Inherited from

Texture.lodMinClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:491](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L491)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:495](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L495)

___

### lodMaxClamp

• `get` **lodMaxClamp**(): `number`

#### Returns

`number`

#### Inherited from

Texture.lodMaxClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:502](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L502)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:506](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L506)

___

### compare

• `get` **compare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Inherited from

Texture.compare

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:513](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L513)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:517](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L517)

___

### maxAnisotropy

• `get` **maxAnisotropy**(): `number`

#### Returns

`number`

#### Inherited from

Texture.maxAnisotropy

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:524](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L524)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:528](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L528)

## Methods

### init

▸ **init**(): [`HDRTexture`](HDRTexture.md)

#### Returns

[`HDRTexture`](HDRTexture.md)

#### Inherited from

[Texture](Texture.md).[init](Texture.md#init)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:214](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L214)

___

### getGPUTexture

▸ **getGPUTexture**(): `GPUTexture`

create or get GPUTexture

#### Returns

`GPUTexture`

GPUTexture

#### Inherited from

[Texture](Texture.md).[getGPUTexture](Texture.md#getgputexture)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:371](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L371)

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

[Texture](Texture.md).[getGPUView](Texture.md#getgpuview)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:382](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L382)

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

[Texture](Texture.md).[bindStateChange](Texture.md#bindstatechange)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:395](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L395)

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

[Texture](Texture.md).[unBindStateChange](Texture.md#unbindstatechange)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:399](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L399)

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

[Texture](Texture.md).[destroy](Texture.md#destroy)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:413](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L413)

___

### create

▸ **create**(`width?`, `height?`, `data?`, `useMipmap?`): [`HDRTexture`](HDRTexture.md)

fill this texture by array of numbers;the format as [red0, green0, blue0, e0, red1, green1, blue1, e1...]

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `width` | `number` | `32` | assign the texture width |
| `height` | `number` | `32` | assign the texture height |
| `data` | `ArrayBuffer` | `null` | color of each pixel |
| `useMipmap` | `boolean` | `true` | gen mipmap or not |

#### Returns

[`HDRTexture`](HDRTexture.md)

#### Defined in

[src/textures/HDRTexture.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/textures/HDRTexture.ts#L27)

___

### load

▸ **load**(`url`, `loaderFunctions?`): `Promise`<[`HDRTexture`](HDRTexture.md)\>

load one hdr image

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | the url of hdr image |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | callback when load complete |

#### Returns

`Promise`<[`HDRTexture`](HDRTexture.md)\>

#### Defined in

[src/textures/HDRTexture.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/textures/HDRTexture.ts#L84)
