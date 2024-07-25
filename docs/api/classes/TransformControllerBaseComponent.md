# Class: TransformControllerBaseComponent

Components are used to attach functionality to object3D, it has an owner object3D.
The component can receive update events at each frame.

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`TransformControllerBaseComponent`**

  ↳↳ [`RotationControlComponents`](RotationControlComponents.md)

  ↳↳ [`ScaleControlComponents`](ScaleControlComponents.md)

  ↳↳ [`TranslationControlComponents`](TranslationControlComponents.md)

### Constructors

- [constructor](TransformControllerBaseComponent.md#constructor)

### Properties

- [object3D](TransformControllerBaseComponent.md#object3d)
- [isDestroyed](TransformControllerBaseComponent.md#isdestroyed)

### Accessors

- [eventDispatcher](TransformControllerBaseComponent.md#eventdispatcher)
- [isStart](TransformControllerBaseComponent.md#isstart)
- [transform](TransformControllerBaseComponent.md#transform)
- [enable](TransformControllerBaseComponent.md#enable)
- [target](TransformControllerBaseComponent.md#target)
- [mX](TransformControllerBaseComponent.md#mx)
- [mY](TransformControllerBaseComponent.md#my)
- [mZ](TransformControllerBaseComponent.md#mz)
- [transformSpaceMode](TransformControllerBaseComponent.md#transformspacemode)

### Methods

- [stop](TransformControllerBaseComponent.md#stop)
- [onLateUpdate](TransformControllerBaseComponent.md#onlateupdate)
- [onBeforeUpdate](TransformControllerBaseComponent.md#onbeforeupdate)
- [onCompute](TransformControllerBaseComponent.md#oncompute)
- [onGraphic](TransformControllerBaseComponent.md#ongraphic)
- [onParentChange](TransformControllerBaseComponent.md#onparentchange)
- [onAddChild](TransformControllerBaseComponent.md#onaddchild)
- [onRemoveChild](TransformControllerBaseComponent.md#onremovechild)
- [cloneTo](TransformControllerBaseComponent.md#cloneto)
- [copyComponent](TransformControllerBaseComponent.md#copycomponent)
- [beforeDestroy](TransformControllerBaseComponent.md#beforedestroy)
- [destroy](TransformControllerBaseComponent.md#destroy)
- [init](TransformControllerBaseComponent.md#init)
- [start](TransformControllerBaseComponent.md#start)
- [onEnable](TransformControllerBaseComponent.md#onenable)
- [onDisable](TransformControllerBaseComponent.md#ondisable)
- [reset](TransformControllerBaseComponent.md#reset)
- [onMouseDown](TransformControllerBaseComponent.md#onmousedown)
- [onMouseMove](TransformControllerBaseComponent.md#onmousemove)
- [onMouseUp](TransformControllerBaseComponent.md#onmouseup)
- [onUpdate](TransformControllerBaseComponent.md#onupdate)

## Constructors

### constructor

• **new TransformControllerBaseComponent**(): [`TransformControllerBaseComponent`](TransformControllerBaseComponent.md)

#### Returns

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md)

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/util/transformUtil/TransformControllerBaseComponent.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L29)

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

___

### target

• `get` **target**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/util/transformUtil/TransformControllerBaseComponent.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L40)

___

### mX

• `get` **mX**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/util/transformUtil/TransformControllerBaseComponent.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L44)

___

### mY

• `get` **mY**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/util/transformUtil/TransformControllerBaseComponent.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L48)

___

### mZ

• `get` **mZ**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

[src/util/transformUtil/TransformControllerBaseComponent.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L52)

___

### transformSpaceMode

• `get` **transformSpaceMode**(): `TransformSpaceMode`

#### Returns

`TransformSpaceMode`

#### Defined in

[src/util/transformUtil/TransformControllerBaseComponent.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L56)

## Methods

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[stop](ComponentBase.md#stop)

#### Defined in

[src/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L114)

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

[ComponentBase](ComponentBase.md).[cloneTo](ComponentBase.md#cloneto)

#### Defined in

[src/components/ComponentBase.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L131)

___

### copyComponent

▸ **copyComponent**(`from`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `this` |

#### Returns

`this`

#### Inherited from

[ComponentBase](ComponentBase.md).[copyComponent](ComponentBase.md#copycomponent)

#### Defined in

[src/components/ComponentBase.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L133)

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

### init

▸ **init**(`param?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[init](ComponentBase.md#init)

#### Defined in

[src/util/transformUtil/TransformControllerBaseComponent.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L60)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[start](ComponentBase.md#start)

#### Defined in

[src/util/transformUtil/TransformControllerBaseComponent.ts:94](https://github.com/Orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L94)

___

### onEnable

▸ **onEnable**(`view?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onEnable](ComponentBase.md#onenable)

#### Defined in

[src/util/transformUtil/TransformControllerBaseComponent.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L98)

___

### onDisable

▸ **onDisable**(`view?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onDisable](ComponentBase.md#ondisable)

#### Defined in

[src/util/transformUtil/TransformControllerBaseComponent.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L107)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[src/util/transformUtil/TransformControllerBaseComponent.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L115)

___

### onMouseDown

▸ **onMouseDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`PointerEvent3D`](PointerEvent3D.md) |

#### Returns

`void`

#### Defined in

[src/util/transformUtil/TransformControllerBaseComponent.ts:198](https://github.com/Orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L198)

___

### onMouseMove

▸ **onMouseMove**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`PointerEvent3D`](PointerEvent3D.md) |

#### Returns

`void`

#### Defined in

[src/util/transformUtil/TransformControllerBaseComponent.ts:220](https://github.com/Orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L220)

___

### onMouseUp

▸ **onMouseUp**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`PointerEvent3D`](PointerEvent3D.md) |

#### Returns

`void`

#### Defined in

[src/util/transformUtil/TransformControllerBaseComponent.ts:274](https://github.com/Orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L274)

___

### onUpdate

▸ **onUpdate**(`view?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onUpdate](ComponentBase.md#onupdate)

#### Defined in

[src/util/transformUtil/TransformControllerBaseComponent.ts:282](https://github.com/Orillusion/orillusion/blob/main/src/util/transformUtil/TransformControllerBaseComponent.ts#L282)
