# 角色控制器与载具

Rapier 版内置了两个高层组件：用于第一/第三人称移动的 **角色控制器 `CharacterController`**，以及用于车辆模拟的 **载具控制器 `VehicleController`**。

## 角色控制器（CharacterController）

角色控制器是一个运动学控制器，自带爬坡、台阶、贴地等处理，适合做可走动的玩家角色。通过 `controller.move(displacement)` 驱动移动：

```ts
import { Object3D, Vector3 } from '@orillusion/core';
import { CharacterController } from '@orillusion/physics-rapier';

const player = new Object3D();
const cc = player.addComponent(CharacterController);
cc.maxSlopeClimbAngle = (50 * Math.PI) / 180; // 最大可爬坡角（弧度）
cc.snapToGround = 0.5;                          // 贴地吸附距离
scene.addChild(player);

// 在每帧逻辑中按输入驱动移动（位移向量，已含重力/跳跃分量）
cc.move(new Vector3(vx * speed * dt, vy * dt, vz * speed * dt));
```

| 成员 | 说明 |
| --- | --- |
| `move(displacement)` | 以位移向量驱动角色（自动处理碰撞滑动、爬坡、台阶） |
| `maxSlopeClimbAngle` | 最大可攀爬坡度（弧度） |
| `snapToGround` | 下台阶时的贴地吸附距离 |

> 重力与跳跃需自行在位移的 Y 分量中累加（积累竖直速度 `vy`，落地后清零）。

## 示例

<Demo src="/demos/physics-rapier/Sample_rapierCharacter.ts"></Demo>

<<< @/public/demos/physics-rapier/Sample_rapierCharacter.ts

## 载具控制器（VehicleController）

载具控制器基于射线车轮模型：给底盘刚体添加 `VehicleController`，再逐个 `addWheel` 添加车轮，运行时通过 `setEngineForce` / `setBrake` / `setSteering` 控制。

```ts
import { Object3D, Vector3 } from '@orillusion/core';
import { Rigidbody, BodyType, CollisionShapeUtil, VehicleController } from '@orillusion/physics-rapier';

// 底盘（动态刚体）
const chassis = new Object3D();
chassis.y = 2;
const crb = chassis.addComponent(Rigidbody);
crb.bodyType = BodyType.Dynamic;
crb.shape = CollisionShapeUtil.createBoxShape(chassis, new Vector3(2, 0.6, 4));
scene.addChild(chassis);

// 载具控制器 + 四个车轮
const vc = chassis.addComponent(VehicleController);
const wheelOpts = {
    suspensionRestLength: 0.3,
    radius: 0.4,
    stiffness: 30,
    dampingCompression: 4.4,
    dampingRelaxation: 2.3,
    frictionSlip: 1000,
};
vc.addWheel({ ...wheelOpts, chassisConnection: new Vector3(-1, -0.3, -1.5) }); // 0 前左
vc.addWheel({ ...wheelOpts, chassisConnection: new Vector3( 1, -0.3, -1.5) }); // 1 前右
vc.addWheel({ ...wheelOpts, chassisConnection: new Vector3(-1, -0.3,  1.5) }); // 2 后左
vc.addWheel({ ...wheelOpts, chassisConnection: new Vector3( 1, -0.3,  1.5) }); // 3 后右
```

运行时控制（按车轮索引）：

```ts
// 后轮驱动
vc.setEngineForce(engineForce, 2);
vc.setEngineForce(engineForce, 3);
// 前轮转向
vc.setSteering(steerAngle, 0);
vc.setSteering(steerAngle, 1);
// 刹车（所有轮）
for (let i = 0; i < vc.numWheels(); i++) vc.setBrake(brakeForce, i);
```

| 方法 | 说明 |
| --- | --- |
| `addWheel(opts)` | 添加一个车轮（含悬挂、半径、连接点等） |
| `setEngineForce(force, wheelIndex)` | 设置某轮的引擎驱动力 |
| `setBrake(force, wheelIndex)` | 设置某轮的刹车力 |
| `setSteering(angle, wheelIndex)` | 设置某轮的转向角 |
| `numWheels()` | 车轮数量 |


## 示例

<Demo src="/demos/physics-rapier/Sample_rapierVehicle.ts"></Demo>

<<< @/public/demos/physics-rapier/Sample_rapierVehicle.ts


## 调试与拖拽

物理插件还提供了开箱即用的调试线框与鼠标拖拽工具：

```ts
import { Graphic3D } from '@orillusion/graphic';

// 实时绘制碰撞体线框
const graphic = new Graphic3D();
scene.addChild(graphic);
Physics.initDebugDrawer(graphic, { enable: true, updateFreq: 1 });

// 允许用鼠标拖拽动态刚体
Physics.enableDragger(view);
```
