[**@orillusion/physics**](../../../../README.md)

***

# Class: btHingeConstraint

Defined in: [packages/ammo/ammo.d.ts:593](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L593)

## Extends

- [`btTypedConstraint`](btTypedConstraint.md)

## Constructors

### Constructor

> **new btHingeConstraint**(`rbA`, `rbB`, `pivotInA`, `pivotInB`, `axisInA`, `axisInB`, `useReferenceFrameA?`): `btHingeConstraint`

Defined in: [packages/ammo/ammo.d.ts:594](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L594)

#### Parameters

##### rbA

[`btRigidBody`](btRigidBody.md)

##### rbB

[`btRigidBody`](btRigidBody.md)

##### pivotInA

[`btVector3`](btVector3.md)

##### pivotInB

[`btVector3`](btVector3.md)

##### axisInA

[`btVector3`](btVector3.md)

##### axisInB

[`btVector3`](btVector3.md)

##### useReferenceFrameA?

`boolean`

#### Returns

`btHingeConstraint`

#### Overrides

[`btTypedConstraint`](btTypedConstraint.md).[`constructor`](btTypedConstraint.md#constructor)

### Constructor

> **new btHingeConstraint**(`rbA`, `rbB`, `rbAFrame`, `rbBFrame`, `useReferenceFrameA?`): `btHingeConstraint`

Defined in: [packages/ammo/ammo.d.ts:595](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L595)

#### Parameters

##### rbA

[`btRigidBody`](btRigidBody.md)

##### rbB

[`btRigidBody`](btRigidBody.md)

##### rbAFrame

[`btTransform`](btTransform.md)

##### rbBFrame

[`btTransform`](btTransform.md)

##### useReferenceFrameA?

`boolean`

#### Returns

`btHingeConstraint`

#### Overrides

`btTypedConstraint.constructor`

### Constructor

> **new btHingeConstraint**(`rbA`, `rbAFrame`, `useReferenceFrameA?`): `btHingeConstraint`

Defined in: [packages/ammo/ammo.d.ts:596](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L596)

#### Parameters

##### rbA

[`btRigidBody`](btRigidBody.md)

##### rbAFrame

[`btTransform`](btTransform.md)

##### useReferenceFrameA?

`boolean`

#### Returns

`btHingeConstraint`

#### Overrides

`btTypedConstraint.constructor`

## Methods

### enableFeedback()

> **enableFeedback**(`needsFeedback`): `void`

Defined in: [packages/ammo/ammo.d.ts:542](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L542)

#### Parameters

##### needsFeedback

`boolean`

#### Returns

`void`

#### Inherited from

[`btTypedConstraint`](btTypedConstraint.md).[`enableFeedback`](btTypedConstraint.md#enablefeedback)

***

### getBreakingImpulseThreshold()

> **getBreakingImpulseThreshold**(): `number`

Defined in: [packages/ammo/ammo.d.ts:543](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L543)

#### Returns

`number`

#### Inherited from

[`btTypedConstraint`](btTypedConstraint.md).[`getBreakingImpulseThreshold`](btTypedConstraint.md#getbreakingimpulsethreshold)

***

### setBreakingImpulseThreshold()

> **setBreakingImpulseThreshold**(`threshold`): `void`

Defined in: [packages/ammo/ammo.d.ts:544](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L544)

#### Parameters

##### threshold

`number`

#### Returns

`void`

#### Inherited from

[`btTypedConstraint`](btTypedConstraint.md).[`setBreakingImpulseThreshold`](btTypedConstraint.md#setbreakingimpulsethreshold)

***

### getParam()

> **getParam**(`num`, `axis`): `number`

Defined in: [packages/ammo/ammo.d.ts:545](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L545)

#### Parameters

##### num

`number`

##### axis

`number`

#### Returns

`number`

#### Inherited from

[`btTypedConstraint`](btTypedConstraint.md).[`getParam`](btTypedConstraint.md#getparam)

***

### setParam()

> **setParam**(`num`, `value`, `axis`): `void`

Defined in: [packages/ammo/ammo.d.ts:546](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L546)

#### Parameters

##### num

`number`

##### value

`number`

##### axis

`number`

#### Returns

`void`

#### Inherited from

[`btTypedConstraint`](btTypedConstraint.md).[`setParam`](btTypedConstraint.md#setparam)

***

### setLimit()

> **setLimit**(`low`, `high`, `softness`, `biasFactor`, `relaxationFactor?`): `void`

Defined in: [packages/ammo/ammo.d.ts:597](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L597)

#### Parameters

##### low

`number`

##### high

`number`

##### softness

`number`

##### biasFactor

`number`

##### relaxationFactor?

`number`

#### Returns

`void`

***

### enableAngularMotor()

> **enableAngularMotor**(`enableMotor`, `targetVelocity`, `maxMotorImpulse`): `void`

Defined in: [packages/ammo/ammo.d.ts:598](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L598)

#### Parameters

##### enableMotor

`boolean`

##### targetVelocity

`number`

##### maxMotorImpulse

`number`

#### Returns

`void`

***

### setAngularOnly()

> **setAngularOnly**(`angularOnly`): `void`

Defined in: [packages/ammo/ammo.d.ts:599](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L599)

#### Parameters

##### angularOnly

`boolean`

#### Returns

`void`

***

### enableMotor()

> **enableMotor**(`enableMotor`): `void`

Defined in: [packages/ammo/ammo.d.ts:600](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L600)

#### Parameters

##### enableMotor

`boolean`

#### Returns

`void`

***

### setMaxMotorImpulse()

> **setMaxMotorImpulse**(`maxMotorImpulse`): `void`

Defined in: [packages/ammo/ammo.d.ts:601](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L601)

#### Parameters

##### maxMotorImpulse

`number`

#### Returns

`void`

***

### setMotorTarget()

> **setMotorTarget**(`targetAngle`, `dt`): `void`

Defined in: [packages/ammo/ammo.d.ts:602](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L602)

#### Parameters

##### targetAngle

`number`

##### dt

`number`

#### Returns

`void`
