# Class: I3DMLoader

## Hierarchy

- [`I3DMLoaderBase`](I3DMLoaderBase.md)

  ↳ **`I3DMLoader`**


### Properties

- [adjustmentTransform](I3DMLoader.md#adjustmenttransform)
- [tempFwd](I3DMLoader.md#tempfwd)
- [tempUp](I3DMLoader.md#tempup)
- [tempRight](I3DMLoader.md#tempright)
- [tempPos](I3DMLoader.md#temppos)
- [tempQuat](I3DMLoader.md#tempquat)
- [tempSca](I3DMLoader.md#tempsca)
- [tempMat](I3DMLoader.md#tempmat)

### Constructors

- [constructor](I3DMLoader.md#constructor)

### Methods

- [parse](I3DMLoader.md#parse)

## Properties

### adjustmentTransform

• **adjustmentTransform**: [`Matrix4`](Matrix4.md)

#### Defined in

[src/engine/loader/parser/i3dm/I3DMLoader.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/i3dm/I3DMLoader.ts#L13)

___

### tempFwd

▪ `Static` **tempFwd**: [`Vector3`](Vector3.md)

#### Defined in

[src/engine/loader/parser/i3dm/I3DMLoader.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/i3dm/I3DMLoader.ts#L16)

___

### tempUp

▪ `Static` **tempUp**: [`Vector3`](Vector3.md)

#### Defined in

[src/engine/loader/parser/i3dm/I3DMLoader.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/i3dm/I3DMLoader.ts#L17)

___

### tempRight

▪ `Static` **tempRight**: [`Vector3`](Vector3.md)

#### Defined in

[src/engine/loader/parser/i3dm/I3DMLoader.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/i3dm/I3DMLoader.ts#L18)

___

### tempPos

▪ `Static` **tempPos**: [`Vector3`](Vector3.md)

#### Defined in

[src/engine/loader/parser/i3dm/I3DMLoader.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/i3dm/I3DMLoader.ts#L19)

___

### tempQuat

▪ `Static` **tempQuat**: [`Quaternion`](Quaternion.md)

#### Defined in

[src/engine/loader/parser/i3dm/I3DMLoader.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/i3dm/I3DMLoader.ts#L20)

___

### tempSca

▪ `Static` **tempSca**: [`Vector3`](Vector3.md)

#### Defined in

[src/engine/loader/parser/i3dm/I3DMLoader.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/i3dm/I3DMLoader.ts#L21)

___

### tempMat

▪ `Static` **tempMat**: [`Matrix4`](Matrix4.md)

#### Defined in

[src/engine/loader/parser/i3dm/I3DMLoader.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/i3dm/I3DMLoader.ts#L23)

## Constructors

### constructor

• **new I3DMLoader**()

#### Overrides

[I3DMLoaderBase](I3DMLoaderBase.md).[constructor](I3DMLoaderBase.md#constructor)

#### Defined in

[src/engine/loader/parser/i3dm/I3DMLoader.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/i3dm/I3DMLoader.ts#L25)

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

[src/engine/loader/parser/i3dm/I3DMLoader.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/loader/parser/i3dm/I3DMLoader.ts#L30)
