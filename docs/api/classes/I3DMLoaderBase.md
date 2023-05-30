# Class: I3DMLoaderBase

## Hierarchy

- **`I3DMLoaderBase`**

  ↳ [`I3DMLoader`](I3DMLoader.md)

### Constructors

- [constructor](I3DMLoaderBase.md#constructor)

### Methods

- [parse](I3DMLoaderBase.md#parse)

## Constructors

### constructor

• **new I3DMLoaderBase**()

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

[src/loader/parser/i3dm/I3DMLoaderBase.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/i3dm/I3DMLoaderBase.ts#L6)
