# 物理总览（Rapier）

`@orillusion/physics-rapier` 是基于 [Rapier](https://rapier.rs/)（Rust → WASM）的物理插件，是新项目**推荐使用**的物理方案。它与基于 Ammo 的 [@orillusion/physics](/guide/physics/Readme.md) 相互独立，可以在同一项目中共存。

::: tip 该用哪个？
- **新项目 / 刚体、关节、角色、载具、射线查询** → 推荐 `@orillusion/physics-rapier`（体积更小、自带官方类型、确定性模拟、内置查询/角色/载具 API）。
- **软体（布料、绳索）** → 目前仍需使用 `@orillusion/physics`（Ammo），Rapier 版暂不支持软体。
:::

## 与 Ammo 版对比

| | `@orillusion/physics`（Ammo） | `@orillusion/physics-rapier` |
| --- | --- | --- |
| 后端 | Bullet 2.x（asm.js） | Rapier（Rust → WASM） |
| 体积 | ~1.95 MB | ~600 KB |
| 类型定义 | 社区维护 | 官方 |
| 确定性 | 否 | 是 |
| 射线 / 扫掠 / 重叠查询 | 无公开 API | `PhysicsQuery.*` |
| 角色控制器 | 无 | `CharacterController` |
| 载具 | 裸 `btRaycastVehicle` | `VehicleController` |
| 软体 | 支持（布料、绳索） | 不支持 |
| 快照 / 回放 | 部分 | `Physics.snapshot / restore` |

## 安装

### 通过 NPM
```bash
npm install @orillusion/core --save
npm install @orillusion/physics-rapier --save
```
```ts
import { Engine3D } from '@orillusion/core';
import { Physics, Rigidbody, BodyType, CollisionShapeUtil } from '@orillusion/physics-rapier';
```

### 通过 CDN（ESModule）
```html
<script type="module">
  import { Engine3D } from 'https://unpkg.com/@orillusion/core/dist/orillusion.es.js'
  import { Physics } from 'https://unpkg.com/@orillusion/physics-rapier/dist/physics-rapier.es.js'
</script>
```

## 快速上手

物理系统需要先 `await Physics.init()` 初始化，并在引擎渲染循环中调用 `Physics.update()` 推进模拟：

```ts
import { Engine3D, Object3D, MeshRenderer, BoxGeometry, LitMaterial, Vector3 } from '@orillusion/core';
import { Physics, Rigidbody, BodyType, CollisionShapeUtil } from '@orillusion/physics-rapier';

// 初始化物理世界（异步，需加载 WASM）
await Physics.init();

// 在渲染循环里推进物理
const engine = await Engine3D.init({ renderLoop: () => Physics.update() });

// ……创建 scene / camera / view……

// 一个会下落的动态立方体
const cube = new Object3D();
cube.y = 5;
const mr = cube.addComponent(MeshRenderer);
mr.geometry = new BoxGeometry(1, 1, 1);
mr.material = new LitMaterial();

const rb = cube.addComponent(Rigidbody);
rb.bodyType = BodyType.Dynamic;
rb.mass = 1;
rb.shape = CollisionShapeUtil.createBoxShape(cube, new Vector3(1, 1, 1));
scene.addChild(cube);
```

## 模块一览

| 类 | 用途 | 教程 |
| --- | --- | --- |
| `Physics` | 物理世界单例：初始化、步进、重力、快照 | 本页 |
| `Rigidbody` / `BodyType` | 刚体组件（动态 / 静态 / 运动学） | [刚体与碰撞形状](/guide/physics-rapier/rigidbody.md) |
| `CollisionShapeUtil` | 创建各类碰撞形状 | [刚体与碰撞形状](/guide/physics-rapier/rigidbody.md) |
| `HingeJoint` / `SliderJoint` / `FixedJoint` / `SphericalJoint` / `GenericJoint` / `RopeJoint` / `SpringJoint` | 关节约束 | [关节](/guide/physics-rapier/joint.md) |
| `Rigidbody` 事件 | 触发器与碰撞回调 | [触发器与事件](/guide/physics-rapier/events.md) |
| `PhysicsQuery` | 射线 / 扫掠 / 重叠查询 | [物理查询](/guide/physics-rapier/query.md) |
| `CharacterController` / `VehicleController` | 角色控制器 / 载具 | [角色与载具](/guide/physics-rapier/character_vehicle.md) |

## 从 Ammo 版迁移

主要改动：

```ts
- import { Physics, Rigidbody, ColliderComponent, BoxColliderShape } from '@orillusion/physics';
+ import { Physics, Rigidbody, BodyType, CollisionShapeUtil } from '@orillusion/physics-rapier';
```

| Ammo 版 | Rapier 版 |
| --- | --- |
| `rb.mass = 0` 表示静态 | `rb.bodyType = BodyType.Static`（`mass = 0` 也可） |
| `ColliderComponent` + `BoxColliderShape` | `rb.shape = CollisionShapeUtil.createBoxShape(obj, ...)`（无需独立碰撞组件） |
| `setLinearFactor(x, y, z)` | `rb.lockTranslations(x === 0, y === 0, z === 0)` |
| `Physics.world.rayTest(...)`（私有） | `PhysicsQuery.raycast(origin, dir, { ... })` |
| 关节 `HingeConstraint` / `SliderConstraint` 等 | 改名为 `HingeJoint` / `SliderJoint` 等 |
| `PointToPointConstraint` + `ConeTwistConstraint` | 统一为 `SphericalJoint` |
| 软体 `ClothSoftbody` / `RopeSoftbody` | 不支持，继续用 `@orillusion/physics` |

## 逃生舱（直接访问 Rapier）

需要引擎封装未暴露的 Rapier 原生能力时，可直接访问底层对象（这会放弃跨后端可移植性）：

```ts
import RAPIER from '@dimforge/rapier3d-compat';

const native = rb.native;     // Rapier 原生 RigidBody
const world = Physics.world;  // Rapier 原生 World
world.integrationParameters.numSolverIterations = 8;
```
