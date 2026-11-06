[**@orillusion/core**](../README.md)

***

# Class: LensPost

Defined in: [src/gfx/renderJob/post/LensPost.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/LensPost.ts#L27)

Lens effects in a single fullscreen pass: vignette, chromatic aberration
and film grain. Runs in scene-linear HDR ahead of the final tonemap, so
the grain and the darkened corners go through the same tone curve as the
rest of the image.

```ts
const post = scene.addComponent(PostProcessingComponent);
const lens = post.addPost(LensPost);
lens.vignetteIntensity = 0.45;
lens.chromaticAberration = 0.08;
lens.grainIntensity = 0.12;
```

## Constructors

### Constructor

> **new LensPost**(): `LensPost`

Defined in: [src/gfx/renderJob/post/LensPost.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/LensPost.ts#L35)

#### Returns

`LensPost`

#### Overrides

`PostBase.constructor`

## Properties

### postQuad

> **postQuad**: `ViewQuad`

Defined in: [src/gfx/renderJob/post/LensPost.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/LensPost.ts#L28)

***

### renderTexture

> **renderTexture**: `RenderTexture`

Defined in: [src/gfx/renderJob/post/LensPost.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/LensPost.ts#L29)

***

### enable

> **enable**: `boolean` = `true`

Defined in: [src/gfx/renderJob/post/PostBase.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L23)

#### Inherited from

`PostBase.enable`

***

### isFinalPass

> **isFinalPass**: `boolean` = `false`

Defined in: [src/gfx/renderJob/post/PostBase.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L27)

When true, PostPass iterates this post AFTER every regular
 post regardless of attach order — used by TonemapPost so the
 ACES curve always lands on the fully-composited HDR signal.

#### Inherited from

`PostBase.isFinalPass`

***

### postRenderer

> **postRenderer**: [`PostPass`](PostPass.md)

Defined in: [src/gfx/renderJob/post/PostBase.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L28)

#### Inherited from

`PostBase.postRenderer`

***

### rendererPassState

> **rendererPassState**: `RendererPassState`

Defined in: [src/gfx/renderJob/post/PostBase.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L29)

#### Inherited from

`PostBase.rendererPassState`

***

### \_boundCtx

> **\_boundCtx**: [`Context3D`](Context3D.md) = `null`

Defined in: [src/gfx/renderJob/post/PostBase.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L30)

#### Inherited from

`PostBase._boundCtx`

## Accessors

### vignetteIntensity

#### Get Signature

> **get** **vignetteIntensity**(): `number`

Defined in: [src/gfx/renderJob/post/LensPost.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/LensPost.ts#L67)

Vignette strength, 0 = off.

##### Returns

`number`

#### Set Signature

> **set** **vignetteIntensity**(`v`): `void`

Defined in: [src/gfx/renderJob/post/LensPost.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/LensPost.ts#L68)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### vignetteSmoothness

#### Get Signature

> **get** **vignetteSmoothness**(): `number`

Defined in: [src/gfx/renderJob/post/LensPost.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/LensPost.ts#L71)

Vignette falloff softness, 0..1.

##### Returns

`number`

#### Set Signature

> **set** **vignetteSmoothness**(`v`): `void`

Defined in: [src/gfx/renderJob/post/LensPost.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/LensPost.ts#L72)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### vignetteRoundness

#### Get Signature

> **get** **vignetteRoundness**(): `number`

Defined in: [src/gfx/renderJob/post/LensPost.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/LensPost.ts#L75)

1 = circular, 0 = follows the screen rectangle.

##### Returns

`number`

#### Set Signature

> **set** **vignetteRoundness**(`v`): `void`

Defined in: [src/gfx/renderJob/post/LensPost.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/LensPost.ts#L76)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### vignetteColor

#### Get Signature

> **get** **vignetteColor**(): [`Color`](Color.md)

Defined in: [src/gfx/renderJob/post/LensPost.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/LensPost.ts#L79)

Color the corners fade to.

##### Returns

[`Color`](Color.md)

#### Set Signature

> **set** **vignetteColor**(`v`): `void`

Defined in: [src/gfx/renderJob/post/LensPost.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/LensPost.ts#L80)

##### Parameters

###### v

[`Color`](Color.md)

##### Returns

`void`

***

### chromaticAberration

#### Get Signature

> **get** **chromaticAberration**(): `number`

Defined in: [src/gfx/renderJob/post/LensPost.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/LensPost.ts#L83)

Chromatic aberration strength, 0 = off.

##### Returns

`number`

#### Set Signature

> **set** **chromaticAberration**(`v`): `void`

Defined in: [src/gfx/renderJob/post/LensPost.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/LensPost.ts#L84)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### grainIntensity

#### Get Signature

> **get** **grainIntensity**(): `number`

Defined in: [src/gfx/renderJob/post/LensPost.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/LensPost.ts#L87)

Film grain strength, 0 = off.

##### Returns

`number`

#### Set Signature

> **set** **grainIntensity**(`v`): `void`

Defined in: [src/gfx/renderJob/post/LensPost.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/LensPost.ts#L88)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### grainStatic

#### Get Signature

> **get** **grainStatic**(): `boolean`

Defined in: [src/gfx/renderJob/post/LensPost.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/LensPost.ts#L91)

Freeze the grain pattern.

##### Returns

`boolean`

#### Set Signature

> **set** **grainStatic**(`v`): `void`

Defined in: [src/gfx/renderJob/post/LensPost.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/LensPost.ts#L92)

##### Parameters

###### v

`boolean`

##### Returns

`void`

## Methods

### onResize()

> **onResize**(): `void`

Defined in: [src/gfx/renderJob/post/LensPost.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/LensPost.ts#L47)

#### Returns

`void`

#### Overrides

`PostBase.onResize`

***

### render()

> **render**(`view`, `command`): `void`

Defined in: [src/gfx/renderJob/post/LensPost.ts:94](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/LensPost.ts#L94)

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

Defined in: [src/gfx/renderJob/post/PostBase.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L133)

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

Defined in: [src/gfx/renderJob/post/PostBase.ts:143](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L143)

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

`PostBase.destroy`
