# Class: Quaternion

Quaternions are used to represent rotations.

### Constructors

- [constructor](Quaternion.md#constructor)

### Properties

- [HELP\_0](Quaternion.md#help_0)
- [HELP\_1](Quaternion.md#help_1)
- [HELP\_2](Quaternion.md#help_2)
- [\_zero](Quaternion.md#_zero)
- [CALCULATION\_QUATERNION](Quaternion.md#calculation_quaternion)

### Accessors

- [magnitude](Quaternion.md#magnitude)

### Methods

- [identity](Quaternion.md#identity)
- [quaternionToMatrix](Quaternion.md#quaterniontomatrix)
- [set](Quaternion.md#set)
- [divide](Quaternion.md#divide)
- [multiply](Quaternion.md#multiply)
- [multiplyVector](Quaternion.md#multiplyvector)
- [fromAxisAngle](Quaternion.md#fromaxisangle)
- [toAxisAngle](Quaternion.md#toaxisangle)
- [slerp](Quaternion.md#slerp)
- [lerp](Quaternion.md#lerp)
- [fromEulerAngles](Quaternion.md#fromeulerangles)
- [toEulerAngles](Quaternion.md#toeulerangles)
- [setFromRotationMatrix](Quaternion.md#setfromrotationmatrix)
- [getEulerAngles](Quaternion.md#geteulerangles)
- [normalize](Quaternion.md#normalize)
- [toString](Quaternion.md#tostring)
- [fromMatrix](Quaternion.md#frommatrix)
- [inverse](Quaternion.md#inverse)
- [clone](Quaternion.md#clone)
- [transformVector](Quaternion.md#transformvector)
- [copyFrom](Quaternion.md#copyfrom)
- [mul](Quaternion.md#mul)

## Constructors

### constructor

• **new Quaternion**(`x?`, `y?`, `z?`, `w?`)

Create a new quaternion object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0` | The X component of a quaternion. |
| `y` | `number` | `0` | The Y component of a quaternion. |
| `z` | `number` | `0` | The Z component of a quaternion. |
| `w` | `number` | `1` | The W component of a quaternion. |

#### Defined in

[src/math/Quaternion.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L39)

## Properties

### HELP\_0

▪ `Static` **HELP\_0**: [`Quaternion`](Quaternion.md)

#### Defined in

[src/math/Quaternion.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L10)

___

### HELP\_1

▪ `Static` **HELP\_1**: [`Quaternion`](Quaternion.md)

#### Defined in

[src/math/Quaternion.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L11)

___

### HELP\_2

▪ `Static` **HELP\_2**: [`Quaternion`](Quaternion.md)

#### Defined in

[src/math/Quaternion.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L12)

___

### \_zero

▪ `Static` **\_zero**: [`Quaternion`](Quaternion.md)

#### Defined in

[src/math/Quaternion.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L13)

___

### CALCULATION\_QUATERNION

▪ `Static` **CALCULATION\_QUATERNION**: [`Quaternion`](Quaternion.md)

#### Defined in

[src/math/Quaternion.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L14)

## Accessors

### magnitude

• `get` **magnitude**(): `number`

#### Returns

`number`

#### Defined in

[src/math/Quaternion.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L101)

## Methods

### identity

▸ `Static` **identity**(): [`Quaternion`](Quaternion.md)

Identity quaternion

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[src/math/Quaternion.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L50)

___

### quaternionToMatrix

▸ `Static` **quaternionToMatrix**(`q`, `m`): `void`

Converts quaternions to matrices

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | [`Quaternion`](Quaternion.md) | Quaternion |
| `m` | `any` | Matrix |

#### Returns

`void`

#### Defined in

[src/math/Quaternion.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L59)

___

### set

▸ **set**(`x?`, `y?`, `z?`, `w?`): `void`

Set the x, y, z, and w components of the existing quaternions.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0` | The X component of a quaternion. |
| `y` | `number` | `0` | The Y component of a quaternion. |
| `z` | `number` | `0` | The Z component of a quaternion. |
| `w` | `number` | `1` | The W component of a quaternion. |

#### Returns

`void`

#### Defined in

[src/math/Quaternion.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L112)

___

### divide

▸ **divide**(`v`): [`Quaternion`](Quaternion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[src/math/Quaternion.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L119)

___

### multiply

▸ **multiply**(`qa`, `qb`): `void`

Multiply two quaternions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `qa` | [`Quaternion`](Quaternion.md) | Quaternion 1 |
| `qb` | [`Quaternion`](Quaternion.md) | Quaternion 2 |

#### Returns

`void`

#### Defined in

[src/math/Quaternion.ts:147](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L147)

___

### multiplyVector

▸ **multiplyVector**(`vector`, `target?`): [`Quaternion`](Quaternion.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `vector` | [`Vector3`](Vector3.md) | `undefined` |
| `target` | [`Quaternion`](Quaternion.md) | `null` |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[src/math/Quaternion.ts:163](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L163)

___

### fromAxisAngle

▸ **fromAxisAngle**(`axis`, `angle`): `void`

Set the quaternion with a given rotation of the axis and Angle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Vector3`](Vector3.md) | axis |
| `angle` | `number` | angle |

#### Returns

`void`

#### Defined in

[src/math/Quaternion.ts:182](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L182)

___

### toAxisAngle

▸ **toAxisAngle**(`axis`): `number`

Turn quaternions into angles

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `axis` | [`Vector3`](Vector3.md) | axis |

#### Returns

`number`

#### Defined in

[src/math/Quaternion.ts:200](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L200)

___

### slerp

▸ **slerp**(`qa`, `qb`, `t`): `void`

Spherically interpolates between two quaternions, providing an interpolation between rotations with constant angle change rate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `qa` | [`Quaternion`](Quaternion.md) | The first quaternion to interpolate. |
| `qb` | [`Quaternion`](Quaternion.md) | The second quaternion to interpolate. |
| `t` | `number` | The interpolation weight, a value between 0 and 1. |

#### Returns

`void`

#### Defined in

[src/math/Quaternion.ts:225](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L225)

___

### lerp

▸ **lerp**(`qa`, `qb`, `t`): `void`

Linearly interpolates between two quaternions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `qa` | [`Quaternion`](Quaternion.md) | The first quaternion to interpolate. |
| `qb` | [`Quaternion`](Quaternion.md) | The second quaternion to interpolate. |
| `t` | `number` | The interpolation weight, a value between 0 and 1. |

#### Returns

`void`

#### Defined in

[src/math/Quaternion.ts:275](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L275)

___

### fromEulerAngles

▸ **fromEulerAngles**(`ax`, `ay`, `az`): [`Quaternion`](Quaternion.md)

Fills the quaternion object with values representing the given euler rotation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ax` | `number` | The angle in radians of the rotation around the ax axis. |
| `ay` | `number` | The angle in radians of the rotation around the ay axis. |
| `az` | `number` | The angle in radians of the rotation around the az axis. |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[src/math/Quaternion.ts:312](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L312)

___

### toEulerAngles

▸ **toEulerAngles**(`target?`): [`Vector3`](Vector3.md)

Fills a target Vector3D object with the Euler angles that form the rotation represented by this quaternion.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `target` | [`Vector3`](Vector3.md) | `null` | An optional Vector3D object to contain the Euler angles. If not provided, a new object is created. |

#### Returns

[`Vector3`](Vector3.md)

The Vector3D containing the Euler angles.

#### Defined in

[src/math/Quaternion.ts:340](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L340)

___

### setFromRotationMatrix

▸ **setFromRotationMatrix**(`m`): [`Quaternion`](Quaternion.md)

Sets the current quaternion from the rotation matrix

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `any` |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[src/math/Quaternion.ts:360](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L360)

___

### getEulerAngles

▸ **getEulerAngles**(`eulers?`): [`Vector3`](Vector3.md)

Get the Euler Angle

#### Parameters

| Name | Type |
| :------ | :------ |
| `eulers?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Quaternion.ts:411](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L411)

___

### normalize

▸ **normalize**(`val?`): `void`

The normalize of the quaternion. Convert this quaternion to a normalize coefficient.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `val` | `number` | `1` | normalize coefficient, which is 1 by default |

#### Returns

`void`

#### Defined in

[src/math/Quaternion.ts:450](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L450)

___

### toString

▸ **toString**(): `string`

Returns the value of a quaternion as a string

#### Returns

`string`

#### Defined in

[src/math/Quaternion.ts:463](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L463)

___

### fromMatrix

▸ **fromMatrix**(`matrix`): `void`

Extracts a quaternion rotation matrix out of a given Matrix3D object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | `any` | The Matrix3D out of which the rotation will be extracted. |

#### Returns

`void`

#### Defined in

[src/math/Quaternion.ts:471](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L471)

___

### inverse

▸ **inverse**(`target?`): [`Quaternion`](Quaternion.md)

Returns a quaternion that inverts the current quaternion

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `target` | [`Quaternion`](Quaternion.md) | `null` | The default parameter is null. If the current parameter is null, a new quaternion object is returned |

#### Returns

[`Quaternion`](Quaternion.md)

Quaternion Result

#### Defined in

[src/math/Quaternion.ts:484](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L484)

___

### clone

▸ **clone**(): [`Quaternion`](Quaternion.md)

Clones the quaternion.

#### Returns

[`Quaternion`](Quaternion.md)

An exact duplicate of the current Quaternion.

#### Defined in

[src/math/Quaternion.ts:504](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L504)

___

### transformVector

▸ **transformVector**(`vector`, `target?`): [`Vector3`](Vector3.md)

Rotates a point.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `vector` | [`Vector3`](Vector3.md) | `undefined` | The Vector3D object to be rotated. |
| `target` | [`Vector3`](Vector3.md) | `null` | An optional Vector3D object that will contain the rotated coordinates. If not provided, a new object will be created. |

#### Returns

[`Vector3`](Vector3.md)

A Vector3D object containing the rotated point.

#### Defined in

[src/math/Quaternion.ts:514](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L514)

___

### copyFrom

▸ **copyFrom**(`q`): `void`

Copies the data from a quaternion into this instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | [`Vector3`](Vector3.md) \| [`Quaternion`](Quaternion.md) | The quaternion to copy from. |

#### Returns

`void`

#### Defined in

[src/math/Quaternion.ts:541](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L541)

___

### mul

▸ **mul**(`lhs`, `rhs`, `target?`): [`Quaternion`](Quaternion.md)

from untiy API
op

#### Parameters

| Name | Type |
| :------ | :------ |
| `lhs` | [`Quaternion`](Quaternion.md) |
| `rhs` | [`Quaternion`](Quaternion.md) |
| `target?` | [`Quaternion`](Quaternion.md) |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[src/math/Quaternion.ts:553](https://github.com/Orillusion/orillusion/blob/main/src/math/Quaternion.ts#L553)
