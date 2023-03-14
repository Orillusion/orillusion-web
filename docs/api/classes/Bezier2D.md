# Class: Bezier2D

贝塞尔曲线路径类


### Properties

- [points](Bezier2D.md#points)

### Constructors

- [constructor](Bezier2D.md#constructor)

### Methods

- [getValue](Bezier2D.md#getvalue)
- [createBezierPoints](Bezier2D.md#createbezierpoints)

## Properties

### points

• **points**: [`Vector2`](Vector2.md)[]

控制点

#### Defined in

[src/engine/math/Bezier2D.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Bezier2D.ts#L11)

## Constructors

### constructor

• **new Bezier2D**()

创建一个贝塞尔曲线对象

#### Defined in

[src/engine/math/Bezier2D.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Bezier2D.ts#L18)

## Methods

### getValue

▸ **getValue**(`v`): [`Vector2`](Vector2.md)

获取贝塞尔曲线上指定位置的点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | 变化值 |

#### Returns

[`Vector2`](Vector2.md)

当前v应对的点

#### Defined in

[src/engine/math/Bezier2D.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Bezier2D.ts#L28)

___

### createBezierPoints

▸ `Static` **createBezierPoints**(`anchorpoints`, `pointsAmount`): [`Bezier2D`](Bezier2D.md)

生成贝塞尔曲线坐标集

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `anchorpoints` | [`Vector2`](Vector2.md)[] | 贝塞尔基点 |
| `pointsAmount` | `number` | 生成的点数 |

#### Returns

[`Bezier2D`](Bezier2D.md)

生成的贝塞尔曲线

#### Defined in

[src/engine/math/Bezier2D.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Bezier2D.ts#L52)
