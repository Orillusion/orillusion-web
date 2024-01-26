# Class: Navi3DEdge

### Constructors

- [constructor](Navi3DEdge.md#constructor)

### Properties

- [crossPoint](Navi3DEdge.md#crosspoint)
- [fatPointA](Navi3DEdge.md#fatpointa)
- [fatPointB](Navi3DEdge.md#fatpointb)

### Accessors

- [size](Navi3DEdge.md#size)
- [triangleOwners](Navi3DEdge.md#triangleowners)
- [centerPoint](Navi3DEdge.md#centerpoint)
- [pointA](Navi3DEdge.md#pointa)
- [pointB](Navi3DEdge.md#pointb)
- [walkAble](Navi3DEdge.md#walkable)

### Methods

- [initFatPoints](Navi3DEdge.md#initfatpoints)
- [getFatPoint](Navi3DEdge.md#getfatpoint)
- [getAnotherFatPoint](Navi3DEdge.md#getanotherfatpoint)
- [getAnotherPoint](Navi3DEdge.md#getanotherpoint)
- [containsPoint](Navi3DEdge.md#containspoint)
- [addTriangleOwners](Navi3DEdge.md#addtriangleowners)
- [getPublicPoint](Navi3DEdge.md#getpublicpoint)
- [getEqualPoint](Navi3DEdge.md#getequalpoint)
- [testMask](Navi3DEdge.md#testmask)

## Constructors

### constructor

• **new Navi3DEdge**(`point0`, `point1`): [`Navi3DEdge`](Navi3DEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point0` | [`Navi3DPoint`](Navi3DPoint.md) |
| `point1` | [`Navi3DPoint`](Navi3DPoint.md) |

#### Returns

[`Navi3DEdge`](Navi3DEdge.md)

#### Defined in

[src/math/navigation/Navi3DEdge.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L26)

## Properties

### crossPoint

• **crossPoint**: [`Vector3`](Vector3.md)

#### Defined in

[src/math/navigation/Navi3DEdge.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L18)

___

### fatPointA

• **fatPointA**: [`Navi3DPointFat`](Navi3DPointFat.md)

#### Defined in

[src/math/navigation/Navi3DEdge.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L20)

___

### fatPointB

• **fatPointB**: [`Navi3DPointFat`](Navi3DPointFat.md)

#### Defined in

[src/math/navigation/Navi3DEdge.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L22)

## Accessors

### size

• `get` **size**(): `Number`

#### Returns

`Number`

#### Defined in

[src/math/navigation/Navi3DEdge.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L41)

___

### triangleOwners

• `get` **triangleOwners**(): [`Navi3DTriangle`](Navi3DTriangle.md)[]

#### Returns

[`Navi3DTriangle`](Navi3DTriangle.md)[]

#### Defined in

[src/math/navigation/Navi3DEdge.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L45)

___

### centerPoint

• `get` **centerPoint**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/navigation/Navi3DEdge.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L49)

___

### pointA

• `get` **pointA**(): [`Navi3DPoint`](Navi3DPoint.md)

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Defined in

[src/math/navigation/Navi3DEdge.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L131)

___

### pointB

• `get` **pointB**(): [`Navi3DPoint`](Navi3DPoint.md)

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Defined in

[src/math/navigation/Navi3DEdge.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L135)

___

### walkAble

• `get` **walkAble**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/math/navigation/Navi3DEdge.ts:139](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L139)

## Methods

### initFatPoints

▸ **initFatPoints**(`radius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |

#### Returns

`void`

#### Defined in

[src/math/navigation/Navi3DEdge.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L53)

___

### getFatPoint

▸ **getFatPoint**(`pt`): [`Navi3DPointFat`](Navi3DPointFat.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`Navi3DPoint`](Navi3DPoint.md) |

#### Returns

[`Navi3DPointFat`](Navi3DPointFat.md)

#### Defined in

[src/math/navigation/Navi3DEdge.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L78)

___

### getAnotherFatPoint

▸ **getAnotherFatPoint**(`pt`): [`Navi3DPointFat`](Navi3DPointFat.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`Navi3DPoint`](Navi3DPoint.md) |

#### Returns

[`Navi3DPointFat`](Navi3DPointFat.md)

#### Defined in

[src/math/navigation/Navi3DEdge.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L84)

___

### getAnotherPoint

▸ **getAnotherPoint**(`pt`): [`Navi3DPoint`](Navi3DPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`Navi3DPoint`](Navi3DPoint.md) |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Defined in

[src/math/navigation/Navi3DEdge.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L90)

___

### containsPoint

▸ **containsPoint**(`pt`): [`Navi3DPoint`](Navi3DPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`Vector3`](Vector3.md) |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Defined in

[src/math/navigation/Navi3DEdge.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L96)

___

### addTriangleOwners

▸ **addTriangleOwners**(`triangle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `triangle` | [`Navi3DTriangle`](Navi3DTriangle.md) |

#### Returns

`void`

#### Defined in

[src/math/navigation/Navi3DEdge.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L104)

___

### getPublicPoint

▸ **getPublicPoint**(`edge`): [`Navi3DPoint`](Navi3DPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | [`Navi3DEdge`](Navi3DEdge.md) |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Defined in

[src/math/navigation/Navi3DEdge.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L113)

___

### getEqualPoint

▸ **getEqualPoint**(`p`): [`Navi3DPoint`](Navi3DPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Vector3`](Vector3.md) |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Defined in

[src/math/navigation/Navi3DEdge.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L123)

___

### testMask

▸ **testMask**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`boolean`

#### Defined in

[src/math/navigation/Navi3DEdge.ts:143](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DEdge.ts#L143)
