[**@orillusion/particle**](../README.md)

***

# Class: ParticleEmitterModule

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:69](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L69)

Particle module of emit

## Constructors

### Constructor

> **new ParticleEmitterModule**(): `ParticleEmitterModule`

#### Returns

`ParticleEmitterModule`

#### Inherited from

`ParticleModuleBase.constructor`

## Accessors

### shapeType

#### Get Signature

> **get** **shapeType**(): [`ShapeType`](../enumerations/ShapeType.md)

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:82](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L82)

Get shape type of emitter

##### Returns

[`ShapeType`](../enumerations/ShapeType.md)

#### Set Signature

> **set** **shapeType**(`v`): `void`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:74](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L74)

Set shape type of emitter

##### Parameters

###### v

[`ShapeType`](../enumerations/ShapeType.md)

##### Returns

`void`

***

### emitLocation

#### Get Signature

> **get** **emitLocation**(): [`EmitLocation`](../enumerations/EmitLocation.md)

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:99](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L99)

Get emit location of emitter

##### Returns

[`EmitLocation`](../enumerations/EmitLocation.md)

#### Set Signature

> **set** **emitLocation**(`v`): `void`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:91](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L91)

Set emit location of emitter

##### Parameters

###### v

[`EmitLocation`](../enumerations/EmitLocation.md)

##### Returns

`void`

***

### angle

#### Get Signature

> **get** **angle**(): `number`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:116](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L116)

Get particle emitter angle

##### Returns

`number`

#### Set Signature

> **set** **angle**(`v`): `void`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:109](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L109)

Set particle emitter angle
When shapeType is cone, this value is the size of the cylindrical opening

##### Parameters

###### v

`number`

##### Returns

`void`

***

### radius

#### Get Signature

> **get** **radius**(): `number`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:133](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L133)

Get particle emitter radus

##### Returns

`number`

#### Set Signature

> **set** **radius**(`v`): `void`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:125](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L125)

Set particle emitter radus

##### Parameters

###### v

`number`

##### Returns

`void`

***

### boxSize

#### Get Signature

> **get** **boxSize**(): `Vector3`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:150](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L150)

Get box size

##### Returns

`Vector3`

#### Set Signature

> **set** **boxSize**(`v`): `void`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:142](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L142)

Set box size, only when the shape is box

##### Parameters

###### v

`Vector3`

##### Returns

`void`

***

### randSeed

#### Get Signature

> **get** **randSeed**(): `number`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:167](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L167)

Get random seed

##### Returns

`number`

#### Set Signature

> **set** **randSeed**(`v`): `void`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:159](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L159)

Set random seed

##### Parameters

###### v

`number`

##### Returns

`void`

***

### maxParticle

#### Get Signature

> **get** **maxParticle**(): `number`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:187](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L187)

Get max number of quad in this particle

##### Returns

`number`

#### Set Signature

> **set** **maxParticle**(`value`): `void`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:176](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L176)

Set max number of quad in this particle

##### Parameters

###### value

`number`

##### Returns

`void`

***

### emissionRate

#### Get Signature

> **get** **emissionRate**(): `number`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:204](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L204)

Get emit rate.

##### Returns

`number`

#### Set Signature

> **set** **emissionRate**(`v`): `void`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:196](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L196)

Set emit rate. How many quad are allowed to be emitted per second

##### Parameters

###### v

`number`

##### Returns

`void`

***

### duration

#### Get Signature

> **get** **duration**(): `number`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:221](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L221)

Get duration of emitted particles

##### Returns

`number`

#### Set Signature

> **set** **duration**(`v`): `void`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:213](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L213)

Set duration of emitted particles

##### Parameters

###### v

`number`

##### Returns

`void`

***

### startLifecycle

#### Get Signature

> **get** **startLifecycle**(): `MinMaxCurve`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:238](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L238)

Get life cycle of each quad

##### Returns

`MinMaxCurve`

#### Set Signature

> **set** **startLifecycle**(`v`): `void`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:230](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L230)

Set life cycle of each quad

##### Parameters

###### v

`MinMaxCurve`

##### Returns

`void`

***

### startVelocityX

#### Get Signature

> **get** **startVelocityX**(): `MinMaxCurve`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:255](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L255)

Get velocity speed of X-axis component

##### Returns

`MinMaxCurve`

#### Set Signature

> **set** **startVelocityX**(`value`): `void`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:247](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L247)

Set velocity speed of X-axis component

##### Parameters

###### value

`MinMaxCurve`

##### Returns

`void`

***

### startVelocityY

#### Get Signature

> **get** **startVelocityY**(): `MinMaxCurve`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:270](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L270)

Get velocity speed of Y-axis component

##### Returns

`MinMaxCurve`

#### Set Signature

