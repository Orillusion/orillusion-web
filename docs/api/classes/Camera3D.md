# Class: Camera3D

Camera components

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`Camera3D`**

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
- [viewPort](Camera3D.md#viewport)
- [frustum](Camera3D.md#frustum)
- [sh\_bak](Camera3D.md#sh_bak)
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
- [getShadowBias](Camera3D.md#getshadowbias)
- [getShadowWorldExtents](Camera3D.md#getshadowworldextents)
- [getCSMShadowBiasScale](Camera3D.md#getcsmshadowbiasscale)
- [getCSMShadowWorldExtents](Camera3D.md#getcsmshadowworldextents)
- [perspective](Camera3D.md#perspective)
- [resetPerspective](Camera3D.md#resetperspective)
- [ortho](Camera3D.md#ortho)
- [orthoOffCenter](Camera3D.md#orthooffcenter)
- [orthoZo](Camera3D.md#orthozo)
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

[src/core/Camera3D.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L128)

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

• `Optional` **isDestroyed**: `boolean`

#### Inherited from

[ComponentBase](ComponentBase.md).[isDestroyed](ComponentBase.md#isdestroyed)

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### fov

• **fov**: `number` = `1`

camera Perspective

#### Defined in

[src/core/Camera3D.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L27)

___

### name

• **name**: `string`

camera use name

#### Defined in

[src/core/Camera3D.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L32)

___

### aspect

• **aspect**: `number` = `1`

Viewport width and height Scale

#### Defined in

[src/core/Camera3D.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L37)

___

### near

• **near**: `number` = `1`

camera near plane

#### Defined in

[src/core/Camera3D.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L42)

___

### far

• **far**: `number` = `5000`

camera far plane

#### Defined in

[src/core/Camera3D.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L47)

___

### viewPort

• **viewPort**: [`Rect`](Rect.md)

camera view port size

#### Defined in

[src/core/Camera3D.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L52)

___

### frustum

• **frustum**: `Frustum`

camera frustum

#### Defined in

[src/core/Camera3D.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L57)

___

### sh\_bak

• **sh\_bak**: `Float32Array`

#### Defined in

[src/core/Camera3D.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L59)

___

### sh

• **sh**: `Float32Array`

#### Defined in

[src/core/Camera3D.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L71)

___

### isShadowCamera

• **isShadowCamera**: `boolean` = `false`

this camera is shadow camera

#### Defined in

[src/core/Camera3D.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L76)

___

### mainCamera

• **mainCamera**: [`Camera3D`](Camera3D.md)

#### Defined in

[src/core/Camera3D.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L92)

___

### lookTarget

• **lookTarget**: [`Vector3`](Vector3.md)

camera look at from where point

#### Defined in

[src/core/Camera3D.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L105)

___

### type

• **type**: [`CameraType`](../enums/CameraType.md) = `CameraType.perspective`

camera type

#### Defined in

[src/core/Camera3D.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L110)

___

### csm

• **csm**: [`FrustumCSM`](FrustumCSM.md)

#### Defined in

[src/core/Camera3D.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L112)

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

[src/components/ComponentBase.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L40)

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

ComponentBase.transform

#### Defined in

[src/components/ComponentBase.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L47)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

ComponentBase.enable

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

ComponentBase.enable

#### Defined in

[src/components/ComponentBase.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L54)

___

### enableCSM

• `get` **enableCSM**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/core/Camera3D.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L119)

• `set` **enableCSM**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/core/Camera3D.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L122)

___

### viewMatrix

• `get` **viewMatrix**(): [`Matrix4`](Matrix4.md)

view invert matrix

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/core/Camera3D.ts:246](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L246)

___

### shadowViewMatrix

• `get` **shadowViewMatrix**(): [`Matrix4`](Matrix4.md)

shadow camera view invert matrix

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/core/Camera3D.ts:256](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L256)

___

### pvMatrix

• `get` **pvMatrix**(): [`Matrix4`](Matrix4.md)

get project * view matrix

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/core/Camera3D.ts:307](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L307)

___

### pvMatrix2

• `get` **pvMatrix2**(): [`Matrix4`](Matrix4.md)

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/core/Camera3D.ts:312](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L312)

___

### pvMatrixInv

• `get` **pvMatrixInv**(): [`Matrix4`](Matrix4.md)

get (project * view) invert matrix

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/core/Camera3D.ts:322](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L322)

___

### vMatrixInv

• `get` **vMatrixInv**(): [`Matrix4`](Matrix4.md)

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/core/Camera3D.ts:328](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L328)

___

### cameraToWorld

• `get` **cameraToWorld**(): [`Matrix4`](Matrix4.md)

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/core/Camera3D.ts:334](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L334)

___

### ndcToView

• `get` **ndcToView**(): [`Matrix4`](Matrix4.md)

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/core/Camera3D.ts:342](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L342)

___

### projectionMatrixInv

• `get` **projectionMatrixInv**(): [`Matrix4`](Matrix4.md)

get project invert matrix

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

[src/core/Camera3D.ts:352](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L352)

___

### jitterFrameIndex

• `get` **jitterFrameIndex**(): `number`

#### Returns

`number`

#### Defined in

[src/core/Camera3D.ts:486](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L486)

___

### jitterX

• `get` **jitterX**(): `number`

#### Returns

`number`

#### Defined in

[src/core/Camera3D.ts:490](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L490)

___

### jitterY

• `get` **jitterY**(): `number`

#### Returns

`number`

#### Defined in

[src/core/Camera3D.ts:494](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L494)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[start](ComponentBase.md#start)

#### Defined in

[src/components/ComponentBase.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[stop](ComponentBase.md#stop)

#### Defined in

[src/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L114)

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

[src/components/ComponentBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L115)

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

[src/components/ComponentBase.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L116)

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

[ComponentBase](ComponentBase.md).[onBeforeUpdate](ComponentBase.md#onbeforeupdate)

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

[ComponentBase](ComponentBase.md).[onCompute](ComponentBase.md#oncompute)

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

[ComponentBase](ComponentBase.md).[onGraphic](ComponentBase.md#ongraphic)

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

[ComponentBase](ComponentBase.md).[onParentChange](ComponentBase.md#onparentchange)

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

[ComponentBase](ComponentBase.md).[onAddChild](ComponentBase.md#onaddchild)

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

[ComponentBase](ComponentBase.md).[onRemoveChild](ComponentBase.md#onremovechild)

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

[ComponentBase](ComponentBase.md).[cloneTo](ComponentBase.md#cloneto)

#### Defined in

[src/components/ComponentBase.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L131)

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

[src/components/ComponentBase.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L133)

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

[src/components/ComponentBase.ts:200](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L200)

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

[src/components/ComponentBase.ts:207](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L207)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[init](ComponentBase.md#init)

#### Defined in

[src/core/Camera3D.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L132)

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

[src/core/Camera3D.ts:146](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L146)

___

### getShadowWorldExtents

▸ **getShadowWorldExtents**(): `number`

#### Returns

`number`

#### Defined in

[src/core/Camera3D.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L152)

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

[src/core/Camera3D.ts:168](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L168)

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

[src/core/Camera3D.ts:178](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L178)

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

[src/core/Camera3D.ts:189](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L189)

___

### resetPerspective

▸ **resetPerspective**(`aspect`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `aspect` | `number` |

#### Returns

`void`

#### Defined in

[src/core/Camera3D.ts:198](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L198)

___

### ortho

▸ **ortho**(`width`, `height`, `znear`, `zfar`): `void`

Create an orthographic camera

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `width` | `number` | screen width |
| `height` | `number` | screen height |
| `znear` | `number` | camera near plane |
| `zfar` | `number` | camera far plane |

#### Returns

`void`

#### Defined in

[src/core/Camera3D.ts:211](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L211)

___

### orthoOffCenter

▸ **orthoOffCenter**(`l`, `r`, `b`, `t`, `zn`, `zf`): `void`

Create an orthographic camera

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `l` | `number` |  |
| `r` | `number` |  |
| `b` | `number` |  |
| `t` | `number` |  |
| `zn` | `number` | camera near plane |
| `zf` | `number` | camera far plane |

#### Returns

`void`

#### Defined in

[src/core/Camera3D.ts:228](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L228)

___

### orthoZo

▸ **orthoZo**(`l`, `r`, `b`, `t`, `zn`, `zf`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `l` | `number` |
| `r` | `number` |
| `b` | `number` |
| `t` | `number` |
| `zn` | `number` |
| `zf` | `number` |

#### Returns

`void`

#### Defined in

[src/core/Camera3D.ts:235](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L235)

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

[src/core/Camera3D.ts:268](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L268)

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

[src/core/Camera3D.ts:288](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L288)

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

[src/core/Camera3D.ts:366](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L366)

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

[src/core/Camera3D.ts:405](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L405)

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

[src/core/Camera3D.ts:426](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L426)

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

[src/core/Camera3D.ts:438](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L438)

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

[src/core/Camera3D.ts:449](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L449)

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

[src/core/Camera3D.ts:498](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L498)

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

[src/core/Camera3D.ts:603](https://github.com/Orillusion/orillusion/blob/main/src/core/Camera3D.ts#L603)
