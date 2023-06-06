# Class: UIPanel

Container for UI components

## Hierarchy

- [`UIImage`](UIImage.md)

  ↳ **`UIPanel`**

  ↳↳ [`ViewPanel`](ViewPanel.md)

  ↳↳ [`WorldPanel`](WorldPanel.md)

### Constructors

- [constructor](UIPanel.md#constructor)

### Properties

- [object3D](UIPanel.md#object3d)
- [order](UIPanel.md#order)
- [space](UIPanel.md#space)
- [needUpdateGeometry](UIPanel.md#needupdategeometry)
- [panelOrder](UIPanel.md#panelorder)
- [needSortOnCameraZ](UIPanel.md#needsortoncameraz)
- [isUIPanel](UIPanel.md#isuipanel)
- [isUIShadow](UIPanel.md#isuishadow)
- [isShadowless](UIPanel.md#isshadowless)
- [needUpdateShadow](UIPanel.md#needupdateshadow)

### Accessors

- [transform](UIPanel.md#transform)
- [enable](UIPanel.md#enable)
- [uiTransform](UIPanel.md#uitransform)
- [visible](UIPanel.md#visible)
- [sprite](UIPanel.md#sprite)
- [color](UIPanel.md#color)
- [imageType](UIPanel.md#imagetype)
- [guiMesh](UIPanel.md#guimesh)
- [billboard](UIPanel.md#billboard)
- [cullMode](UIPanel.md#cullmode)
- [mainQuads](UIPanel.md#mainquads)

### Methods

- [stop](UIPanel.md#stop)
- [onEnable](UIPanel.md#onenable)
- [onDisable](UIPanel.md#ondisable)
- [onUpdate](UIPanel.md#onupdate)
- [onLateUpdate](UIPanel.md#onlateupdate)
- [onBeforeUpdate](UIPanel.md#onbeforeupdate)
- [onCompute](UIPanel.md#oncompute)
- [onGraphic](UIPanel.md#ongraphic)
- [onParentChange](UIPanel.md#onparentchange)
- [cloneTo](UIPanel.md#cloneto)
- [copyComponent](UIPanel.md#copycomponent)
- [init](UIPanel.md#init)
- [destroy](UIPanel.md#destroy)
- [start](UIPanel.md#start)
- [setShadowRenderer](UIPanel.md#setshadowrenderer)
- [setShadowSource](UIPanel.md#setshadowsource)
- [getShadowRender](UIPanel.md#getshadowrender)

## Constructors

### constructor

• **new UIPanel**()

#### Inherited from

[UIImage](UIImage.md).[constructor](UIImage.md#constructor)

#### Defined in

[src/components/ComponentBase.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L31)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

[UIImage](UIImage.md).[object3D](UIImage.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### order

• **order**: `number`

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L12)

___

### space

• `Readonly` **space**: `number` = `GUISpace.World`

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L13)

___

### needUpdateGeometry

• **needUpdateGeometry**: `boolean` = `true`

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L14)

___

### panelOrder

• **panelOrder**: `number` = `0`

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L15)

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L16)

___

### isUIPanel

• `Readonly` **isUIPanel**: ``true``

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L20)

___

### isUIShadow

• `Optional` **isUIShadow**: `boolean`

#### Inherited from

[UIImage](UIImage.md).[isUIShadow](UIImage.md#isuishadow)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L12)

___

### isShadowless

• `Optional` **isShadowless**: `boolean`

#### Inherited from

[UIImage](UIImage.md).[isShadowless](UIImage.md#isshadowless)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L13)

___

### needUpdateShadow

• **needUpdateShadow**: `boolean`

#### Inherited from

[UIImage](UIImage.md).[needUpdateShadow](UIImage.md#needupdateshadow)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L14)

## Accessors

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

UIImage.transform

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

UIImage.enable

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

UIImage.enable

#### Defined in

[src/components/ComponentBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L45)

___

### uiTransform

• `get` **uiTransform**(): [`UITransform`](UITransform.md)

#### Returns

[`UITransform`](UITransform.md)

#### Inherited from

UIImage.uiTransform

#### Defined in

[src/components/gui/uiComponents/UIComponentBase.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIComponentBase.ts#L16)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIImage.visible

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

UIImage.visible

#### Defined in

[src/components/gui/uiComponents/UIComponentBase.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIComponentBase.ts#L24)

___

### sprite

• `get` **sprite**(): [`GUISprite`](GUISprite.md)

#### Returns

[`GUISprite`](GUISprite.md)

#### Inherited from

UIImage.sprite

#### Defined in

[src/components/gui/uiComponents/UIImage.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImage.ts#L54)

• `set` **sprite**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GUISprite`](GUISprite.md) |

#### Returns

`void`

#### Inherited from

UIImage.sprite

#### Defined in

[src/components/gui/uiComponents/UIImage.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImage.ts#L34)

___

### color

• `get` **color**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Inherited from

UIImage.color

#### Defined in

[src/components/gui/uiComponents/UIImage.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImage.ts#L74)

• `set` **color**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

UIImage.color

#### Defined in

[src/components/gui/uiComponents/UIImage.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImage.ts#L78)

___

### imageType

• `get` **imageType**(): [`ImageType`](../enums/ImageType.md)

#### Returns

[`ImageType`](../enums/ImageType.md)

#### Inherited from

UIImage.imageType

#### Defined in

[src/components/gui/uiComponents/UIImage.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImage.ts#L85)

• `set` **imageType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ImageType`](../enums/ImageType.md) |

#### Returns

`void`

#### Inherited from

UIImage.imageType

#### Defined in

[src/components/gui/uiComponents/UIImage.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImage.ts#L89)

___

### guiMesh

• `get` **guiMesh**(): [`GUIMesh`](GUIMesh.md)

#### Returns

[`GUIMesh`](GUIMesh.md)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L21)

___

### billboard

• `get` **billboard**(): [`BillboardType`](../enums/BillboardType.md)

#### Returns

[`BillboardType`](../enums/BillboardType.md)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L62)

• `set` **billboard**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`BillboardType`](../enums/BillboardType.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L47)

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

#### Returns

`GPUCullMode`

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L74)

• `set` **cullMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCullMode` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L66)

___

### mainQuads

• `get` **mainQuads**(): [`GUIQuad`](GUIQuad.md)[]

#### Returns

[`GUIQuad`](GUIQuad.md)[]

#### Inherited from

UIImage.mainQuads

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L44)

## Methods

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[UIImage](UIImage.md).[stop](UIImage.md#stop)

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

[UIImage](UIImage.md).[onEnable](UIImage.md#onenable)

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

[UIImage](UIImage.md).[onDisable](UIImage.md#ondisable)

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

[UIImage](UIImage.md).[onUpdate](UIImage.md#onupdate)

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

[UIImage](UIImage.md).[onLateUpdate](UIImage.md#onlateupdate)

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

[UIImage](UIImage.md).[onBeforeUpdate](UIImage.md#onbeforeupdate)

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

[UIImage](UIImage.md).[onCompute](UIImage.md#oncompute)

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

[UIImage](UIImage.md).[onGraphic](UIImage.md#ongraphic)

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

[UIImage](UIImage.md).[onParentChange](UIImage.md#onparentchange)

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

#### Overrides

[UIImage](UIImage.md).[cloneTo](UIImage.md#cloneto)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L25)

___

### copyComponent

▸ **copyComponent**(`from`): [`UIPanel`](UIPanel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`UIPanel`](UIPanel.md) |

#### Returns

[`UIPanel`](UIPanel.md)

#### Overrides

[UIImage](UIImage.md).[copyComponent](UIImage.md#copycomponent)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L30)

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

[UIImage](UIImage.md).[init](UIImage.md#init)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L40)

___

### destroy

▸ **destroy**(): `void`

release this component

#### Returns

`void`

#### Inherited from

[UIImage](UIImage.md).[destroy](UIImage.md#destroy)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L21)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[UIImage](UIImage.md).[start](UIImage.md#start)

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

[UIImage](UIImage.md).[setShadowRenderer](UIImage.md#setshadowrenderer)

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

[UIImage](UIImage.md).[setShadowSource](UIImage.md#setshadowsource)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L52)

___

### getShadowRender

▸ **getShadowRender**(): [`UIRenderAble`](UIRenderAble.md)

#### Returns

[`UIRenderAble`](UIRenderAble.md)

#### Inherited from

[UIImage](UIImage.md).[getShadowRender](UIImage.md#getshadowrender)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L56)
