[**@orillusion/physics**](../../../../README.md)

***

# Class: btSliderConstraint

Defined in: [packages/ammo/ammo.d.ts:604](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L604)

## Extends

- [`btTypedConstraint`](btTypedConstraint.md)

## Constructors

### Constructor

> **new btSliderConstraint**(`rbA`, `rbB`, `frameInA`, `frameInB`, `useLinearReferenceFrameA`): `btSliderConstraint`

Defined in: [packages/ammo/ammo.d.ts:605](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L605)

#### Parameters

##### rbA

[`btRigidBody`](btRigidBody.md)

##### rbB

[`btRigidBody`](btRigidBody.md)

##### frameInA

[`btTransform`](btTransform.md)

##### frameInB

[`btTransform`](btTransform.md)

##### useLinearReferenceFrameA

`boolean`

#### Returns

`btSliderConstraint`

#### Overrides

[`btTypedConstraint`](btTypedConstraint.md).[`constructor`](btTypedConstraint.md#constructor)

### Constructor

> **new btSliderConstraint**(`rbB`, `frameInB`, `useLinearReferenceFrameA`): `btSliderConstraint`

Defined in: [packages/ammo/ammo.d.ts:606](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L606)

#### Parameters

##### rbB

[`btRigidBody`](btRigidBody.md)

##### frameInB

[`btTransform`](btTransform.md)

##### useLinearReferenceFrameA

`boolean`

#### Returns

`btSliderConstraint`

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

### setLowerLinLimit()

> **setLowerLinLimit**(`lowerLimit`): `void`

Defined in: [packages/ammo/ammo.d.ts:607](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L607)

#### Parameters

##### lowerLimit

`number`

#### Returns

`void`

***

### setUpperLinLimit()

> **setUpperLinLimit**(`upperLimit`): `void`

Defined in: [packages/ammo/ammo.d.ts:608](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L608)

#### Parameters

##### upperLimit

`number`

#### Returns

`void`

***

### setLowerAngLimit()

> **setLowerAngLimit**(`lowerAngLimit`): `void`

Defined in: [packages/ammo/ammo.d.ts:609](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L609)

#### Parameters

##### lowerAngLimit

`number`

#### Returns

`void`

***

### setUpperAngLimit()

> **setUpperAngLimit**(`upperAngLimit`): `void`

Defined in: [packages/ammo/ammo.d.ts:610](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L610)

#### Parameters

##### upperAngLimit

`number`

#### Returns

`void`

***

### getLinearPos()

> **getLinearPos**(): `number`

Defined in: [packages/ammo/ammo.d.ts:611](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L611)

#### Returns

`number`

***

### getAngularPos()

> **getAngularPos**(): `number`

Defined in: [packages/ammo/ammo.d.ts:612](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L612)

#### Returns

`number`

***

### setTargetLinMotorVelocity()

> **setTargetLinMotorVelocity**(`velocity`): `void`

Defined in: [packages/ammo/ammo.d.ts:613](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L613)

#### Parameters

##### velocity

`number`

#### Returns

`void`

***

### setPoweredLinMotor()

> **setPoweredLinMotor**(`onOff`): `void`

Defined in: [packages/ammo/ammo.d.ts:614](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L614)

#### Parameters

##### onOff

`boolean`

#### Returns

`void`

***

### setMaxLinMotorForce()

> **setMaxLinMotorForce**(`force`): `void`

Defined in: [packages/ammo/ammo.d.ts:615](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L615)

#### Parameters

##### force

`number`

#### Returns

`void`
