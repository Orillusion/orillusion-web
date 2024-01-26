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
- [renderTargets](RTFrame.md#rendertargets)
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

• **new RTFrame**(`attachments`, `rtDescriptors`, `depthTexture?`, `zPreTexture?`, `isOutTarget?`): [`RTFrame`](RTFrame.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `attachments` | `RenderTexture`[] | `undefined` |
| `rtDescriptors` | [`RTDescriptor`](RTDescriptor.md)[] | `undefined` |
| `depthTexture?` | `RenderTexture` | `undefined` |
| `zPreTexture?` | `RenderTexture` | `undefined` |
| `isOutTarget` | `boolean` | `true` |

#### Returns

[`RTFrame`](RTFrame.md)

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:18](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L18)

## Properties

### label

• **label**: `string`

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:5](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L5)

___

### customSize

• **customSize**: `boolean` = `false`

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:6](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L6)

___

### renderTargets

• **renderTargets**: `RenderTexture`[]

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:7](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L7)

___

### rtDescriptors

• **rtDescriptors**: [`RTDescriptor`](RTDescriptor.md)[]

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:8](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L8)

___

### zPreTexture

• **zPreTexture**: `RenderTexture`

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:10](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L10)

___

### depthTexture

• **depthTexture**: `RenderTexture`

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:11](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L11)

___

### depthViewIndex

• **depthViewIndex**: `number` = `0`

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:13](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L13)

___

### depthCleanValue

• **depthCleanValue**: `number` = `1`

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:14](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L14)

___

### depthLoadOp

• **depthLoadOp**: `GPULoadOp`

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L15)

___

### isOutTarget

• **isOutTarget**: `boolean` = `true`

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:16](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L16)

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

[src/gfx/renderJob/frame/RTFrame.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L26)

___

### clone

▸ **clone**(): [`RTFrame`](RTFrame.md)

#### Returns

[`RTFrame`](RTFrame.md)

#### Defined in

[src/gfx/renderJob/frame/RTFrame.ts:41](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/frame/RTFrame.ts#L41)
