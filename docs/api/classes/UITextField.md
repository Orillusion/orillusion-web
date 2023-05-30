# Class: UITextField

Components are used to attach functionality to object3D, it has an owner object3D.
The component can receive update events at each frame.

## Hierarchy

- [`UIRenderAble`](UIRenderAble.md)

  ↳ **`UITextField`**

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
- [copyComponent](UITextField.md#copycomponent)
- [cloneTo](UITextField.md#cloneto)

### Constructors

- [constructor](UITextField.md#constructor)

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

[src/components/gui/uiComponents/UIRenderAble.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L8)

___

### isShadowless

• `Optional` **isShadowless**: `boolean`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[isShadowless](UIRenderAble.md#isshadowless)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L9)

___

### needUpdateShadow

• **needUpdateShadow**: `boolean`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[needUpdateShadow](UIRenderAble.md#needupdateshadow)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L10)

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

[src/components/gui/uiComponents/UIComponentBase.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIComponentBase.ts#L12)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIRenderAble.visible

#### Defined in

[src/components/gui/uiComponents/UIComponentBase.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIComponentBase.ts#L16)

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

[src/components/gui/uiComponents/UIComponentBase.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIComponentBase.ts#L20)

___

### mainQuads

• `get` **mainQuads**(): [`GUIQuad`](GUIQuad.md)[]

#### Returns

[`GUIQuad`](GUIQuad.md)[]

#### Inherited from

UIRenderAble.mainQuads

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L40)

___

### originSize

• `get` **originSize**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L31)

___

### font

• `get` **font**(): `string`

#### Returns

`string`

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L35)

• `set` **font**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L39)

___

### fontSize

• `get` **fontSize**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L43)

• `set` **fontSize**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L47)

___

### text

• `get` **text**(): `string`

#### Returns

`string`

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L54)

• `set` **text**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L58)

___

### color

• `get` **color**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L108)

• `set` **color**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L112)

___

### alignment

• `get` **alignment**(): [`TextAnchor`](../enums/TextAnchor.md)

#### Returns

[`TextAnchor`](../enums/TextAnchor.md)

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L120)

• `set` **alignment**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`TextAnchor`](../enums/TextAnchor.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L124)

___

### lineSpacing

• `get` **lineSpacing**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L131)

• `set` **lineSpacing**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L135)

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

[src/components/gui/uiComponents/UIRenderAble.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L12)

___

### destroy

▸ **destroy**(): `void`

release this component

#### Returns

`void`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[destroy](UIRenderAble.md#destroy)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L17)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[start](UIRenderAble.md#start)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L26)

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

[src/components/gui/uiComponents/UIRenderAble.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L44)

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

[src/components/gui/uiComponents/UIRenderAble.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L48)

___

### getShadowRender

▸ **getShadowRender**(): [`UIRenderAble`](UIRenderAble.md)

#### Returns

[`UIRenderAble`](UIRenderAble.md)

#### Inherited from

[UIRenderAble](UIRenderAble.md).[getShadowRender](UIRenderAble.md#getshadowrender)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L52)

___

### copyComponent

▸ **copyComponent**(`from`): [`UITextField`](UITextField.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`UITextField`](UITextField.md) |

#### Returns

[`UITextField`](UITextField.md)

#### Inherited from

[UIRenderAble](UIRenderAble.md).[copyComponent](UIRenderAble.md#copycomponent)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L116)

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

[src/components/gui/uiComponents/UITextField.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L19)

## Constructors

### constructor

• **new UITextField**()

#### Overrides

[UIRenderAble](UIRenderAble.md).[constructor](UIRenderAble.md#constructor)

#### Defined in

[src/components/gui/uiComponents/UITextField.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITextField.ts#L15)
