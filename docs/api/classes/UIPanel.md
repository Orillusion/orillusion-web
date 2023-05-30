# Class: UIPanel

Components are used to attach functionality to object3D, it has an owner object3D.
The component can receive update events at each frame.

## Hierarchy

- [`UIComponentBase`](UIComponentBase.md)

  ↳ **`UIPanel`**

  ↳↳ [`ViewPanel`](ViewPanel.md)

  ↳↳ [`WorldPanel`](WorldPanel.md)

### Properties

- [object3D](UIPanel.md#object3d)
- [order](UIPanel.md#order)
- [space](UIPanel.md#space)
- [needUpdateGeometry](UIPanel.md#needupdategeometry)
- [panelOrder](UIPanel.md#panelorder)
- [needSortOnCameraZ](UIPanel.md#needsortoncameraz)
- [isUIPanel](UIPanel.md#isuipanel)

### Constructors

- [constructor](UIPanel.md#constructor)

### Accessors

- [transform](UIPanel.md#transform)
- [enable](UIPanel.md#enable)
- [uiTransform](UIPanel.md#uitransform)
- [visible](UIPanel.md#visible)
- [guiMesh](UIPanel.md#guimesh)

### Methods

- [onParentChange](UIPanel.md#onparentchange)
- [cloneTo](UIPanel.md#cloneto)
- [start](UIPanel.md#start)
- [stop](UIPanel.md#stop)
- [onEnable](UIPanel.md#onenable)
- [onDisable](UIPanel.md#ondisable)
- [onUpdate](UIPanel.md#onupdate)
- [onLateUpdate](UIPanel.md#onlateupdate)
- [onBeforeUpdate](UIPanel.md#onbeforeupdate)
- [onCompute](UIPanel.md#oncompute)
- [onGraphic](UIPanel.md#ongraphic)
- [destroy](UIPanel.md#destroy)
- [copyComponent](UIPanel.md#copycomponent)
- [init](UIPanel.md#init)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

[UIComponentBase](UIComponentBase.md).[object3D](UIComponentBase.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### order

• **order**: `number`

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L8)

___

### space

• **space**: `number` = `GUISpace.World`

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L9)

___

### needUpdateGeometry

• **needUpdateGeometry**: `boolean` = `true`

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L10)

___

### panelOrder

• **panelOrder**: `number` = `0`

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L11)

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L12)

___

### isUIPanel

• `Readonly` **isUIPanel**: ``true``

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L14)

## Constructors

### constructor

• **new UIPanel**()

#### Inherited from

[UIComponentBase](UIComponentBase.md).[constructor](UIComponentBase.md#constructor)

#### Defined in

[src/components/ComponentBase.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L31)

## Accessors

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

UIComponentBase.transform

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

UIComponentBase.enable

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

UIComponentBase.enable

#### Defined in

[src/components/ComponentBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L45)

___

### uiTransform

• `get` **uiTransform**(): [`UITransform`](UITransform.md)

#### Returns

[`UITransform`](UITransform.md)

#### Inherited from

UIComponentBase.uiTransform

#### Defined in

[src/components/gui/uiComponents/UIComponentBase.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIComponentBase.ts#L12)

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIComponentBase.visible

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

UIComponentBase.visible

#### Defined in

[src/components/gui/uiComponents/UIComponentBase.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIComponentBase.ts#L20)

___

### guiMesh

• `get` **guiMesh**(): [`GUIMesh`](GUIMesh.md)

#### Returns

[`GUIMesh`](GUIMesh.md)

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

[UIComponentBase](UIComponentBase.md).[onParentChange](UIComponentBase.md#onparentchange)

#### Defined in

[src/components/ComponentBase.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L116)

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

[src/components/ComponentBase.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L123)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[UIComponentBase](UIComponentBase.md).[start](UIComponentBase.md#start)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L19)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Overrides

[UIComponentBase](UIComponentBase.md).[stop](UIComponentBase.md#stop)

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

#### Overrides

[UIComponentBase](UIComponentBase.md).[onEnable](UIComponentBase.md#onenable)

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

#### Overrides

[UIComponentBase](UIComponentBase.md).[onDisable](UIComponentBase.md#ondisable)

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

#### Overrides

[UIComponentBase](UIComponentBase.md).[onUpdate](UIComponentBase.md#onupdate)

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

#### Overrides

[UIComponentBase](UIComponentBase.md).[onLateUpdate](UIComponentBase.md#onlateupdate)

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

#### Overrides

[UIComponentBase](UIComponentBase.md).[onBeforeUpdate](UIComponentBase.md#onbeforeupdate)

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

#### Overrides

[UIComponentBase](UIComponentBase.md).[onCompute](UIComponentBase.md#oncompute)

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

#### Overrides

[UIComponentBase](UIComponentBase.md).[onGraphic](UIComponentBase.md#ongraphic)

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

#### Overrides

[UIComponentBase](UIComponentBase.md).[destroy](UIComponentBase.md#destroy)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L47)

___

### copyComponent

▸ **copyComponent**(`from`): [`UIPanel`](UIPanel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`UIPanel`](UIPanel.md) |

#### Returns

[`UIPanel`](UIPanel.md)

#### Overrides

[UIComponentBase](UIComponentBase.md).[copyComponent](UIComponentBase.md#copycomponent)

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

#### Overrides

[UIComponentBase](UIComponentBase.md).[init](UIComponentBase.md#init)

#### Defined in

[src/components/gui/uiComponents/UIPanel.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/UIPanel.ts#L58)
