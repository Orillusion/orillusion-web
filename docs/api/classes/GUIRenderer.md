# Class: GUIRenderer

GUI Renderer
Used to update Geometry and Buffer.

## Hierarchy

- [`MeshRenderer`](MeshRenderer.md)

  ↳ **`GUIRenderer`**

### Constructors

- [constructor](GUIRenderer.md#constructor)

### Properties

- [object3D](GUIRenderer.md#object3d)
- [isDestroyed](GUIRenderer.md#isdestroyed)
- [receiveShadow](GUIRenderer.md#receiveshadow)
- [instanceCount](GUIRenderer.md#instancecount)
- [lodLevel](GUIRenderer.md#lodlevel)
- [alwaysRender](GUIRenderer.md#alwaysrender)
- [instanceID](GUIRenderer.md#instanceid)
- [drawType](GUIRenderer.md#drawtype)
- [isRenderOrderChange](GUIRenderer.md#isrenderorderchange)
- [needSortOnCameraZ](GUIRenderer.md#needsortoncameraz)
- [preInit](GUIRenderer.md#preinit)

### Accessors

- [eventDispatcher](GUIRenderer.md#eventdispatcher)
- [isStart](GUIRenderer.md#isstart)
- [transform](GUIRenderer.md#transform)
- [enable](GUIRenderer.md#enable)
- [geometry](GUIRenderer.md#geometry)
- [material](GUIRenderer.md#material)
- [renderOrder](GUIRenderer.md#renderorder)
- [rendererMask](GUIRenderer.md#renderermask)
- [materials](GUIRenderer.md#materials)
- [castShadow](GUIRenderer.md#castshadow)
- [castGI](GUIRenderer.md#castgi)
- [castReflection](GUIRenderer.md#castreflection)

### Methods

- [start](GUIRenderer.md#start)
- [stop](GUIRenderer.md#stop)
- [onLateUpdate](GUIRenderer.md#onlateupdate)
- [onBeforeUpdate](GUIRenderer.md#onbeforeupdate)
- [onGraphic](GUIRenderer.md#ongraphic)
- [onParentChange](GUIRenderer.md#onparentchange)
- [init](GUIRenderer.md#init)
- [onUpdate](GUIRenderer.md#onupdate)
- [onEnable](GUIRenderer.md#onenable)
- [onDisable](GUIRenderer.md#ondisable)
- [cloneTo](GUIRenderer.md#cloneto)
- [copyComponent](GUIRenderer.md#copycomponent)
- [setMorphInfluence](GUIRenderer.md#setmorphinfluence)
- [setMorphInfluenceIndex](GUIRenderer.md#setmorphinfluenceindex)
- [onCompute](GUIRenderer.md#oncompute)
- [destroy](GUIRenderer.md#destroy)
- [attachSceneOctree](GUIRenderer.md#attachsceneoctree)
- [detachSceneOctree](GUIRenderer.md#detachsceneoctree)
- [addMask](GUIRenderer.md#addmask)
- [removeMask](GUIRenderer.md#removemask)
- [hasMask](GUIRenderer.md#hasmask)
- [addRendererMask](GUIRenderer.md#addrenderermask)
- [removeRendererMask](GUIRenderer.md#removerenderermask)
- [selfCloneMaterials](GUIRenderer.md#selfclonematerials)
- [renderPass](GUIRenderer.md#renderpass)
- [renderPass2](GUIRenderer.md#renderpass2)
- [recordRenderPass2](GUIRenderer.md#recordrenderpass2)
- [beforeDestroy](GUIRenderer.md#beforedestroy)

## Constructors

### constructor

• **new GUIRenderer**()

#### Inherited from

[MeshRenderer](MeshRenderer.md).[constructor](MeshRenderer.md#constructor)

#### Defined in

[src/components/renderer/MeshRenderer.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L24)

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

[src/components/renderer/MeshRenderer.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L21)

___

### instanceCount

• **instanceCount**: `number` = `0`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[instanceCount](MeshRenderer.md#instancecount)

#### Defined in

[src/components/renderer/RenderNode.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L33)

___

### lodLevel

• **lodLevel**: `number` = `0`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[lodLevel](MeshRenderer.md#lodlevel)

#### Defined in

[src/components/renderer/RenderNode.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L34)

___

### alwaysRender

• **alwaysRender**: `boolean` = `false`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[alwaysRender](MeshRenderer.md#alwaysrender)

#### Defined in

[src/components/renderer/RenderNode.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L35)

___

### instanceID

• **instanceID**: `string`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[instanceID](MeshRenderer.md#instanceid)

#### Defined in

[src/components/renderer/RenderNode.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L36)

___

### drawType

• **drawType**: `number` = `0`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[drawType](MeshRenderer.md#drawtype)

#### Defined in

[src/components/renderer/RenderNode.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L37)

___

### isRenderOrderChange

• `Optional` **isRenderOrderChange**: `boolean`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[isRenderOrderChange](MeshRenderer.md#isrenderorderchange)

#### Defined in

[src/components/renderer/RenderNode.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L52)

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[needSortOnCameraZ](MeshRenderer.md#needsortoncameraz)

#### Defined in

[src/components/renderer/RenderNode.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L53)

___

### preInit

• **preInit**: `boolean` = `false`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[preInit](MeshRenderer.md#preinit)

#### Defined in

[src/components/renderer/RenderNode.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L56)

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

#### Overrides

MeshRenderer.geometry

#### Defined in

[src/components/gui/core/GUIRenderer.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIRenderer.ts#L36)

• `set` **geometry**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GeometryBase`](GeometryBase.md) |

#### Returns

`void`

#### Overrides

MeshRenderer.geometry

#### Defined in

[src/components/gui/core/GUIRenderer.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIRenderer.ts#L39)

___

### material

• `get` **material**(): `MaterialBase`

material

#### Returns

`MaterialBase`

#### Inherited from

MeshRenderer.material

#### Defined in

[src/components/renderer/MeshRenderer.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L82)

• `set` **material**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MaterialBase` |

#### Returns

`void`

#### Inherited from

MeshRenderer.material

#### Defined in

[src/components/renderer/MeshRenderer.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L87)

___

### renderOrder

• `get` **renderOrder**(): `number`

#### Returns

`number`

#### Inherited from

MeshRenderer.renderOrder

#### Defined in

[src/components/renderer/RenderNode.ts:94](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L94)

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

[src/components/renderer/RenderNode.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L98)

___

### rendererMask

• `get` **rendererMask**(): `number`

#### Returns

`number`

#### Inherited from

MeshRenderer.rendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L132)

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

[src/components/renderer/RenderNode.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L136)

___

### materials

• `get` **materials**(): `MaterialBase`[]

#### Returns

`MaterialBase`[]

#### Inherited from

MeshRenderer.materials

#### Defined in

[src/components/renderer/RenderNode.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L140)

• `set` **materials**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MaterialBase`[] |

#### Returns

`void`

#### Inherited from

MeshRenderer.materials

#### Defined in

[src/components/renderer/RenderNode.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L145)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.castShadow

#### Defined in

[src/components/renderer/RenderNode.ts:290](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L290)

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

[src/components/renderer/RenderNode.ts:295](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L295)

___

### castGI

• `get` **castGI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.castGI

#### Defined in

[src/components/renderer/RenderNode.ts:300](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L300)

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

[src/components/renderer/RenderNode.ts:305](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L305)

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.castReflection

#### Defined in

[src/components/renderer/RenderNode.ts:310](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L310)

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

[src/components/renderer/RenderNode.ts:314](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L314)

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

▸ `Optional` **onLateUpdate**(`view?`): `any`

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

▸ `Optional` **onBeforeUpdate**(`view?`): `any`

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

▸ `Optional` **onGraphic**(`view?`): `any`

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

▸ `Optional` **onParentChange**(`lastParent?`, `currentParent?`): `any`

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

### init

▸ **init**(`param?`): `void`

init renderer

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`void`

#### Overrides

[MeshRenderer](MeshRenderer.md).[init](MeshRenderer.md#init)

#### Defined in

[src/components/gui/core/GUIRenderer.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIRenderer.ts#L23)

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

[src/components/gui/core/GUIRenderer.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUIRenderer.ts#L72)

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[onEnable](MeshRenderer.md#onenable)

#### Defined in

[src/components/renderer/MeshRenderer.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L28)

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[onDisable](MeshRenderer.md#ondisable)

#### Defined in

[src/components/renderer/MeshRenderer.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L32)

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

[src/components/renderer/MeshRenderer.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L36)

___

### copyComponent

▸ **copyComponent**(`from`): [`GUIRenderer`](GUIRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`GUIRenderer`](GUIRenderer.md) |

#### Returns

[`GUIRenderer`](GUIRenderer.md)

#### Inherited from

[MeshRenderer](MeshRenderer.md).[copyComponent](MeshRenderer.md#copycomponent)

#### Defined in

[src/components/renderer/MeshRenderer.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L41)

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

[src/components/renderer/MeshRenderer.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L95)

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

[src/components/renderer/MeshRenderer.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L104)

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

#### Inherited from

[MeshRenderer](MeshRenderer.md).[onCompute](MeshRenderer.md#oncompute)

#### Defined in

[src/components/renderer/MeshRenderer.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L113)

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

[src/components/renderer/MeshRenderer.ts:143](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L143)

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

[src/components/renderer/RenderNode.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L63)

___

### detachSceneOctree

▸ **detachSceneOctree**(): `void`

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[detachSceneOctree](MeshRenderer.md#detachsceneoctree)

#### Defined in

[src/components/renderer/RenderNode.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L68)

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

[src/components/renderer/RenderNode.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L120)

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

[src/components/renderer/RenderNode.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L124)

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

[src/components/renderer/RenderNode.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L128)

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

[src/components/renderer/RenderNode.ts:176](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L176)

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

[src/components/renderer/RenderNode.ts:180](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L180)

___

### selfCloneMaterials

▸ **selfCloneMaterials**(`key`): [`GUIRenderer`](GUIRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`GUIRenderer`](GUIRenderer.md)

#### Inherited from

[MeshRenderer](MeshRenderer.md).[selfCloneMaterials](MeshRenderer.md#selfclonematerials)

#### Defined in

[src/components/renderer/RenderNode.ts:196](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L196)

___

### renderPass

▸ **renderPass**(`view`, `passType`, `renderContext`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `passType` | `RendererType` |
| `renderContext` | [`RenderContext`](RenderContext.md) |

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[renderPass](MeshRenderer.md#renderpass)

#### Defined in

[src/components/renderer/RenderNode.ts:318](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L318)

___

### renderPass2

▸ **renderPass2**(`view`, `passType`, `rendererPassState`, `clusterLightingBuffer`, `encoder`, `useBundle?`): `void`

render pass at passType

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `view` | [`View3D`](View3D.md) | `undefined` |
| `passType` | `RendererType` | `undefined` |
| `rendererPassState` | `RendererPassState` | `undefined` |
| `clusterLightingBuffer` | [`ClusterLightingBuffer`](ClusterLightingBuffer.md) | `undefined` |
| `encoder` | `GPURenderPassEncoder` | `undefined` |
| `useBundle` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[renderPass2](MeshRenderer.md#renderpass2)

#### Defined in

[src/components/renderer/RenderNode.ts:371](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L371)

___

### recordRenderPass2

▸ **recordRenderPass2**(`view`, `passType`, `rendererPassState`, `clusterLightingBuffer`, `encoder`, `useBundle?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `view` | [`View3D`](View3D.md) | `undefined` |
| `passType` | `RendererType` | `undefined` |
| `rendererPassState` | `RendererPassState` | `undefined` |
| `clusterLightingBuffer` | [`ClusterLightingBuffer`](ClusterLightingBuffer.md) | `undefined` |
| `encoder` | `GPURenderPassEncoder` | `undefined` |
| `useBundle` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[recordRenderPass2](MeshRenderer.md#recordrenderpass2)

#### Defined in

[src/components/renderer/RenderNode.ts:416](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L416)

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

[src/components/renderer/RenderNode.ts:527](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L527)
