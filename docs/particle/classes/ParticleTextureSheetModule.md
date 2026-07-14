[**@orillusion/particle**](../README.md)

***

# Class: ParticleTextureSheetModule

Defined in: [packages/particle/module/stand/ParticleTextureSheetModule.ts:9](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleTextureSheetModule.ts#L9)

Particle Module of texture sheet

## Constructors

### Constructor

> **new ParticleTextureSheetModule**(): `ParticleTextureSheetModule`

#### Returns

`ParticleTextureSheetModule`

#### Inherited from

`ParticleModuleBase.constructor`

## Properties

### clipCol

> **clipCol**: `number` = `1`

Defined in: [packages/particle/module/stand/ParticleTextureSheetModule.ts:14](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleTextureSheetModule.ts#L14)

The number of columns in the texture sheet

***

### totalClip

> **totalClip**: `number` = `1`

Defined in: [packages/particle/module/stand/ParticleTextureSheetModule.ts:19](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleTextureSheetModule.ts#L19)

The total number of clips texture sheet

***

### playRate

> **playRate**: `number` = `1.0`

Defined in: [packages/particle/module/stand/ParticleTextureSheetModule.ts:24](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleTextureSheetModule.ts#L24)

playing speed

***

### textureWidth

> **textureWidth**: `number` = `1`

Defined in: [packages/particle/module/stand/ParticleTextureSheetModule.ts:29](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleTextureSheetModule.ts#L29)

Texture width

***

### textureHeight

> **textureHeight**: `number` = `1`

Defined in: [packages/particle/module/stand/ParticleTextureSheetModule.ts:34](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleTextureSheetModule.ts#L34)

Texture Height

***

### playMode

> **playMode**: `number` = `0`

Defined in: [packages/particle/module/stand/ParticleTextureSheetModule.ts:39](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleTextureSheetModule.ts#L39)

play mode

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

Defined in: [packages/particle/module/stand/ParticleTextureSheetModule.ts:47](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleTextureSheetModule.ts#L47)

Genarate particle texture sheet module: such as clip col, total clip, play speed.

#### Parameters

##### globalMemory

`ParticleGlobalMemory`

##### localMemory

`ParticleLocalMemory`

#### Returns

`void`

#### Overrides

`ParticleModuleBase.generateParticleModuleData`
