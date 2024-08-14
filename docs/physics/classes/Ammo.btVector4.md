# Class: btVector4

[Ammo](../modules/Ammo.md).btVector4

## Hierarchy

- [`btVector3`](Ammo.btVector3.md)

  ↳ **`btVector4`**

### Constructors

- [constructor](Ammo.btVector4.md#constructor)

### Methods

- [length](Ammo.btVector4.md#length)
- [x](Ammo.btVector4.md#x)
- [y](Ammo.btVector4.md#y)
- [z](Ammo.btVector4.md#z)
- [setX](Ammo.btVector4.md#setx)
- [setY](Ammo.btVector4.md#sety)
- [setZ](Ammo.btVector4.md#setz)
- [normalize](Ammo.btVector4.md#normalize)
- [rotate](Ammo.btVector4.md#rotate)
- [dot](Ammo.btVector4.md#dot)
- [op\_mul](Ammo.btVector4.md#op_mul)
- [op\_add](Ammo.btVector4.md#op_add)
- [op\_sub](Ammo.btVector4.md#op_sub)
- [w](Ammo.btVector4.md#w)
- [setValue](Ammo.btVector4.md#setvalue)

## Constructors

### constructor

• **new btVector4**(): [`btVector4`](Ammo.btVector4.md)

#### Returns

[`btVector4`](Ammo.btVector4.md)

#### Overrides

[btVector3](Ammo.btVector3.md).[constructor](Ammo.btVector3.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:62](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L62)

• **new btVector4**(`x`, `y`, `z`, `w`): [`btVector4`](Ammo.btVector4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `w` | `number` |

#### Returns

[`btVector4`](Ammo.btVector4.md)

#### Overrides

[btVector3](Ammo.btVector3.md).[constructor](Ammo.btVector3.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:63](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L63)

## Methods

### length

▸ **length**(): `number`

#### Returns

`number`

#### Inherited from

[btVector3](Ammo.btVector3.md).[length](Ammo.btVector3.md#length)

#### Defined in

[packages/ammo/ammo.d.ts:46](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L46)

___

### x

▸ **x**(): `number`

#### Returns

`number`

#### Inherited from

[btVector3](Ammo.btVector3.md).[x](Ammo.btVector3.md#x)

#### Defined in

[packages/ammo/ammo.d.ts:47](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L47)

___

### y

▸ **y**(): `number`

#### Returns

`number`

#### Inherited from

[btVector3](Ammo.btVector3.md).[y](Ammo.btVector3.md#y)

#### Defined in

[packages/ammo/ammo.d.ts:48](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L48)

___

### z

▸ **z**(): `number`

#### Returns

`number`

#### Inherited from

[btVector3](Ammo.btVector3.md).[z](Ammo.btVector3.md#z)

#### Defined in

[packages/ammo/ammo.d.ts:49](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L49)

___

### setX

▸ **setX**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

#### Inherited from

[btVector3](Ammo.btVector3.md).[setX](Ammo.btVector3.md#setx)

#### Defined in

[packages/ammo/ammo.d.ts:50](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L50)

___

### setY

▸ **setY**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[btVector3](Ammo.btVector3.md).[setY](Ammo.btVector3.md#sety)

#### Defined in

[packages/ammo/ammo.d.ts:51](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L51)

___

### setZ

▸ **setZ**(`z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | `number` |

#### Returns

`void`

#### Inherited from

[btVector3](Ammo.btVector3.md).[setZ](Ammo.btVector3.md#setz)

#### Defined in

[packages/ammo/ammo.d.ts:52](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L52)

___

### normalize

▸ **normalize**(): `void`

#### Returns

`void`

#### Inherited from

[btVector3](Ammo.btVector3.md).[normalize](Ammo.btVector3.md#normalize)

#### Defined in

[packages/ammo/ammo.d.ts:54](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L54)

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

#### Inherited from

[btVector3](Ammo.btVector3.md).[rotate](Ammo.btVector3.md#rotate)

#### Defined in

[packages/ammo/ammo.d.ts:55](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L55)

___

### dot

▸ **dot**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

`number`

#### Inherited from

[btVector3](Ammo.btVector3.md).[dot](Ammo.btVector3.md#dot)

#### Defined in

[packages/ammo/ammo.d.ts:56](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L56)

___

### op\_mul

▸ **op_mul**(`x`): [`btVector3`](Ammo.btVector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Inherited from

[btVector3](Ammo.btVector3.md).[op_mul](Ammo.btVector3.md#op_mul)

#### Defined in

[packages/ammo/ammo.d.ts:57](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L57)

___

### op\_add

▸ **op_add**(`v`): [`btVector3`](Ammo.btVector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Inherited from

[btVector3](Ammo.btVector3.md).[op_add](Ammo.btVector3.md#op_add)

#### Defined in

[packages/ammo/ammo.d.ts:58](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L58)

___

### op\_sub

▸ **op_sub**(`v`): [`btVector3`](Ammo.btVector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`btVector3`](Ammo.btVector3.md) |

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Inherited from

[btVector3](Ammo.btVector3.md).[op_sub](Ammo.btVector3.md#op_sub)

#### Defined in

[packages/ammo/ammo.d.ts:59](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L59)

___

### w

▸ **w**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:64](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L64)

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

#### Overrides

[btVector3](Ammo.btVector3.md).[setValue](Ammo.btVector3.md#setvalue)

#### Defined in

[packages/ammo/ammo.d.ts:65](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L65)

▸ **setValue**(`x`, `y`, `z`, `w`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `w` | `number` |

#### Returns

`void`

#### Overrides

btVector3.setValue

#### Defined in

[packages/ammo/ammo.d.ts:66](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L66)
