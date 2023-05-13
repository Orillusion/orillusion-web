# Class: btRigidBodyConstructionInfo

[Ammo](../modules/Ammo.md).btRigidBodyConstructionInfo


### Constructors

- [constructor](Ammo.btRigidBodyConstructionInfo.md#constructor)

### Methods

- [get\_m\_linearDamping](Ammo.btRigidBodyConstructionInfo.md#get_m_lineardamping)
- [set\_m\_linearDamping](Ammo.btRigidBodyConstructionInfo.md#set_m_lineardamping)
- [get\_m\_angularDamping](Ammo.btRigidBodyConstructionInfo.md#get_m_angulardamping)
- [set\_m\_angularDamping](Ammo.btRigidBodyConstructionInfo.md#set_m_angulardamping)
- [get\_m\_friction](Ammo.btRigidBodyConstructionInfo.md#get_m_friction)
- [set\_m\_friction](Ammo.btRigidBodyConstructionInfo.md#set_m_friction)
- [get\_m\_rollingFriction](Ammo.btRigidBodyConstructionInfo.md#get_m_rollingfriction)
- [set\_m\_rollingFriction](Ammo.btRigidBodyConstructionInfo.md#set_m_rollingfriction)
- [get\_m\_restitution](Ammo.btRigidBodyConstructionInfo.md#get_m_restitution)
- [set\_m\_restitution](Ammo.btRigidBodyConstructionInfo.md#set_m_restitution)
- [get\_m\_linearSleepingThreshold](Ammo.btRigidBodyConstructionInfo.md#get_m_linearsleepingthreshold)
- [set\_m\_linearSleepingThreshold](Ammo.btRigidBodyConstructionInfo.md#set_m_linearsleepingthreshold)
- [get\_m\_angularSleepingThreshold](Ammo.btRigidBodyConstructionInfo.md#get_m_angularsleepingthreshold)
- [set\_m\_angularSleepingThreshold](Ammo.btRigidBodyConstructionInfo.md#set_m_angularsleepingthreshold)
- [get\_m\_additionalDamping](Ammo.btRigidBodyConstructionInfo.md#get_m_additionaldamping)
- [set\_m\_additionalDamping](Ammo.btRigidBodyConstructionInfo.md#set_m_additionaldamping)
- [get\_m\_additionalDampingFactor](Ammo.btRigidBodyConstructionInfo.md#get_m_additionaldampingfactor)
- [set\_m\_additionalDampingFactor](Ammo.btRigidBodyConstructionInfo.md#set_m_additionaldampingfactor)
- [get\_m\_additionalLinearDampingThresholdSqr](Ammo.btRigidBodyConstructionInfo.md#get_m_additionallineardampingthresholdsqr)
- [set\_m\_additionalLinearDampingThresholdSqr](Ammo.btRigidBodyConstructionInfo.md#set_m_additionallineardampingthresholdsqr)
- [get\_m\_additionalAngularDampingThresholdSqr](Ammo.btRigidBodyConstructionInfo.md#get_m_additionalangulardampingthresholdsqr)
- [set\_m\_additionalAngularDampingThresholdSqr](Ammo.btRigidBodyConstructionInfo.md#set_m_additionalangulardampingthresholdsqr)
- [get\_m\_additionalAngularDampingFactor](Ammo.btRigidBodyConstructionInfo.md#get_m_additionalangulardampingfactor)
- [set\_m\_additionalAngularDampingFactor](Ammo.btRigidBodyConstructionInfo.md#set_m_additionalangulardampingfactor)

## Constructors

### constructor

• **new btRigidBodyConstructionInfo**(`mass`, `motionState`, `collisionShape`, `localInertia?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mass` | `number` |
| `motionState` | [`btMotionState`](Ammo.btMotionState.md) |
| `collisionShape` | [`btCollisionShape`](Ammo.btCollisionShape.md) |
| `localInertia?` | [`btVector3`](Ammo.btVector3.md) |

#### Defined in

[packages/ammo/ammo.d.ts:460](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L460)

## Methods

### get\_m\_linearDamping

▸ **get_m_linearDamping**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:461](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L461)

___

### set\_m\_linearDamping

▸ **set_m_linearDamping**(`m_linearDamping`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_linearDamping` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:462](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L462)

___

### get\_m\_angularDamping

▸ **get_m_angularDamping**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:463](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L463)

___

### set\_m\_angularDamping

▸ **set_m_angularDamping**(`m_angularDamping`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_angularDamping` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:464](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L464)

___

### get\_m\_friction

▸ **get_m_friction**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:465](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L465)

___

### set\_m\_friction

▸ **set_m_friction**(`m_friction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_friction` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:466](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L466)

___

### get\_m\_rollingFriction

▸ **get_m_rollingFriction**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:467](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L467)

___

### set\_m\_rollingFriction

▸ **set_m_rollingFriction**(`m_rollingFriction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_rollingFriction` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:468](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L468)

___

### get\_m\_restitution

▸ **get_m_restitution**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:469](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L469)

___

### set\_m\_restitution

▸ **set_m_restitution**(`m_restitution`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_restitution` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:470](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L470)

___

### get\_m\_linearSleepingThreshold

▸ **get_m_linearSleepingThreshold**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:471](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L471)

___

### set\_m\_linearSleepingThreshold

▸ **set_m_linearSleepingThreshold**(`m_linearSleepingThreshold`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_linearSleepingThreshold` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:472](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L472)

___

### get\_m\_angularSleepingThreshold

▸ **get_m_angularSleepingThreshold**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:473](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L473)

___

### set\_m\_angularSleepingThreshold

▸ **set_m_angularSleepingThreshold**(`m_angularSleepingThreshold`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_angularSleepingThreshold` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:474](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L474)

___

### get\_m\_additionalDamping

▸ **get_m_additionalDamping**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/ammo/ammo.d.ts:475](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L475)

___

### set\_m\_additionalDamping

▸ **set_m_additionalDamping**(`m_additionalDamping`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_additionalDamping` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:476](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L476)

___

### get\_m\_additionalDampingFactor

▸ **get_m_additionalDampingFactor**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:477](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L477)

___

### set\_m\_additionalDampingFactor

▸ **set_m_additionalDampingFactor**(`m_additionalDampingFactor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_additionalDampingFactor` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:478](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L478)

___

### get\_m\_additionalLinearDampingThresholdSqr

▸ **get_m_additionalLinearDampingThresholdSqr**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:479](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L479)

___

### set\_m\_additionalLinearDampingThresholdSqr

▸ **set_m_additionalLinearDampingThresholdSqr**(`m_additionalLinearDampingThresholdSqr`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_additionalLinearDampingThresholdSqr` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:480](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L480)

___

### get\_m\_additionalAngularDampingThresholdSqr

▸ **get_m_additionalAngularDampingThresholdSqr**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:481](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L481)

___

### set\_m\_additionalAngularDampingThresholdSqr

▸ **set_m_additionalAngularDampingThresholdSqr**(`m_additionalAngularDampingThresholdSqr`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_additionalAngularDampingThresholdSqr` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:482](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L482)

___

### get\_m\_additionalAngularDampingFactor

▸ **get_m_additionalAngularDampingFactor**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:483](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L483)

___

### set\_m\_additionalAngularDampingFactor

▸ **set_m_additionalAngularDampingFactor**(`m_additionalAngularDampingFactor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m_additionalAngularDampingFactor` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:484](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L484)
