[**@orillusion/core**](../README.md)

***

# Class: SSGIPost

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:34](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L34)

Ground base Ambient Occlusion
Let the intersection of the object and the object imitate the effect of the light being cross-occluded
```
gtao setting
let cfg = engine.setting.render.postProcessing.gtao;
```

## Constructors

### Constructor

> **new SSGIPost**(): `SSGIPost`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:64](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L64)

#### Returns

`SSGIPost`

#### Overrides

`PostBase.constructor`

## Properties

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

***

### newTexture

> **newTexture**: `VirtualTexture`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:39](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L39)

***

### oldTexture

> **oldTexture**: `VirtualTexture`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:40](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L40)

***

### combineTexture

> **combineTexture**: `VirtualTexture`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:41](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L41)

***

### delayCompute

> **delayCompute**: `ComputeShader`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:47](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L47)

***

### combineCompute

> **combineCompute**: `ComputeShader`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:48](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L48)

***

### rtFrame

> **rtFrame**: [`RTFrame`](RTFrame.md)

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:50](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L50)

***

### textureScaleSmallCompute

> **textureScaleSmallCompute**: [`TextureScaleCompute`](TextureScaleCompute.md)

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:51](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L51)

***

### textureScaleBigCompute

> **textureScaleBigCompute**: [`TextureScaleCompute`](TextureScaleCompute.md)

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:52](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L52)

***

### view

> **view**: [`View3D`](View3D.md)

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:53](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L53)

***

### colorTexture

> **colorTexture**: `RenderTexture`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:54](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L54)

***

### posTexture

> **posTexture**: `RenderTexture`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:55](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L55)

***

### normalTexture

> **normalTexture**: `RenderTexture`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:56](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L56)

***

### gBufferTexture

> **gBufferTexture**: `RenderTexture`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:57](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L57)

***

### lastPosTexture

> **lastPosTexture**: `RenderTexture`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:58](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L58)

***

### downSampleCofe

> **downSampleCofe**: `number` = `1.0`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:59](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L59)

***

### debugChanal

> **debugChanal**: `string` = `"0"`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:61](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L61)

***

### updateBuffer

> **updateBuffer**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:63](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L63)

## Accessors

### ins

#### Get Signature

> **get** **ins**(): `number`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:102](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L102)

##### Returns

`number`

#### Set Signature

> **set** **ins**(`v`): `void`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:97](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L97)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### delay

#### Get Signature

> **get** **delay**(): `number`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:111](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L111)

##### Returns

`number`

#### Set Signature

> **set** **delay**(`v`): `void`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:106](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L106)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### colorIns

#### Get Signature

> **get** **colorIns**(): `number`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:121](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L121)

##### Returns

`number`

#### Set Signature

> **set** **colorIns**(`v`): `void`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:116](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L116)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### frameCount

#### Get Signature

> **get** **frameCount**(): `number`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:130](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L130)

##### Returns

`number`

#### Set Signature

> **set** **frameCount**(`v`): `void`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:125](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L125)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### d1

#### Get Signature

> **get** **d1**(): `number`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:139](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L139)

##### Returns

`number`

#### Set Signature

> **set** **d1**(`v`): `void`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:134](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L134)

##### Parameters

###### v

`number`

##### Returns

`void`

## Methods

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

***

### onCameraChange()

> **onCameraChange**(`oldPos`, `newPos`): `void`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:86](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L86)

#### Parameters

##### oldPos

[`Vector3`](Vector3.md)

##### newPos

[`Vector3`](Vector3.md)

#### Returns

`void`

***

### render()

> **render**(`view`, `command`): `void`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:223](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L223)

#### Parameters

##### view

[`View3D`](View3D.md)

##### command

`GPUCommandEncoder`

#### Returns

`void`

#### Overrides

`PostBase.render`

***

### compute()

> **compute**(`view`): `void`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:229](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L229)

#### Parameters

##### view

[`View3D`](View3D.md)

#### Returns

`void`

#### Overrides

`PostBase.compute`

***

### onResize()

> **onResize**(): `void`

Defined in: [src/gfx/renderJob/post/SSGIPost.ts:280](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost.ts#L280)

#### Returns

`void`

#### Overrides

`PostBase.onResize`
