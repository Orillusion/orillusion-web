[**@orillusion/graphic**](../README.md)

***

# Class: GrassRenderer

Defined in: [packages/graphic/renderer/GrassRenderer.ts:19](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/GrassRenderer.ts#L19)

## Extends

- [`DynamicFaceRenderer`](DynamicFaceRenderer.md)

## Constructors

### Constructor

> **new GrassRenderer**(): `GrassRenderer`

Defined in: [packages/graphic/renderer/GrassRenderer.ts:22](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/GrassRenderer.ts#L22)

#### Returns

`GrassRenderer`

#### Overrides

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`constructor`](DynamicFaceRenderer.md#constructor)

## Properties

### object3D

> **object3D**: `Object3D` = `null`

Defined in: [src/components/ComponentBase.ts:29](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L29)

owner object3D

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`object3D`](DynamicFaceRenderer.md#object3d)

***

### isDestroyed

> **isDestroyed**: `boolean` = `false`

Defined in: [src/components/ComponentBase.ts:77](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L77)

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`isDestroyed`](DynamicFaceRenderer.md#isdestroyed)

***

### receiveShadow

> **receiveShadow**: `boolean`

Defined in: [src/components/renderer/MeshRenderer.ts:23](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L23)

Enabling this option allows the grid to display any shadows cast on the grid.

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`receiveShadow`](DynamicFaceRenderer.md#receiveshadow)

***

### morphData

> **morphData**: `MorphTargetData`

Defined in: [src/components/renderer/MeshRenderer.ts:24](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L24)

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`morphData`](DynamicFaceRenderer.md#morphdata)

***

### instanceCount

> **instanceCount**: `number` = `0`

Defined in: [src/components/renderer/RenderNode.ts:35](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L35)

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`instanceCount`](DynamicFaceRenderer.md#instancecount)

***

### lodLevel

> **lodLevel**: `number` = `0`

Defined in: [src/components/renderer/RenderNode.ts:36](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L36)

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`lodLevel`](DynamicFaceRenderer.md#lodlevel)

***

### alwaysRender

> **alwaysRender**: `boolean` = `false`

Defined in: [src/components/renderer/RenderNode.ts:37](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L37)

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`alwaysRender`](DynamicFaceRenderer.md#alwaysrender)

***

### instanceID

> **instanceID**: `string`

Defined in: [src/components/renderer/RenderNode.ts:38](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L38)

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`instanceID`](DynamicFaceRenderer.md#instanceid)

***

### drawType

> **drawType**: `number` = `0`

Defined in: [src/components/renderer/RenderNode.ts:39](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L39)

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`drawType`](DynamicFaceRenderer.md#drawtype)

***

### isRenderOrderChange?

> `optional` **isRenderOrderChange?**: `boolean`

Defined in: [src/components/renderer/RenderNode.ts:55](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L55)

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`isRenderOrderChange`](DynamicFaceRenderer.md#isrenderorderchange)

***

### needSortOnCameraZ?

> `optional` **needSortOnCameraZ?**: `boolean`

Defined in: [src/components/renderer/RenderNode.ts:56](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L56)

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`needSortOnCameraZ`](DynamicFaceRenderer.md#needsortoncameraz)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`shadowCacheMode`](DynamicFaceRenderer.md#shadowcachemode)

***

### grassGeometryCompute

> **grassGeometryCompute**: `ComputeShader`

Defined in: [packages/graphic/renderer/GrassRenderer.ts:20](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/GrassRenderer.ts#L20)

***

### texture

> **texture**: `BitmapTexture2DArray`

Defined in: [packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:6](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L6)

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`texture`](DynamicFaceRenderer.md#texture)

***

### transformBuffer

> **transformBuffer**: `StorageGPUBuffer`

Defined in: [packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:7](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L7)

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`transformBuffer`](DynamicFaceRenderer.md#transformbuffer)

***

### nodeStructBuffer

> **nodeStructBuffer**: `StructStorageGPUBuffer`\<[`DynamicDrawStruct`](DynamicDrawStruct.md)\>

Defined in: [packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:8](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L8)

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`nodeStructBuffer`](DynamicFaceRenderer.md#nodestructbuffer)

***

### drawAtomicBuffer

> **drawAtomicBuffer**: `StorageGPUBuffer`

Defined in: [packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:9](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L9)

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`drawAtomicBuffer`](DynamicFaceRenderer.md#drawatomicbuffer)

***

### nodes

> **nodes**: [`DynamicDrawStruct`](DynamicDrawStruct.md)[]

Defined in: [packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:12](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L12)

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`nodes`](DynamicFaceRenderer.md#nodes)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`visibleLayer`](DynamicFaceRenderer.md#visiblelayer)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`eventDispatcher`](DynamicFaceRenderer.md#eventdispatcher)

***

### isStart

#### Get Signature

> **get** **isStart**(): `boolean`

Defined in: [src/components/ComponentBase.ts:79](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L79)

##### Returns

`boolean`

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`isStart`](DynamicFaceRenderer.md#isstart)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`transform`](DynamicFaceRenderer.md#transform)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`enable`](DynamicFaceRenderer.md#enable)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`geometry`](DynamicFaceRenderer.md#geometry)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`material`](DynamicFaceRenderer.md#material)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`batchMode`](DynamicFaceRenderer.md#batchmode)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`rendererMask`](DynamicFaceRenderer.md#renderermask)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`renderOrder`](DynamicFaceRenderer.md#renderorder)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`materials`](DynamicFaceRenderer.md#materials)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`castShadow`](DynamicFaceRenderer.md#castshadow)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`castGI`](DynamicFaceRenderer.md#castgi)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`castReflection`](DynamicFaceRenderer.md#castreflection)

## Methods

### start()

> **start**(): `void`

Defined in: [src/components/ComponentBase.ts:162](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L162)

#### Returns

`void`

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`start`](DynamicFaceRenderer.md#start)

***

### stop()

> **stop**(): `void`

Defined in: [src/components/ComponentBase.ts:163](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L163)

#### Returns

`void`

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`stop`](DynamicFaceRenderer.md#stop)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`onLateUpdate`](DynamicFaceRenderer.md#onlateupdate)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`onBeforeUpdate`](DynamicFaceRenderer.md#onbeforeupdate)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`onGraphic`](DynamicFaceRenderer.md#ongraphic)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`onParentChange`](DynamicFaceRenderer.md#onparentchange)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`onAddChild`](DynamicFaceRenderer.md#onaddchild)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`onRemoveChild`](DynamicFaceRenderer.md#onremovechild)

***

### onEnable()

> **onEnable**(): `void`

Defined in: [src/components/renderer/MeshRenderer.ts:30](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L30)

#### Returns

`void`

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`onEnable`](DynamicFaceRenderer.md#onenable)

***

### onDisable()

> **onDisable**(): `void`

Defined in: [src/components/renderer/MeshRenderer.ts:34](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L34)

#### Returns

`void`

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`onDisable`](DynamicFaceRenderer.md#ondisable)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`cloneTo`](DynamicFaceRenderer.md#cloneto)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`copyComponent`](DynamicFaceRenderer.md#copycomponent)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`setMorphInfluence`](DynamicFaceRenderer.md#setmorphinfluence)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`setMorphInfluenceIndex`](DynamicFaceRenderer.md#setmorphinfluenceindex)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`destroy`](DynamicFaceRenderer.md#destroy)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`attachSceneOctree`](DynamicFaceRenderer.md#attachsceneoctree)

***

### detachSceneOctree()

> **detachSceneOctree**(): `void`

Defined in: [src/components/renderer/RenderNode.ts:92](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L92)

#### Returns

`void`

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`detachSceneOctree`](DynamicFaceRenderer.md#detachsceneoctree)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`addMask`](DynamicFaceRenderer.md#addmask)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`removeMask`](DynamicFaceRenderer.md#removemask)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`hasMask`](DynamicFaceRenderer.md#hasmask)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`addRendererMask`](DynamicFaceRenderer.md#addrenderermask)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`removeRendererMask`](DynamicFaceRenderer.md#removerenderermask)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`refreshRenderClassification`](DynamicFaceRenderer.md#refreshrenderclassification)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`selfCloneMaterials`](DynamicFaceRenderer.md#selfclonematerials)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`renderPass`](DynamicFaceRenderer.md#renderpass)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`renderPass2`](DynamicFaceRenderer.md#renderpass2)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`recordRenderPass2`](DynamicFaceRenderer.md#recordrenderpass2)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`preInit`](DynamicFaceRenderer.md#preinit)

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

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`beforeDestroy`](DynamicFaceRenderer.md#beforedestroy)

***

### init()

> **init**(`param?`): `void`

Defined in: [packages/graphic/renderer/GrassRenderer.ts:26](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/GrassRenderer.ts#L26)

#### Parameters

##### param?

`any`

#### Returns

`void`

#### Overrides

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`init`](DynamicFaceRenderer.md#init)

***

### set()

> **set**\<`T`\>(`nodeStruct`, `tex`, `standAloneMatrix?`): `void`

Defined in: [packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:66](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L66)

#### Type Parameters

##### T

`T` *extends* [`DynamicDrawStruct`](DynamicDrawStruct.md)

#### Parameters

##### nodeStruct

`Ctor`\<`T`\>

##### tex

`BitmapTexture2DArray`

##### standAloneMatrix?

`boolean`

#### Returns

`void`

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`set`](DynamicFaceRenderer.md#set)

***

### setNodeStruct()

> **setNodeStruct**(`index`, `shape`): `void`

Defined in: [packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:134](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L134)

#### Parameters

##### index

`number`

##### shape

[`DynamicDrawStruct`](DynamicDrawStruct.md)

#### Returns

`void`

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`setNodeStruct`](DynamicFaceRenderer.md#setnodestruct)

***

### updateShape()

> **updateShape**(): `void`

Defined in: [packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:141](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L141)

#### Returns

`void`

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`updateShape`](DynamicFaceRenderer.md#updateshape)

***

### setTextureID()

> **setTextureID**(`i`, `id`): `void`

Defined in: [packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:150](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L150)

#### Parameters

##### i

`number`

##### id

`number`

#### Returns

`void`

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`setTextureID`](DynamicFaceRenderer.md#settextureid)

***

### setLineTextureID()

> **setLineTextureID**(`i`, `id`): `void`

Defined in: [packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:155](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L155)

#### Parameters

##### i

`number`

##### id

`number`

#### Returns

`void`

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`setLineTextureID`](DynamicFaceRenderer.md#setlinetextureid)

***

### setBaseColor()

> **setBaseColor**(`i`, `color`): `void`

Defined in: [packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:160](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L160)

#### Parameters

##### i

`number`

##### color

`Color`

#### Returns

`void`

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`setBaseColor`](DynamicFaceRenderer.md#setbasecolor)

***

### setLineColor()

> **setLineColor**(`index`, `color`): `void`

Defined in: [packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:165](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L165)

#### Parameters

##### index

`number`

##### color

`Color`

#### Returns

`void`

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`setLineColor`](DynamicFaceRenderer.md#setlinecolor)

***

### setEmissiveColor()

> **setEmissiveColor**(`i`, `color`): `void`

Defined in: [packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:170](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L170)

#### Parameters

##### i

`number`

##### color

`Color`

#### Returns

`void`

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`setEmissiveColor`](DynamicFaceRenderer.md#setemissivecolor)

***

### setFillRotation()

> **setFillRotation**(`i`, `radians`): `void`

Defined in: [packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:175](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L175)

#### Parameters

##### i

`number`

##### radians

`number`

#### Returns

`void`

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`setFillRotation`](DynamicFaceRenderer.md#setfillrotation)

***

### setUVRect()

> **setUVRect**(`i`, `v`): `void`

Defined in: [packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:180](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L180)

#### Parameters

##### i

`number`

##### v

`Vector4`

#### Returns

`void`

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`setUVRect`](DynamicFaceRenderer.md#setuvrect)

***

### setUVRect2()

> **setUVRect2**(`i`, `v`): `void`

Defined in: [packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:185](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L185)

#### Parameters

##### i

`number`

##### v

`Vector4`

#### Returns

`void`

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`setUVRect2`](DynamicFaceRenderer.md#setuvrect2)

***

### setUVSpeed()

> **setUVSpeed**(`i`, `v`): `void`

Defined in: [packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:196](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L196)

#### Parameters

##### i

`number`

index

##### v

`Vector4`

{x:fill speed u, y: fill speed v, z:line speed u, w: line speed v}

#### Returns

`void`

#### Memberof

DynamicFaceRenderer

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`setUVSpeed`](DynamicFaceRenderer.md#setuvspeed)

***

### onUpdate()

> **onUpdate**(`view?`): `void`

Defined in: [packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:201](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L201)

#### Parameters

##### view?

`View3D`

#### Returns

`void`

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`onUpdate`](DynamicFaceRenderer.md#onupdate)

***

### onCompute()

> **onCompute**(`view`, `command`): `void`

Defined in: [packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts:227](https://github.com/orillusion/orillusion/blob/main/packages/graphic/renderer/graphic3d/DynamicFaceRenderer.ts#L227)

#### Parameters

##### view

`View3D`

##### command

`GPUCommandEncoder`

#### Returns

`void`

#### Inherited from

[`DynamicFaceRenderer`](DynamicFaceRenderer.md).[`onCompute`](DynamicFaceRenderer.md#oncompute)
