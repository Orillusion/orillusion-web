# 粒子动画
粒子动画由组件 [ParticleSystem](/api/classes/ParticleSystem) 驱动，通过 `ParticleSimulator` 使用 `ComputeShader` 模拟粒子运动轨迹，实现粒子动画特效。

## 基本模块
使用 `ParticleSystem` 组件时，需要指定一个粒子仿真器，目前仅 `ParticleStandSimulator` 仿真器可用，该粒子仿真器有以下基本模块：

| 名称 | 描述 |
| :---: | --- |
| ParticleEmitModule | 粒子发射器模块(必备模块) |
| ParticleOverLifeScaleModule | 粒子生命周期内大小变化模块 |
| ParticleOverLifeSpeedModule | 粒子生命周期内速度变化模块 |
| ParticleOverLifeRotationModule | 粒子生命周期内旋转变化模块 |
| ParticleGravityModifierModule | 粒子全局的重力变化模块 |
| ParticleRotationModule | 粒子角速度旋转模块 |
| ParticleTextureSheetModule | 粒子图集动画模块 |

## 基本使用
<Demo :height="500" src="/demos/animation/particleAnim.ts"></Demo>

<<< @/public/demos/animation/particleAnim.ts

以火焰Demo为例，首先给场景指定的对象添加 `ParticleSystem` 组件，并指定粒子的形状，材质:
```ts
// 创建一个3D对象实体，并添加到场景
let obj = new Object3D();
scene.addChild(obj);

// 为该对象添加 ParticleSystem 组件
let particleSystem = obj.addComponent(ParticleSystem);

// 创建粒子材质，并加载指定的粒子纹理
let material = new ParticleMaterial();
material.baseMap = await Engine3D.res.loadTexture('https://cdn.orillusion.com/particle/fx_a_glow_003.png');

// 设置单个粒子的形态
particleSystem.geometry = new PlaneGeometry(5, 5, 1, 1, Vector3.Z_AXIS);
particleSystem.material = material;

```

为 `ParticleSystem` 组件指定要使用的仿真器 `ParticleStandSimulator`:
```ts
// 使用指定仿真器
let simulator = particleSystem.useSimulator(ParticleStandSimulator);

// 添加发射器模块(必要模块，不可缺少)
let emitter = simulator.addModule(ParticleEmitModule);
// 设置最大粒子数
emitter.maxParticle = 1 * 10000;
// 设置持续发射时间
emitter.duration = 10;
// 设置发射速率(x个/秒)
emitter.emissionRate = 50;
// 设置粒子生命周期大小
emitter.startLifecycle.setScalar(1);
// 设置发射器发射形状
emitter.shapeType = ShapeType.Box;
// 设置发射器从发射形状的哪个位置发射(这里从外壳发射)
emitter.emitLocation = EmitLocation.Shell;
// 设置发射器大小
emitter.boxSize = new Vector3(1, 0, 1);
```

为仿真器添加粒子模块，并配置属性参数:
```ts
// 添加重力修改模块(给予一个向上的微重力)
simulator.addModule(ParticleGravityModifierModule).gravity = new Vector3(0, 0.2, 0);

// 添加生命周期色彩模块
simulator.addModule(ParticleOverLifeColorModule).colorSegments = [
    new Vector4(1, 0.3, 0, 1),
    new Vector4(0, 0.6, 1, 0)
];
```

开始播放粒子:
```ts
// 开始播放
particleSystem.play();
```
