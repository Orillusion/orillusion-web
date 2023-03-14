# Class: Bezier3D

贝塞尔曲线工具类


### Methods

- [calculateCubicBezierPoint](Bezier3D.md#calculatecubicbezierpoint)
- [bezierPoint](Bezier3D.md#bezierpoint)

### Constructors

- [constructor](Bezier3D.md#constructor)

## Methods

### calculateCubicBezierPoint

▸ `Static` **calculateCubicBezierPoint**(`t`, `p0`, `c1`, `c2`, `p3`): [`Vector3`](Vector3.md)

根据T值获得贝塞尔曲线点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `number` | T值 给定位置的贝塞尔曲线的值 |
| `p0` | [`Vector3`](Vector3.md) | 起始点 |
| `c1` | [`Vector3`](Vector3.md) | 控制点 |
| `c2` | [`Vector3`](Vector3.md) | 控制点 |
| `p3` | [`Vector3`](Vector3.md) | 目标点 |

#### Returns

[`Vector3`](Vector3.md)

根据T值计算出来的贝赛尔曲线点

#### Defined in

[src/engine/math/Bezier3D.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Bezier3D.ts#L16)

___

### bezierPoint

▸ `Static` **bezierPoint**(`t`, `p0`, `c1`, `p1`): [`Vector3`](Vector3.md)

评估给定点处贝塞尔曲线的坐标

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `number` | T值 用作曲线坐标的开始和结束之间的位置 |
| `p0` | [`Vector3`](Vector3.md) | 第一个点 |
| `c1` | [`Vector3`](Vector3.md) | 控制点 |
| `p1` | [`Vector3`](Vector3.md) | 第二点 |

#### Returns

[`Vector3`](Vector3.md)

给定位置的贝塞尔曲线的值

#### Defined in

[src/engine/math/Bezier3D.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Bezier3D.ts#L52)

## Constructors

### constructor

• **new Bezier3D**()
