# Class: SkyRenderer

Sky Box Renderer Component

## Hierarchy

- [`MeshRenderer`](MeshRenderer.md)

  ↳ **`SkyRenderer`**

  ↳↳ [`AtmosphericComponent`](AtmosphericComponent.md)

### Constructors

- [constructor](SkyRenderer.md#constructor)

### Properties

- [object3D](SkyRenderer.md#object3d)
- [isDestroyed](SkyRenderer.md#isdestroyed)
- [receiveShadow](SkyRenderer.md#receiveshadow)
- [instanceCount](SkyRenderer.md#instancecount)
- [lodLevel](SkyRenderer.md#lodlevel)
- [alwaysRender](SkyRenderer.md#alwaysrender)
- [instanceID](SkyRenderer.md#instanceid)
- [drawType](SkyRenderer.md#drawtype)
- [isRenderOrderChange](SkyRenderer.md#isrenderorderchange)
- [needSortOnCameraZ](SkyRenderer.md#needsortoncameraz)
- [preInit](SkyRenderer.md#preinit)
- [skyMaterial](SkyRenderer.md#skymaterial)

### Accessors

- [eventDispatcher](SkyRenderer.md#eventdispatcher)
- [isStart](SkyRenderer.md#isstart)
- [transform](SkyRenderer.md#transform)
- [enable](SkyRenderer.md#enable)
- [geometry](SkyRenderer.md#geometry)
- [material](SkyRenderer.md#material)
- [renderLayer](SkyRenderer.md#renderlayer)
- [rendererMask](SkyRenderer.md#renderermask)
- [renderOrder](SkyRenderer.md#renderorder)
- [materials](SkyRenderer.md#materials)
- [castShadow](SkyRenderer.md#castshadow)
- [castGI](SkyRenderer.md#castgi)
- [castReflection](SkyRenderer.md#castreflection)
- [map](SkyRenderer.md#map)
- [exposure](SkyRenderer.md#exposure)
- [roughness](SkyRenderer.md#roughness)

### Methods

- [start](SkyRenderer.md#start)
- [stop](SkyRenderer.md#stop)
- [onUpdate](SkyRenderer.md#onupdate)
- [onLateUpdate](SkyRenderer.md#onlateupdate)
- [onBeforeUpdate](SkyRenderer.md#onbeforeupdate)
- [onGraphic](SkyRenderer.md#ongraphic)
- [onParentChange](SkyRenderer.md#onparentchange)
- [cloneTo](SkyRenderer.md#cloneto)
- [copyComponent](SkyRenderer.md#copycomponent)
- [setMorphInfluence](SkyRenderer.md#setmorphinfluence)
- [setMorphInfluenceIndex](SkyRenderer.md#setmorphinfluenceindex)
- [onCompute](SkyRenderer.md#oncompute)
- [destroy](SkyRenderer.md#destroy)
- [attachSceneOctree](SkyRenderer.md#attachsceneoctree)
- [detachSceneOctree](SkyRenderer.md#detachsceneoctree)
- [addMask](SkyRenderer.md#addmask)
- [removeMask](SkyRenderer.md#removemask)
- [hasMask](SkyRenderer.md#hasmask)
- [addRendererMask](SkyRenderer.md#addrenderermask)
- [removeRendererMask](SkyRenderer.md#removerenderermask)
- [selfCloneMaterials](SkyRenderer.md#selfclonematerials)
- [renderPass](SkyRenderer.md#renderpass)
- [recordRenderPass2](SkyRenderer.md#recordrenderpass2)
- [beforeDestroy](SkyRenderer.md#beforedestroy)
- [init](SkyRenderer.md#init)
- [onEnable](SkyRenderer.md#onenable)
- [onDisable](SkyRenderer.md#ondisable)
- [renderPass2](SkyRenderer.md#renderpass2)

## Constructors

### constructor

• **new SkyRenderer**()

#### Inherited from

[MeshRenderer](MeshRenderer.md).[constructor](MeshRenderer.md#constructor)

#### Defined in

[src/components/renderer/MeshRenderer.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L25)

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

[src/components/renderer/MeshRenderer.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L22)

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

### skyMaterial

• **skyMaterial**: `SkyMaterial`

The material used in the Sky Box.

#### Defined in

[src/components/renderer/SkyRenderer.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L25)

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

[src/components/renderer/MeshRenderer.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L51)

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

[src/components/renderer/MeshRenderer.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L56)

___

### material

• `get` **material**(): [`Material`](Material.md)

material

#### Returns

[`Material`](Material.md)

#### Inherited from

MeshRenderer.material

#### Defined in

[src/components/renderer/MeshRenderer.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L92)

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

[src/components/renderer/MeshRenderer.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L97)

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

[src/components/renderer/RenderNode.ts:165](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L165)

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

[src/components/renderer/RenderNode.ts:337](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L337)

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

[src/components/renderer/RenderNode.ts:342](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L342)

___

### castGI

• `get` **castGI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.castGI

#### Defined in

[src/components/renderer/RenderNode.ts:347](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L347)

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

[src/components/renderer/RenderNode.ts:352](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L352)

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.castReflection

#### Defined in

[src/components/renderer/RenderNode.ts:357](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L357)

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

[src/components/renderer/RenderNode.ts:361](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L361)

___

### map

• `get` **map**(): [`Texture`](Texture.md)

get environment texture

#### Returns

[`Texture`](Texture.md)

#### Defined in

[src/components/renderer/SkyRenderer.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L80)

• `set` **map**(`texture`): `void`

set environment texture

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/components/renderer/SkyRenderer.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L69)

___

### exposure

• `get` **exposure**(): `number`

#### Returns

`number`

#### Defined in

[src/components/renderer/SkyRenderer.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L84)

• `set` **exposure**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/renderer/SkyRenderer.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L88)

___

### roughness

• `get` **roughness**(): `number`

#### Returns

`number`

#### Defined in

[src/components/renderer/SkyRenderer.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L93)

• `set` **roughness**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/renderer/SkyRenderer.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L97)

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

### onUpdate

▸ `Optional` **onUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[onUpdate](MeshRenderer.md#onupdate)

#### Defined in

[src/components/ComponentBase.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L117)

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

[src/components/renderer/MeshRenderer.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L37)

___

### copyComponent

▸ **copyComponent**(`from`): [`SkyRenderer`](SkyRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`SkyRenderer`](SkyRenderer.md) |

#### Returns

[`SkyRenderer`](SkyRenderer.md)

#### Inherited from

[MeshRenderer](MeshRenderer.md).[copyComponent](MeshRenderer.md#copycomponent)

#### Defined in

[src/components/renderer/MeshRenderer.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L42)

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

[src/components/renderer/MeshRenderer.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L105)

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

[src/components/renderer/MeshRenderer.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L114)

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

[src/components/renderer/MeshRenderer.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L123)

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

[src/components/renderer/MeshRenderer.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L152)

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

▸ **selfCloneMaterials**(`key`): [`SkyRenderer`](SkyRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`SkyRenderer`](SkyRenderer.md)

#### Inherited from

[MeshRenderer](MeshRenderer.md).[selfCloneMaterials](MeshRenderer.md#selfclonematerials)

#### Defined in

[src/components/renderer/RenderNode.ts:243](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L243)

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

[src/components/renderer/RenderNode.ts:365](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L365)

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

[src/components/renderer/RenderNode.ts:465](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L465)

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

[src/components/renderer/RenderNode.ts:574](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L574)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

[MeshRenderer](MeshRenderer.md).[init](MeshRenderer.md#init)

#### Defined in

[src/components/renderer/SkyRenderer.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L28)

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[MeshRenderer](MeshRenderer.md).[onEnable](MeshRenderer.md#onenable)

#### Defined in

[src/components/renderer/SkyRenderer.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L40)

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Overrides

[MeshRenderer](MeshRenderer.md).[onDisable](MeshRenderer.md#ondisable)

#### Defined in

[src/components/renderer/SkyRenderer.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L53)

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

#### Overrides

[MeshRenderer](MeshRenderer.md).[renderPass2](MeshRenderer.md#renderpass2)

#### Defined in

[src/components/renderer/SkyRenderer.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L60)
