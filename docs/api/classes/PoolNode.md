[**@orillusion/core**](../README.md)

***

# Class: PoolNode\<T\>

Defined in: [src/core/pool/ObjectPool.ts:2](https://github.com/orillusion/orillusion/blob/main/src/core/pool/ObjectPool.ts#L2)

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new PoolNode**\<`T`\>(): `PoolNode`\<`T`\>

Defined in: [src/core/pool/ObjectPool.ts:6](https://github.com/orillusion/orillusion/blob/main/src/core/pool/ObjectPool.ts#L6)

#### Returns

`PoolNode`\<`T`\>

## Methods

### pushBack()

> **pushBack**(`node`): `void`

Defined in: [src/core/pool/ObjectPool.ts:11](https://github.com/orillusion/orillusion/blob/main/src/core/pool/ObjectPool.ts#L11)

#### Parameters

##### node

`T`

#### Returns

`void`

***

### getUseList()

> **getUseList**(): `T`[]

Defined in: [src/core/pool/ObjectPool.ts:19](https://github.com/orillusion/orillusion/blob/main/src/core/pool/ObjectPool.ts#L19)

#### Returns

`T`[]

***

### getOne()

> **getOne**(`instance`, `param?`): `T`

Defined in: [src/core/pool/ObjectPool.ts:23](https://github.com/orillusion/orillusion/blob/main/src/core/pool/ObjectPool.ts#L23)

#### Parameters

##### instance

(`arg?`) => `T`

##### param?

`any`

#### Returns

`T`

***

### hasFree()

> **hasFree**(): `boolean`

Defined in: [src/core/pool/ObjectPool.ts:38](https://github.com/orillusion/orillusion/blob/main/src/core/pool/ObjectPool.ts#L38)

#### Returns

`boolean`
