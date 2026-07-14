[**@orillusion/core**](../README.md)

***

# Class: I3DMLoaderBase

Defined in: [src/loader/parser/i3dm/I3DMLoaderBase.ts:4](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/i3dm/I3DMLoaderBase.ts#L4)

## Extended by

- [`I3DMLoader`](I3DMLoader.md)

## Constructors

### Constructor

> **new I3DMLoaderBase**(): `I3DMLoaderBase`

#### Returns

`I3DMLoaderBase`

## Methods

### parse()

> **parse**(`buffer`): `Promise`\<\{ `version`: `number`; `featureTable`: [`FeatureTable`](FeatureTable.md); `batchTable`: [`BatchTable`](BatchTable.md); `glbBytes`: `Uint8Array`\<`ArrayBuffer`\>; \}\>

Defined in: [src/loader/parser/i3dm/I3DMLoaderBase.ts:6](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/i3dm/I3DMLoaderBase.ts#L6)

#### Parameters

##### buffer

`ArrayBuffer`

#### Returns

`Promise`\<\{ `version`: `number`; `featureTable`: [`FeatureTable`](FeatureTable.md); `batchTable`: [`BatchTable`](BatchTable.md); `glbBytes`: `Uint8Array`\<`ArrayBuffer`\>; \}\>
