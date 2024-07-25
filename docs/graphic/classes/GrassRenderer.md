# Class: GrassRenderer

## Hierarchy

- [`DynamicFaceRenderer`](DynamicFaceRenderer.md)

  ↳ **`GrassRenderer`**

### Constructors

- [constructor](GrassRenderer.md#constructor)

### Properties

- [grassGeometryCompute](GrassRenderer.md#grassgeometrycompute)
- [texture](GrassRenderer.md#texture)
- [transformBuffer](GrassRenderer.md#transformbuffer)
- [nodeStructBuffer](GrassRenderer.md#nodestructbuffer)
- [drawAtomicBuffer](GrassRenderer.md#drawatomicbuffer)
- [nodes](GrassRenderer.md#nodes)
- [object3D](GrassRenderer.md#object3d)
- [isDestroyed](GrassRenderer.md#isdestroyed)
- [receiveShadow](GrassRenderer.md#receiveshadow)
- [morphData](GrassRenderer.md#morphdata)
- [instanceCount](GrassRenderer.md#instancecount)
- [lodLevel](GrassRenderer.md#lodlevel)
- [alwaysRender](GrassRenderer.md#alwaysrender)
- [instanceID](GrassRenderer.md#instanceid)
- [drawType](GrassRenderer.md#drawtype)
- [isRenderOrderChange](GrassRenderer.md#isrenderorderchange)
- [needSortOnCameraZ](GrassRenderer.md#needsortoncameraz)
- [isRecievePostEffectUI](GrassRenderer.md#isrecieveposteffectui)

### Accessors

- [eventDispatcher](GrassRenderer.md#eventdispatcher)
- [isStart](GrassRenderer.md#isstart)
- [transform](GrassRenderer.md#transform)
- [enable](GrassRenderer.md#enable)
- [geometry](GrassRenderer.md#geometry)
- [material](GrassRenderer.md#material)
- [renderLayer](GrassRenderer.md#renderlayer)
- [rendererMask](GrassRenderer.md#renderermask)
- [renderOrder](GrassRenderer.md#renderorder)
- [materials](GrassRenderer.md#materials)
- [castShadow](GrassRenderer.md#castshadow)
- [castGI](GrassRenderer.md#castgi)
- [castReflection](GrassRenderer.md#castreflection)

### Methods

- [init](GrassRenderer.md#init)
- [set](GrassRenderer.md#set)
- [setNodeStruct](GrassRenderer.md#setnodestruct)
- [updateShape](GrassRenderer.md#updateshape)
- [setTextureID](GrassRenderer.md#settextureid)
- [setLineTextureID](GrassRenderer.md#setlinetextureid)
- [setBaseColor](GrassRenderer.md#setbasecolor)
- [setLineColor](GrassRenderer.md#setlinecolor)
- [setEmissiveColor](GrassRenderer.md#setemissivecolor)
- [setFillRotation](GrassRenderer.md#setfillrotation)
- [setUVRect](GrassRenderer.md#setuvrect)
- [setUVRect2](GrassRenderer.md#setuvrect2)
- [setUVSpeed](GrassRenderer.md#setuvspeed)
- [onUpdate](GrassRenderer.md#onupdate)
- [onCompute](GrassRenderer.md#oncompute)
- [start](GrassRenderer.md#start)
- [stop](GrassRenderer.md#stop)
- [onLateUpdate](GrassRenderer.md#onlateupdate)
- [onBeforeUpdate](GrassRenderer.md#onbeforeupdate)
- [onGraphic](GrassRenderer.md#ongraphic)
- [onParentChange](GrassRenderer.md#onparentchange)
- [onAddChild](GrassRenderer.md#onaddchild)
- [onRemoveChild](GrassRenderer.md#onremovechild)
- [onEnable](GrassRenderer.md#onenable)
- [onDisable](GrassRenderer.md#ondisable)
- [cloneTo](GrassRenderer.md#cloneto)
- [copyComponent](GrassRenderer.md#copycomponent)
- [setMorphInfluence](GrassRenderer.md#setmorphinfluence)
- [setMorphInfluenceIndex](GrassRenderer.md#setmorphinfluenceindex)
- [destroy](GrassRenderer.md#destroy)
- [attachSceneOctree](GrassRenderer.md#attachsceneoctree)
- [detachSceneOctree](GrassRenderer.md#detachsceneoctree)
- [addMask](GrassRenderer.md#addmask)
- [removeMask](GrassRenderer.md#removemask)
- [hasMask](GrassRenderer.md#hasmask)
- [addRendererMask](GrassRenderer.md#addrenderermask)
- [removeRendererMask](GrassRenderer.md#removerenderermask)
- [selfCloneMaterials](GrassRenderer.md#selfclonematerials)
- [renderPass](GrassRenderer.md#renderpass)
- [renderPass2](GrassRenderer.md#renderpass2)
- [recordRenderPass2](GrassRenderer.md#recordrenderpass2)
- [preInit](GrassRenderer.md#preinit)
- [beforeDestroy](GrassRenderer.md#beforedestroy)

## Constructors

### constructor

• **new GrassRenderer**(): [`GrassRenderer`](GrassRenderer.md)

#### Returns

[`GrassRenderer`](GrassRenderer.md)

#### Overrides

[DynamicFaceRenderer](DynamicFaceRenderer.md).[constructor](DynamicFaceRenderer.md#constructor)

#### Defined in

[packages/graphic/renderer/GrassRenderer.ts:22](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/GrassRenderer.ts#L22)

## Properties

### grassGeometryCompute

• **grassGeometryCompute**: `ComputeShader`

#### Defined in

[packages/graphic/renderer/GrassRenderer.ts:20](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/GrassRenderer.ts#L20)

___

### texture

• **texture**: `BitmapTexture2DArray`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[texture](DynamicFaceRenderer.md#texture)

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:6](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L6)

___

### transformBuffer

• **transformBuffer**: `StorageGPUBuffer`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[transformBuffer](DynamicFaceRenderer.md#transformbuffer)

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:7](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L7)

___

### nodeStructBuffer

• **nodeStructBuffer**: `StructStorageGPUBuffer`\<[`DynamicDrawStruct`](DynamicDrawStruct.md)\>

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[nodeStructBuffer](DynamicFaceRenderer.md#nodestructbuffer)

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:8](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L8)

___

### drawAtomicBuffer

• **drawAtomicBuffer**: `StorageGPUBuffer`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[drawAtomicBuffer](DynamicFaceRenderer.md#drawatomicbuffer)

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:9](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L9)

___

### nodes

• **nodes**: [`DynamicDrawStruct`](DynamicDrawStruct.md)[]

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[nodes](DynamicFaceRenderer.md#nodes)

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:12](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L12)

___

### object3D

• **object3D**: `Object3D` = `null`

owner object3D

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[object3D](DynamicFaceRenderer.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### isDestroyed

• `Optional` **isDestroyed**: `boolean`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[isDestroyed](DynamicFaceRenderer.md#isdestroyed)

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### receiveShadow

• **receiveShadow**: `boolean`

Enabling this option allows the grid to display any shadows cast on the grid.

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[receiveShadow](DynamicFaceRenderer.md#receiveshadow)

#### Defined in

[src/components/renderer/MeshRenderer.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L23)

___

### morphData

• **morphData**: `MorphTargetData`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[morphData](DynamicFaceRenderer.md#morphdata)

#### Defined in

[src/components/renderer/MeshRenderer.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L24)

___

### instanceCount

• **instanceCount**: `number` = `0`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[instanceCount](DynamicFaceRenderer.md#instancecount)

#### Defined in

[src/components/renderer/RenderNode.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L35)

___

### lodLevel

• **lodLevel**: `number` = `0`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[lodLevel](DynamicFaceRenderer.md#lodlevel)

#### Defined in

[src/components/renderer/RenderNode.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L36)

___

### alwaysRender

• **alwaysRender**: `boolean` = `false`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[alwaysRender](DynamicFaceRenderer.md#alwaysrender)

#### Defined in

[src/components/renderer/RenderNode.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L37)

___

### instanceID

• **instanceID**: `string`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[instanceID](DynamicFaceRenderer.md#instanceid)

#### Defined in

[src/components/renderer/RenderNode.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L38)

___

### drawType

• **drawType**: `number` = `0`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[drawType](DynamicFaceRenderer.md#drawtype)

#### Defined in

[src/components/renderer/RenderNode.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L39)

___

### isRenderOrderChange

• `Optional` **isRenderOrderChange**: `boolean`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[isRenderOrderChange](DynamicFaceRenderer.md#isrenderorderchange)

#### Defined in

[src/components/renderer/RenderNode.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L55)

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[needSortOnCameraZ](DynamicFaceRenderer.md#needsortoncameraz)

#### Defined in

[src/components/renderer/RenderNode.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L56)

___

### isRecievePostEffectUI

• `Optional` **isRecievePostEffectUI**: `boolean`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[isRecievePostEffectUI](DynamicFaceRenderer.md#isrecieveposteffectui)

#### Defined in

[src/components/renderer/RenderNode.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L57)

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): `CEventDispatcher`

#### Returns

`CEventDispatcher`

#### Inherited from

DynamicFaceRenderer.eventDispatcher

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

DynamicFaceRenderer.eventDispatcher

#### Defined in

[src/components/ComponentBase.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L28)

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DynamicFaceRenderer.isStart

#### Defined in

[src/components/ComponentBase.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L40)

___

### transform

• `get` **transform**(): `Transform`

Return the Transform component attached to the Object3D.

#### Returns

`Transform`

#### Inherited from

DynamicFaceRenderer.transform

#### Defined in

[src/components/ComponentBase.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L47)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

DynamicFaceRenderer.enable

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

DynamicFaceRenderer.enable

#### Defined in

[src/components/ComponentBase.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L54)

___

### geometry

• `get` **geometry**(): `GeometryBase`

The geometry of the mesh determines its shape

#### Returns

`GeometryBase`

#### Inherited from

DynamicFaceRenderer.geometry

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

DynamicFaceRenderer.geometry

#### Defined in

[src/components/renderer/MeshRenderer.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L57)

___

### material

• `get` **material**(): `Material`

material

#### Returns

`Material`

#### Inherited from

DynamicFaceRenderer.material

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

DynamicFaceRenderer.material

#### Defined in

[src/components/renderer/MeshRenderer.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L103)

___

### renderLayer

• `get` **renderLayer**(): `RenderLayer`

#### Returns

`RenderLayer`

#### Inherited from

DynamicFaceRenderer.renderLayer

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

DynamicFaceRenderer.renderLayer

#### Defined in

[src/components/renderer/RenderNode.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L114)

___

### rendererMask

• `get` **rendererMask**(): `number`

#### Returns

`number`

#### Inherited from

DynamicFaceRenderer.rendererMask

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

DynamicFaceRenderer.rendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:156](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L156)

___

### renderOrder

• `get` **renderOrder**(): `number`

#### Returns

`number`

#### Inherited from

DynamicFaceRenderer.renderOrder

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

DynamicFaceRenderer.renderOrder

#### Defined in

[src/components/renderer/RenderNode.ts:164](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L164)

___

### materials

• `get` **materials**(): `Material`[]

#### Returns

`Material`[]

#### Inherited from

DynamicFaceRenderer.materials

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

DynamicFaceRenderer.materials

#### Defined in

[src/components/renderer/RenderNode.ts:177](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L177)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DynamicFaceRenderer.castShadow

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

DynamicFaceRenderer.castShadow

#### Defined in

[src/components/renderer/RenderNode.ts:349](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L349)

___

### castGI

• `get` **castGI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DynamicFaceRenderer.castGI

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

DynamicFaceRenderer.castGI

#### Defined in

[src/components/renderer/RenderNode.ts:358](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L358)

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DynamicFaceRenderer.castReflection

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

DynamicFaceRenderer.castReflection

#### Defined in

[src/components/renderer/RenderNode.ts:366](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L366)

## Methods

### init

▸ **init**(`param?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`void`

#### Overrides

[DynamicFaceRenderer](DynamicFaceRenderer.md).[init](DynamicFaceRenderer.md#init)

#### Defined in

[packages/graphic/renderer/GrassRenderer.ts:26](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/GrassRenderer.ts#L26)

___

### set

▸ **set**\<`T`\>(`nodeStruct`, `tex`, `standAloneMatrix?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`DynamicDrawStruct`](DynamicDrawStruct.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeStruct` | `Ctor`\<`T`\> |
| `tex` | `BitmapTexture2DArray` |
| `standAloneMatrix?` | `boolean` |

#### Returns

`void`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[set](DynamicFaceRenderer.md#set)

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:66](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L66)

___

### setNodeStruct

▸ **setNodeStruct**(`index`, `shape`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `shape` | [`DynamicDrawStruct`](DynamicDrawStruct.md) |

#### Returns

`void`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[setNodeStruct](DynamicFaceRenderer.md#setnodestruct)

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:134](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L134)

___

### updateShape

▸ **updateShape**(): `void`

#### Returns

`void`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[updateShape](DynamicFaceRenderer.md#updateshape)

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:141](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L141)

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

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[setTextureID](DynamicFaceRenderer.md#settextureid)

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:150](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L150)

___

### setLineTextureID

▸ **setLineTextureID**(`i`, `id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |
| `id` | `number` |

#### Returns

`void`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[setLineTextureID](DynamicFaceRenderer.md#setlinetextureid)

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:155](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L155)

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

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[setBaseColor](DynamicFaceRenderer.md#setbasecolor)

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:160](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L160)

___

### setLineColor

▸ **setLineColor**(`index`, `color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `color` | `Color` |

#### Returns

`void`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[setLineColor](DynamicFaceRenderer.md#setlinecolor)

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:165](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L165)

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

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[setEmissiveColor](DynamicFaceRenderer.md#setemissivecolor)

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:170](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L170)

___

### setFillRotation

▸ **setFillRotation**(`i`, `radians`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |
| `radians` | `number` |

#### Returns

`void`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[setFillRotation](DynamicFaceRenderer.md#setfillrotation)

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:175](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L175)

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

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[setUVRect](DynamicFaceRenderer.md#setuvrect)

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:180](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L180)

___

### setUVRect2

▸ **setUVRect2**(`i`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |
| `v` | `Vector4` |

#### Returns

`void`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[setUVRect2](DynamicFaceRenderer.md#setuvrect2)

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:185](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L185)

___

### setUVSpeed

▸ **setUVSpeed**(`i`, `v`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `i` | `number` | index |
| `v` | `Vector4` | {x:fill speed u, y: fill speed v, z:line speed u, w: line speed v} |

#### Returns

`void`

**`Memberof`**

DynamicFaceRenderer

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[setUVSpeed](DynamicFaceRenderer.md#setuvspeed)

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:196](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L196)

___

### onUpdate

▸ **onUpdate**(`view?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`void`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[onUpdate](DynamicFaceRenderer.md#onupdate)

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:201](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L201)

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

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[onCompute](DynamicFaceRenderer.md#oncompute)

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:208](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L208)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[start](DynamicFaceRenderer.md#start)

#### Defined in

[src/components/ComponentBase.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[stop](DynamicFaceRenderer.md#stop)

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

[DynamicFaceRenderer](DynamicFaceRenderer.md).[onLateUpdate](DynamicFaceRenderer.md#onlateupdate)

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

[DynamicFaceRenderer](DynamicFaceRenderer.md).[onBeforeUpdate](DynamicFaceRenderer.md#onbeforeupdate)

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

[DynamicFaceRenderer](DynamicFaceRenderer.md).[onGraphic](DynamicFaceRenderer.md#ongraphic)

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

[DynamicFaceRenderer](DynamicFaceRenderer.md).[onParentChange](DynamicFaceRenderer.md#onparentchange)

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

[DynamicFaceRenderer](DynamicFaceRenderer.md).[onAddChild](DynamicFaceRenderer.md#onaddchild)

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

[DynamicFaceRenderer](DynamicFaceRenderer.md).[onRemoveChild](DynamicFaceRenderer.md#onremovechild)

#### Defined in

[src/components/ComponentBase.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L124)

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[onEnable](DynamicFaceRenderer.md#onenable)

#### Defined in

[src/components/renderer/MeshRenderer.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L30)

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[onDisable](DynamicFaceRenderer.md#ondisable)

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

[DynamicFaceRenderer](DynamicFaceRenderer.md).[cloneTo](DynamicFaceRenderer.md#cloneto)

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

[DynamicFaceRenderer](DynamicFaceRenderer.md).[copyComponent](DynamicFaceRenderer.md#copycomponent)

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

[DynamicFaceRenderer](DynamicFaceRenderer.md).[setMorphInfluence](DynamicFaceRenderer.md#setmorphinfluence)

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

[DynamicFaceRenderer](DynamicFaceRenderer.md).[setMorphInfluenceIndex](DynamicFaceRenderer.md#setmorphinfluenceindex)

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

[DynamicFaceRenderer](DynamicFaceRenderer.md).[destroy](DynamicFaceRenderer.md#destroy)

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

[DynamicFaceRenderer](DynamicFaceRenderer.md).[attachSceneOctree](DynamicFaceRenderer.md#attachsceneoctree)

#### Defined in

[src/components/renderer/RenderNode.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L78)

___

### detachSceneOctree

▸ **detachSceneOctree**(): `void`

#### Returns

`void`

#### Inherited from

[DynamicFaceRenderer](DynamicFaceRenderer.md).[detachSceneOctree](DynamicFaceRenderer.md#detachsceneoctree)

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

[DynamicFaceRenderer](DynamicFaceRenderer.md).[addMask](DynamicFaceRenderer.md#addmask)

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

[DynamicFaceRenderer](DynamicFaceRenderer.md).[removeMask](DynamicFaceRenderer.md#removemask)

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

[DynamicFaceRenderer](DynamicFaceRenderer.md).[hasMask](DynamicFaceRenderer.md#hasmask)

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

[DynamicFaceRenderer](DynamicFaceRenderer.md).[addRendererMask](DynamicFaceRenderer.md#addrenderermask)

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

[DynamicFaceRenderer](DynamicFaceRenderer.md).[removeRendererMask](DynamicFaceRenderer.md#removerenderermask)

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

[DynamicFaceRenderer](DynamicFaceRenderer.md).[selfCloneMaterials](DynamicFaceRenderer.md#selfclonematerials)

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

[DynamicFaceRenderer](DynamicFaceRenderer.md).[renderPass](DynamicFaceRenderer.md#renderpass)

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

[DynamicFaceRenderer](DynamicFaceRenderer.md).[renderPass2](DynamicFaceRenderer.md#renderpass2)

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

[DynamicFaceRenderer](DynamicFaceRenderer.md).[recordRenderPass2](DynamicFaceRenderer.md#recordrenderpass2)

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

[DynamicFaceRenderer](DynamicFaceRenderer.md).[preInit](DynamicFaceRenderer.md#preinit)

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

[DynamicFaceRenderer](DynamicFaceRenderer.md).[beforeDestroy](DynamicFaceRenderer.md#beforedestroy)

#### Defined in

[src/components/renderer/RenderNode.ts:609](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L609)
