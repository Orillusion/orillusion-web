[**@orillusion/physics**](../README.md)

***

# Enumeration: CollisionFlags

Defined in: [packages/physics/rigidbody/RigidbodyEnum.ts:4](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L4)

Collision flags

## Enumeration Members

### DEFAULT

> **DEFAULT**: `0`

Defined in: [packages/physics/rigidbody/RigidbodyEnum.ts:8](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L8)

Default flag for dynamic rigid bodies.

***

### STATIC\_OBJECT

> **STATIC\_OBJECT**: `1`

Defined in: [packages/physics/rigidbody/RigidbodyEnum.ts:12](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L12)

Used for static objects. These objects do not move but can be collided with by other objects.

***

### KINEMATIC\_OBJECT

> **KINEMATIC\_OBJECT**: `2`

Defined in: [packages/physics/rigidbody/RigidbodyEnum.ts:16](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L16)

Used for kinematic objects. These objects are not affected by physical forces (like gravity or collisions) but can be moved programmatically and affect dynamic objects they collide with.

***

### NO\_CONTACT\_RESPONSE

> **NO\_CONTACT\_RESPONSE**: `4`

Defined in: [packages/physics/rigidbody/RigidbodyEnum.ts:20](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L20)

Objects with this flag do not participate in collision response but still trigger collision events.

***

### CUSTOM\_MATERIAL\_CALLBACK

> **CUSTOM\_MATERIAL\_CALLBACK**: `8`

Defined in: [packages/physics/rigidbody/RigidbodyEnum.ts:24](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L24)

This flag indicates that the object will use a custom material interaction callback.

***

### CHARACTER\_OBJECT

> **CHARACTER\_OBJECT**: `16`

Defined in: [packages/physics/rigidbody/RigidbodyEnum.ts:28](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L28)

Special flag for collision objects used by character controllers. This is typically used to optimize character collision handling in games.

***

### DISABLE\_VISUALIZE\_OBJECT

> **DISABLE\_VISUALIZE\_OBJECT**: `32`

Defined in: [packages/physics/rigidbody/RigidbodyEnum.ts:32](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L32)

Prevents this object from being displayed in the physical debug view.

***

### DISABLE\_SPU\_COLLISION\_PROCESSING

> **DISABLE\_SPU\_COLLISION\_PROCESSING**: `64`

Defined in: [packages/physics/rigidbody/RigidbodyEnum.ts:36](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L36)

Prevents this object’s collision from being processed on the auxiliary processing unit, optimizing performance on specific hardware platforms.

***

### HAS\_CONTACT\_STIFFNESS\_DAMPING

> **HAS\_CONTACT\_STIFFNESS\_DAMPING**: `128`

Defined in: [packages/physics/rigidbody/RigidbodyEnum.ts:40](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L40)

Enables custom contact stiffness and damping settings for this object. This allows adjusting the physical response's stiffness and damping when handling collisions, used to simulate more complex physical interactions.

***

### HAS\_CUSTOM\_DEBUG\_RENDERING\_COLOR

> **HAS\_CUSTOM\_DEBUG\_RENDERING\_COLOR**: `256`

Defined in: [packages/physics/rigidbody/RigidbodyEnum.ts:44](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L44)

Allows specifying a custom rendering color for this object in the physical debug view. This helps differentiate and identify specific physical objects during debugging.

***

### HAS\_FRICTION\_ANCHOR

> **HAS\_FRICTION\_ANCHOR**: `512`

Defined in: [packages/physics/rigidbody/RigidbodyEnum.ts:48](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L48)

Enables friction anchors for this object. Friction anchors improve the friction effect on contact surfaces, typically used for vehicle tires to enhance grip on the ground and reduce sliding.

***

### HAS\_COLLISION\_SOUND\_TRIGGER

> **HAS\_COLLISION\_SOUND\_TRIGGER**: `1024`

Defined in: [packages/physics/rigidbody/RigidbodyEnum.ts:52](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L52)

Triggers sound effects when this object collides. This flag can be used to configure sound feedback for specific collisions, enhancing the realism and immersion of the game or simulation environment.
