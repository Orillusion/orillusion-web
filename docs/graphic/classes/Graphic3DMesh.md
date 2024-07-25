# Class: Graphic3DMesh

### Constructors

- [constructor](Graphic3DMesh.md#constructor)

### Properties

- [meshMap](Graphic3DMesh.md#meshmap)
- [meshDrawGroup](Graphic3DMesh.md#meshdrawgroup)
- [ribbonMap](Graphic3DMesh.md#ribbonmap)
- [nodeMap](Graphic3DMesh.md#nodemap)
- [faceMap](Graphic3DMesh.md#facemap)

### Methods

- [draw](Graphic3DMesh.md#draw)
- [drawRibbon](Graphic3DMesh.md#drawribbon)
- [drawShape](Graphic3DMesh.md#drawshape)
- [drawNode](Graphic3DMesh.md#drawnode)

## Constructors

### constructor

• **new Graphic3DMesh**(): [`Graphic3DMesh`](Graphic3DMesh.md)

#### Returns

[`Graphic3DMesh`](Graphic3DMesh.md)

## Properties

### meshMap

▪ `Static` **meshMap**: `Map`\<`GeometryBase`, [`Graphic3DMeshRenderer`](Graphic3DMeshRenderer.md)\>

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DMesh.ts:9](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DMesh.ts#L9)

___

### meshDrawGroup

▪ `Static` **meshDrawGroup**: `Map`\<`string`, [`Graphic3DMeshRenderer`](Graphic3DMeshRenderer.md)\>

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DMesh.ts:10](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DMesh.ts#L10)

___

### ribbonMap

▪ `Static` **ribbonMap**: `Map`\<`string`, [`Graphic3DRibbonRenderer`](Graphic3DRibbonRenderer.md)\>

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DMesh.ts:11](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DMesh.ts#L11)

___

### nodeMap

▪ `Static` **nodeMap**: `Map`\<`string`, [`DynamicFaceRenderer`](DynamicFaceRenderer.md)\>

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DMesh.ts:12](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DMesh.ts#L12)

___

### faceMap

▪ `Static` **faceMap**: `Map`\<`string`, [`Graphic3DFaceRenderer`](Graphic3DFaceRenderer.md)\>

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DMesh.ts:13](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DMesh.ts#L13)

## Methods

### draw

▸ **draw**(`scene`, `geo`, `texture`, `count`): [`Graphic3DMeshRenderer`](Graphic3DMeshRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | `Scene3D` |
| `geo` | `GeometryBase` |
| `texture` | `BitmapTexture2DArray` |
| `count` | `number` |

#### Returns

[`Graphic3DMeshRenderer`](Graphic3DMeshRenderer.md)

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DMesh.ts:15](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DMesh.ts#L15)

___

### drawRibbon

▸ **drawRibbon**(`id`, `scene`, `texture`, `trailSegment`, `count`): [`Graphic3DRibbonRenderer`](Graphic3DRibbonRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `scene` | `Scene3D` |
| `texture` | `BitmapTexture2DArray` |
| `trailSegment` | `number` |
| `count` | `number` |

#### Returns

[`Graphic3DRibbonRenderer`](Graphic3DRibbonRenderer.md)

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DMesh.ts:26](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DMesh.ts#L26)

___

### drawShape

▸ **drawShape**(`id`, `scene`, `texture`): [`Graphic3DFaceRenderer`](Graphic3DFaceRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `scene` | `Scene3D` |
| `texture` | `BitmapTexture2DArray` |

#### Returns

[`Graphic3DFaceRenderer`](Graphic3DFaceRenderer.md)

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DMesh.ts:37](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DMesh.ts#L37)

___

### drawNode

▸ **drawNode**\<`T`\>(`id`, `c`, `nodeStruct`, `scene`, `texture`, `maxNodeCount`, `maxFaceCount?`, `standAloneMatrix?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DynamicFaceRenderer`](DynamicFaceRenderer.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `c` | `Ctor`\<`T`\> |
| `nodeStruct` | `Ctor`\<[`DynamicDrawStruct`](DynamicDrawStruct.md)\> |
| `scene` | `Scene3D` |
| `texture` | `BitmapTexture2DArray` |
| `maxNodeCount` | `number` |
| `maxFaceCount?` | `number` |
| `standAloneMatrix?` | `boolean` |

#### Returns

`T`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DMesh.ts:48](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DMesh.ts#L48)
