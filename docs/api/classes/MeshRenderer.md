# Class: MeshRenderer

The mesh renderer component is a component used to render the mesh

## Hierarchy

- `RenderNode`

  ↳ **`MeshRenderer`**

  ↳↳ [`GUIRenderer`](GUIRenderer.md)

  ↳↳ [`SkinnedMeshRenderer`](SkinnedMeshRenderer.md)

  ↳↳ [`SkyRenderer`](SkyRenderer.md)

### Constructors

- [constructor](MeshRenderer.md#constructor)

### Properties

- [object3D](MeshRenderer.md#object3d)
- [receiveShadow](MeshRenderer.md#receiveshadow)
- [instanceCount](MeshRenderer.md#instancecount)
- [lodLevel](MeshRenderer.md#lodlevel)
- [alwaysRender](MeshRenderer.md#alwaysrender)
- [instanceID](MeshRenderer.md#instanceid)
- [drawType](MeshRenderer.md#drawtype)
- [isRenderOrderChange](MeshRenderer.md#isrenderorderchange)
- [needSortOnCameraZ](MeshRenderer.md#needsortoncameraz)

### Accessors

- [transform](MeshRenderer.md#transform)
- [enable](MeshRenderer.md#enable)
- [geometry](MeshRenderer.md#geometry)
- [material](MeshRenderer.md#material)
- [renderOrder](MeshRenderer.md#renderorder)
- [rendererMask](MeshRenderer.md#renderermask)
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
- [onEnable](MeshRenderer.md#onenable)
- [onDisable](MeshRenderer.md#ondisable)
- [setMorphInfluence](MeshRenderer.md#setmorphinfluence)
- [setMorphInfluenceIndex](MeshRenderer.md#setmorphinfluenceindex)
- [onCompute](MeshRenderer.md#oncompute)
- [destroy](MeshRenderer.md#destroy)
- [cloneTo](MeshRenderer.md#cloneto)
- [addMask](MeshRenderer.md#addmask)
- [removeMask](MeshRenderer.md#removemask)
- [hasMask](MeshRenderer.md#hasmask)
- [init](MeshRenderer.md#init)
- [addRendererMask](MeshRenderer.md#addrenderermask)
- [removeRendererMask](MeshRenderer.md#removerenderermask)
- [selfCloneMaterials](MeshRenderer.md#selfclonematerials)
- [renderPass](MeshRenderer.md#renderpass)
- [renderPass2](MeshRenderer.md#renderpass2)
- [recordRenderPass2](MeshRenderer.md#recordrenderpass2)

## Constructors

### constructor

• **new MeshRenderer**()

#### Overrides

RenderNode.constructor

#### Defined in

[src/components/renderer/MeshRenderer.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L24)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

RenderNode.object3D

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### receiveShadow

• **receiveShadow**: `boolean`

Enabling this option allows the grid to display any shadows cast on the grid.

#### Defined in

[src/components/renderer/MeshRenderer.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L21)

___

### instanceCount

• **instanceCount**: `number` = `0`

#### Inherited from

RenderNode.instanceCount

#### Defined in

[src/components/renderer/RenderNode.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L29)

___

### lodLevel

• **lodLevel**: `number` = `0`

#### Inherited from

RenderNode.lodLevel

#### Defined in

[src/components/renderer/RenderNode.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L30)

___

### alwaysRender

• **alwaysRender**: `boolean` = `false`

#### Inherited from

RenderNode.alwaysRender

#### Defined in

[src/components/renderer/RenderNode.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L31)

___

### instanceID

• **instanceID**: `string`

#### Inherited from

RenderNode.instanceID

#### Defined in

[src/components/renderer/RenderNode.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L32)

___

### drawType

• **drawType**: `number` = `0`

#### Inherited from

RenderNode.drawType

#### Defined in

[src/components/renderer/RenderNode.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L33)

___

### isRenderOrderChange

• `Optional` **isRenderOrderChange**: `boolean`

#### Inherited from

RenderNode.isRenderOrderChange

#### Defined in

[src/components/renderer/RenderNode.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L47)

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Inherited from

RenderNode.needSortOnCameraZ

#### Defined in

[src/components/renderer/RenderNode.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L48)

## Accessors

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

RenderNode.transform

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

RenderNode.enable

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

RenderNode.enable

#### Defined in

[src/components/ComponentBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L45)

___

### geometry

• `get` **geometry**(): [`GeometryBase`](GeometryBase.md)

The geometry of the mesh determines its shape

#### Returns

[`GeometryBase`](GeometryBase.md)

#### Overrides

RenderNode.geometry

#### Defined in

[src/components/renderer/MeshRenderer.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L39)

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

[src/components/renderer/MeshRenderer.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L43)

___

### material

• `get` **material**(): `MaterialBase`

material

#### Returns

`MaterialBase`

#### Defined in

[src/components/renderer/MeshRenderer.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L69)

• `set` **material**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MaterialBase` |

#### Returns

`void`

#### Defined in

[src/components/renderer/MeshRenderer.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L73)

___

### renderOrder

• `get` **renderOrder**(): `number`

#### Returns

`number`

#### Inherited from

RenderNode.renderOrder

#### Defined in

[src/components/renderer/RenderNode.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L55)

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

[src/components/renderer/RenderNode.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L59)

___

### rendererMask

• `get` **rendererMask**(): `number`

#### Returns

`number`

#### Inherited from

RenderNode.rendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L92)

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

[src/components/renderer/RenderNode.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L96)

___

### materials

• `get` **materials**(): `MaterialBase`[]

#### Returns

`MaterialBase`[]

#### Inherited from

RenderNode.materials

#### Defined in

[src/components/renderer/RenderNode.ts:100](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L100)

• `set` **materials**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MaterialBase`[] |

#### Returns

`void`

#### Inherited from

RenderNode.materials

#### Defined in

[src/components/renderer/RenderNode.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L104)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.castShadow

#### Defined in

[src/components/renderer/RenderNode.ts:249](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L249)

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

[src/components/renderer/RenderNode.ts:253](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L253)

___

### castGI

• `get` **castGI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.castGI

#### Defined in

[src/components/renderer/RenderNode.ts:257](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L257)

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

[src/components/renderer/RenderNode.ts:261](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L261)

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.castReflection

#### Defined in

[src/components/renderer/RenderNode.ts:265](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L265)

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

[src/components/renderer/RenderNode.ts:269](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L269)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

RenderNode.start

#### Defined in

[src/components/ComponentBase.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L107)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

RenderNode.stop

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

RenderNode.onUpdate

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

RenderNode.onLateUpdate

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

RenderNode.onBeforeUpdate

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

RenderNode.onGraphic

#### Defined in

[src/components/ComponentBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L115)

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

RenderNode.onParentChange

#### Defined in

[src/components/ComponentBase.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L116)

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Overrides

RenderNode.onEnable

#### Defined in

[src/components/renderer/MeshRenderer.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L28)

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Overrides

RenderNode.onDisable

#### Defined in

[src/components/renderer/MeshRenderer.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L32)

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

[src/components/renderer/MeshRenderer.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L80)

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

[src/components/renderer/MeshRenderer.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L89)

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

[src/components/renderer/MeshRenderer.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L98)

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

[src/components/renderer/MeshRenderer.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L128)

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

[src/components/renderer/MeshRenderer.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L132)

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

[src/components/renderer/RenderNode.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L80)

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

[src/components/renderer/RenderNode.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L84)

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

[src/components/renderer/RenderNode.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L88)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Inherited from

RenderNode.init

#### Defined in

[src/components/renderer/RenderNode.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L131)

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

[src/components/renderer/RenderNode.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L136)

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

[src/components/renderer/RenderNode.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L140)

___

### selfCloneMaterials

▸ **selfCloneMaterials**(`key`): [`MeshRenderer`](MeshRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`MeshRenderer`](MeshRenderer.md)

#### Inherited from

RenderNode.selfCloneMaterials

#### Defined in

[src/components/renderer/RenderNode.ts:156](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L156)

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

RenderNode.renderPass

#### Defined in

[src/components/renderer/RenderNode.ts:273](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L273)

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

RenderNode.renderPass2

#### Defined in

[src/components/renderer/RenderNode.ts:324](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L324)

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

RenderNode.recordRenderPass2

#### Defined in

[src/components/renderer/RenderNode.ts:366](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L366)
