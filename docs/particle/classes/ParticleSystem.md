# Class: ParticleSystem

A particle system can simulate and render many small images or geometries, it called particles to produce visual effects

## Hierarchy

- `RenderNode`

  ↳ **`ParticleSystem`**

## Table of contents

### Constructors

- [constructor](ParticleSystem.md#constructor)

### Properties

- [autoPlay](ParticleSystem.md#autoplay)
- [particleSimulator](ParticleSystem.md#particlesimulator)
- [playing](ParticleSystem.md#playing)
- [playSpeed](ParticleSystem.md#playspeed)
- [object3D](ParticleSystem.md#object3d)
- [instanceCount](ParticleSystem.md#instancecount)
- [lodLevel](ParticleSystem.md#lodlevel)
- [alwaysRender](ParticleSystem.md#alwaysrender)
- [instanceID](ParticleSystem.md#instanceid)
- [drawType](ParticleSystem.md#drawtype)
- [isRenderOrderChange](ParticleSystem.md#isrenderorderchange)
- [needSortOnCameraZ](ParticleSystem.md#needsortoncameraz)

### Accessors

- [material](ParticleSystem.md#material)
- [geometry](ParticleSystem.md#geometry)
- [preheatTime](ParticleSystem.md#preheattime)
- [looping](ParticleSystem.md#looping)
- [transform](ParticleSystem.md#transform)
- [enable](ParticleSystem.md#enable)
- [renderOrder](ParticleSystem.md#renderorder)
- [rendererMask](ParticleSystem.md#renderermask)
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

### material

• `get` **material**(): `MaterialBase`

material

#### Returns

`MaterialBase`

#### Defined in

[packages/particle/ParticleSystem.ts:41](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L41)

• `set` **material**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MaterialBase` |

#### Returns

`void`

#### Defined in

[packages/particle/ParticleSystem.ts:45](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L45)

___

### geometry

• `get` **geometry**(): `GeometryBase`

The geometry of the mesh determines its shape

#### Returns

`GeometryBase`

#### Overrides

RenderNode.geometry

#### Defined in

[packages/particle/ParticleSystem.ts:52](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L52)

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

[packages/particle/ParticleSystem.ts:56](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L56)

___

### preheatTime

• `get` **preheatTime**(): `number`

Get preheat time(second)

#### Returns

`number`

#### Defined in

[packages/particle/ParticleSystem.ts:75](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L75)

• `set` **preheatTime**(`value`): `void`

Set preheat time(second)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[packages/particle/ParticleSystem.ts:68](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L68)

___

### looping

• `get` **looping**(): `boolean`

Get particle simulator's looping

#### Returns

`boolean`

#### Defined in

[packages/particle/ParticleSystem.ts:89](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L89)

• `set` **looping**(`value`): `void`

Set particle simulator's looping

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/particle/ParticleSystem.ts:82](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L82)

___

### transform

• `get` **transform**(): `Transform`

Return the Transform component attached to the Object3D.

#### Returns

`Transform`

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

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

RenderNode.init

#### Defined in

[packages/particle/ParticleSystem.ts:93](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L93)

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

[packages/particle/ParticleSystem.ts:101](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L101)

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

[packages/particle/ParticleSystem.ts:111](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L111)

___

### stop

▸ **stop**(): `void`

stop playing

#### Returns

`void`

#### Overrides

RenderNode.stop

#### Defined in

[packages/particle/ParticleSystem.ts:119](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L119)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

RenderNode.start

#### Defined in

[packages/particle/ParticleSystem.ts:123](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L123)

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

[packages/particle/ParticleSystem.ts:146](https://github.com/Orillusion/orillusion/blob/main/packages/particle/ParticleSystem.ts#L146)

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

[src/components/ComponentBase.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L111)

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

[src/components/ComponentBase.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L112)

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

[src/components/ComponentBase.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

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

[src/components/ComponentBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L115)

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

[src/components/ComponentBase.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L116)

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

[src/components/ComponentBase.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L123)

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

[src/components/renderer/RenderNode.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L80)

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

[src/components/renderer/RenderNode.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L84)

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

[src/components/renderer/RenderNode.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L88)

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

[src/components/renderer/RenderNode.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L136)

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

[src/components/renderer/RenderNode.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L140)

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Inherited from

RenderNode.onEnable

#### Defined in

[src/components/renderer/RenderNode.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L144)

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Inherited from

RenderNode.onDisable

#### Defined in

[src/components/renderer/RenderNode.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L152)

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

[src/components/renderer/RenderNode.ts:156](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L156)

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

[src/components/renderer/RenderNode.ts:273](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L273)

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

[src/components/renderer/RenderNode.ts:324](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L324)

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

[src/components/renderer/RenderNode.ts:366](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L366)

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

[src/components/renderer/RenderNode.ts:397](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L397)

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

[src/components/renderer/RenderNode.ts:475](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L475)
