# Class: Graphic3DMesh

### Constructors

- [constructor](Graphic3DMesh.md#constructor)

### Properties

- [meshMap](Graphic3DMesh.md#meshmap)
- [meshDrawGroup](Graphic3DMesh.md#meshdrawgroup)
- [ribbonMap](Graphic3DMesh.md#ribbonmap)
- [faceMap](Graphic3DMesh.md#facemap)

### Methods

- [draw](Graphic3DMesh.md#draw)
- [drawRibbon](Graphic3DMesh.md#drawribbon)
- [drawShape](Graphic3DMesh.md#drawshape)

## Constructors

### constructor

• **new Graphic3DMesh**()

## Properties

### meshMap

▪ `Static` **meshMap**: `Map`<[`GeometryBase`](GeometryBase.md), [`Graphic3DMeshRenderer`](Graphic3DMeshRenderer.md)\>

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DMesh.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DMesh.ts#L10)

___

### meshDrawGroup

▪ `Static` **meshDrawGroup**: `Map`<`string`, [`Graphic3DMeshRenderer`](Graphic3DMeshRenderer.md)\>

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DMesh.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DMesh.ts#L11)

___

### ribbonMap

▪ `Static` **ribbonMap**: `Map`<`string`, [`Graphic3DRibbonRenderer`](Graphic3DRibbonRenderer.md)\>

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DMesh.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DMesh.ts#L12)

___

### faceMap

▪ `Static` **faceMap**: `Map`<`string`, [`Graphic3DFaceRenderer`](Graphic3DFaceRenderer.md)\>

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DMesh.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DMesh.ts#L13)

## Methods

### draw

▸ `Static` **draw**(`scene`, `geo`, `texture`, `count`): [`Graphic3DMeshRenderer`](Graphic3DMeshRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Scene3D`](Scene3D.md) |
| `geo` | [`GeometryBase`](GeometryBase.md) |
| `texture` | `BitmapTexture2DArray` |
| `count` | `number` |

#### Returns

[`Graphic3DMeshRenderer`](Graphic3DMeshRenderer.md)

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DMesh.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DMesh.ts#L15)

___

### drawRibbon

▸ `Static` **drawRibbon**(`id`, `scene`, `texture`, `trailSegment`, `count`): [`Graphic3DRibbonRenderer`](Graphic3DRibbonRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `scene` | [`Scene3D`](Scene3D.md) |
| `texture` | `BitmapTexture2DArray` |
| `trailSegment` | `number` |
| `count` | `number` |

#### Returns

[`Graphic3DRibbonRenderer`](Graphic3DRibbonRenderer.md)

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DMesh.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DMesh.ts#L26)

___

### drawShape

▸ `Static` **drawShape**(`id`, `scene`, `texture`): [`Graphic3DFaceRenderer`](Graphic3DFaceRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `scene` | [`Scene3D`](Scene3D.md) |
| `texture` | `BitmapTexture2DArray` |

#### Returns

[`Graphic3DFaceRenderer`](Graphic3DFaceRenderer.md)

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DMesh.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DMesh.ts#L37)
