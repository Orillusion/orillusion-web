[**@orillusion/physics-rapier**](../README.md)

***

# Enumeration: BodyType

Defined in: [packages/physics-rapier/rigidbody/RigidbodyEnum.ts:4](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/RigidbodyEnum.ts#L4)

Rigid body kind. Mirrors Rapier's RigidBodyType but exposes a simpler enum.

## Enumeration Members

### Dynamic

> **Dynamic**: `0`

Defined in: [packages/physics-rapier/rigidbody/RigidbodyEnum.ts:6](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/RigidbodyEnum.ts#L6)

Affected by forces and collisions.

***

### Static

> **Static**: `1`

Defined in: [packages/physics-rapier/rigidbody/RigidbodyEnum.ts:8](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/RigidbodyEnum.ts#L8)

Immovable. Equivalent to ammo plugin's `mass = 0`.

***

### KinematicPosition

> **KinematicPosition**: `2`

Defined in: [packages/physics-rapier/rigidbody/RigidbodyEnum.ts:10](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/RigidbodyEnum.ts#L10)

Driven by user-set transform; velocity is auto-computed from delta.

***

### KinematicVelocity

> **KinematicVelocity**: `3`

Defined in: [packages/physics-rapier/rigidbody/RigidbodyEnum.ts:12](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/rigidbody/RigidbodyEnum.ts#L12)

Driven by user-set velocity.
