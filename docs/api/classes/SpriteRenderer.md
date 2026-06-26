[**@orillusion/core**](../README.md)

***

# Class: SpriteRenderer

Defined in: [src/components/renderer/SpriteRenderer.ts:29](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L29)

Component that renders a `Sprite` asset as a textured quad in world
space. Pair with a `BillboardComponent` on the same Object3D if the
quad should face the camera (name tags, HP bars, POI icons). For
screen-space UI use DOM / HTML instead — sprites are intentionally
scoped to the 3D scene (RFC-005).

Size is expressed in world units (meters). Optional
`distanceInvariantSize` keeps on-screen size constant as the camera
moves, useful for labels that need to stay readable.

## Constructors

### Constructor

> **new SpriteRenderer**(): `SpriteRenderer`

Defined in: [src/components/renderer/SpriteRenderer.ts:50](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L50)

#### Returns

`SpriteRenderer`

#### Overrides

`RenderNode.constructor`

## Properties

### object3D

> **object3D**: [`Object3D`](Object3D.md) = `null`

Defined in: [src/components/ComponentBase.ts:29](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L29)

owner object3D

#### Inherited from

`RenderNode.object3D`

***

### isDestroyed

> **isDestroyed**: `boolean` = `false`

Defined in: [src/components/ComponentBase.ts:77](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L77)

#### Inherited from

`RenderNode.isDestroyed`

***

### instanceCount

> **instanceCount**: `number` = `0`

Defined in: [src/components/renderer/RenderNode.ts:35](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L35)

#### Inherited from

`RenderNode.instanceCount`

***

### lodLevel

> **lodLevel**: `number` = `0`

Defined in: [src/components/renderer/RenderNode.ts:36](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L36)

#### Inherited from

`RenderNode.lodLevel`

***

### alwaysRender

> **alwaysRender**: `boolean` = `false`

Defined in: [src/components/renderer/RenderNode.ts:37](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L37)

#### Inherited from

`RenderNode.alwaysRender`

***

### instanceID

> **instanceID**: `string`

Defined in: [src/components/renderer/RenderNode.ts:38](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L38)

#### Inherited from

`RenderNode.instanceID`

***

### drawType

> **drawType**: `number` = `0`

Defined in: [src/components/renderer/RenderNode.ts:39](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L39)

#### Inherited from

`RenderNode.drawType`

***

### isRenderOrderChange?

> `optional` **isRenderOrderChange?**: `boolean`

Defined in: [src/components/renderer/RenderNode.ts:55](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L55)

#### Inherited from

`RenderNode.isRenderOrderChange`

***

### needSortOnCameraZ?

> `optional` **needSortOnCameraZ?**: `boolean`

Defined in: [src/components/renderer/RenderNode.ts:56](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L56)

#### Inherited from

`RenderNode.needSortOnCameraZ`

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

`RenderNode.shadowCacheMode`

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

`RenderNode.visibleLayer`

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

`RenderNode.eventDispatcher`

***

### isStart

#### Get Signature

> **get** **isStart**(): `boolean`

Defined in: [src/components/ComponentBase.ts:79](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L79)

##### Returns

`boolean`

#### Inherited from

`RenderNode.isStart`

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

`RenderNode.transform`

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

`RenderNode.enable`

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

`RenderNode.batchMode`

***

### geometry

#### Get Signature

> **get** **geometry**(): [`GeometryBase`](GeometryBase.md)

Defined in: [src/components/renderer/RenderNode.ts:126](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L126)

##### Returns

[`GeometryBase`](GeometryBase.md)

#### Set Signature

> **set** **geometry**(`value`): `void`

Defined in: [src/components/renderer/RenderNode.ts:130](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L130)

##### Parameters

###### value

[`GeometryBase`](GeometryBase.md)

##### Returns

`void`

#### Inherited from

`RenderNode.geometry`

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

`RenderNode.rendererMask`

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

`RenderNode.renderOrder`

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

`RenderNode.materials`

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

`RenderNode.castShadow`

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

`RenderNode.castGI`

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

`RenderNode.castReflection`

***

### sprite

#### Get Signature

> **get** **sprite**(): [`Sprite`](Sprite.md)

Defined in: [src/components/renderer/SpriteRenderer.ts:93](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L93)

The bound `Sprite` asset. `null` until either `sprite` is set explicitly or a shortcut setter runs.

##### Returns

[`Sprite`](Sprite.md)

#### Set Signature

> **set** **sprite**(`value`): `void`

