[**@orillusion/particle**](../README.md)

***

# Class: ParticleStandardSimulator

Defined in: [packages/particle/simulator/ParticleStandardSimulator.ts:10](https://github.com/orillusion/orillusion/blob/main/packages/particle/simulator/ParticleStandardSimulator.ts#L10)

Standard particle simulator

## Constructors

### Constructor

> **new ParticleStandardSimulator**(): `ParticleStandardSimulator`

Defined in: [packages/particle/simulator/ParticleStandardSimulator.ts:14](https://github.com/orillusion/orillusion/blob/main/packages/particle/simulator/ParticleStandardSimulator.ts#L14)

#### Returns

`ParticleStandardSimulator`

#### Overrides

`ParticleSimulator.constructor`

## Properties

### maxParticle

> **maxParticle**: `number` = `1000`

Defined in: [packages/particle/simulator/ParticleSimulator.ts:20](https://github.com/orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L20)

#### Inherited from

`ParticleSimulator.maxParticle`

***

### needReset

> **needReset**: `boolean` = `true`

Defined in: [packages/particle/simulator/ParticleSimulator.ts:21](https://github.com/orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L21)

#### Inherited from

`ParticleSimulator.needReset`

***

### preheatTime

> **preheatTime**: `number` = `0.0`

Defined in: [packages/particle/simulator/ParticleSimulator.ts:26](https://github.com/orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L26)

preheat time

#### Inherited from

`ParticleSimulator.preheatTime`

***

### particleLocalMemory

> **particleLocalMemory**: `ParticleLocalMemory`

Defined in: [packages/particle/simulator/ParticleSimulator.ts:48](https://github.com/orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L48)

particle data for each quad

#### Inherited from

`ParticleSimulator.particleLocalMemory`

***

### particleGlobalMemory

> **particleGlobalMemory**: `ParticleGlobalMemory`

Defined in: [packages/particle/simulator/ParticleSimulator.ts:53](https://github.com/orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L53)

global particle data for all quad

#### Inherited from

`ParticleSimulator.particleGlobalMemory`

## Accessors

### simulatorSpace

#### Get Signature

> **get** **simulatorSpace**(): [`SimulatorSpace`](../enumerations/SimulatorSpace.md)

Defined in: [packages/particle/simulator/ParticleSimulator.ts:41](https://github.com/orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L41)

Get particle simulator space.

##### Returns

[`SimulatorSpace`](../enumerations/SimulatorSpace.md)

#### Set Signature

> **set** **simulatorSpace**(`v`): `void`

Defined in: [packages/particle/simulator/ParticleSimulator.ts:33](https://github.com/orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L33)

Set particle simulator space. see [SimulatorSpace](../enumerations/SimulatorSpace.md)

##### Parameters

###### v

[`SimulatorSpace`](../enumerations/SimulatorSpace.md)

##### Returns

`void`

#### Inherited from

`ParticleSimulator.simulatorSpace`

***

### looping

#### Get Signature

> **get** **looping**(): `boolean`

Defined in: [packages/particle/simulator/ParticleSimulator.ts:76](https://github.com/orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L76)

Get need to loop animation

##### Returns

`boolean`

#### Set Signature

> **set** **looping**(`value`): `void`

Defined in: [packages/particle/simulator/ParticleSimulator.ts:68](https://github.com/orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L68)

Set need to loop animation

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`ParticleSimulator.looping`

***

### maxActiveParticle

#### Get Signature

> **get** **maxActiveParticle**(): `number`

Defined in: [packages/particle/simulator/ParticleStandardSimulator.ts:22](https://github.com/orillusion/orillusion/blob/main/packages/particle/simulator/ParticleStandardSimulator.ts#L22)

Get maximum number of active particles(read only)

##### Returns

`number`

## Methods

### addModule()

> **addModule**\<`T`\>(`c`): `T`

Defined in: [packages/particle/simulator/ParticleSimulator.ts:84](https://github.com/orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L84)

add a particle module

#### Type Parameters

##### T

`T` *extends* `ParticleModuleBase`

#### Parameters

##### c

`Ctor`\<`T`\>

class of particle module

#### Returns

`T`

#### Inherited from

`ParticleSimulator.addModule`

***

### getModule()

> **getModule**\<`T`\>(`c`): `T`

Defined in: [packages/particle/simulator/ParticleSimulator.ts:99](https://github.com/orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L99)

Get particle module

#### Type Parameters

##### T

`T` *extends* `ParticleModuleBase`

#### Parameters

##### c

`Ctor`\<`T`\>

class of particle module

#### Returns

`T`

#### Inherited from

`ParticleSimulator.getModule`

***

### removeModule()

> **removeModule**\<`T`\>(`c`): `void`

Defined in: [packages/particle/simulator/ParticleSimulator.ts:107](https://github.com/orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L107)

Remove particle module

#### Type Parameters

##### T

`T` *extends* `ParticleModuleBase`

#### Parameters

##### c

`Ctor`\<`T`\>

class of particle module

#### Returns

`void`

#### Inherited from

`ParticleSimulator.removeModule`

***

### build()

> **build**(): `void`

Defined in: [packages/particle/simulator/ParticleSimulator.ts:121](https://github.com/orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L121)

#### Returns

`void`

#### Inherited from

`ParticleSimulator.build`

***

### compute()

> **compute**(`view`, `command`): `void`

Defined in: [packages/particle/simulator/ParticleSimulator.ts:140](https://github.com/orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L140)

#### Parameters

##### view

`View3D`

##### command

`GPUCommandEncoder`

#### Returns

`void`

#### Inherited from

`ParticleSimulator.compute`

***

### updateBuffer()

> **updateBuffer**(`delta`): `void`

Defined in: [packages/particle/simulator/ParticleSimulator.ts:146](https://github.com/orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L146)

#### Parameters

##### delta

`number`

#### Returns

`void`

#### Inherited from

`ParticleSimulator.updateBuffer`

***

### debug()

> **debug**(): `void`

Defined in: [packages/particle/simulator/ParticleSimulator.ts:173](https://github.com/orillusion/orillusion/blob/main/packages/particle/simulator/ParticleSimulator.ts#L173)

#### Returns

`void`

#### Inherited from

`ParticleSimulator.debug`
