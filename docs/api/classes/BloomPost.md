[**@orillusion/core**](../README.md)

***

# Class: BloomPost

Defined in: [src/gfx/renderJob/post/BloomPost.ts:22](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L22)

Bloom Effects
```
bloom setting
let cfg = {@link this.setting.render.postProcessing.bloom};
```

## Constructors

### Constructor

> **new BloomPost**(): `BloomPost`

Defined in: [src/gfx/renderJob/post/BloomPost.ts:55](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L55)

#### Returns

`BloomPost`

#### Overrides

`PostBase.constructor`

## Properties

### RT\_BloomDown

> **RT\_BloomDown**: `VirtualTexture`[]

Defined in: [src/gfx/renderJob/post/BloomPost.ts:27](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L27)

***

### RT\_threshold

> **RT\_threshold**: `VirtualTexture`

Defined in: [src/gfx/renderJob/post/BloomPost.ts:28](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L28)

***

### RT\_final

> **RT\_final**: `VirtualTexture`

Defined in: [src/gfx/renderJob/post/BloomPost.ts:38](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L38)

***

### downSampleComputes

> **downSampleComputes**: `ComputeShader`[]

Defined in: [src/gfx/renderJob/post/BloomPost.ts:43](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L43)

***

### upSampleComputes

> **upSampleComputes**: `ComputeShader`[]

Defined in: [src/gfx/renderJob/post/BloomPost.ts:44](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L44)

***

### postCompute

> **postCompute**: `ComputeShader`

Defined in: [src/gfx/renderJob/post/BloomPost.ts:45](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L45)

***

### enable

> **enable**: `boolean` = `true`

Defined in: [src/gfx/renderJob/post/PostBase.ts:23](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L23)

#### Inherited from

`PostBase.enable`

***

### isFinalPass

> **isFinalPass**: `boolean` = `false`

Defined in: [src/gfx/renderJob/post/PostBase.ts:27](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L27)

When true, PostPass iterates this post AFTER every regular
 post regardless of attach order — used by TonemapPost so the
 ACES curve always lands on the fully-composited HDR signal.

#### Inherited from

`PostBase.isFinalPass`

***

### postRenderer

> **postRenderer**: [`PostPass`](PostPass.md)

Defined in: [src/gfx/renderJob/post/PostBase.ts:28](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L28)

#### Inherited from

`PostBase.postRenderer`

***

### rendererPassState

> **rendererPassState**: `RendererPassState`

Defined in: [src/gfx/renderJob/post/PostBase.ts:29](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L29)

#### Inherited from

`PostBase.rendererPassState`

***

### \_boundCtx

> **\_boundCtx**: [`Context3D`](Context3D.md) = `null`

Defined in: [src/gfx/renderJob/post/PostBase.ts:30](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L30)

#### Inherited from

`PostBase._boundCtx`

## Accessors

### downSampleBlurSize

#### Get Signature

> **get** **downSampleBlurSize**(): `number`

Defined in: [src/gfx/renderJob/post/BloomPost.ts:80](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L80)

##### Returns

`number`

#### Set Signature

> **set** **downSampleBlurSize**(`value`): `void`

Defined in: [src/gfx/renderJob/post/BloomPost.ts:83](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L83)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### downSampleBlurSigma

#### Get Signature

> **get** **downSampleBlurSigma**(): `number`

Defined in: [src/gfx/renderJob/post/BloomPost.ts:87](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L87)

##### Returns

`number`

#### Set Signature

> **set** **downSampleBlurSigma**(`value`): `void`

Defined in: [src/gfx/renderJob/post/BloomPost.ts:91](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L91)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### upSampleBlurSize

#### Get Signature

> **get** **upSampleBlurSize**(): `number`

Defined in: [src/gfx/renderJob/post/BloomPost.ts:95](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L95)

##### Returns

`number`

#### Set Signature

> **set** **upSampleBlurSize**(`value`): `void`

Defined in: [src/gfx/renderJob/post/BloomPost.ts:99](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L99)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### upSampleBlurSigma

#### Get Signature

> **get** **upSampleBlurSigma**(): `number`

Defined in: [src/gfx/renderJob/post/BloomPost.ts:103](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L103)

##### Returns

`number`

#### Set Signature

> **set** **upSampleBlurSigma**(`value`): `void`

Defined in: [src/gfx/renderJob/post/BloomPost.ts:107](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L107)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### luminanceThreshole

#### Get Signature

> **get** **luminanceThreshole**(): `number`

Defined in: [src/gfx/renderJob/post/BloomPost.ts:111](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L111)

##### Returns

`number`

#### Set Signature

> **set** **luminanceThreshole**(`value`): `void`

Defined in: [src/gfx/renderJob/post/BloomPost.ts:115](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L115)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### bloomIntensity

#### Get Signature

> **get** **bloomIntensity**(): `number`

Defined in: [src/gfx/renderJob/post/BloomPost.ts:119](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L119)

##### Returns

`number`

#### Set Signature

> **set** **bloomIntensity**(`value`): `void`

Defined in: [src/gfx/renderJob/post/BloomPost.ts:123](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L123)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### hdr

#### Get Signature

> **get** **hdr**(): `number`

Defined in: [src/gfx/renderJob/post/BloomPost.ts:127](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L127)

##### Returns

`number`

#### Set Signature

> **set** **hdr**(`value`): `void`

Defined in: [src/gfx/renderJob/post/BloomPost.ts:131](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L131)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### onResize()

> **onResize**(): `void`

Defined in: [src/gfx/renderJob/post/BloomPost.ts:294](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/BloomPost.ts#L294)

#### Returns

`void`

#### Overrides

`PostBase.onResize`

***

### compute()

> **compute**(`view`): `void`

Defined in: [src/gfx/renderJob/post/PostBase.ts:133](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L133)

#### Parameters

##### view

[`View3D`](View3D.md)

#### Returns

`void`

#### Inherited from

`PostBase.compute`

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [src/gfx/renderJob/post/PostBase.ts:143](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L143)

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

`PostBase.destroy`
