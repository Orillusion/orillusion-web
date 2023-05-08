# Class: MeshRenderer

The mesh renderer component is a component used to render the mesh

## Hierarchy

- `RenderNode`

  ↳ **`MeshRenderer`**

  ↳↳ [`SkinnedMeshRenderer`](SkinnedMeshRenderer.md)

  ↳↳ [`SkyRenderer`](SkyRenderer.md)


### Properties

- [object3D](MeshRenderer.md#object3d)
- [receiveShadow](MeshRenderer.md#receiveshadow)
- [instanceCount](MeshRenderer.md#instancecount)
- [lodLevel](MeshRenderer.md#lodlevel)
- [alwaysRender](MeshRenderer.md#alwaysrender)
- [renderOrder](MeshRenderer.md#renderorder)
- [instanceID](MeshRenderer.md#instanceid)
- [drawType](MeshRenderer.md#drawtype)

### Accessors

- [transform](MeshRenderer.md#transform)
- [enable](MeshRenderer.md#enable)
- [geometry](MeshRenderer.md#geometry)
- [material](MeshRenderer.md#material)
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
- [destroy](MeshRenderer.md#destroy)
- [onEnable](MeshRenderer.md#onenable)
- [onDisable](MeshRenderer.md#ondisable)
- [setMorphInfluence](MeshRenderer.md#setmorphinfluence)
- [setMorphInfluenceIndex](MeshRenderer.md#setmorphinfluenceindex)
- [onCompute](MeshRenderer.md#oncompute)
- [cloneTo](MeshRenderer.md#cloneto)
- [drawWireFrame](MeshRenderer.md#drawwireframe)
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

### Constructors

- [constructor](MeshRenderer.md#constructor)

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

[src/components/renderer/MeshRenderer.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L20)

___

### instanceCount

• **instanceCount**: `number` = `0`

#### Inherited from

RenderNode.instanceCount

#### Defined in

[src/components/renderer/RenderNode.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L27)

___

### lodLevel

• **lodLevel**: `number` = `0`

#### Inherited from

RenderNode.lodLevel

#### Defined in

[src/components/renderer/RenderNode.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L28)

___

### alwaysRender

• **alwaysRender**: `boolean` = `false`

#### Inherited from

RenderNode.alwaysRender

#### Defined in

[src/components/renderer/RenderNode.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L29)

___

### renderOrder

• **renderOrder**: `number` = `0`

#### Inherited from

RenderNode.renderOrder

#### Defined in

[src/components/renderer/RenderNode.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L30)

___

### instanceID

• **instanceID**: `string`

#### Inherited from

RenderNode.instanceID

#### Defined in

[src/components/renderer/RenderNode.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L31)

___

### drawType

• **drawType**: `number` = `0`

#### Inherited from

RenderNode.drawType

#### Defined in

[src/components/renderer/RenderNode.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L32)

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

[src/components/renderer/MeshRenderer.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L38)

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

[src/components/renderer/MeshRenderer.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L42)

___

### material

• `get` **material**(): `MaterialBase`

material

#### Returns

`MaterialBase`

#### Defined in

[src/components/renderer/MeshRenderer.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L68)

• `set` **material**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MaterialBase` |

#### Returns

`void`

#### Defined in

[src/components/renderer/MeshRenderer.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L72)

___

### rendererMask

• `get` **rendererMask**(): `number`

#### Returns

`number`

#### Inherited from

RenderNode.rendererMask

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

RenderNode.rendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L75)

___

### materials

• `get` **materials**(): `MaterialBase`[]

#### Returns

`MaterialBase`[]

#### Inherited from

RenderNode.materials

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

RenderNode.materials

#### Defined in

[src/components/renderer/RenderNode.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L83)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.castShadow

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

RenderNode.castShadow

#### Defined in

[src/components/renderer/RenderNode.ts:223](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L223)

___

### castGI

• `get` **castGI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.castGI

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

RenderNode.castGI

#### Defined in

[src/components/renderer/RenderNode.ts:231](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L231)

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.castReflection

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

RenderNode.castReflection

#### Defined in

[src/components/renderer/RenderNode.ts:239](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L239)

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

### destroy

▸ **destroy**(): `void`

release this component

#### Returns

`void`

#### Inherited from

RenderNode.destroy

#### Defined in

[src/components/ComponentBase.ts:189](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L189)

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Overrides

RenderNode.onEnable

#### Defined in

[src/components/renderer/MeshRenderer.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L27)

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Overrides

RenderNode.onDisable

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

#### Overrides

RenderNode.onCompute

#### Defined in

[src/components/renderer/MeshRenderer.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L97)

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

[src/components/renderer/MeshRenderer.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L128)

___

### drawWireFrame

▸ **drawWireFrame**(): `void`

#### Returns

`void`

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

RenderNode.addMask

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

RenderNode.removeMask

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

RenderNode.hasMask

#### Defined in

[src/components/renderer/RenderNode.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L67)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Inherited from

RenderNode.init

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

RenderNode.addRendererMask

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

RenderNode.removeRendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L110)

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

RenderNode.renderPass

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

RenderNode.renderPass2

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

RenderNode.recordRenderPass2

#### Defined in

[src/components/renderer/RenderNode.ts:328](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L328)

## Constructors

### constructor

• **new MeshRenderer**()

#### Overrides

RenderNode.constructor

#### Defined in

[src/components/renderer/MeshRenderer.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L23)
