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
- [preInit](ParticleSystem.md#preinit)

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
- [nodeUpdate](ParticleSystem.md#nodeupdate)
- [beforeDestroy](ParticleSystem.md#beforedestroy)
- [destroy](ParticleSystem.md#destroy)

## Constructors

### constructor

• **new ParticleSystem**()

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

• `get` **materials**(): `Material`[]

#### Returns

`Material`[]

#### Inherited from

RenderNode.materials

#### Defined in

[src/components/renderer/RenderNode.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L161)

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

▸ **useSimulator**<`T`\>(`c`): `ParticleSimulator`

Set to use the specified particle emulator

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ParticleSimulator`<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `c` | `Ctor`<`T`\> | class of particle emulator |

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

▸ `Optional` **onUpdate**(`view?`): `any`

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

▸ `Optional` **onLateUpdate**(`view?`): `any`

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

▸ `Optional` **onBeforeUpdate**(`view?`): `any`

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

▸ `Optional` **onGraphic**(`view?`): `any`

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

▸ `Optional` **onParentChange**(`lastParent?`, `currentParent?`): `any`

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

[src/components/ComponentBase.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L129)

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

▸ **copyComponent**(`from`): [`ParticleSystem`](ParticleSystem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`ParticleSystem`](ParticleSystem.md) |

#### Returns

[`ParticleSystem`](ParticleSystem.md)

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
| `mask` | `RendererMask` |

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
| `mask` | `RendererMask` |

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
| `mask` | `RendererMask` |

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
| `tag` | `RendererMask` |

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
| `tag` | `RendererMask` |

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

▸ **selfCloneMaterials**(`key`): [`ParticleSystem`](ParticleSystem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`ParticleSystem`](ParticleSystem.md)

#### Inherited from

RenderNode.selfCloneMaterials

#### Defined in

[src/components/renderer/RenderNode.ts:221](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L221)

___

### renderPass

▸ **renderPass**(`view`, `passType`, `renderContext`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | `View3D` |
| `passType` | `RendererType` |
| `renderContext` | `RenderContext` |

#### Returns

`void`

#### Inherited from

RenderNode.renderPass

#### Defined in

[src/components/renderer/RenderNode.ts:343](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L343)

___

### renderPass2

▸ **renderPass2**(`view`, `passType`, `rendererPassState`, `clusterLightingBuffer`, `encoder`, `useBundle?`): `void`

render pass at passType

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `view` | `View3D` | `undefined` |
| `passType` | `RendererType` | `undefined` |
| `rendererPassState` | `RendererPassState` | `undefined` |
| `clusterLightingBuffer` | `ClusterLightingBuffer` | `undefined` |
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
| `view` | `View3D` | `undefined` |
| `passType` | `RendererType` | `undefined` |
| `rendererPassState` | `RendererPassState` | `undefined` |
| `clusterLightingBuffer` | `ClusterLightingBuffer` | `undefined` |
| `encoder` | `GPURenderPassEncoder` | `undefined` |
| `useBundle` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

RenderNode.recordRenderPass2

#### Defined in

[src/components/renderer/RenderNode.ts:444](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L444)

___

### nodeUpdate

▸ **nodeUpdate**(`view`, `passType`, `renderPassState`, `clusterLightingBuffer?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | `View3D` |
| `passType` | `RendererType` |
| `renderPassState` | `RendererPassState` |
| `clusterLightingBuffer?` | `ClusterLightingBuffer` |

#### Returns

`void`

#### Inherited from

RenderNode.nodeUpdate

#### Defined in

[src/components/renderer/RenderNode.ts:475](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L475)

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
