# Class: ParticleOverLifeRotationModule

Particle module of rotation over life time

## Hierarchy

- `ParticleModuleBase`

  ↳ **`ParticleOverLifeRotationModule`**

## Table of contents

### Constructors

- [constructor](ParticleOverLifeRotationModule.md#constructor)

### Properties

- [rotationSegments](ParticleOverLifeRotationModule.md#rotationsegments)

### Accessors

- [needReset](ParticleOverLifeRotationModule.md#needreset)

### Methods

- [setSimulator](ParticleOverLifeRotationModule.md#setsimulator)
- [calculateParticle](ParticleOverLifeRotationModule.md#calculateparticle)
- [generateParticleModuleData](ParticleOverLifeRotationModule.md#generateparticlemoduledata)

## Constructors

### constructor

• **new ParticleOverLifeRotationModule**()

#### Inherited from

ParticleModuleBase.constructor

## Properties

### rotationSegments

• **rotationSegments**: `Vector4`[]

Describe the rotation of particles from birth to end

#### Defined in

[packages/particle/module/stand/ParticleOverLifeRotationModule.ts:15](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeRotationModule.ts#L15)

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

Genarate particle rotation module with type over life time

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

[packages/particle/module/stand/ParticleOverLifeRotationModule.ts:22](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeRotationModule.ts#L22)
