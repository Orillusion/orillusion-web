[**@orillusion/core**](../README.md)

***

# Class: BiMap\<K, V\>

Defined in: [src/math/BiMap.ts:5](https://github.com/orillusion/orillusion/blob/main/src/math/BiMap.ts#L5)

A bi-directional map that maintains a reverse lookup from value back to key.

## Extends

- `Map`\<`K`, `V`\>

## Type Parameters

### K

`K`

### V

`V`

## Constructors

### Constructor

> **new BiMap**\<`K`, `V`\>(`iterable?`): `BiMap`\<`K`, `V`\>

Defined in: [src/math/BiMap.ts:7](https://github.com/orillusion/orillusion/blob/main/src/math/BiMap.ts#L7)

#### Parameters

##### iterable?

`Iterable`\<readonly \[`K`, `V`\], `any`, `any`\>

#### Returns

`BiMap`\<`K`, `V`\>

#### Overrides

`Map<K, V>.constructor`

## Methods

### delete()

> **delete**(`key`): `boolean`

Defined in: [src/math/BiMap.ts:16](https://github.com/orillusion/orillusion/blob/main/src/math/BiMap.ts#L16)

#### Parameters

##### key

`K`

#### Returns

`boolean`

true if an element in the Map existed and has been removed, or false if the element does not exist.

#### Overrides

`Map.delete`

***

### getKey()

> **getKey**(`value`): `K`

Defined in: [src/math/BiMap.ts:25](https://github.com/orillusion/orillusion/blob/main/src/math/BiMap.ts#L25)

#### Parameters

##### value

`V`

#### Returns

`K`

***

### deleteValue()

> **deleteValue**(`value`): `boolean`

Defined in: [src/math/BiMap.ts:29](https://github.com/orillusion/orillusion/blob/main/src/math/BiMap.ts#L29)

#### Parameters

##### value

`V`

#### Returns

`boolean`

***

### set()

> **set**(`key`, `value`): `this`

Defined in: [src/math/BiMap.ts:35](https://github.com/orillusion/orillusion/blob/main/src/math/BiMap.ts#L35)

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

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

Defined in: [src/math/BiMap.ts:41](https://github.com/orillusion/orillusion/blob/main/src/math/BiMap.ts#L41)

#### Returns

`void`

#### Overrides

`Map.clear`
