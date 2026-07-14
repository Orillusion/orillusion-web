[**@orillusion/core**](../README.md)

***

# Class: B3DMLoaderBase

Defined in: [src/loader/parser/b3dm/B3DMLoaderBase.ts:4](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/b3dm/B3DMLoaderBase.ts#L4)

## Extended by

- [`B3DMLoader`](B3DMLoader.md)

## Constructors

### Constructor

> **new B3DMLoaderBase**(): `B3DMLoaderBase`

#### Returns

`B3DMLoaderBase`

## Methods

### parse()

> **parse**(`buffer`): `Promise`\<\{ `version`: `number`; `featureTable`: [`FeatureTable`](FeatureTable.md); `batchTable`: [`BatchTable`](BatchTable.md); `glbBytes`: `Uint8Array`\<`ArrayBuffer`\>; \}\>

Defined in: [src/loader/parser/b3dm/B3DMLoaderBase.ts:6](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/b3dm/B3DMLoaderBase.ts#L6)

#### Parameters

##### buffer

`ArrayBuffer`

#### Returns

`Promise`\<\{ `version`: `number`; `featureTable`: [`FeatureTable`](FeatureTable.md); `batchTable`: [`BatchTable`](BatchTable.md); `glbBytes`: `Uint8Array`\<`ArrayBuffer`\>; \}\>
