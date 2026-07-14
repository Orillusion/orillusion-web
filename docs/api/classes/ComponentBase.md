[**@orillusion/core**](../README.md)

***

# Class: ComponentBase

Defined in: [src/components/ComponentBase.ts:25](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L25)

Components are used to attach functionality to object3D, it has an owner object3D.
The component can receive update events at each frame.

Every component is automatically discoverable by type from any
RenderGraphPass — or any other system that calls
[ComponentCollect.collectByTypeLayered](ComponentCollect.md#collectbytypelayered) — without having to
route through RenderNode. Registration into the per-View
type-keyed registry is driven directly from the enable/disable
call sites (`set enable`, `__start`, `__stop`), so subclasses can
freely override `onEnable` / `onDisable` without needing a `super`
call to keep the registry in sync.

## Extended by

- [`BillboardComponent`](BillboardComponent.md)
- [`ColliderComponent`](ColliderComponent.md)
- [`DecalComponent`](DecalComponent.md)
- [`MirrorComponent`](MirrorComponent.md)
- [`SceneCaptureCameraComponent`](SceneCaptureCameraComponent.md)
- [`SkeletonAnimationComponent`](SkeletonAnimationComponent.md)
- [`Transform`](Transform.md)
- [`AnimatorComponent`](AnimatorComponent.md)
- [`PropertyAnimation`](PropertyAnimation.md)
- [`MorphTargetBlender`](MorphTargetBlender.md)
- [`FlyCameraController`](FlyCameraController.md)
- [`HoverCameraController`](HoverCameraController.md)
- [`OrbitController`](OrbitController.md)
- [`PostProcessingComponent`](PostProcessingComponent.md)
- [`GlobalIlluminationComponent`](GlobalIlluminationComponent.md)
- [`Camera3D`](Camera3D.md)
- [`TransformControllerBaseComponent`](TransformControllerBaseComponent.md)

## Implements

- [`IComponent`](../interfaces/IComponent.md)

## Constructors

### Constructor

> **new ComponentBase**(): `ComponentBase`

#### Returns

`ComponentBase`

## Properties

### object3D

> **object3D**: [`Object3D`](Object3D.md) = `null`

Defined in: [src/components/ComponentBase.ts:29](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L29)

owner object3D

#### Implementation of

[`IComponent`](../interfaces/IComponent.md).[`object3D`](../interfaces/IComponent.md#object3d)

***

### isDestroyed

> **isDestroyed**: `boolean` = `false`

Defined in: [src/components/ComponentBase.ts:77](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L77)

#### Implementation of

[`IComponent`](../interfaces/IComponent.md).[`isDestroyed`](../interfaces/IComponent.md#isdestroyed)

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

#### Implementation of

[`IComponent`](../interfaces/IComponent.md).[`eventDispatcher`](../interfaces/IComponent.md#eventdispatcher)

***

### isStart

#### Get Signature

> **get** **isStart**(): `boolean`

Defined in: [src/components/ComponentBase.ts:79](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L79)

##### Returns

`boolean`

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

#### Implementation of

[`IComponent`](../interfaces/IComponent.md).[`transform`](../interfaces/IComponent.md#transform)

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

#### Implementation of

[`IComponent`](../interfaces/IComponent.md).[`enable`](../interfaces/IComponent.md#enable)

## Methods

### init()

> **init**(`param?`): `void`

Defined in: [src/components/ComponentBase.ts:161](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L161)

#### Parameters

##### param?

`any`

#### Returns

`void`

#### Implementation of

[`IComponent`](../interfaces/IComponent.md).[`init`](../interfaces/IComponent.md#init)

***

### start()

> **start**(): `void`

Defined in: [src/components/ComponentBase.ts:162](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L162)

#### Returns

`void`

#### Implementation of

[`IComponent`](../interfaces/IComponent.md).[`start`](../interfaces/IComponent.md#start)

***

### stop()

> **stop**(): `void`

Defined in: [src/components/ComponentBase.ts:163](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L163)

#### Returns

`void`

#### Implementation of

[`IComponent`](../interfaces/IComponent.md).[`stop`](../interfaces/IComponent.md#stop)

***

### onEnable()?

> `optional` **onEnable**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:164](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L164)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`any`

#### Implementation of

[`IComponent`](../interfaces/IComponent.md).[`onEnable`](../interfaces/IComponent.md#onenable)

***

### onDisable()?

> `optional` **onDisable**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:165](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L165)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`any`

#### Implementation of

[`IComponent`](../interfaces/IComponent.md).[`onDisable`](../interfaces/IComponent.md#ondisable)

***

### onUpdate()?

> `optional` **onUpdate**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:166](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L166)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`any`

#### Implementation of

[`IComponent`](../interfaces/IComponent.md).[`onUpdate`](../interfaces/IComponent.md#onupdate)

***

### onLateUpdate()?

> `optional` **onLateUpdate**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:167](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L167)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`any`

#### Implementation of

[`IComponent`](../interfaces/IComponent.md).[`onLateUpdate`](../interfaces/IComponent.md#onlateupdate)

***

### onBeforeUpdate()?

> `optional` **onBeforeUpdate**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:168](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L168)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`any`

#### Implementation of

[`IComponent`](../interfaces/IComponent.md).[`onBeforeUpdate`](../interfaces/IComponent.md#onbeforeupdate)

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

#### Implementation of

[`IComponent`](../interfaces/IComponent.md).[`onCompute`](../interfaces/IComponent.md#oncompute)

***

### onGraphic()?

> `optional` **onGraphic**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:170](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L170)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`any`

#### Implementation of

[`IComponent`](../interfaces/IComponent.md).[`onGraphic`](../interfaces/IComponent.md#ongraphic)

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

#### Implementation of

[`IComponent`](../interfaces/IComponent.md).[`onParentChange`](../interfaces/IComponent.md#onparentchange)

***

### onAddChild()?

> `optional` **onAddChild**(`child`): `any`

Defined in: [src/components/ComponentBase.ts:172](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L172)

#### Parameters

##### child

[`Object3D`](Object3D.md)

#### Returns

`any`

#### Implementation of

[`IComponent`](../interfaces/IComponent.md).[`onAddChild`](../interfaces/IComponent.md#onaddchild)

***

### onRemoveChild()?

> `optional` **onRemoveChild**(`child`): `any`

Defined in: [src/components/ComponentBase.ts:173](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L173)

#### Parameters

##### child

[`Object3D`](Object3D.md)

#### Returns

`any`

#### Implementation of

[`IComponent`](../interfaces/IComponent.md).[`onRemoveChild`](../interfaces/IComponent.md#onremovechild)

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

#### Implementation of

[`IComponent`](../interfaces/IComponent.md).[`cloneTo`](../interfaces/IComponent.md#cloneto)

***

### copyComponent()

> **copyComponent**(`from`): `this`

Defined in: [src/components/ComponentBase.ts:182](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L182)

#### Parameters

##### from

`this`

#### Returns

`this`

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

#### Implementation of

[`IComponent`](../interfaces/IComponent.md).[`beforeDestroy`](../interfaces/IComponent.md#beforedestroy)

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

#### Implementation of

[`IComponent`](../interfaces/IComponent.md).[`destroy`](../interfaces/IComponent.md#destroy)
