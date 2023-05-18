# Class: btVector3

[Ammo](../modules/Ammo.md).btVector3

## Hierarchy

- **`btVector3`**

  ↳ [`btVector4`](Ammo.btVector4.md)


### Constructors

- [constructor](Ammo.btVector3.md#constructor)

### Methods

- [length](Ammo.btVector3.md#length)
- [x](Ammo.btVector3.md#x)
- [y](Ammo.btVector3.md#y)
- [z](Ammo.btVector3.md#z)
- [setX](Ammo.btVector3.md#setx)
- [setY](Ammo.btVector3.md#sety)
- [setZ](Ammo.btVector3.md#setz)
- [setValue](Ammo.btVector3.md#setvalue)
- [normalize](Ammo.btVector3.md#normalize)
- [rotate](Ammo.btVector3.md#rotate)
- [dot](Ammo.btVector3.md#dot)
- [op\_mul](Ammo.btVector3.md#op_mul)
- [op\_add](Ammo.btVector3.md#op_add)
- [op\_sub](Ammo.btVector3.md#op_sub)

## Constructors

### constructor

• **new btVector3**()

#### Defined in

[packages/ammo/ammo.d.ts:39](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L39)

• **new btVector3**(`x`, `y`, `z`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Defined in

[packages/ammo/ammo.d.ts:40](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L40)

## Methods

### length

▸ **length**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:41](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L41)

___

### x

▸ **x**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:42](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L42)

___

### y

▸ **y**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:43](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L43)

___

### z

▸ **z**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:44](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L44)

___

### setX

▸ **setX**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:45](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L45)

___

### setY

▸ **setY**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:46](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L46)

___

### setZ

▸ **setZ**(`z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:47](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L47)

___

### setValue

▸ **setValue**(`x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:48](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L48)

___

### normalize

▸ **normalize**(): `void`

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:49](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L49)

___

### rotate

▸ **rotate**(`wAxis`, `angle`): [`btVector3`](Ammo.btVector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `wAxis` | [`btVector3`](Ammo.btVector3.md) |
| `angle` | `number` |

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/ammo/ammo.d.ts:50](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L50)

___

### dot

▸ **dot**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:51](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L51)

___

### op\_mul

▸ **op_mul**(`x`): [`btVector3`](Ammo.btVector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/ammo/ammo.d.ts:52](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L52)

___

### op\_add

▸ **op_add**(`v`): [`btVector3`](Ammo.btVector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/ammo/ammo.d.ts:53](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L53)

___

### op\_sub

▸ **op_sub**(`v`): [`btVector3`](Ammo.btVector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/ammo/ammo.d.ts:54](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L54)
