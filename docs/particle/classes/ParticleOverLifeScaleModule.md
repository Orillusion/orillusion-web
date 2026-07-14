[**@orillusion/particle**](../README.md)

***

# Class: ParticleOverLifeScaleModule

Defined in: [packages/particle/module/stand/ParticleOverLifeScaleModule.ts:10](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeScaleModule.ts#L10)

Particle module of size scale over life time

## Constructors

### Constructor

> **new ParticleOverLifeScaleModule**(): `ParticleOverLifeScaleModule`

#### Returns

`ParticleOverLifeScaleModule`

#### Inherited from

`ParticleModuleBase.constructor`

## Properties

### scaleSegments

> **scaleSegments**: `Vector4`[]

Defined in: [packages/particle/module/stand/ParticleOverLifeScaleModule.ts:14](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeScaleModule.ts#L14)

Describe the size scale change of particles from birth to end

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

Defined in: [packages/particle/module/stand/ParticleOverLifeScaleModule.ts:21](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeScaleModule.ts#L21)

Genarate particle size scale module with type over life time

#### Parameters

##### globalMemory

`ParticleGlobalMemory`

##### localMemory

`ParticleLocalMemory`

#### Returns

`void`

#### Overrides

`ParticleModuleBase.generateParticleModuleData`
