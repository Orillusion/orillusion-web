# Class: ParticleTextureSheetModule

Particle Module of texture sheet

## Hierarchy

- `ParticleModuleBase`

  ↳ **`ParticleTextureSheetModule`**

## Table of contents

### Constructors

- [constructor](ParticleTextureSheetModule.md#constructor)

### Properties

- [clipCol](ParticleTextureSheetModule.md#clipcol)
- [totalClip](ParticleTextureSheetModule.md#totalclip)
- [playRate](ParticleTextureSheetModule.md#playrate)
- [textureWidth](ParticleTextureSheetModule.md#texturewidth)
- [textureHeight](ParticleTextureSheetModule.md#textureheight)
- [playMode](ParticleTextureSheetModule.md#playmode)

### Accessors

- [needReset](ParticleTextureSheetModule.md#needreset)

### Methods

- [setSimulator](ParticleTextureSheetModule.md#setsimulator)
- [calculateParticle](ParticleTextureSheetModule.md#calculateparticle)
- [generateParticleModuleData](ParticleTextureSheetModule.md#generateparticlemoduledata)

## Constructors

### constructor

• **new ParticleTextureSheetModule**()

#### Inherited from

ParticleModuleBase.constructor

## Properties

### clipCol

• **clipCol**: `number` = `1`

The number of columns in the texture sheet

#### Defined in

[packages/particle/module/stand/ParticleTextureSheetModule.ts:14](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleTextureSheetModule.ts#L14)

___

### totalClip

• **totalClip**: `number` = `1`

The total number of clips texture sheet

#### Defined in

[packages/particle/module/stand/ParticleTextureSheetModule.ts:19](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleTextureSheetModule.ts#L19)

___

### playRate

• **playRate**: `number` = `1.0`

playing speed

#### Defined in

[packages/particle/module/stand/ParticleTextureSheetModule.ts:24](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleTextureSheetModule.ts#L24)

___

### textureWidth

• **textureWidth**: `number` = `1`

Texture width

#### Defined in

[packages/particle/module/stand/ParticleTextureSheetModule.ts:29](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleTextureSheetModule.ts#L29)

___

### textureHeight

• **textureHeight**: `number` = `1`

Texture Height

#### Defined in

[packages/particle/module/stand/ParticleTextureSheetModule.ts:34](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleTextureSheetModule.ts#L34)

___

### playMode

• **playMode**: `number` = `0`

play mode

#### Defined in

[packages/particle/module/stand/ParticleTextureSheetModule.ts:39](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleTextureSheetModule.ts#L39)

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

Genarate particle texture sheet module: such as clip col, total clip, play speed.

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

[packages/particle/module/stand/ParticleTextureSheetModule.ts:47](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleTextureSheetModule.ts#L47)
