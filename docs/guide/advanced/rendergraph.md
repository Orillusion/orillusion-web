# RenderGraph

`RenderGraph` 是 `Orillusion` 在 `0.9.0` 引入的全新渲染调度框架。它把整条渲染管线拆分成一个个独立的 **Pass（渲染节点）**，每个 Pass 只声明自己 **读取** 和 **写入** 了哪些资源，由 RenderGraph 在编译期 **自动推导执行顺序**、**自动管理 GPU 临时资源**，并支持在 **运行时动态增删、替换、启停** Pass。

相比过去把渲染步骤硬编码在固定管线里，RenderGraph 让渲染管线变得**可组合、可扩展、可调试**：你可以往默认管线里插入一个自定义 Pass，可以裁剪出一条最小管线，也可以在不重启引擎的情况下热替换某个渲染步骤。

::: tip 版本与开关
RenderGraph 需要 `@orillusion/core` **0.9.0 及以上**版本，并默认启用（`engine.setting.render.useFrameGraph = true`）。本文示例均改写自引擎官方示例 `Sample_CustomRendererJob` 与 `Sample_PassOrderControl`。
:::

## 什么是 RenderGraph

RenderGraph 由几个核心角色组成，理解它们的职责是掌握 RenderGraph 的关键：

| 概念 | 说明 |
| --- | --- |
| `RenderGraph` | RenderGraph 主体，持有所有 Pass 和资源池，负责编译（拓扑排序）与逐帧执行 |
| `RenderGraphPass` | 单个渲染节点（抽象基类）。在 `setup()` 中声明依赖，在 `execute()` 中提交 GPU 工作 |
| `RenderGraphBuilder` | `setup()` 阶段的构建器，用于声明资源读/写、依赖、临时资源、渲染目标等 |
| `RenderGraphPassContext` | `execute()` 阶段的运行时上下文，用于按名称解析资源、打开编码器 |
| 资源池（pool） | 命名资源的注册表（字符串名 → 资源）。Pass 通过名称发布和获取资源 |
| 瞬态资源（transient） | 由 RenderGraph 按需分配、自动复用（别名化）的临时 GPU 纹理/缓冲区，用完即回收 |
| 拓扑排序（topo sort） | 编译期根据资源读写关系和显式依赖，自动推导出 Pass 的执行顺序 |

RenderGraph 的工作流程是：**声明 → 编译 → 执行**。
- **声明**：每个 Pass 在 `setup()` 里通过 `b.read(...)` / `b.write(...)` 声明它消费和产出的资源；
- **编译**：`compile()` 收集所有声明，校验（单一创建者、无循环依赖、资源可解析），并拓扑排序得到执行顺序；
- **执行**：逐帧按编译好的顺序调用每个启用 Pass 的 `execute()`。

## 获取 RenderGraph

每个 `View3D` 在 `engine.startRenderView(view)` 之后都会拥有一个绑定的 RenderGraph，通过 `view.renderGraph` 访问：

```ts
import { Engine3D, Scene3D, View3D, CameraUtil } from '@orillusion/core';

const engine = await Engine3D.init();
const scene = new Scene3D();
const camera = CameraUtil.createCamera3DObject(scene);
camera.perspective(60, engine.aspect, 0.1, 5000);

const view = new View3D();
view.scene = scene;
view.camera = camera;
engine.startRenderView(view);

// 渲染启动后，RenderGraph 才存在；未启动时为 null
const graph = view.renderGraph!;

// 查看当前已编译的 Pass 执行顺序
console.log(graph.passes.map(p => p.name).join(' → '));
// 例如：ClusterLightingPass → ShadowPass → ... → ColorPass → PostPass → GUIPass

// 按名称查找某个内置 Pass
const colorPass = graph.getPass('ColorPass');
```

| 成员 | 说明 |
| --- | --- |
| `view.renderGraph` | 返回该视图绑定的 `RenderGraph`，渲染未启动时为 `null` |
| `graph.passes` | 只读数组，按编译后的执行顺序列出所有 Pass |
| `graph.getPass<T>(name)` | 按 `name` 查找 Pass，找不到返回 `null` |
| `graph.pool` | 资源池，可用 `pool.has(name)` / `pool.get(name)` 查询资源 |

## Pass 的生命周期

