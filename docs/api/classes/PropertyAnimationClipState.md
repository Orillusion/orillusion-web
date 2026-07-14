[**@orillusion/core**](../README.md)

***

# Class: PropertyAnimationClipState

Defined in: [src/components/anim/AnimatorComponent.ts:935](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L935)

Per-clip playback state tracked by [AnimatorComponent](AnimatorComponent.md): holds the
clip plus its current blend weight in the mix.

## Constructors

### Constructor

> **new PropertyAnimationClipState**(`clip`): `PropertyAnimationClipState`

Defined in: [src/components/anim/AnimatorComponent.ts:946](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L946)

#### Parameters

##### clip

[`PropertyAnimationClip`](PropertyAnimationClip.md)

#### Returns

`PropertyAnimationClipState`

## Properties

### clip

> **clip**: [`PropertyAnimationClip`](PropertyAnimationClip.md)

Defined in: [src/components/anim/AnimatorComponent.ts:937](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L937)

The animation clip this state wraps.

***

### weight

> **weight**: `number` = `0.0`

Defined in: [src/components/anim/AnimatorComponent.ts:939](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L939)

Current blend weight of the clip in the mix.

## Accessors

### totalTime

#### Get Signature

> **get** **totalTime**(): `number`

Defined in: [src/components/anim/AnimatorComponent.ts:942](https://github.com/orillusion/orillusion/blob/main/src/components/anim/AnimatorComponent.ts#L942)

Total duration of the clip in seconds.

##### Returns

`number`
