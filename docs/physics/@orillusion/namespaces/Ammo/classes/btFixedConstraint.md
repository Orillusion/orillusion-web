[**@orillusion/physics**](../../../../README.md)

***

# Class: btFixedConstraint

Defined in: [packages/ammo/ammo.d.ts:617](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L617)

## Extends

- [`btTypedConstraint`](btTypedConstraint.md)

## Constructors

### Constructor

> **new btFixedConstraint**(`rbA`, `rbB`, `frameInA`, `frameInB`): `btFixedConstraint`

Defined in: [packages/ammo/ammo.d.ts:618](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L618)

#### Parameters

##### rbA

[`btRigidBody`](btRigidBody.md)

##### rbB

[`btRigidBody`](btRigidBody.md)

##### frameInA

[`btTransform`](btTransform.md)

##### frameInB

[`btTransform`](btTransform.md)

#### Returns

`btFixedConstraint`

#### Overrides

[`btTypedConstraint`](btTypedConstraint.md).[`constructor`](btTypedConstraint.md#constructor)

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
