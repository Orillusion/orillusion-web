[**@orillusion/physics-rapier**](../README.md)

***

# Interface: RaycastHit

Defined in: [packages/physics-rapier/query/PhysicsQuery.ts:19](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/query/PhysicsQuery.ts#L19)

## Properties

### rigidbody

> **rigidbody**: [`Rigidbody`](../classes/Rigidbody.md)

Defined in: [packages/physics-rapier/query/PhysicsQuery.ts:20](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/query/PhysicsQuery.ts#L20)

***

### collider

> **collider**: `Collider`

Defined in: [packages/physics-rapier/query/PhysicsQuery.ts:21](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/query/PhysicsQuery.ts#L21)

***

### point

> **point**: `Vector3`

Defined in: [packages/physics-rapier/query/PhysicsQuery.ts:23](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/query/PhysicsQuery.ts#L23)

World-space hit point.

***

### normal

> **normal**: `Vector3`

Defined in: [packages/physics-rapier/query/PhysicsQuery.ts:25](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/query/PhysicsQuery.ts#L25)

World-space surface normal at the hit.

***

### toi

> **toi**: `number`

Defined in: [packages/physics-rapier/query/PhysicsQuery.ts:27](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/query/PhysicsQuery.ts#L27)

Time-of-impact along the ray (= distance for unit-length direction).
