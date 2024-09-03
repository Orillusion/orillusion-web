# Class: TempPhyMath

Temporary Physics Math Utility

提供临时的 Ammo btVector3 和 btQuaternion 实例，并支持与引擎数据相互转换

### Constructors

- [constructor](TempPhyMath.md#constructor)

### Properties

- [tmpVecA](TempPhyMath.md#tmpveca)
- [tmpVecB](TempPhyMath.md#tmpvecb)
- [tmpVecC](TempPhyMath.md#tmpvecc)
- [tmpVecD](TempPhyMath.md#tmpvecd)
- [tmpQuaA](TempPhyMath.md#tmpquaa)
- [tmpQuaB](TempPhyMath.md#tmpquab)

### Methods

- [init](TempPhyMath.md#init)
- [toBtQua](TempPhyMath.md#tobtqua)
- [toBtVec](TempPhyMath.md#tobtvec)
- [setBtVec](TempPhyMath.md#setbtvec)
- [setBtQua](TempPhyMath.md#setbtqua)
- [fromBtVec](TempPhyMath.md#frombtvec)
- [fromBtQua](TempPhyMath.md#frombtqua)
- [eulerToBtQua](TempPhyMath.md#eulertobtqua)
- [zeroBtVec](TempPhyMath.md#zerobtvec)
- [resetBtQua](TempPhyMath.md#resetbtqua)

## Constructors

### constructor

• **new TempPhyMath**(): [`TempPhyMath`](TempPhyMath.md)

#### Returns

[`TempPhyMath`](TempPhyMath.md)

## Properties

### tmpVecA

▪ `Static` `Readonly` **tmpVecA**: [`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/physics/utils/TempPhyMath.ts:10](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L10)

___

### tmpVecB

▪ `Static` `Readonly` **tmpVecB**: [`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/physics/utils/TempPhyMath.ts:11](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L11)

___

### tmpVecC

▪ `Static` `Readonly` **tmpVecC**: [`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/physics/utils/TempPhyMath.ts:12](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L12)

___

### tmpVecD

▪ `Static` `Readonly` **tmpVecD**: [`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/physics/utils/TempPhyMath.ts:13](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L13)

___

### tmpQuaA

▪ `Static` `Readonly` **tmpQuaA**: [`btQuaternion`](Ammo.btQuaternion.md)

#### Defined in

[packages/physics/utils/TempPhyMath.ts:14](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L14)

___

### tmpQuaB

▪ `Static` `Readonly` **tmpQuaB**: [`btQuaternion`](Ammo.btQuaternion.md)

#### Defined in

[packages/physics/utils/TempPhyMath.ts:15](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L15)

## Methods

### init

▸ **init**(): `void`

初始化 Ammo 后创建预定义的 btVector3 和 btQuaternion 实例，以便复用

#### Returns

`void`

#### Defined in

[packages/physics/utils/TempPhyMath.ts:20](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L20)

___

### toBtQua

▸ **toBtQua**(`qua`, `btQua?`): [`btQuaternion`](Ammo.btQuaternion.md)

Quaternion to Ammo.btQuaternion

#### Parameters

| Name | Type |
| :------ | :------ |
| `qua` | `Quaternion` |
| `btQua?` | [`btQuaternion`](Ammo.btQuaternion.md) |

#### Returns

[`btQuaternion`](Ammo.btQuaternion.md)

#### Defined in

[packages/physics/utils/TempPhyMath.ts:32](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L32)

___

### toBtVec

▸ **toBtVec**(`vec`, `btVec?`): [`btVector3`](Ammo.btVector3.md)

Vector3 to Ammo.btVector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | `Vector3` |
| `btVec?` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/physics/utils/TempPhyMath.ts:41](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L41)

___

### setBtVec

▸ **setBtVec**(`x`, `y`, `z`, `btVec?`): [`btVector3`](Ammo.btVector3.md)

Set Ammo.btVector3 using x, y, z

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `btVec?` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/physics/utils/TempPhyMath.ts:50](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L50)

___

### setBtQua

▸ **setBtQua**(`x`, `y`, `z`, `w`, `btQua?`): [`btQuaternion`](Ammo.btQuaternion.md)

Set Ammo.btQuaternion using x, y, z, w

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `w` | `number` |
| `btQua?` | [`btQuaternion`](Ammo.btQuaternion.md) |

#### Returns

[`btQuaternion`](Ammo.btQuaternion.md)

#### Defined in

[packages/physics/utils/TempPhyMath.ts:59](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L59)

___

### fromBtVec

▸ **fromBtVec**(`btVec`, `vec?`): `Vector3`

Ammo.btVector3 to Vector3

#### Parameters

| Name | Type |
| :------ | :------ |
| `btVec` | [`btVector3`](Ammo.btVector3.md) |
| `vec?` | `Vector3` |

#### Returns

`Vector3`

#### Defined in

[packages/physics/utils/TempPhyMath.ts:68](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L68)

___

### fromBtQua

▸ **fromBtQua**(`btQua`, `qua?`): `Quaternion`

Ammo.btQuaternion to Quaternion

#### Parameters

| Name | Type |
| :------ | :------ |
| `btQua` | [`btQuaternion`](Ammo.btQuaternion.md) |
| `qua?` | `Quaternion` |

#### Returns

`Quaternion`

#### Defined in

[packages/physics/utils/TempPhyMath.ts:77](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L77)

___

### eulerToBtQua

▸ **eulerToBtQua**(`vec`, `qua?`): [`btQuaternion`](Ammo.btQuaternion.md)

Euler Vector3 to Ammo.Quaternion

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | `Vector3` |
| `qua?` | [`btQuaternion`](Ammo.btQuaternion.md) |

#### Returns

[`btQuaternion`](Ammo.btQuaternion.md)

#### Defined in

[packages/physics/utils/TempPhyMath.ts:86](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L86)

___

### zeroBtVec

▸ **zeroBtVec**(`btVec?`): [`btVector3`](Ammo.btVector3.md)

Sets the given Ammo.btVector3 to (0, 0, 0)

#### Parameters

| Name | Type |
| :------ | :------ |
| `btVec?` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/physics/utils/TempPhyMath.ts:95](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L95)

___

### resetBtQua

▸ **resetBtQua**(`btQua?`): [`btQuaternion`](Ammo.btQuaternion.md)

Sets the given Ammo.btQuaternion to (0, 0, 0, 1)

#### Parameters

| Name | Type |
| :------ | :------ |
| `btQua?` | [`btQuaternion`](Ammo.btQuaternion.md) |

#### Returns

[`btQuaternion`](Ammo.btQuaternion.md)

#### Defined in

[packages/physics/utils/TempPhyMath.ts:102](https://github.com/Orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L102)
