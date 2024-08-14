# Class: btHingeConstraint

[Ammo](../modules/Ammo.md).btHingeConstraint

## Hierarchy

- [`btTypedConstraint`](Ammo.btTypedConstraint.md)

  ↳ **`btHingeConstraint`**

### Constructors

- [constructor](Ammo.btHingeConstraint.md#constructor)

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

## Constructors

### constructor

• **new btHingeConstraint**(`rbA`, `rbB`, `pivotInA`, `pivotInB`, `axisInA`, `axisInB`, `useReferenceFrameA?`): [`btHingeConstraint`](Ammo.btHingeConstraint.md)

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

#### Returns

[`btHingeConstraint`](Ammo.btHingeConstraint.md)

#### Overrides

[btTypedConstraint](Ammo.btTypedConstraint.md).[constructor](Ammo.btTypedConstraint.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:594](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L594)

• **new btHingeConstraint**(`rbA`, `rbB`, `rbAFrame`, `rbBFrame`, `useReferenceFrameA?`): [`btHingeConstraint`](Ammo.btHingeConstraint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rbA` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `rbB` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `rbAFrame` | [`btTransform`](Ammo.btTransform.md) |
| `rbBFrame` | [`btTransform`](Ammo.btTransform.md) |
| `useReferenceFrameA?` | `boolean` |

#### Returns

[`btHingeConstraint`](Ammo.btHingeConstraint.md)

#### Overrides

btTypedConstraint.constructor

#### Defined in

[packages/ammo/ammo.d.ts:595](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L595)

• **new btHingeConstraint**(`rbA`, `rbAFrame`, `useReferenceFrameA?`): [`btHingeConstraint`](Ammo.btHingeConstraint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rbA` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `rbAFrame` | [`btTransform`](Ammo.btTransform.md) |
| `useReferenceFrameA?` | `boolean` |

#### Returns

[`btHingeConstraint`](Ammo.btHingeConstraint.md)

#### Overrides

btTypedConstraint.constructor

#### Defined in

[packages/ammo/ammo.d.ts:596](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L596)

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

[packages/ammo/ammo.d.ts:597](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L597)

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

[packages/ammo/ammo.d.ts:598](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L598)

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

[packages/ammo/ammo.d.ts:599](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L599)

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

[packages/ammo/ammo.d.ts:600](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L600)

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

[packages/ammo/ammo.d.ts:601](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L601)

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

[packages/ammo/ammo.d.ts:602](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L602)
