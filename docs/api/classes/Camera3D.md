[**@orillusion/core**](../README.md)

***

# Class: Camera3D

Defined in: [src/core/Camera3D.ts:21](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L21)

Camera components

## Extends

- [`ComponentBase`](ComponentBase.md)

## Constructors

### Constructor

> **new Camera3D**(): `Camera3D`

Defined in: [src/core/Camera3D.ts:176](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L176)

#### Returns

`Camera3D`

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

### mainCamera

> `static` **mainCamera**: `Camera3D`

Defined in: [src/core/Camera3D.ts:26](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L26)

The primary camera used for rendering the main view.

***

### \_boundCtx

> **\_boundCtx**: [`Context3D`](Context3D.md) = `null`

Defined in: [src/core/Camera3D.ts:32](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L32)

The graphics context this camera is bound to. Used for multi-engine
setups; `null` until the camera is bound to a [Context3D](Context3D.md).

***

### fov

> **fov**: `number` = `60`

Defined in: [src/core/Camera3D.ts:37](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L37)

camera Perspective

***

### name

> **name**: `string`

Defined in: [src/core/Camera3D.ts:42](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L42)

camera use name

***

### aspect

> **aspect**: `number` = `1`

Defined in: [src/core/Camera3D.ts:47](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L47)

Viewport width and height Scale

***

### near

> **near**: `number` = `1`

Defined in: [src/core/Camera3D.ts:52](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L52)

camera near plane

***

### far

> **far**: `number` = `5000`

Defined in: [src/core/Camera3D.ts:57](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L57)

camera far plane

***

### left

> **left**: `number` = `-100`

Defined in: [src/core/Camera3D.ts:62](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L62)

orth camera right plane

***

### right

> **right**: `number` = `100`

Defined in: [src/core/Camera3D.ts:67](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L67)

orth camera left plane

***

### top

> **top**: `number` = `100`

Defined in: [src/core/Camera3D.ts:72](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L72)

orth camera top plane

***

### bottom

> **bottom**: `number` = `-100`

Defined in: [src/core/Camera3D.ts:77](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L77)

orth camera bottom plane

***

### frustumSize

> **frustumSize**: `number` = `0`

Defined in: [src/core/Camera3D.ts:82](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L82)

orth view size

***

### frustumDepth

> **frustumDepth**: `number` = `0`

Defined in: [src/core/Camera3D.ts:87](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L87)

orth view depth range

***

### viewPort

> **viewPort**: [`Rect`](Rect.md)

Defined in: [src/core/Camera3D.ts:92](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L92)

camera view port size

***

### frustum

> **frustum**: `Frustum`

Defined in: [src/core/Camera3D.ts:97](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L97)

camera frustum

***

### sh

> **sh**: `Float32Array`

Defined in: [src/core/Camera3D.ts:114](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L114)

Spherical-harmonics coefficients of the ambient/diffuse environment lighting.

***

### isShadowCamera

> **isShadowCamera**: `boolean` = `false`

Defined in: [src/core/Camera3D.ts:119](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L119)

this camera is shadow camera

***

### shadowLight?

> `optional` **shadowLight?**: [`ILight`](../interfaces/ILight.md)

Defined in: [src/core/Camera3D.ts:124](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L124)

The light this camera renders the shadow map for, when it is a shadow camera.

***

### cullingMask

> **cullingMask**: `number` = `VisibleLayer.All`

Defined in: [src/core/Camera3D.ts:142](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L142)

Layer-mask of layers this camera should see. Combined at pass
execute time with `node.visibleLayer` and the active pass's
`layerMask` via bitwise AND:

    (node.visibleLayer & pass.layerMask & camera.cullingMask) !== 0

Defaults to [VisibleLayer.All](../@orillusion/namespaces/VisibleLayer/variables/All.md) so untouched cameras keep
the historical "see everything" behaviour. Sub-cameras
(minimaps, reflection probes, picking-only views) can clear
specific bits to suppress unwanted layers.

Camera-side filtering is layered on top of pass-side filtering:
a layer must clear both masks AND the node's own membership to
be drawn.

***

### lookTarget

> **lookTarget**: [`Vector3`](Vector3.md)

Defined in: [src/core/Camera3D.ts:169](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L169)

camera look at from where point

***

### type

> **type**: [`CameraType`](../enumerations/CameraType.md) = `CameraType.perspective`

Defined in: [src/core/Camera3D.ts:174](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L174)

camera type

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

### viewMatrix

#### Get Signature

> **get** **viewMatrix**(): [`Matrix4`](Matrix4.md)

Defined in: [src/core/Camera3D.ts:335](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L335)

view invert matrix

##### Returns

[`Matrix4`](Matrix4.md)

***

### shadowViewMatrix

#### Get Signature

> **get** **shadowViewMatrix**(): [`Matrix4`](Matrix4.md)

Defined in: [src/core/Camera3D.ts:345](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L345)

shadow camera view invert matrix

##### Returns

[`Matrix4`](Matrix4.md)

***

