# Class: LDRTextureCube

LDRTextureCube: create a cube texture, it's low dynamic range texture

## Hierarchy

- `TextureCube`

  ↳ **`LDRTextureCube`**


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
- [mipmapCount](LDRTextureCube.md#mipmapcount)
- [width](LDRTextureCube.md#width)
- [height](LDRTextureCube.md#height)
- [depthOrArrayLayers](LDRTextureCube.md#depthorarraylayers)
- [visibility](LDRTextureCube.md#visibility)
- [textureBindingLayout](LDRTextureCube.md#texturebindinglayout)
- [samplerBindingLayout](LDRTextureCube.md#samplerbindinglayout)

### Methods

- [init](LDRTextureCube.md#init)
- [getGPUTexture](LDRTextureCube.md#getgputexture)
- [getGPUView](LDRTextureCube.md#getgpuview)
- [bindStateChange](LDRTextureCube.md#bindstatechange)
- [unBindStateChange](LDRTextureCube.md#unbindstatechange)
- [destoryView](LDRTextureCube.md#destoryview)
- [destroy](LDRTextureCube.md#destroy)
- [load](LDRTextureCube.md#load)
- [createFromTexture](LDRTextureCube.md#createfromtexture)

### Accessors

- [useMipmap](LDRTextureCube.md#usemipmap)
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

### Constructors

- [constructor](LDRTextureCube.md#constructor)

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

[src/gfx/graphics/webGpu/core/texture/Texture.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L18)

___

### pid

• **pid**: `number`

Return index in texture array

#### Inherited from

TextureCube.pid

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L27)

___

### view

• **view**: `GPUTextureView`

GPUTextureView

#### Inherited from

TextureCube.view

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L32)

___

### gpuSampler

• **gpuSampler**: `GPUSampler`

GPUSampler

#### Inherited from

TextureCube.gpuSampler

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L37)

___

### gpuSampler\_comparison

• **gpuSampler\_comparison**: `GPUSampler`

GPUSampler for comparison

#### Inherited from

TextureCube.gpuSampler\_comparison

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L42)

___

### format

• **format**: `GPUTextureFormat`

GPUTextureFormat

#### Inherited from

TextureCube.format

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L47)

___

### usage

• **usage**: `number`

GPUTextureUsage

#### Inherited from

TextureCube.usage

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L51)

___

### numberLayer

• **numberLayer**: `number` = `1`

depth or layers, default value is 1

#### Inherited from

TextureCube.numberLayer

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L67)

___

### viewDescriptor

• **viewDescriptor**: `GPUTextureViewDescriptor`

GPUTextureViewDescriptor

#### Inherited from

TextureCube.viewDescriptor

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L71)

___

### textureDescriptor

• **textureDescriptor**: `GPUTextureDescriptor`

GPUTextureDescriptor

#### Inherited from

TextureCube.textureDescriptor

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L75)

___

### sampler\_comparisonBindingLayout

• **sampler\_comparisonBindingLayout**: `GPUSamplerBindingLayout`

GPUSamplerBindingLayout

#### Inherited from

TextureCube.sampler\_comparisonBindingLayout

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L97)

___

### flipY

• **flipY**: `boolean`

whether to flip the image on the y-axis

#### Inherited from

TextureCube.flipY

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L104)

___

### isVideoTexture

• `Optional` **isVideoTexture**: `boolean`

whether is video texture

#### Inherited from

TextureCube.isVideoTexture

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L108)

___

### mipmapCount

• **mipmapCount**: `number` = `1`

mipmap Count, default value is 1

#### Inherited from

TextureCube.mipmapCount

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L116)

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

## Methods

### init

▸ **init**(): [`LDRTextureCube`](LDRTextureCube.md)

#### Returns

[`LDRTextureCube`](LDRTextureCube.md)

#### Inherited from

TextureCube.init

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

TextureCube.getGPUTexture

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

TextureCube.getGPUView

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

TextureCube.bindStateChange

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

TextureCube.unBindStateChange

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:317](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L317)

___

### destoryView

▸ **destoryView**(): [`LDRTextureCube`](LDRTextureCube.md)

#### Returns

[`LDRTextureCube`](LDRTextureCube.md)

#### Inherited from

TextureCube.destoryView

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:328](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L328)

___

### destroy

▸ **destroy**(): `void`

release the texture

#### Returns

`void`

#### Inherited from

TextureCube.destroy

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:336](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L336)

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

[src/textures/LDRTextureCube.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/textures/LDRTextureCube.ts#L38)

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

[src/textures/LDRTextureCube.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/textures/LDRTextureCube.ts#L65)

## Accessors

### useMipmap

• `get` **useMipmap**(): `boolean`

enable/disable mipmap

#### Returns

`boolean`

#### Inherited from

TextureCube.useMipmap

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

TextureCube.useMipmap

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:240](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L240)

___

### addressModeU

• `get` **addressModeU**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

TextureCube.addressModeU

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

TextureCube.addressModeU

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:349](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L349)

___

### addressModeV

• `get` **addressModeV**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

TextureCube.addressModeV

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

TextureCube.addressModeV

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:361](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L361)

___

### addressModeW

• `get` **addressModeW**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

TextureCube.addressModeW

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

TextureCube.addressModeW

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:375](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L375)

___

### magFilter

• `get` **magFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

TextureCube.magFilter

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

TextureCube.magFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:389](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L389)

___

### minFilter

• `get` **minFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

TextureCube.minFilter

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

TextureCube.minFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:402](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L402)

___

### mipmapFilter

• `get` **mipmapFilter**(): `GPUMipmapFilterMode`

#### Returns

`GPUMipmapFilterMode`

#### Inherited from

TextureCube.mipmapFilter

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

TextureCube.mipmapFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:415](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L415)

___

### lodMinClamp

• `get` **lodMinClamp**(): `number`

#### Returns

`number`

#### Inherited from

TextureCube.lodMinClamp

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

TextureCube.lodMinClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:427](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L427)

___

### lodMaxClamp

• `get` **lodMaxClamp**(): `number`

#### Returns

`number`

#### Inherited from

TextureCube.lodMaxClamp

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

TextureCube.lodMaxClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:441](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L441)

___

### compare

• `get` **compare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Inherited from

TextureCube.compare

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

TextureCube.compare

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:457](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L457)

___

### maxAnisotropy

• `get` **maxAnisotropy**(): `number`

#### Returns

`number`

#### Inherited from

TextureCube.maxAnisotropy

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

TextureCube.maxAnisotropy

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:473](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L473)

___

### ldrImageUrl

• `get` **ldrImageUrl**(): `string`

constructor: create a cube texture, it's low dynamic range texture

#### Returns

`string`

#### Defined in

[src/textures/LDRTextureCube.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/textures/LDRTextureCube.ts#L22)

## Constructors

### constructor

• **new LDRTextureCube**()

#### Overrides

TextureCube.constructor

#### Defined in

[src/textures/LDRTextureCube.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/textures/LDRTextureCube.ts#L25)
