# Class: SkinnedMeshRenderer

蒙皮网格渲染器组件。      
渲染可变形网格。可变形网格包括蒙皮网格（具有骨骼和绑定姿势的网格）、具有混合形状的网格和运行布料模拟的网格。

## Hierarchy

- [`MeshRenderer`](MeshRenderer.md)

  ↳ **`SkinnedMeshRenderer`**


### Properties

- [object3D](SkinnedMeshRenderer.md#object3d)
- [serializeTag](SkinnedMeshRenderer.md#serializetag)
- [receiveShadow](SkinnedMeshRenderer.md#receiveshadow)
- [instanceCount](SkinnedMeshRenderer.md#instancecount)
- [lodLevel](SkinnedMeshRenderer.md#lodlevel)
- [alwaysRender](SkinnedMeshRenderer.md#alwaysrender)
- [\_geometry](SkinnedMeshRenderer.md#_geometry)
- [renderOrder](SkinnedMeshRenderer.md#renderorder)
- [instanceID](SkinnedMeshRenderer.md#instanceid)
- [useCustomDraw](SkinnedMeshRenderer.md#usecustomdraw)
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
- [skeletonAnimation](SkinnedMeshRenderer.md#skeletonanimation)
- [skinInverseBindMatrices](SkinnedMeshRenderer.md#skininversebindmatrices)
- [inverseBindMatrixBuffer](SkinnedMeshRenderer.md#inversebindmatrixbuffer)
- [jointIndexTableBuffer](SkinnedMeshRenderer.md#jointindextablebuffer)

### Methods

- [onVisible](SkinnedMeshRenderer.md#onvisible)
- [destroy](SkinnedMeshRenderer.md#destroy)
- [onUpdate](SkinnedMeshRenderer.md#onupdate)
- [onLateUpdate](SkinnedMeshRenderer.md#onlateupdate)
- [onBeforeUpdate](SkinnedMeshRenderer.md#onbeforeupdate)
- [setMorphInfluence](SkinnedMeshRenderer.md#setmorphinfluence)
- [setMorphInfluenceIndex](SkinnedMeshRenderer.md#setmorphinfluenceindex)
- [drawWireFrame](SkinnedMeshRenderer.md#drawwireframe)
- [unSerialization](SkinnedMeshRenderer.md#unserialization)
- [addMask](SkinnedMeshRenderer.md#addmask)
- [removeMask](SkinnedMeshRenderer.md#removemask)
- [hasMask](SkinnedMeshRenderer.md#hasmask)
- [addRendererMask](SkinnedMeshRenderer.md#addrenderermask)
- [removeRendererMask](SkinnedMeshRenderer.md#removerenderermask)
- [selfCloneMaterials](SkinnedMeshRenderer.md#selfclonematerials)
- [compute](SkinnedMeshRenderer.md#compute)
- [renderPass2](SkinnedMeshRenderer.md#renderpass2)
- [recordRenderPass2](SkinnedMeshRenderer.md#recordrenderpass2)
- [noticeShaderChange](SkinnedMeshRenderer.md#noticeshaderchange)
- [serialization](SkinnedMeshRenderer.md#serialization)
- [cloneTo](SkinnedMeshRenderer.md#cloneto)

### Constructors

- [constructor](SkinnedMeshRenderer.md#constructor)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

此组件附加到的Object3D对象。

#### Inherited from

[MeshRenderer](MeshRenderer.md).[object3D](MeshRenderer.md#object3d)

#### Defined in

[src/engine/components/ComponentBase.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L14)

___

### serializeTag

• `Optional` **serializeTag**: [`SerializeTag`](../types/SerializeTag.md)

#### Inherited from

[MeshRenderer](MeshRenderer.md).[serializeTag](MeshRenderer.md#serializetag)

#### Defined in

[src/engine/components/ComponentBase.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L30)

___

### receiveShadow

• **receiveShadow**: `boolean`

启用此选项可使网格显示任何投射在网格上的阴影。

#### Inherited from

[MeshRenderer](MeshRenderer.md).[receiveShadow](MeshRenderer.md#receiveshadow)

#### Defined in

[src/engine/components/rendererComponents/MeshRenderer.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/MeshRenderer.ts#L14)

___

### instanceCount

• **instanceCount**: `number`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[instanceCount](MeshRenderer.md#instancecount)

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L21)

___

### lodLevel

• **lodLevel**: `number` = `0`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[lodLevel](MeshRenderer.md#lodlevel)

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L25)

___

### alwaysRender

• **alwaysRender**: `boolean` = `false`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[alwaysRender](MeshRenderer.md#alwaysrender)

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L27)

___

### \_geometry

• **\_geometry**: [`GeometryBase`](GeometryBase.md)

#### Inherited from

[MeshRenderer](MeshRenderer.md).[_geometry](MeshRenderer.md#_geometry)

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L29)

___

### renderOrder

• **renderOrder**: `number` = `0`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[renderOrder](MeshRenderer.md#renderorder)

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L45)

___

### instanceID

• **instanceID**: `string`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[instanceID](MeshRenderer.md#instanceid)

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L47)

___

### useCustomDraw

• **useCustomDraw**: `any`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[useCustomDraw](MeshRenderer.md#usecustomdraw)

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L48)

___

### skinJointsName

• **skinJointsName**: `string`[]

#### Defined in

[src/engine/components/rendererComponents/SkinnedMeshRenderer.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/SkinnedMeshRenderer.ts#L21)

## Accessors

### transform

• `get` **transform**(): [`Transform`](Transform.md)

附加到此 Object3D对象 的 Transform组件。

#### Returns

[`Transform`](Transform.md)

#### Inherited from

MeshRenderer.transform

#### Defined in

[src/engine/components/ComponentBase.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L39)

___

### enable

• `get` **enable**(): `boolean`

启用/禁用 组件。启用的组件可更新，禁用的组件不可更新。

#### Returns

`boolean`

#### Inherited from

MeshRenderer.enable

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

MeshRenderer.enable

#### Defined in

[src/engine/components/ComponentBase.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L43)

___

### geometry

• `get` **geometry**(): [`GeometryBase`](GeometryBase.md)

网格的几何体，决定网格的形状

#### Returns

[`GeometryBase`](GeometryBase.md)

#### Inherited from

MeshRenderer.geometry

#### Defined in

[src/engine/components/rendererComponents/MeshRenderer.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/MeshRenderer.ts#L28)

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

[src/engine/components/rendererComponents/MeshRenderer.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/MeshRenderer.ts#L32)

___

### material

• `get` **material**(): `MaterialBase`

网格的材质

#### Returns

`MaterialBase`

#### Inherited from

MeshRenderer.material

#### Defined in

[src/engine/components/rendererComponents/MeshRenderer.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/MeshRenderer.ts#L51)

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

[src/engine/components/rendererComponents/MeshRenderer.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/MeshRenderer.ts#L54)

___

### rendererMask

• `get` **rendererMask**(): `number`

#### Returns

`number`

#### Inherited from

MeshRenderer.rendererMask

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

MeshRenderer.rendererMask

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L72)

___

### materials

• `get` **materials**(): `MaterialBase`[]

#### Returns

`MaterialBase`[]

#### Inherited from

MeshRenderer.materials

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

MeshRenderer.materials

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L80)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.castShadow

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

MeshRenderer.castShadow

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:206](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L206)

___

### castGI

• `get` **castGI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.castGI

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

MeshRenderer.castGI

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:214](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L214)

___

### skeletonAnimation

• `get` **skeletonAnimation**(): [`SkeletonAnimation`](SkeletonAnimation.md)

#### Returns

[`SkeletonAnimation`](SkeletonAnimation.md)

#### Defined in

[src/engine/components/rendererComponents/SkinnedMeshRenderer.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/SkinnedMeshRenderer.ts#L46)

• `set` **skeletonAnimation**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`SkeletonAnimation`](SkeletonAnimation.md) |

#### Returns

`void`

#### Defined in

[src/engine/components/rendererComponents/SkinnedMeshRenderer.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/SkinnedMeshRenderer.ts#L50)

___

### skinInverseBindMatrices

• `get` **skinInverseBindMatrices**(): `Float32Array`[]

#### Returns

`Float32Array`[]

#### Defined in

[src/engine/components/rendererComponents/SkinnedMeshRenderer.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/SkinnedMeshRenderer.ts#L63)

• `set` **skinInverseBindMatrices**(`inverseBindMatrices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inverseBindMatrices` | `Float32Array`[] |

#### Returns

`void`

#### Defined in

[src/engine/components/rendererComponents/SkinnedMeshRenderer.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/SkinnedMeshRenderer.ts#L67)

___

### inverseBindMatrixBuffer

• `get` **inverseBindMatrixBuffer**(): `StorageGPUBuffer`

#### Returns

`StorageGPUBuffer`

#### Defined in

[src/engine/components/rendererComponents/SkinnedMeshRenderer.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/SkinnedMeshRenderer.ts#L79)

___

### jointIndexTableBuffer

• `get` **jointIndexTableBuffer**(): `GPUBuffer`

#### Returns

`GPUBuffer`

#### Defined in

[src/engine/components/rendererComponents/SkinnedMeshRenderer.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/SkinnedMeshRenderer.ts#L83)

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

[MeshRenderer](MeshRenderer.md).[onVisible](MeshRenderer.md#onvisible)

#### Defined in

[src/engine/components/ComponentBase.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L66)

___

### destroy

▸ **destroy**(): `void`

移除组件时候调用

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[destroy](MeshRenderer.md#destroy)

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

[MeshRenderer](MeshRenderer.md).[onUpdate](MeshRenderer.md#onupdate)

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

[MeshRenderer](MeshRenderer.md).[onLateUpdate](MeshRenderer.md#onlateupdate)

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

[MeshRenderer](MeshRenderer.md).[onBeforeUpdate](MeshRenderer.md#onbeforeupdate)

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

#### Inherited from

[MeshRenderer](MeshRenderer.md).[setMorphInfluence](MeshRenderer.md#setmorphinfluence)

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

#### Inherited from

[MeshRenderer](MeshRenderer.md).[setMorphInfluenceIndex](MeshRenderer.md#setmorphinfluenceindex)

#### Defined in

[src/engine/components/rendererComponents/MeshRenderer.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/MeshRenderer.ts#L70)

___

### drawWireFrame

▸ **drawWireFrame**(): `void`

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[drawWireFrame](MeshRenderer.md#drawwireframe)

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

#### Inherited from

[MeshRenderer](MeshRenderer.md).[unSerialization](MeshRenderer.md#unserialization)

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

[MeshRenderer](MeshRenderer.md).[addMask](MeshRenderer.md#addmask)

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

[MeshRenderer](MeshRenderer.md).[removeMask](MeshRenderer.md#removemask)

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

[MeshRenderer](MeshRenderer.md).[hasMask](MeshRenderer.md#hasmask)

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

[MeshRenderer](MeshRenderer.md).[addRendererMask](MeshRenderer.md#addrenderermask)

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

[MeshRenderer](MeshRenderer.md).[removeRendererMask](MeshRenderer.md#removerenderermask)

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L107)

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

[MeshRenderer](MeshRenderer.md).[compute](MeshRenderer.md#compute)

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

[MeshRenderer](MeshRenderer.md).[renderPass2](MeshRenderer.md#renderpass2)

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

[MeshRenderer](MeshRenderer.md).[recordRenderPass2](MeshRenderer.md#recordrenderpass2)

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:259](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L259)

___

### noticeShaderChange

▸ **noticeShaderChange**(): `void`

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[noticeShaderChange](MeshRenderer.md#noticeshaderchange)

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

[MeshRenderer](MeshRenderer.md).[serialization](MeshRenderer.md#serialization)

#### Defined in

[src/engine/components/rendererComponents/RenderNode.ts:363](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/RenderNode.ts#L363)

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

[src/engine/components/rendererComponents/SkinnedMeshRenderer.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/SkinnedMeshRenderer.ts#L87)

## Constructors

### constructor

• **new SkinnedMeshRenderer**()

#### Overrides

[MeshRenderer](MeshRenderer.md).[constructor](MeshRenderer.md#constructor)

#### Defined in

[src/engine/components/rendererComponents/SkinnedMeshRenderer.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/rendererComponents/SkinnedMeshRenderer.ts#L27)
