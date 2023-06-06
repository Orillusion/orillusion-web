# Class: UIInteractive

The basic class of interactive GUI component

## Hierarchy

- [`UIComponentBase`](UIComponentBase.md)

  ↳ **`UIInteractive`**

  ↳↳ [`UIButton`](UIButton.md)

## Implements

- [`IUIInteractive`](../interfaces/IUIInteractive.md)

### Constructors

- [constructor](UIInteractive.md#constructor)

### Properties

- [object3D](UIInteractive.md#object3d)

### Accessors

- [transform](UIInteractive.md#transform)
- [enable](UIInteractive.md#enable)
- [uiTransform](UIInteractive.md#uitransform)
- [visible](UIInteractive.md#visible)
- [interactive](UIInteractive.md#interactive)
- [mouseStyle](UIInteractive.md#mousestyle)
- [interactiveVisible](UIInteractive.md#interactivevisible)

### Methods

- [start](UIInteractive.md#start)
- [stop](UIInteractive.md#stop)
- [onEnable](UIInteractive.md#onenable)
- [onDisable](UIInteractive.md#ondisable)
- [onUpdate](UIInteractive.md#onupdate)
- [onLateUpdate](UIInteractive.md#onlateupdate)
- [onBeforeUpdate](UIInteractive.md#onbeforeupdate)
- [onCompute](UIInteractive.md#oncompute)
- [onGraphic](UIInteractive.md#ongraphic)
- [onParentChange](UIInteractive.md#onparentchange)
- [init](UIInteractive.md#init)
- [destroy](UIInteractive.md#destroy)
- [rayPick](UIInteractive.md#raypick)
- [cloneTo](UIInteractive.md#cloneto)
- [copyComponent](UIInteractive.md#copycomponent)

## Constructors

### constructor

• **new UIInteractive**()

#### Inherited from

[UIComponentBase](UIComponentBase.md).[constructor](UIComponentBase.md#constructor)

#### Defined in

[src/components/ComponentBase.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L31)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Implementation of

[IUIInteractive](../interfaces/IUIInteractive.md).[object3D](../interfaces/IUIInteractive.md#object3d)

#### Inherited from

[UIComponentBase](UIComponentBase.md).[object3D](UIComponentBase.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

## Accessors

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

UIComponentBase.transform

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Implementation of

[IUIInteractive](../interfaces/IUIInteractive.md).[enable](../interfaces/IUIInteractive.md#enable)

#### Inherited from

UIComponentBase.enable

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

#### Implementation of

[IUIInteractive](../interfaces/IUIInteractive.md).[enable](../interfaces/IUIInteractive.md#enable)

#### Inherited from

UIComponentBase.enable

#### Defined in

[src/components/ComponentBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L45)

___

### uiTransform

• `get` **uiTransform**(): [`UITransform`](UITransform.md)

#### Returns

[`UITransform`](UITransform.md)

#### Inherited from

UIComponentBase.uiTransform

#### Defined in

[src/components/gui/uiComponents/UIComponentBase.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIComponentBase.ts#L16)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIInteractive](../interfaces/IUIInteractive.md).[visible](../interfaces/IUIInteractive.md#visible)

#### Inherited from

UIComponentBase.visible

#### Defined in

[src/components/gui/uiComponents/UIComponentBase.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIComponentBase.ts#L20)

• `set` **visible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Implementation of

[IUIInteractive](../interfaces/IUIInteractive.md).[visible](../interfaces/IUIInteractive.md#visible)

#### Inherited from

UIComponentBase.visible

#### Defined in

[src/components/gui/uiComponents/UIComponentBase.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIComponentBase.ts#L24)

___

### interactive

• `get` **interactive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIInteractive](../interfaces/IUIInteractive.md).[interactive](../interfaces/IUIInteractive.md#interactive)

#### Defined in

[src/components/gui/uiComponents/UIInteractive.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIInteractive.ts#L21)

• `set` **interactive**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Implementation of

[IUIInteractive](../interfaces/IUIInteractive.md).[interactive](../interfaces/IUIInteractive.md#interactive)

#### Defined in

[src/components/gui/uiComponents/UIInteractive.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIInteractive.ts#L17)

___

### mouseStyle

• `set` **mouseStyle**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`UIInteractiveStyle`](../enums/UIInteractiveStyle.md) |

#### Returns

`void`

#### Implementation of

IUIInteractive.mouseStyle

#### Defined in

[src/components/gui/uiComponents/UIInteractive.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIInteractive.ts#L25)

___

### interactiveVisible

• `get` **interactiveVisible**(): `boolean`

#### Returns

`boolean`

#### Implementation of

IUIInteractive.interactiveVisible

#### Defined in

[src/components/gui/uiComponents/UIInteractive.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIInteractive.ts#L29)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[UIComponentBase](UIComponentBase.md).[start](UIComponentBase.md#start)

#### Defined in

[src/components/ComponentBase.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L107)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[UIComponentBase](UIComponentBase.md).[stop](UIComponentBase.md#stop)

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

[UIComponentBase](UIComponentBase.md).[onEnable](UIComponentBase.md#onenable)

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

[UIComponentBase](UIComponentBase.md).[onDisable](UIComponentBase.md#ondisable)

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

[UIComponentBase](UIComponentBase.md).[onUpdate](UIComponentBase.md#onupdate)

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

[UIComponentBase](UIComponentBase.md).[onLateUpdate](UIComponentBase.md#onlateupdate)

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

[UIComponentBase](UIComponentBase.md).[onBeforeUpdate](UIComponentBase.md#onbeforeupdate)

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

[UIComponentBase](UIComponentBase.md).[onCompute](UIComponentBase.md#oncompute)

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

[UIComponentBase](UIComponentBase.md).[onGraphic](UIComponentBase.md#ongraphic)

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

[UIComponentBase](UIComponentBase.md).[onParentChange](UIComponentBase.md#onparentchange)

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

#### Overrides

[UIComponentBase](UIComponentBase.md).[init](UIComponentBase.md#init)

#### Defined in

[src/components/gui/uiComponents/UIInteractive.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIInteractive.ts#L33)

___

### destroy

▸ **destroy**(): `void`

release this component

#### Returns

`void`

#### Implementation of

[IUIInteractive](../interfaces/IUIInteractive.md).[destroy](../interfaces/IUIInteractive.md#destroy)

#### Overrides

[UIComponentBase](UIComponentBase.md).[destroy](UIComponentBase.md#destroy)

#### Defined in

[src/components/gui/uiComponents/UIInteractive.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIInteractive.ts#L38)

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

#### Implementation of

[IUIInteractive](../interfaces/IUIInteractive.md).[rayPick](../interfaces/IUIInteractive.md#raypick)

#### Defined in

[src/components/gui/uiComponents/UIInteractive.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIInteractive.ts#L43)

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

[UIComponentBase](UIComponentBase.md).[cloneTo](UIComponentBase.md#cloneto)

#### Defined in

[src/components/gui/uiComponents/UIInteractive.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIInteractive.ts#L48)

___

### copyComponent

▸ **copyComponent**(`from`): [`UIInteractive`](UIInteractive.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`UIInteractive`](UIInteractive.md) |

#### Returns

[`UIInteractive`](UIInteractive.md)

#### Overrides

[UIComponentBase](UIComponentBase.md).[copyComponent](UIComponentBase.md#copycomponent)

#### Defined in

[src/components/gui/uiComponents/UIInteractive.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIInteractive.ts#L53)
