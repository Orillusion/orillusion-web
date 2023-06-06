# Class: ParticleStandardSimulator

Standard particle simulator

## Hierarchy

- `ParticleSimulator`

  ↳ **`ParticleStandardSimulator`**

## Table of contents

### Constructors

- [constructor](ParticleStandardSimulator.md#constructor)

### Properties

- [maxParticle](ParticleStandardSimulator.md#maxparticle)
- [needReset](ParticleStandardSimulator.md#needreset)
- [preheatTime](ParticleStandardSimulator.md#preheattime)
- [particleLocalMemory](ParticleStandardSimulator.md#particlelocalmemory)
- [particleGlobalMemory](ParticleStandardSimulator.md#particleglobalmemory)

### Accessors

- [simulatorSpace](ParticleStandardSimulator.md#simulatorspace)
- [looping](ParticleStandardSimulator.md#looping)
- [maxActiveParticle](ParticleStandardSimulator.md#maxactiveparticle)

### Methods

- [addModule](ParticleStandardSimulator.md#addmodule)
- [getModule](ParticleStandardSimulator.md#getmodule)
- [removeModule](ParticleStandardSimulator.md#removemodule)
- [build](ParticleStandardSimulator.md#build)
- [compute](ParticleStandardSimulator.md#compute)
- [updateBuffer](ParticleStandardSimulator.md#updatebuffer)
- [debug](ParticleStandardSimulator.md#debug)

## Constructors

### constructor

• **new ParticleStandardSimulator**()

#### Overrides

ParticleSimulator.constructor

#### Defined in

[packages/particle/simulator/ParticleStandardSimulator.ts:14](https://github.com/Orillusion/orillusion/blob/main/packages/particle/simulator/ParticleStandardSimulator.ts#L14)

## Properties

### maxParticle

• **maxParticle**: `number` = `1000`

#### Inherited from

ParticleSimulator.maxParticle

#### Defined in

[packages/particle/simulator/ParticleSimulator.ts:20](https://github.com/Orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L20)

___

### needReset

• **needReset**: `boolean` = `true`

#### Inherited from

ParticleSimulator.needReset

#### Defined in

[packages/particle/simulator/ParticleSimulator.ts:21](https://github.com/Orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L21)

___

### preheatTime

• **preheatTime**: `number` = `0.0`

preheat time

#### Inherited from

ParticleSimulator.preheatTime

#### Defined in

[packages/particle/simulator/ParticleSimulator.ts:26](https://github.com/Orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L26)

___

### particleLocalMemory

• **particleLocalMemory**: `ParticleLocalMemory`

particle data for each quad

#### Inherited from

ParticleSimulator.particleLocalMemory

#### Defined in

[packages/particle/simulator/ParticleSimulator.ts:48](https://github.com/Orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L48)

___

### particleGlobalMemory

• **particleGlobalMemory**: `ParticleGlobalMemory`

global particle data for all quad

#### Inherited from

ParticleSimulator.particleGlobalMemory

#### Defined in

[packages/particle/simulator/ParticleSimulator.ts:53](https://github.com/Orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L53)

## Accessors

### simulatorSpace

• `get` **simulatorSpace**(): [`SimulatorSpace`](../enums/SimulatorSpace.md)

Get particle simulator space.

#### Returns

[`SimulatorSpace`](../enums/SimulatorSpace.md)

#### Inherited from

ParticleSimulator.simulatorSpace

#### Defined in

[packages/particle/simulator/ParticleSimulator.ts:41](https://github.com/Orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L41)

• `set` **simulatorSpace**(`v`): `void`

Set particle simulator space. see [SimulatorSpace](../enums/SimulatorSpace.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`SimulatorSpace`](../enums/SimulatorSpace.md) |

#### Returns

`void`

#### Inherited from

ParticleSimulator.simulatorSpace

#### Defined in

[packages/particle/simulator/ParticleSimulator.ts:33](https://github.com/Orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L33)

___

### looping

• `get` **looping**(): `boolean`

Get need to loop animation

#### Returns

`boolean`

#### Inherited from

ParticleSimulator.looping

#### Defined in

[packages/particle/simulator/ParticleSimulator.ts:76](https://github.com/Orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L76)

• `set` **looping**(`value`): `void`

Set need to loop animation

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

ParticleSimulator.looping

#### Defined in

[packages/particle/simulator/ParticleSimulator.ts:68](https://github.com/Orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L68)

___

### maxActiveParticle

• `get` **maxActiveParticle**(): `number`

Get maximum number of active particles(read only)

#### Returns

`number`

#### Defined in

[packages/particle/simulator/ParticleStandardSimulator.ts:22](https://github.com/Orillusion/orillusion/blob/main/packages/particle/simulator/ParticleStandardSimulator.ts#L22)

## Methods

### addModule

▸ **addModule**<`T`\>(`c`): `T`

add a particle module

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ParticleModuleBase`<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | `Ctor`<`T`\> | class of particle module |

#### Returns

`T`

#### Inherited from

ParticleSimulator.addModule

#### Defined in

[packages/particle/simulator/ParticleSimulator.ts:84](https://github.com/Orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L84)

___

### getModule

▸ **getModule**<`T`\>(`c`): `T`

Get particle module

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ParticleModuleBase`<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | `Ctor`<`T`\> | class of particle module |

#### Returns

`T`

#### Inherited from

ParticleSimulator.getModule

#### Defined in

[packages/particle/simulator/ParticleSimulator.ts:99](https://github.com/Orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L99)

___

### removeModule

▸ **removeModule**<`T`\>(`c`): `void`

Remove particle module

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ParticleModuleBase`<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | `Ctor`<`T`\> | class of particle module |

#### Returns

`void`

#### Inherited from

ParticleSimulator.removeModule

#### Defined in

[packages/particle/simulator/ParticleSimulator.ts:107](https://github.com/Orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L107)

___

### build

▸ **build**(): `void`

#### Returns

`void`

#### Inherited from

ParticleSimulator.build

#### Defined in

[packages/particle/simulator/ParticleSimulator.ts:121](https://github.com/Orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L121)

___

### compute

▸ **compute**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `GPUCommandEncoder` |

#### Returns

`void`

#### Inherited from

ParticleSimulator.compute

#### Defined in

[packages/particle/simulator/ParticleSimulator.ts:140](https://github.com/Orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L140)

___

### updateBuffer

▸ **updateBuffer**(`delta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

#### Returns

`void`

#### Inherited from

ParticleSimulator.updateBuffer

#### Defined in

[packages/particle/simulator/ParticleSimulator.ts:146](https://github.com/Orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L146)

___

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Inherited from

ParticleSimulator.debug

#### Defined in

[packages/particle/simulator/ParticleSimulator.ts:173](https://github.com/Orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L173)
