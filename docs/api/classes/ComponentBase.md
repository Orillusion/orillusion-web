# Class: ComponentBase

Components are used to attach functionality to object3D, it has an owner object3D.
The component can receive update events at each frame.

## Hierarchy

- **`ComponentBase`**

  ↳ [`BillboardComponent`](BillboardComponent.md)

  ↳ [`ColliderComponent`](ColliderComponent.md)

  ↳ [`SkeletonAnimationComponent`](SkeletonAnimationComponent.md)

  ↳ [`Transform`](Transform.md)

  ↳ [`AnimatorComponent`](AnimatorComponent.md)

  ↳ [`PropertyAnimation`](PropertyAnimation.md)

  ↳ [`MorphTargetBlender`](MorphTargetBlender.md)

  ↳ [`FlyCameraController`](FlyCameraController.md)

  ↳ [`HoverCameraController`](HoverCameraController.md)

  ↳ [`OrbitController`](OrbitController.md)

  ↳ [`GUICanvas`](GUICanvas.md)

  ↳ [`UIComponentBase`](UIComponentBase.md)

  ↳ [`UITransform`](UITransform.md)

  ↳ [`PostProcessingComponent`](PostProcessingComponent.md)

  ↳ [`GlobalIlluminationComponent`](GlobalIlluminationComponent.md)

  ↳ [`Camera3D`](Camera3D.md)

  ↳ [`APatch`](APatch.md)

## Implements

- [`IComponent`](../interfaces/IComponent.md)

### Constructors

- [constructor](ComponentBase.md#constructor)

### Properties

- [object3D](ComponentBase.md#object3d)
- [isDestroyed](ComponentBase.md#isdestroyed)

### Accessors

- [eventDispatcher](ComponentBase.md#eventdispatcher)
- [isStart](ComponentBase.md#isstart)
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
- [copyComponent](ComponentBase.md#copycomponent)
- [beforeDestroy](ComponentBase.md#beforedestroy)
- [destroy](ComponentBase.md#destroy)

## Constructors

### constructor

• **new ComponentBase**()

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Implementation of

[IComponent](../interfaces/IComponent.md).[object3D](../interfaces/IComponent.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### isDestroyed

• `Optional` **isDestroyed**: `boolean`

#### Implementation of

[IComponent](../interfaces/IComponent.md).[isDestroyed](../interfaces/IComponent.md#isdestroyed)

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Implementation of

[IComponent](../interfaces/IComponent.md).[eventDispatcher](../interfaces/IComponent.md#eventdispatcher)

#### Defined in

[src/components/ComponentBase.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L23)

• `set` **eventDispatcher**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CEventDispatcher`](CEventDispatcher.md) |

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/IComponent.md).[eventDispatcher](../interfaces/IComponent.md#eventdispatcher)

#### Defined in

[src/components/ComponentBase.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L28)

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/components/ComponentBase.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L40)

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Implementation of

[IComponent](../interfaces/IComponent.md).[transform](../interfaces/IComponent.md#transform)

#### Defined in

[src/components/ComponentBase.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L47)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Implementation of

[IComponent](../interfaces/IComponent.md).[enable](../interfaces/IComponent.md#enable)

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

#### Implementation of

[IComponent](../interfaces/IComponent.md).[enable](../interfaces/IComponent.md#enable)

#### Defined in

[src/components/ComponentBase.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L54)

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

[src/components/ComponentBase.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L112)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/IComponent.md).[start](../interfaces/IComponent.md#start)

#### Defined in

[src/components/ComponentBase.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/IComponent.md).[stop](../interfaces/IComponent.md#stop)

#### Defined in

[src/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L114)

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

[src/components/ComponentBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L115)

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

[src/components/ComponentBase.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L116)

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

[src/components/ComponentBase.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L117)

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

[src/components/ComponentBase.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L118)

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

[src/components/ComponentBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L119)

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

[src/components/ComponentBase.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L120)

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

[src/components/ComponentBase.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L121)

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

[src/components/ComponentBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L122)

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

[src/components/ComponentBase.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L129)

___

### copyComponent

▸ **copyComponent**(`from`): [`ComponentBase`](ComponentBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`ComponentBase`](ComponentBase.md) |

#### Returns

[`ComponentBase`](ComponentBase.md)

#### Defined in

[src/components/ComponentBase.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L131)

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

#### Implementation of

[IComponent](../interfaces/IComponent.md).[beforeDestroy](../interfaces/IComponent.md#beforedestroy)

#### Defined in

[src/components/ComponentBase.ts:198](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L198)

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

[src/components/ComponentBase.ts:205](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L205)
