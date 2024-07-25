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

- [cacheOut](AnimationCurve.md#cacheout)
- [totalTime](AnimationCurve.md#totaltime)
- [first](AnimationCurve.md#first)
- [last](AnimationCurve.md#last)

### Methods

- [addKeyFrame](AnimationCurve.md#addkeyframe)
- [removeKeyFrame](AnimationCurve.md#removekeyframe)
- [calculateCacheData](AnimationCurve.md#calculatecachedata)
- [getValue](AnimationCurve.md#getvalue)
- [getCurveFramesExtent](AnimationCurve.md#getcurveframesextent)
- [getKeyCount](AnimationCurve.md#getkeycount)
- [getKey](AnimationCurve.md#getkey)
- [unSerialized](AnimationCurve.md#unserialized)
- [unSerialized2](AnimationCurve.md#unserialized2)
- [wrapTime](AnimationCurve.md#wraptime)
- [scaleCurveValue](AnimationCurve.md#scalecurvevalue)

## Constructors

### constructor

• **new AnimationCurve**(`frames?`, `preWarpMode?`, `postWarpMode?`): [`AnimationCurve`](AnimationCurve.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `frames?` | [`Keyframe`](Keyframe.md)[] | `undefined` |
| `preWarpMode` | [`WrapTimeMode`](../enums/WrapTimeMode.md) | `WrapTimeMode.Repeat` |
| `postWarpMode` | [`WrapTimeMode`](../enums/WrapTimeMode.md) | `WrapTimeMode.Repeat` |

#### Returns

[`AnimationCurve`](AnimationCurve.md)

#### Defined in

[src/math/AnimationCurve.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L37)

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

### cacheOut

• `get` **cacheOut**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `lhsIndex` | `number` |
| `rhsIndex` | `number` |

#### Defined in

[src/math/AnimationCurve.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L33)

___

### totalTime

• `get` **totalTime**(): `number`

return this curve use total time

#### Returns

`number`

#### Defined in

[src/math/AnimationCurve.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L49)

___

### first

• `get` **first**(): [`Keyframe`](Keyframe.md)

get curve first keframe time

#### Returns

[`Keyframe`](Keyframe.md)

#### Defined in

[src/math/AnimationCurve.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L56)

___

### last

• `get` **last**(): [`Keyframe`](Keyframe.md)

get curve last keyframe time

#### Returns

[`Keyframe`](Keyframe.md)

#### Defined in

[src/math/AnimationCurve.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L63)

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

[src/math/AnimationCurve.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L71)

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

[src/math/AnimationCurve.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L82)

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

[src/math/AnimationCurve.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L98)

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

[src/math/AnimationCurve.ts:134](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L134)

___

### getCurveFramesExtent

▸ **getCurveFramesExtent**(`time`): `Object`

get caculate frames extent

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `lhsIndex` | `number` |
| `rhsIndex` | `number` |
| `time` | `number` |

#### Defined in

[src/math/AnimationCurve.ts:149](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L149)

___

### getKeyCount

▸ **getKeyCount**(): `number`

get has Keyframe list count

#### Returns

`number`

int

#### Defined in

[src/math/AnimationCurve.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L161)

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

[src/math/AnimationCurve.ts:170](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L170)

___

### unSerialized

▸ **unSerialized**(`data`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`this`

#### Defined in

[src/math/AnimationCurve.ts:174](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L174)

___

### unSerialized2

▸ **unSerialized2**(`data`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |

#### Returns

`this`

#### Defined in

[src/math/AnimationCurve.ts:188](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L188)

___

### wrapTime

▸ **wrapTime**(`curveT`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `curveT` | `number` |

#### Returns

`number`

#### Defined in

[src/math/AnimationCurve.ts:202](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L202)

___

### scaleCurveValue

▸ **scaleCurveValue**(`curve`, `scale`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `curve` | [`AnimationCurve`](AnimationCurve.md) |
| `scale` | `number` |

#### Returns

`void`

#### Defined in

[src/math/AnimationCurve.ts:262](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurve.ts#L262)
