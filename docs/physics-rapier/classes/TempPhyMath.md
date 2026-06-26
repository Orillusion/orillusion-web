[**@orillusion/physics-rapier**](../README.md)

***

# Class: TempPhyMath

Defined in: [packages/physics-rapier/utils/TempPhyMath.ts:20](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/utils/TempPhyMath.ts#L20)

Math conversion helpers between engine `Vector3 / Quaternion` and Rapier
plain `{x, y, z, [w]}` objects. Provides reusable scratch objects.

Unlike the ammo plugin's `TempPhyMath`, Rapier values are POJOs and do
NOT need to be destroyed manually.

## Constructors

### Constructor

> **new TempPhyMath**(): `TempPhyMath`

#### Returns

`TempPhyMath`

## Properties

### tmpVecA

> `readonly` `static` **tmpVecA**: [`RVec3`](../interfaces/RVec3.md)

Defined in: [packages/physics-rapier/utils/TempPhyMath.ts:21](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/utils/TempPhyMath.ts#L21)

***

### tmpVecB

> `readonly` `static` **tmpVecB**: [`RVec3`](../interfaces/RVec3.md)

Defined in: [packages/physics-rapier/utils/TempPhyMath.ts:22](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/utils/TempPhyMath.ts#L22)

***

### tmpVecC

> `readonly` `static` **tmpVecC**: [`RVec3`](../interfaces/RVec3.md)

Defined in: [packages/physics-rapier/utils/TempPhyMath.ts:23](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/utils/TempPhyMath.ts#L23)

***

### tmpVecD

> `readonly` `static` **tmpVecD**: [`RVec3`](../interfaces/RVec3.md)

Defined in: [packages/physics-rapier/utils/TempPhyMath.ts:24](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/utils/TempPhyMath.ts#L24)

***

### tmpQuaA

> `readonly` `static` **tmpQuaA**: [`RQuat`](../interfaces/RQuat.md)

Defined in: [packages/physics-rapier/utils/TempPhyMath.ts:25](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/utils/TempPhyMath.ts#L25)

***

### tmpQuaB

> `readonly` `static` **tmpQuaB**: [`RQuat`](../interfaces/RQuat.md)

Defined in: [packages/physics-rapier/utils/TempPhyMath.ts:26](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/utils/TempPhyMath.ts#L26)

## Methods

### toRVec()

> `static` **toRVec**(`vec`, `target?`): [`RVec3`](../interfaces/RVec3.md)

Defined in: [packages/physics-rapier/utils/TempPhyMath.ts:31](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/utils/TempPhyMath.ts#L31)

Vector3 → Rapier Vec3.

#### Parameters

##### vec

`Vector3`

##### target?

[`RVec3`](../interfaces/RVec3.md)

#### Returns

[`RVec3`](../interfaces/RVec3.md)

***

### toRQuat()

> `static` **toRQuat**(`qua`, `target?`): [`RQuat`](../interfaces/RQuat.md)

Defined in: [packages/physics-rapier/utils/TempPhyMath.ts:42](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/utils/TempPhyMath.ts#L42)

Quaternion → Rapier Quat.

#### Parameters

##### qua

`Quaternion`

##### target?

[`RQuat`](../interfaces/RQuat.md)

#### Returns

[`RQuat`](../interfaces/RQuat.md)

***

### setRVec()

> `static` **setRVec**(`x`, `y`, `z`, `target?`): [`RVec3`](../interfaces/RVec3.md)

Defined in: [packages/physics-rapier/utils/TempPhyMath.ts:54](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/utils/TempPhyMath.ts#L54)

Set Rapier Vec3 from raw scalars.

#### Parameters

##### x

`number`

##### y

`number`

##### z

`number`

##### target?

[`RVec3`](../interfaces/RVec3.md)

#### Returns

[`RVec3`](../interfaces/RVec3.md)

***

### setRQuat()

> `static` **setRQuat**(`x`, `y`, `z`, `w`, `target?`): [`RQuat`](../interfaces/RQuat.md)

Defined in: [packages/physics-rapier/utils/TempPhyMath.ts:65](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/utils/TempPhyMath.ts#L65)

Set Rapier Quat from raw scalars.

#### Parameters

##### x

`number`

##### y

`number`

##### z

`number`

##### w

`number`

##### target?

[`RQuat`](../interfaces/RQuat.md)

#### Returns

[`RQuat`](../interfaces/RQuat.md)

***

### fromRVec()

> `static` **fromRVec**(`rv`, `vec?`): `Vector3`

Defined in: [packages/physics-rapier/utils/TempPhyMath.ts:77](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/utils/TempPhyMath.ts#L77)

Rapier Vec3 → Vector3.

#### Parameters

##### rv

[`RVec3`](../interfaces/RVec3.md)

##### vec?

`Vector3`

#### Returns

`Vector3`

***

### fromRQuat()

> `static` **fromRQuat**(`rq`, `qua?`): `Quaternion`

Defined in: [packages/physics-rapier/utils/TempPhyMath.ts:86](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/utils/TempPhyMath.ts#L86)

Rapier Quat → Quaternion.

#### Parameters

##### rq

[`RQuat`](../interfaces/RQuat.md)

##### qua?

`Quaternion`

#### Returns

`Quaternion`

***

### zeroRVec()

> `static` **zeroRVec**(`target?`): [`RVec3`](../interfaces/RVec3.md)

Defined in: [packages/physics-rapier/utils/TempPhyMath.ts:95](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/utils/TempPhyMath.ts#L95)

Sets the given Rapier Vec3 to (0, 0, 0).

#### Parameters

##### target?

[`RVec3`](../interfaces/RVec3.md)

#### Returns

[`RVec3`](../interfaces/RVec3.md)

***

### resetRQuat()

> `static` **resetRQuat**(`target?`): [`RQuat`](../interfaces/RQuat.md)

Defined in: [packages/physics-rapier/utils/TempPhyMath.ts:102](https://github.com/orillusion/orillusion/blob/main/packages/physics-rapier/utils/TempPhyMath.ts#L102)

Sets the given Rapier Quat to (0, 0, 0, 1).

#### Parameters

##### target?

[`RQuat`](../interfaces/RQuat.md)

#### Returns

[`RQuat`](../interfaces/RQuat.md)
