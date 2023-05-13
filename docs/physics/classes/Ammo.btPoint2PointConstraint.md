# Class: btPoint2PointConstraint

[Ammo](../modules/Ammo.md).btPoint2PointConstraint

## Hierarchy

- [`btTypedConstraint`](Ammo.btTypedConstraint.md)

  ↳ **`btPoint2PointConstraint`**


### Methods

- [enableFeedback](Ammo.btPoint2PointConstraint.md#enablefeedback)
- [getBreakingImpulseThreshold](Ammo.btPoint2PointConstraint.md#getbreakingimpulsethreshold)
- [setBreakingImpulseThreshold](Ammo.btPoint2PointConstraint.md#setbreakingimpulsethreshold)
- [getParam](Ammo.btPoint2PointConstraint.md#getparam)
- [setParam](Ammo.btPoint2PointConstraint.md#setparam)
- [setPivotA](Ammo.btPoint2PointConstraint.md#setpivota)
- [setPivotB](Ammo.btPoint2PointConstraint.md#setpivotb)
- [getPivotInA](Ammo.btPoint2PointConstraint.md#getpivotina)
- [getPivotInB](Ammo.btPoint2PointConstraint.md#getpivotinb)
- [get\_m\_setting](Ammo.btPoint2PointConstraint.md#get_m_setting)
- [set\_m\_setting](Ammo.btPoint2PointConstraint.md#set_m_setting)

### Constructors

- [constructor](Ammo.btPoint2PointConstraint.md#constructor)

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

### setPivotA

▸ **setPivotA**(`pivotA`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pivotA` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:542](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L542)

___

### setPivotB

▸ **setPivotB**(`pivotB`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pivotB` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:543](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L543)

___

### getPivotInA

▸ **getPivotInA**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/ammo/ammo.d.ts:544](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L544)

___

### getPivotInB

▸ **getPivotInB**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/ammo/ammo.d.ts:545](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L545)

___

### get\_m\_setting

▸ **get_m_setting**(): [`btConstraintSetting`](Ammo.btConstraintSetting.md)

#### Returns

[`btConstraintSetting`](Ammo.btConstraintSetting.md)

#### Defined in

[packages/ammo/ammo.d.ts:546](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L546)

___

### set\_m\_setting

▸ **set_m_setting**(`m_setting`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_setting` | [`btConstraintSetting`](Ammo.btConstraintSetting.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:547](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L547)

## Constructors

### constructor

• **new btPoint2PointConstraint**(`rbA`, `rbB`, `pivotInA`, `pivotInB`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rbA` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `rbB` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `pivotInA` | [`btVector3`](Ammo.btVector3.md) |
| `pivotInB` | [`btVector3`](Ammo.btVector3.md) |

#### Overrides

[btTypedConstraint](Ammo.btTypedConstraint.md).[constructor](Ammo.btTypedConstraint.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:540](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L540)

• **new btPoint2PointConstraint**(`rbA`, `pivotInA`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rbA` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `pivotInA` | [`btVector3`](Ammo.btVector3.md) |

#### Overrides

btTypedConstraint.constructor

#### Defined in

[packages/ammo/ammo.d.ts:541](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L541)
