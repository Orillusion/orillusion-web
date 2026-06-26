[**@orillusion/physics**](../README.md)

***

# Class: TempPhyMath

Defined in: [packages/physics/utils/TempPhyMath.ts:9](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L9)

Temporary Physics Math Utility

Provides reusable Ammo btVector3 and btQuaternion instances and helpers to convert to/from engine data.

## Constructors

### Constructor

> **new TempPhyMath**(): `TempPhyMath`

#### Returns

`TempPhyMath`

## Properties

### tmpVecA

> `readonly` `static` **tmpVecA**: [`btVector3`](../@orillusion/namespaces/Ammo/classes/btVector3.md)

Defined in: [packages/physics/utils/TempPhyMath.ts:10](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L10)

***

### tmpVecB

> `readonly` `static` **tmpVecB**: [`btVector3`](../@orillusion/namespaces/Ammo/classes/btVector3.md)

Defined in: [packages/physics/utils/TempPhyMath.ts:11](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L11)

***

### tmpVecC

> `readonly` `static` **tmpVecC**: [`btVector3`](../@orillusion/namespaces/Ammo/classes/btVector3.md)

Defined in: [packages/physics/utils/TempPhyMath.ts:12](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L12)

***

### tmpVecD

> `readonly` `static` **tmpVecD**: [`btVector3`](../@orillusion/namespaces/Ammo/classes/btVector3.md)

Defined in: [packages/physics/utils/TempPhyMath.ts:13](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L13)

***

### tmpQuaA

> `readonly` `static` **tmpQuaA**: [`btQuaternion`](../@orillusion/namespaces/Ammo/classes/btQuaternion.md)

Defined in: [packages/physics/utils/TempPhyMath.ts:14](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L14)

***

### tmpQuaB

> `readonly` `static` **tmpQuaB**: [`btQuaternion`](../@orillusion/namespaces/Ammo/classes/btQuaternion.md)

Defined in: [packages/physics/utils/TempPhyMath.ts:15](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L15)

## Methods

### init()

> `static` **init**(): `void`

Defined in: [packages/physics/utils/TempPhyMath.ts:20](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L20)

Create predefined btVector3 and btQuaternion instances after Ammo is initialized so they can be reused.

#### Returns

`void`

***

### toBtQua()

> `static` **toBtQua**(`qua`, `btQua?`): [`btQuaternion`](../@orillusion/namespaces/Ammo/classes/btQuaternion.md)

Defined in: [packages/physics/utils/TempPhyMath.ts:32](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L32)

Quaternion to Ammo.btQuaternion

#### Parameters

##### qua

`Quaternion`

##### btQua?

[`btQuaternion`](../@orillusion/namespaces/Ammo/classes/btQuaternion.md)

#### Returns

[`btQuaternion`](../@orillusion/namespaces/Ammo/classes/btQuaternion.md)

***

### toBtVec()

> `static` **toBtVec**(`vec`, `btVec?`): [`btVector3`](../@orillusion/namespaces/Ammo/classes/btVector3.md)

Defined in: [packages/physics/utils/TempPhyMath.ts:41](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L41)

Vector3 to Ammo.btVector3

#### Parameters

##### vec

`Vector3`

##### btVec?

[`btVector3`](../@orillusion/namespaces/Ammo/classes/btVector3.md)

#### Returns

[`btVector3`](../@orillusion/namespaces/Ammo/classes/btVector3.md)

***

### setBtVec()

> `static` **setBtVec**(`x`, `y`, `z`, `btVec?`): [`btVector3`](../@orillusion/namespaces/Ammo/classes/btVector3.md)

Defined in: [packages/physics/utils/TempPhyMath.ts:50](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L50)

Set Ammo.btVector3 using x, y, z

#### Parameters

##### x

`number`

##### y

`number`

##### z

`number`

##### btVec?

[`btVector3`](../@orillusion/namespaces/Ammo/classes/btVector3.md)

#### Returns

[`btVector3`](../@orillusion/namespaces/Ammo/classes/btVector3.md)

***

### setBtQua()

> `static` **setBtQua**(`x`, `y`, `z`, `w`, `btQua?`): [`btQuaternion`](../@orillusion/namespaces/Ammo/classes/btQuaternion.md)

Defined in: [packages/physics/utils/TempPhyMath.ts:59](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L59)

Set Ammo.btQuaternion using x, y, z, w

#### Parameters

##### x

`number`

##### y

`number`

##### z

`number`

##### w

`number`

##### btQua?

[`btQuaternion`](../@orillusion/namespaces/Ammo/classes/btQuaternion.md)

#### Returns

[`btQuaternion`](../@orillusion/namespaces/Ammo/classes/btQuaternion.md)

***

### fromBtVec()

> `static` **fromBtVec**(`btVec`, `vec?`): `Vector3`

Defined in: [packages/physics/utils/TempPhyMath.ts:68](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L68)

Ammo.btVector3 to Vector3

#### Parameters

##### btVec

[`btVector3`](../@orillusion/namespaces/Ammo/classes/btVector3.md)

##### vec?

`Vector3`

#### Returns

`Vector3`

***

### fromBtQua()

> `static` **fromBtQua**(`btQua`, `qua?`): `Quaternion`

Defined in: [packages/physics/utils/TempPhyMath.ts:77](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L77)

Ammo.btQuaternion to Quaternion

#### Parameters

##### btQua

[`btQuaternion`](../@orillusion/namespaces/Ammo/classes/btQuaternion.md)

##### qua?

`Quaternion`

#### Returns

`Quaternion`

***

### eulerToBtQua()

> `static` **eulerToBtQua**(`vec`, `qua?`): [`btQuaternion`](../@orillusion/namespaces/Ammo/classes/btQuaternion.md)

Defined in: [packages/physics/utils/TempPhyMath.ts:86](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L86)

Euler Vector3 to Ammo.Quaternion

#### Parameters

##### vec

`Vector3`

##### qua?

[`btQuaternion`](../@orillusion/namespaces/Ammo/classes/btQuaternion.md)

#### Returns

[`btQuaternion`](../@orillusion/namespaces/Ammo/classes/btQuaternion.md)

***

### zeroBtVec()

> `static` **zeroBtVec**(`btVec?`): [`btVector3`](../@orillusion/namespaces/Ammo/classes/btVector3.md)

Defined in: [packages/physics/utils/TempPhyMath.ts:95](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L95)

Sets the given Ammo.btVector3 to (0, 0, 0)

#### Parameters

##### btVec?

[`btVector3`](../@orillusion/namespaces/Ammo/classes/btVector3.md)

#### Returns

[`btVector3`](../@orillusion/namespaces/Ammo/classes/btVector3.md)

***

### resetBtQua()

> `static` **resetBtQua**(`btQua?`): [`btQuaternion`](../@orillusion/namespaces/Ammo/classes/btQuaternion.md)

Defined in: [packages/physics/utils/TempPhyMath.ts:102](https://github.com/orillusion/orillusion/blob/main/packages/physics/utils/TempPhyMath.ts#L102)

Sets the given Ammo.btQuaternion to (0, 0, 0, 1)

#### Parameters

##### btQua?

[`btQuaternion`](../@orillusion/namespaces/Ammo/classes/btQuaternion.md)

#### Returns

[`btQuaternion`](../@orillusion/namespaces/Ammo/classes/btQuaternion.md)
