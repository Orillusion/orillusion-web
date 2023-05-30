# Class: UIImage

Components are used to attach functionality to object3D, it has an owner object3D.
The component can receive update events at each frame.

## Hierarchy

- [`UIRenderAble`](UIRenderAble.md)

  ↳ **`UIImage`**

### Properties

- [object3D](UIImage.md#object3d)
- [isUIShadow](UIImage.md#isuishadow)
- [isShadowless](UIImage.md#isshadowless)
- [needUpdateShadow](UIImage.md#needupdateshadow)

### Constructors

- [constructor](UIImage.md#constructor)

### Accessors

- [transform](UIImage.md#transform)
- [enable](UIImage.md#enable)
- [uiTransform](UIImage.md#uitransform)
- [visible](UIImage.md#visible)
- [sprite](UIImage.md#sprite)
- [color](UIImage.md#color)
- [imageType](UIImage.md#imagetype)
- [mainQuads](UIImage.md#mainquads)

### Methods

- [stop](UIImage.md#stop)
- [onEnable](UIImage.md#onenable)
- [onDisable](UIImage.md#ondisable)
- [onUpdate](UIImage.md#onupdate)
- [onLateUpdate](UIImage.md#onlateupdate)
- [onBeforeUpdate](UIImage.md#onbeforeupdate)
- [onCompute](UIImage.md#oncompute)
- [onGraphic](UIImage.md#ongraphic)
- [onParentChange](UIImage.md#onparentchange)
- [init](UIImage.md#init)
- [cloneTo](UIImage.md#cloneto)
- [destroy](UIImage.md#destroy)
- [start](UIImage.md#start)
- [setShadowRenderer](UIImage.md#setshadowrenderer)
- [setShadowSource](UIImage.md#setshadowsource)
- [getShadowRender](UIImage.md#getshadowrender)
- [copyComponent](UIImage.md#copycomponent)

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

## Constructors

### constructor

• **new UIImage**()

#### Inherited from

[UIRenderAble](UIRenderAble.md).[constructor](UIRenderAble.md#constructor)

#### Defined in

[src/components/ComponentBase.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L31)

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

### sprite

• `get` **sprite**(): [`GUISprite`](GUISprite.md)

#### Returns

[`GUISprite`](GUISprite.md)

#### Defined in

[src/components/gui/uiComponents/UIImage.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImage.ts#L45)

• `set` **sprite**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GUISprite`](GUISprite.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UIImage.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImage.ts#L25)

___

### color

• `get` **color**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

[src/components/gui/uiComponents/UIImage.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImage.ts#L65)

• `set` **color**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UIImage.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImage.ts#L69)

___

### imageType

• `get` **imageType**(): [`ImageType`](../enums/ImageType.md)

#### Returns

[`ImageType`](../enums/ImageType.md)

#### Defined in

[src/components/gui/uiComponents/UIImage.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImage.ts#L76)

• `set` **imageType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ImageType`](../enums/ImageType.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UIImage.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImage.ts#L80)

___

### mainQuads

• `get` **mainQuads**(): [`GUIQuad`](GUIQuad.md)[]

#### Returns

[`GUIQuad`](GUIQuad.md)[]

#### Inherited from

UIRenderAble.mainQuads

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L40)

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

#### Overrides

[UIRenderAble](UIRenderAble.md).[init](UIRenderAble.md#init)

#### Defined in

[src/components/gui/uiComponents/UIImage.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImage.ts#L12)

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

[src/components/gui/uiComponents/UIImage.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImage.ts#L17)

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

▸ **copyComponent**(`from`): [`UIImage`](UIImage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`UIImage`](UIImage.md) |

#### Returns

[`UIImage`](UIImage.md)

#### Inherited from

[UIRenderAble](UIRenderAble.md).[copyComponent](UIRenderAble.md#copycomponent)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L116)
