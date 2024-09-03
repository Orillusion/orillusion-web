# Class: btConeTwistConstraint

[Ammo](../modules/Ammo.md).btConeTwistConstraint

## Hierarchy

- [`btTypedConstraint`](Ammo.btTypedConstraint.md)

  ↳ **`btConeTwistConstraint`**

### Constructors

- [constructor](Ammo.btConeTwistConstraint.md#constructor)

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

## Constructors

### constructor

• **new btConeTwistConstraint**(`rbA`, `rbB`, `rbAFrame`, `rbBFrame`): [`btConeTwistConstraint`](Ammo.btConeTwistConstraint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rbA` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `rbB` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `rbAFrame` | [`btTransform`](Ammo.btTransform.md) |
| `rbBFrame` | [`btTransform`](Ammo.btTransform.md) |

#### Returns

[`btConeTwistConstraint`](Ammo.btConeTwistConstraint.md)

#### Overrides

[btTypedConstraint](Ammo.btTypedConstraint.md).[constructor](Ammo.btTypedConstraint.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:582](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L582)

• **new btConeTwistConstraint**(`rbA`, `rbAFrame`): [`btConeTwistConstraint`](Ammo.btConeTwistConstraint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rbA` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `rbAFrame` | [`btTransform`](Ammo.btTransform.md) |

#### Returns

[`btConeTwistConstraint`](Ammo.btConeTwistConstraint.md)

#### Overrides

btTypedConstraint.constructor

#### Defined in

[packages/ammo/ammo.d.ts:583](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L583)

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

[packages/ammo/ammo.d.ts:542](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L542)

___

### getBreakingImpulseThreshold

▸ **getBreakingImpulseThreshold**(): `number`

#### Returns

`number`

#### Inherited from

[btTypedConstraint](Ammo.btTypedConstraint.md).[getBreakingImpulseThreshold](Ammo.btTypedConstraint.md#getbreakingimpulsethreshold)

#### Defined in

[packages/ammo/ammo.d.ts:543](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L543)

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

[packages/ammo/ammo.d.ts:544](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L544)

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

[packages/ammo/ammo.d.ts:545](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L545)

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

[packages/ammo/ammo.d.ts:546](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L546)

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

[packages/ammo/ammo.d.ts:584](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L584)

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

[packages/ammo/ammo.d.ts:585](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L585)

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

[packages/ammo/ammo.d.ts:586](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L586)

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

[packages/ammo/ammo.d.ts:587](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L587)

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

[packages/ammo/ammo.d.ts:588](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L588)

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

[packages/ammo/ammo.d.ts:589](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L589)

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

[packages/ammo/ammo.d.ts:590](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L590)

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

[packages/ammo/ammo.d.ts:591](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L591)
