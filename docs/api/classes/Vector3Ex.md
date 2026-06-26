[**@orillusion/core**](../README.md)

***

# Class: Vector3Ex

Defined in: [src/util/Vector3Ex.ts:7](https://github.com/orillusion/orillusion/blob/main/src/util/Vector3Ex.ts#L7)

extra function of vector3

## Constructors

### Constructor

> **new Vector3Ex**(): `Vector3Ex`

#### Returns

`Vector3Ex`

## Methods

### add()

> `static` **add**(`v1`, `v2`, `target?`): [`Vector3`](Vector3.md)

Defined in: [src/util/Vector3Ex.ts:15](https://github.com/orillusion/orillusion/blob/main/src/util/Vector3Ex.ts#L15)

vector3 add

#### Parameters

##### v1

[`Vector3`](Vector3.md)

##### v2

[`Vector3`](Vector3.md)

##### target?

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

***

### sub()

> `static` **sub**(`v1`, `v2`, `target?`): [`Vector3`](Vector3.md)

Defined in: [src/util/Vector3Ex.ts:32](https://github.com/orillusion/orillusion/blob/main/src/util/Vector3Ex.ts#L32)

vector3 sub

#### Parameters

##### v1

[`Vector3`](Vector3.md)

##### v2

[`Vector3`](Vector3.md)

##### target?

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

***

### mul()

> `static` **mul**(`v1`, `v2`, `target?`): [`Vector3`](Vector3.md)

Defined in: [src/util/Vector3Ex.ts:49](https://github.com/orillusion/orillusion/blob/main/src/util/Vector3Ex.ts#L49)

vector3 mul

#### Parameters

##### v1

[`Vector3`](Vector3.md)

##### v2

[`Vector3`](Vector3.md)

##### target?

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

***

### mulScale()

> `static` **mulScale**(`v1`, `v`, `target?`): [`Vector3`](Vector3.md)

Defined in: [src/util/Vector3Ex.ts:66](https://github.com/orillusion/orillusion/blob/main/src/util/Vector3Ex.ts#L66)

vector3 mul

#### Parameters

##### v1

[`Vector3`](Vector3.md)

##### v

`number`

##### target?

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

***

### div()

> `static` **div**(`v1`, `v2`, `target?`): [`Vector3`](Vector3.md)

Defined in: [src/util/Vector3Ex.ts:83](https://github.com/orillusion/orillusion/blob/main/src/util/Vector3Ex.ts#L83)

vector3 div

#### Parameters

##### v1

[`Vector3`](Vector3.md)

##### v2

[`Vector3`](Vector3.md)

##### target?

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

***

### normalize()

> `static` **normalize**(`v1`): [`Vector3`](Vector3.md)

Defined in: [src/util/Vector3Ex.ts:98](https://github.com/orillusion/orillusion/blob/main/src/util/Vector3Ex.ts#L98)

normalize

#### Parameters

##### v1

[`Vector3`](Vector3.md)

source vector

#### Returns

[`Vector3`](Vector3.md)

result vector

***

### dot()

> `static` **dot**(`v1`, `v2`): `number`

Defined in: [src/util/Vector3Ex.ts:109](https://github.com/orillusion/orillusion/blob/main/src/util/Vector3Ex.ts#L109)

dot

#### Parameters

##### v1

[`Vector3`](Vector3.md)

first vector

##### v2

[`Vector3`](Vector3.md)

second vector

#### Returns

`number`

result

***

### calculateVectorAngle\_xz()

> `static` **calculateVectorAngle\_xz**(`v1`, `v2`): `number`

Defined in: [src/util/Vector3Ex.ts:121](https://github.com/orillusion/orillusion/blob/main/src/util/Vector3Ex.ts#L121)

Calculate the angle between two vectors

#### Parameters

##### v1

[`Vector3`](Vector3.md)

first vector

##### v2

[`Vector3`](Vector3.md)

second vector

#### Returns

`number`

Angle result in radians

***

### distance()

> `static` **distance**(`v1`, `v2`): `number`

Defined in: [src/util/Vector3Ex.ts:135](https://github.com/orillusion/orillusion/blob/main/src/util/Vector3Ex.ts#L135)

Calculate the distance between two points

#### Parameters

##### v1

[`Vector3`](Vector3.md)

first vector

##### v2

[`Vector3`](Vector3.md)

second vector

#### Returns

`number`

distance

#### Static

***

### getRandomXYZ()

> `static` **getRandomXYZ**(`min?`, `max?`): [`Vector3`](Vector3.md)

Defined in: [src/util/Vector3Ex.ts:145](https://github.com/orillusion/orillusion/blob/main/src/util/Vector3Ex.ts#L145)

make a Random 3D Vector

#### Parameters

##### min?

`number` = `-100`

The min random value of vector components

##### max?

`number` = `100`

The max random value of vector components

#### Returns

[`Vector3`](Vector3.md)

random vector

***

### getRandomV3()

> `static` **getRandomV3**(`min?`, `max?`, `yMin`, `yMax`): [`Vector3`](Vector3.md)

Defined in: [src/util/Vector3Ex.ts:157](https://github.com/orillusion/orillusion/blob/main/src/util/Vector3Ex.ts#L157)

make a Random 3D Vector

#### Parameters

##### min?

`number` = `-100`

The min random value of vector component-x

##### max?

`number` = `100`

The max random value of vector component-x

##### yMin

`number`

The min random value of vector component-y

##### yMax

`number`

The max random value of vector component-y

#### Returns

[`Vector3`](Vector3.md)

random vector

***

### sphere()

> `static` **sphere**(`radius`): [`Vector3`](Vector3.md)

Defined in: [src/util/Vector3Ex.ts:161](https://github.com/orillusion/orillusion/blob/main/src/util/Vector3Ex.ts#L161)

#### Parameters

##### radius

`number`

#### Returns

[`Vector3`](Vector3.md)

***

### sphereXYZ()

> `static` **sphereXYZ**(`radiusMin`, `radiusMax`, `x?`, `y?`, `z?`): [`Vector3`](Vector3.md)

Defined in: [src/util/Vector3Ex.ts:169](https://github.com/orillusion/orillusion/blob/main/src/util/Vector3Ex.ts#L169)

#### Parameters

##### radiusMin

`number`

##### radiusMax

`number`

##### x?

`number` = `1`

##### y?

`number` = `1`

##### z?

`number` = `1`

#### Returns

[`Vector3`](Vector3.md)
