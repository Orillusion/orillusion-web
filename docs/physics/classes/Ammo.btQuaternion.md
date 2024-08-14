# Class: btQuaternion

[Ammo](../modules/Ammo.md).btQuaternion

## Hierarchy

- [`btQuadWord`](Ammo.btQuadWord.md)

  ↳ **`btQuaternion`**

### Constructors

- [constructor](Ammo.btQuaternion.md#constructor)

### Methods

- [x](Ammo.btQuaternion.md#x)
- [y](Ammo.btQuaternion.md#y)
- [z](Ammo.btQuaternion.md#z)
- [w](Ammo.btQuaternion.md#w)
- [setX](Ammo.btQuaternion.md#setx)
- [setY](Ammo.btQuaternion.md#sety)
- [setZ](Ammo.btQuaternion.md#setz)
- [setW](Ammo.btQuaternion.md#setw)
- [setValue](Ammo.btQuaternion.md#setvalue)
- [setEulerZYX](Ammo.btQuaternion.md#seteulerzyx)
- [setRotation](Ammo.btQuaternion.md#setrotation)
- [normalize](Ammo.btQuaternion.md#normalize)
- [length2](Ammo.btQuaternion.md#length2)
- [length](Ammo.btQuaternion.md#length)
- [dot](Ammo.btQuaternion.md#dot)
- [normalized](Ammo.btQuaternion.md#normalized)
- [getAxis](Ammo.btQuaternion.md#getaxis)
- [inverse](Ammo.btQuaternion.md#inverse)
- [getAngle](Ammo.btQuaternion.md#getangle)
- [getAngleShortestPath](Ammo.btQuaternion.md#getangleshortestpath)
- [angle](Ammo.btQuaternion.md#angle)
- [angleShortestPath](Ammo.btQuaternion.md#angleshortestpath)
- [op\_add](Ammo.btQuaternion.md#op_add)
- [op\_sub](Ammo.btQuaternion.md#op_sub)
- [op\_mul](Ammo.btQuaternion.md#op_mul)
- [op\_mulq](Ammo.btQuaternion.md#op_mulq)
- [op\_div](Ammo.btQuaternion.md#op_div)

## Constructors

### constructor

• **new btQuaternion**(`x`, `y`, `z`, `w`): [`btQuaternion`](Ammo.btQuaternion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `w` | `number` |

#### Returns

[`btQuaternion`](Ammo.btQuaternion.md)

#### Overrides

[btQuadWord](Ammo.btQuadWord.md).[constructor](Ammo.btQuadWord.md#constructor)

#### Defined in

[packages/ammo/ammo.d.ts:79](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L79)

## Methods

### x

▸ **x**(): `number`

#### Returns

`number`

#### Inherited from

[btQuadWord](Ammo.btQuadWord.md).[x](Ammo.btQuadWord.md#x)

#### Defined in

[packages/ammo/ammo.d.ts:69](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L69)

___

### y

▸ **y**(): `number`

#### Returns

`number`

#### Inherited from

[btQuadWord](Ammo.btQuadWord.md).[y](Ammo.btQuadWord.md#y)

#### Defined in

[packages/ammo/ammo.d.ts:70](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L70)

___

### z

▸ **z**(): `number`

#### Returns

`number`

#### Inherited from

[btQuadWord](Ammo.btQuadWord.md).[z](Ammo.btQuadWord.md#z)

#### Defined in

[packages/ammo/ammo.d.ts:71](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L71)

___

### w

▸ **w**(): `number`

#### Returns

`number`

#### Inherited from

[btQuadWord](Ammo.btQuadWord.md).[w](Ammo.btQuadWord.md#w)

#### Defined in

[packages/ammo/ammo.d.ts:72](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L72)

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

[btQuadWord](Ammo.btQuadWord.md).[setX](Ammo.btQuadWord.md#setx)

#### Defined in

[packages/ammo/ammo.d.ts:73](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L73)

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

[btQuadWord](Ammo.btQuadWord.md).[setY](Ammo.btQuadWord.md#sety)

#### Defined in

[packages/ammo/ammo.d.ts:74](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L74)

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

[btQuadWord](Ammo.btQuadWord.md).[setZ](Ammo.btQuadWord.md#setz)

#### Defined in

[packages/ammo/ammo.d.ts:75](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L75)

___

### setW

▸ **setW**(`w`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `w` | `number` |

#### Returns

`void`

#### Inherited from

[btQuadWord](Ammo.btQuadWord.md).[setW](Ammo.btQuadWord.md#setw)

#### Defined in

[packages/ammo/ammo.d.ts:76](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L76)

___

### setValue

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

#### Defined in

[packages/ammo/ammo.d.ts:80](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L80)

___

### setEulerZYX

▸ **setEulerZYX**(`z`, `y`, `x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `z` | `number` |
| `y` | `number` |
| `x` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:81](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L81)

___

### setRotation

▸ **setRotation**(`axis`, `angle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`btVector3`](Ammo.btVector3.md) |
| `angle` | `number` |

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:82](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L82)

___

### normalize

▸ **normalize**(): `void`

#### Returns

`void`

#### Defined in

[packages/ammo/ammo.d.ts:83](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L83)

___

### length2

▸ **length2**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:84](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L84)

___

### length

▸ **length**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:85](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L85)

___

### dot

▸ **dot**(`q`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | [`btQuaternion`](Ammo.btQuaternion.md) |

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:86](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L86)

___

### normalized

▸ **normalized**(): [`btQuaternion`](Ammo.btQuaternion.md)

#### Returns

[`btQuaternion`](Ammo.btQuaternion.md)

#### Defined in

[packages/ammo/ammo.d.ts:87](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L87)

___

### getAxis

▸ **getAxis**(): [`btVector3`](Ammo.btVector3.md)

#### Returns

[`btVector3`](Ammo.btVector3.md)

#### Defined in

[packages/ammo/ammo.d.ts:88](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L88)

___

### inverse

▸ **inverse**(): [`btQuaternion`](Ammo.btQuaternion.md)

#### Returns

[`btQuaternion`](Ammo.btQuaternion.md)

#### Defined in

[packages/ammo/ammo.d.ts:89](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L89)

___

### getAngle

▸ **getAngle**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:90](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L90)

___

### getAngleShortestPath

▸ **getAngleShortestPath**(): `number`

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:91](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L91)

___

### angle

▸ **angle**(`q`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | [`btQuaternion`](Ammo.btQuaternion.md) |

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:92](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L92)

___

### angleShortestPath

▸ **angleShortestPath**(`q`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | [`btQuaternion`](Ammo.btQuaternion.md) |

#### Returns

`number`

#### Defined in

[packages/ammo/ammo.d.ts:93](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L93)

___

### op\_add

▸ **op_add**(`q`): [`btQuaternion`](Ammo.btQuaternion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | [`btQuaternion`](Ammo.btQuaternion.md) |

#### Returns

[`btQuaternion`](Ammo.btQuaternion.md)

#### Defined in

[packages/ammo/ammo.d.ts:94](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L94)

___

### op\_sub

▸ **op_sub**(`q`): [`btQuaternion`](Ammo.btQuaternion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | [`btQuaternion`](Ammo.btQuaternion.md) |

#### Returns

[`btQuaternion`](Ammo.btQuaternion.md)

#### Defined in

[packages/ammo/ammo.d.ts:95](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L95)

___

### op\_mul

▸ **op_mul**(`s`): [`btQuaternion`](Ammo.btQuaternion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |

#### Returns

[`btQuaternion`](Ammo.btQuaternion.md)

#### Defined in

[packages/ammo/ammo.d.ts:96](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L96)

___

### op\_mulq

▸ **op_mulq**(`q`): [`btQuaternion`](Ammo.btQuaternion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | [`btQuaternion`](Ammo.btQuaternion.md) |

#### Returns

[`btQuaternion`](Ammo.btQuaternion.md)

#### Defined in

[packages/ammo/ammo.d.ts:97](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L97)

___

### op\_div

▸ **op_div**(`s`): [`btQuaternion`](Ammo.btQuaternion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |

#### Returns

[`btQuaternion`](Ammo.btQuaternion.md)

#### Defined in

[packages/ammo/ammo.d.ts:98](https://github.com/Orillusion/orillusion/blob/main/packages/ammo/ammo.d.ts#L98)
