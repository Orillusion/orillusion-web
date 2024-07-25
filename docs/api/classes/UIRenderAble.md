# Class: UIRenderAble

The basic class of render able GUI component

## Hierarchy

- [`UIComponentBase`](UIComponentBase.md)

  ↳ **`UIRenderAble`**

  ↳↳ [`UIImage`](UIImage.md)

  ↳↳ [`UIImageGroup`](UIImageGroup.md)

  ↳↳ [`UIShadow`](UIShadow.md)

  ↳↳ [`UITextField`](UITextField.md)

### Constructors

- [constructor](UIRenderAble.md#constructor)

### Properties

- [object3D](UIRenderAble.md#object3d)
- [isDestroyed](UIRenderAble.md#isdestroyed)
- [isUIShadow](UIRenderAble.md#isuishadow)
- [isShadowless](UIRenderAble.md#isshadowless)
- [needUpdateShadow](UIRenderAble.md#needupdateshadow)

### Accessors

- [eventDispatcher](UIRenderAble.md#eventdispatcher)
- [isStart](UIRenderAble.md#isstart)
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
- [onAddChild](UIRenderAble.md#onaddchild)
- [onRemoveChild](UIRenderAble.md#onremovechild)
- [cloneTo](UIRenderAble.md#cloneto)
- [beforeDestroy](UIRenderAble.md#beforedestroy)
- [init](UIRenderAble.md#init)
- [destroy](UIRenderAble.md#destroy)
- [start](UIRenderAble.md#start)
- [setShadowRenderer](UIRenderAble.md#setshadowrenderer)
- [setShadowSource](UIRenderAble.md#setshadowsource)
- [getShadowRender](UIRenderAble.md#getshadowrender)
- [copyComponent](UIRenderAble.md#copycomponent)

## Constructors

### constructor

• **new UIRenderAble**(): [`UIRenderAble`](UIRenderAble.md)

#### Returns

[`UIRenderAble`](UIRenderAble.md)

#### Inherited from

[UIComponentBase](UIComponentBase.md).[constructor](UIComponentBase.md#constructor)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

[UIComponentBase](UIComponentBase.md).[object3D](UIComponentBase.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### isDestroyed

• `Optional` **isDestroyed**: `boolean`

#### Inherited from

[UIComponentBase](UIComponentBase.md).[isDestroyed](UIComponentBase.md#isdestroyed)

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### isUIShadow

• `Optional` **isUIShadow**: `boolean`

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L12)

___

### isShadowless

• `Optional` **isShadowless**: `boolean`

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L13)

___

### needUpdateShadow

• **needUpdateShadow**: `boolean`

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L14)

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

UIComponentBase.eventDispatcher

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

UIComponentBase.eventDispatcher

#### Defined in

[src/components/ComponentBase.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L28)

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIComponentBase.isStart

#### Defined in

[src/components/ComponentBase.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L40)

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

UIComponentBase.transform

#### Defined in

[src/components/ComponentBase.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L47)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

UIComponentBase.enable

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

UIComponentBase.enable

#### Defined in

[src/components/ComponentBase.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L54)

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

#### Inherited from

UIComponentBase.visible

#### Defined in

[src/components/gui/uiComponents/UIComponentBase.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIComponentBase.ts#L24)

___

### mainQuads

• `get` **mainQuads**(): [`GUIQuad`](GUIQuad.md)[]

#### Returns

[`GUIQuad`](GUIQuad.md)[]

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L44)

## Methods

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[UIComponentBase](UIComponentBase.md).[stop](UIComponentBase.md#stop)

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

[UIComponentBase](UIComponentBase.md).[onEnable](UIComponentBase.md#onenable)

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

[UIComponentBase](UIComponentBase.md).[onDisable](UIComponentBase.md#ondisable)

#### Defined in

[src/components/ComponentBase.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L116)

___

### onUpdate

▸ **onUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[UIComponentBase](UIComponentBase.md).[onUpdate](UIComponentBase.md#onupdate)

#### Defined in

[src/components/ComponentBase.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L117)

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

[UIComponentBase](UIComponentBase.md).[onLateUpdate](UIComponentBase.md#onlateupdate)

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

[UIComponentBase](UIComponentBase.md).[onBeforeUpdate](UIComponentBase.md#onbeforeupdate)

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

[UIComponentBase](UIComponentBase.md).[onCompute](UIComponentBase.md#oncompute)

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

[UIComponentBase](UIComponentBase.md).[onGraphic](UIComponentBase.md#ongraphic)

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

[UIComponentBase](UIComponentBase.md).[onParentChange](UIComponentBase.md#onparentchange)

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

[UIComponentBase](UIComponentBase.md).[onAddChild](UIComponentBase.md#onaddchild)

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

[UIComponentBase](UIComponentBase.md).[onRemoveChild](UIComponentBase.md#onremovechild)

#### Defined in

[src/components/ComponentBase.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L124)

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

[src/components/ComponentBase.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L131)

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

[UIComponentBase](UIComponentBase.md).[beforeDestroy](UIComponentBase.md#beforedestroy)

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

#### Overrides

[UIComponentBase](UIComponentBase.md).[init](UIComponentBase.md#init)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L16)

___

### destroy

▸ **destroy**(): `void`

release this component

#### Returns

`void`

#### Overrides

[UIComponentBase](UIComponentBase.md).[destroy](UIComponentBase.md#destroy)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L21)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[UIComponentBase](UIComponentBase.md).[start](UIComponentBase.md#start)

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

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L52)

___

### getShadowRender

▸ **getShadowRender**(): [`UIRenderAble`](UIRenderAble.md)

#### Returns

[`UIRenderAble`](UIRenderAble.md)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L56)

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

[UIComponentBase](UIComponentBase.md).[copyComponent](UIComponentBase.md#copycomponent)

#### Defined in

[src/components/gui/uiComponents/UIRenderAble.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIRenderAble.ts#L120)
