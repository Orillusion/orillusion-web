# Interface: IComponent

## Implemented by

- [`ComponentBase`](../classes/ComponentBase.md)

### Properties

- [object3D](IComponent.md#object3d)
- [eventDispatcher](IComponent.md#eventdispatcher)
- [transform](IComponent.md#transform)
- [enable](IComponent.md#enable)
- [isDestroyed](IComponent.md#isdestroyed)

### Methods

- [init](IComponent.md#init)
- [start](IComponent.md#start)
- [stop](IComponent.md#stop)
- [onEnable](IComponent.md#onenable)
- [onDisable](IComponent.md#ondisable)
- [onUpdate](IComponent.md#onupdate)
- [onLateUpdate](IComponent.md#onlateupdate)
- [onBeforeUpdate](IComponent.md#onbeforeupdate)
- [onCompute](IComponent.md#oncompute)
- [onGraphic](IComponent.md#ongraphic)
- [cloneTo](IComponent.md#cloneto)
- [destroy](IComponent.md#destroy)
- [beforeDestroy](IComponent.md#beforedestroy)
- [onParentChange](IComponent.md#onparentchange)
- [onAddChild](IComponent.md#onaddchild)
- [onRemoveChild](IComponent.md#onremovechild)

## Properties

### object3D

• **object3D**: [`Object3D`](../classes/Object3D.md)

#### Defined in

[src/components/IComponent.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L7)

___

### eventDispatcher

• **eventDispatcher**: [`CEventDispatcher`](../classes/CEventDispatcher.md)

#### Defined in

[src/components/IComponent.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L8)

___

### transform

• **transform**: [`Transform`](../classes/Transform.md)

#### Defined in

[src/components/IComponent.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L9)

___

### enable

• **enable**: `boolean`

#### Defined in

[src/components/IComponent.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L10)

___

### isDestroyed

• `Optional` **isDestroyed**: `boolean`

#### Defined in

[src/components/IComponent.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L11)

## Methods

### init

▸ **init**(`param?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L12)

___

### start

▸ **start**(): `any`

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L13)

___

### stop

▸ **stop**(): `any`

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L14)

___

### onEnable

▸ **onEnable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](../classes/View3D.md) |

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L15)

___

### onDisable

▸ **onDisable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](../classes/View3D.md) |

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L16)

___

### onUpdate

▸ **onUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](../classes/View3D.md) |

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L17)

___

### onLateUpdate

▸ **onLateUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](../classes/View3D.md) |

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L18)

___

### onBeforeUpdate

▸ **onBeforeUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](../classes/View3D.md) |

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L19)

___

### onCompute

▸ **onCompute**(`view?`, `command?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](../classes/View3D.md) |
| `command?` | `GPUCommandEncoder` |

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L20)

___

### onGraphic

▸ **onGraphic**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](../classes/View3D.md) |

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L21)

___

### cloneTo

▸ **cloneTo**(`obj`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](../classes/Object3D.md) |

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L22)

___

### destroy

▸ **destroy**(`force?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L23)

___

### beforeDestroy

▸ **beforeDestroy**(`force?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L24)

___

### onParentChange

▸ **onParentChange**(`lastParent?`, `currentParent?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lastParent?` | [`Object3D`](../classes/Object3D.md) |
| `currentParent?` | [`Object3D`](../classes/Object3D.md) |

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L25)

___

### onAddChild

▸ **onAddChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Object3D`](../classes/Object3D.md) |

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L27)

___

### onRemoveChild

▸ **onRemoveChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Object3D`](../classes/Object3D.md) |

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L28)
