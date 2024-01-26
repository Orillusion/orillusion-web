# Class: KeyframeT

### Constructors

- [constructor](KeyframeT.md#constructor)

### Properties

- [serializedVersion](KeyframeT.md#serializedversion)
- [time](KeyframeT.md#time)
- [tangentMode](KeyframeT.md#tangentmode)
- [weightedMode](KeyframeT.md#weightedmode)
- [propertyKeyFrame](KeyframeT.md#propertykeyframe)

### Methods

- [getK](KeyframeT.md#getk)
- [formBytes](KeyframeT.md#formbytes)

## Constructors

### constructor

• **new KeyframeT**(`time?`): [`KeyframeT`](KeyframeT.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `time` | `number` | `0` |

#### Returns

[`KeyframeT`](KeyframeT.md)

#### Defined in

[src/math/enum/T/KeyframeT.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/math/enum/T/KeyframeT.ts#L26)

## Properties

### serializedVersion

• **serializedVersion**: `string` = `'2'`

#### Defined in

[src/math/enum/T/KeyframeT.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/math/enum/T/KeyframeT.ts#L14)

___

### time

• **time**: `number`

#### Defined in

[src/math/enum/T/KeyframeT.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/math/enum/T/KeyframeT.ts#L15)

___

### tangentMode

• **tangentMode**: `number` = `0`

#### Defined in

[src/math/enum/T/KeyframeT.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/math/enum/T/KeyframeT.ts#L16)

___

### weightedMode

• **weightedMode**: `number` = `0`

#### Defined in

[src/math/enum/T/KeyframeT.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/math/enum/T/KeyframeT.ts#L17)

___

### propertyKeyFrame

• **propertyKeyFrame**: `Object`

#### Index signature

▪ [k: `number`]: [`Keyframe`](Keyframe.md)

#### Defined in

[src/math/enum/T/KeyframeT.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/math/enum/T/KeyframeT.ts#L24)

## Methods

### getK

▸ **getK**(`k`): [`Keyframe`](Keyframe.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `number` |

#### Returns

[`Keyframe`](Keyframe.md)

#### Defined in

[src/math/enum/T/KeyframeT.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/math/enum/T/KeyframeT.ts#L31)

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

[src/math/enum/T/KeyframeT.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/math/enum/T/KeyframeT.ts#L111)
