# 射线检测与 MeshBVH

射线检测在 CPU 上计算一条射线与网格三角形的交点，用于鼠标拾取、在模型表面放置物体、视线遮挡判断、贴地等。引擎提供两个入口，它们共用同一套求交逻辑，并由三角形层次包围盒 `MeshBVH` 加速：

| 入口 | 适用场景 |
| --- | --- |
| [Raycaster](#raycaster) | 任意射线（不限于从相机出发），对任意 `MeshRenderer` 求交，无需碰撞组件；可返回射线上的所有交点 |
| [拾取事件](/guide/interaction/pickfire) `bound` 模式 + `MeshColliderShape` | 鼠标悬停、点击等事件驱动的交互 |

与 [帧缓冲拾取](/guide/interaction/pickfire#帧缓冲拾取) 相比，射线检测不依赖渲染结果，可以从任意位置、沿任意方向发射，能拿到射线穿过的每一个交点，并提供三角形索引、重心坐标、UV 等信息。

## Raycaster

### 基本用法

```ts
import { Raycaster } from '@orillusion/core';

const raycaster = new Raycaster();

// 从相机经过画布上的某个像素构造射线
raycaster.setFromCamera(view.camera, input.mouseX, input.mouseY);

// 与场景中的所有网格求交（默认递归子节点），结果按距离由近到远排序
const hits = raycaster.intersectObject(view.scene);
if (hits.length > 0) {
    const hit = hits[0];
    console.log(hit.object3D.name, hit.point, hit.normal, hit.uv);
}
```

`Raycaster` 会遍历给定节点下所有启用的 `MeshRenderer` 并逐个求交，不需要添加 `ColliderComponent`。天空球（`SkyRenderer`、`AtmosphericComponent`、`EarthSkyRenderer`）默认会被跳过，对整个 `scene` 求交时不会在远处命中天空，需要时可以通过 `includeSky` 打开。

### 构造射线

| 方法 | 说明 |
| --- | --- |
| `setFromCamera(camera, x, y)` | 从相机经过画布像素 `(x, y)` 构造射线。坐标为相对画布左上角的 CSS 像素，与 `InputSystem.mouseX/Y`、`PointerEvent3D.mouseX/Y` 一致 |
| `setFromCameraNDC(camera, x, y)` | 从相机经过标准化设备坐标 `(x, y)` 构造射线，`x`、`y` 取值 `-1 ~ 1`，`y` 向上 |
| `set(origin, direction)` | 直接指定世界空间的起点与方向（方向会被归一化），也可在构造函数中传入 |

```ts
// 从角色头顶向下发射，检测脚下的地面
const down = new Raycaster(new Vector3(x, 100, z), new Vector3(0, -1, 0));
const ground = down.intersectFirst(terrain);
if (ground) role.y = ground.point.y;
```

### 求交方法

| 方法 | 说明 |
| --- | --- |
| `intersectObject(object, recursive = true, out = [])` | 与一个节点（及其子节点）求交，返回所有交点，按距离排序 |
| `intersectObjects(objects, recursive = true, out = [])` | 同上，传入多个根节点 |
| `intersectFirst(objects, recursive = true)` | 只返回最近的一个交点，没有则为 `null`。每个网格只会搜索到当前最近距离为止，比 `intersectObjects(...)[0]` 更快 |

### 选项

| 属性 | 默认值 | 说明 |
| --- | --- | --- |
| `near` / `far` | `0` / `Infinity` | 只保留距离在此范围内的交点（世界单位） |
| `layerMask` | `VisibleLayer.All` | 只检测 `visibleLayer` 与之有交集的渲染器 |
| `filter` | `null` | 逐个渲染器的过滤函数，返回 `false` 跳过 |
| `includeSky` | `false` | 是否检测天空球（`SkyRenderer`、`AtmosphericComponent`、`EarthSkyRenderer`） |
| `side` | `'material'` | 可命中的面：`'material'` 跟随每个子网格材质的 `cullMode`（即画面上看得到的面），`'front'` / `'back'` 只命中正面 / 背面，`'double'` 双面 |
| `firstHitOnly` | `false` | 每个网格只报告最近的交点，而不是射线穿过的所有交点 |
| `useBVH` | `'auto'` | 何时使用 `MeshBVH`，见 [MeshBVH 加速](#meshbvh-加速) |
| `deformation` | `'cpu'` | 蒙皮与形变动画网格的处理方式，见 [蒙皮与形变动画](#蒙皮与形变动画) |

```ts
// 忽略标记物体，只检测正面
raycaster.filter = (renderer) => renderer.object3D !== marker;
raycaster.side = 'front';
```

已禁用的物体、渲染器和材质，以及非 `triangle-list` 拓扑（线、点）的子网格不会被检测；被 `InstanceDrawComponent` 合批的渲染器虽然自身被禁用，但仍然可以被检测到。

### 命中结果

每个交点是一个新的 `RaycastHit` 对象，可以放心保存：

| 字段 | 说明 |
| --- | --- |
| `distance` | 射线起点到交点的世界空间距离 |
| `point` / `localPoint` | 交点的世界坐标 / 网格本地坐标 |
| `normal` | 世界空间法线：按重心坐标插值的顶点法线，几何体没有法线时使用 `faceNormal`。命中背面时不会翻转 |
| `faceNormal` | 命中三角形的几何法线（世界空间，由三角形绕序决定） |
| `faceIndex` | 三角形在索引缓冲中的序号，顶点为 `indices[faceIndex * 3 .. + 2]` |
| `barycentric` | 三个顶点的重心坐标权重 `(w0, w1, w2)` |
| `frontFace` | 是否命中三角形的正面（逆时针，与渲染一致） |
| `uv` / `uv1` | 插值后的 `TEXCOORD_0` / `TEXCOORD_1`，几何体没有时为 `null` |
| `subGeometryIndex` | 三角形所属的子几何体，对应 `renderer.materials[subGeometryIndex]` |
| `object3D` / `renderer` | 被命中的物体与渲染器 |

## MeshBVH 加速

不使用加速结构时，每条射线都要测试网格的每一个三角形，耗时与三角形数量成正比。`MeshBVH` 为几何体的三角形建立一棵层次包围盒树，查询时只需访问射线经过的少数节点，耗时近似为对数级。以一个约 32 万个三角形的网格为例，建树约需 140 ms，之后每条射线约 13 µs，而逐个三角形测试约需 4.4 ms，快了约 300 倍。

### 何时使用 BVH

`Raycaster.useBVH` 与 `MeshColliderShape.useBVH` 决定是否使用 BVH：

| 取值 | 说明 |
| --- | --- |
| `'auto'` | 几何体已建好 BVH 时使用，否则逐个三角形测试。**`Raycaster` 的默认值** |
| `'always'` | 首次查询时自动建树并缓存。**`MeshColliderShape` 的默认值** |
| `'never'` | 始终逐个三角形测试 |

对于需要频繁检测的高面数模型，建议提前建树，避免首次检测时卡顿：

```ts
import { MeshBVH } from '@orillusion/core';

// 建树并缓存，之后 'auto' 模式的 Raycaster 会自动使用它
const bvh = MeshBVH.build(meshRenderer.geometry);
console.log(bvh.triCount, bvh.nodeCount, bvh.depth);
```

### 缓存与更新

BVH 按几何体缓存，多个渲染器共用同一个几何体时也共用同一棵树：

| 方法 | 说明 |
| --- | --- |
| `MeshBVH.build(geometry, maxLeafTris = 8)` | 建树（或重建）并缓存，`maxLeafTris` 为每个叶节点最多包含的三角形数 |
| `MeshBVH.get(geometry)` | 获取缓存的树，没有则建树 |
| `MeshBVH.has(geometry)` | 是否已有缓存的树 |
| `MeshBVH.invalidate(geometry)` | 丢弃缓存，下次 `get` 时重建 |
| `bvh.refit()` | 保持树结构，按当前顶点位置重新计算节点包围盒 |

几何体的顶点变化后，缓存的树会在下次查询时自动更新：在原数组上修改顶点并重新上传（如再次调用 `geometry.setAttribute`）时执行 `refit()`；替换为新的顶点或索引数组时完整重建。如果只是在原数组上修改了顶点而没有重新上传，需要手动调用 `bvh.refit()` 或 `MeshBVH.invalidate()`。

::: tip
`refit()` 开销很小（与三角形数量成线性关系），但只更新包围盒、不调整树结构。顶点变形幅度很大时查询结果依然正确，只是会变慢，此时可以用 `MeshBVH.build()` 重建。
:::

BVH 只包含每个子几何体 LOD 0 的三角形，支持带索引与不带索引的几何体，以及预制体（`compose_bin`）的交错顶点格式。它描述的是几何体本身的顶点，不包含蒙皮和形变动画。

### 直接查询 MeshBVH

需要在几何体的本地空间做自定义计算时，也可以直接使用 `MeshBVH` 查询。注意它的输入与结果都在**几何体本地空间**，距离 `t` 也以本地单位计：

```ts
import { MeshBVH, MeshRenderer, Vector3 } from '@orillusion/core';

const renderer = obj.getComponent(MeshRenderer);
const bvh = MeshBVH.get(renderer.geometry);

// 把世界空间的射线变换到网格本地空间
const inv = renderer.transform.worldMatrix.clone().invert();
const origin = inv.transformPoint(worldOrigin.clone());
const direction = inv.transformVector(worldDirection.clone()).normalize();

// 最近的交点，只检测正面，最远 100 个本地单位
const hit = bvh.raycast(origin, direction, { cull: 'back', far: 100 });
if (hit) console.log(hit.t, hit.triIndex, hit.point, hit.faceNormal);
```

| 方法 | 说明 |
| --- | --- |
| `raycast(origin, direction, options?, target?)` | 最近的交点，没有则为 `null`；可传入 `target` 复用结果对象 |
| `raycastAll(origin, direction, options?, out?)` | 所有交点，按距离排序；穿过共享边或顶点时只报告一次 |
| `intersectsRay(origin, direction, options?)` | 是否与任意三角形相交，找到第一个即返回，适合视线遮挡判断 |
| `MeshBVH.raycastGeometry(geometry, ...)` | 不建树，逐个三角形求最近交点，适合一次性查询或很小的网格 |
| `MeshBVH.raycastGeometryAll(geometry, ...)` | 不建树，返回所有交点 |

查询选项 `options`：

| 字段 | 默认值 | 说明 |
| --- | --- | --- |
| `cull` | `'none'` | 忽略的面：`'none'`、`'back'`（跳过背面，与 `cullMode: 'back'` 的材质看到的一致）、`'front'`；`true` 等同于 `'back'` |
| `near` / `far` | `0` / `Infinity` | 只保留距离在此范围内的交点 |

结果 `MeshBVHHit` 包含 `t`（沿射线的距离）、`triIndex`、重心坐标 `u` / `v`（`v0` 的权重为 `1 - u - v`）、`point`、`faceNormal`、`frontFace` 与 `subGeometryIndex`。

## 蒙皮与形变动画

骨骼动画与 Morph 形变动画在 GPU 的顶点着色器中完成，几何体中保存的仍是绑定姿态，直接对它求交会命中错误的位置。`Raycaster.deformation` 决定如何处理这类网格：

| 取值 | 说明 |
| --- | --- |
| `'cpu'` | 默认。在 CPU 上按与顶点着色器相同的方式计算变形后的顶点，再对结果求交，交点与画面一致 |
| `'bindPose'` | 对未变形的绑定姿态求交 |
| `'skip'` | 忽略这类网格 |

CPU 变形由 `MeshDeformer` 完成，先应用 Morph 形变再应用蒙皮，支持 glTF 的 `SkinnedMeshRenderer2` + `AnimatorComponent` 以及预制体的 `SkinnedMeshRenderer` + `SkeletonAnimationComponent`。变形结果按渲染器缓存，只有骨骼矩阵或形变权重变化时才重新计算，并通过 `refit()` 更新 BVH。

`MeshColliderShape` 也有同名的 `deformation` 属性，`ColliderComponent` 会自动关联同一物体上的渲染器，因此 `bound` 模式的拾取事件同样能跟随动画。

下面的示例每帧从鼠标位置发射射线：红点是按动画变形后的命中位置，黄点沿法线方向，蓝点是同一条射线命中绑定姿态的位置。可以在面板中切换动画、调节狮子的形变权重，或切换 `deformation` 模式对比效果。

<Demo src="/examples/pick/SkinnedMesh.ts"></Demo>

<<< @/public/examples/pick/SkinnedMesh.ts

## 与拾取事件配合

在 [拾取事件](/guide/interaction/pickfire) 的 `bound` 模式下，`MeshColliderShape` 使用同样的求交逻辑，默认首次拾取时自动建立 BVH，即使是几十万面的模型也能逐帧精确拾取：

```ts
import { ColliderComponent, MeshColliderShape } from '@orillusion/core';

// 不设置 shape.mesh 时，自动使用同一物体上 MeshRenderer 的几何体
const collider = obj.addComponent(ColliderComponent);
collider.shape = new MeshColliderShape();
```

| `MeshColliderShape` 属性 | 默认值 | 说明 |
| --- | --- | --- |
| `mesh` | 自动 | 用于拾取的几何体，未设置时使用同一物体上 `MeshRenderer` 的几何体 |
| `useBVH` | `'always'` | 何时使用 BVH |
| `backfaceCulling` | `false` | 是否跳过背面 |
| `maxDistance` | `Infinity` | 忽略超过该距离（世界单位）的交点 |
| `deformation` | `'cpu'` | 蒙皮与形变动画网格的处理方式 |

`bound` 模式的拾取事件数据 `e.data` 中包含以下字段，所有坐标与法线均为世界空间：

| 字段 | 说明 |
| --- | --- |
| `worldPos` / `localPos` | 交点的世界坐标 / 碰撞体本地坐标 |
| `worldNormal` | 交点处的法线 |
| `distance` | 射线起点到交点的距离 |
| `faceNormal`、`faceIndex`、`barycentric`、`uv`、`uv1`、`subGeometryIndex`、`frontFace` | 仅 `MeshColliderShape`，含义同 [命中结果](#命中结果) |
| `hits` | 射线穿过的所有碰撞体的交点，由近到远排序 |

```ts
view.pickFire.addEventListener(PointerEvent3D.PICK_MOVE, (e: PointerEvent3D) => {
    const d = e.data;
    marker.localPosition = d.worldPos;
    console.log(e.target.name, d.faceIndex, d.uv, d.hits.length);
}, this);
```

`view.pickFire.layerMask` 与 `view.pickFire.filter` 可以排除不参与拾取的碰撞体，用法与 `Raycaster` 相同。

下面的示例中，约 32 万面的球体、4 万面的圆环和几个缩放过的立方体都使用 `MeshColliderShape`。移动鼠标时逐帧精确拾取并在交点处放置标记；点击时用 `Raycaster` 对整个场景求交，列出射线穿过的所有交点；`Benchmark` 面板可以对比 BVH 与逐个三角形测试的耗时。

<Demo src="/examples/pick/MeshBVH.ts"></Demo>

<<< @/public/examples/pick/MeshBVH.ts
