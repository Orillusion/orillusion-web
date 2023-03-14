# Class: HoverCameraController

盘旋相机控制器

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`HoverCameraController`**


### Properties

- [object3D](HoverCameraController.md#object3d)
- [serializeTag](HoverCameraController.md#serializetag)
- [camera](HoverCameraController.md#camera)
- [minDistance](HoverCameraController.md#mindistance)
- [maxDistance](HoverCameraController.md#maxdistance)
- [rollSmooth](HoverCameraController.md#rollsmooth)
- [dragSmooth](HoverCameraController.md#dragsmooth)
- [wheelSmooth](HoverCameraController.md#wheelsmooth)
- [wheelStep](HoverCameraController.md#wheelstep)
- [mouseRightFactor](HoverCameraController.md#mouserightfactor)
- [mouseLeftFactor](HoverCameraController.md#mouseleftfactor)
- [smooth](HoverCameraController.md#smooth)
- [distance](HoverCameraController.md#distance)
- [roll](HoverCameraController.md#roll)
- [pitch](HoverCameraController.md#pitch)

### Accessors

- [transform](HoverCameraController.md#transform)
- [enable](HoverCameraController.md#enable)
- [target](HoverCameraController.md#target)

### Methods

- [onVisible](HoverCameraController.md#onvisible)
- [cloneTo](HoverCameraController.md#cloneto)
- [onUpdate](HoverCameraController.md#onupdate)
- [onLateUpdate](HoverCameraController.md#onlateupdate)
- [onBeforeUpdate](HoverCameraController.md#onbeforeupdate)
- [serialization](HoverCameraController.md#serialization)
- [unSerialization](HoverCameraController.md#unserialization)
- [setCamera](HoverCameraController.md#setcamera)
- [focusByBounds](HoverCameraController.md#focusbybounds)

### Constructors

- [constructor](HoverCameraController.md#constructor)

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

### camera

• **camera**: [`Camera3D`](Camera3D.md)

控制器对应的相机组件

#### Defined in

[src/engine/components/controller/HoverCameraController.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/HoverCameraController.ts#L13)

___

### minDistance

• **minDistance**: `number` = `0.1`

鼠标滚轮可操作的最近距离

#### Defined in

[src/engine/components/controller/HoverCameraController.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/HoverCameraController.ts#L18)

___

### maxDistance

• **maxDistance**: `number` = `500`

鼠标滚轮可操作的最远距离

#### Defined in

[src/engine/components/controller/HoverCameraController.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/HoverCameraController.ts#L23)

___

### rollSmooth

• **rollSmooth**: `number` = `15.0`

滚转角 的平滑系数

#### Defined in

[src/engine/components/controller/HoverCameraController.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/HoverCameraController.ts#L28)

___

### dragSmooth

• **dragSmooth**: `number` = `20`

拖拽的平滑系数

#### Defined in

[src/engine/components/controller/HoverCameraController.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/HoverCameraController.ts#L33)

___

### wheelSmooth

• **wheelSmooth**: `number` = `10`

滚动的平滑系数

#### Defined in

[src/engine/components/controller/HoverCameraController.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/HoverCameraController.ts#L38)

___

### wheelStep

• **wheelStep**: `number` = `0.002`

鼠标滚动步进系数

#### Defined in

[src/engine/components/controller/HoverCameraController.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/HoverCameraController.ts#L43)

___

### mouseRightFactor

• **mouseRightFactor**: `number` = `0.5`

左键移动系数

#### Defined in

[src/engine/components/controller/HoverCameraController.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/HoverCameraController.ts#L48)

___

### mouseLeftFactor

• **mouseLeftFactor**: `number` = `20`

左键移动系数

#### Defined in

[src/engine/components/controller/HoverCameraController.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/HoverCameraController.ts#L53)

___

### smooth

• **smooth**: `boolean` = `true`

是否开启平滑模式

#### Defined in

[src/engine/components/controller/HoverCameraController.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/HoverCameraController.ts#L58)

___

### distance

• **distance**: `number` = `10`

相机与目标的距离

#### Defined in

[src/engine/components/controller/HoverCameraController.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/HoverCameraController.ts#L70)

___

### roll

• **roll**: `number` = `0`

滚转角 绕y轴

#### Defined in

[src/engine/components/controller/HoverCameraController.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/HoverCameraController.ts#L76)

___

### pitch

• **pitch**: `number` = `0`

俯视角 绕x轴

#### Defined in

[src/engine/components/controller/HoverCameraController.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/HoverCameraController.ts#L82)

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

### target

• `get` **target**(): [`Vector3`](Vector3.md)

相机朝向

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/components/controller/HoverCameraController.ts:154](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/HoverCameraController.ts#L154)

• `set` **target**(`target`): `void`

设置相机朝向

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/engine/components/controller/HoverCameraController.ts:147](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/HoverCameraController.ts#L147)

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

▸ **setCamera**(`roll`, `pitch`, `distance`, `target?`): `void`

初始化相机

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `roll` | `number` | 滚转角 绕y轴 |
| `pitch` | `number` | 俯视角 绕x轴 |
| `distance` | `number` | 到目标的距离 |
| `target?` | [`Vector3`](Vector3.md) | 目标的三维坐标 |

#### Returns

`void`

#### Defined in

[src/engine/components/controller/HoverCameraController.ts:127](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/HoverCameraController.ts#L127)

___

### focusByBounds

▸ **focusByBounds**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) |

#### Returns

`void`

#### Defined in

[src/engine/components/controller/HoverCameraController.ts:137](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/HoverCameraController.ts#L137)

## Constructors

### constructor

• **new HoverCameraController**()

创建盘旋控制器对象

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/engine/components/controller/HoverCameraController.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/HoverCameraController.ts#L101)
