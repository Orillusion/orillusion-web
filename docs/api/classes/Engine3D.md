# Class: Engine3D

Orillusion 3D Engine

-- Engine3D.setting.*

-- await Engine3D.init();

### Constructors

- [constructor](Engine3D.md#constructor)

### Properties

- [res](Engine3D.md#res)
- [inputSystem](Engine3D.md#inputsystem)
- [divB](Engine3D.md#divb)
- [views](Engine3D.md#views)
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

• **new Engine3D**(): [`Engine3D`](Engine3D.md)

#### Returns

[`Engine3D`](Engine3D.md)

## Properties

### res

▪ `Static` **res**: [`Res`](Res.md)

resource manager in engine3d

#### Defined in

[src/Engine3D.ts:43](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L43)

___

### inputSystem

▪ `Static` **inputSystem**: [`InputSystem`](InputSystem.md)

input system in engine3d

#### Defined in

[src/Engine3D.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L48)

___

### divB

▪ `Static` **divB**: `HTMLDivElement`

input system in engine3d

#### Defined in

[src/Engine3D.ts:53](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L53)

___

### views

▪ `Static` **views**: [`View3D`](View3D.md)[]

more view in engine3d

#### Defined in

[src/Engine3D.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L58)

___

### setting

▪ `Static` **setting**: [`EngineSetting`](../types/EngineSetting.md)

engine setting

#### Defined in

[src/Engine3D.ts:118](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L118)

## Accessors

### frameRate

• `get` **frameRate**(): `number`

set engine render frameRate 24/30/60/114/120/144/240/360 fps or other

#### Returns

`number`

#### Defined in

[src/Engine3D.ts:72](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L72)

• `set` **frameRate**(`value`): `void`

get engine render frameRate

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/Engine3D.ts:79](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L79)

___

### size

• `get` **size**(): `number`[]

get render window size width and height

#### Returns

`number`[]

#### Defined in

[src/Engine3D.ts:90](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L90)

___

### aspect

• `get` **aspect**(): `number`

get render window aspect

#### Returns

`number`

#### Defined in

[src/Engine3D.ts:97](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L97)

___

### width

• `get` **width**(): `number`

get render window size width

#### Returns

`number`

#### Defined in

[src/Engine3D.ts:104](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L104)

___

### height

• `get` **height**(): `number`

get render window size height

#### Returns

`number`

#### Defined in

[src/Engine3D.ts:111](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L111)

## Methods

### init

▸ **init**(`descriptor?`): `Promise`\<`void`\>

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

`Promise`\<`void`\>

#### Defined in

[src/Engine3D.ts:327](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L327)

___

### startRenderView

▸ **startRenderView**(`view`): [`ForwardRenderJob`](ForwardRenderJob.md)

set render view and start renderer

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

[`ForwardRenderJob`](ForwardRenderJob.md)

#### Defined in

[src/Engine3D.ts:384](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L384)

___

### startRenderViews

▸ **startRenderViews**(`views`): `void`

set render views and start renderer

#### Parameters

| Name | Type |
| :------ | :------ |
| `views` | [`View3D`](View3D.md)[] |

#### Returns

`void`

#### Defined in

[src/Engine3D.ts:413](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L413)

___

### getRenderJob

▸ **getRenderJob**(`view`): `RendererJob`

get view render job instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`RendererJob`

#### Defined in

[src/Engine3D.ts:441](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L441)

___

### pause

▸ **pause**(): `void`

Pause the engine render

#### Returns

`void`

#### Defined in

[src/Engine3D.ts:448](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L448)

___

### resume

▸ **resume**(): `void`

Resume the engine render

#### Returns

`void`

#### Defined in

[src/Engine3D.ts:458](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L458)
