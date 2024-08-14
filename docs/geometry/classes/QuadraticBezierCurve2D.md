# Class: QuadraticBezierCurve2D

## Hierarchy

- [`Curve2D`](Curve2D.md)

  ↳ **`QuadraticBezierCurve2D`**

### Constructors

- [constructor](QuadraticBezierCurve2D.md#constructor)

### Properties

- [curveType](QuadraticBezierCurve2D.md#curvetype)
- [v0](QuadraticBezierCurve2D.md#v0)
- [v1](QuadraticBezierCurve2D.md#v1)
- [v2](QuadraticBezierCurve2D.md#v2)

### Accessors

- [points](QuadraticBezierCurve2D.md#points)

### Methods

- [getPoints](QuadraticBezierCurve2D.md#getpoints)
- [getPoint](QuadraticBezierCurve2D.md#getpoint)
- [copyFrom](QuadraticBezierCurve2D.md#copyfrom)

## Constructors

### constructor

• **new QuadraticBezierCurve2D**(`v0`, `v1`, `v2`): [`QuadraticBezierCurve2D`](QuadraticBezierCurve2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v0` | `Vector2` |
| `v1` | `Vector2` |
| `v2` | `Vector2` |

#### Returns

[`QuadraticBezierCurve2D`](QuadraticBezierCurve2D.md)

#### Overrides

[Curve2D](Curve2D.md).[constructor](Curve2D.md#constructor)

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/QuadraticBezierCurve2D.ts:9](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/QuadraticBezierCurve2D.ts#L9)

## Properties

### curveType

• **curveType**: [`CurveType`](../enums/CurveType.md)

#### Inherited from

[Curve2D](Curve2D.md).[curveType](Curve2D.md#curvetype)

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/Curve2D.ts:11](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/Curve2D.ts#L11)

___

### v0

• **v0**: `Vector2`

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/QuadraticBezierCurve2D.ts:5](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/QuadraticBezierCurve2D.ts#L5)

___

### v1

• **v1**: `Vector2`

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/QuadraticBezierCurve2D.ts:6](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/QuadraticBezierCurve2D.ts#L6)

___

### v2

• **v2**: `Vector2`

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/QuadraticBezierCurve2D.ts:7](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/QuadraticBezierCurve2D.ts#L7)

## Accessors

### points

• `get` **points**(): `Vector2`[]

#### Returns

`Vector2`[]

#### Overrides

Curve2D.points

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/QuadraticBezierCurve2D.ts:17](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/QuadraticBezierCurve2D.ts#L17)

## Methods

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

___

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

[packages/geometry/ExtrudeGeometry/Curve/QuadraticBezierCurve2D.ts:21](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/QuadraticBezierCurve2D.ts#L21)

___

### copyFrom

▸ **copyFrom**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`QuadraticBezierCurve2D`](QuadraticBezierCurve2D.md) |

#### Returns

`void`

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/QuadraticBezierCurve2D.ts:29](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/QuadraticBezierCurve2D.ts#L29)
