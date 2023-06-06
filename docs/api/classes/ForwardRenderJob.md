# Class: ForwardRenderJob

Forward+
Every time a forward rendering is performed, 
the entity of the object is rendered, and 
the color and depth buffer values are calculated. 
The depth buffer will determine whether a tile is visible. 
If visible, the values in the color buffer will be updated.

## Hierarchy

- `RendererJob`

  ↳ **`ForwardRenderJob`**

### Constructors

- [constructor](ForwardRenderJob.md#constructor)

### Properties

- [pickFire](ForwardRenderJob.md#pickfire)

### Accessors

- [view](ForwardRenderJob.md#view)

### Methods

- [start](ForwardRenderJob.md#start)
- [addRenderer](ForwardRenderJob.md#addrenderer)
- [stop](ForwardRenderJob.md#stop)
- [pause](ForwardRenderJob.md#pause)
- [resume](ForwardRenderJob.md#resume)
- [addPost](ForwardRenderJob.md#addpost)
- [removePost](ForwardRenderJob.md#removepost)
- [renderFrame](ForwardRenderJob.md#renderframe)

## Constructors

### constructor

• **new ForwardRenderJob**(`view`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Overrides

RendererJob.constructor

#### Defined in

[src/gfx/renderJob/jobs/ForwardRenderJob.ts:17](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/ForwardRenderJob.ts#L17)

## Properties

### pickFire

• **pickFire**: [`PickFire`](PickFire.md)

#### Inherited from

RendererJob.pickFire

#### Defined in

[src/gfx/renderJob/jobs/RendererJob.ts:71](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L71)

## Accessors

### view

• `set` **view**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Inherited from

RendererJob.view

#### Defined in

[src/gfx/renderJob/jobs/RendererJob.ts:114](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L114)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

RendererJob.start

#### Defined in

[src/gfx/renderJob/jobs/ForwardRenderJob.ts:21](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/ForwardRenderJob.ts#L21)

___

### addRenderer

▸ **addRenderer**<`T`\>(`c`, `param?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `RendererBase`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)<`T`\> |
| `param?` | `any` |

#### Returns

`T`

#### Inherited from

RendererJob.addRenderer

#### Defined in

[src/gfx/renderJob/jobs/RendererJob.ts:96](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L96)

___

### stop

▸ **stop**(): `void`

stop render task

#### Returns

`void`

#### Inherited from

RendererJob.stop

#### Defined in

[src/gfx/renderJob/jobs/RendererJob.ts:131](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L131)

___

### pause

▸ **pause**(): `void`

pause render task

#### Returns

`void`

#### Inherited from

RendererJob.pause

#### Defined in

[src/gfx/renderJob/jobs/RendererJob.ts:136](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L136)

___

### resume

▸ **resume**(): `void`

back render task

#### Returns

`void`

#### Inherited from

RendererJob.resume

#### Defined in

[src/gfx/renderJob/jobs/RendererJob.ts:143](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L143)

___

### addPost

▸ **addPost**(`post`): `PostBase` \| `PostBase`[]

Add a post processing special effects task

#### Parameters

| Name | Type |
| :------ | :------ |
| `post` | `PostBase` |

#### Returns

`PostBase` \| `PostBase`[]

#### Inherited from

RendererJob.addPost

#### Defined in

[src/gfx/renderJob/jobs/RendererJob.ts:159](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L159)

___

### removePost

▸ **removePost**(`post`): `void`

Remove specified post-processing effects

#### Parameters

| Name | Type |
| :------ | :------ |
| `post` | `PostBase` \| `PostBase`[] |

#### Returns

`void`

#### Inherited from

RendererJob.removePost

#### Defined in

[src/gfx/renderJob/jobs/RendererJob.ts:172](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L172)

___

### renderFrame

▸ **renderFrame**(): `void`

To render a frame of the scene

#### Returns

`void`

#### Inherited from

RendererJob.renderFrame

#### Defined in

[src/gfx/renderJob/jobs/RendererJob.ts:185](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L185)
