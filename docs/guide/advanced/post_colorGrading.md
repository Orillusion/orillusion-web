---
aside: false
---
# 调色 - ColorGradingPost
调色（Color Grading）用于统一画面风格，例如冷暖色调、电影感的青橙色调、复古的褐色调等。`ColorGradingPost` 在 [色调映射](./post_tonemap) **之后**、对已映射到 `0 ~ 1` 的显示颜色进行调整，与添加顺序无关，因此调色参数不会受 HDR 亮度和色调映射曲线的影响。

```ts
// 初始化引擎，可在此配置默认参数
let engine = await Engine3D.init({
    setting: {
        render: {
            postProcessing: {
                colorGrading: {
                    contrast: 1.15,
                    saturation: 1.1,
                    temperature: 0.2
                }
            }
        }
    }
});

// 添加后处理组件
let postProcessing = scene.addComponent(PostProcessingComponent);

// 添加 ColorGradingPost
let grade = postProcessing.addPost(ColorGradingPost);

// 也可以通过 grade 对象设置，与上面的引擎配置等价
grade.contrast = 1.15;
grade.saturation = 1.1;
grade.temperature = 0.2;
// ASC-CDL 按通道设置 [r, g, b]
grade.slope = [1.05, 1.0, 0.95];
```

各项调整按以下顺序执行：曝光与白平衡 → 对比度 → 饱和度 → ASC-CDL → LUT。

[engine.setting.render.postProcessing.colorGrading](../../api/types/ColorGradingSetting.md) 配置参数：

| 参数 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `enable` | `boolean` | `false` | 是否启用，添加 / 移除 `ColorGradingPost` 时自动设置 |
| `exposure` | `number` | `0` | 曝光微调，单位为档（EV）：`+1` 亮度加倍，`-1` 减半 |
| `temperature` | `number` | `0` | 白平衡色温，`-1`（偏冷 / 蓝）~ `+1`（偏暖 / 橙） |
| `tint` | `number` | `0` | 白平衡色调，`-1`（偏绿）~ `+1`（偏品红） |
| `contrast` | `number` | `1` | 对比度，以中灰为中心在 gamma 空间中调整，`1` 不变 |
| `saturation` | `number` | `1` | 饱和度，`0` 为灰度，`1` 不变，大于 `1` 更鲜艳 |
| `slope` | `[r, g, b]` | `[1, 1, 1]` | ASC-CDL 斜率（增益），与颜色相乘 |
| `offset` | `[r, g, b]` | `[0, 0, 0]` | ASC-CDL 偏移（提升），与颜色相加 |
| `power` | `[r, g, b]` | `[1, 1, 1]` | ASC-CDL 幂（伽马） |
| `lutIntensity` | `number` | `1` | LUT 结果与调色结果的混合比例，`0 ~ 1`；未设置 LUT 时无效 |

::: tip
`exposure` 以档为单位，与 [色调映射](./post_tonemap) 中作用在曲线之前的线性 `exposure` 不同：这里是对最终显示颜色的微调。
:::

## LUT

ASC-CDL 是行业通用的调色描述方式：`out = (in × slope + offset) ^ power`，三个参数都可以按 RGB 通道分别设置，能够表达大部分一级调色。更复杂的风格可以使用 LUT（颜色查找表），它把每一种输入颜色映射到一个输出颜色，可以由调色软件导出，也可以用代码生成。

### 用函数生成 LUT

`setLUTFromFunction(size, fn)` 用一个函数生成 LUT 并立即使用。函数的输入输出都是 `0 ~ 1` 的 sRGB 编码颜色：

```ts
// 复古褐色调：按亮度重新着色
grade.setLUTFromFunction(32, (r, g, b) => {
    const l = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return [l * 1.07 + 0.03, l * 0.92 + 0.02, l * 0.72];
});
grade.lutIntensity = 0.8;

// 移除 LUT
grade.lut = null;
```

`size` 为 LUT 立方体的边长，`32` 已能满足大多数风格，更平滑的渐变可以用更大的值。

### 使用 LUT 图片

也可以把调色软件导出的条带状 LUT 图片赋给 `lut`。图片需满足：

- 宽为 `size²`、高为 `size`，例如 `256 × 16`、`1024 × 32`；
- 横向依次排列 `size` 个方块，每个方块对应一个蓝色分量；方块内横向为红色、纵向为绿色，最上面一行绿色为 `0`；
- 存储 sRGB 编码的颜色值，加载时使用默认的线性颜色空间、关闭 mipmap，让着色器读到原始值。

```ts
import { BitmapTexture2D } from '@orillusion/core';

// 第一个参数 false：不生成 mipmap
const lutTexture = new BitmapTexture2D(false);
await lutTexture.load('images/lut_night.png');
grade.lut = lutTexture;
```

下面的示例包含一面色卡（12 种色相 × 4 种明度，顶部为灰阶）和一排不同材质的小球，便于观察每项调整的效果；`look` 菜单提供几种用代码生成的 LUT 风格，其中 `night (image)` 加载的是一张 `1024 × 32` 的 LUT 图片（夜景色调）。选择一种 LUT 后，可以用 `lutIntensity` 调节它与原画面的混合比例。

<Demo src="/demos/advanced/Sample_colorGrading.ts"></Demo>

<<< @/public/demos/advanced/Sample_colorGrading.ts
