# Class: GBufferFrameA

## Hierarchy

- [`RTFrame`](RTFrame.md)

  ↳ **`GBufferFrameA`**

### Constructors

- [constructor](GBufferFrameA.md#constructor)

### Properties

- [gBufferMap](GBufferFrameA.md#gbuffermap)
- [bufferTexture](GBufferFrameA.md#buffertexture)
- [label](GBufferFrameA.md#label)
- [customSize](GBufferFrameA.md#customsize)
- [renderTargets](GBufferFrameA.md#rendertargets)
- [rtDescriptors](GBufferFrameA.md#rtdescriptors)
- [zPreTexture](GBufferFrameA.md#zpretexture)
- [depthTexture](GBufferFrameA.md#depthtexture)
- [depthViewIndex](GBufferFrameA.md#depthviewindex)
- [depthCleanValue](GBufferFrameA.md#depthcleanvalue)
- [depthLoadOp](GBufferFrameA.md#depthloadop)
- [isOutTarget](GBufferFrameA.md#isouttarget)

### Methods

- [crateGBuffer](GBufferFrameA.md#crategbuffer)
- [getColorMap](GBufferFrameA.md#getcolormap)
- [getPositionMap](GBufferFrameA.md#getpositionmap)
- [getNormalMap](GBufferFrameA.md#getnormalmap)
- [getMaterialMap](GBufferFrameA.md#getmaterialmap)
- [getAlbedoMap](GBufferFrameA.md#getalbedomap)
- [clone](GBufferFrameA.md#clone)
- [clone2Frame](GBufferFrameA.md#clone2frame)

## Constructors

### constructor

• **new GBufferFrameA**(): [`GBufferFrameA`](GBufferFrameA.md)

#### Returns

[`GBufferFrameA`](GBufferFrameA.md)

#### Overrides

[RTFrame](RTFrame.md).[constructor](RTFrame.md#constructor)

#### Defined in

[src/gfx/renderJob/frame/GBufferFrameA.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrameA.ts#L14)

## Properties

### gBufferMap

▪ `Static` **gBufferMap**: `Map`\<`string`, [`GBufferFrameA`](GBufferFrameA.md)\>

#### Defined in

[src/gfx/renderJob/frame/GBufferFrameA.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrameA.ts#L12)

___

### bufferTexture

▪ `Static` **bufferTexture**: `boolean` = `false`

#### Defined in

[src/gfx/renderJob/frame/GBufferFrameA.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrameA.ts#L13)

___

### label

• **label**: `string`

#### Inherited from

[RTFrame](RTFrame.md).[label](RTFrame.md#label)

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:5](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L5)

___

### customSize

• **customSize**: `boolean` = `false`

#### Inherited from

[RTFrame](RTFrame.md).[customSize](RTFrame.md#customsize)

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L6)

___

### renderTargets

• **renderTargets**: `RenderTexture`[]

#### Inherited from

[RTFrame](RTFrame.md).[renderTargets](RTFrame.md#rendertargets)

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L7)

___

### rtDescriptors

• **rtDescriptors**: [`RTDescriptor`](RTDescriptor.md)[]

#### Inherited from

[RTFrame](RTFrame.md).[rtDescriptors](RTFrame.md#rtdescriptors)

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L8)

___

### zPreTexture

• **zPreTexture**: `RenderTexture`

#### Inherited from

[RTFrame](RTFrame.md).[zPreTexture](RTFrame.md#zpretexture)

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L10)

___

### depthTexture

• **depthTexture**: `RenderTexture`

#### Inherited from

[RTFrame](RTFrame.md).[depthTexture](RTFrame.md#depthtexture)

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L11)

___

### depthViewIndex

• **depthViewIndex**: `number` = `0`

#### Inherited from

[RTFrame](RTFrame.md).[depthViewIndex](RTFrame.md#depthviewindex)

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L13)

___

### depthCleanValue

• **depthCleanValue**: `number` = `1`

#### Inherited from

[RTFrame](RTFrame.md).[depthCleanValue](RTFrame.md#depthcleanvalue)

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L14)

___

### depthLoadOp

• **depthLoadOp**: `GPULoadOp`

#### Inherited from

[RTFrame](RTFrame.md).[depthLoadOp](RTFrame.md#depthloadop)

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L15)

___

### isOutTarget

• **isOutTarget**: `boolean` = `true`

#### Inherited from

[RTFrame](RTFrame.md).[isOutTarget](RTFrame.md#isouttarget)

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L16)

## Methods

### crateGBuffer

▸ **crateGBuffer**(`key`, `rtWidth`, `rtHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `rtWidth` | `number` |
| `rtHeight` | `number` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/frame/GBufferFrameA.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrameA.ts#L18)

___

### getColorMap

▸ **getColorMap**(): `RenderTexture`

#### Returns

`RenderTexture`

#### Defined in

[src/gfx/renderJob/frame/GBufferFrameA.ts:74](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrameA.ts#L74)

___

### getPositionMap

▸ **getPositionMap**(): `RenderTexture`

#### Returns

`RenderTexture`

#### Defined in

[src/gfx/renderJob/frame/GBufferFrameA.ts:78](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrameA.ts#L78)

___

### getNormalMap

▸ **getNormalMap**(): `RenderTexture`

#### Returns

`RenderTexture`

#### Defined in

[src/gfx/renderJob/frame/GBufferFrameA.ts:82](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrameA.ts#L82)

___

### getMaterialMap

▸ **getMaterialMap**(): `RenderTexture`

#### Returns

`RenderTexture`

#### Defined in

[src/gfx/renderJob/frame/GBufferFrameA.ts:86](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrameA.ts#L86)

___

### getAlbedoMap

▸ **getAlbedoMap**(): `RenderTexture`

#### Returns

`RenderTexture`

#### Defined in

[src/gfx/renderJob/frame/GBufferFrameA.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrameA.ts#L90)

___

### clone

▸ **clone**(): [`GBufferFrameA`](GBufferFrameA.md)

#### Returns

[`GBufferFrameA`](GBufferFrameA.md)

#### Overrides

[RTFrame](RTFrame.md).[clone](RTFrame.md#clone)

#### Defined in

[src/gfx/renderJob/frame/GBufferFrameA.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrameA.ts#L111)

___

### clone2Frame

▸ **clone2Frame**(`rtFrame`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rtFrame` | [`RTFrame`](RTFrame.md) |

#### Returns

`void`

#### Inherited from

[RTFrame](RTFrame.md).[clone2Frame](RTFrame.md#clone2frame)

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L26)
