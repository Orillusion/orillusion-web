[**@orillusion/core**](../README.md)

***

# Class: MeshFilter

Defined in: [src/components/renderer/MeshFilter.ts:11](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshFilter.ts#L11)

The mesh renderer component is a component used to render the mesh

## Extends

- [`MeshRenderer`](MeshRenderer.md)

## Constructors

### Constructor

> **new MeshFilter**(): `MeshFilter`

Defined in: [src/components/renderer/MeshFilter.ts:12](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshFilter.ts#L12)

#### Returns

`MeshFilter`

#### Overrides

[`MeshRenderer`](MeshRenderer.md).[`constructor`](MeshRenderer.md#constructor)

## Properties

### object3D

> **object3D**: [`Object3D`](Object3D.md) = `null`

Defined in: [src/components/ComponentBase.ts:29](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L29)

owner object3D

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`object3D`](MeshRenderer.md#object3d)

***

### isDestroyed

> **isDestroyed**: `boolean` = `false`

Defined in: [src/components/ComponentBase.ts:77](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L77)

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`isDestroyed`](MeshRenderer.md#isdestroyed)

***

### receiveShadow

> **receiveShadow**: `boolean`

Defined in: [src/components/renderer/MeshRenderer.ts:23](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L23)

Enabling this option allows the grid to display any shadows cast on the grid.

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`receiveShadow`](MeshRenderer.md#receiveshadow)

***

### morphData

> **morphData**: [`MorphTargetData`](MorphTargetData.md)

Defined in: [src/components/renderer/MeshRenderer.ts:24](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L24)

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`morphData`](MeshRenderer.md#morphdata)

***

### instanceCount

> **instanceCount**: `number` = `0`

Defined in: [src/components/renderer/RenderNode.ts:35](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L35)

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`instanceCount`](MeshRenderer.md#instancecount)

***

### lodLevel

> **lodLevel**: `number` = `0`

Defined in: [src/components/renderer/RenderNode.ts:36](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L36)

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`lodLevel`](MeshRenderer.md#lodlevel)

***

### alwaysRender

> **alwaysRender**: `boolean` = `false`

Defined in: [src/components/renderer/RenderNode.ts:37](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L37)

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`alwaysRender`](MeshRenderer.md#alwaysrender)

***

### instanceID

> **instanceID**: `string`

Defined in: [src/components/renderer/RenderNode.ts:38](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L38)

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`instanceID`](MeshRenderer.md#instanceid)

***

### drawType

> **drawType**: `number` = `0`

Defined in: [src/components/renderer/RenderNode.ts:39](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L39)

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`drawType`](MeshRenderer.md#drawtype)

***

### isRenderOrderChange?

> `optional` **isRenderOrderChange?**: `boolean`

Defined in: [src/components/renderer/RenderNode.ts:55](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L55)

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`isRenderOrderChange`](MeshRenderer.md#isrenderorderchange)

***

### needSortOnCameraZ?

> `optional` **needSortOnCameraZ?**: `boolean`

Defined in: [src/components/renderer/RenderNode.ts:56](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L56)

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`needSortOnCameraZ`](MeshRenderer.md#needsortoncameraz)

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

[`MeshRenderer`](MeshRenderer.md).[`shadowCacheMode`](MeshRenderer.md#shadowcachemode)

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

[`MeshRenderer`](MeshRenderer.md).[`visibleLayer`](MeshRenderer.md#visiblelayer)

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

[`MeshRenderer`](MeshRenderer.md).[`eventDispatcher`](MeshRenderer.md#eventdispatcher)

***

### isStart

#### Get Signature

> **get** **isStart**(): `boolean`

Defined in: [src/components/ComponentBase.ts:79](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L79)

##### Returns

`boolean`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`isStart`](MeshRenderer.md#isstart)

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

[`MeshRenderer`](MeshRenderer.md).[`transform`](MeshRenderer.md#transform)

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

[`MeshRenderer`](MeshRenderer.md).[`enable`](MeshRenderer.md#enable)

***

### geometry

#### Get Signature

> **get** **geometry**(): [`GeometryBase`](GeometryBase.md)

Defined in: [src/components/renderer/MeshFilter.ts:16](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshFilter.ts#L16)

The geometry of the mesh determines its shape

##### Returns

[`GeometryBase`](GeometryBase.md)

#### Set Signature

> **set** **geometry**(`value`): `void`

Defined in: [src/components/renderer/MeshFilter.ts:19](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshFilter.ts#L19)

The geometry of the mesh determines its shape

##### Parameters

###### value

[`GeometryBase`](GeometryBase.md)

##### Returns

`void`

#### Overrides

[`MeshRenderer`](MeshRenderer.md).[`geometry`](MeshRenderer.md#geometry)

***

### meshURL

#### Set Signature

> **set** **meshURL**(`value`): `void`

Defined in: [src/components/renderer/MeshFilter.ts:27](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshFilter.ts#L27)

##### Parameters

###### value

`string`

##### Returns

`void`

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

[`MeshRenderer`](MeshRenderer.md).[`material`](MeshRenderer.md#material)

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

[`MeshRenderer`](MeshRenderer.md).[`batchMode`](MeshRenderer.md#batchmode)

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

[`MeshRenderer`](MeshRenderer.md).[`rendererMask`](MeshRenderer.md#renderermask)

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

[`MeshRenderer`](MeshRenderer.md).[`renderOrder`](MeshRenderer.md#renderorder)

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

[`MeshRenderer`](MeshRenderer.md).[`materials`](MeshRenderer.md#materials)

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

[`MeshRenderer`](MeshRenderer.md).[`castShadow`](MeshRenderer.md#castshadow)

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

[`MeshRenderer`](MeshRenderer.md).[`castGI`](MeshRenderer.md#castgi)

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

[`MeshRenderer`](MeshRenderer.md).[`castReflection`](MeshRenderer.md#castreflection)

## Methods

### start()

> **start**(): `void`

Defined in: [src/components/ComponentBase.ts:162](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L162)

#### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`start`](MeshRenderer.md#start)

***

### stop()

> **stop**(): `void`

Defined in: [src/components/ComponentBase.ts:163](https://github.com/orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L163)

#### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`stop`](MeshRenderer.md#stop)

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

[`MeshRenderer`](MeshRenderer.md).[`onUpdate`](MeshRenderer.md#onupdate)

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

[`MeshRenderer`](MeshRenderer.md).[`onLateUpdate`](MeshRenderer.md#onlateupdate)

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

[`MeshRenderer`](MeshRenderer.md).[`onBeforeUpdate`](MeshRenderer.md#onbeforeupdate)

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

[`MeshRenderer`](MeshRenderer.md).[`onGraphic`](MeshRenderer.md#ongraphic)

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

[`MeshRenderer`](MeshRenderer.md).[`onParentChange`](MeshRenderer.md#onparentchange)

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

[`MeshRenderer`](MeshRenderer.md).[`onAddChild`](MeshRenderer.md#onaddchild)

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

[`MeshRenderer`](MeshRenderer.md).[`onRemoveChild`](MeshRenderer.md#onremovechild)

***

### cloneTo()

> **cloneTo**(`obj`): `void`

Defined in: [src/components/renderer/MeshFilter.ts:23](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshFilter.ts#L23)

clone component data to target object3D

#### Parameters

##### obj

[`Object3D`](Object3D.md)

target object3D

#### Returns

`void`

#### Overrides

[`MeshRenderer`](MeshRenderer.md).[`cloneTo`](MeshRenderer.md#cloneto)

***

### onEnable()

> **onEnable**(): `void`

Defined in: [src/components/renderer/MeshRenderer.ts:30](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L30)

#### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`onEnable`](MeshRenderer.md#onenable)

***

### onDisable()

> **onDisable**(): `void`

Defined in: [src/components/renderer/MeshRenderer.ts:34](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L34)

#### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`onDisable`](MeshRenderer.md#ondisable)

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

[`MeshRenderer`](MeshRenderer.md).[`copyComponent`](MeshRenderer.md#copycomponent)

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

[`MeshRenderer`](MeshRenderer.md).[`setMorphInfluence`](MeshRenderer.md#setmorphinfluence)

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

[`MeshRenderer`](MeshRenderer.md).[`setMorphInfluenceIndex`](MeshRenderer.md#setmorphinfluenceindex)

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

[`MeshRenderer`](MeshRenderer.md).[`onCompute`](MeshRenderer.md#oncompute)

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

[`MeshRenderer`](MeshRenderer.md).[`destroy`](MeshRenderer.md#destroy)

***

### init()

> **init**(`param?`): `void`

Defined in: [src/components/renderer/RenderNode.ts:73](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L73)

#### Parameters

##### param?

`any`

#### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`init`](MeshRenderer.md#init)

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

[`MeshRenderer`](MeshRenderer.md).[`attachSceneOctree`](MeshRenderer.md#attachsceneoctree)

***

### detachSceneOctree()

> **detachSceneOctree**(): `void`

Defined in: [src/components/renderer/RenderNode.ts:92](https://github.com/orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L92)

#### Returns

`void`

#### Inherited from

[`MeshRenderer`](MeshRenderer.md).[`detachSceneOctree`](MeshRenderer.md#detachsceneoctree)

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

[`MeshRenderer`](MeshRenderer.md).[`addMask`](MeshRenderer.md#addmask)

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

[`MeshRenderer`](MeshRenderer.md).[`removeMask`](MeshRenderer.md#removemask)

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

[`MeshRenderer`](MeshRenderer.md).[`hasMask`](MeshRenderer.md#hasmask)

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

[`MeshRenderer`](MeshRenderer.md).[`addRendererMask`](MeshRenderer.md#addrenderermask)

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

[`MeshRenderer`](MeshRenderer.md).[`removeRendererMask`](MeshRenderer.md#removerenderermask)

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

[`MeshRenderer`](MeshRenderer.md).[`refreshRenderClassification`](MeshRenderer.md#refreshrenderclassification)

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

[`MeshRenderer`](MeshRenderer.md).[`selfCloneMaterials`](MeshRenderer.md#selfclonematerials)

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

[`MeshRenderer`](MeshRenderer.md).[`renderPass`](MeshRenderer.md#renderpass)

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

[`MeshRenderer`](MeshRenderer.md).[`renderPass2`](MeshRenderer.md#renderpass2)

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

[`MeshRenderer`](MeshRenderer.md).[`recordRenderPass2`](MeshRenderer.md#recordrenderpass2)

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

[`MeshRenderer`](MeshRenderer.md).[`preInit`](MeshRenderer.md#preinit)

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

[`MeshRenderer`](MeshRenderer.md).[`beforeDestroy`](MeshRenderer.md#beforedestroy)
