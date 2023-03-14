# Type alias: GlobalFogSetting

Ƭ **GlobalFogSetting**: `Object`

屏幕反光设置

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `enable` | `boolean` | 开始/关闭 |
| `fogType` | `number` | 雾的类型：0/1/2，对应线性/指数/指数平方 |
| `height` | `number` | 设置高度对雾的影响 |
| `start` | `number` | 设定物体距离相机为distance，则在start和end区间内，雾的浓度被线性插值 |
| `end` | `number` | 设定物体距离相机为distance，则在start和end区间内，雾的浓度被线性插值 |
| `density` | `number` | 指数/指数平方雾类型下，雾浓度系数加成 |
| `ins` | `number` | 设置高度对于雾的影响（与height共同作用） |
| `fogColor` | [`Color`](../classes/Color.md) | 雾的颜色 |

#### Defined in

[src/engine/EngineConfig.ts:270](https://github.com/Orillusion/orillusion/blob/main/src/engine/EngineConfig.ts#L270)
