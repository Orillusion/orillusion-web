# Class: GBufferFrame

## Hierarchy

- [`RTFrame`](RTFrame.md)

  ↳ **`GBufferFrame`**

### Constructors

- [constructor](GBufferFrame.md#constructor)

### Properties

- [colorPass\_GBuffer](GBufferFrame.md#colorpass_gbuffer)
- [reflections\_GBuffer](GBufferFrame.md#reflections_gbuffer)
- [gui\_GBuffer](GBufferFrame.md#gui_gbuffer)
- [gBufferMap](GBufferFrame.md#gbuffermap)
- [label](GBufferFrame.md#label)
- [customSize](GBufferFrame.md#customsize)
- [renderTargets](GBufferFrame.md#rendertargets)
- [rtDescriptors](GBufferFrame.md#rtdescriptors)
- [zPreTexture](GBufferFrame.md#zpretexture)
- [depthTexture](GBufferFrame.md#depthtexture)
- [depthViewIndex](GBufferFrame.md#depthviewindex)
- [depthCleanValue](GBufferFrame.md#depthcleanvalue)
- [depthLoadOp](GBufferFrame.md#depthloadop)
- [isOutTarget](GBufferFrame.md#isouttarget)

### Methods

- [createGBuffer](GBufferFrame.md#creategbuffer)
- [getPositionMap](GBufferFrame.md#getpositionmap)
- [getNormalMap](GBufferFrame.md#getnormalmap)
- [getColorTexture](GBufferFrame.md#getcolortexture)
- [getCompressGBufferTexture](GBufferFrame.md#getcompressgbuffertexture)
- [getGUIBufferFrame](GBufferFrame.md#getguibufferframe)
- [clone](GBufferFrame.md#clone)
- [clone2Frame](GBufferFrame.md#clone2frame)

## Constructors

### constructor

• **new GBufferFrame**(): [`GBufferFrame`](GBufferFrame.md)

#### Returns

[`GBufferFrame`](GBufferFrame.md)

#### Overrides

[RTFrame](RTFrame.md).[constructor](RTFrame.md#constructor)

#### Defined in

[src/gfx/renderJob/frame/GBufferFrame.ts:20](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L20)

## Properties

### colorPass\_GBuffer

▪ `Static` **colorPass\_GBuffer**: `string` = `"ColorPassGBuffer"`

#### Defined in

[src/gfx/renderJob/frame/GBufferFrame.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L11)

___

### reflections\_GBuffer

▪ `Static` **reflections\_GBuffer**: `string` = `"reflections_GBuffer"`

#### Defined in

[src/gfx/renderJob/frame/GBufferFrame.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L12)

___

### gui\_GBuffer

▪ `Static` **gui\_GBuffer**: `string` = `"gui_GBuffer"`

#### Defined in

[src/gfx/renderJob/frame/GBufferFrame.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L13)

___

### gBufferMap

▪ `Static` **gBufferMap**: `Map`\<`string`, [`GBufferFrame`](GBufferFrame.md)\>

#### Defined in

[src/gfx/renderJob/frame/GBufferFrame.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L14)

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

### createGBuffer

▸ **createGBuffer**(`key`, `rtWidth`, `rtHeight`, `autoResize?`, `outColor?`, `depthTexture?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `rtWidth` | `number` | `undefined` |
| `rtHeight` | `number` | `undefined` |
| `autoResize` | `boolean` | `true` |
| `outColor` | `boolean` | `true` |
| `depthTexture?` | `RenderTexture` | `undefined` |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/frame/GBufferFrame.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L24)

___

### getPositionMap

▸ **getPositionMap**(): `RenderTexture`

#### Returns

`RenderTexture`

#### Defined in

[src/gfx/renderJob/frame/GBufferFrame.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L51)

___

### getNormalMap

▸ **getNormalMap**(): `RenderTexture`

#### Returns

`RenderTexture`

#### Defined in

[src/gfx/renderJob/frame/GBufferFrame.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L55)

___

### getColorTexture

▸ **getColorTexture**(): `RenderTexture`

#### Returns

`RenderTexture`

#### Defined in

[src/gfx/renderJob/frame/GBufferFrame.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L59)

___

### getCompressGBufferTexture

▸ **getCompressGBufferTexture**(): `RenderTexture`

#### Returns

`RenderTexture`

#### Defined in

[src/gfx/renderJob/frame/GBufferFrame.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L63)

___

### getGUIBufferFrame

▸ **getGUIBufferFrame**(): [`GBufferFrame`](GBufferFrame.md)

#### Returns

[`GBufferFrame`](GBufferFrame.md)

#### Defined in

[src/gfx/renderJob/frame/GBufferFrame.ts:92](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L92)

___

### clone

▸ **clone**(): [`GBufferFrame`](GBufferFrame.md)

#### Returns

[`GBufferFrame`](GBufferFrame.md)

#### Overrides

[RTFrame](RTFrame.md).[clone](RTFrame.md#clone)

#### Defined in

[src/gfx/renderJob/frame/GBufferFrame.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L98)

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
