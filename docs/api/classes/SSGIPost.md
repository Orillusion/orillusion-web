# Class: SSGIPost

Ground base Ambient Occlusion
Let the intersection of the object and the object imitate the effect of the light being cross-occluded
```
gtao setting
let cfg = {@link Engine3D.setting.render.postProcessing.gtao};
```

## Hierarchy

- `PostBase`

  ↳ **`SSGIPost`**

### Constructors

- [constructor](SSGIPost.md#constructor)

### Properties

- [enable](SSGIPost.md#enable)
- [postRenderer](SSGIPost.md#postrenderer)
- [newTexture](SSGIPost.md#newtexture)
- [oldTexture](SSGIPost.md#oldtexture)
- [combineTexture](SSGIPost.md#combinetexture)
- [delayCompute](SSGIPost.md#delaycompute)
- [combineCompute](SSGIPost.md#combinecompute)
- [rtFrame](SSGIPost.md#rtframe)
- [textureScaleSmallCompute](SSGIPost.md#texturescalesmallcompute)
- [textureScaleBigCompute](SSGIPost.md#texturescalebigcompute)
- [view](SSGIPost.md#view)
- [colorTexture](SSGIPost.md#colortexture)
- [posTexture](SSGIPost.md#postexture)
- [normalTexture](SSGIPost.md#normaltexture)
- [gBufferTexture](SSGIPost.md#gbuffertexture)
- [lastPosTexture](SSGIPost.md#lastpostexture)
- [downSampleCofe](SSGIPost.md#downsamplecofe)
- [debugChanal](SSGIPost.md#debugchanal)
- [updateBuffer](SSGIPost.md#updatebuffer)

### Accessors

- [ins](SSGIPost.md#ins)
- [delay](SSGIPost.md#delay)
- [colorIns](SSGIPost.md#colorins)
- [frameCount](SSGIPost.md#framecount)
- [d1](SSGIPost.md#d1)

### Methods

- [destroy](SSGIPost.md#destroy)
- [onCameraChange](SSGIPost.md#oncamerachange)
- [onDetach](SSGIPost.md#ondetach)
- [render](SSGIPost.md#render)
- [compute](SSGIPost.md#compute)
- [onResize](SSGIPost.md#onresize)

## Constructors

### constructor

• **new SSGIPost**(): [`SSGIPost`](SSGIPost.md)

#### Returns

[`SSGIPost`](SSGIPost.md)

#### Overrides

PostBase.constructor

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L70)

## Properties

### enable

• **enable**: `boolean` = `true`

#### Inherited from

PostBase.enable

#### Defined in

[src/gfx/renderJob/post/PostBase.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L20)

___

### postRenderer

• **postRenderer**: `PostRenderer`

#### Inherited from

PostBase.postRenderer

#### Defined in

[src/gfx/renderJob/post/PostBase.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L21)

___

### newTexture

• **newTexture**: `VirtualTexture`

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L41)

___

### oldTexture

• **oldTexture**: `VirtualTexture`

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L42)

___

### combineTexture

• **combineTexture**: `VirtualTexture`

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L43)

___

### delayCompute

• **delayCompute**: `ComputeShader`

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L53)

___

### combineCompute

• **combineCompute**: `ComputeShader`

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L54)

___

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L56)

___

### textureScaleSmallCompute

• **textureScaleSmallCompute**: [`TextureScaleCompute`](TextureScaleCompute.md)

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L57)

___

### textureScaleBigCompute

• **textureScaleBigCompute**: [`TextureScaleCompute`](TextureScaleCompute.md)

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L58)

___

### view

• **view**: [`View3D`](View3D.md)

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L59)

___

### colorTexture

• **colorTexture**: `RenderTexture`

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L60)

___

### posTexture

• **posTexture**: `RenderTexture`

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L61)

___

### normalTexture

• **normalTexture**: `RenderTexture`

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L62)

___

### gBufferTexture

• **gBufferTexture**: `RenderTexture`

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L63)

___

### lastPosTexture

• **lastPosTexture**: `RenderTexture`

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L64)

___

### downSampleCofe

• **downSampleCofe**: `number` = `1.0`

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L65)

___

### debugChanal

• **debugChanal**: `string` = `"0"`

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L67)

___

### updateBuffer

• **updateBuffer**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L69)

## Accessors

### ins

• `get` **ins**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L112)

• `set` **ins**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L107)

___

### delay

• `get` **delay**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L121)

• `set` **delay**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L116)

___

### colorIns

• `get` **colorIns**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L131)

• `set` **colorIns**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L126)

___

### frameCount

• `get` **frameCount**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L140)

• `set` **frameCount**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L135)

___

### d1

• `get` **d1**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:149](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L149)

• `set` **d1**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L144)

## Methods

### destroy

▸ **destroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

PostBase.destroy

#### Defined in

[src/gfx/renderJob/post/PostBase.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L87)

___

### onCameraChange

▸ **onCameraChange**(`oldPos`, `newPos`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldPos` | [`Vector3`](Vector3.md) |
| `newPos` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:94](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L94)

___

### onDetach

▸ **onDetach**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Overrides

PostBase.onDetach

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L103)

___

### render

▸ **render**(`view`, `command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `command` | `GPUCommandEncoder` |

#### Returns

`void`

#### Overrides

PostBase.render

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:233](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L233)

___

### compute

▸ **compute**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Overrides

PostBase.compute

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:239](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L239)

___

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Overrides

PostBase.onResize

#### Defined in

[src/gfx/renderJob/post/SSGIPost.ts:287](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L287)
