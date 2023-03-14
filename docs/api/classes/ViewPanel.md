# Class: ViewPanel

组件用于在实体对象上附加功能。组件可以在每个帧接收更新事件。

## Hierarchy

- [`UIPanel`](UIPanel.md)

  ↳ **`ViewPanel`**


### Properties

- [object3D](ViewPanel.md#object3d)
- [serializeTag](ViewPanel.md#serializetag)
- [order](ViewPanel.md#order)
- [renderMode](ViewPanel.md#rendermode)
- [needUpdateGeometry](ViewPanel.md#needupdategeometry)
- [uuid](ViewPanel.md#uuid)
- [renderOrder](ViewPanel.md#renderorder)

### Accessors

- [transform](ViewPanel.md#transform)
- [enable](ViewPanel.md#enable)
- [uiTransform](ViewPanel.md#uitransform)
- [guiMesh](ViewPanel.md#guimesh)

### Methods

- [onVisible](ViewPanel.md#onvisible)
- [onUpdate](ViewPanel.md#onupdate)
- [onLateUpdate](ViewPanel.md#onlateupdate)
- [onBeforeUpdate](ViewPanel.md#onbeforeupdate)
- [serialization](ViewPanel.md#serialization)
- [unSerialization](ViewPanel.md#unserialization)
- [destroy](ViewPanel.md#destroy)
- [addQuad](ViewPanel.md#addquad)
- [clean](ViewPanel.md#clean)
- [init](ViewPanel.md#init)
- [cloneTo](ViewPanel.md#cloneto)

### Constructors

- [constructor](ViewPanel.md#constructor)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

此组件附加到的Object3D对象。

#### Inherited from

[UIPanel](UIPanel.md).[object3D](UIPanel.md#object3d)

#### Defined in

[src/engine/components/ComponentBase.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L14)

___

### serializeTag

• `Optional` **serializeTag**: [`SerializeTag`](../types/SerializeTag.md)

#### Inherited from

[UIPanel](UIPanel.md).[serializeTag](UIPanel.md#serializetag)

#### Defined in

[src/engine/components/ComponentBase.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L30)

___

### order

• **order**: `number`

#### Inherited from

[UIPanel](UIPanel.md).[order](UIPanel.md#order)

#### Defined in

[src/engine/gui/components/UIPanel.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIPanel.ts#L6)

___

### renderMode

• **renderMode**: `number` = `GUISpace.World`

#### Inherited from

[UIPanel](UIPanel.md).[renderMode](UIPanel.md#rendermode)

#### Defined in

[src/engine/gui/components/UIPanel.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIPanel.ts#L7)

___

### needUpdateGeometry

• **needUpdateGeometry**: `boolean` = `true`

#### Inherited from

[UIPanel](UIPanel.md).[needUpdateGeometry](UIPanel.md#needupdategeometry)

#### Defined in

[src/engine/gui/components/UIPanel.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIPanel.ts#L8)

___

### uuid

• **uuid**: `string`

#### Inherited from

[UIPanel](UIPanel.md).[uuid](UIPanel.md#uuid)

#### Defined in

[src/engine/gui/components/UIPanel.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIPanel.ts#L9)

___

### renderOrder

• **renderOrder**: `number` = `0`

#### Inherited from

[UIPanel](UIPanel.md).[renderOrder](UIPanel.md#renderorder)

#### Defined in

[src/engine/gui/components/UIPanel.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIPanel.ts#L10)

## Accessors

### transform

• `get` **transform**(): [`Transform`](Transform.md)

附加到此 Object3D对象 的 Transform组件。

#### Returns

[`Transform`](Transform.md)

#### Inherited from

UIPanel.transform

#### Defined in

[src/engine/components/ComponentBase.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L39)

___

### enable

• `get` **enable**(): `boolean`

启用/禁用 组件。启用的组件可更新，禁用的组件不可更新。

#### Returns

`boolean`

#### Inherited from

UIPanel.enable

#### Defined in

[src/engine/components/ComponentBase.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L62)

• `set` **enable**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

UIPanel.enable

#### Defined in

[src/engine/components/ComponentBase.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L43)

___

### uiTransform

• `get` **uiTransform**(): [`UITransform`](UITransform.md)

#### Returns

[`UITransform`](UITransform.md)

#### Inherited from

UIPanel.uiTransform

#### Defined in

[src/engine/gui/components/UIComponentBase.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIComponentBase.ts#L6)

___

### guiMesh

• `get` **guiMesh**(): [`GUIMesh`](GUIMesh.md)

#### Returns

[`GUIMesh`](GUIMesh.md)

#### Inherited from

UIPanel.guiMesh

#### Defined in

[src/engine/gui/components/UIPanel.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIPanel.ts#L14)

## Methods

### onVisible

▸ **onVisible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[onVisible](UIPanel.md#onvisible)

#### Defined in

[src/engine/components/ComponentBase.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L66)

___

### onUpdate

▸ **onUpdate**(`call`): `void`

添加更新函数。会在每帧更新时执行。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `call` | `Function` | 回调函数 |

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[onUpdate](UIPanel.md#onupdate)

#### Defined in

[src/engine/components/ComponentBase.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L135)

___

### onLateUpdate

▸ **onLateUpdate**(`call`): `void`

添加延迟更新函数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `call` | `Function` | 回调函数 |

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[onLateUpdate](UIPanel.md#onlateupdate)

#### Defined in

[src/engine/components/ComponentBase.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L148)

___

### onBeforeUpdate

▸ **onBeforeUpdate**(`call`): `void`

添加帧更新前执行的函数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `call` | `Function` | 回调函数 |

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[onBeforeUpdate](UIPanel.md#onbeforeupdate)

#### Defined in

[src/engine/components/ComponentBase.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L161)

___

### serialization

▸ **serialization**(`assets`): [`SerializeComponentBase`](SerializeComponentBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `assets` | [`ISerializeAssetsCollect`](../interfaces/ISerializeAssetsCollect.md) |

#### Returns

[`SerializeComponentBase`](SerializeComponentBase.md)

#### Inherited from

[UIPanel](UIPanel.md).[serialization](UIPanel.md#serialization)

#### Defined in

[src/engine/components/ComponentBase.ts:170](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L170)

___

### unSerialization

▸ **unSerialization**(`componentData`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `componentData` | [`SerializeComponentBase`](SerializeComponentBase.md) |
| `data` | [`UnSerializeData`](UnSerializeData.md) |

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[unSerialization](UIPanel.md#unserialization)

#### Defined in

[src/engine/components/ComponentBase.ts:175](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L175)

___

### destroy

▸ **destroy**(): `void`

移除组件时候调用

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[destroy](UIPanel.md#destroy)

#### Defined in

[src/engine/gui/components/UIComponentBase.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIComponentBase.ts#L23)

___

### addQuad

▸ **addQuad**(`quad`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | [`GUIQuad`](GUIQuad.md) |

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[addQuad](UIPanel.md#addquad)

#### Defined in

[src/engine/gui/components/UIComponentBase.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIComponentBase.ts#L28)

___

### clean

▸ **clean**(): `void`

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[clean](UIPanel.md#clean)

#### Defined in

[src/engine/gui/components/UIComponentBase.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIComponentBase.ts#L32)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[init](UIPanel.md#init)

#### Defined in

[src/engine/gui/components/UIPanel.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIPanel.ts#L22)

___

### cloneTo

▸ **cloneTo**(`obj`): `void`

创建新的组件，复制当前组件的属性，并添加到目标对象上。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) | 源对象 |

#### Returns

`void`

#### Overrides

[UIPanel](UIPanel.md).[cloneTo](UIPanel.md#cloneto)

#### Defined in

[src/engine/gui/components/ViewPanel.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/ViewPanel.ts#L11)

## Constructors

### constructor

• **new ViewPanel**()

#### Overrides

[UIPanel](UIPanel.md).[constructor](UIPanel.md#constructor)

#### Defined in

[src/engine/gui/components/ViewPanel.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/ViewPanel.ts#L6)
