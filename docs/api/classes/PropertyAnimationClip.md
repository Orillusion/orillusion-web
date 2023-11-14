# Class: PropertyAnimationClip

Animation Cureve 
has frame list data

### Constructors

- [constructor](PropertyAnimationClip.md#constructor)

### Properties

- [clipName](PropertyAnimationClip.md#clipname)
- [loopTime](PropertyAnimationClip.md#looptime)
- [startTime](PropertyAnimationClip.md#starttime)
- [stopTime](PropertyAnimationClip.md#stoptime)
- [sampleRate](PropertyAnimationClip.md#samplerate)
- [useSkeletonPos](PropertyAnimationClip.md#useskeletonpos)
- [useSkeletonScale](PropertyAnimationClip.md#useskeletonscale)
- [positionCurves](PropertyAnimationClip.md#positioncurves)
- [rotationCurves](PropertyAnimationClip.md#rotationcurves)
- [scaleCurves](PropertyAnimationClip.md#scalecurves)
- [floatCurves](PropertyAnimationClip.md#floatcurves)

### Methods

- [formBytes](PropertyAnimationClip.md#formbytes)

## Constructors

### constructor

• **new PropertyAnimationClip**()

## Properties

### clipName

• **clipName**: `string`

#### Defined in

[src/math/AnimationCurveClip.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveClip.ts#L13)

___

### loopTime

• **loopTime**: `boolean`

#### Defined in

[src/math/AnimationCurveClip.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveClip.ts#L14)

___

### startTime

• **startTime**: `number`

#### Defined in

[src/math/AnimationCurveClip.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveClip.ts#L15)

___

### stopTime

• **stopTime**: `number`

#### Defined in

[src/math/AnimationCurveClip.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveClip.ts#L16)

___

### sampleRate

• **sampleRate**: `number`

#### Defined in

[src/math/AnimationCurveClip.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveClip.ts#L17)

___

### useSkeletonPos

• **useSkeletonPos**: `boolean`

#### Defined in

[src/math/AnimationCurveClip.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveClip.ts#L18)

___

### useSkeletonScale

• **useSkeletonScale**: `boolean`

#### Defined in

[src/math/AnimationCurveClip.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveClip.ts#L19)

___

### positionCurves

• **positionCurves**: `Map`<`string`, [`AnimationCurveT`](AnimationCurveT.md)\>

#### Defined in

[src/math/AnimationCurveClip.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveClip.ts#L20)

___

### rotationCurves

• **rotationCurves**: `Map`<`string`, [`AnimationCurveT`](AnimationCurveT.md)\>

#### Defined in

[src/math/AnimationCurveClip.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveClip.ts#L21)

___

### scaleCurves

• **scaleCurves**: `Map`<`string`, [`AnimationCurveT`](AnimationCurveT.md)\>

#### Defined in

[src/math/AnimationCurveClip.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveClip.ts#L22)

___

### floatCurves

• **floatCurves**: `Map`<`string`, [`AnimationCurveT`](AnimationCurveT.md)\>

#### Defined in

[src/math/AnimationCurveClip.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveClip.ts#L23)

## Methods

### formBytes

▸ **formBytes**(`bytes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `BytesArray` |

#### Returns

`void`

#### Defined in

[src/math/AnimationCurveClip.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveClip.ts#L25)
