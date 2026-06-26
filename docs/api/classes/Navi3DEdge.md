[**@orillusion/core**](../README.md)

***

# Class: Navi3DEdge

Defined in: [src/math/navigation/Navi3DEdge.ts:7](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L7)

## Constructors

### Constructor

> **new Navi3DEdge**(`point0`, `point1`): `Navi3DEdge`

Defined in: [src/math/navigation/Navi3DEdge.ts:26](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L26)

#### Parameters

##### point0

[`Navi3DPoint`](Navi3DPoint.md)

##### point1

[`Navi3DPoint`](Navi3DPoint.md)

#### Returns

`Navi3DEdge`

## Properties

### crossPoint

> **crossPoint**: [`Vector3`](Vector3.md)

Defined in: [src/math/navigation/Navi3DEdge.ts:18](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L18)

***

### fatPointA

> **fatPointA**: [`Navi3DPointFat`](Navi3DPointFat.md)

Defined in: [src/math/navigation/Navi3DEdge.ts:20](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L20)

***

### fatPointB

> **fatPointB**: [`Navi3DPointFat`](Navi3DPointFat.md)

Defined in: [src/math/navigation/Navi3DEdge.ts:22](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L22)

## Accessors

### size

#### Get Signature

> **get** **size**(): `Number`

Defined in: [src/math/navigation/Navi3DEdge.ts:41](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L41)

##### Returns

`Number`

***

### triangleOwners

#### Get Signature

> **get** **triangleOwners**(): [`Navi3DTriangle`](Navi3DTriangle.md)[]

Defined in: [src/math/navigation/Navi3DEdge.ts:45](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L45)

##### Returns

[`Navi3DTriangle`](Navi3DTriangle.md)[]

***

### centerPoint

#### Get Signature

> **get** **centerPoint**(): [`Vector3`](Vector3.md)

Defined in: [src/math/navigation/Navi3DEdge.ts:49](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L49)

##### Returns

[`Vector3`](Vector3.md)

***

### pointA

#### Get Signature

> **get** **pointA**(): [`Navi3DPoint`](Navi3DPoint.md)

Defined in: [src/math/navigation/Navi3DEdge.ts:131](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L131)

##### Returns

[`Navi3DPoint`](Navi3DPoint.md)

***

### pointB

#### Get Signature

> **get** **pointB**(): [`Navi3DPoint`](Navi3DPoint.md)

Defined in: [src/math/navigation/Navi3DEdge.ts:135](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L135)

##### Returns

[`Navi3DPoint`](Navi3DPoint.md)

***

### walkAble

#### Get Signature

> **get** **walkAble**(): `boolean`

Defined in: [src/math/navigation/Navi3DEdge.ts:139](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L139)

##### Returns

`boolean`

## Methods

### initFatPoints()

> **initFatPoints**(`radius`): `void`

Defined in: [src/math/navigation/Navi3DEdge.ts:53](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L53)

#### Parameters

##### radius

`number`

#### Returns

`void`

***

### getFatPoint()

> **getFatPoint**(`pt`): [`Navi3DPointFat`](Navi3DPointFat.md)

Defined in: [src/math/navigation/Navi3DEdge.ts:78](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L78)

#### Parameters

##### pt

[`Navi3DPoint`](Navi3DPoint.md)

#### Returns

[`Navi3DPointFat`](Navi3DPointFat.md)

***

### getAnotherFatPoint()

> **getAnotherFatPoint**(`pt`): [`Navi3DPointFat`](Navi3DPointFat.md)

Defined in: [src/math/navigation/Navi3DEdge.ts:84](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L84)

#### Parameters

##### pt

[`Navi3DPoint`](Navi3DPoint.md)

#### Returns

[`Navi3DPointFat`](Navi3DPointFat.md)

***

### getAnotherPoint()

> **getAnotherPoint**(`pt`): [`Navi3DPoint`](Navi3DPoint.md)

Defined in: [src/math/navigation/Navi3DEdge.ts:90](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L90)

#### Parameters

##### pt

[`Navi3DPoint`](Navi3DPoint.md)

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

***

### containsPoint()

> **containsPoint**(`pt`): [`Navi3DPoint`](Navi3DPoint.md)

Defined in: [src/math/navigation/Navi3DEdge.ts:96](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L96)

#### Parameters

##### pt

[`Vector3`](Vector3.md)

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

***

### addTriangleOwners()

> **addTriangleOwners**(`triangle`): `void`

Defined in: [src/math/navigation/Navi3DEdge.ts:104](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L104)

#### Parameters

##### triangle

[`Navi3DTriangle`](Navi3DTriangle.md)

#### Returns

`void`

***

### getPublicPoint()

> **getPublicPoint**(`edge`): [`Navi3DPoint`](Navi3DPoint.md)

Defined in: [src/math/navigation/Navi3DEdge.ts:113](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L113)

#### Parameters

##### edge

`Navi3DEdge`

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

***

### getEqualPoint()

> **getEqualPoint**(`p`): [`Navi3DPoint`](Navi3DPoint.md)

Defined in: [src/math/navigation/Navi3DEdge.ts:123](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L123)

#### Parameters

##### p

[`Vector3`](Vector3.md)

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

***

### testMask()

> **testMask**(`value`): `boolean`

Defined in: [src/math/navigation/Navi3DEdge.ts:143](https://github.com/orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L143)

#### Parameters

##### value

`number`

#### Returns

`boolean`
