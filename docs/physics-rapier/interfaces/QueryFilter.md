[**@orillusion/physics-rapier**](../README.md)

***

# Interface: QueryFilter

Defined in: [packages/physics-rapier/query/PhysicsQuery.ts:6](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/query/PhysicsQuery.ts#L6)

## Properties

### maxDistance?

> `optional` **maxDistance?**: `number`

Defined in: [packages/physics-rapier/query/PhysicsQuery.ts:8](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/query/PhysicsQuery.ts#L8)

Maximum hit distance / time-of-impact. Default Infinity-ish (1e6).

***

### solid?

> `optional` **solid?**: `boolean`

Defined in: [packages/physics-rapier/query/PhysicsQuery.ts:10](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/query/PhysicsQuery.ts#L10)

Whether the ray treats colliders as solid (hits start-inside as t=0).

***

### excludeRigidbody?

> `optional` **excludeRigidbody?**: [`Rigidbody`](../classes/Rigidbody.md)

Defined in: [packages/physics-rapier/query/PhysicsQuery.ts:12](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/query/PhysicsQuery.ts#L12)

Skip a specific Rigidbody (e.g. the caster).

***

### excludeCollider?

> `optional` **excludeCollider?**: `Collider`

Defined in: [packages/physics-rapier/query/PhysicsQuery.ts:14](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/query/PhysicsQuery.ts#L14)

Skip a specific Rapier collider.

***

### excludeSensors?

> `optional` **excludeSensors?**: `boolean`

Defined in: [packages/physics-rapier/query/PhysicsQuery.ts:16](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/query/PhysicsQuery.ts#L16)

Ignore sensors.
