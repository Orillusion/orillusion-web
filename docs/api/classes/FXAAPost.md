[**@orillusion/core**](../README.md)

***

# Class: FXAAPost

Defined in: [src/gfx/renderJob/post/FXAAPost.ts:17](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/FXAAPost.ts#L17)

FXAA(fast approximate antialiasing)
A deformation anti-aliasing method that pays more attention to performance. 
It only needs one pass to get the result. FXAA focuses on fast visual anti-aliasing effect, 
rather than pursuing perfect real anti-aliasing effect.

## Constructors

### Constructor

> **new FXAAPost**(): `FXAAPost`

Defined in: [src/gfx/renderJob/post/FXAAPost.ts:21](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/FXAAPost.ts#L21)

#### Returns

`FXAAPost`

#### Overrides

`PostBase.constructor`

## Properties

### postQuad

> **postQuad**: `ViewQuad`

Defined in: [src/gfx/renderJob/post/FXAAPost.ts:18](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/FXAAPost.ts#L18)

***

### renderTexture

> **renderTexture**: `RenderTexture`

Defined in: [src/gfx/renderJob/post/FXAAPost.ts:20](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/FXAAPost.ts#L20)

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

[`VolumetricFogPost`](VolumetricFogPost.md).[`_boundCtx`](VolumetricFogPost.md#_boundctx)

## Methods

### onResize()

> **onResize**(): `void`

Defined in: [src/gfx/renderJob/post/FXAAPost.ts:34](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/FXAAPost.ts#L34)

#### Returns

`void`

#### Overrides

`PostBase.onResize`

***

### render()

> **render**(`view`, `command`): `void`

Defined in: [src/gfx/renderJob/post/FXAAPost.ts:53](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/FXAAPost.ts#L53)

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
