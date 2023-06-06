# 简介
粒子系统是一种模拟大量粒子行为和运动的技术，这些粒子可以是虚拟的对象，如粉尘、火焰、水滴，也可以是抽象的元素，如光点、星星、雪花等，粒子系统通过模拟每个粒子的运动、外观和相互作用，生成各种逼真的动态效果。

## 安装
粒子系统以独立插件模块的形式提供，我们可以通过 `NPM` 和 `CDN` 链接两种方式来引入粒子系统插件:

### 1. 通过 `NPM` 包安装
```bash
npm install @orillusion/core --save
npm install @orillusion/particle --save
```
```ts
import { Engine3D } from "@orillusion/core"
import { ParticleSysteam } from "@orillusion/particle"
```

### 2. 通过 `CDN` 链接引入
推荐使用 `ESModule` 构建版本
```html
<script type="module">
  import { Engine3D } from "https://unpkg.com/@orillusion/core/dist/orillusion.es.js" 
  import { ParticleSysteam } from "https://unpkg.com/@orillusion/particle/dist/particle.es.js" 
</script>
```

或通过 `<script>` 加载构建 `UMD` 版本，在全局 `Orillusion` 变量中获取 `ParticleSysteam` 模块：
```html
<script src="https://unpkg.com/@orillusion/core/dist/orillusion.umd.js"></script>
<script src="https://unpkg.com/@orillusion/particle/dist/particle.umd.js"></script>
<script>
  const {Engine3D, ParticleSysteam} = Orillusion
</script>
```

## 使用方式
### 1、添加粒子系统组件
首选创建一个实体对象，并添加粒子系统组件：
```ts
let obj = new Object3D();
let ps = obj.addComponent(ParticleSystem);
scene.addChild(obj);
```

### 2、设置单个粒子的几何形状
设置单个粒子的几何形状，例如使用一个`PlaneGeometry`:
```ts
ps.geometry = new PlaneGeometry(1, 1, 1, 1, Vector3.Z_AXIS);
```

### 3、设置粒子材质:
设置粒子材质，并加载需要使用的纹理贴图:
```ts
let material = new ParticleMaterial();
material.baseMap = await Engine3D.res.loadTexture('particle/fx_a_glow_003.png');
ps.material = material;
```

### 4、选择仿真器:
为 `ParticleSystem` 组件指定要使用的仿真器，目前仅 `ParticleStandSimulator` 仿真器可用:
```ts
let simulator = ps.useSimulator(ParticleStandSimulator);
```

### 5、添加发射器模块
为 `ParticleStandSimulator` 添加一个必备的发射器模块，并设置发射参数：
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
emitter.shapeType = ShapeType.Sphere;
// 设置发射器发射形状的半径
emitter.radius = 10;
// 设置发射器从发射形状的哪个位置发射
emitter.emitLocation = EmitLocation.Shell;
```

### 6、播放
开始播放粒子动画
```ts
ps.play();
```

<Demo :height="500" src="/demos/particle/ParticleSystem.ts"></Demo>

<<< @/public/demos/particle/ParticleSystem.ts
