# Class: GUICanvas

GUI Root Container

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`GUICanvas`**

### Constructors

- [constructor](GUICanvas.md#constructor)

### Properties

- [object3D](GUICanvas.md#object3d)
- [isDestroyed](GUICanvas.md#isdestroyed)
- [isGUICanvas](GUICanvas.md#isguicanvas)
- [index](GUICanvas.md#index)

### Accessors

- [eventDispatcher](GUICanvas.md#eventdispatcher)
- [isStart](GUICanvas.md#isstart)
- [transform](GUICanvas.md#transform)
- [enable](GUICanvas.md#enable)

### Methods

- [init](GUICanvas.md#init)
- [start](GUICanvas.md#start)
- [stop](GUICanvas.md#stop)
- [onEnable](GUICanvas.md#onenable)
- [onDisable](GUICanvas.md#ondisable)
- [onUpdate](GUICanvas.md#onupdate)
- [onLateUpdate](GUICanvas.md#onlateupdate)
- [onBeforeUpdate](GUICanvas.md#onbeforeupdate)
- [onCompute](GUICanvas.md#oncompute)
- [onGraphic](GUICanvas.md#ongraphic)
- [onParentChange](GUICanvas.md#onparentchange)
- [onAddChild](GUICanvas.md#onaddchild)
- [onRemoveChild](GUICanvas.md#onremovechild)
- [beforeDestroy](GUICanvas.md#beforedestroy)
- [destroy](GUICanvas.md#destroy)
- [addChild](GUICanvas.md#addchild)
- [removeChild](GUICanvas.md#removechild)
- [cloneTo](GUICanvas.md#cloneto)
- [copyComponent](GUICanvas.md#copycomponent)

## Constructors

### constructor

• **new GUICanvas**(): [`GUICanvas`](GUICanvas.md)

#### Returns

[`GUICanvas`](GUICanvas.md)

#### Inherited from

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

[ComponentBase](ComponentBase.md).[object3D](ComponentBase.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### isDestroyed

• `Optional` **isDestroyed**: `boolean`

#### Inherited from

[ComponentBase](ComponentBase.md).[isDestroyed](ComponentBase.md#isdestroyed)

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### isGUICanvas

• `Readonly` **isGUICanvas**: `boolean` = `true`

#### Defined in

[src/components/gui/core/GUICanvas.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUICanvas.ts#L10)

___

### index

• **index**: `number` = `0`

#### Defined in

[src/components/gui/core/GUICanvas.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUICanvas.ts#L11)

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

ComponentBase.eventDispatcher

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

ComponentBase.eventDispatcher

#### Defined in

[src/components/ComponentBase.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L28)

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ComponentBase.isStart

#### Defined in

[src/components/ComponentBase.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L40)

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

ComponentBase.transform

#### Defined in

[src/components/ComponentBase.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L47)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

ComponentBase.enable

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

ComponentBase.enable

#### Defined in

[src/components/ComponentBase.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L54)

## Methods

### init

▸ **init**(`param?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[init](ComponentBase.md#init)

#### Defined in

[src/components/ComponentBase.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L112)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[start](ComponentBase.md#start)

#### Defined in

[src/components/ComponentBase.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[stop](ComponentBase.md#stop)

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

[ComponentBase](ComponentBase.md).[onEnable](ComponentBase.md#onenable)

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

[ComponentBase](ComponentBase.md).[onDisable](ComponentBase.md#ondisable)

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

[ComponentBase](ComponentBase.md).[onUpdate](ComponentBase.md#onupdate)

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

[ComponentBase](ComponentBase.md).[onLateUpdate](ComponentBase.md#onlateupdate)

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

[ComponentBase](ComponentBase.md).[onBeforeUpdate](ComponentBase.md#onbeforeupdate)

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

[ComponentBase](ComponentBase.md).[onCompute](ComponentBase.md#oncompute)

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

[ComponentBase](ComponentBase.md).[onGraphic](ComponentBase.md#ongraphic)

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

[ComponentBase](ComponentBase.md).[onParentChange](ComponentBase.md#onparentchange)

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

[ComponentBase](ComponentBase.md).[onAddChild](ComponentBase.md#onaddchild)

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

[ComponentBase](ComponentBase.md).[onRemoveChild](ComponentBase.md#onremovechild)

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

[ComponentBase](ComponentBase.md).[beforeDestroy](ComponentBase.md#beforedestroy)

#### Defined in

[src/components/ComponentBase.ts:200](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L200)

___

### destroy

▸ **destroy**(`force?`): `void`

release this component

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[destroy](ComponentBase.md#destroy)

#### Defined in

[src/components/ComponentBase.ts:207](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L207)

___

### addChild

▸ **addChild**(`child`): `this`

Add an Object3D

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`Object3D`](Object3D.md) | Object3D |

#### Returns

`this`

#### Defined in

[src/components/gui/core/GUICanvas.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUICanvas.ts#L19)

___

### removeChild

▸ **removeChild**(`child`): `this`

Remove the child

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `child` | [`Object3D`](Object3D.md) | Removed Object3D |

#### Returns

`this`

#### Defined in

[src/components/gui/core/GUICanvas.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUICanvas.ts#L29)

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

[ComponentBase](ComponentBase.md).[cloneTo](ComponentBase.md#cloneto)

#### Defined in

[src/components/gui/core/GUICanvas.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUICanvas.ts#L35)

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

[ComponentBase](ComponentBase.md).[copyComponent](ComponentBase.md#copycomponent)

#### Defined in

[src/components/gui/core/GUICanvas.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/core/GUICanvas.ts#L40)
