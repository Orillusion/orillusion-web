# Class: SolidColorSky

create a cube texture, which filled by solid color.

## Hierarchy

- [`LDRTextureCube`](LDRTextureCube.md)

  ↳ **`SolidColorSky`**

### Constructors

- [constructor](SolidColorSky.md#constructor)

### Properties

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
- [isVideoTexture](SolidColorSky.md#isvideotexture)
- [isHDRTexture](SolidColorSky.md#ishdrtexture)
- [mipmapCount](SolidColorSky.md#mipmapcount)
- [width](SolidColorSky.md#width)
- [height](SolidColorSky.md#height)
- [depthOrArrayLayers](SolidColorSky.md#depthorarraylayers)
- [visibility](SolidColorSky.md#visibility)
- [textureBindingLayout](SolidColorSky.md#texturebindinglayout)
- [samplerBindingLayout](SolidColorSky.md#samplerbindinglayout)

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
- [ldrImageUrl](SolidColorSky.md#ldrimageurl)
- [color](SolidColorSky.md#color)

### Methods

- [init](SolidColorSky.md#init)
- [getGPUTexture](SolidColorSky.md#getgputexture)
- [getGPUView](SolidColorSky.md#getgpuview)
- [bindStateChange](SolidColorSky.md#bindstatechange)
- [unBindStateChange](SolidColorSky.md#unbindstatechange)
- [destroy](SolidColorSky.md#destroy)
- [load](SolidColorSky.md#load)
- [createFromTexture](SolidColorSky.md#createfromtexture)

## Constructors

### constructor

• **new SolidColorSky**(`color`)

create a cube texture, which filled by solid color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](Color.md) | solid color |

#### Overrides

[LDRTextureCube](LDRTextureCube.md).[constructor](LDRTextureCube.md#constructor)

#### Defined in

[src/textures/SolidColorSky.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/textures/SolidColorSky.ts#L22)

## Properties

### name

• **name**: `string`

name of texture

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[name](LDRTextureCube.md#name)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L14)

___

### url

• **url**: `string`

source url

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[url](LDRTextureCube.md#url)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L19)

___

### pid

• **pid**: `number`

Return index in texture array

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[pid](LDRTextureCube.md#pid)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L29)

___

### view

• **view**: `GPUTextureView`

GPUTextureView

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[view](LDRTextureCube.md#view)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L34)

___

### gpuSampler

• **gpuSampler**: `GPUSampler`

GPUSampler

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[gpuSampler](LDRTextureCube.md#gpusampler)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L39)

___

### gpuSampler\_comparison

• **gpuSampler\_comparison**: `GPUSampler`

GPUSampler for comparison

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[gpuSampler_comparison](LDRTextureCube.md#gpusampler_comparison)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L44)

___

### format

• **format**: `GPUTextureFormat`

GPUTextureFormat

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[format](LDRTextureCube.md#format)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L49)

___

### usage

• **usage**: `number`

GPUTextureUsage

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[usage](LDRTextureCube.md#usage)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L54)

___

### numberLayer

• **numberLayer**: `number` = `1`

depth or layers, default value is 1

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[numberLayer](LDRTextureCube.md#numberlayer)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L74)

___

### viewDescriptor

• **viewDescriptor**: `GPUTextureViewDescriptor`

GPUTextureViewDescriptor

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[viewDescriptor](LDRTextureCube.md#viewdescriptor)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L79)

___

### textureDescriptor

• **textureDescriptor**: `GPUTextureDescriptor`

GPUTextureDescriptor

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[textureDescriptor](LDRTextureCube.md#texturedescriptor)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L84)

___

### sampler\_comparisonBindingLayout

• **sampler\_comparisonBindingLayout**: `GPUSamplerBindingLayout`

GPUSamplerBindingLayout

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[sampler_comparisonBindingLayout](LDRTextureCube.md#sampler_comparisonbindinglayout)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L110)

___

### flipY

• **flipY**: `boolean`

whether to flip the image on the y-axis

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[flipY](LDRTextureCube.md#flipy)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L117)

___

### isVideoTexture

• `Optional` **isVideoTexture**: `boolean`

whether is video texture

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[isVideoTexture](LDRTextureCube.md#isvideotexture)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L122)

___

### isHDRTexture

• `Optional` **isHDRTexture**: `boolean`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[isHDRTexture](LDRTextureCube.md#ishdrtexture)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L123)

___

### mipmapCount

• **mipmapCount**: `number` = `1`

mipmap Count, default value is 1

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[mipmapCount](LDRTextureCube.md#mipmapcount)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:190](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L190)

___

### width

• **width**: `number` = `4`

texture width, default value is 4

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[width](LDRTextureCube.md#width)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/TextureCube.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/TextureCube.ts#L12)

___

### height

• **height**: `number` = `4`

texture height, default value is 4

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[height](LDRTextureCube.md#height)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/TextureCube.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/TextureCube.ts#L16)

___

### depthOrArrayLayers

• **depthOrArrayLayers**: `number` = `6`

depth or array layers, default value is 6

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[depthOrArrayLayers](LDRTextureCube.md#depthorarraylayers)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/TextureCube.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/TextureCube.ts#L20)

___

### visibility

• **visibility**: `number` = `GPUShaderStage.FRAGMENT`

GPUShaderStage

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[visibility](LDRTextureCube.md#visibility)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/TextureCube.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/TextureCube.ts#L25)

___

### textureBindingLayout

• **textureBindingLayout**: `GPUTextureBindingLayout`

GPUTextureBindingLayout

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[textureBindingLayout](LDRTextureCube.md#texturebindinglayout)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/TextureCube.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/TextureCube.ts#L30)

___

### samplerBindingLayout

• **samplerBindingLayout**: `GPUSamplerBindingLayout`

GPUSamplerBindingLayout

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[samplerBindingLayout](LDRTextureCube.md#samplerbindinglayout)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/TextureCube.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/TextureCube.ts#L38)

## Accessors

### useMipmap

• `get` **useMipmap**(): `boolean`

enable/disable mipmap

#### Returns

`boolean`

#### Inherited from

LDRTextureCube.useMipmap

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

LDRTextureCube.useMipmap

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:316](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L316)

___

### addressModeU

• `get` **addressModeU**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

LDRTextureCube.addressModeU

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:419](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L419)

• `set` **addressModeU**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUAddressMode` |

#### Returns

`void`

#### Inherited from

LDRTextureCube.addressModeU

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:423](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L423)

___

### addressModeV

• `get` **addressModeV**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

LDRTextureCube.addressModeV

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:430](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L430)

• `set` **addressModeV**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUAddressMode` |

#### Returns

`void`

#### Inherited from

LDRTextureCube.addressModeV

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:434](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L434)

___

### addressModeW

• `get` **addressModeW**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

LDRTextureCube.addressModeW

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:441](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L441)

• `set` **addressModeW**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUAddressMode` |

#### Returns

`void`

#### Inherited from

LDRTextureCube.addressModeW

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:445](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L445)

___

### magFilter

• `get` **magFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

LDRTextureCube.magFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:452](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L452)

• `set` **magFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFilterMode` |

#### Returns

`void`

#### Inherited from

LDRTextureCube.magFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:456](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L456)

___

### minFilter

• `get` **minFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

LDRTextureCube.minFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:463](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L463)

• `set` **minFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFilterMode` |

#### Returns

`void`

#### Inherited from

LDRTextureCube.minFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:467](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L467)

___

### mipmapFilter

• `get` **mipmapFilter**(): `GPUMipmapFilterMode`

#### Returns

`GPUMipmapFilterMode`

#### Inherited from

LDRTextureCube.mipmapFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:474](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L474)

• `set` **mipmapFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUMipmapFilterMode` |

#### Returns

`void`

#### Inherited from

LDRTextureCube.mipmapFilter

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:478](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L478)

___

### lodMinClamp

• `get` **lodMinClamp**(): `number`

#### Returns

`number`

#### Inherited from

LDRTextureCube.lodMinClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:485](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L485)

• `set` **lodMinClamp**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

LDRTextureCube.lodMinClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:489](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L489)

___

### lodMaxClamp

• `get` **lodMaxClamp**(): `number`

#### Returns

`number`

#### Inherited from

LDRTextureCube.lodMaxClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:496](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L496)

• `set` **lodMaxClamp**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

LDRTextureCube.lodMaxClamp

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:500](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L500)

___

### compare

• `get` **compare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Inherited from

LDRTextureCube.compare

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:507](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L507)

• `set` **compare**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Inherited from

LDRTextureCube.compare

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:511](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L511)

___

### maxAnisotropy

• `get` **maxAnisotropy**(): `number`

#### Returns

`number`

#### Inherited from

LDRTextureCube.maxAnisotropy

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:518](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L518)

• `set` **maxAnisotropy**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

LDRTextureCube.maxAnisotropy

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:522](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L522)

___

### ldrImageUrl

• `get` **ldrImageUrl**(): `string`

constructor: create a cube texture, it's low dynamic range texture

#### Returns

`string`

#### Inherited from

LDRTextureCube.ldrImageUrl

#### Defined in

[src/textures/LDRTextureCube.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/textures/LDRTextureCube.ts#L21)

___

### color

• `get` **color**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

[src/textures/SolidColorSky.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/textures/SolidColorSky.ts#L41)

• `set` **color**(`value`): `void`

change solid color

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Color`](Color.md) | target color |

#### Returns

`void`

#### Defined in

[src/textures/SolidColorSky.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/textures/SolidColorSky.ts#L50)

## Methods

### init

▸ **init**(): [`SolidColorSky`](SolidColorSky.md)

#### Returns

[`SolidColorSky`](SolidColorSky.md)

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[init](LDRTextureCube.md#init)

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

[LDRTextureCube](LDRTextureCube.md).[getGPUTexture](LDRTextureCube.md#getgputexture)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:367](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L367)

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

[LDRTextureCube](LDRTextureCube.md).[getGPUView](LDRTextureCube.md#getgpuview)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:378](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L378)

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

[LDRTextureCube](LDRTextureCube.md).[bindStateChange](LDRTextureCube.md#bindstatechange)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:389](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L389)

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

[LDRTextureCube](LDRTextureCube.md).[unBindStateChange](LDRTextureCube.md#unbindstatechange)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:393](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L393)

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

[LDRTextureCube](LDRTextureCube.md).[destroy](LDRTextureCube.md#destroy)

#### Defined in

[src/gfx/graphics/webGpu/core/texture/Texture.ts:407](https://github.com/Orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L407)

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

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[load](LDRTextureCube.md#load)

#### Defined in

[src/textures/LDRTextureCube.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/textures/LDRTextureCube.ts#L37)

___

### createFromTexture

▸ **createFromTexture**(`size`, `texture`): [`SolidColorSky`](SolidColorSky.md)

create cube texture by environment image

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | size of cube texture |
| `texture` | [`Texture`](Texture.md) | source texture |

#### Returns

[`SolidColorSky`](SolidColorSky.md)

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[createFromTexture](LDRTextureCube.md#createfromtexture)

#### Defined in

[src/textures/LDRTextureCube.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/textures/LDRTextureCube.ts#L64)
