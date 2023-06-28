# Class: UIButton

The basic components used in the GUI to respond to user interaction behavior and have an image component

## Hierarchy

- [`UIInteractive`](UIInteractive.md)

  ↳ **`UIButton`**

### Constructors

- [constructor](UIButton.md#constructor)

### Properties

- [object3D](UIButton.md#object3d)

### Accessors

- [transform](UIButton.md#transform)
- [enable](UIButton.md#enable)
- [transition](UIButton.md#transition)
- [imageType](UIButton.md#imagetype)
- [mouseStyle](UIButton.md#mousestyle)
- [normalSprite](UIButton.md#normalsprite)
- [overSprite](UIButton.md#oversprite)
- [downSprite](UIButton.md#downsprite)
- [disableSprite](UIButton.md#disablesprite)
- [uiTransform](UIButton.md#uitransform)
- [visible](UIButton.md#visible)
- [interactive](UIButton.md#interactive)
- [interactiveVisible](UIButton.md#interactivevisible)

### Methods

- [start](UIButton.md#start)
- [stop](UIButton.md#stop)
- [onUpdate](UIButton.md#onupdate)
- [onLateUpdate](UIButton.md#onlateupdate)
- [onBeforeUpdate](UIButton.md#onbeforeupdate)
- [onCompute](UIButton.md#oncompute)
- [onGraphic](UIButton.md#ongraphic)
- [onParentChange](UIButton.md#onparentchange)
- [beforeDestroy](UIButton.md#beforedestroy)
- [init](UIButton.md#init)
- [onEnable](UIButton.md#onenable)
- [onDisable](UIButton.md#ondisable)
- [setStyleColor](UIButton.md#setstylecolor)
- [getStyleColor](UIButton.md#getstylecolor)
- [cloneTo](UIButton.md#cloneto)
- [copyComponent](UIButton.md#copycomponent)
- [destroy](UIButton.md#destroy)
- [rayPick](UIButton.md#raypick)

## Constructors

### constructor

• **new UIButton**()

#### Inherited from

[UIInteractive](UIInteractive.md).[constructor](UIInteractive.md#constructor)

#### Defined in

[src/components/ComponentBase.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L31)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

[UIInteractive](UIInteractive.md).[object3D](UIInteractive.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

## Accessors

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

UIInteractive.transform

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

UIInteractive.enable

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

UIInteractive.enable

#### Defined in

[src/components/ComponentBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L45)

___

### transition

• `get` **transition**(): [`UIButtonTransition`](../enums/UIButtonTransition.md)

#### Returns

[`UIButtonTransition`](../enums/UIButtonTransition.md)

#### Defined in

[src/components/gui/uiComponents/UIButton.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIButton.ts#L54)

• `set` **transition**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`UIButtonTransition`](../enums/UIButtonTransition.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UIButton.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIButton.ts#L47)

___

### imageType

• `get` **imageType**(): [`ImageType`](../enums/ImageType.md)

#### Returns

[`ImageType`](../enums/ImageType.md)

#### Defined in

[src/components/gui/uiComponents/UIButton.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIButton.ts#L58)

• `set` **imageType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ImageType`](../enums/ImageType.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UIButton.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIButton.ts#L62)

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

[src/components/gui/uiComponents/UIButton.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIButton.ts#L78)

___

### normalSprite

• `get` **normalSprite**(): [`GUISprite`](GUISprite.md)

#### Returns

[`GUISprite`](GUISprite.md)

#### Defined in

[src/components/gui/uiComponents/UIButton.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIButton.ts#L83)

• `set` **normalSprite**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GUISprite`](GUISprite.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UIButton.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIButton.ts#L87)

___

### overSprite

• `get` **overSprite**(): [`GUISprite`](GUISprite.md)

#### Returns

[`GUISprite`](GUISprite.md)

#### Defined in

[src/components/gui/uiComponents/UIButton.ts:94](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIButton.ts#L94)

• `set` **overSprite**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GUISprite`](GUISprite.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UIButton.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIButton.ts#L98)

___

### downSprite

• `get` **downSprite**(): [`GUISprite`](GUISprite.md)

#### Returns

[`GUISprite`](GUISprite.md)

#### Defined in

[src/components/gui/uiComponents/UIButton.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIButton.ts#L112)

• `set` **downSprite**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GUISprite`](GUISprite.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UIButton.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIButton.ts#L105)

___

### disableSprite

• `get` **disableSprite**(): [`GUISprite`](GUISprite.md)

#### Returns

[`GUISprite`](GUISprite.md)

#### Defined in

[src/components/gui/uiComponents/UIButton.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIButton.ts#L123)

• `set` **disableSprite**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GUISprite`](GUISprite.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UIButton.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIButton.ts#L116)

___

### uiTransform

• `get` **uiTransform**(): [`UITransform`](UITransform.md)

#### Returns

[`UITransform`](UITransform.md)

#### Inherited from

UIInteractive.uiTransform

#### Defined in

[src/components/gui/uiComponents/UIComponentBase.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIComponentBase.ts#L16)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIInteractive.visible

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

UIInteractive.visible

#### Defined in

[src/components/gui/uiComponents/UIComponentBase.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIComponentBase.ts#L24)

___

### interactive

• `get` **interactive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIInteractive.interactive

#### Defined in

[src/components/gui/uiComponents/UIInteractive.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIInteractive.ts#L22)

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

[src/components/gui/uiComponents/UIInteractive.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIInteractive.ts#L18)

___

### interactiveVisible

• `get` **interactiveVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIInteractive.interactiveVisible

#### Defined in

[src/components/gui/uiComponents/UIInteractive.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIInteractive.ts#L30)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[UIInteractive](UIInteractive.md).[start](UIInteractive.md#start)

#### Defined in

[src/components/ComponentBase.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L104)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[UIInteractive](UIInteractive.md).[stop](UIInteractive.md#stop)

#### Defined in

[src/components/ComponentBase.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L105)

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

[UIInteractive](UIInteractive.md).[onUpdate](UIInteractive.md#onupdate)

#### Defined in

[src/components/ComponentBase.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L108)

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

[UIInteractive](UIInteractive.md).[onLateUpdate](UIInteractive.md#onlateupdate)

#### Defined in

[src/components/ComponentBase.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L109)

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

[UIInteractive](UIInteractive.md).[onBeforeUpdate](UIInteractive.md#onbeforeupdate)

#### Defined in

[src/components/ComponentBase.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L110)

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

[UIInteractive](UIInteractive.md).[onCompute](UIInteractive.md#oncompute)

#### Defined in

[src/components/ComponentBase.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L111)

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

[UIInteractive](UIInteractive.md).[onGraphic](UIInteractive.md#ongraphic)

#### Defined in

[src/components/ComponentBase.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L112)

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

[UIInteractive](UIInteractive.md).[onParentChange](UIInteractive.md#onparentchange)

#### Defined in

[src/components/ComponentBase.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

___

### beforeDestroy

▸ `Optional` **beforeDestroy**(`force?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`any`

#### Inherited from

[UIInteractive](UIInteractive.md).[beforeDestroy](UIInteractive.md#beforedestroy)

#### Defined in

[src/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L114)

___

### init

▸ **init**(`param?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`void`

#### Overrides

[UIInteractive](UIInteractive.md).[init](UIInteractive.md#init)

#### Defined in

[src/components/gui/uiComponents/UIButton.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIButton.ts#L26)

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[UIInteractive](UIInteractive.md).[onEnable](UIInteractive.md#onenable)

#### Defined in

[src/components/gui/uiComponents/UIButton.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIButton.ts#L39)

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Overrides

[UIInteractive](UIInteractive.md).[onDisable](UIInteractive.md#ondisable)

#### Defined in

[src/components/gui/uiComponents/UIButton.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIButton.ts#L43)

___

### setStyleColor

▸ **setStyleColor**(`style`, `color`): [`UIButton`](UIButton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | [`UIInteractiveStyle`](../enums/UIInteractiveStyle.md) |
| `color` | [`Color`](Color.md) |

#### Returns

[`UIButton`](UIButton.md)

#### Defined in

[src/components/gui/uiComponents/UIButton.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIButton.ts#L66)

___

### getStyleColor

▸ **getStyleColor**(`style`): [`Color`](Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | [`UIInteractiveStyle`](../enums/UIInteractiveStyle.md) |

#### Returns

[`Color`](Color.md)

#### Defined in

[src/components/gui/uiComponents/UIButton.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIButton.ts#L74)

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

[UIInteractive](UIInteractive.md).[cloneTo](UIInteractive.md#cloneto)

#### Defined in

[src/components/gui/uiComponents/UIButton.ts:139](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIButton.ts#L139)

___

### copyComponent

▸ **copyComponent**(`from`): [`UIButton`](UIButton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`UIButton`](UIButton.md) |

#### Returns

[`UIButton`](UIButton.md)

#### Overrides

[UIInteractive](UIInteractive.md).[copyComponent](UIInteractive.md#copycomponent)

#### Defined in

[src/components/gui/uiComponents/UIButton.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIButton.ts#L144)

___

### destroy

▸ **destroy**(): `void`

release this component

#### Returns

`void`

#### Overrides

[UIInteractive](UIInteractive.md).[destroy](UIInteractive.md#destroy)

#### Defined in

[src/components/gui/uiComponents/UIButton.ts:162](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIButton.ts#L162)

___

### rayPick

▸ **rayPick**(`ray`, `panel`, `screenPos`, `screenSize`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ray` | [`Ray`](Ray.md) |
| `panel` | [`UIPanel`](UIPanel.md) |
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

[src/components/gui/uiComponents/UIInteractive.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIInteractive.ts#L44)
