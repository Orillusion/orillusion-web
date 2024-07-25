# Class: SphereReflection

Sky Box Renderer Component

## Hierarchy

- [`Reflection`](Reflection.md)

  ↳ **`SphereReflection`**

### Constructors

- [constructor](SphereReflection.md#constructor)

### Properties

- [object3D](SphereReflection.md#object3d)
- [isDestroyed](SphereReflection.md#isdestroyed)
- [gid](SphereReflection.md#gid)
- [needUpdate](SphereReflection.md#needupdate)
- [autoUpdate](SphereReflection.md#autoupdate)
- [radius](SphereReflection.md#radius)
- [instanceCount](SphereReflection.md#instancecount)
- [lodLevel](SphereReflection.md#lodlevel)
- [alwaysRender](SphereReflection.md#alwaysrender)
- [instanceID](SphereReflection.md#instanceid)
- [drawType](SphereReflection.md#drawtype)
- [isRenderOrderChange](SphereReflection.md#isrenderorderchange)
- [needSortOnCameraZ](SphereReflection.md#needsortoncameraz)
- [isRecievePostEffectUI](SphereReflection.md#isrecieveposteffectui)

### Accessors

- [eventDispatcher](SphereReflection.md#eventdispatcher)
- [isStart](SphereReflection.md#isstart)
- [transform](SphereReflection.md#transform)
- [enable](SphereReflection.md#enable)
- [renderLayer](SphereReflection.md#renderlayer)
- [geometry](SphereReflection.md#geometry)
- [rendererMask](SphereReflection.md#renderermask)
- [renderOrder](SphereReflection.md#renderorder)
- [materials](SphereReflection.md#materials)
- [castShadow](SphereReflection.md#castshadow)
- [castGI](SphereReflection.md#castgi)
- [castReflection](SphereReflection.md#castreflection)

### Methods

- [start](SphereReflection.md#start)
- [stop](SphereReflection.md#stop)
- [onUpdate](SphereReflection.md#onupdate)
- [onLateUpdate](SphereReflection.md#onlateupdate)
- [onBeforeUpdate](SphereReflection.md#onbeforeupdate)
- [onCompute](SphereReflection.md#oncompute)
- [onGraphic](SphereReflection.md#ongraphic)
- [onParentChange](SphereReflection.md#onparentchange)
- [onAddChild](SphereReflection.md#onaddchild)
- [onRemoveChild](SphereReflection.md#onremovechild)
- [cloneTo](SphereReflection.md#cloneto)
- [attachSceneOctree](SphereReflection.md#attachsceneoctree)
- [detachSceneOctree](SphereReflection.md#detachsceneoctree)
- [copyComponent](SphereReflection.md#copycomponent)
- [addMask](SphereReflection.md#addmask)
- [removeMask](SphereReflection.md#removemask)
- [hasMask](SphereReflection.md#hasmask)
- [addRendererMask](SphereReflection.md#addrenderermask)
- [removeRendererMask](SphereReflection.md#removerenderermask)
- [selfCloneMaterials](SphereReflection.md#selfclonematerials)
- [renderPass](SphereReflection.md#renderpass)
- [recordRenderPass2](SphereReflection.md#recordrenderpass2)
- [preInit](SphereReflection.md#preinit)
- [nodeUpdate](SphereReflection.md#nodeupdate)
- [beforeDestroy](SphereReflection.md#beforedestroy)
- [destroy](SphereReflection.md#destroy)
- [init](SphereReflection.md#init)
- [debug](SphereReflection.md#debug)
- [onEnable](SphereReflection.md#onenable)
- [onDisable](SphereReflection.md#ondisable)
- [renderPass2](SphereReflection.md#renderpass2)

## Constructors

### constructor

• **new SphereReflection**(): [`SphereReflection`](SphereReflection.md)

#### Returns

[`SphereReflection`](SphereReflection.md)

#### Inherited from

[Reflection](Reflection.md).[constructor](Reflection.md#constructor)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

[Reflection](Reflection.md).[object3D](Reflection.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### isDestroyed

• `Optional` **isDestroyed**: `boolean`

#### Inherited from

[Reflection](Reflection.md).[isDestroyed](Reflection.md#isdestroyed)

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### gid

• **gid**: `number` = `0`

#### Inherited from

[Reflection](Reflection.md).[gid](Reflection.md#gid)

#### Defined in

[src/components/renderer/Reflection.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/Reflection.ts#L19)

___

### needUpdate

• **needUpdate**: `boolean` = `true`

#### Inherited from

[Reflection](Reflection.md).[needUpdate](Reflection.md#needupdate)

#### Defined in

[src/components/renderer/Reflection.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/Reflection.ts#L20)

___

### autoUpdate

• **autoUpdate**: `boolean` = `false`

#### Inherited from

[Reflection](Reflection.md).[autoUpdate](Reflection.md#autoupdate)

#### Defined in

[src/components/renderer/Reflection.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/Reflection.ts#L21)

___

### radius

• **radius**: `number` = `500`

#### Inherited from

[Reflection](Reflection.md).[radius](Reflection.md#radius)

#### Defined in

[src/components/renderer/Reflection.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/Reflection.ts#L22)

___

### instanceCount

• **instanceCount**: `number` = `0`

#### Inherited from

[Reflection](Reflection.md).[instanceCount](Reflection.md#instancecount)

#### Defined in

[src/components/renderer/RenderNode.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L35)

___

### lodLevel

• **lodLevel**: `number` = `0`

#### Inherited from

[Reflection](Reflection.md).[lodLevel](Reflection.md#lodlevel)

#### Defined in

[src/components/renderer/RenderNode.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L36)

___

### alwaysRender

• **alwaysRender**: `boolean` = `false`

#### Inherited from

[Reflection](Reflection.md).[alwaysRender](Reflection.md#alwaysrender)

#### Defined in

[src/components/renderer/RenderNode.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L37)

___

### instanceID

• **instanceID**: `string`

#### Inherited from

[Reflection](Reflection.md).[instanceID](Reflection.md#instanceid)

#### Defined in

[src/components/renderer/RenderNode.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L38)

___

### drawType

• **drawType**: `number` = `0`

#### Inherited from

[Reflection](Reflection.md).[drawType](Reflection.md#drawtype)

#### Defined in

[src/components/renderer/RenderNode.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L39)

___

### isRenderOrderChange

• `Optional` **isRenderOrderChange**: `boolean`

#### Inherited from

[Reflection](Reflection.md).[isRenderOrderChange](Reflection.md#isrenderorderchange)

#### Defined in

[src/components/renderer/RenderNode.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L55)

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Inherited from

[Reflection](Reflection.md).[needSortOnCameraZ](Reflection.md#needsortoncameraz)

#### Defined in

[src/components/renderer/RenderNode.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L56)

___

### isRecievePostEffectUI

• `Optional` **isRecievePostEffectUI**: `boolean`

#### Inherited from

[Reflection](Reflection.md).[isRecievePostEffectUI](Reflection.md#isrecieveposteffectui)

#### Defined in

[src/components/renderer/RenderNode.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L57)

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

Reflection.eventDispatcher

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

Reflection.eventDispatcher

#### Defined in

[src/components/ComponentBase.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L28)

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Reflection.isStart

#### Defined in

[src/components/ComponentBase.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L40)

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

Reflection.transform

#### Defined in

[src/components/ComponentBase.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L47)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

Reflection.enable

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

Reflection.enable

#### Defined in

[src/components/ComponentBase.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L54)

___

### renderLayer

• `get` **renderLayer**(): `RenderLayer`

#### Returns

`RenderLayer`

#### Inherited from

Reflection.renderLayer

#### Defined in

[src/components/renderer/RenderNode.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L110)

• `set` **renderLayer**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `RenderLayer` |

#### Returns

`void`

#### Inherited from

Reflection.renderLayer

#### Defined in

[src/components/renderer/RenderNode.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L114)

___

### geometry

• `get` **geometry**(): [`GeometryBase`](GeometryBase.md)

#### Returns

[`GeometryBase`](GeometryBase.md)

#### Inherited from

Reflection.geometry

#### Defined in

[src/components/renderer/RenderNode.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L122)

• `set` **geometry**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GeometryBase`](GeometryBase.md) |

#### Returns

`void`

#### Inherited from

Reflection.geometry

#### Defined in

[src/components/renderer/RenderNode.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L126)

___

### rendererMask

• `get` **rendererMask**(): `number`

#### Returns

`number`

#### Inherited from

Reflection.rendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L152)

• `set` **rendererMask**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Reflection.rendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:156](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L156)

___

### renderOrder

• `get` **renderOrder**(): `number`

#### Returns

`number`

#### Inherited from

Reflection.renderOrder

#### Defined in

[src/components/renderer/RenderNode.ts:160](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L160)

• `set` **renderOrder**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Reflection.renderOrder

#### Defined in

[src/components/renderer/RenderNode.ts:164](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L164)

___

### materials

• `get` **materials**(): [`Material`](Material.md)[]

#### Returns

[`Material`](Material.md)[]

#### Inherited from

Reflection.materials

#### Defined in

[src/components/renderer/RenderNode.ts:173](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L173)

• `set` **materials**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Material`](Material.md)[] |

#### Returns

`void`

#### Inherited from

Reflection.materials

#### Defined in

[src/components/renderer/RenderNode.ts:177](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L177)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Reflection.castShadow

#### Defined in

[src/components/renderer/RenderNode.ts:345](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L345)

• `set` **castShadow**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Reflection.castShadow

#### Defined in

[src/components/renderer/RenderNode.ts:349](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L349)

___

### castGI

• `get` **castGI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Reflection.castGI

#### Defined in

[src/components/renderer/RenderNode.ts:354](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L354)

• `set` **castGI**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Reflection.castGI

#### Defined in

[src/components/renderer/RenderNode.ts:358](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L358)

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Reflection.castReflection

#### Defined in

[src/components/renderer/RenderNode.ts:362](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L362)

• `set` **castReflection**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Reflection.castReflection

#### Defined in

[src/components/renderer/RenderNode.ts:366](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L366)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[Reflection](Reflection.md).[start](Reflection.md#start)

#### Defined in

[src/components/ComponentBase.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[Reflection](Reflection.md).[stop](Reflection.md#stop)

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

[Reflection](Reflection.md).[onUpdate](Reflection.md#onupdate)

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

[Reflection](Reflection.md).[onLateUpdate](Reflection.md#onlateupdate)

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

[Reflection](Reflection.md).[onBeforeUpdate](Reflection.md#onbeforeupdate)

#### Defined in

[src/components/ComponentBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L119)

___

### onCompute

▸ **onCompute**(`view?`, `command?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |
| `command?` | `GPUCommandEncoder` |

#### Returns

`any`

#### Inherited from

[Reflection](Reflection.md).[onCompute](Reflection.md#oncompute)

#### Defined in

[src/components/ComponentBase.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L120)

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

[Reflection](Reflection.md).[onGraphic](Reflection.md#ongraphic)

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

[Reflection](Reflection.md).[onParentChange](Reflection.md#onparentchange)

#### Defined in

[src/components/ComponentBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L122)

___

### onAddChild

▸ **onAddChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

[Reflection](Reflection.md).[onAddChild](Reflection.md#onaddchild)

#### Defined in

[src/components/ComponentBase.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L123)

___

### onRemoveChild

▸ **onRemoveChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

[Reflection](Reflection.md).[onRemoveChild](Reflection.md#onremovechild)

#### Defined in

[src/components/ComponentBase.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L124)

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

[Reflection](Reflection.md).[cloneTo](Reflection.md#cloneto)

#### Defined in

[src/components/ComponentBase.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L131)

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

[Reflection](Reflection.md).[attachSceneOctree](Reflection.md#attachsceneoctree)

#### Defined in

[src/components/renderer/RenderNode.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L78)

___

### detachSceneOctree

▸ **detachSceneOctree**(): `void`

#### Returns

`void`

#### Inherited from

[Reflection](Reflection.md).[detachSceneOctree](Reflection.md#detachsceneoctree)

#### Defined in

[src/components/renderer/RenderNode.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L83)

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

[Reflection](Reflection.md).[copyComponent](Reflection.md#copycomponent)

#### Defined in

[src/components/renderer/RenderNode.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L95)

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

[Reflection](Reflection.md).[addMask](Reflection.md#addmask)

#### Defined in

[src/components/renderer/RenderNode.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L140)

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

[Reflection](Reflection.md).[removeMask](Reflection.md#removemask)

#### Defined in

[src/components/renderer/RenderNode.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L144)

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

[Reflection](Reflection.md).[hasMask](Reflection.md#hasmask)

#### Defined in

[src/components/renderer/RenderNode.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L148)

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

[Reflection](Reflection.md).[addRendererMask](Reflection.md#addrenderermask)

#### Defined in

[src/components/renderer/RenderNode.ts:228](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L228)

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

[Reflection](Reflection.md).[removeRendererMask](Reflection.md#removerenderermask)

#### Defined in

[src/components/renderer/RenderNode.ts:232](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L232)

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

[Reflection](Reflection.md).[selfCloneMaterials](Reflection.md#selfclonematerials)

#### Defined in

[src/components/renderer/RenderNode.ts:252](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L252)

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

[Reflection](Reflection.md).[renderPass](Reflection.md#renderpass)

#### Defined in

[src/components/renderer/RenderNode.ts:370](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L370)

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

[Reflection](Reflection.md).[recordRenderPass2](Reflection.md#recordrenderpass2)

#### Defined in

[src/components/renderer/RenderNode.ts:486](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L486)

___

### preInit

▸ **preInit**(`_rendererType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rendererType` | `PassType` |

#### Returns

`boolean`

#### Inherited from

[Reflection](Reflection.md).[preInit](Reflection.md#preinit)

#### Defined in

[src/components/renderer/RenderNode.ts:519](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L519)

___

### nodeUpdate

▸ **nodeUpdate**(`view`, `passType`, `renderPassState`, `clusterLightingBuffer?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `passType` | `PassType` |
| `renderPassState` | `RendererPassState` |
| `clusterLightingBuffer?` | [`ClusterLightingBuffer`](ClusterLightingBuffer.md) |

#### Returns

`void`

#### Inherited from

[Reflection](Reflection.md).[nodeUpdate](Reflection.md#nodeupdate)

#### Defined in

[src/components/renderer/RenderNode.ts:523](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L523)

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

[Reflection](Reflection.md).[beforeDestroy](Reflection.md#beforedestroy)

#### Defined in

[src/components/renderer/RenderNode.ts:609](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L609)

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

[Reflection](Reflection.md).[destroy](Reflection.md#destroy)

#### Defined in

[src/components/renderer/RenderNode.ts:625](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L625)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

[Reflection](Reflection.md).[init](Reflection.md#init)

#### Defined in

[src/components/renderer/SphereReflection.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SphereReflection.ts#L25)

___

### debug

▸ **debug**(`index`, `scale?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `undefined` |
| `scale` | `number` | `1` |

#### Returns

`void`

#### Defined in

[src/components/renderer/SphereReflection.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SphereReflection.ts#L35)

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[Reflection](Reflection.md).[onEnable](Reflection.md#onenable)

#### Defined in

[src/components/renderer/SphereReflection.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SphereReflection.ts#L55)

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Overrides

[Reflection](Reflection.md).[onDisable](Reflection.md#ondisable)

#### Defined in

[src/components/renderer/SphereReflection.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SphereReflection.ts#L59)

___

### renderPass2

▸ **renderPass2**(`view`, `passType`, `rendererPassState`, `clusterLightingBuffer`, `encoder`, `useBundle?`): `void`

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

#### Overrides

[Reflection](Reflection.md).[renderPass2](Reflection.md#renderpass2)

#### Defined in

[src/components/renderer/SphereReflection.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SphereReflection.ts#L63)
