# Class: ParticleRotationModule

Particle Module of rotate quad

## Hierarchy

- `ParticleModuleBase`

  ↳ **`ParticleRotationModule`**

## Table of contents

### Constructors

- [constructor](ParticleRotationModule.md#constructor)

### Properties

- [angularVelocityXYZ](ParticleRotationModule.md#angularvelocityxyz)

### Accessors

- [needReset](ParticleRotationModule.md#needreset)
- [angularVelocityX](ParticleRotationModule.md#angularvelocityx)
- [angularVelocityY](ParticleRotationModule.md#angularvelocityy)
- [angularVelocityZ](ParticleRotationModule.md#angularvelocityz)

### Methods

- [setSimulator](ParticleRotationModule.md#setsimulator)
- [calculateParticle](ParticleRotationModule.md#calculateparticle)
- [generateParticleModuleData](ParticleRotationModule.md#generateparticlemoduledata)

## Constructors

### constructor

• **new ParticleRotationModule**()

#### Inherited from

ParticleModuleBase.constructor

## Properties

### angularVelocityXYZ

• **angularVelocityXYZ**: `MinMaxCurve`[]

angular velocity of each quad

#### Defined in

[packages/particle/module/stand/ParticleRotationModule.ts:59](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleRotationModule.ts#L59)

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

### angularVelocityX

• `get` **angularVelocityX**(): `MinMaxCurve`

Returns angular velocity X-axis component of each quad

#### Returns

`MinMaxCurve`

#### Defined in

[packages/particle/module/stand/ParticleRotationModule.ts:17](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleRotationModule.ts#L17)

• `set` **angularVelocityX**(`value`): `void`

Set angular velocity X-axis component of each quad

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MinMaxCurve` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleRotationModule.ts:24](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleRotationModule.ts#L24)

___

### angularVelocityY

• `get` **angularVelocityY**(): `MinMaxCurve`

Returns angular velocity Y-axis component of each quad

#### Returns

`MinMaxCurve`

#### Defined in

[packages/particle/module/stand/ParticleRotationModule.ts:31](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleRotationModule.ts#L31)

• `set` **angularVelocityY**(`value`): `void`

Set angular velocity Y-axis component of each quad

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MinMaxCurve` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleRotationModule.ts:38](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleRotationModule.ts#L38)

___

### angularVelocityZ

• `get` **angularVelocityZ**(): `MinMaxCurve`

Returns angular velocity Z-axis component of each quad

#### Returns

`MinMaxCurve`

#### Defined in

[packages/particle/module/stand/ParticleRotationModule.ts:45](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleRotationModule.ts#L45)

• `set` **angularVelocityZ**(`value`): `void`

Get angular velocity Z-axis component of each quad

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MinMaxCurve` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleRotationModule.ts:52](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleRotationModule.ts#L52)

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

Genarate particle rotate module, init angular velocity of each quad

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

[packages/particle/module/stand/ParticleRotationModule.ts:67](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleRotationModule.ts#L67)
