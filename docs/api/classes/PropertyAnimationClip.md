[**@orillusion/core**](../README.md)

***

# Class: PropertyAnimationClip

Defined in: [src/math/AnimationCurveClip.ts:12](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveClip.ts#L12)

Animation Curve 
has frame list data

## Constructors

### Constructor

> **new PropertyAnimationClip**(): `PropertyAnimationClip`

#### Returns

`PropertyAnimationClip`

## Properties

### clipName

> **clipName**: `string`

Defined in: [src/math/AnimationCurveClip.ts:14](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveClip.ts#L14)

Name of the animation clip.

***

### loopTime

> **loopTime**: `boolean`

Defined in: [src/math/AnimationCurveClip.ts:16](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveClip.ts#L16)

Whether the clip loops over time.

***

### startTime

> **startTime**: `number`

Defined in: [src/math/AnimationCurveClip.ts:18](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveClip.ts#L18)

Start time of the clip in seconds.

***

### stopTime

> **stopTime**: `number`

Defined in: [src/math/AnimationCurveClip.ts:20](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveClip.ts#L20)

Stop time of the clip in seconds.

***

### sampleRate

> **sampleRate**: `number`

Defined in: [src/math/AnimationCurveClip.ts:22](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveClip.ts#L22)

Number of samples per second used when authoring the clip.

***

### useSkeletonPos

> **useSkeletonPos**: `boolean`

Defined in: [src/math/AnimationCurveClip.ts:24](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveClip.ts#L24)

Whether the clip drives skeleton position curves.

***

### useSkeletonScale

> **useSkeletonScale**: `boolean`

Defined in: [src/math/AnimationCurveClip.ts:26](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveClip.ts#L26)

Whether the clip drives skeleton scale curves.

***

### positionCurves

> **positionCurves**: `Map`\<`string`, [`AnimationCurveT`](AnimationCurveT.md)\>

Defined in: [src/math/AnimationCurveClip.ts:28](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveClip.ts#L28)

Position animation curves keyed by node path.

***

### rotationCurves

> **rotationCurves**: `Map`\<`string`, [`AnimationCurveT`](AnimationCurveT.md)\>

Defined in: [src/math/AnimationCurveClip.ts:30](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveClip.ts#L30)

Rotation animation curves keyed by node path.

***

### scaleCurves

> **scaleCurves**: `Map`\<`string`, [`AnimationCurveT`](AnimationCurveT.md)\>

Defined in: [src/math/AnimationCurveClip.ts:32](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveClip.ts#L32)

Scale animation curves keyed by node path.

***

### floatCurves

> **floatCurves**: `Map`\<`string`, [`AnimationCurveT`](AnimationCurveT.md)\>

Defined in: [src/math/AnimationCurveClip.ts:34](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveClip.ts#L34)

Float-property animation curves keyed by attribute name.

## Methods

### formBytes()

> **formBytes**(`bytes`): `void`

Defined in: [src/math/AnimationCurveClip.ts:37](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveClip.ts#L37)

Deserialize the clip and all its curves from the given byte stream.

#### Parameters

##### bytes

`BytesArray`

#### Returns

`void`
