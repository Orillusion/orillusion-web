# Class: Rand

普通随机


### Properties

- [x](Rand.md#x)
- [y](Rand.md#y)
- [z](Rand.md#z)
- [w](Rand.md#w)

### Constructors

- [constructor](Rand.md#constructor)

### Methods

- [get](Rand.md#get)
- [getFloatFromInt](Rand.md#getfloatfromint)
- [getByteFromInt](Rand.md#getbytefromint)
- [getFloat](Rand.md#getfloat)
- [getSignedFloat](Rand.md#getsignedfloat)
- [setSeed](Rand.md#setseed)
- [getSeed](Rand.md#getseed)

## Properties

### x

• **x**: `number` = `0`

#### Defined in

[src/engine/math/Rand.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rand.ts#L7)

___

### y

• **y**: `number` = `0`

#### Defined in

[src/engine/math/Rand.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rand.ts#L8)

___

### z

• **z**: `number` = `0`

#### Defined in

[src/engine/math/Rand.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rand.ts#L9)

___

### w

• **w**: `number` = `0`

#### Defined in

[src/engine/math/Rand.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rand.ts#L10)

## Constructors

### constructor

• **new Rand**(`seed?`)

构造一个随机对象，生成随机种子

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `seed` | `number` | `0` |

#### Defined in

[src/engine/math/Rand.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rand.ts#L16)

## Methods

### get

▸ **get**(): `number`

获取随机数

#### Returns

`number`

#### Defined in

[src/engine/math/Rand.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rand.ts#L24)

___

### getFloatFromInt

▸ `Static` **getFloatFromInt**(`value`): `number`

转换为浮点数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | 待转换值 |

#### Returns

`number`

#### Defined in

[src/engine/math/Rand.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rand.ts#L38)

___

### getByteFromInt

▸ `Static` **getByteFromInt**(`value`): `number`

转换为字节

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | 待转换值 |

#### Returns

`number`

#### Defined in

[src/engine/math/Rand.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rand.ts#L48)

___

### getFloat

▸ **getFloat**(): `number`

随机生成一个浮点数 0.0至1.0

#### Returns

`number`

#### Defined in

[src/engine/math/Rand.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rand.ts#L57)

___

### getSignedFloat

▸ **getSignedFloat**(): `number`

随机生成有符号浮点数 -1.0至1.0

#### Returns

`number`

#### Defined in

[src/engine/math/Rand.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rand.ts#L65)

___

### setSeed

▸ **setSeed**(`seed`): `void`

设置随机种子

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `seed` | `any` | 随机种子 |

#### Returns

`void`

#### Defined in

[src/engine/math/Rand.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rand.ts#L73)

___

### getSeed

▸ **getSeed**(): `number`

获取随机种子

#### Returns

`number`

#### Defined in

[src/engine/math/Rand.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/Rand.ts#L84)
