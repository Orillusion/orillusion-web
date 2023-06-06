# Class: ParticleOverLifeColorModule

Particle module of color change over life time

## Hierarchy

- `ParticleModuleBase`

  ↳ **`ParticleOverLifeColorModule`**

## Table of contents

### Constructors

- [constructor](ParticleOverLifeColorModule.md#constructor)

### Accessors

- [needReset](ParticleOverLifeColorModule.md#needreset)
- [startColor](ParticleOverLifeColorModule.md#startcolor)
- [startAlpha](ParticleOverLifeColorModule.md#startalpha)
- [endColor](ParticleOverLifeColorModule.md#endcolor)
- [endAlpha](ParticleOverLifeColorModule.md#endalpha)

### Methods

- [setSimulator](ParticleOverLifeColorModule.md#setsimulator)
- [calculateParticle](ParticleOverLifeColorModule.md#calculateparticle)
- [generateParticleModuleData](ParticleOverLifeColorModule.md#generateparticlemoduledata)

## Constructors

### constructor

• **new ParticleOverLifeColorModule**()

#### Inherited from

ParticleModuleBase.constructor

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

___

### startColor

• `get` **startColor**(): `Color`

Get start color

#### Returns

`Color`

#### Defined in

[packages/particle/module/stand/ParticleOverLifeColorModule.ts:24](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeColorModule.ts#L24)

• `set` **startColor**(`v`): `void`

Set start color

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Color` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleOverLifeColorModule.ts:16](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeColorModule.ts#L16)

___

### startAlpha

• `get` **startAlpha**(): `number`

Get start alpha

#### Returns

`number`

#### Defined in

[packages/particle/module/stand/ParticleOverLifeColorModule.ts:39](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeColorModule.ts#L39)

• `set` **startAlpha**(`v`): `void`

Set start alpha

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleOverLifeColorModule.ts:31](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeColorModule.ts#L31)

___

### endColor

• `get` **endColor**(): `Color`

Get end color

#### Returns

`Color`

#### Defined in

[packages/particle/module/stand/ParticleOverLifeColorModule.ts:54](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeColorModule.ts#L54)

• `set` **endColor**(`v`): `void`

Set end color

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Color` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleOverLifeColorModule.ts:46](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeColorModule.ts#L46)

___

### endAlpha

• `get` **endAlpha**(): `number`

Get end alpha

#### Returns

`number`

#### Defined in

[packages/particle/module/stand/ParticleOverLifeColorModule.ts:69](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeColorModule.ts#L69)

• `set` **endAlpha**(`v`): `void`

Set end alpha

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleOverLifeColorModule.ts:61](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeColorModule.ts#L61)

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

Genarate particle color module with type over life time

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

[packages/particle/module/stand/ParticleOverLifeColorModule.ts:80](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleOverLifeColorModule.ts#L80)
