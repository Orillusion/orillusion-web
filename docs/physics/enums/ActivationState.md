# Enumeration: ActivationState

Activation states

### Enumeration Members

- [ACTIVE\_TAG](ActivationState.md#active_tag)
- [ISLAND\_SLEEPING](ActivationState.md#island_sleeping)
- [WANTS\_DEACTIVATION](ActivationState.md#wants_deactivation)
- [DISABLE\_DEACTIVATION](ActivationState.md#disable_deactivation)
- [DISABLE\_SIMULATION](ActivationState.md#disable_simulation)

## Enumeration Members

### ACTIVE\_TAG

• **ACTIVE\_TAG** = ``1``

The object is active and will be processed by the simulation.

#### Defined in

[packages/physics/rigidbody/RigidbodyEnum.ts:62](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L62)

___

### ISLAND\_SLEEPING

• **ISLAND\_SLEEPING** = ``2``

The object is inactive but may be activated if other active objects collide with it.

#### Defined in

[packages/physics/rigidbody/RigidbodyEnum.ts:66](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L66)

___

### WANTS\_DEACTIVATION

• **WANTS\_DEACTIVATION** = ``3``

The object is requesting to be deactivated in the next simulation step. If there is no further interaction, the object will enter a sleeping state.

#### Defined in

[packages/physics/rigidbody/RigidbodyEnum.ts:70](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L70)

___

### DISABLE\_DEACTIVATION

• **DISABLE\_DEACTIVATION** = ``4``

Disables automatic sleeping. The object will continue to be simulated even if it is stationary.

#### Defined in

[packages/physics/rigidbody/RigidbodyEnum.ts:74](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L74)

___

### DISABLE\_SIMULATION

• **DISABLE\_SIMULATION** = ``5``

The object will not be simulated by the physics engine, whether dynamic or colliding, but can be moved or manipulated programmatically.

#### Defined in

[packages/physics/rigidbody/RigidbodyEnum.ts:78](https://github.com/Orillusion/orillusion/blob/main/packages/physics/rigidbody/RigidbodyEnum.ts#L78)
