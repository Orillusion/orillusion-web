# 流体渲染 - FluidRenderer

`FluidRenderer` 把一组粒子渲染成连续的液体表面（屏幕空间流体渲染，Screen-Space Fluid Rendering）。它适合配合 SPH、FLIP 等粒子流体模拟，用于倾倒、晃动、飞溅的液体。

::: tip
`FluidRenderer` **只负责渲染**，不做流体模拟。粒子位置由你提供：可以来自 CPU 上的模拟，也可以直接使用 Compute Shader 写入的 GPU 缓冲。
:::

## 开启流体渲染

需要在初始化引擎时打开 `setting.render.fluid`，渲染管线才会加入 `FluidPass`：

```ts
import { Engine3D } from '@orillusion/core';

const engine = await Engine3D.init({
    setting: { render: { fluid: true } }
});
```

`FluidPass` 对场景中每个启用的 `FluidRenderer` 依次执行：

1. 把粒子绘制为球形 impostor，得到线性深度图，并以叠加混合得到厚度图；
2. 平滑深度图，让相邻的球体融合成一张连续表面；同时模糊厚度图；
3. 由平滑后的深度重建法线，完成折射、吸收、环境反射与高光着色。

流体在不透明物体之后、透明物体之前绘制，因此会被不透明物体正确遮挡，透明物体也能叠加在它上面。

::: tip
流体只写入颜色与深度，不写入 G-Buffer，所以像素拾取无法命中流体。需要与液面交互时，可以用射线与一个近似的水平面求交。
:::

## 基本用法

给一个 `Object3D` 添加 `FluidRenderer`，设置粒子直径，再传入粒子数据：

```ts
import { Object3D, FluidRenderer } from '@orillusion/core';

const fluidObj = new Object3D();
const fluid = fluidObj.addComponent(FluidRenderer);
// 粒子直径（世界单位）
fluid.particleSize = 0.16;
scene.addChild(fluidObj);

// 每个粒子 4 个 float：x, y, z, 以及一个未使用的分量
const count = 6000;
const positions = new Float32Array(count * 4);
// ... 写入粒子位置
fluid.setDataBuffer(positions);
```

粒子位置位于所属物体的本地空间（物体在原点且未缩放时即为世界坐标），`particleSize` 以世界单位计。

## 粒子数据

### CPU 数据：setDataBuffer

```ts
fluid.setDataBuffer(data: Float32Array, count?: number, layout?: FluidDataLayout);
```

- `data` 会在下一帧上传到 GPU。**原地修改数组后需要再次调用 `setDataBuffer()`** 才会重新上传，通常在每帧模拟结束后调用一次；
- `count` 为粒子数量，默认按 `data` 能容纳的数量计算。

```ts
class MySimulation extends ComponentBase {
    public fluid: FluidRenderer;
    private positions: Float32Array;

    public onUpdate(): void {
        this.step(1 / 60);                      // 更新 this.positions
        this.fluid.setDataBuffer(this.positions); // 重新上传
    }
}
```

### GPU 数据：setDataBufferGPU

粒子由 Compute Shader 模拟时，可以把它写入的存储缓冲直接交给 `FluidRenderer`，位置数据全程留在 GPU 上，不需要回读：

```ts
fluid.setDataBufferGPU(buffer: GPUBufferBase, count: number, layout?: FluidDataLayout);
```

缓冲需要带 `STORAGE` 用途（如 `StorageGPUBuffer`、`ComputeGPUBuffer`），`FluidRenderer` 每帧都会直接读取，因此 Compute Shader 的更新无需再次调用即可生效：

```ts
import { ComponentBase, ComputeShader, FluidRenderer, StorageGPUBuffer, View3D } from '@orillusion/core';

const simulationWGSL = /* wgsl */ `
    @group(0) @binding(0) var<storage, read_write> positions: array<vec4<f32>>;

    @compute @workgroup_size(64)
    fn CsMain(@builtin(global_invocation_id) id: vec3<u32>) {
        let i = id.x;
        if (i >= arrayLength(&positions)) { return; }
        // ... 更新 positions[i].xyz
    }
