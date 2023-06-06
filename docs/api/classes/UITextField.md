# Class: UITextField

The textField component for gui

## Hierarchy

- [`UIRenderAble`](UIRenderAble.md)

  ↳ **`UITextField`**

### Constructors

- [constructor](UITextField.md#constructor)

### Properties

- [object3D](UITextField.md#object3d)
- [isUIShadow](UITextField.md#isuishadow)
- [isShadowless](UITextField.md#isshadowless)
- [needUpdateShadow](UITextField.md#needupdateshadow)

### Accessors

- [transform](UITextField.md#transform)
- [enable](UITextField.md#enable)
- [uiTransform](UITextField.md#uitransform)
- [visible](UITextField.md#visible)
- [mainQuads](UITextField.md#mainquads)
- [originSize](UITextField.md#originsize)
- [font](UITextField.md#font)
- [fontSize](UITextField.md#fontsize)
- [text](UITextField.md#text)
- [color](UITextField.md#color)
- [alignment](UITextField.md#alignment)
- [lineSpacing](UITextField.md#linespacing)

### Methods

- [stop](UITextField.md#stop)
- [onEnable](UITextField.md#onenable)
- [onDisable](UITextField.md#ondisable)
- [onUpdate](UITextField.md#onupdate)
- [onLateUpdate](UITextField.md#onlateupdate)
- [onBeforeUpdate](UITextField.md#onbeforeupdate)
- [onCompute](UITextField.md#oncompute)
- [onGraphic](UITextField.md#ongraphic)
- [onParentChange](UITextField.md#onparentchange)
- [init](UITextField.md#init)
- [destroy](UITextField.md#destroy)
- [start](UITextField.md#start)
- [setShadowRenderer](UITextField.md#setshadowrenderer)
- [setShadowSource](UITextField.md#setshadowsource)
- [getShadowRender](UITextField.md#getshadowrender)
- [cloneTo](UITextField.md#cloneto)
- [copyComponent](UITextField.md#copycomponent)

## Constructors

### constructor

• **new UITextField**()

#### Overrides

[UIRenderAble](UIRenderAble.md).[constructor](UIRenderAble.md#constructor)

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L19)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

[UIRenderAble](UIRenderAble.md).[object3D](UIRenderAble.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### isUIShadow

• `Optional` **isUIShadow**: `boolean`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[isUIShadow](UIRenderAble.md#isuishadow)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L12)

___

### isShadowless

• `Optional` **isShadowless**: `boolean`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[isShadowless](UIRenderAble.md#isshadowless)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L13)

___

### needUpdateShadow

• **needUpdateShadow**: `boolean`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[needUpdateShadow](UIRenderAble.md#needupdateshadow)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L14)

## Accessors

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

UIRenderAble.transform

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

UIRenderAble.enable

#### Defined in

[src/components/ComponentBase.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L59)

• `set` **enable**(`value`): `void`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

UIRenderAble.enable

#### Defined in

[src/components/ComponentBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L45)

___

### uiTransform

• `get` **uiTransform**(): [`UITransform`](UITransform.md)

#### Returns

[`UITransform`](UITransform.md)

#### Inherited from

UIRenderAble.uiTransform

#### Defined in

[src/components/gui/uiComponents/UIComponentBase.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIComponentBase.ts#L16)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIRenderAble.visible

#### Defined in

[src/components/gui/uiComponents/UIComponentBase.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIComponentBase.ts#L20)

• `set` **visible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

UIRenderAble.visible

#### Defined in

[src/components/gui/uiComponents/UIComponentBase.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIComponentBase.ts#L24)

___

### mainQuads

• `get` **mainQuads**(): [`GUIQuad`](GUIQuad.md)[]

#### Returns

[`GUIQuad`](GUIQuad.md)[]

#### Inherited from

UIRenderAble.mainQuads

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L44)

___

### originSize

• `get` **originSize**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L40)

___

### font

• `get` **font**(): `string`

#### Returns

`string`

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L44)

• `set` **font**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L48)

___

### fontSize

• `get` **fontSize**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L52)

• `set` **fontSize**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L56)

___

### text

• `get` **text**(): `string`

#### Returns

`string`

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L63)

• `set` **text**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L67)

___

### color

• `get` **color**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L117)

• `set` **color**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L121)

___

### alignment

• `get` **alignment**(): [`TextAnchor`](../enums/TextAnchor.md)

#### Returns

[`TextAnchor`](../enums/TextAnchor.md)

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L129)

• `set` **alignment**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TextAnchor`](../enums/TextAnchor.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L133)

___

### lineSpacing

• `get` **lineSpacing**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L140)

• `set` **lineSpacing**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L144)

## Methods

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[stop](UIRenderAble.md#stop)

#### Defined in

[src/components/ComponentBase.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L108)

___

### onEnable

▸ `Optional` **onEnable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[onEnable](UIRenderAble.md#onenable)

#### Defined in

[src/components/ComponentBase.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L109)

___

### onDisable

▸ `Optional` **onDisable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[onDisable](UIRenderAble.md#ondisable)

#### Defined in

[src/components/ComponentBase.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L110)

___

### onUpdate

▸ `Optional` **onUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[onUpdate](UIRenderAble.md#onupdate)

#### Defined in

[src/components/ComponentBase.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L111)

___

### onLateUpdate

▸ `Optional` **onLateUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[onLateUpdate](UIRenderAble.md#onlateupdate)

#### Defined in

[src/components/ComponentBase.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L112)

___

### onBeforeUpdate

▸ `Optional` **onBeforeUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[onBeforeUpdate](UIRenderAble.md#onbeforeupdate)

#### Defined in

[src/components/ComponentBase.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

___

### onCompute

▸ `Optional` **onCompute**(`view?`, `command?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |
| `command?` | `GPUCommandEncoder` |

#### Returns

`any`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[onCompute](UIRenderAble.md#oncompute)

#### Defined in

[src/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L114)

___

### onGraphic

▸ `Optional` **onGraphic**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[onGraphic](UIRenderAble.md#ongraphic)

#### Defined in

[src/components/ComponentBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L115)

___

### onParentChange

▸ `Optional` **onParentChange**(`lastParent?`, `currentParent?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lastParent?` | [`Object3D`](Object3D.md) |
| `currentParent?` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[onParentChange](UIRenderAble.md#onparentchange)

#### Defined in

[src/components/ComponentBase.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L116)

___

### init

▸ **init**(`param?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`void`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[init](UIRenderAble.md#init)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L16)

___

### destroy

▸ **destroy**(): `void`

release this component

#### Returns

`void`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[destroy](UIRenderAble.md#destroy)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L21)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[start](UIRenderAble.md#start)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L30)

___

### setShadowRenderer

▸ **setShadowRenderer**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`UIRenderAble`](UIRenderAble.md) |

#### Returns

`void`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[setShadowRenderer](UIRenderAble.md#setshadowrenderer)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L48)

___

### setShadowSource

▸ **setShadowSource**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`UIRenderAble`](UIRenderAble.md) |

#### Returns

`void`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[setShadowSource](UIRenderAble.md#setshadowsource)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L52)

___

### getShadowRender

▸ **getShadowRender**(): [`UIRenderAble`](UIRenderAble.md)

#### Returns

[`UIRenderAble`](UIRenderAble.md)

#### Inherited from

[UIRenderAble](UIRenderAble.md).[getShadowRender](UIRenderAble.md#getshadowrender)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L56)

___

### cloneTo

▸ **cloneTo**(`obj`): `void`

clone component data to target object3D

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) | target object3D |

#### Returns

`void`

#### Overrides

[UIRenderAble](UIRenderAble.md).[cloneTo](UIRenderAble.md#cloneto)

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L23)

___

### copyComponent

▸ **copyComponent**(`from`): [`UITextField`](UITextField.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`UITextField`](UITextField.md) |

#### Returns

[`UITextField`](UITextField.md)

#### Overrides

[UIRenderAble](UIRenderAble.md).[copyComponent](UIRenderAble.md#copycomponent)

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L28)
