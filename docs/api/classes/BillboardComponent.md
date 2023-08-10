# Class: BillboardComponent

Components are used to attach functionality to object3D, it has an owner object3D.
The component can receive update events at each frame.

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`BillboardComponent`**

### Constructors

- [constructor](BillboardComponent.md#constructor)

### Properties

- [type](BillboardComponent.md#type)
- [camera](BillboardComponent.md#camera)
- [object3D](BillboardComponent.md#object3d)
- [isDestroyed](BillboardComponent.md#isdestroyed)

### Accessors

- [eventDispatcher](BillboardComponent.md#eventdispatcher)
- [isStart](BillboardComponent.md#isstart)
- [transform](BillboardComponent.md#transform)
- [enable](BillboardComponent.md#enable)

### Methods

- [onUpdate](BillboardComponent.md#onupdate)
- [cloneTo](BillboardComponent.md#cloneto)
- [init](BillboardComponent.md#init)
- [start](BillboardComponent.md#start)
- [stop](BillboardComponent.md#stop)
- [onEnable](BillboardComponent.md#onenable)
- [onDisable](BillboardComponent.md#ondisable)
- [onLateUpdate](BillboardComponent.md#onlateupdate)
- [onBeforeUpdate](BillboardComponent.md#onbeforeupdate)
- [onCompute](BillboardComponent.md#oncompute)
- [onGraphic](BillboardComponent.md#ongraphic)
- [onParentChange](BillboardComponent.md#onparentchange)
- [copyComponent](BillboardComponent.md#copycomponent)
- [beforeDestroy](BillboardComponent.md#beforedestroy)
- [destroy](BillboardComponent.md#destroy)

## Constructors

### constructor

• **new BillboardComponent**()

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/components/BillboardComponent.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/BillboardComponent.ts#L12)

## Properties

### type

• **type**: [`BillboardType`](../enums/BillboardType.md)

#### Defined in

[src/components/BillboardComponent.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/components/BillboardComponent.ts#L8)

___

### camera

• **camera**: [`Camera3D`](Camera3D.md)

#### Defined in

[src/components/BillboardComponent.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/components/BillboardComponent.ts#L9)

___

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

## Methods

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onUpdate](ComponentBase.md#onupdate)

#### Defined in

[src/components/BillboardComponent.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/BillboardComponent.ts#L17)

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

#### Overrides

[ComponentBase](ComponentBase.md).[cloneTo](ComponentBase.md#cloneto)

#### Defined in

[src/components/BillboardComponent.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/components/BillboardComponent.ts#L35)

___

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

#### Inherited from

[ComponentBase](ComponentBase.md).[onDisable](ComponentBase.md#ondisable)

#### Defined in

[src/components/ComponentBase.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L116)

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

#### Inherited from

[ComponentBase](ComponentBase.md).[onBeforeUpdate](ComponentBase.md#onbeforeupdate)

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

#### Inherited from

[ComponentBase](ComponentBase.md).[onCompute](ComponentBase.md#oncompute)

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

#### Inherited from

[ComponentBase](ComponentBase.md).[onGraphic](ComponentBase.md#ongraphic)

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

#### Inherited from

[ComponentBase](ComponentBase.md).[onParentChange](ComponentBase.md#onparentchange)

#### Defined in

[src/components/ComponentBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L122)

___

### copyComponent

▸ **copyComponent**(`from`): [`BillboardComponent`](BillboardComponent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`BillboardComponent`](BillboardComponent.md) |

#### Returns

[`BillboardComponent`](BillboardComponent.md)

#### Inherited from

[ComponentBase](ComponentBase.md).[copyComponent](ComponentBase.md#copycomponent)

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

#### Inherited from

[ComponentBase](ComponentBase.md).[beforeDestroy](ComponentBase.md#beforedestroy)

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

#### Inherited from

[ComponentBase](ComponentBase.md).[destroy](ComponentBase.md#destroy)

#### Defined in

[src/components/ComponentBase.ts:205](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L205)
