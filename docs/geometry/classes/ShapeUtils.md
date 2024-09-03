# Class: ShapeUtils

### Constructors

- [constructor](ShapeUtils.md#constructor)

### Methods

- [isClockWise](ShapeUtils.md#isclockwise)
- [area](ShapeUtils.md#area)
- [triangulateShape](ShapeUtils.md#triangulateshape)

## Constructors

### constructor

• **new ShapeUtils**(): [`ShapeUtils`](ShapeUtils.md)

#### Returns

[`ShapeUtils`](ShapeUtils.md)

## Methods

### isClockWise

▸ **isClockWise**(`points`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | `Vector2`[] |

#### Returns

`boolean`

#### Defined in

[packages/geometry/ExtrudeGeometry/ShapeUtils.ts:5](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/ShapeUtils.ts#L5)

___

### area

▸ **area**(`contour`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `contour` | `Vector2`[] |

#### Returns

`number`

#### Defined in

[packages/geometry/ExtrudeGeometry/ShapeUtils.ts:9](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/ShapeUtils.ts#L9)

___

### triangulateShape

▸ **triangulateShape**(`contour`, `holes`): `number`[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `contour` | `Vector2`[] |
| `holes` | `Vector2`[][] |

#### Returns

`number`[][]

#### Defined in

[packages/geometry/ExtrudeGeometry/ShapeUtils.ts:18](https://github.com/Orillusion/orillusion/blob/main/packages/geometry/ExtrudeGeometry/ShapeUtils.ts#L18)
