# Class: Vector2

Vector 2D

### Properties

- [ZERO](Vector2.md#zero)
- [SAFE\_MAX](Vector2.md#safe_max)
- [SAFE\_MIN](Vector2.md#safe_min)
- [x](Vector2.md#x)
- [y](Vector2.md#y)

### Constructors

- [constructor](Vector2.md#constructor)

### Methods

- [getAngle](Vector2.md#getangle)
- [slerp](Vector2.md#slerp)
- [lerp](Vector2.md#lerp)
- [set](Vector2.md#set)
- [distance](Vector2.md#distance)
- [add](Vector2.md#add)
- [sub](Vector2.md#sub)
- [scale](Vector2.md#scale)
- [multiply](Vector2.md#multiply)
- [divide](Vector2.md#divide)
- [neg](Vector2.md#neg)
- [abs](Vector2.md#abs)
- [length](Vector2.md#length)
- [getAngle](Vector2.md#getangle-1)
- [unt](Vector2.md#unt)
- [angleTo](Vector2.md#angleto)
- [equals](Vector2.md#equals)
- [pal](Vector2.md#pal)
- [clone](Vector2.md#clone)
- [copyFrom](Vector2.md#copyfrom)
- [dot](Vector2.md#dot)
- [normalize](Vector2.md#normalize)
- [addInPlace](Vector2.md#addinplace)
- [addScalar](Vector2.md#addscalar)
- [clampScalar](Vector2.md#clampscalar)

## Properties

### ZERO

▪ `Static` `Readonly` **ZERO**: [`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L18)

___

### SAFE\_MAX

▪ `Static` `Readonly` **SAFE\_MAX**: [`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L20)

___

### SAFE\_MIN

▪ `Static` `Readonly` **SAFE\_MIN**: [`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L22)

___

### x

• **x**: `number` = `0.0`

The x component of the vector, the default value is 0.

#### Defined in

[src/math/Vector2.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L27)

___

### y

• **y**: `number` = `0.0`

The y component of the vector, the default value is 0.

#### Defined in

[src/math/Vector2.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L32)

## Constructors

### constructor

• **new Vector2**(`x?`, `y?`)

Create a new Vector2.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0` | The x component of the vector, which defaults to 0. |
| `y` | `number` | `0` | The y component of the vector, which defaults to 0. |

#### Defined in

[src/math/Vector2.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L39)

## Methods

### getAngle

▸ `Static` **getAngle**(`a`, `b`): `number`

Returns the Angle, in radians, between two vectors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Vector2.md) | Vector a |
| `b` | [`Vector2`](Vector2.md) | Vector b |

#### Returns

`number`

result

#### Defined in

[src/math/Vector2.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L50)

___

### slerp

▸ `Static` **slerp**(`from`, `to`, `t`): [`Vector2`](Vector2.md)

Computes linear interpolation between two vectors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | [`Vector2`](Vector2.md) | starting vector |
| `to` | [`Vector2`](Vector2.md) | The vector in which you interpolate |
| `t` | `number` |  |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L60)

___

### lerp

▸ `Static` **lerp**(`from`, `to`, `t`): [`Vector2`](Vector2.md)

Linear interpolation between two vectors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | [`Vector2`](Vector2.md) | starting vector |
| `to` | [`Vector2`](Vector2.md) | The vector in which you interpolate |
| `t` | `number` |  |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L89)

___

### set

▸ **set**(`x?`, `y?`): [`Vector2`](Vector2.md)

Sets the x and y components of this vector.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0` | The x component of the vector, which defaults to 0. |
| `y` | `number` | `0` | The y component of the vector, which defaults to 0. |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:102](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L102)

___

### distance

▸ **distance**(`a`): `number`

Calculate the distance between this vector and the incoming vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Vector2.md) | Target vector |

#### Returns

`number`

#### Defined in

[src/math/Vector2.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L113)

___

### add

▸ **add**(`a`, `target?`): [`Vector2`](Vector2.md)

Add the vectors.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector2`](Vector2.md) |
| `target?` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L123)

___

### sub

▸ **sub**(`a`, `target?`): [`Vector2`](Vector2.md)

Vector subtraction

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector2`](Vector2.md) |
| `target?` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L136)

___

### scale

▸ **scale**(`v`): [`Vector2`](Vector2.md)

Let's multiply the x and y values of this vector times v.

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:147](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L147)

___

### multiply

▸ **multiply**(`a`, `target?`): [`Vector2`](Vector2.md)

Let's multiply the x and y values of this vector by a.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `target?` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:159](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L159)

___

### divide

▸ **divide**(`v`, `target?`): [`Vector2`](Vector2.md)

We're going to divide the x and y values of this vector by v.

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |
| `target?` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:172](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L172)

___

### neg

▸ **neg**(`target?`): [`Vector2`](Vector2.md)

Vector inversion

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:184](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L184)

___

### abs

▸ **abs**(): `number`

#### Returns

`number`

#### Defined in

[src/math/Vector2.ts:191](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L191)

___

### length

▸ **length**(): `number`

Length of vector

#### Returns

`number`

#### Defined in

[src/math/Vector2.ts:199](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L199)

___

### getAngle

▸ **getAngle**(`target`): `number`

Returns the Angle, in radians, between the current vector and the target vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Vector2`](Vector2.md) | Target vector |

#### Returns

`number`

#### Defined in

[src/math/Vector2.ts:208](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L208)

___

### unt

▸ **unt**(`target?`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:212](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L212)

___

### angleTo

▸ **angleTo**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2`](Vector2.md) |

#### Returns

`number`

#### Defined in

[src/math/Vector2.ts:220](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L220)

___

### equals

▸ **equals**(`a`): `boolean`

Whether two vectors are equal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector2`](Vector2.md) | Vector of comparison |

#### Returns

`boolean`

#### Defined in

[src/math/Vector2.ts:231](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L231)

___

### pal

▸ **pal**(`a`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector2`](Vector2.md) |

#### Returns

`number`

#### Defined in

[src/math/Vector2.ts:236](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L236)

___

### clone

▸ **clone**(): [`Vector2`](Vector2.md)

Returns a new vector that has the same x and y as the current vector.

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:248](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L248)

___

### copyFrom

▸ **copyFrom**(`v`): [`Vector2`](Vector2.md)

Copy the x and y properties of the source vector to this vector

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector2`](Vector2.md) | Source vector |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:257](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L257)

___

### dot

▸ **dot**(`value`): `number`

Take the dot product of two vectors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | [`Vector2`](Vector2.md) | Target vector |

#### Returns

`number`

#### Defined in

[src/math/Vector2.ts:268](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L268)

___

### normalize

▸ **normalize**(): [`Vector2`](Vector2.md)

Convert this vector to a unit vector.

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:275](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L275)

___

### addInPlace

▸ **addInPlace**(`otherVector`): [`Vector2`](Vector2.md)

Add two vectors

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | [`Vector2`](Vector2.md) | Additive vector |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:287](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L287)

___

### addScalar

▸ **addScalar**(`s`): [`Vector2`](Vector2.md)

Add the scalar to the x and y of this vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `number` | Additive scalar |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:298](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L298)

___

### clampScalar

▸ **clampScalar**(`minVal`, `maxVal`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minVal` | `number` | Component will be limited to the minimum value of |
| `maxVal` | `number` | The component will be limited to the maximum value of |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:311](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L311)
