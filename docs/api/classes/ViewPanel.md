# Class: ViewPanel

UI component container for view/screen space

## Hierarchy

- [`UIPanel`](UIPanel.md)

  ↳ **`ViewPanel`**

### Constructors

- [constructor](ViewPanel.md#constructor)

### Properties

- [object3D](ViewPanel.md#object3d)
- [order](ViewPanel.md#order)
- [needUpdateGeometry](ViewPanel.md#needupdategeometry)
- [panelOrder](ViewPanel.md#panelorder)
- [needSortOnCameraZ](ViewPanel.md#needsortoncameraz)
- [isUIPanel](ViewPanel.md#isuipanel)
- [isUIShadow](ViewPanel.md#isuishadow)
- [isShadowless](ViewPanel.md#isshadowless)
- [needUpdateShadow](ViewPanel.md#needupdateshadow)
- [isViewPanel](ViewPanel.md#isviewpanel)
- [space](ViewPanel.md#space)

### Accessors

- [transform](ViewPanel.md#transform)
- [enable](ViewPanel.md#enable)
- [uiTransform](ViewPanel.md#uitransform)
- [visible](ViewPanel.md#visible)
- [sprite](ViewPanel.md#sprite)
- [color](ViewPanel.md#color)
- [imageType](ViewPanel.md#imagetype)
- [guiMesh](ViewPanel.md#guimesh)
- [billboard](ViewPanel.md#billboard)
- [cullMode](ViewPanel.md#cullmode)
- [mainQuads](ViewPanel.md#mainquads)

### Methods

- [stop](ViewPanel.md#stop)
- [onEnable](ViewPanel.md#onenable)
- [onDisable](ViewPanel.md#ondisable)
- [onUpdate](ViewPanel.md#onupdate)
- [onLateUpdate](ViewPanel.md#onlateupdate)
- [onBeforeUpdate](ViewPanel.md#onbeforeupdate)
- [onCompute](ViewPanel.md#oncompute)
- [onGraphic](ViewPanel.md#ongraphic)
- [onParentChange](ViewPanel.md#onparentchange)
- [copyComponent](ViewPanel.md#copycomponent)
- [init](ViewPanel.md#init)
- [destroy](ViewPanel.md#destroy)
- [start](ViewPanel.md#start)
- [setShadowRenderer](ViewPanel.md#setshadowrenderer)
- [setShadowSource](ViewPanel.md#setshadowsource)
- [getShadowRender](ViewPanel.md#getshadowrender)
- [cloneTo](ViewPanel.md#cloneto)

## Constructors

### constructor

• **new ViewPanel**()

#### Overrides

[UIPanel](UIPanel.md).[constructor](UIPanel.md#constructor)

#### Defined in

[src/components/gui/uiComponents/ViewPanel.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/ViewPanel.ts#L13)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

[UIPanel](UIPanel.md).[object3D](UIPanel.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### order

• **order**: `number`

#### Inherited from

[UIPanel](UIPanel.md).[order](UIPanel.md#order)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L12)

___

### needUpdateGeometry

• **needUpdateGeometry**: `boolean` = `true`

#### Inherited from

[UIPanel](UIPanel.md).[needUpdateGeometry](UIPanel.md#needupdategeometry)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L14)

___

### panelOrder

• **panelOrder**: `number` = `0`

#### Inherited from

[UIPanel](UIPanel.md).[panelOrder](UIPanel.md#panelorder)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L15)

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Inherited from

[UIPanel](UIPanel.md).[needSortOnCameraZ](UIPanel.md#needsortoncameraz)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L16)

___

### isUIPanel

• `Readonly` **isUIPanel**: ``true``

#### Inherited from

[UIPanel](UIPanel.md).[isUIPanel](UIPanel.md#isuipanel)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L20)

___

### isUIShadow

• `Optional` **isUIShadow**: `boolean`

#### Inherited from

[UIPanel](UIPanel.md).[isUIShadow](UIPanel.md#isuishadow)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L12)

___

### isShadowless

• `Optional` **isShadowless**: `boolean`

#### Inherited from

[UIPanel](UIPanel.md).[isShadowless](UIPanel.md#isshadowless)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L13)

___

### needUpdateShadow

• **needUpdateShadow**: `boolean`

#### Inherited from

[UIPanel](UIPanel.md).[needUpdateShadow](UIPanel.md#needupdateshadow)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L14)

___

### isViewPanel

• `Readonly` **isViewPanel**: ``true``

#### Defined in

[src/components/gui/uiComponents/ViewPanel.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/ViewPanel.ts#L11)

___

### space

• `Readonly` **space**: [`GUISpace`](../enums/GUISpace.md) = `GUISpace.View`

#### Overrides

[UIPanel](UIPanel.md).[space](UIPanel.md#space)

#### Defined in

[src/components/gui/uiComponents/ViewPanel.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/ViewPanel.ts#L12)

## Accessors

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

UIPanel.transform

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

UIPanel.enable

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

UIPanel.enable

#### Defined in

[src/components/ComponentBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L45)

___

### uiTransform

• `get` **uiTransform**(): [`UITransform`](UITransform.md)

#### Returns

[`UITransform`](UITransform.md)

#### Inherited from

UIPanel.uiTransform

#### Defined in

[src/components/gui/uiComponents/UIComponentBase.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIComponentBase.ts#L16)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIPanel.visible

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

UIPanel.visible

#### Defined in

[src/components/gui/uiComponents/UIComponentBase.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIComponentBase.ts#L24)

___

### sprite

• `get` **sprite**(): [`GUISprite`](GUISprite.md)

#### Returns

[`GUISprite`](GUISprite.md)

#### Inherited from

UIPanel.sprite

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

UIPanel.sprite

#### Defined in

[src/components/gui/uiComponents/UIImage.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImage.ts#L34)

___

### color

• `get` **color**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Inherited from

UIPanel.color

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

UIPanel.color

#### Defined in

[src/components/gui/uiComponents/UIImage.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImage.ts#L78)

___

### imageType

• `get` **imageType**(): [`ImageType`](../enums/ImageType.md)

#### Returns

[`ImageType`](../enums/ImageType.md)

#### Inherited from

UIPanel.imageType

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

UIPanel.imageType

#### Defined in

[src/components/gui/uiComponents/UIImage.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImage.ts#L89)

___

### guiMesh

• `get` **guiMesh**(): [`GUIMesh`](GUIMesh.md)

#### Returns

[`GUIMesh`](GUIMesh.md)

#### Inherited from

UIPanel.guiMesh

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L21)

___

### billboard

• `get` **billboard**(): [`BillboardType`](../enums/BillboardType.md)

#### Returns

[`BillboardType`](../enums/BillboardType.md)

#### Inherited from

UIPanel.billboard

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L62)

• `set` **billboard**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`BillboardType`](../enums/BillboardType.md) |

#### Returns

`void`

#### Inherited from

UIPanel.billboard

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L47)

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

#### Returns

`GPUCullMode`

#### Inherited from

UIPanel.cullMode

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L74)

• `set` **cullMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCullMode` |

#### Returns

`void`

#### Inherited from

UIPanel.cullMode

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L66)

___

### mainQuads

• `get` **mainQuads**(): [`GUIQuad`](GUIQuad.md)[]

#### Returns

[`GUIQuad`](GUIQuad.md)[]

#### Inherited from

UIPanel.mainQuads

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L44)

## Methods

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[stop](UIPanel.md#stop)

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

[UIPanel](UIPanel.md).[onEnable](UIPanel.md#onenable)

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

[UIPanel](UIPanel.md).[onDisable](UIPanel.md#ondisable)

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

[UIPanel](UIPanel.md).[onUpdate](UIPanel.md#onupdate)

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

[UIPanel](UIPanel.md).[onLateUpdate](UIPanel.md#onlateupdate)

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

[UIPanel](UIPanel.md).[onBeforeUpdate](UIPanel.md#onbeforeupdate)

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

[UIPanel](UIPanel.md).[onCompute](UIPanel.md#oncompute)

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

[UIPanel](UIPanel.md).[onGraphic](UIPanel.md#ongraphic)

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

[UIPanel](UIPanel.md).[onParentChange](UIPanel.md#onparentchange)

#### Defined in

[src/components/ComponentBase.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L116)

___

### copyComponent

▸ **copyComponent**(`from`): [`ViewPanel`](ViewPanel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`ViewPanel`](ViewPanel.md) |

#### Returns

[`ViewPanel`](ViewPanel.md)

#### Inherited from

[UIPanel](UIPanel.md).[copyComponent](UIPanel.md#copycomponent)

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

#### Inherited from

[UIPanel](UIPanel.md).[init](UIPanel.md#init)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L40)

___

### destroy

▸ **destroy**(): `void`

release this component

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[destroy](UIPanel.md#destroy)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L21)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[start](UIPanel.md#start)

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

[UIPanel](UIPanel.md).[setShadowRenderer](UIPanel.md#setshadowrenderer)

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

[UIPanel](UIPanel.md).[setShadowSource](UIPanel.md#setshadowsource)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L52)

___

### getShadowRender

▸ **getShadowRender**(): [`UIRenderAble`](UIRenderAble.md)

#### Returns

[`UIRenderAble`](UIRenderAble.md)

#### Inherited from

[UIPanel](UIPanel.md).[getShadowRender](UIPanel.md#getshadowrender)

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

[UIPanel](UIPanel.md).[cloneTo](UIPanel.md#cloneto)

#### Defined in

[src/components/gui/uiComponents/ViewPanel.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/ViewPanel.ts#L17)
