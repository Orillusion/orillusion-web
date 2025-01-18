# Class: Camera3D

Camera components

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`Camera3D`**

## Table of contents

### Constructors

- [constructor](Camera3D.md#constructor)

### Properties

- [object3D](Camera3D.md#object3d)
- [isDestroyed](Camera3D.md#isdestroyed)
- [fov](Camera3D.md#fov)
- [name](Camera3D.md#name)
- [aspect](Camera3D.md#aspect)
- [near](Camera3D.md#near)
- [far](Camera3D.md#far)
- [left](Camera3D.md#left)
- [right](Camera3D.md#right)
- [top](Camera3D.md#top)
- [bottom](Camera3D.md#bottom)
- [frustumSize](Camera3D.md#frustumsize)
- [frustumDepth](Camera3D.md#frustumdepth)
- [viewPort](Camera3D.md#viewport)
- [frustum](Camera3D.md#frustum)
- [sh](Camera3D.md#sh)
- [isShadowCamera](Camera3D.md#isshadowcamera)
- [mainCamera](Camera3D.md#maincamera)
- [lookTarget](Camera3D.md#looktarget)
- [type](Camera3D.md#type)
- [csm](Camera3D.md#csm)

### Accessors

- [eventDispatcher](Camera3D.md#eventdispatcher)
- [isStart](Camera3D.md#isstart)
- [transform](Camera3D.md#transform)
- [enable](Camera3D.md#enable)
- [enableCSM](Camera3D.md#enablecsm)
- [viewMatrix](Camera3D.md#viewmatrix)
- [shadowViewMatrix](Camera3D.md#shadowviewmatrix)
- [pvMatrix](Camera3D.md#pvmatrix)
- [pvMatrix2](Camera3D.md#pvmatrix2)
- [pvMatrixInv](Camera3D.md#pvmatrixinv)
- [vMatrixInv](Camera3D.md#vmatrixinv)
- [cameraToWorld](Camera3D.md#cameratoworld)
- [ndcToView](Camera3D.md#ndctoview)
- [projectionMatrixInv](Camera3D.md#projectionmatrixinv)
- [jitterFrameIndex](Camera3D.md#jitterframeindex)
- [jitterX](Camera3D.md#jitterx)
- [jitterY](Camera3D.md#jittery)

### Methods

- [start](Camera3D.md#start)
- [stop](Camera3D.md#stop)
- [onEnable](Camera3D.md#onenable)
- [onDisable](Camera3D.md#ondisable)
- [onLateUpdate](Camera3D.md#onlateupdate)
- [onBeforeUpdate](Camera3D.md#onbeforeupdate)
- [onCompute](Camera3D.md#oncompute)
- [onGraphic](Camera3D.md#ongraphic)
- [onParentChange](Camera3D.md#onparentchange)
- [onAddChild](Camera3D.md#onaddchild)
- [onRemoveChild](Camera3D.md#onremovechild)
- [cloneTo](Camera3D.md#cloneto)
- [copyComponent](Camera3D.md#copycomponent)
- [beforeDestroy](Camera3D.md#beforedestroy)
- [destroy](Camera3D.md#destroy)
- [init](Camera3D.md#init)
- [updateProjection](Camera3D.md#updateprojection)
- [getShadowBias](Camera3D.md#getshadowbias)
- [getShadowWorldExtents](Camera3D.md#getshadowworldextents)
- [getCSMShadowBiasScale](Camera3D.md#getcsmshadowbiasscale)
- [getCSMShadowWorldExtents](Camera3D.md#getcsmshadowworldextents)
- [perspective](Camera3D.md#perspective)
- [ortho](Camera3D.md#ortho)
- [ortho2](Camera3D.md#ortho2)
- [orthoOffCenter](Camera3D.md#orthooffcenter)
- [object3DToScreenRay](Camera3D.md#object3dtoscreenray)
- [screenRayToObject3D](Camera3D.md#screenraytoobject3d)
- [unProject](Camera3D.md#unproject)
- [screenPointToRay](Camera3D.md#screenpointtoray)
- [screenPointToWorld](Camera3D.md#screenpointtoworld)
- [worldToScreenPoint](Camera3D.md#worldtoscreenpoint)
- [lookAt](Camera3D.md#lookat)
- [enableJitterProjection](Camera3D.md#enablejitterprojection)
- [getWorldDirection](Camera3D.md#getworlddirection)

## Constructors

### constructor

• **new Camera3D**(): [`Camera3D`](Camera3D.md)

#### Returns

[`Camera3D`](Camera3D.md)

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/core/Camera3D.ts:155](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L155)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

[ComponentBase](ComponentBase.md).[object3D](ComponentBase.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### isDestroyed

• **isDestroyed**: `boolean` = `false`

#### Inherited from

[ComponentBase](ComponentBase.md).[isDestroyed](ComponentBase.md#isdestroyed)

#### Defined in

[src/components/ComponentBase.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L37)

___

### fov

• **fov**: `number` = `60`

camera Perspective

#### Defined in

[src/core/Camera3D.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L28)

___

### name

• **name**: `string`

camera use name

#### Defined in

[src/core/Camera3D.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L33)

___

### aspect

• **aspect**: `number` = `1`

Viewport width and height Scale

#### Defined in

[src/core/Camera3D.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L38)

___

### near

• **near**: `number` = `1`

camera near plane

#### Defined in

[src/core/Camera3D.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L43)

___

### far

• **far**: `number` = `5000`

camera far plane

#### Defined in

[src/core/Camera3D.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L48)

___

### left

• **left**: `number` = `-100`

orth camera right plane

#### Defined in

[src/core/Camera3D.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L53)

___

### right

• **right**: `number` = `100`

orth camera left plane

#### Defined in

[src/core/Camera3D.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L58)

___

### top

• **top**: `number` = `100`

orth camera top plane

#### Defined in

[src/core/Camera3D.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L63)

___

### bottom

• **bottom**: `number` = `-100`

orth camera bottom plane

#### Defined in

[src/core/Camera3D.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L68)

___

### frustumSize

• **frustumSize**: `number` = `0`

orth view size

#### Defined in

[src/core/Camera3D.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L73)

___

### frustumDepth

• **frustumDepth**: `number` = `0`

#### Defined in

[src/core/Camera3D.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L74)

___

### viewPort

• **viewPort**: [`Rect`](Rect.md)

camera view port size

#### Defined in

[src/core/Camera3D.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L79)

___

### frustum

• **frustum**: `Frustum`

camera frustum

#### Defined in

[src/core/Camera3D.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L84)

___

### sh

• **sh**: `Float32Array`

#### Defined in

[src/core/Camera3D.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L98)

___

### isShadowCamera

• **isShadowCamera**: `boolean` = `false`

this camera is shadow camera

#### Defined in

[src/core/Camera3D.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L103)

___

### mainCamera

• **mainCamera**: [`Camera3D`](Camera3D.md)

#### Defined in

[src/core/Camera3D.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L119)

___

### lookTarget

• **lookTarget**: [`Vector3`](Vector3.md)

camera look at from where point

#### Defined in

[src/core/Camera3D.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L132)

___

### type

• **type**: [`CameraType`](../enums/CameraType.md) = `CameraType.perspective`

camera type

#### Defined in

[src/core/Camera3D.ts:137](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L137)

___

### csm

• **csm**: [`FrustumCSM`](FrustumCSM.md)

#### Defined in

[src/core/Camera3D.ts:139](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L139)

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

ComponentBase.eventDispatcher

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

ComponentBase.eventDispatcher

#### Defined in

[src/components/ComponentBase.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L28)

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ComponentBase.isStart

#### Defined in

[src/components/ComponentBase.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L39)

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

ComponentBase.transform

#### Defined in

[src/components/ComponentBase.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L46)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

ComponentBase.enable

#### Defined in

[src/components/ComponentBase.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L67)

• `set` **enable**(`value`): `void`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

ComponentBase.enable

#### Defined in

[src/components/ComponentBase.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L53)

___

### enableCSM

• `get` **enableCSM**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/core/Camera3D.ts:146](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L146)

• `set` **enableCSM**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/core/Camera3D.ts:149](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L149)

___

### viewMatrix

• `get` **viewMatrix**(): [`Matrix4`](Matrix4.md)

view invert matrix

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/core/Camera3D.ts:317](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L317)

___

### shadowViewMatrix

• `get` **shadowViewMatrix**(): [`Matrix4`](Matrix4.md)

shadow camera view invert matrix

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/core/Camera3D.ts:327](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L327)

___

### pvMatrix

• `get` **pvMatrix**(): [`Matrix4`](Matrix4.md)

get project * view matrix

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/core/Camera3D.ts:378](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L378)

___

### pvMatrix2

• `get` **pvMatrix2**(): [`Matrix4`](Matrix4.md)

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/core/Camera3D.ts:383](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L383)

___

### pvMatrixInv

• `get` **pvMatrixInv**(): [`Matrix4`](Matrix4.md)

get (project * view) invert matrix

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/core/Camera3D.ts:393](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L393)

___

### vMatrixInv

• `get` **vMatrixInv**(): [`Matrix4`](Matrix4.md)

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/core/Camera3D.ts:399](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L399)

___

### cameraToWorld

• `get` **cameraToWorld**(): [`Matrix4`](Matrix4.md)

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/core/Camera3D.ts:405](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L405)

___

### ndcToView

• `get` **ndcToView**(): [`Matrix4`](Matrix4.md)

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/core/Camera3D.ts:413](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L413)

___

### projectionMatrixInv

• `get` **projectionMatrixInv**(): [`Matrix4`](Matrix4.md)

get project invert matrix

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/core/Camera3D.ts:423](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L423)

___

### jitterFrameIndex

• `get` **jitterFrameIndex**(): `number`

#### Returns

`number`

#### Defined in

[src/core/Camera3D.ts:549](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L549)

___

### jitterX

• `get` **jitterX**(): `number`

#### Returns

`number`

#### Defined in

[src/core/Camera3D.ts:553](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L553)

___

### jitterY

• `get` **jitterY**(): `number`

#### Returns

`number`

#### Defined in

[src/core/Camera3D.ts:557](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L557)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[start](ComponentBase.md#start)

#### Defined in

[src/components/ComponentBase.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L112)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[stop](ComponentBase.md#stop)

#### Defined in

[src/components/ComponentBase.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

___

### onEnable

▸ **onEnable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onEnable](ComponentBase.md#onenable)

#### Defined in

[src/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L114)

___

### onDisable

▸ **onDisable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onDisable](ComponentBase.md#ondisable)

#### Defined in

[src/components/ComponentBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L115)

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

[ComponentBase](ComponentBase.md).[onLateUpdate](ComponentBase.md#onlateupdate)

#### Defined in

[src/components/ComponentBase.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L117)

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

[ComponentBase](ComponentBase.md).[onBeforeUpdate](ComponentBase.md#onbeforeupdate)

#### Defined in

[src/components/ComponentBase.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L118)

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

[ComponentBase](ComponentBase.md).[onCompute](ComponentBase.md#oncompute)

#### Defined in

[src/components/ComponentBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L119)

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

[ComponentBase](ComponentBase.md).[onGraphic](ComponentBase.md#ongraphic)

#### Defined in

[src/components/ComponentBase.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L120)

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

[ComponentBase](ComponentBase.md).[onParentChange](ComponentBase.md#onparentchange)

#### Defined in

[src/components/ComponentBase.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L121)

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

[ComponentBase](ComponentBase.md).[onAddChild](ComponentBase.md#onaddchild)

#### Defined in

[src/components/ComponentBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L122)

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

[ComponentBase](ComponentBase.md).[onRemoveChild](ComponentBase.md#onremovechild)

#### Defined in

[src/components/ComponentBase.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L123)

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

[ComponentBase](ComponentBase.md).[cloneTo](ComponentBase.md#cloneto)

#### Defined in

[src/components/ComponentBase.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L130)

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

[ComponentBase](ComponentBase.md).[copyComponent](ComponentBase.md#copycomponent)

#### Defined in

[src/components/ComponentBase.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L132)

___

### beforeDestroy

▸ **beforeDestroy**(`force?`): `void`

before release this component, object refrences are not be set null now.

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[beforeDestroy](ComponentBase.md#beforedestroy)

#### Defined in

[src/components/ComponentBase.ts:199](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L199)

___

### destroy

▸ **destroy**(`force?`): `void`

release this component

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[destroy](ComponentBase.md#destroy)

#### Defined in

[src/components/ComponentBase.ts:206](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L206)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[init](ComponentBase.md#init)

#### Defined in

[src/core/Camera3D.ts:159](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L159)

___

### updateProjection

▸ **updateProjection**(): `void`

#### Returns

`void`

#### Defined in

[src/core/Camera3D.ts:175](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L175)

___

### getShadowBias

▸ **getShadowBias**(`depthTexSize`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `depthTexSize` | `number` |

#### Returns

`number`

#### Defined in

[src/core/Camera3D.ts:189](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L189)

___

### getShadowWorldExtents

▸ **getShadowWorldExtents**(): `number`

#### Returns

`number`

#### Defined in

[src/core/Camera3D.ts:195](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L195)

___

### getCSMShadowBiasScale

▸ **getCSMShadowBiasScale**(`shadowCamera`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shadowCamera` | [`Camera3D`](Camera3D.md) |

#### Returns

`number`

#### Defined in

[src/core/Camera3D.ts:211](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L211)

___

### getCSMShadowWorldExtents

▸ **getCSMShadowWorldExtents**(`index`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`number`

#### Defined in

[src/core/Camera3D.ts:221](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L221)

___

### perspective

▸ **perspective**(`fov`, `aspect`, `near`, `far`): `void`

Create a perspective camera

#### Parameters

| Name | Type |
| :------ | :------ |
| `fov` | `number` |
| `aspect` | `number` |
| `near` | `number` |
| `far` | `number` |

#### Returns

`void`

#### Defined in

[src/core/Camera3D.ts:232](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L232)

___

### ortho

▸ **ortho**(`frustumSize`, `frustumDepth`): `void`

set an orthographic camera with a frustumSize(viewHeight) and frustumSizeDepth

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `frustumSize` | `number` | the frustum view height |
| `frustumDepth` | `number` | - |

#### Returns

`void`

#### Defined in

[src/core/Camera3D.ts:252](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L252)

___

### ortho2

▸ **ortho2**(`frustumSize`, `near`, `far`): `void`

set an orthographic camera with a frustumSize(viewHeight) and specific near & far

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `frustumSize` | `number` | the frustum view height |
| `near` | `number` | camera near plane |
| `far` | `number` | camera far plane |

#### Returns

`void`

#### Defined in

[src/core/Camera3D.ts:275](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L275)

___

### orthoOffCenter

▸ **orthoOffCenter**(`left`, `right`, `bottom`, `top`, `near`, `far`): `void`

set an orthographic camera with specified frustum space

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `number` | camera left plane |
| `right` | `number` | camera right plane |
| `bottom` | `number` | camera bottom plane |
| `top` | `number` | camera top plane |
| `near` | `number` | camera near plane |
| `far` | `number` | camera far plane |

#### Returns

`void`

#### Defined in

[src/core/Camera3D.ts:296](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L296)

___

### object3DToScreenRay

▸ **object3DToScreenRay**(`n`, `target?`): [`Vector3`](Vector3.md)

world space object to screen

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `n` | [`Vector3`](Vector3.md) | `undefined` | world space |
| `target` | [`Vector3`](Vector3.md) | `null` | Creating an orthogonal camera with 2D screen coordinates that default to null will return a new object |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/core/Camera3D.ts:339](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L339)

___

### screenRayToObject3D

▸ **screenRayToObject3D**(`n`, `target?`): [`Vector3`](Vector3.md)

Convert 2D screen coordinates to 3D coordinates as world space

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `n` | [`Vector3`](Vector3.md) | `undefined` | 2D screen coordinates |
| `target` | [`Vector3`](Vector3.md) | `null` | 3D coordinates as world space |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/core/Camera3D.ts:359](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L359)

___

### unProject

▸ **unProject**(`nX`, `nY`, `sZ`, `target?`): [`Vector3`](Vector3.md)

Enter a 3D coordinate point to obtain the projected coordinate point

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nX` | `number` | 3D x |
| `nY` | `number` | 3D y |
| `sZ` | `number` | 3D z |
| `target?` | [`Vector3`](Vector3.md) | The projected coordinate point can be empty |

#### Returns

[`Vector3`](Vector3.md)

Coordinates after projection

#### Defined in

[src/core/Camera3D.ts:437](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L437)

___

### screenPointToRay

▸ **screenPointToRay**(`viewPortPosX`, `viewPortPosY`): [`Ray`](Ray.md)

Enter the 2D coordinates of the screen to obtain a ray that starts from the camera position and passes through the corresponding 3D position of the screen.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `viewPortPosX` | `number` | Screen x coordinate |
| `viewPortPosY` | `number` | Screen y coordinate |

#### Returns

[`Ray`](Ray.md)

ray

#### Defined in

[src/core/Camera3D.ts:476](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L476)

___

### screenPointToWorld

▸ **screenPointToWorld**(`viewPortPosX`, `viewPortPosY`, `z`): [`Vector3`](Vector3.md)

Convert screen coordinates to world coordinates

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `viewPortPosX` | `number` | Screen x coordinate |
| `viewPortPosY` | `number` | Screen y coordinate |
| `z` | `number` | Screen z coordinate |

#### Returns

[`Vector3`](Vector3.md)

World coordinates

#### Defined in

[src/core/Camera3D.ts:497](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L497)

___

### worldToScreenPoint

▸ **worldToScreenPoint**(`point`, `target?`): [`Vector3`](Vector3.md)

Convert world coordinates to screen coordinates

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Vector3`](Vector3.md) |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

World coordinates

#### Defined in

[src/core/Camera3D.ts:509](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L509)

___

### lookAt

▸ **lookAt**(`pos`, `target`, `up?`): `void`

Current object's gaze position (global) (modified by its own global transformation)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) | `undefined` | Own position (global) |
| `target` | [`Vector3`](Vector3.md) | `undefined` | Location of the target (global) |
| `up` | [`Vector3`](Vector3.md) | `Vector3.Y_AXIS` | Upward direction |

#### Returns

`void`

#### Defined in

[src/core/Camera3D.ts:520](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L520)

___

### enableJitterProjection

▸ **enableJitterProjection**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/core/Camera3D.ts:561](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L561)

___

### getWorldDirection

▸ **getWorldDirection**(`target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/core/Camera3D.ts:668](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L668)
