# Class: BloomPost

Bloom Effects
```
bloom setting
let cfg = {@link Engine3D.setting.render.postProcessing.bloom};
```

## Hierarchy

- `PostBase`

  ↳ **`BloomPost`**

### Constructors

- [constructor](BloomPost.md#constructor)

### Properties

- [RT\_BloomDown](BloomPost.md#rt_bloomdown)
- [RT\_threshold](BloomPost.md#rt_threshold)
- [downSampleComputes](BloomPost.md#downsamplecomputes)
- [upSampleComputes](BloomPost.md#upsamplecomputes)
- [postCompute](BloomPost.md#postcompute)
- [enable](BloomPost.md#enable)
- [postRenderer](BloomPost.md#postrenderer)

### Accessors

- [downSampleBlurSize](BloomPost.md#downsampleblursize)
- [downSampleBlurSigma](BloomPost.md#downsampleblursigma)
- [upSampleBlurSize](BloomPost.md#upsampleblursize)
- [upSampleBlurSigma](BloomPost.md#upsampleblursigma)
- [luminanceThreshole](BloomPost.md#luminancethreshole)
- [bloomIntensity](BloomPost.md#bloomintensity)

### Methods

- [onDetach](BloomPost.md#ondetach)
- [onResize](BloomPost.md#onresize)
- [destroy](BloomPost.md#destroy)

## Constructors

### constructor

• **new BloomPost**(): [`BloomPost`](BloomPost.md)

#### Returns

[`BloomPost`](BloomPost.md)

#### Overrides

PostBase.constructor

#### Defined in

[src/gfx/renderJob/post/BloomPost.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L51)

## Properties

### RT\_BloomDown

• **RT\_BloomDown**: `VirtualTexture`[]

#### Defined in

[src/gfx/renderJob/post/BloomPost.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L29)

___

### RT\_threshold

• **RT\_threshold**: `VirtualTexture`

#### Defined in

[src/gfx/renderJob/post/BloomPost.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L30)

___

### downSampleComputes

• **downSampleComputes**: `ComputeShader`[]

#### Defined in

[src/gfx/renderJob/post/BloomPost.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L39)

___

### upSampleComputes

• **upSampleComputes**: `ComputeShader`[]

#### Defined in

[src/gfx/renderJob/post/BloomPost.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L40)

___

### postCompute

• **postCompute**: `ComputeShader`

#### Defined in

[src/gfx/renderJob/post/BloomPost.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L41)

___

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

## Accessors

### downSampleBlurSize

• `get` **downSampleBlurSize**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/BloomPost.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L76)

• `set` **downSampleBlurSize**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/BloomPost.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L79)

___

### downSampleBlurSigma

• `get` **downSampleBlurSigma**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/BloomPost.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L83)

• `set` **downSampleBlurSigma**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/BloomPost.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L87)

___

### upSampleBlurSize

• `get` **upSampleBlurSize**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/BloomPost.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L91)

• `set` **upSampleBlurSize**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/BloomPost.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L95)

___

### upSampleBlurSigma

• `get` **upSampleBlurSigma**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/BloomPost.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L99)

• `set` **upSampleBlurSigma**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/BloomPost.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L103)

___

### luminanceThreshole

• `get` **luminanceThreshole**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/BloomPost.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L107)

• `set` **luminanceThreshole**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/BloomPost.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L111)

___

### bloomIntensity

• `get` **bloomIntensity**(): `number`

#### Returns

`number`

#### Defined in

[src/gfx/renderJob/post/BloomPost.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L115)

• `set` **bloomIntensity**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/post/BloomPost.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L119)

## Methods

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

[src/gfx/renderJob/post/BloomPost.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L65)

___

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Overrides

PostBase.onResize

#### Defined in

[src/gfx/renderJob/post/BloomPost.ts:276](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L276)

___

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
