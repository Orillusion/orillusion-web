# Class: Graphic3DFaceRenderer

## Hierarchy

- `MeshRenderer`

  ↳ **`Graphic3DFaceRenderer`**

### Constructors

- [constructor](Graphic3DFaceRenderer.md#constructor)

### Properties

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
- [object3D](Graphic3DFaceRenderer.md#object3d)
- [isDestroyed](Graphic3DFaceRenderer.md#isdestroyed)
- [receiveShadow](Graphic3DFaceRenderer.md#receiveshadow)
- [morphData](Graphic3DFaceRenderer.md#morphdata)
- [instanceCount](Graphic3DFaceRenderer.md#instancecount)
- [lodLevel](Graphic3DFaceRenderer.md#lodlevel)
- [alwaysRender](Graphic3DFaceRenderer.md#alwaysrender)
- [instanceID](Graphic3DFaceRenderer.md#instanceid)
- [drawType](Graphic3DFaceRenderer.md#drawtype)
- [isRenderOrderChange](Graphic3DFaceRenderer.md#isrenderorderchange)
- [needSortOnCameraZ](Graphic3DFaceRenderer.md#needsortoncameraz)
- [isRecievePostEffectUI](Graphic3DFaceRenderer.md#isrecieveposteffectui)

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
- [start](Graphic3DFaceRenderer.md#start)
- [stop](Graphic3DFaceRenderer.md#stop)
- [onLateUpdate](Graphic3DFaceRenderer.md#onlateupdate)
- [onBeforeUpdate](Graphic3DFaceRenderer.md#onbeforeupdate)
- [onGraphic](Graphic3DFaceRenderer.md#ongraphic)
- [onParentChange](Graphic3DFaceRenderer.md#onparentchange)
- [onAddChild](Graphic3DFaceRenderer.md#onaddchild)
- [onRemoveChild](Graphic3DFaceRenderer.md#onremovechild)
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
- [preInit](Graphic3DFaceRenderer.md#preinit)
- [beforeDestroy](Graphic3DFaceRenderer.md#beforedestroy)

## Constructors

### constructor

• **new Graphic3DFaceRenderer**(): [`Graphic3DFaceRenderer`](Graphic3DFaceRenderer.md)

#### Returns

[`Graphic3DFaceRenderer`](Graphic3DFaceRenderer.md)

#### Inherited from

MeshRenderer.constructor

#### Defined in

[src/components/renderer/MeshRenderer.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L26)

## Properties

### maxFaceCount

▪ `Static` **maxFaceCount**: `number` = `1000000`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:35](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L35)

___

### maxGeometryCount

▪ `Static` **maxGeometryCount**: `number` = `1`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:36](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L36)

___

### maxPathPointCount

▪ `Static` **maxPathPointCount**: `number` = `100000`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:37](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L37)

___

### maxShapeCount

▪ `Static` **maxShapeCount**: `number` = `1024`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:38](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L38)

___

### texture

• **texture**: `BitmapTexture2DArray`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:40](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L40)

___

### transformBuffer

• **transformBuffer**: `StorageGPUBuffer`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:41](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L41)

___

### geometryInfoBuffer

• **geometryInfoBuffer**: `StructStorageGPUBuffer`\<[`GeometryInfo`](GeometryInfo.md)\>

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:46](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L46)

___

### shapeBuffer

• **shapeBuffer**: `StructStorageGPUBuffer`\<[`ShapeInfo`](ShapeInfo.md)\>

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:47](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L47)

___

### pathBuffer

• **pathBuffer**: `StorageGPUBuffer`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:48](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L48)

___

### drawBuffer

• **drawBuffer**: `StorageGPUBuffer`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:49](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L49)

___

### object3Ds

• **object3Ds**: `any`[]

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:51](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L51)

___

### shapes

• **shapes**: [`ShapeInfo`](ShapeInfo.md)[]

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:52](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L52)

___

### realDrawShape

• **realDrawShape**: `number`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:53](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L53)

___

### needUpdate

• **needUpdate**: `boolean` = `false`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:54](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L54)

___

### object3D

• **object3D**: `Object3D` = `null`

owner object3D

#### Inherited from

MeshRenderer.object3D

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### isDestroyed

• `Optional` **isDestroyed**: `boolean`

#### Inherited from

MeshRenderer.isDestroyed

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### receiveShadow

• **receiveShadow**: `boolean`

Enabling this option allows the grid to display any shadows cast on the grid.

#### Inherited from

MeshRenderer.receiveShadow

#### Defined in

[src/components/renderer/MeshRenderer.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L23)

___

### morphData

• **morphData**: `MorphTargetData`

#### Inherited from

MeshRenderer.morphData

#### Defined in

[src/components/renderer/MeshRenderer.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L24)

___

### instanceCount

• **instanceCount**: `number` = `0`

#### Inherited from

MeshRenderer.instanceCount

#### Defined in

[src/components/renderer/RenderNode.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L35)

___

### lodLevel

• **lodLevel**: `number` = `0`

#### Inherited from

MeshRenderer.lodLevel

#### Defined in

[src/components/renderer/RenderNode.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L36)

___

### alwaysRender

• **alwaysRender**: `boolean` = `false`

#### Inherited from

MeshRenderer.alwaysRender

#### Defined in

[src/components/renderer/RenderNode.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L37)

___

### instanceID

• **instanceID**: `string`

#### Inherited from

MeshRenderer.instanceID

#### Defined in

[src/components/renderer/RenderNode.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L38)

___

### drawType

• **drawType**: `number` = `0`

#### Inherited from

MeshRenderer.drawType

#### Defined in

[src/components/renderer/RenderNode.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L39)

___

### isRenderOrderChange

• `Optional` **isRenderOrderChange**: `boolean`

#### Inherited from

MeshRenderer.isRenderOrderChange

#### Defined in

[src/components/renderer/RenderNode.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L55)

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Inherited from

MeshRenderer.needSortOnCameraZ

#### Defined in

[src/components/renderer/RenderNode.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L56)

___

### isRecievePostEffectUI

• `Optional` **isRecievePostEffectUI**: `boolean`

#### Inherited from

MeshRenderer.isRecievePostEffectUI

#### Defined in

[src/components/renderer/RenderNode.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L57)

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): `CEventDispatcher`

#### Returns

`CEventDispatcher`

#### Inherited from

MeshRenderer.eventDispatcher

#### Defined in

[src/components/ComponentBase.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L23)

• `set` **eventDispatcher**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `CEventDispatcher` |

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

• `get` **transform**(): `Transform`

Return the Transform component attached to the Object3D.

#### Returns

`Transform`

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

• `get` **geometry**(): `GeometryBase`

The geometry of the mesh determines its shape

#### Returns

`GeometryBase`

#### Inherited from

MeshRenderer.geometry

#### Defined in

[src/components/renderer/MeshRenderer.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L53)

• `set` **geometry**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GeometryBase` |

#### Returns

`void`

#### Inherited from

MeshRenderer.geometry

#### Defined in

[src/components/renderer/MeshRenderer.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L57)

___

### material

• `get` **material**(): `Material`

material

#### Returns

`Material`

#### Inherited from

MeshRenderer.material

#### Defined in

[src/components/renderer/MeshRenderer.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L99)

• `set` **material**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Material` |

#### Returns

`void`

#### Inherited from

MeshRenderer.material

#### Defined in

[src/components/renderer/MeshRenderer.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L103)

___

### renderLayer

• `get` **renderLayer**(): `RenderLayer`

#### Returns

`RenderLayer`

#### Inherited from

MeshRenderer.renderLayer

#### Defined in

[src/components/renderer/RenderNode.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L110)

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

[src/components/renderer/RenderNode.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L114)

___

### rendererMask

• `get` **rendererMask**(): `number`

#### Returns

`number`

#### Inherited from

MeshRenderer.rendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L152)

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

[src/components/renderer/RenderNode.ts:156](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L156)

___

### renderOrder

• `get` **renderOrder**(): `number`

#### Returns

`number`

#### Inherited from

MeshRenderer.renderOrder

#### Defined in

[src/components/renderer/RenderNode.ts:160](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L160)

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

[src/components/renderer/RenderNode.ts:164](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L164)

___

### materials

• `get` **materials**(): `Material`[]

#### Returns

`Material`[]

#### Inherited from

MeshRenderer.materials

#### Defined in

[src/components/renderer/RenderNode.ts:173](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L173)

• `set` **materials**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Material`[] |

#### Returns

`void`

#### Inherited from

MeshRenderer.materials

#### Defined in

[src/components/renderer/RenderNode.ts:177](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L177)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.castShadow

#### Defined in

[src/components/renderer/RenderNode.ts:345](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L345)

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

[src/components/renderer/RenderNode.ts:349](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L349)

___

### castGI

• `get` **castGI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.castGI

#### Defined in

[src/components/renderer/RenderNode.ts:354](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L354)

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

[src/components/renderer/RenderNode.ts:358](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L358)

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.castReflection

#### Defined in

[src/components/renderer/RenderNode.ts:362](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L362)

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

[src/components/renderer/RenderNode.ts:366](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L366)

## Methods

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

MeshRenderer.init

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:55](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L55)

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

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:59](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L59)

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

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:96](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L96)

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

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:126](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L126)

___

### updateShape

▸ **updateShape**(): `void`

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:133](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L133)

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

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:155](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L155)

___

### setBaseColor

▸ **setBaseColor**(`i`, `color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |
| `color` | `Color` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:170](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L170)

___

### setEmissiveColor

▸ **setEmissiveColor**(`i`, `color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |
| `color` | `Color` |

#### Returns

`void`

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:175](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L175)

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

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:180](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L180)

___

### onUpdate

▸ **onUpdate**(`view?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`void`

#### Overrides

MeshRenderer.onUpdate

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:185](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L185)

___

### onCompute

▸ **onCompute**(`view`, `command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | `View3D` |
| `command` | `GPUCommandEncoder` |

#### Returns

`void`

#### Overrides

MeshRenderer.onCompute

#### Defined in

[packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:192](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L192)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

MeshRenderer.start

#### Defined in

[src/components/ComponentBase.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

MeshRenderer.stop

#### Defined in

[src/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L114)

___

### onLateUpdate

▸ **onLateUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

MeshRenderer.onLateUpdate

#### Defined in

[src/components/ComponentBase.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L118)

___

### onBeforeUpdate

▸ **onBeforeUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

MeshRenderer.onBeforeUpdate

#### Defined in

[src/components/ComponentBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L119)

___

### onGraphic

▸ **onGraphic**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

MeshRenderer.onGraphic

#### Defined in

[src/components/ComponentBase.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L121)

___

### onParentChange

▸ **onParentChange**(`lastParent?`, `currentParent?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lastParent?` | `Object3D` |
| `currentParent?` | `Object3D` |

#### Returns

`any`

#### Inherited from

MeshRenderer.onParentChange

#### Defined in

[src/components/ComponentBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L122)

___

### onAddChild

▸ **onAddChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | `Object3D` |

#### Returns

`any`

#### Inherited from

MeshRenderer.onAddChild

#### Defined in

[src/components/ComponentBase.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L123)

___

### onRemoveChild

▸ **onRemoveChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | `Object3D` |

#### Returns

`any`

#### Inherited from

MeshRenderer.onRemoveChild

#### Defined in

[src/components/ComponentBase.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L124)

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Inherited from

MeshRenderer.onEnable

#### Defined in

[src/components/renderer/MeshRenderer.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L30)

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Inherited from

MeshRenderer.onDisable

#### Defined in

[src/components/renderer/MeshRenderer.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L34)

___

### cloneTo

▸ **cloneTo**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object3D` |

#### Returns

`void`

#### Inherited from

MeshRenderer.cloneTo

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

MeshRenderer.copyComponent

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

MeshRenderer.setMorphInfluence

#### Defined in

[src/components/renderer/MeshRenderer.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L110)

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

MeshRenderer.setMorphInfluenceIndex

#### Defined in

[src/components/renderer/MeshRenderer.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L119)

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

MeshRenderer.destroy

#### Defined in

[src/components/renderer/MeshRenderer.ts:157](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L157)

___

### attachSceneOctree

▸ **attachSceneOctree**(`octree`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `octree` | `Octree` |

#### Returns

`void`

#### Inherited from

MeshRenderer.attachSceneOctree

#### Defined in

[src/components/renderer/RenderNode.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L78)

___

### detachSceneOctree

▸ **detachSceneOctree**(): `void`

#### Returns

`void`

#### Inherited from

MeshRenderer.detachSceneOctree

#### Defined in

[src/components/renderer/RenderNode.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L83)

___

### addMask

▸ **addMask**(`mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | `RendererMask` |

#### Returns

`void`

#### Inherited from

MeshRenderer.addMask

#### Defined in

[src/components/renderer/RenderNode.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L140)

___

### removeMask

▸ **removeMask**(`mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | `RendererMask` |

#### Returns

`void`

#### Inherited from

MeshRenderer.removeMask

#### Defined in

[src/components/renderer/RenderNode.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L144)

___

### hasMask

▸ **hasMask**(`mask`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | `RendererMask` |

#### Returns

`boolean`

#### Inherited from

MeshRenderer.hasMask

#### Defined in

[src/components/renderer/RenderNode.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L148)

___

### addRendererMask

▸ **addRendererMask**(`tag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `RendererMask` |

#### Returns

`void`

#### Inherited from

MeshRenderer.addRendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:228](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L228)

___

### removeRendererMask

▸ **removeRendererMask**(`tag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `RendererMask` |

#### Returns

`void`

#### Inherited from

MeshRenderer.removeRendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:232](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L232)

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

MeshRenderer.selfCloneMaterials

#### Defined in

[src/components/renderer/RenderNode.ts:252](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L252)

___

### renderPass

▸ **renderPass**(`view`, `passType`, `renderContext`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | `View3D` |
| `passType` | `PassType` |
| `renderContext` | `RenderContext` |

#### Returns

`void`

#### Inherited from

MeshRenderer.renderPass

#### Defined in

[src/components/renderer/RenderNode.ts:370](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L370)

___

### renderPass2

▸ **renderPass2**(`view`, `passType`, `rendererPassState`, `clusterLightingBuffer`, `encoder`, `useBundle?`): `void`

render pass at passType

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `view` | `View3D` | `undefined` |
| `passType` | `PassType` | `undefined` |
| `rendererPassState` | `RendererPassState` | `undefined` |
| `clusterLightingBuffer` | `ClusterLightingBuffer` | `undefined` |
| `encoder` | `GPURenderPassEncoder` | `undefined` |
| `useBundle` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

MeshRenderer.renderPass2

#### Defined in

[src/components/renderer/RenderNode.ts:438](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L438)

___

### recordRenderPass2

▸ **recordRenderPass2**(`view`, `passType`, `rendererPassState`, `clusterLightingBuffer`, `encoder`, `useBundle?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `view` | `View3D` | `undefined` |
| `passType` | `PassType` | `undefined` |
| `rendererPassState` | `RendererPassState` | `undefined` |
| `clusterLightingBuffer` | `ClusterLightingBuffer` | `undefined` |
| `encoder` | `GPURenderPassEncoder` | `undefined` |
| `useBundle` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

MeshRenderer.recordRenderPass2

#### Defined in

[src/components/renderer/RenderNode.ts:486](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L486)

___

### preInit

▸ **preInit**(`_rendererType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rendererType` | `PassType` |

#### Returns

`boolean`

#### Inherited from

MeshRenderer.preInit

#### Defined in

[src/components/renderer/RenderNode.ts:519](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L519)

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

MeshRenderer.beforeDestroy

#### Defined in

[src/components/renderer/RenderNode.ts:609](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L609)
