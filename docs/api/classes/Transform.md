[**@orillusion/core**](../README.md)

***

# Class: Transform

Defined in: [src/components/Transform.ts:20](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L20)

The Transform component contains the position, rotation, and scaling of an object in 3D space.
Each object (Object 3D) has a Transform component

## Extends

- [`ComponentBase`](ComponentBase.md)

## Constructors

### Constructor

> **new Transform**(): `Transform`

Defined in: [src/components/Transform.ts:214](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L214)

#### Returns

`Transform`

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

### \_localRot

> **\_localRot**: [`Vector3`](Vector3.md)

Defined in: [src/components/Transform.ts:99](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L99)

***

### index

> **index**: `number`

Defined in: [src/components/Transform.ts:109](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L109)

***

### index2

> **index2**: `number`

Defined in: [src/components/Transform.ts:110](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L110)

***

### \_worldMatrix

> `readonly` **\_worldMatrix**: [`Matrix4`](Matrix4.md)

Defined in: [src/components/Transform.ts:121](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L121)

***

### static

> **static**: `boolean` = `false`

Defined in: [src/components/Transform.ts:124](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L124)

***

### depthOrder

> **depthOrder**: `number` = `0`

Defined in: [src/components/Transform.ts:125](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L125)

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

> **get** **transform**(): `Transform`

Defined in: [src/components/ComponentBase.ts:89](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L89)

Return the Transform component attached to the Object3D.
Null before the component is attached — `addComponent` assigns
`object3D` only after construction — so constructor-time callers
can probe safely via `this.transform?.`.

##### Returns

