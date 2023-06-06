# Class: Plane

Plane mathematics class

### Constructors

- [constructor](Plane.md#constructor)

### Properties

- [point](Plane.md#point)
- [normal](Plane.md#normal)

### Methods

- [clone](Plane.md#clone)
- [intersectsLine](Plane.md#intersectsline)
- [intersectsRay](Plane.md#intersectsray)

## Constructors

### constructor

• **new Plane**(`pos`, `normal`)

Constructs a new plane object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) | Plane position |
| `normal` | [`Vector3`](Vector3.md) | Plane normal quantity |

#### Defined in

[src/math/Plane.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/math/Plane.ts#L29)

## Properties

### point

• **point**: [`Vector3`](Vector3.md)

Center position of plane

#### Defined in

[src/math/Plane.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/math/Plane.ts#L12)

___

### normal

• **normal**: [`Vector3`](Vector3.md) = `Vector3.UP`

Plane normal vector

#### Defined in

[src/math/Plane.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/math/Plane.ts#L17)

## Methods

### clone

▸ **clone**(): [`Plane`](Plane.md)

Clones the current plane object

#### Returns

[`Plane`](Plane.md)

New plane object

#### Defined in

[src/math/Plane.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/math/Plane.ts#L38)

___

### intersectsLine

▸ **intersectsLine**(`start`, `end`, `point`): `boolean`

Determine whether the plane intersects a line segment and calculate the intersection point

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | [`Vector3`](Vector3.md) | Starting point of line segment |
| `end` | [`Vector3`](Vector3.md) | End point of line segment |
| `point` | [`Vector3`](Vector3.md) | Point of output intersection |

#### Returns

`boolean`

Returns whether it intersects

#### Defined in

[src/math/Plane.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/math/Plane.ts#L50)

___

### intersectsRay

▸ **intersectsRay**(`ray`, `targetPoint?`): `boolean`

Determine whether the plane intersects a ray and calculate the intersection point

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ray` | [`Ray`](Ray.md) | Ray of input |
| `targetPoint?` | [`Vector3`](Vector3.md) | - |

#### Returns

`boolean`

Returns whether it intersects

#### Defined in

[src/math/Plane.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/math/Plane.ts#L70)
