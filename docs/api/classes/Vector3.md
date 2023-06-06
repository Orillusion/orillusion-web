# Class: Vector3

Vector 3D

### Constructors

- [constructor](Vector3.md#constructor)

### Properties

- [MAX](Vector3.md#max)
- [MIN](Vector3.md#min)
- [SAFE\_MAX](Vector3.md#safe_max)
- [SAFE\_MIN](Vector3.md#safe_min)
- [X\_AXIS](Vector3.md#x_axis)
- [neg\_X\_AXIS](Vector3.md#neg_x_axis)
- [Y\_AXIS](Vector3.md#y_axis)
- [Z\_AXIS](Vector3.md#z_axis)
- [x](Vector3.md#x)
- [y](Vector3.md#y)
- [z](Vector3.md#z)
- [w](Vector3.md#w)

### Accessors

- [ZERO](Vector3.md#zero)
- [ONE](Vector3.md#one)
- [LEFT](Vector3.md#left)
- [RIGHT](Vector3.md#right)
- [UP](Vector3.md#up)
- [DOWN](Vector3.md#down)
- [BACK](Vector3.md#back)
- [FORWARD](Vector3.md#forward)
- [a](Vector3.md#a)
- [r](Vector3.md#r)
- [g](Vector3.md#g)
- [b](Vector3.md#b)
- [length](Vector3.md#length)
- [lengthSquared](Vector3.md#lengthsquared)
- [position](Vector3.md#position)

### Methods

- [getTowPointbyDir](Vector3.md#gettowpointbydir)
- [pointToLine](Vector3.md#pointtoline)
- [cross](Vector3.md#cross)
- [dot](Vector3.md#dot)
- [getPoints](Vector3.md#getpoints)
- [getPointNumbers](Vector3.md#getpointnumbers)
- [getAngle](Vector3.md#getangle)
- [sqrMagnitude](Vector3.md#sqrmagnitude)
- [getZYAngle](Vector3.md#getzyangle)
- [sub](Vector3.md#sub)
- [add](Vector3.md#add)
- [distance](Vector3.md#distance)
- [distanceXZ](Vector3.md#distancexz)
- [set](Vector3.md#set)
- [add](Vector3.md#add-1)
- [addXYZW](Vector3.md#addxyzw)
- [clone](Vector3.md#clone)
- [copyFrom](Vector3.md#copyfrom)
- [crossProduct](Vector3.md#crossproduct)
- [decrementBy](Vector3.md#decrementby)
- [dotProduct](Vector3.md#dotproduct)
- [equals](Vector3.md#equals)
- [incrementBy](Vector3.md#incrementby)
- [divide](Vector3.md#divide)
- [negate](Vector3.md#negate)
- [normalize](Vector3.md#normalize)
- [applyQuaternion](Vector3.md#applyquaternion)
- [scaleBy](Vector3.md#scaleby)
- [mul](Vector3.md#mul)
- [scale](Vector3.md#scale)
- [scaleToRef](Vector3.md#scaletoref)
- [setTo](Vector3.md#setto)
- [copy](Vector3.md#copy)
- [subtract](Vector3.md#subtract)
- [multiply](Vector3.md#multiply)
- [divided](Vector3.md#divided)
- [div](Vector3.md#div)
- [lerp](Vector3.md#lerp)
- [clamp](Vector3.md#clamp)
- [toString](Vector3.md#tostring)
- [normalizeToWay2D\_XY](Vector3.md#normalizetoway2d_xy)
- [toArray](Vector3.md#toarray)
- [copyToBytes](Vector3.md#copytobytes)
- [cross](Vector3.md#cross-1)
- [multiplyScalar](Vector3.md#multiplyscalar)
- [setFromArray](Vector3.md#setfromarray)
- [divideScalar](Vector3.md#dividescalar)
- [clampLength](Vector3.md#clamplength)
- [setScalar](Vector3.md#setscalar)

## Constructors

### constructor

• **new Vector3**(`x?`, `y?`, `z?`, `w?`)

Creates an instance of a Vector3 object. If you do not specify a.
parameter for the constructor, a Vector3 object is created with
the elements (0,0,0,0).

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0` | The first element, such as the x coordinate. |
| `y` | `number` | `0` | The second element, such as the y coordinate. |
| `z` | `number` | `0` | The third element, such as the z coordinate. |
| `w` | `number` | `0` | An optional element for additional data such as the angle of rotation. |

#### Defined in

[src/math/Vector3.ts:191](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L191)

## Properties

### MAX

▪ `Static` `Readonly` **MAX**: [`Vector3`](Vector3.md)

Vector maximum

#### Defined in

[src/math/Vector3.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L11)

___

### MIN

▪ `Static` `Readonly` **MIN**: [`Vector3`](Vector3.md)

Vector minimum

#### Defined in

[src/math/Vector3.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L16)

___

### SAFE\_MAX

▪ `Static` `Readonly` **SAFE\_MAX**: [`Vector3`](Vector3.md)

Vector maximum integer value

#### Defined in

[src/math/Vector3.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L21)

___

### SAFE\_MIN

▪ `Static` `Readonly` **SAFE\_MIN**: [`Vector3`](Vector3.md)

Vector minimum integer value

#### Defined in

[src/math/Vector3.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L26)

___

### X\_AXIS

▪ `Static` `Readonly` **X\_AXIS**: [`Vector3`](Vector3.md)

X axis positive axis coordinate (1, 0, 0).

#### Defined in

[src/math/Vector3.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L31)

___

### neg\_X\_AXIS

▪ `Static` `Readonly` **neg\_X\_AXIS**: [`Vector3`](Vector3.md)

The X-axis is negative (-1, 0, 0).

#### Defined in

[src/math/Vector3.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L36)

___

### Y\_AXIS

▪ `Static` `Readonly` **Y\_AXIS**: [`Vector3`](Vector3.md)

The y axis defined as a Vector3 object with coordinates (0,1,0).

#### Defined in

[src/math/Vector3.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L41)

___

### Z\_AXIS

▪ `Static` `Readonly` **Z\_AXIS**: [`Vector3`](Vector3.md)

The z axis defined as a Vector3 object with coordinates (0,0,1).

#### Defined in

[src/math/Vector3.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L46)

___

### x

• **x**: `number` = `0`

The first element of a Vector3 object, such as the x coordinate of
a point in the three-dimensional space. The default value is 0.

#### Defined in

[src/math/Vector3.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L148)

___

### y

• **y**: `number` = `0`

The second element of a Vector3 object, such as the y coordinate of
a point in the three-dimensional space. The default value is 0.

#### Defined in

[src/math/Vector3.ts:154](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L154)

___

### z

• **z**: `number` = `0`

The third element of a Vector3 object, such as the y coordinate of
a point in the three-dimensional space. The default value is 0.

#### Defined in

[src/math/Vector3.ts:160](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L160)

___

### w

• **w**: `number` = `1`

The z component of the vector,
A three-dimensional position or projection that can be used as a perspective projection
We can also do w in the quaternion

#### Defined in

[src/math/Vector3.ts:167](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L167)

## Accessors

### ZERO

• `Static` `get` **ZERO**(): [`Vector3`](Vector3.md)

Returns a new vector with zero x, y, and z components

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L91)

___

### ONE

• `Static` `get` **ONE**(): [`Vector3`](Vector3.md)

Returns a new vector whose x, y, and z components are all 1

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L98)

___

### LEFT

• `Static` `get` **LEFT**(): [`Vector3`](Vector3.md)

Returns a new vector pointing to the left, x is -1, y is 0, and z is 0

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L105)

___

### RIGHT

• `Static` `get` **RIGHT**(): [`Vector3`](Vector3.md)

Returns a new vector pointing in the right direction, where x is 1, y is 0, and z is 0

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L112)

___

### UP

• `Static` `get` **UP**(): [`Vector3`](Vector3.md)

Returns a new vector pointing upwards, that is, x equals 0, y equals 1, and z equals 0

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L119)

___

### DOWN

• `Static` `get` **DOWN**(): [`Vector3`](Vector3.md)

Returns a new vector pointing down, where x is 0, y is -1, and z is 0

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L126)

___

### BACK

• `Static` `get` **BACK**(): [`Vector3`](Vector3.md)

Returns a new backward vector, x equals 0, y equals 0, and z equals negative 1

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L133)

___

### FORWARD

• `Static` `get` **FORWARD**(): [`Vector3`](Vector3.md)

Returns a new forward-pointing vector, that is, x is 0, y is 0, and z is 1

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L140)

___

### a

• `get` **a**(): `number`

get the w component

#### Returns

`number`

value of w

#### Defined in

[src/math/Vector3.ts:233](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L233)

• `set` **a**(`value`): `void`

Set w component

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Vector3.ts:201](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L201)

___

### r

• `get` **r**(): `number`

get the x component

#### Returns

`number`

value of x

#### Defined in

[src/math/Vector3.ts:241](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L241)

• `set` **r**(`value`): `void`

Set x component

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Vector3.ts:209](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L209)

___

### g

• `get` **g**(): `number`

get the y component

#### Returns

`number`

value of y

#### Defined in

[src/math/Vector3.ts:249](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L249)

• `set` **g**(`value`): `void`

Set the y component

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Vector3.ts:217](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L217)

___

### b

• `get` **b**(): `number`

get the z component

#### Returns

`number`

value of z

#### Defined in

[src/math/Vector3.ts:257](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L257)

• `set` **b**(`value`): `void`

Set z component

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/math/Vector3.ts:225](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L225)

___

### length

• `get` **length**(): `number`

The length of the vector, the distance from the origin (0, 0, 0) to (x, y, z)

#### Returns

`number`

#### Defined in

[src/math/Vector3.ts:264](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L264)

___

### lengthSquared

• `get` **lengthSquared**(): `number`

You get the square of the length of the vector

#### Returns

`number`

#### Defined in

[src/math/Vector3.ts:272](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L272)

___

### position

• `get` **position**(): `this`

Get the current vector

#### Returns

`this`

#### Defined in

[src/math/Vector3.ts:279](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L279)

## Methods

### getTowPointbyDir

▸ `Static` **getTowPointbyDir**(`dir`, `tp1`, `tp2`, `width`, `aix`): `void`

Obtain a vertical line segment with width through an orientation

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | [`Vector3`](Vector3.md) |
| `tp1` | [`Vector3`](Vector3.md) |
| `tp2` | [`Vector3`](Vector3.md) |
| `width` | `number` |
| `aix` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/math/Vector3.ts:290](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L290)

___

### pointToLine

▸ `Static` **pointToLine**(`point1`, `point2`, `position`): `number`

Calculate the distance from the point to the line

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point1` | [`Vector3`](Vector3.md) | Starting point of line segment |
| `point2` | [`Vector3`](Vector3.md) | End point of line segment |
| `position` | [`Vector3`](Vector3.md) | Point position |

#### Returns

`number`

Distance from a point to a line segment

#### Defined in

[src/math/Vector3.ts:319](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L319)

___

### cross

▸ `Static` **cross**(`a`, `b`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | `undefined` |
| `b` | [`Vector3`](Vector3.md) | `undefined` |
| `target` | [`Vector3`](Vector3.md) | `null` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:347](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L347)

___

### dot

▸ `Static` **dot**(`a`, `b`): `number`

Take the dot product of two vectors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | Vector a |
| `b` | [`Vector3`](Vector3.md) | Vector b |

#### Returns

`number`

#### Defined in

[src/math/Vector3.ts:362](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L362)

___

### getPoints

▸ `Static` **getPoints**(`total`, `randSeed`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `total` | `number` |
| `randSeed` | `number` |

#### Returns

`any`[]

#### Defined in

[src/math/Vector3.ts:366](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L366)

___

### getPointNumbers

▸ `Static` **getPointNumbers**(`total`, `randSeed`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `total` | `number` |
| `randSeed` | `number` |

#### Returns

`any`[]

#### Defined in

[src/math/Vector3.ts:375](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L375)

___

### getAngle

▸ `Static` **getAngle**(`from`, `to`): `number`

Returns the Angle, in degrees, between the source vector and the target vector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | [`Vector3`](Vector3.md) | source vector. |
| `to` | [`Vector3`](Vector3.md) | target vector. |

#### Returns

`number`

#### Defined in

[src/math/Vector3.ts:389](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L389)

___

### sqrMagnitude

▸ `Static` **sqrMagnitude**(`arg0`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Defined in

[src/math/Vector3.ts:394](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L394)

___

### getZYAngle

▸ `Static` **getZYAngle**(`zd`, `yd`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `zd` | [`Vector3`](Vector3.md) |
| `yd` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Defined in

[src/math/Vector3.ts:398](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L398)

___

### sub

▸ `Static` **sub**(`a`, `b`, `target?`): [`Vector3`](Vector3.md)

Subtract two vectors

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | `undefined` | Vector a |
| `b` | [`Vector3`](Vector3.md) | `undefined` | Vector b |
| `target` | [`Vector3`](Vector3.md) | `null` | output vector |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:408](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L408)

___

### add

▸ `Static` **add**(`a`, `b`, `target?`): [`Vector3`](Vector3.md)

Add two vectors

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | `undefined` | Vector a |
| `b` | [`Vector3`](Vector3.md) | `undefined` | Vector b |
| `target` | [`Vector3`](Vector3.md) | `null` | output vector |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:424](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L424)

___

### distance

▸ `Static` **distance**(`pt1`, `pt2`): `number`

Calculate the distance between two vectors

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pt1` | [`Vector3`](Vector3.md) | Vector 1 |
| `pt2` | [`Vector3`](Vector3.md) | Vector 2 |

#### Returns

`number`

number The distance between two vectors

#### Defined in

[src/math/Vector3.ts:467](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L467)

___

### distanceXZ

▸ `Static` **distanceXZ**(`pt1`, `pt2`): `number`

Calculate the distance between two vectors XZ axes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pt1` | [`Vector3`](Vector3.md) | Vector 1 |
| `pt2` | [`Vector3`](Vector3.md) | Vector 2 |

#### Returns

`number`

number The distance between two vectors

#### Defined in

[src/math/Vector3.ts:480](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L480)

___

### set

▸ **set**(`x`, `y`, `z`, `w?`): [`Vector3`](Vector3.md)

Sets the current vector x, y, z, and w components

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `undefined` |
| `y` | `number` | `undefined` |
| `z` | `number` | `undefined` |
| `w` | `number` | `1` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:495](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L495)

___

### add

▸ **add**(`a`, `target?`): [`Vector3`](Vector3.md)

The vector is added to the vector

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | `undefined` | Additive vector |
| `target` | [`Vector3`](Vector3.md) | `null` | Return vector |

#### Returns

[`Vector3`](Vector3.md)

result

#### Defined in

[src/math/Vector3.ts:509](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L509)

___

### addXYZW

▸ **addXYZW**(`x`, `y`, `z`, `w`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `undefined` |
| `y` | `number` | `undefined` |
| `z` | `number` | `undefined` |
| `w` | `number` | `undefined` |
| `target` | [`Vector3`](Vector3.md) | `null` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:524](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L524)

___

### clone

▸ **clone**(): [`Vector3`](Vector3.md)

Clone a vector with the same components as the current vector

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:542](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L542)

___

### copyFrom

▸ **copyFrom**(`src`): [`Vector3`](Vector3.md)

The components of the source vector are set to the current vector

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | [`Vector3`](Vector3.md) | Original vector |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:551](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L551)

___

### crossProduct

▸ **crossProduct**(`a`, `target?`): [`Vector3`](Vector3.md)

You take the cross product of two vectors,
The cross product is going to be the perpendicular vector between these two vectors

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | `undefined` | Take the cross product of another vector |
| `target` | [`Vector3`](Vector3.md) | `null` | - |

#### Returns

[`Vector3`](Vector3.md)

Vector3 returns the cross product vector

#### Defined in

[src/math/Vector3.ts:566](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L566)

___

### decrementBy

▸ **decrementBy**(`a`): `void`

Subtract two vectors and assign the result to yourself

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | Minus vector |

#### Returns

`void`

#### Defined in

[src/math/Vector3.ts:579](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L579)

___

### dotProduct

▸ **dotProduct**(`a`): `number`

Calculate the dot product of two vectors and return the Angle relationship between the two vectors

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | The vector that you need to compute |

#### Returns

`number`

number Returns the Angle relationship between two vectors

#### Defined in

[src/math/Vector3.ts:591](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L591)

___

### equals

▸ **equals**(`toCompare`, `allFour?`): `boolean`

Find whether the values of two vectors are identical

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `toCompare` | [`Vector3`](Vector3.md) | `undefined` | The vector to compare |
| `allFour` | `boolean` | `false` | The default parameter is 1, whether to compare the w component |

#### Returns

`boolean`

A value of true if the specified Vector3 object is equal to the current Vector3 object; false if it is not equal.

#### Defined in

[src/math/Vector3.ts:613](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L613)

___

### incrementBy

▸ **incrementBy**(`a`): `void`

The current vector plus is equal to the vector, plus just the x, y, and z components

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | vector |

#### Returns

`void`

#### Defined in

[src/math/Vector3.ts:633](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L633)

___

### divide

▸ **divide**(`v`): [`Vector3`](Vector3.md)

The current vector divided by the vector or component

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `any` | The vector or component that you want to divide |

#### Returns

[`Vector3`](Vector3.md)

Vector3 Returns the result of the calculation

#### Defined in

[src/math/Vector3.ts:645](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L645)

___

### negate

▸ **negate**(): [`Vector3`](Vector3.md)

Sets the current Vector3 object to its inverse. The inverse object
is also considered the opposite of the original object. The value of
the x, y, and z properties of the current Vector3 object is changed
to -x, -y, and -z.

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:662](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L662)

___

### normalize

▸ **normalize**(`thickness?`): [`Vector3`](Vector3.md)

Scales the line segment between(0,0) and the current point to a set
length.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `thickness` | `number` | `1` | The scaling value. For example, if the current Vector3 object is (0,3,4), and you normalize it to 1, the point returned is at(0,0.6,0.8). |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:677](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L677)

___

### applyQuaternion

▸ **applyQuaternion**(`q`): [`Vector3`](Vector3.md)

Apply the rotation quaternion

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | `any` | quaternion |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:694](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L694)

___

### scaleBy

▸ **scaleBy**(`s`): [`Vector3`](Vector3.md)

Scales the current Vector3 object by a scalar, a magnitude. The
Vector3 object's x, y, and z elements are multiplied by the scalar
number specified in the parameter. For example, if the vector is
scaled by ten, the result is a vector that is ten times longer. The
scalar can also change the direction of the vector. Multiplying the
vector by a negative number reverses its direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `number` | A multiplier (scalar) used to scale a Vector3 object. |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:729](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L729)

___

### mul

▸ **mul**(`s`): [`Vector3`](Vector3.md)

The current vector times the scalar s

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `number` | scalar s |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:741](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L741)

___

### scale

▸ **scale**(`s`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:749](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L749)

___

### scaleToRef

▸ **scaleToRef**(`s`, `ref`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |
| `ref` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:756](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L756)

___

### setTo

▸ **setTo**(`xa`, `ya`, `za`, `wa?`): `void`

**`Language`**

en_US
Sets the members of Vector3 to the specified values

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `xa` | `number` | `undefined` | The first element, such as the x coordinate. |
| `ya` | `number` | `undefined` | The second element, such as the y coordinate. |
| `za` | `number` | `undefined` | The third element, such as the z coordinate. |
| `wa` | `number` | `1` | - |

#### Returns

`void`

#### Defined in

[src/math/Vector3.ts:775](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L775)

___

### copy

▸ **copy**(`src`): [`Vector3`](Vector3.md)

Copy the components of the source vector to this vector

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | [`Vector3`](Vector3.md) | Source vector |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:787](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L787)

___

### subtract

▸ **subtract**(`a`, `target?`): [`Vector3`](Vector3.md)

**`Language`**

en_US
Subtracts the value of the x, y, and z elements of the current
Vector3 object from the values of the x, y, and z elements of
another Vector3 object. The <code>subtract()</code> method does not
change the current Vector3 object. Instead, this method returns a
new Vector3 object with the new values.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | `undefined` | The Vector3 object to be subtracted from the current Vector3 object. |
| `target` | [`Vector3`](Vector3.md) | `null` | - |

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 object that is the difference between the
         current Vector3 and the specified Vector3 object.

#### Defined in

[src/math/Vector3.ts:808](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L808)

___

### multiply

▸ **multiply**(`other`, `target?`): [`Vector3`](Vector3.md)

Let's multiply that vector times that vector.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `other` | [`Vector3`](Vector3.md) | `undefined` | Multiplied vectors |
| `target` | [`Vector3`](Vector3.md) | `null` | Returned vector |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:822](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L822)

___

### divided

▸ **divided**(`other`, `target?`): [`Vector3`](Vector3.md)

Let's divide this vector by this vector.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `other` | [`Vector3`](Vector3.md) | `undefined` | The vector that divides |
| `target` | [`Vector3`](Vector3.md) | `null` | Returned vector |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:845](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L845)

___

### div

▸ **div**(`v`, `target?`): [`Vector3`](Vector3.md)

Divide that vector by the scalar

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | `number` | The scalar that divides |
| `target?` | [`Vector3`](Vector3.md) | Output a Vector3 vector |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:868](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L868)

___

### lerp

▸ **lerp**(`v0`, `v1`, `t`): `void`

Computes the linear interpolation between two Vector3, and the result is the current object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v0` | [`Vector3`](Vector3.md) | Vector 1 |
| `v1` | [`Vector3`](Vector3.md) | Vector 2 |
| `t` | `number` | Interpolation factor |

#### Returns

`void`

#### Defined in

[src/math/Vector3.ts:888](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L888)

___

### clamp

▸ **clamp**(`min`, `max`): [`Vector3`](Vector3.md)

The x, y, and z components of this vector are rounded upward to the nearest integers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | [`Vector3`](Vector3.md) | minimum value |
| `max` | [`Vector3`](Vector3.md) | maximum value |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:910](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L910)

___

### toString

▸ **toString**(): `string`

Returns the string form of the current vector

#### Returns

`string`

#### Defined in

[src/math/Vector3.ts:976](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L976)

___

### normalizeToWay2D\_XY

▸ **normalizeToWay2D_XY**(): `void`

#### Returns

`void`

#### Defined in

[src/math/Vector3.ts:992](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L992)

___

### toArray

▸ **toArray**(): `number`[]

#### Returns

`number`[]

#### Defined in

[src/math/Vector3.ts:1010](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1010)

___

### copyToBytes

▸ **copyToBytes**(`byte`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `byte` | `DataView` |

#### Returns

`void`

#### Defined in

[src/math/Vector3.ts:1014](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1014)

___

### cross

▸ **cross**(`a`, `target?`): [`Vector3`](Vector3.md)

The cross product of two Vector3s is this cross product of a
The cross product is going to be the perpendicular vector between these two vectors

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | `undefined` | Take the cross product of another vector |
| `target` | [`Vector3`](Vector3.md) | `null` | - |

#### Returns

[`Vector3`](Vector3.md)

Vector3 Returns the cross product vector

#### Defined in

[src/math/Vector3.ts:1026](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1026)

___

### multiplyScalar

▸ **multiplyScalar**(`scalar`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:1035](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1035)

___

### setFromArray

▸ **setFromArray**(`array`, `firstElementPos?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `array` | `number`[] | `undefined` |
| `firstElementPos` | `number` | `0` |

#### Returns

`void`

#### Defined in

[src/math/Vector3.ts:1043](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1043)

___

### divideScalar

▸ **divideScalar**(`scalar`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `any` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:1049](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1049)

___

### clampLength

▸ **clampLength**(`min`, `max`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:1053](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1053)

___

### setScalar

▸ **setScalar**(`value`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/Vector3.ts:1058](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1058)
