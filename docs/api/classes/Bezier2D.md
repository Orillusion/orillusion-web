[**@orillusion/core**](../README.md)

***

# Class: Bezier2D

Defined in: [src/math/Bezier2D.ts:7](https://github.com/orillusion/orillusion/blob/main/src/math/Bezier2D.ts#L7)

2D Bezier Curve

## Constructors

### Constructor

> **new Bezier2D**(`vec2Ds?`): `Bezier2D`

Defined in: [src/math/Bezier2D.ts:16](https://github.com/orillusion/orillusion/blob/main/src/math/Bezier2D.ts#L16)

instance bezier class

#### Parameters

##### vec2Ds?

[`Vector2`](Vector2.md)[] = `[]`

#### Returns

`Bezier2D`

## Accessors

### points

#### Get Signature

> **get** **points**(): [`Vector2`](Vector2.md)[]

Defined in: [src/math/Bezier2D.ts:24](https://github.com/orillusion/orillusion/blob/main/src/math/Bezier2D.ts#L24)

get all bezier 2d points

##### Returns

[`Vector2`](Vector2.md)[]

#### Set Signature

> **set** **points**(`value`): `void`

Defined in: [src/math/Bezier2D.ts:31](https://github.com/orillusion/orillusion/blob/main/src/math/Bezier2D.ts#L31)

set bezier 2d point[x,y] list must great 4

##### Parameters

###### value

[`Vector2`](Vector2.md)[]

##### Returns

`void`

## Methods

### getValue()

> **getValue**(`v`): [`Vector2`](Vector2.md)

Defined in: [src/math/Bezier2D.ts:40](https://github.com/orillusion/orillusion/blob/main/src/math/Bezier2D.ts#L40)

get point2d at curve

#### Parameters

##### v

`number`

0.0 ~ 1.0

#### Returns

[`Vector2`](Vector2.md)

return point2D at curve

***

### createBezierPoints()

> `static` **createBezierPoints**(`anchorpoints`, `pointsAmount`): `Bezier2D`

Defined in: [src/math/Bezier2D.ts:64](https://github.com/orillusion/orillusion/blob/main/src/math/Bezier2D.ts#L64)

caclute bezier curve points at line [ 0.0 , 1.0 ]

#### Parameters

##### anchorpoints

[`Vector2`](Vector2.md)[]

bezier anchor

##### pointsAmount

`number`

point count

#### Returns

`Bezier2D`

get a bezier curve [Bezier2D]
