[**@orillusion/core**](../README.md)

***

# Class: ContactShadowPost

Defined in: [src/gfx/renderJob/post/ContactShadowPost.ts:32](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/ContactShadowPost.ts#L32)

Contact Shadows post-pass. Reads the lit color buffer + GBuffer
depth/normal, runs a short screen-space ray-march along the dominant
directional light, and modulates the color with the resulting shadow
factor.

This is a lit-color-modulation MVP — it doesn't feed into the PBR
shader's `directShadowVisibility[]`, so it doesn't darken indirect
lighting. For a small step count (~16) the visual effect is the
"vegetation / floor / fingers" close-contact darkness that CSM can't
resolve, at ~0.3-0.6ms / 1080p on a desktop adapter.

Setting: `engine.setting.shadow.contactShadow.{enable, maxStepCount,
  maxDistance, thickness, bias, intensity}`.

## Constructors

### Constructor

> **new ContactShadowPost**(): `ContactShadowPost`

Defined in: [src/gfx/renderJob/post/ContactShadowPost.ts:38](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/ContactShadowPost.ts#L38)

#### Returns

`ContactShadowPost`

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

## Methods

### onAttach()

> **onAttach**(`_view`): `void`

Defined in: [src/gfx/renderJob/post/ContactShadowPost.ts:42](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/ContactShadowPost.ts#L42)

#### Parameters

##### \_view

[`View3D`](View3D.md)

#### Returns

`void`

#### Overrides

`PostBase.onAttach`

***

### onDetach()

> **onDetach**(`_view`): `void`

Defined in: [src/gfx/renderJob/post/ContactShadowPost.ts:46](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/ContactShadowPost.ts#L46)

#### Parameters

##### \_view

[`View3D`](View3D.md)

#### Returns

`void`

#### Overrides

`PostBase.onDetach`

***

### render()

> **render**(`view`, `command`): `void`

Defined in: [src/gfx/renderJob/post/ContactShadowPost.ts:98](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/ContactShadowPost.ts#L98)

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

Defined in: [src/gfx/renderJob/post/ContactShadowPost.ts:112](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/ContactShadowPost.ts#L112)

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
