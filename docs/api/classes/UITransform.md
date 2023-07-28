# Class: UITransform

The component for gui, holding information such as size, scaling, position, etc

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`UITransform`**

### Constructors

- [constructor](UITransform.md#constructor)

### Properties

- [object3D](UITransform.md#object3d)
- [useParentPivot](UITransform.md#useparentpivot)
- [parent](UITransform.md#parent)
- [pivotX](UITransform.md#pivotx)
- [pivotY](UITransform.md#pivoty)
- [needUpdateQuads](UITransform.md#needupdatequads)

### Accessors

- [eventDispatcher](UITransform.md#eventdispatcher)
- [transform](UITransform.md#transform)
- [enable](UITransform.md#enable)
- [uiInteractiveList](UITransform.md#uiinteractivelist)
- [globalVisible](UITransform.md#globalvisible)
- [visible](UITransform.md#visible)
- [width](UITransform.md#width)
- [height](UITransform.md#height)
- [x](UITransform.md#x)
- [y](UITransform.md#y)
- [z](UITransform.md#z)
- [scaleX](UITransform.md#scalex)
- [scaleY](UITransform.md#scaley)
- [scaleZ](UITransform.md#scalez)
- [onChange](UITransform.md#onchange)

### Methods

- [start](UITransform.md#start)
- [stop](UITransform.md#stop)
- [onUpdate](UITransform.md#onupdate)
- [onLateUpdate](UITransform.md#onlateupdate)
- [onBeforeUpdate](UITransform.md#onbeforeupdate)
- [onCompute](UITransform.md#oncompute)
- [onGraphic](UITransform.md#ongraphic)
- [beforeDestroy](UITransform.md#beforedestroy)
- [copyComponent](UITransform.md#copycomponent)
- [destroy](UITransform.md#destroy)
- [init](UITransform.md#init)
- [addUIInteractive](UITransform.md#adduiinteractive)
- [removeUIInteractive](UITransform.md#removeuiinteractive)
- [onParentChange](UITransform.md#onparentchange)
- [resize](UITransform.md#resize)
- [setXY](UITransform.md#setxy)
- [onEnable](UITransform.md#onenable)
- [onDisable](UITransform.md#ondisable)
- [setNeedUpdateUIPanel](UITransform.md#setneedupdateuipanel)
- [cloneTo](UITransform.md#cloneto)
- [matrix](UITransform.md#matrix)
- [getWorldMatrix](UITransform.md#getworldmatrix)

## Constructors

### constructor

• **new UITransform**()

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L31)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

[ComponentBase](ComponentBase.md).[object3D](ComponentBase.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### useParentPivot

• **useParentPivot**: `boolean` = `false`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L16)

___

### parent

• **parent**: [`UITransform`](UITransform.md)

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L17)

___

### pivotX

• **pivotX**: `number` = `0.5`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L18)

___

### pivotY

• **pivotY**: `number` = `0.5`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L19)

___

### needUpdateQuads

• **needUpdateQuads**: `boolean` = `true`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:195](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L195)

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

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

ComponentBase.transform

#### Defined in

[src/components/ComponentBase.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L43)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

ComponentBase.enable

#### Defined in

[src/components/ComponentBase.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L64)

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

[src/components/ComponentBase.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L50)

___

### uiInteractiveList

• `get` **uiInteractiveList**(): [`IUIInteractive`](../interfaces/IUIInteractive.md)[]

#### Returns

[`IUIInteractive`](../interfaces/IUIInteractive.md)[]

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L27)

___

### globalVisible

• `get` **globalVisible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L59)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L71)

• `set` **visible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L63)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L103)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L107)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L124)

• `set` **x**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L128)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L135)

• `set` **y**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:139](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L139)

___

### z

• `get` **z**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L153)

• `set` **z**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:157](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L157)

___

### scaleX

• `get` **scaleX**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:164](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L164)

• `set` **scaleX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:168](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L168)

___

### scaleY

• `get` **scaleY**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:173](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L173)

• `set` **scaleY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:177](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L177)

___

### scaleZ

• `get` **scaleZ**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:182](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L182)

• `set` **scaleZ**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:186](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L186)

___

### onChange

• `get` **onChange**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:197](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L197)

• `set` **onChange**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:203](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L203)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[start](ComponentBase.md#start)

#### Defined in

[src/components/ComponentBase.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L109)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[stop](ComponentBase.md#stop)

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

[ComponentBase](ComponentBase.md).[onUpdate](ComponentBase.md#onupdate)

#### Defined in

[src/components/ComponentBase.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

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

[ComponentBase](ComponentBase.md).[onLateUpdate](ComponentBase.md#onlateupdate)

#### Defined in

[src/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L114)

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

[ComponentBase](ComponentBase.md).[onBeforeUpdate](ComponentBase.md#onbeforeupdate)

#### Defined in

[src/components/ComponentBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L115)

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

[ComponentBase](ComponentBase.md).[onCompute](ComponentBase.md#oncompute)

#### Defined in

[src/components/ComponentBase.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L116)

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

[ComponentBase](ComponentBase.md).[onGraphic](ComponentBase.md#ongraphic)

#### Defined in

[src/components/ComponentBase.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L117)

___

### beforeDestroy

▸ `Optional` **beforeDestroy**(`force?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[beforeDestroy](ComponentBase.md#beforedestroy)

#### Defined in

[src/components/ComponentBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L119)

___

### copyComponent

▸ **copyComponent**(`from`): [`UITransform`](UITransform.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`UITransform`](UITransform.md) |

#### Returns

[`UITransform`](UITransform.md)

#### Inherited from

[ComponentBase](ComponentBase.md).[copyComponent](ComponentBase.md#copycomponent)

#### Defined in

[src/components/ComponentBase.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L128)

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

[src/components/ComponentBase.ts:195](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L195)

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

[src/components/gui/uiComponents/UITransform.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L37)

___

### addUIInteractive

▸ **addUIInteractive**(`item`): [`UITransform`](UITransform.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IUIInteractive`](../interfaces/IUIInteractive.md) |

#### Returns

[`UITransform`](UITransform.md)

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L42)

___

### removeUIInteractive

▸ **removeUIInteractive**(`item`): [`IUIInteractive`](../interfaces/IUIInteractive.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IUIInteractive`](../interfaces/IUIInteractive.md) |

#### Returns

[`IUIInteractive`](../interfaces/IUIInteractive.md)

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L48)

___

### onParentChange

▸ **onParentChange**(`lastParent?`, `currentParent?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lastParent?` | [`Object3D`](Object3D.md) |
| `currentParent?` | [`Object3D`](Object3D.md) |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onParentChange](ComponentBase.md#onparentchange)

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L97)

___

### resize

▸ **resize**(`width`, `height`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`boolean`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L111)

___

### setXY

▸ **setXY**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:146](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L146)

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onEnable](ComponentBase.md#onenable)

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:218](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L218)

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onDisable](ComponentBase.md#ondisable)

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:223](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L223)

___

### setNeedUpdateUIPanel

▸ **setNeedUpdateUIPanel**(): `void`

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:228](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L228)

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

[src/components/gui/uiComponents/UITransform.ts:239](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L239)

___

### matrix

▸ **matrix**(): [`Matrix3`](Matrix3.md)

#### Returns

[`Matrix3`](Matrix3.md)

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:255](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L255)

___

### getWorldMatrix

▸ **getWorldMatrix**(): [`Matrix3`](Matrix3.md)

#### Returns

[`Matrix3`](Matrix3.md)

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:281](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L281)
