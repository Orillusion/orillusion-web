[**@orillusion/core**](../README.md)

***

# Class: Box2

Defined in: [src/math/Box2.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L8)

Axis-aligned 2D box (min / max corners). Mirrors three.js `Box2`: screen
rectangles, UV bounds, 2D culling, marquee selection.

## Constructors

### Constructor

> **new Box2**(`min?`, `max?`): `Box2`

Defined in: [src/math/Box2.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L13)

Defaults to an empty box (min = +∞, max = −∞) so the first `expandByPoint` defines it.

#### Parameters

##### min?

[`Vector2`](Vector2.md)

##### max?

[`Vector2`](Vector2.md)

#### Returns

`Box2`

## Properties

### min

> **min**: [`Vector2`](Vector2.md)

Defined in: [src/math/Box2.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L9)

***

### max

> **max**: [`Vector2`](Vector2.md)

Defined in: [src/math/Box2.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L10)

## Methods

### set()

> **set**(`min`, `max`): `this`

Defined in: [src/math/Box2.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L18)

#### Parameters

##### min

[`Vector2`](Vector2.md)

##### max

[`Vector2`](Vector2.md)

#### Returns

`this`

***

### setFromPoints()

> **setFromPoints**(`points`): `this`

Defined in: [src/math/Box2.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L24)

#### Parameters

##### points

[`Vector2`](Vector2.md)[]

#### Returns

`this`

***

### setFromCenterAndSize()

> **setFromCenterAndSize**(`center`, `size`): `this`

Defined in: [src/math/Box2.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L30)

#### Parameters

##### center

[`Vector2`](Vector2.md)

##### size

[`Vector2`](Vector2.md)

#### Returns

`this`

***

### clone()

> **clone**(): `Box2`

Defined in: [src/math/Box2.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L37)

#### Returns

`Box2`

***

### copy()

> **copy**(`box`): `this`

Defined in: [src/math/Box2.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L41)

#### Parameters

##### box

`Box2`

#### Returns

`this`

***

### makeEmpty()

> **makeEmpty**(): `this`

Defined in: [src/math/Box2.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L45)

#### Returns

`this`

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [src/math/Box2.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L52)

True when the box encloses no points (max < min on either axis).

#### Returns

`boolean`

***

### getCenter()

> **getCenter**(`out?`): [`Vector2`](Vector2.md)

Defined in: [src/math/Box2.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L56)

#### Parameters

##### out?

[`Vector2`](Vector2.md) = `...`

#### Returns

[`Vector2`](Vector2.md)

***

### getSize()

> **getSize**(`out?`): [`Vector2`](Vector2.md)

Defined in: [src/math/Box2.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L60)

#### Parameters

##### out?

[`Vector2`](Vector2.md) = `...`

#### Returns

[`Vector2`](Vector2.md)

***

### expandByPoint()

> **expandByPoint**(`p`): `this`

Defined in: [src/math/Box2.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L64)

#### Parameters

##### p

[`Vector2`](Vector2.md)

#### Returns

`this`

***

### expandByVector()

> **expandByVector**(`v`): `this`

Defined in: [src/math/Box2.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L72)

#### Parameters

##### v

[`Vector2`](Vector2.md)

#### Returns

`this`

***

### expandByScalar()

> **expandByScalar**(`s`): `this`

Defined in: [src/math/Box2.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L78)

#### Parameters

##### s

`number`

#### Returns

`this`

***

### containsPoint()

> **containsPoint**(`p`): `boolean`

Defined in: [src/math/Box2.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L84)

#### Parameters

##### p

[`Vector2`](Vector2.md)

#### Returns

`boolean`

***

### containsBox()

> **containsBox**(`box`): `boolean`

Defined in: [src/math/Box2.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L88)

#### Parameters

##### box

`Box2`

#### Returns

`boolean`

***

### intersectsBox()

> **intersectsBox**(`box`): `boolean`

Defined in: [src/math/Box2.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L93)

Overlap test; touching edges count as intersecting.

#### Parameters

##### box

`Box2`

#### Returns

`boolean`

***

### getParameter()

> **getParameter**(`p`, `out?`): [`Vector2`](Vector2.md)

Defined in: [src/math/Box2.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L98)

Position of `p` inside the box as 0..1 on each axis.

#### Parameters

##### p

[`Vector2`](Vector2.md)

##### out?

[`Vector2`](Vector2.md) = `...`

#### Returns

[`Vector2`](Vector2.md)

***

### clampPoint()

> **clampPoint**(`p`, `out?`): [`Vector2`](Vector2.md)

Defined in: [src/math/Box2.ts:102](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L102)

#### Parameters

##### p

[`Vector2`](Vector2.md)

##### out?

[`Vector2`](Vector2.md) = `...`

#### Returns

[`Vector2`](Vector2.md)

***

### distanceToPoint()

> **distanceToPoint**(`p`): `number`

Defined in: [src/math/Box2.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L107)

0 when `p` is inside or on the box.

#### Parameters

##### p

[`Vector2`](Vector2.md)

#### Returns

`number`

***

### intersect()

> **intersect**(`box`): `this`

Defined in: [src/math/Box2.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L114)

Shrink to the overlap with `box`; becomes empty if they do not overlap.

#### Parameters

##### box

`Box2`

#### Returns

`this`

***

### union()

> **union**(`box`): `this`

Defined in: [src/math/Box2.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L121)

#### Parameters

##### box

`Box2`

#### Returns

`this`

***

### translate()

> **translate**(`offset`): `this`

Defined in: [src/math/Box2.ts:127](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L127)

#### Parameters

##### offset

[`Vector2`](Vector2.md)

#### Returns

`this`

***

### equals()

> **equals**(`box`): `boolean`

Defined in: [src/math/Box2.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/math/Box2.ts#L133)

#### Parameters

##### box

`Box2`

#### Returns

`boolean`
