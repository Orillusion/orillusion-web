# Class: AtmosphericComponent

Atmospheric Sky Box Component

## Hierarchy

- [`SkyRenderer`](SkyRenderer.md)

  ↳ **`AtmosphericComponent`**

### Constructors

- [constructor](AtmosphericComponent.md#constructor)

### Properties

- [object3D](AtmosphericComponent.md#object3d)
- [isDestroyed](AtmosphericComponent.md#isdestroyed)
- [receiveShadow](AtmosphericComponent.md#receiveshadow)
- [instanceCount](AtmosphericComponent.md#instancecount)
- [lodLevel](AtmosphericComponent.md#lodlevel)
- [alwaysRender](AtmosphericComponent.md#alwaysrender)
- [instanceID](AtmosphericComponent.md#instanceid)
- [drawType](AtmosphericComponent.md#drawtype)
- [isRenderOrderChange](AtmosphericComponent.md#isrenderorderchange)
- [needSortOnCameraZ](AtmosphericComponent.md#needsortoncameraz)
- [preInit](AtmosphericComponent.md#preinit)
- [skyMaterial](AtmosphericComponent.md#skymaterial)

### Accessors

- [sunX](AtmosphericComponent.md#sunx)
- [sunY](AtmosphericComponent.md#suny)
- [eyePos](AtmosphericComponent.md#eyepos)
- [sunRadius](AtmosphericComponent.md#sunradius)
- [sunRadiance](AtmosphericComponent.md#sunradiance)
- [sunBrightness](AtmosphericComponent.md#sunbrightness)
- [displaySun](AtmosphericComponent.md#displaysun)
- [relativeTransform](AtmosphericComponent.md#relativetransform)
- [eventDispatcher](AtmosphericComponent.md#eventdispatcher)
- [isStart](AtmosphericComponent.md#isstart)
- [transform](AtmosphericComponent.md#transform)
- [enable](AtmosphericComponent.md#enable)
- [geometry](AtmosphericComponent.md#geometry)
- [material](AtmosphericComponent.md#material)
- [renderLayer](AtmosphericComponent.md#renderlayer)
- [rendererMask](AtmosphericComponent.md#renderermask)
- [renderOrder](AtmosphericComponent.md#renderorder)
- [materials](AtmosphericComponent.md#materials)
- [castShadow](AtmosphericComponent.md#castshadow)
- [castGI](AtmosphericComponent.md#castgi)
- [castReflection](AtmosphericComponent.md#castreflection)
- [map](AtmosphericComponent.md#map)
- [exposure](AtmosphericComponent.md#exposure)
- [roughness](AtmosphericComponent.md#roughness)

### Methods

- [init](AtmosphericComponent.md#init)
- [start](AtmosphericComponent.md#start)
- [onUpdate](AtmosphericComponent.md#onupdate)
- [destroy](AtmosphericComponent.md#destroy)
- [stop](AtmosphericComponent.md#stop)
- [onLateUpdate](AtmosphericComponent.md#onlateupdate)
- [onBeforeUpdate](AtmosphericComponent.md#onbeforeupdate)
- [onGraphic](AtmosphericComponent.md#ongraphic)
- [onParentChange](AtmosphericComponent.md#onparentchange)
- [cloneTo](AtmosphericComponent.md#cloneto)
- [copyComponent](AtmosphericComponent.md#copycomponent)
- [setMorphInfluence](AtmosphericComponent.md#setmorphinfluence)
- [setMorphInfluenceIndex](AtmosphericComponent.md#setmorphinfluenceindex)
- [onCompute](AtmosphericComponent.md#oncompute)
- [attachSceneOctree](AtmosphericComponent.md#attachsceneoctree)
- [detachSceneOctree](AtmosphericComponent.md#detachsceneoctree)
- [addMask](AtmosphericComponent.md#addmask)
- [removeMask](AtmosphericComponent.md#removemask)
- [hasMask](AtmosphericComponent.md#hasmask)
- [addRendererMask](AtmosphericComponent.md#addrenderermask)
- [removeRendererMask](AtmosphericComponent.md#removerenderermask)
- [selfCloneMaterials](AtmosphericComponent.md#selfclonematerials)
- [renderPass](AtmosphericComponent.md#renderpass)
- [recordRenderPass2](AtmosphericComponent.md#recordrenderpass2)
- [beforeDestroy](AtmosphericComponent.md#beforedestroy)
- [onEnable](AtmosphericComponent.md#onenable)
- [onDisable](AtmosphericComponent.md#ondisable)
- [renderPass2](AtmosphericComponent.md#renderpass2)

## Constructors

### constructor

• **new AtmosphericComponent**()

#### Inherited from

[SkyRenderer](SkyRenderer.md).[constructor](SkyRenderer.md#constructor)

#### Defined in

[src/components/renderer/MeshRenderer.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L25)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

[SkyRenderer](SkyRenderer.md).[object3D](SkyRenderer.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### isDestroyed

• `Optional` **isDestroyed**: `boolean`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[isDestroyed](SkyRenderer.md#isdestroyed)

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### receiveShadow

• **receiveShadow**: `boolean`

Enabling this option allows the grid to display any shadows cast on the grid.

#### Inherited from

[SkyRenderer](SkyRenderer.md).[receiveShadow](SkyRenderer.md#receiveshadow)

#### Defined in

[src/components/renderer/MeshRenderer.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L22)

___

### instanceCount

• **instanceCount**: `number` = `0`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[instanceCount](SkyRenderer.md#instancecount)

#### Defined in

[src/components/renderer/RenderNode.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L34)

___

### lodLevel

• **lodLevel**: `number` = `0`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[lodLevel](SkyRenderer.md#lodlevel)

#### Defined in

[src/components/renderer/RenderNode.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L35)

___

### alwaysRender

• **alwaysRender**: `boolean` = `false`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[alwaysRender](SkyRenderer.md#alwaysrender)

#### Defined in

[src/components/renderer/RenderNode.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L36)

___

### instanceID

• **instanceID**: `string`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[instanceID](SkyRenderer.md#instanceid)

#### Defined in

[src/components/renderer/RenderNode.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L37)

___

### drawType

• **drawType**: `number` = `0`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[drawType](SkyRenderer.md#drawtype)

#### Defined in

[src/components/renderer/RenderNode.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L38)

___

### isRenderOrderChange

• `Optional` **isRenderOrderChange**: `boolean`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[isRenderOrderChange](SkyRenderer.md#isrenderorderchange)

#### Defined in

[src/components/renderer/RenderNode.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L53)

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[needSortOnCameraZ](SkyRenderer.md#needsortoncameraz)

#### Defined in

[src/components/renderer/RenderNode.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L54)

___

### preInit

• **preInit**: `boolean` = `false`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[preInit](SkyRenderer.md#preinit)

#### Defined in

[src/components/renderer/RenderNode.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L57)

___

### skyMaterial

• **skyMaterial**: `SkyMaterial`

The material used in the Sky Box.

#### Inherited from

[SkyRenderer](SkyRenderer.md).[skyMaterial](SkyRenderer.md#skymaterial)

#### Defined in

[src/components/renderer/SkyRenderer.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L25)

## Accessors

### sunX

• `get` **sunX**(): `number`

#### Returns

`number`

#### Defined in

[src/components/AtmosphericComponent.ts:50](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L50)

• `set` **sunX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/AtmosphericComponent.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L54)

___

### sunY

• `get` **sunY**(): `number`

#### Returns

`number`

#### Defined in

[src/components/AtmosphericComponent.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L61)

• `set` **sunY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/AtmosphericComponent.ts:65](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L65)

___

### eyePos

• `get` **eyePos**(): `number`

#### Returns

`number`

#### Defined in

[src/components/AtmosphericComponent.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L72)

• `set` **eyePos**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/AtmosphericComponent.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L76)

___

### sunRadius

• `get` **sunRadius**(): `number`

#### Returns

`number`

#### Defined in

[src/components/AtmosphericComponent.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L83)

• `set` **sunRadius**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/AtmosphericComponent.ts:87](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L87)

___

### sunRadiance

• `get` **sunRadiance**(): `number`

#### Returns

`number`

#### Defined in

[src/components/AtmosphericComponent.ts:94](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L94)

• `set` **sunRadiance**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/AtmosphericComponent.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L98)

___

### sunBrightness

• `get` **sunBrightness**(): `number`

#### Returns

`number`

#### Defined in

[src/components/AtmosphericComponent.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L105)

• `set` **sunBrightness**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/AtmosphericComponent.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L109)

___

### displaySun

• `get` **displaySun**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/components/AtmosphericComponent.ts:116](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L116)

• `set` **displaySun**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/components/AtmosphericComponent.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L120)

___

### relativeTransform

• `get` **relativeTransform**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Defined in

[src/components/AtmosphericComponent.ts:147](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L147)

• `set` **relativeTransform**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Transform`](Transform.md) |

#### Returns

`void`

#### Defined in

[src/components/AtmosphericComponent.ts:151](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L151)

___

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

SkyRenderer.eventDispatcher

#### Defined in

[src/components/ComponentBase.ts:23](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L23)

• `set` **eventDispatcher**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CEventDispatcher`](CEventDispatcher.md) |

#### Returns

`void`

#### Inherited from

SkyRenderer.eventDispatcher

#### Defined in

[src/components/ComponentBase.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L28)

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

SkyRenderer.isStart

#### Defined in

[src/components/ComponentBase.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L40)

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

SkyRenderer.transform

#### Defined in

[src/components/ComponentBase.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L47)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

SkyRenderer.enable

#### Defined in

[src/components/ComponentBase.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L68)

• `set` **enable**(`value`): `void`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

SkyRenderer.enable

#### Defined in

[src/components/ComponentBase.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L54)

___

### geometry

• `get` **geometry**(): [`GeometryBase`](GeometryBase.md)

The geometry of the mesh determines its shape

#### Returns

[`GeometryBase`](GeometryBase.md)

#### Inherited from

SkyRenderer.geometry

#### Defined in

[src/components/renderer/MeshRenderer.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L51)

• `set` **geometry**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GeometryBase`](GeometryBase.md) |

#### Returns

`void`

#### Inherited from

SkyRenderer.geometry

#### Defined in

[src/components/renderer/MeshRenderer.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L56)

___

### material

• `get` **material**(): [`Material`](Material.md)

material

#### Returns

[`Material`](Material.md)

#### Inherited from

SkyRenderer.material

#### Defined in

[src/components/renderer/MeshRenderer.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L92)

• `set` **material**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Material`](Material.md) |

#### Returns

`void`

#### Inherited from

SkyRenderer.material

#### Defined in

[src/components/renderer/MeshRenderer.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L97)

___

### renderLayer

• `get` **renderLayer**(): `RenderLayer`

#### Returns

`RenderLayer`

#### Inherited from

SkyRenderer.renderLayer

#### Defined in

[src/components/renderer/RenderNode.ts:107](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L107)

• `set` **renderLayer**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `RenderLayer` |

#### Returns

`void`

#### Inherited from

SkyRenderer.renderLayer

#### Defined in

[src/components/renderer/RenderNode.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L111)

___

### rendererMask

• `get` **rendererMask**(): `number`

#### Returns

`number`

#### Inherited from

SkyRenderer.rendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L145)

• `set` **rendererMask**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

SkyRenderer.rendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:149](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L149)

___

### renderOrder

• `get` **renderOrder**(): `number`

#### Returns

`number`

#### Inherited from

SkyRenderer.renderOrder

#### Defined in

[src/components/renderer/RenderNode.ts:153](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L153)

• `set` **renderOrder**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

SkyRenderer.renderOrder

#### Defined in

[src/components/renderer/RenderNode.ts:157](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L157)

___

### materials

• `get` **materials**(): [`Material`](Material.md)[]

#### Returns

[`Material`](Material.md)[]

#### Inherited from

SkyRenderer.materials

#### Defined in

[src/components/renderer/RenderNode.ts:165](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L165)

• `set` **materials**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Material`](Material.md)[] |

#### Returns

`void`

#### Inherited from

SkyRenderer.materials

#### Defined in

[src/components/renderer/RenderNode.ts:170](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L170)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

SkyRenderer.castShadow

#### Defined in

[src/components/renderer/RenderNode.ts:337](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L337)

• `set` **castShadow**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

SkyRenderer.castShadow

#### Defined in

[src/components/renderer/RenderNode.ts:342](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L342)

___

### castGI

• `get` **castGI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

SkyRenderer.castGI

#### Defined in

[src/components/renderer/RenderNode.ts:347](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L347)

• `set` **castGI**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

SkyRenderer.castGI

#### Defined in

[src/components/renderer/RenderNode.ts:352](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L352)

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

SkyRenderer.castReflection

#### Defined in

[src/components/renderer/RenderNode.ts:357](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L357)

• `set` **castReflection**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

SkyRenderer.castReflection

#### Defined in

[src/components/renderer/RenderNode.ts:361](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L361)

___

### map

• `get` **map**(): [`Texture`](Texture.md)

get environment texture

#### Returns

[`Texture`](Texture.md)

#### Inherited from

SkyRenderer.map

#### Defined in

[src/components/renderer/SkyRenderer.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L80)

• `set` **map**(`texture`): `void`

set environment texture

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

SkyRenderer.map

#### Defined in

[src/components/renderer/SkyRenderer.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L69)

___

### exposure

• `get` **exposure**(): `number`

#### Returns

`number`

#### Inherited from

SkyRenderer.exposure

#### Defined in

[src/components/renderer/SkyRenderer.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L84)

• `set` **exposure**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

SkyRenderer.exposure

#### Defined in

[src/components/renderer/SkyRenderer.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L88)

___

### roughness

• `get` **roughness**(): `number`

#### Returns

`number`

#### Inherited from

SkyRenderer.roughness

#### Defined in

[src/components/renderer/SkyRenderer.ts:93](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L93)

• `set` **roughness**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

SkyRenderer.roughness

#### Defined in

[src/components/renderer/SkyRenderer.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L97)

## Methods

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

[SkyRenderer](SkyRenderer.md).[init](SkyRenderer.md#init)

#### Defined in

[src/components/AtmosphericComponent.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L128)

___

### start

▸ **start**(`view?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `any` |

#### Returns

`void`

#### Overrides

[SkyRenderer](SkyRenderer.md).[start](SkyRenderer.md#start)

#### Defined in

[src/components/AtmosphericComponent.ts:140](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L140)

___

### onUpdate

▸ **onUpdate**(`view?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `any` |

#### Returns

`void`

#### Overrides

[SkyRenderer](SkyRenderer.md).[onUpdate](SkyRenderer.md#onupdate)

#### Defined in

[src/components/AtmosphericComponent.ts:156](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L156)

___

### destroy

▸ **destroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Overrides

[SkyRenderer](SkyRenderer.md).[destroy](SkyRenderer.md#destroy)

#### Defined in

[src/components/AtmosphericComponent.ts:176](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L176)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[stop](SkyRenderer.md#stop)

#### Defined in

[src/components/ComponentBase.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L114)

___

### onLateUpdate

▸ `Optional` **onLateUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[onLateUpdate](SkyRenderer.md#onlateupdate)

#### Defined in

[src/components/ComponentBase.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L118)

___

### onBeforeUpdate

▸ `Optional` **onBeforeUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[onBeforeUpdate](SkyRenderer.md#onbeforeupdate)

#### Defined in

[src/components/ComponentBase.ts:119](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L119)

___

### onGraphic

▸ `Optional` **onGraphic**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[onGraphic](SkyRenderer.md#ongraphic)

#### Defined in

[src/components/ComponentBase.ts:121](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L121)

___

### onParentChange

▸ `Optional` **onParentChange**(`lastParent?`, `currentParent?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lastParent?` | [`Object3D`](Object3D.md) |
| `currentParent?` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[onParentChange](SkyRenderer.md#onparentchange)

#### Defined in

[src/components/ComponentBase.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L122)

___

### cloneTo

▸ **cloneTo**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[cloneTo](SkyRenderer.md#cloneto)

#### Defined in

[src/components/renderer/MeshRenderer.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L37)

___

### copyComponent

▸ **copyComponent**(`from`): [`AtmosphericComponent`](AtmosphericComponent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`AtmosphericComponent`](AtmosphericComponent.md) |

#### Returns

[`AtmosphericComponent`](AtmosphericComponent.md)

#### Inherited from

[SkyRenderer](SkyRenderer.md).[copyComponent](SkyRenderer.md#copycomponent)

#### Defined in

[src/components/renderer/MeshRenderer.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L42)

___

### setMorphInfluence

▸ **setMorphInfluence**(`key`, `value`): `void`

Set deformation animation parameters

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[setMorphInfluence](SkyRenderer.md#setmorphinfluence)

#### Defined in

[src/components/renderer/MeshRenderer.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L105)

___

### setMorphInfluenceIndex

▸ **setMorphInfluenceIndex**(`index`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[setMorphInfluenceIndex](SkyRenderer.md#setmorphinfluenceindex)

#### Defined in

[src/components/renderer/MeshRenderer.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L114)

___

### onCompute

▸ **onCompute**(`view`, `command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `command` | `GPUCommandEncoder` |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[onCompute](SkyRenderer.md#oncompute)

#### Defined in

[src/components/renderer/MeshRenderer.ts:123](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L123)

___

### attachSceneOctree

▸ **attachSceneOctree**(`octree`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `octree` | [`Octree`](Octree.md) |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[attachSceneOctree](SkyRenderer.md#attachsceneoctree)

#### Defined in

[src/components/renderer/RenderNode.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L76)

___

### detachSceneOctree

▸ **detachSceneOctree**(): `void`

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[detachSceneOctree](SkyRenderer.md#detachsceneoctree)

#### Defined in

[src/components/renderer/RenderNode.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L81)

___

### addMask

▸ **addMask**(`mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | [`RendererMask`](../enums/RendererMask.md) |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[addMask](SkyRenderer.md#addmask)

#### Defined in

[src/components/renderer/RenderNode.ts:133](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L133)

___

### removeMask

▸ **removeMask**(`mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | [`RendererMask`](../enums/RendererMask.md) |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[removeMask](SkyRenderer.md#removemask)

#### Defined in

[src/components/renderer/RenderNode.ts:137](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L137)

___

### hasMask

▸ **hasMask**(`mask`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | [`RendererMask`](../enums/RendererMask.md) |

#### Returns

`boolean`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[hasMask](SkyRenderer.md#hasmask)

#### Defined in

[src/components/renderer/RenderNode.ts:141](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L141)

___

### addRendererMask

▸ **addRendererMask**(`tag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | [`RendererMask`](../enums/RendererMask.md) |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[addRendererMask](SkyRenderer.md#addrenderermask)

#### Defined in

[src/components/renderer/RenderNode.ts:221](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L221)

___

### removeRendererMask

▸ **removeRendererMask**(`tag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | [`RendererMask`](../enums/RendererMask.md) |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[removeRendererMask](SkyRenderer.md#removerenderermask)

#### Defined in

[src/components/renderer/RenderNode.ts:225](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L225)

___

### selfCloneMaterials

▸ **selfCloneMaterials**(`key`): [`AtmosphericComponent`](AtmosphericComponent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`AtmosphericComponent`](AtmosphericComponent.md)

#### Inherited from

[SkyRenderer](SkyRenderer.md).[selfCloneMaterials](SkyRenderer.md#selfclonematerials)

#### Defined in

[src/components/renderer/RenderNode.ts:243](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L243)

___

### renderPass

▸ **renderPass**(`view`, `passType`, `renderContext`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `passType` | `PassType` |
| `renderContext` | [`RenderContext`](RenderContext.md) |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[renderPass](SkyRenderer.md#renderpass)

#### Defined in

[src/components/renderer/RenderNode.ts:365](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L365)

___

### recordRenderPass2

▸ **recordRenderPass2**(`view`, `passType`, `rendererPassState`, `clusterLightingBuffer`, `encoder`, `useBundle?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `view` | [`View3D`](View3D.md) | `undefined` |
| `passType` | `PassType` | `undefined` |
| `rendererPassState` | `RendererPassState` | `undefined` |
| `clusterLightingBuffer` | [`ClusterLightingBuffer`](ClusterLightingBuffer.md) | `undefined` |
| `encoder` | `GPURenderPassEncoder` | `undefined` |
| `useBundle` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[recordRenderPass2](SkyRenderer.md#recordrenderpass2)

#### Defined in

[src/components/renderer/RenderNode.ts:465](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L465)

___

### beforeDestroy

▸ **beforeDestroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[beforeDestroy](SkyRenderer.md#beforedestroy)

#### Defined in

[src/components/renderer/RenderNode.ts:574](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L574)

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[onEnable](SkyRenderer.md#onenable)

#### Defined in

[src/components/renderer/SkyRenderer.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L40)

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[onDisable](SkyRenderer.md#ondisable)

#### Defined in

[src/components/renderer/SkyRenderer.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L53)

___

### renderPass2

▸ **renderPass2**(`view`, `passType`, `rendererPassState`, `clusterLightingBuffer`, `encoder`, `useBundle?`): `void`

render pass at passType

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `view` | [`View3D`](View3D.md) | `undefined` |
| `passType` | `PassType` | `undefined` |
| `rendererPassState` | `RendererPassState` | `undefined` |
| `clusterLightingBuffer` | [`ClusterLightingBuffer`](ClusterLightingBuffer.md) | `undefined` |
| `encoder` | `GPURenderPassEncoder` | `undefined` |
| `useBundle` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[renderPass2](SkyRenderer.md#renderpass2)

#### Defined in

[src/components/renderer/SkyRenderer.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L60)
