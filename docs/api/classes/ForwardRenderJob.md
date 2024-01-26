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
- [renderState](ForwardRenderJob.md#renderstate)

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

• **new ForwardRenderJob**(`view`): [`ForwardRenderJob`](ForwardRenderJob.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

[`ForwardRenderJob`](ForwardRenderJob.md)

#### Overrides

RendererJob.constructor

#### Defined in

[src/gfx/renderJob/jobs/ForwardRenderJob.ts:22](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/ForwardRenderJob.ts#L22)

## Properties

### pickFire

• **pickFire**: [`PickFire`](PickFire.md)

#### Inherited from

RendererJob.pickFire

#### Defined in

[src/gfx/renderJob/jobs/RendererJob.ts:76](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L76)

___

### renderState

• **renderState**: `boolean` = `false`

#### Inherited from

RendererJob.renderState

#### Defined in

[src/gfx/renderJob/jobs/RendererJob.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L77)

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

[src/gfx/renderJob/jobs/RendererJob.ts:120](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L120)

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

RendererJob.start

#### Defined in

[src/gfx/renderJob/jobs/ForwardRenderJob.ts:26](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/ForwardRenderJob.ts#L26)

___

### addRenderer

▸ **addRenderer**\<`T`\>(`c`, `param?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `RendererBase` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Ctor`](../types/Ctor.md)\<`T`\> |
| `param?` | `any` |

#### Returns

`T`

#### Inherited from

RendererJob.addRenderer

#### Defined in

[src/gfx/renderJob/jobs/RendererJob.ts:102](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L102)

___

### stop

▸ **stop**(): `void`

stop render task

#### Returns

`void`

#### Inherited from

RendererJob.stop

#### Defined in

[src/gfx/renderJob/jobs/RendererJob.ts:138](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L138)

___

### pause

▸ **pause**(): `void`

pause render task

#### Returns

`void`

#### Inherited from

RendererJob.pause

#### Defined in

[src/gfx/renderJob/jobs/RendererJob.ts:143](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L143)

___

### resume

▸ **resume**(): `void`

back render task

#### Returns

`void`

#### Inherited from

RendererJob.resume

#### Defined in

[src/gfx/renderJob/jobs/RendererJob.ts:150](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L150)

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

[src/gfx/renderJob/jobs/RendererJob.ts:166](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L166)

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

[src/gfx/renderJob/jobs/RendererJob.ts:182](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L182)

___

### renderFrame

▸ **renderFrame**(): `void`

To render a frame of the scene

#### Returns

`void`

#### Inherited from

RendererJob.renderFrame

#### Defined in

[src/gfx/renderJob/jobs/RendererJob.ts:195](https://github.com/Orillusion/orillusion/blob/main/src/gfx/renderJob/jobs/RendererJob.ts#L195)
