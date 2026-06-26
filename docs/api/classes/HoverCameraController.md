[**@orillusion/core**](../README.md)

***

# Class: HoverCameraController

Defined in: [src/components/controller/HoverCameraController.ts:18](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L18)

Hovering camera controller

## Extends

- [`ComponentBase`](ComponentBase.md)

## Constructors

### Constructor

> **new HoverCameraController**(): `HoverCameraController`

Defined in: [src/components/controller/HoverCameraController.ts:130](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L130)

#### Returns

`HoverCameraController`

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

### camera

> **camera**: [`Camera3D`](Camera3D.md)

Defined in: [src/components/controller/HoverCameraController.ts:22](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L22)

camera controlling

***

### minDistance

> **minDistance**: `number` = `0.1`

Defined in: [src/components/controller/HoverCameraController.ts:27](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L27)

The closest distance that the mouse wheel can operate

***

### maxDistance

> **maxDistance**: `number` = `500`

Defined in: [src/components/controller/HoverCameraController.ts:32](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L32)

The farthest distance that the mouse wheel can operate

***

### rollSmooth

> **rollSmooth**: `number` = `15.0`

Defined in: [src/components/controller/HoverCameraController.ts:37](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L37)

Smoothing coefficient of rolling angle

***

### dragSmooth

> **dragSmooth**: `number` = `20`

Defined in: [src/components/controller/HoverCameraController.ts:42](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L42)

Smoothing coefficient of dragging

***

### wheelSmooth

> **wheelSmooth**: `number` = `10`

Defined in: [src/components/controller/HoverCameraController.ts:47](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L47)

Smoothing coefficient of rolling

***

### wheelStep

> **wheelStep**: `number` = `0.002`

Defined in: [src/components/controller/HoverCameraController.ts:52](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L52)

Mouse scrolling step coefficient

***

### mouseRightFactor

> **mouseRightFactor**: `number` = `0.25`

Defined in: [src/components/controller/HoverCameraController.ts:57](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L57)

Right mouse movement coefficient

***

### mouseLeftFactor

> **mouseLeftFactor**: `number` = `20`

Defined in: [src/components/controller/HoverCameraController.ts:62](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L62)

Left mouse movement coefficient

***

### smooth

> **smooth**: `boolean` = `true`

Defined in: [src/components/controller/HoverCameraController.ts:67](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L67)

Whether to enable smooth mode

***

### distance

> **distance**: `number` = `10`

Defined in: [src/components/controller/HoverCameraController.ts:79](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L79)

Distance between camera and target

***

### roll

> **roll**: `number` = `0`

Defined in: [src/components/controller/HoverCameraController.ts:85](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L85)

Roll angle around y-axis

***

### pitch

> **pitch**: `number` = `0`

Defined in: [src/components/controller/HoverCameraController.ts:91](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L91)

Pitch angle around x-axis

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

### bottomClamp

#### Get Signature

> **get** **bottomClamp**(): `number`

Defined in: [src/components/controller/HoverCameraController.ts:109](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L109)

Max angle of pitch

##### Returns

`number`

#### Set Signature

> **set** **bottomClamp**(`value`): `void`

Defined in: [src/components/controller/HoverCameraController.ts:112](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L112)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### topClamp

#### Get Signature

> **get** **topClamp**(): `number`

Defined in: [src/components/controller/HoverCameraController.ts:118](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L118)

Min angle of pitch

##### Returns

`number`

#### Set Signature

> **set** **topClamp**(`value`): `void`

Defined in: [src/components/controller/HoverCameraController.ts:121](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L121)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### target

#### Get Signature

> **get** **target**(): [`Vector3`](Vector3.md)

Defined in: [src/components/controller/HoverCameraController.ts:203](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L203)

Get target position

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **target**(`target`): `void`

Defined in: [src/components/controller/HoverCameraController.ts:195](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L195)

Set target position

##### Parameters

###### target

[`Vector3`](Vector3.md)

##### Returns

`void`

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

### onEnable()?

> `optional` **onEnable**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:164](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L164)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onEnable`](ComponentBase.md#onenable)

***

### onDisable()?

> `optional` **onDisable**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:165](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L165)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onDisable`](ComponentBase.md#ondisable)

***

### onUpdate()?

> `optional` **onUpdate**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:166](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L166)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`any`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`onUpdate`](ComponentBase.md#onupdate)

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

### flowTarget()

> **flowTarget**(`target`, `offset?`): `void`

Defined in: [src/components/controller/HoverCameraController.ts:158](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L158)

#### Parameters

##### target

[`Object3D`](Object3D.md)

##### offset?

[`Vector3`](Vector3.md) = `Vector3.ZERO`

#### Returns

`void`

***

### getFlowTarget()

> **getFlowTarget**(): [`Object3D`](Object3D.md)

Defined in: [src/components/controller/HoverCameraController.ts:164](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L164)

#### Returns

[`Object3D`](Object3D.md)

***

### setCamera()

> **setCamera**(`roll`, `pitch`, `distance`, `target?`): `void`

Defined in: [src/components/controller/HoverCameraController.ts:175](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L175)

Initialize Camera

#### Parameters

##### roll

`number`

Roll angle around y-axis

##### pitch

`number`

Pitch angle around x-axis

##### distance

`number`

max distance to target

##### target?

[`Vector3`](Vector3.md)

coordinates of the target

#### Returns

`void`

***

### focusByBounds()

> **focusByBounds**(`obj`): `void`

Defined in: [src/components/controller/HoverCameraController.ts:187](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L187)

#### Parameters

##### obj

[`Object3D`](Object3D.md)

#### Returns

`void`

***

### onBeforeUpdate()

> **onBeforeUpdate**(`view?`): `void`

Defined in: [src/components/controller/HoverCameraController.ts:258](https://github.com/orillusion/orillusion/blob/main/src/components/controller/HoverCameraController.ts#L258)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`onBeforeUpdate`](ComponentBase.md#onbeforeupdate)
