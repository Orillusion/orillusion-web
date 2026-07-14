[**@orillusion/core**](../README.md)

***

# Class: AtmosphericScatteringSky

Defined in: [src/textures/AtmosphericScatteringSky.ts:45](https://github.com/orillusion/orillusion/blob/main/src/textures/AtmosphericScatteringSky.ts#L45)

Atmospheric Scattering Sky Texture

## Extends

- [`LDRTextureCube`](LDRTextureCube.md)

## Constructors

### Constructor

> **new AtmosphericScatteringSky**(`setting`, `ctx?`): `AtmosphericScatteringSky`

Defined in: [src/textures/AtmosphericScatteringSky.ts:56](https://github.com/orillusion/orillusion/blob/main/src/textures/AtmosphericScatteringSky.ts#L56)

#### Parameters

##### setting

[`AtmosphericScatteringSkySetting`](AtmosphericScatteringSkySetting.md)

AtmosphericScatteringSkySetting

##### ctx?

[`Context3D`](Context3D.md)

#### Returns

`AtmosphericScatteringSky`

#### Overrides

[`LDRTextureCube`](LDRTextureCube.md).[`constructor`](LDRTextureCube.md#constructor)

## Properties

### \_boundCtx

> **\_boundCtx**: [`Context3D`](Context3D.md) = `null`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:19](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L19)

The Context3D this texture is bound to. Set on first GPU use.

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`_boundCtx`](LDRTextureCube.md#_boundctx)

***

### name

> **name**: `string`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:39](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L39)

name of texture

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`name`](LDRTextureCube.md#name)

***

### url

> **url**: `string`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:44](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L44)

source url

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`url`](LDRTextureCube.md#url)

***

### pid

> **pid**: `number`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:94](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L94)

Return index in texture array

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`pid`](LDRTextureCube.md#pid)

***

### format

> **format**: `GPUTextureFormat`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:153](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L153)

GPUTextureFormat

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`format`](LDRTextureCube.md#format)

***

### usage

> **usage**: `number`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:158](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L158)

GPUTextureUsage

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`usage`](LDRTextureCube.md#usage)

***

### numberLayer

> **numberLayer**: `number` = `1`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:178](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L178)

depth or layers, default value is 1

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`numberLayer`](LDRTextureCube.md#numberlayer)

***

### viewDescriptor

> **viewDescriptor**: `GPUTextureViewDescriptor`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:183](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L183)

GPUTextureViewDescriptor

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`viewDescriptor`](LDRTextureCube.md#viewdescriptor)

***

### textureDescriptor

> **textureDescriptor**: `GPUTextureDescriptor`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:188](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L188)

GPUTextureDescriptor

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`textureDescriptor`](LDRTextureCube.md#texturedescriptor)

***

### sampler\_comparisonBindingLayout

> **sampler\_comparisonBindingLayout**: `GPUSamplerBindingLayout`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:214](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L214)

GPUSamplerBindingLayout

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`sampler_comparisonBindingLayout`](LDRTextureCube.md#sampler_comparisonbindinglayout)

***

### flipY

> **flipY**: `boolean`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:221](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L221)

whether to flip the image on the y-axis

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`flipY`](LDRTextureCube.md#flipy)

***

### isVideoTexture?

> `optional` **isVideoTexture?**: `boolean`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:226](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L226)

whether is video texture

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`isVideoTexture`](LDRTextureCube.md#isvideotexture)

***

### isHDRTexture?

> `optional` **isHDRTexture?**: `boolean`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:230](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L230)

whether this texture holds HDR (high dynamic range) image data

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`isHDRTexture`](LDRTextureCube.md#ishdrtexture)

***

### mipmapCount

> **mipmapCount**: `number` = `1`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:297](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L297)

