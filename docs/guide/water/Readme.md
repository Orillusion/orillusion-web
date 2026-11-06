# 水面渲染 - WaterRenderer

`WaterRenderer` 用于渲染泳池、湖泊、海洋等大面积水体。它在所属物体的 xz 平面上生成一张网格，用 Gerstner 波或 FFT 风浪让网格起伏，再由 `WaterMaterial` 完成折射、吸收、天空反射与阳光高光。配合渲染设置，还可以得到水底焦散、水下视角、可交互的涟漪等效果。

## 开启水面支持

`WaterRenderer` 本身就能绘制带波浪的水面，但水深、焦散、水下视角、涟漪与 FFT 风浪依赖额外的渲染通道，需要在初始化引擎时打开 `setting.render.water`：

```ts
import { Engine3D } from '@orillusion/core';

const engine = await Engine3D.init({
    setting: { render: { water: true } }
});
```

开启后渲染管线会增加以下通道：

| 通道 | 作用 |
| --- | --- |
| `SceneLinearDepthPass` | 记录不透明场景的线性深度，水面据此得到每个像素到水底的真实距离，用于吸收与折射 |
| `CausticsPass` | 把阳光透过波面聚焦形成的焦散投射到水下物体上 |
| `UnderwaterPass` | 相机位于水下时，对画面做沿视线的吸收与散射；相机半入水时会出现水线 |
| `WaterSimulationPass` | 在 GPU 上推进 FFT 风浪与交互涟漪 |

::: tip
未开启 `setting.render.water` 时，水面没有场景深度可用，会把 `waterMaterial.waterDepth`（默认 `2`）当作固定水深来计算颜色；焦散、水下视角、`addRipple()` 与 `spectrum` 均不生效。
:::

## 基本用法

给一个 `Object3D` 添加 `WaterRenderer` 组件即可得到一块默认 `10 × 10` 的水面，水面高度就是物体的世界坐标 `y`：

```ts
import { Object3D, WaterRenderer, Vector2 } from '@orillusion/core';

const waterObj = new Object3D();
const water = waterObj.addComponent(WaterRenderer);
// 矩形水面的尺寸（沿本地 x、z），会受物体缩放影响
water.width = 20;
water.length = 14;
// 网格沿长边的分段数，每个最短波长内需要有若干个顶点
water.resolution = 200;
// 水底到水面的距离，仅在未开启 setting.render.water 时使用
water.waterMaterial.waterDepth = 2;
scene.addChild(waterObj);
```

物体可以平移、缩放，以及绕 y 轴旋转；水面始终保持水平，波浪方向按世界坐标计算，因此多块水面可以无缝拼接。

::: tip
水面从水体内部绘制、并依赖不透明场景的颜色做折射，所以它**不参与深度预渲染、不投射阴影、不出现在反射探针中**，这些已由组件自动设置。
:::

### 示例：泳池

几乎静止的水面、平铺瓷砖的池底与焦散，鸭子通过 `getHeight()` 浮在水面上。点击水面会溅起涟漪，点击鸭子会把它按入水中，按住 `Shift` 移动鼠标可拖出一串涟漪。

<Demo src="/examples/water/Pool.ts"></Demo>

<<< @/public/examples/water/Pool.ts

## 波浪

水面的起伏由两部分叠加：`waves` 中的 Gerstner 波，以及可选的 FFT 风浪 `spectrum`。

### Gerstner 波

`waves` 是一个 `GerstnerWave` 数组，最多生效 8 个（`WATER_MAX_WAVES`），可以直接修改元素，也可以整体重新赋值：

```ts
water.waves = [
    { direction: new Vector2(1, 0.3), wavelength: 4, steepness: 0.025 },
    { direction: new Vector2(0.4, 1), wavelength: 2.6, steepness: 0.02 },
    { direction: new Vector2(-0.7, 0.6), wavelength: 1.7, steepness: 0.015 }
];
// 动画速度，0 表示冻结水面
water.timeScale = 1;
```

| 字段 | 说明 |
| --- | --- |
| `direction` | 波在 xz 平面内的传播方向（`Vector2`，x 对应世界 x，y 对应世界 z） |
| `wavelength` | 相邻波峰的距离（世界单位）；波速由波长按深水色散关系决定 |
| `steepness` | 陡度 `0 ~ 1`，波高约为 `steepness × wavelength / 2π`。所有波的陡度之和应小于 `1`，否则波峰会打结 |

### FFT 风浪

开阔水面可以设置 `spectrum`，根据风速、风区在 GPU 上用 FFT 模拟出从数百米长的涌浪到厘米级细波的完整海面，并在浪尖破碎处生成白沫。它与 `waves` 叠加，海面通常把 `waves` 清空：

