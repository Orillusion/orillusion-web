# Class: btSliderConstraint

[Ammo](../modules/Ammo.md).btSliderConstraint

## Hierarchy

- [`btTypedConstraint`](Ammo.btTypedConstraint.md)

  ↳ **`btSliderConstraint`**


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

### Constructors

- [constructor](Ammo.btSliderConstraint.md#constructor)

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

### setLowerLinLimit

▸ **setLowerLinLimit**(`lowerLimit`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lowerLimit` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:597](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L597)

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

[packages/ammo/ammo.d.ts:598](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L598)

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

[packages/ammo/ammo.d.ts:599](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L599)

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

[packages/ammo/ammo.d.ts:600](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L600)

## Constructors

### constructor

• **new btSliderConstraint**(`rbA`, `rbB`, `frameInA`, `frameInB`, `useLinearReferenceFrameA`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rbA` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `rbB` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `frameInA` | [`btTransform`](Ammo.btTransform.md) |
| `frameInB` | [`btTransform`](Ammo.btTransform.md) |
| `useLinearReferenceFrameA` | `boolean` |

#### Overrides

[btTypedConstraint](Ammo.btTypedConstraint.md).[constructor](Ammo.btTypedConstraint.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:595](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L595)

• **new btSliderConstraint**(`rbB`, `frameInB`, `useLinearReferenceFrameA`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rbB` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `frameInB` | [`btTransform`](Ammo.btTransform.md) |
| `useLinearReferenceFrameA` | `boolean` |

#### Overrides

btTypedConstraint.constructor

#### Defined in

[packages/ammo/ammo.d.ts:596](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L596)
