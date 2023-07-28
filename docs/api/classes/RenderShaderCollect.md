# Class: RenderShaderCollect

### Constructors

- [constructor](RenderShaderCollect.md#constructor)

### Properties

- [renderShaderUpdateList](RenderShaderCollect.md#rendershaderupdatelist)
- [renderNodeList](RenderShaderCollect.md#rendernodelist)

### Methods

- [collect\_add](RenderShaderCollect.md#collect_add)
- [collect\_remove](RenderShaderCollect.md#collect_remove)

## Constructors

### constructor

• **new RenderShaderCollect**()

## Properties

### renderShaderUpdateList

• **renderShaderUpdateList**: `Map`<[`View3D`](View3D.md), [`RenderShaderList`](../types/RenderShaderList.md)\>

#### Defined in

[src/gfx/renderJob/collect/RenderShaderCollect.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/RenderShaderCollect.ts#L7)

___

### renderNodeList

• **renderNodeList**: `Map`<[`View3D`](View3D.md), `Map`<`string`, `RenderNode`\>\>

#### Defined in

[src/gfx/renderJob/collect/RenderShaderCollect.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/RenderShaderCollect.ts#L8)

## Methods

### collect\_add

▸ **collect_add**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `RenderNode` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/RenderShaderCollect.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/RenderShaderCollect.ts#L10)

___

### collect\_remove

▸ **collect_remove**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `RenderNode` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/collect/RenderShaderCollect.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/collect/RenderShaderCollect.ts#L42)
