# Class: Graphic3DFaceRenderer

The mesh renderer component is a component used to render the mesh

## Hierarchy

- [`MeshRenderer`](MeshRenderer.md)

  ↳ **`Graphic3DFaceRenderer`**

### Constructors

- [constructor](Graphic3DFaceRenderer.md#constructor)

### Properties

- [object3D](Graphic3DFaceRenderer.md#object3d)
- [isDestroyed](Graphic3DFaceRenderer.md#isdestroyed)
- [receiveShadow](Graphic3DFaceRenderer.md#receiveshadow)
- [instanceCount](Graphic3DFaceRenderer.md#instancecount)
- [lodLevel](Graphic3DFaceRenderer.md#lodlevel)
- [alwaysRender](Graphic3DFaceRenderer.md#alwaysrender)
- [instanceID](Graphic3DFaceRenderer.md#instanceid)
- [drawType](Graphic3DFaceRenderer.md#drawtype)
- [isRenderOrderChange](Graphic3DFaceRenderer.md#isrenderorderchange)
- [needSortOnCameraZ](Graphic3DFaceRenderer.md#needsortoncameraz)
- [preInit](Graphic3DFaceRenderer.md#preinit)
- [maxFaceCount](Graphic3DFaceRenderer.md#maxfacecount)
- [maxGeometryCount](Graphic3DFaceRenderer.md#maxgeometrycount)
- [maxPathPointCount](Graphic3DFaceRenderer.md#maxpathpointcount)
- [maxShapeCount](Graphic3DFaceRenderer.md#maxshapecount)
- [texture](Graphic3DFaceRenderer.md#texture)
- [transformBuffer](Graphic3DFaceRenderer.md#transformbuffer)
- [geometryInfoBuffer](Graphic3DFaceRenderer.md#geometryinfobuffer)
- [shapeBuffer](Graphic3DFaceRenderer.md#shapebuffer)
- [pathBuffer](Graphic3DFaceRenderer.md#pathbuffer)
- [drawBuffer](Graphic3DFaceRenderer.md#drawbuffer)
- [object3Ds](Graphic3DFaceRenderer.md#object3ds)
- [shapes](Graphic3DFaceRenderer.md#shapes)
- [realDrawShape](Graphic3DFaceRenderer.md#realdrawshape)
- [needUpdate](Graphic3DFaceRenderer.md#needupdate)

### Accessors

- [eventDispatcher](Graphic3DFaceRenderer.md#eventdispatcher)
- [isStart](Graphic3DFaceRenderer.md#isstart)
- [transform](Graphic3DFaceRenderer.md#transform)
- [enable](Graphic3DFaceRenderer.md#enable)
- [geometry](Graphic3DFaceRenderer.md#geometry)
- [material](Graphic3DFaceRenderer.md#material)
- [renderLayer](Graphic3DFaceRenderer.md#renderlayer)
- [rendererMask](Graphic3DFaceRenderer.md#renderermask)
- [renderOrder](Graphic3DFaceRenderer.md#renderorder)
- [materials](Graphic3DFaceRenderer.md#materials)
- [castShadow](Graphic3DFaceRenderer.md#castshadow)
- [castGI](Graphic3DFaceRenderer.md#castgi)
- [castReflection](Graphic3DFaceRenderer.md#castreflection)

### Methods

- [start](Graphic3DFaceRenderer.md#start)
- [stop](Graphic3DFaceRenderer.md#stop)
- [onLateUpdate](Graphic3DFaceRenderer.md#onlateupdate)
- [onBeforeUpdate](Graphic3DFaceRenderer.md#onbeforeupdate)
- [onGraphic](Graphic3DFaceRenderer.md#ongraphic)
- [onParentChange](Graphic3DFaceRenderer.md#onparentchange)
- [onEnable](Graphic3DFaceRenderer.md#onenable)
- [onDisable](Graphic3DFaceRenderer.md#ondisable)
- [cloneTo](Graphic3DFaceRenderer.md#cloneto)
- [copyComponent](Graphic3DFaceRenderer.md#copycomponent)
- [setMorphInfluence](Graphic3DFaceRenderer.md#setmorphinfluence)
- [setMorphInfluenceIndex](Graphic3DFaceRenderer.md#setmorphinfluenceindex)
- [destroy](Graphic3DFaceRenderer.md#destroy)
- [attachSceneOctree](Graphic3DFaceRenderer.md#attachsceneoctree)
- [detachSceneOctree](Graphic3DFaceRenderer.md#detachsceneoctree)
- [addMask](Graphic3DFaceRenderer.md#addmask)
- [removeMask](Graphic3DFaceRenderer.md#removemask)
- [hasMask](Graphic3DFaceRenderer.md#hasmask)
- [addRendererMask](Graphic3DFaceRenderer.md#addrenderermask)
- [removeRendererMask](Graphic3DFaceRenderer.md#removerenderermask)
- [selfCloneMaterials](Graphic3DFaceRenderer.md#selfclonematerials)
- [renderPass](Graphic3DFaceRenderer.md#renderpass)
- [renderPass2](Graphic3DFaceRenderer.md#renderpass2)
- [recordRenderPass2](Graphic3DFaceRenderer.md#recordrenderpass2)
- [beforeDestroy](Graphic3DFaceRenderer.md#beforedestroy)
- [init](Graphic3DFaceRenderer.md#init)
- [create](Graphic3DFaceRenderer.md#create)
- [startShape](Graphic3DFaceRenderer.md#startshape)
- [setShape](Graphic3DFaceRenderer.md#setshape)
- [updateShape](Graphic3DFaceRenderer.md#updateshape)
- [setTextureID](Graphic3DFaceRenderer.md#settextureid)
- [setBaseColor](Graphic3DFaceRenderer.md#setbasecolor)
- [setEmissiveColor](Graphic3DFaceRenderer.md#setemissivecolor)
- [setUVRect](Graphic3DFaceRenderer.md#setuvrect)
- [onUpdate](Graphic3DFaceRenderer.md#onupdate)
- [onCompute](Graphic3DFaceRenderer.md#oncompute)

## Constructors

### constructor

• **new Graphic3DFaceRenderer**(): [`Graphic3DFaceRenderer`](Graphic3DFaceRenderer.md)

#### Returns

[`Graphic3DFaceRenderer`](Graphic3DFaceRenderer.md)

#### Inherited from

[MeshRenderer](MeshRenderer.md).[constructor](MeshRenderer.md#constructor)

#### Defined in

[src/components/renderer/MeshRenderer.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L26)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

[MeshRenderer](MeshRenderer.md).[object3D](MeshRenderer.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### isDestroyed

• `Optional` **isDestroyed**: `boolean`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[isDestroyed](MeshRenderer.md#isdestroyed)

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### receiveShadow

• **receiveShadow**: `boolean`

Enabling this option allows the grid to display any shadows cast on the grid.

#### Inherited from

[MeshRenderer](MeshRenderer.md).[receiveShadow](MeshRenderer.md#receiveshadow)

#### Defined in

[src/components/renderer/MeshRenderer.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L23)

___

### instanceCount

• **instanceCount**: `number` = `0`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[instanceCount](MeshRenderer.md#instancecount)

#### Defined in

[src/components/renderer/RenderNode.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L34)

___

### lodLevel

• **lodLevel**: `number` = `0`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[lodLevel](MeshRenderer.md#lodlevel)

#### Defined in

[src/components/renderer/RenderNode.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L35)

___

### alwaysRender

• **alwaysRender**: `boolean` = `false`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[alwaysRender](MeshRenderer.md#alwaysrender)

#### Defined in

[src/components/renderer/RenderNode.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L36)

___

### instanceID

• **instanceID**: `string`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[instanceID](MeshRenderer.md#instanceid)

#### Defined in

[src/components/renderer/RenderNode.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L37)

___

### drawType

• **drawType**: `number` = `0`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[drawType](MeshRenderer.md#drawtype)

#### Defined in

[src/components/renderer/RenderNode.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L38)

___

### isRenderOrderChange

• `Optional` **isRenderOrderChange**: `boolean`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[isRenderOrderChange](MeshRenderer.md#isrenderorderchange)

#### Defined in

[src/components/renderer/RenderNode.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L53)

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[needSortOnCameraZ](MeshRenderer.md#needsortoncameraz)

#### Defined in

[src/components/renderer/RenderNode.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L54)

___

### preInit

• **preInit**: `boolean` = `false`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[preInit](MeshRenderer.md#preinit)

#### Defined in

[src/components/renderer/RenderNode.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L57)

___

### maxFaceCount

▪ `Static` **maxFaceCount**: `number` = `1000000`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L50)

___

### maxGeometryCount

▪ `Static` **maxGeometryCount**: `number` = `1`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L51)

___

### maxPathPointCount

▪ `Static` **maxPathPointCount**: `number` = `100000`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L52)

___

### maxShapeCount

▪ `Static` **maxShapeCount**: `number` = `1024`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L53)

___

### texture

• **texture**: `BitmapTexture2DArray`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L55)

___

### transformBuffer

• **transformBuffer**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L56)

___

### geometryInfoBuffer

• **geometryInfoBuffer**: [`StructStorageGPUBuffer`](StructStorageGPUBuffer.md)\<[`GeometryInfo`](GeometryInfo.md)\>

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L61)

___

### shapeBuffer

• **shapeBuffer**: [`StructStorageGPUBuffer`](StructStorageGPUBuffer.md)\<[`ShapeInfo`](ShapeInfo.md)\>

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L62)

___

### pathBuffer

• **pathBuffer**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L63)

___

### drawBuffer

• **drawBuffer**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L64)

___

### object3Ds

• **object3Ds**: `any`[]

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L66)

___

### shapes

• **shapes**: [`ShapeInfo`](ShapeInfo.md)[]

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L67)

___

### realDrawShape

• **realDrawShape**: `number`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L68)

___

### needUpdate

• **needUpdate**: `boolean` = `false`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L69)

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

MeshRenderer.eventDispatcher

#### Defined in

[src/components/ComponentBase.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L23)

• `set` **eventDispatcher**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CEventDispatcher`](CEventDispatcher.md) |

#### Returns

`void`

#### Inherited from

MeshRenderer.eventDispatcher

#### Defined in

[src/components/ComponentBase.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L28)

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.isStart

#### Defined in

[src/components/ComponentBase.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L40)

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

MeshRenderer.transform

#### Defined in

[src/components/ComponentBase.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L47)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

MeshRenderer.enable

#### Defined in

[src/components/ComponentBase.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L68)

• `set` **enable**(`value`): `void`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

MeshRenderer.enable

#### Defined in

[src/components/ComponentBase.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L54)

___

### geometry

• `get` **geometry**(): [`GeometryBase`](GeometryBase.md)

The geometry of the mesh determines its shape

#### Returns

[`GeometryBase`](GeometryBase.md)

#### Inherited from

MeshRenderer.geometry

#### Defined in

[src/components/renderer/MeshRenderer.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L53)

• `set` **geometry**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GeometryBase`](GeometryBase.md) |

#### Returns

`void`

#### Inherited from

MeshRenderer.geometry

#### Defined in

[src/components/renderer/MeshRenderer.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L58)

___

### material

• `get` **material**(): [`Material`](Material.md)

material

#### Returns

[`Material`](Material.md)

#### Inherited from

MeshRenderer.material

#### Defined in

[src/components/renderer/MeshRenderer.ts:94](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L94)

• `set` **material**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Material`](Material.md) |

#### Returns

`void`

#### Inherited from

MeshRenderer.material

#### Defined in

[src/components/renderer/MeshRenderer.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L99)

___

### renderLayer

• `get` **renderLayer**(): `RenderLayer`

#### Returns

`RenderLayer`

#### Inherited from

MeshRenderer.renderLayer

#### Defined in

[src/components/renderer/RenderNode.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L107)

• `set` **renderLayer**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `RenderLayer` |

#### Returns

`void`

#### Inherited from

MeshRenderer.renderLayer

#### Defined in

[src/components/renderer/RenderNode.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L111)

___

### rendererMask

• `get` **rendererMask**(): `number`

#### Returns

`number`

#### Inherited from

MeshRenderer.rendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L145)

• `set` **rendererMask**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

MeshRenderer.rendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:149](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L149)

___

### renderOrder

• `get` **renderOrder**(): `number`

#### Returns

`number`

#### Inherited from

MeshRenderer.renderOrder

#### Defined in

[src/components/renderer/RenderNode.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L153)

• `set` **renderOrder**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

MeshRenderer.renderOrder

#### Defined in

[src/components/renderer/RenderNode.ts:157](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L157)

___

### materials

• `get` **materials**(): [`Material`](Material.md)[]

#### Returns

[`Material`](Material.md)[]

#### Inherited from

MeshRenderer.materials

#### Defined in

[src/components/renderer/RenderNode.ts:166](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L166)

• `set` **materials**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Material`](Material.md)[] |

#### Returns

`void`

#### Inherited from

MeshRenderer.materials

#### Defined in

[src/components/renderer/RenderNode.ts:170](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L170)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.castShadow

#### Defined in

[src/components/renderer/RenderNode.ts:340](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L340)

• `set` **castShadow**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

MeshRenderer.castShadow

#### Defined in

[src/components/renderer/RenderNode.ts:345](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L345)

___

### castGI

• `get` **castGI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.castGI

#### Defined in

[src/components/renderer/RenderNode.ts:350](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L350)

• `set` **castGI**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

MeshRenderer.castGI

#### Defined in

[src/components/renderer/RenderNode.ts:355](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L355)

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.castReflection

#### Defined in

[src/components/renderer/RenderNode.ts:359](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L359)

• `set` **castReflection**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

MeshRenderer.castReflection

#### Defined in

[src/components/renderer/RenderNode.ts:363](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L363)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[start](MeshRenderer.md#start)

#### Defined in

[src/components/ComponentBase.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[stop](MeshRenderer.md#stop)

#### Defined in

[src/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L114)

___

### onLateUpdate

▸ **onLateUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[onLateUpdate](MeshRenderer.md#onlateupdate)

#### Defined in

[src/components/ComponentBase.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L118)

___

### onBeforeUpdate

▸ **onBeforeUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[onBeforeUpdate](MeshRenderer.md#onbeforeupdate)

#### Defined in

[src/components/ComponentBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L119)

___

### onGraphic

▸ **onGraphic**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[onGraphic](MeshRenderer.md#ongraphic)

#### Defined in

[src/components/ComponentBase.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L121)

___

### onParentChange

▸ **onParentChange**(`lastParent?`, `currentParent?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lastParent?` | [`Object3D`](Object3D.md) |
| `currentParent?` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[onParentChange](MeshRenderer.md#onparentchange)

#### Defined in

[src/components/ComponentBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L122)

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[onEnable](MeshRenderer.md#onenable)

#### Defined in

[src/components/renderer/MeshRenderer.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L30)

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[onDisable](MeshRenderer.md#ondisable)

#### Defined in

[src/components/renderer/MeshRenderer.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L34)

___

### cloneTo

▸ **cloneTo**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) |

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[cloneTo](MeshRenderer.md#cloneto)

#### Defined in

[src/components/renderer/MeshRenderer.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L38)

___

### copyComponent

▸ **copyComponent**(`from`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `this` |

#### Returns

`this`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[copyComponent](MeshRenderer.md#copycomponent)

#### Defined in

[src/components/renderer/MeshRenderer.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L43)

___

### setMorphInfluence

▸ **setMorphInfluence**(`key`, `value`): `void`

Set deformation animation parameters

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[setMorphInfluence](MeshRenderer.md#setmorphinfluence)

#### Defined in

[src/components/renderer/MeshRenderer.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L106)

___

### setMorphInfluenceIndex

▸ **setMorphInfluenceIndex**(`index`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[setMorphInfluenceIndex](MeshRenderer.md#setmorphinfluenceindex)

#### Defined in

[src/components/renderer/MeshRenderer.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L115)

___

### destroy

▸ **destroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[destroy](MeshRenderer.md#destroy)

#### Defined in

[src/components/renderer/MeshRenderer.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L153)

___

### attachSceneOctree

▸ **attachSceneOctree**(`octree`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `octree` | [`Octree`](Octree.md) |

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[attachSceneOctree](MeshRenderer.md#attachsceneoctree)

#### Defined in

[src/components/renderer/RenderNode.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L76)

___

### detachSceneOctree

▸ **detachSceneOctree**(): `void`

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[detachSceneOctree](MeshRenderer.md#detachsceneoctree)

#### Defined in

[src/components/renderer/RenderNode.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L81)

___

### addMask

▸ **addMask**(`mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | [`RendererMask`](../enums/RendererMask.md) |

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[addMask](MeshRenderer.md#addmask)

#### Defined in

[src/components/renderer/RenderNode.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L133)

___

### removeMask

▸ **removeMask**(`mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | [`RendererMask`](../enums/RendererMask.md) |

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[removeMask](MeshRenderer.md#removemask)

#### Defined in

[src/components/renderer/RenderNode.ts:137](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L137)

___

### hasMask

▸ **hasMask**(`mask`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | [`RendererMask`](../enums/RendererMask.md) |

#### Returns

`boolean`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[hasMask](MeshRenderer.md#hasmask)

#### Defined in

[src/components/renderer/RenderNode.ts:141](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L141)

___

### addRendererMask

▸ **addRendererMask**(`tag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | [`RendererMask`](../enums/RendererMask.md) |

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[addRendererMask](MeshRenderer.md#addrenderermask)

#### Defined in

[src/components/renderer/RenderNode.ts:221](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L221)

___

### removeRendererMask

▸ **removeRendererMask**(`tag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | [`RendererMask`](../enums/RendererMask.md) |

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[removeRendererMask](MeshRenderer.md#removerenderermask)

#### Defined in

[src/components/renderer/RenderNode.ts:225](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L225)

___

### selfCloneMaterials

▸ **selfCloneMaterials**(`key`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`this`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[selfCloneMaterials](MeshRenderer.md#selfclonematerials)

#### Defined in

[src/components/renderer/RenderNode.ts:245](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L245)

___

### renderPass

▸ **renderPass**(`view`, `passType`, `renderContext`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `passType` | `PassType` |
| `renderContext` | [`RenderContext`](RenderContext.md) |

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[renderPass](MeshRenderer.md#renderpass)

#### Defined in

[src/components/renderer/RenderNode.ts:367](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L367)

___

### renderPass2

▸ **renderPass2**(`view`, `passType`, `rendererPassState`, `clusterLightingBuffer`, `encoder`, `useBundle?`): `void`

render pass at passType

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `view` | [`View3D`](View3D.md) | `undefined` |
| `passType` | `PassType` | `undefined` |
| `rendererPassState` | `RendererPassState` | `undefined` |
| `clusterLightingBuffer` | [`ClusterLightingBuffer`](ClusterLightingBuffer.md) | `undefined` |
| `encoder` | `GPURenderPassEncoder` | `undefined` |
| `useBundle` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[renderPass2](MeshRenderer.md#renderpass2)

#### Defined in

[src/components/renderer/RenderNode.ts:421](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L421)

___

### recordRenderPass2

▸ **recordRenderPass2**(`view`, `passType`, `rendererPassState`, `clusterLightingBuffer`, `encoder`, `useBundle?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `view` | [`View3D`](View3D.md) | `undefined` |
| `passType` | `PassType` | `undefined` |
| `rendererPassState` | `RendererPassState` | `undefined` |
| `clusterLightingBuffer` | [`ClusterLightingBuffer`](ClusterLightingBuffer.md) | `undefined` |
| `encoder` | `GPURenderPassEncoder` | `undefined` |
| `useBundle` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[recordRenderPass2](MeshRenderer.md#recordrenderpass2)

#### Defined in

[src/components/renderer/RenderNode.ts:467](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L467)

___

### beforeDestroy

▸ **beforeDestroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[beforeDestroy](MeshRenderer.md#beforedestroy)

#### Defined in

[src/components/renderer/RenderNode.ts:576](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L576)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

[MeshRenderer](MeshRenderer.md).[init](MeshRenderer.md#init)

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L70)

___

### create

▸ **create**(`tex`, `num`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tex` | `BitmapTexture2DArray` |
| `num` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L74)

___

### startShape

▸ **startShape**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | `BitmapTexture2DArray` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L111)

___

### setShape

▸ **setShape**(`index`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `shape` | [`ShapeInfo`](ShapeInfo.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:141](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L141)

___

### updateShape

▸ **updateShape**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L148)

___

### setTextureID

▸ **setTextureID**(`i`, `id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |
| `id` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:170](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L170)

___

### setBaseColor

▸ **setBaseColor**(`i`, `color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |
| `color` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:185](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L185)

___

### setEmissiveColor

▸ **setEmissiveColor**(`i`, `color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |
| `color` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:190](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L190)

___

### setUVRect

▸ **setUVRect**(`i`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |
| `v` | `Vector4` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:195](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L195)

___

### onUpdate

▸ **onUpdate**(`view?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Overrides

[MeshRenderer](MeshRenderer.md).[onUpdate](MeshRenderer.md#onupdate)

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:200](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L200)

___

### onCompute

▸ **onCompute**(`view`, `command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `command` | `GPUCommandEncoder` |

#### Returns

`void`

#### Overrides

[MeshRenderer](MeshRenderer.md).[onCompute](MeshRenderer.md#oncompute)

#### Defined in

[src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts:207](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/passRenderer/graphic/new/Graphic3DFaceRenderer.ts#L207)
