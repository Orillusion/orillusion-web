# Class: WorldPanel

Components are used to attach functionality to object3D, it has an owner object3D.
The component can receive update events at each frame.

## Hierarchy

- [`UIPanel`](UIPanel.md)

  ↳ **`WorldPanel`**

### Properties

- [object3D](WorldPanel.md#object3d)
- [order](WorldPanel.md#order)
- [space](WorldPanel.md#space)
- [needUpdateGeometry](WorldPanel.md#needupdategeometry)
- [panelOrder](WorldPanel.md#panelorder)
- [needSortOnCameraZ](WorldPanel.md#needsortoncameraz)
- [isUIPanel](WorldPanel.md#isuipanel)
- [depthTest](WorldPanel.md#depthtest)
- [isWorldPanel](WorldPanel.md#isworldpanel)

### Accessors

- [transform](WorldPanel.md#transform)
- [enable](WorldPanel.md#enable)
- [uiTransform](WorldPanel.md#uitransform)
- [visible](WorldPanel.md#visible)
- [guiMesh](WorldPanel.md#guimesh)

### Methods

- [onParentChange](WorldPanel.md#onparentchange)
- [start](WorldPanel.md#start)
- [stop](WorldPanel.md#stop)
- [onEnable](WorldPanel.md#onenable)
- [onDisable](WorldPanel.md#ondisable)
- [onUpdate](WorldPanel.md#onupdate)
- [onLateUpdate](WorldPanel.md#onlateupdate)
- [onBeforeUpdate](WorldPanel.md#onbeforeupdate)
- [onCompute](WorldPanel.md#oncompute)
- [onGraphic](WorldPanel.md#ongraphic)
- [destroy](WorldPanel.md#destroy)
- [copyComponent](WorldPanel.md#copycomponent)
- [init](WorldPanel.md#init)
- [cloneTo](WorldPanel.md#cloneto)

### Constructors

- [constructor](WorldPanel.md#constructor)

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

### depthTest

• **depthTest**: `boolean` = `false`

#### Defined in

[src/components/gui/uiComponents/WorldPanel.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/WorldPanel.ts#L7)

___

### isWorldPanel

• `Readonly` **isWorldPanel**: ``true``

#### Defined in

[src/components/gui/uiComponents/WorldPanel.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/WorldPanel.ts#L8)

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

▸ **copyComponent**(`from`): [`WorldPanel`](WorldPanel.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`WorldPanel`](WorldPanel.md) |

#### Returns

[`WorldPanel`](WorldPanel.md)

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

[src/components/gui/uiComponents/WorldPanel.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/WorldPanel.ts#L15)

## Constructors

### constructor

• **new WorldPanel**()

#### Overrides

[UIPanel](UIPanel.md).[constructor](UIPanel.md#constructor)

#### Defined in

[src/components/gui/uiComponents/WorldPanel.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/components/gui/uiComponents/WorldPanel.ts#L10)
