[**@orillusion/core**](../README.md)

***

# Class: FeatureTable

Defined in: [src/loader/parser/b3dm/FeatureTable.ts:3](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/b3dm/FeatureTable.ts#L3)

## Extended by

- [`BatchTable`](BatchTable.md)

## Constructors

### Constructor

> **new FeatureTable**(`buffer`, `start`, `headerLength`, `binLength`): `FeatureTable`

Defined in: [src/loader/parser/b3dm/FeatureTable.ts:9](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/b3dm/FeatureTable.ts#L9)

#### Parameters

##### buffer

`any`

##### start

`any`

##### headerLength

`any`

##### binLength

`any`

#### Returns

`FeatureTable`

## Methods

### getKeys()

> **getKeys**(): `string`[]

Defined in: [src/loader/parser/b3dm/FeatureTable.ts:30](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/b3dm/FeatureTable.ts#L30)

#### Returns

`string`[]

***

### getData()

> **getData**(`key`, `count?`, `defaultComponentType?`, `defaultType?`): `any`

Defined in: [src/loader/parser/b3dm/FeatureTable.ts:36](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/b3dm/FeatureTable.ts#L36)

#### Parameters

##### key

`any`

##### count?

`any`

##### defaultComponentType?

`any` = `null`

##### defaultType?

`any` = `null`

#### Returns

`any`
