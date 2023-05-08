# Class: HoverCameraController

Hovering camera controller

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`HoverCameraController`**


### Properties

- [object3D](HoverCameraController.md#object3d)
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

- [transform](HoverCameraController.md#transform)
- [enable](HoverCameraController.md#enable)
- [target](HoverCameraController.md#target)

### Methods

- [init](HoverCameraController.md#init)
- [stop](HoverCameraController.md#stop)
- [onEnable](HoverCameraController.md#onenable)
- [onDisable](HoverCameraController.md#ondisable)
- [onLateUpdate](HoverCameraController.md#onlateupdate)
- [onBeforeUpdate](HoverCameraController.md#onbeforeupdate)
- [onCompute](HoverCameraController.md#oncompute)
- [onGraphic](HoverCameraController.md#ongraphic)
- [cloneTo](HoverCameraController.md#cloneto)
- [setCamera](HoverCameraController.md#setcamera)
- [focusByBounds](HoverCameraController.md#focusbybounds)
- [onUpdate](HoverCameraController.md#onupdate)

### Constructors

- [constructor](HoverCameraController.md#constructor)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

[ComponentBase](ComponentBase.md).[object3D](ComponentBase.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### camera

• **camera**: [`Camera3D`](Camera3D.md)

camera controlling

#### Defined in

[src/components/controller/HoverCameraController.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L21)

___

### minDistance

• **minDistance**: `number` = `0.1`

The closest distance that the mouse wheel can operate

#### Defined in

[src/components/controller/HoverCameraController.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L26)

___

### maxDistance

• **maxDistance**: `number` = `500`

The farthest distance that the mouse wheel can operate

#### Defined in

[src/components/controller/HoverCameraController.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L31)

___

### rollSmooth

• **rollSmooth**: `number` = `15.0`

Smoothing coefficient of rolling angle

#### Defined in

[src/components/controller/HoverCameraController.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L36)

___

### dragSmooth

• **dragSmooth**: `number` = `20`

Smoothing coefficient of dragging

#### Defined in

[src/components/controller/HoverCameraController.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L41)

___

### wheelSmooth

• **wheelSmooth**: `number` = `10`

Smoothing coefficient of rolling

#### Defined in

[src/components/controller/HoverCameraController.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L46)

___

### wheelStep

• **wheelStep**: `number` = `0.002`

Mouse scrolling step coefficient

#### Defined in

[src/components/controller/HoverCameraController.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L51)

___

### mouseRightFactor

• **mouseRightFactor**: `number` = `0.5`

Right mouse movement coefficient

#### Defined in

[src/components/controller/HoverCameraController.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L56)

___

### mouseLeftFactor

• **mouseLeftFactor**: `number` = `20`

Left mouse movement coefficient

#### Defined in

[src/components/controller/HoverCameraController.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L61)

___

### smooth

• **smooth**: `boolean` = `true`

Whether to enable smooth mode

#### Defined in

[src/components/controller/HoverCameraController.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L66)

___

### distance

• **distance**: `number` = `10`

Distance between camera and target

#### Defined in

[src/components/controller/HoverCameraController.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L78)

___

### roll

• **roll**: `number` = `0`

Roll angle around y-axis

#### Defined in

[src/components/controller/HoverCameraController.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L84)

___

### pitch

• **pitch**: `number` = `0`

Pitch angle around x-axis

#### Defined in

[src/components/controller/HoverCameraController.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L90)

## Accessors

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

ComponentBase.transform

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

ComponentBase.enable

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

ComponentBase.enable

#### Defined in

[src/components/ComponentBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L45)

___

### target

• `get` **target**(): [`Vector3`](Vector3.md)

Get target position

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/controller/HoverCameraController.ts:162](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L162)

• `set` **target**(`target`): `void`

Set target position

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/controller/HoverCameraController.ts:154](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L154)

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

[src/components/ComponentBase.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L106)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[stop](ComponentBase.md#stop)

#### Defined in

[src/components/ComponentBase.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L108)

___

### onEnable

▸ `Optional` **onEnable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onEnable](ComponentBase.md#onenable)

#### Defined in

[src/components/ComponentBase.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L109)

___

### onDisable

▸ `Optional` **onDisable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onDisable](ComponentBase.md#ondisable)

#### Defined in

[src/components/ComponentBase.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L110)

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

[ComponentBase](ComponentBase.md).[onLateUpdate](ComponentBase.md#onlateupdate)

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

[ComponentBase](ComponentBase.md).[onBeforeUpdate](ComponentBase.md#onbeforeupdate)

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

[ComponentBase](ComponentBase.md).[onCompute](ComponentBase.md#oncompute)

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

[ComponentBase](ComponentBase.md).[onGraphic](ComponentBase.md#ongraphic)

#### Defined in

[src/components/ComponentBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L115)

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

[src/components/ComponentBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L122)

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

[src/components/controller/HoverCameraController.ts:134](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L134)

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

[src/components/controller/HoverCameraController.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L144)

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onUpdate](ComponentBase.md#onupdate)

#### Defined in

[src/components/controller/HoverCameraController.ts:224](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L224)

## Constructors

### constructor

• **new HoverCameraController**()

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/components/controller/HoverCameraController.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L109)
