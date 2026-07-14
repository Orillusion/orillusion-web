[**@orillusion/physics**](../../../../README.md)

***

# Class: btPoint2PointConstraint

Defined in: [packages/ammo/ammo.d.ts:549](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L549)

## Extends

- [`btTypedConstraint`](btTypedConstraint.md)

## Constructors

### Constructor

> **new btPoint2PointConstraint**(`rbA`, `rbB`, `pivotInA`, `pivotInB`): `btPoint2PointConstraint`

Defined in: [packages/ammo/ammo.d.ts:550](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L550)

#### Parameters

##### rbA

[`btRigidBody`](btRigidBody.md)

##### rbB

[`btRigidBody`](btRigidBody.md)

##### pivotInA

[`btVector3`](btVector3.md)

##### pivotInB

[`btVector3`](btVector3.md)

#### Returns

`btPoint2PointConstraint`

#### Overrides

[`btTypedConstraint`](btTypedConstraint.md).[`constructor`](btTypedConstraint.md#constructor)

### Constructor

> **new btPoint2PointConstraint**(`rbA`, `pivotInA`): `btPoint2PointConstraint`

Defined in: [packages/ammo/ammo.d.ts:551](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L551)

#### Parameters

##### rbA

[`btRigidBody`](btRigidBody.md)

##### pivotInA

[`btVector3`](btVector3.md)

#### Returns

`btPoint2PointConstraint`

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

### setPivotA()

> **setPivotA**(`pivotA`): `void`

Defined in: [packages/ammo/ammo.d.ts:552](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L552)

#### Parameters

##### pivotA

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### setPivotB()

> **setPivotB**(`pivotB`): `void`

Defined in: [packages/ammo/ammo.d.ts:553](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L553)

#### Parameters

##### pivotB

[`btVector3`](btVector3.md)

#### Returns

`void`

***

### getPivotInA()

> **getPivotInA**(): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:554](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L554)

#### Returns

[`btVector3`](btVector3.md)

***

### getPivotInB()

> **getPivotInB**(): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:555](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L555)

#### Returns

[`btVector3`](btVector3.md)

***

### get\_m\_setting()

> **get\_m\_setting**(): [`btConstraintSetting`](btConstraintSetting.md)

Defined in: [packages/ammo/ammo.d.ts:556](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L556)

#### Returns

[`btConstraintSetting`](btConstraintSetting.md)

***

### set\_m\_setting()

> **set\_m\_setting**(`m_setting`): `void`

Defined in: [packages/ammo/ammo.d.ts:557](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L557)

#### Parameters

##### m\_setting

[`btConstraintSetting`](btConstraintSetting.md)

#### Returns

`void`
