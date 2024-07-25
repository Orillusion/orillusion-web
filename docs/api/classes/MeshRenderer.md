# Class: MeshRenderer

The mesh renderer component is a component used to render the mesh

## Hierarchy

- `RenderNode`

  ↳ **`MeshRenderer`**

  ↳↳ [`GUIRenderer`](GUIRenderer.md)

  ↳↳ [`MeshFilter`](MeshFilter.md)

  ↳↳ [`SkinnedMeshRenderer`](SkinnedMeshRenderer.md)

  ↳↳ [`SkinnedMeshRenderer2`](SkinnedMeshRenderer2.md)

  ↳↳ [`SkyRenderer`](SkyRenderer.md)

### Constructors

- [constructor](MeshRenderer.md#constructor)

### Properties

- [object3D](MeshRenderer.md#object3d)
- [isDestroyed](MeshRenderer.md#isdestroyed)
- [receiveShadow](MeshRenderer.md#receiveshadow)
- [morphData](MeshRenderer.md#morphdata)
- [instanceCount](MeshRenderer.md#instancecount)
- [lodLevel](MeshRenderer.md#lodlevel)
- [alwaysRender](MeshRenderer.md#alwaysrender)
- [instanceID](MeshRenderer.md#instanceid)
- [drawType](MeshRenderer.md#drawtype)
- [isRenderOrderChange](MeshRenderer.md#isrenderorderchange)
- [needSortOnCameraZ](MeshRenderer.md#needsortoncameraz)
- [isRecievePostEffectUI](MeshRenderer.md#isrecieveposteffectui)

### Accessors

- [eventDispatcher](MeshRenderer.md#eventdispatcher)
- [isStart](MeshRenderer.md#isstart)
- [transform](MeshRenderer.md#transform)
- [enable](MeshRenderer.md#enable)
- [geometry](MeshRenderer.md#geometry)
- [material](MeshRenderer.md#material)
- [renderLayer](MeshRenderer.md#renderlayer)
- [rendererMask](MeshRenderer.md#renderermask)
- [renderOrder](MeshRenderer.md#renderorder)
- [materials](MeshRenderer.md#materials)
- [castShadow](MeshRenderer.md#castshadow)
- [castGI](MeshRenderer.md#castgi)
- [castReflection](MeshRenderer.md#castreflection)

### Methods

- [start](MeshRenderer.md#start)
- [stop](MeshRenderer.md#stop)
- [onUpdate](MeshRenderer.md#onupdate)
- [onLateUpdate](MeshRenderer.md#onlateupdate)
- [onBeforeUpdate](MeshRenderer.md#onbeforeupdate)
- [onGraphic](MeshRenderer.md#ongraphic)
- [onParentChange](MeshRenderer.md#onparentchange)
- [onAddChild](MeshRenderer.md#onaddchild)
- [onRemoveChild](MeshRenderer.md#onremovechild)
- [onEnable](MeshRenderer.md#onenable)
- [onDisable](MeshRenderer.md#ondisable)
- [cloneTo](MeshRenderer.md#cloneto)
- [copyComponent](MeshRenderer.md#copycomponent)
- [setMorphInfluence](MeshRenderer.md#setmorphinfluence)
- [setMorphInfluenceIndex](MeshRenderer.md#setmorphinfluenceindex)
- [onCompute](MeshRenderer.md#oncompute)
- [destroy](MeshRenderer.md#destroy)
- [init](MeshRenderer.md#init)
- [attachSceneOctree](MeshRenderer.md#attachsceneoctree)
- [detachSceneOctree](MeshRenderer.md#detachsceneoctree)
- [addMask](MeshRenderer.md#addmask)
- [removeMask](MeshRenderer.md#removemask)
- [hasMask](MeshRenderer.md#hasmask)
- [addRendererMask](MeshRenderer.md#addrenderermask)
- [removeRendererMask](MeshRenderer.md#removerenderermask)
- [selfCloneMaterials](MeshRenderer.md#selfclonematerials)
- [renderPass](MeshRenderer.md#renderpass)
- [renderPass2](MeshRenderer.md#renderpass2)
- [recordRenderPass2](MeshRenderer.md#recordrenderpass2)
- [preInit](MeshRenderer.md#preinit)
- [beforeDestroy](MeshRenderer.md#beforedestroy)

## Constructors

### constructor

• **new MeshRenderer**(): [`MeshRenderer`](MeshRenderer.md)

#### Returns

[`MeshRenderer`](MeshRenderer.md)

#### Overrides

RenderNode.constructor

#### Defined in

[src/components/renderer/MeshRenderer.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L26)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

RenderNode.object3D

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### isDestroyed

• `Optional` **isDestroyed**: `boolean`

#### Inherited from

RenderNode.isDestroyed

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### receiveShadow

• **receiveShadow**: `boolean`

Enabling this option allows the grid to display any shadows cast on the grid.

#### Defined in

[src/components/renderer/MeshRenderer.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L23)

___

### morphData

• **morphData**: [`MorphTargetData`](MorphTargetData.md)

#### Defined in

[src/components/renderer/MeshRenderer.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L24)

___

### instanceCount

• **instanceCount**: `number` = `0`

#### Inherited from

RenderNode.instanceCount

#### Defined in

[src/components/renderer/RenderNode.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L35)

___

### lodLevel

• **lodLevel**: `number` = `0`

#### Inherited from

RenderNode.lodLevel

#### Defined in

[src/components/renderer/RenderNode.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L36)

___

### alwaysRender

• **alwaysRender**: `boolean` = `false`

#### Inherited from

RenderNode.alwaysRender

#### Defined in

[src/components/renderer/RenderNode.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L37)

___

### instanceID

• **instanceID**: `string`

#### Inherited from

RenderNode.instanceID

#### Defined in

[src/components/renderer/RenderNode.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L38)

___

### drawType

• **drawType**: `number` = `0`

#### Inherited from

RenderNode.drawType

#### Defined in

[src/components/renderer/RenderNode.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L39)

___

### isRenderOrderChange

• `Optional` **isRenderOrderChange**: `boolean`

#### Inherited from

RenderNode.isRenderOrderChange

#### Defined in

[src/components/renderer/RenderNode.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L55)

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Inherited from

RenderNode.needSortOnCameraZ

#### Defined in

[src/components/renderer/RenderNode.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L56)

___

### isRecievePostEffectUI

• `Optional` **isRecievePostEffectUI**: `boolean`

#### Inherited from

RenderNode.isRecievePostEffectUI

#### Defined in

[src/components/renderer/RenderNode.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L57)

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

RenderNode.eventDispatcher

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

RenderNode.eventDispatcher

#### Defined in

[src/components/ComponentBase.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L28)

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.isStart

#### Defined in

[src/components/ComponentBase.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L40)

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

RenderNode.transform

#### Defined in

[src/components/ComponentBase.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L47)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

RenderNode.enable

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

RenderNode.enable

#### Defined in

[src/components/ComponentBase.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L54)

___

### geometry

• `get` **geometry**(): [`GeometryBase`](GeometryBase.md)

The geometry of the mesh determines its shape

#### Returns

[`GeometryBase`](GeometryBase.md)

#### Overrides

RenderNode.geometry

#### Defined in

[src/components/renderer/MeshRenderer.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L53)

• `set` **geometry**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GeometryBase`](GeometryBase.md) |

#### Returns

`void`

#### Overrides

RenderNode.geometry

#### Defined in

[src/components/renderer/MeshRenderer.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L57)

___

### material

• `get` **material**(): [`Material`](Material.md)

material

#### Returns

[`Material`](Material.md)

#### Defined in

[src/components/renderer/MeshRenderer.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L99)

• `set` **material**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Material`](Material.md) |

#### Returns

`void`

#### Defined in

[src/components/renderer/MeshRenderer.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L103)

___

### renderLayer

• `get` **renderLayer**(): `RenderLayer`

#### Returns

`RenderLayer`

#### Inherited from

RenderNode.renderLayer

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

RenderNode.renderLayer

#### Defined in

[src/components/renderer/RenderNode.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L114)

___

### rendererMask

• `get` **rendererMask**(): `number`

#### Returns

`number`

#### Inherited from

RenderNode.rendererMask

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

RenderNode.rendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:156](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L156)

___

### renderOrder

• `get` **renderOrder**(): `number`

#### Returns

`number`

#### Inherited from

RenderNode.renderOrder

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

RenderNode.renderOrder

#### Defined in

[src/components/renderer/RenderNode.ts:164](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L164)

___

### materials

• `get` **materials**(): [`Material`](Material.md)[]

#### Returns

[`Material`](Material.md)[]

#### Inherited from

RenderNode.materials

#### Defined in

[src/components/renderer/RenderNode.ts:173](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L173)

• `set` **materials**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Material`](Material.md)[] |

#### Returns

`void`

#### Inherited from

RenderNode.materials

#### Defined in

[src/components/renderer/RenderNode.ts:177](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L177)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.castShadow

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

RenderNode.castShadow

#### Defined in

[src/components/renderer/RenderNode.ts:349](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L349)

___

### castGI

• `get` **castGI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.castGI

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

RenderNode.castGI

#### Defined in

[src/components/renderer/RenderNode.ts:358](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L358)

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.castReflection

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

RenderNode.castReflection

#### Defined in

[src/components/renderer/RenderNode.ts:366](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L366)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

RenderNode.start

#### Defined in

[src/components/ComponentBase.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

RenderNode.stop

#### Defined in

[src/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L114)

___

### onUpdate

▸ **onUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

RenderNode.onUpdate

#### Defined in

[src/components/ComponentBase.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L117)

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

RenderNode.onLateUpdate

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

RenderNode.onBeforeUpdate

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

RenderNode.onGraphic

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

RenderNode.onParentChange

#### Defined in

[src/components/ComponentBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L122)

___

### onAddChild

▸ **onAddChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

RenderNode.onAddChild

#### Defined in

[src/components/ComponentBase.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L123)

___

### onRemoveChild

▸ **onRemoveChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

RenderNode.onRemoveChild

#### Defined in

[src/components/ComponentBase.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L124)

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Overrides

RenderNode.onEnable

#### Defined in

[src/components/renderer/MeshRenderer.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L30)

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Overrides

RenderNode.onDisable

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

#### Overrides

RenderNode.cloneTo

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

#### Overrides

RenderNode.copyComponent

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

#### Defined in

[src/components/renderer/MeshRenderer.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L119)

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

RenderNode.onCompute

#### Defined in

[src/components/renderer/MeshRenderer.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L128)

___

### destroy

▸ **destroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Overrides

RenderNode.destroy

#### Defined in

[src/components/renderer/MeshRenderer.ts:157](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L157)

___

### init

▸ **init**(`param?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`void`

#### Inherited from

RenderNode.init

#### Defined in

[src/components/renderer/RenderNode.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L70)

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

RenderNode.attachSceneOctree

#### Defined in

[src/components/renderer/RenderNode.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L78)

___

### detachSceneOctree

▸ **detachSceneOctree**(): `void`

#### Returns

`void`

#### Inherited from

RenderNode.detachSceneOctree

#### Defined in

[src/components/renderer/RenderNode.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L83)

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

RenderNode.addMask

#### Defined in

[src/components/renderer/RenderNode.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L140)

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

RenderNode.removeMask

#### Defined in

[src/components/renderer/RenderNode.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L144)

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

RenderNode.hasMask

#### Defined in

[src/components/renderer/RenderNode.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L148)

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

RenderNode.addRendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:228](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L228)

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

RenderNode.removeRendererMask

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

RenderNode.selfCloneMaterials

#### Defined in

[src/components/renderer/RenderNode.ts:252](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L252)

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

RenderNode.renderPass

#### Defined in

[src/components/renderer/RenderNode.ts:370](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L370)

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

RenderNode.renderPass2

#### Defined in

[src/components/renderer/RenderNode.ts:438](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L438)

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

RenderNode.recordRenderPass2

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

RenderNode.preInit

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

RenderNode.beforeDestroy

#### Defined in

[src/components/renderer/RenderNode.ts:609](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L609)
