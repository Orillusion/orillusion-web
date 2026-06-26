[**@orillusion/graphic**](../README.md)

***

# Class: Graphic3DFaceRenderer

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:34](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L34)

## Extends

- `MeshRenderer`

## Constructors

### Constructor

> **new Graphic3DFaceRenderer**(): `Graphic3DFaceRenderer`

Defined in: [src/components/renderer/MeshRenderer.ts:26](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L26)

#### Returns

`Graphic3DFaceRenderer`

#### Inherited from

`MeshRenderer.constructor`

## Properties

### object3D

> **object3D**: `Object3D` = `null`

Defined in: [src/components/ComponentBase.ts:29](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L29)

owner object3D

#### Inherited from

`MeshRenderer.object3D`

***

### isDestroyed

> **isDestroyed**: `boolean` = `false`

Defined in: [src/components/ComponentBase.ts:77](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L77)

#### Inherited from

`MeshRenderer.isDestroyed`

***

### receiveShadow

> **receiveShadow**: `boolean`

Defined in: [src/components/renderer/MeshRenderer.ts:23](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L23)

Enabling this option allows the grid to display any shadows cast on the grid.

#### Inherited from

`MeshRenderer.receiveShadow`

***

### morphData

> **morphData**: `MorphTargetData`

Defined in: [src/components/renderer/MeshRenderer.ts:24](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L24)

#### Inherited from

`MeshRenderer.morphData`

***

### instanceCount

> **instanceCount**: `number` = `0`

Defined in: [src/components/renderer/RenderNode.ts:35](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L35)

#### Inherited from

`MeshRenderer.instanceCount`

***

### lodLevel

> **lodLevel**: `number` = `0`

Defined in: [src/components/renderer/RenderNode.ts:36](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L36)

#### Inherited from

`MeshRenderer.lodLevel`

***

### alwaysRender

> **alwaysRender**: `boolean` = `false`

Defined in: [src/components/renderer/RenderNode.ts:37](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L37)

#### Inherited from

`MeshRenderer.alwaysRender`

***

### instanceID

> **instanceID**: `string`

Defined in: [src/components/renderer/RenderNode.ts:38](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L38)

#### Inherited from

`MeshRenderer.instanceID`

***

### drawType

> **drawType**: `number` = `0`

Defined in: [src/components/renderer/RenderNode.ts:39](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L39)

#### Inherited from

`MeshRenderer.drawType`

***

### isRenderOrderChange?

> `optional` **isRenderOrderChange?**: `boolean`

Defined in: [src/components/renderer/RenderNode.ts:55](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L55)

#### Inherited from

`MeshRenderer.isRenderOrderChange`

***

### needSortOnCameraZ?

> `optional` **needSortOnCameraZ?**: `boolean`

Defined in: [src/components/renderer/RenderNode.ts:56](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L56)

#### Inherited from

`MeshRenderer.needSortOnCameraZ`

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

`MeshRenderer.shadowCacheMode`

***

### maxFaceCount

> `static` **maxFaceCount**: `number` = `1000000`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:35](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L35)

***

### maxGeometryCount

> `static` **maxGeometryCount**: `number` = `1`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:36](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L36)

***

### maxPathPointCount

> `static` **maxPathPointCount**: `number` = `100000`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:37](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L37)

***

### maxShapeCount

> `static` **maxShapeCount**: `number` = `1024`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:38](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L38)

***

### texture

> **texture**: `BitmapTexture2DArray`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:40](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L40)

***

### transformBuffer

> **transformBuffer**: `StorageGPUBuffer`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:41](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L41)

***

### geometryInfoBuffer

> **geometryInfoBuffer**: `StructStorageGPUBuffer`\<[`GeometryInfo`](GeometryInfo.md)\>

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:46](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L46)

***

### shapeBuffer

> **shapeBuffer**: `StructStorageGPUBuffer`\<[`ShapeInfo`](ShapeInfo.md)\>

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:47](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L47)

***

### pathBuffer

> **pathBuffer**: `StorageGPUBuffer`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:48](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L48)

***

### drawBuffer

> **drawBuffer**: `StorageGPUBuffer`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:49](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L49)

***

### object3Ds

> **object3Ds**: `any`[]

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:51](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L51)

***

### shapes

> **shapes**: [`ShapeInfo`](ShapeInfo.md)[]

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:52](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L52)

***

### realDrawShape

> **realDrawShape**: `number`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:53](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L53)

***

### needUpdate

> **needUpdate**: `boolean` = `false`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:54](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L54)

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

`MeshRenderer.visibleLayer`

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

`MeshRenderer.eventDispatcher`

***

### isStart

#### Get Signature

> **get** **isStart**(): `boolean`

Defined in: [src/components/ComponentBase.ts:79](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L79)

##### Returns

`boolean`

#### Inherited from

`MeshRenderer.isStart`

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

`MeshRenderer.transform`

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

`MeshRenderer.enable`

***

