# Class: Path2D

## Hierarchy

- **`Path2D`**

  ↳ [`Shape2D`](Shape2D.md)

### Constructors

- [constructor](Path2D.md#constructor)

### Properties

- [autoClose](Path2D.md#autoclose)

### Methods

- [getPoints](Path2D.md#getpoints)
- [setFromPoints](Path2D.md#setfrompoints)
- [moveTo](Path2D.md#moveto)
- [lineTo](Path2D.md#lineto)
- [quadraticCurveTo](Path2D.md#quadraticcurveto)
- [bezierCurveTo](Path2D.md#beziercurveto)
- [isIntersect](Path2D.md#isintersect)
- [pointInPolygon](Path2D.md#pointinpolygon)

## Constructors

### constructor

• **new Path2D**(`points?`): [`Path2D`](Path2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `points?` | `Vector2`[] |

#### Returns

[`Path2D`](Path2D.md)

#### Defined in

[packages/geometry/ExtrudeGeometry/Path2D.ts:14](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Path2D.ts#L14)

## Properties

### autoClose

• **autoClose**: `boolean` = `false`

#### Defined in

[packages/geometry/ExtrudeGeometry/Path2D.ts:9](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Path2D.ts#L9)

## Methods

### getPoints

▸ **getPoints**(`divisions`): `Vector2`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `divisions` | `number` |

#### Returns

`Vector2`[]

#### Defined in

[packages/geometry/ExtrudeGeometry/Path2D.ts:20](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Path2D.ts#L20)

___

### setFromPoints

▸ **setFromPoints**(`points`): [`Path2D`](Path2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | `Vector2`[] |

#### Returns

[`Path2D`](Path2D.md)

#### Defined in

[packages/geometry/ExtrudeGeometry/Path2D.ts:52](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Path2D.ts#L52)

___

### moveTo

▸ **moveTo**(`x`, `y`): [`Path2D`](Path2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`Path2D`](Path2D.md)

#### Defined in

[packages/geometry/ExtrudeGeometry/Path2D.ts:60](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Path2D.ts#L60)

___

### lineTo

▸ **lineTo**(`x`, `y`): [`Path2D`](Path2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`Path2D`](Path2D.md)

#### Defined in

[packages/geometry/ExtrudeGeometry/Path2D.ts:65](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Path2D.ts#L65)

___

### quadraticCurveTo

▸ **quadraticCurveTo**(`cpX`, `cpY`, `x`, `y`): [`Path2D`](Path2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cpX` | `number` |
| `cpY` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`Path2D`](Path2D.md)

#### Defined in

[packages/geometry/ExtrudeGeometry/Path2D.ts:71](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Path2D.ts#L71)

___

### bezierCurveTo

▸ **bezierCurveTo**(`cp1X`, `cp1Y`, `cp2X`, `cp2Y`, `x`, `y`): [`Path2D`](Path2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cp1X` | `number` |
| `cp1Y` | `number` |
| `cp2X` | `number` |
| `cp2Y` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`Path2D`](Path2D.md)

#### Defined in

[packages/geometry/ExtrudeGeometry/Path2D.ts:77](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Path2D.ts#L77)

___

### isIntersect

▸ **isIntersect**(`path`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](Path2D.md) |

#### Returns

`boolean`

#### Defined in

[packages/geometry/ExtrudeGeometry/Path2D.ts:83](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Path2D.ts#L83)

___

### pointInPolygon

▸ **pointInPolygon**(`point`, `polygon`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Vector2` |
| `polygon` | `Vector2`[] |

#### Returns

`boolean`

#### Defined in

[packages/geometry/ExtrudeGeometry/Path2D.ts:89](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Path2D.ts#L89)
