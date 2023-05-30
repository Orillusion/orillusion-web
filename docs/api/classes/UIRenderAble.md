# Class: UIRenderAble

Components are used to attach functionality to object3D, it has an owner object3D.
The component can receive update events at each frame.

## Hierarchy

- [`UIComponentBase`](UIComponentBase.md)

  ↳ **`UIRenderAble`**

  ↳↳ [`UIImage`](UIImage.md)

  ↳↳ [`UIImageGroup`](UIImageGroup.md)

  ↳↳ [`UIShadow`](UIShadow.md)

  ↳↳ [`UITextField`](UITextField.md)

### Properties

- [object3D](UIRenderAble.md#object3d)
- [isUIShadow](UIRenderAble.md#isuishadow)
- [isShadowless](UIRenderAble.md#isshadowless)
- [needUpdateShadow](UIRenderAble.md#needupdateshadow)

### Constructors

- [constructor](UIRenderAble.md#constructor)

### Accessors

- [transform](UIRenderAble.md#transform)
- [enable](UIRenderAble.md#enable)
- [uiTransform](UIRenderAble.md#uitransform)
- [visible](UIRenderAble.md#visible)
- [mainQuads](UIRenderAble.md#mainquads)

### Methods

- [stop](UIRenderAble.md#stop)
- [onEnable](UIRenderAble.md#onenable)
- [onDisable](UIRenderAble.md#ondisable)
- [onUpdate](UIRenderAble.md#onupdate)
- [onLateUpdate](UIRenderAble.md#onlateupdate)
- [onBeforeUpdate](UIRenderAble.md#onbeforeupdate)
- [onCompute](UIRenderAble.md#oncompute)
- [onGraphic](UIRenderAble.md#ongraphic)
- [onParentChange](UIRenderAble.md#onparentchange)
- [cloneTo](UIRenderAble.md#cloneto)
- [init](UIRenderAble.md#init)
- [destroy](UIRenderAble.md#destroy)
- [start](UIRenderAble.md#start)
- [setShadowRenderer](UIRenderAble.md#setshadowrenderer)
- [setShadowSource](UIRenderAble.md#setshadowsource)
- [getShadowRender](UIRenderAble.md#getshadowrender)
- [copyComponent](UIRenderAble.md#copycomponent)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

[UIComponentBase](UIComponentBase.md).[object3D](UIComponentBase.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### isUIShadow

• `Optional` **isUIShadow**: `boolean`

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L8)

___

### isShadowless

• `Optional` **isShadowless**: `boolean`

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L9)

___

### needUpdateShadow

• **needUpdateShadow**: `boolean`

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L10)

## Constructors

### constructor

• **new UIRenderAble**()

#### Inherited from

[UIComponentBase](UIComponentBase.md).[constructor](UIComponentBase.md#constructor)

#### Defined in

[src/components/ComponentBase.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L31)

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

[src/components/gui/uiComponents/UIComponentBase.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIComponentBase.ts#L12)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIComponentBase.visible

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

UIComponentBase.visible

#### Defined in

[src/components/gui/uiComponents/UIComponentBase.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIComponentBase.ts#L20)

___

### mainQuads

• `get` **mainQuads**(): [`GUIQuad`](GUIQuad.md)[]

#### Returns

[`GUIQuad`](GUIQuad.md)[]

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L40)

## Methods

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

### cloneTo

▸ **cloneTo**(`obj`): `void`

clone component data to target object3D

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) | target object3D |

#### Returns

`void`

#### Inherited from

[UIComponentBase](UIComponentBase.md).[cloneTo](UIComponentBase.md#cloneto)

#### Defined in

[src/components/ComponentBase.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L123)

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

[src/components/gui/uiComponents/UIRenderAble.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L12)

___

### destroy

▸ **destroy**(): `void`

release this component

#### Returns

`void`

#### Overrides

[UIComponentBase](UIComponentBase.md).[destroy](UIComponentBase.md#destroy)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L17)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[UIComponentBase](UIComponentBase.md).[start](UIComponentBase.md#start)

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

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L48)

___

### getShadowRender

▸ **getShadowRender**(): [`UIRenderAble`](UIRenderAble.md)

#### Returns

[`UIRenderAble`](UIRenderAble.md)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L52)

___

### copyComponent

▸ **copyComponent**(`from`): [`UIRenderAble`](UIRenderAble.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`UIRenderAble`](UIRenderAble.md) |

#### Returns

[`UIRenderAble`](UIRenderAble.md)

#### Overrides

[UIComponentBase](UIComponentBase.md).[copyComponent](UIComponentBase.md#copycomponent)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L116)
