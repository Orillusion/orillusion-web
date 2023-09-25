# Class: UITransform

The component for gui, holding information such as size, scaling, position, etc

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`UITransform`**

### Constructors

- [constructor](UITransform.md#constructor)

### Properties

- [object3D](UITransform.md#object3d)
- [isDestroyed](UITransform.md#isdestroyed)
- [useParentPivot](UITransform.md#useparentpivot)
- [parent](UITransform.md#parent)
- [pivotX](UITransform.md#pivotx)
- [pivotY](UITransform.md#pivoty)
- [needUpdateQuads](UITransform.md#needupdatequads)

### Accessors

- [eventDispatcher](UITransform.md#eventdispatcher)
- [isStart](UITransform.md#isstart)
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
- [beforeDestroy](UITransform.md#beforedestroy)

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

### isDestroyed

• `Optional` **isDestroyed**: `boolean`

#### Inherited from

[ComponentBase](ComponentBase.md).[isDestroyed](ComponentBase.md#isdestroyed)

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

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

[src/components/gui/uiComponents/UITransform.ts:200](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L200)

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

[src/components/gui/uiComponents/UITransform.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L64)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L76)

• `set` **visible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L68)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L108)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L112)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L129)

• `set` **x**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L133)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L140)

• `set` **y**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L144)

___

### z

• `get` **z**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:158](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L158)

• `set` **z**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:162](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L162)

___

### scaleX

• `get` **scaleX**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:169](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L169)

• `set` **scaleX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:173](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L173)

___

### scaleY

• `get` **scaleY**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:178](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L178)

• `set` **scaleY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:182](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L182)

___

### scaleZ

• `get` **scaleZ**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:187](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L187)

• `set` **scaleZ**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:191](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L191)

___

### onChange

• `get` **onChange**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:202](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L202)

• `set` **onChange**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:208](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L208)

## Methods

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

[src/components/ComponentBase.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L117)

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

[src/components/ComponentBase.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L118)

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

[src/components/ComponentBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L119)

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

[src/components/ComponentBase.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L120)

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

[src/components/ComponentBase.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L121)

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

[src/components/ComponentBase.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L131)

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

[src/components/ComponentBase.ts:205](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L205)

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

[src/components/gui/uiComponents/UITransform.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L47)

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

[src/components/gui/uiComponents/UITransform.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L53)

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

[src/components/gui/uiComponents/UITransform.ts:102](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L102)

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

[src/components/gui/uiComponents/UITransform.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L116)

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

[src/components/gui/uiComponents/UITransform.ts:151](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L151)

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onEnable](ComponentBase.md#onenable)

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:223](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L223)

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onDisable](ComponentBase.md#ondisable)

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:228](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L228)

___

### setNeedUpdateUIPanel

▸ **setNeedUpdateUIPanel**(): `void`

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:233](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L233)

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

[src/components/gui/uiComponents/UITransform.ts:244](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L244)

___

### matrix

▸ **matrix**(): [`Matrix3`](Matrix3.md)

#### Returns

[`Matrix3`](Matrix3.md)

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:260](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L260)

___

### getWorldMatrix

▸ **getWorldMatrix**(): [`Matrix3`](Matrix3.md)

#### Returns

[`Matrix3`](Matrix3.md)

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:286](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L286)

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

#### Overrides

[ComponentBase](ComponentBase.md).[beforeDestroy](ComponentBase.md#beforedestroy)

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:300](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L300)
