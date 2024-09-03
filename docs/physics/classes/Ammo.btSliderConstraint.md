# Class: btSliderConstraint

[Ammo](../modules/Ammo.md).btSliderConstraint

## Hierarchy

- [`btTypedConstraint`](Ammo.btTypedConstraint.md)

  ↳ **`btSliderConstraint`**

### Constructors

- [constructor](Ammo.btSliderConstraint.md#constructor)

### Methods

- [enableFeedback](Ammo.btSliderConstraint.md#enablefeedback)
- [getBreakingImpulseThreshold](Ammo.btSliderConstraint.md#getbreakingimpulsethreshold)
- [setBreakingImpulseThreshold](Ammo.btSliderConstraint.md#setbreakingimpulsethreshold)
- [getParam](Ammo.btSliderConstraint.md#getparam)
- [setParam](Ammo.btSliderConstraint.md#setparam)
- [setLowerLinLimit](Ammo.btSliderConstraint.md#setlowerlinlimit)
- [setUpperLinLimit](Ammo.btSliderConstraint.md#setupperlinlimit)
- [setLowerAngLimit](Ammo.btSliderConstraint.md#setloweranglimit)
- [setUpperAngLimit](Ammo.btSliderConstraint.md#setupperanglimit)
- [getLinearPos](Ammo.btSliderConstraint.md#getlinearpos)
- [getAngularPos](Ammo.btSliderConstraint.md#getangularpos)
- [setTargetLinMotorVelocity](Ammo.btSliderConstraint.md#settargetlinmotorvelocity)
- [setPoweredLinMotor](Ammo.btSliderConstraint.md#setpoweredlinmotor)
- [setMaxLinMotorForce](Ammo.btSliderConstraint.md#setmaxlinmotorforce)

## Constructors

### constructor

• **new btSliderConstraint**(`rbA`, `rbB`, `frameInA`, `frameInB`, `useLinearReferenceFrameA`): [`btSliderConstraint`](Ammo.btSliderConstraint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rbA` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `rbB` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `frameInA` | [`btTransform`](Ammo.btTransform.md) |
| `frameInB` | [`btTransform`](Ammo.btTransform.md) |
| `useLinearReferenceFrameA` | `boolean` |

#### Returns

[`btSliderConstraint`](Ammo.btSliderConstraint.md)

#### Overrides

[btTypedConstraint](Ammo.btTypedConstraint.md).[constructor](Ammo.btTypedConstraint.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:605](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L605)

• **new btSliderConstraint**(`rbB`, `frameInB`, `useLinearReferenceFrameA`): [`btSliderConstraint`](Ammo.btSliderConstraint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rbB` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `frameInB` | [`btTransform`](Ammo.btTransform.md) |
| `useLinearReferenceFrameA` | `boolean` |

#### Returns

[`btSliderConstraint`](Ammo.btSliderConstraint.md)

#### Overrides

btTypedConstraint.constructor

#### Defined in

[packages/ammo/ammo.d.ts:606](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L606)

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

### setLowerLinLimit

▸ **setLowerLinLimit**(`lowerLimit`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lowerLimit` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:607](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L607)

___

### setUpperLinLimit

▸ **setUpperLinLimit**(`upperLimit`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `upperLimit` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:608](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L608)

___

### setLowerAngLimit

▸ **setLowerAngLimit**(`lowerAngLimit`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lowerAngLimit` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:609](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L609)

___

### setUpperAngLimit

▸ **setUpperAngLimit**(`upperAngLimit`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `upperAngLimit` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:610](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L610)

___

### getLinearPos

▸ **getLinearPos**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:611](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L611)

___

### getAngularPos

▸ **getAngularPos**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:612](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L612)

___

### setTargetLinMotorVelocity

▸ **setTargetLinMotorVelocity**(`velocity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `velocity` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:613](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L613)

___

### setPoweredLinMotor

▸ **setPoweredLinMotor**(`onOff`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onOff` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:614](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L614)

___

### setMaxLinMotorForce

▸ **setMaxLinMotorForce**(`force`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:615](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L615)
