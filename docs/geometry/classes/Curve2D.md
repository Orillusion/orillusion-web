# Class: Curve2D

## Hierarchy

- **`Curve2D`**

  ↳ [`LineCurve2D`](LineCurve2D.md)

  ↳ [`CubicBezierCurve2D`](CubicBezierCurve2D.md)

  ↳ [`QuadraticBezierCurve2D`](QuadraticBezierCurve2D.md)

### Constructors

- [constructor](Curve2D.md#constructor)

### Properties

- [curveType](Curve2D.md#curvetype)

### Accessors

- [points](Curve2D.md#points)

### Methods

- [getPoint](Curve2D.md#getpoint)
- [getPoints](Curve2D.md#getpoints)

## Constructors

### constructor

• **new Curve2D**(): [`Curve2D`](Curve2D.md)

#### Returns

[`Curve2D`](Curve2D.md)

## Properties

### curveType

• **curveType**: [`CurveType`](../enums/CurveType.md)

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/Curve2D.ts:11](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/Curve2D.ts#L11)

## Accessors

### points

• `get` **points**(): `Vector2`[]

#### Returns

`Vector2`[]

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/Curve2D.ts:13](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/Curve2D.ts#L13)

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

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/Curve2D.ts:18](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/Curve2D.ts#L18)

___

### getPoints

▸ **getPoints**(`divisions?`): `Vector2`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `divisions` | `number` | `5` |

#### Returns

`Vector2`[]

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/Curve2D.ts:23](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/Curve2D.ts#L23)
