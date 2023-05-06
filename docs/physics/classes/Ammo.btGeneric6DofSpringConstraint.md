# Class: btGeneric6DofSpringConstraint

[Ammo](../modules/Ammo.md).btGeneric6DofSpringConstraint

## Hierarchy

- [`btGeneric6DofConstraint`](Ammo.btGeneric6DofConstraint.md)

  ↳ **`btGeneric6DofSpringConstraint`**


### Methods

- [enableFeedback](Ammo.btGeneric6DofSpringConstraint.md#enablefeedback)
- [getBreakingImpulseThreshold](Ammo.btGeneric6DofSpringConstraint.md#getbreakingimpulsethreshold)
- [setBreakingImpulseThreshold](Ammo.btGeneric6DofSpringConstraint.md#setbreakingimpulsethreshold)
- [getParam](Ammo.btGeneric6DofSpringConstraint.md#getparam)
- [setParam](Ammo.btGeneric6DofSpringConstraint.md#setparam)
- [setLinearLowerLimit](Ammo.btGeneric6DofSpringConstraint.md#setlinearlowerlimit)
- [setLinearUpperLimit](Ammo.btGeneric6DofSpringConstraint.md#setlinearupperlimit)
- [setAngularLowerLimit](Ammo.btGeneric6DofSpringConstraint.md#setangularlowerlimit)
- [setAngularUpperLimit](Ammo.btGeneric6DofSpringConstraint.md#setangularupperlimit)
- [getFrameOffsetA](Ammo.btGeneric6DofSpringConstraint.md#getframeoffseta)
- [enableSpring](Ammo.btGeneric6DofSpringConstraint.md#enablespring)
- [setStiffness](Ammo.btGeneric6DofSpringConstraint.md#setstiffness)
- [setDamping](Ammo.btGeneric6DofSpringConstraint.md#setdamping)
- [setEquilibriumPoint](Ammo.btGeneric6DofSpringConstraint.md#setequilibriumpoint)

### Constructors

- [constructor](Ammo.btGeneric6DofSpringConstraint.md#constructor)

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

[btGeneric6DofConstraint](Ammo.btGeneric6DofConstraint.md).[enableFeedback](Ammo.btGeneric6DofConstraint.md#enablefeedback)

#### Defined in

[packages/ammo/ammo.d.ts:532](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L532)

___

### getBreakingImpulseThreshold

▸ **getBreakingImpulseThreshold**(): `number`

#### Returns

`number`

#### Inherited from

[btGeneric6DofConstraint](Ammo.btGeneric6DofConstraint.md).[getBreakingImpulseThreshold](Ammo.btGeneric6DofConstraint.md#getbreakingimpulsethreshold)

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

[btGeneric6DofConstraint](Ammo.btGeneric6DofConstraint.md).[setBreakingImpulseThreshold](Ammo.btGeneric6DofConstraint.md#setbreakingimpulsethreshold)

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

[btGeneric6DofConstraint](Ammo.btGeneric6DofConstraint.md).[getParam](Ammo.btGeneric6DofConstraint.md#getparam)

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

[btGeneric6DofConstraint](Ammo.btGeneric6DofConstraint.md).[setParam](Ammo.btGeneric6DofConstraint.md#setparam)

#### Defined in

[packages/ammo/ammo.d.ts:536](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L536)

___

### setLinearLowerLimit

▸ **setLinearLowerLimit**(`linearLower`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearLower` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Inherited from

[btGeneric6DofConstraint](Ammo.btGeneric6DofConstraint.md).[setLinearLowerLimit](Ammo.btGeneric6DofConstraint.md#setlinearlowerlimit)

#### Defined in

[packages/ammo/ammo.d.ts:552](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L552)

___

### setLinearUpperLimit

▸ **setLinearUpperLimit**(`linearUpper`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearUpper` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Inherited from

[btGeneric6DofConstraint](Ammo.btGeneric6DofConstraint.md).[setLinearUpperLimit](Ammo.btGeneric6DofConstraint.md#setlinearupperlimit)

#### Defined in

[packages/ammo/ammo.d.ts:553](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L553)

___

### setAngularLowerLimit

▸ **setAngularLowerLimit**(`angularLower`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angularLower` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Inherited from

[btGeneric6DofConstraint](Ammo.btGeneric6DofConstraint.md).[setAngularLowerLimit](Ammo.btGeneric6DofConstraint.md#setangularlowerlimit)

#### Defined in

[packages/ammo/ammo.d.ts:554](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L554)

___

### setAngularUpperLimit

▸ **setAngularUpperLimit**(`angularUpper`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angularUpper` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Inherited from

[btGeneric6DofConstraint](Ammo.btGeneric6DofConstraint.md).[setAngularUpperLimit](Ammo.btGeneric6DofConstraint.md#setangularupperlimit)

#### Defined in

[packages/ammo/ammo.d.ts:555](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L555)

___

### getFrameOffsetA

▸ **getFrameOffsetA**(): [`btTransform`](Ammo.btTransform.md)

#### Returns

[`btTransform`](Ammo.btTransform.md)

#### Inherited from

[btGeneric6DofConstraint](Ammo.btGeneric6DofConstraint.md).[getFrameOffsetA](Ammo.btGeneric6DofConstraint.md#getframeoffseta)

#### Defined in

[packages/ammo/ammo.d.ts:556](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L556)

___

### enableSpring

▸ **enableSpring**(`index`, `onOff`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `onOff` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:561](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L561)

___

### setStiffness

▸ **setStiffness**(`index`, `stiffness`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `stiffness` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:562](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L562)

___

### setDamping

▸ **setDamping**(`index`, `damping`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `damping` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:563](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L563)

___

### setEquilibriumPoint

▸ **setEquilibriumPoint**(`index`, `val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `val` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:564](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L564)

▸ **setEquilibriumPoint**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:565](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L565)

▸ **setEquilibriumPoint**(): `void`

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:566](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L566)

## Constructors

### constructor

• **new btGeneric6DofSpringConstraint**(`rbA`, `rbB`, `frameInA`, `frameInB`, `useLinearFrameReferenceFrameA`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rbA` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `rbB` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `frameInA` | [`btTransform`](Ammo.btTransform.md) |
| `frameInB` | [`btTransform`](Ammo.btTransform.md) |
| `useLinearFrameReferenceFrameA` | `boolean` |

#### Overrides

[btGeneric6DofConstraint](Ammo.btGeneric6DofConstraint.md).[constructor](Ammo.btGeneric6DofConstraint.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:559](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L559)

• **new btGeneric6DofSpringConstraint**(`rbB`, `frameInB`, `useLinearFrameReferenceFrameB`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rbB` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `frameInB` | [`btTransform`](Ammo.btTransform.md) |
| `useLinearFrameReferenceFrameB` | `boolean` |

#### Overrides

[btGeneric6DofConstraint](Ammo.btGeneric6DofConstraint.md).[constructor](Ammo.btGeneric6DofConstraint.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:560](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L560)
