# Class: FlyCameraController

Free camera controller.
Move forward, backward, left, and right in the direction of W A S D.
Control the camera's movement direction by holding down the left mouse button

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`FlyCameraController`**

### Constructors

- [constructor](FlyCameraController.md#constructor)

### Properties

- [object3D](FlyCameraController.md#object3d)
- [moveSpeed](FlyCameraController.md#movespeed)
- [targetPos](FlyCameraController.md#targetpos)
- [lookAtPos](FlyCameraController.md#lookatpos)

### Accessors

- [transform](FlyCameraController.md#transform)
- [enable](FlyCameraController.md#enable)
- [factory](FlyCameraController.md#factory)
- [mouseFactory](FlyCameraController.md#mousefactory)

### Methods

- [init](FlyCameraController.md#init)
- [stop](FlyCameraController.md#stop)
- [onEnable](FlyCameraController.md#onenable)
- [onDisable](FlyCameraController.md#ondisable)
- [onLateUpdate](FlyCameraController.md#onlateupdate)
- [onBeforeUpdate](FlyCameraController.md#onbeforeupdate)
- [onCompute](FlyCameraController.md#oncompute)
- [onGraphic](FlyCameraController.md#ongraphic)
- [onParentChange](FlyCameraController.md#onparentchange)
- [cloneTo](FlyCameraController.md#cloneto)
- [setCamera](FlyCameraController.md#setcamera)
- [onUpdate](FlyCameraController.md#onupdate)

## Constructors

### constructor

• **new FlyCameraController**()

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/components/controller/FlyCameraController.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/FlyCameraController.ts#L54)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

[ComponentBase](ComponentBase.md).[object3D](ComponentBase.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### moveSpeed

• **moveSpeed**: `number` = `2`

Camera movement speed

#### Defined in

[src/components/controller/FlyCameraController.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/FlyCameraController.ts#L20)

___

### targetPos

• **targetPos**: [`Vector3`](Vector3.md)

Coordinates of specific objects

#### Defined in

[src/components/controller/FlyCameraController.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/FlyCameraController.ts#L25)

___

### lookAtPos

• **lookAtPos**: [`Vector3`](Vector3.md)

Camera orientation coordinates

#### Defined in

[src/components/controller/FlyCameraController.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/FlyCameraController.ts#L30)

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

### factory

• `get` **factory**(): `number`

Get the smoothness of the camera by keyboard control

#### Returns

`number`

#### Defined in

[src/components/controller/FlyCameraController.ts:176](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/FlyCameraController.ts#L176)

• `set` **factory**(`value`): `void`

Set the smoothness of the camera by keyboard control

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/controller/FlyCameraController.ts:184](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/FlyCameraController.ts#L184)

___

### mouseFactory

• `get` **mouseFactory**(): `number`

Get the smoothness of the camera by mouse control

#### Returns

`number`

#### Defined in

[src/components/controller/FlyCameraController.ts:192](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/FlyCameraController.ts#L192)

• `set` **mouseFactory**(`value`): `void`

Set the smoothness of the camera by mouse control

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/controller/FlyCameraController.ts:200](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/FlyCameraController.ts#L200)

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

[ComponentBase](ComponentBase.md).[onParentChange](ComponentBase.md#onparentchange)

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

[ComponentBase](ComponentBase.md).[cloneTo](ComponentBase.md#cloneto)

#### Defined in

[src/components/ComponentBase.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L123)

___

### setCamera

▸ **setCamera**(`cameraPos`, `lookAt`): `void`

Initialize camera data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cameraPos` | [`Vector3`](Vector3.md) | source position |
| `lookAt` | [`Vector3`](Vector3.md) | target position |

#### Returns

`void`

#### Defined in

[src/components/controller/FlyCameraController.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/FlyCameraController.ts#L74)

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onUpdate](ComponentBase.md#onupdate)

#### Defined in

[src/components/controller/FlyCameraController.ts:215](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/FlyCameraController.ts#L215)