### geometry

#### Get Signature

> **get** **geometry**(): `GeometryBase`

Defined in: [src/components/renderer/MeshRenderer.ts:53](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L53)

The geometry of the mesh determines its shape

##### Returns

`GeometryBase`

#### Set Signature

> **set** **geometry**(`value`): `void`

Defined in: [src/components/renderer/MeshRenderer.ts:57](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L57)

##### Parameters

###### value

`GeometryBase`

##### Returns

`void`

#### Inherited from

`MeshRenderer.geometry`

***

### material

#### Get Signature

> **get** **material**(): `Material`

Defined in: [src/components/renderer/MeshRenderer.ts:99](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L99)

material

##### Returns

`Material`

#### Set Signature

> **set** **material**(`value`): `void`

Defined in: [src/components/renderer/MeshRenderer.ts:103](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L103)

##### Parameters

###### value

`Material`

##### Returns

`void`

#### Inherited from

`MeshRenderer.material`

***

### batchMode

#### Get Signature

> **get** **batchMode**(): `BatchMode`

Defined in: [src/components/renderer/RenderNode.ts:118](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L118)

##### Returns

`BatchMode`

#### Set Signature

> **set** **batchMode**(`value`): `void`

Defined in: [src/components/renderer/RenderNode.ts:122](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L122)

##### Parameters

###### value

`BatchMode`

##### Returns

`void`

#### Inherited from

`MeshRenderer.batchMode`

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

`MeshRenderer.rendererMask`

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

`MeshRenderer.renderOrder`

***

### materials

#### Get Signature

> **get** **materials**(): `Material`[]

Defined in: [src/components/renderer/RenderNode.ts:177](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L177)

##### Returns

`Material`[]

#### Set Signature

> **set** **materials**(`value`): `void`

Defined in: [src/components/renderer/RenderNode.ts:181](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L181)

##### Parameters

###### value

`Material`[]

##### Returns

`void`

#### Inherited from

`MeshRenderer.materials`

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

`MeshRenderer.castShadow`

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

`MeshRenderer.castGI`

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

`MeshRenderer.castReflection`

## Methods

### start()

> **start**(): `void`

Defined in: [src/components/ComponentBase.ts:162](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L162)

#### Returns

`void`

#### Inherited from

`MeshRenderer.start`

***

### stop()

> **stop**(): `void`

Defined in: [src/components/ComponentBase.ts:163](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L163)

#### Returns

`void`

#### Inherited from

`MeshRenderer.stop`

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

`MeshRenderer.onLateUpdate`

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

`MeshRenderer.onBeforeUpdate`

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

`MeshRenderer.onGraphic`

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

`MeshRenderer.onParentChange`

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

`MeshRenderer.onAddChild`

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

`MeshRenderer.onRemoveChild`

***

### onEnable()

> **onEnable**(): `void`

Defined in: [src/components/renderer/MeshRenderer.ts:30](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L30)

#### Returns

`void`

#### Inherited from

`MeshRenderer.onEnable`

***

### onDisable()

> **onDisable**(): `void`

Defined in: [src/components/renderer/MeshRenderer.ts:34](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L34)

#### Returns

`void`

#### Inherited from

`MeshRenderer.onDisable`

***

### cloneTo()

> **cloneTo**(`obj`): `void`

Defined in: [src/components/renderer/MeshRenderer.ts:38](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L38)

clone component data to target object3D

#### Parameters

##### obj

`Object3D`

target object3D

#### Returns

`void`

#### Inherited from

`MeshRenderer.cloneTo`

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

`MeshRenderer.copyComponent`

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

`MeshRenderer.setMorphInfluence`

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

`MeshRenderer.setMorphInfluenceIndex`

***

### destroy()

> **destroy**(`force?`): `void`

Defined in: [src/components/renderer/MeshRenderer.ts:157](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L157)

#### Parameters

##### force?

`boolean`

#### Returns

`void`

#### Inherited from

`MeshRenderer.destroy`

***

### attachSceneOctree()

> **attachSceneOctree**(`octree`): `void`

Defined in: [src/components/renderer/RenderNode.ts:87](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L87)

#### Parameters

##### octree

`Octree`

#### Returns

`void`

#### Inherited from

`MeshRenderer.attachSceneOctree`

***

### detachSceneOctree()

> **detachSceneOctree**(): `void`

Defined in: [src/components/renderer/RenderNode.ts:92](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L92)

#### Returns

`void`

#### Inherited from

`MeshRenderer.detachSceneOctree`

***

### addMask()

> **addMask**(`mask`): `void`

Defined in: [src/components/renderer/RenderNode.ts:144](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L144)

#### Parameters

##### mask

`RendererMask`

#### Returns

`void`

#### Inherited from

`MeshRenderer.addMask`

***

### removeMask()

> **removeMask**(`mask`): `void`

Defined in: [src/components/renderer/RenderNode.ts:148](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L148)

#### Parameters

