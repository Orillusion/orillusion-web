# Class: PoolNode<T\>

## Type parameters

| Name |
| :------ |
| `T` |

### Constructors

- [constructor](PoolNode.md#constructor)

### Methods

- [pushBack](PoolNode.md#pushback)
- [getOne](PoolNode.md#getone)
- [hasFree](PoolNode.md#hasfree)

## Constructors

### constructor

• **new PoolNode**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/core/pool/ObjectPool.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/core/pool/ObjectPool.ts#L6)

## Methods

### pushBack

▸ **pushBack**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |

#### Returns

`void`

#### Defined in

[src/core/pool/ObjectPool.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/core/pool/ObjectPool.ts#L11)

___

### getOne

▸ **getOne**(`instance`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | () => `T` |

#### Returns

`T`

#### Defined in

[src/core/pool/ObjectPool.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/core/pool/ObjectPool.ts#L19)

___

### hasFree

▸ **hasFree**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/core/pool/ObjectPool.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/core/pool/ObjectPool.ts#L34)
