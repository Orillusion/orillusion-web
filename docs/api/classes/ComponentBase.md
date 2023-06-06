# Class: ComponentBase

Components are used to attach functionality to object3D, it has an owner object3D.
The component can receive update events at each frame.

## Hierarchy

- **`ComponentBase`**

  ↳ [`BillboardComponent`](BillboardComponent.md)

  ↳ [`ColliderComponent`](ColliderComponent.md)

  ↳ [`SkeletonAnimationComponent`](SkeletonAnimationComponent.md)

  ↳ [`Transform`](Transform.md)

  ↳ [`PropertyAnimation`](PropertyAnimation.md)

  ↳ [`MorphTargetBlender`](MorphTargetBlender.md)

  ↳ [`FlyCameraController`](FlyCameraController.md)

  ↳ [`HoverCameraController`](HoverCameraController.md)

  ↳ [`OrbitController`](OrbitController.md)

  ↳ [`GUICanvas`](GUICanvas.md)

  ↳ [`UIComponentBase`](UIComponentBase.md)

  ↳ [`UITransform`](UITransform.md)

  ↳ [`PostProcessingComponent`](PostProcessingComponent.md)

  ↳ [`MaterialComponent`](MaterialComponent.md)

  ↳ [`MeshComponent`](MeshComponent.md)

  ↳ [`Camera3D`](Camera3D.md)

## Implements

- [`IComponent`](../interfaces/IComponent.md)

### Constructors

- [constructor](ComponentBase.md#constructor)

### Properties

- [object3D](ComponentBase.md#object3d)

### Accessors

- [transform](ComponentBase.md#transform)
- [enable](ComponentBase.md#enable)

### Methods

- [init](ComponentBase.md#init)
- [start](ComponentBase.md#start)
- [stop](ComponentBase.md#stop)
- [onEnable](ComponentBase.md#onenable)
- [onDisable](ComponentBase.md#ondisable)
- [onUpdate](ComponentBase.md#onupdate)
- [onLateUpdate](ComponentBase.md#onlateupdate)
- [onBeforeUpdate](ComponentBase.md#onbeforeupdate)
- [onCompute](ComponentBase.md#oncompute)
- [onGraphic](ComponentBase.md#ongraphic)
- [onParentChange](ComponentBase.md#onparentchange)
- [cloneTo](ComponentBase.md#cloneto)
- [destroy](ComponentBase.md#destroy)

## Constructors

### constructor

• **new ComponentBase**()

#### Defined in

[src/components/ComponentBase.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L31)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Implementation of

[IComponent](../interfaces/IComponent.md).[object3D](../interfaces/IComponent.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

## Accessors

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Implementation of

[IComponent](../interfaces/IComponent.md).[transform](../interfaces/IComponent.md#transform)

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Implementation of

[IComponent](../interfaces/IComponent.md).[enable](../interfaces/IComponent.md#enable)

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

#### Implementation of

[IComponent](../interfaces/IComponent.md).[enable](../interfaces/IComponent.md#enable)

#### Defined in

[src/components/ComponentBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L45)

## Methods

### init

▸ **init**(`param?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/IComponent.md).[init](../interfaces/IComponent.md#init)

#### Defined in

[src/components/ComponentBase.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L106)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/IComponent.md).[start](../interfaces/IComponent.md#start)

#### Defined in

[src/components/ComponentBase.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L107)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/IComponent.md).[stop](../interfaces/IComponent.md#stop)

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

#### Implementation of

[IComponent](../interfaces/IComponent.md).[onEnable](../interfaces/IComponent.md#onenable)

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

#### Implementation of

[IComponent](../interfaces/IComponent.md).[onDisable](../interfaces/IComponent.md#ondisable)

#### Defined in

[src/components/ComponentBase.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L110)

___

### onUpdate

▸ `Optional` **onUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Implementation of

[IComponent](../interfaces/IComponent.md).[onUpdate](../interfaces/IComponent.md#onupdate)

#### Defined in

[src/components/ComponentBase.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L111)

___

### onLateUpdate

▸ `Optional` **onLateUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Implementation of

[IComponent](../interfaces/IComponent.md).[onLateUpdate](../interfaces/IComponent.md#onlateupdate)

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

#### Implementation of

[IComponent](../interfaces/IComponent.md).[onBeforeUpdate](../interfaces/IComponent.md#onbeforeupdate)

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

#### Implementation of

[IComponent](../interfaces/IComponent.md).[onCompute](../interfaces/IComponent.md#oncompute)

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

#### Implementation of

[IComponent](../interfaces/IComponent.md).[onGraphic](../interfaces/IComponent.md#ongraphic)

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

#### Implementation of

[IComponent](../interfaces/IComponent.md).[onParentChange](../interfaces/IComponent.md#onparentchange)

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

#### Implementation of

[IComponent](../interfaces/IComponent.md).[cloneTo](../interfaces/IComponent.md#cloneto)

#### Defined in

[src/components/ComponentBase.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L123)

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

#### Implementation of

[IComponent](../interfaces/IComponent.md).[destroy](../interfaces/IComponent.md#destroy)

#### Defined in

[src/components/ComponentBase.ts:190](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L190)
