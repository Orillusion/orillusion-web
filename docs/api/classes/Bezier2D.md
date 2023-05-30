# Class: Bezier2D

2D Bezier Curve

### Constructors

- [constructor](Bezier2D.md#constructor)

### Accessors

- [points](Bezier2D.md#points)

### Methods

- [getValue](Bezier2D.md#getvalue)
- [createBezierPoints](Bezier2D.md#createbezierpoints)

## Constructors

### constructor

• **new Bezier2D**(`vec2Ds?`)

instance bezier class

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `vec2Ds` | [`Vector2`](Vector2.md)[] | `[]` |

#### Defined in

[src/math/Bezier2D.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/math/Bezier2D.ts#L16)

## Accessors

### points

• `get` **points**(): [`Vector2`](Vector2.md)[]

get all bezier 2d points

#### Returns

[`Vector2`](Vector2.md)[]

#### Defined in

[src/math/Bezier2D.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/math/Bezier2D.ts#L24)

• `set` **points**(`value`): `void`

set bezier 2d point[x,y] list must great 4

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector2`](Vector2.md)[] |

#### Returns

`void`

#### Defined in

[src/math/Bezier2D.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/math/Bezier2D.ts#L31)

## Methods

### getValue

▸ **getValue**(`v`): [`Vector2`](Vector2.md)

get point2d at curve

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 0.0 ~ 1.0 |

#### Returns

[`Vector2`](Vector2.md)

return point2D at curve

#### Defined in

[src/math/Bezier2D.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/math/Bezier2D.ts#L40)

___

### createBezierPoints

▸ `Static` **createBezierPoints**(`anchorpoints`, `pointsAmount`): [`Bezier2D`](Bezier2D.md)

caclute bezier curve points at line [ 0.0 , 1.0 ]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `anchorpoints` | [`Vector2`](Vector2.md)[] | bezier anchor |
| `pointsAmount` | `number` | point count |

#### Returns

[`Bezier2D`](Bezier2D.md)

get a bezier curve [Bezier2D]

#### Defined in

[src/math/Bezier2D.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/math/Bezier2D.ts#L64)
