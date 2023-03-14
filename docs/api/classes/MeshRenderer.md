# Class: MeshRenderer

网格渲染器组件，是用于把网格渲染出来的组件

## Hierarchy

- `RenderNode`

  ↳ **`MeshRenderer`**

  ↳↳ [`SkinnedMeshRenderer`](SkinnedMeshRenderer.md)

  ↳↳ [`SkyRenderer`](SkyRenderer.md)

  ↳↳ [`GUIMeshRenderer`](GUIMeshRenderer.md)

  ↳↳ [`ParticleSystem`](ParticleSystem.md)


### Properties

- [object3D](MeshRenderer.md#object3d)
- [serializeTag](MeshRenderer.md#serializetag)
- [receiveShadow](MeshRenderer.md#receiveshadow)
- [instanceCount](MeshRenderer.md#instancecount)
- [lodLevel](MeshRenderer.md#lodlevel)
- [alwaysRender](MeshRenderer.md#alwaysrender)
- [\_geometry](MeshRenderer.md#_geometry)
- [renderOrder](MeshRenderer.md#renderorder)
- [instanceID](MeshRenderer.md#instanceid)
- [useCustomDraw](MeshRenderer.md#usecustomdraw)

### Accessors

- [transform](MeshRenderer.md#transform)
- [enable](MeshRenderer.md#enable)
- [geometry](MeshRenderer.md#geometry)
- [material](MeshRenderer.md#material)
- [rendererMask](MeshRenderer.md#renderermask)
- [materials](MeshRenderer.md#materials)
- [castShadow](MeshRenderer.md#castshadow)
- [castGI](MeshRenderer.md#castgi)

### Methods

- [onVisible](MeshRenderer.md#onvisible)
- [destroy](MeshRenderer.md#destroy)
- [onUpdate](MeshRenderer.md#onupdate)
- [onLateUpdate](MeshRenderer.md#onlateupdate)
- [onBeforeUpdate](MeshRenderer.md#onbeforeupdate)
- [setMorphInfluence](MeshRenderer.md#setmorphinfluence)
- [setMorphInfluenceIndex](MeshRenderer.md#setmorphinfluenceindex)
- [cloneTo](MeshRenderer.md#cloneto)
- [drawWireFrame](MeshRenderer.md#drawwireframe)
- [unSerialization](MeshRenderer.md#unserialization)
- [addMask](MeshRenderer.md#addmask)
- [removeMask](MeshRenderer.md#removemask)
- [hasMask](MeshRenderer.md#hasmask)
- [addRendererMask](MeshRenderer.md#addrenderermask)
- [removeRendererMask](MeshRenderer.md#removerenderermask)
- [selfCloneMaterials](MeshRenderer.md#selfclonematerials)
- [compute](MeshRenderer.md#compute)
- [renderPass2](MeshRenderer.md#renderpass2)
- [recordRenderPass2](MeshRenderer.md#recordrenderpass2)
- [noticeShaderChange](MeshRenderer.md#noticeshaderchange)
- [serialization](MeshRenderer.md#serialization)

### Constructors

- [constructor](MeshRenderer.md#constructor)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

此组件附加到的Object3D对象。

#### Inherited from

RenderNode.object3D

#### Defined in

[src/engine/components/ComponentBase.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L14)

___

### serializeTag

• `Optional` **serializeTag**: [`SerializeTag`](../types/SerializeTag.md)

#### Inherited from

RenderNode.serializeTag

#### Defined in

[src/engine/components/ComponentBase.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L30)

___

### receiveShadow

• **receiveShadow**: `boolean`

启用此选项可使网格显示任何投射在网格上的阴影。

#### Defined in

[src/engine/components/rendererComponents/MeshRenderer.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/MeshRenderer.ts#L14)

___

### instanceCount

• **instanceCount**: `number`

#### Inherited from

RenderNode.instanceCount

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L21)

___

### lodLevel

• **lodLevel**: `number` = `0`

#### Inherited from

RenderNode.lodLevel

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L25)

___

### alwaysRender

• **alwaysRender**: `boolean` = `false`

#### Inherited from

RenderNode.alwaysRender

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L27)

___

### \_geometry

• **\_geometry**: [`GeometryBase`](GeometryBase.md)

#### Inherited from

RenderNode.\_geometry

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L29)

___

### renderOrder

• **renderOrder**: `number` = `0`

#### Inherited from

RenderNode.renderOrder

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L45)

___

### instanceID

• **instanceID**: `string`

#### Inherited from

RenderNode.instanceID

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L47)

___

### useCustomDraw

• **useCustomDraw**: `any`

#### Inherited from

RenderNode.useCustomDraw

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L48)

## Accessors

### transform

• `get` **transform**(): [`Transform`](Transform.md)

附加到此 Object3D对象 的 Transform组件。

#### Returns

[`Transform`](Transform.md)

#### Inherited from

RenderNode.transform

#### Defined in

[src/engine/components/ComponentBase.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L39)

___

### enable

• `get` **enable**(): `boolean`

启用/禁用 组件。启用的组件可更新，禁用的组件不可更新。

#### Returns

`boolean`

#### Inherited from

RenderNode.enable

#### Defined in

[src/engine/components/ComponentBase.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L62)

• `set` **enable**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

RenderNode.enable

#### Defined in

[src/engine/components/ComponentBase.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L43)

___

### geometry

• `get` **geometry**(): [`GeometryBase`](GeometryBase.md)

网格的几何体，决定网格的形状

#### Returns

[`GeometryBase`](GeometryBase.md)

#### Defined in

[src/engine/components/rendererComponents/MeshRenderer.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/MeshRenderer.ts#L28)

• `set` **geometry**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GeometryBase`](GeometryBase.md) |

#### Returns

`void`

#### Defined in

[src/engine/components/rendererComponents/MeshRenderer.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/MeshRenderer.ts#L32)

___

### material

• `get` **material**(): `MaterialBase`

网格的材质

#### Returns

`MaterialBase`

#### Defined in

[src/engine/components/rendererComponents/MeshRenderer.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/MeshRenderer.ts#L51)

• `set` **material**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MaterialBase` |

#### Returns

`void`

#### Defined in

[src/engine/components/rendererComponents/MeshRenderer.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/MeshRenderer.ts#L54)

___

### rendererMask

• `get` **rendererMask**(): `number`

#### Returns

`number`

#### Inherited from

RenderNode.rendererMask

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L68)

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

[src/engine/components/rendererComponents/RenderNode.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L72)

___

### materials

• `get` **materials**(): `MaterialBase`[]

#### Returns

`MaterialBase`[]

#### Inherited from

RenderNode.materials

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L76)

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

[src/engine/components/rendererComponents/RenderNode.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L80)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.castShadow

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:202](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L202)

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

[src/engine/components/rendererComponents/RenderNode.ts:206](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L206)

___

### castGI

• `get` **castGI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.castGI

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:210](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L210)

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

[src/engine/components/rendererComponents/RenderNode.ts:214](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L214)

## Methods

### onVisible

▸ **onVisible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

RenderNode.onVisible

#### Defined in

[src/engine/components/ComponentBase.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L66)

___

### destroy

▸ **destroy**(): `void`

移除组件时候调用

#### Returns

`void`

#### Inherited from

RenderNode.destroy

#### Defined in

[src/engine/components/ComponentBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L119)

___

### onUpdate

▸ **onUpdate**(`call`): `void`

添加更新函数。会在每帧更新时执行。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `call` | `Function` | 回调函数 |

#### Returns

`void`

#### Inherited from

RenderNode.onUpdate

#### Defined in

[src/engine/components/ComponentBase.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L135)

___

### onLateUpdate

▸ **onLateUpdate**(`call`): `void`

添加延迟更新函数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `call` | `Function` | 回调函数 |

#### Returns

`void`

#### Inherited from

RenderNode.onLateUpdate

#### Defined in

[src/engine/components/ComponentBase.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L148)

___

### onBeforeUpdate

▸ **onBeforeUpdate**(`call`): `void`

添加帧更新前执行的函数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `call` | `Function` | 回调函数 |

#### Returns

`void`

#### Inherited from

RenderNode.onBeforeUpdate

#### Defined in

[src/engine/components/ComponentBase.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L161)

___

### setMorphInfluence

▸ **setMorphInfluence**(`key`, `value`): `void`

设置变形动画参数

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/components/rendererComponents/MeshRenderer.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/MeshRenderer.ts#L61)

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

[src/engine/components/rendererComponents/MeshRenderer.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/MeshRenderer.ts#L70)

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

[src/engine/components/rendererComponents/MeshRenderer.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/MeshRenderer.ts#L101)

___

### drawWireFrame

▸ **drawWireFrame**(): `void`

#### Returns

`void`

#### Defined in

[src/engine/components/rendererComponents/MeshRenderer.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/MeshRenderer.ts#L111)

___

### unSerialization

▸ **unSerialization**(`componentData`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `componentData` | [`SerializeComponentBase`](SerializeComponentBase.md) |
| `data` | [`UnSerializeData`](UnSerializeData.md) |

#### Returns

`void`

#### Overrides

RenderNode.unSerialization

#### Defined in

[src/engine/components/rendererComponents/MeshRenderer.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/MeshRenderer.ts#L116)

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

[src/engine/components/rendererComponents/RenderNode.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L56)

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

[src/engine/components/rendererComponents/RenderNode.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L60)

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

[src/engine/components/rendererComponents/RenderNode.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L64)

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

[src/engine/components/rendererComponents/RenderNode.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L103)

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

[src/engine/components/rendererComponents/RenderNode.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L107)

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

[src/engine/components/rendererComponents/RenderNode.ts:141](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L141)

___

### compute

▸ **compute**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `GPUCommandEncoder` |

#### Returns

`void`

#### Inherited from

RenderNode.compute

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:218](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L218)

___

### renderPass2

▸ **renderPass2**(`passType`, `rendererPassState`, `scene`, `clusterLightingRender`, `encoder`, `useBundle?`): `void`

render pass at passType

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `passType` | `RendererType` | `undefined` |
| `rendererPassState` | `RendererPassState` | `undefined` |
| `scene` | [`Scene3D`](Scene3D.md) | `undefined` |
| `clusterLightingRender` | `ClusterLightingRender` | `undefined` |
| `encoder` | `GPURenderPassEncoder` | `undefined` |
| `useBundle` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

RenderNode.renderPass2

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:228](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L228)

___

### recordRenderPass2

▸ **recordRenderPass2**(`passType`, `rendererPassState`, `scene`, `clusterLightingRender`, `encoder`, `useBundle?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `passType` | `RendererType` | `undefined` |
| `rendererPassState` | `RendererPassState` | `undefined` |
| `scene` | [`Scene3D`](Scene3D.md) | `undefined` |
| `clusterLightingRender` | `ClusterLightingRender` | `undefined` |
| `encoder` | `GPURenderPassEncoder` | `undefined` |
| `useBundle` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

RenderNode.recordRenderPass2

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:259](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L259)

___

### noticeShaderChange

▸ **noticeShaderChange**(): `void`

#### Returns

`void`

#### Inherited from

RenderNode.noticeShaderChange

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:287](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L287)

___

### serialization

▸ **serialization**(`assets`): [`SerializeComponentBase`](SerializeComponentBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `assets` | [`ISerializeAssetsCollect`](../interfaces/ISerializeAssetsCollect.md) |

#### Returns

[`SerializeComponentBase`](SerializeComponentBase.md)

#### Inherited from

RenderNode.serialization

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:363](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L363)

## Constructors

### constructor

• **new MeshRenderer**()

#### Overrides

RenderNode.constructor

#### Defined in

[src/engine/components/rendererComponents/MeshRenderer.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/MeshRenderer.ts#L17)
