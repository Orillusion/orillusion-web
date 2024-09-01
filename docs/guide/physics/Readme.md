# 物理总览
物理系统是对真实世界的模拟，使场景中的模型对象可以像真实环境中的物体一样，拥有质量并正确响应重力及各种碰撞。引擎以扩展的形式 [@orillusion/physics](/physics/) 提供了物理引擎支持（基于 [Ammo.js](https://github.com/kripken/ammo.js)），并封装了常用的组件，可以帮助用户在项目中模拟物理系统。

## 安装
跟引擎方法一致，我们可以通过 `NPM` 和 `CDN` 链接两种方式来引入物理插件:

### 1. 通过 `NPM` 包安装
```bash
npm install @orillusion/core --save
npm install @orillusion/physics --save
```
```ts
import { Engine3D } from "@orillusion/core"
import { Physics } from "@orillusion/physics"
```

### 2. 通过 `CDN` 链接引入
推荐使用 `ESModule` 构建版本
```html
<script type="module">
  import { Engine3D } from "https://unpkg.com/@orillusion/core/dist/orillusion.es.js" 
  import { Physics } from "https://unpkg.com/@orillusion/physics/dist/physics.es.js" 
</script>
```

或通过 `<script>` 加载构建 `UMD` 版本，在全局 `Orillusion` 变量中获取 `Physics` 模块：
```html
<script src="https://unpkg.com/@orillusion/core/dist/orillusion.umd.js"></script>
<script src="https://unpkg.com/@orillusion/physics/dist/physics.umd.js"></script>
<script>
  const {Engine3D, Physics} = Orillusion
</script>
```

## 物理环境的运行
目前 [Physics](/physics/classes/Physics) 支持的参数及方法如下表所示：

| API | 描述 |
| --- | --- |
| init(): void | 初始化物理引擎 |
| initDebugDrawer(): void | 初始化物理调试器 |
| update(): void | 更新物理系统，需要在 loop 主体中调用 |
| gravity: Vector3 | 重力参数 |
| isStop: boolean | 控制物理世界是否暂停运行 |
| debugDrawer: PhysicsDebugDrawer | 可视化调试工具 |
| physicsDragger: PhysicsDragger | 拖拽交互工具 |
| world: Ammo.btDiscreteDynamicsWorld | Ammo.js 原生物理世界 |

 `init()` 初始化配置参数：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| useSoftBody | `boolean` | 是否启用软体模拟 |
| useDrag | `boolean` | 是否启用拖拽交互功能 |
| physicBound | `Vector3` | 物理世界边界 |
| destroyObjectBeyondBounds | `boolean` | 超出边界时销毁3D对象 |

### 启动物理系统
我们可以初始化 `init()` 来开启物理系统，并通过在渲染主循环中调用 `update()` 实现物理世界的运行：
```ts
import { Engine3D } from '@orillusion/core'
import { Physics } from '@orillusion/physics'

await Physics.init();
await Engine3D.init({
  renderLoop: () => Physics.update()
});
```

>通过以上方法开启并运行物理系统后，引擎会在每一帧渲染时，根据设定的参数计算并更新物体模型对物理世界的实际响应。

### 暂停与恢复
```ts
Physics.isStop = !Physics.isStop;
```


### 重力环境模拟
默认重力为 `Vector3(0, -9.8, 0)`（地球重力）。自定义重力只需修改 `Physics.gravity`：
```ts
Physics.gravity = new Vector3(0, 0, 0); // 无重力环境
```

## 辅助功能
- **物理可视化**：为了可视化物理对象，我们可以在引擎启动后初始化物理可视化调试器，需要为其传入 `Graphic3D` 对象：
```ts
const graphic3D = new Graphic3D();
scene.addChild(graphic3D);
Physics.initDebugDrawer(graphic3D, { enable: true });
```

::: details 使用 dat 控制调试器
```ts
import dat from "dat.gui";

let gui = new dat.GUI();
let f = gui.addFolder("PhysicsDebugDrawer");
f.add(Physics.debugDrawer, 'enable').listen(); // 开启或关闭调试功能
f.add(Physics.debugDrawer, 'debugMode', Physics.debugDrawer.debugModeList); // 调试模式
f.add(Physics.debugDrawer, 'updateFreq', 1, 360, 1); // 线条渲染的频率（每帧）
f.add(Physics.debugDrawer, 'maxLineCount', 100, 33000, 100); // 设置渲染的最大线条数量
:::

- **物理对象交互**：如果需要使用鼠标与刚体进行拖拽控制，可以在 `init()` 中将此功能开启：
```ts
await Physics.init({ useDrag: true });
```

> 开启拖拽器后，可以通过 `Physics.physicsDragger` 对其进行相关设置。

## 物理工具
物理系统提供了一些工具，帮助开发者更灵活地进行定制开发。
- [CollisionShapeUtil](/physics/classes/CollisionShapeUtil)：提供多种方法来创建不同类型的碰撞形状。
- [ContactProcessedUtil](/physics/classes/ContactProcessedUtil)：用于注册和管理物理对象之间碰撞事件的工具类。
- [RigidBodyMapping](/physics/classes/RigidBodyMapping)：管理 `Ammo` 刚体与三维模型对象映射关系的工具类，需手动指定映射。
- [RigidBodyUtil](/physics/classes/RigidBodyUtil)：提供多种与 `Ammo` 刚体相关的实用方法，简化刚体的创建和各项操作。
- [TempPhyMath](/physics/classes/TempPhyMath)：临时物理数学工具类，提供 `Ammo` 数学对象（如向量和四元数）的实例，并支持与引擎数据类型相互转换。


## 原生扩展
当前引擎只封装了几个常用的组件，如果需要实现复杂的物理模拟，用户可以直接引用 `Ammo` 来使用原生的物理世界对象，通过 `Ammo.js` 自身提供的原生 `API` 实现更多自定化需求：
```ts
import { Ammo, Physics } from "@orillusion/physics";

// init physics
await Physics.init();

// ...

// native Ammo shape
let boxShape = new Ammo.btBoxShape(
  new Ammo.btVector3(1, 1, 1)
);
// native Ammo transform
let transform = new Ammo.btTransform();
```
更多用法详见 [Ammo API](/physics/modules/Ammo)

## 简单示例
这里我们通过模拟一个正方体掉落在地上的过程，看一下物理系统具体可以提供哪些效果。

<Demo src="/demos/physics/demo1.ts"></Demo>

<<< @/public/demos/physics/demo1.ts

依照前面章节所介绍的流程，我们首先将场景、相机、环境贴图、光照等基础组件初始化并设定好参数。
接下来，我们创建一个立方体，并为其添加刚体组件并指定碰撞形状，使之拥有质量并能正确响应重力与碰撞。

::: code-group

```ts [推荐用法]
const obj = new Object3D();
let mr = obj.addComponent(MeshRenderer);
mr.geometry = new BoxGeometry(5, 5, 5);
mr.material = new LitMaterial();
// 响应重力并设置碰撞形状
let rigidbody = obj.addComponent(Rigidbody);
rigidbody.mass = 10;
rigidbody.shape = Rigidbody.collisionShape.createShapeFromObject(obj);

scene3D.addChild(obj);
```

```ts [旧版用法]
const obj = new Object3D();
let mr = obj.addComponent(MeshRenderer);
mr.geometry = new BoxGeometry(5, 5, 5);
mr.material = new LitMaterial();
// 响应重力
let rigidbody = obj.addComponent(Rigidbody);
rigidbody.mass = 10;
// 设置碰撞盒子
let collider = obj.addComponent(ColliderComponent);
collider.shape = new BoxColliderShape();
collider.shape.size = new Vector3(5, 5, 5);

scene3D.addChild(obj);
```

:::

之后，我们在正方体下方创建一个平面，作为地面，同样为其添加刚体组件并指定碰撞形状。由于地面是静止的，所以我们设置其质量为 `0`。

::: code-group

```ts [推荐用法]
const obj = new Object3D();
let mr = obj.addComponent(MeshRenderer);
mr.geometry = new PlaneGeometry(size.x, size.y);
mr.material = new LitMaterial();
// 静态刚体，不响应重力
let rigidbody = obj.addComponent(Rigidbody);
rigidbody.mass = 0;
rigidbody.shape = Rigidbody.collisionShape.createShapeFromObject(obj);

scene.addChild(obj);
```

```ts [旧版用法]
const obj = new Object3D();
let mr = obj.addComponent(MeshRenderer);
mr.geometry = new PlaneGeometry(size.x, size.y);
mr.material = new LitMaterial();
// 静态刚体，不响应重力
let rigidbody = obj.addComponent(Rigidbody);
rigidbody.mass = 0;
// 设置碰撞盒子
let collider = obj.addComponent(ColliderComponent);
collider.shape = new BoxColliderShape();
collider.shape.size = new Vector3(size.x, 0.1, size.y);

scene.addChild(obj);
```

:::

物理系统启动后，引擎立即根据物体质量响应其重力感应，当立方体和地面的碰撞体形状产生交集时，我们可以看到真实的物体落地碰撞效果。更多[物理示例](/example/physics/Dominoes)。
