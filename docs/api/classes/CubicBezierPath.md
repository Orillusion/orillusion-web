[**@orillusion/core**](../README.md)

***

# Class: CubicBezierPath

Defined in: [src/math/CubicBezierPath.ts:17](https://github.com/orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L17)

## Constructors

### Constructor

> **new CubicBezierPath**(`controlVertices`, `t?`): `CubicBezierPath`

Defined in: [src/math/CubicBezierPath.ts:26](https://github.com/orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L26)

#### Parameters

##### controlVertices

[`Vector3`](Vector3.md)[]

##### t?

[`CubicBezierType`](../enumerations/CubicBezierType.md) = `CubicBezierType.Open`

#### Returns

`CubicBezierPath`

## Methods

### getPathType()

> **getPathType**(): [`CubicBezierType`](../enumerations/CubicBezierType.md)

Defined in: [src/math/CubicBezierPath.ts:31](https://github.com/orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L31)

Return the path type (open or closed).

#### Returns

[`CubicBezierType`](../enumerations/CubicBezierType.md)

***

### isClosed()

> **isClosed**(): `boolean`

Defined in: [src/math/CubicBezierPath.ts:36](https://github.com/orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L36)

Return true if the path is closed.

#### Returns

`boolean`

***

### isValid()

> **isValid**(): `boolean`

Defined in: [src/math/CubicBezierPath.ts:43](https://github.com/orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L43)

#### Returns

`boolean`

***

### clear()

> **clear**(): `void`

Defined in: [src/math/CubicBezierPath.ts:48](https://github.com/orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L48)

Reset the path to empty, open state with no control vertices or segments.

#### Returns

`void`

***

### computeApproxLength()

> **computeApproxLength**(): `number`

Defined in: [src/math/CubicBezierPath.ts:56](https://github.com/orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L56)

Compute an approximate path length by summing squared distances between interpolated points.

#### Returns

`number`

***

### computeApproxParamPerUnitLength()

> **computeApproxParamPerUnitLength**(): `number`

Defined in: [src/math/CubicBezierPath.ts:78](https://github.com/orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L78)

Return the approximate change in the raw parameter t per unit of path length.

#### Returns

`number`

***

### computeApproxNormParamPerUnitLength()

> **computeApproxNormParamPerUnitLength**(): `number`

Defined in: [src/math/CubicBezierPath.ts:84](https://github.com/orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L84)

Return the approximate change in the normalized parameter t per unit of path length.

#### Returns

`number`

***

### interpolatePoints()

> **interpolatePoints**(`knots`, `t`): `void`

Defined in: [src/math/CubicBezierPath.ts:90](https://github.com/orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L90)

Build the path from interpolated knots, generating interior control vertices automatically (knots.length must be >= 2).

#### Parameters

##### knots

[`Vector3`](Vector3.md)[]

##### t

[`CubicBezierType`](../enumerations/CubicBezierType.md)

#### Returns

`void`

***

### setControlVertices()

> **setControlVertices**(`cvs`, `t`): `void`

Defined in: [src/math/CubicBezierPath.ts:187](https://github.com/orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L187)

Set the path directly from explicit control vertices; for a closed path the last CV must match the first.

#### Parameters

##### cvs

[`Vector3`](Vector3.md)[]

##### t

[`CubicBezierType`](../enumerations/CubicBezierType.md)

#### Returns

`void`

***

### getPoint()

> **getPoint**(`t`): [`Vector3`](Vector3.md)

Defined in: [src/math/CubicBezierPath.ts:203](https://github.com/orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L203)

Return the point on the path at parameter t in [0, numSegments]; closed paths wrap out-of-range t.

#### Parameters

##### t

`number`

#### Returns

[`Vector3`](Vector3.md)

***

### getPointNorm()

> **getPointNorm**(`t`): [`Vector3`](Vector3.md)

Defined in: [src/math/CubicBezierPath.ts:234](https://github.com/orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L234)

Return the point on the path at normalized parameter t in [0, 1] over all segments.

#### Parameters

##### t

`number`

#### Returns

[`Vector3`](Vector3.md)

***

### getTangent()

> **getTangent**(`t`): [`Vector3`](Vector3.md)

Defined in: [src/math/CubicBezierPath.ts:241](https://github.com/orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L241)

Return the (un-normalized) tangent on the path at parameter t in [0, numSegments].

#### Parameters

##### t

`number`

#### Returns

[`Vector3`](Vector3.md)

***

### getTangentNorm()

> **getTangentNorm**(`t`): [`Vector3`](Vector3.md)

Defined in: [src/math/CubicBezierPath.ts:270](https://github.com/orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L270)

Return the (un-normalized) tangent at normalized parameter t in [0, 1] over all segments.

#### Parameters

##### t

`number`

#### Returns

[`Vector3`](Vector3.md)

***

### computeClosestParam()

> **computeClosestParam**(`pos`, `paramThreshold`): `number`

Defined in: [src/math/CubicBezierPath.ts:278](https://github.com/orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L278)

Find the parameter t of the closest point on the path to pos, searching with the given param threshold.

#### Parameters

##### pos

[`Vector3`](Vector3.md)

##### paramThreshold

`number`

#### Returns

`number`

***

### computeClosestNormParam()

> **computeClosestNormParam**(`pos`, `paramThreshold`): `number`

Defined in: [src/math/CubicBezierPath.ts:304](https://github.com/orillusion/orillusion/blob/main/src/math/CubicBezierPath.ts#L304)

Like computeClosestParam but returns the closest point as a normalized parameter t in [0, 1].

#### Parameters

##### pos

[`Vector3`](Vector3.md)

##### paramThreshold

`number`

#### Returns

`number`
