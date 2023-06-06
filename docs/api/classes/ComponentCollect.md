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

[src/gfx/renderJob/collect/ComponentCollect.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L51)

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

[src/gfx/renderJob/collect/ComponentCollect.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L61)

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

[src/gfx/renderJob/collect/ComponentCollect.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L69)

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

[src/gfx/renderJob/collect/ComponentCollect.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L79)

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

[src/gfx/renderJob/collect/ComponentCollect.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L87)

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

[src/gfx/renderJob/collect/ComponentCollect.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L97)

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

[src/gfx/renderJob/collect/ComponentCollect.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L105)

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

[src/gfx/renderJob/collect/ComponentCollect.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L115)

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

[src/gfx/renderJob/collect/ComponentCollect.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L123)

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

[src/gfx/renderJob/collect/ComponentCollect.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L133)

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

[src/gfx/renderJob/collect/ComponentCollect.ts:141](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L141)
