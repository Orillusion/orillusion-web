# Class: UIPanel

组件用于在实体对象上附加功能。组件可以在每个帧接收更新事件。

## Hierarchy

- [`UIComponentBase`](UIComponentBase.md)

  ↳ **`UIPanel`**

  ↳↳ [`ViewPanel`](ViewPanel.md)

  ↳↳ [`WorldPanel`](WorldPanel.md)


### Properties

- [object3D](UIPanel.md#object3d)
- [serializeTag](UIPanel.md#serializetag)
- [order](UIPanel.md#order)
- [renderMode](UIPanel.md#rendermode)
- [needUpdateGeometry](UIPanel.md#needupdategeometry)
- [uuid](UIPanel.md#uuid)
- [renderOrder](UIPanel.md#renderorder)

### Accessors

- [transform](UIPanel.md#transform)
- [enable](UIPanel.md#enable)
- [uiTransform](UIPanel.md#uitransform)
- [guiMesh](UIPanel.md#guimesh)

### Methods

- [onVisible](UIPanel.md#onvisible)
- [cloneTo](UIPanel.md#cloneto)
- [onUpdate](UIPanel.md#onupdate)
- [onLateUpdate](UIPanel.md#onlateupdate)
- [onBeforeUpdate](UIPanel.md#onbeforeupdate)
- [serialization](UIPanel.md#serialization)
- [unSerialization](UIPanel.md#unserialization)
- [destroy](UIPanel.md#destroy)
- [addQuad](UIPanel.md#addquad)
- [clean](UIPanel.md#clean)
- [init](UIPanel.md#init)

### Constructors

- [constructor](UIPanel.md#constructor)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

此组件附加到的Object3D对象。

#### Inherited from

[UIComponentBase](UIComponentBase.md).[object3D](UIComponentBase.md#object3d)

#### Defined in

[src/engine/components/ComponentBase.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L14)

___

### serializeTag

• `Optional` **serializeTag**: [`SerializeTag`](../types/SerializeTag.md)

#### Inherited from

[UIComponentBase](UIComponentBase.md).[serializeTag](UIComponentBase.md#serializetag)

#### Defined in

[src/engine/components/ComponentBase.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L30)

___

### order

• **order**: `number`

#### Defined in

[src/engine/gui/components/UIPanel.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIPanel.ts#L6)

___

### renderMode

• **renderMode**: `number` = `GUISpace.World`

#### Defined in

[src/engine/gui/components/UIPanel.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIPanel.ts#L7)

___

### needUpdateGeometry

• **needUpdateGeometry**: `boolean` = `true`

#### Defined in

[src/engine/gui/components/UIPanel.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIPanel.ts#L8)

___

### uuid

• **uuid**: `string`

#### Defined in

[src/engine/gui/components/UIPanel.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIPanel.ts#L9)

___

### renderOrder

• **renderOrder**: `number` = `0`

#### Defined in

[src/engine/gui/components/UIPanel.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIPanel.ts#L10)

## Accessors

### transform

• `get` **transform**(): [`Transform`](Transform.md)

附加到此 Object3D对象 的 Transform组件。

#### Returns

[`Transform`](Transform.md)

#### Inherited from

UIComponentBase.transform

#### Defined in

[src/engine/components/ComponentBase.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L39)

___

### enable

• `get` **enable**(): `boolean`

启用/禁用 组件。启用的组件可更新，禁用的组件不可更新。

#### Returns

`boolean`

#### Inherited from

UIComponentBase.enable

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

UIComponentBase.enable

#### Defined in

[src/engine/components/ComponentBase.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L43)

___

### uiTransform

• `get` **uiTransform**(): [`UITransform`](UITransform.md)

#### Returns

[`UITransform`](UITransform.md)

#### Inherited from

UIComponentBase.uiTransform

#### Defined in

[src/engine/gui/components/UIComponentBase.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIComponentBase.ts#L6)

___

### guiMesh

• `get` **guiMesh**(): [`GUIMesh`](GUIMesh.md)

#### Returns

[`GUIMesh`](GUIMesh.md)

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

[UIComponentBase](UIComponentBase.md).[onVisible](UIComponentBase.md#onvisible)

#### Defined in

[src/engine/components/ComponentBase.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L66)

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

#### Inherited from

[UIComponentBase](UIComponentBase.md).[cloneTo](UIComponentBase.md#cloneto)

#### Defined in

[src/engine/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L114)

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

[UIComponentBase](UIComponentBase.md).[onUpdate](UIComponentBase.md#onupdate)

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

[UIComponentBase](UIComponentBase.md).[onLateUpdate](UIComponentBase.md#onlateupdate)

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

[UIComponentBase](UIComponentBase.md).[onBeforeUpdate](UIComponentBase.md#onbeforeupdate)

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

[UIComponentBase](UIComponentBase.md).[serialization](UIComponentBase.md#serialization)

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

[UIComponentBase](UIComponentBase.md).[unSerialization](UIComponentBase.md#unserialization)

#### Defined in

[src/engine/components/ComponentBase.ts:175](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L175)

___

### destroy

▸ **destroy**(): `void`

移除组件时候调用

#### Returns

`void`

#### Inherited from

[UIComponentBase](UIComponentBase.md).[destroy](UIComponentBase.md#destroy)

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

[UIComponentBase](UIComponentBase.md).[addQuad](UIComponentBase.md#addquad)

#### Defined in

[src/engine/gui/components/UIComponentBase.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIComponentBase.ts#L28)

___

### clean

▸ **clean**(): `void`

#### Returns

`void`

#### Inherited from

[UIComponentBase](UIComponentBase.md).[clean](UIComponentBase.md#clean)

#### Defined in

[src/engine/gui/components/UIComponentBase.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIComponentBase.ts#L32)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

UIComponentBase.init

#### Defined in

[src/engine/gui/components/UIPanel.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIPanel.ts#L22)

## Constructors

### constructor

• **new UIPanel**()

#### Overrides

[UIComponentBase](UIComponentBase.md).[constructor](UIComponentBase.md#constructor)

#### Defined in

[src/engine/gui/components/UIPanel.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIPanel.ts#L18)
