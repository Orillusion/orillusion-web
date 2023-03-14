# Class: UICanvas

组件用于在实体对象上附加功能。组件可以在每个帧接收更新事件。

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`UICanvas`**


### Properties

- [object3D](UICanvas.md#object3d)
- [serializeTag](UICanvas.md#serializetag)
- [camera](UICanvas.md#camera)

### Constructors

- [constructor](UICanvas.md#constructor)

### Accessors

- [transform](UICanvas.md#transform)
- [enable](UICanvas.md#enable)

### Methods

- [onVisible](UICanvas.md#onvisible)
- [destroy](UICanvas.md#destroy)
- [onUpdate](UICanvas.md#onupdate)
- [onLateUpdate](UICanvas.md#onlateupdate)
- [onBeforeUpdate](UICanvas.md#onbeforeupdate)
- [serialization](UICanvas.md#serialization)
- [unSerialization](UICanvas.md#unserialization)
- [addGUIChild](UICanvas.md#addguichild)
- [update](UICanvas.md#update)
- [rebuildGUIMesh](UICanvas.md#rebuildguimesh)
- [cloneTo](UICanvas.md#cloneto)

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

___

### camera

• **camera**: [`Camera3D`](Camera3D.md)

#### Defined in

[src/engine/gui/core/UICanvas.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/UICanvas.ts#L16)

## Constructors

### constructor

• **new UICanvas**()

#### Inherited from

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/engine/components/ComponentBase.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L32)

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

### destroy

▸ **destroy**(): `void`

移除组件时候调用

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[destroy](ComponentBase.md#destroy)

#### Defined in

[src/engine/components/ComponentBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L119)

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

### addGUIChild

▸ **addGUIChild**(`child`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Object3D`](Object3D.md) |

#### Returns

`void`

#### Defined in

[src/engine/gui/core/UICanvas.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/UICanvas.ts#L23)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Overrides

ComponentBase.update

#### Defined in

[src/engine/gui/core/UICanvas.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/UICanvas.ts#L27)

___

### rebuildGUIMesh

▸ **rebuildGUIMesh**(): `void`

#### Returns

`void`

#### Defined in

[src/engine/gui/core/UICanvas.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/UICanvas.ts#L32)

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

[ComponentBase](ComponentBase.md).[cloneTo](ComponentBase.md#cloneto)

#### Defined in

[src/engine/gui/core/UICanvas.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/core/UICanvas.ts#L58)