mipmap Count, default value is 1

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`mipmapCount`](LDRTextureCube.md#mipmapcount)

***

### width

> **width**: `number` = `4`

Defined in: [src/gfx/graphics/webGpu/core/texture/TextureCube.ts:11](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/TextureCube.ts#L11)

texture width, default value is 4

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`width`](LDRTextureCube.md#width)

***

### height

> **height**: `number` = `4`

Defined in: [src/gfx/graphics/webGpu/core/texture/TextureCube.ts:15](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/TextureCube.ts#L15)

texture height, default value is 4

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`height`](LDRTextureCube.md#height)

***

### depthOrArrayLayers

> **depthOrArrayLayers**: `number` = `6`

Defined in: [src/gfx/graphics/webGpu/core/texture/TextureCube.ts:19](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/TextureCube.ts#L19)

depth or array layers, default value is 6

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`depthOrArrayLayers`](LDRTextureCube.md#depthorarraylayers)

***

### visibility

> **visibility**: `number` = `GPUShaderStage.FRAGMENT`

Defined in: [src/gfx/graphics/webGpu/core/texture/TextureCube.ts:24](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/TextureCube.ts#L24)

GPUShaderStage

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`visibility`](LDRTextureCube.md#visibility)

***

### textureBindingLayout

> **textureBindingLayout**: `GPUTextureBindingLayout`

Defined in: [src/gfx/graphics/webGpu/core/texture/TextureCube.ts:29](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/TextureCube.ts#L29)

GPUTextureBindingLayout

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`textureBindingLayout`](LDRTextureCube.md#texturebindinglayout)

***

### samplerBindingLayout

> **samplerBindingLayout**: `GPUSamplerBindingLayout`

Defined in: [src/gfx/graphics/webGpu/core/texture/TextureCube.ts:37](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/TextureCube.ts#L37)

GPUSamplerBindingLayout

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`samplerBindingLayout`](LDRTextureCube.md#samplerbindinglayout)

***

### setting

> `readonly` **setting**: [`AtmosphericScatteringSkySetting`](AtmosphericScatteringSkySetting.md)

Defined in: [src/textures/AtmosphericScatteringSky.ts:49](https://github.com/orillusion/orillusion/blob/main/src/textures/AtmosphericScatteringSky.ts#L49)

The scattering parameters driving this sky's appearance.

## Accessors

### view

#### Get Signature

> **get** **view**(): `GPUTextureView` \| `GPUExternalTexture`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:101](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L101)

##### Returns

`GPUTextureView` \| `GPUExternalTexture`

#### Set Signature

> **set** **view**(`v`): `void`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:111](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L111)

##### Parameters

###### v

`GPUTextureView` \| `GPUExternalTexture`

##### Returns

`void`

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`view`](LDRTextureCube.md#view)

***

### gpuSampler

#### Get Signature

> **get** **gpuSampler**(): `GPUSampler`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:120](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L120)

##### Returns

`GPUSampler`

#### Set Signature

> **set** **gpuSampler**(`v`): `void`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:127](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L127)

##### Parameters

###### v

`GPUSampler`

##### Returns

`void`

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`gpuSampler`](LDRTextureCube.md#gpusampler)

***

### gpuSampler\_comparison

#### Get Signature

> **get** **gpuSampler\_comparison**(): `GPUSampler`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:136](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L136)

##### Returns

`GPUSampler`

#### Set Signature

> **set** **gpuSampler\_comparison**(`v`): `void`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:146](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L146)

##### Parameters

###### v

`GPUSampler`

##### Returns

`void`

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`gpuSampler_comparison`](LDRTextureCube.md#gpusampler_comparison)

***

### useMipmap

#### Get Signature

> **get** **useMipmap**(): `boolean`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:469](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L469)

enable/disable mipmap

##### Returns

`boolean`

#### Set Signature

> **set** **useMipmap**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:476](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L476)

