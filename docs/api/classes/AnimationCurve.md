[**@orillusion/core**](../README.md)

***

# Class: AnimationCurve

Defined in: [src/math/AnimationCurve.ts:11](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L11)

Animation Curve 
has frame list data

## Constructors

### Constructor

> **new AnimationCurve**(`frames?`, `preWarpMode?`, `postWarpMode?`): `AnimationCurve`

Defined in: [src/math/AnimationCurve.ts:45](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L45)

#### Parameters

##### frames?

[`Keyframe`](Keyframe.md)[]

##### preWarpMode?

[`WrapTimeMode`](../enumerations/WrapTimeMode.md) = `WrapTimeMode.Repeat`

##### postWarpMode?

[`WrapTimeMode`](../enumerations/WrapTimeMode.md) = `WrapTimeMode.Repeat`

#### Returns

`AnimationCurve`

## Properties

### curve

> **curve**: [`Keyframe`](Keyframe.md)[] = `[]`

Defined in: [src/math/AnimationCurve.ts:24](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L24)

Ordered list of keyframes defining this curve.

***

### serializedVersion

> **serializedVersion**: `number`

Defined in: [src/math/AnimationCurve.ts:27](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L27)

Serialized format version of this curve.

***

### preWarpMode

> **preWarpMode**: `number`

Defined in: [src/math/AnimationCurve.ts:30](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L30)

Wrap mode applied for times before the first keyframe.

***

### postWarpMode

> **postWarpMode**: `number`

Defined in: [src/math/AnimationCurve.ts:33](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L33)

Wrap mode applied for times after the last keyframe.

***

### rotationOrder

> **rotationOrder**: `number`

Defined in: [src/math/AnimationCurve.ts:36](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L36)

Euler rotation order associated with this curve.

## Accessors

### cacheOut

#### Get Signature

> **get** **cacheOut**(): `object`

Defined in: [src/math/AnimationCurve.ts:41](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L41)

Last computed left/right keyframe indices from the most recent lookup.

##### Returns

`object`

###### lhsIndex

> **lhsIndex**: `number`

###### rhsIndex

> **rhsIndex**: `number`

***

### totalTime

#### Get Signature

> **get** **totalTime**(): `number`

Defined in: [src/math/AnimationCurve.ts:57](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L57)

return this curve use total time

##### Returns

`number`

***

### first

#### Get Signature

> **get** **first**(): [`Keyframe`](Keyframe.md)

Defined in: [src/math/AnimationCurve.ts:64](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L64)

get curve first keframe time

##### Returns

[`Keyframe`](Keyframe.md)

***

### last

#### Get Signature

> **get** **last**(): [`Keyframe`](Keyframe.md)

Defined in: [src/math/AnimationCurve.ts:71](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L71)

get curve last keyframe time

##### Returns

[`Keyframe`](Keyframe.md)

## Methods

### addKeyFrame()

> **addKeyFrame**(`keyFrame`): `void`

Defined in: [src/math/AnimationCurve.ts:79](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L79)

add keyFrame to curve keyframe last and calcTotalTime

#### Parameters

##### keyFrame

[`Keyframe`](Keyframe.md)

[Keyframe](Keyframe.md)  sea: one key frame data

#### Returns

`void`

***

### removeKeyFrame()

> **removeKeyFrame**(`keyFrame`): `void`

Defined in: [src/math/AnimationCurve.ts:90](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L90)

remove keyframe from this curve

#### Parameters

##### keyFrame

[`Keyframe`](Keyframe.md)

[Keyframe](Keyframe.md)

#### Returns

`void`

***

### calculateCacheData()

> **calculateCacheData**(`cache`, `lhsIndex`, `rhsIndex`, `timeOffset?`): `void`

Defined in: [src/math/AnimationCurve.ts:106](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L106)

calculate keyframe list in to timeline

#### Parameters

##### cache

`FrameCache`

FrameCache

##### lhsIndex

`number`

left frame index

##### rhsIndex

`number`

right frame index

##### timeOffset?

`number` = `0`

offset time default 0.0

#### Returns

`void`

***

### getValue()

> **getValue**(`time`): `number`

Defined in: [src/math/AnimationCurve.ts:142](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L142)

get caculate frames value

#### Parameters

##### time

`number`

#### Returns

`number`

***

### getCurveFramesExtent()

> **getCurveFramesExtent**(`time`): `object`

Defined in: [src/math/AnimationCurve.ts:157](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L157)

get caculate frames extent

#### Parameters

##### time

`number`

#### Returns

`object`

##### lhsIndex

> **lhsIndex**: `number`

##### rhsIndex

> **rhsIndex**: `number`

##### time

> **time**: `number`

***

### getKeyCount()

> **getKeyCount**(): `number`

Defined in: [src/math/AnimationCurve.ts:169](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L169)

get has Keyframe list count

#### Returns

`number`

int

***

### getKey()

> **getKey**(`index`): [`Keyframe`](Keyframe.md)

Defined in: [src/math/AnimationCurve.ts:178](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L178)

Get a Keyframe Data by Index

#### Parameters

##### index

`number`

must int

#### Returns

[`Keyframe`](Keyframe.md)

Keyframe [Keyframe](Keyframe.md)

***

### unSerialized()

> **unSerialized**(`data`): `this`

Defined in: [src/math/AnimationCurve.ts:187](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L187)

Deserialize this curve from raw asset data (Unity-style field names).

#### Parameters

##### data

`any`

source object containing wrap modes and keyframes

#### Returns

`this`

this curve

***

### unSerialized2()

> **unSerialized2**(`data`): `this`

Defined in: [src/math/AnimationCurve.ts:206](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L206)

Deserialize this curve from an alternate data layout (preWrapMode/keys fields).

#### Parameters

##### data

`Object`

source object containing wrap modes and keyframes

#### Returns

`this`

this curve

***

### wrapTime()

> **wrapTime**(`curveT`): `number`

Defined in: [src/math/AnimationCurve.ts:225](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L225)

Wrap a time value into the curve range according to the pre/post wrap modes.

#### Parameters

##### curveT

`number`

input time

#### Returns

`number`

wrapped time within the curve bounds

***

### scaleCurveValue()

> `static` **scaleCurveValue**(`curve`, `scale`): `void`

Defined in: [src/math/AnimationCurve.ts:319](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L319)

Scale the value and tangents of every keyframe in the curve, then invalidate its cache.

#### Parameters

##### curve

`AnimationCurve`

curve to scale

##### scale

`number`

multiplier applied to each keyframe value and slope

#### Returns

`void`
