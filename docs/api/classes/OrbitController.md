[**@orillusion/core**](../README.md)

***

# Class: OrbitController

Defined in: [src/components/controller/OrbitController.ts:14](https://github.com/orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L14)

Orbit Camera Controller

## Extends

- [`ComponentBase`](ComponentBase.md)

## Constructors

### Constructor

> **new OrbitController**(): `OrbitController`

Defined in: [src/components/controller/OrbitController.ts:58](https://github.com/orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L58)

#### Returns

`OrbitController`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`constructor`](ComponentBase.md#constructor)

## Properties

### object3D

> **object3D**: [`Object3D`](Object3D.md) = `null`

Defined in: [src/components/ComponentBase.ts:29](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L29)

owner object3D

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`object3D`](ComponentBase.md#object3d)

***

### isDestroyed

> **isDestroyed**: `boolean` = `false`

Defined in: [src/components/ComponentBase.ts:77](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L77)

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`isDestroyed`](ComponentBase.md#isdestroyed)

***

### autoRotate

> **autoRotate**: `boolean` = `false`

Defined in: [src/components/controller/OrbitController.ts:22](https://github.com/orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L22)

Whether to enable automatic rotation

***

### autoRotateSpeed

> **autoRotateSpeed**: `number` = `0.1`

Defined in: [src/components/controller/OrbitController.ts:26](https://github.com/orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L26)

Automatic rotation speed coefficient

***

### rotateFactor

> **rotateFactor**: `number` = `0.5`

Defined in: [src/components/controller/OrbitController.ts:30](https://github.com/orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L30)

Rotation speed coefficient

***

### zoomFactor

> **zoomFactor**: `number` = `0.1`

Defined in: [src/components/controller/OrbitController.ts:34](https://github.com/orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L34)

Scale speed coefficient

***

### panFactor

> **panFactor**: `number` = `0.25`

Defined in: [src/components/controller/OrbitController.ts:38](https://github.com/orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L38)

Angle translation velocity coefficient

## Accessors

### visibleLayer

#### Get Signature

> **get** **visibleLayer**(): `number`

Defined in: [src/components/ComponentBase.ts:46](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L46)

Composition-layer membership bitmask. The pass / camera /
collector filters via

    (component.visibleLayer & pass.layerMask & camera.cullingMask) !== 0

Defaults to [VisibleLayer.Default](../@orillusion/namespaces/VisibleLayer/variables/Default.md) (bit 0) so a fresh
subclass is visible to passes whose `layerMask` is
[VisibleLayer.All](../@orillusion/namespaces/VisibleLayer/variables/All.md) (which includes bit 0). Application code
can assign project-specific bits (1..31) to organise the scene
into composition layers.

##### Returns

`number`

#### Set Signature

> **set** **visibleLayer**(`value`): `void`

Defined in: [src/components/ComponentBase.ts:50](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L50)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`visibleLayer`](ComponentBase.md#visiblelayer)

***

### eventDispatcher

#### Get Signature

> **get** **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

Defined in: [src/components/ComponentBase.ts:63](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L63)

##### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Set Signature

> **set** **eventDispatcher**(`value`): `void`

Defined in: [src/components/ComponentBase.ts:68](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L68)

##### Parameters

###### value

[`CEventDispatcher`](CEventDispatcher.md)

##### Returns

`void`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`eventDispatcher`](ComponentBase.md#eventdispatcher)

***

### isStart

#### Get Signature

> **get** **isStart**(): `boolean`

Defined in: [src/components/ComponentBase.ts:79](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L79)

##### Returns

`boolean`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`isStart`](ComponentBase.md#isstart)

***

### transform

#### Get Signature

> **get** **transform**(): [`Transform`](Transform.md)

Defined in: [src/components/ComponentBase.ts:89](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L89)

Return the Transform component attached to the Object3D.
Null before the component is attached — `addComponent` assigns
`object3D` only after construction — so constructor-time callers
can probe safely via `this.transform?.`.

##### Returns

[`Transform`](Transform.md)

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`transform`](ComponentBase.md#transform)

***

### enable

#### Get Signature

> **get** **enable**(): `boolean`

Defined in: [src/components/ComponentBase.ts:113](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

##### Returns

`boolean`

#### Set Signature

> **set** **enable**(`value`): `void`

Defined in: [src/components/ComponentBase.ts:96](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L96)

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`enable`](ComponentBase.md#enable)

***

### target

#### Get Signature

> **get** **target**(): [`Vector3`](Vector3.md)

Defined in: [src/components/controller/OrbitController.ts:64](https://github.com/orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L64)

Get the target position

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **target**(`v`): `void`

Defined in: [src/components/controller/OrbitController.ts:70](https://github.com/orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L70)

Set the target position

##### Parameters

###### v

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### smooth

#### Get Signature

> **get** **smooth**(): `number`

Defined in: [src/components/controller/OrbitController.ts:77](https://github.com/orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L77)

Get smoothing coefficient of controller

##### Returns

`number`

#### Set Signature

> **set** **smooth**(`v`): `void`

Defined in: [src/components/controller/OrbitController.ts:83](https://github.com/orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L83)

Set smoothing coefficient of controller

##### Parameters

###### v

`number`

##### Returns

`void`

***

### minDistance

#### Get Signature

> **get** **minDistance**(): `number`

Defined in: [src/components/controller/OrbitController.ts:90](https://github.com/orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L90)

Get the minimum distance between the camera and the target coordinate

##### Default Value

```ts
1
```

##### Returns

`number`

#### Set Signature

> **set** **minDistance**(`v`): `void`

Defined in: [src/components/controller/OrbitController.ts:98](https://github.com/orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L98)

Set the minimum distance between the camera and the target position
min value: 0.000002
max value: `this._maxDistance` [maxDistance](#maxdistance)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### maxDistance

#### Get Signature

> **get** **maxDistance**(): `number`

Defined in: [src/components/controller/OrbitController.ts:105](https://github.com/orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L105)

Get the max distance between the camera and the target position

##### Default Value

```ts
100000
```

##### Returns

`number`

#### Set Signature

> **set** **maxDistance**(`v`): `void`

Defined in: [src/components/controller/OrbitController.ts:113](https://github.com/orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L113)

Set the max distance between the camera and the target position
min - `this._maxDistance`
max - Infinity

##### Parameters

###### v

`number`

##### Returns

`void`

***

### minPolarAngle

#### Get Signature

> **get** **minPolarAngle**(): `number`

Defined in: [src/components/controller/OrbitController.ts:121](https://github.com/orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L121)

Get the lower elevation limit of the camera from the xz plane

##### Default Value

```ts
-90
```

##### Returns

`number`

#### Set Signature

> **set** **minPolarAngle**(`v`): `void`

Defined in: [src/components/controller/OrbitController.ts:129](https://github.com/orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L129)

Set the lower elevation limit of the camera from the xz plane
min - -90
max - [maxPolarAngle](#maxpolarangle)

##### Parameters

###### v

`number`

##### Returns

`void`

***

### maxPolarAngle

#### Get Signature

> **get** **maxPolarAngle**(): `number`

Defined in: [src/components/controller/OrbitController.ts:136](https://github.com/orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L136)

Get the upper elevation limit of the camera from the xz plane

##### Default Value

```ts
90
```

##### Returns

`number`

#### Set Signature

> **set** **maxPolarAngle**(`v`): `void`

Defined in: [src/components/controller/OrbitController.ts:144](https://github.com/orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L144)

Set the upper elevation limit of the camera to the xz plane
min - less than [minPolarAngle](#minpolarangle)   
max - 90

##### Parameters

###### v

`number`

##### Returns

`void`

***

### spherical

#### Get Signature

> **get** **spherical**(): `Spherical`

Defined in: [src/components/controller/OrbitController.ts:148](https://github.com/orillusion/orillusion/blob/main/src/components/controller/OrbitController.ts#L148)

##### Returns

`Spherical`

## Methods

### init()

> **init**(`param?`): `void`

Defined in: [src/components/ComponentBase.ts:161](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L161)

#### Parameters

##### param?

`any`

#### Returns

`void`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`init`](ComponentBase.md#init)

***

### stop()

> **stop**(): `void`

Defined in: [src/components/ComponentBase.ts:163](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L163)

#### Returns

`void`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`stop`](ComponentBase.md#stop)

***

### onLateUpdate()?

> `optional` **onLateUpdate**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:167](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L167)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onLateUpdate`](ComponentBase.md#onlateupdate)

***

### onBeforeUpdate()?

> `optional` **onBeforeUpdate**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:168](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L168)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onBeforeUpdate`](ComponentBase.md#onbeforeupdate)

***

### onCompute()?

> `optional` **onCompute**(`view?`, `command?`): `any`

Defined in: [src/components/ComponentBase.ts:169](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L169)

#### Parameters

##### view?

[`View3D`](View3D.md)

##### command?

`GPUCommandEncoder`

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onCompute`](ComponentBase.md#oncompute)

***

### onGraphic()?

> `optional` **onGraphic**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:170](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L170)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onGraphic`](ComponentBase.md#ongraphic)

***

### onParentChange()?

> `optional` **onParentChange**(`lastParent?`, `currentParent?`): `any`

Defined in: [src/components/ComponentBase.ts:171](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L171)

#### Parameters

##### lastParent?

[`Object3D`](Object3D.md)

##### currentParent?

[`Object3D`](Object3D.md)

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onParentChange`](ComponentBase.md#onparentchange)

***

### onAddChild()?

> `optional` **onAddChild**(`child`): `any`

Defined in: [src/components/ComponentBase.ts:172](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L172)

#### Parameters

##### child

[`Object3D`](Object3D.md)

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onAddChild`](ComponentBase.md#onaddchild)

***

### onRemoveChild()?

> `optional` **onRemoveChild**(`child`): `any`

Defined in: [src/components/ComponentBase.ts:173](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L173)

#### Parameters

##### child

[`Object3D`](Object3D.md)

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onRemoveChild`](ComponentBase.md#onremovechild)

***

### cloneTo()

> **cloneTo**(`obj`): `void`

Defined in: [src/components/ComponentBase.ts:180](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L180)

clone component data to target object3D

#### Parameters

##### obj

[`Object3D`](Object3D.md)

target object3D

#### Returns

`void`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`cloneTo`](ComponentBase.md#cloneto)

***

### copyComponent()

> **copyComponent**(`from`): `this`

Defined in: [src/components/ComponentBase.ts:182](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L182)

#### Parameters

##### from

`this`

#### Returns

`this`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`copyComponent`](ComponentBase.md#copycomponent)

***

### beforeDestroy()

> **beforeDestroy**(`force?`): `void`

Defined in: [src/components/ComponentBase.ts:249](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L249)

before release this component, object refrences are not be set null now.

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`beforeDestroy`](ComponentBase.md#beforedestroy)

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [src/components/ComponentBase.ts:256](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L256)

release this component

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`destroy`](ComponentBase.md#destroy)
