# Class: CubicBezierCurve

三阶贝塞尔曲线


### Constructors

- [constructor](CubicBezierCurve.md#constructor)

### Methods

- [setControlVerts](CubicBezierCurve.md#setcontrolverts)
- [getPoint](CubicBezierCurve.md#getpoint)
- [getTangent](CubicBezierCurve.md#gettangent)
- [getClosestParam](CubicBezierCurve.md#getclosestparam)
- [getClosestParamRec](CubicBezierCurve.md#getclosestparamrec)

## Constructors

### constructor

• **new CubicBezierCurve**(`cvs`)

创建贝塞尔曲线对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cvs` | [`Vector3`](Vector3.md)[] | 控制点 |

#### Defined in

[src/engine/math/CubicBezierCurve.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/CubicBezierCurve.ts#L13)

## Methods

### setControlVerts

▸ **setControlVerts**(`cvs`): `void`

设置控制点

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cvs` | [`Vector3`](Vector3.md)[] | 控制点数组 |

#### Returns

`void`

#### Defined in

[src/engine/math/CubicBezierCurve.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/CubicBezierCurve.ts#L21)

___

### getPoint

▸ **getPoint**(`t`): [`Vector3`](Vector3.md)

获取给定位置的坐标

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `number` | 坐标中的位置 必须在[0-1]范围 |

#### Returns

[`Vector3`](Vector3.md)

选定的坐值

#### Defined in

[src/engine/math/CubicBezierCurve.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/CubicBezierCurve.ts#L31)

___

### getTangent

▸ **getTangent**(`t`): [`Vector3`](Vector3.md)

返回指定点的切线向量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `number` | 坐标中的位置 必须在[0-1]范围 |

#### Returns

[`Vector3`](Vector3.md)

切线向量

#### Defined in

[src/engine/math/CubicBezierCurve.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/CubicBezierCurve.ts#L52)

___

### getClosestParam

▸ **getClosestParam**(`pos`, `paramThreshold?`): `number`

获取临近坐标

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) | `undefined` | 位置 |
| `paramThreshold` | `number` | `0.000001` | 临界值 |

#### Returns

`number`

临近值

#### Defined in

[src/engine/math/CubicBezierCurve.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/CubicBezierCurve.ts#L73)

___

### getClosestParamRec

▸ **getClosestParamRec**(`pos`, `beginT`, `endT`, `thresholdT`): `number`

根据给定范围计算临近值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) | 位置 |
| `beginT` | `number` | 起始范围 |
| `endT` | `number` | 终止范围 |
| `thresholdT` | `number` | 临界值 |

#### Returns

`number`

#### Defined in

[src/engine/math/CubicBezierCurve.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/CubicBezierCurve.ts#L85)
