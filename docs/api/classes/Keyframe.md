[**@orillusion/core**](../README.md)

***

# Class: Keyframe

Defined in: [src/math/enum/Keyframe.ts:6](https://github.com/orillusion/orillusion/blob/main/src/math/enum/Keyframe.ts#L6)

## Constructors

### Constructor

> **new Keyframe**(`time?`, `value?`): `Keyframe`

Defined in: [src/math/enum/Keyframe.ts:27](https://github.com/orillusion/orillusion/blob/main/src/math/enum/Keyframe.ts#L27)

#### Parameters

##### time?

`number` = `0`

##### value?

`number` = `0`

#### Returns

`Keyframe`

## Properties

### serializedVersion

> **serializedVersion**: `string` = `'2'`

Defined in: [src/math/enum/Keyframe.ts:8](https://github.com/orillusion/orillusion/blob/main/src/math/enum/Keyframe.ts#L8)

Serialization format version of this keyframe.

***

### time

> **time**: `number`

Defined in: [src/math/enum/Keyframe.ts:10](https://github.com/orillusion/orillusion/blob/main/src/math/enum/Keyframe.ts#L10)

Time of the keyframe in seconds.

***

### value

> **value**: `number`

Defined in: [src/math/enum/Keyframe.ts:12](https://github.com/orillusion/orillusion/blob/main/src/math/enum/Keyframe.ts#L12)

Value of the keyframe at its time.

***

### inSlope

> **inSlope**: `number` = `0`

Defined in: [src/math/enum/Keyframe.ts:14](https://github.com/orillusion/orillusion/blob/main/src/math/enum/Keyframe.ts#L14)

Incoming tangent slope.

***

### outSlope

> **outSlope**: `number` = `0`

Defined in: [src/math/enum/Keyframe.ts:16](https://github.com/orillusion/orillusion/blob/main/src/math/enum/Keyframe.ts#L16)

Outgoing tangent slope.

***

### tangentMode

> **tangentMode**: `number` = `0`

Defined in: [src/math/enum/Keyframe.ts:18](https://github.com/orillusion/orillusion/blob/main/src/math/enum/Keyframe.ts#L18)

Tangent mode flags controlling how slopes are computed.

***

### weightedMode

> **weightedMode**: `number` = `0`

Defined in: [src/math/enum/Keyframe.ts:21](https://github.com/orillusion/orillusion/blob/main/src/math/enum/Keyframe.ts#L21)

Weighted mode flags controlling whether in/out weights are used.

***

### inWeight

> **inWeight**: `number`

Defined in: [src/math/enum/Keyframe.ts:23](https://github.com/orillusion/orillusion/blob/main/src/math/enum/Keyframe.ts#L23)

Incoming tangent weight.

***

### outWeight

> **outWeight**: `number`

Defined in: [src/math/enum/Keyframe.ts:25](https://github.com/orillusion/orillusion/blob/main/src/math/enum/Keyframe.ts#L25)

Outgoing tangent weight.

## Methods

### unSerialized()

> **unSerialized**(`data`): `void`

Defined in: [src/math/enum/Keyframe.ts:33](https://github.com/orillusion/orillusion/blob/main/src/math/enum/Keyframe.ts#L33)

Populate this keyframe from a serialized object using inSlope/outSlope fields.

#### Parameters

##### data

`any`

#### Returns

`void`

***

### unSerialized2()

> **unSerialized2**(`data`): `void`

Defined in: [src/math/enum/Keyframe.ts:43](https://github.com/orillusion/orillusion/blob/main/src/math/enum/Keyframe.ts#L43)

Populate this keyframe from a serialized object using inTangent/outTangent fields.

#### Parameters

##### data

`any`

#### Returns

`void`
