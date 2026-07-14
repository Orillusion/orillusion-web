[**@orillusion/core**](../README.md)

***

# Class: VolumetricFogPost

Defined in: [src/gfx/renderJob/post/VolumetricFogPost.ts:36](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/VolumetricFogPost.ts#L36)

Volumetric Fog (MVP) — screen-space per-pixel ray-march. Produces
directional light scattering ("god rays" / volumetric shafts) and
Beer-Lambert distance attenuation in fog.

Consumed via the post chain: `addPost(view, new VolumetricFogPost())`.

Setting: `engine.setting.render.postProcessing.volumetricFog`.

Known MVP limitations:
  - Compute pass does NOT sample CSM shadow maps along the march
    (would need the shadow map binding plumbed; deferred). The
    phase function still biases scattering toward the sun
    direction so light-shafts read correctly when looking near
    the light.
  - No temporal denoise — increase `stepCount` if banding shows.
  - Single dominant directional light only; point/spot lights
    don't contribute scattering yet.

## Constructors

### Constructor

> **new VolumetricFogPost**(): `VolumetricFogPost`

Defined in: [src/gfx/renderJob/post/VolumetricFogPost.ts:42](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/VolumetricFogPost.ts#L42)

#### Returns

`VolumetricFogPost`

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

### onAttach()

> **onAttach**(`_view`): `void`

Defined in: [src/gfx/renderJob/post/VolumetricFogPost.ts:46](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/VolumetricFogPost.ts#L46)

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

Defined in: [src/gfx/renderJob/post/VolumetricFogPost.ts:50](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/VolumetricFogPost.ts#L50)

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

Defined in: [src/gfx/renderJob/post/VolumetricFogPost.ts:103](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/VolumetricFogPost.ts#L103)

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

Defined in: [src/gfx/renderJob/post/VolumetricFogPost.ts:117](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/post/VolumetricFogPost.ts#L117)

#### Returns

`void`

#### Overrides

`PostBase.onResize`
