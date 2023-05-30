# Class: InstanceDrawComponent

## Hierarchy

- `RenderNode`

  ↳ **`InstanceDrawComponent`**

### Properties

- [object3D](InstanceDrawComponent.md#object3d)
- [instanceCount](InstanceDrawComponent.md#instancecount)
- [lodLevel](InstanceDrawComponent.md#lodlevel)
- [alwaysRender](InstanceDrawComponent.md#alwaysrender)
- [instanceID](InstanceDrawComponent.md#instanceid)
- [drawType](InstanceDrawComponent.md#drawtype)
- [isRenderOrderChange](InstanceDrawComponent.md#isrenderorderchange)
- [needSortOnCameraZ](InstanceDrawComponent.md#needsortoncameraz)

### Accessors

- [transform](InstanceDrawComponent.md#transform)
- [enable](InstanceDrawComponent.md#enable)
- [renderOrder](InstanceDrawComponent.md#renderorder)
- [geometry](InstanceDrawComponent.md#geometry)
- [rendererMask](InstanceDrawComponent.md#renderermask)
- [materials](InstanceDrawComponent.md#materials)
- [castShadow](InstanceDrawComponent.md#castshadow)
- [castGI](InstanceDrawComponent.md#castgi)
- [castReflection](InstanceDrawComponent.md#castreflection)

### Methods

- [onUpdate](InstanceDrawComponent.md#onupdate)
- [onLateUpdate](InstanceDrawComponent.md#onlateupdate)
- [onBeforeUpdate](InstanceDrawComponent.md#onbeforeupdate)
- [onCompute](InstanceDrawComponent.md#oncompute)
- [onGraphic](InstanceDrawComponent.md#ongraphic)
- [onParentChange](InstanceDrawComponent.md#onparentchange)
- [cloneTo](InstanceDrawComponent.md#cloneto)
- [init](InstanceDrawComponent.md#init)
- [start](InstanceDrawComponent.md#start)
- [stop](InstanceDrawComponent.md#stop)
- [nodeUpdate](InstanceDrawComponent.md#nodeupdate)
- [renderPass](InstanceDrawComponent.md#renderpass)
- [addMask](InstanceDrawComponent.md#addmask)
- [removeMask](InstanceDrawComponent.md#removemask)
- [hasMask](InstanceDrawComponent.md#hasmask)
- [addRendererMask](InstanceDrawComponent.md#addrenderermask)
- [removeRendererMask](InstanceDrawComponent.md#removerenderermask)
- [onEnable](InstanceDrawComponent.md#onenable)
- [onDisable](InstanceDrawComponent.md#ondisable)
- [selfCloneMaterials](InstanceDrawComponent.md#selfclonematerials)
- [renderPass2](InstanceDrawComponent.md#renderpass2)
- [recordRenderPass2](InstanceDrawComponent.md#recordrenderpass2)
- [destroy](InstanceDrawComponent.md#destroy)

### Constructors

- [constructor](InstanceDrawComponent.md#constructor)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

RenderNode.object3D

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### instanceCount

• **instanceCount**: `number` = `0`

#### Inherited from

RenderNode.instanceCount

#### Defined in

[src/components/renderer/RenderNode.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L28)

___

### lodLevel

• **lodLevel**: `number` = `0`

#### Inherited from

RenderNode.lodLevel

#### Defined in

[src/components/renderer/RenderNode.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L29)

___

### alwaysRender

• **alwaysRender**: `boolean` = `false`

#### Inherited from

RenderNode.alwaysRender

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

___

### isRenderOrderChange

• `Optional` **isRenderOrderChange**: `boolean`

#### Inherited from

RenderNode.isRenderOrderChange

#### Defined in

[src/components/renderer/RenderNode.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L46)

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Inherited from

RenderNode.needSortOnCameraZ

#### Defined in

[src/components/renderer/RenderNode.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L47)

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

### renderOrder

• `get` **renderOrder**(): `number`

#### Returns

`number`

#### Inherited from

RenderNode.renderOrder

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

RenderNode.renderOrder

#### Defined in

[src/components/renderer/RenderNode.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L58)

___

### geometry

• `get` **geometry**(): [`GeometryBase`](GeometryBase.md)

#### Returns

[`GeometryBase`](GeometryBase.md)

#### Inherited from

RenderNode.geometry

#### Defined in

[src/components/renderer/RenderNode.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L65)

• `set` **geometry**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GeometryBase`](GeometryBase.md) |

#### Returns

`void`

#### Inherited from

RenderNode.geometry

#### Defined in

[src/components/renderer/RenderNode.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L69)

___

### rendererMask

• `get` **rendererMask**(): `number`

#### Returns

`number`

#### Inherited from

RenderNode.rendererMask

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

RenderNode.rendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L95)

___

### materials

• `get` **materials**(): `MaterialBase`[]

#### Returns

`MaterialBase`[]

#### Inherited from

RenderNode.materials

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

RenderNode.materials

#### Defined in

[src/components/renderer/RenderNode.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L103)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.castShadow

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

RenderNode.castShadow

#### Defined in

[src/components/renderer/RenderNode.ts:252](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L252)

___

### castGI

• `get` **castGI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.castGI

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

RenderNode.castGI

#### Defined in

[src/components/renderer/RenderNode.ts:260](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L260)

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.castReflection

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

RenderNode.castReflection

#### Defined in

[src/components/renderer/RenderNode.ts:268](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L268)

## Methods

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

### onCompute

▸ `Optional` **onCompute**(`view?`, `command?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |
| `command?` | `GPUCommandEncoder` |

#### Returns

`any`

#### Inherited from

RenderNode.onCompute

#### Defined in

[src/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L114)

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

### cloneTo

▸ **cloneTo**(`obj`): `void`

clone component data to target object3D

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) | target object3D |

#### Returns

`void`

#### Inherited from

RenderNode.cloneTo

#### Defined in

[src/components/ComponentBase.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L123)

___

### init

▸ **init**(`param?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`void`

#### Overrides

RenderNode.init

#### Defined in

[src/components/renderer/InstanceDrawComponent.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/InstanceDrawComponent.ts#L17)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

RenderNode.start

#### Defined in

[src/components/renderer/InstanceDrawComponent.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/InstanceDrawComponent.ts#L21)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Overrides

RenderNode.stop

#### Defined in

[src/components/renderer/InstanceDrawComponent.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/InstanceDrawComponent.ts#L51)

___

### nodeUpdate

▸ **nodeUpdate**(`view`, `passType`, `renderPassState`, `clusterLightingBuffer?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `passType` | `RendererType` |
| `renderPassState` | `RendererPassState` |
| `clusterLightingBuffer?` | [`ClusterLightingBuffer`](ClusterLightingBuffer.md) |

#### Returns

`void`

#### Overrides

RenderNode.nodeUpdate

#### Defined in

[src/components/renderer/InstanceDrawComponent.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/InstanceDrawComponent.ts#L55)

___

### renderPass

▸ **renderPass**(`view`, `passType`, `renderEncoder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `passType` | `RendererType` |
| `renderEncoder` | [`RenderContext`](RenderContext.md) |

#### Returns

`void`

#### Overrides

RenderNode.renderPass

#### Defined in

[src/components/renderer/InstanceDrawComponent.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/InstanceDrawComponent.ts#L78)

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

RenderNode.removeMask

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

RenderNode.hasMask

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

RenderNode.addRendererMask

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

RenderNode.removeRendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:139](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L139)

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Inherited from

RenderNode.onEnable

#### Defined in

[src/components/renderer/RenderNode.ts:143](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L143)

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Inherited from

RenderNode.onDisable

#### Defined in

[src/components/renderer/RenderNode.ts:151](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L151)

___

### selfCloneMaterials

▸ **selfCloneMaterials**(`key`): [`InstanceDrawComponent`](InstanceDrawComponent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`InstanceDrawComponent`](InstanceDrawComponent.md)

#### Inherited from

RenderNode.selfCloneMaterials

#### Defined in

[src/components/renderer/RenderNode.ts:155](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L155)

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

[src/components/renderer/RenderNode.ts:323](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L323)

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

[src/components/renderer/RenderNode.ts:365](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L365)

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

RenderNode.destroy

#### Defined in

[src/components/renderer/RenderNode.ts:474](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L474)

## Constructors

### constructor

• **new InstanceDrawComponent**()

#### Inherited from

RenderNode.constructor

#### Defined in

[src/components/renderer/RenderNode.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L49)
