# Class: HoverCameraController

Hovering camera controller

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`HoverCameraController`**

### Constructors

- [constructor](HoverCameraController.md#constructor)

### Properties

- [object3D](HoverCameraController.md#object3d)
- [isDestroyed](HoverCameraController.md#isdestroyed)
- [camera](HoverCameraController.md#camera)
- [minDistance](HoverCameraController.md#mindistance)
- [maxDistance](HoverCameraController.md#maxdistance)
- [rollSmooth](HoverCameraController.md#rollsmooth)
- [dragSmooth](HoverCameraController.md#dragsmooth)
- [wheelSmooth](HoverCameraController.md#wheelsmooth)
- [wheelStep](HoverCameraController.md#wheelstep)
- [mouseRightFactor](HoverCameraController.md#mouserightfactor)
- [mouseLeftFactor](HoverCameraController.md#mouseleftfactor)
- [smooth](HoverCameraController.md#smooth)
- [distance](HoverCameraController.md#distance)
- [roll](HoverCameraController.md#roll)
- [pitch](HoverCameraController.md#pitch)

### Accessors

- [eventDispatcher](HoverCameraController.md#eventdispatcher)
- [isStart](HoverCameraController.md#isstart)
- [transform](HoverCameraController.md#transform)
- [enable](HoverCameraController.md#enable)
- [bottomClamp](HoverCameraController.md#bottomclamp)
- [topClamp](HoverCameraController.md#topclamp)
- [target](HoverCameraController.md#target)

### Methods

- [init](HoverCameraController.md#init)
- [stop](HoverCameraController.md#stop)
- [onEnable](HoverCameraController.md#onenable)
- [onDisable](HoverCameraController.md#ondisable)
- [onUpdate](HoverCameraController.md#onupdate)
- [onLateUpdate](HoverCameraController.md#onlateupdate)
- [onCompute](HoverCameraController.md#oncompute)
- [onGraphic](HoverCameraController.md#ongraphic)
- [onParentChange](HoverCameraController.md#onparentchange)
- [onAddChild](HoverCameraController.md#onaddchild)
- [onRemoveChild](HoverCameraController.md#onremovechild)
- [cloneTo](HoverCameraController.md#cloneto)
- [copyComponent](HoverCameraController.md#copycomponent)
- [beforeDestroy](HoverCameraController.md#beforedestroy)
- [flowTarget](HoverCameraController.md#flowtarget)
- [getFlowTarget](HoverCameraController.md#getflowtarget)
- [setCamera](HoverCameraController.md#setcamera)
- [focusByBounds](HoverCameraController.md#focusbybounds)
- [onBeforeUpdate](HoverCameraController.md#onbeforeupdate)

## Constructors

### constructor

• **new HoverCameraController**(): [`HoverCameraController`](HoverCameraController.md)

#### Returns

[`HoverCameraController`](HoverCameraController.md)

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/components/controller/HoverCameraController.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L130)

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

### camera

• **camera**: [`Camera3D`](Camera3D.md)

camera controlling

#### Defined in

[src/components/controller/HoverCameraController.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L22)

___

### minDistance

• **minDistance**: `number` = `0.1`

The closest distance that the mouse wheel can operate

#### Defined in

[src/components/controller/HoverCameraController.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L27)

___

### maxDistance

• **maxDistance**: `number` = `500`

The farthest distance that the mouse wheel can operate

#### Defined in

[src/components/controller/HoverCameraController.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L32)

___

### rollSmooth

• **rollSmooth**: `number` = `15.0`

Smoothing coefficient of rolling angle

#### Defined in

[src/components/controller/HoverCameraController.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L37)

___

### dragSmooth

• **dragSmooth**: `number` = `20`

Smoothing coefficient of dragging

#### Defined in

[src/components/controller/HoverCameraController.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L42)

___

### wheelSmooth

• **wheelSmooth**: `number` = `10`

Smoothing coefficient of rolling

#### Defined in

[src/components/controller/HoverCameraController.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L47)

___

### wheelStep

• **wheelStep**: `number` = `0.002`

Mouse scrolling step coefficient

#### Defined in

[src/components/controller/HoverCameraController.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L52)

___

### mouseRightFactor

• **mouseRightFactor**: `number` = `0.25`

Right mouse movement coefficient

#### Defined in

[src/components/controller/HoverCameraController.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L57)

___

### mouseLeftFactor

• **mouseLeftFactor**: `number` = `20`

Left mouse movement coefficient

#### Defined in

[src/components/controller/HoverCameraController.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L62)

___

### smooth

• **smooth**: `boolean` = `true`

Whether to enable smooth mode

#### Defined in

[src/components/controller/HoverCameraController.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L67)

___

### distance

• **distance**: `number` = `10`

Distance between camera and target

#### Defined in

[src/components/controller/HoverCameraController.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L79)

___

### roll

• **roll**: `number` = `0`

Roll angle around y-axis

#### Defined in

[src/components/controller/HoverCameraController.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L85)

___

### pitch

• **pitch**: `number` = `0`

Pitch angle around x-axis

#### Defined in

[src/components/controller/HoverCameraController.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L91)

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

### bottomClamp

• `get` **bottomClamp**(): `number`

Max angle of pitch

#### Returns

`number`

#### Defined in

[src/components/controller/HoverCameraController.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L109)

• `set` **bottomClamp**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/controller/HoverCameraController.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L112)

___

### topClamp

• `get` **topClamp**(): `number`

Min angle of pitch

#### Returns

`number`

#### Defined in

[src/components/controller/HoverCameraController.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L118)

• `set` **topClamp**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/controller/HoverCameraController.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L121)

___

### target

• `get` **target**(): [`Vector3`](Vector3.md)

Get target position

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/controller/HoverCameraController.ts:192](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L192)

• `set` **target**(`target`): `void`

Set target position

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/controller/HoverCameraController.ts:184](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L184)

## Methods

### init

▸ **init**(`param?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[init](ComponentBase.md#init)

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

### onUpdate

▸ **onUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onUpdate](ComponentBase.md#onupdate)

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

[ComponentBase](ComponentBase.md).[onLateUpdate](ComponentBase.md#onlateupdate)

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

### flowTarget

▸ **flowTarget**(`target`, `offset?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `target` | [`Object3D`](Object3D.md) | `undefined` |
| `offset` | [`Vector3`](Vector3.md) | `Vector3.ZERO` |

#### Returns

`void`

#### Defined in

[src/components/controller/HoverCameraController.ts:147](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L147)

___

### getFlowTarget

▸ **getFlowTarget**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/components/controller/HoverCameraController.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L153)

___

### setCamera

▸ **setCamera**(`roll`, `pitch`, `distance`, `target?`): `void`

Initialize Camera

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `roll` | `number` | Roll angle around y-axis |
| `pitch` | `number` | Pitch angle around x-axis |
| `distance` | `number` | max distance to target |
| `target?` | [`Vector3`](Vector3.md) | coordinates of the target |

#### Returns

`void`

#### Defined in

[src/components/controller/HoverCameraController.ts:164](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L164)

___

### focusByBounds

▸ **focusByBounds**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) |

#### Returns

`void`

#### Defined in

[src/components/controller/HoverCameraController.ts:176](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L176)

___

### onBeforeUpdate

▸ **onBeforeUpdate**(`view?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onBeforeUpdate](ComponentBase.md#onbeforeupdate)

#### Defined in

[src/components/controller/HoverCameraController.ts:247](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L247)
