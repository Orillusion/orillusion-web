[**@orillusion/core**](../README.md)

***

# Class: Bezier3D

Defined in: [src/math/Bezier3D.ts:6](https://github.com/orillusion/orillusion/blob/main/src/math/Bezier3D.ts#L6)

3D Bezier Curve

## Constructors

### Constructor

> **new Bezier3D**(): `Bezier3D`

#### Returns

`Bezier3D`

## Methods

### calculateCubicBezierPoint()

> `static` **calculateCubicBezierPoint**(`t`, `p0`, `c1`, `c2`, `p3`): [`Vector3`](Vector3.md)

Defined in: [src/math/Bezier3D.ts:18](https://github.com/orillusion/orillusion/blob/main/src/math/Bezier3D.ts#L18)

get cubic curve point value from t at bezier data

#### Parameters

##### t

`number`

interval value

##### p0

[`Vector3`](Vector3.md)

start point

##### c1

[`Vector3`](Vector3.md)

left control point

##### c2

[`Vector3`](Vector3.md)

right control point

##### p3

[`Vector3`](Vector3.md)

end point

#### Returns

[`Vector3`](Vector3.md)

cubic curve point

***

### bezierPoint()

> `static` **bezierPoint**(`t`, `p0`, `c1`, `p1`): [`Vector3`](Vector3.md)

Defined in: [src/math/Bezier3D.ts:50](https://github.com/orillusion/orillusion/blob/main/src/math/Bezier3D.ts#L50)

get curve point from three point bezier curve

#### Parameters

##### t

`number`

interval value

##### p0

[`Vector3`](Vector3.md)

start point

##### c1

[`Vector3`](Vector3.md)

contrl point

##### p1

[`Vector3`](Vector3.md)

end point

#### Returns

[`Vector3`](Vector3.md)

get bezier point at curve
