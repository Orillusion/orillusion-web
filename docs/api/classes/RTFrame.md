# Class: RTFrame

## Hierarchy

- **`RTFrame`**

  ↳ [`GBufferFrame`](GBufferFrame.md)

  ↳ [`ProbeGBufferFrame`](ProbeGBufferFrame.md)

### Constructors

- [constructor](RTFrame.md#constructor)

### Properties

- [label](RTFrame.md#label)
- [customSize](RTFrame.md#customsize)
- [attachments](RTFrame.md#attachments)
- [rtDescriptors](RTFrame.md#rtdescriptors)
- [zPreTexture](RTFrame.md#zpretexture)
- [depthTexture](RTFrame.md#depthtexture)
- [depthViewIndex](RTFrame.md#depthviewindex)
- [depthCleanValue](RTFrame.md#depthcleanvalue)
- [depthLoadOp](RTFrame.md#depthloadop)
- [isOutTarget](RTFrame.md#isouttarget)

### Methods

- [clone2Frame](RTFrame.md#clone2frame)
- [clone](RTFrame.md#clone)

## Constructors

### constructor

• **new RTFrame**(`attachments`, `rtDescriptors`, `depthTexture?`, `zPreTexture?`, `isOutTarget?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `attachments` | `VirtualTexture`[] | `undefined` |
| `rtDescriptors` | [`RTDescriptor`](RTDescriptor.md)[] | `undefined` |
| `depthTexture?` | `VirtualTexture` | `undefined` |
| `zPreTexture?` | `VirtualTexture` | `undefined` |
| `isOutTarget` | `boolean` | `true` |

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L19)

## Properties

### label

• **label**: `string`

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L6)

___

### customSize

• **customSize**: `boolean` = `false`

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L7)

___

### attachments

• **attachments**: `VirtualTexture`[]

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L8)

___

### rtDescriptors

• **rtDescriptors**: [`RTDescriptor`](RTDescriptor.md)[]

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:9](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L9)

___

### zPreTexture

• **zPreTexture**: `VirtualTexture`

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L11)

___

### depthTexture

• **depthTexture**: `VirtualTexture`

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:12](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L12)

___

### depthViewIndex

• **depthViewIndex**: `number` = `0`

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L14)

___

### depthCleanValue

• **depthCleanValue**: `number` = `1`

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L15)

___

### depthLoadOp

• **depthLoadOp**: `GPULoadOp`

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L16)

___

### isOutTarget

• **isOutTarget**: `boolean` = `true`

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L17)

## Methods

### clone2Frame

▸ **clone2Frame**(`rtFrame`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rtFrame` | [`RTFrame`](RTFrame.md) |

#### Returns

`void`

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:27](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L27)

___

### clone

▸ **clone**(): [`RTFrame`](RTFrame.md)

#### Returns

[`RTFrame`](RTFrame.md)

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L42)
