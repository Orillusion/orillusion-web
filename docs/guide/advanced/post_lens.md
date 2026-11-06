---
aside: false
---
# 镜头效果 - LensPost
模拟真实相机镜头的三种效果，在一次全屏绘制中完成：

- **暗角（Vignette）**：画面四周逐渐变暗，把视线引向中心；
- **色差（Chromatic Aberration）**：镜头对不同波长的折射率不同，红、蓝通道沿径向错开，在画面边缘的高对比度轮廓上形成彩边；
- **胶片颗粒（Film Grain）**：叠加随机噪点，模拟胶片质感。

`LensPost` 在色调映射之前的线性 HDR 空间中执行，颗粒与暗角会和画面其他部分一起经过 [色调映射](./post_tonemap) 曲线。

```ts
// 初始化引擎，可在此配置默认参数
let engine = await Engine3D.init({
    setting: {
        render: {
            postProcessing: {
                lens: {
                    vignetteIntensity: 0.55,
                    chromaticAberration: 0.3,
                    grainIntensity: 0.15
                }
            }
        }
    }
});

// 添加后处理组件
let postProcessing = scene.addComponent(PostProcessingComponent);

// 添加 LensPost
let lens = postProcessing.addPost(LensPost);

// 也可以通过 lens 对象设置，与上面的引擎配置等价
lens.vignetteIntensity = 0.55;
lens.vignetteColor = new Color(0, 0, 0, 1);
lens.chromaticAberration = 0.3;
lens.grainIntensity = 0.15;

// 移除 LensPost 即关闭效果
postProcessing.removePost(LensPost);
```

[engine.setting.render.postProcessing.lens](../../api/types/LensSetting.md) 配置参数：

| 参数 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `enable` | `boolean` | `false` | 是否启用，添加 / 移除 `LensPost` 时自动设置 |
| `vignetteIntensity` | `number` | `0.4` | 暗角强度，`0` 关闭；`0.4` 为轻微的四角变暗，`1` 较重 |
| `vignetteSmoothness` | `number` | `0.4` | 暗角过渡的柔和程度，`0`（硬边）~ `1`（非常平缓） |
| `vignetteRoundness` | `number` | `1.0` | `1` 为圆形暗角（不受宽高比影响），`0` 跟随屏幕矩形 |
| `vignetteColor` | `Color` | 黑色 | 四角过渡到的颜色 |
| `chromaticAberration` | `number` | `0` | 色差强度，`0` 关闭；`0.1` 轻微，`1` 有明显彩边（屏幕左右边缘约错开 5%） |
| `grainIntensity` | `number` | `0` | 胶片颗粒强度，`0` 关闭；`0.1` 轻微，`0.5` 较重。颗粒与颜色相乘，会随曝光一起缩放 |
| `grainStatic` | `boolean` | `false` | 固定颗粒图案，不随帧变化（适合截图、测试） |

下面的示例使用黑白相间的立柱，便于观察画面边缘的色差彩边；天空部分可以看到暗角的过渡与颗粒。

<Demo src="/demos/advanced/Sample_lens.ts"></Demo>

<<< @/public/demos/advanced/Sample_lens.ts
