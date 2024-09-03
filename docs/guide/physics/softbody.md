
# 软体
软体是一类在受到外力时会产生明显形变的物体，与刚体不同，软体能够模拟如布料、橡胶等柔性物体的动态行为。尽管软体模拟更为复杂，但它能为物理引擎中的物体提供更逼真的动画效果，特别是在涉及到柔性材质时。

## 组件介绍
软体模拟是物理引擎的高级功能，当前系统针对不同类型的软体提供了相应的组件：

- [ClothSoftbody](/physics/classes/ClothSoftbody) - 布料软体组件
- [RopeSoftbody](/physics/classes/RopeSoftbody) - 绳索软体组件

::: details 软体与模型对象的同步机制
当为模型对象添加软体组件后，物理引擎会在每一个物理模拟步长中计算软体的形变和运动状态。这个过程涵盖了柔性材料在外力、重力等物理作用力下的响应。根据这些计算，物理引擎会更新软体的顶点、法线等数据。软体组件会在其更新函数中将这些变化同步到模型对象的几何体上，使其在场景中展现逼真的物理效果。请注意，添加软体组件后，几何体的变形将由物理引擎自动处理，通常无需手动调整。若修改模型对象的变换可能会导致与物理模拟的不一致。
:::

在使用软体组件前，需要确保物理系统已启用软体模拟：
```ts
Physics.init({useSoftBody: true});
```

## 基本功能

软体组件提供了一些通用的 `API`，如下表所示：

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| btSoftBody | `Ammo.btSoftBody` | 获取 `Ammo.js` 的原生软体对象 |
| mass | `number` | 软体的总质量，默认值为 `1` |
| margin | `number` | 碰撞边距，默认值为 `0.15` |
| group | `number` | 碰撞组，默认值为 `1` |
| mask | `number` | 碰撞掩码，默认值为 `-1` |
| influence | `number` | 锚点的影响力，默认值为 `1` |
| disableCollision | `boolean` | 是否禁用与锚定刚体之间的碰撞，默认值为 `false` |
| activationState | `ActivationState` | 设置软体的激活状态 |

| 方法 | 描述 |
| --- | --- |
| wait() | 异步获取完全初始化的原生软体实例 |
| applyFixedNodes() | 固定软体节点 |
| clearAnchors() | 清除所有锚点 |
| appendAnchor() | 锚定软体节点到指定刚体（原生方法的封装，不考虑变换） |

## 布料软体 [ClothSoftbody](/physics/classes/ClothSoftbody)

布料软体组件 `ClothSoftbody` 主要用于模拟布料的柔性动态行为，支持的 `API` 如下：

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| clothCorners | `Vector3[]` | 定义布料四个角的位置，默认以平面法向量计算各角 |
| fixNodeIndices | `CornerType[] \| number[]` | 固定布料的节点索引或角类型 |
| anchorIndices | `CornerType[] \| number[]` | 布料的锚点节点索引或角类型 |
| anchorPosition | `Vector3` | 布料锚定刚体后相对刚体的位置 |
| anchorRotation | `Vector3` | 布料锚定刚体后相对刚体的旋转 |
| anchorRigidbody | `Rigidbody` | 添加锚点时需要的刚体 |

### 基本用法

为对象添加 `ClothSoftbody` 组件：
```ts
import { Object3D, MeshRenderer, PlaneGeometry, LitMaterial, Vector3 } from '@orillusion/core'
import { ClothSoftbody } from '@orillusion/physics'

let object = new Object3D();
let mr = object.addComponent(MeshRenderer);

// 设置平面的法向量，它决定了布料四个角的位置
mr.geometry = new PlaneGeometry(5, 5, 10, 10, Vector3.Z_AXIS);
mr.material = new LitMaterial();

// 添加布料组件
let clothSoftbody = object.addComponent(ClothSoftbody);
```
::: tip
请注意：`ClothSoftbody` 组件仅支持 `PlaneGeometry` 类型的几何体。
:::

通过设置 `fixNodeIndices` 属性，可以固定特定的布料节点：
```ts
clothSoftbody.fixNodeIndices = ['leftTop', 'rightTop'];
```

在布料初始化完毕后，可以继续固定节点：
```ts
clothSoftbody.applyFixedNodes(['leftBottom', 'rightBottom']);
```

