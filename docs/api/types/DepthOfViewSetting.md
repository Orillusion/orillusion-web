# Type alias: DepthOfViewSetting

Ƭ **DepthOfViewSetting**: `Object`

景深效果设置

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | - |
| `iterationCount` | `number` | 模糊效果迭代次数 |
| `pixelOffset` | `number` | 模糊效果像素扩散距离 |
| `near` | `number` | 设定低于该距离的物体将不会被模糊处理 |
| `far` | `number` | 设定高于该距离的物体将会得到最大程度的模糊， [near,far]之间的对象将会使用[0,1]之间线性插值过的系数做模糊处理 |

#### Defined in

[src/engine/EngineConfig.ts:226](https://github.com/Orillusion/orillusion/blob/main/src/engine/EngineConfig.ts#L226)
