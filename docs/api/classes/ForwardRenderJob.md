# Class: ForwardRenderJob

前向渲染。
每进行一次前向渲染，会渲染该对象的图元 ，并计算颜色、深度缓冲的值 深度缓冲将决定一个片元是否可见 如果可见 将颜色缓冲中的值更新。

## Hierarchy

- `RendererJob`

  ↳ **`ForwardRenderJob`**


### Constructors

- [constructor](ForwardRenderJob.md#constructor)

### Methods

- [start](ForwardRenderJob.md#start)
- [stop](ForwardRenderJob.md#stop)
- [pause](ForwardRenderJob.md#pause)
- [resume](ForwardRenderJob.md#resume)
- [addPost](ForwardRenderJob.md#addpost)
- [removePost](ForwardRenderJob.md#removepost)

### Properties

- [colorPassRenderer](ForwardRenderJob.md#colorpassrenderer)
- [gBufferFrame](ForwardRenderJob.md#gbufferframe)

### Accessors

- [guiCanvas](ForwardRenderJob.md#guicanvas)

## Constructors

### constructor

• **new ForwardRenderJob**(`scene`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Scene3D`](Scene3D.md) |

#### Overrides

RendererJob.constructor

#### Defined in

[src/engine/gfx/renderJob/jobs/ForwardRenderJob.ts:15](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/ForwardRenderJob.ts#L15)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

RendererJob.start

#### Defined in

[src/engine/gfx/renderJob/jobs/ForwardRenderJob.ts:19](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/ForwardRenderJob.ts#L19)

___

### stop

▸ **stop**(): `void`

停止

#### Returns

`void`

#### Inherited from

RendererJob.stop

#### Defined in

[src/engine/gfx/renderJob/jobs/RendererJob.ts:139](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/RendererJob.ts#L139)

___

### pause

▸ **pause**(): `void`

暂停渲染任务

#### Returns

`void`

#### Inherited from

RendererJob.pause

#### Defined in

[src/engine/gfx/renderJob/jobs/RendererJob.ts:144](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/RendererJob.ts#L144)

___

### resume

▸ **resume**(): `void`

恢复渲染任务

#### Returns

`void`

#### Inherited from

RendererJob.resume

#### Defined in

[src/engine/gfx/renderJob/jobs/RendererJob.ts:151](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/RendererJob.ts#L151)

___

### addPost

▸ **addPost**(`post`): `PostBase` \| `PostBase`[]

添加后处理效果

#### Parameters

| Name | Type |
| :------ | :------ |
| `post` | `PostBase` \| `PostBase`[] |

#### Returns

`PostBase` \| `PostBase`[]

#### Inherited from

RendererJob.addPost

#### Defined in

[src/engine/gfx/renderJob/jobs/RendererJob.ts:168](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/RendererJob.ts#L168)

___

### removePost

▸ **removePost**(`post`): `void`

移除后处理效果

#### Parameters

| Name | Type |
| :------ | :------ |
| `post` | `PostBase` \| `PostBase`[] |

#### Returns

`void`

#### Inherited from

RendererJob.removePost

#### Defined in

[src/engine/gfx/renderJob/jobs/RendererJob.ts:185](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/RendererJob.ts#L185)

## Properties

### colorPassRenderer

• **colorPassRenderer**: `ColorPassRenderer`

#### Inherited from

RendererJob.colorPassRenderer

#### Defined in

[src/engine/gfx/renderJob/jobs/RendererJob.ts:61](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/RendererJob.ts#L61)

___

### gBufferFrame

• **gBufferFrame**: [`GBufferFrame`](GBufferFrame.md)

#### Inherited from

RendererJob.gBufferFrame

#### Defined in

[src/engine/gfx/renderJob/jobs/RendererJob.ts:69](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/RendererJob.ts#L69)

## Accessors

### guiCanvas

• `get` **guiCanvas**(): [`UICanvas`](UICanvas.md)

#### Returns

[`UICanvas`](UICanvas.md)

#### Inherited from

RendererJob.guiCanvas

#### Defined in

[src/engine/gfx/renderJob/jobs/RendererJob.ts:122](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/jobs/RendererJob.ts#L122)
