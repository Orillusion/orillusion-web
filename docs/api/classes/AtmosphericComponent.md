# Class: AtmosphericComponent

Atmospheric Sky Box Component

## Hierarchy

- [`SkyRenderer`](SkyRenderer.md)

  ↳ **`AtmosphericComponent`**


### Accessors

- [sunX](AtmosphericComponent.md#sunx)
- [sunY](AtmosphericComponent.md#suny)
- [eyePos](AtmosphericComponent.md#eyepos)
- [sunRadius](AtmosphericComponent.md#sunradius)
- [sunRadiance](AtmosphericComponent.md#sunradiance)
- [sunBrightness](AtmosphericComponent.md#sunbrightness)
- [displaySun](AtmosphericComponent.md#displaysun)
- [transform](AtmosphericComponent.md#transform)
- [enable](AtmosphericComponent.md#enable)
- [geometry](AtmosphericComponent.md#geometry)
- [material](AtmosphericComponent.md#material)
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
- [destroy](AtmosphericComponent.md#destroy)
- [setMorphInfluence](AtmosphericComponent.md#setmorphinfluence)
- [setMorphInfluenceIndex](AtmosphericComponent.md#setmorphinfluenceindex)
- [onCompute](AtmosphericComponent.md#oncompute)
- [cloneTo](AtmosphericComponent.md#cloneto)
- [drawWireFrame](AtmosphericComponent.md#drawwireframe)
- [addMask](AtmosphericComponent.md#addmask)
- [removeMask](AtmosphericComponent.md#removemask)
- [hasMask](AtmosphericComponent.md#hasmask)
- [addRendererMask](AtmosphericComponent.md#addrenderermask)
- [removeRendererMask](AtmosphericComponent.md#removerenderermask)
- [selfCloneMaterials](AtmosphericComponent.md#selfclonematerials)
- [renderPass](AtmosphericComponent.md#renderpass)
- [recordRenderPass2](AtmosphericComponent.md#recordrenderpass2)
- [onEnable](AtmosphericComponent.md#onenable)
- [onDisable](AtmosphericComponent.md#ondisable)
- [renderPass2](AtmosphericComponent.md#renderpass2)

### Properties

- [object3D](AtmosphericComponent.md#object3d)
- [receiveShadow](AtmosphericComponent.md#receiveshadow)
- [instanceCount](AtmosphericComponent.md#instancecount)
- [lodLevel](AtmosphericComponent.md#lodlevel)
- [alwaysRender](AtmosphericComponent.md#alwaysrender)
- [renderOrder](AtmosphericComponent.md#renderorder)
- [instanceID](AtmosphericComponent.md#instanceid)
- [drawType](AtmosphericComponent.md#drawtype)
- [skyMaterial](AtmosphericComponent.md#skymaterial)

### Constructors

- [constructor](AtmosphericComponent.md#constructor)

## Accessors

### sunX

• `get` **sunX**(): `number`

#### Returns

`number`

#### Defined in

[src/components/AtmosphericComponent.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L15)

• `set` **sunX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/AtmosphericComponent.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L19)

___

### sunY

• `get` **sunY**(): `number`

#### Returns

`number`

#### Defined in

[src/components/AtmosphericComponent.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L26)

• `set` **sunY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/AtmosphericComponent.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L30)

___

### eyePos

• `get` **eyePos**(): `number`

#### Returns

`number`

#### Defined in

[src/components/AtmosphericComponent.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L37)

• `set` **eyePos**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/AtmosphericComponent.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L41)

___

### sunRadius

• `get` **sunRadius**(): `number`

#### Returns

`number`

#### Defined in

[src/components/AtmosphericComponent.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L48)

• `set` **sunRadius**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/AtmosphericComponent.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L52)

___

### sunRadiance

• `get` **sunRadiance**(): `number`

#### Returns

`number`

#### Defined in

[src/components/AtmosphericComponent.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L59)

• `set` **sunRadiance**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/AtmosphericComponent.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L63)

___

### sunBrightness

• `get` **sunBrightness**(): `number`

#### Returns

`number`

#### Defined in

[src/components/AtmosphericComponent.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L70)

• `set` **sunBrightness**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/components/AtmosphericComponent.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L74)

___

### displaySun

• `get` **displaySun**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/components/AtmosphericComponent.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L81)

• `set` **displaySun**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/components/AtmosphericComponent.ts:85](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L85)

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

[src/components/renderer/MeshRenderer.ts:38](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L38)

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

[src/components/renderer/MeshRenderer.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L42)

___

### material

• `get` **material**(): `MaterialBase`

material

#### Returns

`MaterialBase`

#### Inherited from

SkyRenderer.material

#### Defined in

[src/components/renderer/MeshRenderer.ts:68](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L68)

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

[src/components/renderer/MeshRenderer.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L72)

___

### rendererMask

• `get` **rendererMask**(): `number`

#### Returns

`number`

#### Inherited from

SkyRenderer.rendererMask

#### Defined in

[src/components/renderer/RenderNode.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L71)

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

[src/components/renderer/RenderNode.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L75)

___

### materials

• `get` **materials**(): `MaterialBase`[]

#### Returns

`MaterialBase`[]

#### Inherited from

SkyRenderer.materials

#### Defined in

[src/components/renderer/RenderNode.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L79)

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

[src/components/renderer/RenderNode.ts:83](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L83)

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

SkyRenderer.castShadow

#### Defined in

[src/components/renderer/RenderNode.ts:219](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L219)

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

[src/components/renderer/RenderNode.ts:223](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L223)

___

### castGI

• `get` **castGI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

SkyRenderer.castGI

#### Defined in

[src/components/renderer/RenderNode.ts:227](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L227)

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

[src/components/renderer/RenderNode.ts:231](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L231)

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

SkyRenderer.castReflection

#### Defined in

[src/components/renderer/RenderNode.ts:235](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L235)

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

[src/components/renderer/RenderNode.ts:239](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L239)

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

[src/components/AtmosphericComponent.ts:101](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L101)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[SkyRenderer](SkyRenderer.md).[start](SkyRenderer.md#start)

#### Defined in

[src/components/AtmosphericComponent.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L106)

___

### onUpdate

▸ **onUpdate**(`view?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Overrides

[SkyRenderer](SkyRenderer.md).[onUpdate](SkyRenderer.md#onupdate)

#### Defined in

[src/components/AtmosphericComponent.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/AtmosphericComponent.ts#L113)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[stop](SkyRenderer.md#stop)

#### Defined in

[src/components/ComponentBase.ts:108](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L108)

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

[src/components/ComponentBase.ts:112](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L112)

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

[src/components/ComponentBase.ts:113](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L113)

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

[src/components/ComponentBase.ts:115](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L115)

___

### destroy

▸ **destroy**(): `void`

release this component

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[destroy](SkyRenderer.md#destroy)

#### Defined in

[src/components/ComponentBase.ts:189](https://github.com/Orillusion/orillusion/blob/main/src/components/ComponentBase.ts#L189)

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

[src/components/renderer/MeshRenderer.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L79)

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

[src/components/renderer/MeshRenderer.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L88)

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

[src/components/renderer/MeshRenderer.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L97)

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

[src/components/renderer/MeshRenderer.ts:128](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L128)

___

### drawWireFrame

▸ **drawWireFrame**(): `void`

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[drawWireFrame](SkyRenderer.md#drawwireframe)

#### Defined in

[src/components/renderer/MeshRenderer.ts:138](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L138)

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

[src/components/renderer/RenderNode.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L59)

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

[src/components/renderer/RenderNode.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L63)

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

[src/components/renderer/RenderNode.ts:67](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L67)

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

[src/components/renderer/RenderNode.ts:106](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L106)

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

[src/components/renderer/RenderNode.ts:110](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L110)

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

[src/components/renderer/RenderNode.ts:126](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L126)

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

[src/components/renderer/RenderNode.ts:243](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L243)

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

[src/components/renderer/RenderNode.ts:328](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L328)

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

[src/components/renderer/MeshRenderer.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/MeshRenderer.ts#L20)

___

### instanceCount

• **instanceCount**: `number` = `0`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[instanceCount](SkyRenderer.md#instancecount)

#### Defined in

[src/components/renderer/RenderNode.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L27)

___

### lodLevel

• **lodLevel**: `number` = `0`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[lodLevel](SkyRenderer.md#lodlevel)

#### Defined in

[src/components/renderer/RenderNode.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L28)

___

### alwaysRender

• **alwaysRender**: `boolean` = `false`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[alwaysRender](SkyRenderer.md#alwaysrender)

#### Defined in

[src/components/renderer/RenderNode.ts:29](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L29)

___

### renderOrder

• **renderOrder**: `number` = `0`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[renderOrder](SkyRenderer.md#renderorder)

#### Defined in

[src/components/renderer/RenderNode.ts:30](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L30)

___

### instanceID

• **instanceID**: `string`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[instanceID](SkyRenderer.md#instanceid)

#### Defined in

[src/components/renderer/RenderNode.ts:31](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L31)

___

### drawType

• **drawType**: `number` = `0`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[drawType](SkyRenderer.md#drawtype)

#### Defined in

[src/components/renderer/RenderNode.ts:32](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/RenderNode.ts#L32)

___

### skyMaterial

• **skyMaterial**: `SkyMaterial`

The material used in the Sky Box.

#### Inherited from

[SkyRenderer](SkyRenderer.md).[skyMaterial](SkyRenderer.md#skymaterial)

#### Defined in

[src/components/renderer/SkyRenderer.ts:25](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L25)

## Constructors

### constructor

• **new AtmosphericComponent**()

#### Inherited from

[SkyRenderer](SkyRenderer.md).[constructor](SkyRenderer.md#constructor)

#### Defined in

[src/components/renderer/SkyRenderer.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/components/renderer/SkyRenderer.ts#L27)