`;

class GPUSimulation extends ComponentBase {
    private count = 100000;
    private positions: StorageGPUBuffer;
    private shader: ComputeShader;

    public start(): void {
        // 大小以 float 为单位：每个粒子一个 vec4
        this.positions = new StorageGPUBuffer(this.count * 4);
        this.shader = new ComputeShader(simulationWGSL);
        this.shader.setStorageBuffer('positions', this.positions);
        this.shader.workerSizeX = Math.ceil(this.count / 64);

        this.object3D.getComponent(FluidRenderer).setDataBufferGPU(this.positions, this.count);
    }

    public onCompute(view: View3D, command: GPUCommandEncoder): void {
        view.engine3D.context3D.gpuContext.computeCommand(command, [this.shader]);
    }
}
```

`particleCount` 可以随时调小，只绘制缓冲中的前若干个粒子。

### 数据布局

默认每个粒子占 16 字节（一个 `vec4f`），位置 xyz 位于开头。若粒子结构中还有速度、密度等字段，可以用 `FluidDataLayout` 描述布局，无需另外拷贝一份位置数据：

```ts
// 粒子结构：velocity(vec4f) + position(vec4f)，共 32 字节
fluid.setDataBufferGPU(particleBuffer, count, {
    stride: 32,         // 相邻粒子之间的字节数
    positionOffset: 16  // 位置在粒子内的字节偏移
});
```

`stride` 与 `positionOffset` 都必须是 4 的倍数，且 xyz 三个 float 必须落在 `stride` 之内，否则会抛出异常。

## 外观

| 属性 | 默认值 | 说明 |
| --- | --- | --- |
| `particleSize` | `0.1` | 粒子直径（世界单位） |
| `fluidColor` | `(0.085, 0.64, 0.77)` | 吸收颜色，穿过流体的光被染向该颜色 |
| `density` | `2` | 吸收强度，越大越不透明 |
| `refractionStrength` | `1` | 折射偏移的缩放，`1` 沿折射光线取背后的场景，`0` 关闭折射 |
| `fresnelClamp` | `1` | 菲涅尔反射权重上限 `0 ~ 1` |
| `specularPower` | `250` | 高光指数，越大高光越小越锐利 |
| `edgeSoftness` | `0` | 厚度不足该数量个粒子的地方逐渐融入背景，用于柔化自由边缘；`0` 关闭 |
| `minimumThickness` | `0` | 厚度低于该值的像素显示背景；开启 `useFixedThickness` 时作为全局固定厚度 |
| `useFixedThickness` | `false` | 跳过厚度计算，以 `minimumThickness` 作为固定厚度 |
| `dirLight` | `null` | 高光使用的光线方向（世界空间）；`null` 时使用场景中第一个 `DirectLight` |
| `environmentMap` | `undefined` | 流体反射的立方体贴图；`undefined` 使用场景的 `envMap`，`null` 关闭反射 |

流体的高光与反射使用场景中的平行光与环境贴图，不需要额外的光照设置。

### 厚度

吸收效果取决于视线穿过流体的厚度，`thicknessMode` 决定厚度的计算方式：

| 取值 | 说明 |
| --- | --- |
| `FluidThicknessMode.Accumulated` | 默认。把视线上每个粒子的贡献累加起来（每个粒子在中心处贡献 `particleThicknessAlpha`，默认 `0.05`）。厚度跟随粒子密度，粒子分布不均匀时会出现浓淡不一的斑块 |
| `FluidThicknessMode.Geometric` | 取视线上流体近表面与远表面之间的距离（世界单位），静止的水体厚度均匀；此时 `density` 表示每世界单位的吸收。适合 FLIP 等粒子间距不均匀的模拟 |

```ts
import { FluidThicknessMode } from '@orillusion/core';

fluid.thicknessMode = FluidThicknessMode.Geometric;
fluid.density = 0.15;
```

## 表面平滑

粒子本身是一个个球体，需要平滑深度图才能融合成光滑的液面。平滑范围过小会看到球体的颗粒感，过大则会抹掉细节并让分离的液体粘连在一起。

