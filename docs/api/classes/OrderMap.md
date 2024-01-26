# Class: OrderMap\<K, V\>

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Hierarchy

- `Map`\<`K`, `V`\>

  ↳ **`OrderMap`**

### Constructors

- [constructor](OrderMap.md#constructor)

### Properties

- [size](OrderMap.md#size)
- [[toStringTag]](OrderMap.md#[tostringtag])
- [[species]](OrderMap.md#[species])
- [valueList](OrderMap.md#valuelist)
- [keyList](OrderMap.md#keylist)
- [isChange](OrderMap.md#ischange)

### Methods

- [forEach](OrderMap.md#foreach)
- [get](OrderMap.md#get)
- [has](OrderMap.md#has)
- [[iterator]](OrderMap.md#[iterator])
- [entries](OrderMap.md#entries)
- [keys](OrderMap.md#keys)
- [values](OrderMap.md#values)
- [delete](OrderMap.md#delete)
- [set](OrderMap.md#set)
- [clear](OrderMap.md#clear)

## Constructors

### constructor

• **new OrderMap**\<`K`, `V`\>(`iterable?`, `recordKey?`, `recordValue?`): [`OrderMap`](OrderMap.md)\<`K`, `V`\>

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `Iterable`\<readonly [`K`, `V`]\> |
| `recordKey?` | `boolean` |
| `recordValue?` | `boolean` |

#### Returns

[`OrderMap`](OrderMap.md)\<`K`, `V`\>

#### Overrides

Map\&lt;K, V\&gt;.constructor

#### Defined in

[src/math/OrderMap.ts:5](https://github.com/Orillusion/orillusion/blob/main/src/math/OrderMap.ts#L5)

## Properties

### size

• `Readonly` **size**: `number`

#### Inherited from

Map.size

#### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.collection.d.ts:45

___

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Map.[toStringTag]

#### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:137

___

### [species]

▪ `Static` `Readonly` **[species]**: `MapConstructor`

#### Inherited from

Map.[species]

#### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:319

___

### valueList

• `Readonly` **valueList**: `V`[]

#### Defined in

[src/math/OrderMap.ts:2](https://github.com/Orillusion/orillusion/blob/main/src/math/OrderMap.ts#L2)

___

### keyList

• `Readonly` **keyList**: `K`[]

#### Defined in

[src/math/OrderMap.ts:3](https://github.com/Orillusion/orillusion/blob/main/src/math/OrderMap.ts#L3)

___

### isChange

• **isChange**: `boolean` = `true`

#### Defined in

[src/math/OrderMap.ts:4](https://github.com/Orillusion/orillusion/blob/main/src/math/OrderMap.ts#L4)

## Methods

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `V`, `key`: `K`, `map`: `Map`\<`K`, `V`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

Map.forEach

#### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

### get

▸ **get**(`key`): `V`

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`V`

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Inherited from

Map.get

#### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.collection.d.ts:33

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

boolean indicating whether an element with the specified key exists or not.

#### Inherited from

Map.has

#### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.collection.d.ts:37

___

### [iterator]

▸ **[iterator]**(): `IterableIterator`\<[`K`, `V`]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`\<[`K`, `V`]\>

#### Inherited from

Map.[iterator]

#### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.iterable.d.ts:119

___

### entries

▸ **entries**(): `IterableIterator`\<[`K`, `V`]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`\<[`K`, `V`]\>

#### Inherited from

Map.entries

#### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.iterable.d.ts:124

___

### keys

▸ **keys**(): `IterableIterator`\<`K`\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`\<`K`\>

#### Inherited from

Map.keys

#### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.iterable.d.ts:129

___

### values

▸ **values**(): `IterableIterator`\<`V`\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`\<`V`\>

#### Inherited from

Map.values

#### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.iterable.d.ts:134

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Overrides

Map.delete

#### Defined in

[src/math/OrderMap.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/math/OrderMap.ts#L18)

___

### set

▸ **set**(`key`, `value`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

`this`

#### Overrides

Map.set

#### Defined in

[src/math/OrderMap.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/math/OrderMap.ts#L47)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Overrides

Map.clear

#### Defined in

[src/math/OrderMap.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/math/OrderMap.ts#L56)
