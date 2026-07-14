[**@orillusion/core**](../README.md)

***

# Class: BatchTable

Defined in: [src/loader/parser/b3dm/FeatureTable.ts:150](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/b3dm/FeatureTable.ts#L150)

## Extends

- [`FeatureTable`](FeatureTable.md)

## Constructors

### Constructor

> **new BatchTable**(`buffer`, `batchSize`, `start`, `headerLength`, `binLength`): `BatchTable`

Defined in: [src/loader/parser/b3dm/FeatureTable.ts:153](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/b3dm/FeatureTable.ts#L153)

#### Parameters

##### buffer

`any`

##### batchSize

`any`

##### start

`any`

##### headerLength

`any`

##### binLength

`any`

#### Returns

`BatchTable`

#### Overrides

[`FeatureTable`](FeatureTable.md).[`constructor`](FeatureTable.md#constructor)

## Methods

### getKeys()

> **getKeys**(): `string`[]

Defined in: [src/loader/parser/b3dm/FeatureTable.ts:30](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/b3dm/FeatureTable.ts#L30)

#### Returns

`string`[]

#### Inherited from

[`FeatureTable`](FeatureTable.md).[`getKeys`](FeatureTable.md#getkeys)

***

### getData()

> **getData**(`key`, `componentType?`, `type?`): `any`

Defined in: [src/loader/parser/b3dm/FeatureTable.ts:160](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/b3dm/FeatureTable.ts#L160)

#### Parameters

##### key

`any`

##### componentType?

`any` = `null`

##### type?

`any` = `null`

#### Returns

`any`

#### Overrides

[`FeatureTable`](FeatureTable.md).[`getData`](FeatureTable.md#getdata)
