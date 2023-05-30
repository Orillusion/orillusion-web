# Class: CubicBezierCurve

Cubic Bezier Curve

### Constructors

- [constructor](CubicBezierCurve.md#constructor)

### Methods

- [setControlVertices](CubicBezierCurve.md#setcontrolvertices)
- [getPoint](CubicBezierCurve.md#getpoint)
- [getTangent](CubicBezierCurve.md#gettangent)
- [getClosestParam](CubicBezierCurve.md#getclosestparam)
- [getClosestParamRec](CubicBezierCurve.md#getclosestparamrec)

## Constructors

### constructor

• **new CubicBezierCurve**(`cvs`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cvs` | [`Vector3`](Vector3.md)[] | controller points |

#### Defined in

[src/math/CubicBezierCurve.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/math/CubicBezierCurve.ts#L14)

## Methods

### setControlVertices

▸ **setControlVertices**(`cvs`): `void`

update controller points

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cvs` | [`Vector3`](Vector3.md)[] | controller points |

#### Returns

`void`

#### Defined in

[src/math/CubicBezierCurve.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/math/CubicBezierCurve.ts#L22)

___

### getPoint

▸ **getPoint**(`t`): [`Vector3`](Vector3.md)

get position by calc from curve

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `number` | a position in range [0-1] |

#### Returns

[`Vector3`](Vector3.md)

Vector3

#### Defined in

[src/math/CubicBezierCurve.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/math/CubicBezierCurve.ts#L34)

___

### getTangent

▸ **getTangent**(`t`): [`Vector3`](Vector3.md)

get tagent by calc from curve

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `number` | a position in range [0-1] |

#### Returns

[`Vector3`](Vector3.md)

tagent direction
See: http://bimixual.org/AnimationLibrary/beziertangents.html

#### Defined in

[src/math/CubicBezierCurve.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/math/CubicBezierCurve.ts#L56)

___

### getClosestParam

▸ **getClosestParam**(`pos`, `paramThreshold?`): `number`

get adjacent coordinates

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) | `undefined` | position |
| `paramThreshold` | `number` | `0.000001` | threshold value |

#### Returns

`number`

a position in range [0-1]

#### Defined in

[src/math/CubicBezierCurve.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/math/CubicBezierCurve.ts#L77)

___

### getClosestParamRec

▸ **getClosestParamRec**(`pos`, `beginT`, `endT`, `thresholdT`): `number`

get adjacent coordinates by given range

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) | position |
| `beginT` | `number` | range from |
| `endT` | `number` | range end |
| `thresholdT` | `number` | threshold value |

#### Returns

`number`

#### Defined in

[src/math/CubicBezierCurve.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/math/CubicBezierCurve.ts#L89)
