# Class: AnimationCurveT

Animation Cureve 
has frame list data

### Constructors

- [constructor](AnimationCurveT.md#constructor)

### Properties

- [path](AnimationCurveT.md#path)
- [attribute](AnimationCurveT.md#attribute)
- [propertys](AnimationCurveT.md#propertys)
- [preInfinity](AnimationCurveT.md#preinfinity)
- [postInfinity](AnimationCurveT.md#postinfinity)
- [rotationOrder](AnimationCurveT.md#rotationorder)
- [m\_curves](AnimationCurveT.md#m_curves)

### Accessors

- [totalTime](AnimationCurveT.md#totaltime)

### Methods

- [addKeyFrame](AnimationCurveT.md#addkeyframe)
- [removeKeyFrame](AnimationCurveT.md#removekeyframe)
- [getValue](AnimationCurveT.md#getvalue)
- [getKeyCount](AnimationCurveT.md#getkeycount)
- [getKey](AnimationCurveT.md#getkey)
- [formBytes](AnimationCurveT.md#formbytes)

## Constructors

### constructor

• **new AnimationCurveT**(`k?`): [`AnimationCurveT`](AnimationCurveT.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `k` | `number` | `1` |

#### Returns

[`AnimationCurveT`](AnimationCurveT.md)

#### Defined in

[src/math/AnimationCurveT.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L26)

## Properties

### path

• **path**: `string`

#### Defined in

[src/math/AnimationCurveT.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L14)

___

### attribute

• **attribute**: `string`

#### Defined in

[src/math/AnimationCurveT.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L15)

___

### propertys

• **propertys**: `string`[]

#### Defined in

[src/math/AnimationCurveT.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L16)

___

### preInfinity

• **preInfinity**: `number`

#### Defined in

[src/math/AnimationCurveT.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L17)

___

### postInfinity

• **postInfinity**: `number`

#### Defined in

[src/math/AnimationCurveT.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L18)

___

### rotationOrder

• **rotationOrder**: `number`

#### Defined in

[src/math/AnimationCurveT.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L19)

___

### m\_curves

• **m\_curves**: [`AnimationCurve`](AnimationCurve.md)[]

#### Defined in

[src/math/AnimationCurveT.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L20)

## Accessors

### totalTime

• `get` **totalTime**(): `number`

return this curve use total time

#### Returns

`number`

#### Defined in

[src/math/AnimationCurveT.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L57)

## Methods

### addKeyFrame

▸ **addKeyFrame**(`keyFrame`): `void`

add keyFrame to curve keyframe last and calcTotalTime

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keyFrame` | [`KeyframeT`](KeyframeT.md) | [Keyframe](Keyframe.md) sea: one key frame data |

#### Returns

`void`

#### Defined in

[src/math/AnimationCurveT.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L65)

___

### removeKeyFrame

▸ **removeKeyFrame**(`keyFrame`): `void`

remove keyframe from this curve

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keyFrame` | [`KeyframeT`](KeyframeT.md) | [Keyframe](Keyframe.md) |

#### Returns

`void`

#### Defined in

[src/math/AnimationCurveT.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L75)

___

### getValue

▸ **getValue**(`time`): [`CurveValueT`](../types/CurveValueT.md)

get caculate frames value

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

[`CurveValueT`](../types/CurveValueT.md)

#### Defined in

[src/math/AnimationCurveT.ts:86](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L86)

___

### getKeyCount

▸ **getKeyCount**(): `number`

get has Keyframe list count

#### Returns

`number`

int

#### Defined in

[src/math/AnimationCurveT.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L116)

___

### getKey

▸ **getKey**(`index`): [`Keyframe`](Keyframe.md)[]

Get a Keyframe Data by Index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | must int |

#### Returns

[`Keyframe`](Keyframe.md)[]

Keyframe [Keyframe](Keyframe.md)

#### Defined in

[src/math/AnimationCurveT.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L125)

___

### formBytes

▸ **formBytes**(`bytes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `BytesArray` |

#### Returns

`void`

#### Defined in

[src/math/AnimationCurveT.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/math/AnimationCurveT.ts#L133)
