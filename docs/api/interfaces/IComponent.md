# Interface: IComponent

## Implemented by

- [`ComponentBase`](../classes/ComponentBase.md)

### Properties

- [object3D](IComponent.md#object3d)
- [eventDispatcher](IComponent.md#eventdispatcher)
- [transform](IComponent.md#transform)
- [enable](IComponent.md#enable)

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
- [onParentChange](IComponent.md#onparentchange)

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

[src/components/IComponent.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L11)

___

### start

▸ **start**(): `any`

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L12)

___

### stop

▸ **stop**(): `any`

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L13)

___

### onEnable

▸ `Optional` **onEnable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](../classes/View3D.md) |

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L14)

___

### onDisable

▸ `Optional` **onDisable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](../classes/View3D.md) |

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L15)

___

### onUpdate

▸ `Optional` **onUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](../classes/View3D.md) |

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L16)

___

### onLateUpdate

▸ `Optional` **onLateUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](../classes/View3D.md) |

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L17)

___

### onBeforeUpdate

▸ `Optional` **onBeforeUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](../classes/View3D.md) |

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L18)

___

### onCompute

▸ `Optional` **onCompute**(`view?`, `command?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](../classes/View3D.md) |
| `command?` | `GPUCommandEncoder` |

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L19)

___

### onGraphic

▸ `Optional` **onGraphic**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](../classes/View3D.md) |

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L20)

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

[src/components/IComponent.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L21)

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

[src/components/IComponent.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L22)

___

### onParentChange

▸ `Optional` **onParentChange**(`lastParent?`, `currentParent?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lastParent?` | [`Object3D`](../classes/Object3D.md) |
| `currentParent?` | [`Object3D`](../classes/Object3D.md) |

#### Returns

`any`

#### Defined in

[src/components/IComponent.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/IComponent.ts#L23)
