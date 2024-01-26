# Class: PoolNode\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

### Constructors

- [constructor](PoolNode.md#constructor)

### Methods

- [pushBack](PoolNode.md#pushback)
- [getUseList](PoolNode.md#getuselist)
- [getOne](PoolNode.md#getone)
- [hasFree](PoolNode.md#hasfree)

## Constructors

### constructor

• **new PoolNode**\<`T`\>(): [`PoolNode`](PoolNode.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PoolNode`](PoolNode.md)\<`T`\>

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

### getUseList

▸ **getUseList**(): `T`[]

#### Returns

`T`[]

#### Defined in

[src/core/pool/ObjectPool.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/core/pool/ObjectPool.ts#L19)

___

### getOne

▸ **getOne**(`instance`, `param?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | (`arg?`: `any`) => `T` |
| `param?` | `any` |

#### Returns

`T`

#### Defined in

[src/core/pool/ObjectPool.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/core/pool/ObjectPool.ts#L23)

___

### hasFree

▸ **hasFree**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/core/pool/ObjectPool.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/core/pool/ObjectPool.ts#L38)
