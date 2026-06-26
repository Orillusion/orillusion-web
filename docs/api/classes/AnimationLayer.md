[**@orillusion/core**](../README.md)

***

# Class: AnimationLayer

Defined in: [src/components/anim/graph/AnimationLayer.ts:34](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/AnimationLayer.ts#L34)

AnimationLayer — one layer in a stacked animation pipeline.

Layer 0 is the implicit "base" (driven by playAnim/crossFade). Layers 1..N
stack on top and may be filtered by a BoneMask so that, for example, an
upper-body wave animation can override the base walk on just the upper-body
bones while leaving the legs alone.

Each layer has its own clip + time so layers can run independent animations
at independent speeds. The layer's weight controls how much of its pose is
blended in (Override) or added (Additive — base + (layer - rest) * weight).

The math is performed by `AnimatorComponent.updateLayers()`, which iterates
layers in order and mixes per-bone TRS.

## Constructors

### Constructor

> **new AnimationLayer**(`name`, `weight?`, `blendMode?`, `mask?`): `AnimationLayer`

Defined in: [src/components/anim/graph/AnimationLayer.ts:62](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/AnimationLayer.ts#L62)

#### Parameters

##### name

`string`

##### weight?

`number` = `1.0`

##### blendMode?

[`LayerBlendMode`](../enumerations/LayerBlendMode.md) = `LayerBlendMode.Override`

##### mask?

[`BoneMask`](BoneMask.md) = `null`

#### Returns

`AnimationLayer`

## Properties

### name

> **name**: `string`

Defined in: [src/components/anim/graph/AnimationLayer.ts:35](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/AnimationLayer.ts#L35)

***

### weight

> **weight**: `number`

Defined in: [src/components/anim/graph/AnimationLayer.ts:36](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/AnimationLayer.ts#L36)

***

### blendMode

> **blendMode**: [`LayerBlendMode`](../enumerations/LayerBlendMode.md)

Defined in: [src/components/anim/graph/AnimationLayer.ts:37](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/AnimationLayer.ts#L37)

***

### mask

> **mask**: [`BoneMask`](BoneMask.md)

Defined in: [src/components/anim/graph/AnimationLayer.ts:38](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/AnimationLayer.ts#L38)

***

### clipName

> **clipName**: `string` = `''`

Defined in: [src/components/anim/graph/AnimationLayer.ts:41](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/AnimationLayer.ts#L41)

Active clip name on this layer. Empty → layer is paused.

***

### time

> **time**: `number` = `0`

Defined in: [src/components/anim/graph/AnimationLayer.ts:43](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/AnimationLayer.ts#L43)

Layer-local playback time, in seconds.

***

### timeScale

> **timeScale**: `number` = `1.0`

Defined in: [src/components/anim/graph/AnimationLayer.ts:45](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/AnimationLayer.ts#L45)

Layer-local time scale (multiplied into the global timeScale).

***

### playing

> **playing**: `boolean` = `true`

Defined in: [src/components/anim/graph/AnimationLayer.ts:47](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/AnimationLayer.ts#L47)

When false, time does not advance.

***

### \_firstKeyTime

> **\_firstKeyTime**: `number` = `0`

Defined in: [src/components/anim/graph/AnimationLayer.ts:54](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/AnimationLayer.ts#L54)

First-keyframe time of the resolved clip (for makeClipAdditive math).

***

### \_lastKeyTime

> **\_lastKeyTime**: `number` = `0`

Defined in: [src/components/anim/graph/AnimationLayer.ts:56](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/AnimationLayer.ts#L56)

Last-keyframe time of the resolved clip.

***

### \_isStaticPose

> **\_isStaticPose**: `boolean` = `false`

Defined in: [src/components/anim/graph/AnimationLayer.ts:58](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/AnimationLayer.ts#L58)

Whether the resolved clip is a static pose (short span / 2 keyframes).

***

### \_resolved

> **\_resolved**: `boolean` = `false`

Defined in: [src/components/anim/graph/AnimationLayer.ts:60](https://github.com/orillusion/orillusion/blob/main/src/components/anim/graph/AnimationLayer.ts#L60)

Set to true once the layer has been resolved against its clip.
