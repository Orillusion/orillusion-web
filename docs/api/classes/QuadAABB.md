# Class: QuadAABB

### Constructors

- [constructor](QuadAABB.md#constructor)

### Properties

- [minPosX](QuadAABB.md#minposx)
- [minPosY](QuadAABB.md#minposy)
- [maxPosX](QuadAABB.md#maxposx)
- [maxPosY](QuadAABB.md#maxposy)
- [testID](QuadAABB.md#testid)
- [points](QuadAABB.md#points)

### Accessors

- [radius](QuadAABB.md#radius)
- [sideX](QuadAABB.md#sidex)
- [sideY](QuadAABB.md#sidey)
- [centreX](QuadAABB.md#centrex)
- [centreY](QuadAABB.md#centrey)

### Methods

- [setAABox](QuadAABB.md#setaabox)
- [setOffset](QuadAABB.md#setoffset)
- [setContainRect](QuadAABB.md#setcontainrect)
- [clear](QuadAABB.md#clear)
- [addPoint](QuadAABB.md#addpoint)
- [clone](QuadAABB.md#clone)
- [overlapTest](QuadAABB.md#overlaptest)
- [isPointInside](QuadAABB.md#ispointinside)
- [isIntersectLineSegment](QuadAABB.md#isintersectlinesegment)

## Constructors

### constructor

• **new QuadAABB**(): [`QuadAABB`](QuadAABB.md)

#### Returns

[`QuadAABB`](QuadAABB.md)

#### Defined in

[src/core/tree/quad/QuadAABB.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L21)

## Properties

### minPosX

• **minPosX**: `number` = `0`

#### Defined in

[src/core/tree/quad/QuadAABB.ts:5](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L5)

___

### minPosY

• **minPosY**: `number` = `0`

#### Defined in

[src/core/tree/quad/QuadAABB.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L7)

___

### maxPosX

• **maxPosX**: `number` = `0`

#### Defined in

[src/core/tree/quad/QuadAABB.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L9)

___

### maxPosY

• **maxPosY**: `number` = `0`

#### Defined in

[src/core/tree/quad/QuadAABB.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L11)

___

### testID

• **testID**: `number` = `0`

#### Defined in

[src/core/tree/quad/QuadAABB.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L13)

___

### points

• **points**: [`Vector3`](Vector3.md)[]

#### Defined in

[src/core/tree/quad/QuadAABB.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L15)

## Accessors

### radius

• `get` **radius**(): `number`

#### Returns

`number`

#### Defined in

[src/core/tree/quad/QuadAABB.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L87)

___

### sideX

• `get` **sideX**(): `number`

#### Returns

`number`

#### Defined in

[src/core/tree/quad/QuadAABB.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L91)

___

### sideY

• `get` **sideY**(): `number`

#### Returns

`number`

#### Defined in

[src/core/tree/quad/QuadAABB.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L95)

___

### centreX

• `get` **centreX**(): `number`

#### Returns

`number`

#### Defined in

[src/core/tree/quad/QuadAABB.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L99)

___

### centreY

• `get` **centreY**(): `number`

#### Returns

`number`

#### Defined in

[src/core/tree/quad/QuadAABB.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L103)

## Methods

### setAABox

▸ **setAABox**(`cx`, `cy`, `sideX`, `sideY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cx` | `number` |
| `cy` | `number` |
| `sideX` | `number` |
| `sideY` | `number` |

#### Returns

`void`

#### Defined in

[src/core/tree/quad/QuadAABB.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L28)

___

### setOffset

▸ **setOffset**(`vec`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/core/tree/quad/QuadAABB.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L37)

___

### setContainRect

▸ **setContainRect**(`minX`, `minY`, `maxX`, `maxY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `minX` | `number` |
| `minY` | `number` |
| `maxX` | `number` |
| `maxY` | `number` |

#### Returns

`void`

#### Defined in

[src/core/tree/quad/QuadAABB.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L48)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/core/tree/quad/QuadAABB.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L55)

___

### addPoint

▸ **addPoint**(`pos`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/core/tree/quad/QuadAABB.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L64)

___

### clone

▸ **clone**(): [`QuadAABB`](QuadAABB.md)

#### Returns

[`QuadAABB`](QuadAABB.md)

#### Defined in

[src/core/tree/quad/QuadAABB.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L79)

___

### overlapTest

▸ **overlapTest**(`box`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`QuadAABB`](QuadAABB.md) |

#### Returns

`boolean`

#### Defined in

[src/core/tree/quad/QuadAABB.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L107)

___

### isPointInside

▸ **isPointInside**(`pos`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) |

#### Returns

`boolean`

#### Defined in

[src/core/tree/quad/QuadAABB.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L115)

___

### isIntersectLineSegment

▸ **isIntersectLineSegment**(`p1x`, `p1y`, `p2x`, `p2y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1x` | `number` |
| `p1y` | `number` |
| `p2x` | `number` |
| `p2y` | `number` |

#### Returns

`boolean`

#### Defined in

[src/core/tree/quad/QuadAABB.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/core/tree/quad/QuadAABB.ts#L122)
