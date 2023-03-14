# Class: UITransform

组件用于在实体对象上附加功能。组件可以在每个帧接收更新事件。

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`UITransform`**


### Properties

- [object3D](UITransform.md#object3d)
- [serializeTag](UITransform.md#serializetag)
- [useParentPivot](UITransform.md#useparentpivot)
- [parent](UITransform.md#parent)
- [pivotX](UITransform.md#pivotx)
- [pivotY](UITransform.md#pivoty)
- [guiMesh](UITransform.md#guimesh)
- [EventUIResize](UITransform.md#eventuiresize)
- [quads](UITransform.md#quads)
- [needUpdateQuads](UITransform.md#needupdatequads)

### Accessors

- [transform](UITransform.md#transform)
- [enable](UITransform.md#enable)
- [uiInteractiveList](UITransform.md#uiinteractivelist)
- [width](UITransform.md#width)
- [height](UITransform.md#height)
- [x](UITransform.md#x)
- [y](UITransform.md#y)
- [z](UITransform.md#z)
- [scaleX](UITransform.md#scalex)
- [scaleY](UITransform.md#scaley)
- [onChange](UITransform.md#onchange)

### Methods

- [destroy](UITransform.md#destroy)
- [onUpdate](UITransform.md#onupdate)
- [onLateUpdate](UITransform.md#onlateupdate)
- [onBeforeUpdate](UITransform.md#onbeforeupdate)
- [serialization](UITransform.md#serialization)
- [unSerialization](UITransform.md#unserialization)
- [addUIInteractive](UITransform.md#adduiinteractive)
- [removeUIInteractive](UITransform.md#removeuiinteractive)
- [onParentChange](UITransform.md#onparentchange)
- [resize](UITransform.md#resize)
- [onVisible](UITransform.md#onvisible)
- [markNeedsUpdateGUIMesh](UITransform.md#markneedsupdateguimesh)
- [cloneTo](UITransform.md#cloneto)
- [matrix](UITransform.md#matrix)
- [worldMatrix](UITransform.md#worldmatrix)

### Constructors

- [constructor](UITransform.md#constructor)

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

### useParentPivot

• **useParentPivot**: `boolean` = `false`

#### Defined in

[src/engine/gui/components/UITransform.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L6)

___

### parent

• **parent**: [`UITransform`](UITransform.md)

#### Defined in

[src/engine/gui/components/UITransform.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L7)

___

### pivotX

• **pivotX**: `number` = `0.5`

#### Defined in

[src/engine/gui/components/UITransform.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L8)

___

### pivotY

• **pivotY**: `number` = `0.5`

#### Defined in

[src/engine/gui/components/UITransform.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L9)

___

### guiMesh

• **guiMesh**: [`GUIMesh`](GUIMesh.md)

#### Defined in

[src/engine/gui/components/UITransform.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L13)

___

### EventUIResize

▪ `Static` `Readonly` **EventUIResize**: `string` = `'EventUIResize'`

#### Defined in

[src/engine/gui/components/UITransform.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L15)

___

### quads

• **quads**: [`GUIQuad`](GUIQuad.md)[] = `[]`

#### Defined in

[src/engine/gui/components/UITransform.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L116)

___

### needUpdateQuads

• **needUpdateQuads**: `boolean` = `true`

#### Defined in

[src/engine/gui/components/UITransform.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L122)

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

### uiInteractiveList

• `get` **uiInteractiveList**(): [`IUIInteractive`](../interfaces/IUIInteractive.md)[]

#### Returns

[`IUIInteractive`](../interfaces/IUIInteractive.md)[]

#### Defined in

[src/engine/gui/components/UITransform.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L21)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gui/components/UITransform.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L46)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gui/components/UITransform.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L50)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gui/components/UITransform.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L65)

• `set` **x**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gui/components/UITransform.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L69)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gui/components/UITransform.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L76)

• `set` **y**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gui/components/UITransform.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L80)

___

### z

• `get` **z**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gui/components/UITransform.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L87)

• `set` **z**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gui/components/UITransform.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L91)

___

### scaleX

• `get` **scaleX**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gui/components/UITransform.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L98)

• `set` **scaleX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gui/components/UITransform.ts:102](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L102)

___

### scaleY

• `get` **scaleY**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/gui/components/UITransform.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L107)

• `set` **scaleY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/gui/components/UITransform.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L111)

___

### onChange

• `get` **onChange**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/engine/gui/components/UITransform.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L124)

• `set` **onChange**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/engine/gui/components/UITransform.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L130)

## Methods

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

### addUIInteractive

▸ **addUIInteractive**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IUIInteractive`](../interfaces/IUIInteractive.md) |

#### Returns

`void`

#### Defined in

[src/engine/gui/components/UITransform.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L25)

___

### removeUIInteractive

▸ **removeUIInteractive**(`item`): [`IUIInteractive`](../interfaces/IUIInteractive.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IUIInteractive`](../interfaces/IUIInteractive.md) |

#### Returns

[`IUIInteractive`](../interfaces/IUIInteractive.md)

#### Defined in

[src/engine/gui/components/UITransform.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L30)

___

### onParentChange

▸ **onParentChange**(`parent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`Object3D`](Object3D.md) |

#### Returns

`void`

#### Defined in

[src/engine/gui/components/UITransform.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L41)

___

### resize

▸ **resize**(`width`, `height`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`boolean`

#### Defined in

[src/engine/gui/components/UITransform.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L54)

___

### onVisible

▸ **onVisible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onVisible](ComponentBase.md#onvisible)

#### Defined in

[src/engine/gui/components/UITransform.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L144)

___

### markNeedsUpdateGUIMesh

▸ **markNeedsUpdateGUIMesh**(): `void`

#### Returns

`void`

#### Defined in

[src/engine/gui/components/UITransform.ts:150](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L150)

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

[src/engine/gui/components/UITransform.ts:167](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L167)

___

### matrix

▸ **matrix**(): [`Matrix3`](Matrix3.md)

#### Returns

[`Matrix3`](Matrix3.md)

#### Defined in

[src/engine/gui/components/UITransform.ts:183](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L183)

___

### worldMatrix

▸ **worldMatrix**(): [`Matrix3`](Matrix3.md)

#### Returns

[`Matrix3`](Matrix3.md)

#### Defined in

[src/engine/gui/components/UITransform.ts:204](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L204)

## Constructors

### constructor

• **new UITransform**()

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/engine/gui/components/UITransform.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/engine/gui/components/UITransform.ts#L161)
