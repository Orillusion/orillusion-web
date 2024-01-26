# Class: Vector2

Vector 2D

### Constructors

- [constructor](Vector2.md#constructor)

### Properties

- [ZERO](Vector2.md#zero)
- [SAFE\_MAX](Vector2.md#safe_max)
- [SAFE\_MIN](Vector2.md#safe_min)
- [x](Vector2.md#x)
- [y](Vector2.md#y)

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
- [multiplyScaler](Vector2.md#multiplyscaler)
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

## Constructors

### constructor

• **new Vector2**(`x?`, `y?`): [`Vector2`](Vector2.md)

Create a new Vector2.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0` | The x component of the vector, which defaults to 0. |
| `y` | `number` | `0` | The y component of the vector, which defaults to 0. |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L44)

## Properties

### ZERO

▪ `Static` `Readonly` **ZERO**: [`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L23)

___

### SAFE\_MAX

▪ `Static` `Readonly` **SAFE\_MAX**: [`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L25)

___

### SAFE\_MIN

▪ `Static` `Readonly` **SAFE\_MIN**: [`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L27)

___

### x

• **x**: `number` = `0.0`

The x component of the vector, the default value is 0.

#### Defined in

[src/math/Vector2.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L32)

___

### y

• **y**: `number` = `0.0`

The y component of the vector, the default value is 0.

#### Defined in

[src/math/Vector2.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L37)

## Methods

### getAngle

▸ **getAngle**(`a`, `b`): `number`

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

[src/math/Vector2.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L55)

___

### slerp

▸ **slerp**(`from`, `to`, `t`): [`Vector2`](Vector2.md)

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

[src/math/Vector2.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L65)

___

### lerp

▸ **lerp**(`from`, `to`, `t`): [`Vector2`](Vector2.md)

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

[src/math/Vector2.ts:94](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L94)

___

### set

▸ **set**(`x?`, `y?`): `this`

Sets the x and y components of this vector.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0` | The x component of the vector, which defaults to 0. |
| `y` | `number` | `0` | The y component of the vector, which defaults to 0. |

#### Returns

`this`

#### Defined in

[src/math/Vector2.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L107)

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

[src/math/Vector2.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L118)

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

[src/math/Vector2.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L128)

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

[src/math/Vector2.ts:141](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L141)

___

### scale

▸ **scale**(`v`): `this`

Let's multiply the x and y values of this vector times v.

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`this`

#### Defined in

[src/math/Vector2.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L152)

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

[src/math/Vector2.ts:164](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L164)

___

### multiplyScaler

▸ **multiplyScaler**(`a`): `this`

Let's multiply the x and y values of this vector by a.

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

`this`

#### Defined in

[src/math/Vector2.ts:177](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L177)

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

[src/math/Vector2.ts:188](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L188)

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

[src/math/Vector2.ts:200](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L200)

___

### abs

▸ **abs**(): `number`

#### Returns

`number`

#### Defined in

[src/math/Vector2.ts:207](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L207)

___

### length

▸ **length**(): `number`

Length of vector

#### Returns

`number`

#### Defined in

[src/math/Vector2.ts:215](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L215)

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

[src/math/Vector2.ts:224](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L224)

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

[src/math/Vector2.ts:228](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L228)

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

[src/math/Vector2.ts:236](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L236)

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

[src/math/Vector2.ts:247](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L247)

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

[src/math/Vector2.ts:252](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L252)

___

### clone

▸ **clone**(): [`Vector2`](Vector2.md)

Returns a new vector that has the same x and y as the current vector.

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/math/Vector2.ts:264](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L264)

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

[src/math/Vector2.ts:273](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L273)

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

[src/math/Vector2.ts:284](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L284)

___

### normalize

▸ **normalize**(): `this`

Convert this vector to a unit vector.

#### Returns

`this`

#### Defined in

[src/math/Vector2.ts:291](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L291)

___

### addInPlace

▸ **addInPlace**(`otherVector`): `this`

Add two vectors

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherVector` | [`Vector2`](Vector2.md) | Additive vector |

#### Returns

`this`

#### Defined in

[src/math/Vector2.ts:303](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L303)

___

### addScalar

▸ **addScalar**(`s`): `this`

Add the scalar to the x and y of this vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `number` | Additive scalar |

#### Returns

`this`

#### Defined in

[src/math/Vector2.ts:314](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L314)

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

[src/math/Vector2.ts:327](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector2.ts#L327)
