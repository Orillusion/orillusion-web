[**@orillusion/media-extention**](../README.md)

***

# Class: PositionAudio

Defined in: [packages/media-extention/PositionAudio.ts:8](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L8)

Dynamic audio component, with volume varying based on the relative position of the monitor

## Extends

- [`StaticAudio`](StaticAudio.md)

## Constructors

### Constructor

> **new PositionAudio**(): `PositionAudio`

Defined in: [packages/media-extention/PositionAudio.ts:14](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L14)

#### Returns

`PositionAudio`

#### Overrides

[`StaticAudio`](StaticAudio.md).[`constructor`](StaticAudio.md#constructor)

## Properties

### object3D

> **object3D**: `Object3D` = `null`

Defined in: [src/components/ComponentBase.ts:29](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L29)

owner object3D

#### Inherited from

[`StaticAudio`](StaticAudio.md).[`object3D`](StaticAudio.md#object3d)

***

### isDestroyed

> **isDestroyed**: `boolean` = `false`

Defined in: [src/components/ComponentBase.ts:77](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L77)

#### Inherited from

[`StaticAudio`](StaticAudio.md).[`isDestroyed`](StaticAudio.md#isdestroyed)

***

### panner

> **panner**: `PannerNode`

Defined in: [packages/media-extention/PositionAudio.ts:9](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L9)

***

### context

> **context**: `AudioContext` = `null`

Defined in: [packages/media-extention/StaticAudio.ts:9](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L9)

#### Inherited from

[`StaticAudio`](StaticAudio.md).[`context`](StaticAudio.md#context)

***

### gainNode

> **gainNode**: `GainNode` = `null`

Defined in: [packages/media-extention/StaticAudio.ts:10](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L10)

#### Inherited from

[`StaticAudio`](StaticAudio.md).[`gainNode`](StaticAudio.md#gainnode)

***

### source

> **source**: `AudioBufferSourceNode` = `null`

Defined in: [packages/media-extention/StaticAudio.ts:11](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L11)

#### Inherited from

[`StaticAudio`](StaticAudio.md).[`source`](StaticAudio.md#source)

***

### playing

> **playing**: `boolean` = `false`

Defined in: [packages/media-extention/StaticAudio.ts:16](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L16)

#### Inherited from

[`StaticAudio`](StaticAudio.md).[`playing`](StaticAudio.md#playing)

## Accessors

### visibleLayer

#### Get Signature

> **get** **visibleLayer**(): `number`

Defined in: [src/components/ComponentBase.ts:46](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L46)

Composition-layer membership bitmask. The pass / camera /
collector filters via

    (component.visibleLayer & pass.layerMask & camera.cullingMask) !== 0

Defaults to VisibleLayer.Default (bit 0) so a fresh
subclass is visible to passes whose `layerMask` is
VisibleLayer.All (which includes bit 0). Application code
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

[`StaticAudio`](StaticAudio.md).[`visibleLayer`](StaticAudio.md#visiblelayer)

***

### eventDispatcher

#### Get Signature

> **get** **eventDispatcher**(): `CEventDispatcher`

Defined in: [src/components/ComponentBase.ts:63](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L63)

##### Returns

`CEventDispatcher`

#### Set Signature

> **set** **eventDispatcher**(`value`): `void`

Defined in: [src/components/ComponentBase.ts:68](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L68)

##### Parameters

###### value

`CEventDispatcher`

##### Returns

`void`

#### Inherited from

[`StaticAudio`](StaticAudio.md).[`eventDispatcher`](StaticAudio.md#eventdispatcher)

***

### isStart

#### Get Signature

> **get** **isStart**(): `boolean`

Defined in: [src/components/ComponentBase.ts:79](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L79)

##### Returns

`boolean`

#### Inherited from

[`StaticAudio`](StaticAudio.md).[`isStart`](StaticAudio.md#isstart)

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

[`StaticAudio`](StaticAudio.md).[`transform`](StaticAudio.md#transform)

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

[`StaticAudio`](StaticAudio.md).[`enable`](StaticAudio.md#enable)

***

### refDistance

#### Get Signature

> **get** **refDistance**(): `number`

Defined in: [packages/media-extention/PositionAudio.ts:99](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L99)

##### Returns

`number`

#### Set Signature

> **set** **refDistance**(`value`): `void`

Defined in: [packages/media-extention/PositionAudio.ts:102](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L102)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### rolloffFactor

#### Get Signature

> **get** **rolloffFactor**(): `number`

Defined in: [packages/media-extention/PositionAudio.ts:108](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L108)

##### Returns

`number`

#### Set Signature

> **set** **rolloffFactor**(`value`): `void`

Defined in: [packages/media-extention/PositionAudio.ts:111](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L111)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### distanceModel

#### Get Signature

> **get** **distanceModel**(): `DistanceModelType`

Defined in: [packages/media-extention/PositionAudio.ts:114](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L114)

##### Returns

`DistanceModelType`

#### Set Signature

> **set** **distanceModel**(`value`): `void`

Defined in: [packages/media-extention/PositionAudio.ts:117](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L117)

##### Parameters

###### value

`DistanceModelType`

##### Returns

`void`

***

### maxDistance

#### Get Signature

> **get** **maxDistance**(): `number`

Defined in: [packages/media-extention/PositionAudio.ts:120](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L120)

##### Returns

`number`

#### Set Signature

> **set** **maxDistance**(`value`): `void`

Defined in: [packages/media-extention/PositionAudio.ts:123](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L123)

##### Parameters

###### value

`number`

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

[`StaticAudio`](StaticAudio.md).[`init`](StaticAudio.md#init)

***

### onEnable()?

> `optional` **onEnable**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:164](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L164)

#### Parameters

##### view?

`View3D`

#### Returns

`any`

#### Inherited from

[`StaticAudio`](StaticAudio.md).[`onEnable`](StaticAudio.md#onenable)

***

### onDisable()?

> `optional` **onDisable**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:165](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L165)

#### Parameters

##### view?

`View3D`

#### Returns

`any`

#### Inherited from

[`StaticAudio`](StaticAudio.md).[`onDisable`](StaticAudio.md#ondisable)

***

### onLateUpdate()?

> `optional` **onLateUpdate**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:167](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L167)

#### Parameters

##### view?

`View3D`

#### Returns

`any`

#### Inherited from

[`StaticAudio`](StaticAudio.md).[`onLateUpdate`](StaticAudio.md#onlateupdate)

***

### onBeforeUpdate()?

> `optional` **onBeforeUpdate**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:168](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L168)

#### Parameters

##### view?

`View3D`

#### Returns

`any`

#### Inherited from

[`StaticAudio`](StaticAudio.md).[`onBeforeUpdate`](StaticAudio.md#onbeforeupdate)

***

### onCompute()?

> `optional` **onCompute**(`view?`, `command?`): `any`

Defined in: [src/components/ComponentBase.ts:169](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L169)

#### Parameters

##### view?

`View3D`

##### command?

`GPUCommandEncoder`

#### Returns

`any`

#### Inherited from

[`StaticAudio`](StaticAudio.md).[`onCompute`](StaticAudio.md#oncompute)

***

### onGraphic()?

> `optional` **onGraphic**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:170](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L170)

#### Parameters

##### view?

`View3D`

#### Returns

`any`

#### Inherited from

[`StaticAudio`](StaticAudio.md).[`onGraphic`](StaticAudio.md#ongraphic)

***

### onParentChange()?

> `optional` **onParentChange**(`lastParent?`, `currentParent?`): `any`

Defined in: [src/components/ComponentBase.ts:171](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L171)

#### Parameters

##### lastParent?

`Object3D`

##### currentParent?

`Object3D`

#### Returns

`any`

#### Inherited from

[`StaticAudio`](StaticAudio.md).[`onParentChange`](StaticAudio.md#onparentchange)

***

### onAddChild()?

> `optional` **onAddChild**(`child`): `any`

Defined in: [src/components/ComponentBase.ts:172](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L172)

#### Parameters

##### child

`Object3D`

#### Returns

`any`

#### Inherited from

[`StaticAudio`](StaticAudio.md).[`onAddChild`](StaticAudio.md#onaddchild)

***

### onRemoveChild()?

> `optional` **onRemoveChild**(`child`): `any`

Defined in: [src/components/ComponentBase.ts:173](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L173)

#### Parameters

##### child

`Object3D`

#### Returns

`any`

#### Inherited from

[`StaticAudio`](StaticAudio.md).[`onRemoveChild`](StaticAudio.md#onremovechild)

***

### cloneTo()

> **cloneTo**(`obj`): `void`

Defined in: [src/components/ComponentBase.ts:180](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L180)

clone component data to target object3D

#### Parameters

##### obj

`Object3D`

target object3D

#### Returns

`void`

#### Inherited from

[`StaticAudio`](StaticAudio.md).[`cloneTo`](StaticAudio.md#cloneto)

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

[`StaticAudio`](StaticAudio.md).[`copyComponent`](StaticAudio.md#copycomponent)

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

[`StaticAudio`](StaticAudio.md).[`beforeDestroy`](StaticAudio.md#beforedestroy)

***

### setLisenter()

> **setLisenter**(`listener`): `this`

Defined in: [packages/media-extention/PositionAudio.ts:17](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L17)

#### Parameters

##### listener

[`AudioListener`](AudioListener.md)

#### Returns

`this`

#### Overrides

[`StaticAudio`](StaticAudio.md).[`setLisenter`](StaticAudio.md#setlisenter)

***

### showHelper()

> **showHelper**(`thickness?`, `step?`): `void`

Defined in: [packages/media-extention/PositionAudio.ts:24](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L24)

#### Parameters

##### thickness?

`number`

##### step?

`number`

#### Returns

`void`

***

### hideHelper()

> **hideHelper**(): `void`

Defined in: [packages/media-extention/PositionAudio.ts:78](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L78)

#### Returns

`void`

***

### toggleHelper()

> **toggleHelper**(): `void`

Defined in: [packages/media-extention/PositionAudio.ts:87](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L87)

#### Returns

`void`

***

### updateHeler()

> **updateHeler**(): `void`

Defined in: [packages/media-extention/PositionAudio.ts:95](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L95)

#### Returns

`void`

***

### setDirectionalCone()

> **setDirectionalCone**(`coneInnerAngle`, `coneOuterAngle`, `coneOuterGain`): `PositionAudio`

Defined in: [packages/media-extention/PositionAudio.ts:130](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L130)

#### Parameters

##### coneInnerAngle

`number`

##### coneOuterAngle

`number`

##### coneOuterGain

`number`

#### Returns

`PositionAudio`

***

### start()

> **start**(): `void`

Defined in: [packages/media-extention/PositionAudio.ts:142](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L142)

#### Returns

`void`

#### Overrides

[`StaticAudio`](StaticAudio.md).[`start`](StaticAudio.md#start)

***

### stop()

> **stop**(): `this`

Defined in: [packages/media-extention/PositionAudio.ts:144](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L144)

#### Returns

`this`

#### Overrides

[`StaticAudio`](StaticAudio.md).[`stop`](StaticAudio.md#stop)

***

### onUpdate()

> **onUpdate**(): `void`

Defined in: [packages/media-extention/PositionAudio.ts:147](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L147)

#### Returns

`void`

#### Overrides

[`StaticAudio`](StaticAudio.md).[`onUpdate`](StaticAudio.md#onupdate)

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [packages/media-extention/PositionAudio.ts:170](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/PositionAudio.ts#L170)

release this component

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Overrides

[`StaticAudio`](StaticAudio.md).[`destroy`](StaticAudio.md#destroy)

***

### load()

> **load**(`url`, `options?`): `Promise`\<`void`\>

Defined in: [packages/media-extention/StaticAudio.ts:40](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L40)

#### Parameters

##### url

`string`

##### options?

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`StaticAudio`](StaticAudio.md).[`load`](StaticAudio.md#load)

***

### loadBuffer()

> **loadBuffer**(`buffer`, `options?`): `Promise`\<`void`\>

Defined in: [packages/media-extention/StaticAudio.ts:46](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L46)

#### Parameters

##### buffer

`ArrayBuffer`

##### options?

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`StaticAudio`](StaticAudio.md).[`loadBuffer`](StaticAudio.md#loadbuffer)

***

### play()

> **play**(): `this`

Defined in: [packages/media-extention/StaticAudio.ts:55](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L55)

#### Returns

`this`

#### Inherited from

[`StaticAudio`](StaticAudio.md).[`play`](StaticAudio.md#play)

***

### pause()

> **pause**(): `this`

Defined in: [packages/media-extention/StaticAudio.ts:78](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L78)

#### Returns

`this`

#### Inherited from

[`StaticAudio`](StaticAudio.md).[`pause`](StaticAudio.md#pause)

***

### setVolume()

> **setVolume**(`value`): `this`

Defined in: [packages/media-extention/StaticAudio.ts:94](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L94)

#### Parameters

##### value

`number`

#### Returns

`this`

#### Inherited from

[`StaticAudio`](StaticAudio.md).[`setVolume`](StaticAudio.md#setvolume)
