# 基本模块
粒子系统的仿真器可添加各种属性模块，每个属性模块包含一种功能实现和与之相关的参数，目前内置有:
- `ParticleOverLifeScaleModule` - 粒子生命周期内大小变化模块
- `ParticleOverLifeSpeedModule` - 生命周期内速度变化模块
- `ParticleOverLifeRotationModule` - 生命周期内自旋变化模块
- `ParticleOverLifeColorModule` - 生命周期内颜色变化模块
- `ParticleGravityModifierModule` - 重力变化模块
- `ParticleTextureSheetModule` - 纹理图集模块

## 大小变换模块
若想使单个粒子的大小在它自己的整个生命周期内，随着时间变换而变换时，可以给仿真器添加 `ParticleOverLifeScaleModule` 模块:
```ts
// 添加生命周期内大小变换模块
let overLifeScaleModule = simulator.addModule(ParticleOverLifeScaleModule);
// 设置大小变换参数，从起始的 1倍大小 到 结束时 3倍大小
overLifeScaleModule.scaleSegments = [
    new Vector4(1, 1, 1),
    new Vector4(3, 3, 3),
];
```

<Demo :height="500" src="/demos/particle/OverLifeScaleModule.ts"></Demo>

<<< @/public/demos/particle/OverLifeScaleModule.ts

## 内旋转变换模块
若想使单个粒子的旋转角度在它自己的整个生命周期内，随着时间变换而变换时，可以给仿真器添加 `ParticleOverLifeRotationModule` 模块:
```ts
// 添加生命周期内旋转变换模块
let overLifeRotationModule = simulator.addModule(ParticleOverLifeRotationModule);
// 设置自旋变换参数，从起始的 0° 到 结束时 270°
overLifeRotationModule.rotationSegments = [
    new Vector4(0, 0, 0),
    new Vector4(0, 90 * DEGREES_TO_RADIANS, 0),
];
```


<Demo :height="500" src="/demos/particle/OverLifeRotationModule.ts"></Demo>

<<< @/public/demos/particle/OverLifeRotationModule.ts

## 颜色变换模块
若想使单个粒子的颜色在它自己的整个生命周期内，随着时间变换而变换时，可以给仿真器添加 `ParticleOverLifeColorModule` 模块:
```ts
// 添加生命周期内颜色变换模块
let overLifeColorModule = simulator.addModule(ParticleOverLifeColorModule);
// 设置起始时颜色
overLifeColorModule.startColor = new Color(1, 1, 0);
// 设置起始时透明度
overLifeColorModule.startAlpha = 0.0;
// 设置结束时颜色
overLifeColorModule.endColor = new Color(0.1, 0.6, 1);
// 设置结束时透明度
overLifeColorModule.endAlpha = 1.0;
```


<Demo :height="500" src="/demos/particle/OverLifeColorModule.ts"></Demo>

<<< @/public/demos/particle/OverLifeColorModule.ts

## 重力修改模块
在模拟粒子运动轨迹时可以给仿真器添加一个重力修改模块 `ParticleGravityModifierModule` ，使粒子可以根据重力方向移动：
```ts
// 添加重力修改模块
let gravityModifier = simulator.addModule(ParticleGravityModifierModule);
gravityModifier.gravity = new Vector3(0, -0.98, 0);
```

<Demo :height="500" src="/demos/particle/GravityModifierModule.ts"></Demo>

<<< @/public/demos/particle/GravityModifierModule.ts

## 纹理图集模块
当需要给每个粒子提供不同纹理或者使单个粒子附带纹理动画时可以给仿真器添加一个纹理图集模块 `ParticleTextureSheetModule`:

```ts
// 添加纹理图集模块
let sheetModule = simulator.addModule(ParticleTextureSheetModule);
// 设置每列包含多少个子块
sheetModule.clipCol = 4;
// 设置整张纹理总共包含多少个子块
sheetModule.totalClip = 4 * 4;
// 设置整张纹理的宽度
sheetModule.textureWidth = material.baseMap.width;
// 设置整张纹理的高度
sheetModule.textureHeight = material.baseMap.height;
// 设置纹理动画播放速率
sheetModule.playRate = 1.0;
```

<Demo :height="500" src="/demos/particle/TextureSheetModule.ts"></Demo>

<<< @/public/demos/particle/TextureSheetModule.ts
