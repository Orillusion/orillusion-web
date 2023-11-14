# Class: AnimationCurve

Animation Cureve 
has frame list data

### Constructors

- [constructor](AnimationCurve.md#constructor)

### Properties

- [curve](AnimationCurve.md#curve)
- [serializedVersion](AnimationCurve.md#serializedversion)
- [preWarpMode](AnimationCurve.md#prewarpmode)
- [postWarpMode](AnimationCurve.md#postwarpmode)
- [rotationOrder](AnimationCurve.md#rotationorder)

### Accessors

- [totalTime](AnimationCurve.md#totaltime)
- [first](AnimationCurve.md#first)
- [last](AnimationCurve.md#last)

### Methods

- [addKeyFrame](AnimationCurve.md#addkeyframe)
- [removeKeyFrame](AnimationCurve.md#removekeyframe)
- [calculateCacheData](AnimationCurve.md#calculatecachedata)
- [getValue](AnimationCurve.md#getvalue)
- [getKeyCount](AnimationCurve.md#getkeycount)
- [getKey](AnimationCurve.md#getkey)
- [unSerialized](AnimationCurve.md#unserialized)
- [unSerialized2](AnimationCurve.md#unserialized2)
- [scaleCurveValue](AnimationCurve.md#scalecurvevalue)

## Constructors

### constructor

• **new AnimationCurve**(`frames?`, `preWarpMode?`, `postWarpMode?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `frames?` | [`Keyframe`](Keyframe.md)[] | `undefined` |
| `preWarpMode` | [`WrapTimeMode`](../enums/WrapTimeMode.md) | `WrapTimeMode.Repeat` |
| `postWarpMode` | [`WrapTimeMode`](../enums/WrapTimeMode.md) | `WrapTimeMode.Repeat` |

#### Defined in

[src/math/AnimationCurve.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L33)

## Properties

### curve

• **curve**: [`Keyframe`](Keyframe.md)[] = `[]`

#### Defined in

[src/math/AnimationCurve.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L23)

___

### serializedVersion

• **serializedVersion**: `number`

#### Defined in

[src/math/AnimationCurve.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L25)

___

### preWarpMode

• **preWarpMode**: `number`

#### Defined in

[src/math/AnimationCurve.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L27)

___

### postWarpMode

• **postWarpMode**: `number`

#### Defined in

[src/math/AnimationCurve.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L29)

___

### rotationOrder

• **rotationOrder**: `number`

#### Defined in

[src/math/AnimationCurve.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L31)

## Accessors

### totalTime

• `get` **totalTime**(): `number`

return this curve use total time

#### Returns

`number`

#### Defined in

[src/math/AnimationCurve.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L45)

___

### first

• `get` **first**(): [`Keyframe`](Keyframe.md)

get curve first keframe time

#### Returns

[`Keyframe`](Keyframe.md)

#### Defined in

[src/math/AnimationCurve.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L52)

___

### last

• `get` **last**(): [`Keyframe`](Keyframe.md)

get curve last keyframe time

#### Returns

[`Keyframe`](Keyframe.md)

#### Defined in

[src/math/AnimationCurve.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L59)

## Methods

### addKeyFrame

▸ **addKeyFrame**(`keyFrame`): `void`

add keyFrame to curve keyframe last and calcTotalTime

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keyFrame` | [`Keyframe`](Keyframe.md) | [Keyframe](Keyframe.md) sea: one key frame data |

#### Returns

`void`

#### Defined in

[src/math/AnimationCurve.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L67)

___

### removeKeyFrame

▸ **removeKeyFrame**(`keyFrame`): `void`

remove keyframe from this curve

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keyFrame` | [`Keyframe`](Keyframe.md) | [Keyframe](Keyframe.md) |

#### Returns

`void`

#### Defined in

[src/math/AnimationCurve.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L78)

___

### calculateCacheData

▸ **calculateCacheData**(`cache`, `lhsIndex`, `rhsIndex`, `timeOffset?`): `void`

calculate keyframe list in to timeline

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `cache` | `FrameCache` | `undefined` | FrameCache |
| `lhsIndex` | `number` | `undefined` | left frame index |
| `rhsIndex` | `number` | `undefined` | right frame index |
| `timeOffset` | `number` | `0` | offset time default 0.0 |

#### Returns

`void`

#### Defined in

[src/math/AnimationCurve.ts:94](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L94)

___

### getValue

▸ **getValue**(`time`): `number`

get caculate frames value

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`number`

#### Defined in

[src/math/AnimationCurve.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L130)

___

### getKeyCount

▸ **getKeyCount**(): `number`

get has Keyframe list count

#### Returns

`number`

int

#### Defined in

[src/math/AnimationCurve.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L144)

___

### getKey

▸ **getKey**(`index`): [`Keyframe`](Keyframe.md)

Get a Keyframe Data by Index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | must int |

#### Returns

[`Keyframe`](Keyframe.md)

Keyframe [Keyframe](Keyframe.md)

#### Defined in

[src/math/AnimationCurve.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L153)

___

### unSerialized

▸ **unSerialized**(`data`): [`AnimationCurve`](AnimationCurve.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AnimationCurve`](AnimationCurve.md)

#### Defined in

[src/math/AnimationCurve.ts:157](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L157)

___

### unSerialized2

▸ **unSerialized2**(`data`): [`AnimationCurve`](AnimationCurve.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |

#### Returns

[`AnimationCurve`](AnimationCurve.md)

#### Defined in

[src/math/AnimationCurve.ts:171](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L171)

___

### scaleCurveValue

▸ `Static` **scaleCurveValue**(`curve`, `scale`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `curve` | [`AnimationCurve`](AnimationCurve.md) |
| `scale` | `number` |

#### Returns

`void`

#### Defined in

[src/math/AnimationCurve.ts:245](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L245)
