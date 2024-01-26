# Class: SkinnedMeshRenderer2

Skin Mesh Renderer Component
Renders a deformable mesh.
Deformable meshes include skin meshes (meshes with bones and bound poses),
meshes with mixed shapes, and meshes running cloth simulations.

## Hierarchy

- [`MeshRenderer`](MeshRenderer.md)

  ↳ **`SkinnedMeshRenderer2`**

### Constructors

- [constructor](SkinnedMeshRenderer2.md#constructor)

### Properties

- [object3D](SkinnedMeshRenderer2.md#object3d)
- [isDestroyed](SkinnedMeshRenderer2.md#isdestroyed)
- [receiveShadow](SkinnedMeshRenderer2.md#receiveshadow)
- [instanceCount](SkinnedMeshRenderer2.md#instancecount)
- [lodLevel](SkinnedMeshRenderer2.md#lodlevel)
- [alwaysRender](SkinnedMeshRenderer2.md#alwaysrender)
- [instanceID](SkinnedMeshRenderer2.md#instanceid)
- [drawType](SkinnedMeshRenderer2.md#drawtype)
- [isRenderOrderChange](SkinnedMeshRenderer2.md#isrenderorderchange)
- [needSortOnCameraZ](SkinnedMeshRenderer2.md#needsortoncameraz)
- [preInit](SkinnedMeshRenderer2.md#preinit)
- [skinJointsName](SkinnedMeshRenderer2.md#skinjointsname)

### Accessors

- [eventDispatcher](SkinnedMeshRenderer2.md#eventdispatcher)
- [isStart](SkinnedMeshRenderer2.md#isstart)
- [transform](SkinnedMeshRenderer2.md#transform)
- [enable](SkinnedMeshRenderer2.md#enable)
- [material](SkinnedMeshRenderer2.md#material)
- [renderLayer](SkinnedMeshRenderer2.md#renderlayer)
- [rendererMask](SkinnedMeshRenderer2.md#renderermask)
- [renderOrder](SkinnedMeshRenderer2.md#renderorder)
- [materials](SkinnedMeshRenderer2.md#materials)
- [castShadow](SkinnedMeshRenderer2.md#castshadow)
- [castGI](SkinnedMeshRenderer2.md#castgi)
- [castReflection](SkinnedMeshRenderer2.md#castreflection)
- [geometry](SkinnedMeshRenderer2.md#geometry)
- [blendShape](SkinnedMeshRenderer2.md#blendshape)
- [skeletonAnimation](SkinnedMeshRenderer2.md#skeletonanimation)
- [skinInverseBindMatrices](SkinnedMeshRenderer2.md#skininversebindmatrices)
- [inverseBindMatrixBuffer](SkinnedMeshRenderer2.md#inversebindmatrixbuffer)
- [jointIndexTableBuffer](SkinnedMeshRenderer2.md#jointindextablebuffer)

### Methods

- [stop](SkinnedMeshRenderer2.md#stop)
- [onUpdate](SkinnedMeshRenderer2.md#onupdate)
- [onLateUpdate](SkinnedMeshRenderer2.md#onlateupdate)
- [onBeforeUpdate](SkinnedMeshRenderer2.md#onbeforeupdate)
- [onGraphic](SkinnedMeshRenderer2.md#ongraphic)
- [onParentChange](SkinnedMeshRenderer2.md#onparentchange)
- [onDisable](SkinnedMeshRenderer2.md#ondisable)
- [copyComponent](SkinnedMeshRenderer2.md#copycomponent)
- [setMorphInfluence](SkinnedMeshRenderer2.md#setmorphinfluence)
- [setMorphInfluenceIndex](SkinnedMeshRenderer2.md#setmorphinfluenceindex)
- [onCompute](SkinnedMeshRenderer2.md#oncompute)
- [destroy](SkinnedMeshRenderer2.md#destroy)
- [init](SkinnedMeshRenderer2.md#init)
- [attachSceneOctree](SkinnedMeshRenderer2.md#attachsceneoctree)
- [detachSceneOctree](SkinnedMeshRenderer2.md#detachsceneoctree)
- [addMask](SkinnedMeshRenderer2.md#addmask)
- [removeMask](SkinnedMeshRenderer2.md#removemask)
- [hasMask](SkinnedMeshRenderer2.md#hasmask)
- [addRendererMask](SkinnedMeshRenderer2.md#addrenderermask)
- [removeRendererMask](SkinnedMeshRenderer2.md#removerenderermask)
- [selfCloneMaterials](SkinnedMeshRenderer2.md#selfclonematerials)
- [renderPass](SkinnedMeshRenderer2.md#renderpass)
- [renderPass2](SkinnedMeshRenderer2.md#renderpass2)
- [recordRenderPass2](SkinnedMeshRenderer2.md#recordrenderpass2)
- [beforeDestroy](SkinnedMeshRenderer2.md#beforedestroy)
- [start](SkinnedMeshRenderer2.md#start)
- [onEnable](SkinnedMeshRenderer2.md#onenable)
- [cloneTo](SkinnedMeshRenderer2.md#cloneto)

## Constructors

### constructor

• **new SkinnedMeshRenderer2**(): [`SkinnedMeshRenderer2`](SkinnedMeshRenderer2.md)

#### Returns

[`SkinnedMeshRenderer2`](SkinnedMeshRenderer2.md)

#### Overrides

[MeshRenderer](MeshRenderer.md).[constructor](MeshRenderer.md#constructor)

#### Defined in

[src/components/renderer/SkinnedMeshRenderer2.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer2.ts#L26)

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

### skinJointsName

• **skinJointsName**: `string`[]

#### Defined in

[src/components/renderer/SkinnedMeshRenderer2.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer2.ts#L20)

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

___

### geometry

• `get` **geometry**(): [`GeometryBase`](GeometryBase.md)

The geometry of the mesh determines its shape

#### Returns

[`GeometryBase`](GeometryBase.md)

#### Overrides

MeshRenderer.geometry

#### Defined in

[src/components/renderer/SkinnedMeshRenderer2.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer2.ts#L31)

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

[src/components/renderer/SkinnedMeshRenderer2.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer2.ts#L35)

___

### blendShape

• `get` **blendShape**(): [`MorphTargetData`](MorphTargetData.md)

#### Returns

[`MorphTargetData`](MorphTargetData.md)

#### Defined in

[src/components/renderer/SkinnedMeshRenderer2.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer2.ts#L64)

___

### skeletonAnimation

• `get` **skeletonAnimation**(): [`AnimatorComponent`](AnimatorComponent.md)

#### Returns

[`AnimatorComponent`](AnimatorComponent.md)

#### Defined in

[src/components/renderer/SkinnedMeshRenderer2.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer2.ts#L73)

• `set` **skeletonAnimation**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`AnimatorComponent`](AnimatorComponent.md) |

#### Returns

`void`

#### Defined in

[src/components/renderer/SkinnedMeshRenderer2.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer2.ts#L77)

___

### skinInverseBindMatrices

• `get` **skinInverseBindMatrices**(): `Float32Array`[]

#### Returns

`Float32Array`[]

#### Defined in

[src/components/renderer/SkinnedMeshRenderer2.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer2.ts#L90)

• `set` **skinInverseBindMatrices**(`inverseBindMatrices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inverseBindMatrices` | `Float32Array`[] |

#### Returns

`void`

#### Defined in

[src/components/renderer/SkinnedMeshRenderer2.ts:94](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer2.ts#L94)

___

### inverseBindMatrixBuffer

• `get` **inverseBindMatrixBuffer**(): [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

[src/components/renderer/SkinnedMeshRenderer2.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer2.ts#L106)

___

### jointIndexTableBuffer

• `get` **jointIndexTableBuffer**(): `GPUBuffer`

#### Returns

`GPUBuffer`

#### Defined in

[src/components/renderer/SkinnedMeshRenderer2.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer2.ts#L110)

## Methods

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

▸ **onUpdate**(`view?`): `any`

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

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[onDisable](MeshRenderer.md#ondisable)

#### Defined in

[src/components/renderer/MeshRenderer.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L34)

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

[src/components/renderer/MeshRenderer.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L124)

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

### init

▸ **init**(`param?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[init](MeshRenderer.md#init)

#### Defined in

[src/components/renderer/RenderNode.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L68)

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

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[MeshRenderer](MeshRenderer.md).[start](MeshRenderer.md#start)

#### Defined in

[src/components/renderer/SkinnedMeshRenderer2.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer2.ts#L45)

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[MeshRenderer](MeshRenderer.md).[onEnable](MeshRenderer.md#onenable)

#### Defined in

[src/components/renderer/SkinnedMeshRenderer2.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer2.ts#L69)

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

[MeshRenderer](MeshRenderer.md).[cloneTo](MeshRenderer.md#cloneto)

#### Defined in

[src/components/renderer/SkinnedMeshRenderer2.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer2.ts#L114)
