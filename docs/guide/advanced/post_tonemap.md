---
aside: false
---
# 色调映射 - Tonemap
引擎内部以线性 HDR 颜色进行光照与后处理计算，像素亮度可以远大于 `1`，而屏幕只能显示 `0 ~ 1` 的范围。色调映射（Tone Mapping）用一条曲线把 HDR 颜色压缩到可显示范围，决定了高光如何过渡、颜色如何饱和，是画面整体观感的基础。

色调映射由引擎自动添加的 `TonemapPost` 完成，**无需手动 `addPost`**。它总是在所有其他后处理之后执行（[调色](./post_colorGrading) 除外），保证泛光、雾效等效果都在 HDR 空间中合成后才经过曲线。通过 `engine.setting.render.tonemap` 配置：

```ts
// 初始化时配置
let engine = await Engine3D.init({
    setting: {
        render: {
            tonemap: {
                enable: true,
                mode: 'AgX',
                exposure: 1.2
            }
        }
    }
});

// 运行时修改，下一帧生效
engine.setting.render.tonemap.mode = 'Neutral';
engine.setting.render.tonemap.exposure = 0.8;
```

[engine.setting.render.tonemap](../../api/types/TonemapSetting.md) 配置参数：

| 参数 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `enable` | `boolean` | `true` | 是否启用。运行时设为 `false` 时直接输出 HDR 颜色（超出范围的部分在输出时被截断），便于对比；初始化时设为 `false` 则不会添加 `TonemapPost` |
| `mode` | `TonemapMode` | `'ACES'` | 色调映射曲线，见下表 |
| `exposure` | `number` | `1.0` | 曝光，在曲线之前与 HDR 颜色相乘的线性系数 |
| `whitePoint` | `number` | `4.0` | 仅 `'Reinhard'` 模式使用：映射为纯白的场景线性亮度 |

可选的曲线 `TonemapMode`：

| 取值 | 说明 |
| --- | --- |
| `'ACES'` | 默认。ACES Filmic 近似曲线，对比强、颜色饱和，高光较晚才偏向白色 |
| `'AgX'` | Blender 4 / three.js 使用的 AgX（基础风格），明亮的饱和色会平滑地过渡到白色而不是色相偏移，适合强光源与自发光较多的场景 |
| `'Neutral'` | Khronos PBR Neutral，亮度约 `0.76` 以下的颜色保持不变，只压缩高光，适合产品展示、电商等需要颜色与原始 sRGB 值一致的场景 |
| `'Reinhard'` | 带白点的扩展 Reinhard 曲线，过渡柔和、对比较低，白点由 `whitePoint` 控制 |
| `'Uncharted2'` | Hable Filmic（Uncharted 2）曲线，电影感的高光肩部，中间调偏暗 |
| `'None'` | 不使用曲线（`exposure` 仍然生效），超出 `0 ~ 1` 的颜色直接被截断 |

`TonemapUtil` 提供与着色器一致的 CPU 实现，可以用来预估某个 HDR 颜色经过曲线后的结果：

```ts
import { TonemapUtil } from '@orillusion/core';

TonemapUtil.MODES; // ['None', 'ACES', 'Reinhard', 'Uncharted2', 'AgX', 'Neutral']
// 参数：曲线、线性 HDR 颜色、曝光、白点
const ldr = TonemapUtil.apply('AgX', [4, 1, 0.25], 1.0, 4.0);
```

下面的示例中，每一行自发光小球的亮度从 `0.25` 倍递增到 `32` 倍。切换不同曲线时，注意观察每行最亮的几个小球：`None` 直接截断成纯色，`ACES` 保持饱和，`AgX` 逐渐过渡为白色，`Neutral` 下方的普通材质颜色几乎不变。

<Demo src="/demos/advanced/Sample_tonemap.ts"></Demo>

<<< @/public/demos/advanced/Sample_tonemap.ts
