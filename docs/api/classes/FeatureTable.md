# Class: FeatureTable

## Hierarchy

- **`FeatureTable`**

  ↳ [`BatchTable`](BatchTable.md)

### Constructors

- [constructor](FeatureTable.md#constructor)

### Methods

- [getKeys](FeatureTable.md#getkeys)
- [getData](FeatureTable.md#getdata)

## Constructors

### constructor

• **new FeatureTable**(`buffer`, `start`, `headerLength`, `binLength`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `any` |
| `start` | `any` |
| `headerLength` | `any` |
| `binLength` | `any` |

#### Defined in

[src/loader/parser/b3dm/FeatureTable.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/b3dm/FeatureTable.ts#L9)

## Methods

### getKeys

▸ **getKeys**(): `string`[]

#### Returns

`string`[]

#### Defined in

[src/loader/parser/b3dm/FeatureTable.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/b3dm/FeatureTable.ts#L30)

___

### getData

▸ **getData**(`key`, `count?`, `defaultComponentType?`, `defaultType?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `any` | `undefined` |
| `count?` | `any` | `undefined` |
| `defaultComponentType` | `any` | `null` |
| `defaultType` | `any` | `null` |

#### Returns

`any`

#### Defined in

[src/loader/parser/b3dm/FeatureTable.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/b3dm/FeatureTable.ts#L36)
