# Class: OrbitController

Orbit Camera Controller

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`OrbitController`**

### Constructors

- [constructor](OrbitController.md#constructor)

### Properties

- [object3D](OrbitController.md#object3d)
- [isDestroyed](OrbitController.md#isdestroyed)
- [autoRotate](OrbitController.md#autorotate)
- [autoRotateSpeed](OrbitController.md#autorotatespeed)
- [rotateFactor](OrbitController.md#rotatefactor)
- [zoomFactor](OrbitController.md#zoomfactor)
- [panFactor](OrbitController.md#panfactor)

### Accessors

- [eventDispatcher](OrbitController.md#eventdispatcher)
- [isStart](OrbitController.md#isstart)
- [transform](OrbitController.md#transform)
- [enable](OrbitController.md#enable)
- [target](OrbitController.md#target)
- [smooth](OrbitController.md#smooth)
- [minDistance](OrbitController.md#mindistance)
- [maxDistance](OrbitController.md#maxdistance)
- [minPolarAngle](OrbitController.md#minpolarangle)
- [maxPolarAngle](OrbitController.md#maxpolarangle)
- [spherical](OrbitController.md#spherical)

### Methods

- [init](OrbitController.md#init)
- [stop](OrbitController.md#stop)
- [onLateUpdate](OrbitController.md#onlateupdate)
- [onBeforeUpdate](OrbitController.md#onbeforeupdate)
- [onCompute](OrbitController.md#oncompute)
- [onGraphic](OrbitController.md#ongraphic)
- [onParentChange](OrbitController.md#onparentchange)
- [onAddChild](OrbitController.md#onaddchild)
- [onRemoveChild](OrbitController.md#onremovechild)
- [cloneTo](OrbitController.md#cloneto)
- [copyComponent](OrbitController.md#copycomponent)
- [beforeDestroy](OrbitController.md#beforedestroy)
- [destroy](OrbitController.md#destroy)

## Constructors

### constructor

• **new OrbitController**(): [`OrbitController`](OrbitController.md)

#### Returns

[`OrbitController`](OrbitController.md)

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

### isDestroyed

• `Optional` **isDestroyed**: `boolean`

#### Inherited from

[ComponentBase](ComponentBase.md).[isDestroyed](ComponentBase.md#isdestroyed)

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

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

#### Returns

`number`

**`Default Value`**

```ts
1
```

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

#### Returns

`number`

**`Default Value`**

```ts
100000
```

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

#### Returns

`number`

**`Default Value`**

```ts
-90
```

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

#### Returns

`number`

**`Default Value`**

```ts
90
```

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

___

### spherical

• `get` **spherical**(): `Spherical`

#### Returns

`Spherical`

#### Defined in

[src/components/controller/OrbitController.ts:147](https://github.com/Orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L147)

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

[src/components/ComponentBase.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L112)

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

### onLateUpdate

▸ **onLateUpdate**(`view?`): `any`

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

▸ **onBeforeUpdate**(`view?`): `any`

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

▸ **onCompute**(`view?`, `command?`): `any`

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

▸ **onGraphic**(`view?`): `any`

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

### onParentChange

▸ **onParentChange**(`lastParent?`, `currentParent?`): `any`

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

[src/components/ComponentBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L122)

___

### onAddChild

▸ **onAddChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onAddChild](ComponentBase.md#onaddchild)

#### Defined in

[src/components/ComponentBase.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L123)

___

### onRemoveChild

▸ **onRemoveChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onRemoveChild](ComponentBase.md#onremovechild)

#### Defined in

[src/components/ComponentBase.ts:124](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L124)

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

[src/components/ComponentBase.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L131)

___

### copyComponent

▸ **copyComponent**(`from`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `this` |

#### Returns

`this`

#### Inherited from

[ComponentBase](ComponentBase.md).[copyComponent](ComponentBase.md#copycomponent)

#### Defined in

[src/components/ComponentBase.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L133)

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

#### Inherited from

[ComponentBase](ComponentBase.md).[beforeDestroy](ComponentBase.md#beforedestroy)

#### Defined in

[src/components/ComponentBase.ts:200](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L200)

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

[src/components/ComponentBase.ts:207](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L207)