### pvMatrix

#### Get Signature

> **get** **pvMatrix**(): [`Matrix4`](Matrix4.md)

Defined in: [src/core/Camera3D.ts:396](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L396)

get project * view matrix

##### Returns

[`Matrix4`](Matrix4.md)

***

### pvMatrix2

#### Get Signature

> **get** **pvMatrix2**(): [`Matrix4`](Matrix4.md)

Defined in: [src/core/Camera3D.ts:404](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L404)

get the inverse of (projection * world) matrix

##### Returns

[`Matrix4`](Matrix4.md)

***

### pvMatrixInv

#### Get Signature

> **get** **pvMatrixInv**(): [`Matrix4`](Matrix4.md)

Defined in: [src/core/Camera3D.ts:414](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L414)

get (project * view) invert matrix

##### Returns

[`Matrix4`](Matrix4.md)

***

### vMatrixInv

#### Get Signature

> **get** **vMatrixInv**(): [`Matrix4`](Matrix4.md)

Defined in: [src/core/Camera3D.ts:423](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L423)

get the inverse of the view matrix

##### Returns

[`Matrix4`](Matrix4.md)

***

### cameraToWorld

#### Get Signature

> **get** **cameraToWorld**(): [`Matrix4`](Matrix4.md)

Defined in: [src/core/Camera3D.ts:432](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L432)

get the matrix transforming camera/clip space back to world space

##### Returns

[`Matrix4`](Matrix4.md)

***

### ndcToView

#### Get Signature

> **get** **ndcToView**(): [`Matrix4`](Matrix4.md)

Defined in: [src/core/Camera3D.ts:443](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L443)

get the matrix transforming NDC space to view space (inverse projection)

##### Returns

[`Matrix4`](Matrix4.md)

***

### projectionMatrixInv

#### Get Signature

> **get** **projectionMatrixInv**(): [`Matrix4`](Matrix4.md)

Defined in: [src/core/Camera3D.ts:453](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L453)

get project invert matrix

##### Returns

[`Matrix4`](Matrix4.md)

***

### jitterFrameIndex

#### Get Signature

> **get** **jitterFrameIndex**(): `number`

Defined in: [src/core/Camera3D.ts:581](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L581)

get the current TAA jitter frame index

##### Returns

`number`

***

### jitterX

#### Get Signature

> **get** **jitterX**(): `number`

Defined in: [src/core/Camera3D.ts:588](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L588)

get the current frame's TAA jitter offset on the X axis (in NDC)

##### Returns

`number`

***

### jitterY

#### Get Signature

> **get** **jitterY**(): `number`

Defined in: [src/core/Camera3D.ts:595](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L595)

get the current frame's TAA jitter offset on the Y axis (in NDC)

##### Returns

`number`

## Methods

### start()

> **start**(): `void`

Defined in: [src/components/ComponentBase.ts:162](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L162)

#### Returns

