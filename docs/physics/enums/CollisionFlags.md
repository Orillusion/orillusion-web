# Enumeration: CollisionFlags

Collision flags

### Enumeration Members

- [DEFAULT](CollisionFlags.md#default)
- [STATIC\_OBJECT](CollisionFlags.md#static_object)
- [KINEMATIC\_OBJECT](CollisionFlags.md#kinematic_object)
- [NO\_CONTACT\_RESPONSE](CollisionFlags.md#no_contact_response)
- [CUSTOM\_MATERIAL\_CALLBACK](CollisionFlags.md#custom_material_callback)
- [CHARACTER\_OBJECT](CollisionFlags.md#character_object)
- [DISABLE\_VISUALIZE\_OBJECT](CollisionFlags.md#disable_visualize_object)
- [DISABLE\_SPU\_COLLISION\_PROCESSING](CollisionFlags.md#disable_spu_collision_processing)
- [HAS\_CONTACT\_STIFFNESS\_DAMPING](CollisionFlags.md#has_contact_stiffness_damping)
- [HAS\_CUSTOM\_DEBUG\_RENDERING\_COLOR](CollisionFlags.md#has_custom_debug_rendering_color)
- [HAS\_FRICTION\_ANCHOR](CollisionFlags.md#has_friction_anchor)
- [HAS\_COLLISION\_SOUND\_TRIGGER](CollisionFlags.md#has_collision_sound_trigger)

## Enumeration Members

### DEFAULT

• **DEFAULT** = ``0``

Default flag for dynamic rigid bodies.

#### Defined in

[packages/physics/rigidbody/RigidbodyEnum.ts:8](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L8)

___

### STATIC\_OBJECT

• **STATIC\_OBJECT** = ``1``

Used for static objects. These objects do not move but can be collided with by other objects.

#### Defined in

[packages/physics/rigidbody/RigidbodyEnum.ts:12](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L12)

___

### KINEMATIC\_OBJECT

• **KINEMATIC\_OBJECT** = ``2``

Used for kinematic objects. These objects are not affected by physical forces (like gravity or collisions) but can be moved programmatically and affect dynamic objects they collide with.

#### Defined in

[packages/physics/rigidbody/RigidbodyEnum.ts:16](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L16)

___

### NO\_CONTACT\_RESPONSE

• **NO\_CONTACT\_RESPONSE** = ``4``

Objects with this flag do not participate in collision response but still trigger collision events.

#### Defined in

[packages/physics/rigidbody/RigidbodyEnum.ts:20](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L20)

___

### CUSTOM\_MATERIAL\_CALLBACK

• **CUSTOM\_MATERIAL\_CALLBACK** = ``8``

This flag indicates that the object will use a custom material interaction callback.

#### Defined in

[packages/physics/rigidbody/RigidbodyEnum.ts:24](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L24)

___

### CHARACTER\_OBJECT

• **CHARACTER\_OBJECT** = ``16``

Special flag for collision objects used by character controllers. This is typically used to optimize character collision handling in games.

#### Defined in

[packages/physics/rigidbody/RigidbodyEnum.ts:28](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L28)

___

### DISABLE\_VISUALIZE\_OBJECT

• **DISABLE\_VISUALIZE\_OBJECT** = ``32``

Prevents this object from being displayed in the physical debug view.

#### Defined in

[packages/physics/rigidbody/RigidbodyEnum.ts:32](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L32)

___

### DISABLE\_SPU\_COLLISION\_PROCESSING

• **DISABLE\_SPU\_COLLISION\_PROCESSING** = ``64``

Prevents this object’s collision from being processed on the auxiliary processing unit, optimizing performance on specific hardware platforms.

#### Defined in

[packages/physics/rigidbody/RigidbodyEnum.ts:36](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L36)

___

### HAS\_CONTACT\_STIFFNESS\_DAMPING

• **HAS\_CONTACT\_STIFFNESS\_DAMPING** = ``128``

Enables custom contact stiffness and damping settings for this object. This allows adjusting the physical response's stiffness and damping when handling collisions, used to simulate more complex physical interactions.

#### Defined in

[packages/physics/rigidbody/RigidbodyEnum.ts:40](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L40)

___

### HAS\_CUSTOM\_DEBUG\_RENDERING\_COLOR

• **HAS\_CUSTOM\_DEBUG\_RENDERING\_COLOR** = ``256``

Allows specifying a custom rendering color for this object in the physical debug view. This helps differentiate and identify specific physical objects during debugging.

#### Defined in

[packages/physics/rigidbody/RigidbodyEnum.ts:44](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L44)

___

### HAS\_FRICTION\_ANCHOR

• **HAS\_FRICTION\_ANCHOR** = ``512``

Enables friction anchors for this object. Friction anchors improve the friction effect on contact surfaces, typically used for vehicle tires to enhance grip on the ground and reduce sliding.

#### Defined in

[packages/physics/rigidbody/RigidbodyEnum.ts:48](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L48)

___

### HAS\_COLLISION\_SOUND\_TRIGGER

• **HAS\_COLLISION\_SOUND\_TRIGGER** = ``1024``

Triggers sound effects when this object collides. This flag can be used to configure sound feedback for specific collisions, enhancing the realism and immersion of the game or simulation environment.

#### Defined in

[packages/physics/rigidbody/RigidbodyEnum.ts:52](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L52)
