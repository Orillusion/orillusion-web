# Class: ComponentCollect

### Constructors

- [constructor](ComponentCollect.md#constructor)

### Methods

- [bindUpdate](ComponentCollect.md#bindupdate)
- [unBindUpdate](ComponentCollect.md#unbindupdate)
- [bindLateUpdate](ComponentCollect.md#bindlateupdate)
- [unBindLateUpdate](ComponentCollect.md#unbindlateupdate)
- [bindBeforeUpdate](ComponentCollect.md#bindbeforeupdate)
- [unBindBeforeUpdate](ComponentCollect.md#unbindbeforeupdate)
- [bindCompute](ComponentCollect.md#bindcompute)
- [unBindCompute](ComponentCollect.md#unbindcompute)
- [bindGraphic](ComponentCollect.md#bindgraphic)
- [unBindGraphic](ComponentCollect.md#unbindgraphic)
- [appendWaitStart](ComponentCollect.md#appendwaitstart)
- [removeWaitStart](ComponentCollect.md#removewaitstart)
- [bindEnablePick](ComponentCollect.md#bindenablepick)
- [unBindEnablePick](ComponentCollect.md#unbindenablepick)

## Constructors

### constructor

• **new ComponentCollect**(): [`ComponentCollect`](ComponentCollect.md)

#### Returns

[`ComponentCollect`](ComponentCollect.md)

## Methods

### bindUpdate

▸ **bindUpdate**(`view`, `component`, `call`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |
| `call` | `Function` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L62)

___

### unBindUpdate

▸ **unBindUpdate**(`view`, `component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L72)

___

### bindLateUpdate

▸ **bindLateUpdate**(`view`, `component`, `call`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |
| `call` | `Function` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L80)

___

### unBindLateUpdate

▸ **unBindLateUpdate**(`view`, `component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L90)

___

### bindBeforeUpdate

▸ **bindBeforeUpdate**(`view`, `component`, `call`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |
| `call` | `Function` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L98)

___

### unBindBeforeUpdate

▸ **unBindBeforeUpdate**(`view`, `component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L108)

___

### bindCompute

▸ **bindCompute**(`view`, `component`, `call`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |
| `call` | `Function` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L116)

___

### unBindCompute

▸ **unBindCompute**(`view`, `component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L126)

___

### bindGraphic

▸ **bindGraphic**(`view`, `component`, `call`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |
| `call` | `Function` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:134](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L134)

___

### unBindGraphic

▸ **unBindGraphic**(`view`, `component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L144)

___

### appendWaitStart

▸ **appendWaitStart**(`component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`IComponent`](../interfaces/IComponent.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L152)

___

### removeWaitStart

▸ **removeWaitStart**(`obj`, `component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:165](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L165)

___

### bindEnablePick

▸ **bindEnablePick**(`view`, `component`, `call`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`ColliderComponent`](ColliderComponent.md) |
| `call` | `Function` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:176](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L176)

___

### unBindEnablePick

▸ **unBindEnablePick**(`view`, `component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`ColliderComponent`](ColliderComponent.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:186](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L186)
