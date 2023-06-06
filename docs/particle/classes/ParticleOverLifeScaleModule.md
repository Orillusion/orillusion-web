# Class: ParticleOverLifeScaleModule

Particle module of size scale over life time

## Hierarchy

- `ParticleModuleBase`

  ↳ **`ParticleOverLifeScaleModule`**

## Table of contents

### Constructors

- [constructor](ParticleOverLifeScaleModule.md#constructor)

### Properties

- [scaleSegments](ParticleOverLifeScaleModule.md#scalesegments)

### Accessors

- [needReset](ParticleOverLifeScaleModule.md#needreset)

### Methods

- [setSimulator](ParticleOverLifeScaleModule.md#setsimulator)
- [calculateParticle](ParticleOverLifeScaleModule.md#calculateparticle)
- [generateParticleModuleData](ParticleOverLifeScaleModule.md#generateparticlemoduledata)

## Constructors

### constructor

• **new ParticleOverLifeScaleModule**()

#### Inherited from

ParticleModuleBase.constructor

## Properties

### scaleSegments

• **scaleSegments**: `Vector4`[]

Describe the size scale change of particles from birth to end

#### Defined in

[packages/particle/module/stand/ParticleOverLifeScaleModule.ts:14](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeScaleModule.ts#L14)

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

Genarate particle size scale module with type over life time

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

[packages/particle/module/stand/ParticleOverLifeScaleModule.ts:21](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeScaleModule.ts#L21)