##### mask

`RendererMask`

#### Returns

`void`

#### Inherited from

`MeshRenderer.removeMask`

***

### hasMask()

> **hasMask**(`mask`): `boolean`

Defined in: [src/components/renderer/RenderNode.ts:152](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L152)

#### Parameters

##### mask

`RendererMask`

#### Returns

`boolean`

#### Inherited from

`MeshRenderer.hasMask`

***

### addRendererMask()

> **addRendererMask**(`tag`): `void`

Defined in: [src/components/renderer/RenderNode.ts:232](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L232)

#### Parameters

##### tag

`RendererMask`

#### Returns

`void`

#### Inherited from

`MeshRenderer.addRendererMask`

***

### removeRendererMask()

> **removeRendererMask**(`tag`): `void`

Defined in: [src/components/renderer/RenderNode.ts:236](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L236)

#### Parameters

##### tag

`RendererMask`

#### Returns

`void`

#### Inherited from

`MeshRenderer.removeRendererMask`

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

`MeshRenderer.refreshRenderClassification`

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

`MeshRenderer.selfCloneMaterials`

***

### renderPass()

> **renderPass**(`view`, `passType`, `renderContext`): `void`

Defined in: [src/components/renderer/RenderNode.ts:456](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L456)

#### Parameters

##### view

`View3D`

##### passType

`PassType`

##### renderContext

`RenderContext`

#### Returns

`void`

#### Inherited from

`MeshRenderer.renderPass`

***

### renderPass2()

> **renderPass2**(`view`, `passType`, `rendererPassState`, `clusterLightingBuffer`, `encoder`, `useBundle?`): `void`

Defined in: [src/components/renderer/RenderNode.ts:528](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L528)

render pass at passType

#### Parameters

##### view

`View3D`

##### passType

`PassType`

##### rendererPassState

`RendererPassState`

##### clusterLightingBuffer

`ClusterLightingBuffer`

##### encoder

`GPURenderPassEncoder`

##### useBundle?

`boolean` = `false`

#### Returns

`void`

#### Inherited from

`MeshRenderer.renderPass2`

***

### recordRenderPass2()

> **recordRenderPass2**(`view`, `passType`, `rendererPassState`, `clusterLightingBuffer`, `encoder`, `useBundle?`): `void`

Defined in: [src/components/renderer/RenderNode.ts:586](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L586)

#### Parameters

##### view

`View3D`

##### passType

`PassType`

##### rendererPassState

`RendererPassState`

##### clusterLightingBuffer

`ClusterLightingBuffer`

##### encoder

`GPURenderPassEncoder`

##### useBundle?

`boolean` = `false`

#### Returns

`void`

#### Inherited from

`MeshRenderer.recordRenderPass2`

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

`MeshRenderer.preInit`

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

`MeshRenderer.beforeDestroy`

***

### init()

> **init**(): `void`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:55](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L55)

#### Returns

`void`

#### Overrides

`MeshRenderer.init`

***

### create()

> **create**(`tex`, `num`): `void`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:59](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L59)

#### Parameters

##### tex

`BitmapTexture2DArray`

##### num

`number`

#### Returns

`void`

***

### startShape()

> **startShape**(`texture`): `void`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:95](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L95)

#### Parameters

##### texture

`BitmapTexture2DArray`

#### Returns

`void`

***

### setShape()

> **setShape**(`index`, `shape`): `void`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:125](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L125)

#### Parameters

##### index

`number`

##### shape

[`ShapeInfo`](ShapeInfo.md)

#### Returns

`void`

***

### updateShape()

> **updateShape**(): `void`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:132](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L132)

#### Returns

`void`

***

### setTextureID()

> **setTextureID**(`i`, `id`): `void`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:154](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L154)

#### Parameters

##### i

`number`

##### id

`number`

#### Returns

`void`

***

### setBaseColor()

> **setBaseColor**(`i`, `color`): `void`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:169](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L169)

#### Parameters

##### i

`number`

##### color

`Color`

#### Returns

`void`

***

### setEmissiveColor()

> **setEmissiveColor**(`i`, `color`): `void`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:174](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L174)

#### Parameters

##### i

`number`

##### color

`Color`

#### Returns

`void`

***

### setUVRect()

> **setUVRect**(`i`, `v`): `void`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:179](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L179)

#### Parameters

##### i

`number`

##### v

`Vector4`

#### Returns

`void`

***

### onUpdate()

> **onUpdate**(`view?`): `void`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:184](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L184)

#### Parameters

##### view?

`View3D`

#### Returns

`void`

#### Overrides

`MeshRenderer.onUpdate`

***

### onCompute()

> **onCompute**(`view`, `command`): `void`

Defined in: [packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts:191](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/Graphic3DFaceRenderer.ts#L191)

#### Parameters

##### view

`View3D`

##### command

`GPUCommandEncoder`

#### Returns

`void`

#### Overrides

`MeshRenderer.onCompute`
