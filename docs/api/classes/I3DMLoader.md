[**@orillusion/core**](../README.md)

***

# Class: I3DMLoader

Defined in: [src/loader/parser/i3dm/I3DMLoader.ts:11](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/i3dm/I3DMLoader.ts#L11)

## Extends

- [`I3DMLoaderBase`](I3DMLoaderBase.md)

## Constructors

### Constructor

> **new I3DMLoader**(): `I3DMLoader`

Defined in: [src/loader/parser/i3dm/I3DMLoader.ts:22](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/i3dm/I3DMLoader.ts#L22)

#### Returns

`I3DMLoader`

#### Overrides

[`I3DMLoaderBase`](I3DMLoaderBase.md).[`constructor`](I3DMLoaderBase.md#constructor)

## Properties

### tempFwd

> `static` **tempFwd**: [`Vector3`](Vector3.md)

Defined in: [src/loader/parser/i3dm/I3DMLoader.ts:12](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/i3dm/I3DMLoader.ts#L12)

***

### tempUp

> `static` **tempUp**: [`Vector3`](Vector3.md)

Defined in: [src/loader/parser/i3dm/I3DMLoader.ts:13](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/i3dm/I3DMLoader.ts#L13)

***

### tempRight

> `static` **tempRight**: [`Vector3`](Vector3.md)

Defined in: [src/loader/parser/i3dm/I3DMLoader.ts:14](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/i3dm/I3DMLoader.ts#L14)

***

### tempPos

> `static` **tempPos**: [`Vector3`](Vector3.md)

Defined in: [src/loader/parser/i3dm/I3DMLoader.ts:15](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/i3dm/I3DMLoader.ts#L15)

***

### tempQuat

> `static` **tempQuat**: [`Quaternion`](Quaternion.md)

Defined in: [src/loader/parser/i3dm/I3DMLoader.ts:16](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/i3dm/I3DMLoader.ts#L16)

***

### tempSca

> `static` **tempSca**: [`Vector3`](Vector3.md)

Defined in: [src/loader/parser/i3dm/I3DMLoader.ts:17](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/i3dm/I3DMLoader.ts#L17)

***

### tempMat

> `static` **tempMat**: [`Matrix4`](Matrix4.md)

Defined in: [src/loader/parser/i3dm/I3DMLoader.ts:18](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/i3dm/I3DMLoader.ts#L18)

***

### adjustmentTransform

> **adjustmentTransform**: [`Matrix4`](Matrix4.md)

Defined in: [src/loader/parser/i3dm/I3DMLoader.ts:19](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/i3dm/I3DMLoader.ts#L19)

## Methods

### parse()

> **parse**(`buffer`): `Promise`\<`any`\>

Defined in: [src/loader/parser/i3dm/I3DMLoader.ts:36](https://github.com/orillusion/orillusion/blob/main/src/loader/parser/i3dm/I3DMLoader.ts#L36)

#### Parameters

##### buffer

`ArrayBuffer`

#### Returns

`Promise`\<`any`\>

#### Overrides

[`I3DMLoaderBase`](I3DMLoaderBase.md).[`parse`](I3DMLoaderBase.md#parse)