> **set** **startVelocityY**(`value`): `void`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:262](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L262)

Set velocity speed of Y-axis component

##### Parameters

###### value

`MinMaxCurve`

##### Returns

`void`

***

### startVelocityZ

#### Get Signature

> **get** **startVelocityZ**(): `MinMaxCurve`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:285](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L285)

Get velocity speed of Z-axis component

##### Returns

`MinMaxCurve`

#### Set Signature

> **set** **startVelocityZ**(`value`): `void`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:277](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L277)

Set velocity speed of Z-axis component

##### Parameters

###### value

`MinMaxCurve`

##### Returns

`void`

***

### startScale

#### Get Signature

> **get** **startScale**(): `MinMaxCurve`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:302](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L302)

Get init scale of each quad

##### Returns

`MinMaxCurve`

#### Set Signature

> **set** **startScale**(`v`): `void`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:294](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L294)

Set init scale of each quad

##### Parameters

###### v

`MinMaxCurve`

##### Returns

`void`

***

### startScaleX

#### Get Signature

> **get** **startScaleX**(): `MinMaxCurve`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:317](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L317)

Get the scaling value of each quad on the x-axis

##### Returns

`MinMaxCurve`

#### Set Signature

> **set** **startScaleX**(`v`): `void`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:309](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L309)

Set the scaling value of each quad on the x-axis

##### Parameters

###### v

`MinMaxCurve`

##### Returns

`void`

***

### startScaleY

#### Get Signature

> **get** **startScaleY**(): `MinMaxCurve`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:332](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L332)

Get the scaling value of each quad on the y-axis

##### Returns

`MinMaxCurve`

#### Set Signature

> **set** **startScaleY**(`v`): `void`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:324](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L324)

Set the scaling value of each quad on the y-axis

##### Parameters

###### v

`MinMaxCurve`

##### Returns

`void`

***

### startScaleZ

#### Get Signature

> **get** **startScaleZ**(): `MinMaxCurve`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:347](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L347)

Get the scaling value of each quad on the z-axis

##### Returns

`MinMaxCurve`

#### Set Signature

> **set** **startScaleZ**(`v`): `void`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:339](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L339)

Set the scaling value of each quad on the z-axis

##### Parameters

###### v

`MinMaxCurve`

##### Returns

`void`

***

### startRotation

#### Get Signature

> **get** **startRotation**(): `MinMaxCurve`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:372](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L372)

Get init rotation of each quad

##### Returns

`MinMaxCurve`

#### Set Signature

> **set** **startRotation**(`v`): `void`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:364](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L364)

Set init rotation of each quad

##### Parameters

###### v

`MinMaxCurve`

##### Returns

`void`

***

### startRotationX

#### Get Signature

> **get** **startRotationX**(): `MinMaxCurve`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:387](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L387)

Get the rotation of each quad on the x-axis

##### Returns

`MinMaxCurve`

#### Set Signature

> **set** **startRotationX**(`v`): `void`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:379](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L379)

Set the rotation of each quad on the x-axis

##### Parameters

###### v

`MinMaxCurve`

##### Returns

`void`

***

### startRotationY

#### Get Signature

> **get** **startRotationY**(): `MinMaxCurve`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:402](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L402)

Get the rotation of each quad on the y-axis

##### Returns

`MinMaxCurve`

#### Set Signature

> **set** **startRotationY**(`v`): `void`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:394](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L394)

Set the rotation of each quad on the y-axis

##### Parameters

###### v

`MinMaxCurve`

##### Returns

`void`

***

### startRotationZ

#### Get Signature

> **get** **startRotationZ**(): `MinMaxCurve`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:417](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L417)

Get the rotation of each quad on the z-axis

##### Returns

`MinMaxCurve`

#### Set Signature

> **set** **startRotationZ**(`v`): `void`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:409](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L409)

Set the rotation of each quad on the z-axis

##### Parameters

###### v

`MinMaxCurve`

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

[`ParticleTextureSheetModule`](ParticleTextureSheetModule.md).[`needReset`](ParticleTextureSheetModule.md#needreset)

## Methods

### isUseStartScaleXYZ()

> **isUseStartScaleXYZ**(): `boolean`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:357](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L357)

Is the scaling of quads different on each axis

#### Returns

`boolean`

***

### isUseStartRotationXYZ()

> **isUseStartRotationXYZ**(): `boolean`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:426](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L426)

Is the rotation of quads different on each axis

#### Returns

`boolean`

***

### generateParticleModuleData()

> **generateParticleModuleData**(`globalMemory`, `localMemory`): `void`

Defined in: [packages/particle/module/stand/ParticleEmitterModule.ts:443](https://github.com/orillusion/orillusion/blob/main/packages/particle/module/stand/ParticleEmitterModule.ts#L443)

Genarate particle emit module

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
