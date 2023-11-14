# Class: Navi3DRouter

### Constructors

- [constructor](Navi3DRouter.md#constructor)

### Properties

- [RAY\_1](Navi3DRouter.md#ray_1)
- [RAY\_2](Navi3DRouter.md#ray_2)
- [TEST\_RAY](Navi3DRouter.md#test_ray)
- [TEST\_RAY\_1](Navi3DRouter.md#test_ray_1)
- [TEST\_RAY\_2](Navi3DRouter.md#test_ray_2)
- [endPoint](Navi3DRouter.md#endpoint)
- [curPoint](Navi3DRouter.md#curpoint)
- [rayA](Navi3DRouter.md#raya)
- [rayB](Navi3DRouter.md#rayb)
- [rayAPoint](Navi3DRouter.md#rayapoint)
- [rayBPoint](Navi3DRouter.md#raybpoint)
- [cornerPoint](Navi3DRouter.md#cornerpoint)
- [cornerEdge](Navi3DRouter.md#corneredge)

### Methods

- [continuePass](Navi3DRouter.md#continuepass)
- [passEdge](Navi3DRouter.md#passedge)
- [calcCrossEdge](Navi3DRouter.md#calccrossedge)
- [calcCrossPoint](Navi3DRouter.md#calccrosspoint)
- [calcCrossPointOut](Navi3DRouter.md#calccrosspointout)
- [hasCrossPoint](Navi3DRouter.md#hascrosspoint)
- [resetData](Navi3DRouter.md#resetdata)

## Constructors

### constructor

• **new Navi3DRouter**()

## Properties

### RAY\_1

▪ `Static` **RAY\_1**: [`Vector3`](Vector3.md)

#### Defined in

[src/math/navigation/Navi3DRouter.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L19)

___

### RAY\_2

▪ `Static` **RAY\_2**: [`Vector3`](Vector3.md)

#### Defined in

[src/math/navigation/Navi3DRouter.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L21)

___

### TEST\_RAY

▪ `Static` **TEST\_RAY**: [`Vector3`](Vector3.md)

#### Defined in

[src/math/navigation/Navi3DRouter.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L23)

___

### TEST\_RAY\_1

▪ `Static` **TEST\_RAY\_1**: [`Vector3`](Vector3.md)

#### Defined in

[src/math/navigation/Navi3DRouter.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L25)

___

### TEST\_RAY\_2

▪ `Static` **TEST\_RAY\_2**: [`Vector3`](Vector3.md)

#### Defined in

[src/math/navigation/Navi3DRouter.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L27)

___

### endPoint

• **endPoint**: [`Vector3`](Vector3.md)

#### Defined in

[src/math/navigation/Navi3DRouter.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L7)

___

### curPoint

• **curPoint**: [`Vector3`](Vector3.md)

#### Defined in

[src/math/navigation/Navi3DRouter.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L9)

___

### rayA

• **rayA**: [`Vector3`](Vector3.md)

#### Defined in

[src/math/navigation/Navi3DRouter.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L11)

___

### rayB

• **rayB**: [`Vector3`](Vector3.md)

#### Defined in

[src/math/navigation/Navi3DRouter.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L13)

___

### rayAPoint

• **rayAPoint**: [`Navi3DPoint`](Navi3DPoint.md)

#### Defined in

[src/math/navigation/Navi3DRouter.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L15)

___

### rayBPoint

• **rayBPoint**: [`Navi3DPoint`](Navi3DPoint.md)

#### Defined in

[src/math/navigation/Navi3DRouter.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L17)

___

### cornerPoint

• **cornerPoint**: [`Navi3DPoint`](Navi3DPoint.md)

#### Defined in

[src/math/navigation/Navi3DRouter.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L33)

___

### cornerEdge

• **cornerEdge**: [`Navi3DEdge`](Navi3DEdge.md)

#### Defined in

[src/math/navigation/Navi3DRouter.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L35)

## Methods

### continuePass

▸ **continuePass**(`fromPt`, `endPt`, `fromEdge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromPt` | [`Vector3`](Vector3.md) |
| `endPt` | [`Vector3`](Vector3.md) |
| `fromEdge` | [`Navi3DEdge`](Navi3DEdge.md) |

#### Returns

`void`

#### Defined in

[src/math/navigation/Navi3DRouter.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L37)

___

### passEdge

▸ **passEdge**(`commonEdge`, `nextCommonEdge`, `targetPoint`, `lastEdge`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `commonEdge` | [`Navi3DEdge`](Navi3DEdge.md) |
| `nextCommonEdge` | [`Navi3DEdge`](Navi3DEdge.md) |
| `targetPoint` | [`Vector3`](Vector3.md) |
| `lastEdge` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/math/navigation/Navi3DRouter.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L44)

___

### calcCrossEdge

▸ **calcCrossEdge**(`_edge`, `linePoint`, `lineDirection`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_edge` | [`Navi3DEdge`](Navi3DEdge.md) |
| `linePoint` | [`Vector3`](Vector3.md) |
| `lineDirection` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/navigation/Navi3DRouter.ts:138](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L138)

___

### calcCrossPoint

▸ **calcCrossPoint**(`segmentPt1`, `segmentPt2`, `linePoint`, `lineDirection`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `segmentPt1` | [`Vector3`](Vector3.md) |
| `segmentPt2` | [`Vector3`](Vector3.md) |
| `linePoint` | [`Vector3`](Vector3.md) |
| `lineDirection` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/navigation/Navi3DRouter.ts:142](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L142)

___

### calcCrossPointOut

▸ **calcCrossPointOut**(`segmentPt1`, `segmentPt2`, `linePoint`, `lineDirection`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `segmentPt1` | [`Vector3`](Vector3.md) |
| `segmentPt2` | [`Vector3`](Vector3.md) |
| `linePoint` | [`Vector3`](Vector3.md) |
| `lineDirection` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/navigation/Navi3DRouter.ts:163](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L163)

___

### hasCrossPoint

▸ **hasCrossPoint**(`segmentPt1`, `segmentPt2`, `linePoint`, `lineDirection`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `segmentPt1` | [`Vector3`](Vector3.md) |
| `segmentPt2` | [`Vector3`](Vector3.md) |
| `linePoint` | [`Vector3`](Vector3.md) |
| `lineDirection` | [`Vector3`](Vector3.md) |

#### Returns

`boolean`

#### Defined in

[src/math/navigation/Navi3DRouter.ts:178](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L178)

___

### resetData

▸ **resetData**(): `void`

#### Returns

`void`

#### Defined in

[src/math/navigation/Navi3DRouter.ts:205](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L205)
