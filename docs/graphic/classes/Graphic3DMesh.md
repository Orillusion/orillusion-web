[**@orillusion/graphic**](../README.md)

***

# Class: Graphic3DMesh

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DMesh.ts:8](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DMesh.ts#L8)

## Constructors

### Constructor

> **new Graphic3DMesh**(): `Graphic3DMesh`

#### Returns

`Graphic3DMesh`

## Properties

### meshMap

> `static` **meshMap**: `Map`\<`GeometryBase`, [`Graphic3DMeshRenderer`](Graphic3DMeshRenderer.md)\>

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DMesh.ts:9](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DMesh.ts#L9)

***

### meshDrawGroup

> `static` **meshDrawGroup**: `Map`\<`string`, [`Graphic3DMeshRenderer`](Graphic3DMeshRenderer.md)\>

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DMesh.ts:10](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DMesh.ts#L10)

***

### ribbonMap

> `static` **ribbonMap**: `Map`\<`string`, [`Graphic3DRibbonRenderer`](Graphic3DRibbonRenderer.md)\>

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DMesh.ts:11](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DMesh.ts#L11)

***

### nodeMap

> `static` **nodeMap**: `Map`\<`string`, [`DynamicFaceRenderer`](DynamicFaceRenderer.md)\>

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DMesh.ts:12](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DMesh.ts#L12)

***

### faceMap

> `static` **faceMap**: `Map`\<`string`, [`Graphic3DFaceRenderer`](Graphic3DFaceRenderer.md)\>

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DMesh.ts:13](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DMesh.ts#L13)

## Methods

### draw()

> `static` **draw**(`scene`, `geo`, `texture`, `count`): [`Graphic3DMeshRenderer`](Graphic3DMeshRenderer.md)

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DMesh.ts:15](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DMesh.ts#L15)

#### Parameters

##### scene

`Scene3D`

##### geo

`GeometryBase`

##### texture

`BitmapTexture2DArray`

##### count

`number`

#### Returns

[`Graphic3DMeshRenderer`](Graphic3DMeshRenderer.md)

***

### drawRibbon()

> `static` **drawRibbon**(`id`, `scene`, `texture`, `trailSegment`, `count`): [`Graphic3DRibbonRenderer`](Graphic3DRibbonRenderer.md)

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DMesh.ts:26](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DMesh.ts#L26)

#### Parameters

##### id

`string`

##### scene

`Scene3D`

##### texture

`BitmapTexture2DArray`

##### trailSegment

`number`

##### count

`number`

#### Returns

[`Graphic3DRibbonRenderer`](Graphic3DRibbonRenderer.md)

***

### drawShape()

> `static` **drawShape**(`id`, `scene`, `texture`): [`Graphic3DFaceRenderer`](Graphic3DFaceRenderer.md)

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DMesh.ts:37](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DMesh.ts#L37)

#### Parameters

##### id

`string`

##### scene

`Scene3D`

##### texture

`BitmapTexture2DArray`

#### Returns

[`Graphic3DFaceRenderer`](Graphic3DFaceRenderer.md)

***

### drawNode()

> `static` **drawNode**\<`T`\>(`id`, `c`, `nodeStruct`, `scene`, `texture`, `maxNodeCount`, `maxFaceCount?`, `standAloneMatrix?`): `T`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DMesh.ts:48](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DMesh.ts#L48)

#### Type Parameters

##### T

`T` *extends* [`DynamicFaceRenderer`](DynamicFaceRenderer.md)

#### Parameters

##### id

`string`

##### c

`Ctor`\<`T`\>

##### nodeStruct

`Ctor`\<[`DynamicDrawStruct`](DynamicDrawStruct.md)\>

##### scene

`Scene3D`

##### texture

`BitmapTexture2DArray`

##### maxNodeCount

`number`

##### maxFaceCount?

`number`

##### standAloneMatrix?

`boolean`

#### Returns

`T`