`void`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`start`](ComponentBase.md#start)

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

Defined in: [src/core/Camera3D.ts:180](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L180)

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`init`](ComponentBase.md#init)

***

### updateProjection()

> **updateProjection**(): `void`

Defined in: [src/core/Camera3D.ts:210](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L210)

#### Returns

`void`

***

### getShadowBias()

> **getShadowBias**(`depthTexSize`): `number`

Defined in: [src/core/Camera3D.ts:236](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L236)

Compute a legacy auto shadow-bias baseline for the given depth texture size.

Legacy auto baseline used by DDGI / GodRay compute paths.
Real-time shadow now derives bias per-light via ShadowBiasCalculator.

#### Parameters

##### depthTexSize

`number`

the side length of the shadow depth texture

#### Returns

`number`

the computed shadow bias

***

### getShadowWorldExtents()

> **getShadowWorldExtents**(): `number`

Defined in: [src/core/Camera3D.ts:246](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L246)

Get the rounded world-space extent of the camera frustum, used to scale shadow bias.

#### Returns

`number`

the world-space extent value

***

### perspective()

> **perspective**(`fov`, `aspect`, `near`, `far`): `void`

Defined in: [src/core/Camera3D.ts:258](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L258)

Create a perspective camera

#### Parameters

##### fov

`number`

##### aspect

`number`

##### near

`number`

##### far

`number`

#### Returns

`void`

***

### ortho()

> **ortho**(`frustumSize`, `frustumDepth`): `void`

Defined in: [src/core/Camera3D.ts:274](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L274)

set an orthographic camera with a frustumSize(viewHeight) and frustumSizeDepth

#### Parameters

##### frustumSize

`number`

the frustum view height

##### frustumDepth

`number`

#### Returns

`void`

***

### ortho2()

> **ortho2**(`frustumSize`, `near`, `far`): `void`

Defined in: [src/core/Camera3D.ts:297](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L297)

set an orthographic camera with a frustumSize(viewHeight) and specific near & far

#### Parameters

##### frustumSize

`number`

the frustum view height

##### near

`number`

camera near plane

##### far

`number`

camera far plane

#### Returns

`void`

***

### orthoOffCenter()

> **orthoOffCenter**(`left`, `right`, `bottom`, `top`, `near`, `far`): `void`

Defined in: [src/core/Camera3D.ts:318](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L318)

set an orthographic camera with specified frustum space

#### Parameters

##### left

`number`

camera left plane

##### right

`number`

camera right plane

##### bottom

`number`

camera bottom plane

##### top

`number`

camera top plane

##### near

`number`

camera near plane

##### far

`number`

camera far plane

#### Returns

`void`

***

### object3DToScreenRay()

> **object3DToScreenRay**(`n`, `target?`): [`Vector3`](Vector3.md)

Defined in: [src/core/Camera3D.ts:357](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L357)

world space object to screen

#### Parameters

##### n

[`Vector3`](Vector3.md)

world space

##### target?

[`Vector3`](Vector3.md) = `null`

Creating an orthogonal camera with 2D screen coordinates that default to null will return a new object

#### Returns

[`Vector3`](Vector3.md)

***

### screenRayToObject3D()

> **screenRayToObject3D**(`n`, `target?`): [`Vector3`](Vector3.md)

Defined in: [src/core/Camera3D.ts:377](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L377)

Convert 2D screen coordinates to 3D coordinates as world space

#### Parameters

##### n

[`Vector3`](Vector3.md)

2D screen coordinates

##### target?

[`Vector3`](Vector3.md) = `null`

3D coordinates as world space

#### Returns

[`Vector3`](Vector3.md)

***

### unProject()

> **unProject**(`nX`, `nY`, `sZ`, `target?`): [`Vector3`](Vector3.md)

Defined in: [src/core/Camera3D.ts:467](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L467)

Enter a 3D coordinate point to obtain the projected coordinate point

#### Parameters

##### nX

`number`

3D x

##### nY

`number`

3D y

##### sZ

`number`

3D z

##### target?

[`Vector3`](Vector3.md)

The projected coordinate point can be empty

#### Returns

[`Vector3`](Vector3.md)

Coordinates after projection

***

### screenPointToRay()

> **screenPointToRay**(`viewPortPosX`, `viewPortPosY`): [`Ray`](Ray.md)

Defined in: [src/core/Camera3D.ts:506](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L506)

Enter the 2D coordinates of the screen to obtain a ray that starts from the camera position and passes through the corresponding 3D position of the screen.

#### Parameters

##### viewPortPosX

`number`

Screen x coordinate

##### viewPortPosY

`number`

Screen y coordinate

#### Returns

[`Ray`](Ray.md)

ray

***

### screenPointToWorld()

> **screenPointToWorld**(`viewPortPosX`, `viewPortPosY`, `z`): [`Vector3`](Vector3.md)

Defined in: [src/core/Camera3D.ts:527](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L527)

Convert screen coordinates to world coordinates

#### Parameters

##### viewPortPosX

`number`

Screen x coordinate

##### viewPortPosY

`number`

Screen y coordinate

##### z

`number`

Screen z coordinate

#### Returns

[`Vector3`](Vector3.md)

World coordinates

***

### worldToScreenPoint()

> **worldToScreenPoint**(`point`, `target?`): [`Vector3`](Vector3.md)

Defined in: [src/core/Camera3D.ts:539](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L539)

Convert world coordinates to screen coordinates

#### Parameters

##### point

[`Vector3`](Vector3.md)

##### target?

[`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

World coordinates

***

### lookAt()

> **lookAt**(`pos`, `target`, `up?`): `void`

Defined in: [src/core/Camera3D.ts:550](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L550)

Current object's gaze position (global) (modified by its own global transformation)

#### Parameters

##### pos

[`Vector3`](Vector3.md)

Own position (global)

##### target

[`Vector3`](Vector3.md)

Location of the target (global)

##### up?

[`Vector3`](Vector3.md) = `Vector3.Y_AXIS`

Upward direction

#### Returns

`void`

***

### enableJitterProjection()

> **enableJitterProjection**(`value`): `void`

Defined in: [src/core/Camera3D.ts:603](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L603)

Enable or disable TAA jitter on the projection matrix.

#### Parameters

##### value

`boolean`

whether jitter projection should be applied each frame

#### Returns

`void`

***

### getWorldDirection()

> **getWorldDirection**(`target?`): [`Vector3`](Vector3.md)

Defined in: [src/core/Camera3D.ts:683](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L683)

Get the camera's forward direction in world space.

#### Parameters

##### target?

[`Vector3`](Vector3.md)

optional vector to store the result

#### Returns

[`Vector3`](Vector3.md)

the normalized world-space forward direction

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [src/core/Camera3D.ts:694](https://github.com/orillusion/orillusion/blob/main/src/core/Camera3D.ts#L694)

Release the matrix slots held by this camera and destroy the component.

#### Parameters

##### force?

`boolean`

whether to force-destroy

#### Returns

`void`

#### Overrides

[`ComponentBase`](ComponentBase.md).[`destroy`](ComponentBase.md#destroy)
