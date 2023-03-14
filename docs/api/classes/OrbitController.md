# Class: OrbitController

轨道相机

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`OrbitController`**


### Properties

- [object3D](OrbitController.md#object3d)
- [serializeTag](OrbitController.md#serializetag)
- [camera](OrbitController.md#camera)
- [autoRotate](OrbitController.md#autorotate)
- [autoRotateSpeed](OrbitController.md#autorotatespeed)
- [rotateFactor](OrbitController.md#rotatefactor)
- [zoomFactor](OrbitController.md#zoomfactor)
- [panFactor](OrbitController.md#panfactor)

### Accessors

- [transform](OrbitController.md#transform)
- [enable](OrbitController.md#enable)
- [target](OrbitController.md#target)
- [smooth](OrbitController.md#smooth)
- [minDistance](OrbitController.md#mindistance)
- [maxDistance](OrbitController.md#maxdistance)
- [minPolarAngle](OrbitController.md#minpolarangle)
- [maxPolarAngle](OrbitController.md#maxpolarangle)

### Methods

- [onVisible](OrbitController.md#onvisible)
- [cloneTo](OrbitController.md#cloneto)
- [destroy](OrbitController.md#destroy)
- [onUpdate](OrbitController.md#onupdate)
- [onLateUpdate](OrbitController.md#onlateupdate)
- [onBeforeUpdate](OrbitController.md#onbeforeupdate)
- [serialization](OrbitController.md#serialization)
- [unSerialization](OrbitController.md#unserialization)
- [onPointerLeave](OrbitController.md#onpointerleave)

### Constructors

- [constructor](OrbitController.md#constructor)

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

[src/engine/components/controller/OrbitController.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/OrbitController.ts#L17)

___

### autoRotate

• **autoRotate**: `boolean` = `false`

是否开启自动旋转

#### Defined in

[src/engine/components/controller/OrbitController.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/OrbitController.ts#L21)

___

### autoRotateSpeed

• **autoRotateSpeed**: `number` = `0.1`

自动旋转速度系数

#### Defined in

[src/engine/components/controller/OrbitController.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/OrbitController.ts#L25)

___

### rotateFactor

• **rotateFactor**: `number` = `0.5`

旋转速度系数

#### Defined in

[src/engine/components/controller/OrbitController.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/OrbitController.ts#L29)

___

### zoomFactor

• **zoomFactor**: `number` = `0.1`

缩放速度系数

#### Defined in

[src/engine/components/controller/OrbitController.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/OrbitController.ts#L33)

___

### panFactor

• **panFactor**: `number` = `0.25`

视角平移速度系数

#### Defined in

[src/engine/components/controller/OrbitController.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/OrbitController.ts#L37)

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

获取控制器的目标坐标

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/engine/components/controller/OrbitController.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/OrbitController.ts#L63)

• `set` **target**(`v`): `void`

设置控制器的目标

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/engine/components/controller/OrbitController.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/OrbitController.ts#L69)

___

### smooth

• `get` **smooth**(): `number`

获取视角平滑系数

#### Returns

`number`

#### Defined in

[src/engine/components/controller/OrbitController.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/OrbitController.ts#L75)

• `set` **smooth**(`v`): `void`

设置视角平滑系数

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/components/controller/OrbitController.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/OrbitController.ts#L81)

___

### minDistance

• `get` **minDistance**(): `number`

获取相机离目标坐标的最小距离

**`Default Value`**

1

#### Returns

`number`

#### Defined in

[src/engine/components/controller/OrbitController.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/OrbitController.ts#L88)

• `set` **minDistance**(`v`): `void`

设置相机离目标坐标的最小距离   
最小值 - 0.000002
最大值 - 不能超过 [maxDistance](OrbitController.md#maxdistance)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/components/controller/OrbitController.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/OrbitController.ts#L96)

___

### maxDistance

• `get` **maxDistance**(): `number`

获取相机离目标坐标的最大距离

**`Default Value`**

100000

#### Returns

`number`

#### Defined in

[src/engine/components/controller/OrbitController.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/OrbitController.ts#L103)

• `set` **maxDistance**(`v`): `void`

设置相机离目标坐标的最大距离   
最小值 - 不能小于 [minDistance](OrbitController.md#mindistance)
最大值 - Infinity

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/components/controller/OrbitController.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/OrbitController.ts#L111)

___

### minPolarAngle

• `get` **minPolarAngle**(): `number`

获取相机跟xz平面的仰角下限

**`Default Value`**

-90

#### Returns

`number`

#### Defined in

[src/engine/components/controller/OrbitController.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/OrbitController.ts#L118)

• `set` **minPolarAngle**(`v`): `void`

设置相机跟xz平面的仰角下限
最小值 - -90
最大值 - 不超过 [maxPolarAngle](OrbitController.md#maxpolarangle)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/components/controller/OrbitController.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/OrbitController.ts#L126)

___

### maxPolarAngle

• `get` **maxPolarAngle**(): `number`

获取相机跟xz平面的仰角上限

**`Default Value`**

90

#### Returns

`number`

#### Defined in

[src/engine/components/controller/OrbitController.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/OrbitController.ts#L133)

• `set` **maxPolarAngle**(`v`): `void`

设置相机跟xz平面的仰角上限
最小值 - 不小于 [minPolarAngle](OrbitController.md#minpolarangle)   
最大值 - 90

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/components/controller/OrbitController.ts:141](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/OrbitController.ts#L141)

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

### destroy

▸ **destroy**(): `void`

移除组件时候调用

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[destroy](ComponentBase.md#destroy)

#### Defined in

[src/engine/components/ComponentBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/ComponentBase.ts#L119)

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

### onPointerLeave

▸ **onPointerLeave**(): `void`

#### Returns

`void`

#### Defined in

[src/engine/components/controller/OrbitController.ts:253](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/OrbitController.ts#L253)

## Constructors

### constructor

• **new OrbitController**()

创建一个轨道相机控制器

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/engine/components/controller/OrbitController.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/engine/components/controller/OrbitController.ts#L57)
