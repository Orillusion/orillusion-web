# Class: LDRTextureCube

LDRTextureCube: create a cube texture, it's low dynamic range texture

## Hierarchy

- `TextureCube`

  ↳ **`LDRTextureCube`**

  ↳↳ [`AtmosphericScatteringSky`](AtmosphericScatteringSky.md)

  ↳↳ [`SolidColorSky`](SolidColorSky.md)

### Constructors

- [constructor](LDRTextureCube.md#constructor)

### Properties

- [name](LDRTextureCube.md#name)
- [url](LDRTextureCube.md#url)
- [pid](LDRTextureCube.md#pid)
- [view](LDRTextureCube.md#view)
- [gpuSampler](LDRTextureCube.md#gpusampler)
- [gpuSampler\_comparison](LDRTextureCube.md#gpusampler_comparison)
- [format](LDRTextureCube.md#format)
- [usage](LDRTextureCube.md#usage)
- [numberLayer](LDRTextureCube.md#numberlayer)
- [viewDescriptor](LDRTextureCube.md#viewdescriptor)
- [textureDescriptor](LDRTextureCube.md#texturedescriptor)
- [sampler\_comparisonBindingLayout](LDRTextureCube.md#sampler_comparisonbindinglayout)
- [flipY](LDRTextureCube.md#flipy)
- [isVideoTexture](LDRTextureCube.md#isvideotexture)
- [isHDRTexture](LDRTextureCube.md#ishdrtexture)
- [mipmapCount](LDRTextureCube.md#mipmapcount)
- [width](LDRTextureCube.md#width)
- [height](LDRTextureCube.md#height)
- [depthOrArrayLayers](LDRTextureCube.md#depthorarraylayers)
- [visibility](LDRTextureCube.md#visibility)
- [textureBindingLayout](LDRTextureCube.md#texturebindinglayout)
- [samplerBindingLayout](LDRTextureCube.md#samplerbindinglayout)

### Accessors

- [useMipmap](LDRTextureCube.md#usemipmap)
- [sourceImageData](LDRTextureCube.md#sourceimagedata)
- [addressModeU](LDRTextureCube.md#addressmodeu)
- [addressModeV](LDRTextureCube.md#addressmodev)
- [addressModeW](LDRTextureCube.md#addressmodew)
- [magFilter](LDRTextureCube.md#magfilter)
- [minFilter](LDRTextureCube.md#minfilter)
- [mipmapFilter](LDRTextureCube.md#mipmapfilter)
- [lodMinClamp](LDRTextureCube.md#lodminclamp)
- [lodMaxClamp](LDRTextureCube.md#lodmaxclamp)
- [compare](LDRTextureCube.md#compare)
- [maxAnisotropy](LDRTextureCube.md#maxanisotropy)
- [ldrImageUrl](LDRTextureCube.md#ldrimageurl)

### Methods

- [init](LDRTextureCube.md#init)
- [getGPUTexture](LDRTextureCube.md#getgputexture)
- [getGPUView](LDRTextureCube.md#getgpuview)
- [bindStateChange](LDRTextureCube.md#bindstatechange)
- [unBindStateChange](LDRTextureCube.md#unbindstatechange)
- [destroy](LDRTextureCube.md#destroy)
- [load](LDRTextureCube.md#load)
- [createFromTexture](LDRTextureCube.md#createfromtexture)

## Constructors

### constructor

• **new LDRTextureCube**()

#### Overrides

TextureCube.constructor

#### Defined in

[src/textures/LDRTextureCube.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/textures/LDRTextureCube.ts#L24)

## Properties

### name

• **name**: `string`

name of texture

#### Inherited from

TextureCube.name

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L14)

___

### url

• **url**: `string`

source url

#### Inherited from

TextureCube.url

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L19)

___

### pid

• **pid**: `number`

Return index in texture array

#### Inherited from

TextureCube.pid

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L29)

___

### view

• **view**: `GPUTextureView`

GPUTextureView

#### Inherited from

TextureCube.view

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L34)

___

### gpuSampler

• **gpuSampler**: `GPUSampler`

GPUSampler

#### Inherited from

TextureCube.gpuSampler

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L39)

___

### gpuSampler\_comparison

• **gpuSampler\_comparison**: `GPUSampler`

GPUSampler for comparison

#### Inherited from

TextureCube.gpuSampler\_comparison

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L44)

___

### format

• **format**: `GPUTextureFormat`

GPUTextureFormat

#### Inherited from

TextureCube.format

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L49)

___

### usage

• **usage**: `number`

GPUTextureUsage

#### Inherited from

TextureCube.usage

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L54)

___

### numberLayer

• **numberLayer**: `number` = `1`

depth or layers, default value is 1

#### Inherited from

TextureCube.numberLayer

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L74)

___

### viewDescriptor

• **viewDescriptor**: `GPUTextureViewDescriptor`

GPUTextureViewDescriptor

#### Inherited from

TextureCube.viewDescriptor

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L79)

___

### textureDescriptor

• **textureDescriptor**: `GPUTextureDescriptor`

GPUTextureDescriptor

#### Inherited from

TextureCube.textureDescriptor

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L84)

___

### sampler\_comparisonBindingLayout

• **sampler\_comparisonBindingLayout**: `GPUSamplerBindingLayout`

GPUSamplerBindingLayout

#### Inherited from

TextureCube.sampler\_comparisonBindingLayout

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L110)

___

### flipY

• **flipY**: `boolean`

whether to flip the image on the y-axis

#### Inherited from

TextureCube.flipY

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L117)

___

### isVideoTexture

• `Optional` **isVideoTexture**: `boolean`

whether is video texture

#### Inherited from

TextureCube.isVideoTexture

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L122)

___

### isHDRTexture

• `Optional` **isHDRTexture**: `boolean`

#### Inherited from

TextureCube.isHDRTexture

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L123)

___

### mipmapCount

• **mipmapCount**: `number` = `1`

mipmap Count, default value is 1

#### Inherited from

TextureCube.mipmapCount

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:190](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L190)

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

TextureCube.useMipmap

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:316](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L316)

___

### sourceImageData

• `get` **sourceImageData**(): `HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas`

#### Returns

`HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas`

#### Inherited from

TextureCube.sourceImageData

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:347](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L347)

___

### addressModeU

• `get` **addressModeU**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

TextureCube.addressModeU

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

TextureCube.addressModeU

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:429](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L429)

___

### addressModeV

• `get` **addressModeV**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

TextureCube.addressModeV

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

TextureCube.addressModeV

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:440](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L440)

___

### addressModeW

• `get` **addressModeW**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

TextureCube.addressModeW

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

TextureCube.addressModeW

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:451](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L451)

___

### magFilter

• `get` **magFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

TextureCube.magFilter

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

TextureCube.magFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:462](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L462)

___

### minFilter

• `get` **minFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

TextureCube.minFilter

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

TextureCube.minFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:473](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L473)

___

### mipmapFilter

• `get` **mipmapFilter**(): `GPUMipmapFilterMode`

#### Returns

`GPUMipmapFilterMode`

#### Inherited from

TextureCube.mipmapFilter

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

TextureCube.mipmapFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:484](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L484)

___

### lodMinClamp

• `get` **lodMinClamp**(): `number`

#### Returns

`number`

#### Inherited from

TextureCube.lodMinClamp

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

TextureCube.lodMinClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:495](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L495)

___

### lodMaxClamp

• `get` **lodMaxClamp**(): `number`

#### Returns

`number`

#### Inherited from

TextureCube.lodMaxClamp

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

TextureCube.lodMaxClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:506](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L506)

___

### compare

• `get` **compare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Inherited from

TextureCube.compare

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

TextureCube.compare

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:517](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L517)

___

### maxAnisotropy

• `get` **maxAnisotropy**(): `number`

#### Returns

`number`

#### Inherited from

TextureCube.maxAnisotropy

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

TextureCube.maxAnisotropy

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:528](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L528)

___

### ldrImageUrl

• `get` **ldrImageUrl**(): `string`

constructor: create a cube texture, it's low dynamic range texture

#### Returns

`string`

#### Defined in

[src/textures/LDRTextureCube.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/textures/LDRTextureCube.ts#L21)

## Methods

### init

▸ **init**(): [`LDRTextureCube`](LDRTextureCube.md)

#### Returns

[`LDRTextureCube`](LDRTextureCube.md)

#### Inherited from

TextureCube.init

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

TextureCube.getGPUTexture

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

TextureCube.getGPUView

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

TextureCube.bindStateChange

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

TextureCube.unBindStateChange

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

TextureCube.destroy

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:413](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L413)

___

### load

▸ **load**(`url`, `loaderFunctions?`): `Promise`<[`LDRTextureCube`](LDRTextureCube.md)\>

load texture data from web url, which is a 360 panorama image

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | web url |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) | callback function when load complete |

#### Returns

`Promise`<[`LDRTextureCube`](LDRTextureCube.md)\>

#### Defined in

[src/textures/LDRTextureCube.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/textures/LDRTextureCube.ts#L37)

___

### createFromTexture

▸ **createFromTexture**(`size`, `texture`): [`LDRTextureCube`](LDRTextureCube.md)

create cube texture by environment image

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | size of cube texture |
| `texture` | [`Texture`](Texture.md) | source texture |

#### Returns

[`LDRTextureCube`](LDRTextureCube.md)

#### Defined in

[src/textures/LDRTextureCube.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/textures/LDRTextureCube.ts#L64)