Defined in: [src/components/renderer/SpriteRenderer.ts:97](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L97)

##### Parameters

###### value

[`Sprite`](Sprite.md)

##### Returns

`void`

***

### texture

#### Get Signature

> **get** **texture**(): [`Texture`](Texture.md)

Defined in: [src/components/renderer/SpriteRenderer.ts:128](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L128)

##### Returns

[`Texture`](Texture.md)

#### Set Signature

> **set** **texture**(`tex`): `void`

Defined in: [src/components/renderer/SpriteRenderer.ts:124](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L124)

Shortcut: assign a `Sprite` from a texture (auto-managed private sprite).

##### Parameters

###### tex

[`Texture`](Texture.md)

##### Returns

`void`

***

### pivot

#### Get Signature

> **get** **pivot**(): [`Vector2`](Vector2.md)

Defined in: [src/components/renderer/SpriteRenderer.ts:136](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L136)

Anchor point in [0,1]². Stored as a per-renderer override; the bound
sprite asset stays untouched. Swapping `sprite` preserves this.

##### Returns

[`Vector2`](Vector2.md)

#### Set Signature

> **set** **pivot**(`value`): `void`

Defined in: [src/components/renderer/SpriteRenderer.ts:140](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L140)

##### Parameters

###### value

[`Vector2`](Vector2.md)

##### Returns

`void`

***

### uvRect

#### Get Signature

> **get** **uvRect**(): `Vector4`

Defined in: [src/components/renderer/SpriteRenderer.ts:150](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L150)

UV sub-region as normalized `(offsetX, offsetY, scaleX, scaleY)`.
Stored as a per-renderer override.

##### Returns

`Vector4`

#### Set Signature

> **set** **uvRect**(`value`): `void`

Defined in: [src/components/renderer/SpriteRenderer.ts:154](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L154)

##### Parameters

###### value

`Vector4`

##### Returns

`void`

***

### color

#### Get Signature

> **get** **color**(): [`Color`](Color.md)

Defined in: [src/components/renderer/SpriteRenderer.ts:163](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L163)

Rendering color (multiplied with the sampled texel).

##### Returns

[`Color`](Color.md)

#### Set Signature

> **set** **color**(`value`): `void`

Defined in: [src/components/renderer/SpriteRenderer.ts:167](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L167)

##### Parameters

###### value

[`Color`](Color.md)

##### Returns

`void`

***

### size

#### Get Signature

> **get** **size**(): [`Vector2`](Vector2.md)

Defined in: [src/components/renderer/SpriteRenderer.ts:173](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L173)

Render size in world units (meters).

##### Returns

[`Vector2`](Vector2.md)

#### Set Signature

> **set** **size**(`value`): `void`

Defined in: [src/components/renderer/SpriteRenderer.ts:177](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L177)

##### Parameters

###### value

[`Vector2`](Vector2.md)

##### Returns

`void`

***

### distanceInvariantSize

#### Get Signature

> **get** **distanceInvariantSize**(): `boolean`

Defined in: [src/components/renderer/SpriteRenderer.ts:187](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L187)

When true, the quad's on-screen size stays constant regardless of
camera distance. Works by scaling local vertex position with the
camera-to-sprite distance in the vertex shader.

##### Returns

`boolean`

#### Set Signature

> **set** **distanceInvariantSize**(`value`): `void`

Defined in: [src/components/renderer/SpriteRenderer.ts:191](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L191)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### cornerRadius

#### Get Signature

> **get** **cornerRadius**(): `number`

Defined in: [src/components/renderer/SpriteRenderer.ts:202](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L202)

Rounded-corner radius in the same world units as `size`. 0 disables
the rounding. The quad edge fades to 0 alpha via a signed-distance
mask — useful for card-style labels / icons in world space.

##### Returns

`number`

#### Set Signature

> **set** **cornerRadius**(`value`): `void`

Defined in: [src/components/renderer/SpriteRenderer.ts:207](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L207)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### material

#### Get Signature

> **get** **material**(): [`SpriteMaterial`](SpriteMaterial.md)

Defined in: [src/components/renderer/SpriteRenderer.ts:214](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L214)

##### Returns

[`SpriteMaterial`](SpriteMaterial.md)

#### Set Signature

> **set** **material**(`value`): `void`

Defined in: [src/components/renderer/SpriteRenderer.ts:218](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L218)

##### Parameters

###### value

[`SpriteMaterial`](SpriteMaterial.md)

##### Returns

`void`

***

### visible

#### Get Signature

