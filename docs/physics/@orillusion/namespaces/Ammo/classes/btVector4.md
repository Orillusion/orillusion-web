[**@orillusion/physics**](../../../../README.md)

***

# Class: btVector4

Defined in: [packages/ammo/ammo.d.ts:61](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L61)

## Extends

- [`btVector3`](btVector3.md)

## Constructors

### Constructor

> **new btVector4**(): `btVector4`

Defined in: [packages/ammo/ammo.d.ts:62](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L62)

#### Returns

`btVector4`

#### Overrides

[`btVector3`](btVector3.md).[`constructor`](btVector3.md#constructor)

### Constructor

> **new btVector4**(`x`, `y`, `z`, `w`): `btVector4`

Defined in: [packages/ammo/ammo.d.ts:63](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L63)

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

`btVector4`

#### Overrides

[`btVector3`](btVector3.md).[`constructor`](btVector3.md#constructor)

## Methods

### length()

> **length**(): `number`

Defined in: [packages/ammo/ammo.d.ts:46](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L46)

#### Returns

`number`

#### Inherited from

[`btVector3`](btVector3.md).[`length`](btVector3.md#length)

***

### x()

> **x**(): `number`

Defined in: [packages/ammo/ammo.d.ts:47](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L47)

#### Returns

`number`

#### Inherited from

[`btVector3`](btVector3.md).[`x`](btVector3.md#x)

***

### y()

> **y**(): `number`

Defined in: [packages/ammo/ammo.d.ts:48](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L48)

#### Returns

`number`

#### Inherited from

[`btVector3`](btVector3.md).[`y`](btVector3.md#y)

***

### z()

> **z**(): `number`

Defined in: [packages/ammo/ammo.d.ts:49](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L49)

#### Returns

`number`

#### Inherited from

[`btVector3`](btVector3.md).[`z`](btVector3.md#z)

***

### setX()

> **setX**(`x`): `void`

Defined in: [packages/ammo/ammo.d.ts:50](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L50)

#### Parameters

##### x

`number`

#### Returns

`void`

#### Inherited from

[`btVector3`](btVector3.md).[`setX`](btVector3.md#setx)

***

### setY()

> **setY**(`y`): `void`

Defined in: [packages/ammo/ammo.d.ts:51](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L51)

#### Parameters

##### y

`number`

#### Returns

`void`

#### Inherited from

[`btVector3`](btVector3.md).[`setY`](btVector3.md#sety)

***

### setZ()

> **setZ**(`z`): `void`

Defined in: [packages/ammo/ammo.d.ts:52](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L52)

#### Parameters

##### z

`number`

#### Returns

`void`

#### Inherited from

[`btVector3`](btVector3.md).[`setZ`](btVector3.md#setz)

***

### normalize()

> **normalize**(): `void`

Defined in: [packages/ammo/ammo.d.ts:54](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L54)

#### Returns

`void`

#### Inherited from

[`btVector3`](btVector3.md).[`normalize`](btVector3.md#normalize)

***

### rotate()

> **rotate**(`wAxis`, `angle`): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:55](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L55)

#### Parameters

##### wAxis

[`btVector3`](btVector3.md)

##### angle

`number`

#### Returns

[`btVector3`](btVector3.md)

#### Inherited from

[`btVector3`](btVector3.md).[`rotate`](btVector3.md#rotate)

***

### dot()

> **dot**(`v`): `number`

Defined in: [packages/ammo/ammo.d.ts:56](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L56)

#### Parameters

##### v

[`btVector3`](btVector3.md)

#### Returns

`number`

#### Inherited from

[`btVector3`](btVector3.md).[`dot`](btVector3.md#dot)

***

### op\_mul()

> **op\_mul**(`x`): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:57](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L57)

#### Parameters

##### x

`number`

#### Returns

[`btVector3`](btVector3.md)

#### Inherited from

[`btVector3`](btVector3.md).[`op_mul`](btVector3.md#op_mul)

***

### op\_add()

> **op\_add**(`v`): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:58](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L58)

#### Parameters

##### v

[`btVector3`](btVector3.md)

#### Returns

[`btVector3`](btVector3.md)

#### Inherited from

[`btVector3`](btVector3.md).[`op_add`](btVector3.md#op_add)

***

### op\_sub()

> **op\_sub**(`v`): [`btVector3`](btVector3.md)

Defined in: [packages/ammo/ammo.d.ts:59](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L59)

#### Parameters

##### v

[`btVector3`](btVector3.md)

#### Returns

[`btVector3`](btVector3.md)

#### Inherited from

[`btVector3`](btVector3.md).[`op_sub`](btVector3.md#op_sub)

***

### w()

> **w**(): `number`

Defined in: [packages/ammo/ammo.d.ts:64](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L64)

#### Returns

`number`

***

### setValue()

#### Call Signature

> **setValue**(`x`, `y`, `z`): `void`

Defined in: [packages/ammo/ammo.d.ts:65](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L65)

##### Parameters

###### x

`number`

###### y

`number`

###### z

`number`

##### Returns

`void`

##### Overrides

[`btVector3`](btVector3.md).[`setValue`](btVector3.md#setvalue)

#### Call Signature

> **setValue**(`x`, `y`, `z`, `w`): `void`

Defined in: [packages/ammo/ammo.d.ts:66](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L66)

##### Parameters

###### x

`number`

###### y

`number`

###### z

`number`

###### w

`number`

##### Returns

`void`

##### Overrides

`btVector3.setValue`
