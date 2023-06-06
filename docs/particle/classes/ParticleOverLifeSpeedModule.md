# Class: ParticleOverLifeSpeedModule

Particle module of move speed over life time

## Hierarchy

- `ParticleModuleBase`

  ↳ **`ParticleOverLifeSpeedModule`**

## Table of contents

### Constructors

- [constructor](ParticleOverLifeSpeedModule.md#constructor)

### Properties

- [speedSegments](ParticleOverLifeSpeedModule.md#speedsegments)

### Accessors

- [needReset](ParticleOverLifeSpeedModule.md#needreset)

### Methods

- [setSimulator](ParticleOverLifeSpeedModule.md#setsimulator)
- [calculateParticle](ParticleOverLifeSpeedModule.md#calculateparticle)
- [generateParticleModuleData](ParticleOverLifeSpeedModule.md#generateparticlemoduledata)

## Constructors

### constructor

• **new ParticleOverLifeSpeedModule**()

#### Inherited from

ParticleModuleBase.constructor

## Properties

### speedSegments

• **speedSegments**: `Vector4`[]

Describe the velocity change of particles from birth to end

#### Defined in

[packages/particle/module/stand/ParticleOverLifeSpeedModule.ts:15](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeSpeedModule.ts#L15)

## Accessors

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

___

### generateParticleModuleData

▸ **generateParticleModuleData**(`globalMemory`, `localMemory`): `void`

Genarate particle move speed module with type over life time

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

[packages/particle/module/stand/ParticleOverLifeSpeedModule.ts:24](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeSpeedModule.ts#L24)
