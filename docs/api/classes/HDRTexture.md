# Class: HDRTexture

HDR纹理对象

## Hierarchy

- [`Texture`](Texture.md)

  ↳ **`HDRTexture`**


### Properties

- [textureSource](HDRTexture.md#texturesource)
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
- [sourceImageData](HDRTexture.md#sourceimagedata)
- [mipmapCount](HDRTexture.md#mipmapcount)

### Methods

- [init](HDRTexture.md#init)
- [getGPUTexture](HDRTexture.md#getgputexture)
- [getGPUView](HDRTexture.md#getgpuview)
- [bindStateChange](HDRTexture.md#bindstatechange)
- [unBindStateChange](HDRTexture.md#unbindstatechange)
- [destoryView](HDRTexture.md#destoryview)
- [destroy](HDRTexture.md#destroy)
- [serialization](HDRTexture.md#serialization)
- [unSerialization](HDRTexture.md#unserialization)
- [create](HDRTexture.md#create)
- [updateTexture](HDRTexture.md#updatetexture)
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

### textureSource

• `Readonly` **textureSource**: [`SerializeTextureSource`](SerializeTextureSource.md)

#### Inherited from

[Texture](Texture.md).[textureSource](Texture.md#texturesource)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L13)

___

### name

• **name**: `string`

纹理名称

#### Inherited from

[Texture](Texture.md).[name](Texture.md#name)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L17)

___

### url

• **url**: `string`

纹理来源URL

#### Inherited from

[Texture](Texture.md).[url](Texture.md#url)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L21)

___

### pid

• **pid**: `number`

数组贴图用到时的索引

#### Inherited from

[Texture](Texture.md).[pid](Texture.md#pid)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L31)

___

### view

• **view**: `GPUTextureView`

纹理视图

#### Inherited from

[Texture](Texture.md).[view](Texture.md#view)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L36)

___

### gpuSampler

• **gpuSampler**: `GPUSampler`

gpu采样器

#### Inherited from

[Texture](Texture.md).[gpuSampler](Texture.md#gpusampler)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L41)

___

### gpuSampler\_comparison

• **gpuSampler\_comparison**: `GPUSampler`

gpu比较采样器

#### Inherited from

[Texture](Texture.md).[gpuSampler_comparison](Texture.md#gpusampler_comparison)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L46)

___

### format

• **format**: `GPUTextureFormat`

格式

#### Inherited from

[Texture](Texture.md).[format](Texture.md#format)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L51)

___

### usage

• **usage**: `number`

纹理用途

#### Inherited from

[Texture](Texture.md).[usage](Texture.md#usage)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L55)

___

### width

• **width**: `number` = `4`

纹理宽度，默认为4

#### Inherited from

[Texture](Texture.md).[width](Texture.md#width)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L59)

___

### height

• **height**: `number` = `4`

纹理高度，默认为4

#### Inherited from

[Texture](Texture.md).[height](Texture.md#height)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L63)

___

### depthOrArrayLayers

• **depthOrArrayLayers**: `number` = `1`

纹理深度或纹理层数，默认为1

#### Inherited from

[Texture](Texture.md).[depthOrArrayLayers](Texture.md#depthorarraylayers)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L67)

___

### numberLayer

• **numberLayer**: `number` = `1`

#### Inherited from

[Texture](Texture.md).[numberLayer](Texture.md#numberlayer)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L68)

___

### viewDescriptor

• **viewDescriptor**: `GPUTextureViewDescriptor`

纹理视图描述符

#### Inherited from

[Texture](Texture.md).[viewDescriptor](Texture.md#viewdescriptor)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L72)

___

### textureDescriptor

• **textureDescriptor**: `GPUTextureDescriptor`

纹理描述符

#### Inherited from

[Texture](Texture.md).[textureDescriptor](Texture.md#texturedescriptor)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L76)

___

### visibility

• **visibility**: `number`

纹理可视性

#### Inherited from

[Texture](Texture.md).[visibility](Texture.md#visibility)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L80)

___

### textureBindingLayout

• **textureBindingLayout**: `GPUTextureBindingLayout`

绑定纹理，包含viewDimension和multisampled两个参数

#### Inherited from

[Texture](Texture.md).[textureBindingLayout](Texture.md#texturebindinglayout)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L85)

___

### samplerBindingLayout

• **samplerBindingLayout**: `GPUSamplerBindingLayout`

绑定采样器，包含type参数

#### Inherited from

[Texture](Texture.md).[samplerBindingLayout](Texture.md#samplerbindinglayout)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L92)

___

### sampler\_comparisonBindingLayout

• **sampler\_comparisonBindingLayout**: `GPUSamplerBindingLayout`

#### Inherited from

[Texture](Texture.md).[sampler_comparisonBindingLayout](Texture.md#sampler_comparisonbindinglayout)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L96)

___

### flipY

• **flipY**: `boolean`

#### Inherited from

[Texture](Texture.md).[flipY](Texture.md#flipy)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L101)

___

### sourceImageData

• **sourceImageData**: `HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas`

#### Inherited from

[Texture](Texture.md).[sourceImageData](Texture.md#sourceimagedata)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L108)

___

### mipmapCount

• **mipmapCount**: `number` = `1`

#### Inherited from

[Texture](Texture.md).[mipmapCount](Texture.md#mipmapcount)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L109)

## Methods

### init

▸ **init**(): `void`

#### Returns

`void`

#### Inherited from

[Texture](Texture.md).[init](Texture.md#init)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L126)

___

### getGPUTexture

▸ **getGPUTexture**(): `GPUTexture`

更新gpu纹理

#### Returns

`GPUTexture`

返回gpu纹理

#### Inherited from

[Texture](Texture.md).[getGPUTexture](Texture.md#getgputexture)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:278](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L278)

___

### getGPUView

▸ **getGPUView**(`index?`): `GPUTextureView` \| `GPUExternalTexture`

获取gpu视图

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `0` |

#### Returns

`GPUTextureView` \| `GPUExternalTexture`

返回纹理视图

#### Inherited from

[Texture](Texture.md).[getGPUView](Texture.md#getgpuview)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:289](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L289)

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

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:300](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L300)

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

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:304](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L304)

___

### destoryView

▸ **destoryView**(): `void`

#### Returns

`void`

#### Inherited from

[Texture](Texture.md).[destoryView](Texture.md#destoryview)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:315](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L315)

___

### destroy

▸ **destroy**(): `void`

销毁纹理

#### Returns

`void`

#### Inherited from

[Texture](Texture.md).[destroy](Texture.md#destroy)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:322](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L322)

___

### serialization

▸ **serialization**(): [`SerializeTextureInstance`](SerializeTextureInstance.md)

#### Returns

[`SerializeTextureInstance`](SerializeTextureInstance.md)

#### Inherited from

[Texture](Texture.md).[serialization](Texture.md#serialization)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:474](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L474)

___

### unSerialization

▸ **unSerialization**(`instance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | [`SerializeTextureInstance`](SerializeTextureInstance.md) |

#### Returns

`void`

#### Inherited from

[Texture](Texture.md).[unSerialization](Texture.md#unserialization)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:495](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L495)

___

### create

▸ **create**(`width?`, `height?`, `data?`, `useMiamp?`): [`HDRTexture`](HDRTexture.md)

创建HDR纹理对象

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `width` | `number` | `32` | 纹理宽度 |
| `height` | `number` | `32` | 纹理高度 |
| `data` | `ArrayBuffer` | `null` | 纹理数据 |
| `useMiamp` | `boolean` | `true` | 是否使用Mipmap，默认为使用 |

#### Returns

[`HDRTexture`](HDRTexture.md)

#### Defined in

[src/engine/textures/HDRTexture.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/engine/textures/HDRTexture.ts#L22)

___

### updateTexture

▸ **updateTexture**(): `void`

更新纹理

#### Returns

`void`

#### Defined in

[src/engine/textures/HDRTexture.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/engine/textures/HDRTexture.ts#L76)

___

### load

▸ **load**(`url`, `loaderFunctions?`): `Promise`<[`HDRTexture`](HDRTexture.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `loaderFunctions?` | [`LoaderFunctions`](../types/LoaderFunctions.md) |

#### Returns

`Promise`<[`HDRTexture`](HDRTexture.md)\>

#### Defined in

[src/engine/textures/HDRTexture.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/engine/textures/HDRTexture.ts#L79)

## Accessors

### useMipmap

• `get` **useMipmap**(): `boolean`

开启/关闭mipmap的使用

#### Returns

`boolean`

#### Inherited from

Texture.useMipmap

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:220](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L220)

• `set` **useMipmap**(`value`): `void`

开启/关闭mipmap的使用

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Texture.useMipmap

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:227](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L227)

___

### addressModeU

• `get` **addressModeU**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

Texture.addressModeU

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:340](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L340)

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

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:343](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L343)

___

### addressModeV

• `get` **addressModeV**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

Texture.addressModeV

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:352](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L352)

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

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:355](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L355)

___

### addressModeW

• `get` **addressModeW**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

Texture.addressModeW

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:366](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L366)

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

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:369](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L369)

___

### magFilter

• `get` **magFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

Texture.magFilter

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:380](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L380)

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

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:383](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L383)

___

### minFilter

• `get` **minFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

Texture.minFilter

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:393](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L393)

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

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:396](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L396)

___

### mipmapFilter

• `get` **mipmapFilter**(): `GPUMipmapFilterMode`

#### Returns

`GPUMipmapFilterMode`

#### Inherited from

Texture.mipmapFilter

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:406](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L406)

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

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:409](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L409)

___

### lodMinClamp

• `get` **lodMinClamp**(): `number`

#### Returns

`number`

#### Inherited from

Texture.lodMinClamp

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:418](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L418)

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

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:421](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L421)

___

### lodMaxClamp

• `get` **lodMaxClamp**(): `number`

#### Returns

`number`

#### Inherited from

Texture.lodMaxClamp

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:432](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L432)

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

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:435](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L435)

___

### compare

• `get` **compare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Inherited from

Texture.compare

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:448](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L448)

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

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:451](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L451)

___

### maxAnisotropy

• `get` **maxAnisotropy**(): `number`

#### Returns

`number`

#### Inherited from

Texture.maxAnisotropy

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:464](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L464)

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

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:467](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L467)

## Constructors

### constructor

• **new HDRTexture**()

#### Overrides

[Texture](Texture.md).[constructor](Texture.md#constructor)

#### Defined in

[src/engine/textures/HDRTexture.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/engine/textures/HDRTexture.ts#L12)
