# Class: BitmapTextureCube

## Hierarchy

- `TextureCube`

  ↳ **`BitmapTextureCube`**


### Properties

- [textureSource](BitmapTextureCube.md#texturesource)
- [name](BitmapTextureCube.md#name)
- [url](BitmapTextureCube.md#url)
- [pid](BitmapTextureCube.md#pid)
- [view](BitmapTextureCube.md#view)
- [gpuSampler](BitmapTextureCube.md#gpusampler)
- [gpuSampler\_comparison](BitmapTextureCube.md#gpusampler_comparison)
- [format](BitmapTextureCube.md#format)
- [usage](BitmapTextureCube.md#usage)
- [numberLayer](BitmapTextureCube.md#numberlayer)
- [viewDescriptor](BitmapTextureCube.md#viewdescriptor)
- [textureDescriptor](BitmapTextureCube.md#texturedescriptor)
- [sampler\_comparisonBindingLayout](BitmapTextureCube.md#sampler_comparisonbindinglayout)
- [flipY](BitmapTextureCube.md#flipy)
- [sourceImageData](BitmapTextureCube.md#sourceimagedata)
- [mipmapCount](BitmapTextureCube.md#mipmapcount)
- [width](BitmapTextureCube.md#width)
- [height](BitmapTextureCube.md#height)
- [depthOrArrayLayers](BitmapTextureCube.md#depthorarraylayers)
- [visibility](BitmapTextureCube.md#visibility)
- [textureBindingLayout](BitmapTextureCube.md#texturebindinglayout)
- [samplerBindingLayout](BitmapTextureCube.md#samplerbindinglayout)

### Methods

- [init](BitmapTextureCube.md#init)
- [getGPUTexture](BitmapTextureCube.md#getgputexture)
- [getGPUView](BitmapTextureCube.md#getgpuview)
- [bindStateChange](BitmapTextureCube.md#bindstatechange)
- [unBindStateChange](BitmapTextureCube.md#unbindstatechange)
- [destoryView](BitmapTextureCube.md#destoryview)
- [destroy](BitmapTextureCube.md#destroy)
- [serialization](BitmapTextureCube.md#serialization)
- [unSerialization](BitmapTextureCube.md#unserialization)
- [load](BitmapTextureCube.md#load)
- [loadStd](BitmapTextureCube.md#loadstd)

### Accessors

- [useMipmap](BitmapTextureCube.md#usemipmap)
- [addressModeU](BitmapTextureCube.md#addressmodeu)
- [addressModeV](BitmapTextureCube.md#addressmodev)
- [addressModeW](BitmapTextureCube.md#addressmodew)
- [magFilter](BitmapTextureCube.md#magfilter)
- [minFilter](BitmapTextureCube.md#minfilter)
- [mipmapFilter](BitmapTextureCube.md#mipmapfilter)
- [lodMinClamp](BitmapTextureCube.md#lodminclamp)
- [lodMaxClamp](BitmapTextureCube.md#lodmaxclamp)
- [compare](BitmapTextureCube.md#compare)
- [maxAnisotropy](BitmapTextureCube.md#maxanisotropy)
- [images](BitmapTextureCube.md#images)

### Constructors

- [constructor](BitmapTextureCube.md#constructor)

## Properties

### textureSource

• `Readonly` **textureSource**: [`SerializeTextureSource`](SerializeTextureSource.md)

#### Inherited from

TextureCube.textureSource

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L13)

___

### name

• **name**: `string`

纹理名称

#### Inherited from

TextureCube.name

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L17)

___

### url

• **url**: `string`

纹理来源URL

#### Inherited from

TextureCube.url

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L21)

___

### pid

• **pid**: `number`

数组贴图用到时的索引

#### Inherited from

TextureCube.pid

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L31)

___

### view

• **view**: `GPUTextureView`

纹理视图

#### Inherited from

TextureCube.view

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L36)

___

### gpuSampler

• **gpuSampler**: `GPUSampler`

gpu采样器

#### Inherited from

TextureCube.gpuSampler

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L41)

___

### gpuSampler\_comparison

• **gpuSampler\_comparison**: `GPUSampler`

gpu比较采样器

#### Inherited from

TextureCube.gpuSampler\_comparison

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L46)

___

### format

• **format**: `GPUTextureFormat`

格式

#### Inherited from

TextureCube.format

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L51)

___

### usage

• **usage**: `number`

纹理用途

#### Inherited from

TextureCube.usage

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L55)

___

### numberLayer

• **numberLayer**: `number` = `1`

#### Inherited from

TextureCube.numberLayer

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L68)

___

### viewDescriptor

• **viewDescriptor**: `GPUTextureViewDescriptor`

纹理视图描述符

#### Inherited from

TextureCube.viewDescriptor

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L72)

___

### textureDescriptor

• **textureDescriptor**: `GPUTextureDescriptor`

纹理描述符

#### Inherited from

TextureCube.textureDescriptor

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L76)

___

### sampler\_comparisonBindingLayout

• **sampler\_comparisonBindingLayout**: `GPUSamplerBindingLayout`

#### Inherited from

TextureCube.sampler\_comparisonBindingLayout

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L96)

___

### flipY

• **flipY**: `boolean`

#### Inherited from

TextureCube.flipY

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L101)

___

### sourceImageData

• **sourceImageData**: `HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas`

#### Inherited from

TextureCube.sourceImageData

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L108)

___

### mipmapCount

• **mipmapCount**: `number` = `1`

#### Inherited from

TextureCube.mipmapCount

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L109)

___

### width

• **width**: `number` = `4`

立方体纹理宽度，默认为4

#### Inherited from

TextureCube.width

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/TextureCube.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/TextureCube.ts#L12)

___

### height

• **height**: `number` = `4`

立方体纹理高度，默认为4

#### Inherited from

TextureCube.height

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/TextureCube.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/TextureCube.ts#L16)

___

### depthOrArrayLayers

• **depthOrArrayLayers**: `number` = `6`

立方体纹理深度或层数，默认为6

#### Inherited from

TextureCube.depthOrArrayLayers

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/TextureCube.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/TextureCube.ts#L20)

___

### visibility

• **visibility**: `number` = `GPUShaderStage.FRAGMENT`

立方体纹理可视性

#### Inherited from

TextureCube.visibility

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/TextureCube.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/TextureCube.ts#L25)

___

### textureBindingLayout

• **textureBindingLayout**: `GPUTextureBindingLayout`

绑定纹理，包含viewDimension和multisampled两个参数

#### Inherited from

TextureCube.textureBindingLayout

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/TextureCube.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/TextureCube.ts#L30)

___

### samplerBindingLayout

• **samplerBindingLayout**: `GPUSamplerBindingLayout`

绑定采样器，包含type参数

#### Inherited from

TextureCube.samplerBindingLayout

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/TextureCube.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/TextureCube.ts#L38)

## Methods

### init

▸ **init**(): `void`

#### Returns

`void`

#### Inherited from

TextureCube.init

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

TextureCube.getGPUTexture

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

TextureCube.getGPUView

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

TextureCube.bindStateChange

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

TextureCube.unBindStateChange

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:304](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L304)

___

### destoryView

▸ **destoryView**(): `void`

#### Returns

`void`

#### Inherited from

TextureCube.destoryView

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:315](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L315)

___

### destroy

▸ **destroy**(): `void`

销毁纹理

#### Returns

`void`

#### Inherited from

TextureCube.destroy

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:322](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L322)

___

### serialization

▸ **serialization**(): [`SerializeTextureInstance`](SerializeTextureInstance.md)

#### Returns

[`SerializeTextureInstance`](SerializeTextureInstance.md)

#### Inherited from

TextureCube.serialization

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

TextureCube.unSerialization

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:495](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L495)

___

### load

▸ **load**(`urls`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `urls` | `string`[] |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/engine/textures/BitmapTextureCube.ts:156](https://github.com/Orillusion/orillusion/blob/main/src/engine/textures/BitmapTextureCube.ts#L156)

___

### loadStd

▸ **loadStd**(`url`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/engine/textures/BitmapTextureCube.ts:182](https://github.com/Orillusion/orillusion/blob/main/src/engine/textures/BitmapTextureCube.ts#L182)

## Accessors

### useMipmap

• `get` **useMipmap**(): `boolean`

开启/关闭mipmap的使用

#### Returns

`boolean`

#### Inherited from

TextureCube.useMipmap

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

TextureCube.useMipmap

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:227](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L227)

___

### addressModeU

• `get` **addressModeU**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

TextureCube.addressModeU

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

TextureCube.addressModeU

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:343](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L343)

___

### addressModeV

• `get` **addressModeV**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

TextureCube.addressModeV

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

TextureCube.addressModeV

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:355](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L355)

___

### addressModeW

• `get` **addressModeW**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

TextureCube.addressModeW

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

TextureCube.addressModeW

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:369](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L369)

___

### magFilter

• `get` **magFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

TextureCube.magFilter

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

TextureCube.magFilter

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:383](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L383)

___

### minFilter

• `get` **minFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

TextureCube.minFilter

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

TextureCube.minFilter

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:396](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L396)

___

### mipmapFilter

• `get` **mipmapFilter**(): `GPUMipmapFilterMode`

#### Returns

`GPUMipmapFilterMode`

#### Inherited from

TextureCube.mipmapFilter

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

TextureCube.mipmapFilter

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:409](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L409)

___

### lodMinClamp

• `get` **lodMinClamp**(): `number`

#### Returns

`number`

#### Inherited from

TextureCube.lodMinClamp

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

TextureCube.lodMinClamp

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:421](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L421)

___

### lodMaxClamp

• `get` **lodMaxClamp**(): `number`

#### Returns

`number`

#### Inherited from

TextureCube.lodMaxClamp

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

TextureCube.lodMaxClamp

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:435](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L435)

___

### compare

• `get` **compare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Inherited from

TextureCube.compare

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

TextureCube.compare

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:451](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L451)

___

### maxAnisotropy

• `get` **maxAnisotropy**(): `number`

#### Returns

`number`

#### Inherited from

TextureCube.maxAnisotropy

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

TextureCube.maxAnisotropy

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:467](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L467)

___

### images

• `get` **images**(): `HTMLCanvasElement`[] \| `ImageBitmap`[] \| `OffscreenCanvas`[]

#### Returns

`HTMLCanvasElement`[] \| `ImageBitmap`[] \| `OffscreenCanvas`[]

#### Defined in

[src/engine/textures/BitmapTextureCube.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/engine/textures/BitmapTextureCube.ts#L123)

• `set` **images**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `HTMLCanvasElement`[] \| `ImageBitmap`[] \| `OffscreenCanvas`[] |

#### Returns

`void`

#### Defined in

[src/engine/textures/BitmapTextureCube.ts:127](https://github.com/Orillusion/orillusion/blob/main/src/engine/textures/BitmapTextureCube.ts#L127)

## Constructors

### constructor

• **new BitmapTextureCube**()

#### Overrides

TextureCube.constructor

#### Defined in

[src/engine/textures/BitmapTextureCube.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/engine/textures/BitmapTextureCube.ts#L16)