通过 `anchorIndices` 属性设置锚定节点，并指定附加的刚体：
```ts
clothSoftbody.anchorIndices = ['top'];
clothSoftbody.anchorRigidbody = rigidbody;

// 附加到刚体后软体的中心点与旋转将会与刚体变换一致。
clothSoftbody.anchorPosition.set(0, 5, 0); // 通过 anchorPosition 设置相对位置
clothSoftbody.anchorRotation.set(0, 90, 0); // 通过 anchorRotation 设置相对旋转
```

::: tip
锚点设置时会自动将软体附加到刚体，并可以设置 `influence` 和 `disableCollision` 等属性。
:::


如果需要移除所有锚点，使软体从锚定的刚体上脱落，可以调用 `clearAnchors()` 方法：
```ts
clothSoftbody.clearAnchors();
```

### 示例
>
<Demo src="/examples/physics/Cloth.ts"></Demo>

<<< @/public/examples/physics/Cloth.ts


## 绳索软体 [RopeSoftbody](/physics/classes/RopeSoftbody)

绳索软体组件 `RopeSoftbody` 主要用于模拟绳索的柔性动态行为，支持的 `API` 如下：

| API | 类型 | 描述 |
| --- | --- | --- |
| fixeds | `number` | 绳索固定选项，`0`：两端不固定，`1`：起点固定，`2`：终点固定，`3`：两端固定|
| fixNodeIndices | `number[]` | 固定节点索引，与 `fixeds` 属性作用相同，但可以更自由的控制任意节点 |
| elasticity | `number` | 绳索弹性，值越大弹性越低，默认值为 `0.5` |
| anchorRigidbodyHead | `Rigidbody` | 绳索起点处锚定的刚体 |
| anchorRigidbodyTail | `Rigidbody` | 绳索终点处锚定的刚体 |
| anchorOffsetHead | `Vector3` | 锚点的起点偏移量 |
| anchorOffsetTail | `Vector3` | 锚点的终点偏移量 |
| setElasticity() | `void` | 设置绳索弹性 |
| buildRopeGeometry() | `GeometryBase` | 构建绳索（线条）几何体的静态方法 |

### 基本用法

为对象添加 `RopeSoftbody` 组件：

```ts
import { Object3D, MeshRenderer, PlaneGeometry, LitMaterial, Vector3 } from '@orillusion/core'
import { RopeSoftbody } from '@orillusion/physics'

let object = new Object3D();
let mr = object.addComponent(MeshRenderer);
let segmentCount = 10;
let startPos = new Vector3(0, 10, 0);
let endPos = new Vector3(10, 10, 0);
// 设置绳索几何体
mr.geometry = RopeSoftbody.buildRopeGeometry(segmentCount, startPos, endPos);
mr.material = new LitMaterial();
mr.material.topology = 'line-list'; // 需要设置为 line 渲染模式 // [!code highlight] 

// 添加绳索组件
let ropeSoftbody = object.addComponent(RopeSoftbody);
```
::: tip
`RopeSoftbody` 组件仅支持 `line` 类型的几何体。为方便使用，组件内提供了 `buildRopeGeometry()` 静态方法。   
注意添加材质时需要将拓扑结构 `topology` 设置为 `'line-list'`。
:::


固定绳索节点：
```ts
ropeSoftbody.fixeds = 1; // 固定绳索起点
```

末端连接刚体：
```ts
ropeSoftbody.anchorRigidbodyTail = rigidbody;
ropeSoftbody.anchorOffsetTail.set(0, 1, 0); // 附加到刚体后绳索的终点将会与刚体位置一致，设置 anchorOffsetTail 以调整相对位置
```

### 示例
>
<Demo src="/examples/physics/Rope.ts"></Demo>

<<< @/public/examples/physics/Rope.ts


## 软体配置

在软体创建过程中，内部配置了一些基础的参数来控制软体的行为，包括位置迭代、阻尼系数、刚性系数等。开发者可以通过操作原生的 `Ammo.js` 软体进行自定义配置，确保软体具有理想的物理效果：
```ts
// 异步等待软体初始化完成
let bt = await clothSoftbody.wait()
// native softbody API
let sbConfig = bt.get_m_cfg();
sbConfig.set_kDF(0.2); // 设置动力学系数
sbConfig.set_kDP(0.01); // 设置阻尼系数
sbConfig.set_kLF(0.02); // 设置升力系数
sbConfig.set_kDG(0.001); // 设置阻力系数
...
```

::: tip
软体组件的属性仅在初始化时设置有效。
:::