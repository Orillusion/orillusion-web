# Class: HDRTexture

HDR Texture

## Hierarchy

- [`Texture`](Texture.md)

  ↳ **`HDRTexture`**


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
- [mipmapCount](HDRTexture.md#mipmapcount)

### Methods

- [init](HDRTexture.md#init)
- [getGPUTexture](HDRTexture.md#getgputexture)
- [getGPUView](HDRTexture.md#getgpuview)
- [bindStateChange](HDRTexture.md#bindstatechange)
- [unBindStateChange](HDRTexture.md#unbindstatechange)
- [destoryView](HDRTexture.md#destoryview)
- [destroy](HDRTexture.md#destroy)
- [create](HDRTexture.md#create)
- [load](HDRTexture.md#load)

### Accessors

- [useMipmap](HDRTexture.md#usemipmap)
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

### Constructors

- [constructor](HDRTexture.md#constructor)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L18)

___

### pid

• **pid**: `number`

Return index in texture array

#### Inherited from

[Texture](Texture.md).[pid](Texture.md#pid)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L27)

___

### view

• **view**: `GPUTextureView`

GPUTextureView

#### Inherited from

[Texture](Texture.md).[view](Texture.md#view)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L32)

___

### gpuSampler

• **gpuSampler**: `GPUSampler`

GPUSampler

#### Inherited from

[Texture](Texture.md).[gpuSampler](Texture.md#gpusampler)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L37)

___

### gpuSampler\_comparison

• **gpuSampler\_comparison**: `GPUSampler`

GPUSampler for comparison

#### Inherited from

[Texture](Texture.md).[gpuSampler_comparison](Texture.md#gpusampler_comparison)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L42)

___

### format

• **format**: `GPUTextureFormat`

GPUTextureFormat

#### Inherited from

[Texture](Texture.md).[format](Texture.md#format)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L47)

___

### usage

• **usage**: `number`

GPUTextureUsage

#### Inherited from

[Texture](Texture.md).[usage](Texture.md#usage)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L51)

___

### width

• **width**: `number` = `4`

texture width

#### Inherited from

[Texture](Texture.md).[width](Texture.md#width)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L55)

___

### height

• **height**: `number` = `4`

texture height

#### Inherited from

[Texture](Texture.md).[height](Texture.md#height)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L59)

___

### depthOrArrayLayers

• **depthOrArrayLayers**: `number` = `1`

depth or layers, default value is 1

#### Inherited from

[Texture](Texture.md).[depthOrArrayLayers](Texture.md#depthorarraylayers)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L63)

___

### numberLayer

• **numberLayer**: `number` = `1`

depth or layers, default value is 1

#### Inherited from

[Texture](Texture.md).[numberLayer](Texture.md#numberlayer)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L67)

___

### viewDescriptor

• **viewDescriptor**: `GPUTextureViewDescriptor`

GPUTextureViewDescriptor

#### Inherited from

[Texture](Texture.md).[viewDescriptor](Texture.md#viewdescriptor)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L71)

___

### textureDescriptor

• **textureDescriptor**: `GPUTextureDescriptor`

GPUTextureDescriptor

#### Inherited from

[Texture](Texture.md).[textureDescriptor](Texture.md#texturedescriptor)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L75)

___

### visibility

• **visibility**: `number`

GPUShaderStage

#### Inherited from

[Texture](Texture.md).[visibility](Texture.md#visibility)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L79)

___

### textureBindingLayout

• **textureBindingLayout**: `GPUTextureBindingLayout`

GPUTextureBindingLayout, contains viewDimension and multisampled

#### Inherited from

[Texture](Texture.md).[textureBindingLayout](Texture.md#texturebindinglayout)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L84)

___

### samplerBindingLayout

• **samplerBindingLayout**: `GPUSamplerBindingLayout`

GPUSamplerBindingLayout

#### Inherited from

[Texture](Texture.md).[samplerBindingLayout](Texture.md#samplerbindinglayout)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L91)

___

### sampler\_comparisonBindingLayout

• **sampler\_comparisonBindingLayout**: `GPUSamplerBindingLayout`

GPUSamplerBindingLayout

#### Inherited from

[Texture](Texture.md).[sampler_comparisonBindingLayout](Texture.md#sampler_comparisonbindinglayout)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L97)

___

### flipY

• **flipY**: `boolean`

whether to flip the image on the y-axis

#### Inherited from

[Texture](Texture.md).[flipY](Texture.md#flipy)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L104)

___

### isVideoTexture

• `Optional` **isVideoTexture**: `boolean`

whether is video texture

#### Inherited from

[Texture](Texture.md).[isVideoTexture](Texture.md#isvideotexture)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L108)

___

### mipmapCount

• **mipmapCount**: `number` = `1`

mipmap Count, default value is 1

#### Inherited from

[Texture](Texture.md).[mipmapCount](Texture.md#mipmapcount)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L116)

## Methods

### init

▸ **init**(): [`HDRTexture`](HDRTexture.md)

#### Returns

[`HDRTexture`](HDRTexture.md)

#### Inherited from

[Texture](Texture.md).[init](Texture.md#init)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:138](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L138)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:291](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L291)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:302](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L302)

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

[Texture](Texture.md).[unBindStateChange](Texture.md#unbindstatechange)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:317](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L317)

___

### destoryView

▸ **destoryView**(): [`HDRTexture`](HDRTexture.md)

#### Returns

[`HDRTexture`](HDRTexture.md)

#### Inherited from

[Texture](Texture.md).[destoryView](Texture.md#destoryview)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:328](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L328)

___

### destroy

▸ **destroy**(): `void`

release the texture

#### Returns

`void`

#### Inherited from

[Texture](Texture.md).[destroy](Texture.md#destroy)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:336](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L336)

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

[src/textures/HDRTexture.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/textures/HDRTexture.ts#L26)

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

[src/textures/HDRTexture.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/textures/HDRTexture.ts#L83)

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

## Constructors

### constructor

• **new HDRTexture**()

#### Overrides

[Texture](Texture.md).[constructor](Texture.md#constructor)

#### Defined in

[src/textures/HDRTexture.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/textures/HDRTexture.ts#L14)
