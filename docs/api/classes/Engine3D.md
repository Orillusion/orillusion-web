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

[src/Engine3D.ts:34](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L34)

___

### inputSystem

▪ `Static` **inputSystem**: [`InputSystem`](InputSystem.md)

input system in engine3d

#### Defined in

[src/Engine3D.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L39)

___

### views

▪ `Static` **views**: [`View3D`](View3D.md)[]

more view in engine3d

#### Defined in

[src/Engine3D.ts:44](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L44)

___

### Engine3D

▪ `Static` **Engine3D**: `any`

#### Defined in

[src/Engine3D.ts:54](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L54)

___

### setting

▪ `Static` **setting**: [`EngineSetting`](../types/EngineSetting.md)

engine setting

#### Defined in

[src/Engine3D.ts:105](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L105)

## Accessors

### frameRate

• `Static` `get` **frameRate**(): `number`

set engine render frameRate 24/30/60/114/120/144/240/360 fps or other

#### Returns

`number`

#### Defined in

[src/Engine3D.ts:59](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L59)

• `Static` `set` **frameRate**(`value`): `void`

get engine render frameRate

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/Engine3D.ts:66](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L66)

___

### size

• `Static` `get` **size**(): `number`[]

get render window size width and height

#### Returns

`number`[]

#### Defined in

[src/Engine3D.ts:77](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L77)

___

### aspect

• `Static` `get` **aspect**(): `number`

get render window aspect

#### Returns

`number`

#### Defined in

[src/Engine3D.ts:84](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L84)

___

### width

• `Static` `get` **width**(): `number`

get render window size width

#### Returns

`number`

#### Defined in

[src/Engine3D.ts:91](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L91)

___

### height

• `Static` `get` **height**(): `number`

get render window size height

#### Returns

`number`

#### Defined in

[src/Engine3D.ts:98](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L98)

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

[src/Engine3D.ts:290](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L290)

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

[src/Engine3D.ts:322](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L322)

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

[src/Engine3D.ts:339](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L339)

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

[src/Engine3D.ts:357](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L357)

___

### pause

▸ `Static` **pause**(): `void`

Pause the engine render

#### Returns

`void`

#### Defined in

[src/Engine3D.ts:364](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L364)

___

### resume

▸ `Static` **resume**(): `void`

Resume the engine render

#### Returns

`void`

#### Defined in

[src/Engine3D.ts:374](https://github.com/Orillusion/orillusion/blob/main/src/Engine3D.ts#L374)
