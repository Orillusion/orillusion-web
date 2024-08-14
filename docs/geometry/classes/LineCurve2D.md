# Class: LineCurve2D

## Hierarchy

- [`Curve2D`](Curve2D.md)

  ↳ **`LineCurve2D`**

### Constructors

- [constructor](LineCurve2D.md#constructor)

### Properties

- [curveType](LineCurve2D.md#curvetype)
- [v0](LineCurve2D.md#v0)
- [v1](LineCurve2D.md#v1)

### Accessors

- [points](LineCurve2D.md#points)

### Methods

- [getPoints](LineCurve2D.md#getpoints)
- [getPoint](LineCurve2D.md#getpoint)
- [getPointAt](LineCurve2D.md#getpointat)
- [getTangent](LineCurve2D.md#gettangent)
- [getTangentAt](LineCurve2D.md#gettangentat)
- [copyFrom](LineCurve2D.md#copyfrom)

## Constructors

### constructor

• **new LineCurve2D**(`v0`, `v1`): [`LineCurve2D`](LineCurve2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v0` | `Vector2` |
| `v1` | `Vector2` |

#### Returns

[`LineCurve2D`](LineCurve2D.md)

#### Overrides

[Curve2D](Curve2D.md).[constructor](Curve2D.md#constructor)

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/LineCurve2D.ts:8](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/LineCurve2D.ts#L8)

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

[packages/geometry/ExtrudeGeometry/Curve/LineCurve2D.ts:5](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/LineCurve2D.ts#L5)

___

### v1

• **v1**: `Vector2`

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/LineCurve2D.ts:6](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/LineCurve2D.ts#L6)

## Accessors

### points

• `get` **points**(): `Vector2`[]

#### Returns

`Vector2`[]

#### Overrides

Curve2D.points

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/LineCurve2D.ts:15](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/LineCurve2D.ts#L15)

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

[packages/geometry/ExtrudeGeometry/Curve/LineCurve2D.ts:19](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/LineCurve2D.ts#L19)

___

### getPointAt

▸ **getPointAt**(`u`, `result?`): `Vector2`

#### Parameters

| Name | Type |
| :------ | :------ |
| `u` | `number` |
| `result` | `Vector2` |

#### Returns

`Vector2`

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/LineCurve2D.ts:29](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/LineCurve2D.ts#L29)

___

### getTangent

▸ **getTangent**(`t`, `result?`): `Vector2`

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |
| `result` | `Vector2` |

#### Returns

`Vector2`

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/LineCurve2D.ts:33](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/LineCurve2D.ts#L33)

___

### getTangentAt

▸ **getTangentAt**(`u`, `result?`): `Vector2`

#### Parameters

| Name | Type |
| :------ | :------ |
| `u` | `number` |
| `result` | `Vector2` |

#### Returns

`Vector2`

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/LineCurve2D.ts:39](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/LineCurve2D.ts#L39)

___

### copyFrom

▸ **copyFrom**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`LineCurve2D`](LineCurve2D.md) |

#### Returns

`void`

#### Defined in

[packages/geometry/ExtrudeGeometry/Curve/LineCurve2D.ts:43](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Curve/LineCurve2D.ts#L43)
