[**@orillusion/media-extention**](../README.md)

***

# Class: VideoTexture

Defined in: [packages/media-extention/VideoTexture.ts:16](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/VideoTexture.ts#L16)

Video Texture

## Extends

- `Texture`

## Constructors

### Constructor

> **new VideoTexture**(`ctx?`): `VideoTexture`

Defined in: [packages/media-extention/VideoTexture.ts:20](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/VideoTexture.ts#L20)

#### Parameters

##### ctx?

`Context3D`

#### Returns

`VideoTexture`

#### Overrides

`Texture.constructor`

## Properties

### \_boundCtx

> **\_boundCtx**: `Context3D` = `null`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:19](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L19)

The Context3D this texture is bound to. Set on first GPU use.

#### Inherited from

`Texture._boundCtx`

***

### name

> **name**: `string`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:39](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L39)

name of texture

#### Inherited from

`Texture.name`

***

### url

> **url**: `string`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:44](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L44)

source url

#### Inherited from

`Texture.url`

***

### pid

> **pid**: `number`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:94](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L94)

Return index in texture array

#### Inherited from

`Texture.pid`

***

### format

> **format**: `GPUTextureFormat`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:153](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L153)

GPUTextureFormat

#### Inherited from

`Texture.format`

***

### usage

> **usage**: `number`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:158](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L158)

GPUTextureUsage

#### Inherited from

`Texture.usage`

***

### width

> **width**: `number` = `4`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:163](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L163)

texture width

#### Inherited from

`Texture.width`

***

### height

> **height**: `number` = `4`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:168](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L168)

texture height

#### Inherited from

`Texture.height`

***

### depthOrArrayLayers

> **depthOrArrayLayers**: `number` = `1`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:173](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L173)

depth or layers, default value is 1

#### Inherited from

`Texture.depthOrArrayLayers`

***

### numberLayer

> **numberLayer**: `number` = `1`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:178](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L178)

depth or layers, default value is 1

#### Inherited from

`Texture.numberLayer`

***

### viewDescriptor

> **viewDescriptor**: `GPUTextureViewDescriptor`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:183](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L183)

GPUTextureViewDescriptor

#### Inherited from

`Texture.viewDescriptor`

***

### textureDescriptor

> **textureDescriptor**: `GPUTextureDescriptor`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:188](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L188)

GPUTextureDescriptor

#### Inherited from

`Texture.textureDescriptor`

***

### visibility

> **visibility**: `number`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:193](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L193)

GPUShaderStage

#### Inherited from

`Texture.visibility`

***

### textureBindingLayout

> **textureBindingLayout**: `GPUTextureBindingLayout`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:199](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L199)

GPUTextureBindingLayout, contains viewDimension and multisampled

#### Inherited from

`Texture.textureBindingLayout`

***

### samplerBindingLayout

> **samplerBindingLayout**: `GPUSamplerBindingLayout`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:207](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L207)

GPUSamplerBindingLayout

#### Inherited from

`Texture.samplerBindingLayout`

***

### sampler\_comparisonBindingLayout

> **sampler\_comparisonBindingLayout**: `GPUSamplerBindingLayout`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:214](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L214)

GPUSamplerBindingLayout

#### Inherited from

`Texture.sampler_comparisonBindingLayout`

***

### flipY

> **flipY**: `boolean`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:221](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L221)

whether to flip the image on the y-axis

#### Inherited from

`Texture.flipY`

***

### isVideoTexture?

> `optional` **isVideoTexture?**: `boolean`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:226](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L226)

whether is video texture

#### Inherited from

`Texture.isVideoTexture`

***

### isHDRTexture?

> `optional` **isHDRTexture?**: `boolean`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:230](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L230)

whether this texture holds HDR (high dynamic range) image data

#### Inherited from

`Texture.isHDRTexture`

***

### mipmapCount

> **mipmapCount**: `number` = `1`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:297](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L297)

mipmap Count, default value is 1

#### Inherited from

