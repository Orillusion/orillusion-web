# Class: SerializeProtoData


### Properties

- [type](SerializeProtoData.md#type)
- [numbers](SerializeProtoData.md#numbers)
- [value](SerializeProtoData.md#value)

### Constructors

- [constructor](SerializeProtoData.md#constructor)

### Methods

- [writeNone](SerializeProtoData.md#writenone)
- [writeNumber](SerializeProtoData.md#writenumber)
- [writeVector4](SerializeProtoData.md#writevector4)
- [readVector4](SerializeProtoData.md#readvector4)
- [writeVector3](SerializeProtoData.md#writevector3)
- [readVector3](SerializeProtoData.md#readvector3)
- [writeVector2](SerializeProtoData.md#writevector2)
- [readVector2](SerializeProtoData.md#readvector2)
- [writeRGB](SerializeProtoData.md#writergb)
- [readRGB](SerializeProtoData.md#readrgb)
- [writeRGBA](SerializeProtoData.md#writergba)
- [readRGBA](SerializeProtoData.md#readrgba)
- [writeFloat32Array](SerializeProtoData.md#writefloat32array)
- [readFloat32Array](SerializeProtoData.md#readfloat32array)
- [writeRGBE](SerializeProtoData.md#writergbe)
- [readRGBE](SerializeProtoData.md#readrgbe)
- [writeRect](SerializeProtoData.md#writerect)
- [readRect](SerializeProtoData.md#readrect)
- [writeRange](SerializeProtoData.md#writerange)

## Properties

### type

• `Readonly` **type**: [`SerializeProtoType`](../types/SerializeProtoType.md)

#### Defined in

[src/engine/util/serialize/SerializeProtoData.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeProtoData.ts#L15)

___

### numbers

• `Optional` **numbers**: `number`[]

#### Defined in

[src/engine/util/serialize/SerializeProtoData.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeProtoData.ts#L16)

___

### value

• `Optional` **value**: `number`

#### Defined in

[src/engine/util/serialize/SerializeProtoData.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeProtoData.ts#L17)

## Constructors

### constructor

• **new SerializeProtoData**(`type`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`SerializeProtoType`](../types/SerializeProtoType.md) |

#### Defined in

[src/engine/util/serialize/SerializeProtoData.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeProtoData.ts#L19)

## Methods

### writeNone

▸ `Static` **writeNone**(): [`SerializeProtoData`](SerializeProtoData.md)

#### Returns

[`SerializeProtoData`](SerializeProtoData.md)

#### Defined in

[src/engine/util/serialize/SerializeProtoData.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeProtoData.ts#L23)

___

### writeNumber

▸ `Static` **writeNumber**(`value`): [`SerializeProtoData`](SerializeProtoData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`SerializeProtoData`](SerializeProtoData.md)

#### Defined in

[src/engine/util/serialize/SerializeProtoData.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeProtoData.ts#L27)

___

### writeVector4

▸ `Static` **writeVector4**(`value`): [`SerializeProtoData`](SerializeProtoData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `v4` |

#### Returns

[`SerializeProtoData`](SerializeProtoData.md)

#### Defined in

[src/engine/util/serialize/SerializeProtoData.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeProtoData.ts#L33)

___

### readVector4

▸ `Static` **readVector4**(`value`, `ret`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`SerializeProtoData`](SerializeProtoData.md) |
| `ret` | `v4` |

#### Returns

`void`

#### Defined in

[src/engine/util/serialize/SerializeProtoData.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeProtoData.ts#L43)

___

### writeVector3

▸ `Static` **writeVector3**(`value`): [`SerializeProtoData`](SerializeProtoData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `v3` |

#### Returns

[`SerializeProtoData`](SerializeProtoData.md)

#### Defined in

[src/engine/util/serialize/SerializeProtoData.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeProtoData.ts#L50)

___

### readVector3

▸ `Static` **readVector3**(`value`, `ret`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`SerializeProtoData`](SerializeProtoData.md) |
| `ret` | `v3` |

#### Returns

`void`

#### Defined in

[src/engine/util/serialize/SerializeProtoData.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeProtoData.ts#L59)

___

### writeVector2

▸ `Static` **writeVector2**(`value`): [`SerializeProtoData`](SerializeProtoData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `v2` |

#### Returns

[`SerializeProtoData`](SerializeProtoData.md)

#### Defined in

[src/engine/util/serialize/SerializeProtoData.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeProtoData.ts#L65)

___

### readVector2

▸ `Static` **readVector2**(`value`, `ret`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`SerializeProtoData`](SerializeProtoData.md) |
| `ret` | `v2` |

#### Returns

`void`

#### Defined in

[src/engine/util/serialize/SerializeProtoData.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeProtoData.ts#L73)

___

### writeRGB

▸ `Static` **writeRGB**(`value`): [`SerializeProtoData`](SerializeProtoData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `rgb` |

#### Returns

[`SerializeProtoData`](SerializeProtoData.md)

#### Defined in

[src/engine/util/serialize/SerializeProtoData.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeProtoData.ts#L78)

___

### readRGB

▸ `Static` **readRGB**(`value`, `ret`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`SerializeProtoData`](SerializeProtoData.md) |
| `ret` | `rgb` |

#### Returns

`void`

#### Defined in

[src/engine/util/serialize/SerializeProtoData.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeProtoData.ts#L87)

___

### writeRGBA

▸ `Static` **writeRGBA**(`value`): [`SerializeProtoData`](SerializeProtoData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `rgba` |

#### Returns

[`SerializeProtoData`](SerializeProtoData.md)

#### Defined in

[src/engine/util/serialize/SerializeProtoData.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeProtoData.ts#L93)

___

### readRGBA

▸ `Static` **readRGBA**(`value`, `ret`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`SerializeProtoData`](SerializeProtoData.md) |
| `ret` | `rgba` |

#### Returns

`void`

#### Defined in

[src/engine/util/serialize/SerializeProtoData.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeProtoData.ts#L103)

___

### writeFloat32Array

▸ `Static` **writeFloat32Array**(`value`): [`SerializeProtoData`](SerializeProtoData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number`[] \| `Float32Array` |

#### Returns

[`SerializeProtoData`](SerializeProtoData.md)

#### Defined in

[src/engine/util/serialize/SerializeProtoData.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeProtoData.ts#L110)

___

### readFloat32Array

▸ `Static` **readFloat32Array**(`list`, `ret`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | `number`[] \| `Float32Array` |
| `ret` | `number`[] \| `Float32Array` |

#### Returns

`void`

#### Defined in

[src/engine/util/serialize/SerializeProtoData.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeProtoData.ts#L119)

___

### writeRGBE

▸ `Static` **writeRGBE**(`value`): [`SerializeProtoData`](SerializeProtoData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `rgbe` |

#### Returns

[`SerializeProtoData`](SerializeProtoData.md)

#### Defined in

[src/engine/util/serialize/SerializeProtoData.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeProtoData.ts#L125)

___

### readRGBE

▸ `Static` **readRGBE**(`value`, `ret`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`SerializeProtoData`](SerializeProtoData.md) |
| `ret` | `rgbe` |

#### Returns

`void`

#### Defined in

[src/engine/util/serialize/SerializeProtoData.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeProtoData.ts#L135)

___

### writeRect

▸ `Static` **writeRect**(`value`): [`SerializeProtoData`](SerializeProtoData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `rect` |

#### Returns

[`SerializeProtoData`](SerializeProtoData.md)

#### Defined in

[src/engine/util/serialize/SerializeProtoData.ts:142](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeProtoData.ts#L142)

___

### readRect

▸ `Static` **readRect**(`value`, `ret`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`SerializeProtoData`](SerializeProtoData.md) |
| `ret` | `rect` |

#### Returns

`void`

#### Defined in

[src/engine/util/serialize/SerializeProtoData.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeProtoData.ts#L152)

___

### writeRange

▸ `Static` **writeRange**(`value`, `min`, `max`): [`SerializeProtoData`](SerializeProtoData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `min` | `number` |
| `max` | `number` |

#### Returns

[`SerializeProtoData`](SerializeProtoData.md)

#### Defined in

[src/engine/util/serialize/SerializeProtoData.ts:159](https://github.com/Orillusion/orillusion/blob/main/src/engine/util/serialize/SerializeProtoData.ts#L159)
