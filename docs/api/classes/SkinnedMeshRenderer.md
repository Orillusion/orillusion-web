# Class: SkinnedMeshRenderer

Skin Mesh Renderer Component
Renders a deformable mesh.
Deformable meshes include skin meshes (meshes with bones and bound poses),
meshes with mixed shapes, and meshes running cloth simulations.

## Hierarchy

- [`MeshRenderer`](MeshRenderer.md)

  ↳ **`SkinnedMeshRenderer`**

### Constructors

- [constructor](SkinnedMeshRenderer.md#constructor)

### Properties

- [object3D](SkinnedMeshRenderer.md#object3d)
- [receiveShadow](SkinnedMeshRenderer.md#receiveshadow)
- [instanceCount](SkinnedMeshRenderer.md#instancecount)
- [lodLevel](SkinnedMeshRenderer.md#lodlevel)
- [alwaysRender](SkinnedMeshRenderer.md#alwaysrender)
- [instanceID](SkinnedMeshRenderer.md#instanceid)
- [drawType](SkinnedMeshRenderer.md#drawtype)
- [isRenderOrderChange](SkinnedMeshRenderer.md#isrenderorderchange)
- [needSortOnCameraZ](SkinnedMeshRenderer.md#needsortoncameraz)
- [preInit](SkinnedMeshRenderer.md#preinit)
- [skinJointsName](SkinnedMeshRenderer.md#skinjointsname)

### Accessors

- [eventDispatcher](SkinnedMeshRenderer.md#eventdispatcher)
- [transform](SkinnedMeshRenderer.md#transform)
- [enable](SkinnedMeshRenderer.md#enable)
- [geometry](SkinnedMeshRenderer.md#geometry)
- [material](SkinnedMeshRenderer.md#material)
- [renderOrder](SkinnedMeshRenderer.md#renderorder)
- [rendererMask](SkinnedMeshRenderer.md#renderermask)
- [materials](SkinnedMeshRenderer.md#materials)
- [castShadow](SkinnedMeshRenderer.md#castshadow)
- [castGI](SkinnedMeshRenderer.md#castgi)
- [castReflection](SkinnedMeshRenderer.md#castreflection)
- [skeletonAnimation](SkinnedMeshRenderer.md#skeletonanimation)
- [skinInverseBindMatrices](SkinnedMeshRenderer.md#skininversebindmatrices)
- [inverseBindMatrixBuffer](SkinnedMeshRenderer.md#inversebindmatrixbuffer)
- [jointIndexTableBuffer](SkinnedMeshRenderer.md#jointindextablebuffer)

### Methods

- [stop](SkinnedMeshRenderer.md#stop)
- [onUpdate](SkinnedMeshRenderer.md#onupdate)
- [onLateUpdate](SkinnedMeshRenderer.md#onlateupdate)
- [onBeforeUpdate](SkinnedMeshRenderer.md#onbeforeupdate)
- [onGraphic](SkinnedMeshRenderer.md#ongraphic)
- [onParentChange](SkinnedMeshRenderer.md#onparentchange)
- [onDisable](SkinnedMeshRenderer.md#ondisable)
- [copyComponent](SkinnedMeshRenderer.md#copycomponent)
- [setMorphInfluence](SkinnedMeshRenderer.md#setmorphinfluence)
- [setMorphInfluenceIndex](SkinnedMeshRenderer.md#setmorphinfluenceindex)
- [onCompute](SkinnedMeshRenderer.md#oncompute)
- [destroy](SkinnedMeshRenderer.md#destroy)
- [init](SkinnedMeshRenderer.md#init)
- [addMask](SkinnedMeshRenderer.md#addmask)
- [removeMask](SkinnedMeshRenderer.md#removemask)
- [hasMask](SkinnedMeshRenderer.md#hasmask)
- [addRendererMask](SkinnedMeshRenderer.md#addrenderermask)
- [removeRendererMask](SkinnedMeshRenderer.md#removerenderermask)
- [selfCloneMaterials](SkinnedMeshRenderer.md#selfclonematerials)
- [renderPass](SkinnedMeshRenderer.md#renderpass)
- [renderPass2](SkinnedMeshRenderer.md#renderpass2)
- [recordRenderPass2](SkinnedMeshRenderer.md#recordrenderpass2)
- [beforeDestroy](SkinnedMeshRenderer.md#beforedestroy)
- [start](SkinnedMeshRenderer.md#start)
- [onEnable](SkinnedMeshRenderer.md#onenable)
- [cloneTo](SkinnedMeshRenderer.md#cloneto)

## Constructors

### constructor

• **new SkinnedMeshRenderer**()

#### Overrides

[MeshRenderer](MeshRenderer.md).[constructor](MeshRenderer.md#constructor)

#### Defined in

[src/components/renderer/SkinnedMeshRenderer.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer.ts#L26)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

[MeshRenderer](MeshRenderer.md).[object3D](MeshRenderer.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

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

[src/components/renderer/RenderNode.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L30)

___

### lodLevel

• **lodLevel**: `number` = `0`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[lodLevel](MeshRenderer.md#lodlevel)

#### Defined in

[src/components/renderer/RenderNode.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L31)

___

### alwaysRender

• **alwaysRender**: `boolean` = `false`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[alwaysRender](MeshRenderer.md#alwaysrender)

#### Defined in

[src/components/renderer/RenderNode.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L32)

___

### instanceID

• **instanceID**: `string`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[instanceID](MeshRenderer.md#instanceid)

#### Defined in

[src/components/renderer/RenderNode.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L33)

___

### drawType

• **drawType**: `number` = `0`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[drawType](MeshRenderer.md#drawtype)

#### Defined in

[src/components/renderer/RenderNode.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L34)

___

### isRenderOrderChange

• `Optional` **isRenderOrderChange**: `boolean`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[isRenderOrderChange](MeshRenderer.md#isrenderorderchange)

#### Defined in

[src/components/renderer/RenderNode.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L49)

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[needSortOnCameraZ](MeshRenderer.md#needsortoncameraz)

#### Defined in

[src/components/renderer/RenderNode.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L50)

___

### preInit

• **preInit**: `boolean` = `false`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[preInit](MeshRenderer.md#preinit)

#### Defined in

[src/components/renderer/RenderNode.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L52)

___

### skinJointsName

• **skinJointsName**: `string`[]

#### Defined in

[src/components/renderer/SkinnedMeshRenderer.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer.ts#L20)

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

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

MeshRenderer.transform

#### Defined in

[src/components/ComponentBase.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L43)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

MeshRenderer.enable

#### Defined in

[src/components/ComponentBase.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L64)

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

[src/components/ComponentBase.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L50)

___

### geometry

• `get` **geometry**(): [`GeometryBase`](GeometryBase.md)

The geometry of the mesh determines its shape

#### Returns

[`GeometryBase`](GeometryBase.md)

#### Inherited from

MeshRenderer.geometry

#### Defined in

[src/components/renderer/MeshRenderer.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L50)

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

[src/components/renderer/MeshRenderer.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L55)

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

[src/components/renderer/RenderNode.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L73)

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

[src/components/renderer/RenderNode.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L77)

___

### rendererMask

• `get` **rendererMask**(): `number`

#### Returns

`number`

#### Inherited from

MeshRenderer.rendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L111)

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

[src/components/renderer/RenderNode.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L115)

___

### materials

• `get` **materials**(): `MaterialBase`[]

#### Returns

`MaterialBase`[]

#### Inherited from

MeshRenderer.materials

#### Defined in

[src/components/renderer/RenderNode.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L119)

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

[src/components/renderer/RenderNode.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L124)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.castShadow

#### Defined in

[src/components/renderer/RenderNode.ts:268](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L268)

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

[src/components/renderer/RenderNode.ts:273](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L273)

___

### castGI

• `get` **castGI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.castGI

#### Defined in

[src/components/renderer/RenderNode.ts:278](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L278)

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

[src/components/renderer/RenderNode.ts:283](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L283)

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.castReflection

#### Defined in

[src/components/renderer/RenderNode.ts:288](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L288)

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

[src/components/renderer/RenderNode.ts:292](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L292)

___

### skeletonAnimation

• `get` **skeletonAnimation**(): [`SkeletonAnimationComponent`](SkeletonAnimationComponent.md)

#### Returns

[`SkeletonAnimationComponent`](SkeletonAnimationComponent.md)

#### Defined in

[src/components/renderer/SkinnedMeshRenderer.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer.ts#L49)

• `set` **skeletonAnimation**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`SkeletonAnimationComponent`](SkeletonAnimationComponent.md) |

#### Returns

`void`

#### Defined in

[src/components/renderer/SkinnedMeshRenderer.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer.ts#L53)

___

### skinInverseBindMatrices

• `get` **skinInverseBindMatrices**(): `Float32Array`[]

#### Returns

`Float32Array`[]

#### Defined in

[src/components/renderer/SkinnedMeshRenderer.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer.ts#L66)

• `set` **skinInverseBindMatrices**(`inverseBindMatrices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inverseBindMatrices` | `Float32Array`[] |

#### Returns

`void`

#### Defined in

[src/components/renderer/SkinnedMeshRenderer.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer.ts#L70)

___

### inverseBindMatrixBuffer

• `get` **inverseBindMatrixBuffer**(): [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

[src/components/renderer/SkinnedMeshRenderer.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer.ts#L82)

___

### jointIndexTableBuffer

• `get` **jointIndexTableBuffer**(): `GPUBuffer`

#### Returns

`GPUBuffer`

#### Defined in

[src/components/renderer/SkinnedMeshRenderer.ts:86](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer.ts#L86)

## Methods

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[stop](MeshRenderer.md#stop)

#### Defined in

[src/components/ComponentBase.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L110)

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

[src/components/ComponentBase.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

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

[src/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L114)

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

[src/components/ComponentBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L115)

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

[src/components/ComponentBase.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L117)

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

[src/components/ComponentBase.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L118)

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

### copyComponent

▸ **copyComponent**(`from`): [`SkinnedMeshRenderer`](SkinnedMeshRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`SkinnedMeshRenderer`](SkinnedMeshRenderer.md) |

#### Returns

[`SkinnedMeshRenderer`](SkinnedMeshRenderer.md)

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

### init

▸ **init**(): `void`

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[init](MeshRenderer.md#init)

#### Defined in

[src/components/renderer/RenderNode.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L54)

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

[src/components/renderer/RenderNode.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L99)

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

[src/components/renderer/RenderNode.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L103)

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

[src/components/renderer/RenderNode.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L107)

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

[src/components/renderer/RenderNode.ts:155](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L155)

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

[src/components/renderer/RenderNode.ts:159](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L159)

___

### selfCloneMaterials

▸ **selfCloneMaterials**(`key`): [`SkinnedMeshRenderer`](SkinnedMeshRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`SkinnedMeshRenderer`](SkinnedMeshRenderer.md)

#### Inherited from

[MeshRenderer](MeshRenderer.md).[selfCloneMaterials](MeshRenderer.md#selfclonematerials)

#### Defined in

[src/components/renderer/RenderNode.ts:174](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L174)

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

[src/components/renderer/RenderNode.ts:296](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L296)

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

[src/components/renderer/RenderNode.ts:349](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L349)

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

[src/components/renderer/RenderNode.ts:394](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L394)

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

[src/components/renderer/RenderNode.ts:505](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L505)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[MeshRenderer](MeshRenderer.md).[start](MeshRenderer.md#start)

#### Defined in

[src/components/renderer/SkinnedMeshRenderer.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer.ts#L31)

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[MeshRenderer](MeshRenderer.md).[onEnable](MeshRenderer.md#onenable)

#### Defined in

[src/components/renderer/SkinnedMeshRenderer.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer.ts#L45)

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

[src/components/renderer/SkinnedMeshRenderer.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer.ts#L90)
