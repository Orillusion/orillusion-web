[**@orillusion/core**](../README.md)

***

# Class: AnimationCurveT

Defined in: [src/math/AnimationCurveT.ts:13](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L13)

Animation Curve 
has frame list data

## Constructors

### Constructor

> **new AnimationCurveT**(`k?`): `AnimationCurveT`

Defined in: [src/math/AnimationCurveT.ts:33](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L33)

#### Parameters

##### k?

`number` = `1`

#### Returns

`AnimationCurveT`

## Properties

### path

> **path**: `string`

Defined in: [src/math/AnimationCurveT.ts:15](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L15)

Target node path this curve animates.

***

### attribute

> **attribute**: `string`

Defined in: [src/math/AnimationCurveT.ts:17](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L17)

Animated attribute name.

***

### propertys

> **propertys**: `string`[]

Defined in: [src/math/AnimationCurveT.ts:19](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L19)

Attribute split into its component property names.

***

### preInfinity

> **preInfinity**: `number`

Defined in: [src/math/AnimationCurveT.ts:21](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L21)

Wrap mode applied for times before the first keyframe.

***

### postInfinity

> **postInfinity**: `number`

Defined in: [src/math/AnimationCurveT.ts:23](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L23)

Wrap mode applied for times after the last keyframe.

***

### rotationOrder

> **rotationOrder**: `number`

Defined in: [src/math/AnimationCurveT.ts:25](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L25)

Euler rotation order associated with this curve.

***

### m\_curves

> **m\_curves**: [`AnimationCurve`](AnimationCurve.md)[]

Defined in: [src/math/AnimationCurveT.ts:27](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L27)

Per-channel scalar animation curves.

## Accessors

### totalTime

#### Get Signature

> **get** **totalTime**(): `number`

Defined in: [src/math/AnimationCurveT.ts:64](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L64)

return this curve use total time

##### Returns

`number`

## Methods

### addKeyFrame()

> **addKeyFrame**(`keyFrame`): `void`

Defined in: [src/math/AnimationCurveT.ts:72](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L72)

add keyFrame to curve keyframe last and calcTotalTime

#### Parameters

##### keyFrame

[`KeyframeT`](KeyframeT.md)

[Keyframe](Keyframe.md)  sea: one key frame data

#### Returns

`void`

***

### removeKeyFrame()

> **removeKeyFrame**(`keyFrame`): `void`

Defined in: [src/math/AnimationCurveT.ts:82](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L82)

remove keyframe from this curve

#### Parameters

##### keyFrame

[`KeyframeT`](KeyframeT.md)

[Keyframe](Keyframe.md)

#### Returns

`void`

***

### getValue()

> **getValue**(`time`): [`CurveValueT`](../type-aliases/CurveValueT.md)

Defined in: [src/math/AnimationCurveT.ts:93](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L93)

get caculate frames value

#### Parameters

##### time

`number`

#### Returns

[`CurveValueT`](../type-aliases/CurveValueT.md)

***

### getKeyCount()

> **getKeyCount**(): `number`

Defined in: [src/math/AnimationCurveT.ts:176](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L176)

get has Keyframe list count

#### Returns

`number`

int

***

### getKey()

> **getKey**(`index`): [`Keyframe`](Keyframe.md)[]

Defined in: [src/math/AnimationCurveT.ts:185](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L185)

Get a Keyframe Data by Index

#### Parameters

##### index

`number`

must int

#### Returns

[`Keyframe`](Keyframe.md)[]

Keyframe [Keyframe](Keyframe.md)

***

### formBytes()

> **formBytes**(`bytes`): `void`

Defined in: [src/math/AnimationCurveT.ts:197](https://github.com/orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L197)

Read this multi-channel curve from a binary byte stream.

#### Parameters

##### bytes

`BytesArray`

source byte array

#### Returns

`void`
