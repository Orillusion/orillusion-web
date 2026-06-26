[**@orillusion/particle**](../README.md)

***

# Class: ParticleOverLifeRotationModule

Defined in: [packages/particle/module/stand/ParticleOverLifeRotationModule.ts:10](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeRotationModule.ts#L10)

Particle module of rotation over life time

## Constructors

### Constructor

> **new ParticleOverLifeRotationModule**(): `ParticleOverLifeRotationModule`

#### Returns

`ParticleOverLifeRotationModule`

#### Inherited from

`ParticleModuleBase.constructor`

## Properties

### rotationSegments

> **rotationSegments**: `Vector4`[]

Defined in: [packages/particle/module/stand/ParticleOverLifeRotationModule.ts:15](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeRotationModule.ts#L15)

Describe the rotation of particles from birth to end

## Accessors

### needReset

#### Get Signature

> **get** **needReset**(): `boolean`

Defined in: [packages/particle/module/stand/ParticleModuleBase.ts:21](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleModuleBase.ts#L21)

##### Returns

`boolean`

#### Set Signature

> **set** **needReset**(`v`): `void`

Defined in: [packages/particle/module/stand/ParticleModuleBase.ts:17](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleModuleBase.ts#L17)

##### Parameters

###### v

`boolean`

##### Returns

`void`

#### Inherited from

`ParticleModuleBase.needReset`

## Methods

### setSimulator()

> **setSimulator**(`simulator`): `void`

Defined in: [packages/particle/module/stand/ParticleModuleBase.ts:25](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleModuleBase.ts#L25)

#### Parameters

##### simulator

`ParticleSimulator`

#### Returns

`void`

#### Inherited from

`ParticleModuleBase.setSimulator`

***

### calculateParticle()

> **calculateParticle**(`globalMemory`, `localMemory`): `void`

Defined in: [packages/particle/module/stand/ParticleModuleBase.ts:29](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleModuleBase.ts#L29)

#### Parameters

##### globalMemory

`ParticleGlobalMemory`

##### localMemory

`ParticleLocalMemory`

#### Returns

`void`

#### Inherited from

`ParticleModuleBase.calculateParticle`

***

### generateParticleModuleData()

> **generateParticleModuleData**(`globalMemory`, `localMemory`): `void`

Defined in: [packages/particle/module/stand/ParticleOverLifeRotationModule.ts:22](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeRotationModule.ts#L22)

Genarate particle rotation module with type over life time

#### Parameters

##### globalMemory

`ParticleGlobalMemory`

##### localMemory

`ParticleLocalMemory`

#### Returns

`void`

#### Overrides

`ParticleModuleBase.generateParticleModuleData`
