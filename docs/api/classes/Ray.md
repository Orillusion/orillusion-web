# Class: Ray

Ray

### Constructors

- [constructor](Ray.md#constructor)

### Properties

- [origin](Ray.md#origin)
- [length](Ray.md#length)

### Accessors

- [direction](Ray.md#direction)

### Methods

- [clone](Ray.md#clone)
- [intersectBox](Ray.md#intersectbox)
- [pointAt](Ray.md#pointat)
- [copy](Ray.md#copy)
- [setApproxDirection](Ray.md#setapproxdirection)
- [setOrigin](Ray.md#setorigin)
- [getOrigin](Ray.md#getorigin)
- [getPoint](Ray.md#getpoint)
- [sqrDistToPoint](Ray.md#sqrdisttopoint)
- [applyMatrix](Ray.md#applymatrix)
- [pointInTriangle](Ray.md#pointintriangle)
- [intersectTriangle](Ray.md#intersecttriangle)
- [intersectSphere](Ray.md#intersectsphere)
- [intersectionSegment](Ray.md#intersectionsegment)

## Constructors

### constructor

• **new Ray**(`origin?`, `dir?`)

Build a new ray object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `origin?` | [`Vector3`](Vector3.md) | Ray starting point |
| `dir?` | [`Vector3`](Vector3.md) | Ray direction |

#### Defined in

[src/math/Ray.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/math/Ray.ts#L34)

## Properties

### origin

• **origin**: [`Vector3`](Vector3.md)

Ray starting point

#### Defined in

[src/math/Ray.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/math/Ray.ts#L16)

___

### length

• **length**: `number` = `Number.MAX_VALUE`

length

#### Defined in

[src/math/Ray.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/math/Ray.ts#L21)

## Accessors

### direction

• `get` **direction**(): [`Vector3`](Vector3.md)

Ray direction

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Ray.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/math/Ray.ts#L43)

• `set` **direction**(`dir`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/math/Ray.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/math/Ray.ts#L47)

## Methods

### clone

▸ **clone**(): [`Ray`](Ray.md)

Clone a new Ray object

#### Returns

[`Ray`](Ray.md)

#### Defined in

[src/math/Ray.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/math/Ray.ts#L56)

___

### intersectBox

▸ **intersectBox**(`box`, `target?`): [`Vector3`](Vector3.md)

Determine whether it intersects a bounding box

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `box` | `IBound` | bounding box |
| `target?` | [`Vector3`](Vector3.md) | - |

#### Returns

[`Vector3`](Vector3.md)

whether intersect

#### Defined in

[src/math/Ray.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/math/Ray.ts#L69)

___

### pointAt

▸ **pointAt**(`t`, `target?`): [`Vector3`](Vector3.md)

Calculate a point on the ray

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `number` | Length scalar |
| `target?` | [`Vector3`](Vector3.md) | output target |

#### Returns

[`Vector3`](Vector3.md)

result

#### Defined in

[src/math/Ray.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/math/Ray.ts#L120)

___

### copy

▸ **copy**(`src`): [`Ray`](Ray.md)

Sets the ray to be a copy of the original ray

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | [`Ray`](Ray.md) | Ray object source |

#### Returns

[`Ray`](Ray.md)

New ray object

#### Defined in

[src/math/Ray.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/math/Ray.ts#L133)

___

### setApproxDirection

▸ **setApproxDirection**(`dir`): `void`

Fast to the approximate ray direction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dir` | [`Vector3`](Vector3.md) | direction |

#### Returns

`void`

#### Defined in

[src/math/Ray.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/math/Ray.ts#L145)

___

### setOrigin

▸ **setOrigin**(`origin`): `void`

Set ray origin

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `origin` | [`Vector3`](Vector3.md) | ray origin |

#### Returns

`void`

#### Defined in

[src/math/Ray.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/math/Ray.ts#L153)

___

### getOrigin

▸ **getOrigin**(): [`Vector3`](Vector3.md)

Get ray origin

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Ray.ts:160](https://github.com/Orillusion/orillusion/blob/main/src/math/Ray.ts#L160)

___

### getPoint

▸ **getPoint**(`t`): [`Vector3`](Vector3.md)

Gets the point at the specified position on the ray

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `number` | Length position |

#### Returns

[`Vector3`](Vector3.md)

Returns a point at the specified location

#### Defined in

[src/math/Ray.ts:169](https://github.com/Orillusion/orillusion/blob/main/src/math/Ray.ts#L169)

___

### sqrDistToPoint

▸ **sqrDistToPoint**(`P`): `number`

Calculate the distance from a point

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Vector3`](Vector3.md) | Specify Point |

#### Returns

`number`

result

#### Defined in

[src/math/Ray.ts:179](https://github.com/Orillusion/orillusion/blob/main/src/math/Ray.ts#L179)

___

### applyMatrix

▸ **applyMatrix**(`mat4`): `void`

Applied matrix transformation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mat4` | [`Matrix4`](Matrix4.md) | matrix |

#### Returns

`void`

#### Defined in

[src/math/Ray.ts:195](https://github.com/Orillusion/orillusion/blob/main/src/math/Ray.ts#L195)

___

### pointInTriangle

▸ **pointInTriangle**(`P`, `A`, `B`, `C`): `boolean`

Calculates whether a specified point is inside a triangle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `P` | [`Vector3`](Vector3.md) | point |
| `A` | [`Vector3`](Vector3.md) | Triangle vertex 1 |
| `B` | [`Vector3`](Vector3.md) | Triangle vertex 2 |
| `C` | [`Vector3`](Vector3.md) | Triangle vertex 3 |

#### Returns

`boolean`

whether it is inside a triangle

#### Defined in

[src/math/Ray.ts:212](https://github.com/Orillusion/orillusion/blob/main/src/math/Ray.ts#L212)

___

### intersectTriangle

▸ **intersectTriangle**(`orig`, `dir`, `face`): [`Vector3`](Vector3.md)

Determine whether a ray intersects a triangle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orig` | [`Vector3`](Vector3.md) | Ray starting point |
| `dir` | [`Vector3`](Vector3.md) | Ray direction |
| `face` | `Triangle` | triangle |

#### Returns

[`Vector3`](Vector3.md)

point of intersection

#### Defined in

[src/math/Ray.ts:257](https://github.com/Orillusion/orillusion/blob/main/src/math/Ray.ts#L257)

___

### intersectSphere

▸ **intersectSphere**(`o`, `dir`, `center`, `radius`): [`Vector3`](Vector3.md)

Determine whether a ray intersects the sphere

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | [`Vector3`](Vector3.md) | Ray starting point |
| `dir` | [`Vector3`](Vector3.md) | Ray direction |
| `center` | [`Vector3`](Vector3.md) | Sphere center |
| `radius` | `number` | radius of sphericity |

#### Returns

[`Vector3`](Vector3.md)

point of intersection

#### Defined in

[src/math/Ray.ts:320](https://github.com/Orillusion/orillusion/blob/main/src/math/Ray.ts#L320)

___

### intersectionSegment

▸ **intersectionSegment**(`sega`, `segb`, `threshold`): `Object`

A test of the intersection between a ray and 
a given line segment within a given tolerance (threshold)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sega` | [`Vector3`](Vector3.md) | The first point of a line segment used to test the intersection |
| `segb` | [`Vector3`](Vector3.md) | The second point of a line segment used to test the intersection |
| `threshold` | `number` | Margin, if the ray does not intersect the line segment but is close to the given threshold, the intersection is successful |

#### Returns

`Object`

If there is an intersection, then the distance from the ray origin to the intersection, if there is no intersection, is -1

| Name | Type |
| :------ | :------ |
| `out` | [`Vector3`](Vector3.md) |
| `length` | `number` |

#### Defined in

[src/math/Ray.ts:352](https://github.com/Orillusion/orillusion/blob/main/src/math/Ray.ts#L352)