`Transform`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`transform`](ComponentBase.md#transform)

***

### localChange

#### Get Signature

> **get** **localChange**(): `boolean`

Defined in: [src/components/Transform.ts:128](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L128)

Whether the local transform is dirty and the world matrix needs recomputing.

##### Returns

`boolean`

#### Set Signature

> **set** **localChange**(`value`): `void`

Defined in: [src/components/Transform.ts:132](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L132)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### targetPos

#### Get Signature

> **get** **targetPos**(): [`Vector3`](Vector3.md)

Defined in: [src/components/Transform.ts:138](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L138)

Optional look-at target position used by orientation helpers.

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **targetPos**(`value`): `void`

Defined in: [src/components/Transform.ts:141](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L141)

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### parent

#### Get Signature

> **get** **parent**(): `Transform`

Defined in: [src/components/Transform.ts:146](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L146)

Parent transform in the hierarchy, or null for a root.

##### Returns

`Transform`

#### Set Signature

> **set** **parent**(`value`): `void`

Defined in: [src/components/Transform.ts:150](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L150)

##### Parameters

###### value

`Transform`

##### Returns

`void`

***

### enable

#### Get Signature

> **get** **enable**(): `boolean`

Defined in: [src/components/Transform.ts:193](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L193)

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

##### Returns

`boolean`

#### Set Signature

> **set** **enable**(`value`): `void`

Defined in: [src/components/Transform.ts:183](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L183)

Enable state; propagates to all child transforms.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`enable`](ComponentBase.md#enable)

***

### scene3D

#### Get Signature

> **get** **scene3D**(): [`Scene3D`](Scene3D.md)

Defined in: [src/components/Transform.ts:198](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L198)

The scene this transform belongs to.

##### Returns

[`Scene3D`](Scene3D.md)

#### Set Signature

> **set** **scene3D**(`value`): `void`

Defined in: [src/components/Transform.ts:202](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L202)

##### Parameters

###### value

[`Scene3D`](Scene3D.md)

##### Returns

`void`

***

### view3D

#### Get Signature

> **get** **view3D**(): [`View3D`](View3D.md)

Defined in: [src/components/Transform.ts:207](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L207)

The view associated with this transform's scene, or null.

##### Returns

[`View3D`](View3D.md)

***

### up

#### Get Signature

> **get** **up**(): [`Vector3`](Vector3.md)

Defined in: [src/components/Transform.ts:256](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L256)

World-space up direction; setting it rotates the object to face that up.

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **up**(`value`): `void`

Defined in: [src/components/Transform.ts:261](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L261)

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### down

#### Get Signature

> **get** **down**(): [`Vector3`](Vector3.md)

Defined in: [src/components/Transform.ts:269](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L269)

World-space down direction; setting it reorients the object.

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **down**(`value`): `void`

Defined in: [src/components/Transform.ts:274](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L274)

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### forward

#### Get Signature

> **get** **forward**(): [`Vector3`](Vector3.md)

Defined in: [src/components/Transform.ts:289](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L289)

World-space forward direction; setting it reorients the object.

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **forward**(`value`): `void`

Defined in: [src/components/Transform.ts:294](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L294)

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### back

#### Get Signature

> **get** **back**(): [`Vector3`](Vector3.md)

Defined in: [src/components/Transform.ts:309](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L309)

World-space back direction; setting it reorients the object.

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **back**(`value`): `void`

Defined in: [src/components/Transform.ts:314](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L314)

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### left

#### Get Signature

> **get** **left**(): [`Vector3`](Vector3.md)

Defined in: [src/components/Transform.ts:322](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L322)

World-space left direction; setting it reorients the object.

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **left**(`value`): `void`

Defined in: [src/components/Transform.ts:327](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L327)

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### right

#### Get Signature

> **get** **right**(): [`Vector3`](Vector3.md)

Defined in: [src/components/Transform.ts:335](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L335)

World-space right direction; setting it reorients the object.

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **right**(`value`): `void`

Defined in: [src/components/Transform.ts:340](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L340)

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### localRotQuat

#### Get Signature

> **get** **localRotQuat**(): [`Quaternion`](Quaternion.md)

Defined in: [src/components/Transform.ts:358](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L358)

The transformation property of the object relative to the parent, stored in the from of a quaternion

##### Returns

[`Quaternion`](Quaternion.md)

#### Set Signature

> **set** **localRotQuat**(`value`): `void`

Defined in: [src/components/Transform.ts:365](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L365)

##### Parameters

###### value

[`Quaternion`](Quaternion.md)

##### Returns

`void`

***

### x

#### Get Signature

> **get** **x**(): `number`

Defined in: [src/components/Transform.ts:519](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L519)

The position of the object relative to its parent X-axis

##### Returns

`number`

#### Set Signature

> **set** **x**(`value`): `void`

Defined in: [src/components/Transform.ts:503](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L503)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### y

#### Get Signature

> **get** **y**(): `number`

Defined in: [src/components/Transform.ts:539](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L539)

The position of the object relative to its parent Y-axis

##### Returns

`number`

#### Set Signature

> **set** **y**(`value`): `void`

Defined in: [src/components/Transform.ts:523](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L523)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### z

#### Get Signature

> **get** **z**(): `number`

Defined in: [src/components/Transform.ts:559](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L559)

The position of the object relative to its parent Y-axis

##### Returns

`number`

#### Set Signature

> **set** **z**(`value`): `void`

Defined in: [src/components/Transform.ts:543](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L543)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### scaleX

#### Get Signature

> **get** **scaleX**(): `number`

Defined in: [src/components/Transform.ts:579](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L579)

The scale of the object relative to its parent X-axis

##### Returns

`number`

#### Set Signature

> **set** **scaleX**(`value`): `void`

Defined in: [src/components/Transform.ts:563](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L563)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### scaleY

#### Get Signature

> **get** **scaleY**(): `number`

Defined in: [src/components/Transform.ts:599](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L599)

The scale of the object relative to its parent Y-axis

##### Returns

`number`

#### Set Signature

> **set** **scaleY**(`value`): `void`

Defined in: [src/components/Transform.ts:583](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L583)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### scaleZ

#### Get Signature

> **get** **scaleZ**(): `number`

Defined in: [src/components/Transform.ts:620](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L620)

The scale of the object relative to its parent Z-axis

##### Returns

`number`

#### Set Signature

> **set** **scaleZ**(`value`): `void`

Defined in: [src/components/Transform.ts:603](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L603)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### rotationX

#### Get Signature

> **get** **rotationX**(): `number`

Defined in: [src/components/Transform.ts:641](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L641)

The rotation of the object relative to its parent X-axis

##### Returns

`number`

#### Set Signature

> **set** **rotationX**(`value`): `void`

Defined in: [src/components/Transform.ts:624](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L624)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### rotationY

#### Get Signature

> **get** **rotationY**(): `number`

Defined in: [src/components/Transform.ts:662](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L662)

The rotation of the object relative to its parent Y-axis

##### Returns

`number`

#### Set Signature

> **set** **rotationY**(`value`): `void`

Defined in: [src/components/Transform.ts:645](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L645)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### rotationZ

#### Get Signature

> **get** **rotationZ**(): `number`

Defined in: [src/components/Transform.ts:683](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L683)

The rotation of the object relative to its parent Z-axis

##### Returns

`number`

#### Set Signature

> **set** **rotationZ**(`value`): `void`

Defined in: [src/components/Transform.ts:666](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L666)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### worldPosition

#### Get Signature

> **get** **worldPosition**(): [`Vector3`](Vector3.md)

Defined in: [src/components/Transform.ts:690](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L690)

world position

##### Returns

[`Vector3`](Vector3.md)

***

### localPosition

#### Get Signature

> **get** **localPosition**(): [`Vector3`](Vector3.md)

Defined in: [src/components/Transform.ts:718](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L718)

The position of an object relative to its parent

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **localPosition**(`v`): `void`

Defined in: [src/components/Transform.ts:697](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L697)

##### Parameters

###### v

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### localRotation

#### Get Signature

> **get** **localRotation**(): [`Vector3`](Vector3.md)

Defined in: [src/components/Transform.ts:750](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L750)

The rotaion vector of an object relative to its parent

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **localRotation**(`v`): `void`

Defined in: [src/components/Transform.ts:722](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L722)

##### Parameters

###### v

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### localScale

#### Get Signature

> **get** **localScale**(): [`Vector3`](Vector3.md)

Defined in: [src/components/Transform.ts:771](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L771)

The scale of an object relative to its parent

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **localScale**(`v`): `void`

Defined in: [src/components/Transform.ts:754](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L754)

##### Parameters

###### v

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### localDetailScale

#### Get Signature

> **get** **localDetailScale**(): [`Vector3`](Vector3.md)

Defined in: [src/components/Transform.ts:777](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L777)

Per-frame continuous scale delta auto-applied by the matrix solver.

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **localDetailScale**(`value`): `void`

Defined in: [src/components/Transform.ts:781](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L781)

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### localDetailRot

#### Get Signature

> **get** **localDetailRot**(): [`Vector3`](Vector3.md)

Defined in: [src/components/Transform.ts:787](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L787)

Per-frame continuous rotation delta auto-applied by the matrix solver.

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **localDetailRot**(`value`): `void`

Defined in: [src/components/Transform.ts:791](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L791)

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### localDetailPos

#### Get Signature

> **get** **localDetailPos**(): [`Vector3`](Vector3.md)

Defined in: [src/components/Transform.ts:797](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L797)

Per-frame continuous translation delta auto-applied by the matrix solver.

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **localDetailPos**(`value`): `void`

Defined in: [src/components/Transform.ts:800](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L800)

##### Parameters

###### value

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

### awake()

> **awake**(): `void`

Defined in: [src/components/Transform.ts:230](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L230)

Lifecycle hook called once when the transform is created.

#### Returns

`void`

***

### start()

> **start**(): `void`

Defined in: [src/components/Transform.ts:233](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L233)

Lifecycle hook called when the transform starts.

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`start`](ComponentBase.md#start)

***

### stop()

> **stop**(): `void`

Defined in: [src/components/Transform.ts:236](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L236)

Lifecycle hook called when the transform stops.

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`stop`](ComponentBase.md#stop)

***

### updateWorldMatrix()

> **updateWorldMatrix**(`force?`): `void`

Defined in: [src/components/Transform.ts:415](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L415)

Update the matrix4 in world space

#### Parameters

##### force?

`boolean` = `false`

#### Returns

`void`

***

### updateChildTransform()

> **updateChildTransform**(): `void`

Defined in: [src/components/Transform.ts:428](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L428)

Recursively update this transform and all descendants' world matrices.

#### Returns

`void`

***

### lookTarget()

> **lookTarget**(`target`, `up?`): `void`

Defined in: [src/components/Transform.ts:449](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L449)

Rotate the object to look at a world-space target from its current position.

#### Parameters

##### target

[`Vector3`](Vector3.md)

world-space point to look at

##### up?

[`Vector3`](Vector3.md) = `Vector3.UP`

up direction

#### Returns

`void`

***

### lookAt()

> **lookAt**(`pos`, `target`, `up?`): `void`

Defined in: [src/components/Transform.ts:459](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L459)

Current object's gaze position (global) (modified by its own global transformation)

#### Parameters

##### pos

[`Vector3`](Vector3.md)

Own position (global)

##### target

[`Vector3`](Vector3.md)

Location of the target (global)

##### up?

[`Vector3`](Vector3.md) = `Vector3.UP`

up direction

#### Returns

`void`

***

### decomposeFromMatrix()

> **decomposeFromMatrix**(`matrix`, `orientationStyle?`): `this`

Defined in: [src/components/Transform.ts:480](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L480)

Set this transform's local position/rotation/scale by decomposing a matrix.

#### Parameters

##### matrix

[`Matrix4`](Matrix4.md)

the matrix to decompose

##### orientationStyle?

`string` = `'eulerAngles'`

decomposition style (defaults to euler angles)

#### Returns

`this`

***

### cloneTo()

> **cloneTo**(`obj`): `void`

Defined in: [src/components/Transform.ts:497](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L497)

Create a new component, copy the properties of the current component, and add it to the target object.

#### Parameters

##### obj

[`Object3D`](Object3D.md)

source Object3D

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`cloneTo`](ComponentBase.md#cloneto)

***

### beforeDestroy()

> **beforeDestroy**(`force?`): `void`

Defined in: [src/components/Transform.ts:807](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L807)

Detach from the parent before the component is destroyed.

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`beforeDestroy`](ComponentBase.md#beforedestroy)

***

### destroy()

> **destroy**(): `void`

Defined in: [src/components/Transform.ts:815](https://github.com/orillusion/orillusion/blob/main/src/components/Transform.ts#L815)

Destroy the transform and free its matrix-table slot.

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`destroy`](ComponentBase.md#destroy)
