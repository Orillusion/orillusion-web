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
- [startComponents](ComponentCollect.md#startcomponents)
- [removeWaitStart](ComponentCollect.md#removewaitstart)

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

[src/gfx/renderJob/collect/ComponentCollect.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L62)

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

[src/gfx/renderJob/collect/ComponentCollect.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L72)

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

[src/gfx/renderJob/collect/ComponentCollect.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L80)

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

[src/gfx/renderJob/collect/ComponentCollect.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L90)

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

[src/gfx/renderJob/collect/ComponentCollect.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L98)

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

[src/gfx/renderJob/collect/ComponentCollect.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L108)

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

[src/gfx/renderJob/collect/ComponentCollect.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L116)

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

[src/gfx/renderJob/collect/ComponentCollect.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L126)

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

[src/gfx/renderJob/collect/ComponentCollect.ts:134](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L134)

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

[src/gfx/renderJob/collect/ComponentCollect.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L144)

___

### appendWaitStart

▸ `Static` **appendWaitStart**(`component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`IComponent`](../interfaces/IComponent.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L152)

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

[src/gfx/renderJob/collect/ComponentCollect.ts:165](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L165)

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

[src/gfx/renderJob/collect/ComponentCollect.ts:175](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L175)

___

### startComponents

▸ `Static` **startComponents**(): `void`

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:183](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L183)

___

### removeWaitStart

▸ `Static` **removeWaitStart**(`component`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`IComponent`](../interfaces/IComponent.md) |

#### Returns

`boolean`

#### Defined in

[src/gfx/renderJob/collect/ComponentCollect.ts:233](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/ComponentCollect.ts#L233)
