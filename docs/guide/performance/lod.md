# LOD 细节层级

离相机越远的物体在屏幕上越小，用和近处一样多的三角形去绘制它们是一种浪费。LOD（Level of Detail，细节层级）为同一个物体准备几套精细程度不同的模型，近处显示高精度模型，远处换成简化模型，更远时直接隐藏，从而在几乎不影响画面的前提下大幅减少绘制量。

`LODGroup` 组件负责这种切换：给它注册若干个层级，每个层级是一组 `Object3D` 和一个阈值，它会在每一帧根据相机计算该物体当前的大小（或距离），只显示其中一个层级，其余层级通过 `transform.enable` 隐藏。

## 基本用法

通常把各层级的模型作为同一个父节点的子节点，在父节点上添加 `LODGroup`：

```ts
import { Object3D, LODGroup, MeshRenderer, SphereGeometry, BoxGeometry } from '@orillusion/core';

const root = new Object3D();
const lod = root.addComponent(LODGroup);

// 三个层级：高精度球体、低精度球体、立方体
const high = createMesh(new SphereGeometry(1.5, 48, 48));
const mid = createMesh(new SphereGeometry(1.5, 8, 8));
const low = createMesh(new BoxGeometry(2.4, 2.4, 2.4));
root.addChild(high);
root.addChild(mid);
root.addChild(low);

// 阈值：物体直径占视口高度的比例
lod.addLevel(high, 0.12); // 占屏幕高度 12% 以上时显示
lod.addLevel(mid, 0.05);  // 5% ~ 12%
lod.addLevel(low, 0.015); // 1.5% ~ 5%，更小时隐藏

scene.addChild(root);
```

- `addLevel(objects, threshold)` 可以传入一个或多个 `Object3D`。层级会自动按从精细到粗糙排序，因此添加顺序不限；返回值是该层级排序后的索引；
- 层级通过 `transform.enable` 显示和隐藏，对子节点同样生效，所以一个层级可以是一整个 glTF 模型的节点树；
- 注册后层级会立即隐藏，下一次更新时显示正确的那一级；
- 各个 `LODGroup` 可以共用几何体和材质，切换层级只改变可见性，不会创建新的资源。

## 切换依据

`mode` 决定用什么来衡量物体的"大小"，阈值的单位随之不同：

| `LODMode` | 衡量方式 | 阈值含义 |
| --- | --- | --- |
| `ScreenSize` | 默认。物体包围球直径占视口高度的比例（`0 ~ 1`），已考虑相机视角（正交相机使用 `frustumSize`），因此不论镜头焦距和距离如何，层级都在相同的**视觉大小**处切换 | 该层级保持显示所需的**最小**比例，如 `0.5`、`0.15`、`0.03` |
| `Distance` | 相机到物体的世界空间距离 | 该层级保持显示的**最大**距离，如 `20`、`60`、`150` |

两种方式都以 `LODGroup` 所在物体的世界坐标为中心。`ScreenSize` 所需的包围球半径默认自动计算：取该中心到各层级物体包围盒最远角的距离，也可以通过 `radius` 手动指定。几何体或缩放改变后，调用 `recalculateBounds()` 重新计算。

切换 `mode` 后，原来的阈值单位不再适用，需要用 `setThresholds()` 按从精细到粗糙的顺序重新设置：

```ts
import { LODMode } from '@orillusion/core';

lod.mode = LODMode.Distance;
lod.setThresholds([25, 60, 200]); // 25 以内高精度，25 ~ 60 低精度，60 ~ 200 立方体
```

## 属性与方法

| 属性 | 默认值 | 说明 |
| --- | --- | --- |
| `mode` | `LODMode.ScreenSize` | 切换依据，见上表 |
| `bias` | `1` | 整体缩放系数。大于 `1` 时精细层级保持更久（两种模式下方向一致），可用作全局的画质档位 |
| `hysteresis` | `0.1` | 阈值附近的缓冲区比例。降级在越过阈值时立即发生，升级则需要越过 `阈值 × (1 + hysteresis)`，避免物体停在边界附近时来回闪烁 |
| `cullBeyondLast` | `true` | 越过最后一个阈值后是否隐藏所有层级；为 `false` 时一直显示最粗糙的一级 |
| `forceLevel` | `null` | 强制显示某一级（调试用）：`null` 为自动，数字为层级索引，`LODGroup.CULLED` 为全部隐藏 |
| `camera` | `null` | 用于计算的相机，默认使用当前视图的相机 |
| `radius` | `null` | `ScreenSize` 模式使用的包围球半径，`null` 时自动计算 |

| 只读属性 | 说明 |
| --- | --- |
| `levels` | 所有层级，从精细到粗糙排列 |
| `currentLevel` | 当前显示的层级索引，全部隐藏时为 `LODGroup.CULLED`（`-1`） |
| `lastMetric` | 上一次更新时计算出的屏幕比例或距离 |

| 方法 | 说明 |
| --- | --- |
| `addLevel(objects, threshold)` | 添加层级，返回排序后的索引 |
| `removeLevel(index)` | 移除层级，该层级的物体会重新显示，不再受管理 |
| `setThreshold(index, threshold)` | 修改一个层级的阈值。层级会重新排序，其他层级的索引可能变化 |
| `setThresholds(thresholds)` | 按当前顺序一次性改写所有阈值后再排序，通常配合切换 `mode` 使用 |
| `recalculateBounds()` | 丢弃自动计算的半径，下次更新时重新计算 |
| `measure(camera)` | 计算当前对于某个相机的屏幕比例或距离，不改变状态 |

层级切换时会调用 `onLevelChange` 回调，可以用来同步切换其他内容，例如远处关闭粒子特效：

```ts
lod.onLevelChange = (level, previous) => {
    // level 为 LODGroup.CULLED 时表示已全部隐藏
    effect.enable = level === 0;
};
```

::: tip
- 销毁 `LODGroup` 组件时，所有层级的物体都会重新显示；
- 克隆带有 `LODGroup` 的物体时，层级中属于其子节点的物体会对应到克隆体的子节点。
:::

## 示例

下面的场景中有 24 × 24 个物体，每个都有三个层级：绿色高精度球体（约 4600 个三角形）、黄色低精度球体（128 个三角形）和红色立方体（12 个三角形），更远处隐藏。缩放、旋转相机可以看到颜色圈层随之变化；面板中可以实时看到各层级的数量和三角形总数，并切换衡量方式、调整 `bias` 与 `hysteresis`，或强制显示某一级。在默认视角下，场景约绘制 12 万个三角形；把 `forceLevel` 设为 `0` 让所有物体都显示高精度模型时，则需要约 265 万个。

<Demo src="/examples/benchmark/LOD.ts"></Demo>

<<< @/public/examples/benchmark/LOD.ts
