# Class: GradientNEW

颜色渐变


### Constructors

- [constructor](GradientNEW.md#constructor)

### Methods

- [inverseLerpWordOptimized](GradientNEW.md#inverselerpwordoptimized)
- [evaluate](GradientNEW.md#evaluate)
- [inverseLerpWord](GradientNEW.md#inverselerpword)
- [unSerialized](GradientNEW.md#unserialized)

## Constructors

### constructor

• **new GradientNEW**()

构造新的渐变对象

#### Defined in

[src/engine/math/GradientNew.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/GradientNew.ts#L57)

## Methods

### inverseLerpWordOptimized

▸ `Static` **inverseLerpWordOptimized**(`from`, `rcp`, `v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `any` |
| `rcp` | `any` |
| `v` | `any` |

#### Returns

`number`

#### Defined in

[src/engine/math/GradientNew.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/GradientNew.ts#L63)

___

### evaluate

▸ **evaluate**(`normalizedTime`): [`Color`](Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `normalizedTime` | `any` |

#### Returns

[`Color`](Color.md)

#### Defined in

[src/engine/math/GradientNew.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/GradientNew.ts#L67)

___

### inverseLerpWord

▸ `Static` **inverseLerpWord**(`from`, `to`, `v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `any` |
| `to` | `any` |
| `v` | `any` |

#### Returns

`number`

#### Defined in

[src/engine/math/GradientNew.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/GradientNew.ts#L101)

___

### unSerialized

▸ **unSerialized**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Defined in

[src/engine/math/GradientNew.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/GradientNew.ts#L108)
