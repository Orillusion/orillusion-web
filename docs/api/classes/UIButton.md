# Class: UIButton

组件用于在实体对象上附加功能。组件可以在每个帧接收更新事件。

## Hierarchy

- [`UIInteractive`](UIInteractive.md)

  ↳ **`UIButton`**


### Properties

- [object3D](UIButton.md#object3d)
- [serializeTag](UIButton.md#serializetag)

### Accessors

- [transform](UIButton.md#transform)
- [enable](UIButton.md#enable)
- [mouseStyle](UIButton.md#mousestyle)
- [upTexture](UIButton.md#uptexture)
- [overTexture](UIButton.md#overtexture)
- [downTexture](UIButton.md#downtexture)
- [disableTexture](UIButton.md#disabletexture)
- [uiTransform](UIButton.md#uitransform)
- [interactive](UIButton.md#interactive)

### Methods

- [onVisible](UIButton.md#onvisible)
- [onUpdate](UIButton.md#onupdate)
- [onLateUpdate](UIButton.md#onlateupdate)
- [onBeforeUpdate](UIButton.md#onbeforeupdate)
- [serialization](UIButton.md#serialization)
- [unSerialization](UIButton.md#unserialization)
- [cloneTo](UIButton.md#cloneto)
- [addQuad](UIButton.md#addquad)
- [clean](UIButton.md#clean)
- [destroy](UIButton.md#destroy)
- [rayPick](UIButton.md#raypick)

### Constructors

- [constructor](UIButton.md#constructor)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

此组件附加到的Object3D对象。

#### Inherited from

[UIInteractive](UIInteractive.md).[object3D](UIInteractive.md#object3d)

#### Defined in

[src/engine/components/ComponentBase.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L14)

___

### serializeTag

• `Optional` **serializeTag**: [`SerializeTag`](../types/SerializeTag.md)

#### Inherited from

[UIInteractive](UIInteractive.md).[serializeTag](UIInteractive.md#serializetag)

#### Defined in

[src/engine/components/ComponentBase.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L30)

## Accessors

### transform

• `get` **transform**(): [`Transform`](Transform.md)

附加到此 Object3D对象 的 Transform组件。

#### Returns

[`Transform`](Transform.md)

#### Inherited from

UIInteractive.transform

#### Defined in

[src/engine/components/ComponentBase.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L39)

___

### enable

• `get` **enable**(): `boolean`

启用/禁用 组件。启用的组件可更新，禁用的组件不可更新。

#### Returns

`boolean`

#### Inherited from

UIInteractive.enable

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

UIInteractive.enable

#### Defined in

[src/engine/components/ComponentBase.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L43)

___

### mouseStyle

• `set` **mouseStyle**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`UIInteractiveStyle`](../enums/UIInteractiveStyle.md) |

#### Returns

`void`

#### Overrides

UIInteractive.mouseStyle

#### Defined in

[src/engine/gui/components/UIButton.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIButton.ts#L27)

___

### upTexture

• `get` **upTexture**(): [`GUISubTexture`](GUISubTexture.md)

#### Returns

[`GUISubTexture`](GUISubTexture.md)

#### Defined in

[src/engine/gui/components/UIButton.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIButton.ts#L32)

• `set` **upTexture**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GUISubTexture`](GUISubTexture.md) |

#### Returns

`void`

#### Defined in

[src/engine/gui/components/UIButton.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIButton.ts#L36)

___

### overTexture

• `get` **overTexture**(): [`GUISubTexture`](GUISubTexture.md)

#### Returns

[`GUISubTexture`](GUISubTexture.md)

#### Defined in

[src/engine/gui/components/UIButton.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIButton.ts#L43)

• `set` **overTexture**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GUISubTexture`](GUISubTexture.md) |

#### Returns

`void`

#### Defined in

[src/engine/gui/components/UIButton.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIButton.ts#L47)

___

### downTexture

• `get` **downTexture**(): [`GUISubTexture`](GUISubTexture.md)

#### Returns

[`GUISubTexture`](GUISubTexture.md)

#### Defined in

[src/engine/gui/components/UIButton.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIButton.ts#L61)

• `set` **downTexture**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GUISubTexture`](GUISubTexture.md) |

#### Returns

`void`

#### Defined in

[src/engine/gui/components/UIButton.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIButton.ts#L54)

___

### disableTexture

• `get` **disableTexture**(): [`GUISubTexture`](GUISubTexture.md)

#### Returns

[`GUISubTexture`](GUISubTexture.md)

#### Defined in

[src/engine/gui/components/UIButton.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIButton.ts#L72)

• `set` **disableTexture**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GUISubTexture`](GUISubTexture.md) |

#### Returns

`void`

#### Defined in

[src/engine/gui/components/UIButton.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIButton.ts#L65)

___

### uiTransform

• `get` **uiTransform**(): [`UITransform`](UITransform.md)

#### Returns

[`UITransform`](UITransform.md)

#### Inherited from

UIInteractive.uiTransform

#### Defined in

[src/engine/gui/components/UIComponentBase.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIComponentBase.ts#L6)

___

### interactive

• `get` **interactive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIInteractive.interactive

#### Defined in

[src/engine/gui/components/UIInteractive.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIInteractive.ts#L14)

• `set` **interactive**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

UIInteractive.interactive

#### Defined in

[src/engine/gui/components/UIInteractive.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIInteractive.ts#L10)

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

[UIInteractive](UIInteractive.md).[onVisible](UIInteractive.md#onvisible)

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

[UIInteractive](UIInteractive.md).[onUpdate](UIInteractive.md#onupdate)

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

[UIInteractive](UIInteractive.md).[onLateUpdate](UIInteractive.md#onlateupdate)

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

[UIInteractive](UIInteractive.md).[onBeforeUpdate](UIInteractive.md#onbeforeupdate)

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

[UIInteractive](UIInteractive.md).[serialization](UIInteractive.md#serialization)

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

[UIInteractive](UIInteractive.md).[unSerialization](UIInteractive.md#unserialization)

#### Defined in

[src/engine/components/ComponentBase.ts:175](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L175)

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

[UIInteractive](UIInteractive.md).[cloneTo](UIInteractive.md#cloneto)

#### Defined in

[src/engine/gui/components/UIButton.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIButton.ts#L87)

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

[UIInteractive](UIInteractive.md).[addQuad](UIInteractive.md#addquad)

#### Defined in

[src/engine/gui/components/UIComponentBase.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIComponentBase.ts#L28)

___

### clean

▸ **clean**(): `void`

#### Returns

`void`

#### Inherited from

[UIInteractive](UIInteractive.md).[clean](UIInteractive.md#clean)

#### Defined in

[src/engine/gui/components/UIComponentBase.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIComponentBase.ts#L32)

___

### destroy

▸ **destroy**(): `void`

移除组件时候调用

#### Returns

`void`

#### Inherited from

[UIInteractive](UIInteractive.md).[destroy](UIInteractive.md#destroy)

#### Defined in

[src/engine/gui/components/UIInteractive.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIInteractive.ts#L27)

___

### rayPick

▸ **rayPick**(`ray`, `screenPos`, `screenSize`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ray` | [`Ray`](Ray.md) |
| `screenPos` | [`Vector2`](Vector2.md) |
| `screenSize` | [`Vector2`](Vector2.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `intersect` | `boolean` |
| `intersectPoint?` | [`Vector3`](Vector3.md) |
| `distance` | `number` |

#### Inherited from

[UIInteractive](UIInteractive.md).[rayPick](UIInteractive.md#raypick)

#### Defined in

[src/engine/gui/components/UIInteractive.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIInteractive.ts#L32)

## Constructors

### constructor

• **new UIButton**()

#### Inherited from

[UIInteractive](UIInteractive.md).[constructor](UIInteractive.md#constructor)

#### Defined in

[src/engine/gui/components/UIComponentBase.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UIComponentBase.ts#L10)
