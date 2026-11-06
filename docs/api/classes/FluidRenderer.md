[**@orillusion/core**](../README.md)

***

# Class: FluidRenderer

Defined in: [src/components/renderer/FluidRenderer.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L76)

Renders a particle set as a continuous liquid surface (screen-space
fluid rendering). Particles are drawn as sphere impostors into a
depth buffer which is then smoothed and shaded in screen space.

Requires `setting.render.fluid = true` so [ForwardRendererJob](ForwardRendererJob.md)
adds [FluidPass](FluidPass.md). The fluid is drawn after opaque geometry and
before transparent geometry.

Particle positions are in the local space of the owning Object3D
(world space when it sits at the origin unscaled); particleSize is
in world units. They come from either:
- [setDataBuffer](#setdatabuffer): a CPU `Float32Array`, uploaded when set.
- [setDataBufferGPU](#setdatabuffergpu): an existing storage buffer (e.g. written by
  a simulation compute shader), read directly without a copy.

## Extends

- [`ComponentBase`](ComponentBase.md)

## Constructors

### Constructor

> **new FluidRenderer**(): `FluidRenderer`

#### Returns

`FluidRenderer`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`constructor`](ComponentBase.md#constructor)

## Properties

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

### particleSize

> **particleSize**: `number` = `0.1`

Defined in: [src/components/renderer/FluidRenderer.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L78)

Particle diameter in world units.

***

### particleThicknessAlpha

> **particleThicknessAlpha**: `number` = `0.05`

Defined in: [src/components/renderer/FluidRenderer.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L80)

Thickness one particle adds at its center; the fluid gets more opaque as it grows.

***

### depthMapSize

> **depthMapSize**: `number` = `null`

Defined in: [src/components/renderer/FluidRenderer.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L83)

Width of the depth map in pixels; height follows the screen aspect. null = screen size.

***

### thicknessMapSize

> **thicknessMapSize**: `number` = `null`

Defined in: [src/components/renderer/FluidRenderer.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L85)

Width of the thickness map in pixels; height follows the screen aspect. null = screen size.

***

### fluidColor

> **fluidColor**: [`Color`](Color.md)

Defined in: [src/components/renderer/FluidRenderer.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L88)

Absorption color: light passing through the fluid is tinted toward it.

***

### density

> **density**: `number` = `2`

Defined in: [src/components/renderer/FluidRenderer.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L90)

Absorption strength; higher makes the fluid more opaque. With [FluidThicknessMode.Geometric](../enumerations/FluidThicknessMode.md#geometric) it is per world unit of thickness.

***

### refractionStrength

> **refractionStrength**: `number` = `1`

Defined in: [src/components/renderer/FluidRenderer.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L92)

Scale of the refraction offset: 1 follows the refracted ray to the scene behind, 0 disables refraction.

***

### fresnelClamp

> **fresnelClamp**: `number` = `1`

Defined in: [src/components/renderer/FluidRenderer.ts:94](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L94)

Upper bound of the fresnel reflection weight (0 to 1).

***

### specularPower

> **specularPower**: `number` = `250`

Defined in: [src/components/renderer/FluidRenderer.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L96)

Specular exponent; higher gives a smaller, sharper highlight.

***

### minimumThickness

> **minimumThickness**: `number` = `0`

Defined in: [src/components/renderer/FluidRenderer.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L98)

Pixels with less thickness show the background. With [useFixedThickness](#usefixedthickness), the thickness used everywhere.

***

### edgeSoftness

> **edgeSoftness**: `number` = `0`

Defined in: [src/components/renderer/FluidRenderer.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L104)

Fade the fluid into the background where it is thinner than this many particles
(particleThicknessAlpha each when accumulated, particleSize each when geometric);
softens free edges. 0 disables.

***

### useFixedThickness

> **useFixedThickness**: `boolean` = `false`

Defined in: [src/components/renderer/FluidRenderer.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L116)

Skip the thickness pass and use [minimumThickness](#minimumthickness) as a constant thickness.

***

### dirLight

> **dirLight**: [`Vector3`](Vector3.md) = `null`

Defined in: [src/components/renderer/FluidRenderer.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L118)

World-space direction the light travels, for the specular highlight. null uses the scene's first DirectLight, or (-2, -1, 1) without one.

***

### environmentMap

> **environmentMap**: [`Texture`](Texture.md) = `undefined`

Defined in: [src/components/renderer/FluidRenderer.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L120)

Cube map reflected by the fluid. undefined uses the scene's envMap; null disables reflection.

***

### useAnisotropy

> **useAnisotropy**: `boolean` = `false`

Defined in: [src/components/renderer/FluidRenderer.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L126)

Stretch each particle into an ellipsoid along its neighbor distribution, so flat
regions stay flat and thin sheets stay thin. Adds a neighbor search on the GPU each frame.

***

### anisotropyRadius

> **anisotropyRadius**: `number` = `null`

Defined in: [src/components/renderer/FluidRenderer.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L128)

Neighbor search radius in world units. null uses 1.5 × particleSize.

***

### anisotropyMaxRatio

> **anisotropyMaxRatio**: `number` = `4`

Defined in: [src/components/renderer/FluidRenderer.ts:130](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L130)

Largest ratio between the longest and shortest ellipsoid axis.

***

### anisotropyMinNeighbors

> **anisotropyMinNeighbors**: `number` = `10`

Defined in: [src/components/renderer/FluidRenderer.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L132)

Particles with fewer neighbors stay spheres (spray, droplets).

***

### anisotropySmoothing

> **anisotropySmoothing**: `number` = `0.5`

Defined in: [src/components/renderer/FluidRenderer.ts:134](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L134)

How far (0 to 1) each particle moves toward the weighted mean of its neighbors, which smooths the surface.

***

### enableBlurDepth

> **enableBlurDepth**: `boolean` = `true`

Defined in: [src/components/renderer/FluidRenderer.ts:137](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L137)

Smooth the depth map so the spheres merge into one surface.

***

### blurDepthSizeDivisor

> **blurDepthSizeDivisor**: `number` = `1`

Defined in: [src/components/renderer/FluidRenderer.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L148)

Depth blur runs at the depth map size divided by this.

***

### blurDepthFilterSize

> **blurDepthFilterSize**: `number` = `7`

Defined in: [src/components/renderer/FluidRenderer.ts:150](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L150)

Depth blur radius, relative to the projected particle size.

***

### blurDepthNumIterations

> **blurDepthNumIterations**: `number` = `3`

Defined in: [src/components/renderer/FluidRenderer.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L152)

Depth blur passes (each is one horizontal + one vertical pass).

***

### blurDepthMaxFilterSize

> **blurDepthMaxFilterSize**: `number` = `100`

Defined in: [src/components/renderer/FluidRenderer.ts:154](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L154)

Upper bound of the depth blur radius in pixels.

***

### blurDepthDepthScale

> **blurDepthDepthScale**: `number` = `10`

Defined in: [src/components/renderer/FluidRenderer.ts:156](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L156)

Depth range, in particle radii, across which samples are still blended; larger merges more.

***

### enableBlurThickness

> **enableBlurThickness**: `boolean` = `true`

Defined in: [src/components/renderer/FluidRenderer.ts:159](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L159)

Smooth the thickness map.

***

### blurThicknessSizeDivisor

> **blurThicknessSizeDivisor**: `number` = `1`

Defined in: [src/components/renderer/FluidRenderer.ts:161](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L161)

Thickness blur runs at the thickness map size divided by this.

***

### blurThicknessFilterSize

> **blurThicknessFilterSize**: `number` = `5`

Defined in: [src/components/renderer/FluidRenderer.ts:163](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L163)

Thickness blur radius in pixels.

***

### blurThicknessNumIterations

> **blurThicknessNumIterations**: `number` = `1`

Defined in: [src/components/renderer/FluidRenderer.ts:165](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L165)

Thickness blur passes (each is one horizontal + one vertical pass).

***

### debug

> **debug**: `boolean` = `false`

Defined in: [src/components/renderer/FluidRenderer.ts:168](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L168)

Show the image selected by [debugFeature](#debugfeature) instead of the fluid.

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

### thicknessMode

#### Get Signature

> **get** **thicknessMode**(): [`FluidThicknessMode`](../enumerations/FluidThicknessMode.md)

Defined in: [src/components/renderer/FluidRenderer.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L108)

How thickness is measured for absorption.

##### Returns

[`FluidThicknessMode`](../enumerations/FluidThicknessMode.md)

#### Set Signature

> **set** **thicknessMode**(`value`): `void`

Defined in: [src/components/renderer/FluidRenderer.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L111)

##### Parameters

###### value

[`FluidThicknessMode`](../enumerations/FluidThicknessMode.md)

##### Returns

`void`

***

### depthFilter

#### Get Signature

> **get** **depthFilter**(): [`FluidDepthFilter`](../enumerations/FluidDepthFilter.md)

Defined in: [src/components/renderer/FluidRenderer.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L140)

Filter used to smooth the depth map.

##### Returns

[`FluidDepthFilter`](../enumerations/FluidDepthFilter.md)

#### Set Signature

> **set** **depthFilter**(`value`): `void`

Defined in: [src/components/renderer/FluidRenderer.ts:143](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L143)

##### Parameters

###### value

[`FluidDepthFilter`](../enumerations/FluidDepthFilter.md)

##### Returns

`void`

***

### debugFeature

#### Get Signature

> **get** **debugFeature**(): [`FluidDebug`](../enumerations/FluidDebug.md)

Defined in: [src/components/renderer/FluidRenderer.ts:171](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L171)

##### Returns

[`FluidDebug`](../enumerations/FluidDebug.md)

#### Set Signature

> **set** **debugFeature**(`value`): `void`

Defined in: [src/components/renderer/FluidRenderer.ts:174](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L174)

##### Parameters

###### value

[`FluidDebug`](../enumerations/FluidDebug.md)

##### Returns

`void`

***

### particleCount

#### Get Signature

> **get** **particleCount**(): `number`

Defined in: [src/components/renderer/FluidRenderer.ts:218](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L218)

Number of particles drawn. Can be lowered to draw a prefix of the buffer.

##### Returns

`number`

#### Set Signature

> **set** **particleCount**(`value`): `void`

Defined in: [src/components/renderer/FluidRenderer.ts:221](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L221)

##### Parameters

###### value

`number`

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

### onEnable()?

> `optional` **onEnable**(`view?`): `any`

Defined in: [src/components/ComponentBase.ts:164](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L164)

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

Defined in: [src/components/ComponentBase.ts:165](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L165)

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

Defined in: [src/components/ComponentBase.ts:166](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L166)

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

### cloneTo()

> **cloneTo**(`obj`): `void`

Defined in: [src/components/ComponentBase.ts:180](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L180)

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

### destroy()

> **destroy**(`force?`): `void`

Defined in: [src/components/ComponentBase.ts:256](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L256)

release this component

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

[`ComponentBase`](ComponentBase.md).[`destroy`](ComponentBase.md#destroy)

***

### setDataBuffer()

> **setDataBuffer**(`data`, `count?`, `layout?`): `void`

Defined in: [src/components/renderer/FluidRenderer.ts:193](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L193)

Use CPU particle data. The array is uploaded on the next frame;
call again after modifying it in place to re-upload.

#### Parameters

##### data

`Float32Array`

particle data, laid out as described by `layout`

##### count?

`number`

number of particles; defaults to as many as `data` holds

##### layout?

[`FluidDataLayout`](../type-aliases/FluidDataLayout.md)

particle byte layout

#### Returns

`void`

***

### setDataBufferGPU()

> **setDataBufferGPU**(`buffer`, `count`, `layout?`): `void`

Defined in: [src/components/renderer/FluidRenderer.ts:210](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/FluidRenderer.ts#L210)

Use a GPU buffer as particle data. The buffer needs `STORAGE`
usage and is read every frame, so updates made by compute shaders
show up without further calls.

#### Parameters

##### buffer

`GPUBufferBase`

storage buffer holding the particles

##### count

`number`

number of particles to draw

##### layout?

[`FluidDataLayout`](../type-aliases/FluidDataLayout.md)

particle byte layout

#### Returns

`void`