`Texture.mipmapCount`

***

### media

> **media**: `HTMLVideoElement`

Defined in: [packages/media-extention/VideoTexture.ts:17](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/VideoTexture.ts#L17)

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

`Texture.view`

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

`Texture.gpuSampler`

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

`Texture.gpuSampler_comparison`

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

`Texture.useMipmap`

***

### sourceImageData

#### Get Signature

> **get** **sourceImageData**(): `HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:507](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L507)

the cached CPU source image used to (re)upload the GPU texture

##### Returns

`HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas`

#### Inherited from

`Texture.sourceImageData`

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

`Texture.addressModeU`

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

`Texture.addressModeV`

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

`Texture.addressModeW`

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

`Texture.magFilter`

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

`Texture.minFilter`

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

`Texture.mipmapFilter`

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

`Texture.lodMinClamp`

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

`Texture.lodMaxClamp`

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

`Texture.compare`

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

`Texture.maxAnisotropy`

## Methods

### \_ensureBound()

> **\_ensureBound**(`ctx?`): `Context3D`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:28](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L28)

Ensure this texture is bound to a Context3D and return it. Resolution
order: explicit arg, prior `bindCtx()`, then the single-engine default
(same contract as Engine3D._defaultContext() for no-arg material
constructors). Throws only when the choice is ambiguous — no engine
yet, or several engines alive without an explicit ctx.

#### Parameters

##### ctx?

`Context3D`

#### Returns

`Context3D`

#### Inherited from

`Texture._ensureBound`

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

`Texture.init`

***

### getMipmapCount()

> **getMipmapCount**(): `number`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:515](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L515)

Compute the full mipmap chain length for the current texture size.

#### Returns

`number`

number of mip levels

#### Inherited from

`Texture.getMipmapCount`

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

`Texture.bindStateChange`

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

`Texture.unBindStateChange`

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

`Texture.destroy`

***

### delayDestroyTexture()

> `static` **delayDestroyTexture**(`ctx`, `tex`): `void`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:773](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L773)

Queue a GPU texture for deferred destruction on the given context.

#### Parameters

##### ctx

`Context3D`

the owning context

##### tex

`GPUTexture`

the GPU texture to destroy later

#### Returns

`void`

#### Inherited from

`Texture.delayDestroyTexture`

***

### destroyTexture()

> `static` **destroyTexture**(`ctx`): `void`

Defined in: [src/gfx/graphics/webGpu/core/texture/Texture.ts:784](https://github.com/orillusion/orillusion/blob/main/src/gfx/graphics/webGpu/core/texture/Texture.ts#L784)

Destroy all GPU textures queued for deferred destruction on the context.

#### Parameters

##### ctx

`Context3D`

the context whose queued textures are destroyed

#### Returns

`void`

#### Inherited from

`Texture.destroyTexture`

***

### load()

> **load**(`video`): `Promise`\<`void`\>

Defined in: [packages/media-extention/VideoTexture.ts:32](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/VideoTexture.ts#L32)

load one Video Source

#### Parameters

##### video

`string` \| `HTMLVideoElement` \| `MediaStream`

the url of a video source, or a MediaStream object, or a HTMLVideoElement

#### Returns

`Promise`\<`void`\>

***

### getGPUTexture()

> **getGPUTexture**(): `any`

Defined in: [packages/media-extention/VideoTexture.ts:64](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/VideoTexture.ts#L64)

create or get GPUTexture (delegates to the per-context gpuTexture
getter, which handles lazy creation + source-image upload).

#### Returns

`any`

#### Overrides

`Texture.getGPUTexture`

***

### getGPUView()

> **getGPUView**(): `GPUExternalTexture`

Defined in: [packages/media-extention/VideoTexture.ts:72](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/VideoTexture.ts#L72)

create or get GPUTextureView (delegates to the per-context view
getter, which handles lazy creation from `viewDescriptor`).

#### Returns

`GPUExternalTexture`

#### Overrides

`Texture.getGPUView`
