[**@orillusion/core**](../README.md)

***

# Class: CubicBezierCurve

Defined in: [src/math/CubicBezierCurve.ts:7](https://github.com/orillusion/orillusion/blob/main/src/math/CubicBezierCurve.ts#L7)

Cubic Bezier Curve

## Constructors

### Constructor

> **new CubicBezierCurve**(`cvs`): `CubicBezierCurve`

Defined in: [src/math/CubicBezierCurve.ts:14](https://github.com/orillusion/orillusion/blob/main/src/math/CubicBezierCurve.ts#L14)

#### Parameters

##### cvs

[`Vector3`](Vector3.md)[]

controller points

#### Returns

`CubicBezierCurve`

## Methods

### setControlVertices()

> **setControlVertices**(`cvs`): `void`

Defined in: [src/math/CubicBezierCurve.ts:22](https://github.com/orillusion/orillusion/blob/main/src/math/CubicBezierCurve.ts#L22)

update controller points

#### Parameters

##### cvs

[`Vector3`](Vector3.md)[]

controller points

#### Returns

`void`

***

### getPoint()

> **getPoint**(`t`): [`Vector3`](Vector3.md)

Defined in: [src/math/CubicBezierCurve.ts:34](https://github.com/orillusion/orillusion/blob/main/src/math/CubicBezierCurve.ts#L34)

get position by calc from curve

#### Parameters

##### t

`number`

a position in range [0-1]

#### Returns

[`Vector3`](Vector3.md)

Vector3

***

### getTangent()

> **getTangent**(`t`): [`Vector3`](Vector3.md)

Defined in: [src/math/CubicBezierCurve.ts:58](https://github.com/orillusion/orillusion/blob/main/src/math/CubicBezierCurve.ts#L58)

get tagent by calc from curve

#### Parameters

##### t

`number`

a position in range [0-1]

#### Returns

[`Vector3`](Vector3.md)

tagent direction

***

### getClosestParam()

> **getClosestParam**(`pos`, `paramThreshold?`): `number`

Defined in: [src/math/CubicBezierCurve.ts:79](https://github.com/orillusion/orillusion/blob/main/src/math/CubicBezierCurve.ts#L79)

get adjacent coordinates

#### Parameters

##### pos

[`Vector3`](Vector3.md)

position

##### paramThreshold?

`number` = `0.000001`

threshold value

#### Returns

`number`

a position in range [0-1]

***

### getClosestParamRec()

> **getClosestParamRec**(`pos`, `beginT`, `endT`, `thresholdT`): `number`

Defined in: [src/math/CubicBezierCurve.ts:91](https://github.com/orillusion/orillusion/blob/main/src/math/CubicBezierCurve.ts#L91)

get adjacent coordinates by given range

#### Parameters

##### pos

[`Vector3`](Vector3.md)

position

##### beginT

`number`

range from

##### endT

`number`

range end

##### thresholdT

`number`

threshold value

#### Returns

`number`
