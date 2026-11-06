[**@orillusion/core**](../README.md)

***

# Class: MotionBlurPost

Defined in: [src/gfx/renderJob/post/MotionBlurPost.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/MotionBlurPost.ts#L37)

Camera motion blur. Each pixel is averaged along the screen-space path it
travelled since the previous frame (reconstructed from depth and the
previous view-projection), so panning, orbiting and dollying the camera
streak the image the way a real shutter does.

Limitation: only camera motion is blurred — objects that move on their own
stay sharp, because the G-buffer carries no per-object velocity.

```ts
const post = scene.addComponent(PostProcessingComponent);
const blur = post.addPost(MotionBlurPost);
blur.intensity = 0.5;      // 180° shutter
```

## Constructors

### Constructor

> **new MotionBlurPost**(): `MotionBlurPost`

Defined in: [src/gfx/renderJob/post/PostBase.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/PostBase.ts#L35)

#### Returns

`MotionBlurPost`

#### Inherited from

`PostBase.constructor`

## Properties

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

### usesVelocityTexture

#### Get Signature

> **get** **usesVelocityTexture**(): `boolean`

Defined in: [src/gfx/renderJob/post/MotionBlurPost.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/MotionBlurPost.ts#L47)

True when the blur reads MotionVectorPass' per-object velocities.

##### Returns

`boolean`

***

### intensity

#### Get Signature

> **get** **intensity**(): `number`

Defined in: [src/gfx/renderJob/post/MotionBlurPost.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/MotionBlurPost.ts#L71)

Shutter scale, 0 = off, 0.5 = 180° shutter, 1 = full frame.

##### Returns

`number`

#### Set Signature

> **set** **intensity**(`v`): `void`

Defined in: [src/gfx/renderJob/post/MotionBlurPost.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/MotionBlurPost.ts#L72)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### samples

#### Get Signature

> **get** **samples**(): `number`

Defined in: [src/gfx/renderJob/post/MotionBlurPost.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/MotionBlurPost.ts#L75)

Samples along the blur vector (2…32).

##### Returns

`number`

#### Set Signature

> **set** **samples**(`v`): `void`

Defined in: [src/gfx/renderJob/post/MotionBlurPost.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/MotionBlurPost.ts#L76)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### maxBlurPixels

#### Get Signature

> **get** **maxBlurPixels**(): `number`

Defined in: [src/gfx/renderJob/post/MotionBlurPost.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/MotionBlurPost.ts#L79)

Maximum blur length in pixels.

##### Returns

`number`

#### Set Signature

> **set** **maxBlurPixels**(`v`): `void`

Defined in: [src/gfx/renderJob/post/MotionBlurPost.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/MotionBlurPost.ts#L80)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### frameRateIndependent

#### Get Signature

> **get** **frameRateIndependent**(): `boolean`

Defined in: [src/gfx/renderJob/post/MotionBlurPost.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/MotionBlurPost.ts#L83)

Keep the blur length independent of the frame rate.

##### Returns

`boolean`

#### Set Signature

> **set** **frameRateIndependent**(`v`): `void`

Defined in: [src/gfx/renderJob/post/MotionBlurPost.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/MotionBlurPost.ts#L84)

##### Parameters

###### v

`boolean`

##### Returns

`void`

***

### prevViewProj

#### Get Signature

> **get** **prevViewProj**(): [`Matrix4`](Matrix4.md)

Defined in: [src/gfx/renderJob/post/MotionBlurPost.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/MotionBlurPost.ts#L97)

The view-projection used as "previous" on the last rendered frame.

##### Returns

[`Matrix4`](Matrix4.md)

***

### currViewProj

#### Get Signature

> **get** **currViewProj**(): [`Matrix4`](Matrix4.md)

Defined in: [src/gfx/renderJob/post/MotionBlurPost.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/MotionBlurPost.ts#L99)

The view-projection of the last rendered frame.

##### Returns

[`Matrix4`](Matrix4.md)

## Methods

### resetHistory()

> **resetHistory**(): `void`

Defined in: [src/gfx/renderJob/post/MotionBlurPost.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/MotionBlurPost.ts#L91)

Forget the previous camera pose, so the next frame is not blurred.
Call after a camera cut / teleport. With per-object velocities this
also resets MotionVectorPass, whose texture the blur then reads.

#### Returns

`void`

***

### onResize()

> **onResize**(): `void`

Defined in: [src/gfx/renderJob/post/MotionBlurPost.ts:165](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/post/MotionBlurPost.ts#L165)

#### Returns

`void`

#### Overrides

`PostBase.onResize`

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