> **get** **visible**(): `boolean`

Defined in: [src/components/renderer/SpriteRenderer.ts:225](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L225)

Alias for `enable` — `visible = false` stops rendering without destroying the component.

##### Returns

`boolean`

#### Set Signature

> **set** **visible**(`value`): `void`

Defined in: [src/components/renderer/SpriteRenderer.ts:226](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L226)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### start()

> **start**(): `void`

Defined in: [src/components/ComponentBase.ts:162](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L162)

#### Returns

`void`

#### Inherited from

`RenderNode.start`

***

### stop()

> **stop**(): `void`

Defined in: [src/components/ComponentBase.ts:163](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L163)

#### Returns

`void`

#### Inherited from

`RenderNode.stop`

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

`RenderNode.onUpdate`

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

`RenderNode.onLateUpdate`

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

`RenderNode.onBeforeUpdate`

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

`RenderNode.onCompute`

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

`RenderNode.onGraphic`

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

`RenderNode.onParentChange`

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

`RenderNode.onAddChild`

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

`RenderNode.onRemoveChild`

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

`RenderNode.attachSceneOctree`

***

### detachSceneOctree()

> **detachSceneOctree**(): `void`

Defined in: [src/components/renderer/RenderNode.ts:92](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L92)

#### Returns

`void`

#### Inherited from

`RenderNode.detachSceneOctree`

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

`RenderNode.addMask`

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

`RenderNode.removeMask`

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

`RenderNode.hasMask`

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

`RenderNode.addRendererMask`

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

`RenderNode.removeRendererMask`

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

`RenderNode.refreshRenderClassification`

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

`RenderNode.selfCloneMaterials`

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

`RenderNode.renderPass`

***

### renderPass2()

> **renderPass2**(`view`, `passType`, `rendererPassState`, `clusterLightingBuffer`, `encoder`, `useBundle?`): `void`

Defined in: [src/components/renderer/RenderNode.ts:528](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L528)

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

`RenderNode.renderPass2`

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

`RenderNode.recordRenderPass2`

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

`RenderNode.preInit`

***

### nodeUpdate()

> **nodeUpdate**(`view`, `passType`, `renderPassState`, `clusterLightingBuffer?`): `void`

Defined in: [src/components/renderer/RenderNode.ts:628](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L628)

#### Parameters

##### view

[`View3D`](View3D.md)

##### passType

`PassType`

##### renderPassState

`RendererPassState`

##### clusterLightingBuffer?

[`ClusterLightingBuffer`](ClusterLightingBuffer.md)

#### Returns

`void`

#### Inherited from

`RenderNode.nodeUpdate`

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

`RenderNode.beforeDestroy`

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [src/components/renderer/RenderNode.ts:762](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L762)

release this component

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

`RenderNode.destroy`

***

### init()

> **init**(`param?`): `void`

Defined in: [src/components/renderer/SpriteRenderer.ts:55](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L55)

#### Parameters

##### param?

`any`

#### Returns

`void`

#### Overrides

`RenderNode.init`

***

### onEnable()

> **onEnable**(): `void`

Defined in: [src/components/renderer/SpriteRenderer.ts:65](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L65)

#### Returns

`void`

#### Overrides

`RenderNode.onEnable`

***

### onDisable()

> **onDisable**(): `void`

Defined in: [src/components/renderer/SpriteRenderer.ts:72](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L72)

#### Returns

`void`

#### Overrides

`RenderNode.onDisable`

***

### setTexture()

> **setTexture**(`texture`): `void`

Defined in: [src/components/renderer/SpriteRenderer.ts:114](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L114)

Shortcut: bind a bare texture as the sprite. The first call creates a
private auto-managed `Sprite`; subsequent calls update its texture in
place without allocating a new Sprite.

#### Parameters

##### texture

[`Texture`](Texture.md)

#### Returns

`void`

***

### cloneTo()

> **cloneTo**(`obj`): `void`

Defined in: [src/components/renderer/SpriteRenderer.ts:287](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L287)

clone component data to target object3D

#### Parameters

##### obj

[`Object3D`](Object3D.md)

target object3D

#### Returns

`void`

#### Overrides

`RenderNode.cloneTo`

***

### copyComponent()

> **copyComponent**(`from`): `this`

Defined in: [src/components/renderer/SpriteRenderer.ts:292](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/SpriteRenderer.ts#L292)

#### Parameters

##### from

`this`

#### Returns

`this`

#### Overrides

`RenderNode.copyComponent`
