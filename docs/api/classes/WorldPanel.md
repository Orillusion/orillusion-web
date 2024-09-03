# Class: WorldPanel

UI component container for world space

## Hierarchy

- [`UIPanel`](UIPanel.md)

  ↳ **`WorldPanel`**

### Constructors

- [constructor](WorldPanel.md#constructor)

### Properties

- [object3D](WorldPanel.md#object3d)
- [isDestroyed](WorldPanel.md#isdestroyed)
- [needUpdateGeometry](WorldPanel.md#needupdategeometry)
- [panelOrder](WorldPanel.md#panelorder)
- [needSortOnCameraZ](WorldPanel.md#needsortoncameraz)
- [scissorEnable](WorldPanel.md#scissorenable)
- [scissorCornerRadius](WorldPanel.md#scissorcornerradius)
- [scissorFadeOutSize](WorldPanel.md#scissorfadeoutsize)
- [panelRatio](WorldPanel.md#panelratio)
- [isUIPanel](WorldPanel.md#isuipanel)
- [isUIShadow](WorldPanel.md#isuishadow)
- [isShadowless](WorldPanel.md#isshadowless)
- [needUpdateShadow](WorldPanel.md#needupdateshadow)
- [isWorldPanel](WorldPanel.md#isworldpanel)
- [space](WorldPanel.md#space)

### Accessors

- [eventDispatcher](WorldPanel.md#eventdispatcher)
- [isStart](WorldPanel.md#isstart)
- [transform](WorldPanel.md#transform)
- [enable](WorldPanel.md#enable)
- [uiTransform](WorldPanel.md#uitransform)
- [visible](WorldPanel.md#visible)
- [sprite](WorldPanel.md#sprite)
- [color](WorldPanel.md#color)
- [imageType](WorldPanel.md#imagetype)
- [quadMaxCount](WorldPanel.md#quadmaxcount)
- [renderer](WorldPanel.md#renderer)
- [billboard](WorldPanel.md#billboard)
- [cullMode](WorldPanel.md#cullmode)
- [mainQuads](WorldPanel.md#mainquads)
- [depthTest](WorldPanel.md#depthtest)

### Methods

- [stop](WorldPanel.md#stop)
- [onEnable](WorldPanel.md#onenable)
- [onDisable](WorldPanel.md#ondisable)
- [onLateUpdate](WorldPanel.md#onlateupdate)
- [onBeforeUpdate](WorldPanel.md#onbeforeupdate)
- [onCompute](WorldPanel.md#oncompute)
- [onGraphic](WorldPanel.md#ongraphic)
- [onParentChange](WorldPanel.md#onparentchange)
- [onAddChild](WorldPanel.md#onaddchild)
- [onRemoveChild](WorldPanel.md#onremovechild)
- [beforeDestroy](WorldPanel.md#beforedestroy)
- [init](WorldPanel.md#init)
- [updateDrawCallSegment](WorldPanel.md#updatedrawcallsegment)
- [onUpdate](WorldPanel.md#onupdate)
- [destroy](WorldPanel.md#destroy)
- [start](WorldPanel.md#start)
- [setShadowRenderer](WorldPanel.md#setshadowrenderer)
- [setShadowSource](WorldPanel.md#setshadowsource)
- [getShadowRender](WorldPanel.md#getshadowrender)
- [cloneTo](WorldPanel.md#cloneto)
- [copyComponent](WorldPanel.md#copycomponent)

## Constructors

### constructor

• **new WorldPanel**(): [`WorldPanel`](WorldPanel.md)

#### Returns

[`WorldPanel`](WorldPanel.md)

#### Overrides

[UIPanel](UIPanel.md).[constructor](UIPanel.md#constructor)

#### Defined in

[src/components/gui/uiComponents/WorldPanel.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/WorldPanel.ts#L15)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

[UIPanel](UIPanel.md).[object3D](UIPanel.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### isDestroyed

• `Optional` **isDestroyed**: `boolean`

#### Inherited from

[UIPanel](UIPanel.md).[isDestroyed](UIPanel.md#isdestroyed)

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### needUpdateGeometry

• **needUpdateGeometry**: `boolean` = `true`

#### Inherited from

[UIPanel](UIPanel.md).[needUpdateGeometry](UIPanel.md#needupdategeometry)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L21)

___

### panelOrder

• **panelOrder**: `number` = `0`

#### Inherited from

[UIPanel](UIPanel.md).[panelOrder](UIPanel.md#panelorder)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L22)

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Inherited from

[UIPanel](UIPanel.md).[needSortOnCameraZ](UIPanel.md#needsortoncameraz)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L23)

___

### scissorEnable

• **scissorEnable**: `boolean` = `false`

#### Inherited from

[UIPanel](UIPanel.md).[scissorEnable](UIPanel.md#scissorenable)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L27)

___

### scissorCornerRadius

• **scissorCornerRadius**: `number` = `0`

#### Inherited from

[UIPanel](UIPanel.md).[scissorCornerRadius](UIPanel.md#scissorcornerradius)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L28)

___

### scissorFadeOutSize

• **scissorFadeOutSize**: `number` = `0`

#### Inherited from

[UIPanel](UIPanel.md).[scissorFadeOutSize](UIPanel.md#scissorfadeoutsize)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L29)

___

### panelRatio

• **panelRatio**: `number` = `1`

#### Inherited from

[UIPanel](UIPanel.md).[panelRatio](UIPanel.md#panelratio)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L35)

___

### isUIPanel

• `Readonly` **isUIPanel**: ``true``

#### Inherited from

[UIPanel](UIPanel.md).[isUIPanel](UIPanel.md#isuipanel)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L36)

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

### isWorldPanel

• `Readonly` **isWorldPanel**: ``true``

#### Defined in

[src/components/gui/uiComponents/WorldPanel.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/WorldPanel.ts#L11)

___

### space

• `Readonly` **space**: [`GUISpace`](../enums/GUISpace.md) = `GUISpace.World`

#### Overrides

[UIPanel](UIPanel.md).[space](UIPanel.md#space)

#### Defined in

[src/components/gui/uiComponents/WorldPanel.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/WorldPanel.ts#L12)

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

UIPanel.eventDispatcher

#### Defined in

[src/components/ComponentBase.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L23)

• `set` **eventDispatcher**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CEventDispatcher`](CEventDispatcher.md) |

#### Returns

`void`

#### Inherited from

UIPanel.eventDispatcher

#### Defined in

[src/components/ComponentBase.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L28)

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIPanel.isStart

#### Defined in

[src/components/ComponentBase.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L40)

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

UIPanel.transform

#### Defined in

[src/components/ComponentBase.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L47)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

UIPanel.enable

#### Defined in

[src/components/ComponentBase.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L68)

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

[src/components/ComponentBase.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L54)

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

### quadMaxCount

• `get` **quadMaxCount**(): `number`

Return How many Quads can a single GUIGeometry support at most

#### Returns

`number`

#### Inherited from

UIPanel.quadMaxCount

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L92)

___

### renderer

• `get` **renderer**(): [`GUIRenderer`](GUIRenderer.md)

#### Returns

[`GUIRenderer`](GUIRenderer.md)

#### Inherited from

UIPanel.renderer

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L96)

___

### billboard

• `get` **billboard**(): [`BillboardType`](../enums/BillboardType.md)

#### Returns

[`BillboardType`](../enums/BillboardType.md)

#### Inherited from

UIPanel.billboard

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L114)

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

[src/components/gui/uiComponents/UIPanel.ts:100](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L100)

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

#### Returns

`GPUCullMode`

#### Inherited from

UIPanel.cullMode

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L128)

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

[src/components/gui/uiComponents/UIPanel.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L118)

___

### mainQuads

• `get` **mainQuads**(): [`GUIQuad`](GUIQuad.md)[]

#### Returns

[`GUIQuad`](GUIQuad.md)[]

#### Inherited from

UIPanel.mainQuads

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L44)

___

### depthTest

• `get` **depthTest**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/components/gui/uiComponents/WorldPanel.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/WorldPanel.ts#L30)

• `set` **depthTest**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/WorldPanel.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/WorldPanel.ts#L34)

## Methods

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[stop](UIPanel.md#stop)

#### Defined in

[src/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L114)

___

### onEnable

▸ **onEnable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[UIPanel](UIPanel.md).[onEnable](UIPanel.md#onenable)

#### Defined in

[src/components/ComponentBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L115)

___

### onDisable

▸ **onDisable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[UIPanel](UIPanel.md).[onDisable](UIPanel.md#ondisable)

#### Defined in

[src/components/ComponentBase.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L116)

___

### onLateUpdate

▸ **onLateUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[UIPanel](UIPanel.md).[onLateUpdate](UIPanel.md#onlateupdate)

#### Defined in

[src/components/ComponentBase.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L118)

___

### onBeforeUpdate

▸ **onBeforeUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[UIPanel](UIPanel.md).[onBeforeUpdate](UIPanel.md#onbeforeupdate)

#### Defined in

[src/components/ComponentBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L119)

___

### onCompute

▸ **onCompute**(`view?`, `command?`): `any`

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

[src/components/ComponentBase.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L120)

___

### onGraphic

▸ **onGraphic**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[UIPanel](UIPanel.md).[onGraphic](UIPanel.md#ongraphic)

#### Defined in

[src/components/ComponentBase.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L121)

___

### onParentChange

▸ **onParentChange**(`lastParent?`, `currentParent?`): `any`

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

[src/components/ComponentBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L122)

___

### onAddChild

▸ **onAddChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

[UIPanel](UIPanel.md).[onAddChild](UIPanel.md#onaddchild)

#### Defined in

[src/components/ComponentBase.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L123)

___

### onRemoveChild

▸ **onRemoveChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

[UIPanel](UIPanel.md).[onRemoveChild](UIPanel.md#onremovechild)

#### Defined in

[src/components/ComponentBase.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L124)

___

### beforeDestroy

▸ **beforeDestroy**(`force?`): `void`

before release this component, object refrences are not be set null now.

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[beforeDestroy](UIPanel.md#beforedestroy)

#### Defined in

[src/components/ComponentBase.ts:200](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L200)

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

[src/components/gui/uiComponents/UIPanel.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L57)

___

### updateDrawCallSegment

▸ **updateDrawCallSegment**(`index`, `indexStart`, `indexCount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `indexStart` | `number` |
| `indexCount` | `number` |

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[updateDrawCallSegment](UIPanel.md#updatedrawcallsegment)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L64)

___

### onUpdate

▸ **onUpdate**(`view?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[onUpdate](UIPanel.md#onupdate)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L132)

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

[src/components/gui/uiComponents/WorldPanel.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/WorldPanel.ts#L19)

___

### copyComponent

▸ **copyComponent**(`from`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `this` |

#### Returns

`this`

#### Overrides

[UIPanel](UIPanel.md).[copyComponent](UIPanel.md#copycomponent)

#### Defined in

[src/components/gui/uiComponents/WorldPanel.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/WorldPanel.ts#L24)
