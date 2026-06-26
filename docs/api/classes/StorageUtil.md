[**@orillusion/core**](../README.md)

***

# Class: StorageUtil

Defined in: [src/util/StorageUtil.ts:5](https://github.com/orillusion/orillusion/blob/main/src/util/StorageUtil.ts#L5)

Thin wrapper over `localStorage` for persisting and retrieving JSON data tables.

## Constructors

### Constructor

> **new StorageUtil**(): `StorageUtil`

#### Returns

`StorageUtil`

## Properties

### localData

> `static` **localData**: `any`

Defined in: [src/util/StorageUtil.ts:8](https://github.com/orillusion/orillusion/blob/main/src/util/StorageUtil.ts#L8)

The most recently loaded data table.

## Methods

### load()

> `static` **load**\<`T`\>(`dataTable`): `T`

Defined in: [src/util/StorageUtil.ts:14](https://github.com/orillusion/orillusion/blob/main/src/util/StorageUtil.ts#L14)

Load a JSON data table from local storage, creating an empty one if absent.

#### Type Parameters

##### T

`T`

#### Parameters

##### dataTable

`string`

storage key

#### Returns

`T`

the parsed data, typed as T

***

### save()

> `static` **save**\<`T`\>(`table`, `data`): `void`

Defined in: [src/util/StorageUtil.ts:30](https://github.com/orillusion/orillusion/blob/main/src/util/StorageUtil.ts#L30)

Serialize and persist a data table to local storage.

#### Type Parameters

##### T

`T`

#### Parameters

##### table

`string`

storage key

##### data

`T`

value to persist

#### Returns

`void`
