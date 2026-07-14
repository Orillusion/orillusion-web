[**@orillusion/core**](../README.md)

***

# Class: Navi3DRouter

Defined in: [src/math/navigation/Navi3DRouter.ts:5](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L5)

## Constructors

### Constructor

> **new Navi3DRouter**(): `Navi3DRouter`

#### Returns

`Navi3DRouter`

## Properties

### RAY\_1

> `static` **RAY\_1**: [`Vector3`](Vector3.md)

Defined in: [src/math/navigation/Navi3DRouter.ts:19](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L19)

***

### RAY\_2

> `static` **RAY\_2**: [`Vector3`](Vector3.md)

Defined in: [src/math/navigation/Navi3DRouter.ts:21](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L21)

***

### TEST\_RAY

> `static` **TEST\_RAY**: [`Vector3`](Vector3.md)

Defined in: [src/math/navigation/Navi3DRouter.ts:23](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L23)

***

### TEST\_RAY\_1

> `static` **TEST\_RAY\_1**: [`Vector3`](Vector3.md)

Defined in: [src/math/navigation/Navi3DRouter.ts:25](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L25)

***

### TEST\_RAY\_2

> `static` **TEST\_RAY\_2**: [`Vector3`](Vector3.md)

Defined in: [src/math/navigation/Navi3DRouter.ts:27](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L27)

***

### endPoint

> **endPoint**: [`Vector3`](Vector3.md)

Defined in: [src/math/navigation/Navi3DRouter.ts:7](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L7)

***

### curPoint

> **curPoint**: [`Vector3`](Vector3.md)

Defined in: [src/math/navigation/Navi3DRouter.ts:9](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L9)

***

### rayA

> **rayA**: [`Vector3`](Vector3.md)

Defined in: [src/math/navigation/Navi3DRouter.ts:11](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L11)

***

### rayB

> **rayB**: [`Vector3`](Vector3.md)

Defined in: [src/math/navigation/Navi3DRouter.ts:13](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L13)

***

### rayAPoint

> **rayAPoint**: [`Navi3DPoint`](Navi3DPoint.md)

Defined in: [src/math/navigation/Navi3DRouter.ts:15](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L15)

***

### rayBPoint

> **rayBPoint**: [`Navi3DPoint`](Navi3DPoint.md)

Defined in: [src/math/navigation/Navi3DRouter.ts:17](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L17)

***

### cornerPoint

> **cornerPoint**: [`Navi3DPoint`](Navi3DPoint.md)

Defined in: [src/math/navigation/Navi3DRouter.ts:33](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L33)

***

### cornerEdge

> **cornerEdge**: [`Navi3DEdge`](Navi3DEdge.md)

Defined in: [src/math/navigation/Navi3DRouter.ts:35](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L35)

## Methods

### continuePass()

> **continuePass**(`fromPt`, `endPt`, `fromEdge`): `void`

Defined in: [src/math/navigation/Navi3DRouter.ts:37](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L37)

#### Parameters

##### fromPt

[`Vector3`](Vector3.md)

##### endPt

[`Vector3`](Vector3.md)

##### fromEdge

[`Navi3DEdge`](Navi3DEdge.md)

#### Returns

`void`

***

### passEdge()

> **passEdge**(`commonEdge`, `nextCommonEdge`, `targetPoint`, `lastEdge`): `boolean`

Defined in: [src/math/navigation/Navi3DRouter.ts:44](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L44)

#### Parameters

##### commonEdge

[`Navi3DEdge`](Navi3DEdge.md)

##### nextCommonEdge

[`Navi3DEdge`](Navi3DEdge.md)

##### targetPoint

[`Vector3`](Vector3.md)

##### lastEdge

`boolean`

#### Returns

`boolean`

***

### calcCrossEdge()

> **calcCrossEdge**(`_edge`, `linePoint`, `lineDirection`): [`Vector3`](Vector3.md)

Defined in: [src/math/navigation/Navi3DRouter.ts:138](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L138)

#### Parameters

##### \_edge

[`Navi3DEdge`](Navi3DEdge.md)

##### linePoint

[`Vector3`](Vector3.md)

##### lineDirection

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

***

### calcCrossPoint()

> **calcCrossPoint**(`segmentPt1`, `segmentPt2`, `linePoint`, `lineDirection`): [`Vector3`](Vector3.md)

Defined in: [src/math/navigation/Navi3DRouter.ts:142](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L142)

#### Parameters

##### segmentPt1

[`Vector3`](Vector3.md)

##### segmentPt2

[`Vector3`](Vector3.md)

##### linePoint

[`Vector3`](Vector3.md)

##### lineDirection

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

***

### calcCrossPointOut()

> **calcCrossPointOut**(`segmentPt1`, `segmentPt2`, `linePoint`, `lineDirection`): [`Vector3`](Vector3.md)

Defined in: [src/math/navigation/Navi3DRouter.ts:163](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L163)

#### Parameters

##### segmentPt1

[`Vector3`](Vector3.md)

##### segmentPt2

[`Vector3`](Vector3.md)

##### linePoint

[`Vector3`](Vector3.md)

##### lineDirection

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

***

### hasCrossPoint()

> **hasCrossPoint**(`segmentPt1`, `segmentPt2`, `linePoint`, `lineDirection`): `boolean`

Defined in: [src/math/navigation/Navi3DRouter.ts:178](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L178)

#### Parameters

##### segmentPt1

[`Vector3`](Vector3.md)

##### segmentPt2

[`Vector3`](Vector3.md)

##### linePoint

[`Vector3`](Vector3.md)

##### lineDirection

[`Vector3`](Vector3.md)

#### Returns

`boolean`

***

### resetData()

> **resetData**(): `void`

Defined in: [src/math/navigation/Navi3DRouter.ts:205](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DRouter.ts#L205)

#### Returns

`void`
