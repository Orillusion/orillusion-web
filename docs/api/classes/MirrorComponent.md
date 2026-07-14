[**@orillusion/core**](../README.md)

***

# Class: MirrorComponent

Defined in: [src/components/MirrorComponent.ts:68](https://github.com/orillusion/orillusion/blob/main/src/components/MirrorComponent.ts#L68)

One-stop planar mirror component. Attach to an Object3D that already
carries a [MeshRenderer](MeshRenderer.md) with a [MirrorMaterial](MirrorMaterial.md) (any
geometry — plane, terrain patch, irregular puddle) and the component
sets up the rest:

  1. Spawns an off-screen [Camera3D](Camera3D.md) at the plane-mirror of
     the main camera (refreshed every frame from
     [MirrorComponent.onUpdate](#onupdate)).
  2. Attaches a [SceneCaptureCameraComponent](SceneCaptureCameraComponent.md) so that camera
     renders the scene into a render target every frame.
  3. Tags the host renderer with [MirrorComponent.MIRROR\_MASK](#mirror_mask)
     and configures the capture's `excludeMask` so the mirror surface
     does not capture itself (avoids feedback / "mirror in mirror"
     recursion artefacts).
  4. Binds the capture RT into the host's [MirrorMaterial](MirrorMaterial.md) as
     soon as the capture pass has produced a texture (lazy — runs
     once on the first frame the RT becomes non-null).

Usage
-----

```ts
const floor = new Object3D();
const mr = floor.addComponent(MeshRenderer);
mr.geometry = new PlaneGeometry(40, 40);
mr.material = new MirrorMaterial();
const mirror = floor.addComponent(MirrorComponent);
mirror.mainTarget = new Vector3(0, 1, 0);  // what the main camera looks at
scene.addChild(floor);
```

The component reads [mainCamera](#maincamera) from [View3D.camera](View3D.md#camera) on
enable when not explicitly set, so a single-camera scene needs no
other configuration. The mirror plane (point + normal) is also
snapshot from the host's world transform on first start — so a
tilted/rotated host produces a correctly oriented mirror without
any manual plane setup.

Limits
------

- The mirror plane is snapshot once at start from the host transform.
  If the host moves or rotates afterwards, update
  [mirrorPlanePoint](#mirrorplanepoint) / [mirrorPlaneNormal](#mirrorplanenormal) explicitly.
- Multiple mirrors in the same scene all share
  [MIRROR\_MASK](#mirror_mask) — that means no mirror captures any other
  mirror surface (good — prevents feedback) but it also means a
  mirror can not appear in another mirror's reflection. If you
  need cross-mirror reflections, give each mirror a unique bit on
  [MeshRenderer.rendererMask](SpriteRenderer.md#renderermask) + a matching `excludeMask` set
  on its [captureComponent](#capturecomponent) manually.

## Extends

- [`ComponentBase`](ComponentBase.md)

## Constructors

### Constructor

> **new MirrorComponent**(): `MirrorComponent`

#### Returns

`MirrorComponent`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`constructor`](ComponentBase.md#constructor)

## Properties

### MIRROR\_MASK

> `readonly` `static` **MIRROR\_MASK**: `number`

Defined in: [src/components/MirrorComponent.ts:76](https://github.com/orillusion/orillusion/blob/main/src/components/MirrorComponent.ts#L76)

Custom [RendererMask](../enumerations/RendererMask.md) bit reserved for "this is a mirror
surface and should not appear in other mirrors". Bit 11 is
unclaimed by the engine's built-in mask values (highest is
[RendererMask.Graphic3D](../enumerations/RendererMask.md#graphic3d) = `1 << 10`). Exposed so user
code can check / clear it on hand-managed renderers.

***

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

### width

> **width**: `number` = `1024`

Defined in: [src/components/MirrorComponent.ts:81](https://github.com/orillusion/orillusion/blob/main/src/components/MirrorComponent.ts#L81)

Capture render-target width in pixels. Forwarded to
 [SceneCaptureCameraComponent.width](SceneCaptureCameraComponent.md#width). Setting this after
 enable triggers an RT reallocation on the next frame.

***

### height

> **height**: `number` = `1024`

Defined in: [src/components/MirrorComponent.ts:84](https://github.com/orillusion/orillusion/blob/main/src/components/MirrorComponent.ts#L84)

Capture render-target height in pixels.

***

### mirrorPlanePoint

> **mirrorPlanePoint**: [`Vector3`](Vector3.md)

Defined in: [src/components/MirrorComponent.ts:90](https://github.com/orillusion/orillusion/blob/main/src/components/MirrorComponent.ts#L90)

A world-space point lying on the mirror plane. Defaults to the
 host Object3D's world position on first start, so a flat floor
 needs no manual setup. Override before/after start to move the
 reflection plane independently of the host.

***

### mirrorPlaneNormal

> **mirrorPlaneNormal**: [`Vector3`](Vector3.md)

Defined in: [src/components/MirrorComponent.ts:96](https://github.com/orillusion/orillusion/blob/main/src/components/MirrorComponent.ts#L96)

Unit normal of the mirror plane in world space. Defaults to the
 host Object3D's world-space +Y axis (i.e. transform.up) on first
 start — matching a PlaneGeometry whose face is up. Override for
 tilted glass, vertical mirrors, etc.

***

### mainCamera

> **mainCamera**: [`Camera3D`](Camera3D.md) = `null`

Defined in: [src/components/MirrorComponent.ts:101](https://github.com/orillusion/orillusion/blob/main/src/components/MirrorComponent.ts#L101)

The scene's main camera that this mirror reflects. When left
 null, resolves to [View3D.camera](View3D.md#camera) on enable. Set
 explicitly if your scene swaps cameras at runtime.

***

### mainTarget

> **mainTarget**: [`Vector3`](Vector3.md)

Defined in: [src/components/MirrorComponent.ts:108](https://github.com/orillusion/orillusion/blob/main/src/components/MirrorComponent.ts#L108)

World-space point the main camera looks at — the mirror camera
 is aimed at the reflection of this point across the mirror
 plane. Default is the world origin; override to match your
 camera controller's pivot (e.g. `HoverCameraController.setCamera`'s
 `target` argument).

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

### captureComponent

#### Get Signature

> **get** **captureComponent**(): [`SceneCaptureCameraComponent`](SceneCaptureCameraComponent.md)

Defined in: [src/components/MirrorComponent.ts:124](https://github.com/orillusion/orillusion/blob/main/src/components/MirrorComponent.ts#L124)

Live reference to the auto-created scene-capture component, in
 case advanced users want to tweak its properties (clearColor,
 includeSky, updateMode, …). Null until enable.

##### Returns

[`SceneCaptureCameraComponent`](SceneCaptureCameraComponent.md)

***

### material

#### Get Signature

> **get** **material**(): [`MirrorMaterial`](MirrorMaterial.md)

Defined in: [src/components/MirrorComponent.ts:132](https://github.com/orillusion/orillusion/blob/main/src/components/MirrorComponent.ts#L132)

The [MirrorMaterial](MirrorMaterial.md) the component bound. Resolved from
 the host [MeshRenderer](MeshRenderer.md) on enable. Null if no
 MirrorMaterial was found (the component logs a warning and
 no-ops in that case).

##### Returns

[`MirrorMaterial`](MirrorMaterial.md)

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

### start()

> **start**(): `void`

Defined in: [src/components/MirrorComponent.ts:136](https://github.com/orillusion/orillusion/blob/main/src/components/MirrorComponent.ts#L136)

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`start`](ComponentBase.md#start)

***

### onEnable()

> **onEnable**(`_view?`): `void`

Defined in: [src/components/MirrorComponent.ts:153](https://github.com/orillusion/orillusion/blob/main/src/components/MirrorComponent.ts#L153)

#### Parameters

##### \_view?

[`View3D`](View3D.md)

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`onEnable`](ComponentBase.md#onenable)

***

### onDisable()

> **onDisable**(`_view?`): `void`

Defined in: [src/components/MirrorComponent.ts:160](https://github.com/orillusion/orillusion/blob/main/src/components/MirrorComponent.ts#L160)

#### Parameters

##### \_view?

[`View3D`](View3D.md)

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`onDisable`](ComponentBase.md#ondisable)

***

### onUpdate()

> **onUpdate**(`_view?`): `void`

Defined in: [src/components/MirrorComponent.ts:169](https://github.com/orillusion/orillusion/blob/main/src/components/MirrorComponent.ts#L169)

#### Parameters

##### \_view?

[`View3D`](View3D.md)

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`onUpdate`](ComponentBase.md#onupdate)

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [src/components/MirrorComponent.ts:292](https://github.com/orillusion/orillusion/blob/main/src/components/MirrorComponent.ts#L292)

release this component

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`destroy`](ComponentBase.md#destroy)
