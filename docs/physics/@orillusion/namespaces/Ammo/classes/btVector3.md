[**@orillusion/physics**](../../../../README.md)

***

# Class: btVector3

Defined in: [packages/ammo/ammo.d.ts:43](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L43)

## Extended by

- [`btVector4`](btVector4.md)

## Constructors

### Constructor

> **new btVector3**(): `btVector3`

Defined in: [packages/ammo/ammo.d.ts:44](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L44)

#### Returns

`btVector3`

### Constructor

> **new btVector3**(`x`, `y`, `z`): `btVector3`

Defined in: [packages/ammo/ammo.d.ts:45](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L45)

#### Parameters

##### x

`number`

##### y

`number`

##### z

`number`

#### Returns

`btVector3`

## Methods

### length()

> **length**(): `number`

Defined in: [packages/ammo/ammo.d.ts:46](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L46)

#### Returns

`number`

***

### x()

> **x**(): `number`

Defined in: [packages/ammo/ammo.d.ts:47](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L47)

#### Returns

`number`

***

### y()

> **y**(): `number`

Defined in: [packages/ammo/ammo.d.ts:48](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L48)

#### Returns

`number`

***

### z()

> **z**(): `number`

Defined in: [packages/ammo/ammo.d.ts:49](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L49)

#### Returns

`number`

***

### setX()

> **setX**(`x`): `void`

Defined in: [packages/ammo/ammo.d.ts:50](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L50)

#### Parameters

##### x

`number`

#### Returns

`void`

***

### setY()

> **setY**(`y`): `void`

Defined in: [packages/ammo/ammo.d.ts:51](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L51)

#### Parameters

##### y

`number`

#### Returns

`void`

***

### setZ()

> **setZ**(`z`): `void`

Defined in: [packages/ammo/ammo.d.ts:52](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L52)

#### Parameters

##### z

`number`

#### Returns

`void`

***

### setValue()

> **setValue**(`x`, `y`, `z`): `void`

Defined in: [packages/ammo/ammo.d.ts:53](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L53)

#### Parameters

##### x

`number`

##### y

`number`

##### z

`number`

#### Returns

`void`

***

### normalize()

> **normalize**(): `void`

Defined in: [packages/ammo/ammo.d.ts:54](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L54)

#### Returns

`void`

***

### rotate()

> **rotate**(`wAxis`, `angle`): `btVector3`

Defined in: [packages/ammo/ammo.d.ts:55](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L55)

#### Parameters

##### wAxis

`btVector3`

##### angle

`number`

#### Returns

`btVector3`

***

### dot()

> **dot**(`v`): `number`

Defined in: [packages/ammo/ammo.d.ts:56](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L56)

#### Parameters

##### v

`btVector3`

#### Returns

`number`

***

### op\_mul()

> **op\_mul**(`x`): `btVector3`

Defined in: [packages/ammo/ammo.d.ts:57](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L57)

#### Parameters

##### x

`number`

#### Returns

`btVector3`

***

### op\_add()

> **op\_add**(`v`): `btVector3`

Defined in: [packages/ammo/ammo.d.ts:58](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L58)

#### Parameters

##### v

`btVector3`

#### Returns

`btVector3`

***

### op\_sub()

> **op\_sub**(`v`): `btVector3`

Defined in: [packages/ammo/ammo.d.ts:59](https://github.com/orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L59)

#### Parameters

##### v

`btVector3`

#### Returns

`btVector3`
