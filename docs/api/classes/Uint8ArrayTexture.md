# Class: Uint8ArrayTexture

Uint8Array纹理对象

## Hierarchy

- [`Texture`](Texture.md)

  ↳ **`Uint8ArrayTexture`**


### Properties

- [textureSource](Uint8ArrayTexture.md#texturesource)
- [name](Uint8ArrayTexture.md#name)
- [url](Uint8ArrayTexture.md#url)
- [pid](Uint8ArrayTexture.md#pid)
- [view](Uint8ArrayTexture.md#view)
- [gpuSampler](Uint8ArrayTexture.md#gpusampler)
- [gpuSampler\_comparison](Uint8ArrayTexture.md#gpusampler_comparison)
- [format](Uint8ArrayTexture.md#format)
- [usage](Uint8ArrayTexture.md#usage)
- [width](Uint8ArrayTexture.md#width)
- [height](Uint8ArrayTexture.md#height)
- [depthOrArrayLayers](Uint8ArrayTexture.md#depthorarraylayers)
- [numberLayer](Uint8ArrayTexture.md#numberlayer)
- [viewDescriptor](Uint8ArrayTexture.md#viewdescriptor)
- [textureDescriptor](Uint8ArrayTexture.md#texturedescriptor)
- [visibility](Uint8ArrayTexture.md#visibility)
- [textureBindingLayout](Uint8ArrayTexture.md#texturebindinglayout)
- [samplerBindingLayout](Uint8ArrayTexture.md#samplerbindinglayout)
- [sampler\_comparisonBindingLayout](Uint8ArrayTexture.md#sampler_comparisonbindinglayout)
- [flipY](Uint8ArrayTexture.md#flipy)
- [sourceImageData](Uint8ArrayTexture.md#sourceimagedata)
- [mipmapCount](Uint8ArrayTexture.md#mipmapcount)

### Constructors

- [constructor](Uint8ArrayTexture.md#constructor)

### Methods

- [init](Uint8ArrayTexture.md#init)
- [getGPUTexture](Uint8ArrayTexture.md#getgputexture)
- [getGPUView](Uint8ArrayTexture.md#getgpuview)
- [bindStateChange](Uint8ArrayTexture.md#bindstatechange)
- [unBindStateChange](Uint8ArrayTexture.md#unbindstatechange)
- [destoryView](Uint8ArrayTexture.md#destoryview)
- [destroy](Uint8ArrayTexture.md#destroy)
- [serialization](Uint8ArrayTexture.md#serialization)
- [unSerialization](Uint8ArrayTexture.md#unserialization)
- [create](Uint8ArrayTexture.md#create)
- [updateTexture](Uint8ArrayTexture.md#updatetexture)

### Accessors

- [useMipmap](Uint8ArrayTexture.md#usemipmap)
- [addressModeU](Uint8ArrayTexture.md#addressmodeu)
- [addressModeV](Uint8ArrayTexture.md#addressmodev)
- [addressModeW](Uint8ArrayTexture.md#addressmodew)
- [magFilter](Uint8ArrayTexture.md#magfilter)
- [minFilter](Uint8ArrayTexture.md#minfilter)
- [mipmapFilter](Uint8ArrayTexture.md#mipmapfilter)
- [lodMinClamp](Uint8ArrayTexture.md#lodminclamp)
- [lodMaxClamp](Uint8ArrayTexture.md#lodmaxclamp)
- [compare](Uint8ArrayTexture.md#compare)
- [maxAnisotropy](Uint8ArrayTexture.md#maxanisotropy)

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

## Constructors

### constructor

• **new Uint8ArrayTexture**(`width?`, `height?`, `numberLayer?`)

新健纹理

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `width` | `number` | `32` |
| `height` | `number` | `32` |
| `numberLayer` | `number` | `1` |

#### Inherited from

[Texture](Texture.md).[constructor](Texture.md#constructor)

#### Defined in

[src/engine/gfx/graphics/webGpu/core/texture/Texture.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/graphics/webGpu/core/texture/Texture.ts#L113)

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

▸ **create**(`width`, `height`, `data`, `useMipmap?`): [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

创建一个纹理对象

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `width` | `number` | `undefined` | 纹理对象的宽度 |
| `height` | `number` | `undefined` | 纹理对象的高度 |
| `data` | `Uint8Array` | `undefined` | 纹理对象数据 |
| `useMipmap` | `boolean` | `false` | 默认不使用纹理映射 |

#### Returns

[`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

[src/engine/textures/Uint8ArrayTexture.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/engine/textures/Uint8ArrayTexture.ts#L22)

___

### updateTexture

▸ **updateTexture**(`width`, `height`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |
| `data` | `Uint8Array` |

#### Returns

`void`

#### Defined in

[src/engine/textures/Uint8ArrayTexture.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/engine/textures/Uint8ArrayTexture.ts#L59)

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
