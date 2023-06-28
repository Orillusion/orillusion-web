# Class: AtmosphericComponent

Atmospheric Sky Box Component

## Hierarchy

- [`SkyRenderer`](SkyRenderer.md)

  ↳ **`AtmosphericComponent`**

### Constructors

- [constructor](AtmosphericComponent.md#constructor)

### Properties

- [object3D](AtmosphericComponent.md#object3d)
- [receiveShadow](AtmosphericComponent.md#receiveshadow)
- [instanceCount](AtmosphericComponent.md#instancecount)
- [lodLevel](AtmosphericComponent.md#lodlevel)
- [alwaysRender](AtmosphericComponent.md#alwaysrender)
- [instanceID](AtmosphericComponent.md#instanceid)
- [drawType](AtmosphericComponent.md#drawtype)
- [isRenderOrderChange](AtmosphericComponent.md#isrenderorderchange)
- [needSortOnCameraZ](AtmosphericComponent.md#needsortoncameraz)
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
- [transform](AtmosphericComponent.md#transform)
- [enable](AtmosphericComponent.md#enable)
- [geometry](AtmosphericComponent.md#geometry)
- [material](AtmosphericComponent.md#material)
- [renderOrder](AtmosphericComponent.md#renderorder)
- [rendererMask](AtmosphericComponent.md#renderermask)
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
- [stop](AtmosphericComponent.md#stop)
- [onLateUpdate](AtmosphericComponent.md#onlateupdate)
- [onBeforeUpdate](AtmosphericComponent.md#onbeforeupdate)
- [onGraphic](AtmosphericComponent.md#ongraphic)
- [onParentChange](AtmosphericComponent.md#onparentchange)
- [setMorphInfluence](AtmosphericComponent.md#setmorphinfluence)
- [setMorphInfluenceIndex](AtmosphericComponent.md#setmorphinfluenceindex)
- [onCompute](AtmosphericComponent.md#oncompute)
- [destroy](AtmosphericComponent.md#destroy)
- [cloneTo](AtmosphericComponent.md#cloneto)
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

[src/components/renderer/SkyRenderer.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L27)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

owner object3D

#### Inherited from

[SkyRenderer](SkyRenderer.md).[object3D](SkyRenderer.md#object3d)

#### Defined in

[src/components/ComponentBase.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L17)

___

### receiveShadow

• **receiveShadow**: `boolean`

Enabling this option allows the grid to display any shadows cast on the grid.

#### Inherited from

[SkyRenderer](SkyRenderer.md).[receiveShadow](SkyRenderer.md#receiveshadow)

#### Defined in

[src/components/renderer/MeshRenderer.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L21)

___

### instanceCount

• **instanceCount**: `number` = `0`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[instanceCount](SkyRenderer.md#instancecount)

#### Defined in

[src/components/renderer/RenderNode.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L29)

___

### lodLevel

• **lodLevel**: `number` = `0`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[lodLevel](SkyRenderer.md#lodlevel)

#### Defined in

[src/components/renderer/RenderNode.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L30)

___

### alwaysRender

• **alwaysRender**: `boolean` = `false`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[alwaysRender](SkyRenderer.md#alwaysrender)

#### Defined in

[src/components/renderer/RenderNode.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L31)

___

### instanceID

• **instanceID**: `string`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[instanceID](SkyRenderer.md#instanceid)

#### Defined in

[src/components/renderer/RenderNode.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L32)

___

### drawType

• **drawType**: `number` = `0`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[drawType](SkyRenderer.md#drawtype)

#### Defined in

[src/components/renderer/RenderNode.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L33)

___

### isRenderOrderChange

• `Optional` **isRenderOrderChange**: `boolean`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[isRenderOrderChange](SkyRenderer.md#isrenderorderchange)

#### Defined in

[src/components/renderer/RenderNode.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L48)

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[needSortOnCameraZ](SkyRenderer.md#needsortoncameraz)

#### Defined in

[src/components/renderer/RenderNode.ts:49](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L49)

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

[src/components/AtmosphericComponent.ts:141](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L141)

• `set` **relativeTransform**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Transform`](Transform.md) |

#### Returns

`void`

#### Defined in

[src/components/AtmosphericComponent.ts:145](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L145)

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

Return the Transform component attached to the Object3D.

#### Returns

[`Transform`](Transform.md)

#### Inherited from

SkyRenderer.transform

#### Defined in

[src/components/ComponentBase.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L38)

___

### enable

• `get` **enable**(): `boolean`

Enable/disable components. The enabled components can be updated, while the disabled components cannot be updated.

#### Returns

`boolean`

#### Inherited from

SkyRenderer.enable

#### Defined in

[src/components/ComponentBase.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L59)

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

[src/components/ComponentBase.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L45)

___

### geometry

• `get` **geometry**(): [`GeometryBase`](GeometryBase.md)

The geometry of the mesh determines its shape

#### Returns

[`GeometryBase`](GeometryBase.md)

#### Inherited from

SkyRenderer.geometry

#### Defined in

[src/components/renderer/MeshRenderer.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L39)

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

[src/components/renderer/MeshRenderer.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L43)

___

### material

• `get` **material**(): `MaterialBase`

material

#### Returns

`MaterialBase`

#### Inherited from

SkyRenderer.material

#### Defined in

[src/components/renderer/MeshRenderer.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L69)

• `set` **material**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MaterialBase` |

#### Returns

`void`

#### Inherited from

SkyRenderer.material

#### Defined in

[src/components/renderer/MeshRenderer.ts:73](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L73)

___

### renderOrder

• `get` **renderOrder**(): `number`

#### Returns

`number`

#### Inherited from

SkyRenderer.renderOrder

#### Defined in

[src/components/renderer/RenderNode.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L56)

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

[src/components/renderer/RenderNode.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L60)

___

### rendererMask

• `get` **rendererMask**(): `number`

#### Returns

`number`

#### Inherited from

SkyRenderer.rendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:94](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L94)

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

[src/components/renderer/RenderNode.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L98)

___

### materials

• `get` **materials**(): `MaterialBase`[]

#### Returns

`MaterialBase`[]

#### Inherited from

SkyRenderer.materials

#### Defined in

[src/components/renderer/RenderNode.ts:102](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L102)

• `set` **materials**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `MaterialBase`[] |

#### Returns

`void`

#### Inherited from

SkyRenderer.materials

#### Defined in

[src/components/renderer/RenderNode.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L106)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

SkyRenderer.castShadow

#### Defined in

[src/components/renderer/RenderNode.ts:251](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L251)

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

[src/components/renderer/RenderNode.ts:255](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L255)

___

### castGI

• `get` **castGI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

SkyRenderer.castGI

#### Defined in

[src/components/renderer/RenderNode.ts:259](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L259)

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

[src/components/renderer/RenderNode.ts:263](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L263)

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

SkyRenderer.castReflection

#### Defined in

[src/components/renderer/RenderNode.ts:267](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L267)

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

[src/components/renderer/RenderNode.ts:271](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L271)

___

### map

• `get` **map**(): [`Texture`](Texture.md)

get environment texture

#### Returns

[`Texture`](Texture.md)

#### Inherited from

SkyRenderer.map

#### Defined in

[src/components/renderer/SkyRenderer.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L82)

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

[src/components/renderer/SkyRenderer.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L71)

___

### exposure

• `get` **exposure**(): `number`

#### Returns

`number`

#### Inherited from

SkyRenderer.exposure

#### Defined in

[src/components/renderer/SkyRenderer.ts:86](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L86)

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

[src/components/renderer/SkyRenderer.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L90)

___

### roughness

• `get` **roughness**(): `number`

#### Returns

`number`

#### Inherited from

SkyRenderer.roughness

#### Defined in

[src/components/renderer/SkyRenderer.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L95)

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

[src/components/renderer/SkyRenderer.ts:99](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L99)

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

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[SkyRenderer](SkyRenderer.md).[start](SkyRenderer.md#start)

#### Defined in

[src/components/AtmosphericComponent.ts:134](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L134)

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

[src/components/AtmosphericComponent.ts:150](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L150)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[stop](SkyRenderer.md#stop)

#### Defined in

[src/components/ComponentBase.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L105)

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

[src/components/ComponentBase.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L109)

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

[src/components/ComponentBase.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L110)

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

[src/components/ComponentBase.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L112)

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

[src/components/ComponentBase.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

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

[src/components/renderer/MeshRenderer.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L80)

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

[src/components/renderer/MeshRenderer.ts:89](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L89)

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

[src/components/renderer/MeshRenderer.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L98)

___

### destroy

▸ **destroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[destroy](SkyRenderer.md#destroy)

#### Defined in

[src/components/renderer/MeshRenderer.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L128)

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

[src/components/renderer/MeshRenderer.ts:132](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L132)

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

[src/components/renderer/RenderNode.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L82)

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

[src/components/renderer/RenderNode.ts:86](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L86)

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

[src/components/renderer/RenderNode.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L90)

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

[src/components/renderer/RenderNode.ts:138](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L138)

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

[src/components/renderer/RenderNode.ts:142](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L142)

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

[src/components/renderer/RenderNode.ts:158](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L158)

___

### renderPass

▸ **renderPass**(`view`, `passType`, `renderContext`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `passType` | `RendererType` |
| `renderContext` | [`RenderContext`](RenderContext.md) |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[renderPass](SkyRenderer.md#renderpass)

#### Defined in

[src/components/renderer/RenderNode.ts:275](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L275)

___

### recordRenderPass2

▸ **recordRenderPass2**(`view`, `passType`, `rendererPassState`, `clusterLightingBuffer`, `encoder`, `useBundle?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `view` | [`View3D`](View3D.md) | `undefined` |
| `passType` | `RendererType` | `undefined` |
| `rendererPassState` | `RendererPassState` | `undefined` |
| `clusterLightingBuffer` | [`ClusterLightingBuffer`](ClusterLightingBuffer.md) | `undefined` |
| `encoder` | `GPURenderPassEncoder` | `undefined` |
| `useBundle` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[recordRenderPass2](SkyRenderer.md#recordrenderpass2)

#### Defined in

[src/components/renderer/RenderNode.ts:368](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L368)

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

[src/components/renderer/RenderNode.ts:477](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L477)

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[onEnable](SkyRenderer.md#onenable)

#### Defined in

[src/components/renderer/SkyRenderer.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L42)

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[onDisable](SkyRenderer.md#ondisable)

#### Defined in

[src/components/renderer/SkyRenderer.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L55)

___

### renderPass2

▸ **renderPass2**(`view`, `passType`, `rendererPassState`, `clusterLightingBuffer`, `encoder`, `useBundle?`): `void`

render pass at passType

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `view` | [`View3D`](View3D.md) | `undefined` |
| `passType` | `RendererType` | `undefined` |
| `rendererPassState` | `RendererPassState` | `undefined` |
| `clusterLightingBuffer` | [`ClusterLightingBuffer`](ClusterLightingBuffer.md) | `undefined` |
| `encoder` | `GPURenderPassEncoder` | `undefined` |
| `useBundle` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[renderPass2](SkyRenderer.md#renderpass2)

#### Defined in

[src/components/renderer/SkyRenderer.ts:62](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L62)
