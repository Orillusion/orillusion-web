[**@orillusion/physics**](../../../../README.md)

***

# Class: btGeneric6DofConstraint

Defined in: [packages/ammo/ammo.d.ts:559](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L559)

## Extends

- [`btTypedConstraint`](btTypedConstraint.md)

## Extended by

- [`btGeneric6DofSpringConstraint`](btGeneric6DofSpringConstraint.md)

## Constructors

### Constructor

> **new btGeneric6DofConstraint**(`rbA`, `rbB`, `frameInA`, `frameInB`, `useLinearFrameReferenceFrameA`): `btGeneric6DofConstraint`

Defined in: [packages/ammo/ammo.d.ts:560](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L560)

#### Parameters

##### rbA

[`btRigidBody`](btRigidBody.md)

##### rbB

[`btRigidBody`](btRigidBody.md)

##### frameInA

[`btTransform`](btTransform.md)

##### frameInB

[`btTransform`](btTransform.md)

##### useLinearFrameReferenceFrameA

`boolean`

#### Returns

`btGeneric6DofConstraint`

#### Overrides

[`btTypedConstraint`](btTypedConstraint.md).[`constructor`](btTypedConstraint.md#constructor)

### Constructor

> **new btGeneric6DofConstraint**(`rbB`, `frameInB`, `useLinearFrameReferenceFrameB`): `btGeneric6DofConstraint`

Defined in: [packages/ammo/ammo.d.ts:561](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L561)

#### Parameters

##### rbB

[`btRigidBody`](btRigidBody.md)

##### frameInB

[`btTransform`](btTransform.md)

##### useLinearFrameReferenceFrameB

`boolean`

#### Returns

`btGeneric6DofConstraint`

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

### setLinearLowerLimit()

> **setLinearLowerLimit**(`linearLower`): `void`

Defined in: [packages/ammo/ammo.d.ts:562](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L562)

#### Parameters

##### linearLower

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### setLinearUpperLimit()

> **setLinearUpperLimit**(`linearUpper`): `void`

Defined in: [packages/ammo/ammo.d.ts:563](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L563)

#### Parameters

##### linearUpper

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### setAngularLowerLimit()

> **setAngularLowerLimit**(`angularLower`): `void`

Defined in: [packages/ammo/ammo.d.ts:564](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L564)

#### Parameters

##### angularLower

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### setAngularUpperLimit()

> **setAngularUpperLimit**(`angularUpper`): `void`

Defined in: [packages/ammo/ammo.d.ts:565](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L565)

#### Parameters

##### angularUpper

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### getFrameOffsetA()

> **getFrameOffsetA**(): [`btTransform`](btTransform.md)

Defined in: [packages/ammo/ammo.d.ts:566](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L566)

#### Returns

[`btTransform`](btTransform.md)
