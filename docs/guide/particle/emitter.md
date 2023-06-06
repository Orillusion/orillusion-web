---
aside: false
---
# 发射器模块
发射器模块是粒子系统中的一个重要组成部分，用于定义和控制粒子的发射行为。它决定了粒子在空间中的初始位置、速度、方向以及其他属性，从而影响整个粒子系统的效果。

## 使用方式
发射器模块是粒子仿真器必备模块，以下代码展示如何为粒子仿真器添加一个发射器模块:
```ts
let emitter = simulator.addModule(ParticleEmitterModule);
// 设置最大粒子数
emitter.maxParticle = 10000;
// 设置持续发射时间
emitter.duration = 10;
// 设置发射速率(x个/秒)
emitter.emissionRate = 1000;
// 设置粒子生命周期大小
emitter.startLifecycle.setScalar(1);
// 设置发射器发射形状
emitter.shapeType = ShapeType.Box;
// 设置发射器发射形状的大小
emitter.boxSize = new Vector3(10, 10, 10);
// 设置发射器从发射形状的哪个位置发射
emitter.emitLocation = EmitLocation.Edge;
```

粒子发射器模块 `ParticleEmitterModule` 包含一些重要的发射参数，各参数作用如下：
| 名称 | 描述 |
| :---: | --- |
| maxParticle | 最大粒子数 |
| duration | 粒子发射持续时间(单位:秒) |
| emissionRate | 发射速率(每秒发射多少个粒子) |
| startLifecycle | 粒子生命周期(单位:秒) |
| shapeType | 发射器形状（圆形、矩形、球体、锥体） |
| emitLocation | 发射位置（基于 实体，表面，边缘） |
| angle | 角度(当发射器形状为锥体时有效) |
| radius | 半径(当发射器形状为圆形、球体、锥体时有效) |
| boxSize | 矩形/盒子 大小 |

<Demo :height="500" src="/demos/particle/ParticleEmitter.ts"></Demo>

<<< @/public/demos/particle/ParticleEmitter.ts
