# Class: BatchTable

## Hierarchy

- [`FeatureTable`](FeatureTable.md)

  ↳ **`BatchTable`**

### Constructors

- [constructor](BatchTable.md#constructor)

### Methods

- [getKeys](BatchTable.md#getkeys)
- [getData](BatchTable.md#getdata)

## Constructors

### constructor

• **new BatchTable**(`buffer`, `batchSize`, `start`, `headerLength`, `binLength`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `any` |
| `batchSize` | `any` |
| `start` | `any` |
| `headerLength` | `any` |
| `binLength` | `any` |

#### Overrides

[FeatureTable](FeatureTable.md).[constructor](FeatureTable.md#constructor)

#### Defined in

[src/loader/parser/b3dm/FeatureTable.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/b3dm/FeatureTable.ts#L153)

## Methods

### getKeys

▸ **getKeys**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[FeatureTable](FeatureTable.md).[getKeys](FeatureTable.md#getkeys)

#### Defined in

[src/loader/parser/b3dm/FeatureTable.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/b3dm/FeatureTable.ts#L30)

___

### getData

▸ **getData**(`key`, `componentType?`, `type?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `any` | `undefined` |
| `componentType` | `any` | `null` |
| `type` | `any` | `null` |

#### Returns

`any`

#### Overrides

[FeatureTable](FeatureTable.md).[getData](FeatureTable.md#getdata)

#### Defined in

[src/loader/parser/b3dm/FeatureTable.ts:160](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/b3dm/FeatureTable.ts#L160)
