[**@orillusion/media-extention**](../README.md)

***

# Class: StaticAudio

Defined in: [packages/media-extention/StaticAudio.ts:7](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L7)

Static audio component, volume level does not vary depending on the position of the monitor

## Extends

- `ComponentBase`

## Extended by

- [`PositionAudio`](PositionAudio.md)

## Constructors

### Constructor

> **new StaticAudio**(): `StaticAudio`

Defined in: [packages/media-extention/StaticAudio.ts:19](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L19)

#### Returns

`StaticAudio`

#### Overrides

`ComponentBase.constructor`

## Properties

### object3D

> **object3D**: `Object3D` = `null`

Defined in: [src/components/ComponentBase.ts:29](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L29)

owner object3D

#### Inherited from

`ComponentBase.object3D`

***

### isDestroyed

> **isDestroyed**: `boolean` = `false`

Defined in: [src/components/ComponentBase.ts:77](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L77)

#### Inherited from

`ComponentBase.isDestroyed`

***

### context

> **context**: `AudioContext` = `null`

Defined in: [packages/media-extention/StaticAudio.ts:9](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L9)

***

### gainNode

> **gainNode**: `GainNode` = `null`

Defined in: [packages/media-extention/StaticAudio.ts:10](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L10)

***

### source

> **source**: `AudioBufferSourceNode` = `null`

Defined in: [packages/media-extention/StaticAudio.ts:11](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L11)

***

### playing

> **playing**: `boolean` = `false`

Defined in: [packages/media-extention/StaticAudio.ts:16](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L16)

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

`ComponentBase.visibleLayer`

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

`ComponentBase.eventDispatcher`

***

### isStart

#### Get Signature

> **get** **isStart**(): `boolean`

Defined in: [src/components/ComponentBase.ts:79](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L79)

##### Returns

`boolean`

#### Inherited from

`ComponentBase.isStart`

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

`ComponentBase.transform`

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

`ComponentBase.enable`

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

`ComponentBase.init`

***

### start()

> **start**(): `void`

Defined in: [src/components/ComponentBase.ts:162](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L162)

#### Returns

`void`

#### Inherited from

`ComponentBase.start`

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

`ComponentBase.onEnable`

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

`ComponentBase.onDisable`

***

### onUpdate()?

> `optional` **onUpdate**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:166](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L166)

#### Parameters

##### view?

`View3D`

#### Returns

`any`

#### Inherited from

`ComponentBase.onUpdate`

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

`ComponentBase.onLateUpdate`

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

`ComponentBase.onBeforeUpdate`

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

`ComponentBase.onCompute`

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

`ComponentBase.onGraphic`

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

`ComponentBase.onParentChange`

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

`ComponentBase.onAddChild`

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

`ComponentBase.onRemoveChild`

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

`ComponentBase.cloneTo`

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

`ComponentBase.copyComponent`

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

`ComponentBase.beforeDestroy`

***

### setLisenter()

> **setLisenter**(`listener`): `this`

Defined in: [packages/media-extention/StaticAudio.ts:22](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L22)

#### Parameters

##### listener

[`AudioListener`](AudioListener.md)

#### Returns

`this`

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

***

### play()

> **play**(): `this`

Defined in: [packages/media-extention/StaticAudio.ts:55](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L55)

#### Returns

`this`

***

### pause()

> **pause**(): `this`

Defined in: [packages/media-extention/StaticAudio.ts:78](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L78)

#### Returns

`this`

***

### stop()

> **stop**(): `this`

Defined in: [packages/media-extention/StaticAudio.ts:89](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L89)

#### Returns

`this`

#### Overrides

`ComponentBase.stop`

***

### setVolume()

> **setVolume**(`value`): `this`

Defined in: [packages/media-extention/StaticAudio.ts:94](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L94)

#### Parameters

##### value

`number`

#### Returns

`this`

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [packages/media-extention/StaticAudio.ts:105](https://github.com/orillusion/orillusion/blob/main/packages/media-extention/StaticAudio.ts#L105)

release this component

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Overrides

`ComponentBase.destroy`
