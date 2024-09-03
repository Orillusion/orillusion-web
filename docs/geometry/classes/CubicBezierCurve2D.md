# Class: CubicBezierCurve2D

## Hierarchy

- [`Curve2D`](Curve2D.md)

  ↳ **`CubicBezierCurve2D`**

### Constructors

- [constructor](CubicBezierCurve2D.md#constructor)

### Properties

- [v0](CubicBezierCurve2D.md#v0)
- [v1](CubicBezierCurve2D.md#v1)
- [v2](CubicBezierCurve2D.md#v2)
- [v3](CubicBezierCurve2D.md#v3)
- [curveType](CubicBezierCurve2D.md#curvetype)

### Accessors

- [points](CubicBezierCurve2D.md#points)

### Methods

- [getPoint](CubicBezierCurve2D.md#getpoint)
- [copyFrom](CubicBezierCurve2D.md#copyfrom)
- [getPoints](CubicBezierCurve2D.md#getpoints)

## Constructors

### constructor

• **new CubicBezierCurve2D**(`v0`, `v1`, `v2`, `v3`): [`CubicBezierCurve2D`](CubicBezierCurve2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v0` | `Vector2` |
| `v1` | `Vector2` |
| `v2` | `Vector2` |
| `v3` | `Vector2` |

#### Returns

[`CubicBezierCurve2D`](CubicBezierCurve2D.md)

#### Overrides

[Curve2D](Curve2D.md).[constructor](Curve2D.md#constructor)

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/CubicBezierCurve2D.ts:10](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/CubicBezierCurve2D.ts#L10)

## Properties

### v0

• **v0**: `Vector2`

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/CubicBezierCurve2D.ts:5](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/CubicBezierCurve2D.ts#L5)

___

### v1

• **v1**: `Vector2`

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/CubicBezierCurve2D.ts:6](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/CubicBezierCurve2D.ts#L6)

___

### v2

• **v2**: `Vector2`

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/CubicBezierCurve2D.ts:7](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/CubicBezierCurve2D.ts#L7)

___

### v3

• **v3**: `Vector2`

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/CubicBezierCurve2D.ts:8](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/CubicBezierCurve2D.ts#L8)

___

### curveType

• **curveType**: [`CurveType`](../enums/CurveType.md)

#### Inherited from

[Curve2D](Curve2D.md).[curveType](Curve2D.md#curvetype)

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/Curve2D.ts:11](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/Curve2D.ts#L11)

## Accessors

### points

• `get` **points**(): `Vector2`[]

#### Returns

`Vector2`[]

#### Overrides

Curve2D.points

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/CubicBezierCurve2D.ts:18](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/CubicBezierCurve2D.ts#L18)

## Methods

### getPoint

▸ **getPoint**(`t`, `result?`): `Vector2`

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |
| `result` | `Vector2` |

#### Returns

`Vector2`

#### Overrides

[Curve2D](Curve2D.md).[getPoint](Curve2D.md#getpoint)

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/CubicBezierCurve2D.ts:22](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/CubicBezierCurve2D.ts#L22)

___

### copyFrom

▸ **copyFrom**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`CubicBezierCurve2D`](CubicBezierCurve2D.md) |

#### Returns

`void`

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/CubicBezierCurve2D.ts:30](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/CubicBezierCurve2D.ts#L30)

___

### getPoints

▸ **getPoints**(`divisions?`): `Vector2`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `divisions` | `number` | `5` |

#### Returns

`Vector2`[]

#### Inherited from

[Curve2D](Curve2D.md).[getPoints](Curve2D.md#getpoints)

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/Curve2D.ts:23](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/Curve2D.ts#L23)
