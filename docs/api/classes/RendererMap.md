# Class: RendererMap

### Constructors

- [constructor](RendererMap.md#constructor)

### Methods

- [addRenderer](RendererMap.md#addrenderer)
- [getRenderer](RendererMap.md#getrenderer)
- [getAllRenderer](RendererMap.md#getallrenderer)
- [getAllPassRenderer](RendererMap.md#getallpassrenderer)

## Constructors

### constructor

• **new RendererMap**()

#### Defined in

[src/gfx/renderJob/jobs/RenderMap.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RenderMap.ts#L11)

## Methods

### addRenderer

▸ **addRenderer**(`renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | `RendererBase` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/jobs/RenderMap.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RenderMap.ts#L16)

___

### getRenderer

▸ **getRenderer**(`passType`): `RendererBase`

#### Parameters

| Name | Type |
| :------ | :------ |
| `passType` | `RendererType` |

#### Returns

`RendererBase`

#### Defined in

[src/gfx/renderJob/jobs/RenderMap.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RenderMap.ts#L27)

___

### getAllRenderer

▸ **getAllRenderer**(): `Map`<`RendererType`, `RendererBase`\>

#### Returns

`Map`<`RendererType`, `RendererBase`\>

#### Defined in

[src/gfx/renderJob/jobs/RenderMap.ts:35](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RenderMap.ts#L35)

___

### getAllPassRenderer

▸ **getAllPassRenderer**(): `RendererBase`[]

#### Returns

`RendererBase`[]

#### Defined in

[src/gfx/renderJob/jobs/RenderMap.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RenderMap.ts#L39)
