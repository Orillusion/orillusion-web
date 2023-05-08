# Class: btConeTwistConstraint

[Ammo](../modules/Ammo.md).btConeTwistConstraint

## Hierarchy

- [`btTypedConstraint`](Ammo.btTypedConstraint.md)

  ↳ **`btConeTwistConstraint`**


### Methods

- [enableFeedback](Ammo.btConeTwistConstraint.md#enablefeedback)
- [getBreakingImpulseThreshold](Ammo.btConeTwistConstraint.md#getbreakingimpulsethreshold)
- [setBreakingImpulseThreshold](Ammo.btConeTwistConstraint.md#setbreakingimpulsethreshold)
- [getParam](Ammo.btConeTwistConstraint.md#getparam)
- [setParam](Ammo.btConeTwistConstraint.md#setparam)
- [setLimit](Ammo.btConeTwistConstraint.md#setlimit)
- [setAngularOnly](Ammo.btConeTwistConstraint.md#setangularonly)
- [setDamping](Ammo.btConeTwistConstraint.md#setdamping)
- [enableMotor](Ammo.btConeTwistConstraint.md#enablemotor)
- [setMaxMotorImpulse](Ammo.btConeTwistConstraint.md#setmaxmotorimpulse)
- [setMaxMotorImpulseNormalized](Ammo.btConeTwistConstraint.md#setmaxmotorimpulsenormalized)
- [setMotorTarget](Ammo.btConeTwistConstraint.md#setmotortarget)
- [setMotorTargetInConstraintSpace](Ammo.btConeTwistConstraint.md#setmotortargetinconstraintspace)

### Constructors

- [constructor](Ammo.btConeTwistConstraint.md#constructor)

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

▸ **setLimit**(`limitIndex`, `limitValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `limitIndex` | `number` |
| `limitValue` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:574](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L574)

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

[packages/ammo/ammo.d.ts:575](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L575)

___

### setDamping

▸ **setDamping**(`damping`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `damping` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:576](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L576)

___

### enableMotor

▸ **enableMotor**(`b`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:577](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L577)

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

[packages/ammo/ammo.d.ts:578](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L578)

___

### setMaxMotorImpulseNormalized

▸ **setMaxMotorImpulseNormalized**(`maxMotorImpulse`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxMotorImpulse` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:579](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L579)

___

### setMotorTarget

▸ **setMotorTarget**(`q`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | [`btQuaternion`](Ammo.btQuaternion.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:580](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L580)

___

### setMotorTargetInConstraintSpace

▸ **setMotorTargetInConstraintSpace**(`q`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | [`btQuaternion`](Ammo.btQuaternion.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:581](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L581)

## Constructors

### constructor

• **new btConeTwistConstraint**(`rbA`, `rbB`, `rbAFrame`, `rbBFrame`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rbA` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `rbB` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `rbAFrame` | [`btTransform`](Ammo.btTransform.md) |
| `rbBFrame` | [`btTransform`](Ammo.btTransform.md) |

#### Overrides

[btTypedConstraint](Ammo.btTypedConstraint.md).[constructor](Ammo.btTypedConstraint.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:572](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L572)

• **new btConeTwistConstraint**(`rbA`, `rbAFrame`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rbA` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `rbAFrame` | [`btTransform`](Ammo.btTransform.md) |

#### Overrides

btTypedConstraint.constructor

#### Defined in

[packages/ammo/ammo.d.ts:573](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L573)
