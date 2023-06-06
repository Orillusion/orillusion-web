# Class: GBufferFrame

## Hierarchy

- [`RTFrame`](RTFrame.md)

  ↳ **`GBufferFrame`**

### Constructors

- [constructor](GBufferFrame.md#constructor)

### Properties

- [gBufferMap](GBufferFrame.md#gbuffermap)
- [label](GBufferFrame.md#label)
- [customSize](GBufferFrame.md#customsize)
- [attachments](GBufferFrame.md#attachments)
- [rtDescriptors](GBufferFrame.md#rtdescriptors)
- [zPreTexture](GBufferFrame.md#zpretexture)
- [depthTexture](GBufferFrame.md#depthtexture)
- [depthViewIndex](GBufferFrame.md#depthviewindex)
- [depthCleanValue](GBufferFrame.md#depthcleanvalue)
- [depthLoadOp](GBufferFrame.md#depthloadop)
- [isOutTarget](GBufferFrame.md#isouttarget)

### Methods

- [crateGBuffer](GBufferFrame.md#crategbuffer)
- [getColorMap](GBufferFrame.md#getcolormap)
- [getPositionMap](GBufferFrame.md#getpositionmap)
- [getNormalMap](GBufferFrame.md#getnormalmap)
- [getMaterialMap](GBufferFrame.md#getmaterialmap)
- [clone](GBufferFrame.md#clone)
- [clone2Frame](GBufferFrame.md#clone2frame)

## Constructors

### constructor

• **new GBufferFrame**()

#### Overrides

[RTFrame](RTFrame.md).[constructor](RTFrame.md#constructor)

#### Defined in

[src/gfx/renderJob/frame/GBufferFrame.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L12)

## Properties

### gBufferMap

▪ `Static` **gBufferMap**: `Map`<`string`, [`GBufferFrame`](GBufferFrame.md)\>

#### Defined in

[src/gfx/renderJob/frame/GBufferFrame.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L10)

___

### label

• **label**: `string`

#### Inherited from

[RTFrame](RTFrame.md).[label](RTFrame.md#label)

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L6)

___

### customSize

• **customSize**: `boolean` = `false`

#### Inherited from

[RTFrame](RTFrame.md).[customSize](RTFrame.md#customsize)

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L7)

___

### attachments

• **attachments**: `VirtualTexture`[]

#### Inherited from

[RTFrame](RTFrame.md).[attachments](RTFrame.md#attachments)

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L8)

___

### rtDescriptors

• **rtDescriptors**: [`RTDescriptor`](RTDescriptor.md)[]

#### Inherited from

[RTFrame](RTFrame.md).[rtDescriptors](RTFrame.md#rtdescriptors)

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L9)

___

### zPreTexture

• **zPreTexture**: `VirtualTexture`

#### Inherited from

[RTFrame](RTFrame.md).[zPreTexture](RTFrame.md#zpretexture)

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L11)

___

### depthTexture

• **depthTexture**: `VirtualTexture`

#### Inherited from

[RTFrame](RTFrame.md).[depthTexture](RTFrame.md#depthtexture)

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L12)

___

### depthViewIndex

• **depthViewIndex**: `number` = `0`

#### Inherited from

[RTFrame](RTFrame.md).[depthViewIndex](RTFrame.md#depthviewindex)

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L14)

___

### depthCleanValue

• **depthCleanValue**: `number` = `1`

#### Inherited from

[RTFrame](RTFrame.md).[depthCleanValue](RTFrame.md#depthcleanvalue)

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L15)

___

### depthLoadOp

• **depthLoadOp**: `GPULoadOp`

#### Inherited from

[RTFrame](RTFrame.md).[depthLoadOp](RTFrame.md#depthloadop)

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L16)

___

### isOutTarget

• **isOutTarget**: `boolean` = `true`

#### Inherited from

[RTFrame](RTFrame.md).[isOutTarget](RTFrame.md#isouttarget)

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L17)

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

[src/gfx/renderJob/frame/GBufferFrame.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L16)

___

### getColorMap

▸ **getColorMap**(): `VirtualTexture`

#### Returns

`VirtualTexture`

#### Defined in

[src/gfx/renderJob/frame/GBufferFrame.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L48)

___

### getPositionMap

▸ **getPositionMap**(): `VirtualTexture`

#### Returns

`VirtualTexture`

#### Defined in

[src/gfx/renderJob/frame/GBufferFrame.ts:52](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L52)

___

### getNormalMap

▸ **getNormalMap**(): `VirtualTexture`

#### Returns

`VirtualTexture`

#### Defined in

[src/gfx/renderJob/frame/GBufferFrame.ts:56](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L56)

___

### getMaterialMap

▸ **getMaterialMap**(): `VirtualTexture`

#### Returns

`VirtualTexture`

#### Defined in

[src/gfx/renderJob/frame/GBufferFrame.ts:60](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L60)

___

### clone

▸ **clone**(): [`GBufferFrame`](GBufferFrame.md)

#### Returns

[`GBufferFrame`](GBufferFrame.md)

#### Overrides

[RTFrame](RTFrame.md).[clone](RTFrame.md#clone)

#### Defined in

[src/gfx/renderJob/frame/GBufferFrame.ts:80](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/GBufferFrame.ts#L80)

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

[src/gfx/renderJob/frame/RTFrame.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L27)
