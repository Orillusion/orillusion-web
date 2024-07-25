# Class: DynamicFaceRenderer

## Hierarchy

- `MeshRenderer`

  ↳ **`DynamicFaceRenderer`**

  ↳↳ [`GrassRenderer`](GrassRenderer.md)

  ↳↳ [`Shape3DRenderer`](Shape3DRenderer.md)

### Constructors

- [constructor](DynamicFaceRenderer.md#constructor)

### Properties

- [texture](DynamicFaceRenderer.md#texture)
- [transformBuffer](DynamicFaceRenderer.md#transformbuffer)
- [nodeStructBuffer](DynamicFaceRenderer.md#nodestructbuffer)
- [drawAtomicBuffer](DynamicFaceRenderer.md#drawatomicbuffer)
- [nodes](DynamicFaceRenderer.md#nodes)
- [object3D](DynamicFaceRenderer.md#object3d)
- [isDestroyed](DynamicFaceRenderer.md#isdestroyed)
- [receiveShadow](DynamicFaceRenderer.md#receiveshadow)
- [morphData](DynamicFaceRenderer.md#morphdata)
- [instanceCount](DynamicFaceRenderer.md#instancecount)
- [lodLevel](DynamicFaceRenderer.md#lodlevel)
- [alwaysRender](DynamicFaceRenderer.md#alwaysrender)
- [instanceID](DynamicFaceRenderer.md#instanceid)
- [drawType](DynamicFaceRenderer.md#drawtype)
- [isRenderOrderChange](DynamicFaceRenderer.md#isrenderorderchange)
- [needSortOnCameraZ](DynamicFaceRenderer.md#needsortoncameraz)
- [isRecievePostEffectUI](DynamicFaceRenderer.md#isrecieveposteffectui)

### Accessors

- [eventDispatcher](DynamicFaceRenderer.md#eventdispatcher)
- [isStart](DynamicFaceRenderer.md#isstart)
- [transform](DynamicFaceRenderer.md#transform)
- [enable](DynamicFaceRenderer.md#enable)
- [geometry](DynamicFaceRenderer.md#geometry)
- [material](DynamicFaceRenderer.md#material)
- [renderLayer](DynamicFaceRenderer.md#renderlayer)
- [rendererMask](DynamicFaceRenderer.md#renderermask)
- [renderOrder](DynamicFaceRenderer.md#renderorder)
- [materials](DynamicFaceRenderer.md#materials)
- [castShadow](DynamicFaceRenderer.md#castshadow)
- [castGI](DynamicFaceRenderer.md#castgi)
- [castReflection](DynamicFaceRenderer.md#castreflection)

### Methods

- [init](DynamicFaceRenderer.md#init)
- [set](DynamicFaceRenderer.md#set)
- [setNodeStruct](DynamicFaceRenderer.md#setnodestruct)
- [updateShape](DynamicFaceRenderer.md#updateshape)
- [setTextureID](DynamicFaceRenderer.md#settextureid)
- [setLineTextureID](DynamicFaceRenderer.md#setlinetextureid)
- [setBaseColor](DynamicFaceRenderer.md#setbasecolor)
- [setLineColor](DynamicFaceRenderer.md#setlinecolor)
- [setEmissiveColor](DynamicFaceRenderer.md#setemissivecolor)
- [setFillRotation](DynamicFaceRenderer.md#setfillrotation)
- [setUVRect](DynamicFaceRenderer.md#setuvrect)
- [setUVRect2](DynamicFaceRenderer.md#setuvrect2)
- [setUVSpeed](DynamicFaceRenderer.md#setuvspeed)
- [onUpdate](DynamicFaceRenderer.md#onupdate)
- [onCompute](DynamicFaceRenderer.md#oncompute)
- [start](DynamicFaceRenderer.md#start)
- [stop](DynamicFaceRenderer.md#stop)
- [onLateUpdate](DynamicFaceRenderer.md#onlateupdate)
- [onBeforeUpdate](DynamicFaceRenderer.md#onbeforeupdate)
- [onGraphic](DynamicFaceRenderer.md#ongraphic)
- [onParentChange](DynamicFaceRenderer.md#onparentchange)
- [onAddChild](DynamicFaceRenderer.md#onaddchild)
- [onRemoveChild](DynamicFaceRenderer.md#onremovechild)
- [onEnable](DynamicFaceRenderer.md#onenable)
- [onDisable](DynamicFaceRenderer.md#ondisable)
- [cloneTo](DynamicFaceRenderer.md#cloneto)
- [copyComponent](DynamicFaceRenderer.md#copycomponent)
- [setMorphInfluence](DynamicFaceRenderer.md#setmorphinfluence)
- [setMorphInfluenceIndex](DynamicFaceRenderer.md#setmorphinfluenceindex)
- [destroy](DynamicFaceRenderer.md#destroy)
- [attachSceneOctree](DynamicFaceRenderer.md#attachsceneoctree)
- [detachSceneOctree](DynamicFaceRenderer.md#detachsceneoctree)
- [addMask](DynamicFaceRenderer.md#addmask)
- [removeMask](DynamicFaceRenderer.md#removemask)
- [hasMask](DynamicFaceRenderer.md#hasmask)
- [addRendererMask](DynamicFaceRenderer.md#addrenderermask)
- [removeRendererMask](DynamicFaceRenderer.md#removerenderermask)
- [selfCloneMaterials](DynamicFaceRenderer.md#selfclonematerials)
- [renderPass](DynamicFaceRenderer.md#renderpass)
- [renderPass2](DynamicFaceRenderer.md#renderpass2)
- [recordRenderPass2](DynamicFaceRenderer.md#recordrenderpass2)
- [preInit](DynamicFaceRenderer.md#preinit)
- [beforeDestroy](DynamicFaceRenderer.md#beforedestroy)

## Constructors

### constructor

• **new DynamicFaceRenderer**(): [`DynamicFaceRenderer`](DynamicFaceRenderer.md)

#### Returns

[`DynamicFaceRenderer`](DynamicFaceRenderer.md)

#### Inherited from

MeshRenderer.constructor

#### Defined in

[src/components/renderer/MeshRenderer.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L26)

## Properties

### texture

• **texture**: `BitmapTexture2DArray`

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:6](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L6)

___

### transformBuffer

• **transformBuffer**: `StorageGPUBuffer`

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:7](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L7)

___

### nodeStructBuffer

• **nodeStructBuffer**: `StructStorageGPUBuffer`\<[`DynamicDrawStruct`](DynamicDrawStruct.md)\>

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:8](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L8)

___

### drawAtomicBuffer

• **drawAtomicBuffer**: `StorageGPUBuffer`

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:9](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L9)

___

### nodes

• **nodes**: [`DynamicDrawStruct`](DynamicDrawStruct.md)[]

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:12](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L12)

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

▸ **init**(`param?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`void`

#### Overrides

MeshRenderer.init

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:26](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L26)

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

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:134](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L134)

___

### updateShape

▸ **updateShape**(): `void`

#### Returns

`void`

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

#### Overrides

MeshRenderer.onUpdate

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

#### Overrides

MeshRenderer.onCompute

#### Defined in

[packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:208](https://github.com/Orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L208)

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
