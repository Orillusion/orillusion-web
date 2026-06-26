[**@orillusion/particle**](../README.md)

***

# Class: ParticleRotationModule

Defined in: [packages/particle/module/stand/ParticleRotationModule.ts:12](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleRotationModule.ts#L12)

Particle Module of rotate quad

## Constructors

### Constructor

> **new ParticleRotationModule**(): `ParticleRotationModule`

#### Returns

`ParticleRotationModule`

#### Inherited from

`ParticleModuleBase.constructor`

## Properties

### angularVelocityXYZ

> **angularVelocityXYZ**: `MinMaxCurve`[]

Defined in: [packages/particle/module/stand/ParticleRotationModule.ts:59](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleRotationModule.ts#L59)

angular velocity of each quad

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

***

### angularVelocityX

#### Get Signature

> **get** **angularVelocityX**(): `MinMaxCurve`

Defined in: [packages/particle/module/stand/ParticleRotationModule.ts:17](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleRotationModule.ts#L17)

Returns angular velocity X-axis component of each quad

##### Returns

`MinMaxCurve`

#### Set Signature

> **set** **angularVelocityX**(`value`): `void`

Defined in: [packages/particle/module/stand/ParticleRotationModule.ts:24](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleRotationModule.ts#L24)

Set angular velocity X-axis component of each quad

##### Parameters

###### value

`MinMaxCurve`

##### Returns

`void`

***

### angularVelocityY

#### Get Signature

> **get** **angularVelocityY**(): `MinMaxCurve`

Defined in: [packages/particle/module/stand/ParticleRotationModule.ts:31](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleRotationModule.ts#L31)

Returns angular velocity Y-axis component of each quad

##### Returns

`MinMaxCurve`

#### Set Signature

> **set** **angularVelocityY**(`value`): `void`

Defined in: [packages/particle/module/stand/ParticleRotationModule.ts:38](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleRotationModule.ts#L38)

Set angular velocity Y-axis component of each quad

##### Parameters

###### value

`MinMaxCurve`

##### Returns

`void`

***

### angularVelocityZ

#### Get Signature

> **get** **angularVelocityZ**(): `MinMaxCurve`

Defined in: [packages/particle/module/stand/ParticleRotationModule.ts:45](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleRotationModule.ts#L45)

Returns angular velocity Z-axis component of each quad

##### Returns

`MinMaxCurve`

#### Set Signature

> **set** **angularVelocityZ**(`value`): `void`

Defined in: [packages/particle/module/stand/ParticleRotationModule.ts:52](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleRotationModule.ts#L52)

Get angular velocity Z-axis component of each quad

##### Parameters

###### value

`MinMaxCurve`

##### Returns

`void`

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

Defined in: [packages/particle/module/stand/ParticleRotationModule.ts:67](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleRotationModule.ts#L67)

Genarate particle rotate module, init angular velocity of each quad

#### Parameters

##### globalMemory

`ParticleGlobalMemory`

##### localMemory

`ParticleLocalMemory`

#### Returns

`void`

#### Overrides

`ParticleModuleBase.generateParticleModuleData`
