# Class: I3DMLoader

## Hierarchy

- [`I3DMLoaderBase`](I3DMLoaderBase.md)

  ↳ **`I3DMLoader`**

### Constructors

- [constructor](I3DMLoader.md#constructor)

### Properties

- [tempFwd](I3DMLoader.md#tempfwd)
- [tempUp](I3DMLoader.md#tempup)
- [tempRight](I3DMLoader.md#tempright)
- [tempPos](I3DMLoader.md#temppos)
- [tempQuat](I3DMLoader.md#tempquat)
- [tempSca](I3DMLoader.md#tempsca)
- [tempMat](I3DMLoader.md#tempmat)
- [adjustmentTransform](I3DMLoader.md#adjustmenttransform)

### Methods

- [parse](I3DMLoader.md#parse)

## Constructors

### constructor

• **new I3DMLoader**()

#### Overrides

[I3DMLoaderBase](I3DMLoaderBase.md).[constructor](I3DMLoaderBase.md#constructor)

#### Defined in

[src/loader/parser/i3dm/I3DMLoader.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/i3dm/I3DMLoader.ts#L22)

## Properties

### tempFwd

▪ `Static` **tempFwd**: [`Vector3`](Vector3.md)

#### Defined in

[src/loader/parser/i3dm/I3DMLoader.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/i3dm/I3DMLoader.ts#L12)

___

### tempUp

▪ `Static` **tempUp**: [`Vector3`](Vector3.md)

#### Defined in

[src/loader/parser/i3dm/I3DMLoader.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/i3dm/I3DMLoader.ts#L13)

___

### tempRight

▪ `Static` **tempRight**: [`Vector3`](Vector3.md)

#### Defined in

[src/loader/parser/i3dm/I3DMLoader.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/i3dm/I3DMLoader.ts#L14)

___

### tempPos

▪ `Static` **tempPos**: [`Vector3`](Vector3.md)

#### Defined in

[src/loader/parser/i3dm/I3DMLoader.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/i3dm/I3DMLoader.ts#L15)

___

### tempQuat

▪ `Static` **tempQuat**: [`Quaternion`](Quaternion.md)

#### Defined in

[src/loader/parser/i3dm/I3DMLoader.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/i3dm/I3DMLoader.ts#L16)

___

### tempSca

▪ `Static` **tempSca**: [`Vector3`](Vector3.md)

#### Defined in

[src/loader/parser/i3dm/I3DMLoader.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/i3dm/I3DMLoader.ts#L17)

___

### tempMat

▪ `Static` **tempMat**: [`Matrix4`](Matrix4.md)

#### Defined in

[src/loader/parser/i3dm/I3DMLoader.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/i3dm/I3DMLoader.ts#L18)

___

### adjustmentTransform

• **adjustmentTransform**: [`Matrix4`](Matrix4.md)

#### Defined in

[src/loader/parser/i3dm/I3DMLoader.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/i3dm/I3DMLoader.ts#L19)

## Methods

### parse

▸ **parse**(`buffer`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |

#### Returns

`Promise`<`any`\>

#### Overrides

[I3DMLoaderBase](I3DMLoaderBase.md).[parse](I3DMLoaderBase.md#parse)

#### Defined in

[src/loader/parser/i3dm/I3DMLoader.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/loader/parser/i3dm/I3DMLoader.ts#L27)
