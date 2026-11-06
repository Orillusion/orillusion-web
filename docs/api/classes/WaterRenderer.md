[**@orillusion/core**](../README.md)

***

# Class: WaterRenderer

Defined in: [src/components/renderer/WaterRenderer.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L53)

Water surface: a grid on the owner's xz plane displaced by Gerstner
waves and shaded by [WaterMaterial](WaterMaterial.md) (refraction, absorption,
reflection, sun highlight).

Waves are up to eight Gerstner waves ([waves](#waves)) plus, for open
water, a wind-driven sea simulated with FFTs ([spectrum](#spectrum)).

The surface is a rectangle ([width](#width) by [length](#length)) or any flat
mesh in the owner's xz plane ([surfaceGeometry](#surfacegeometry)), e.g. a round
pond. The waves are evaluated in world space, so several water objects
line up; [getHeight](#getheight) returns the same surface on the CPU. The owner
may be scaled and rotated about y; the surface stays horizontal and the
waves keep their world directions.

## Extends

- [`MeshRenderer`](MeshRenderer.md)

## Constructors

### Constructor

> **new WaterRenderer**(): `WaterRenderer`

Defined in: [src/components/renderer/MeshRenderer.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L26)

#### Returns

`WaterRenderer`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`constructor`](MeshRenderer.md#constructor)

## Properties

### object3D

> **object3D**: [`Object3D`](Object3D.md) = `null`

Defined in: [src/components/ComponentBase.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L29)

owner object3D

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`object3D`](MeshRenderer.md#object3d)

***

### isDestroyed

> **isDestroyed**: `boolean` = `false`

Defined in: [src/components/ComponentBase.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L77)

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`isDestroyed`](MeshRenderer.md#isdestroyed)

***

### receiveShadow

> **receiveShadow**: `boolean`

Defined in: [src/components/renderer/MeshRenderer.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L23)

Enabling this option allows the grid to display any shadows cast on the grid.

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`receiveShadow`](MeshRenderer.md#receiveshadow)

***

### morphData

> **morphData**: [`MorphTargetData`](MorphTargetData.md)

Defined in: [src/components/renderer/MeshRenderer.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L24)

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`morphData`](MeshRenderer.md#morphdata)

***

### instanceCount

> **instanceCount**: `number` = `0`

Defined in: [src/components/renderer/RenderNode.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L35)

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`instanceCount`](MeshRenderer.md#instancecount)

***

### lodLevel

> **lodLevel**: `number` = `0`

Defined in: [src/components/renderer/RenderNode.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L36)

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`lodLevel`](MeshRenderer.md#lodlevel)

***

### alwaysRender

> **alwaysRender**: `boolean` = `false`

Defined in: [src/components/renderer/RenderNode.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L37)

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`alwaysRender`](MeshRenderer.md#alwaysrender)

***

### instanceID

> **instanceID**: `string`

Defined in: [src/components/renderer/RenderNode.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L38)

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`instanceID`](MeshRenderer.md#instanceid)

***

### drawType

> **drawType**: `number` = `0`

Defined in: [src/components/renderer/RenderNode.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L39)

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`drawType`](MeshRenderer.md#drawtype)

***

### isRenderOrderChange?

> `optional` **isRenderOrderChange?**: `boolean`

Defined in: [src/components/renderer/RenderNode.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L55)

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`isRenderOrderChange`](MeshRenderer.md#isrenderorderchange)

***

### needSortOnCameraZ?

> `optional` **needSortOnCameraZ?**: `boolean`

Defined in: [src/components/renderer/RenderNode.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L56)

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`needSortOnCameraZ`](MeshRenderer.md#needsortoncameraz)

***

### shadowCacheMode

> **shadowCacheMode**: `"auto"` \| `"static"` \| `"dynamic"` = `'auto'`

Defined in: [src/components/renderer/RenderNode.ts:446](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L446)

Shadow cache classification.

- `'auto'` (default): renderer is drawn to the shadow map every frame
  as part of the single-pass render — matches historical behaviour.
- `'static'`: renderer is drawn only to the cached static depth layer,
  rebuilt lazily when the light moves or the scene explicitly marks
  the static cache dirty. Use for buildings, terrain, prop meshes that
  don't move.
- `'dynamic'`: renderer is drawn every frame on top of the copied-in
  static layer. Use for characters, physics objects, anything that
  moves.

Only consulted when `engine.setting.shadow.enableStaticCache === true`;
otherwise all renderers behave as `'auto'`.

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`shadowCacheMode`](MeshRenderer.md#shadowcachemode)

***

### waves

> **waves**: [`GerstnerWave`](../type-aliases/GerstnerWave.md)[]

Defined in: [src/components/renderer/WaterRenderer.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L55)

Up to [WATER\_MAX\_WAVES](../variables/WATER_MAX_WAVES.md) waves; edit in place or reassign.

***

### timeScale

> **timeScale**: `number` = `1`

Defined in: [src/components/renderer/WaterRenderer.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L62)

Wave animation speed; 0 freezes the surface.

***

### caustics

> **caustics**: `boolean` = `true`

Defined in: [src/components/renderer/WaterRenderer.ts:64](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L64)

Sunlight caustics on everything under the surface (CausticsPass, `setting.render.water`).

***

### causticsIntensity

> **causticsIntensity**: `number` = `0.6`

Defined in: [src/components/renderer/WaterRenderer.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L66)

Strength of the caustics.

***

### detailScale

> **detailScale**: `number` = `1.8`

Defined in: [src/components/renderer/WaterRenderer.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L72)

Base wavelength in world units of the fine ripples on top of the waves.
Too small to displace the mesh, they bend the surface normal per pixel
and focus the sunlight into the caustics.

***

### detailStrength

> **detailStrength**: `number` = `0.35`

Defined in: [src/components/renderer/WaterRenderer.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L78)

How much the fine ripples bend the surface normal (0 to 1): 1 is the
slope that focuses the caustics, which always use all of it; lower keeps
the view through calm water clearer.

***

### rippleSpeed

> **rippleSpeed**: `number` = `1.2`

Defined in: [src/components/renderer/WaterRenderer.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L80)

Speed of the interactive ripples ([addRipple](#addripple)) in world units per second.

***

### rippleDamping

> **rippleDamping**: `number` = `0.3`

Defined in: [src/components/renderer/WaterRenderer.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L82)

Fraction of the ripples' motion lost per second.

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

[`MeshRenderer`](MeshRenderer.md).[`visibleLayer`](MeshRenderer.md#visiblelayer)

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

[`MeshRenderer`](MeshRenderer.md).[`eventDispatcher`](MeshRenderer.md#eventdispatcher)

***

### isStart

#### Get Signature

> **get** **isStart**(): `boolean`

Defined in: [src/components/ComponentBase.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L79)

##### Returns

`boolean`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`isStart`](MeshRenderer.md#isstart)

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

[`MeshRenderer`](MeshRenderer.md).[`transform`](MeshRenderer.md#transform)

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

[`MeshRenderer`](MeshRenderer.md).[`enable`](MeshRenderer.md#enable)

***

### geometry

#### Get Signature

> **get** **geometry**(): [`GeometryBase`](GeometryBase.md)

Defined in: [src/components/renderer/MeshRenderer.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L53)

The geometry of the mesh determines its shape

##### Returns

[`GeometryBase`](GeometryBase.md)

#### Set Signature

> **set** **geometry**(`value`): `void`

Defined in: [src/components/renderer/MeshRenderer.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L57)

##### Parameters

###### value

[`GeometryBase`](GeometryBase.md)

##### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`geometry`](MeshRenderer.md#geometry)

***

### material

#### Get Signature

> **get** **material**(): [`Material`](Material.md)

Defined in: [src/components/renderer/MeshRenderer.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L99)

material

##### Returns

[`Material`](Material.md)

#### Set Signature

> **set** **material**(`value`): `void`

Defined in: [src/components/renderer/MeshRenderer.ts:103](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L103)

##### Parameters

###### value

[`Material`](Material.md)

##### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`material`](MeshRenderer.md#material)

***

### batchMode

#### Get Signature

> **get** **batchMode**(): [`BatchMode`](../enumerations/BatchMode.md)

Defined in: [src/components/renderer/RenderNode.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L118)

##### Returns

[`BatchMode`](../enumerations/BatchMode.md)

#### Set Signature

> **set** **batchMode**(`value`): `void`

Defined in: [src/components/renderer/RenderNode.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L122)

##### Parameters

###### value

[`BatchMode`](../enumerations/BatchMode.md)

##### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`batchMode`](MeshRenderer.md#batchmode)

***

### rendererMask

#### Get Signature

> **get** **rendererMask**(): `number`

Defined in: [src/components/renderer/RenderNode.ts:156](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L156)

##### Returns

`number`

#### Set Signature

> **set** **rendererMask**(`value`): `void`

Defined in: [src/components/renderer/RenderNode.ts:160](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L160)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`rendererMask`](MeshRenderer.md#renderermask)

***

### renderOrder

#### Get Signature

> **get** **renderOrder**(): `number`

Defined in: [src/components/renderer/RenderNode.ts:164](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L164)

##### Returns

`number`

#### Set Signature

> **set** **renderOrder**(`value`): `void`

Defined in: [src/components/renderer/RenderNode.ts:168](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L168)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`renderOrder`](MeshRenderer.md#renderorder)

***

### materials

#### Get Signature

> **get** **materials**(): [`Material`](Material.md)[]

Defined in: [src/components/renderer/RenderNode.ts:177](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L177)

##### Returns

[`Material`](Material.md)[]

#### Set Signature

> **set** **materials**(`value`): `void`

Defined in: [src/components/renderer/RenderNode.ts:181](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L181)

##### Parameters

###### value

[`Material`](Material.md)[]

##### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`materials`](MeshRenderer.md#materials)

***

### castShadow

#### Get Signature

> **get** **castShadow**(): `boolean`

Defined in: [src/components/renderer/RenderNode.ts:422](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L422)

##### Returns

`boolean`

#### Set Signature

> **set** **castShadow**(`value`): `void`

Defined in: [src/components/renderer/RenderNode.ts:426](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L426)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`castShadow`](MeshRenderer.md#castshadow)

***

### castGI

#### Get Signature

> **get** **castGI**(): `boolean`

Defined in: [src/components/renderer/RenderNode.ts:449](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L449)

##### Returns

`boolean`

#### Set Signature

> **set** **castGI**(`value`): `void`

Defined in: [src/components/renderer/RenderNode.ts:453](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L453)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`castGI`](MeshRenderer.md#castgi)

***

### castReflection

#### Get Signature

> **get** **castReflection**(): `boolean`

Defined in: [src/components/renderer/RenderNode.ts:457](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L457)

##### Returns

`boolean`

#### Set Signature

> **set** **castReflection**(`value`): `void`

Defined in: [src/components/renderer/RenderNode.ts:461](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L461)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`castReflection`](MeshRenderer.md#castreflection)

***

### waterMaterial

#### Get Signature

> **get** **waterMaterial**(): [`WaterMaterial`](WaterMaterial.md)

Defined in: [src/components/renderer/WaterRenderer.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L126)

Surface material, for shading parameters.

##### Returns

[`WaterMaterial`](WaterMaterial.md)

***

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [src/components/renderer/WaterRenderer.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L131)

Size of the default rectangle along local x; the owner's scale applies.

##### Returns

`number`

#### Set Signature

> **set** **width**(`value`): `void`

Defined in: [src/components/renderer/WaterRenderer.ts:134](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L134)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### length

#### Get Signature

> **get** **length**(): `number`

Defined in: [src/components/renderer/WaterRenderer.ts:141](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L141)

Size of the default rectangle along local z; the owner's scale applies.

##### Returns

`number`

#### Set Signature

> **set** **length**(`value`): `void`

Defined in: [src/components/renderer/WaterRenderer.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L144)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### resolution

#### Get Signature

> **get** **resolution**(): `number`

Defined in: [src/components/renderer/WaterRenderer.ts:151](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L151)

Grid segments of the default rectangle along its longer side; the waves need a few vertices per shortest wavelength.

##### Returns

`number`

#### Set Signature

> **set** **resolution**(`value`): `void`

Defined in: [src/components/renderer/WaterRenderer.ts:154](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L154)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### surfaceGeometry

#### Get Signature

> **get** **surfaceGeometry**(): [`GeometryBase`](GeometryBase.md)

Defined in: [src/components/renderer/WaterRenderer.ts:165](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L165)

Custom surface mesh: flat, in the owner's local xz plane (its y is
ignored), indexed, and fine enough for the waves. The water,
underwater view and caustics all follow its outline. Null restores
the rectangle.

##### Returns

[`GeometryBase`](GeometryBase.md)

#### Set Signature

> **set** **surfaceGeometry**(`value`): `void`

Defined in: [src/components/renderer/WaterRenderer.ts:168](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L168)

##### Parameters

###### value

[`GeometryBase`](GeometryBase.md)

##### Returns

`void`

***

### waveFadeDistance

#### Get Signature

> **get** **waveFadeDistance**(): `number`

Defined in: [src/components/renderer/WaterRenderer.ts:187](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L187)

Distance from the camera, in wavelengths, at which each wave has faded
out of the surface (from half of it on), so waves too short for the mesh
or the screen there do not alias. The default suits an even mesh; lower
it for a mesh that coarsens with distance. 0 keeps every wave at any
distance. Visual only: [getHeight](#getheight) keeps every wave.

##### Returns

`number`

#### Set Signature

> **set** **waveFadeDistance**(`value`): `void`

Defined in: [src/components/renderer/WaterRenderer.ts:190](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L190)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### rippleResolution

#### Get Signature

> **get** **rippleResolution**(): `number`

Defined in: [src/components/renderer/WaterRenderer.ts:196](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L196)

Ripple grid cells along the longer side of the water; changing it clears the ripples.

##### Returns

`number`

#### Set Signature

> **set** **rippleResolution**(`value`): `void`

Defined in: [src/components/renderer/WaterRenderer.ts:199](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L199)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### rippleArea

#### Get Signature

> **get** **rippleArea**(): `number`

Defined in: [src/components/renderer/WaterRenderer.ts:210](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L210)

Side, in local units, of the square around the water's origin where
ripples are simulated, all of it taken as water; null covers the whole
surface. For water too large for one grid to resolve ripples, such as
an ocean. Changing it clears the ripples.

##### Returns

`number`

#### Set Signature

> **set** **rippleArea**(`value`): `void`

Defined in: [src/components/renderer/WaterRenderer.ts:213](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L213)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### spectrum

#### Get Signature

> **get** **spectrum**(): [`WaterSpectrum`](WaterSpectrum.md)

Defined in: [src/components/renderer/WaterRenderer.ts:250](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L250)

FFT ocean waves added to the Gerstner waves, from wind over open water;
null for none. Needs `setting.render.water`.

##### Returns

[`WaterSpectrum`](WaterSpectrum.md)

#### Set Signature

> **set** **spectrum**(`value`): `void`

Defined in: [src/components/renderer/WaterRenderer.ts:253](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L253)

##### Parameters

###### value

[`WaterSpectrum`](WaterSpectrum.md)

##### Returns

`void`

***

### time

#### Get Signature

> **get** **time**(): `number`

Defined in: [src/components/renderer/WaterRenderer.ts:317](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L317)

Wave phase time in seconds.

##### Returns

`number`

#### Set Signature

> **set** **time**(`value`): `void`

Defined in: [src/components/renderer/WaterRenderer.ts:320](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L320)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### start()

> **start**(): `void`

Defined in: [src/components/ComponentBase.ts:162](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L162)

#### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`start`](MeshRenderer.md#start)

***

### stop()

> **stop**(): `void`

Defined in: [src/components/ComponentBase.ts:163](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L163)

#### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`stop`](MeshRenderer.md#stop)

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

[`MeshRenderer`](MeshRenderer.md).[`onLateUpdate`](MeshRenderer.md#onlateupdate)

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

[`MeshRenderer`](MeshRenderer.md).[`onBeforeUpdate`](MeshRenderer.md#onbeforeupdate)

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

[`MeshRenderer`](MeshRenderer.md).[`onGraphic`](MeshRenderer.md#ongraphic)

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

[`MeshRenderer`](MeshRenderer.md).[`onParentChange`](MeshRenderer.md#onparentchange)

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

[`MeshRenderer`](MeshRenderer.md).[`onAddChild`](MeshRenderer.md#onaddchild)

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

[`MeshRenderer`](MeshRenderer.md).[`onRemoveChild`](MeshRenderer.md#onremovechild)

***

### onEnable()

> **onEnable**(): `void`

Defined in: [src/components/renderer/MeshRenderer.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L30)

#### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`onEnable`](MeshRenderer.md#onenable)

***

### onDisable()

> **onDisable**(): `void`

Defined in: [src/components/renderer/MeshRenderer.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L34)

#### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`onDisable`](MeshRenderer.md#ondisable)

***

### cloneTo()

> **cloneTo**(`obj`): `void`

Defined in: [src/components/renderer/MeshRenderer.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L38)

clone component data to target object3D

#### Parameters

##### obj

[`Object3D`](Object3D.md)

target object3D

#### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`cloneTo`](MeshRenderer.md#cloneto)

***

### copyComponent()

> **copyComponent**(`from`): `this`

Defined in: [src/components/renderer/MeshRenderer.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L43)

#### Parameters

##### from

`this`

#### Returns

`this`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`copyComponent`](MeshRenderer.md#copycomponent)

***

### setMorphInfluence()

> **setMorphInfluence**(`key`, `value`): `void`

Defined in: [src/components/renderer/MeshRenderer.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L110)

Set deformation animation parameters

#### Parameters

##### key

`string`

##### value

`number`

#### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`setMorphInfluence`](MeshRenderer.md#setmorphinfluence)

***

### setMorphInfluenceIndex()

> **setMorphInfluenceIndex**(`index`, `value`): `void`

Defined in: [src/components/renderer/MeshRenderer.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L119)

#### Parameters

##### index

`number`

##### value

`number`

#### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`setMorphInfluenceIndex`](MeshRenderer.md#setmorphinfluenceindex)

***

### onCompute()

> **onCompute**(`view`, `command`): `void`

Defined in: [src/components/renderer/MeshRenderer.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L128)

#### Parameters

##### view

[`View3D`](View3D.md)

##### command

`GPUCommandEncoder`

#### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`onCompute`](MeshRenderer.md#oncompute)

***

### attachSceneOctree()

> **attachSceneOctree**(`octree`): `void`

Defined in: [src/components/renderer/RenderNode.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L87)

#### Parameters

##### octree

[`Octree`](Octree.md)

#### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`attachSceneOctree`](MeshRenderer.md#attachsceneoctree)

***

### detachSceneOctree()

> **detachSceneOctree**(): `void`

Defined in: [src/components/renderer/RenderNode.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L92)

#### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`detachSceneOctree`](MeshRenderer.md#detachsceneoctree)

***

### addMask()

> **addMask**(`mask`): `void`

Defined in: [src/components/renderer/RenderNode.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L144)

#### Parameters

##### mask

[`RendererMask`](../enumerations/RendererMask.md)

#### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`addMask`](MeshRenderer.md#addmask)

***

### removeMask()

> **removeMask**(`mask`): `void`

Defined in: [src/components/renderer/RenderNode.ts:148](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L148)

#### Parameters

##### mask

[`RendererMask`](../enumerations/RendererMask.md)

#### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`removeMask`](MeshRenderer.md#removemask)

***

### hasMask()

> **hasMask**(`mask`): `boolean`

Defined in: [src/components/renderer/RenderNode.ts:152](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L152)

#### Parameters

##### mask

[`RendererMask`](../enumerations/RendererMask.md)

#### Returns

`boolean`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`hasMask`](MeshRenderer.md#hasmask)

***

### addRendererMask()

> **addRendererMask**(`tag`): `void`

Defined in: [src/components/renderer/RenderNode.ts:232](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L232)

#### Parameters

##### tag

[`RendererMask`](../enumerations/RendererMask.md)

#### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`addRendererMask`](MeshRenderer.md#addrenderermask)

***

### removeRendererMask()

> **removeRendererMask**(`tag`): `void`

Defined in: [src/components/renderer/RenderNode.ts:236](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L236)

#### Parameters

##### tag

[`RendererMask`](../enumerations/RendererMask.md)

#### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`removeRendererMask`](MeshRenderer.md#removerenderermask)

***

### refreshRenderClassification()

> **refreshRenderClassification**(): `void`

Defined in: [src/components/renderer/RenderNode.ts:270](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L270)

Recompute renderOrder from current pass states and re-bucket
this renderer in EntityCollect (opaque vs transparent map).

Called when a material's alphaMode flips at runtime — the
pass.renderOrder changes (3000 ↔ 0), but EntityCollect classifies
once at addRenderNode time. Without this nudge the renderer
stays in its old list and gets drawn through the wrong pipeline
(e.g. WBOIT continues drawing a HASH-toggled material).

Materials hop into this via Reference.getReference(material)
to find every renderer holding them; sample code can also call
it directly after manual state changes.

#### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`refreshRenderClassification`](MeshRenderer.md#refreshrenderclassification)

***

### selfCloneMaterials()

> **selfCloneMaterials**(`key`): `this`

Defined in: [src/components/renderer/RenderNode.ts:295](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L295)

#### Parameters

##### key

`string`

#### Returns

`this`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`selfCloneMaterials`](MeshRenderer.md#selfclonematerials)

***

### renderPass()

> **renderPass**(`view`, `passType`, `renderContext`): `void`

Defined in: [src/components/renderer/RenderNode.ts:465](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L465)

#### Parameters

##### view

[`View3D`](View3D.md)

##### passType

`PassType`

##### renderContext

[`RenderContext`](RenderContext.md)

#### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`renderPass`](MeshRenderer.md#renderpass)

***

### renderPass2()

> **renderPass2**(`view`, `passType`, `rendererPassState`, `clusterLightingBuffer`, `encoder`, `useBundle?`): `void`

Defined in: [src/components/renderer/RenderNode.ts:537](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L537)

render pass at passType

#### Parameters

##### view

[`View3D`](View3D.md)

##### passType

`PassType`

##### rendererPassState

`RendererPassState`

##### clusterLightingBuffer

[`ClusterLightingBuffer`](ClusterLightingBuffer.md)

##### encoder

`GPURenderPassEncoder`

##### useBundle?

`boolean` = `false`

#### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`renderPass2`](MeshRenderer.md#renderpass2)

***

### recordRenderPass2()

> **recordRenderPass2**(`view`, `passType`, `rendererPassState`, `clusterLightingBuffer`, `encoder`, `useBundle?`): `void`

Defined in: [src/components/renderer/RenderNode.ts:595](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L595)

#### Parameters

##### view

[`View3D`](View3D.md)

##### passType

`PassType`

##### rendererPassState

`RendererPassState`

##### clusterLightingBuffer

[`ClusterLightingBuffer`](ClusterLightingBuffer.md)

##### encoder

`GPURenderPassEncoder`

##### useBundle?

`boolean` = `false`

#### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`recordRenderPass2`](MeshRenderer.md#recordrenderpass2)

***

### preInit()

> **preInit**(`_rendererType`): `boolean`

Defined in: [src/components/renderer/RenderNode.ts:633](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L633)

#### Parameters

##### \_rendererType

`PassType`

#### Returns

`boolean`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`preInit`](MeshRenderer.md#preinit)

***

### beforeDestroy()

> **beforeDestroy**(`force?`): `void`

Defined in: [src/components/renderer/RenderNode.ts:750](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L750)

before release this component, object refrences are not be set null now.

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`beforeDestroy`](MeshRenderer.md#beforedestroy)

***

### init()

> **init**(`param?`): `void`

Defined in: [src/components/renderer/WaterRenderer.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L110)

#### Parameters

##### param?

`any`

#### Returns

`void`

#### Overrides

[`MeshRenderer`](MeshRenderer.md).[`init`](MeshRenderer.md#init)

***

### addRipple()

> **addRipple**(`x`, `z`, `strength?`, `radius?`): `void`

Defined in: [src/components/renderer/WaterRenderer.ts:235](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L235)

Starts a ripple at world (x, z): the surface there is pushed down, as by
something striking it, and a ring spreads out, reflecting off the edge
of the water. Pointer
input and objects entering or moving through the water all start
ripples this way. Points off the water are ignored; at most
[WATER\_MAX\_RIPPLES\_PER\_FRAME](../variables/WATER_MAX_RIPPLES_PER_FRAME.md) start per frame. Needs
`setting.render.water`.

#### Parameters

##### x

`number`

##### z

`number`

##### strength?

`number` = `0.05`

depth of the crater at its center, in world units

##### radius?

`number` = `0.2`

radius of the pushed area, in world units

#### Returns

`void`

***

### onUpdate()

> **onUpdate**(`view?`): `void`

Defined in: [src/components/renderer/WaterRenderer.ts:324](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L324)

#### Parameters

##### view?

[`View3D`](View3D.md)

#### Returns

`void`

#### Overrides

[`MeshRenderer`](MeshRenderer.md).[`onUpdate`](MeshRenderer.md#onupdate)

***

### isUnderwater()

> **isUnderwater**(`point`): `boolean`

Defined in: [src/components/renderer/WaterRenderer.ts:337](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L337)

True when the point is inside the water's xz footprint and below the surface.

#### Parameters

##### point

[`Vector3`](Vector3.md)

#### Returns

`boolean`

***

### containsXZ()

> **containsXZ**(`x`, `z`, `margin?`): `boolean`

Defined in: [src/components/renderer/WaterRenderer.ts:346](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L346)

True when world (x, z) lies inside the water's footprint.

#### Parameters

##### x

`number`

##### z

`number`

##### margin?

`number` = `0`

grows the footprint by this many world units on each side

#### Returns

`boolean`

***

### getHeight()

> **getHeight**(`x`, `z`): `number`

Defined in: [src/components/renderer/WaterRenderer.ts:400](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L400)

World-space height of the surface above (x, z) at the current time.
Gerstner waves also move points sideways, so the undisplaced position
whose displaced xz lands on (x, z) is found by fixed-point iteration.
The FFT waves ([spectrum](#spectrum)) are computed on the GPU: asking for a
point queues it, and their part of the height comes from the nearest
point asked for in an earlier frame, a frame or two old (none until
then). Ask every frame for points that move.

#### Parameters

##### x

`number`

##### z

`number`

#### Returns

`number`

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [src/components/renderer/WaterRenderer.ts:463](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/WaterRenderer.ts#L463)

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Overrides

[`MeshRenderer`](MeshRenderer.md).[`destroy`](MeshRenderer.md#destroy)
