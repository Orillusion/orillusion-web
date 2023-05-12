# Class: btHingeConstraint

[Ammo](../modules/Ammo.md).btHingeConstraint

## Hierarchy

- [`btTypedConstraint`](Ammo.btTypedConstraint.md)

  ↳ **`btHingeConstraint`**


### Methods

- [enableFeedback](Ammo.btHingeConstraint.md#enablefeedback)
- [getBreakingImpulseThreshold](Ammo.btHingeConstraint.md#getbreakingimpulsethreshold)
- [setBreakingImpulseThreshold](Ammo.btHingeConstraint.md#setbreakingimpulsethreshold)
- [getParam](Ammo.btHingeConstraint.md#getparam)
- [setParam](Ammo.btHingeConstraint.md#setparam)
- [setLimit](Ammo.btHingeConstraint.md#setlimit)
- [enableAngularMotor](Ammo.btHingeConstraint.md#enableangularmotor)
- [setAngularOnly](Ammo.btHingeConstraint.md#setangularonly)
- [enableMotor](Ammo.btHingeConstraint.md#enablemotor)
- [setMaxMotorImpulse](Ammo.btHingeConstraint.md#setmaxmotorimpulse)
- [setMotorTarget](Ammo.btHingeConstraint.md#setmotortarget)

### Constructors

- [constructor](Ammo.btHingeConstraint.md#constructor)

## Methods

### enableFeedback

▸ **enableFeedback**(`needsFeedback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `needsFeedback` | `boolean` |

#### Returns

`void`

#### Inherited from

[btTypedConstraint](Ammo.btTypedConstraint.md).[enableFeedback](Ammo.btTypedConstraint.md#enablefeedback)

#### Defined in

[packages/ammo/ammo.d.ts:532](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L532)

___

### getBreakingImpulseThreshold

▸ **getBreakingImpulseThreshold**(): `number`

#### Returns

`number`

#### Inherited from

[btTypedConstraint](Ammo.btTypedConstraint.md).[getBreakingImpulseThreshold](Ammo.btTypedConstraint.md#getbreakingimpulsethreshold)

#### Defined in

[packages/ammo/ammo.d.ts:533](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L533)

___

### setBreakingImpulseThreshold

▸ **setBreakingImpulseThreshold**(`threshold`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `threshold` | `number` |

#### Returns

`void`

#### Inherited from

[btTypedConstraint](Ammo.btTypedConstraint.md).[setBreakingImpulseThreshold](Ammo.btTypedConstraint.md#setbreakingimpulsethreshold)

#### Defined in

[packages/ammo/ammo.d.ts:534](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L534)

___

### getParam

▸ **getParam**(`num`, `axis`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |
| `axis` | `number` |

#### Returns

`number`

#### Inherited from

[btTypedConstraint](Ammo.btTypedConstraint.md).[getParam](Ammo.btTypedConstraint.md#getparam)

#### Defined in

[packages/ammo/ammo.d.ts:535](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L535)

___

### setParam

▸ **setParam**(`num`, `value`, `axis`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |
| `value` | `number` |
| `axis` | `number` |

#### Returns

`void`

#### Inherited from

[btTypedConstraint](Ammo.btTypedConstraint.md).[setParam](Ammo.btTypedConstraint.md#setparam)

#### Defined in

[packages/ammo/ammo.d.ts:536](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L536)

___

### setLimit

▸ **setLimit**(`low`, `high`, `softness`, `biasFactor`, `relaxationFactor?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `low` | `number` |
| `high` | `number` |
| `softness` | `number` |
| `biasFactor` | `number` |
| `relaxationFactor?` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:587](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L587)

___

### enableAngularMotor

▸ **enableAngularMotor**(`enableMotor`, `targetVelocity`, `maxMotorImpulse`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enableMotor` | `boolean` |
| `targetVelocity` | `number` |
| `maxMotorImpulse` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:588](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L588)

___

### setAngularOnly

▸ **setAngularOnly**(`angularOnly`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angularOnly` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:589](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L589)

___

### enableMotor

▸ **enableMotor**(`enableMotor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enableMotor` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:590](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L590)

___

### setMaxMotorImpulse

▸ **setMaxMotorImpulse**(`maxMotorImpulse`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxMotorImpulse` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:591](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L591)

___

### setMotorTarget

▸ **setMotorTarget**(`targetAngle`, `dt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetAngle` | `number` |
| `dt` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:592](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L592)

## Constructors

### constructor

• **new btHingeConstraint**(`rbA`, `rbB`, `pivotInA`, `pivotInB`, `axisInA`, `axisInB`, `useReferenceFrameA?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rbA` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `rbB` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `pivotInA` | [`btVector3`](Ammo.btVector3.md) |
| `pivotInB` | [`btVector3`](Ammo.btVector3.md) |
| `axisInA` | [`btVector3`](Ammo.btVector3.md) |
| `axisInB` | [`btVector3`](Ammo.btVector3.md) |
| `useReferenceFrameA?` | `boolean` |

#### Overrides

[btTypedConstraint](Ammo.btTypedConstraint.md).[constructor](Ammo.btTypedConstraint.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:584](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L584)

• **new btHingeConstraint**(`rbA`, `rbB`, `rbAFrame`, `rbBFrame`, `useReferenceFrameA?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rbA` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `rbB` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `rbAFrame` | [`btTransform`](Ammo.btTransform.md) |
| `rbBFrame` | [`btTransform`](Ammo.btTransform.md) |
| `useReferenceFrameA?` | `boolean` |

#### Overrides

btTypedConstraint.constructor

#### Defined in

[packages/ammo/ammo.d.ts:585](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L585)

• **new btHingeConstraint**(`rbA`, `rbAFrame`, `useReferenceFrameA?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rbA` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `rbAFrame` | [`btTransform`](Ammo.btTransform.md) |
| `useReferenceFrameA?` | `boolean` |

#### Overrides

btTypedConstraint.constructor

#### Defined in

[packages/ammo/ammo.d.ts:586](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L586)
