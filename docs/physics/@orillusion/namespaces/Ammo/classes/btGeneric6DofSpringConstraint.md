[**@orillusion/physics**](../../../../README.md)

***

# Class: btGeneric6DofSpringConstraint

Defined in: [packages/ammo/ammo.d.ts:568](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L568)

## Extends

- [`btGeneric6DofConstraint`](btGeneric6DofConstraint.md)

## Constructors

### Constructor

> **new btGeneric6DofSpringConstraint**(`rbA`, `rbB`, `frameInA`, `frameInB`, `useLinearFrameReferenceFrameA`): `btGeneric6DofSpringConstraint`

Defined in: [packages/ammo/ammo.d.ts:569](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L569)

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

`btGeneric6DofSpringConstraint`

#### Overrides

[`btGeneric6DofConstraint`](btGeneric6DofConstraint.md).[`constructor`](btGeneric6DofConstraint.md#constructor)

### Constructor

> **new btGeneric6DofSpringConstraint**(`rbB`, `frameInB`, `useLinearFrameReferenceFrameB`): `btGeneric6DofSpringConstraint`

Defined in: [packages/ammo/ammo.d.ts:570](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L570)

#### Parameters

##### rbB

[`btRigidBody`](btRigidBody.md)

##### frameInB

[`btTransform`](btTransform.md)

##### useLinearFrameReferenceFrameB

`boolean`

#### Returns

`btGeneric6DofSpringConstraint`

#### Overrides

[`btGeneric6DofConstraint`](btGeneric6DofConstraint.md).[`constructor`](btGeneric6DofConstraint.md#constructor)

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

[`btGeneric6DofConstraint`](btGeneric6DofConstraint.md).[`enableFeedback`](btGeneric6DofConstraint.md#enablefeedback)

***

### getBreakingImpulseThreshold()

> **getBreakingImpulseThreshold**(): `number`

Defined in: [packages/ammo/ammo.d.ts:543](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L543)

#### Returns

`number`

#### Inherited from

[`btGeneric6DofConstraint`](btGeneric6DofConstraint.md).[`getBreakingImpulseThreshold`](btGeneric6DofConstraint.md#getbreakingimpulsethreshold)

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

[`btGeneric6DofConstraint`](btGeneric6DofConstraint.md).[`setBreakingImpulseThreshold`](btGeneric6DofConstraint.md#setbreakingimpulsethreshold)

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

[`btGeneric6DofConstraint`](btGeneric6DofConstraint.md).[`getParam`](btGeneric6DofConstraint.md#getparam)

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

[`btGeneric6DofConstraint`](btGeneric6DofConstraint.md).[`setParam`](btGeneric6DofConstraint.md#setparam)

***

### setLinearLowerLimit()

> **setLinearLowerLimit**(`linearLower`): `void`

Defined in: [packages/ammo/ammo.d.ts:562](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L562)

#### Parameters

##### linearLower

[`btVector3`](btVector3.md)

#### Returns

`void`

#### Inherited from

[`btGeneric6DofConstraint`](btGeneric6DofConstraint.md).[`setLinearLowerLimit`](btGeneric6DofConstraint.md#setlinearlowerlimit)

***

### setLinearUpperLimit()

> **setLinearUpperLimit**(`linearUpper`): `void`

Defined in: [packages/ammo/ammo.d.ts:563](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L563)

#### Parameters

##### linearUpper

[`btVector3`](btVector3.md)

#### Returns

`void`

#### Inherited from

[`btGeneric6DofConstraint`](btGeneric6DofConstraint.md).[`setLinearUpperLimit`](btGeneric6DofConstraint.md#setlinearupperlimit)

***

### setAngularLowerLimit()

> **setAngularLowerLimit**(`angularLower`): `void`

Defined in: [packages/ammo/ammo.d.ts:564](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L564)

#### Parameters

##### angularLower

[`btVector3`](btVector3.md)

#### Returns

`void`

#### Inherited from

[`btGeneric6DofConstraint`](btGeneric6DofConstraint.md).[`setAngularLowerLimit`](btGeneric6DofConstraint.md#setangularlowerlimit)

***

### setAngularUpperLimit()

> **setAngularUpperLimit**(`angularUpper`): `void`

Defined in: [packages/ammo/ammo.d.ts:565](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L565)

#### Parameters

##### angularUpper

[`btVector3`](btVector3.md)

#### Returns

`void`

#### Inherited from

[`btGeneric6DofConstraint`](btGeneric6DofConstraint.md).[`setAngularUpperLimit`](btGeneric6DofConstraint.md#setangularupperlimit)

***

### getFrameOffsetA()

> **getFrameOffsetA**(): [`btTransform`](btTransform.md)

Defined in: [packages/ammo/ammo.d.ts:566](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L566)

#### Returns

[`btTransform`](btTransform.md)

#### Inherited from

[`btGeneric6DofConstraint`](btGeneric6DofConstraint.md).[`getFrameOffsetA`](btGeneric6DofConstraint.md#getframeoffseta)

***

### enableSpring()

> **enableSpring**(`index`, `onOff`): `void`

Defined in: [packages/ammo/ammo.d.ts:571](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L571)

#### Parameters

##### index

`number`

##### onOff

`boolean`

#### Returns

`void`

***

### setStiffness()

> **setStiffness**(`index`, `stiffness`): `void`

Defined in: [packages/ammo/ammo.d.ts:572](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L572)

#### Parameters

##### index

`number`

##### stiffness

`number`

#### Returns

`void`

***

### setDamping()

> **setDamping**(`index`, `damping`): `void`

Defined in: [packages/ammo/ammo.d.ts:573](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L573)

#### Parameters

##### index

`number`

##### damping

`number`

#### Returns

`void`

***

### setEquilibriumPoint()

#### Call Signature

> **setEquilibriumPoint**(`index`, `val`): `void`

Defined in: [packages/ammo/ammo.d.ts:574](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L574)

##### Parameters

###### index

`number`

###### val

`number`

##### Returns

`void`

#### Call Signature

> **setEquilibriumPoint**(`index`): `void`

Defined in: [packages/ammo/ammo.d.ts:575](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L575)

##### Parameters

###### index

`number`

##### Returns

`void`

#### Call Signature

> **setEquilibriumPoint**(): `void`

Defined in: [packages/ammo/ammo.d.ts:576](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L576)

##### Returns

`void`
