[**@orillusion/core**](../README.md)

***

# Class: OrderMap\<K, V\>

Defined in: [src/math/OrderMap.ts:5](https://github.com/orillusion/orillusion/blob/main/src/math/OrderMap.ts#L5)

A map that additionally preserves insertion order of keys and/or values in parallel lists.

## Extends

- `Map`\<`K`, `V`\>

## Type Parameters

### K

`K`

### V

`V`

## Constructors

### Constructor

> **new OrderMap**\<`K`, `V`\>(`iterable?`, `recordKey?`, `recordValue?`): `OrderMap`\<`K`, `V`\>

Defined in: [src/math/OrderMap.ts:13](https://github.com/orillusion/orillusion/blob/main/src/math/OrderMap.ts#L13)

Creates an order-preserving map, optionally recording keys and/or values in parallel lists.

#### Parameters

##### iterable?

`Iterable`\<readonly \[`K`, `V`\], `any`, `any`\>

##### recordKey?

`boolean`

##### recordValue?

`boolean`

#### Returns

`OrderMap`\<`K`, `V`\>

#### Overrides

`Map<K, V>.constructor`

## Properties

### valueList

> `readonly` **valueList**: `V`[]

Defined in: [src/math/OrderMap.ts:7](https://github.com/orillusion/orillusion/blob/main/src/math/OrderMap.ts#L7)

The values in insertion order; only populated when value recording is enabled.

***

### keyList

> `readonly` **keyList**: `K`[]

Defined in: [src/math/OrderMap.ts:9](https://github.com/orillusion/orillusion/blob/main/src/math/OrderMap.ts#L9)

The keys in insertion order; only populated when key recording is enabled.

***

### isChange

> **isChange**: `boolean` = `true`

Defined in: [src/math/OrderMap.ts:11](https://github.com/orillusion/orillusion/blob/main/src/math/OrderMap.ts#L11)

Whether the map has changed since this flag was last reset.

## Methods

### delete()

> **delete**(`key`): `boolean`

Defined in: [src/math/OrderMap.ts:27](https://github.com/orillusion/orillusion/blob/main/src/math/OrderMap.ts#L27)

Removes the entry for the given key, also updating the order lists; returns whether it existed.

#### Parameters

##### key

`K`

#### Returns

`boolean`

#### Overrides

`Map.delete`

***

### set()

> **set**(`key`, `value`): `this`

Defined in: [src/math/OrderMap.ts:57](https://github.com/orillusion/orillusion/blob/main/src/math/OrderMap.ts#L57)

Sets the value for the given key, appending it to the end of the order lists.

#### Parameters

##### key

`K`

##### value

`V`

#### Returns

`this`

#### Overrides

`Map.set`

***

### clear()

> **clear**(): `void`

Defined in: [src/math/OrderMap.ts:67](https://github.com/orillusion/orillusion/blob/main/src/math/OrderMap.ts#L67)

Removes all entries from the map and clears the order lists.

#### Returns

`void`

#### Overrides

`Map.clear`
