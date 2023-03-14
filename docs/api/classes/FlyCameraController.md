# Class: FlyCameraController

自由相机控制器。
通过 W A S D 向着朝向方向 前进 后退 左右移动。
通过按住鼠标左键控制相机的移动朝向

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`FlyCameraController`**


### Properties

- [object3D](FlyCameraController.md#object3d)
- [serializeTag](FlyCameraController.md#serializetag)
- [moveSpeed](FlyCameraController.md#movespeed)
- [targetPos](FlyCameraController.md#targetpos)
- [lookAtPos](FlyCameraController.md#lookatpos)

### Accessors

- [transform](FlyCameraController.md#transform)
- [enable](FlyCameraController.md#enable)
- [factory](FlyCameraController.md#factory)
- [mouseFactory](FlyCameraController.md#mousefactory)

### Methods

- [onVisible](FlyCameraController.md#onvisible)
- [cloneTo](FlyCameraController.md#cloneto)
- [onUpdate](FlyCameraController.md#onupdate)
- [onLateUpdate](FlyCameraController.md#onlateupdate)
- [onBeforeUpdate](FlyCameraController.md#onbeforeupdate)
- [serialization](FlyCameraController.md#serialization)
- [unSerialization](FlyCameraController.md#unserialization)
- [setCamera](FlyCameraController.md#setcamera)

### Constructors

- [constructor](FlyCameraController.md#constructor)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

此组件附加到的Object3D对象。

#### Inherited from

[ComponentBase](ComponentBase.md).[object3D](ComponentBase.md#object3d)

#### Defined in

[src/engine/components/ComponentBase.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L14)

___

### serializeTag

• `Optional` **serializeTag**: [`SerializeTag`](../types/SerializeTag.md)

#### Inherited from

[ComponentBase](ComponentBase.md).[serializeTag](ComponentBase.md#serializetag)

#### Defined in

[src/engine/components/ComponentBase.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L30)

___

### moveSpeed

• **moveSpeed**: `number` = `2`

相机移动速度

#### Defined in

[src/engine/components/controller/FlyCameraController.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/FlyCameraController.ts#L16)

___

### targetPos

• **targetPos**: [`Vector3`](Vector3.md)

特定对象的坐标

#### Defined in

[src/engine/components/controller/FlyCameraController.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/FlyCameraController.ts#L27)

___

### lookAtPos

• **lookAtPos**: [`Vector3`](Vector3.md)

相机朝向坐标

#### Defined in

[src/engine/components/controller/FlyCameraController.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/FlyCameraController.ts#L32)

## Accessors

### transform

• `get` **transform**(): [`Transform`](Transform.md)

附加到此 Object3D对象 的 Transform组件。

#### Returns

[`Transform`](Transform.md)

#### Inherited from

ComponentBase.transform

#### Defined in

[src/engine/components/ComponentBase.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L39)

___

### enable

• `get` **enable**(): `boolean`

启用/禁用 组件。启用的组件可更新，禁用的组件不可更新。

#### Returns

`boolean`

#### Inherited from

ComponentBase.enable

#### Defined in

[src/engine/components/ComponentBase.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L62)

• `set` **enable**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

ComponentBase.enable

#### Defined in

[src/engine/components/ComponentBase.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L43)

___

### factory

• `get` **factory**(): `number`

键盘控制相机的平滑度

#### Returns

`number`

#### Defined in

[src/engine/components/controller/FlyCameraController.ts:178](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/FlyCameraController.ts#L178)

• `set` **factory**(`value`): `void`

键盘控制相机的平滑度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/components/controller/FlyCameraController.ts:186](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/FlyCameraController.ts#L186)

___

### mouseFactory

• `get` **mouseFactory**(): `number`

鼠标控制相机的平滑度

#### Returns

`number`

#### Defined in

[src/engine/components/controller/FlyCameraController.ts:194](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/FlyCameraController.ts#L194)

• `set` **mouseFactory**(`value`): `void`

鼠标控制相机的平滑度

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/components/controller/FlyCameraController.ts:202](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/FlyCameraController.ts#L202)

## Methods

### onVisible

▸ **onVisible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[onVisible](ComponentBase.md#onvisible)

#### Defined in

[src/engine/components/ComponentBase.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L66)

___

### cloneTo

▸ **cloneTo**(`obj`): `void`

创建新的组件，复制当前组件的属性，并添加到目标对象上。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) | 源对象 |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[cloneTo](ComponentBase.md#cloneto)

#### Defined in

[src/engine/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L114)

___

### onUpdate

▸ **onUpdate**(`call`): `void`

添加更新函数。会在每帧更新时执行。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `call` | `Function` | 回调函数 |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[onUpdate](ComponentBase.md#onupdate)

#### Defined in

[src/engine/components/ComponentBase.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L135)

___

### onLateUpdate

▸ **onLateUpdate**(`call`): `void`

添加延迟更新函数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `call` | `Function` | 回调函数 |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[onLateUpdate](ComponentBase.md#onlateupdate)

#### Defined in

[src/engine/components/ComponentBase.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L148)

___

### onBeforeUpdate

▸ **onBeforeUpdate**(`call`): `void`

添加帧更新前执行的函数。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `call` | `Function` | 回调函数 |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[onBeforeUpdate](ComponentBase.md#onbeforeupdate)

#### Defined in

[src/engine/components/ComponentBase.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L161)

___

### serialization

▸ **serialization**(`assets`): [`SerializeComponentBase`](SerializeComponentBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `assets` | [`ISerializeAssetsCollect`](../interfaces/ISerializeAssetsCollect.md) |

#### Returns

[`SerializeComponentBase`](SerializeComponentBase.md)

#### Inherited from

[ComponentBase](ComponentBase.md).[serialization](ComponentBase.md#serialization)

#### Defined in

[src/engine/components/ComponentBase.ts:170](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L170)

___

### unSerialization

▸ **unSerialization**(`componentData`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `componentData` | [`SerializeComponentBase`](SerializeComponentBase.md) |
| `data` | [`UnSerializeData`](UnSerializeData.md) |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[unSerialization](ComponentBase.md#unserialization)

#### Defined in

[src/engine/components/ComponentBase.ts:175](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L175)

___

### setCamera

▸ **setCamera**(`cameraPos`, `lookAt`): `void`

初始化相机数据

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cameraPos` | [`Vector3`](Vector3.md) | 特定对象的坐标 |
| `lookAt` | [`Vector3`](Vector3.md) | 相机朝向 |

#### Returns

`void`

#### Defined in

[src/engine/components/controller/FlyCameraController.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/FlyCameraController.ts#L76)

## Constructors

### constructor

• **new FlyCameraController**()

创建自由相机控制器对象

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/engine/components/controller/FlyCameraController.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/FlyCameraController.ts#L55)
