# Class: RigidBodyUtil

提供一系列AMMO刚体相关的方法

### Constructors

- [constructor](RigidBodyUtil.md#constructor)

### Methods

- [createRigidBody](RigidBodyUtil.md#createrigidbody)
- [updateTransform](RigidBodyUtil.md#updatetransform)
- [updatePosition](RigidBodyUtil.md#updateposition)
- [updateRotation](RigidBodyUtil.md#updaterotation)
- [updateScale](RigidBodyUtil.md#updatescale)
- [clearForcesAndVelocities](RigidBodyUtil.md#clearforcesandvelocities)
- [activateCollisionBodies](RigidBodyUtil.md#activatecollisionbodies)
- [destroyRigidBody](RigidBodyUtil.md#destroyrigidbody)
- [destroyConstraint](RigidBodyUtil.md#destroyconstraint)

## Constructors

### constructor

• **new RigidBodyUtil**(): [`RigidBodyUtil`](RigidBodyUtil.md)

#### Returns

[`RigidBodyUtil`](RigidBodyUtil.md)

## Methods

### createRigidBody

▸ **createRigidBody**(`object3D`, `shape`, `mass`, `position?`, `rotation?`): [`btRigidBody`](Ammo.btRigidBody.md)

创建 Ammo 刚体。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object3D` | `Object3D` | 三维对象。 |
| `shape` | [`btCollisionShape`](Ammo.btCollisionShape.md) | 碰撞形状。 |
| `mass` | `number` | 碰撞体的质量。 |
| `position?` | `Vector3` | 可选参数，刚体的位置，默认使用三维对象的 `localPosition` |
| `rotation?` | `Vector3` \| `Quaternion` | 可选参数，刚体的旋转，默认使用三维对象的 `localRotation` |

#### Returns

[`btRigidBody`](Ammo.btRigidBody.md)

新创建的 Ammo.btRigidBody 对象。

#### Defined in

[packages/physics/utils/RigidBodyUtil.ts:18](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyUtil.ts#L18)

___

### updateTransform

▸ **updateTransform**(`bodyRb`, `position`, `rotation`, `clearFV?`): `void`

更新刚体的位置和旋转。  
此函数将新的位置和旋转应用到刚体上。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bodyRb` | [`btRigidBody`](Ammo.btRigidBody.md) | 刚体对象。 |
| `position` | `Vector3` | 刚体的新位置，以 Vector3 形式表示。 |
| `rotation` | `Vector3` \| `Quaternion` | 刚体的新旋转，可选，可以是 Vector3 形式表示的欧拉角（将自动转换为四元数），默认为四元数零值。 |
| `clearFV?` | `boolean` | 清除力和速度，可选，默认为 false 。 |

#### Returns

`void`

#### Defined in

[packages/physics/utils/RigidBodyUtil.ts:46](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyUtil.ts#L46)

___

### updatePosition

▸ **updatePosition**(`bodyRb`, `value`): `void`

更新刚体位置

#### Parameters

| Name | Type |
| :------ | :------ |
| `bodyRb` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `value` | `Vector3` |

#### Returns

`void`

#### Defined in

[packages/physics/utils/RigidBodyUtil.ts:68](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyUtil.ts#L68)

___

### updateRotation

▸ **updateRotation**(`bodyRb`, `value`): `void`

更新刚体旋转

#### Parameters

| Name | Type |
| :------ | :------ |
| `bodyRb` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `value` | `Vector3` |

#### Returns

`void`

#### Defined in

[packages/physics/utils/RigidBodyUtil.ts:84](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyUtil.ts#L84)

___

### updateScale

▸ **updateScale**(`bodyRb`, `value`, `mass`): `void`

更新刚体缩放

#### Parameters

| Name | Type |
| :------ | :------ |
| `bodyRb` | [`btRigidBody`](Ammo.btRigidBody.md) |
| `value` | `Vector3` |
| `mass` | `number` |

#### Returns

`void`

#### Defined in

[packages/physics/utils/RigidBodyUtil.ts:101](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyUtil.ts#L101)

___

### clearForcesAndVelocities

▸ **clearForcesAndVelocities**(`bodyRb`): `void`

清除力和速度

#### Parameters

| Name | Type |
| :------ | :------ |
| `bodyRb` | [`btRigidBody`](Ammo.btRigidBody.md) |

#### Returns

`void`

#### Defined in

[packages/physics/utils/RigidBodyUtil.ts:116](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyUtil.ts#L116)

___

### activateCollisionBodies

▸ **activateCollisionBodies**(): `void`

激活物理世界中的全部碰撞对

#### Returns

`void`

#### Defined in

[packages/physics/utils/RigidBodyUtil.ts:125](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyUtil.ts#L125)

___

### destroyRigidBody

▸ **destroyRigidBody**(`bodyRb`): `void`

销毁刚体及其状态和形状

#### Parameters

| Name | Type |
| :------ | :------ |
| `bodyRb` | [`btRigidBody`](Ammo.btRigidBody.md) |

#### Returns

`void`

#### Defined in

[packages/physics/utils/RigidBodyUtil.ts:149](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyUtil.ts#L149)

___

### destroyConstraint

▸ **destroyConstraint**(`constraint`): `void`

销毁约束

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraint` | [`btTypedConstraint`](Ammo.btTypedConstraint.md) |

#### Returns

`void`

#### Defined in

[packages/physics/utils/RigidBodyUtil.ts:162](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/RigidBodyUtil.ts#L162)
