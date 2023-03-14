# Class: GBufferFrame

## Hierarchy

- [`RTFrame`](RTFrame.md)

  ↳ **`GBufferFrame`**


### Properties

- [gBufferMap](GBufferFrame.md#gbuffermap)
- [label](GBufferFrame.md#label)
- [customSize](GBufferFrame.md#customsize)
- [attachments](GBufferFrame.md#attachments)
- [rtDescripts](GBufferFrame.md#rtdescripts)
- [zPreTexture](GBufferFrame.md#zpretexture)
- [depthTexture](GBufferFrame.md#depthtexture)
- [depthViewIndex](GBufferFrame.md#depthviewindex)
- [depthCleanValue](GBufferFrame.md#depthcleanvalue)
- [depthLoadOp](GBufferFrame.md#depthloadop)
- [isOutTarget](GBufferFrame.md#isouttarget)

### Constructors

- [constructor](GBufferFrame.md#constructor)

### Methods

- [crateGBuffer](GBufferFrame.md#crategbuffer)
- [getColorMap](GBufferFrame.md#getcolormap)
- [getPositionMap](GBufferFrame.md#getpositionmap)
- [getNormalMap](GBufferFrame.md#getnormalmap)
- [getMaterialMap](GBufferFrame.md#getmaterialmap)
- [clone](GBufferFrame.md#clone)
- [clone2Frame](GBufferFrame.md#clone2frame)

## Properties

### gBufferMap

▪ `Static` **gBufferMap**: `Map`<`string`, [`GBufferFrame`](GBufferFrame.md)\>

#### Defined in

[src/engine/gfx/renderJob/jobs/GBufferFrame.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/GBufferFrame.ts#L7)

___

### label

• **label**: `string`

#### Inherited from

[RTFrame](RTFrame.md).[label](RTFrame.md#label)

#### Defined in

[src/engine/gfx/renderJob/jobs/RTFrame.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/RTFrame.ts#L6)

___

### customSize

• **customSize**: `boolean` = `false`

#### Inherited from

[RTFrame](RTFrame.md).[customSize](RTFrame.md#customsize)

#### Defined in

[src/engine/gfx/renderJob/jobs/RTFrame.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/RTFrame.ts#L7)

___

### attachments

• **attachments**: `VirtualTexture`[]

#### Inherited from

[RTFrame](RTFrame.md).[attachments](RTFrame.md#attachments)

#### Defined in

[src/engine/gfx/renderJob/jobs/RTFrame.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/RTFrame.ts#L8)

___

### rtDescripts

• **rtDescripts**: [`RTDescript`](RTDescript.md)[]

#### Inherited from

[RTFrame](RTFrame.md).[rtDescripts](RTFrame.md#rtdescripts)

#### Defined in

[src/engine/gfx/renderJob/jobs/RTFrame.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/RTFrame.ts#L9)

___

### zPreTexture

• **zPreTexture**: `VirtualTexture`

#### Inherited from

[RTFrame](RTFrame.md).[zPreTexture](RTFrame.md#zpretexture)

#### Defined in

[src/engine/gfx/renderJob/jobs/RTFrame.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/RTFrame.ts#L11)

___

### depthTexture

• **depthTexture**: `VirtualTexture`

#### Inherited from

[RTFrame](RTFrame.md).[depthTexture](RTFrame.md#depthtexture)

#### Defined in

[src/engine/gfx/renderJob/jobs/RTFrame.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/RTFrame.ts#L12)

___

### depthViewIndex

• **depthViewIndex**: `number` = `0`

#### Inherited from

[RTFrame](RTFrame.md).[depthViewIndex](RTFrame.md#depthviewindex)

#### Defined in

[src/engine/gfx/renderJob/jobs/RTFrame.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/RTFrame.ts#L14)

___

### depthCleanValue

• **depthCleanValue**: `number` = `1`

#### Inherited from

[RTFrame](RTFrame.md).[depthCleanValue](RTFrame.md#depthcleanvalue)

#### Defined in

[src/engine/gfx/renderJob/jobs/RTFrame.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/RTFrame.ts#L15)

___

### depthLoadOp

• **depthLoadOp**: `GPULoadOp`

#### Inherited from

[RTFrame](RTFrame.md).[depthLoadOp](RTFrame.md#depthloadop)

#### Defined in

[src/engine/gfx/renderJob/jobs/RTFrame.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/RTFrame.ts#L16)

___

### isOutTarget

• **isOutTarget**: `boolean` = `true`

#### Inherited from

[RTFrame](RTFrame.md).[isOutTarget](RTFrame.md#isouttarget)

#### Defined in

[src/engine/gfx/renderJob/jobs/RTFrame.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/RTFrame.ts#L17)

## Constructors

### constructor

• **new GBufferFrame**()

#### Overrides

[RTFrame](RTFrame.md).[constructor](RTFrame.md#constructor)

#### Defined in

[src/engine/gfx/renderJob/jobs/GBufferFrame.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/GBufferFrame.ts#L9)

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

[src/engine/gfx/renderJob/jobs/GBufferFrame.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/GBufferFrame.ts#L13)

___

### getColorMap

▸ **getColorMap**(): `VirtualTexture`

#### Returns

`VirtualTexture`

#### Defined in

[src/engine/gfx/renderJob/jobs/GBufferFrame.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/GBufferFrame.ts#L43)

___

### getPositionMap

▸ **getPositionMap**(): `VirtualTexture`

#### Returns

`VirtualTexture`

#### Defined in

[src/engine/gfx/renderJob/jobs/GBufferFrame.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/GBufferFrame.ts#L47)

___

### getNormalMap

▸ **getNormalMap**(): `VirtualTexture`

#### Returns

`VirtualTexture`

#### Defined in

[src/engine/gfx/renderJob/jobs/GBufferFrame.ts:51](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/GBufferFrame.ts#L51)

___

### getMaterialMap

▸ **getMaterialMap**(): `VirtualTexture`

#### Returns

`VirtualTexture`

#### Defined in

[src/engine/gfx/renderJob/jobs/GBufferFrame.ts:55](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/GBufferFrame.ts#L55)

___

### clone

▸ **clone**(): [`GBufferFrame`](GBufferFrame.md)

#### Returns

[`GBufferFrame`](GBufferFrame.md)

#### Overrides

[RTFrame](RTFrame.md).[clone](RTFrame.md#clone)

#### Defined in

[src/engine/gfx/renderJob/jobs/GBufferFrame.ts:75](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/GBufferFrame.ts#L75)

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

[src/engine/gfx/renderJob/jobs/RTFrame.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/RTFrame.ts#L27)
