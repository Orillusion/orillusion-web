# Class: Navi3DTriangle

Vector 3D

## Hierarchy

- [`Vector3`](Vector3.md)

  ↳ **`Navi3DTriangle`**

## Implements

- [`IQuadNode`](../interfaces/IQuadNode.md)

### Constructors

- [constructor](Navi3DTriangle.md#constructor)

### Properties

- [MAX](Navi3DTriangle.md#max)
- [MIN](Navi3DTriangle.md#min)
- [SAFE\_MAX](Navi3DTriangle.md#safe_max)
- [SAFE\_MIN](Navi3DTriangle.md#safe_min)
- [X\_AXIS](Navi3DTriangle.md#x_axis)
- [neg\_X\_AXIS](Navi3DTriangle.md#neg_x_axis)
- [Y\_AXIS](Navi3DTriangle.md#y_axis)
- [Z\_AXIS](Navi3DTriangle.md#z_axis)
- [x](Navi3DTriangle.md#x)
- [y](Navi3DTriangle.md#y)
- [z](Navi3DTriangle.md#z)
- [w](Navi3DTriangle.md#w)
- [f](Navi3DTriangle.md#f)
- [gg](Navi3DTriangle.md#gg)
- [h](Navi3DTriangle.md#h)
- [parent](Navi3DTriangle.md#parent)
- [costMultiplier](Navi3DTriangle.md#costmultiplier)
- [openId](Navi3DTriangle.md#openid)
- [closeId](Navi3DTriangle.md#closeid)

### Accessors

- [ZERO](Navi3DTriangle.md#zero)
- [ONE](Navi3DTriangle.md#one)
- [LEFT](Navi3DTriangle.md#left)
- [RIGHT](Navi3DTriangle.md#right)
- [UP](Navi3DTriangle.md#up)
- [DOWN](Navi3DTriangle.md#down)
- [BACK](Navi3DTriangle.md#back)
- [FORWARD](Navi3DTriangle.md#forward)
- [a](Navi3DTriangle.md#a)
- [r](Navi3DTriangle.md#r)
- [g](Navi3DTriangle.md#g)
- [b](Navi3DTriangle.md#b)
- [length](Navi3DTriangle.md#length)
- [lengthSquared](Navi3DTriangle.md#lengthsquared)
- [position](Navi3DTriangle.md#position)
- [aabb](Navi3DTriangle.md#aabb)
- [isTriangle](Navi3DTriangle.md#istriangle)
- [id](Navi3DTriangle.md#id)
- [plane](Navi3DTriangle.md#plane)
- [points](Navi3DTriangle.md#points)
- [walkAble](Navi3DTriangle.md#walkable)
- [edges](Navi3DTriangle.md#edges)

### Methods

- [getTowPointbyDir](Navi3DTriangle.md#gettowpointbydir)
- [pointToLine](Navi3DTriangle.md#pointtoline)
- [dot](Navi3DTriangle.md#dot)
- [getPoints](Navi3DTriangle.md#getpoints)
- [getPointNumbers](Navi3DTriangle.md#getpointnumbers)
- [getAngle](Navi3DTriangle.md#getangle)
- [sqrMagnitude](Navi3DTriangle.md#sqrmagnitude)
- [getZYAngle](Navi3DTriangle.md#getzyangle)
- [sub](Navi3DTriangle.md#sub)
- [add](Navi3DTriangle.md#add)
- [distance](Navi3DTriangle.md#distance)
- [squareDistance](Navi3DTriangle.md#squaredistance)
- [distanceXZ](Navi3DTriangle.md#distancexz)
- [set](Navi3DTriangle.md#set)
- [add](Navi3DTriangle.md#add-1)
- [subVectors](Navi3DTriangle.md#subvectors)
- [addScalar](Navi3DTriangle.md#addscalar)
- [subScalar](Navi3DTriangle.md#subscalar)
- [min](Navi3DTriangle.md#min-1)
- [max](Navi3DTriangle.md#max-1)
- [distanceToSquared](Navi3DTriangle.md#distancetosquared)
- [addXYZW](Navi3DTriangle.md#addxyzw)
- [clone](Navi3DTriangle.md#clone)
- [copyFrom](Navi3DTriangle.md#copyfrom)
- [decrementBy](Navi3DTriangle.md#decrementby)
- [dotProduct](Navi3DTriangle.md#dotproduct)
- [equals](Navi3DTriangle.md#equals)
- [incrementBy](Navi3DTriangle.md#incrementby)
- [divide](Navi3DTriangle.md#divide)
- [negate](Navi3DTriangle.md#negate)
- [normalize](Navi3DTriangle.md#normalize)
- [applyQuaternion](Navi3DTriangle.md#applyquaternion)
- [applyMatrix4](Navi3DTriangle.md#applymatrix4)
- [scaleBy](Navi3DTriangle.md#scaleby)
- [mul](Navi3DTriangle.md#mul)
- [scale](Navi3DTriangle.md#scale)
- [scaleToRef](Navi3DTriangle.md#scaletoref)
- [setTo](Navi3DTriangle.md#setto)
- [copy](Navi3DTriangle.md#copy)
- [subtract](Navi3DTriangle.md#subtract)
- [multiply](Navi3DTriangle.md#multiply)
- [divided](Navi3DTriangle.md#divided)
- [div](Navi3DTriangle.md#div)
- [lerp](Navi3DTriangle.md#lerp)
- [clamp](Navi3DTriangle.md#clamp)
- [toString](Navi3DTriangle.md#tostring)
- [normalizeToWay2D\_XY](Navi3DTriangle.md#normalizetoway2d_xy)
- [toArray](Navi3DTriangle.md#toarray)
- [copyToBytes](Navi3DTriangle.md#copytobytes)
- [crossProduct](Navi3DTriangle.md#crossproduct)
- [crossVectors](Navi3DTriangle.md#crossvectors)
- [multiplyScalar](Navi3DTriangle.md#multiplyscalar)
- [setFromArray](Navi3DTriangle.md#setfromarray)
- [divideScalar](Navi3DTriangle.md#dividescalar)
- [clampLength](Navi3DTriangle.md#clamplength)
- [setScalar](Navi3DTriangle.md#setscalar)
- [addScaledVector](Navi3DTriangle.md#addscaledvector)
- [pointInsideTriangle](Navi3DTriangle.md#pointinsidetriangle)
- [serialize](Navi3DTriangle.md#serialize)
- [initAABB](Navi3DTriangle.md#initaabb)
- [calcGlobalQuadAABB](Navi3DTriangle.md#calcglobalquadaabb)
- [addNeibour](Navi3DTriangle.md#addneibour)
- [getNeibourTriangles](Navi3DTriangle.md#getneibourtriangles)
- [getEdges](Navi3DTriangle.md#getedges)
- [testMask](Navi3DTriangle.md#testmask)
- [getEdgeAgainstPoint](Navi3DTriangle.md#getedgeagainstpoint)
- [getPointAgainstEdge](Navi3DTriangle.md#getpointagainstedge)
- [getPublicEdge](Navi3DTriangle.md#getpublicedge)
- [loopPublicEdge](Navi3DTriangle.md#looppublicedge)
- [randomPoint](Navi3DTriangle.md#randompoint)

## Constructors

### constructor

• **new Navi3DTriangle**(`Id`, `edgeA`, `edgeB`, `edgeC`): [`Navi3DTriangle`](Navi3DTriangle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `Id` | `number` |
| `edgeA` | [`Navi3DEdge`](Navi3DEdge.md) |
| `edgeB` | [`Navi3DEdge`](Navi3DEdge.md) |
| `edgeC` | [`Navi3DEdge`](Navi3DEdge.md) |

#### Returns

[`Navi3DTriangle`](Navi3DTriangle.md)

#### Overrides

[Vector3](Vector3.md).[constructor](Vector3.md#constructor)

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L62)

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

### f

• **f**: `number` = `0`

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L29)

___

### gg

• **gg**: `number` = `0`

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L31)

___

### h

• **h**: `number` = `0`

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L33)

___

### parent

• **parent**: [`Navi3DTriangle`](Navi3DTriangle.md)

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L35)

___

### costMultiplier

• **costMultiplier**: `number` = `1.0`

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L37)

___

### openId

• **openId**: `number` = `0`

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L39)

___

### closeId

• **closeId**: `number` = `0`

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L41)

## Accessors

### ZERO

• `get` **ZERO**(): [`Vector3`](Vector3.md)

Returns a new vector with zero x, y, and z components

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Vector3.ZERO

#### Defined in

[src/math/Vector3.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L91)

___

### ONE

• `get` **ONE**(): [`Vector3`](Vector3.md)

Returns a new vector whose x, y, and z components are all 1

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Vector3.ONE

#### Defined in

[src/math/Vector3.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L98)

___

### LEFT

• `get` **LEFT**(): [`Vector3`](Vector3.md)

Returns a new vector pointing to the left, x is -1, y is 0, and z is 0

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Vector3.LEFT

#### Defined in

[src/math/Vector3.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L105)

___

### RIGHT

• `get` **RIGHT**(): [`Vector3`](Vector3.md)

Returns a new vector pointing in the right direction, where x is 1, y is 0, and z is 0

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Vector3.RIGHT

#### Defined in

[src/math/Vector3.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L112)

___

### UP

• `get` **UP**(): [`Vector3`](Vector3.md)

Returns a new vector pointing upwards, that is, x equals 0, y equals 1, and z equals 0

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Vector3.UP

#### Defined in

[src/math/Vector3.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L119)

___

### DOWN

• `get` **DOWN**(): [`Vector3`](Vector3.md)

Returns a new vector pointing down, where x is 0, y is -1, and z is 0

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Vector3.DOWN

#### Defined in

[src/math/Vector3.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L126)

___

### BACK

• `get` **BACK**(): [`Vector3`](Vector3.md)

Returns a new backward vector, x equals 0, y equals 0, and z equals negative 1

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Vector3.BACK

#### Defined in

[src/math/Vector3.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L133)

___

### FORWARD

• `get` **FORWARD**(): [`Vector3`](Vector3.md)

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

### aabb

• `get` **aabb**(): [`QuadAABB`](QuadAABB.md)

#### Returns

[`QuadAABB`](QuadAABB.md)

#### Implementation of

[IQuadNode](../interfaces/IQuadNode.md).[aabb](../interfaces/IQuadNode.md#aabb)

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L43)

___

### isTriangle

• `get` **isTriangle**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IQuadNode](../interfaces/IQuadNode.md).[isTriangle](../interfaces/IQuadNode.md#istriangle)

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L58)

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L104)

___

### plane

• `get` **plane**(): [`Plane3D`](Plane3D.md)

#### Returns

[`Plane3D`](Plane3D.md)

#### Implementation of

[IQuadNode](../interfaces/IQuadNode.md).[plane](../interfaces/IQuadNode.md#plane)

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L108)

___

### points

• `get` **points**(): [`Navi3DPoint`](Navi3DPoint.md)[]

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)[]

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L112)

___

### walkAble

• `get` **walkAble**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:157](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L157)

___

### edges

• `get` **edges**(): [`Navi3DEdge`](Navi3DEdge.md)[]

#### Returns

[`Navi3DEdge`](Navi3DEdge.md)[]

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L161)

## Methods

### getTowPointbyDir

▸ **getTowPointbyDir**(`dir`, `tp1`, `tp2`, `width`, `aix`): `void`

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

▸ **pointToLine**(`point1`, `point2`, `position`): `number`

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

▸ **dot**(`a`, `b`): `number`

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

▸ **getPoints**(`total`, `randSeed`): `any`[]

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

▸ **getPointNumbers**(`total`, `randSeed`): `any`[]

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

▸ **getAngle**(`from`, `to`): `number`

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

▸ **sqrMagnitude**(`arg0`): `number`

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

▸ **getZYAngle**(`zd`, `yd`): `number`

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

▸ **sub**(`a`, `b`, `target?`): [`Vector3`](Vector3.md)

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

▸ **add**(`a`, `b`, `target?`): [`Vector3`](Vector3.md)

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

▸ **distance**(`pt1`, `pt2`): `number`

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

▸ **squareDistance**(`pt1`, `pt2`): `number`

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

▸ **distanceXZ**(`pt1`, `pt2`): `number`

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

▸ **set**(`x`, `y`, `z`, `w?`): [`Navi3DTriangle`](Navi3DTriangle.md)

Sets the current vector x, y, z, and w components

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `undefined` |
| `y` | `number` | `undefined` |
| `z` | `number` | `undefined` |
| `w` | `number` | `1` |

#### Returns

[`Navi3DTriangle`](Navi3DTriangle.md)

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

▸ **subVectors**(`a`, `b`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector3`](Vector3.md) |
| `b` | [`Vector3`](Vector3.md) |

#### Returns

`this`

#### Inherited from

[Vector3](Vector3.md).[subVectors](Vector3.md#subvectors)

#### Defined in

[src/math/Vector3.ts:527](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L527)

___

### addScalar

▸ **addScalar**(`scalar`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[addScalar](Vector3.md#addscalar)

#### Defined in

[src/math/Vector3.ts:534](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L534)

___

### subScalar

▸ **subScalar**(`scalar`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[subScalar](Vector3.md#subscalar)

#### Defined in

[src/math/Vector3.ts:541](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L541)

___

### min

▸ **min**(`v`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |
| `target` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[min](Vector3.md#min-1)

#### Defined in

[src/math/Vector3.ts:548](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L548)

___

### max

▸ **max**(`v`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |
| `target` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[max](Vector3.md#max-1)

#### Defined in

[src/math/Vector3.ts:555](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L555)

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

[src/math/Vector3.ts:562](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L562)

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

[src/math/Vector3.ts:569](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L569)

___

### clone

▸ **clone**(): [`Vector3`](Vector3.md)

Clone a vector with the same components as the current vector

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[clone](Vector3.md#clone)

#### Defined in

[src/math/Vector3.ts:587](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L587)

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

[src/math/Vector3.ts:596](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L596)

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

[src/math/Vector3.ts:609](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L609)

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

[src/math/Vector3.ts:621](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L621)

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

[src/math/Vector3.ts:643](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L643)

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

[src/math/Vector3.ts:663](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L663)

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

[src/math/Vector3.ts:675](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L675)

___

### negate

▸ **negate**(): [`Navi3DTriangle`](Navi3DTriangle.md)

Sets the current Vector3 object to its inverse. The inverse object
is also considered the opposite of the original object. The value of
the x, y, and z properties of the current Vector3 object is changed
to -x, -y, and -z.

#### Returns

[`Navi3DTriangle`](Navi3DTriangle.md)

#### Inherited from

[Vector3](Vector3.md).[negate](Vector3.md#negate)

#### Defined in

[src/math/Vector3.ts:692](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L692)

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

[src/math/Vector3.ts:707](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L707)

___

### applyQuaternion

▸ **applyQuaternion**(`q`): [`Navi3DTriangle`](Navi3DTriangle.md)

Apply the rotation quaternion

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | `any` | quaternion |

#### Returns

[`Navi3DTriangle`](Navi3DTriangle.md)

#### Inherited from

[Vector3](Vector3.md).[applyQuaternion](Vector3.md#applyquaternion)

#### Defined in

[src/math/Vector3.ts:724](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L724)

___

### applyMatrix4

▸ **applyMatrix4**(`m`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `any` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[applyMatrix4](Vector3.md#applymatrix4)

#### Defined in

[src/math/Vector3.ts:749](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L749)

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

[src/math/Vector3.ts:763](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L763)

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

[src/math/Vector3.ts:775](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L775)

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

[src/math/Vector3.ts:783](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L783)

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

[src/math/Vector3.ts:790](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L790)

___

### setTo

▸ **setTo**(`xa`, `ya`, `za`, `wa?`): `void`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `xa` | `number` | `undefined` | The first element, such as the x coordinate. |
| `ya` | `number` | `undefined` | The second element, such as the y coordinate. |
| `za` | `number` | `undefined` | The third element, such as the z coordinate. |
| `wa` | `number` | `1` | - |

#### Returns

`void`

**`Language`**

en_US
Sets the members of Vector3 to the specified values

#### Inherited from

[Vector3](Vector3.md).[setTo](Vector3.md#setto)

#### Defined in

[src/math/Vector3.ts:809](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L809)

___

### copy

▸ **copy**(`src`): `this`

Copy the components of the source vector to this vector

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | [`Vector3`](Vector3.md) | Source vector |

#### Returns

`this`

#### Inherited from

[Vector3](Vector3.md).[copy](Vector3.md#copy)

#### Defined in

[src/math/Vector3.ts:821](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L821)

___

### subtract

▸ **subtract**(`a`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | `undefined` | The Vector3 object to be subtracted from the current Vector3 object. |
| `target` | [`Vector3`](Vector3.md) | `null` | - |

#### Returns

[`Vector3`](Vector3.md)

A new Vector3 object that is the difference between the
         current Vector3 and the specified Vector3 object.

**`Language`**

en_US
Subtracts the value of the x, y, and z elements of the current
Vector3 object from the values of the x, y, and z elements of
another Vector3 object. The <code>subtract()</code> method does not
change the current Vector3 object. Instead, this method returns a
new Vector3 object with the new values.

#### Inherited from

[Vector3](Vector3.md).[subtract](Vector3.md#subtract)

#### Defined in

[src/math/Vector3.ts:842](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L842)

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

[src/math/Vector3.ts:856](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L856)

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

[src/math/Vector3.ts:879](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L879)

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

[src/math/Vector3.ts:902](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L902)

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

[src/math/Vector3.ts:922](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L922)

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

[src/math/Vector3.ts:944](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L944)

___

### toString

▸ **toString**(): `string`

Returns the string form of the current vector

#### Returns

`string`

#### Inherited from

[Vector3](Vector3.md).[toString](Vector3.md#tostring)

#### Defined in

[src/math/Vector3.ts:1010](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1010)

___

### normalizeToWay2D\_XY

▸ **normalizeToWay2D_XY**(): `void`

#### Returns

`void`

#### Inherited from

[Vector3](Vector3.md).[normalizeToWay2D_XY](Vector3.md#normalizetoway2d_xy)

#### Defined in

[src/math/Vector3.ts:1026](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1026)

___

### toArray

▸ **toArray**(): `number`[]

#### Returns

`number`[]

#### Inherited from

[Vector3](Vector3.md).[toArray](Vector3.md#toarray)

#### Defined in

[src/math/Vector3.ts:1044](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1044)

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

[src/math/Vector3.ts:1048](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1048)

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

[src/math/Vector3.ts:1060](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1060)

___

### crossVectors

▸ **crossVectors**(`a`, `b`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector3`](Vector3.md) |
| `b` | [`Vector3`](Vector3.md) |

#### Returns

`this`

#### Inherited from

[Vector3](Vector3.md).[crossVectors](Vector3.md#crossvectors)

#### Defined in

[src/math/Vector3.ts:1069](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1069)

___

### multiplyScalar

▸ **multiplyScalar**(`scalar`): [`Navi3DTriangle`](Navi3DTriangle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Navi3DTriangle`](Navi3DTriangle.md)

#### Inherited from

[Vector3](Vector3.md).[multiplyScalar](Vector3.md#multiplyscalar)

#### Defined in

[src/math/Vector3.ts:1074](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1074)

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

[src/math/Vector3.ts:1082](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1082)

___

### divideScalar

▸ **divideScalar**(`scalar`): [`Navi3DTriangle`](Navi3DTriangle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `any` |

#### Returns

[`Navi3DTriangle`](Navi3DTriangle.md)

#### Inherited from

[Vector3](Vector3.md).[divideScalar](Vector3.md#dividescalar)

#### Defined in

[src/math/Vector3.ts:1088](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1088)

___

### clampLength

▸ **clampLength**(`min`, `max`): [`Navi3DTriangle`](Navi3DTriangle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

[`Navi3DTriangle`](Navi3DTriangle.md)

#### Inherited from

[Vector3](Vector3.md).[clampLength](Vector3.md#clamplength)

#### Defined in

[src/math/Vector3.ts:1092](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1092)

___

### setScalar

▸ **setScalar**(`value`): [`Navi3DTriangle`](Navi3DTriangle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`Navi3DTriangle`](Navi3DTriangle.md)

#### Inherited from

[Vector3](Vector3.md).[setScalar](Vector3.md#setscalar)

#### Defined in

[src/math/Vector3.ts:1097](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1097)

___

### addScaledVector

▸ **addScaledVector**(`v`, `scale`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |
| `scale` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[addScaledVector](Vector3.md#addscaledvector)

#### Defined in

[src/math/Vector3.ts:1104](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1104)

___

### pointInsideTriangle

▸ **pointInsideTriangle**(`pt`, `pt0`, `pt1`, `pt2`): `boolean`

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

[src/math/Vector3.ts:1133](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1133)

___

### serialize

▸ **serialize**(`position`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[serialize](Vector3.md#serialize)

#### Defined in

[src/math/Vector3.ts:1162](https://github.com/Orillusion/orillusion/blob/main/src/math/Vector3.ts#L1162)

___

### initAABB

▸ **initAABB**(): `void`

#### Returns

`void`

#### Implementation of

[IQuadNode](../interfaces/IQuadNode.md).[initAABB](../interfaces/IQuadNode.md#initaabb)

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L47)

___

### calcGlobalQuadAABB

▸ **calcGlobalQuadAABB**(): `void`

#### Returns

`void`

#### Implementation of

[IQuadNode](../interfaces/IQuadNode.md).[calcGlobalQuadAABB](../interfaces/IQuadNode.md#calcglobalquadaabb)

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L55)

___

### addNeibour

▸ **addNeibour**(`edge`, `triangle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | [`Navi3DEdge`](Navi3DEdge.md) |
| `triangle` | [`Navi3DTriangle`](Navi3DTriangle.md) |

#### Returns

`void`

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L116)

___

### getNeibourTriangles

▸ **getNeibourTriangles**(`list?`, `edgeMask?`, `triangleMask?`): [`Navi3DTriangle`](Navi3DTriangle.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `list` | [`Navi3DTriangle`](Navi3DTriangle.md)[] | `null` |
| `edgeMask` | `number` | `1` |
| `triangleMask` | `number` | `1` |

#### Returns

[`Navi3DTriangle`](Navi3DTriangle.md)[]

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L125)

___

### getEdges

▸ **getEdges**(`list?`, `edgeMask?`): [`Navi3DEdge`](Navi3DEdge.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `list` | [`Navi3DEdge`](Navi3DEdge.md)[] | `null` |
| `edgeMask` | `number` | `1` |

#### Returns

[`Navi3DEdge`](Navi3DEdge.md)[]

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L145)

___

### testMask

▸ **testMask**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`boolean`

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:165](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L165)

___

### getEdgeAgainstPoint

▸ **getEdgeAgainstPoint**(`edge`): [`Navi3DPoint`](Navi3DPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | [`Navi3DEdge`](Navi3DEdge.md) |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:169](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L169)

___

### getPointAgainstEdge

▸ **getPointAgainstEdge**(`point`): [`Navi3DEdge`](Navi3DEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Navi3DPoint`](Navi3DPoint.md) |

#### Returns

[`Navi3DEdge`](Navi3DEdge.md)

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:173](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L173)

___

### getPublicEdge

▸ **getPublicEdge**(`triangle`): [`Navi3DEdge`](Navi3DEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `triangle` | [`Navi3DTriangle`](Navi3DTriangle.md) |

#### Returns

[`Navi3DEdge`](Navi3DEdge.md)

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:177](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L177)

___

### loopPublicEdge

▸ **loopPublicEdge**(`triangle`): [`Navi3DEdge`](Navi3DEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `triangle` | [`Navi3DTriangle`](Navi3DTriangle.md) |

#### Returns

[`Navi3DEdge`](Navi3DEdge.md)

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:189](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L189)

___

### randomPoint

▸ **randomPoint**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/math/navigation/Navi3DTriangle.ts:203](https://github.com/Orillusion/orillusion/blob/main/src/math/navigation/Navi3DTriangle.ts#L203)