自定义渲染逻辑的核心是继承 `RenderGraphPass`。每个 Pass 有两个关键方法：

- **`setup(builder)`**：在编译期调用（每次 `compile()` 时），用于声明依赖、分配资源、创建渲染/计算管线。**只声明、不绘制**。
- **`execute(ctx)`**：每帧调用一次，提交真正的 GPU 命令。**只绘制、不声明**。

```ts
import { RenderGraphPass, RenderGraphBuilder, RenderGraphPassContext } from '@orillusion/core';

class MyPass extends RenderGraphPass {
    // 唯一标识，建议 PascalCase 且以 Pass 结尾
    public readonly name = 'MyPass';

    public setup(b: RenderGraphBuilder): void {
        // 声明依赖（编译期）
    }

    public execute(ctx: RenderGraphPassContext): void {
        // 提交 GPU 工作（每帧）
    }
}
```

`RenderGraphPass` 上常用的字段：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `name` | `string` | Pass 唯一标识，用作图节点的键，也出现在报错信息里 |
| `enabled` | `boolean` | 运行时开关。`graph.disablePass(name)` 会翻转它，禁用的 Pass 会被跳过 |
| `layerMask` | `number` | 该 Pass 消费哪些场景层（位掩码），默认 `VisibleLayer.All`，详见[控制执行顺序](#控制-pass-执行顺序) |
| `reads` | `readonly string[]` | 编译后填充，本 Pass 声明读取的资源名（编译前为空数组） |
| `writes` | `readonly string[]` | 编译后填充，本 Pass 声明写入的资源名 |
| `dependencies` | `ReadonlySet<string>` | 显式排序依赖的 Pass 名集合，可在 `setup` 或编译前直接赋值 |

## RenderGraphBuilder API

`setup(b)` 中通过 `RenderGraphBuilder` 声明依赖关系。最常用的是 `read` / `write`：

```ts
public setup(b: RenderGraphBuilder): void {
    // 读取一个由其它 Pass 产出的资源
    b.read(COLOR_BUFFER);

    // 写入资源 —— 两种语义：
    // 1) 创建者：传入工厂函数，本 Pass 负责创建并发布该资源（同名只能有一个创建者）
    b.write('_MyResource', () => myTexture);
    // 2) 变更者：不传工厂，声明本 Pass 会修改一个已存在的资源（可多个变更者，按插入顺序）
    b.write(COLOR_BUFFER);
}
```

| 方法 | 说明 |
| --- | --- |
| `read(name, access?)` | 声明读取一个命名资源；该资源必须有创建者，否则编译报错 |
| `write(name, getter)` | **创建者**：用工厂函数创建资源并注册到资源池，同名仅允许一个创建者 |
| `write(name, access?)` | **变更者**：声明本 Pass 修改一个已有资源，多个变更者按插入顺序排序 |
| `readWrite(handle, access?)` | 原地读写同一资源（等价于 `read` + `write`），常用于计算 Pass |
| `dependsOn(name)` | 声明对另一个 Pass 的**显式排序依赖**（不经由资源），目标 Pass 须已注册 |
| `dependsOnIfPresent(name)` | 同上，但目标 Pass 不存在时静默跳过 |
| `declareTexture(name, desc)` | 声明一张由 RenderGraph 管理的[瞬态纹理](#瞬态资源)，返回 `TextureHandle` |
| `declareBuffer(name, desc)` | 声明一个由 RenderGraph 管理的瞬态缓冲区，返回 `BufferHandle` |
| `importExternalTexture(name, tex)` | 把外部管理的 `RenderTexture` 以持久资源形式发布到 RenderGraph |
| `createRenderTarget(name, desc)` | 分配一个新的 `RenderGraphRenderTarget`（颜色 + 可选深度） |
| `useRenderTarget(name)` / `borrowRenderTarget(name)` | 使用/借用已存在的渲染目标 |
| `createRenderPass(name, target, desc)` | 围绕单条渲染管线创建私有渲染 Pass 句柄 |
| `createComputePass(name, desc)` | 创建私有计算 Pass 句柄 |

> `access` 提示取值为 `'sample' | 'storage' | 'attachment' | 'copy'`，当瞬态资源的 `usage` 设为 `'auto'` 时，RenderGraph 据此推导最终的 `GPUTextureUsage` / `GPUBufferUsage`。

## RenderGraphPassContext API

`execute(ctx)` 中通过 `RenderGraphPassContext` 解析资源、访问视图：

| 成员 | 说明 |
| --- | --- |
| `ctx.view` | 当前 `View3D`，可访问 `scene`、`camera`、`engine3D` 等 |
| `ctx.frameIndex` | 当前帧序号，常用于做节流（每 N 帧执行一次） |
| `ctx.get<T>(name)` | 按名称从资源池解析资源（调用创建者注册的工厂） |
| `ctx.getTexture(name)` | 解析为 `RenderTexture`（带类型检查） |
| `ctx.getBuffer(name)` | 解析为 `GPUBufferBase` |
| `ctx.getRenderTarget(name)` | 解析为 `RenderGraphRenderTarget` |

## 编写一个自定义 Pass

下面是一个最小可用的自定义 Pass：它在 `setup` 里声明读取主色缓冲 `_ColorBuffer`（常量 `COLOR_BUFFER`），在 `execute` 里每 60 帧打印一次该资源是否就绪。

```ts
import {
    COLOR_BUFFER, RenderGraphBuilder, RenderGraphPass, RenderGraphPassContext,
} from '@orillusion/core';

class FrameLogPass extends RenderGraphPass {
    public readonly name = 'FrameLogPass';
    private _lastLogged = -Infinity;

    public setup(b: RenderGraphBuilder): void {
        // 声明读取主色缓冲：校验器会确保它有创建者，
        // 拓扑排序会把本 Pass 排在 _ColorBuffer 的最新写入者之后
        b.read(COLOR_BUFFER);
    }

    public execute(ctx: RenderGraphPassContext): void {
        if (ctx.frameIndex - this._lastLogged < 60) return;
        // 通过名称解析声明过的输入
        const color = ctx.get<unknown>(COLOR_BUFFER);
        console.log(`[FrameLogPass] frame ${ctx.frameIndex} color=${color ? 'ok' : 'missing'}`);
        this._lastLogged = ctx.frameIndex;
    }
}
```

把它挂到默认管线上，只需在渲染启动后调用 `graph.add(...)`：

```ts
engine.startRenderView(view);

const graph = view.renderGraph!;
graph.add(FrameLogPass);
// add() 会把图标记为“脏”，下一帧自动重新 compile()
```

::: tip
`graph.add(Ctor, ...args)` 会把构造参数原样转发给 Pass 的构造函数，因此你可以给自定义 Pass 设计带参数的构造器（例如开关、强度等配置项）。
:::

## 控制 Pass 执行顺序

RenderGraph 的执行顺序由 `compile()` 自动推导，但应用层往往需要把自定义 Pass 精确插入到默认管线的某个位置。`Orillusion` 提供了四种互补的机制：

### 1. `layerMask` —— 按渲染层路由

每个 Pass 都有 `layerMask`，与相机的 `cullingMask` 以及节点的 `visibleLayer` 做按位与，决定该 Pass 绘制哪些物体：

```ts
(node.visibleLayer & pass.layerMask & camera.cullingMask) !== 0
```

例如，把某个自定义层从内置的 `ColorPass` 和 `PreDepthPass` 中剔除，交给自己的 Pass 单独绘制：

```ts
import { VisibleLayer, ColorPass, PreDepthPass } from '@orillusion/core';

const MY_LAYER = 1 << 1; // 位 0 被引擎的 VisibleLayer.Default 占用，应用从位 1 起用

const graph = view.renderGraph!;
const excludeMine = VisibleLayer.remove(VisibleLayer.All, MY_LAYER);
graph.getPass<ColorPass>('ColorPass')!.layerMask = excludeMine;

const preDepthPass = graph.getPass<PreDepthPass>('PreDepthPass');
if (preDepthPass) preDepthPass.layerMask = excludeMine;

// 再给被标记为 MY_LAYER 的节点设置 visibleLayer
// meshRenderer.visibleLayer = MY_LAYER;
```

### 2. 资源流自动排序

只要在 `setup` 里声明 `b.read(X)` / `b.write(X)`，RenderGraph 就会据此推导先后：**写入者一定排在读取者之前**。上一节的 `FrameLogPass` 因为 `b.read(COLOR_BUFFER)`，会自动排在写入 `_ColorBuffer` 的 `ColorPass` 之后，无需手动指定。

### 3. `dependsOn` —— 显式排序边

当依赖关系不经由 RenderGraph 可见的资源（例如通过全局绑定组传递的间接缓冲），用 `b.dependsOn(name)` 在 `setup` 里声明显式顺序：

```ts
public setup(b: RenderGraphBuilder): void {
    b.read(COLOR_BUFFER);
    // 锚定在某个内置 Pass 之后执行
    b.dependsOn('DecalShadowVolumePass');
}
```

### 4. 修改已有 Pass 的 `dependencies` —— 反向插边

如果你的自定义 Pass 是在 `startRenderView` **之后**才添加的，它的插入序会高于内置 Pass。此时若希望某个内置 Pass（如 `PostPass`）排在你的 Pass **之后**，可以直接往它的 `dependencies` 集合里追加你的 Pass 名，再手动 `compile()`：

```ts
const graph = view.renderGraph!;
graph.add(MyOverlayPass);

const postPass = graph.getPass('PostPass')!;
postPass.dependencies = new Set([
    ...(postPass.dependencies ?? []),
    'MyOverlayPass',
]);

// 触发重新编译，新的顺序立即生效
graph.compile();
// 控制台会打印：[RenderGraph] compiled pass order: …
```

## 瞬态资源

很多 Pass 需要临时的中间纹理/缓冲区（如降采样金字塔、模糊中转）。与其自己 `new RenderTexture` 并管理生命周期，不如交给 RenderGraph 声明**瞬态资源**—— RenderGraph 会自动分配物理资源、在生命周期不重叠时**复用（别名化）**同一块显存，用完即回收，从而显著降低显存占用。

```ts
import { GPUTextureFormat, GPUTextureUsage } from '@orillusion/core';

public setup(b: RenderGraphBuilder): void {
    b.read(COLOR_BUFFER);

    // 声明一张半分辨率的临时纹理
    const handle = b.declareTexture('_MyBlurTex', {
        format: GPUTextureFormat.rgba16float,
        width: 'screen/2',   // SizeSpec：编译期解析为画布尺寸的一半
        height: 'screen/2',
        usage: 'auto',        // 由下面的 access 提示推导
        aliasable: true,      // 允许与其它资源别名化复用显存
    });

    // 声明访问方式（必须，否则会被当作孤立声明跳过）
    b.write(handle, 'attachment');
}

public execute(ctx: RenderGraphPassContext): void {
    // 取出 RenderGraph 分配的物理纹理
    const tex = ctx.getTexture('_MyBlurTex');
    // tex.width === 画布宽度 / 2
}
```

| 描述符字段 | 说明 |
| --- | --- |
| `format` | `GPUTextureFormat`，纹理格式 |
| `width` / `height` | `SizeSpec`：可为具体像素数，或 `'screen'`、`'screen/2'`、`'screen/4'`、`'screen/8'` |
| `usage` | `GPUTextureUsageFlags` 或 `'auto'`（由 access 提示推导） |
| `aliasable` | 是否允许与其它瞬态资源别名化复用显存（默认 `true`） |
| `mipLevelCount` / `sampleCount` | mip 层级数 / MSAA 采样数（可选） |

> 缓冲区用 `b.declareBuffer(name, { size, usage })` 声明，语义对称；RenderGraph 按 2 的幂大小桶复用缓冲区。

## 运行时动态管理

RenderGraph 支持在运行时热修改管线，无需重启引擎。修改后会自动在下一帧重新编译。

```ts
const graph = view.renderGraph!;

// 新增
const pass = graph.add(MyPass);

// 替换（保留原插入位置）
graph.replace('ShadowPass', MyShadowPass);

// 移除
graph.remove('FrameLogPass');

// 启停（保留资源，只是跳过执行）
graph.disablePass('PostPass');
graph.enablePass('PostPass');
```

当需要一次性做多处改动时，用 `beginUpdate()` / `endUpdate()` 包裹，避免多次重复编译：

```ts
graph.beginUpdate();
graph.add(PassA);
graph.add(PassB);
graph.disablePass('PassC');
graph.endUpdate();   // 整批改动只编译一次
```

| 方法 | 说明 |
| --- | --- |
| `add(Ctor, ...args)` | 新增 Pass，返回实例 |
| `replace(name, Ctor, ...args)` | 用新 Pass 替换同名 Pass，保留插入位置 |
| `remove(name)` | 移除 Pass，返回是否成功 |
| `disablePass(name)` / `enablePass(name)` | 禁用 / 启用 Pass（链式返回 `this`） |
| `beginUpdate()` / `endUpdate()` | 批量修改，延迟到 `endUpdate` 才编译一次 |
| `compile()` | 手动触发编译（通常由上述修改自动触发） |

## 自定义渲染管线（RendererJob）

默认管线由内置的 `ForwardRendererJob` 组装。如果你想从零搭建一条**精简管线**（例如只要光照 + 阴影、去掉透明/GI/后处理金字塔等），可以继承 `RendererJob`，在构造函数里按需 `this.graph.add(...)`，再把这个类传给 `startRenderView`：

```ts
import {
    RendererJob, View3D,
    ClusterLightingPass, ShadowPass, PointShadowPass, ReflectionPass,
    GBufferResourcePass, ColorPass, SkyPass, PostPass, GUIPass,
} from '@orillusion/core';

class MinimalRendererJob extends RendererJob {
    constructor(view: View3D) {
        super(view);

        this.graph.add(ClusterLightingPass);
        this.graph.add(ShadowPass);
        this.graph.add(PointShadowPass);
        this.graph.add(ReflectionPass);
        // GBufferResourcePass 提供 ColorPass 消费的共享 g-buffer / 渲染上下文，
        // 必须在 ColorPass 之前添加
        this.graph.add(GBufferResourcePass);
        this.graph.add(ColorPass, { giEnabled: false });
        this.graph.add(SkyPass);
        this.graph.add(PostPass);
        this.graph.add(GUIPass);

        // add() 的顺序只是“注册序”，真正的执行序由 compile() 按依赖推导
        console.log('passes:', this.graph.passes.map(p => p.name).join(' → '));
    }
}
```

使用时把类传给 `startRenderView` 的第二个参数，引擎会用它替代默认的 `ForwardRendererJob`：

```ts
const engine = await Engine3D.init({
    setting: {
        shadow: { autoUpdate: true, updateFrameRate: 1 },
        // 重要：设置要与 Pass 集合保持一致。
        // 默认 zPrePass=true 会让 ColorPass 去取 _MainDepthTexture，
        // 但这条精简管线没有添加 PreDepthPass，所以要关掉它
        render: { zPrePass: false },
    },
});

// ……创建 scene / camera / view……

engine.startRenderView(view, MinimalRendererJob);
```

::: warning 保持 setting 与 Pass 集合一致
裁剪管线时要同步调整 `engine.setting.render`。例如去掉 `PreDepthPass` 就要把 `zPrePass` 设为 `false`，否则依赖 `_MainDepthTexture` 的 Pass 会在编译期报 `UnresolvedResourceError`（找不到资源创建者）。
:::

## 调试技巧

RenderGraph 内置了若干排查工具：

```ts
const graph = view.renderGraph!;

// 1. 导出 Graphviz DOT，可粘贴到 https://dataviz.dev 等工具可视化依赖图
console.log(graph.dumpDot());

// 2. 查看瞬态资源显存统计（当前/峰值字节数、活跃生命周期数）
console.log(graph.transientStats());

// 3. 每次 compile() 后，引擎会在控制台打印最终执行顺序：
//    [RenderGraph] compiled pass order: ClusterLightingPass → ... → GUIPass
```

编译期的常见报错：

| 错误 | 含义 |
| --- | --- |
| `UnresolvedResourceError` | 某 Pass 读取的资源没有创建者（常因禁用/未添加产出 Pass，或 setting 不一致） |
| `DuplicateCreatorError` | 同一资源名有两个创建者（违反单一创建者规则） |
| `CyclicDependencyError` | 资源读写或显式依赖形成了环 |

## 相关 API

- [View3D](/api/classes/View3D) —— 通过 `view.renderGraph` 获取 RenderGraph
- [Engine3D](/api/classes/Engine3D) —— `startRenderView(view, JobCtor?)` 指定自定义 `RendererJob`
- [VisibleLayer](/api/classes/VisibleLayer) —— 渲染层位掩码工具
