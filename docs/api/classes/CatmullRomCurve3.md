[**@orillusion/core**](../README.md)

***

# Class: CatmullRomCurve3

Defined in: [src/math/CatmullRomCurve3.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/math/CatmullRomCurve3.ts#L22)

Smooth 3D spline that passes THROUGH every control point (unlike a Bezier
path, whose inner handles are off-curve). API and math follow three.js
`CatmullRomCurve3`:

- `getPoint(t)` — position at curve parameter t ∈ [0,1] (uneven speed).
- `getPointAt(u)` — position at arc-length fraction u ∈ [0,1] (constant
  speed; this is what camera paths and followers want).
- `getTangent(t)` / `getTangentAt(u)` — unit direction of travel.
- `getLength()`, `getPoints(n)`, `getSpacedPoints(n)`.

`'centripetal'` (default) never forms cusps or self-intersections inside a
segment; `'chordal'` is looser; `'catmullrom'` is the classic uniform
spline with a `tension` knob (0 = loose … 1 = straight segments).

## Constructors

### Constructor

> **new CatmullRomCurve3**(`points?`, `closed?`, `curveType?`, `tension?`): `CatmullRomCurve3`

Defined in: [src/math/CatmullRomCurve3.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/math/CatmullRomCurve3.ts#L33)

#### Parameters

##### points?

[`Vector3`](Vector3.md)[] = `[]`

##### closed?

`boolean` = `false`

##### curveType?

[`CatmullRomType`](../type-aliases/CatmullRomType.md) = `'centripetal'`

##### tension?

`number` = `0.5`

#### Returns

`CatmullRomCurve3`

## Properties

### points

> **points**: [`Vector3`](Vector3.md)[]

Defined in: [src/math/CatmullRomCurve3.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/math/CatmullRomCurve3.ts#L23)

***

### closed

> **closed**: `boolean`

Defined in: [src/math/CatmullRomCurve3.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/math/CatmullRomCurve3.ts#L24)

***

### curveType

> **curveType**: [`CatmullRomType`](../type-aliases/CatmullRomType.md)

Defined in: [src/math/CatmullRomCurve3.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/math/CatmullRomCurve3.ts#L25)

***

### tension

> **tension**: `number`

Defined in: [src/math/CatmullRomCurve3.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/math/CatmullRomCurve3.ts#L26)

***

### arcLengthDivisions

> **arcLengthDivisions**: `number` = `200`

Defined in: [src/math/CatmullRomCurve3.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/math/CatmullRomCurve3.ts#L28)

Number of samples used for the arc-length table.

## Methods

### getPoint()

> **getPoint**(`t`, `out?`): [`Vector3`](Vector3.md)

Defined in: [src/math/CatmullRomCurve3.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/math/CatmullRomCurve3.ts#L41)

Position at curve parameter `t` ∈ [0,1].

#### Parameters

##### t

`number`

##### out?

[`Vector3`](Vector3.md) = `...`

#### Returns

[`Vector3`](Vector3.md)

***

### getPointAt()

> **getPointAt**(`u`, `out?`): [`Vector3`](Vector3.md)

Defined in: [src/math/CatmullRomCurve3.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/math/CatmullRomCurve3.ts#L97)

Position at arc-length fraction `u` ∈ [0,1] (constant speed along the curve).

#### Parameters

##### u

`number`

##### out?

[`Vector3`](Vector3.md) = `...`

#### Returns

[`Vector3`](Vector3.md)

***

### getPoints()

> **getPoints**(`divisions?`): [`Vector3`](Vector3.md)[]

Defined in: [src/math/CatmullRomCurve3.ts:102](https://github.com/Orillusion/orillusion/blob/main/src/math/CatmullRomCurve3.ts#L102)

`divisions + 1` points at equal steps of the curve parameter.

#### Parameters

##### divisions?

`number` = `5`

#### Returns

[`Vector3`](Vector3.md)[]

***

### getSpacedPoints()

> **getSpacedPoints**(`divisions?`): [`Vector3`](Vector3.md)[]

Defined in: [src/math/CatmullRomCurve3.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/math/CatmullRomCurve3.ts#L109)

`divisions + 1` points at equal arc-length steps.

#### Parameters

##### divisions?

`number` = `5`

#### Returns

[`Vector3`](Vector3.md)[]

***

### getLength()

> **getLength**(): `number`

Defined in: [src/math/CatmullRomCurve3.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/math/CatmullRomCurve3.ts#L116)

Total arc length (approximated with `arcLengthDivisions` chords).

#### Returns

`number`

***

### getLengths()

> **getLengths**(`divisions?`): `number`[]

Defined in: [src/math/CatmullRomCurve3.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/math/CatmullRomCurve3.ts#L122)

Cumulative chord lengths at `divisions + 1` evenly spaced parameters. Cached until the curve changes.

#### Parameters

##### divisions?

`number` = `...`

#### Returns

`number`[]

***

### updateArcLengths()

> **updateArcLengths**(): `void`

Defined in: [src/math/CatmullRomCurve3.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/math/CatmullRomCurve3.ts#L140)

Force the arc-length table to be rebuilt (call after mutating a control point in place).

#### Returns

`void`

***

### getUtoTmapping()

> **getUtoTmapping**(`u`, `distance?`): `number`

Defined in: [src/math/CatmullRomCurve3.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/math/CatmullRomCurve3.ts#L145)

Map an arc-length fraction `u` to the curve parameter `t`.

#### Parameters

##### u

`number`

##### distance?

`number`

#### Returns

`number`

***

### getTangent()

> **getTangent**(`t`, `out?`): [`Vector3`](Vector3.md)

Defined in: [src/math/CatmullRomCurve3.ts:168](https://github.com/Orillusion/orillusion/blob/main/src/math/CatmullRomCurve3.ts#L168)

Unit tangent at curve parameter `t`.

#### Parameters

##### t

`number`

##### out?

[`Vector3`](Vector3.md) = `...`

#### Returns

[`Vector3`](Vector3.md)

***

### getTangentAt()

> **getTangentAt**(`u`, `out?`): [`Vector3`](Vector3.md)

Defined in: [src/math/CatmullRomCurve3.ts:178](https://github.com/Orillusion/orillusion/blob/main/src/math/CatmullRomCurve3.ts#L178)

Unit tangent at arc-length fraction `u`.

#### Parameters

##### u

`number`

##### out?

[`Vector3`](Vector3.md) = `...`

#### Returns

[`Vector3`](Vector3.md)

***

### clone()

> **clone**(): `CatmullRomCurve3`

Defined in: [src/math/CatmullRomCurve3.ts:182](https://github.com/Orillusion/orillusion/blob/main/src/math/CatmullRomCurve3.ts#L182)

#### Returns

`CatmullRomCurve3`
