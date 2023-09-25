# Class: InstanceDrawComponent

## Hierarchy

- `RenderNode`

  ↳ **`InstanceDrawComponent`**

### Constructors

- [constructor](InstanceDrawComponent.md#constructor)

### Properties

- [object3D](InstanceDrawComponent.md#object3d)
- [isDestroyed](InstanceDrawComponent.md#isdestroyed)
- [instanceCount](InstanceDrawComponent.md#instancecount)
- [lodLevel](InstanceDrawComponent.md#lodlevel)
- [alwaysRender](InstanceDrawComponent.md#alwaysrender)
- [instanceID](InstanceDrawComponent.md#instanceid)
- [drawType](InstanceDrawComponent.md#drawtype)
- [isRenderOrderChange](InstanceDrawComponent.md#isrenderorderchange)
- [needSortOnCameraZ](InstanceDrawComponent.md#needsortoncameraz)
- [preInit](InstanceDrawComponent.md#preinit)

### Accessors

- [eventDispatcher](InstanceDrawComponent.md#eventdispatcher)
- [isStart](InstanceDrawComponent.md#isstart)
- [transform](InstanceDrawComponent.md#transform)
- [enable](InstanceDrawComponent.md#enable)
- [renderLayer](InstanceDrawComponent.md#renderlayer)
- [geometry](InstanceDrawComponent.md#geometry)
- [rendererMask](InstanceDrawComponent.md#renderermask)
- [renderOrder](InstanceDrawComponent.md#renderorder)
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
- [renderItem](InstanceDrawComponent.md#renderitem)
- [attachSceneOctree](InstanceDrawComponent.md#attachsceneoctree)
- [detachSceneOctree](InstanceDrawComponent.md#detachsceneoctree)
- [copyComponent](InstanceDrawComponent.md#copycomponent)
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
- [beforeDestroy](InstanceDrawComponent.md#beforedestroy)
- [destroy](InstanceDrawComponent.md#destroy)

## Constructors

### constructor

• **new InstanceDrawComponent**()

#### Inherited from

RenderNode.constructor

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

### instanceCount

• **instanceCount**: `number` = `0`

#### Inherited from

RenderNode.instanceCount

#### Defined in

[src/components/renderer/RenderNode.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L33)

___

### lodLevel

• **lodLevel**: `number` = `0`

#### Inherited from

RenderNode.lodLevel

#### Defined in

[src/components/renderer/RenderNode.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L34)

___

### alwaysRender

• **alwaysRender**: `boolean` = `false`

#### Inherited from

RenderNode.alwaysRender

#### Defined in

[src/components/renderer/RenderNode.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L35)

___

### instanceID

• **instanceID**: `string`

#### Inherited from

RenderNode.instanceID

#### Defined in

[src/components/renderer/RenderNode.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L36)

___

### drawType

• **drawType**: `number` = `0`

#### Inherited from

RenderNode.drawType

#### Defined in

[src/components/renderer/RenderNode.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L37)

___

### isRenderOrderChange

• `Optional` **isRenderOrderChange**: `boolean`

#### Inherited from

RenderNode.isRenderOrderChange

#### Defined in

[src/components/renderer/RenderNode.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L52)

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Inherited from

RenderNode.needSortOnCameraZ

#### Defined in

[src/components/renderer/RenderNode.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L53)

___

### preInit

• **preInit**: `boolean` = `false`

#### Inherited from

RenderNode.preInit

#### Defined in

[src/components/renderer/RenderNode.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L56)

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

### renderLayer

• `get` **renderLayer**(): `RenderLayer`

#### Returns

`RenderLayer`

#### Inherited from

RenderNode.renderLayer

#### Defined in

[src/components/renderer/RenderNode.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L103)

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

[src/components/renderer/RenderNode.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L107)

___

### geometry

• `get` **geometry**(): [`GeometryBase`](GeometryBase.md)

#### Returns

[`GeometryBase`](GeometryBase.md)

#### Inherited from

RenderNode.geometry

#### Defined in

[src/components/renderer/RenderNode.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L115)

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

[src/components/renderer/RenderNode.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L119)

___

### rendererMask

• `get` **rendererMask**(): `number`

#### Returns

`number`

#### Inherited from

RenderNode.rendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:141](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L141)

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

[src/components/renderer/RenderNode.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L145)

___

### renderOrder

• `get` **renderOrder**(): `number`

#### Returns

`number`

#### Inherited from

RenderNode.renderOrder

#### Defined in

[src/components/renderer/RenderNode.ts:149](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L149)

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

[src/components/renderer/RenderNode.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L153)

___

### materials

• `get` **materials**(): [`Material`](Material.md)[]

#### Returns

[`Material`](Material.md)[]

#### Inherited from

RenderNode.materials

#### Defined in

[src/components/renderer/RenderNode.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L161)

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

[src/components/renderer/RenderNode.ts:166](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L166)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.castShadow

#### Defined in

[src/components/renderer/RenderNode.ts:315](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L315)

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

[src/components/renderer/RenderNode.ts:320](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L320)

___

### castGI

• `get` **castGI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.castGI

#### Defined in

[src/components/renderer/RenderNode.ts:325](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L325)

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

[src/components/renderer/RenderNode.ts:330](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L330)

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.castReflection

#### Defined in

[src/components/renderer/RenderNode.ts:335](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L335)

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

[src/components/renderer/RenderNode.ts:339](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L339)

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

[src/components/ComponentBase.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L117)

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

[src/components/ComponentBase.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L118)

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

[src/components/ComponentBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L119)

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

[src/components/ComponentBase.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L120)

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

[src/components/ComponentBase.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L121)

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

[src/components/ComponentBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L122)

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

[src/components/ComponentBase.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L129)

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

[src/components/renderer/InstanceDrawComponent.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/InstanceDrawComponent.ts#L18)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

RenderNode.start

#### Defined in

[src/components/renderer/InstanceDrawComponent.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/InstanceDrawComponent.ts#L24)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Overrides

RenderNode.stop

#### Defined in

[src/components/renderer/InstanceDrawComponent.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/InstanceDrawComponent.ts#L62)

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

[src/components/renderer/InstanceDrawComponent.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/InstanceDrawComponent.ts#L66)

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

#### Overrides

RenderNode.renderPass

#### Defined in

[src/components/renderer/InstanceDrawComponent.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/InstanceDrawComponent.ts#L87)

___

### renderItem

▸ **renderItem**(`view`, `passType`, `renderNode`, `renderContext`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `passType` | `RendererType` |
| `renderNode` | `RenderNode` |
| `renderContext` | [`RenderContext`](RenderContext.md) |

#### Returns

`void`

#### Defined in

[src/components/renderer/InstanceDrawComponent.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/InstanceDrawComponent.ts#L95)

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

[src/components/renderer/RenderNode.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L72)

___

### detachSceneOctree

▸ **detachSceneOctree**(): `void`

#### Returns

`void`

#### Inherited from

RenderNode.detachSceneOctree

#### Defined in

[src/components/renderer/RenderNode.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L77)

___

### copyComponent

▸ **copyComponent**(`from`): [`InstanceDrawComponent`](InstanceDrawComponent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`InstanceDrawComponent`](InstanceDrawComponent.md) |

#### Returns

[`InstanceDrawComponent`](InstanceDrawComponent.md)

#### Inherited from

RenderNode.copyComponent

#### Defined in

[src/components/renderer/RenderNode.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L89)

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

[src/components/renderer/RenderNode.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L129)

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

[src/components/renderer/RenderNode.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L133)

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

[src/components/renderer/RenderNode.ts:137](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L137)

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

[src/components/renderer/RenderNode.ts:201](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L201)

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

[src/components/renderer/RenderNode.ts:205](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L205)

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Inherited from

RenderNode.onEnable

#### Defined in

[src/components/renderer/RenderNode.ts:209](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L209)

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Inherited from

RenderNode.onDisable

#### Defined in

[src/components/renderer/RenderNode.ts:217](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L217)

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

[src/components/renderer/RenderNode.ts:221](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L221)

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

[src/components/renderer/RenderNode.ts:399](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L399)

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

[src/components/renderer/RenderNode.ts:444](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L444)

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

[src/components/renderer/RenderNode.ts:554](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L554)

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

[src/components/renderer/RenderNode.ts:570](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L570)
