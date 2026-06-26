[**@orillusion/physics-rapier**](../README.md)

***

# Class: PhysicsQuery

Defined in: [packages/physics-rapier/query/PhysicsQuery.ts:44](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/query/PhysicsQuery.ts#L44)

Static physics queries — Rapier-backed.

Replaces the missing public query API in `@orillusion/physics`.

## Constructors

### Constructor

> **new PhysicsQuery**(): `PhysicsQuery`

#### Returns

`PhysicsQuery`

## Methods

### raycast()

> `static` **raycast**(`origin`, `direction`, `filter?`): [`RaycastHit`](../interfaces/RaycastHit.md)

Defined in: [packages/physics-rapier/query/PhysicsQuery.ts:46](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/query/PhysicsQuery.ts#L46)

Cast a ray and return the closest hit, or `null`.

#### Parameters

##### origin

`Vector3`

##### direction

`Vector3`

##### filter?

[`QueryFilter`](../interfaces/QueryFilter.md) = `{}`

#### Returns

[`RaycastHit`](../interfaces/RaycastHit.md)

***

### raycastAll()

> `static` **raycastAll**(`origin`, `direction`, `filter?`): [`RaycastHit`](../interfaces/RaycastHit.md)[]

Defined in: [packages/physics-rapier/query/PhysicsQuery.ts:75](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/query/PhysicsQuery.ts#L75)

Collect every collider intersected by the ray, up to `maxDistance`.

#### Parameters

##### origin

`Vector3`

##### direction

`Vector3`

##### filter?

[`QueryFilter`](../interfaces/QueryFilter.md) = `{}`

#### Returns

[`RaycastHit`](../interfaces/RaycastHit.md)[]

***

### sweep()

> `static` **sweep**(`shape`, `position`, `rotation`, `velocity`, `filter?`): [`ShapeHit`](../interfaces/ShapeHit.md)

Defined in: [packages/physics-rapier/query/PhysicsQuery.ts:106](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/query/PhysicsQuery.ts#L106)

Sweep a shape along `velocity` for `maxDistance`, return first hit or null.

#### Parameters

##### shape

`ColliderDesc`

##### position

`Vector3`

##### rotation

`Quaternion`

##### velocity

`Vector3`

##### filter?

[`QueryFilter`](../interfaces/QueryFilter.md) = `{}`

#### Returns

[`ShapeHit`](../interfaces/ShapeHit.md)

***

### overlap()

> `static` **overlap**(`shape`, `position`, `rotation`, `filter?`): [`Rigidbody`](Rigidbody.md)[]

Defined in: [packages/physics-rapier/query/PhysicsQuery.ts:139](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/query/PhysicsQuery.ts#L139)

Return every collider whose AABB intersects the given shape's AABB.

#### Parameters

##### shape

`ColliderDesc`

##### position

`Vector3`

##### rotation

`Quaternion`

##### filter?

[`QueryFilter`](../interfaces/QueryFilter.md) = `{}`

#### Returns

[`Rigidbody`](Rigidbody.md)[]

***

### closestPoint()

> `static` **closestPoint**(`point`, `filter?`): `object`

Defined in: [packages/physics-rapier/query/PhysicsQuery.ts:165](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/query/PhysicsQuery.ts#L165)

Project a point onto the closest collider; returns `null` if none.

#### Parameters

##### point

`Vector3`

##### filter?

[`QueryFilter`](../interfaces/QueryFilter.md) = `{}`

#### Returns

`object`

##### rigidbody

> **rigidbody**: [`Rigidbody`](Rigidbody.md)

##### collider

> **collider**: `Collider`

##### point

> **point**: `Vector3`

##### isInside

> **isInside**: `boolean`
