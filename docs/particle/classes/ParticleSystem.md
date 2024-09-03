# Class: ParticleSystem

A particle system can simulate and render many small images or geometries, it called particles to produce visual effects

## Hierarchy

- `RenderNode`

  ↳ **`ParticleSystem`**

### Constructors

- [constructor](ParticleSystem.md#constructor)

### Properties

- [autoPlay](ParticleSystem.md#autoplay)
- [particleSimulator](ParticleSystem.md#particlesimulator)
- [playing](ParticleSystem.md#playing)
- [playSpeed](ParticleSystem.md#playspeed)
- [object3D](ParticleSystem.md#object3d)
- [isDestroyed](ParticleSystem.md#isdestroyed)
- [instanceCount](ParticleSystem.md#instancecount)
- [lodLevel](ParticleSystem.md#lodlevel)
- [alwaysRender](ParticleSystem.md#alwaysrender)
- [instanceID](ParticleSystem.md#instanceid)
- [drawType](ParticleSystem.md#drawtype)
- [isRenderOrderChange](ParticleSystem.md#isrenderorderchange)
- [needSortOnCameraZ](ParticleSystem.md#needsortoncameraz)
- [isRecievePostEffectUI](ParticleSystem.md#isrecieveposteffectui)

### Accessors

- [material](ParticleSystem.md#material)
- [geometry](ParticleSystem.md#geometry)
- [preheatTime](ParticleSystem.md#preheattime)
- [looping](ParticleSystem.md#looping)
- [eventDispatcher](ParticleSystem.md#eventdispatcher)
- [isStart](ParticleSystem.md#isstart)
- [transform](ParticleSystem.md#transform)
- [enable](ParticleSystem.md#enable)
- [renderLayer](ParticleSystem.md#renderlayer)
- [rendererMask](ParticleSystem.md#renderermask)
- [renderOrder](ParticleSystem.md#renderorder)
- [materials](ParticleSystem.md#materials)
- [castShadow](ParticleSystem.md#castshadow)
- [castGI](ParticleSystem.md#castgi)
- [castReflection](ParticleSystem.md#castreflection)

### Methods

- [init](ParticleSystem.md#init)
- [useSimulator](ParticleSystem.md#usesimulator)
- [play](ParticleSystem.md#play)
- [stop](ParticleSystem.md#stop)
- [start](ParticleSystem.md#start)
- [onCompute](ParticleSystem.md#oncompute)
- [onUpdate](ParticleSystem.md#onupdate)
- [onLateUpdate](ParticleSystem.md#onlateupdate)
- [onBeforeUpdate](ParticleSystem.md#onbeforeupdate)
- [onGraphic](ParticleSystem.md#ongraphic)
- [onParentChange](ParticleSystem.md#onparentchange)
- [onAddChild](ParticleSystem.md#onaddchild)
- [onRemoveChild](ParticleSystem.md#onremovechild)
- [cloneTo](ParticleSystem.md#cloneto)
- [attachSceneOctree](ParticleSystem.md#attachsceneoctree)
- [detachSceneOctree](ParticleSystem.md#detachsceneoctree)
- [copyComponent](ParticleSystem.md#copycomponent)
- [addMask](ParticleSystem.md#addmask)
- [removeMask](ParticleSystem.md#removemask)
- [hasMask](ParticleSystem.md#hasmask)
- [addRendererMask](ParticleSystem.md#addrenderermask)
- [removeRendererMask](ParticleSystem.md#removerenderermask)
- [onEnable](ParticleSystem.md#onenable)
- [onDisable](ParticleSystem.md#ondisable)
- [selfCloneMaterials](ParticleSystem.md#selfclonematerials)
- [renderPass](ParticleSystem.md#renderpass)
- [renderPass2](ParticleSystem.md#renderpass2)
- [recordRenderPass2](ParticleSystem.md#recordrenderpass2)
- [preInit](ParticleSystem.md#preinit)
- [nodeUpdate](ParticleSystem.md#nodeupdate)
- [beforeDestroy](ParticleSystem.md#beforedestroy)
- [destroy](ParticleSystem.md#destroy)

## Constructors

### constructor

• **new ParticleSystem**(): [`ParticleSystem`](ParticleSystem.md)

#### Returns

[`ParticleSystem`](ParticleSystem.md)

#### Overrides

RenderNode.constructor

#### Defined in

[packages/particle/ParticleSystem.ts:31](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L31)

## Properties

### autoPlay

• **autoPlay**: `boolean` = `true`

whether the animation will auto play

#### Defined in

[packages/particle/ParticleSystem.ts:14](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L14)

___

### particleSimulator

• **particleSimulator**: `ParticleSimulator`

the simulator of particle.

#### Defined in

[packages/particle/ParticleSystem.ts:19](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L19)

___

### playing

• **playing**: `boolean` = `false`

playing status

#### Defined in

[packages/particle/ParticleSystem.ts:24](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L24)

___

### playSpeed

• **playSpeed**: `number` = `1.0`

animation playing speed

#### Defined in

[packages/particle/ParticleSystem.ts:29](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L29)

___

### object3D

• **object3D**: `Object3D` = `null`

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

[src/components/renderer/RenderNode.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L35)

___

### lodLevel

• **lodLevel**: `number` = `0`

#### Inherited from

RenderNode.lodLevel

#### Defined in

[src/components/renderer/RenderNode.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L36)

___

### alwaysRender

• **alwaysRender**: `boolean` = `false`

#### Inherited from

RenderNode.alwaysRender

#### Defined in

[src/components/renderer/RenderNode.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L37)

___

### instanceID

• **instanceID**: `string`

#### Inherited from

RenderNode.instanceID

#### Defined in

[src/components/renderer/RenderNode.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L38)

___

### drawType

• **drawType**: `number` = `0`

#### Inherited from

RenderNode.drawType

#### Defined in

[src/components/renderer/RenderNode.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L39)

___

### isRenderOrderChange

• `Optional` **isRenderOrderChange**: `boolean`

#### Inherited from

RenderNode.isRenderOrderChange

#### Defined in

[src/components/renderer/RenderNode.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L55)

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Inherited from

RenderNode.needSortOnCameraZ

#### Defined in

[src/components/renderer/RenderNode.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L56)

___

### isRecievePostEffectUI

• `Optional` **isRecievePostEffectUI**: `boolean`

#### Inherited from

RenderNode.isRecievePostEffectUI

#### Defined in

[src/components/renderer/RenderNode.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L57)

## Accessors

### material

• `get` **material**(): `Material`

material

#### Returns

`Material`

#### Defined in

[packages/particle/ParticleSystem.ts:42](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L42)

• `set` **material**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Material` |

#### Returns

`void`

#### Defined in

[packages/particle/ParticleSystem.ts:46](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L46)

___

### geometry

• `get` **geometry**(): `GeometryBase`

The geometry of the mesh determines its shape

#### Returns

`GeometryBase`

#### Overrides

RenderNode.geometry

#### Defined in

[packages/particle/ParticleSystem.ts:53](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L53)

• `set` **geometry**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GeometryBase` |

#### Returns

`void`

#### Overrides

RenderNode.geometry

#### Defined in

[packages/particle/ParticleSystem.ts:57](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L57)

___

### preheatTime

• `get` **preheatTime**(): `number`

Get preheat time(second)

#### Returns

`number`

#### Defined in

[packages/particle/ParticleSystem.ts:76](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L76)

• `set` **preheatTime**(`value`): `void`

Set preheat time(second)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/particle/ParticleSystem.ts:69](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L69)

___

### looping

• `get` **looping**(): `boolean`

Get particle simulator's looping

#### Returns

`boolean`

#### Defined in

[packages/particle/ParticleSystem.ts:90](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L90)

• `set` **looping**(`value`): `void`

Set particle simulator's looping

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/particle/ParticleSystem.ts:83](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L83)

___

### eventDispatcher

• `get` **eventDispatcher**(): `CEventDispatcher`

#### Returns

`CEventDispatcher`

#### Inherited from

RenderNode.eventDispatcher

#### Defined in

[src/components/ComponentBase.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L23)

• `set` **eventDispatcher**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `CEventDispatcher` |

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

• `get` **transform**(): `Transform`

Return the Transform component attached to the Object3D.

#### Returns

`Transform`

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

[src/components/renderer/RenderNode.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L110)

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

[src/components/renderer/RenderNode.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L114)

___

### rendererMask

• `get` **rendererMask**(): `number`

#### Returns

`number`

#### Inherited from

RenderNode.rendererMask

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

RenderNode.rendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:156](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L156)

___

### renderOrder

• `get` **renderOrder**(): `number`

#### Returns

`number`

#### Inherited from

RenderNode.renderOrder

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

RenderNode.renderOrder

#### Defined in

[src/components/renderer/RenderNode.ts:164](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L164)

___

### materials

• `get` **materials**(): `Material`[]

#### Returns

`Material`[]

#### Inherited from

RenderNode.materials

#### Defined in

[src/components/renderer/RenderNode.ts:173](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L173)

• `set` **materials**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Material`[] |

#### Returns

`void`

#### Inherited from

RenderNode.materials

#### Defined in

[src/components/renderer/RenderNode.ts:177](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L177)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.castShadow

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

RenderNode.castShadow

#### Defined in

[src/components/renderer/RenderNode.ts:349](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L349)

___

### castGI

• `get` **castGI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.castGI

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

RenderNode.castGI

#### Defined in

[src/components/renderer/RenderNode.ts:358](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L358)

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.castReflection

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

RenderNode.castReflection

#### Defined in

[src/components/renderer/RenderNode.ts:366](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L366)

## Methods

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

RenderNode.init

#### Defined in

[packages/particle/ParticleSystem.ts:94](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L94)

___

### useSimulator

▸ **useSimulator**\<`T`\>(`c`): `ParticleSimulator`

Set to use the specified particle emulator

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ParticleSimulator` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | `Ctor`\<`T`\> | class of particle emulator |

#### Returns

`ParticleSimulator`

#### Defined in

[packages/particle/ParticleSystem.ts:102](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L102)

___

### play

▸ **play**(`speed?`): `void`

start to play animation, with a speed value

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `speed` | `number` | `1.0` | playSpeed, see[playSpeed](ParticleSystem.md#playspeed) |

#### Returns

`void`

#### Defined in

[packages/particle/ParticleSystem.ts:112](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L112)

___

### stop

▸ **stop**(): `void`

stop playing

#### Returns

`void`

#### Overrides

RenderNode.stop

#### Defined in

[packages/particle/ParticleSystem.ts:120](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L120)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

RenderNode.start

#### Defined in

[packages/particle/ParticleSystem.ts:124](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L124)

___

### onCompute

▸ **onCompute**(`view`, `command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | `View3D` |
| `command` | `GPUCommandEncoder` |

#### Returns

`void`

#### Overrides

RenderNode.onCompute

#### Defined in

[packages/particle/ParticleSystem.ts:147](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L147)

___

### onUpdate

▸ **onUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

RenderNode.onUpdate

#### Defined in

[src/components/ComponentBase.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L117)

___

### onLateUpdate

▸ **onLateUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

RenderNode.onLateUpdate

#### Defined in

[src/components/ComponentBase.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L118)

___

### onBeforeUpdate

▸ **onBeforeUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

RenderNode.onBeforeUpdate

#### Defined in

[src/components/ComponentBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L119)

___

### onGraphic

▸ **onGraphic**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `View3D` |

#### Returns

`any`

#### Inherited from

RenderNode.onGraphic

#### Defined in

[src/components/ComponentBase.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L121)

___

### onParentChange

▸ **onParentChange**(`lastParent?`, `currentParent?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lastParent?` | `Object3D` |
| `currentParent?` | `Object3D` |

#### Returns

`any`

#### Inherited from

RenderNode.onParentChange

#### Defined in

[src/components/ComponentBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L122)

___

### onAddChild

▸ **onAddChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | `Object3D` |

#### Returns

`any`

#### Inherited from

RenderNode.onAddChild

#### Defined in

[src/components/ComponentBase.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L123)

___

### onRemoveChild

▸ **onRemoveChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | `Object3D` |

#### Returns

`any`

#### Inherited from

RenderNode.onRemoveChild

#### Defined in

[src/components/ComponentBase.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L124)

___

### cloneTo

▸ **cloneTo**(`obj`): `void`

clone component data to target object3D

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `Object3D` | target object3D |

#### Returns

`void`

#### Inherited from

RenderNode.cloneTo

#### Defined in

[src/components/ComponentBase.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L131)

___

### attachSceneOctree

▸ **attachSceneOctree**(`octree`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `octree` | `Octree` |

#### Returns

`void`

#### Inherited from

RenderNode.attachSceneOctree

#### Defined in

[src/components/renderer/RenderNode.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L78)

___

### detachSceneOctree

▸ **detachSceneOctree**(): `void`

#### Returns

`void`

#### Inherited from

RenderNode.detachSceneOctree

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

RenderNode.copyComponent

#### Defined in

[src/components/renderer/RenderNode.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L95)

___

### addMask

▸ **addMask**(`mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | `RendererMask` |

#### Returns

`void`

#### Inherited from

RenderNode.addMask

#### Defined in

[src/components/renderer/RenderNode.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L140)

___

### removeMask

▸ **removeMask**(`mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | `RendererMask` |

#### Returns

`void`

#### Inherited from

RenderNode.removeMask

#### Defined in

[src/components/renderer/RenderNode.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L144)

___

### hasMask

▸ **hasMask**(`mask`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | `RendererMask` |

#### Returns

`boolean`

#### Inherited from

RenderNode.hasMask

#### Defined in

[src/components/renderer/RenderNode.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L148)

___

### addRendererMask

▸ **addRendererMask**(`tag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `RendererMask` |

#### Returns

`void`

#### Inherited from

RenderNode.addRendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:228](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L228)

___

### removeRendererMask

▸ **removeRendererMask**(`tag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `RendererMask` |

#### Returns

`void`

#### Inherited from

RenderNode.removeRendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:232](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L232)

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Inherited from

RenderNode.onEnable

#### Defined in

[src/components/renderer/RenderNode.ts:236](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L236)

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Inherited from

RenderNode.onDisable

#### Defined in

[src/components/renderer/RenderNode.ts:246](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L246)

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

RenderNode.selfCloneMaterials

#### Defined in

[src/components/renderer/RenderNode.ts:252](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L252)

___

### renderPass

▸ **renderPass**(`view`, `passType`, `renderContext`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | `View3D` |
| `passType` | `PassType` |
| `renderContext` | `RenderContext` |

#### Returns

`void`

#### Inherited from

RenderNode.renderPass

#### Defined in

[src/components/renderer/RenderNode.ts:370](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L370)

___

### renderPass2

▸ **renderPass2**(`view`, `passType`, `rendererPassState`, `clusterLightingBuffer`, `encoder`, `useBundle?`): `void`

render pass at passType

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `view` | `View3D` | `undefined` |
| `passType` | `PassType` | `undefined` |
| `rendererPassState` | `RendererPassState` | `undefined` |
| `clusterLightingBuffer` | `ClusterLightingBuffer` | `undefined` |
| `encoder` | `GPURenderPassEncoder` | `undefined` |
| `useBundle` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

RenderNode.renderPass2

#### Defined in

[src/components/renderer/RenderNode.ts:438](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L438)

___

### recordRenderPass2

▸ **recordRenderPass2**(`view`, `passType`, `rendererPassState`, `clusterLightingBuffer`, `encoder`, `useBundle?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `view` | `View3D` | `undefined` |
| `passType` | `PassType` | `undefined` |
| `rendererPassState` | `RendererPassState` | `undefined` |
| `clusterLightingBuffer` | `ClusterLightingBuffer` | `undefined` |
| `encoder` | `GPURenderPassEncoder` | `undefined` |
| `useBundle` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

RenderNode.recordRenderPass2

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

RenderNode.preInit

#### Defined in

[src/components/renderer/RenderNode.ts:519](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L519)

___

### nodeUpdate

▸ **nodeUpdate**(`view`, `passType`, `renderPassState`, `clusterLightingBuffer?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | `View3D` |
| `passType` | `PassType` |
| `renderPassState` | `RendererPassState` |
| `clusterLightingBuffer?` | `ClusterLightingBuffer` |

#### Returns

`void`

#### Inherited from

RenderNode.nodeUpdate

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

RenderNode.beforeDestroy

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

RenderNode.destroy

#### Defined in

[src/components/renderer/RenderNode.ts:625](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L625)
