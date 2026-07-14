[**@orillusion/core**](../README.md)

***

# Class: SceneCaptureCameraComponent

Defined in: [src/components/SceneCaptureCameraComponent.ts:76](https://github.com/orillusion/orillusion/blob/main/src/components/SceneCaptureCameraComponent.ts#L76)

Off-screen camera that captures the current scene into a render
texture for other materials to sample. Typical uses: mirrors
(mirrored-camera capture sampled by a quad), security-camera
monitors (capture from a distant viewpoint, sampled by a TV
mesh), portals, picture-in-picture mini-maps.

Architecture
------------

- Attach this component to an Object3D whose `Camera3D` should drive
  the capture viewpoint (the same node, or a child — the component
  resolves the camera lazily on `start()`).
- The component lazily allocates a [GBufferFrame](GBufferFrame.md) sized
  `width × height` the first time the pass needs it. Allocation
  uses the same color (rgba16float) + compress (rgba32float) +
  depth (depth32float) layout as the main color pass, so existing
  material `PassType.COLOR` pipelines bind without recompilation.
- The captured color texture is exposed via
  [getCaptureTexture](#getcapturetexture); bind it into any material's sampler
  slot to read the captured scene.
- On `onEnable` the component registers itself with
  EntityCollect (per-scene index); the bundled
  `SceneCapturePass` iterates the index each frame.

Mask filtering
--------------

- [captureMask](#capturemask): bitmask of [RendererMask](../enumerations/RendererMask.md) bits that a
  renderer must overlap to be drawn into the capture. Default is
  `0xffffffff` (include every renderer).
- [excludeMask](#excludemask): bitmask that, if any bit overlaps the
  renderer's mask, skips the renderer. Default is `0` (exclude
  nothing). Useful for "TV doesn't capture itself" — set a custom
  bit on the TV's renderer mask, then add that bit to
  `excludeMask`.

The final test is `(rm & captureMask) !== 0 && (rm & excludeMask) === 0`.

Update mode
-----------

- `updateMode = 'always'` re-renders every frame the pass runs.
- `updateMode = 'manual'` skips re-render unless
  [needUpdate](#needupdate) is true; the pass clears the flag after
  rendering. Use for static security feeds (one-shot bake) or
  for app-driven cadence (every-N-frames update).

## Extends

- [`ComponentBase`](ComponentBase.md)

## Constructors

### Constructor

> **new SceneCaptureCameraComponent**(): `SceneCaptureCameraComponent`

#### Returns

`SceneCaptureCameraComponent`

#### Inherited from

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

### width

> **width**: `number` = `512`

Defined in: [src/components/SceneCaptureCameraComponent.ts:79](https://github.com/orillusion/orillusion/blob/main/src/components/SceneCaptureCameraComponent.ts#L79)

Capture render target width in pixels. Re-allocates the
 internal GBuffer on the next render if changed.

***

### height

> **height**: `number` = `512`

Defined in: [src/components/SceneCaptureCameraComponent.ts:83](https://github.com/orillusion/orillusion/blob/main/src/components/SceneCaptureCameraComponent.ts#L83)

Capture render target height in pixels. Re-allocates on
 change.

***

### captureMask

> **captureMask**: `number` = `0xffffffff`

Defined in: [src/components/SceneCaptureCameraComponent.ts:87](https://github.com/orillusion/orillusion/blob/main/src/components/SceneCaptureCameraComponent.ts#L87)

Bitwise allowlist over [RendererMask](../enumerations/RendererMask.md). A renderer is
 captured only if `(node.rendererMask & captureMask) !== 0`.

***

### excludeMask

> **excludeMask**: `number` = `0`

Defined in: [src/components/SceneCaptureCameraComponent.ts:91](https://github.com/orillusion/orillusion/blob/main/src/components/SceneCaptureCameraComponent.ts#L91)

Bitwise denylist over [RendererMask](../enumerations/RendererMask.md). A renderer is
 skipped if `(node.rendererMask & excludeMask) !== 0`.

***

### clearColor

> **clearColor**: [`Color`](Color.md)

Defined in: [src/components/SceneCaptureCameraComponent.ts:95](https://github.com/orillusion/orillusion/blob/main/src/components/SceneCaptureCameraComponent.ts#L95)

RGBA clear color applied to the color attachment at the start
 of each capture. Depth always clears to 1.0.

***

### includeSky

> **includeSky**: `boolean` = `true`

Defined in: [src/components/SceneCaptureCameraComponent.ts:99](https://github.com/orillusion/orillusion/blob/main/src/components/SceneCaptureCameraComponent.ts#L99)

Whether to render the scene's `AtmosphericComponent` / sky into
 the capture. Default true.

***

### includeTransparent

> **includeTransparent**: `boolean` = `true`

Defined in: [src/components/SceneCaptureCameraComponent.ts:103](https://github.com/orillusion/orillusion/blob/main/src/components/SceneCaptureCameraComponent.ts#L103)

Whether to render transparent renderers into the capture.
 Default true.

***

### updateMode

> **updateMode**: [`SceneCaptureUpdateMode`](../type-aliases/SceneCaptureUpdateMode.md) = `'always'`

Defined in: [src/components/SceneCaptureCameraComponent.ts:106](https://github.com/orillusion/orillusion/blob/main/src/components/SceneCaptureCameraComponent.ts#L106)

See [SceneCaptureUpdateMode](../type-aliases/SceneCaptureUpdateMode.md).

***

### needUpdate

> **needUpdate**: `boolean` = `true`

Defined in: [src/components/SceneCaptureCameraComponent.ts:110](https://github.com/orillusion/orillusion/blob/main/src/components/SceneCaptureCameraComponent.ts#L110)

Manual-mode trigger. SceneCapturePass clears this back to false
 after rendering. Ignored when `updateMode === 'always'`.

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

### camera

#### Get Signature

> **get** **camera**(): [`Camera3D`](Camera3D.md)

Defined in: [src/components/SceneCaptureCameraComponent.ts:153](https://github.com/orillusion/orillusion/blob/main/src/components/SceneCaptureCameraComponent.ts#L153)

Active Camera3D driving the capture, or `null` if none was
 found at start(). SceneCapturePass skips components with a
 null camera.

##### Returns

[`Camera3D`](Camera3D.md)

## Methods

### stop()

> **stop**(): `void`

Defined in: [src/components/ComponentBase.ts:163](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L163)

#### Returns

`void`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`stop`](ComponentBase.md#stop)

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

### init()

> **init**(): `void`

Defined in: [src/components/SceneCaptureCameraComponent.ts:123](https://github.com/orillusion/orillusion/blob/main/src/components/SceneCaptureCameraComponent.ts#L123)

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`init`](ComponentBase.md#init)

***

### start()

> **start**(): `void`

Defined in: [src/components/SceneCaptureCameraComponent.ts:129](https://github.com/orillusion/orillusion/blob/main/src/components/SceneCaptureCameraComponent.ts#L129)

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`start`](ComponentBase.md#start)

***

### onEnable()

> **onEnable**(`view?`): `void`

Defined in: [src/components/SceneCaptureCameraComponent.ts:138](https://github.com/orillusion/orillusion/blob/main/src/components/SceneCaptureCameraComponent.ts#L138)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`onEnable`](ComponentBase.md#onenable)

***

### onDisable()

> **onDisable**(`view?`): `void`

Defined in: [src/components/SceneCaptureCameraComponent.ts:144](https://github.com/orillusion/orillusion/blob/main/src/components/SceneCaptureCameraComponent.ts#L144)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`onDisable`](ComponentBase.md#ondisable)

***

### getCaptureTexture()

> **getCaptureTexture**(): `RenderTexture`

Defined in: [src/components/SceneCaptureCameraComponent.ts:169](https://github.com/orillusion/orillusion/blob/main/src/components/SceneCaptureCameraComponent.ts#L169)

Color render-target the capture writes into (rgba16float). The
 internal GBuffer is lazily allocated on first call; subsequent
 calls return the same handle so material samplers stay bound
 across frames. Re-allocates if [width](#width) / [height](#height)
 changed since the last allocation.

 Returns null when called before any render has produced a
 GBuffer (i.e. the component isn't enabled or the pass hasn't
 fired yet). Most users want the post-render value — call this
 after `Engine3D.startRenderView` returns or read it inside an
 onUpdate hook.

#### Returns

`RenderTexture`

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [src/components/SceneCaptureCameraComponent.ts:265](https://github.com/orillusion/orillusion/blob/main/src/components/SceneCaptureCameraComponent.ts#L265)

release this component

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`destroy`](ComponentBase.md#destroy)
