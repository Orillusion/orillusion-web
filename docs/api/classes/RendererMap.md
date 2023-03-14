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

[src/engine/gfx/renderJob/jobs/RenderMap.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/RenderMap.ts#L11)

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

[src/engine/gfx/renderJob/jobs/RenderMap.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/RenderMap.ts#L16)

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

[src/engine/gfx/renderJob/jobs/RenderMap.ts:28](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/RenderMap.ts#L28)

___

### getAllRenderer

▸ **getAllRenderer**(): `Map`<`RendererType`, `RendererBase`\>

#### Returns

`Map`<`RendererType`, `RendererBase`\>

#### Defined in

[src/engine/gfx/renderJob/jobs/RenderMap.ts:36](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/RenderMap.ts#L36)

___

### getAllPassRenderer

▸ **getAllPassRenderer**(): `RendererBase`[]

#### Returns

`RendererBase`[]

#### Defined in

[src/engine/gfx/renderJob/jobs/RenderMap.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/RenderMap.ts#L40)
