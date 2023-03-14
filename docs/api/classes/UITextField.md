# Class: UITextField

组件用于在实体对象上附加功能。组件可以在每个帧接收更新事件。

## Hierarchy

- [`UIComponentBase`](UIComponentBase.md)

  ↳ **`UITextField`**


### Properties

- [object3D](UITextField.md#object3d)
- [serializeTag](UITextField.md#serializetag)

### Accessors

- [transform](UITextField.md#transform)
- [enable](UITextField.md#enable)
- [uiTransform](UITextField.md#uitransform)
- [originSize](UITextField.md#originsize)
- [font](UITextField.md#font)
- [fontSize](UITextField.md#fontsize)
- [text](UITextField.md#text)
- [color](UITextField.md#color)
- [alignment](UITextField.md#alignment)
- [lineSpacing](UITextField.md#linespacing)

### Methods

- [onVisible](UITextField.md#onvisible)
- [onUpdate](UITextField.md#onupdate)
- [onLateUpdate](UITextField.md#onlateupdate)
- [onBeforeUpdate](UITextField.md#onbeforeupdate)
- [serialization](UITextField.md#serialization)
- [unSerialization](UITextField.md#unserialization)
- [destroy](UITextField.md#destroy)
- [addQuad](UITextField.md#addquad)
- [cloneTo](UITextField.md#cloneto)
- [clean](UITextField.md#clean)

### Constructors

- [constructor](UITextField.md#constructor)

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

### originSize

• `get` **originSize**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gui/components/UITextField.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITextField.ts#L32)

___

### font

• `get` **font**(): `string`

#### Returns

`string`

#### Defined in

[src/engine/gui/components/UITextField.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITextField.ts#L36)

• `set` **font**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/engine/gui/components/UITextField.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITextField.ts#L40)

___

### fontSize

• `get` **fontSize**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gui/components/UITextField.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITextField.ts#L44)

• `set` **fontSize**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gui/components/UITextField.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITextField.ts#L48)

___

### text

• `get` **text**(): `string`

#### Returns

`string`

#### Defined in

[src/engine/gui/components/UITextField.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITextField.ts#L55)

• `set` **text**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/engine/gui/components/UITextField.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITextField.ts#L59)

___

### color

• `get` **color**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

[src/engine/gui/components/UITextField.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITextField.ts#L101)

• `set` **color**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

[src/engine/gui/components/UITextField.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITextField.ts#L105)

___

### alignment

• `get` **alignment**(): [`TextAnchor`](../enums/TextAnchor.md)

#### Returns

[`TextAnchor`](../enums/TextAnchor.md)

#### Defined in

[src/engine/gui/components/UITextField.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITextField.ts#L113)

• `set` **alignment**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TextAnchor`](../enums/TextAnchor.md) |

#### Returns

`void`

#### Defined in

[src/engine/gui/components/UITextField.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITextField.ts#L117)

___

### lineSpacing

• `get` **lineSpacing**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gui/components/UITextField.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITextField.ts#L124)

• `set` **lineSpacing**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gui/components/UITextField.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITextField.ts#L128)

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

[UIComponentBase](UIComponentBase.md).[cloneTo](UIComponentBase.md#cloneto)

#### Defined in

[src/engine/gui/components/UITextField.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITextField.ts#L21)

___

### clean

▸ **clean**(): `void`

#### Returns

`void`

#### Overrides

[UIComponentBase](UIComponentBase.md).[clean](UIComponentBase.md#clean)

#### Defined in

[src/engine/gui/components/UITextField.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITextField.ts#L67)

## Constructors

### constructor

• **new UITextField**()

#### Overrides

[UIComponentBase](UIComponentBase.md).[constructor](UIComponentBase.md#constructor)

#### Defined in

[src/engine/gui/components/UITextField.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITextField.ts#L17)
