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
- [bindEnablePick](ComponentCollect.md#bindenablepick)
- [unBindEnablePick](ComponentCollect.md#unbindenablepick)

## Constructors

### constructor

• **new ComponentCollect**()

## Methods

### bindUpdate

▸ `Static` **bindUpdate**(`view`, `component`, `call`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |
| `call` | `Function` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L58)

___

### unBindUpdate

▸ `Static` **unBindUpdate**(`view`, `component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L68)

___

### bindLateUpdate

▸ `Static` **bindLateUpdate**(`view`, `component`, `call`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |
| `call` | `Function` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L76)

___

### unBindLateUpdate

▸ `Static` **unBindLateUpdate**(`view`, `component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:86](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L86)

___

### bindBeforeUpdate

▸ `Static` **bindBeforeUpdate**(`view`, `component`, `call`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |
| `call` | `Function` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:94](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L94)

___

### unBindBeforeUpdate

▸ `Static` **unBindBeforeUpdate**(`view`, `component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L104)

___

### bindCompute

▸ `Static` **bindCompute**(`view`, `component`, `call`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |
| `call` | `Function` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L112)

___

### unBindCompute

▸ `Static` **unBindCompute**(`view`, `component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L122)

___

### bindGraphic

▸ `Static` **bindGraphic**(`view`, `component`, `call`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |
| `call` | `Function` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L130)

___

### unBindGraphic

▸ `Static` **unBindGraphic**(`view`, `component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L140)

___

### appendWaitStart

▸ `Static` **appendWaitStart**(`obj`, `component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L148)

___

### bindEnablePick

▸ `Static` **bindEnablePick**(`view`, `component`, `call`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`ColliderComponent`](ColliderComponent.md) |
| `call` | `Function` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L161)

___

### unBindEnablePick

▸ `Static` **unBindEnablePick**(`view`, `component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`ColliderComponent`](ColliderComponent.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:171](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L171)
