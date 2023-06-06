# Class: OrbitController

Orbit Camera Controller

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`OrbitController`**

### Constructors

- [constructor](OrbitController.md#constructor)

### Properties

- [object3D](OrbitController.md#object3d)
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

- [init](OrbitController.md#init)
- [stop](OrbitController.md#stop)
- [onLateUpdate](OrbitController.md#onlateupdate)
- [onBeforeUpdate](OrbitController.md#onbeforeupdate)
- [onCompute](OrbitController.md#oncompute)
- [onGraphic](OrbitController.md#ongraphic)
- [onParentChange](OrbitController.md#onparentchange)
- [cloneTo](OrbitController.md#cloneto)
- [destroy](OrbitController.md#destroy)

## Constructors

### constructor

• **new OrbitController**()

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

[src/components/controller/OrbitController.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L57)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

[ComponentBase](ComponentBase.md).[object3D](ComponentBase.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### autoRotate

• **autoRotate**: `boolean` = `false`

Whether to enable automatic rotation

#### Defined in

[src/components/controller/OrbitController.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L21)

___

### autoRotateSpeed

• **autoRotateSpeed**: `number` = `0.1`

Automatic rotation speed coefficient

#### Defined in

[src/components/controller/OrbitController.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L25)

___

### rotateFactor

• **rotateFactor**: `number` = `0.5`

Rotation speed coefficient

#### Defined in

[src/components/controller/OrbitController.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L29)

___

### zoomFactor

• **zoomFactor**: `number` = `0.1`

Scale speed coefficient

#### Defined in

[src/components/controller/OrbitController.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L33)

___

### panFactor

• **panFactor**: `number` = `0.25`

Angle translation velocity coefficient

#### Defined in

[src/components/controller/OrbitController.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L37)

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

### target

• `get` **target**(): [`Vector3`](Vector3.md)

Get the target position

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/components/controller/OrbitController.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L63)

• `set` **target**(`v`): `void`

Set the target position

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/components/controller/OrbitController.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L69)

___

### smooth

• `get` **smooth**(): `number`

Set smoothing coefficient of controller

#### Returns

`number`

#### Defined in

[src/components/controller/OrbitController.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L76)

• `set` **smooth**(`v`): `void`

Get smoothing coefficient of controller

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/components/controller/OrbitController.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L82)

___

### minDistance

• `get` **minDistance**(): `number`

Get the minimum distance between the camera and the target coordinate

**`Default Value`**

1

#### Returns

`number`

#### Defined in

[src/components/controller/OrbitController.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L89)

• `set` **minDistance**(`v`): `void`

Set the minimum distance between the camera and the target position
min value: 0.000002
max value: `this._maxDistance` [maxDistance](OrbitController.md#maxdistance)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/components/controller/OrbitController.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L97)

___

### maxDistance

• `get` **maxDistance**(): `number`

Get the max distance between the camera and the target position

**`Default Value`**

100000

#### Returns

`number`

#### Defined in

[src/components/controller/OrbitController.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L104)

• `set` **maxDistance**(`v`): `void`

Set the max distance between the camera and the target position
min - `this._maxDistance`
max - Infinity

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/components/controller/OrbitController.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L112)

___

### minPolarAngle

• `get` **minPolarAngle**(): `number`

Get the lower elevation limit of the camera from the xz plane

**`Default Value`**

-90

#### Returns

`number`

#### Defined in

[src/components/controller/OrbitController.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L120)

• `set` **minPolarAngle**(`v`): `void`

Set the lower elevation limit of the camera from the xz plane
min - -90
max - [maxPolarAngle](OrbitController.md#maxpolarangle)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/components/controller/OrbitController.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L128)

___

### maxPolarAngle

• `get` **maxPolarAngle**(): `number`

Get the upper elevation limit of the camera from the xz plane

**`Default Value`**

90

#### Returns

`number`

#### Defined in

[src/components/controller/OrbitController.ts:135](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L135)

• `set` **maxPolarAngle**(`v`): `void`

Set the upper elevation limit of the camera to the xz plane
min - less than [minPolarAngle](OrbitController.md#minpolarangle)   
max - 90

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

[src/components/controller/OrbitController.ts:143](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L143)

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

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[stop](ComponentBase.md#stop)

#### Defined in

[src/components/ComponentBase.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L108)

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

[ComponentBase](ComponentBase.md).[onParentChange](ComponentBase.md#onparentchange)

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

[ComponentBase](ComponentBase.md).[cloneTo](ComponentBase.md#cloneto)

#### Defined in

[src/components/ComponentBase.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L123)

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
