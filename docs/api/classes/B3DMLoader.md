[**@orillusion/core**](../README.md)

***

# Class: B3DMLoader

Defined in: [src/loader/parser/b3dm/B3DMLoader.ts:10](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/b3dm/B3DMLoader.ts#L10)

## Extends

- [`B3DMLoaderBase`](B3DMLoaderBase.md)

## Constructors

### Constructor

> **new B3DMLoader**(): `B3DMLoader`

Defined in: [src/loader/parser/b3dm/B3DMLoader.ts:15](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/b3dm/B3DMLoader.ts#L15)

#### Returns

`B3DMLoader`

#### Overrides

[`B3DMLoaderBase`](B3DMLoaderBase.md).[`constructor`](B3DMLoaderBase.md#constructor)

## Properties

### adjustmentTransform

> **adjustmentTransform**: [`Matrix4`](Matrix4.md)

Defined in: [src/loader/parser/b3dm/B3DMLoader.ts:11](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/b3dm/B3DMLoader.ts#L11)

## Methods

### parse()

> **parse**(`buffer`, `customLoader?`): `Promise`\<`any`\>

Defined in: [src/loader/parser/b3dm/B3DMLoader.ts:22](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/b3dm/B3DMLoader.ts#L22)

#### Parameters

##### buffer

`ArrayBuffer`

##### customLoader?

(`array`) => `Promise`\<[`Object3D`](Object3D.md)\>

#### Returns

`Promise`\<`any`\>

#### Overrides

[`B3DMLoaderBase`](B3DMLoaderBase.md).[`parse`](B3DMLoaderBase.md#parse)

***

### decodeText()

> `static` **decodeText**(`array`): `string`

Defined in: [src/loader/parser/b3dm/B3DMLoader.ts:73](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/b3dm/B3DMLoader.ts#L73)

#### Parameters

##### array

`any`

#### Returns

`string`
