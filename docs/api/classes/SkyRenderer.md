# Class: SkyRenderer

Sky Box Renderer Component

## Hierarchy

- [`MeshRenderer`](MeshRenderer.md)

  ↳ **`SkyRenderer`**

  ↳↳ [`AtmosphericComponent`](AtmosphericComponent.md)

### Properties

- [object3D](SkyRenderer.md#object3d)
- [receiveShadow](SkyRenderer.md#receiveshadow)
- [instanceCount](SkyRenderer.md#instancecount)
- [lodLevel](SkyRenderer.md#lodlevel)
- [alwaysRender](SkyRenderer.md#alwaysrender)
- [instanceID](SkyRenderer.md#instanceid)
- [drawType](SkyRenderer.md#drawtype)
- [isRenderOrderChange](SkyRenderer.md#isrenderorderchange)
- [needSortOnCameraZ](SkyRenderer.md#needsortoncameraz)
- [skyMaterial](SkyRenderer.md#skymaterial)

### Accessors

- [transform](SkyRenderer.md#transform)
- [enable](SkyRenderer.md#enable)
- [geometry](SkyRenderer.md#geometry)
- [material](SkyRenderer.md#material)
- [renderOrder](SkyRenderer.md#renderorder)
- [rendererMask](SkyRenderer.md#renderermask)
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
- [setMorphInfluence](SkyRenderer.md#setmorphinfluence)
- [setMorphInfluenceIndex](SkyRenderer.md#setmorphinfluenceindex)
- [onCompute](SkyRenderer.md#oncompute)
- [destroy](SkyRenderer.md#destroy)
- [cloneTo](SkyRenderer.md#cloneto)
- [addMask](SkyRenderer.md#addmask)
- [removeMask](SkyRenderer.md#removemask)
- [hasMask](SkyRenderer.md#hasmask)
- [addRendererMask](SkyRenderer.md#addrenderermask)
- [removeRendererMask](SkyRenderer.md#removerenderermask)
- [selfCloneMaterials](SkyRenderer.md#selfclonematerials)
- [renderPass](SkyRenderer.md#renderpass)
- [recordRenderPass2](SkyRenderer.md#recordrenderpass2)
- [init](SkyRenderer.md#init)
- [onEnable](SkyRenderer.md#onenable)
- [onDisable](SkyRenderer.md#ondisable)
- [renderPass2](SkyRenderer.md#renderpass2)

### Constructors

- [constructor](SkyRenderer.md#constructor)

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

[src/components/renderer/RenderNode.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L28)

___

### lodLevel

• **lodLevel**: `number` = `0`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[lodLevel](MeshRenderer.md#lodlevel)

#### Defined in

[src/components/renderer/RenderNode.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L29)

___

### alwaysRender

• **alwaysRender**: `boolean` = `false`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[alwaysRender](MeshRenderer.md#alwaysrender)

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

### isRenderOrderChange

• `Optional` **isRenderOrderChange**: `boolean`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[isRenderOrderChange](MeshRenderer.md#isrenderorderchange)

#### Defined in

[src/components/renderer/RenderNode.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L46)

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[needSortOnCameraZ](MeshRenderer.md#needsortoncameraz)

#### Defined in

[src/components/renderer/RenderNode.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L47)

___

### skyMaterial

• **skyMaterial**: `SkyMaterial`

The material used in the Sky Box.

#### Defined in

[src/components/renderer/SkyRenderer.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L25)

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

[src/components/renderer/MeshRenderer.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L39)

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

[src/components/renderer/MeshRenderer.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L43)

___

### material

• `get` **material**(): `MaterialBase`

material

#### Returns

`MaterialBase`

#### Inherited from

MeshRenderer.material

#### Defined in

[src/components/renderer/MeshRenderer.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L69)

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

[src/components/renderer/MeshRenderer.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L73)

___

### renderOrder

• `get` **renderOrder**(): `number`

#### Returns

`number`

#### Inherited from

MeshRenderer.renderOrder

#### Defined in

[src/components/renderer/RenderNode.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L54)

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

[src/components/renderer/RenderNode.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L58)

___

### rendererMask

• `get` **rendererMask**(): `number`

#### Returns

`number`

#### Inherited from

MeshRenderer.rendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L91)

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

[src/components/renderer/RenderNode.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L95)

___

### materials

• `get` **materials**(): `MaterialBase`[]

#### Returns

`MaterialBase`[]

#### Inherited from

MeshRenderer.materials

#### Defined in

[src/components/renderer/RenderNode.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L99)

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

[src/components/renderer/RenderNode.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L103)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.castShadow

#### Defined in

[src/components/renderer/RenderNode.ts:248](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L248)

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

[src/components/renderer/RenderNode.ts:252](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L252)

___

### castGI

• `get` **castGI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.castGI

#### Defined in

[src/components/renderer/RenderNode.ts:256](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L256)

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

[src/components/renderer/RenderNode.ts:260](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L260)

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.castReflection

#### Defined in

[src/components/renderer/RenderNode.ts:264](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L264)

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

[src/components/renderer/RenderNode.ts:268](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L268)

___

### map

• `get` **map**(): [`Texture`](Texture.md)

get environment texture

#### Returns

[`Texture`](Texture.md)

#### Defined in

[src/components/renderer/SkyRenderer.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L82)

• `set` **map**(`texture`): `void`

set environment texture

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

[src/components/renderer/SkyRenderer.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L71)

___

### exposure

• `get` **exposure**(): `number`

#### Returns

`number`

#### Defined in

[src/components/renderer/SkyRenderer.ts:86](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L86)

• `set` **exposure**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/renderer/SkyRenderer.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L90)

___

### roughness

• `get` **roughness**(): `number`

#### Returns

`number`

#### Defined in

[src/components/renderer/SkyRenderer.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L95)

• `set` **roughness**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/renderer/SkyRenderer.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L99)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[start](MeshRenderer.md#start)

#### Defined in

[src/components/ComponentBase.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L107)

___

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

[src/components/ComponentBase.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L116)

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

#### Inherited from

[MeshRenderer](MeshRenderer.md).[setMorphInfluenceIndex](MeshRenderer.md#setmorphinfluenceindex)

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

#### Inherited from

[MeshRenderer](MeshRenderer.md).[onCompute](MeshRenderer.md#oncompute)

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

#### Inherited from

[MeshRenderer](MeshRenderer.md).[destroy](MeshRenderer.md#destroy)

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

#### Inherited from

[MeshRenderer](MeshRenderer.md).[cloneTo](MeshRenderer.md#cloneto)

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

[MeshRenderer](MeshRenderer.md).[addMask](MeshRenderer.md#addmask)

#### Defined in

[src/components/renderer/RenderNode.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L79)

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

[src/components/renderer/RenderNode.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L83)

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

[src/components/renderer/RenderNode.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L87)

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

[src/components/renderer/RenderNode.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L135)

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

[src/components/renderer/RenderNode.ts:139](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L139)

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

[src/components/renderer/RenderNode.ts:155](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L155)

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

[src/components/renderer/RenderNode.ts:272](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L272)

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

[src/components/renderer/RenderNode.ts:365](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L365)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

[MeshRenderer](MeshRenderer.md).[init](MeshRenderer.md#init)

#### Defined in

[src/components/renderer/SkyRenderer.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L35)

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[MeshRenderer](MeshRenderer.md).[onEnable](MeshRenderer.md#onenable)

#### Defined in

[src/components/renderer/SkyRenderer.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L42)

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Overrides

[MeshRenderer](MeshRenderer.md).[onDisable](MeshRenderer.md#ondisable)

#### Defined in

[src/components/renderer/SkyRenderer.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L55)

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

#### Overrides

[MeshRenderer](MeshRenderer.md).[renderPass2](MeshRenderer.md#renderpass2)

#### Defined in

[src/components/renderer/SkyRenderer.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L62)

## Constructors

### constructor

• **new SkyRenderer**()

#### Overrides

[MeshRenderer](MeshRenderer.md).[constructor](MeshRenderer.md#constructor)

#### Defined in

[src/components/renderer/SkyRenderer.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L27)