get mipmap

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`useMipmap`](LDRTextureCube.md#usemipmap)

***

### sourceImageData

#### Get Signature

> **get** **sourceImageData**(): `HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:507](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L507)

the cached CPU source image used to (re)upload the GPU texture

##### Returns

`HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas`

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`sourceImageData`](LDRTextureCube.md#sourceimagedata)

***

### addressModeU

#### Get Signature

> **get** **addressModeU**(): `GPUAddressMode`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:621](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L621)

Sampler address mode for the U (width) texture coordinate.

##### Returns

`GPUAddressMode`

#### Set Signature

> **set** **addressModeU**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:625](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L625)

##### Parameters

###### value

`GPUAddressMode`

##### Returns

`void`

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`addressModeU`](LDRTextureCube.md#addressmodeu)

***

### addressModeV

#### Get Signature

> **get** **addressModeV**(): `GPUAddressMode`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:635](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L635)

Sampler address mode for the V (height) texture coordinate.

##### Returns

`GPUAddressMode`

#### Set Signature

> **set** **addressModeV**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:639](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L639)

##### Parameters

###### value

`GPUAddressMode`

##### Returns

`void`

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`addressModeV`](LDRTextureCube.md#addressmodev)

***

### addressModeW

#### Get Signature

> **get** **addressModeW**(): `GPUAddressMode`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:649](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L649)

Sampler address mode for the W (depth) texture coordinate.

##### Returns

`GPUAddressMode`

#### Set Signature

> **set** **addressModeW**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:653](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L653)

Specifies the GPUAddressMode \| address modes for the texture width, height, and depth
coordinates, respectively.

##### Parameters

###### value

`GPUAddressMode`

##### Returns

`void`

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`addressModeW`](LDRTextureCube.md#addressmodew)

***

### magFilter

#### Get Signature

> **get** **magFilter**(): `GPUFilterMode`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:664](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L664)

Sampling filter used when the sample footprint is smaller than or equal
to one texel (magnification).

##### Returns

`GPUFilterMode`

#### Set Signature

> **set** **magFilter**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:668](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L668)

Specifies the sampling behavior when the sampled area is smaller than or equal to one
texel.

##### Parameters

###### value

`GPUFilterMode`

##### Returns

`void`

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`magFilter`](LDRTextureCube.md#magfilter)

***

### minFilter

#### Get Signature

> **get** **minFilter**(): `GPUFilterMode`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:679](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L679)

Sampling filter used when the sample footprint is larger than one texel
(minification).

##### Returns

`GPUFilterMode`

#### Set Signature

> **set** **minFilter**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:683](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L683)

Specifies the sampling behavior when the sampled area is larger than one texel.

##### Parameters

###### value

`GPUFilterMode`

##### Returns

`void`

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`minFilter`](LDRTextureCube.md#minfilter)

***

### mipmapFilter

#### Get Signature

> **get** **mipmapFilter**(): `GPUMipmapFilterMode`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:693](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L693)

Filter used when sampling between mipmap levels.

##### Returns

`GPUMipmapFilterMode`

#### Set Signature

> **set** **mipmapFilter**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:697](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L697)

Specifies behavior for sampling between mipmap levels.

##### Parameters

###### value

`GPUMipmapFilterMode`

##### Returns

`void`

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`mipmapFilter`](LDRTextureCube.md#mipmapfilter)

***

### lodMinClamp

#### Get Signature

> **get** **lodMinClamp**(): `number`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:707](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L707)

Minimum level-of-detail clamp used internally when sampling.

##### Returns

`number`

#### Set Signature

> **set** **lodMinClamp**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:711](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L711)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`lodMinClamp`](LDRTextureCube.md#lodminclamp)

***

### lodMaxClamp

#### Get Signature

> **get** **lodMaxClamp**(): `number`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:721](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L721)

Maximum level-of-detail clamp used internally when sampling.

##### Returns

`number`

#### Set Signature

> **set** **lodMaxClamp**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:725](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L725)

Specifies the minimum and maximum levels of detail, respectively, used internally when
sampling a texture.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`lodMaxClamp`](LDRTextureCube.md#lodmaxclamp)

***

### compare

#### Get Signature

> **get** **compare**(): `GPUCompareFunction`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:735](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L735)

Comparison function; when set the sampler becomes a comparison sampler.

##### Returns

`GPUCompareFunction`

#### Set Signature

> **set** **compare**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:739](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L739)

When provided the sampler will be a comparison sampler with the specified
GPUCompareFunction.
Note: Comparison samplers may use filtering, but the sampling results will be
implementation-dependent and may differ from the normal filtering rules.

##### Parameters

###### value

`GPUCompareFunction`

##### Returns

`void`

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`compare`](LDRTextureCube.md#compare)

***

### maxAnisotropy

#### Get Signature

> **get** **maxAnisotropy**(): `number`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:749](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L749)

Maximum anisotropy clamp used by the sampler.

##### Returns

`number`

#### Set Signature

> **set** **maxAnisotropy**(`value`): `void`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:753](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L753)

Specifies the maximum anisotropy value clamp used by the sampler. Anisotropic filtering is
enabled when GPUSamplerDescriptor#maxAnisotropy is &gt; 1 and the implementation supports it.
Anisotropic filtering improves the image quality of textures sampled at oblique viewing
angles. Higher GPUSamplerDescriptor#maxAnisotropy values indicate the maximum ratio of
anisotropy supported when filtering.
<div class=note heading>
Most implementations support GPUSamplerDescriptor#maxAnisotropy values in range
between 1 and 16, inclusive. The used value of GPUSamplerDescriptor#maxAnisotropy
will be clamped to the maximum value that the platform supports.
The precise filtering behavior is implementation-dependent.
</div>

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`maxAnisotropy`](LDRTextureCube.md#maxanisotropy)

***

### texture2D

#### Get Signature

> **get** **texture2D**(): [`Texture`](Texture.md)

Defined in: [src/textures/AtmosphericScatteringSky.ts:68](https://github.com/orillusion/orillusion/blob/main/src/textures/AtmosphericScatteringSky.ts#L68)

Get the underlying panorama 2D texture used to build the sky cube.

##### Returns

[`Texture`](Texture.md)

***

### ldrImageUrl

#### Get Signature

> **get** **ldrImageUrl**(): `string`

Defined in: [src/textures/LDRTextureCube.ts:21](https://github.com/orillusion/orillusion/blob/main/src/textures/LDRTextureCube.ts#L21)

constructor: create a cube texture, it's low dynamic range texture

##### Returns

`string`

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`ldrImageUrl`](LDRTextureCube.md#ldrimageurl)

## Methods

### \_ensureBound()

> **\_ensureBound**(`ctx?`): [`Context3D`](Context3D.md)

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:28](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L28)

Ensure this texture is bound to a Context3D and return it. Resolution
order: explicit arg, prior `bindCtx()`, then the single-engine default
(same contract as Engine3D._defaultContext() for no-arg material
constructors). Throws only when the choice is ambiguous — no engine
yet, or several engines alive without an explicit ctx.

#### Parameters

##### ctx?

[`Context3D`](Context3D.md)

#### Returns

[`Context3D`](Context3D.md)

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`_ensureBound`](LDRTextureCube.md#_ensurebound)

***

### init()

> **init**(): `this`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:327](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L327)

Run the optional internal create hooks (binding layout, texture, view,
sampler) if a subclass provides them.

#### Returns

`this`

this texture, for chaining

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`init`](LDRTextureCube.md#init)

***

### getMipmapCount()

> **getMipmapCount**(): `number`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:515](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L515)

Compute the full mipmap chain length for the current texture size.

#### Returns

`number`

number of mip levels

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`getMipmapCount`](LDRTextureCube.md#getmipmapcount)

***

### getGPUTexture()

> **getGPUTexture**(): `GPUTexture`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:553](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L553)

create or get GPUTexture (delegates to the per-context gpuTexture
getter, which handles lazy creation + source-image upload).

#### Returns

`GPUTexture`

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`getGPUTexture`](LDRTextureCube.md#getgputexture)

***

### getGPUView()

> **getGPUView**(`_index?`): `GPUTextureView` \| `GPUExternalTexture`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:561](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L561)

create or get GPUTextureView (delegates to the per-context view
getter, which handles lazy creation from `viewDescriptor`).

#### Parameters

##### \_index?

`number` = `0`

#### Returns

`GPUTextureView` \| `GPUExternalTexture`

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`getGPUView`](LDRTextureCube.md#getgpuview)

***

### bindStateChange()

> **bindStateChange**(`fun`, `ref`): `void`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:573](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L573)

Register a callback invoked when this texture's GPU resources change.

#### Parameters

##### fun

`Function`

callback to invoke on change

##### ref

`any`

owner reference used as the key for later unbinding

#### Returns

`void`

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`bindStateChange`](LDRTextureCube.md#bindstatechange)

***

### unBindStateChange()

> **unBindStateChange**(`ref`): `void`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:581](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L581)

Remove a previously registered state-change callback.

#### Parameters

##### ref

`any`

owner reference used when binding the callback

#### Returns

`void`

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`unBindStateChange`](LDRTextureCube.md#unbindstatechange)

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:602](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L602)

release the materialized texture and all GPU slots

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`destroy`](LDRTextureCube.md#destroy)

***

### delayDestroyTexture()

> `static` **delayDestroyTexture**(`ctx`, `tex`): `void`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:773](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L773)

Queue a GPU texture for deferred destruction on the given context.

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

the owning context

##### tex

`GPUTexture`

the GPU texture to destroy later

#### Returns

`void`

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`delayDestroyTexture`](LDRTextureCube.md#delaydestroytexture)

***

### destroyTexture()

> `static` **destroyTexture**(`ctx`): `void`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:784](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L784)

Destroy all GPU textures queued for deferred destruction on the context.

#### Parameters

##### ctx

[`Context3D`](Context3D.md)

the context whose queued textures are destroyed

#### Returns

`void`

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`destroyTexture`](LDRTextureCube.md#destroytexture)

***

### load()

> **load**(`url`, `loaderFunctions?`, `ctx?`): `Promise`\<[`LDRTextureCube`](LDRTextureCube.md)\>

Defined in: [src/textures/LDRTextureCube.ts:37](https://github.com/orillusion/orillusion/blob/main/src/textures/LDRTextureCube.ts#L37)

load texture data from web url, which is a 360 panorama image

#### Parameters

##### url

`string`

web url

##### loaderFunctions?

[`LoaderFunctions`](../type-aliases/LoaderFunctions.md)

callback function when load complete

##### ctx?

[`Context3D`](Context3D.md)

#### Returns

`Promise`\<[`LDRTextureCube`](LDRTextureCube.md)\>

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`load`](LDRTextureCube.md#load)

***

### createFromTexture()

> **createFromTexture**(`size`, `texture`, `ctx?`): `this`

Defined in: [src/textures/LDRTextureCube.ts:66](https://github.com/orillusion/orillusion/blob/main/src/textures/LDRTextureCube.ts#L66)

create cube texture by environment image

#### Parameters

##### size

`number`

size of cube texture

##### texture

[`Texture`](Texture.md)

source texture

##### ctx?

[`Context3D`](Context3D.md)

#### Returns

`this`

#### Inherited from

[`LDRTextureCube`](LDRTextureCube.md).[`createFromTexture`](LDRTextureCube.md#createfromtexture)