```ts
import { WaterSpectrum, Vector2 } from '@orillusion/core';

const spectrum = new WaterSpectrum();
spectrum.windSpeed = 12;                     // 海面 10 米高处的风速（m/s）
spectrum.windDirection = new Vector2(1, 0.3);
spectrum.fetch = 100000;                     // 风区：风在开阔水面上吹过的距离（米）
water.spectrum = spectrum;
water.waves = [];
```

| 属性 | 默认值 | 说明 |
| --- | --- | --- |
| `windSpeed` | `10` | 风速（m/s），越大浪越高越长 |
| `windDirection` | `(1, 0.3)` | 风吹向的方向 |
| `fetch` | `100000` | 风区长度（米）。风区短得到年轻、短小的浪；风区长得到充分成长的海浪 |
| `amplitude` | `1` | 浪高缩放 |
| `choppiness` | `1` | 水体向浪尖的水平挤压程度：`0` 为圆润的浪，`1` 为尖锐的浪峰与浪谷，白沫从尖锐处产生 |
| `seed` | `1` | 波浪相位的随机种子 |

`water.spectrum = null` 会移除风浪并释放其 GPU 资源。

### 远处波浪的淡出

网格分辨率有限，远处顶点间距过大时短波会产生走样。`waveFadeDistance` 指定每个波在距离相机多少个**波长**处完全淡出（从一半距离开始淡出），默认 `80`，适合均匀网格；网格随距离变稀时应调小，`0` 表示不淡出。它只影响画面，`getHeight()` 始终包含全部波浪。

### 示例：海洋

由 FFT 风浪构成的开阔海面。水面是一张以浮标为中心、越往外越稀疏的圆盘网格，配合 `waveFadeDistance = 14` 避免远处走样；涟漪只在浮标周围 60 米的范围内模拟（见下文 `rippleArea`）。在 `Sea` 面板中可以调节风速、风区、浪高与浪尖锐度。

<Demo src="/examples/water/Ocean.ts"></Demo>

<<< @/public/examples/water/Ocean.ts

## 自定义水面形状

默认的矩形由 `width`、`length`、`resolution` 决定。对于湖泊、池塘等不规则水域，可以把 `surfaceGeometry` 设为任意平面网格，水面、水下视角、焦散与涟漪都会沿用它的轮廓：

```ts
// 一张位于本地 xz 平面、带索引的网格；其顶点的 y 会被忽略
water.surfaceGeometry = lakeGeometry;
// 设为 null 恢复矩形
water.surfaceGeometry = null;
```

对网格的要求：

- 平铺在所属物体的本地 xz 平面上，顶点 `y` 会被忽略；
- 必须是带索引的几何体；
- 足够细密，能表现最短的波浪。

通常让网格略微越过岸线、藏在地形之下，这样波浪的水平位移不会在岸边露出缝隙。

### 示例：湖泊

岸线不规则的湖泊，水面网格沿岸线向外多延伸 1 米，埋在逐渐升高的地形下。`Buoy` 面板可以让浮标绕圈漂移，或把它提起后落入水中。

<Demo src="/examples/water/Lake.ts"></Demo>

<<< @/public/examples/water/Lake.ts

## 细节波纹与焦散

在网格位移之外，水面还叠加了一层尺度更小、只扰动法线的细波纹，它们让高光与反射更细碎，也是焦散的来源：

| 属性 | 默认值 | 说明 |
| --- | --- | --- |
| `detailScale` | `1.8` | 细波纹的基础波长（世界单位） |
| `detailStrength` | `0.35` | 细波纹对法线的扰动程度 `0 ~ 1`。焦散始终使用完整强度，调低只是让透过平静水面看到的水底更清晰 |
| `caustics` | `true` | 是否在水下物体上绘制焦散（需 `setting.render.water`） |
| `causticsIntensity` | `0.6` | 焦散强度 |

## 交互

### 涟漪

`addRipple(x, z, strength, radius)` 在世界坐标 `(x, z)` 处把水面向下压出一个坑，随后一圈波纹向外扩散，并在水面边缘反射。鼠标点击、物体落水或在水中移动都可以用它产生涟漪：

```ts
import { PointerEvent3D } from '@orillusion/core';

engine.inputSystem.addEventListener(PointerEvent3D.POINTER_DOWN, (e: PointerEvent3D) => {
    const ray = camera.screenPointToRay(e.mouseX, e.mouseY);
    if (ray.direction.y >= 0) return;
    // 视线与未扰动水面的交点
    const t = (water.baseHeight - ray.origin.y) / ray.direction.y;
    const x = ray.origin.x + ray.direction.x * t;
    const z = ray.origin.z + ray.direction.z * t;
    // 坑深 0.4、半径 0.4（世界单位）
    water.addRipple(x, z, 0.4, 0.4);
}, null);
```

