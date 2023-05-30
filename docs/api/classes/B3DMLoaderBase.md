# Class: B3DMLoaderBase

## Hierarchy

- **`B3DMLoaderBase`**

  ↳ [`B3DMLoader`](B3DMLoader.md)

### Constructors

- [constructor](B3DMLoaderBase.md#constructor)

### Methods

- [parse](B3DMLoaderBase.md#parse)

## Constructors

### constructor

• **new B3DMLoaderBase**()

## Methods

### parse

▸ **parse**(`buffer`): `Promise`<{ `version`: `number` ; `featureTable`: [`FeatureTable`](FeatureTable.md) ; `batchTable`: [`BatchTable`](BatchTable.md) ; `glbBytes`: `Uint8Array`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |

#### Returns

`Promise`<{ `version`: `number` ; `featureTable`: [`FeatureTable`](FeatureTable.md) ; `batchTable`: [`BatchTable`](BatchTable.md) ; `glbBytes`: `Uint8Array`  }\>

#### Defined in

[src/loader/parser/b3dm/B3DMLoaderBase.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/b3dm/B3DMLoaderBase.ts#L6)
