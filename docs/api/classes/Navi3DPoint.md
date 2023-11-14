# Class: Navi3DPoint

Vector 3D

## Hierarchy

- [`Vector3`](Vector3.md)

  ↳ **`Navi3DPoint`**

  ↳↳ [`Navi3DPointFat`](Navi3DPointFat.md)

### Constructors

- [constructor](Navi3DPoint.md#constructor)

### Properties

- [MAX](Navi3DPoint.md#max)
- [MIN](Navi3DPoint.md#min)
- [SAFE\_MAX](Navi3DPoint.md#safe_max)
- [SAFE\_MIN](Navi3DPoint.md#safe_min)
- [X\_AXIS](Navi3DPoint.md#x_axis)
- [neg\_X\_AXIS](Navi3DPoint.md#neg_x_axis)
- [Y\_AXIS](Navi3DPoint.md#y_axis)
- [Z\_AXIS](Navi3DPoint.md#z_axis)
- [x](Navi3DPoint.md#x)
- [y](Navi3DPoint.md#y)
- [z](Navi3DPoint.md#z)
- [w](Navi3DPoint.md#w)
- [CALC\_VECTOR3D1](Navi3DPoint.md#calc_vector3d1)
- [CALC\_VECTOR3D2](Navi3DPoint.md#calc_vector3d2)
- [CALC\_VECTOR3D3](Navi3DPoint.md#calc_vector3d3)
- [CALC\_VECTOR3D4](Navi3DPoint.md#calc_vector3d4)
- [CALC\_VECTOR3D5](Navi3DPoint.md#calc_vector3d5)

### Accessors

- [ZERO](Navi3DPoint.md#zero)
- [ONE](Navi3DPoint.md#one)
- [LEFT](Navi3DPoint.md#left)
- [RIGHT](Navi3DPoint.md#right)
- [UP](Navi3DPoint.md#up)
- [DOWN](Navi3DPoint.md#down)
- [BACK](Navi3DPoint.md#back)
- [FORWARD](Navi3DPoint.md#forward)
- [a](Navi3DPoint.md#a)
- [r](Navi3DPoint.md#r)
- [g](Navi3DPoint.md#g)
- [b](Navi3DPoint.md#b)
- [length](Navi3DPoint.md#length)
- [lengthSquared](Navi3DPoint.md#lengthsquared)
- [position](Navi3DPoint.md#position)
- [id](Navi3DPoint.md#id)

### Methods

- [getTowPointbyDir](Navi3DPoint.md#gettowpointbydir)
- [pointToLine](Navi3DPoint.md#pointtoline)
- [dot](Navi3DPoint.md#dot)
- [getPoints](Navi3DPoint.md#getpoints)
- [getPointNumbers](Navi3DPoint.md#getpointnumbers)
- [getAngle](Navi3DPoint.md#getangle)
- [sqrMagnitude](Navi3DPoint.md#sqrmagnitude)
- [getZYAngle](Navi3DPoint.md#getzyangle)
- [sub](Navi3DPoint.md#sub)
- [add](Navi3DPoint.md#add)
- [distance](Navi3DPoint.md#distance)
- [squareDistance](Navi3DPoint.md#squaredistance)
- [distanceXZ](Navi3DPoint.md#distancexz)
- [set](Navi3DPoint.md#set)
- [add](Navi3DPoint.md#add-1)
- [subVectors](Navi3DPoint.md#subvectors)
- [distanceToSquared](Navi3DPoint.md#distancetosquared)
- [addXYZW](Navi3DPoint.md#addxyzw)
- [clone](Navi3DPoint.md#clone)
- [copyFrom](Navi3DPoint.md#copyfrom)
- [decrementBy](Navi3DPoint.md#decrementby)
- [dotProduct](Navi3DPoint.md#dotproduct)
- [equals](Navi3DPoint.md#equals)
- [incrementBy](Navi3DPoint.md#incrementby)
- [divide](Navi3DPoint.md#divide)
- [negate](Navi3DPoint.md#negate)
- [normalize](Navi3DPoint.md#normalize)
- [applyQuaternion](Navi3DPoint.md#applyquaternion)
- [scaleBy](Navi3DPoint.md#scaleby)
- [mul](Navi3DPoint.md#mul)
- [scale](Navi3DPoint.md#scale)
- [scaleToRef](Navi3DPoint.md#scaletoref)
- [setTo](Navi3DPoint.md#setto)
- [copy](Navi3DPoint.md#copy)
- [subtract](Navi3DPoint.md#subtract)
- [multiply](Navi3DPoint.md#multiply)
- [divided](Navi3DPoint.md#divided)
- [div](Navi3DPoint.md#div)
- [lerp](Navi3DPoint.md#lerp)
- [clamp](Navi3DPoint.md#clamp)
- [toString](Navi3DPoint.md#tostring)
- [normalizeToWay2D\_XY](Navi3DPoint.md#normalizetoway2d_xy)
- [toArray](Navi3DPoint.md#toarray)
- [copyToBytes](Navi3DPoint.md#copytobytes)
- [crossProduct](Navi3DPoint.md#crossproduct)
- [crossVectors](Navi3DPoint.md#crossvectors)
- [multiplyScalar](Navi3DPoint.md#multiplyscalar)
- [setFromArray](Navi3DPoint.md#setfromarray)
- [divideScalar](Navi3DPoint.md#dividescalar)
- [clampLength](Navi3DPoint.md#clamplength)
- [setScalar](Navi3DPoint.md#setscalar)
- [pointInsideTriangle](Navi3DPoint.md#pointinsidetriangle)
- [serialize](Navi3DPoint.md#serialize)
- [equalPoint](Navi3DPoint.md#equalpoint)
- [calcDistance](Navi3DPoint.md#calcdistance)

## Constructors

### constructor

• **new Navi3DPoint**(`id`, `X`, `Y`, `Z`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `X` | `number` |
| `Y` | `number` |
| `Z` | `number` |

#### Overrides

[Vector3](Vector3.md).[constructor](Vector3.md#constructor)

#### Defined in

[src/math/navigation/Navi3DPoint.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DPoint.ts#L18)

## Properties

### MAX

▪ `Static` `Readonly` **MAX**: [`Vector3`](Vector3.md)

Vector maximum

#### Inherited from

[Vector3](Vector3.md).[MAX](Vector3.md#max)

#### Defined in

[src/math/Vector3.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L11)

___

### MIN

▪ `Static` `Readonly` **MIN**: [`Vector3`](Vector3.md)

Vector minimum

#### Inherited from

[Vector3](Vector3.md).[MIN](Vector3.md#min)

#### Defined in

[src/math/Vector3.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L16)

___

### SAFE\_MAX

▪ `Static` `Readonly` **SAFE\_MAX**: [`Vector3`](Vector3.md)

Vector maximum integer value

#### Inherited from

[Vector3](Vector3.md).[SAFE_MAX](Vector3.md#safe_max)

#### Defined in

[src/math/Vector3.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L21)

___

### SAFE\_MIN

▪ `Static` `Readonly` **SAFE\_MIN**: [`Vector3`](Vector3.md)

Vector minimum integer value

#### Inherited from

[Vector3](Vector3.md).[SAFE_MIN](Vector3.md#safe_min)

#### Defined in

[src/math/Vector3.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L26)

___

### X\_AXIS

▪ `Static` `Readonly` **X\_AXIS**: [`Vector3`](Vector3.md)

X axis positive axis coordinate (1, 0, 0).

#### Inherited from

[Vector3](Vector3.md).[X_AXIS](Vector3.md#x_axis)

#### Defined in

[src/math/Vector3.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L31)

___

### neg\_X\_AXIS

▪ `Static` `Readonly` **neg\_X\_AXIS**: [`Vector3`](Vector3.md)

The X-axis is negative (-1, 0, 0).

#### Inherited from

[Vector3](Vector3.md).[neg_X_AXIS](Vector3.md#neg_x_axis)

#### Defined in

[src/math/Vector3.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L36)

___

### Y\_AXIS

▪ `Static` `Readonly` **Y\_AXIS**: [`Vector3`](Vector3.md)

The y axis defined as a Vector3 object with coordinates (0,1,0).

#### Inherited from

[Vector3](Vector3.md).[Y_AXIS](Vector3.md#y_axis)

#### Defined in

[src/math/Vector3.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L41)

___

### Z\_AXIS

▪ `Static` `Readonly` **Z\_AXIS**: [`Vector3`](Vector3.md)

The z axis defined as a Vector3 object with coordinates (0,0,1).

#### Inherited from

[Vector3](Vector3.md).[Z_AXIS](Vector3.md#z_axis)

#### Defined in

[src/math/Vector3.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L46)

___

### x

• **x**: `number` = `0`

The first element of a Vector3 object, such as the x coordinate of
a point in the three-dimensional space. The default value is 0.

#### Inherited from

[Vector3](Vector3.md).[x](Vector3.md#x)

#### Defined in

[src/math/Vector3.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L148)

___

### y

• **y**: `number` = `0`

The second element of a Vector3 object, such as the y coordinate of
a point in the three-dimensional space. The default value is 0.

#### Inherited from

[Vector3](Vector3.md).[y](Vector3.md#y)

#### Defined in

[src/math/Vector3.ts:154](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L154)

___

### z

• **z**: `number` = `0`

The third element of a Vector3 object, such as the y coordinate of
a point in the three-dimensional space. The default value is 0.

#### Inherited from

[Vector3](Vector3.md).[z](Vector3.md#z)

#### Defined in

[src/math/Vector3.ts:160](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L160)

___

### w

• **w**: `number` = `1`

The z component of the vector,
A three-dimensional position or projection that can be used as a perspective projection
We can also do w in the quaternion

#### Inherited from

[Vector3](Vector3.md).[w](Vector3.md#w)

#### Defined in

[src/math/Vector3.ts:167](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L167)

___

### CALC\_VECTOR3D1

▪ `Static` **CALC\_VECTOR3D1**: [`Vector3`](Vector3.md)

#### Defined in

[src/math/navigation/Navi3DPoint.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DPoint.ts#L6)

___

### CALC\_VECTOR3D2

▪ `Static` **CALC\_VECTOR3D2**: [`Vector3`](Vector3.md)

#### Defined in

[src/math/navigation/Navi3DPoint.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DPoint.ts#L8)

___

### CALC\_VECTOR3D3

▪ `Static` **CALC\_VECTOR3D3**: [`Vector3`](Vector3.md)

#### Defined in

[src/math/navigation/Navi3DPoint.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DPoint.ts#L10)

___

### CALC\_VECTOR3D4

▪ `Static` **CALC\_VECTOR3D4**: [`Vector3`](Vector3.md)

#### Defined in

[src/math/navigation/Navi3DPoint.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DPoint.ts#L12)

___

### CALC\_VECTOR3D5

▪ `Static` **CALC\_VECTOR3D5**: [`Vector3`](Vector3.md)

#### Defined in

[src/math/navigation/Navi3DPoint.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DPoint.ts#L14)

## Accessors

### ZERO

• `Static` `get` **ZERO**(): [`Vector3`](Vector3.md)

Returns a new vector with zero x, y, and z components

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Vector3.ZERO

#### Defined in

[src/math/Vector3.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L91)

___

### ONE

• `Static` `get` **ONE**(): [`Vector3`](Vector3.md)

Returns a new vector whose x, y, and z components are all 1

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Vector3.ONE

#### Defined in

[src/math/Vector3.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L98)

___

### LEFT

• `Static` `get` **LEFT**(): [`Vector3`](Vector3.md)

Returns a new vector pointing to the left, x is -1, y is 0, and z is 0

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Vector3.LEFT

#### Defined in

[src/math/Vector3.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L105)

___

### RIGHT

• `Static` `get` **RIGHT**(): [`Vector3`](Vector3.md)

Returns a new vector pointing in the right direction, where x is 1, y is 0, and z is 0

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Vector3.RIGHT

#### Defined in

[src/math/Vector3.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L112)

___

### UP

• `Static` `get` **UP**(): [`Vector3`](Vector3.md)

Returns a new vector pointing upwards, that is, x equals 0, y equals 1, and z equals 0

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Vector3.UP

#### Defined in

[src/math/Vector3.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L119)

___

### DOWN

• `Static` `get` **DOWN**(): [`Vector3`](Vector3.md)

Returns a new vector pointing down, where x is 0, y is -1, and z is 0

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Vector3.DOWN

#### Defined in

[src/math/Vector3.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L126)

___

### BACK

• `Static` `get` **BACK**(): [`Vector3`](Vector3.md)

Returns a new backward vector, x equals 0, y equals 0, and z equals negative 1

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Vector3.BACK

#### Defined in

[src/math/Vector3.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L133)

___

### FORWARD

• `Static` `get` **FORWARD**(): [`Vector3`](Vector3.md)

Returns a new forward-pointing vector, that is, x is 0, y is 0, and z is 1

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Vector3.FORWARD

#### Defined in

[src/math/Vector3.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L140)

___

### a

• `get` **a**(): `number`

get the w component

#### Returns

`number`

value of w

#### Inherited from

Vector3.a

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

#### Inherited from

Vector3.a

#### Defined in

[src/math/Vector3.ts:201](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L201)

___

### r

• `get` **r**(): `number`

get the x component

#### Returns

`number`

value of x

#### Inherited from

Vector3.r

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

#### Inherited from

Vector3.r

#### Defined in

[src/math/Vector3.ts:209](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L209)

___

### g

• `get` **g**(): `number`

get the y component

#### Returns

`number`

value of y

#### Inherited from

Vector3.g

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

#### Inherited from

Vector3.g

#### Defined in

[src/math/Vector3.ts:217](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L217)

___

### b

• `get` **b**(): `number`

get the z component

#### Returns

`number`

value of z

#### Inherited from

Vector3.b

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

#### Inherited from

Vector3.b

#### Defined in

[src/math/Vector3.ts:225](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L225)

___

### length

• `get` **length**(): `number`

The length of the vector, the distance from the origin (0, 0, 0) to (x, y, z)

#### Returns

`number`

#### Inherited from

Vector3.length

#### Defined in

[src/math/Vector3.ts:264](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L264)

___

### lengthSquared

• `get` **lengthSquared**(): `number`

You get the square of the length of the vector

#### Returns

`number`

#### Inherited from

Vector3.lengthSquared

#### Defined in

[src/math/Vector3.ts:272](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L272)

___

### position

• `get` **position**(): `this`

Get the current vector

#### Returns

`this`

#### Inherited from

Vector3.position

#### Defined in

[src/math/Vector3.ts:279](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L279)

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Defined in

[src/math/navigation/Navi3DPoint.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DPoint.ts#L23)

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

#### Inherited from

[Vector3](Vector3.md).[getTowPointbyDir](Vector3.md#gettowpointbydir)

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

#### Inherited from

[Vector3](Vector3.md).[pointToLine](Vector3.md#pointtoline)

#### Defined in

[src/math/Vector3.ts:319](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L319)

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

#### Inherited from

[Vector3](Vector3.md).[dot](Vector3.md#dot)

#### Defined in

[src/math/Vector3.ts:353](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L353)

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

#### Inherited from

[Vector3](Vector3.md).[getPoints](Vector3.md#getpoints)

#### Defined in

[src/math/Vector3.ts:357](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L357)

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

#### Inherited from

[Vector3](Vector3.md).[getPointNumbers](Vector3.md#getpointnumbers)

#### Defined in

[src/math/Vector3.ts:366](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L366)

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

#### Inherited from

[Vector3](Vector3.md).[getAngle](Vector3.md#getangle)

#### Defined in

[src/math/Vector3.ts:380](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L380)

___

### sqrMagnitude

▸ `Static` **sqrMagnitude**(`arg0`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Inherited from

[Vector3](Vector3.md).[sqrMagnitude](Vector3.md#sqrmagnitude)

#### Defined in

[src/math/Vector3.ts:385](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L385)

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

#### Inherited from

[Vector3](Vector3.md).[getZYAngle](Vector3.md#getzyangle)

#### Defined in

[src/math/Vector3.ts:389](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L389)

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

#### Inherited from

[Vector3](Vector3.md).[sub](Vector3.md#sub)

#### Defined in

[src/math/Vector3.ts:399](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L399)

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

#### Inherited from

[Vector3](Vector3.md).[add](Vector3.md#add)

#### Defined in

[src/math/Vector3.ts:415](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L415)

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

#### Inherited from

[Vector3](Vector3.md).[distance](Vector3.md#distance)

#### Defined in

[src/math/Vector3.ts:458](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L458)

___

### squareDistance

▸ `Static` **squareDistance**(`pt1`, `pt2`): `number`

Calculate the square distance between two vectors

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pt1` | [`Vector3`](Vector3.md) | Vector 1 |
| `pt2` | [`Vector3`](Vector3.md) | Vector 2 |

#### Returns

`number`

number The square distance between two vectors

#### Inherited from

[Vector3](Vector3.md).[squareDistance](Vector3.md#squaredistance)

#### Defined in

[src/math/Vector3.ts:471](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L471)

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

#### Inherited from

[Vector3](Vector3.md).[distanceXZ](Vector3.md#distancexz)

#### Defined in

[src/math/Vector3.ts:483](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L483)

___

### set

▸ **set**(`x`, `y`, `z`, `w?`): [`Navi3DPoint`](Navi3DPoint.md)

Sets the current vector x, y, z, and w components

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `undefined` |
| `y` | `number` | `undefined` |
| `z` | `number` | `undefined` |
| `w` | `number` | `1` |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Inherited from

[Vector3](Vector3.md).[set](Vector3.md#set)

#### Defined in

[src/math/Vector3.ts:498](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L498)

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

#### Inherited from

[Vector3](Vector3.md).[add](Vector3.md#add-1)

#### Defined in

[src/math/Vector3.ts:512](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L512)

___

### subVectors

▸ **subVectors**(`a`, `b`): [`Navi3DPoint`](Navi3DPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector3`](Vector3.md) |
| `b` | [`Vector3`](Vector3.md) |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Inherited from

[Vector3](Vector3.md).[subVectors](Vector3.md#subvectors)

#### Defined in

[src/math/Vector3.ts:527](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L527)

___

### distanceToSquared

▸ **distanceToSquared**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Inherited from

[Vector3](Vector3.md).[distanceToSquared](Vector3.md#distancetosquared)

#### Defined in

[src/math/Vector3.ts:534](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L534)

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

#### Inherited from

[Vector3](Vector3.md).[addXYZW](Vector3.md#addxyzw)

#### Defined in

[src/math/Vector3.ts:541](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L541)

___

### clone

▸ **clone**(): [`Vector3`](Vector3.md)

Clone a vector with the same components as the current vector

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[clone](Vector3.md#clone)

#### Defined in

[src/math/Vector3.ts:559](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L559)

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

#### Inherited from

[Vector3](Vector3.md).[copyFrom](Vector3.md#copyfrom)

#### Defined in

[src/math/Vector3.ts:568](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L568)

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

#### Inherited from

[Vector3](Vector3.md).[decrementBy](Vector3.md#decrementby)

#### Defined in

[src/math/Vector3.ts:581](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L581)

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

#### Inherited from

[Vector3](Vector3.md).[dotProduct](Vector3.md#dotproduct)

#### Defined in

[src/math/Vector3.ts:593](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L593)

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

#### Inherited from

[Vector3](Vector3.md).[equals](Vector3.md#equals)

#### Defined in

[src/math/Vector3.ts:615](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L615)

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

#### Inherited from

[Vector3](Vector3.md).[incrementBy](Vector3.md#incrementby)

#### Defined in

[src/math/Vector3.ts:635](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L635)

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

#### Inherited from

[Vector3](Vector3.md).[divide](Vector3.md#divide)

#### Defined in

[src/math/Vector3.ts:647](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L647)

___

### negate

▸ **negate**(): [`Navi3DPoint`](Navi3DPoint.md)

Sets the current Vector3 object to its inverse. The inverse object
is also considered the opposite of the original object. The value of
the x, y, and z properties of the current Vector3 object is changed
to -x, -y, and -z.

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Inherited from

[Vector3](Vector3.md).[negate](Vector3.md#negate)

#### Defined in

[src/math/Vector3.ts:664](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L664)

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

#### Inherited from

[Vector3](Vector3.md).[normalize](Vector3.md#normalize)

#### Defined in

[src/math/Vector3.ts:679](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L679)

___

### applyQuaternion

▸ **applyQuaternion**(`q`): [`Navi3DPoint`](Navi3DPoint.md)

Apply the rotation quaternion

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | `any` | quaternion |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Inherited from

[Vector3](Vector3.md).[applyQuaternion](Vector3.md#applyquaternion)

#### Defined in

[src/math/Vector3.ts:696](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L696)

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

#### Inherited from

[Vector3](Vector3.md).[scaleBy](Vector3.md#scaleby)

#### Defined in

[src/math/Vector3.ts:731](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L731)

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

#### Inherited from

[Vector3](Vector3.md).[mul](Vector3.md#mul)

#### Defined in

[src/math/Vector3.ts:743](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L743)

___

### scale

▸ **scale**(`s`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[scale](Vector3.md#scale)

#### Defined in

[src/math/Vector3.ts:751](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L751)

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

#### Inherited from

[Vector3](Vector3.md).[scaleToRef](Vector3.md#scaletoref)

#### Defined in

[src/math/Vector3.ts:758](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L758)

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

#### Inherited from

[Vector3](Vector3.md).[setTo](Vector3.md#setto)

#### Defined in

[src/math/Vector3.ts:777](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L777)

___

### copy

▸ **copy**(`src`): [`Navi3DPoint`](Navi3DPoint.md)

Copy the components of the source vector to this vector

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | [`Vector3`](Vector3.md) | Source vector |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Inherited from

[Vector3](Vector3.md).[copy](Vector3.md#copy)

#### Defined in

[src/math/Vector3.ts:789](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L789)

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

#### Inherited from

[Vector3](Vector3.md).[subtract](Vector3.md#subtract)

#### Defined in

[src/math/Vector3.ts:810](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L810)

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

#### Inherited from

[Vector3](Vector3.md).[multiply](Vector3.md#multiply)

#### Defined in

[src/math/Vector3.ts:824](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L824)

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

#### Inherited from

[Vector3](Vector3.md).[divided](Vector3.md#divided)

#### Defined in

[src/math/Vector3.ts:847](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L847)

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

#### Inherited from

[Vector3](Vector3.md).[div](Vector3.md#div)

#### Defined in

[src/math/Vector3.ts:870](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L870)

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

#### Inherited from

[Vector3](Vector3.md).[lerp](Vector3.md#lerp)

#### Defined in

[src/math/Vector3.ts:890](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L890)

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

#### Inherited from

[Vector3](Vector3.md).[clamp](Vector3.md#clamp)

#### Defined in

[src/math/Vector3.ts:912](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L912)

___

### toString

▸ **toString**(): `string`

Returns the string form of the current vector

#### Returns

`string`

#### Inherited from

[Vector3](Vector3.md).[toString](Vector3.md#tostring)

#### Defined in

[src/math/Vector3.ts:978](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L978)

___

### normalizeToWay2D\_XY

▸ **normalizeToWay2D_XY**(): `void`

#### Returns

`void`

#### Inherited from

[Vector3](Vector3.md).[normalizeToWay2D_XY](Vector3.md#normalizetoway2d_xy)

#### Defined in

[src/math/Vector3.ts:994](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L994)

___

### toArray

▸ **toArray**(): `number`[]

#### Returns

`number`[]

#### Inherited from

[Vector3](Vector3.md).[toArray](Vector3.md#toarray)

#### Defined in

[src/math/Vector3.ts:1012](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1012)

___

### copyToBytes

▸ **copyToBytes**(`byte`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `byte` | `DataView` |

#### Returns

`void`

#### Inherited from

[Vector3](Vector3.md).[copyToBytes](Vector3.md#copytobytes)

#### Defined in

[src/math/Vector3.ts:1016](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1016)

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

#### Inherited from

[Vector3](Vector3.md).[crossProduct](Vector3.md#crossproduct)

#### Defined in

[src/math/Vector3.ts:1028](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1028)

___

### crossVectors

▸ **crossVectors**(`a`, `b`): [`Navi3DPoint`](Navi3DPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector3`](Vector3.md) |
| `b` | [`Vector3`](Vector3.md) |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Inherited from

[Vector3](Vector3.md).[crossVectors](Vector3.md#crossvectors)

#### Defined in

[src/math/Vector3.ts:1037](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1037)

___

### multiplyScalar

▸ **multiplyScalar**(`scalar`): [`Navi3DPoint`](Navi3DPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Inherited from

[Vector3](Vector3.md).[multiplyScalar](Vector3.md#multiplyscalar)

#### Defined in

[src/math/Vector3.ts:1042](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1042)

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

#### Inherited from

[Vector3](Vector3.md).[setFromArray](Vector3.md#setfromarray)

#### Defined in

[src/math/Vector3.ts:1050](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1050)

___

### divideScalar

▸ **divideScalar**(`scalar`): [`Navi3DPoint`](Navi3DPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `any` |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Inherited from

[Vector3](Vector3.md).[divideScalar](Vector3.md#dividescalar)

#### Defined in

[src/math/Vector3.ts:1056](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1056)

___

### clampLength

▸ **clampLength**(`min`, `max`): [`Navi3DPoint`](Navi3DPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Inherited from

[Vector3](Vector3.md).[clampLength](Vector3.md#clamplength)

#### Defined in

[src/math/Vector3.ts:1060](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1060)

___

### setScalar

▸ **setScalar**(`value`): [`Navi3DPoint`](Navi3DPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Inherited from

[Vector3](Vector3.md).[setScalar](Vector3.md#setscalar)

#### Defined in

[src/math/Vector3.ts:1065](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1065)

___

### pointInsideTriangle

▸ `Static` **pointInsideTriangle**(`pt`, `pt0`, `pt1`, `pt2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`Vector3`](Vector3.md) |
| `pt0` | [`Vector3`](Vector3.md) |
| `pt1` | [`Vector3`](Vector3.md) |
| `pt2` | [`Vector3`](Vector3.md) |

#### Returns

`boolean`

#### Inherited from

[Vector3](Vector3.md).[pointInsideTriangle](Vector3.md#pointinsidetriangle)

#### Defined in

[src/math/Vector3.ts:1094](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1094)

___

### serialize

▸ `Static` **serialize**(`position`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[serialize](Vector3.md#serialize)

#### Defined in

[src/math/Vector3.ts:1123](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1123)

___

### equalPoint

▸ `Static` **equalPoint**(`p1`, `p2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | [`Vector3`](Vector3.md) |
| `p2` | [`Vector3`](Vector3.md) |

#### Returns

`boolean`

#### Defined in

[src/math/navigation/Navi3DPoint.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DPoint.ts#L27)

___

### calcDistance

▸ `Static` **calcDistance**(`pt1`, `pt2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt1` | [`Vector3`](Vector3.md) |
| `pt2` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Defined in

[src/math/navigation/Navi3DPoint.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DPoint.ts#L31)