水面以外的点会被忽略，每帧最多新增 32 个涟漪（`WATER_MAX_RIPPLES_PER_FRAME`）。涟漪模拟在第一次调用 `addRipple()` 时才会创建。

| 属性 | 默认值 | 说明 |
| --- | --- | --- |
| `rippleSpeed` | `1.2` | 涟漪传播速度（世界单位 / 秒） |
| `rippleDamping` | `0.3` | 每秒损失的波动比例 |
| `rippleResolution` | `256` | 涟漪网格沿水面长边的格子数，修改会清空当前涟漪 |
| `rippleArea` | `null` | 以水面原点为中心、边长为该值（本地单位）的正方形范围内模拟涟漪；`null` 表示覆盖整个水面。海洋等大水面无法用一张网格分辨涟漪时使用 |

### 获取水面高度

`getHeight(x, z)` 在 CPU 上返回世界坐标 `(x, z)` 处当前的水面高度，可用于漂浮物、船只、判断角色是否入水等：

```ts
class Floater extends ComponentBase {
    public water: WaterRenderer;

    public onUpdate(): void {
        const p = this.transform;
        // 让物体中心比水面高 0.1
        p.y = this.water.getHeight(p.x, p.z) + 0.1;
    }
}
```

::: tip FFT 风浪的高度
Gerstner 波在 CPU 上直接计算；FFT 风浪在 GPU 上计算，`getHeight()` 会把查询点排入队列，其 FFT 部分取自前一两帧中最近的查询点的回读结果（首次查询时为 0）。对移动的物体应每帧都调用 `getHeight()`。
:::

其他辅助方法：

| 方法 | 说明 |
| --- | --- |
| `isUnderwater(point)` | 点是否位于水面轮廓内且在水面以下 |
| `containsXZ(x, z, margin?)` | 世界坐标 `(x, z)` 是否位于水面轮廓内，`margin` 向外扩展 |
| `baseHeight` | 未扰动水面的世界高度，即物体的世界坐标 `y` |
| `time` | 波浪相位时间（秒），可手动设置以同步多个水面 |

## 水下视角

开启 `setting.render.water` 后，相机进入水中时会自动启用 `UnderwaterPass`：画面沿视线按水的吸收颜色衰减并叠加水体自身的颜色，相机半入水时屏幕上会出现一条水线。从水下仰望时，水面在斯涅尔窗（与竖直方向夹角约 48.6° 以内）内透出水上的世界，窗外则反射水下景物，`waterMaterial.underwaterClarity` 可以放宽这一效果，让水上世界更清楚。

## 材质参数

水的外观由 `water.waterMaterial`（`WaterMaterial`）控制：

```ts
import { Color } from '@orillusion/core';

const m = water.waterMaterial;
m.absorptionColor = new Color(0.25, 0.55, 0.42); // 透过水看到的物体被染成的颜色
m.underwaterColor = new Color(0.05, 0.13, 0.1);  // 深水颜色
m.density = 0.45;                                // 越大越浑浊
```

| 属性 | 默认值 | 说明 |
| --- | --- | --- |
| `absorptionColor` | `(0.12, 0.62, 0.72)` | 光穿过水体时被染向的颜色 |
| `underwaterColor` | `(0.03, 0.16, 0.2)` | 深水颜色，无论从水上还是水下，透过水看到的物体都随距离逐渐融入该颜色 |
| `density` | `0.15` | 每世界单位路径的吸收强度 |
| `refractionStrength` | `1` | 透过水面看到的折射扭曲程度，`1` 为物理值，`0` 关闭 |
| `waterDepth` | `2` | 未开启 `setting.render.water` 时使用的固定水深 |
| `reflectionIntensity` | `1` | 环境反射强度 |
| `reflectionRoughness` | `0.02` | 小于细波纹尺度的表面粗糙度，使反射变模糊 |
| `fresnelClamp` | `1` | 菲涅尔反射权重上限 `0 ~ 1` |
| `specularPower` | `2000` | 阳光高光指数，越大越小越锐利 |
| `specularIntensity` | `2` | 阳光高光强度 |
| `foamIntensity` | `1` | 浪尖破碎处的白沫强度 `0 ~ 1`，平静水面不产生白沫 |
| `foamTexture` | 内置 | 可平铺的白沫纹理（r 通道），设为 `null` 时退化为噪声斑块 |
| `subsurfaceIntensity` | `1` | 迎着阳光看时，高大浪尖透出的次表面散射光 |
| `underwaterClarity` | `0.5` | 从水下看水上世界的清晰程度 `0 ~ 1`，`0` 为物理的斯涅尔窗 |

更多属性请参考 [WaterRenderer](/api/classes/WaterRenderer)、[WaterMaterial](/api/classes/WaterMaterial)、[WaterSpectrum](/api/classes/WaterSpectrum) 的 API 文档。
