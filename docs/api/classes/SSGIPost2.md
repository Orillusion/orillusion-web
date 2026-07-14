[**@orillusion/core**](../README.md)

***

# Class: SSGIPost2

Defined in: [src/gfx/renderJob/post/SSGIPost2.ts:26](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost2.ts#L26)

Horizon-based SSGI post effect (MVP).

Independent of the existing legacy `SSGIPost` (under `_Sample_SSGI`,
marked disabled). Named `SSGIPost2` to coexist; once stabilised this
replaces the legacy one.

Add to scene: `view.scene.addComponent(PostProcessingComponent).addPost(SSGIPost2)`.

## Constructors

### Constructor

> **new SSGIPost2**(): `SSGIPost2`

Defined in: [src/gfx/renderJob/post/PostBase.ts:35](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L35)

#### Returns

`SSGIPost2`

#### Inherited from

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

### onAttach()

> **onAttach**(`view`): `void`

Defined in: [src/gfx/renderJob/post/PostBase.ts:135](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L135)

#### Parameters

##### view

[`View3D`](View3D.md)

#### Returns

`void`

#### Inherited from

`PostBase.onAttach`

***

### onDetach()

> **onDetach**(`view`): `void`

Defined in: [src/gfx/renderJob/post/PostBase.ts:137](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L137)

#### Parameters

##### view

[`View3D`](View3D.md)

#### Returns

`void`

#### Inherited from

`PostBase.onDetach`

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

### render()

> **render**(`view`, `command`): `void`

Defined in: [src/gfx/renderJob/post/SSGIPost2.ts:57](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost2.ts#L57)

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

### onResize()

> **onResize**(): `void`

Defined in: [src/gfx/renderJob/post/SSGIPost2.ts:76](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/SSGIPost2.ts#L76)

#### Returns

`void`

#### Overrides

`PostBase.onResize`
