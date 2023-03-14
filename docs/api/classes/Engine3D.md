# Class: \_Engine3D

Orillusion 3D引擎

**`Not Exported`**

## Indexable

▪ [x: `string`]: `any`


### Constructors

- [constructor](Engine3D.md#constructor)

### Properties

- [res](Engine3D.md#res)
- [inputSystem](Engine3D.md#inputsystem)
- [pickFire](Engine3D.md#pickfire)
- [pickUI](Engine3D.md#pickui)
- [setting](Engine3D.md#setting)
- [graphic3D](Engine3D.md#graphic3d)

### Accessors

- [frameRate](Engine3D.md#framerate)

### Methods

- [init](Engine3D.md#init)
- [startRender](Engine3D.md#startrender)
- [updateFrame](Engine3D.md#updateframe)

## Constructors

### constructor

• **new _Engine3D**()

## Properties

### res

• **res**: [`Res`](Res.md)

资源管理类

#### Defined in

[src/engine/Engine3D.ts:33](https://github.com/Orillusion/orillusion/blob/main/src/engine/Engine3D.ts#L33)

___

### inputSystem

• **inputSystem**: [`InputSystem`](InputSystem.md)

交互系统

#### Defined in

[src/engine/Engine3D.ts:37](https://github.com/Orillusion/orillusion/blob/main/src/engine/Engine3D.ts#L37)

___

### pickFire

• **pickFire**: [`PickFire`](PickFire.md)

#### Defined in

[src/engine/Engine3D.ts:39](https://github.com/Orillusion/orillusion/blob/main/src/engine/Engine3D.ts#L39)

___

### pickUI

• **pickUI**: [`PickUI`](PickUI.md)

#### Defined in

[src/engine/Engine3D.ts:40](https://github.com/Orillusion/orillusion/blob/main/src/engine/Engine3D.ts#L40)

___

### setting

• **setting**: [`EngineConfig`](../types/EngineConfig.md)

引擎配置信息

#### Defined in

[src/engine/Engine3D.ts:58](https://github.com/Orillusion/orillusion/blob/main/src/engine/Engine3D.ts#L58)

___

### graphic3D

• **graphic3D**: [`Graphic3DRender`](Graphic3DRender.md)

图形渲染器(线、矩形等)

#### Defined in

[src/engine/Engine3D.ts:254](https://github.com/Orillusion/orillusion/blob/main/src/engine/Engine3D.ts#L254)

## Accessors

### frameRate

• `get` **frameRate**(): `number`

#### Returns

`number`

#### Defined in

[src/engine/Engine3D.ts:45](https://github.com/Orillusion/orillusion/blob/main/src/engine/Engine3D.ts#L45)

• `set` **frameRate**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/Engine3D.ts:48](https://github.com/Orillusion/orillusion/blob/main/src/engine/Engine3D.ts#L48)

## Methods

### init

▸ **init**(`descriptor?`): `Promise`<`void`\>

初始化3D引擎

#### Parameters

| Name | Type |
| :------ | :------ |
| `descriptor` | `Object` |
| `descriptor.canvasConfig?` | [`CanvasConfig`](../types/CanvasConfig.md) |
| `descriptor.beforeRender?` | `Function` |
| `descriptor.renderLoop?` | `Function` |
| `descriptor.lateRender?` | `Function` |
| `descriptor.engineSetting?` | [`EngineConfig`](../types/EngineConfig.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/engine/Engine3D.ts:261](https://github.com/Orillusion/orillusion/blob/main/src/engine/Engine3D.ts#L261)

___

### startRender

▸ **startRender**(`renderJob`): `void`

开始渲染任务

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderJob` | `RendererJob` |

#### Returns

`void`

#### Defined in

[src/engine/Engine3D.ts:293](https://github.com/Orillusion/orillusion/blob/main/src/engine/Engine3D.ts#L293)

___

### updateFrame

▸ **updateFrame**(`time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`void`

#### Defined in

[src/engine/Engine3D.ts:334](https://github.com/Orillusion/orillusion/blob/main/src/engine/Engine3D.ts#L334)
