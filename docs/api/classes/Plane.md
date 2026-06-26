[**@orillusion/core**](../README.md)

***

# Class: Plane

Defined in: [src/math/Plane.ts:8](https://github.com/orillusion/orillusion/blob/main/src/math/Plane.ts#L8)

Plane mathematics class

## Constructors

### Constructor

> **new Plane**(`pos`, `normal`): `Plane`

Defined in: [src/math/Plane.ts:29](https://github.com/orillusion/orillusion/blob/main/src/math/Plane.ts#L29)

Constructs a new plane object

#### Parameters

##### pos

[`Vector3`](Vector3.md)

Plane position

##### normal

[`Vector3`](Vector3.md)

Plane normal quantity

#### Returns

`Plane`

## Properties

### point

> **point**: [`Vector3`](Vector3.md)

Defined in: [src/math/Plane.ts:12](https://github.com/orillusion/orillusion/blob/main/src/math/Plane.ts#L12)

Center position of plane

***

### normal

> **normal**: [`Vector3`](Vector3.md) = `Vector3.UP`

Defined in: [src/math/Plane.ts:17](https://github.com/orillusion/orillusion/blob/main/src/math/Plane.ts#L17)

Plane normal vector

## Methods

### clone()

> **clone**(): `Plane`

Defined in: [src/math/Plane.ts:38](https://github.com/orillusion/orillusion/blob/main/src/math/Plane.ts#L38)

Clones the current plane object

#### Returns

`Plane`

New plane object

***

### intersectsLine()

> **intersectsLine**(`start`, `end`, `point`): `boolean`

Defined in: [src/math/Plane.ts:50](https://github.com/orillusion/orillusion/blob/main/src/math/Plane.ts#L50)

Determine whether the plane intersects a line segment and calculate the intersection point

#### Parameters

##### start

[`Vector3`](Vector3.md)

Starting point of line segment

##### end

[`Vector3`](Vector3.md)

End point of line segment

##### point

[`Vector3`](Vector3.md)

Point of output intersection

#### Returns

`boolean`

Returns whether it intersects

***

### intersectsRay()

> **intersectsRay**(`ray`, `targetPoint?`): `boolean`

Defined in: [src/math/Plane.ts:70](https://github.com/orillusion/orillusion/blob/main/src/math/Plane.ts#L70)

Determine whether the plane intersects a ray and calculate the intersection point

#### Parameters

##### ray

[`Ray`](Ray.md)

Ray of input

##### targetPoint?

[`Vector3`](Vector3.md)

#### Returns

`boolean`

Returns whether it intersects
