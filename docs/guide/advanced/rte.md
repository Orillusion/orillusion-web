# 大世界渲染（RTE）

当场景中的物体离世界原点非常远（例如地球尺度、星球轨道、超大地图，坐标动辄几百万米）时，`32` 位浮点数的精度已不足以稳定表示这些坐标，会出现**画面抖动（jitter）**、**深度冲突（z-fighting）**、**模型接缝错位**等问题。`Orillusion` 提供了 **RTE（Relative-To-Eye，相对相机渲染）** 等一组能力来解决大世界的精度问题。

::: tip 版本说明
RTE 相关设置需要 `@orillusion/core` **0.9.0 及以上**版本。本文示例提炼自引擎官方示例 `Sample_RTE`。
:::

## 原理

普通渲染中，顶点的世界坐标直接送入 GPU。当这些坐标的数值很大（如 `6378137`，地球半径量级）时，浮点数能分配给"小数/局部偏移"的有效位所剩无几，相机稍一移动，物体在屏幕上就会跳动。

**RTE** 的核心思想是：**把世界变换到"以相机为原点"的空间再渲染**。相机附近的坐标数值因此回落到很小的范围，浮点精度得以集中在真正需要的局部细节上，从而消除远离原点时的抖动。

它通常与另外两项能力配合使用：

- **双精度矩阵（`doublePrecision`）**：用双精度计算世界矩阵，进一步保住大坐标下的变换精度。
- **对数深度（`useLogDepth`）**：用对数深度缓冲分配近大远小的深度精度，配合极大的远裁剪面（远近比可达上千万）避免 z-fighting。

## 开启 RTE

在 `Engine3D.init` 的 `setting` 中开启相关开关即可：

```ts
import { Engine3D } from '@orillusion/core';

const engine = await Engine3D.init({
    setting: {
        useRTE: true,            // 开启相对相机渲染
        RTEScale: 1.0,           // RTE 坐标缩放系数，一般保持默认
        doublePrecision: true,   // 开启双精度矩阵
        render: {
            useLogDepth: true,   // 开启对数深度缓冲
        },
    },
});
```

| 设置项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `useRTE` | `boolean` | `false` | 是否基于相机位置渲染（相对相机空间），大世界场景开启 |
| `RTEScale` | `number` | `1.0` | RTE 坐标的缩放系数，一般保持默认，仅在需要对整体世界做单位换算时调整 |
| `doublePrecision` | `boolean` | `false` | 是否使用双精度矩阵计算世界变换 |
| `render.useLogDepth` | `boolean` | `false` | 是否使用对数深度缓冲，配合超大远裁剪面避免 z-fighting |

## 配套：超大远裁剪面

大世界相机的远裁剪面要设得足够大才能覆盖整个场景。例如以地球半径（约 `6378137` 米）为基准，把远裁剪面设为其数倍：

```ts
import { CameraUtil, Vector3 } from '@orillusion/core';

const camera = CameraUtil.createCamera3DObject(scene);
// 近 1 米、远 = 地球半径 × 4，配合对数深度即可稳定渲染
camera.perspective(60, engine.aspect, 1.0, 6378137 * 4);

// 在地球尺度下，相机一般直接 lookAt 目标点
camera.lookAt(viewPoint, targetPoint, Vector3.UP);
```

## 配套：浮动原点几何体

RTE 解决的是"渲染阶段"的精度；几何体本身的顶点数据如果直接用绝对大坐标存储，**在 CPU 侧构建时就已经损失了精度**。最佳实践是采用**浮动原点（floating origin）**：为每块物体选一个中心点，顶点数据存"相对中心的小偏移"，再把物体节点摆放到该中心的世界坐标上。

```ts
import { Object3D, MeshRenderer, GeometryBase, VertexAttributeName, Vector3 } from '@orillusion/core';

// 1) 几何体内部：顶点存“相对中心点”的偏移
class TileGeometry extends GeometryBase {
    public centerPoint: Vector3 = new Vector3();

    constructor(/* ... */) {
        super();
        // 计算该块的中心（绝对世界坐标，可能是百万级大数）
        this.centerPoint = computeCenter(/* ... */);

        const vertices = new Float32Array(vertexCount * 3);
        for (let i = 0; i < vertexCount; i++) {
            const absolute = computeVertexWorldPos(i);        // 绝对大坐标
            const relative = absolute.sub(this.centerPoint);  // 减去中心 → 小偏移
            vertices[i * 3 + 0] = relative.x;
            vertices[i * 3 + 1] = relative.y;
            vertices[i * 3 + 2] = relative.z;
        }
        this.setAttribute(VertexAttributeName.position, vertices);
        // ... 设置 index / normal / uv
    }
}

// 2) 节点：把物体摆到中心点的绝对世界坐标上
const geo = new TileGeometry(/* ... */);
const obj = new Object3D();
obj.localPosition = geo.centerPoint;   // 大坐标只出现在节点位置，由 RTE 在渲染时消化

const mr = obj.addComponent(MeshRenderer);
mr.geometry = geo;
scene.addChild(obj);
```

这样，"大数值"只存在于节点的 `localPosition`，由 RTE 在渲染阶段统一变换到相机空间消化掉；而进入顶点缓冲的始终是精度友好的小偏移。

## 完整示例

引擎官方示例 `Sample_RTE` 演示了一个完整的地球尺度场景：把经纬度坐标换算成地球椭球坐标、按瓦片（tile）加载卫星影像、用浮动原点构建每块瓦片几何，并提供开关实时对比 `useRTE` / `doublePrecision` 开启前后的画面稳定性。可在引擎仓库 `samples/render/Sample_RTE.ts` 查阅。

## 小结

- 大世界（地球/星球尺度）出现抖动、z-fighting 时，开启 `useRTE`、`doublePrecision`、`render.useLogDepth` 三件套；
- 相机远裁剪面要设得足够大；
- 几何体采用**浮动原点**：顶点存相对偏移，大坐标只放在节点 `localPosition` 上。
