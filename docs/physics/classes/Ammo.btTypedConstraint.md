# Class: btTypedConstraint

[Ammo](../modules/Ammo.md).btTypedConstraint

## Hierarchy

- **`btTypedConstraint`**

  ↳ [`btPoint2PointConstraint`](Ammo.btPoint2PointConstraint.md)

  ↳ [`btGeneric6DofConstraint`](Ammo.btGeneric6DofConstraint.md)

  ↳ [`btConeTwistConstraint`](Ammo.btConeTwistConstraint.md)

  ↳ [`btHingeConstraint`](Ammo.btHingeConstraint.md)

  ↳ [`btSliderConstraint`](Ammo.btSliderConstraint.md)

  ↳ [`btFixedConstraint`](Ammo.btFixedConstraint.md)


### Constructors

- [constructor](Ammo.btTypedConstraint.md#constructor)

### Methods

- [enableFeedback](Ammo.btTypedConstraint.md#enablefeedback)
- [getBreakingImpulseThreshold](Ammo.btTypedConstraint.md#getbreakingimpulsethreshold)
- [setBreakingImpulseThreshold](Ammo.btTypedConstraint.md#setbreakingimpulsethreshold)
- [getParam](Ammo.btTypedConstraint.md#getparam)
- [setParam](Ammo.btTypedConstraint.md#setparam)

## Constructors

### constructor

• **new btTypedConstraint**()

## Methods

### enableFeedback

▸ **enableFeedback**(`needsFeedback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `needsFeedback` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:532](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L532)

___

### getBreakingImpulseThreshold

▸ **getBreakingImpulseThreshold**(): `number`

#### Returns

`number`

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

#### Defined in

[packages/ammo/ammo.d.ts:536](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L536)
