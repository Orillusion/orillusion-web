# Class: ViewPanel

Components are used to attach functionality to object3D, it has an owner object3D.
The component can receive update events at each frame.

## Hierarchy

- [`UIPanel`](UIPanel.md)

  ↳ **`ViewPanel`**

### Properties

- [object3D](ViewPanel.md#object3d)
- [order](ViewPanel.md#order)
- [space](ViewPanel.md#space)
- [needUpdateGeometry](ViewPanel.md#needupdategeometry)
- [panelOrder](ViewPanel.md#panelorder)
- [needSortOnCameraZ](ViewPanel.md#needsortoncameraz)
- [isUIPanel](ViewPanel.md#isuipanel)
- [isViewPanel](ViewPanel.md#isviewpanel)

### Accessors

- [transform](ViewPanel.md#transform)
- [enable](ViewPanel.md#enable)
- [uiTransform](ViewPanel.md#uitransform)
- [visible](ViewPanel.md#visible)
- [guiMesh](ViewPanel.md#guimesh)

### Methods

- [onParentChange](ViewPanel.md#onparentchange)
- [start](ViewPanel.md#start)
- [stop](ViewPanel.md#stop)
- [onEnable](ViewPanel.md#onenable)
- [onDisable](ViewPanel.md#ondisable)
- [onUpdate](ViewPanel.md#onupdate)
- [onLateUpdate](ViewPanel.md#onlateupdate)
- [onBeforeUpdate](ViewPanel.md#onbeforeupdate)
- [onCompute](ViewPanel.md#oncompute)
- [onGraphic](ViewPanel.md#ongraphic)
- [destroy](ViewPanel.md#destroy)
- [copyComponent](ViewPanel.md#copycomponent)
- [init](ViewPanel.md#init)
- [cloneTo](ViewPanel.md#cloneto)

### Constructors

- [constructor](ViewPanel.md#constructor)

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

[src/components/gui/uiComponents/UIPanel.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L8)

___

### space

• **space**: `number` = `GUISpace.World`

#### Inherited from

[UIPanel](UIPanel.md).[space](UIPanel.md#space)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L9)

___

### needUpdateGeometry

• **needUpdateGeometry**: `boolean` = `true`

#### Inherited from

[UIPanel](UIPanel.md).[needUpdateGeometry](UIPanel.md#needupdategeometry)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L10)

___

### panelOrder

• **panelOrder**: `number` = `0`

#### Inherited from

[UIPanel](UIPanel.md).[panelOrder](UIPanel.md#panelorder)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L11)

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Inherited from

[UIPanel](UIPanel.md).[needSortOnCameraZ](UIPanel.md#needsortoncameraz)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L12)

___

### isUIPanel

• `Readonly` **isUIPanel**: ``true``

#### Inherited from

[UIPanel](UIPanel.md).[isUIPanel](UIPanel.md#isuipanel)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L14)

___

### isViewPanel

• `Readonly` **isViewPanel**: ``true``

#### Defined in

[src/components/gui/uiComponents/ViewPanel.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/ViewPanel.ts#L7)

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

[src/components/gui/uiComponents/UIComponentBase.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIComponentBase.ts#L12)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIPanel.visible

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

UIPanel.visible

#### Defined in

[src/components/gui/uiComponents/UIComponentBase.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIComponentBase.ts#L20)

___

### guiMesh

• `get` **guiMesh**(): [`GUIMesh`](GUIMesh.md)

#### Returns

[`GUIMesh`](GUIMesh.md)

#### Inherited from

UIPanel.guiMesh

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L15)

## Methods

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

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[start](UIPanel.md#start)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L19)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[stop](UIPanel.md#stop)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L22)

___

### onEnable

▸ `Optional` **onEnable**(`view?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[onEnable](UIPanel.md#onenable)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L25)

___

### onDisable

▸ `Optional` **onDisable**(`view?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[onDisable](UIPanel.md#ondisable)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L28)

___

### onUpdate

▸ `Optional` **onUpdate**(`view?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[onUpdate](UIPanel.md#onupdate)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L31)

___

### onLateUpdate

▸ `Optional` **onLateUpdate**(`view?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[onLateUpdate](UIPanel.md#onlateupdate)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L34)

___

### onBeforeUpdate

▸ `Optional` **onBeforeUpdate**(`view?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[onBeforeUpdate](UIPanel.md#onbeforeupdate)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L37)

___

### onCompute

▸ `Optional` **onCompute**(`view?`, `command?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |
| `command?` | `GPUCommandEncoder` |

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[onCompute](UIPanel.md#oncompute)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L40)

___

### onGraphic

▸ `Optional` **onGraphic**(`view?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[onGraphic](UIPanel.md#ongraphic)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L43)

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

[UIPanel](UIPanel.md).[destroy](UIPanel.md#destroy)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L47)

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

[src/components/gui/uiComponents/UIPanel.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L50)

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

[src/components/gui/uiComponents/UIPanel.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L58)

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

[src/components/gui/uiComponents/ViewPanel.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/ViewPanel.ts#L14)

## Constructors

### constructor

• **new ViewPanel**()

#### Overrides

[UIPanel](UIPanel.md).[constructor](UIPanel.md#constructor)

#### Defined in

[src/components/gui/uiComponents/ViewPanel.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/ViewPanel.ts#L9)
