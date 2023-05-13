# Class: SkinnedMeshRenderer

Skin Mesh Renderer Component
Renders a deformable mesh.
Deformable meshes include skin meshes (meshes with bones and bound poses),
meshes with mixed shapes, and meshes running cloth simulations.

## Hierarchy

- [`MeshRenderer`](MeshRenderer.md)

  ↳ **`SkinnedMeshRenderer`**


### Properties

- [object3D](SkinnedMeshRenderer.md#object3d)
- [receiveShadow](SkinnedMeshRenderer.md#receiveshadow)
- [instanceCount](SkinnedMeshRenderer.md#instancecount)
- [lodLevel](SkinnedMeshRenderer.md#lodlevel)
- [alwaysRender](SkinnedMeshRenderer.md#alwaysrender)
- [renderOrder](SkinnedMeshRenderer.md#renderorder)
- [instanceID](SkinnedMeshRenderer.md#instanceid)
- [drawType](SkinnedMeshRenderer.md#drawtype)
- [skinJointsName](SkinnedMeshRenderer.md#skinjointsname)

### Accessors

- [transform](SkinnedMeshRenderer.md#transform)
- [enable](SkinnedMeshRenderer.md#enable)
- [geometry](SkinnedMeshRenderer.md#geometry)
- [material](SkinnedMeshRenderer.md#material)
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
- [destroy](SkinnedMeshRenderer.md#destroy)
- [onDisable](SkinnedMeshRenderer.md#ondisable)
- [setMorphInfluence](SkinnedMeshRenderer.md#setmorphinfluence)
- [setMorphInfluenceIndex](SkinnedMeshRenderer.md#setmorphinfluenceindex)
- [onCompute](SkinnedMeshRenderer.md#oncompute)
- [drawWireFrame](SkinnedMeshRenderer.md#drawwireframe)
- [addMask](SkinnedMeshRenderer.md#addmask)
- [removeMask](SkinnedMeshRenderer.md#removemask)
- [hasMask](SkinnedMeshRenderer.md#hasmask)
- [init](SkinnedMeshRenderer.md#init)
- [addRendererMask](SkinnedMeshRenderer.md#addrenderermask)
- [removeRendererMask](SkinnedMeshRenderer.md#removerenderermask)
- [selfCloneMaterials](SkinnedMeshRenderer.md#selfclonematerials)
- [renderPass](SkinnedMeshRenderer.md#renderpass)
- [renderPass2](SkinnedMeshRenderer.md#renderpass2)
- [recordRenderPass2](SkinnedMeshRenderer.md#recordrenderpass2)
- [start](SkinnedMeshRenderer.md#start)
- [onEnable](SkinnedMeshRenderer.md#onenable)
- [cloneTo](SkinnedMeshRenderer.md#cloneto)

### Constructors

- [constructor](SkinnedMeshRenderer.md#constructor)

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

[src/components/renderer/MeshRenderer.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L20)

___

### instanceCount

• **instanceCount**: `number` = `0`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[instanceCount](MeshRenderer.md#instancecount)

#### Defined in

[src/components/renderer/RenderNode.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L27)

___

### lodLevel

• **lodLevel**: `number` = `0`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[lodLevel](MeshRenderer.md#lodlevel)

#### Defined in

[src/components/renderer/RenderNode.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L28)

___

### alwaysRender

• **alwaysRender**: `boolean` = `false`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[alwaysRender](MeshRenderer.md#alwaysrender)

#### Defined in

[src/components/renderer/RenderNode.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L29)

___

### renderOrder

• **renderOrder**: `number` = `0`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[renderOrder](MeshRenderer.md#renderorder)

#### Defined in

[src/components/renderer/RenderNode.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L30)

___

### instanceID

• **instanceID**: `string`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[instanceID](MeshRenderer.md#instanceid)

#### Defined in

[src/components/renderer/RenderNode.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L31)

___

### drawType

• **drawType**: `number` = `0`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[drawType](MeshRenderer.md#drawtype)

#### Defined in

[src/components/renderer/RenderNode.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L32)

___

### skinJointsName

• **skinJointsName**: `string`[]

#### Defined in

[src/components/renderer/SkinnedMeshRenderer.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer.ts#L20)

## Accessors

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

MeshRenderer.transform

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

MeshRenderer.enable

#### Defined in

[src/components/ComponentBase.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L59)

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

[src/components/ComponentBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L45)

___

### geometry

• `get` **geometry**(): [`GeometryBase`](GeometryBase.md)

The geometry of the mesh determines its shape

#### Returns

[`GeometryBase`](GeometryBase.md)

#### Inherited from

MeshRenderer.geometry

#### Defined in

[src/components/renderer/MeshRenderer.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L38)

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

[src/components/renderer/MeshRenderer.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L42)

___

### material

• `get` **material**(): `MaterialBase`

material

#### Returns

`MaterialBase`

#### Inherited from

MeshRenderer.material

#### Defined in

[src/components/renderer/MeshRenderer.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L68)

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

[src/components/renderer/MeshRenderer.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L72)

___

### rendererMask

• `get` **rendererMask**(): `number`

#### Returns

`number`

#### Inherited from

MeshRenderer.rendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L71)

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

[src/components/renderer/RenderNode.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L75)

___

### materials

• `get` **materials**(): `MaterialBase`[]

#### Returns

`MaterialBase`[]

#### Inherited from

MeshRenderer.materials

#### Defined in

[src/components/renderer/RenderNode.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L79)

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

[src/components/renderer/RenderNode.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L83)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.castShadow

#### Defined in

[src/components/renderer/RenderNode.ts:219](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L219)

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

[src/components/renderer/RenderNode.ts:223](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L223)

___

### castGI

• `get` **castGI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.castGI

#### Defined in

[src/components/renderer/RenderNode.ts:227](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L227)

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

[src/components/renderer/RenderNode.ts:231](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L231)

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.castReflection

#### Defined in

[src/components/renderer/RenderNode.ts:235](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L235)

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

[src/components/renderer/RenderNode.ts:239](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L239)

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

[src/components/ComponentBase.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L108)

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

[src/components/ComponentBase.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L111)

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

[src/components/ComponentBase.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L112)

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

[src/components/ComponentBase.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

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

[src/components/ComponentBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L115)

___

### destroy

▸ **destroy**(): `void`

release this component

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[destroy](MeshRenderer.md#destroy)

#### Defined in

[src/components/ComponentBase.ts:189](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L189)

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[onDisable](MeshRenderer.md#ondisable)

#### Defined in

[src/components/renderer/MeshRenderer.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L31)

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

[src/components/renderer/MeshRenderer.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L79)

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

[src/components/renderer/MeshRenderer.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L88)

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

[src/components/renderer/MeshRenderer.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L97)

___

### drawWireFrame

▸ **drawWireFrame**(): `void`

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[drawWireFrame](MeshRenderer.md#drawwireframe)

#### Defined in

[src/components/renderer/MeshRenderer.ts:138](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L138)

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

[src/components/renderer/RenderNode.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L59)

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

[src/components/renderer/RenderNode.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L63)

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

[src/components/renderer/RenderNode.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L67)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[init](MeshRenderer.md#init)

#### Defined in

[src/components/renderer/RenderNode.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L101)

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

[src/components/renderer/RenderNode.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L106)

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

[src/components/renderer/RenderNode.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L110)

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

[src/components/renderer/RenderNode.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L126)

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

[src/components/renderer/RenderNode.ts:243](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L243)

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

[src/components/renderer/RenderNode.ts:291](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L291)

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

[src/components/renderer/RenderNode.ts:328](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L328)

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

## Constructors

### constructor

• **new SkinnedMeshRenderer**()

#### Overrides

[MeshRenderer](MeshRenderer.md).[constructor](MeshRenderer.md#constructor)

#### Defined in

[src/components/renderer/SkinnedMeshRenderer.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkinnedMeshRenderer.ts#L26)
