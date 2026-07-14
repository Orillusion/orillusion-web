[**@orillusion/core**](../README.md)

***

# Class: KeyframeT

Defined in: [src/math/enum/T/KeyframeT.ts:13](https://github.com/orillusion/orillusion/blob/main/src/math/enum/T/KeyframeT.ts#L13)

## Constructors

### Constructor

> **new KeyframeT**(`time?`): `KeyframeT`

Defined in: [src/math/enum/T/KeyframeT.ts:31](https://github.com/orillusion/orillusion/blob/main/src/math/enum/T/KeyframeT.ts#L31)

#### Parameters

##### time?

`number` = `0`

#### Returns

`KeyframeT`

## Properties

### serializedVersion

> **serializedVersion**: `string` = `'2'`

Defined in: [src/math/enum/T/KeyframeT.ts:15](https://github.com/orillusion/orillusion/blob/main/src/math/enum/T/KeyframeT.ts#L15)

Serialized format version of this keyframe.

***

### time

> **time**: `number`

Defined in: [src/math/enum/T/KeyframeT.ts:17](https://github.com/orillusion/orillusion/blob/main/src/math/enum/T/KeyframeT.ts#L17)

Time of this keyframe.

***

### tangentMode

> **tangentMode**: `number` = `0`

Defined in: [src/math/enum/T/KeyframeT.ts:19](https://github.com/orillusion/orillusion/blob/main/src/math/enum/T/KeyframeT.ts#L19)

Tangent mode flags for this keyframe.

***

### weightedMode

> **weightedMode**: `number` = `0`

Defined in: [src/math/enum/T/KeyframeT.ts:21](https://github.com/orillusion/orillusion/blob/main/src/math/enum/T/KeyframeT.ts#L21)

Weighted mode flags for this keyframe.

***

### propertyKeyFrame

> **propertyKeyFrame**: `object`

Defined in: [src/math/enum/T/KeyframeT.ts:29](https://github.com/orillusion/orillusion/blob/main/src/math/enum/T/KeyframeT.ts#L29)

Map of channel index to its per-channel keyframe.

#### Index Signature

\[`k`: `number`\]: [`Keyframe`](Keyframe.md)

## Methods

### getK()

> **getK**(`k`): [`Keyframe`](Keyframe.md)

Defined in: [src/math/enum/T/KeyframeT.ts:41](https://github.com/orillusion/orillusion/blob/main/src/math/enum/T/KeyframeT.ts#L41)

Get the per-channel keyframe stored at the given channel index.

#### Parameters

##### k

`number`

channel index

#### Returns

[`Keyframe`](Keyframe.md)

the keyframe for that channel

***

### split()

> **split**(`type`, `value`, `property`): `void`

Defined in: [src/math/enum/T/KeyframeT.ts:51](https://github.com/orillusion/orillusion/blob/main/src/math/enum/T/KeyframeT.ts#L51)

Split a multi-component value into per-channel keyframes, writing it to the given property.

#### Parameters

##### type

[`ValueEnumType`](../enumerations/ValueEnumType.md)

value type describing the component layout

##### value

[`CurveValueType`](../type-aliases/CurveValueType.md)

the value to distribute across channels

##### property

`string`

the keyframe property name to assign (e.g. value, inSlope, outSlope)

#### Returns

`void`

***

### formBytes()

> **formBytes**(`bytes`): `void`

Defined in: [src/math/enum/T/KeyframeT.ts:131](https://github.com/orillusion/orillusion/blob/main/src/math/enum/T/KeyframeT.ts#L131)

Read this keyframe and its per-channel data from a binary byte stream.

#### Parameters

##### bytes

`BytesArray`

source byte array

#### Returns

`void`
