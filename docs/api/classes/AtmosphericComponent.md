[**@orillusion/core**](../README.md)

***

# Class: AtmosphericComponent

Defined in: [src/components/AtmosphericComponent.ts:44](https://github.com/orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L44)

Atmospheric Sky Box Component

## Extends

- [`SkyRenderer`](SkyRenderer.md)

## Constructors

### Constructor

> **new AtmosphericComponent**(): `AtmosphericComponent`

Defined in: [src/components/renderer/MeshRenderer.ts:26](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L26)

#### Returns

`AtmosphericComponent`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`constructor`](SkyRenderer.md#constructor)

## Properties

### object3D

> **object3D**: [`Object3D`](Object3D.md) = `null`

Defined in: [src/components/ComponentBase.ts:29](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L29)

owner object3D

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`object3D`](SkyRenderer.md#object3d)

***

### isDestroyed

> **isDestroyed**: `boolean` = `false`

Defined in: [src/components/ComponentBase.ts:77](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L77)

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`isDestroyed`](SkyRenderer.md#isdestroyed)

***

### receiveShadow

> **receiveShadow**: `boolean`

Defined in: [src/components/renderer/MeshRenderer.ts:23](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L23)

Enabling this option allows the grid to display any shadows cast on the grid.

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`receiveShadow`](SkyRenderer.md#receiveshadow)

***

### morphData

> **morphData**: [`MorphTargetData`](MorphTargetData.md)

Defined in: [src/components/renderer/MeshRenderer.ts:24](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L24)

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`morphData`](SkyRenderer.md#morphdata)

***

### instanceCount

> **instanceCount**: `number` = `0`

Defined in: [src/components/renderer/RenderNode.ts:35](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L35)

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`instanceCount`](SkyRenderer.md#instancecount)

***

### lodLevel

> **lodLevel**: `number` = `0`

Defined in: [src/components/renderer/RenderNode.ts:36](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L36)

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`lodLevel`](SkyRenderer.md#lodlevel)

***

### alwaysRender

> **alwaysRender**: `boolean` = `false`

Defined in: [src/components/renderer/RenderNode.ts:37](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L37)

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`alwaysRender`](SkyRenderer.md#alwaysrender)

***

### instanceID

> **instanceID**: `string`

Defined in: [src/components/renderer/RenderNode.ts:38](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L38)

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`instanceID`](SkyRenderer.md#instanceid)

***

### drawType

> **drawType**: `number` = `0`

Defined in: [src/components/renderer/RenderNode.ts:39](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L39)

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`drawType`](SkyRenderer.md#drawtype)

***

### isRenderOrderChange?

> `optional` **isRenderOrderChange?**: `boolean`

Defined in: [src/components/renderer/RenderNode.ts:55](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L55)

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`isRenderOrderChange`](SkyRenderer.md#isrenderorderchange)

***

### needSortOnCameraZ?

> `optional` **needSortOnCameraZ?**: `boolean`

Defined in: [src/components/renderer/RenderNode.ts:56](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L56)

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`needSortOnCameraZ`](SkyRenderer.md#needsortoncameraz)

***

### shadowCacheMode

> **shadowCacheMode**: `"auto"` \| `"static"` \| `"dynamic"` = `'auto'`

Defined in: [src/components/renderer/RenderNode.ts:437](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L437)

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

[`SkyRenderer`](SkyRenderer.md).[`shadowCacheMode`](SkyRenderer.md#shadowcachemode)

***

### skyMaterial

> **skyMaterial**: `SkyMaterial`

Defined in: [src/components/renderer/SkyRenderer.ts:27](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L27)

The material used in the Sky Box.

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`skyMaterial`](SkyRenderer.md#skymaterial)

## Accessors

### sunX

#### Get Signature

> **get** **sunX**(): `number`

Defined in: [src/components/AtmosphericComponent.ts:59](https://github.com/orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L59)

Horizontal sun position in normalized [0,1] sky coordinates.

##### Returns

`number`

#### Set Signature

> **set** **sunX**(`value`): `void`

Defined in: [src/components/AtmosphericComponent.ts:60](https://github.com/orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L60)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### sunY

#### Get Signature

> **get** **sunY**(): `number`

Defined in: [src/components/AtmosphericComponent.ts:65](https://github.com/orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L65)

Vertical sun position in normalized [0,1] sky coordinates.

##### Returns

`number`

#### Set Signature

> **set** **sunY**(`value`): `void`

Defined in: [src/components/AtmosphericComponent.ts:66](https://github.com/orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L66)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### eyePos

#### Get Signature

> **get** **eyePos**(): `number`

Defined in: [src/components/AtmosphericComponent.ts:71](https://github.com/orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L71)

Eye (viewer) altitude used by the atmospheric scattering model.

##### Returns

`number`

#### Set Signature

> **set** **eyePos**(`value`): `void`

Defined in: [src/components/AtmosphericComponent.ts:72](https://github.com/orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L72)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### sunRadius

#### Get Signature

> **get** **sunRadius**(): `number`

Defined in: [src/components/AtmosphericComponent.ts:77](https://github.com/orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L77)

Angular radius of the sun disc.

##### Returns

`number`

#### Set Signature

> **set** **sunRadius**(`value`): `void`

Defined in: [src/components/AtmosphericComponent.ts:78](https://github.com/orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L78)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### sunRadiance

#### Get Signature

> **get** **sunRadiance**(): `number`

Defined in: [src/components/AtmosphericComponent.ts:83](https://github.com/orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L83)

Radiance (intensity) of the sun.

##### Returns

`number`

#### Set Signature

> **set** **sunRadiance**(`value`): `void`

Defined in: [src/components/AtmosphericComponent.ts:84](https://github.com/orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L84)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### sunBrightness

#### Get Signature

> **get** **sunBrightness**(): `number`

Defined in: [src/components/AtmosphericComponent.ts:89](https://github.com/orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L89)

Overall brightness of the sun.

##### Returns

`number`

#### Set Signature

> **set** **sunBrightness**(`value`): `void`

Defined in: [src/components/AtmosphericComponent.ts:90](https://github.com/orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L90)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### displaySun

#### Get Signature

> **get** **displaySun**(): `boolean`

Defined in: [src/components/AtmosphericComponent.ts:95](https://github.com/orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L95)

Whether the sun disc is drawn in the sky.

##### Returns

`boolean`

#### Set Signature

> **set** **displaySun**(`value`): `void`

Defined in: [src/components/AtmosphericComponent.ts:96](https://github.com/orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L96)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### relativeTransform

#### Get Signature

> **get** **relativeTransform**(): [`Transform`](Transform.md)

Defined in: [src/components/AtmosphericComponent.ts:124](https://github.com/orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L124)

Transform whose rotation is kept in sync with the sun direction.

##### Returns

[`Transform`](Transform.md)

#### Set Signature

> **set** **relativeTransform**(`value`): `void`

Defined in: [src/components/AtmosphericComponent.ts:128](https://github.com/orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L128)

##### Parameters

###### value

[`Transform`](Transform.md)

##### Returns

`void`

***

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

[`SkyRenderer`](SkyRenderer.md).[`visibleLayer`](SkyRenderer.md#visiblelayer)

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

[`SkyRenderer`](SkyRenderer.md).[`eventDispatcher`](SkyRenderer.md#eventdispatcher)

***

### isStart

#### Get Signature

> **get** **isStart**(): `boolean`

Defined in: [src/components/ComponentBase.ts:79](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L79)

##### Returns

`boolean`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`isStart`](SkyRenderer.md#isstart)

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

[`SkyRenderer`](SkyRenderer.md).[`transform`](SkyRenderer.md#transform)

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

[`SkyRenderer`](SkyRenderer.md).[`enable`](SkyRenderer.md#enable)

***

### geometry

#### Get Signature

> **get** **geometry**(): [`GeometryBase`](GeometryBase.md)

Defined in: [src/components/renderer/MeshRenderer.ts:53](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L53)

The geometry of the mesh determines its shape

##### Returns

[`GeometryBase`](GeometryBase.md)

#### Set Signature

> **set** **geometry**(`value`): `void`

Defined in: [src/components/renderer/MeshRenderer.ts:57](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L57)

##### Parameters

###### value

[`GeometryBase`](GeometryBase.md)

##### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`geometry`](SkyRenderer.md#geometry)

***

### material

#### Get Signature

> **get** **material**(): [`Material`](Material.md)

Defined in: [src/components/renderer/MeshRenderer.ts:99](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L99)

material

##### Returns

[`Material`](Material.md)

#### Set Signature

> **set** **material**(`value`): `void`

Defined in: [src/components/renderer/MeshRenderer.ts:103](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L103)

##### Parameters

###### value

[`Material`](Material.md)

##### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`material`](SkyRenderer.md#material)

***

### batchMode

#### Get Signature

> **get** **batchMode**(): [`BatchMode`](../enumerations/BatchMode.md)

Defined in: [src/components/renderer/RenderNode.ts:118](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L118)

##### Returns

[`BatchMode`](../enumerations/BatchMode.md)

#### Set Signature

> **set** **batchMode**(`value`): `void`

Defined in: [src/components/renderer/RenderNode.ts:122](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L122)

##### Parameters

###### value

[`BatchMode`](../enumerations/BatchMode.md)

##### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`batchMode`](SkyRenderer.md#batchmode)

***

### rendererMask

#### Get Signature

> **get** **rendererMask**(): `number`

Defined in: [src/components/renderer/RenderNode.ts:156](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L156)

##### Returns

`number`

#### Set Signature

> **set** **rendererMask**(`value`): `void`

Defined in: [src/components/renderer/RenderNode.ts:160](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L160)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`rendererMask`](SkyRenderer.md#renderermask)

***

### renderOrder

#### Get Signature

> **get** **renderOrder**(): `number`

Defined in: [src/components/renderer/RenderNode.ts:164](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L164)

##### Returns

`number`

#### Set Signature

> **set** **renderOrder**(`value`): `void`

Defined in: [src/components/renderer/RenderNode.ts:168](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L168)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`renderOrder`](SkyRenderer.md#renderorder)

***

### materials

#### Get Signature

> **get** **materials**(): [`Material`](Material.md)[]

Defined in: [src/components/renderer/RenderNode.ts:177](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L177)

##### Returns

[`Material`](Material.md)[]

#### Set Signature

> **set** **materials**(`value`): `void`

Defined in: [src/components/renderer/RenderNode.ts:181](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L181)

##### Parameters

###### value

[`Material`](Material.md)[]

##### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`materials`](SkyRenderer.md#materials)

***

### castShadow

#### Get Signature

> **get** **castShadow**(): `boolean`

Defined in: [src/components/renderer/RenderNode.ts:413](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L413)

##### Returns

`boolean`

#### Set Signature

> **set** **castShadow**(`value`): `void`

Defined in: [src/components/renderer/RenderNode.ts:417](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L417)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`castShadow`](SkyRenderer.md#castshadow)

***

### castGI

#### Get Signature

> **get** **castGI**(): `boolean`

Defined in: [src/components/renderer/RenderNode.ts:440](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L440)

##### Returns

`boolean`

#### Set Signature

> **set** **castGI**(`value`): `void`

Defined in: [src/components/renderer/RenderNode.ts:444](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L444)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`castGI`](SkyRenderer.md#castgi)

***

### castReflection

#### Get Signature

> **get** **castReflection**(): `boolean`

Defined in: [src/components/renderer/RenderNode.ts:448](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L448)

##### Returns

`boolean`

#### Set Signature

> **set** **castReflection**(`value`): `void`

Defined in: [src/components/renderer/RenderNode.ts:452](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L452)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`castReflection`](SkyRenderer.md#castreflection)

***

### map

#### Get Signature

> **get** **map**(): [`Texture`](Texture.md)

Defined in: [src/components/renderer/SkyRenderer.ts:92](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L92)

get environment texture

##### Returns

[`Texture`](Texture.md)

#### Set Signature

> **set** **map**(`texture`): `void`

Defined in: [src/components/renderer/SkyRenderer.ts:80](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L80)

set environment texture

##### Parameters

###### texture

[`Texture`](Texture.md)

##### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`map`](SkyRenderer.md#map)

***

### exposure

#### Get Signature

> **get** **exposure**(): `number`

Defined in: [src/components/renderer/SkyRenderer.ts:96](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L96)

##### Returns

`number`

#### Set Signature

> **set** **exposure**(`value`): `void`

Defined in: [src/components/renderer/SkyRenderer.ts:100](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L100)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`exposure`](SkyRenderer.md#exposure)

***

### roughness

#### Get Signature

> **get** **roughness**(): `number`

Defined in: [src/components/renderer/SkyRenderer.ts:105](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L105)

##### Returns

`number`

#### Set Signature

> **set** **roughness**(`value`): `void`

Defined in: [src/components/renderer/SkyRenderer.ts:109](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L109)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`roughness`](SkyRenderer.md#roughness)

## Methods

### init()

> **init**(): `void`

Defined in: [src/components/AtmosphericComponent.ts:102](https://github.com/orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L102)

Initialize history tracking and the pending sky setting.

#### Returns

`void`

#### Overrides

[`SkyRenderer`](SkyRenderer.md).[`init`](SkyRenderer.md#init)

***

### start()

> **start**(`view?`): `void`

Defined in: [src/components/AtmosphericComponent.ts:117](https://github.com/orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L117)

Ensure the GPU sky exists, then run base startup.

#### Parameters

##### view?

`any`

#### Returns

`void`

#### Overrides

[`SkyRenderer`](SkyRenderer.md).[`start`](SkyRenderer.md#start)

***

### onUpdate()

> **onUpdate**(`view?`): `void`

Defined in: [src/components/AtmosphericComponent.ts:134](https://github.com/orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L134)

Per-frame update: sync sun/transform rotation and re-bake the sky on change.

#### Parameters

##### view?

`any`

#### Returns

`void`

#### Overrides

[`SkyRenderer`](SkyRenderer.md).[`onUpdate`](SkyRenderer.md#onupdate)

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [src/components/AtmosphericComponent.ts:158](https://github.com/orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L158)

Destroy the component and release the GPU sky resources.

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Overrides

[`SkyRenderer`](SkyRenderer.md).[`destroy`](SkyRenderer.md#destroy)

***

### stop()

> **stop**(): `void`

Defined in: [src/components/ComponentBase.ts:163](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L163)

#### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`stop`](SkyRenderer.md#stop)

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

[`SkyRenderer`](SkyRenderer.md).[`onLateUpdate`](SkyRenderer.md#onlateupdate)

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

[`SkyRenderer`](SkyRenderer.md).[`onBeforeUpdate`](SkyRenderer.md#onbeforeupdate)

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

[`SkyRenderer`](SkyRenderer.md).[`onGraphic`](SkyRenderer.md#ongraphic)

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

[`SkyRenderer`](SkyRenderer.md).[`onParentChange`](SkyRenderer.md#onparentchange)

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

[`SkyRenderer`](SkyRenderer.md).[`onAddChild`](SkyRenderer.md#onaddchild)

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

[`SkyRenderer`](SkyRenderer.md).[`onRemoveChild`](SkyRenderer.md#onremovechild)

***

### cloneTo()

> **cloneTo**(`obj`): `void`

Defined in: [src/components/renderer/MeshRenderer.ts:38](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L38)

clone component data to target object3D

#### Parameters

##### obj

[`Object3D`](Object3D.md)

target object3D

#### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`cloneTo`](SkyRenderer.md#cloneto)

***

### copyComponent()

> **copyComponent**(`from`): `this`

Defined in: [src/components/renderer/MeshRenderer.ts:43](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L43)

#### Parameters

##### from

`this`

#### Returns

`this`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`copyComponent`](SkyRenderer.md#copycomponent)

***

### setMorphInfluence()

> **setMorphInfluence**(`key`, `value`): `void`

Defined in: [src/components/renderer/MeshRenderer.ts:110](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L110)

Set deformation animation parameters

#### Parameters

##### key

`string`

##### value

`number`

#### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`setMorphInfluence`](SkyRenderer.md#setmorphinfluence)

***

### setMorphInfluenceIndex()

> **setMorphInfluenceIndex**(`index`, `value`): `void`

Defined in: [src/components/renderer/MeshRenderer.ts:119](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L119)

#### Parameters

##### index

`number`

##### value

`number`

#### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`setMorphInfluenceIndex`](SkyRenderer.md#setmorphinfluenceindex)

***

### onCompute()

> **onCompute**(`view`, `command`): `void`

Defined in: [src/components/renderer/MeshRenderer.ts:128](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L128)

#### Parameters

##### view

[`View3D`](View3D.md)

##### command

`GPUCommandEncoder`

#### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`onCompute`](SkyRenderer.md#oncompute)

***

### attachSceneOctree()

> **attachSceneOctree**(`octree`): `void`

Defined in: [src/components/renderer/RenderNode.ts:87](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L87)

#### Parameters

##### octree

[`Octree`](Octree.md)

#### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`attachSceneOctree`](SkyRenderer.md#attachsceneoctree)

***

### detachSceneOctree()

> **detachSceneOctree**(): `void`

Defined in: [src/components/renderer/RenderNode.ts:92](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L92)

#### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`detachSceneOctree`](SkyRenderer.md#detachsceneoctree)

***

### addMask()

> **addMask**(`mask`): `void`

Defined in: [src/components/renderer/RenderNode.ts:144](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L144)

#### Parameters

##### mask

[`RendererMask`](../enumerations/RendererMask.md)

#### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`addMask`](SkyRenderer.md#addmask)

***

### removeMask()

> **removeMask**(`mask`): `void`

Defined in: [src/components/renderer/RenderNode.ts:148](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L148)

#### Parameters

##### mask

[`RendererMask`](../enumerations/RendererMask.md)

#### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`removeMask`](SkyRenderer.md#removemask)

***

### hasMask()

> **hasMask**(`mask`): `boolean`

Defined in: [src/components/renderer/RenderNode.ts:152](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L152)

#### Parameters

##### mask

[`RendererMask`](../enumerations/RendererMask.md)

#### Returns

`boolean`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`hasMask`](SkyRenderer.md#hasmask)

***

### addRendererMask()

> **addRendererMask**(`tag`): `void`

Defined in: [src/components/renderer/RenderNode.ts:232](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L232)

#### Parameters

##### tag

[`RendererMask`](../enumerations/RendererMask.md)

#### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`addRendererMask`](SkyRenderer.md#addrenderermask)

***

### removeRendererMask()

> **removeRendererMask**(`tag`): `void`

Defined in: [src/components/renderer/RenderNode.ts:236](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L236)

#### Parameters

##### tag

[`RendererMask`](../enumerations/RendererMask.md)

#### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`removeRendererMask`](SkyRenderer.md#removerenderermask)

***

### refreshRenderClassification()

> **refreshRenderClassification**(): `void`

Defined in: [src/components/renderer/RenderNode.ts:270](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L270)

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

[`SkyRenderer`](SkyRenderer.md).[`refreshRenderClassification`](SkyRenderer.md#refreshrenderclassification)

***

### selfCloneMaterials()

> **selfCloneMaterials**(`key`): `this`

Defined in: [src/components/renderer/RenderNode.ts:295](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L295)

#### Parameters

##### key

`string`

#### Returns

`this`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`selfCloneMaterials`](SkyRenderer.md#selfclonematerials)

***

### renderPass()

> **renderPass**(`view`, `passType`, `renderContext`): `void`

Defined in: [src/components/renderer/RenderNode.ts:456](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L456)

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

[`SkyRenderer`](SkyRenderer.md).[`renderPass`](SkyRenderer.md#renderpass)

***

### recordRenderPass2()

> **recordRenderPass2**(`view`, `passType`, `rendererPassState`, `clusterLightingBuffer`, `encoder`, `useBundle?`): `void`

Defined in: [src/components/renderer/RenderNode.ts:586](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L586)

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

[`SkyRenderer`](SkyRenderer.md).[`recordRenderPass2`](SkyRenderer.md#recordrenderpass2)

***

### preInit()

> **preInit**(`_rendererType`): `boolean`

Defined in: [src/components/renderer/RenderNode.ts:624](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L624)

#### Parameters

##### \_rendererType

`PassType`

#### Returns

`boolean`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`preInit`](SkyRenderer.md#preinit)

***

### beforeDestroy()

> **beforeDestroy**(`force?`): `void`

Defined in: [src/components/renderer/RenderNode.ts:741](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L741)

before release this component, object refrences are not be set null now.

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`beforeDestroy`](SkyRenderer.md#beforedestroy)

***

### onEnable()

> **onEnable**(): `void`

Defined in: [src/components/renderer/SkyRenderer.ts:40](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L40)

#### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`onEnable`](SkyRenderer.md#onenable)

***

### onDisable()

> **onDisable**(): `void`

Defined in: [src/components/renderer/SkyRenderer.ts:57](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L57)

#### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`onDisable`](SkyRenderer.md#ondisable)

***

### renderPass2()

> **renderPass2**(`view`, `passType`, `rendererPassState`, `clusterLightingBuffer`, `encoder`, `useBundle?`): `void`

Defined in: [src/components/renderer/SkyRenderer.ts:71](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L71)

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

[`SkyRenderer`](SkyRenderer.md).[`renderPass2`](SkyRenderer.md#renderpass2)

***

### useSkyReflection()

> **useSkyReflection**(): `void`

Defined in: [src/components/renderer/SkyRenderer.ts:114](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L114)

#### Returns

`void`

#### Inherited from

[`SkyRenderer`](SkyRenderer.md).[`useSkyReflection`](SkyRenderer.md#useskyreflection)
