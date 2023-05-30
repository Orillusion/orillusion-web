# Class: UITransform

Components are used to attach functionality to object3D, it has an owner object3D.
The component can receive update events at each frame.

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`UITransform`**

### Properties

- [object3D](UITransform.md#object3d)
- [useParentPivot](UITransform.md#useparentpivot)
- [parent](UITransform.md#parent)
- [pivotX](UITransform.md#pivotx)
- [pivotY](UITransform.md#pivoty)
- [guiMesh](UITransform.md#guimesh)
- [needUpdateQuads](UITransform.md#needupdatequads)

### Accessors

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
- [onChange](UITransform.md#onchange)

### Methods

- [init](UITransform.md#init)
- [start](UITransform.md#start)
- [stop](UITransform.md#stop)
- [onUpdate](UITransform.md#onupdate)
- [onLateUpdate](UITransform.md#onlateupdate)
- [onBeforeUpdate](UITransform.md#onbeforeupdate)
- [onCompute](UITransform.md#oncompute)
- [onGraphic](UITransform.md#ongraphic)
- [destroy](UITransform.md#destroy)
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

### Constructors

- [constructor](UITransform.md#constructor)

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

[src/components/gui/uiComponents/UITransform.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L13)

___

### parent

• **parent**: [`UITransform`](UITransform.md)

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L14)

___

### pivotX

• **pivotX**: `number` = `0.5`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L15)

___

### pivotY

• **pivotY**: `number` = `0.5`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L16)

___

### guiMesh

• **guiMesh**: [`GUIMesh`](GUIMesh.md)

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L22)

___

### needUpdateQuads

• **needUpdateQuads**: `boolean` = `true`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:179](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L179)

## Accessors

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

ComponentBase.transform

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

ComponentBase.enable

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

ComponentBase.enable

#### Defined in

[src/components/ComponentBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L45)

___

### uiInteractiveList

• `get` **uiInteractiveList**(): [`IUIInteractive`](../interfaces/IUIInteractive.md)[]

#### Returns

[`IUIInteractive`](../interfaces/IUIInteractive.md)[]

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L25)

___

### globalVisible

• `get` **globalVisible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L52)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L64)

• `set` **visible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L56)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L96)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:100](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L100)

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:117](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L117)

• `set` **x**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L121)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L128)

• `set` **y**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L132)

___

### z

• `get` **z**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:146](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L146)

• `set` **z**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:150](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L150)

___

### scaleX

• `get` **scaleX**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:157](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L157)

• `set` **scaleX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L161)

___

### scaleY

• `get` **scaleY**(): `number`

#### Returns

`number`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:166](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L166)

• `set` **scaleY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:170](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L170)

___

### onChange

• `get` **onChange**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:181](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L181)

• `set` **onChange**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:187](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L187)

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

[src/components/ComponentBase.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L106)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[start](ComponentBase.md#start)

#### Defined in

[src/components/ComponentBase.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L107)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[stop](ComponentBase.md#stop)

#### Defined in

[src/components/ComponentBase.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L108)

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

[ComponentBase](ComponentBase.md).[onLateUpdate](ComponentBase.md#onlateupdate)

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

[ComponentBase](ComponentBase.md).[onBeforeUpdate](ComponentBase.md#onbeforeupdate)

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

[ComponentBase](ComponentBase.md).[onCompute](ComponentBase.md#oncompute)

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

[ComponentBase](ComponentBase.md).[onGraphic](ComponentBase.md#ongraphic)

#### Defined in

[src/components/ComponentBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L115)

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

[src/components/ComponentBase.ts:190](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L190)

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

[src/components/gui/uiComponents/UITransform.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L35)

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

[src/components/gui/uiComponents/UITransform.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L41)

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

[src/components/gui/uiComponents/UITransform.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L90)

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

[src/components/gui/uiComponents/UITransform.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L104)

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

[src/components/gui/uiComponents/UITransform.ts:139](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L139)

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onEnable](ComponentBase.md#onenable)

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:202](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L202)

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onDisable](ComponentBase.md#ondisable)

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:207](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L207)

___

### setNeedUpdateUIPanel

▸ **setNeedUpdateUIPanel**(): `void`

#### Returns

`void`

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:212](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L212)

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

[src/components/gui/uiComponents/UITransform.ts:223](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L223)

___

### matrix

▸ **matrix**(): [`Matrix3`](Matrix3.md)

#### Returns

[`Matrix3`](Matrix3.md)

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:239](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L239)

___

### getWorldMatrix

▸ **getWorldMatrix**(): [`Matrix3`](Matrix3.md)

#### Returns

[`Matrix3`](Matrix3.md)

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:260](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L260)

## Constructors

### constructor

• **new UITransform**()

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/components/gui/uiComponents/UITransform.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UITransform.ts#L29)
