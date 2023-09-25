# Class: Engine3D

Orillusion 3D Engine

-- Engine3D.setting.*

-- await Engine3D.init();

### Constructors

- [constructor](Engine3D.md#constructor)

### Properties

- [res](Engine3D.md#res)
- [inputSystem](Engine3D.md#inputsystem)
- [views](Engine3D.md#views)
- [Engine3D](Engine3D.md#engine3d)
- [divB](Engine3D.md#divb)
- [setting](Engine3D.md#setting)

### Accessors

- [frameRate](Engine3D.md#framerate)
- [size](Engine3D.md#size)
- [aspect](Engine3D.md#aspect)
- [width](Engine3D.md#width)
- [height](Engine3D.md#height)

### Methods

- [init](Engine3D.md#init)
- [startRenderView](Engine3D.md#startrenderview)
- [startRenderViews](Engine3D.md#startrenderviews)
- [getRenderJob](Engine3D.md#getrenderjob)
- [pause](Engine3D.md#pause)
- [resume](Engine3D.md#resume)

## Constructors

### constructor

• **new Engine3D**()

## Properties

### res

▪ `Static` **res**: [`Res`](Res.md)

resource manager in engine3d

#### Defined in

[src/Engine3D.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L37)

___

### inputSystem

▪ `Static` **inputSystem**: [`InputSystem`](InputSystem.md)

input system in engine3d

#### Defined in

[src/Engine3D.ts:42](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L42)

___

### views

▪ `Static` **views**: [`View3D`](View3D.md)[]

more view in engine3d

#### Defined in

[src/Engine3D.ts:47](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L47)

___

### Engine3D

▪ `Static` **Engine3D**: `any`

#### Defined in

[src/Engine3D.ts:57](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L57)

___

### divB

▪ `Static` **divB**: `HTMLDivElement`

#### Defined in

[src/Engine3D.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L58)

___

### setting

▪ `Static` **setting**: [`EngineSetting`](../types/EngineSetting.md)

engine setting

#### Defined in

[src/Engine3D.ts:109](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L109)

## Accessors

### frameRate

• `Static` `get` **frameRate**(): `number`

set engine render frameRate 24/30/60/114/120/144/240/360 fps or other

#### Returns

`number`

#### Defined in

[src/Engine3D.ts:63](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L63)

• `Static` `set` **frameRate**(`value`): `void`

get engine render frameRate

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/Engine3D.ts:70](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L70)

___

### size

• `Static` `get` **size**(): `number`[]

get render window size width and height

#### Returns

`number`[]

#### Defined in

[src/Engine3D.ts:81](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L81)

___

### aspect

• `Static` `get` **aspect**(): `number`

get render window aspect

#### Returns

`number`

#### Defined in

[src/Engine3D.ts:88](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L88)

___

### width

• `Static` `get` **width**(): `number`

get render window size width

#### Returns

`number`

#### Defined in

[src/Engine3D.ts:95](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L95)

___

### height

• `Static` `get` **height**(): `number`

get render window size height

#### Returns

`number`

#### Defined in

[src/Engine3D.ts:102](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L102)

## Methods

### init

▸ `Static` **init**(`descriptor?`): `Promise`<`void`\>

create webgpu 3d engine

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `descriptor` | `Object` | [CanvasConfig](../types/CanvasConfig.md) |
| `descriptor.canvasConfig?` | [`CanvasConfig`](../types/CanvasConfig.md) | - |
| `descriptor.beforeRender?` | `Function` | - |
| `descriptor.renderLoop?` | `Function` | - |
| `descriptor.lateRender?` | `Function` | - |
| `descriptor.engineSetting?` | [`EngineSetting`](../types/EngineSetting.md) | - |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/Engine3D.ts:302](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L302)

___

### startRenderView

▸ `Static` **startRenderView**(`view`): [`ForwardRenderJob`](ForwardRenderJob.md)

set render view and start renderer

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

[`ForwardRenderJob`](ForwardRenderJob.md)

#### Defined in

[src/Engine3D.ts:343](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L343)

___

### startRenderViews

▸ `Static` **startRenderViews**(`views`): `void`

set render views and start renderer

#### Parameters

| Name | Type |
| :------ | :------ |
| `views` | [`View3D`](View3D.md)[] |

#### Returns

`void`

#### Defined in

[src/Engine3D.ts:360](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L360)

___

### getRenderJob

▸ `Static` **getRenderJob**(`view`): `RendererJob`

get view render job instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`RendererJob`

#### Defined in

[src/Engine3D.ts:378](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L378)

___

### pause

▸ `Static` **pause**(): `void`

Pause the engine render

#### Returns

`void`

#### Defined in

[src/Engine3D.ts:385](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L385)

___

### resume

▸ `Static` **resume**(): `void`

Resume the engine render

#### Returns

`void`

#### Defined in

[src/Engine3D.ts:395](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L395)
