# Class: Interpolator

动画插值器类


### Methods

- [to](Interpolator.md#to)

### Constructors

- [constructor](Interpolator.md#constructor)

## Methods

### to

▸ `Static` **to**(`target`, `property`, `durtion`, `interpolatorEnum?`): [`Interpolator`](Interpolator.md)

创建一个从当前属性到指定目标属性的动画。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `target` | `any` | `undefined` | 需要动画的对象 |
| `property` | `any` | `undefined` | 动画参数 |
| `durtion` | `number` | `undefined` | 动画持续时间，一般是秒 |
| `interpolatorEnum` | [`InterpolatorEnum`](../enums/InterpolatorEnum.md) | `InterpolatorEnum.AccelerateInterpolator` | 插值器类型 |

#### Returns

[`Interpolator`](Interpolator.md)

#### Defined in

[src/engine/math/TimeInterpolator.ts:455](https://github.com/Orillusion/orillusion/blob/main/src/engine/math/TimeInterpolator.ts#L455)

## Constructors

### constructor

• **new Interpolator**()
