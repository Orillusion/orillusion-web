# Class: ParticleGravityModifierModule

Particle module of gravity modifier

## Hierarchy

- `ParticleModuleBase`

  ↳ **`ParticleGravityModifierModule`**

## Table of contents

### Constructors

- [constructor](ParticleGravityModifierModule.md#constructor)

### Accessors

- [gravity](ParticleGravityModifierModule.md#gravity)
- [needReset](ParticleGravityModifierModule.md#needreset)

### Methods

- [generateParticleModuleData](ParticleGravityModifierModule.md#generateparticlemoduledata)
- [setSimulator](ParticleGravityModifierModule.md#setsimulator)
- [calculateParticle](ParticleGravityModifierModule.md#calculateparticle)

## Constructors

### constructor

• **new ParticleGravityModifierModule**()

#### Inherited from

ParticleModuleBase.constructor

## Accessors

### gravity

• `get` **gravity**(): `Vector3`

Get gravity

#### Returns

`Vector3`

#### Defined in

[packages/particle/module/stand/ParticleGravityModifierModule.ts:24](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleGravityModifierModule.ts#L24)

• `set` **gravity**(`value`): `void`

Set gravity

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Vector3` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleGravityModifierModule.ts:15](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleGravityModifierModule.ts#L15)

___

### needReset

• `get` **needReset**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ParticleModuleBase.needReset

#### Defined in

[packages/particle/module/stand/ParticleModuleBase.ts:21](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleModuleBase.ts#L21)

• `set` **needReset**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

#### Inherited from

ParticleModuleBase.needReset

#### Defined in

[packages/particle/module/stand/ParticleModuleBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleModuleBase.ts#L17)

## Methods

### generateParticleModuleData

▸ **generateParticleModuleData**(`globalMemory`, `localMemory`): `void`

Genarate particle gravity module

#### Parameters

| Name | Type |
| :------ | :------ |
| `globalMemory` | `ParticleGlobalMemory` |
| `localMemory` | `ParticleLocalMemory` |

#### Returns

`void`

#### Overrides

ParticleModuleBase.generateParticleModuleData

#### Defined in

[packages/particle/module/stand/ParticleGravityModifierModule.ts:36](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleGravityModifierModule.ts#L36)

___

### setSimulator

▸ **setSimulator**(`simulator`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `simulator` | `ParticleSimulator` |

#### Returns

`void`

#### Inherited from

ParticleModuleBase.setSimulator

#### Defined in

[packages/particle/module/stand/ParticleModuleBase.ts:25](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleModuleBase.ts#L25)

___

### calculateParticle

▸ **calculateParticle**(`globalMemory`, `localMemory`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `globalMemory` | `ParticleGlobalMemory` |
| `localMemory` | `ParticleLocalMemory` |

#### Returns

`void`

#### Inherited from

ParticleModuleBase.calculateParticle

#### Defined in

[packages/particle/module/stand/ParticleModuleBase.ts:29](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleModuleBase.ts#L29)
