[**@orillusion/particle**](../README.md)

***

# Class: ParticleGravityModifierModule

Defined in: [packages/particle/module/stand/ParticleGravityModifierModule.ts:10](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleGravityModifierModule.ts#L10)

Particle module of gravity modifier

## Constructors

### Constructor

> **new ParticleGravityModifierModule**(): `ParticleGravityModifierModule`

#### Returns

`ParticleGravityModifierModule`

#### Inherited from

`ParticleModuleBase.constructor`

## Accessors

### gravity

#### Get Signature

> **get** **gravity**(): `Vector3`

Defined in: [packages/particle/module/stand/ParticleGravityModifierModule.ts:24](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleGravityModifierModule.ts#L24)

Get gravity

##### Returns

`Vector3`

#### Set Signature

> **set** **gravity**(`value`): `void`

Defined in: [packages/particle/module/stand/ParticleGravityModifierModule.ts:15](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleGravityModifierModule.ts#L15)

Set gravity

##### Parameters

###### value

`Vector3`

##### Returns

`void`

***

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

### generateParticleModuleData()

> **generateParticleModuleData**(`globalMemory`, `localMemory`): `void`

Defined in: [packages/particle/module/stand/ParticleGravityModifierModule.ts:36](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleGravityModifierModule.ts#L36)

Genarate particle gravity module

#### Parameters

##### globalMemory

`ParticleGlobalMemory`

##### localMemory

`ParticleLocalMemory`

#### Returns

`void`

#### Overrides

`ParticleModuleBase.generateParticleModuleData`

***

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
