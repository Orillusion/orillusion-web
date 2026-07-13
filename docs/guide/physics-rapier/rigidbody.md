# 刚体与碰撞形状

刚体（`Rigidbody`）是物理模拟的核心组件，碰撞形状（通过 `CollisionShapeUtil` 创建）描述物体参与碰撞的几何外形。

## 刚体类型

通过 `rb.bodyType` 设置刚体类型：

| 类型 | 说明 |
| --- | --- |
| `BodyType.Dynamic` | 动态刚体，受重力与碰撞驱动，需设置 `mass` |
| `BodyType.Static` | 静态刚体，永不移动（地面、墙体等） |
| `BodyType.Kinematic` | 运动学刚体，由代码驱动位置，不受力影响但会推动动态物体 |

```ts
import { Object3D, MeshRenderer, BoxGeometry, LitMaterial, Vector3 } from '@orillusion/core';
import { Rigidbody, BodyType, CollisionShapeUtil } from '@orillusion/physics-rapier';

// 静态地面
const floor = new Object3D();
const fb = floor.addComponent(Rigidbody);
fb.bodyType = BodyType.Static;
fb.shape = CollisionShapeUtil.createPlaneShape(250, 0.05);
scene.addChild(floor);

// 动态立方体
const box = new Object3D();
box.y = 5;
const rb = box.addComponent(Rigidbody);
rb.bodyType = BodyType.Dynamic;
rb.mass = 1;
rb.shape = CollisionShapeUtil.createBoxShape(box, new Vector3(1, 1, 1));
scene.addChild(box);
```

## 碰撞形状

`CollisionShapeUtil` 提供了常见形状的工厂方法：

| 方法 | 形状 |
| --- | --- |
| `createBoxShape(obj, halfExtents)` | 立方体 |
| `createSphereShape(obj, radius)` | 球体 |
| `createCapsuleShape(...)` | 胶囊体 |
| `createCylinderShape(...)` | 圆柱体 |
| `createConeShape(...)` | 圆锥体 |
| `createPlaneShape(size, thickness)` | 平面 |
| `createConvexHullShape(...)` | 凸包 |
| `createTrimeshShape(...)` | 三角网格（静态） |
| `createHeightfieldShape(...)` | 高度场地形 |
| `createCompoundShape(...)` | 复合形状 |

```ts
rb.shape = CollisionShapeUtil.createSphereShape(sphere, 1);
```

## 常用属性与方法

| 成员 | 说明 |
| --- | --- |
| `bodyType` | 刚体类型（见上） |
| `mass` | 质量（动态刚体） |
| `shape` | 碰撞形状 |
| `native` | 底层 Rapier 原生 `RigidBody`（逃生舱） |
| `enableCcd(true)` | 开启连续碰撞检测（高速物体防穿透） |
| `lockTranslations(x, y, z)` | 锁定指定轴的平移 |
| `lockRotations(x, y, z)` | 锁定指定轴的旋转 |

```ts
// 高速子弹：开启 CCD 防止穿透
rb.enableCcd(true);

// 仅允许在 XZ 平面移动（锁定 Y 轴平移）—— 等价于 Ammo 的 setLinearFactor(1,0,1)
rb.lockTranslations(false, true, false);
```

> 形状创建依赖物体当前的几何/缩放，建议在设置好 `MeshRenderer` 与 `Transform` 后再创建 `shape`。

## 示例

<Demo src="/demos/physics-rapier/Sample_rigidbody.ts"></Demo>

<<< @/public/demos/physics-rapier/Sample_rigidbody.ts
