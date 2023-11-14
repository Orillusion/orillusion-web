# Class: BiMap<K, V\>

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Hierarchy

- `Map`<`K`, `V`\>

  ↳ **`BiMap`**

### Constructors

- [constructor](BiMap.md#constructor)

### Properties

- [size](BiMap.md#size)
- [[toStringTag]](BiMap.md#[tostringtag])
- [[species]](BiMap.md#[species])

### Methods

- [forEach](BiMap.md#foreach)
- [get](BiMap.md#get)
- [has](BiMap.md#has)
- [[iterator]](BiMap.md#[iterator])
- [entries](BiMap.md#entries)
- [keys](BiMap.md#keys)
- [values](BiMap.md#values)
- [delete](BiMap.md#delete)
- [getKey](BiMap.md#getkey)
- [deleteValue](BiMap.md#deletevalue)
- [set](BiMap.md#set)
- [clear](BiMap.md#clear)

## Constructors

### constructor

• **new BiMap**<`K`, `V`\>(`iterable?`)

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `Iterable`<readonly [`K`, `V`]\> |

#### Overrides

Map&lt;K, V\&gt;.constructor

#### Defined in

[src/math/BiMap.ts:4](https://github.com/Orillusion/orillusion/blob/main/src/math/BiMap.ts#L4)

## Properties

### size

• `Readonly` **size**: `number`

#### Inherited from

Map.size

#### Defined in

node_modules/.pnpm/typescript@5.0.4/node_modules/typescript/lib/lib.es2015.collection.d.ts:46

___

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Map.[toStringTag]

#### Defined in

node_modules/.pnpm/typescript@5.0.4/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:137

___

### [species]

▪ `Static` `Readonly` **[species]**: `MapConstructor`

#### Inherited from

Map.[species]

#### Defined in

node_modules/.pnpm/typescript@5.0.4/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:319

## Methods

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `V`, `key`: `K`, `map`: `Map`<`K`, `V`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

Map.forEach

#### Defined in

node_modules/.pnpm/typescript@5.0.4/node_modules/typescript/lib/lib.es2015.collection.d.ts:29

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

node_modules/.pnpm/typescript@5.0.4/node_modules/typescript/lib/lib.es2015.collection.d.ts:34

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

node_modules/.pnpm/typescript@5.0.4/node_modules/typescript/lib/lib.es2015.collection.d.ts:38

___

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`K`, `V`]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Inherited from

Map.[iterator]

#### Defined in

node_modules/.pnpm/typescript@5.0.4/node_modules/typescript/lib/lib.es2015.iterable.d.ts:119

___

### entries

▸ **entries**(): `IterableIterator`<[`K`, `V`]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Inherited from

Map.entries

#### Defined in

node_modules/.pnpm/typescript@5.0.4/node_modules/typescript/lib/lib.es2015.iterable.d.ts:124

___

### keys

▸ **keys**(): `IterableIterator`<`K`\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`<`K`\>

#### Inherited from

Map.keys

#### Defined in

node_modules/.pnpm/typescript@5.0.4/node_modules/typescript/lib/lib.es2015.iterable.d.ts:129

___

### values

▸ **values**(): `IterableIterator`<`V`\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`<`V`\>

#### Inherited from

Map.values

#### Defined in

node_modules/.pnpm/typescript@5.0.4/node_modules/typescript/lib/lib.es2015.iterable.d.ts:134

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

[src/math/BiMap.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/math/BiMap.ts#L13)

___

### getKey

▸ **getKey**(`value`): `K`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

#### Returns

`K`

#### Defined in

[src/math/BiMap.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/math/BiMap.ts#L22)

___

### deleteValue

▸ **deleteValue**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

#### Returns

`boolean`

#### Defined in

[src/math/BiMap.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/math/BiMap.ts#L26)

___

### set

▸ **set**(`key`, `value`): [`BiMap`](BiMap.md)<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

[`BiMap`](BiMap.md)<`K`, `V`\>

#### Overrides

Map.set

#### Defined in

[src/math/BiMap.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/math/BiMap.ts#L32)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Overrides

Map.clear

#### Defined in

[src/math/BiMap.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/math/BiMap.ts#L38)
