[**@orillusion/core**](../README.md)

***

# Class: PropertyAnimation

Defined in: [src/components/anim/curveAnim/PropertyAnimation.ts:11](https://github.com/orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L11)

Attribute Animation Component

## Extends

- [`ComponentBase`](ComponentBase.md)

## Constructors

### Constructor

> **new PropertyAnimation**(): `PropertyAnimation`

Defined in: [src/components/anim/curveAnim/PropertyAnimation.ts:27](https://github.com/orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L27)

#### Returns

`PropertyAnimation`

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

### defaultClip

> **defaultClip**: `string`

Defined in: [src/components/anim/curveAnim/PropertyAnimation.ts:17](https://github.com/orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L17)

name of default animation clip

***

### autoPlay

> **autoPlay**: `boolean`

Defined in: [src/components/anim/curveAnim/PropertyAnimation.ts:21](https://github.com/orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L21)

is it play auto

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

### speed

#### Get Signature

> **get** **speed**(): `number`

Defined in: [src/components/anim/curveAnim/PropertyAnimation.ts:98](https://github.com/orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L98)

get playing speed

##### Returns

`number`

#### Set Signature

> **set** **speed**(`value`): `void`

Defined in: [src/components/anim/curveAnim/PropertyAnimation.ts:91](https://github.com/orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L91)

set playing speed

##### Parameters

###### value

`number`

##### Returns

`void`

***

### currentClip

#### Get Signature

> **get** **currentClip**(): `PropertyAnimClip`

Defined in: [src/components/anim/curveAnim/PropertyAnimation.ts:135](https://github.com/orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L135)

get animation clip which is playing now

##### Returns

`PropertyAnimClip`

***

### time

#### Get Signature

> **get** **time**(): `number`

Defined in: [src/components/anim/curveAnim/PropertyAnimation.ts:142](https://github.com/orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L142)

get time of current animator

##### Returns

`number`

## Methods

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

***

### registerEventKeyFrame()

> **registerEventKeyFrame**(`frame`): `void`

Defined in: [src/components/anim/curveAnim/PropertyAnimation.ts:38](https://github.com/orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L38)

register a event to animator

#### Parameters

##### frame

`AnimatorEventKeyframe`

source AnimatorEventKeyframe

#### Returns

`void`

***

### appendClip()

> **appendClip**(`clip`): `void`

Defined in: [src/components/anim/curveAnim/PropertyAnimation.ts:65](https://github.com/orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L65)

append a perperty animation clip

#### Parameters

##### clip

`PropertyAnimClip`

source PropertyAnimClip

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [src/components/anim/curveAnim/PropertyAnimation.ts:105](https://github.com/orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L105)

stop playing

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`stop`](ComponentBase.md#stop)

***

### toggle()

> **toggle**(): `void`

Defined in: [src/components/anim/curveAnim/PropertyAnimation.ts:112](https://github.com/orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L112)

stop or resume playing

#### Returns

`void`

***

### getClip()

> **getClip**(`name`): `PropertyAnimClip`

Defined in: [src/components/anim/curveAnim/PropertyAnimation.ts:121](https://github.com/orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L121)

get animation clip by clip name

#### Parameters

##### name

`string`

#### Returns

`PropertyAnimClip`

***

### seek()

> **seek**(`time`): `void`

Defined in: [src/components/anim/curveAnim/PropertyAnimation.ts:150](https://github.com/orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L150)

seek the animation to assign time

#### Parameters

##### time

`number`

assign time

#### Returns

`void`

***

### play()

> **play**(`name`, `reset?`): `PropertyAnimClip`

Defined in: [src/components/anim/curveAnim/PropertyAnimation.ts:160](https://github.com/orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L160)

play animation by given name

#### Parameters

##### name

`string`

animation name

##### reset?

`boolean` = `true`

if true, play the animation from time 0

#### Returns

`PropertyAnimClip`

***

### copyComponent()

> **copyComponent**(`from`): `this`

Defined in: [src/components/anim/curveAnim/PropertyAnimation.ts:179](https://github.com/orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L179)

#### Parameters

##### from

`this`

#### Returns

`this`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`copyComponent`](ComponentBase.md#copycomponent)

***

### cloneTo()

> **cloneTo**(`obj`): `void`

Defined in: [src/components/anim/curveAnim/PropertyAnimation.ts:194](https://github.com/orillusion/orillusion/blob/main/src/components/anim/curveAnim/PropertyAnimation.ts#L194)

Create a new PropertyAnimation component, copy the properties of the current component, 
and add them to the target object.

#### Parameters

##### obj

[`Object3D`](Object3D.md)

target object3D

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`cloneTo`](ComponentBase.md#cloneto)
