# Class: ParticleEmitterModule

Particle module of emit

## Hierarchy

- `ParticleModuleBase`

  ↳ **`ParticleEmitterModule`**

## Table of contents

### Constructors

- [constructor](ParticleEmitterModule.md#constructor)

### Accessors

- [shapeType](ParticleEmitterModule.md#shapetype)
- [emitLocation](ParticleEmitterModule.md#emitlocation)
- [angle](ParticleEmitterModule.md#angle)
- [radius](ParticleEmitterModule.md#radius)
- [boxSize](ParticleEmitterModule.md#boxsize)
- [randSeed](ParticleEmitterModule.md#randseed)
- [maxParticle](ParticleEmitterModule.md#maxparticle)
- [emissionRate](ParticleEmitterModule.md#emissionrate)
- [duration](ParticleEmitterModule.md#duration)
- [startLifecycle](ParticleEmitterModule.md#startlifecycle)
- [startVelocityX](ParticleEmitterModule.md#startvelocityx)
- [startVelocityY](ParticleEmitterModule.md#startvelocityy)
- [startVelocityZ](ParticleEmitterModule.md#startvelocityz)
- [startScale](ParticleEmitterModule.md#startscale)
- [startScaleX](ParticleEmitterModule.md#startscalex)
- [startScaleY](ParticleEmitterModule.md#startscaley)
- [startScaleZ](ParticleEmitterModule.md#startscalez)
- [startRotation](ParticleEmitterModule.md#startrotation)
- [startRotationX](ParticleEmitterModule.md#startrotationx)
- [startRotationY](ParticleEmitterModule.md#startrotationy)
- [startRotationZ](ParticleEmitterModule.md#startrotationz)
- [needReset](ParticleEmitterModule.md#needreset)

### Methods

- [isUseStartScaleXYZ](ParticleEmitterModule.md#isusestartscalexyz)
- [isUseStartRotationXYZ](ParticleEmitterModule.md#isusestartrotationxyz)
- [generateParticleModuleData](ParticleEmitterModule.md#generateparticlemoduledata)
- [setSimulator](ParticleEmitterModule.md#setsimulator)
- [calculateParticle](ParticleEmitterModule.md#calculateparticle)

## Constructors

### constructor

• **new ParticleEmitterModule**()

#### Inherited from

ParticleModuleBase.constructor

## Accessors

### shapeType

• `get` **shapeType**(): [`ShapeType`](../enums/ShapeType.md)

Get shape type of emitter

#### Returns

[`ShapeType`](../enums/ShapeType.md)

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:82](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L82)

• `set` **shapeType**(`v`): `void`

Set shape type of emitter

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`ShapeType`](../enums/ShapeType.md) |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:74](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L74)

___

### emitLocation

• `get` **emitLocation**(): [`EmitLocation`](../enums/EmitLocation.md)

Get emit location of emitter

#### Returns

[`EmitLocation`](../enums/EmitLocation.md)

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:99](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L99)

• `set` **emitLocation**(`v`): `void`

Set emit location of emitter

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`EmitLocation`](../enums/EmitLocation.md) |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:91](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L91)

___

### angle

• `get` **angle**(): `number`

Get particle emitter angle

#### Returns

`number`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:116](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L116)

• `set` **angle**(`v`): `void`

Set particle emitter angle
When shapeType is cone, this value is the size of the cylindrical opening

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:109](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L109)

___

### radius

• `get` **radius**(): `number`

Get particle emitter radus

#### Returns

`number`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:133](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L133)

• `set` **radius**(`v`): `void`

Set particle emitter radus

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:125](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L125)

___

### boxSize

• `get` **boxSize**(): `Vector3`

Get box size

#### Returns

`Vector3`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:150](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L150)

• `set` **boxSize**(`v`): `void`

Set box size, only when the shape is box

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Vector3` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:142](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L142)

___

### randSeed

• `get` **randSeed**(): `number`

Get random seed

#### Returns

`number`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:167](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L167)

• `set` **randSeed**(`v`): `void`

Set random seed

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:159](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L159)

___

### maxParticle

• `get` **maxParticle**(): `number`

Get max number of quad in this particle

#### Returns

`number`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:187](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L187)

• `set` **maxParticle**(`value`): `void`

Set max number of quad in this particle

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:176](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L176)

___

### emissionRate

• `get` **emissionRate**(): `number`

Get emit rate.

#### Returns

`number`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:204](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L204)

• `set` **emissionRate**(`v`): `void`

Set emit rate. How many quad are allowed to be emitted per second

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:196](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L196)

___

### duration

• `get` **duration**(): `number`

Get duration of emitted particles

#### Returns

`number`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:221](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L221)

• `set` **duration**(`v`): `void`

Set duration of emitted particles

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:213](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L213)

___

### startLifecycle

• `get` **startLifecycle**(): `MinMaxCurve`

Get life cycle of each quad

#### Returns

`MinMaxCurve`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:238](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L238)

• `set` **startLifecycle**(`v`): `void`

Set life cycle of each quad

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `MinMaxCurve` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:230](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L230)

___

### startVelocityX

• `get` **startVelocityX**(): `MinMaxCurve`

Get velocity speed of X-axis component

#### Returns

`MinMaxCurve`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:255](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L255)

• `set` **startVelocityX**(`value`): `void`

Set velocity speed of X-axis component

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MinMaxCurve` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:247](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L247)

___

### startVelocityY

• `get` **startVelocityY**(): `MinMaxCurve`

Get velocity speed of Y-axis component

#### Returns

`MinMaxCurve`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:270](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L270)

• `set` **startVelocityY**(`value`): `void`

Set velocity speed of Y-axis component

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MinMaxCurve` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:262](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L262)

___

### startVelocityZ

• `get` **startVelocityZ**(): `MinMaxCurve`

Get velocity speed of Z-axis component

#### Returns

`MinMaxCurve`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:285](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L285)

• `set` **startVelocityZ**(`value`): `void`

Set velocity speed of Z-axis component

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MinMaxCurve` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:277](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L277)

___

### startScale

• `get` **startScale**(): `MinMaxCurve`

Get init scale of each quad

#### Returns

`MinMaxCurve`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:302](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L302)

• `set` **startScale**(`v`): `void`

Set init scale of each quad

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `MinMaxCurve` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:294](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L294)

___

### startScaleX

• `get` **startScaleX**(): `MinMaxCurve`

Get the scaling value of each quad on the x-axis

#### Returns

`MinMaxCurve`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:317](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L317)

• `set` **startScaleX**(`v`): `void`

Set the scaling value of each quad on the x-axis

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `MinMaxCurve` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:309](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L309)

___

### startScaleY

• `get` **startScaleY**(): `MinMaxCurve`

Get the scaling value of each quad on the y-axis

#### Returns

`MinMaxCurve`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:332](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L332)

• `set` **startScaleY**(`v`): `void`

Set the scaling value of each quad on the y-axis

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `MinMaxCurve` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:324](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L324)

___

### startScaleZ

• `get` **startScaleZ**(): `MinMaxCurve`

Get the scaling value of each quad on the z-axis

#### Returns

`MinMaxCurve`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:347](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L347)

• `set` **startScaleZ**(`v`): `void`

Set the scaling value of each quad on the z-axis

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `MinMaxCurve` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:339](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L339)

___

### startRotation

• `get` **startRotation**(): `MinMaxCurve`

Get init rotation of each quad

#### Returns

`MinMaxCurve`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:372](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L372)

• `set` **startRotation**(`v`): `void`

Set init rotation of each quad

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `MinMaxCurve` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:364](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L364)

___

### startRotationX

• `get` **startRotationX**(): `MinMaxCurve`

Get the rotation of each quad on the x-axis

#### Returns

`MinMaxCurve`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:387](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L387)

• `set` **startRotationX**(`v`): `void`

Set the rotation of each quad on the x-axis

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `MinMaxCurve` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:379](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L379)

___

### startRotationY

• `get` **startRotationY**(): `MinMaxCurve`

Get the rotation of each quad on the y-axis

#### Returns

`MinMaxCurve`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:402](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L402)

• `set` **startRotationY**(`v`): `void`

Set the rotation of each quad on the y-axis

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `MinMaxCurve` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:394](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L394)

___

### startRotationZ

• `get` **startRotationZ**(): `MinMaxCurve`

Get the rotation of each quad on the z-axis

#### Returns

`MinMaxCurve`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:417](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L417)

• `set` **startRotationZ**(`v`): `void`

Set the rotation of each quad on the z-axis

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `MinMaxCurve` |

#### Returns

`void`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:409](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L409)

___

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

### isUseStartScaleXYZ

▸ **isUseStartScaleXYZ**(): `boolean`

Is the scaling of quads different on each axis

#### Returns

`boolean`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:357](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L357)

___

### isUseStartRotationXYZ

▸ **isUseStartRotationXYZ**(): `boolean`

Is the rotation of quads different on each axis

#### Returns

`boolean`

#### Defined in

[packages/particle/module/stand/ParticleEmitterModule.ts:426](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L426)

___

### generateParticleModuleData

▸ **generateParticleModuleData**(`globalMemory`, `localMemory`): `void`

Genarate particle emit module

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

[packages/particle/module/stand/ParticleEmitterModule.ts:443](https://github.com/Orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L443)

___

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
