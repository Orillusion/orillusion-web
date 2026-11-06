[**@orillusion/core**](../README.md)

***

# Class: PropertyAnimationClipState

Defined in: [src/components/anim/AnimatorComponent.ts:942](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L942)

Per-clip playback state tracked by [AnimatorComponent](AnimatorComponent.md): holds the
clip plus its current blend weight in the mix.

## Constructors

### Constructor

> **new PropertyAnimationClipState**(`clip`): `PropertyAnimationClipState`

Defined in: [src/components/anim/AnimatorComponent.ts:953](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L953)

#### Parameters

##### clip

[`PropertyAnimationClip`](PropertyAnimationClip.md)

#### Returns

`PropertyAnimationClipState`

## Properties

### clip

> **clip**: [`PropertyAnimationClip`](PropertyAnimationClip.md)

Defined in: [src/components/anim/AnimatorComponent.ts:944](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L944)

The animation clip this state wraps.

***

### weight

> **weight**: `number` = `0.0`

Defined in: [src/components/anim/AnimatorComponent.ts:946](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L946)

Current blend weight of the clip in the mix.

## Accessors

### totalTime

#### Get Signature

> **get** **totalTime**(): `number`

Defined in: [src/components/anim/AnimatorComponent.ts:949](https://github.com/Orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L949)

Total duration of the clip in seconds.

##### Returns

`number`
