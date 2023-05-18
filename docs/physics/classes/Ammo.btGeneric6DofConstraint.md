# Class: btGeneric6DofConstraint

[Ammo](../modules/Ammo.md).btGeneric6DofConstraint

## Hierarchy

- [`btTypedConstraint`](Ammo.btTypedConstraint.md)

  ↳ **`btGeneric6DofConstraint`**

  ↳↳ [`btGeneric6DofSpringConstraint`](Ammo.btGeneric6DofSpringConstraint.md)


### Methods

- [enableFeedback](Ammo.btGeneric6DofConstraint.md#enablefeedback)
- [getBreakingImpulseThreshold](Ammo.btGeneric6DofConstraint.md#getbreakingimpulsethreshold)
- [setBreakingImpulseThreshold](Ammo.btGeneric6DofConstraint.md#setbreakingimpulsethreshold)
- [getParam](Ammo.btGeneric6DofConstraint.md#getparam)
- [setParam](Ammo.btGeneric6DofConstraint.md#setparam)
- [setLinearLowerLimit](Ammo.btGeneric6DofConstraint.md#setlinearlowerlimit)
- [setLinearUpperLimit](Ammo.btGeneric6DofConstraint.md#setlinearupperlimit)
- [setAngularLowerLimit](Ammo.btGeneric6DofConstraint.md#setangularlowerlimit)
- [setAngularUpperLimit](Ammo.btGeneric6DofConstraint.md#setangularupperlimit)
- [getFrameOffsetA](Ammo.btGeneric6DofConstraint.md#getframeoffseta)

### Constructors

- [constructor](Ammo.btGeneric6DofConstraint.md#constructor)

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

### setLinearLowerLimit

▸ **setLinearLowerLimit**(`linearLower`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearLower` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

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

#### Defined in

[packages/ammo/ammo.d.ts:555](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L555)

___

### getFrameOffsetA

▸ **getFrameOffsetA**(): [`btTransform`](Ammo.btTransform.md)

#### Returns

[`btTransform`](Ammo.btTransform.md)

#### Defined in

[packages/ammo/ammo.d.ts:556](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L556)

## Constructors

### constructor

• **new btGeneric6DofConstraint**(`rbA`, `rbB`, `frameInA`, `frameInB`, `useLinearFrameReferenceFrameA`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rbA` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `rbB` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `frameInA` | [`btTransform`](Ammo.btTransform.md) |
| `frameInB` | [`btTransform`](Ammo.btTransform.md) |
| `useLinearFrameReferenceFrameA` | `boolean` |

#### Overrides

[btTypedConstraint](Ammo.btTypedConstraint.md).[constructor](Ammo.btTypedConstraint.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:550](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L550)

• **new btGeneric6DofConstraint**(`rbB`, `frameInB`, `useLinearFrameReferenceFrameB`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rbB` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `frameInB` | [`btTransform`](Ammo.btTransform.md) |
| `useLinearFrameReferenceFrameB` | `boolean` |

#### Overrides

btTypedConstraint.constructor

#### Defined in

[packages/ammo/ammo.d.ts:551](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L551)
