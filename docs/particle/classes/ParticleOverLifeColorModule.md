[**@orillusion/particle**](../README.md)

***

# Class: ParticleOverLifeColorModule

Defined in: [packages/particle/module/stand/ParticleOverLifeColorModule.ts:11](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeColorModule.ts#L11)

Particle module of color change over life time

## Constructors

### Constructor

> **new ParticleOverLifeColorModule**(): `ParticleOverLifeColorModule`

#### Returns

`ParticleOverLifeColorModule`

#### Inherited from

`ParticleModuleBase.constructor`

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

### startColor

#### Get Signature

> **get** **startColor**(): `Color`

Defined in: [packages/particle/module/stand/ParticleOverLifeColorModule.ts:24](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeColorModule.ts#L24)

Get start color

##### Returns

`Color`

#### Set Signature

> **set** **startColor**(`v`): `void`

Defined in: [packages/particle/module/stand/ParticleOverLifeColorModule.ts:16](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeColorModule.ts#L16)

Set start color

##### Parameters

###### v

`Color`

##### Returns

`void`

***

### startAlpha

#### Get Signature

> **get** **startAlpha**(): `number`

Defined in: [packages/particle/module/stand/ParticleOverLifeColorModule.ts:39](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeColorModule.ts#L39)

Get start alpha

##### Returns

`number`

#### Set Signature

> **set** **startAlpha**(`v`): `void`

Defined in: [packages/particle/module/stand/ParticleOverLifeColorModule.ts:31](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeColorModule.ts#L31)

Set start alpha

##### Parameters

###### v

`number`

##### Returns

`void`

***

### endColor

#### Get Signature

> **get** **endColor**(): `Color`

Defined in: [packages/particle/module/stand/ParticleOverLifeColorModule.ts:54](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeColorModule.ts#L54)

Get end color

##### Returns

`Color`

#### Set Signature

> **set** **endColor**(`v`): `void`

Defined in: [packages/particle/module/stand/ParticleOverLifeColorModule.ts:46](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeColorModule.ts#L46)

Set end color

##### Parameters

###### v

`Color`

##### Returns

`void`

***

### endAlpha

#### Get Signature

> **get** **endAlpha**(): `number`

Defined in: [packages/particle/module/stand/ParticleOverLifeColorModule.ts:69](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeColorModule.ts#L69)

Get end alpha

##### Returns

`number`

#### Set Signature

> **set** **endAlpha**(`v`): `void`

Defined in: [packages/particle/module/stand/ParticleOverLifeColorModule.ts:61](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeColorModule.ts#L61)

Set end alpha

##### Parameters

###### v

`number`

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

Defined in: [packages/particle/module/stand/ParticleOverLifeColorModule.ts:80](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeColorModule.ts#L80)

Genarate particle color module with type over life time

#### Parameters

##### globalMemory

`ParticleGlobalMemory`

##### localMemory

`ParticleLocalMemory`

#### Returns

`void`

#### Overrides

`ParticleModuleBase.generateParticleModuleData`
