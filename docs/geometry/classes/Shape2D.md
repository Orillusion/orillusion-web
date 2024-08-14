# Class: Shape2D

## Hierarchy

- [`Path2D`](Path2D.md)

  ↳ **`Shape2D`**

### Constructors

- [constructor](Shape2D.md#constructor)

### Properties

- [autoClose](Shape2D.md#autoclose)
- [holes](Shape2D.md#holes)

### Methods

- [getPoints](Shape2D.md#getpoints)
- [setFromPoints](Shape2D.md#setfrompoints)
- [moveTo](Shape2D.md#moveto)
- [lineTo](Shape2D.md#lineto)
- [quadraticCurveTo](Shape2D.md#quadraticcurveto)
- [bezierCurveTo](Shape2D.md#beziercurveto)
- [isIntersect](Shape2D.md#isintersect)
- [pointInPolygon](Shape2D.md#pointinpolygon)
- [extractPoints](Shape2D.md#extractpoints)
- [getPointsHoles](Shape2D.md#getpointsholes)

## Constructors

### constructor

• **new Shape2D**(`points?`): [`Shape2D`](Shape2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `points?` | `Vector2`[] |

#### Returns

[`Shape2D`](Shape2D.md)

#### Overrides

[Path2D](Path2D.md).[constructor](Path2D.md#constructor)

#### Defined in

[packages/geometry/ExtrudeGeometry/Shape2D.ts:8](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Shape2D.ts#L8)

## Properties

### autoClose

• **autoClose**: `boolean` = `false`

#### Inherited from

[Path2D](Path2D.md).[autoClose](Path2D.md#autoclose)

#### Defined in

[packages/geometry/ExtrudeGeometry/Path2D.ts:9](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Path2D.ts#L9)

___

### holes

• **holes**: [`Path2D`](Path2D.md)[] = `[]`

#### Defined in

[packages/geometry/ExtrudeGeometry/Shape2D.ts:6](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Shape2D.ts#L6)

## Methods

### getPoints

▸ **getPoints**(`divisions`): `Vector2`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `divisions` | `number` |

#### Returns

`Vector2`[]

#### Inherited from

[Path2D](Path2D.md).[getPoints](Path2D.md#getpoints)

#### Defined in

[packages/geometry/ExtrudeGeometry/Path2D.ts:20](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Path2D.ts#L20)

___

### setFromPoints

▸ **setFromPoints**(`points`): [`Shape2D`](Shape2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | `Vector2`[] |

#### Returns

[`Shape2D`](Shape2D.md)

#### Inherited from

[Path2D](Path2D.md).[setFromPoints](Path2D.md#setfrompoints)

#### Defined in

[packages/geometry/ExtrudeGeometry/Path2D.ts:52](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Path2D.ts#L52)

___

### moveTo

▸ **moveTo**(`x`, `y`): [`Shape2D`](Shape2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`Shape2D`](Shape2D.md)

#### Inherited from

[Path2D](Path2D.md).[moveTo](Path2D.md#moveto)

#### Defined in

[packages/geometry/ExtrudeGeometry/Path2D.ts:60](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Path2D.ts#L60)

___

### lineTo

▸ **lineTo**(`x`, `y`): [`Shape2D`](Shape2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`Shape2D`](Shape2D.md)

#### Inherited from

[Path2D](Path2D.md).[lineTo](Path2D.md#lineto)

#### Defined in

[packages/geometry/ExtrudeGeometry/Path2D.ts:65](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Path2D.ts#L65)

___

### quadraticCurveTo

▸ **quadraticCurveTo**(`cpX`, `cpY`, `x`, `y`): [`Shape2D`](Shape2D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cpX` | `number` |
| `cpY` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`Shape2D`](Shape2D.md)

#### Inherited from

[Path2D](Path2D.md).[quadraticCurveTo](Path2D.md#quadraticcurveto)

#### Defined in

[packages/geometry/ExtrudeGeometry/Path2D.ts:71](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Path2D.ts#L71)

___

### bezierCurveTo

▸ **bezierCurveTo**(`cp1X`, `cp1Y`, `cp2X`, `cp2Y`, `x`, `y`): [`Shape2D`](Shape2D.md)

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

[`Shape2D`](Shape2D.md)

#### Inherited from

[Path2D](Path2D.md).[bezierCurveTo](Path2D.md#beziercurveto)

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

#### Inherited from

[Path2D](Path2D.md).[isIntersect](Path2D.md#isintersect)

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

#### Inherited from

[Path2D](Path2D.md).[pointInPolygon](Path2D.md#pointinpolygon)

#### Defined in

[packages/geometry/ExtrudeGeometry/Path2D.ts:89](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Path2D.ts#L89)

___

### extractPoints

▸ **extractPoints**(`divisions`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `divisions` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `shape` | `Vector2`[] |
| `holes` | `Vector2`[][] |

#### Defined in

[packages/geometry/ExtrudeGeometry/Shape2D.ts:12](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Shape2D.ts#L12)

___

### getPointsHoles

▸ **getPointsHoles**(`divisions`): `Vector2`[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `divisions` | `number` |

#### Returns

`Vector2`[][]

#### Defined in

[packages/geometry/ExtrudeGeometry/Shape2D.ts:19](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/Shape2D.ts#L19)
