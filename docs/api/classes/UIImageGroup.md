# Class: UIImageGroup

Components are used to attach functionality to object3D, it has an owner object3D.
The component can receive update events at each frame.

## Hierarchy

- [`UIRenderAble`](UIRenderAble.md)

  ↳ **`UIImageGroup`**

### Properties

- [object3D](UIImageGroup.md#object3d)
- [isUIShadow](UIImageGroup.md#isuishadow)
- [isShadowless](UIImageGroup.md#isshadowless)
- [needUpdateShadow](UIImageGroup.md#needupdateshadow)

### Accessors

- [transform](UIImageGroup.md#transform)
- [enable](UIImageGroup.md#enable)
- [uiTransform](UIImageGroup.md#uitransform)
- [visible](UIImageGroup.md#visible)
- [mainQuads](UIImageGroup.md#mainquads)

### Methods

- [stop](UIImageGroup.md#stop)
- [onEnable](UIImageGroup.md#onenable)
- [onDisable](UIImageGroup.md#ondisable)
- [onUpdate](UIImageGroup.md#onupdate)
- [onLateUpdate](UIImageGroup.md#onlateupdate)
- [onBeforeUpdate](UIImageGroup.md#onbeforeupdate)
- [onCompute](UIImageGroup.md#oncompute)
- [onGraphic](UIImageGroup.md#ongraphic)
- [onParentChange](UIImageGroup.md#onparentchange)
- [init](UIImageGroup.md#init)
- [getQuad](UIImageGroup.md#getquad)
- [cloneTo](UIImageGroup.md#cloneto)
- [setSprite](UIImageGroup.md#setsprite)
- [getSprite](UIImageGroup.md#getsprite)
- [getColor](UIImageGroup.md#getcolor)
- [setColor](UIImageGroup.md#setcolor)
- [getImageType](UIImageGroup.md#getimagetype)
- [setImageType](UIImageGroup.md#setimagetype)
- [setSize](UIImageGroup.md#setsize)
- [setXY](UIImageGroup.md#setxy)
- [getXY](UIImageGroup.md#getxy)
- [destroy](UIImageGroup.md#destroy)
- [start](UIImageGroup.md#start)
- [setShadowRenderer](UIImageGroup.md#setshadowrenderer)
- [setShadowSource](UIImageGroup.md#setshadowsource)
- [getShadowRender](UIImageGroup.md#getshadowrender)
- [copyComponent](UIImageGroup.md#copycomponent)

### Constructors

- [constructor](UIImageGroup.md#constructor)

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

[src/components/gui/uiComponents/UIImageGroup.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImageGroup.ts#L17)

___

### getQuad

▸ **getQuad**(`index`): [`GUIQuad`](GUIQuad.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`GUIQuad`](GUIQuad.md)

#### Defined in

[src/components/gui/uiComponents/UIImageGroup.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImageGroup.ts#L25)

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

[src/components/gui/uiComponents/UIImageGroup.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImageGroup.ts#L29)

___

### setSprite

▸ **setSprite**(`index`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | [`GUISprite`](GUISprite.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UIImageGroup.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImageGroup.ts#L39)

___

### getSprite

▸ **getSprite**(`index`): [`GUISprite`](GUISprite.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`GUISprite`](GUISprite.md)

#### Defined in

[src/components/gui/uiComponents/UIImageGroup.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImageGroup.ts#L44)

___

### getColor

▸ **getColor**(`index`): [`Color`](Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`Color`](Color.md)

#### Defined in

[src/components/gui/uiComponents/UIImageGroup.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImageGroup.ts#L64)

___

### setColor

▸ **setColor**(`index`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UIImageGroup.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImageGroup.ts#L68)

___

### getImageType

▸ **getImageType**(`index`): [`ImageType`](../enums/ImageType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`ImageType`](../enums/ImageType.md)

#### Defined in

[src/components/gui/uiComponents/UIImageGroup.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImageGroup.ts#L73)

___

### setImageType

▸ **setImageType**(`index`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | [`ImageType`](../enums/ImageType.md) |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UIImageGroup.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImageGroup.ts#L77)

___

### setSize

▸ **setSize**(`index`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UIImageGroup.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImageGroup.ts#L82)

___

### setXY

▸ **setXY**(`index`, `x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UIImageGroup.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImageGroup.ts#L87)

___

### getXY

▸ **getXY**(`index`, `ret?`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `ret?` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/components/gui/uiComponents/UIImageGroup.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImageGroup.ts#L92)

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

▸ **copyComponent**(`from`): [`UIImageGroup`](UIImageGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`UIImageGroup`](UIImageGroup.md) |

#### Returns

[`UIImageGroup`](UIImageGroup.md)

#### Inherited from

[UIRenderAble](UIRenderAble.md).[copyComponent](UIRenderAble.md#copycomponent)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L116)

## Constructors

### constructor

• **new UIImageGroup**()

#### Overrides

[UIRenderAble](UIRenderAble.md).[constructor](UIRenderAble.md#constructor)

#### Defined in

[src/components/gui/uiComponents/UIImageGroup.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIImageGroup.ts#L13)
