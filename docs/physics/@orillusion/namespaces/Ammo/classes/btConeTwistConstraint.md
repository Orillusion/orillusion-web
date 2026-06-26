[**@orillusion/physics**](../../../../README.md)

***

# Class: btConeTwistConstraint

Defined in: [packages/ammo/ammo.d.ts:581](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L581)

## Extends

- [`btTypedConstraint`](btTypedConstraint.md)

## Constructors

### Constructor

> **new btConeTwistConstraint**(`rbA`, `rbB`, `rbAFrame`, `rbBFrame`): `btConeTwistConstraint`

Defined in: [packages/ammo/ammo.d.ts:582](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L582)

#### Parameters

##### rbA

[`btRigidBody`](btRigidBody.md)

##### rbB

[`btRigidBody`](btRigidBody.md)

##### rbAFrame

[`btTransform`](btTransform.md)

##### rbBFrame

[`btTransform`](btTransform.md)

#### Returns

`btConeTwistConstraint`

#### Overrides

[`btTypedConstraint`](btTypedConstraint.md).[`constructor`](btTypedConstraint.md#constructor)

### Constructor

> **new btConeTwistConstraint**(`rbA`, `rbAFrame`): `btConeTwistConstraint`

Defined in: [packages/ammo/ammo.d.ts:583](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L583)

#### Parameters

##### rbA

[`btRigidBody`](btRigidBody.md)

##### rbAFrame

[`btTransform`](btTransform.md)

#### Returns

`btConeTwistConstraint`

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

> **setLimit**(`limitIndex`, `limitValue`): `void`

Defined in: [packages/ammo/ammo.d.ts:584](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L584)

#### Parameters

##### limitIndex

`number`

##### limitValue

`number`

#### Returns

`void`

***

### setAngularOnly()

> **setAngularOnly**(`angularOnly`): `void`

Defined in: [packages/ammo/ammo.d.ts:585](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L585)

#### Parameters

##### angularOnly

`boolean`

#### Returns

`void`

***

### setDamping()

> **setDamping**(`damping`): `void`

Defined in: [packages/ammo/ammo.d.ts:586](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L586)

#### Parameters

##### damping

`number`

#### Returns

`void`

***

### enableMotor()

> **enableMotor**(`b`): `void`

Defined in: [packages/ammo/ammo.d.ts:587](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L587)

#### Parameters

##### b

`boolean`

#### Returns

`void`

***

### setMaxMotorImpulse()

> **setMaxMotorImpulse**(`maxMotorImpulse`): `void`

Defined in: [packages/ammo/ammo.d.ts:588](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L588)

#### Parameters

##### maxMotorImpulse

`number`

#### Returns

`void`

***

### setMaxMotorImpulseNormalized()

> **setMaxMotorImpulseNormalized**(`maxMotorImpulse`): `void`

Defined in: [packages/ammo/ammo.d.ts:589](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L589)

#### Parameters

##### maxMotorImpulse

`number`

#### Returns

`void`

***

### setMotorTarget()

> **setMotorTarget**(`q`): `void`

Defined in: [packages/ammo/ammo.d.ts:590](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L590)

#### Parameters

##### q

[`btQuaternion`](btQuaternion.md)

#### Returns

`void`

***

### setMotorTargetInConstraintSpace()

> **setMotorTargetInConstraintSpace**(`q`): `void`

Defined in: [packages/ammo/ammo.d.ts:591](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L591)

#### Parameters

##### q

[`btQuaternion`](btQuaternion.md)

#### Returns

`void`
