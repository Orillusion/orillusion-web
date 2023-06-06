# Class: Bezier3D

3D Bezier Curve

### Constructors

- [constructor](Bezier3D.md#constructor)

### Methods

- [calculateCubicBezierPoint](Bezier3D.md#calculatecubicbezierpoint)
- [bezierPoint](Bezier3D.md#bezierpoint)

## Constructors

### constructor

• **new Bezier3D**()

## Methods

### calculateCubicBezierPoint

▸ `Static` **calculateCubicBezierPoint**(`t`, `p0`, `c1`, `c2`, `p3`): [`Vector3`](Vector3.md)

get cubic curve point value from t at bezier data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `number` | interval value |
| `p0` | [`Vector3`](Vector3.md) | start point |
| `c1` | [`Vector3`](Vector3.md) | left control point |
| `c2` | [`Vector3`](Vector3.md) | right control point |
| `p3` | [`Vector3`](Vector3.md) | end point |

#### Returns

[`Vector3`](Vector3.md)

cubic curve point

#### Defined in

[src/math/Bezier3D.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/math/Bezier3D.ts#L18)

___

### bezierPoint

▸ `Static` **bezierPoint**(`t`, `p0`, `c1`, `p1`): [`Vector3`](Vector3.md)

get curve point from three point bezier curve

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `number` | interval value |
| `p0` | [`Vector3`](Vector3.md) | start point |
| `c1` | [`Vector3`](Vector3.md) | contrl point |
| `p1` | [`Vector3`](Vector3.md) | end point |

#### Returns

[`Vector3`](Vector3.md)

get bezier point at curve

#### Defined in

[src/math/Bezier3D.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/math/Bezier3D.ts#L50)
