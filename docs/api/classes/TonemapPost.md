[**@orillusion/core**](../README.md)

***

# Class: TonemapPost

Defined in: [src/gfx/renderJob/post/TonemapPost.ts:23](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TonemapPost.ts#L23)

Final HDR → LDR tonemap pass. Applies an ACES Filmic curve (or
passthrough) and writes to an `rgba16float` RT — keeping the chain
HDR-correct so the swapchain (in sRGB hardware-encode mode) does
the linear→sRGB step. Reads the chain cursor via
`lastRenderPassState.getLastRenderTexture`, identical to FXAAPost.

Marked as a final pass (`isFinalPass = true`) so PostRenderer always
iterates it after every user-attached post regardless of attach
order. This guarantees Bloom / FXAA / GodRay run in linear HDR
space and only the *combined* signal hits the curve.

## Constructors

### Constructor

> **new TonemapPost**(): `TonemapPost`

Defined in: [src/gfx/renderJob/post/TonemapPost.ts:27](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TonemapPost.ts#L27)

#### Returns

`TonemapPost`

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

### postQuad

> **postQuad**: `ViewQuad`

Defined in: [src/gfx/renderJob/post/TonemapPost.ts:24](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TonemapPost.ts#L24)

***

### renderTexture

> **renderTexture**: `RenderTexture`

Defined in: [src/gfx/renderJob/post/TonemapPost.ts:25](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TonemapPost.ts#L25)

## Methods

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

***

### onResize()

> **onResize**(): `void`

Defined in: [src/gfx/renderJob/post/TonemapPost.ts:40](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TonemapPost.ts#L40)

#### Returns

`void`

#### Overrides

`PostBase.onResize`

***

### onAttach()

> **onAttach**(`view`): `void`

Defined in: [src/gfx/renderJob/post/TonemapPost.ts:45](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TonemapPost.ts#L45)

#### Parameters

##### view

[`View3D`](View3D.md)

#### Returns

`void`

#### Overrides

`PostBase.onAttach`

***

### onDetach()

> **onDetach**(`view`): `void`

Defined in: [src/gfx/renderJob/post/TonemapPost.ts:50](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TonemapPost.ts#L50)

#### Parameters

##### view

[`View3D`](View3D.md)

#### Returns

`void`

#### Overrides

`PostBase.onDetach`

***

### render()

> **render**(`view`, `command`): `void`

Defined in: [src/gfx/renderJob/post/TonemapPost.ts:55](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/TonemapPost.ts#L55)

#### Parameters

##### view

[`View3D`](View3D.md)

##### command

`GPUCommandEncoder`

#### Returns

`void`

#### Overrides

`PostBase.render`
