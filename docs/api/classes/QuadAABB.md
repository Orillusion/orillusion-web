[**@orillusion/core**](../README.md)

***

# Class: QuadAABB

Defined in: [src/core/tree/quad/QuadAABB.ts:7](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L7)

Axis-aligned bounding box used by the quad-tree to describe cell bounds.

## Constructors

### Constructor

> **new QuadAABB**(): `QuadAABB`

Defined in: [src/core/tree/quad/QuadAABB.ts:25](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L25)

#### Returns

`QuadAABB`

## Properties

### minPosX

> **minPosX**: `number` = `0`

Defined in: [src/core/tree/quad/QuadAABB.ts:9](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L9)

***

### minPosY

> **minPosY**: `number` = `0`

Defined in: [src/core/tree/quad/QuadAABB.ts:11](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L11)

***

### maxPosX

> **maxPosX**: `number` = `0`

Defined in: [src/core/tree/quad/QuadAABB.ts:13](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L13)

***

### maxPosY

> **maxPosY**: `number` = `0`

Defined in: [src/core/tree/quad/QuadAABB.ts:15](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L15)

***

### testID

> **testID**: `number` = `0`

Defined in: [src/core/tree/quad/QuadAABB.ts:17](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L17)

***

### points

> **points**: [`Vector3`](Vector3.md)[]

Defined in: [src/core/tree/quad/QuadAABB.ts:19](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L19)

## Accessors

### radius

#### Get Signature

> **get** **radius**(): `number`

Defined in: [src/core/tree/quad/QuadAABB.ts:91](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L91)

##### Returns

`number`

***

### sideX

#### Get Signature

> **get** **sideX**(): `number`

Defined in: [src/core/tree/quad/QuadAABB.ts:95](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L95)

##### Returns

`number`

***

### sideY

#### Get Signature

> **get** **sideY**(): `number`

Defined in: [src/core/tree/quad/QuadAABB.ts:99](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L99)

##### Returns

`number`

***

### centreX

#### Get Signature

> **get** **centreX**(): `number`

Defined in: [src/core/tree/quad/QuadAABB.ts:103](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L103)

##### Returns

`number`

***

### centreY

#### Get Signature

> **get** **centreY**(): `number`

Defined in: [src/core/tree/quad/QuadAABB.ts:107](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L107)

##### Returns

`number`

## Methods

### setAABox()

> **setAABox**(`cx`, `cy`, `sideX`, `sideY`): `void`

Defined in: [src/core/tree/quad/QuadAABB.ts:32](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L32)

#### Parameters

##### cx

`number`

##### cy

`number`

##### sideX

`number`

##### sideY

`number`

#### Returns

`void`

***

### setOffset()

> **setOffset**(`vec`): `void`

Defined in: [src/core/tree/quad/QuadAABB.ts:41](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L41)

#### Parameters

##### vec

[`Vector3`](Vector3.md)

#### Returns

`void`

***

### setContainRect()

> **setContainRect**(`minX`, `minY`, `maxX`, `maxY`): `void`

Defined in: [src/core/tree/quad/QuadAABB.ts:52](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L52)

#### Parameters

##### minX

`number`

##### minY

`number`

##### maxX

`number`

##### maxY

`number`

#### Returns

`void`

***

### clear()

> **clear**(): `void`

Defined in: [src/core/tree/quad/QuadAABB.ts:59](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L59)

#### Returns

`void`

***

### addPoint()

> **addPoint**(`pos`): `void`

Defined in: [src/core/tree/quad/QuadAABB.ts:68](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L68)

#### Parameters

##### pos

[`Vector3`](Vector3.md)

#### Returns

`void`

***

### clone()

> **clone**(): `QuadAABB`

Defined in: [src/core/tree/quad/QuadAABB.ts:83](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L83)

#### Returns

`QuadAABB`

***

### overlapTest()

> **overlapTest**(`box`): `boolean`

Defined in: [src/core/tree/quad/QuadAABB.ts:111](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L111)

#### Parameters

##### box

`QuadAABB`

#### Returns

`boolean`

***

### isPointInside()

> **isPointInside**(`pos`): `boolean`

Defined in: [src/core/tree/quad/QuadAABB.ts:119](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L119)

#### Parameters

##### pos

[`Vector3`](Vector3.md)

#### Returns

`boolean`

***

### isIntersectLineSegment()

> **isIntersectLineSegment**(`p1x`, `p1y`, `p2x`, `p2y`): `boolean`

Defined in: [src/core/tree/quad/QuadAABB.ts:126](https://github.com/orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L126)

#### Parameters

##### p1x

`number`

##### p1y

`number`

##### p2x

`number`

##### p2y

`number`

#### Returns

`boolean`
