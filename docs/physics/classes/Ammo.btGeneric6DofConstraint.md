# Class: btGeneric6DofConstraint

[Ammo](../modules/Ammo.md).btGeneric6DofConstraint

## Hierarchy

- [`btTypedConstraint`](Ammo.btTypedConstraint.md)

  ↳ **`btGeneric6DofConstraint`**

  ↳↳ [`btGeneric6DofSpringConstraint`](Ammo.btGeneric6DofSpringConstraint.md)

### Constructors

- [constructor](Ammo.btGeneric6DofConstraint.md#constructor)

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

## Constructors

### constructor

• **new btGeneric6DofConstraint**(`rbA`, `rbB`, `frameInA`, `frameInB`, `useLinearFrameReferenceFrameA`): [`btGeneric6DofConstraint`](Ammo.btGeneric6DofConstraint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rbA` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `rbB` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `frameInA` | [`btTransform`](Ammo.btTransform.md) |
| `frameInB` | [`btTransform`](Ammo.btTransform.md) |
| `useLinearFrameReferenceFrameA` | `boolean` |

#### Returns

[`btGeneric6DofConstraint`](Ammo.btGeneric6DofConstraint.md)

#### Overrides

[btTypedConstraint](Ammo.btTypedConstraint.md).[constructor](Ammo.btTypedConstraint.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:560](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L560)

• **new btGeneric6DofConstraint**(`rbB`, `frameInB`, `useLinearFrameReferenceFrameB`): [`btGeneric6DofConstraint`](Ammo.btGeneric6DofConstraint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rbB` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `frameInB` | [`btTransform`](Ammo.btTransform.md) |
| `useLinearFrameReferenceFrameB` | `boolean` |

#### Returns

[`btGeneric6DofConstraint`](Ammo.btGeneric6DofConstraint.md)

#### Overrides

btTypedConstraint.constructor

#### Defined in

[packages/ammo/ammo.d.ts:561](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L561)

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

### setLinearLowerLimit

▸ **setLinearLowerLimit**(`linearLower`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linearLower` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:562](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L562)

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

[packages/ammo/ammo.d.ts:563](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L563)

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

[packages/ammo/ammo.d.ts:564](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L564)

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

[packages/ammo/ammo.d.ts:565](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L565)

___

### getFrameOffsetA

▸ **getFrameOffsetA**(): [`btTransform`](Ammo.btTransform.md)

#### Returns

[`btTransform`](Ammo.btTransform.md)

#### Defined in

[packages/ammo/ammo.d.ts:566](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L566)
