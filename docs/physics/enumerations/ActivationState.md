[**@orillusion/physics**](../README.md)

***

# Enumeration: ActivationState

Defined in: [packages/physics/rigidbody/RigidbodyEnum.ts:58](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L58)

Activation states

## Enumeration Members

### ACTIVE\_TAG

> **ACTIVE\_TAG**: `1`

Defined in: [packages/physics/rigidbody/RigidbodyEnum.ts:62](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L62)

The object is active and will be processed by the simulation.

***

### ISLAND\_SLEEPING

> **ISLAND\_SLEEPING**: `2`

Defined in: [packages/physics/rigidbody/RigidbodyEnum.ts:66](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L66)

The object is inactive but may be activated if other active objects collide with it.

***

### WANTS\_DEACTIVATION

> **WANTS\_DEACTIVATION**: `3`

Defined in: [packages/physics/rigidbody/RigidbodyEnum.ts:70](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L70)

The object is requesting to be deactivated in the next simulation step. If there is no further interaction, the object will enter a sleeping state.

***

### DISABLE\_DEACTIVATION

> **DISABLE\_DEACTIVATION**: `4`

Defined in: [packages/physics/rigidbody/RigidbodyEnum.ts:74](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L74)

Disables automatic sleeping. The object will continue to be simulated even if it is stationary.

***

### DISABLE\_SIMULATION

> **DISABLE\_SIMULATION**: `5`

Defined in: [packages/physics/rigidbody/RigidbodyEnum.ts:78](https://github.com/orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L78)

The object will not be simulated by the physics engine, whether dynamic or colliding, but can be moved or manipulated programmatically.
