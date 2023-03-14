# Class: UIComponentBase

组件用于在实体对象上附加功能。组件可以在每个帧接收更新事件。

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`UIComponentBase`**

  ↳↳ [`UIImage`](UIImage.md)

  ↳↳ [`UIInteractive`](UIInteractive.md)

  ↳↳ [`UIPanel`](UIPanel.md)

  ↳↳ [`UITextField`](UITextField.md)


### Properties

- [object3D](UIComponentBase.md#object3d)
- [serializeTag](UIComponentBase.md#serializetag)

### Accessors

- [transform](UIComponentBase.md#transform)
- [enable](UIComponentBase.md#enable)
- [uiTransform](UIComponentBase.md#uitransform)

### Methods

- [onVisible](UIComponentBase.md#onvisible)
- [cloneTo](UIComponentBase.md#cloneto)
- [onUpdate](UIComponentBase.md#onupdate)
- [onLateUpdate](UIComponentBase.md#onlateupdate)
- [onBeforeUpdate](UIComponentBase.md#onbeforeupdate)
- [serialization](UIComponentBase.md#serialization)
- [unSerialization](UIComponentBase.md#unserialization)
- [destroy](UIComponentBase.md#destroy)
- [addQuad](UIComponentBase.md#addquad)
- [clean](UIComponentBase.md#clean)

### Constructors

- [constructor](UIComponentBase.md#constructor)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

此组件附加到的Object3D对象。

#### Inherited from

[ComponentBase](ComponentBase.md).[object3D](ComponentBase.md#object3d)

#### Defined in

[src/engine/components/ComponentBase.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L14)

___

### serializeTag

• `Optional` **serializeTag**: [`SerializeTag`](../types/SerializeTag.md)

#### Inherited from

[ComponentBase](ComponentBase.md).[serializeTag](ComponentBase.md#serializetag)

#### Defined in

[src/engine/components/ComponentBase.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L30)

## Accessors

### transform

• `get` **transform**(): [`Transform`](Transform.md)

附加到此 Object3D对象 的 Transform组件。

#### Returns

[`Transform`](Transform.md)

#### Inherited from

ComponentBase.transform

#### Defined in

[src/engine/components/ComponentBase.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L39)

___

### enable

• `get` **enable**(): `boolean`

启用/禁用 组件。启用的组件可更新，禁用的组件不可更新。

#### Returns

`boolean`

#### Inherited from

ComponentBase.enable

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

ComponentBase.enable

#### Defined in

[src/engine/components/ComponentBase.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L43)

___

### uiTransform

• `get` **uiTransform**(): [`UITransform`](UITransform.md)

#### Returns

[`UITransform`](UITransform.md)

#### Defined in

[src/engine/gui/components/UIComponentBase.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIComponentBase.ts#L6)

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

[ComponentBase](ComponentBase.md).[onVisible](ComponentBase.md#onvisible)

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

[ComponentBase](ComponentBase.md).[cloneTo](ComponentBase.md#cloneto)

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

[ComponentBase](ComponentBase.md).[onUpdate](ComponentBase.md#onupdate)

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

[ComponentBase](ComponentBase.md).[onLateUpdate](ComponentBase.md#onlateupdate)

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

[ComponentBase](ComponentBase.md).[onBeforeUpdate](ComponentBase.md#onbeforeupdate)

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

[ComponentBase](ComponentBase.md).[serialization](ComponentBase.md#serialization)

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

[ComponentBase](ComponentBase.md).[unSerialization](ComponentBase.md#unserialization)

#### Defined in

[src/engine/components/ComponentBase.ts:175](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L175)

___

### destroy

▸ **destroy**(): `void`

移除组件时候调用

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[destroy](ComponentBase.md#destroy)

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

#### Defined in

[src/engine/gui/components/UIComponentBase.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIComponentBase.ts#L28)

___

### clean

▸ **clean**(): `void`

#### Returns

`void`

#### Defined in

[src/engine/gui/components/UIComponentBase.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIComponentBase.ts#L32)

## Constructors

### constructor

• **new UIComponentBase**()

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/engine/gui/components/UIComponentBase.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIComponentBase.ts#L10)