| 属性 | 默认值 | 说明 |
| --- | --- | --- |
| `enableBlurDepth` | `true` | 是否平滑深度图 |
| `depthFilter` | `Bilateral` | 平滑使用的滤波器，见下表 |
| `blurDepthFilterSize` | `7` | 平滑半径，相对于粒子投影到屏幕上的大小 |
| `blurDepthNumIterations` | `3` | 迭代次数（每次为一次水平 + 一次垂直滤波） |
| `blurDepthMaxFilterSize` | `100` | 平滑半径的像素上限 |
| `blurDepthDepthScale` | `10` | 以粒子半径计的深度范围，范围内的样本才会混合；越大融合越多 |
| `blurDepthSizeDivisor` | `1` | 在深度图尺寸除以该值的分辨率上进行平滑 |
| `enableBlurThickness` | `true` | 是否模糊厚度图 |
| `blurThicknessFilterSize` | `5` | 厚度模糊半径（像素） |
| `blurThicknessNumIterations` | `1` | 厚度模糊迭代次数 |
| `blurThicknessSizeDivisor` | `1` | 在厚度图尺寸除以该值的分辨率上进行模糊 |
| `depthMapSize` / `thicknessMapSize` | `null` | 深度图 / 厚度图的宽度（像素），高度按屏幕宽高比计算；`null` 为屏幕尺寸 |

`depthFilter` 可选：

| 取值 | 说明 |
| --- | --- |
| `FluidDepthFilter.Bilateral` | 可分离的双边滤波：空间高斯权重乘以深度相似度权重 |
| `FluidDepthFilter.NarrowRange` | 窄范围滤波：只平均跟随表面的一段深度范围内的样本，在较大半径下也能保持轮廓与前后分离的液层更清晰 |

一般经验是让平滑范围覆盖约一个粒子直径，例如：

```ts
import { FluidDepthFilter } from '@orillusion/core';

fluid.depthFilter = FluidDepthFilter.NarrowRange;
fluid.blurDepthFilterSize = 15;
fluid.blurDepthNumIterations = 6;
```

### 各向异性

开启 `useAnisotropy` 后，每个粒子会根据周围邻居的分布被拉伸成椭球：平坦区域保持平坦，薄层保持薄，液面明显更平滑。它会在 GPU 上每帧额外做一次邻居搜索。

| 属性 | 默认值 | 说明 |
| --- | --- | --- |
| `useAnisotropy` | `false` | 是否开启各向异性 |
| `anisotropyRadius` | `null` | 邻居搜索半径（世界单位），`null` 为 `1.5 × particleSize` |
| `anisotropyMaxRatio` | `4` | 椭球最长轴与最短轴之比的上限 |
| `anisotropyMinNeighbors` | `10` | 邻居少于该数量的粒子保持球形（水花、液滴） |
| `anisotropySmoothing` | `0.5` | 粒子向邻居加权中心移动的比例 `0 ~ 1`，用于平滑表面 |

## 调试

开启 `debug` 后，画面会显示 `debugFeature` 选中的中间结果，便于调整平滑与厚度参数：

| `FluidDebug` | 说明 |
| --- | --- |
| `DepthTexture` | 粒子球体的线性深度 |
| `DepthBlurredTexture` | 平滑后的深度 |
| `ThicknessTexture` | 累加的粒子厚度 |
| `ThicknessBlurredTexture` | 模糊后的厚度 |
| `Normals` | 由平滑深度重建的视图空间法线 |

```ts
import { FluidDebug } from '@orillusion/core';

fluid.debug = true;
fluid.debugFeature = FluidDebug.Normals;
```

## 示例

下面的示例在 CPU 上做了一个极简的粒子运动（重力、阻尼、池壁与粒子间的排斥，并非物理正确的流体求解器），每帧通过 `setDataBuffer()` 上传。一块粒子落入水池后来回晃动，池中的立柱验证了不透明物体对流体的遮挡。可以在面板中隐藏水池观察流体的自由边缘，或打开 `debug` 查看各个中间结果。

<Demo src="/examples/water/Fluid.ts"></Demo>

<<< @/public/examples/water/Fluid.ts

更多属性请参考 [FluidRenderer](/api/classes/FluidRenderer) 的 API 文档。
