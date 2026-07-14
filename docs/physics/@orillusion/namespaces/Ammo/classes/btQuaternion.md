[**@orillusion/physics**](../../../../README.md)

***

# Class: btQuaternion

Defined in: [packages/ammo/ammo.d.ts:78](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L78)

## Extends

- [`btQuadWord`](btQuadWord.md)

## Constructors

### Constructor

> **new btQuaternion**(`x`, `y`, `z`, `w`): `btQuaternion`

Defined in: [packages/ammo/ammo.d.ts:79](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L79)

#### Parameters

##### x

`number`

##### y

`number`

##### z

`number`

##### w

`number`

#### Returns

`btQuaternion`

#### Overrides

[`btQuadWord`](btQuadWord.md).[`constructor`](btQuadWord.md#constructor)

## Methods

### x()

> **x**(): `number`

Defined in: [packages/ammo/ammo.d.ts:69](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L69)

#### Returns

`number`

#### Inherited from

[`btQuadWord`](btQuadWord.md).[`x`](btQuadWord.md#x)

***

### y()

> **y**(): `number`

Defined in: [packages/ammo/ammo.d.ts:70](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L70)

#### Returns

`number`

#### Inherited from

[`btQuadWord`](btQuadWord.md).[`y`](btQuadWord.md#y)

***

### z()

> **z**(): `number`

Defined in: [packages/ammo/ammo.d.ts:71](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L71)

#### Returns

`number`

#### Inherited from

[`btQuadWord`](btQuadWord.md).[`z`](btQuadWord.md#z)

***

### w()

> **w**(): `number`

Defined in: [packages/ammo/ammo.d.ts:72](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L72)

#### Returns

`number`

#### Inherited from

[`btQuadWord`](btQuadWord.md).[`w`](btQuadWord.md#w)

***

### setX()

> **setX**(`x`): `void`

Defined in: [packages/ammo/ammo.d.ts:73](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L73)

#### Parameters

##### x

`number`

#### Returns

`void`

#### Inherited from

[`btQuadWord`](btQuadWord.md).[`setX`](btQuadWord.md#setx)

***

### setY()

> **setY**(`y`): `void`

Defined in: [packages/ammo/ammo.d.ts:74](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L74)

#### Parameters

##### y

`number`

#### Returns

`void`

#### Inherited from

[`btQuadWord`](btQuadWord.md).[`setY`](btQuadWord.md#sety)

***

### setZ()

> **setZ**(`z`): `void`

Defined in: [packages/ammo/ammo.d.ts:75](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L75)

#### Parameters

##### z

`number`

#### Returns

`void`

#### Inherited from

[`btQuadWord`](btQuadWord.md).[`setZ`](btQuadWord.md#setz)

***

### setW()

> **setW**(`w`): `void`

Defined in: [packages/ammo/ammo.d.ts:76](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L76)

#### Parameters

##### w

`number`

#### Returns

`void`

#### Inherited from

[`btQuadWord`](btQuadWord.md).[`setW`](btQuadWord.md#setw)

***

### setValue()

> **setValue**(`x`, `y`, `z`, `w`): `void`

Defined in: [packages/ammo/ammo.d.ts:80](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L80)

#### Parameters

##### x

`number`

##### y

`number`

##### z

`number`

##### w

`number`

#### Returns

`void`

***

### setEulerZYX()

> **setEulerZYX**(`z`, `y`, `x`): `void`

Defined in: [packages/ammo/ammo.d.ts:81](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L81)

#### Parameters

##### z

`number`

##### y

`number`

##### x

`number`

#### Returns

`void`

***

### setRotation()

> **setRotation**(`axis`, `angle`): `void`

Defined in: [packages/ammo/ammo.d.ts:82](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L82)

#### Parameters

##### axis

[`btVector3`](btVector3.md)

##### angle

`number`

#### Returns

`void`

***

### normalize()

> **normalize**(): `void`

Defined in: [packages/ammo/ammo.d.ts:83](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L83)

#### Returns

`void`

***

### length2()

> **length2**(): `number`

Defined in: [packages/ammo/ammo.d.ts:84](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L84)

#### Returns

`number`

***

### length()

> **length**(): `number`

Defined in: [packages/ammo/ammo.d.ts:85](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L85)

#### Returns

`number`

***

### dot()

> **dot**(`q`): `number`

Defined in: [packages/ammo/ammo.d.ts:86](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L86)

#### Parameters

##### q

`btQuaternion`

#### Returns

`number`

***

### normalized()

> **normalized**(): `btQuaternion`

Defined in: [packages/ammo/ammo.d.ts:87](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L87)

#### Returns

`btQuaternion`

***

### getAxis()

> **getAxis**(): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:88](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L88)

#### Returns

[`btVector3`](btVector3.md)

***

### inverse()

> **inverse**(): `btQuaternion`

Defined in: [packages/ammo/ammo.d.ts:89](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L89)

#### Returns

`btQuaternion`

***

### getAngle()

> **getAngle**(): `number`

Defined in: [packages/ammo/ammo.d.ts:90](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L90)

#### Returns

`number`

***

### getAngleShortestPath()

> **getAngleShortestPath**(): `number`

Defined in: [packages/ammo/ammo.d.ts:91](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L91)

#### Returns

`number`

***

### angle()

> **angle**(`q`): `number`

Defined in: [packages/ammo/ammo.d.ts:92](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L92)

#### Parameters

##### q

`btQuaternion`

#### Returns

`number`

***

### angleShortestPath()

> **angleShortestPath**(`q`): `number`

Defined in: [packages/ammo/ammo.d.ts:93](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L93)

#### Parameters

##### q

`btQuaternion`

#### Returns

`number`

***

### op\_add()

> **op\_add**(`q`): `btQuaternion`

Defined in: [packages/ammo/ammo.d.ts:94](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L94)

#### Parameters

##### q

`btQuaternion`

#### Returns

`btQuaternion`

***

### op\_sub()

> **op\_sub**(`q`): `btQuaternion`

Defined in: [packages/ammo/ammo.d.ts:95](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L95)

#### Parameters

##### q

`btQuaternion`

#### Returns

`btQuaternion`

***

### op\_mul()

> **op\_mul**(`s`): `btQuaternion`

Defined in: [packages/ammo/ammo.d.ts:96](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L96)

#### Parameters

##### s

`number`

#### Returns

`btQuaternion`

***

### op\_mulq()

> **op\_mulq**(`q`): `btQuaternion`

Defined in: [packages/ammo/ammo.d.ts:97](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L97)

#### Parameters

##### q

`btQuaternion`

#### Returns

`btQuaternion`

***

### op\_div()

> **op\_div**(`s`): `btQuaternion`

Defined in: [packages/ammo/ammo.d.ts:98](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L98)

#### Parameters

##### s

`number`

#### Returns

`btQuaternion`
