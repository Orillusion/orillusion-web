[**@orillusion/core**](../README.md)

***

# Class: LODGroup

Defined in: [src/components/renderer/LODGroup.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L65)

Level-of-detail switcher. Registers N sets of objects with a threshold each
and, every frame, enables exactly one set (or none, when the object is too
small / far and `cullBeyondLast` is on) based on the view's camera.

Levels are kept sorted from most to least detailed no matter the order
they were added in, so `addLevel` can be called in any order.

```ts
const lod = obj.addComponent(LODGroup);
lod.addLevel([highMesh], 0.4);   // shown while ≥40 % of viewport height
lod.addLevel([midMesh],  0.12);  // 12 %–40 %
lod.addLevel([lowMesh],  0.03);  // 3 %–12 %, below that: culled
```

## Extends

- [`ComponentBase`](ComponentBase.md)

## Constructors

### Constructor

> **new LODGroup**(): `LODGroup`

#### Returns

`LODGroup`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`constructor`](ComponentBase.md#constructor)

## Properties

### CULLED

> `readonly` `static` **CULLED**: `-1` = `-1`

Defined in: [src/components/renderer/LODGroup.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L67)

`currentLevel` value while every level is hidden.

***

### object3D

> **object3D**: [`Object3D`](Object3D.md) = `null`

Defined in: [src/components/ComponentBase.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L29)

owner object3D

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`object3D`](ComponentBase.md#object3d)

***

### isDestroyed

> **isDestroyed**: `boolean` = `false`

Defined in: [src/components/ComponentBase.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L77)

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`isDestroyed`](ComponentBase.md#isdestroyed)

***

### bias

> **bias**: `number` = `1`

Defined in: [src/components/renderer/LODGroup.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L77)

Global scale on the metric. In `ScreenSize` mode >1 keeps detailed
levels visible longer (like Unity's `QualitySettings.lodBias`); in
`Distance` mode the measured distance is divided by it, so the same
direction applies.

***

### hysteresis

> **hysteresis**: `number` = `0.1`

Defined in: [src/components/renderer/LODGroup.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L85)

Fraction of the threshold used as a dead-band so a group parked right
on a boundary does not flicker between two levels. A level is only
dropped for a coarser one when the metric is past the threshold, and
only re-promoted when it is past `threshold * (1 + hysteresis)`.

***

### cullBeyondLast

> **cullBeyondLast**: `boolean` = `true`

Defined in: [src/components/renderer/LODGroup.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L88)

Hide every level once the last threshold is crossed.

***

### forceLevel

> **forceLevel**: `number` = `null`

Defined in: [src/components/renderer/LODGroup.ts:94](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L94)

Debug/authoring override: `null` = automatic, otherwise the level index
to force (clamped). `LODGroup.CULLED` forces everything hidden.

***

### camera

> **camera**: [`Camera3D`](Camera3D.md) = `null`

Defined in: [src/components/renderer/LODGroup.ts:100](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L100)

Optional camera override; defaults to the camera of the view that
updates this component.

***

### radius

> **radius**: `number` = `null`

Defined in: [src/components/renderer/LODGroup.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L108)

Bounding-sphere radius (world units) used for `ScreenSize`. `null`
(default) derives it from the world bounds of every level's objects the
first time it is needed; call `recalculateBounds()` after changing
geometry or scale.

## Accessors

### visibleLayer

#### Get Signature

> **get** **visibleLayer**(): `number`

Defined in: [src/components/ComponentBase.ts:46](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L46)

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

Defined in: [src/components/ComponentBase.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L50)

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

Defined in: [src/components/ComponentBase.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L63)

##### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Set Signature

> **set** **eventDispatcher**(`value`): `void`

Defined in: [src/components/ComponentBase.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L68)

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

Defined in: [src/components/ComponentBase.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L79)

##### Returns

`boolean`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`isStart`](ComponentBase.md#isstart)

***

### transform

#### Get Signature

> **get** **transform**(): [`Transform`](Transform.md)

Defined in: [src/components/ComponentBase.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L89)

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

Defined in: [src/components/ComponentBase.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

##### Returns

`boolean`

#### Set Signature

> **set** **enable**(`value`): `void`

Defined in: [src/components/ComponentBase.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L96)

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`enable`](ComponentBase.md#enable)

***

### mode

#### Get Signature

> **get** **mode**(): [`LODMode`](../enumerations/LODMode.md)

Defined in: [src/components/renderer/LODGroup.ts:125](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L125)

Metric used to pick a level. Thresholds are in the metric's unit, so
after switching modes hand in matching values via `setThresholds`.
The level order (finest first) is kept across the switch on purpose:
re-sorting by the *old* thresholds would reverse it, and the new
thresholds are assigned by that order.

##### Returns

[`LODMode`](../enumerations/LODMode.md)

#### Set Signature

> **set** **mode**(`value`): `void`

Defined in: [src/components/renderer/LODGroup.ts:129](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L129)

##### Parameters

###### value

[`LODMode`](../enumerations/LODMode.md)

##### Returns

`void`

***

### levels

#### Get Signature

> **get** **levels**(): readonly [`LODLevel`](../interfaces/LODLevel.md)[]

Defined in: [src/components/renderer/LODGroup.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L136)

Levels, most detailed first. Treat as read-only; use `addLevel` / `removeLevel`.

##### Returns

readonly [`LODLevel`](../interfaces/LODLevel.md)[]

***

### currentLevel

#### Get Signature

> **get** **currentLevel**(): `number`

Defined in: [src/components/renderer/LODGroup.ts:141](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L141)

Index into `levels` of the level currently shown, or `LODGroup.CULLED`.

##### Returns

`number`

***

### lastMetric

#### Get Signature

> **get** **lastMetric**(): `number`

Defined in: [src/components/renderer/LODGroup.ts:146](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L146)

Metric (screen-relative height or distance) measured on the last update.

##### Returns

`number`

***

### onLevelChange

#### Set Signature

> **set** **onLevelChange**(`cb`): `void`

Defined in: [src/components/renderer/LODGroup.ts:151](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L151)

Called after the shown level changes.

##### Parameters

###### cb

(`level`, `previous`) => `void`

##### Returns

`void`

## Methods

### init()

> **init**(`param?`): `void`

Defined in: [src/components/ComponentBase.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L161)

#### Parameters

##### param?

`any`

#### Returns

`void`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`init`](ComponentBase.md#init)

***

### start()

> **start**(): `void`

Defined in: [src/components/ComponentBase.ts:162](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L162)

#### Returns

`void`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`start`](ComponentBase.md#start)

***

### stop()

> **stop**(): `void`

Defined in: [src/components/ComponentBase.ts:163](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L163)

#### Returns

`void`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`stop`](ComponentBase.md#stop)

***

### onDisable()?

> `optional` **onDisable**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:165](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L165)

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

Defined in: [src/components/ComponentBase.ts:167](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L167)

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

Defined in: [src/components/ComponentBase.ts:168](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L168)

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

Defined in: [src/components/ComponentBase.ts:169](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L169)

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

Defined in: [src/components/ComponentBase.ts:170](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L170)

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

Defined in: [src/components/ComponentBase.ts:171](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L171)

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

Defined in: [src/components/ComponentBase.ts:172](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L172)

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

Defined in: [src/components/ComponentBase.ts:173](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L173)

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

Defined in: [src/components/ComponentBase.ts:182](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L182)

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

Defined in: [src/components/ComponentBase.ts:249](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L249)

before release this component, object refrences are not be set null now.

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`beforeDestroy`](ComponentBase.md#beforedestroy)

***

### addLevel()

> **addLevel**(`objects`, `threshold`): `number`

Defined in: [src/components/renderer/LODGroup.ts:159](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L159)

Register a level. Objects are hidden immediately; the right one is
enabled on the next update. Returns the level's index after sorting.

#### Parameters

##### objects

[`Object3D`](Object3D.md) \| [`Object3D`](Object3D.md)[]

##### threshold

`number`

#### Returns

`number`

***

### removeLevel()

> **removeLevel**(`index`): `void`

Defined in: [src/components/renderer/LODGroup.ts:171](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L171)

Remove a level (its objects are re-enabled and no longer managed).

#### Parameters

##### index

`number`

#### Returns

`void`

***

### setThreshold()

> **setThreshold**(`index`, `threshold`): `void`

Defined in: [src/components/renderer/LODGroup.ts:185](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L185)

Change one level's threshold at runtime. Levels are re-sorted, so the
index of *other* levels may move; to rewrite several thresholds use
`setThresholds`, which assigns them all before sorting.

#### Parameters

##### index

`number`

##### threshold

`number`

#### Returns

`void`

***

### setThresholds()

> **setThresholds**(`thresholds`): `void`

Defined in: [src/components/renderer/LODGroup.ts:197](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L197)

Rewrite every threshold in the current (finest-first) level order, then
re-sort once. The usual companion of a `mode` switch.

#### Parameters

##### thresholds

`number`[]

#### Returns

`void`

***

### recalculateBounds()

> **recalculateBounds**(): `void`

Defined in: [src/components/renderer/LODGroup.ts:205](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L205)

Forget the cached auto radius; recomputed on next update.

#### Returns

`void`

***

### measure()

> **measure**(`camera`): `number`

Defined in: [src/components/renderer/LODGroup.ts:213](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L213)

Compute the metric this group would use for `camera` right now,
without changing any state. Useful for tooling and tests.

#### Parameters

##### camera

[`Camera3D`](Camera3D.md)

#### Returns

`number`

***

### selectLevel()

> **selectLevel**(`metric`, `from?`): `number`

Defined in: [src/components/renderer/LODGroup.ts:234](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L234)

Pick the level for a metric value, applying hysteresis relative to
`from` (the level currently shown). Pure function of the inputs.

#### Parameters

##### metric

`number`

##### from?

`number` = `...`

#### Returns

`number`

***

### onUpdate()

> **onUpdate**(`view?`): `void`

Defined in: [src/components/renderer/LODGroup.ts:261](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L261)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`onUpdate`](ComponentBase.md#onupdate)

***

### onEnable()

> **onEnable**(): `void`

Defined in: [src/components/renderer/LODGroup.ts:268](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L268)

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`onEnable`](ComponentBase.md#onenable)

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [src/components/renderer/LODGroup.ts:274](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L274)

release this component

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`destroy`](ComponentBase.md#destroy)

***

### cloneTo()

> **cloneTo**(`obj`): `void`

Defined in: [src/components/renderer/LODGroup.ts:281](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/LODGroup.ts#L281)

clone component data to target object3D

#### Parameters

##### obj

[`Object3D`](Object3D.md)

target object3D

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`cloneTo`](ComponentBase.md#cloneto)
