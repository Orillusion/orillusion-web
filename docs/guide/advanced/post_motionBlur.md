---
aside: false
---
# 运动模糊 - MotionBlurPost
真实相机在快门打开期间，相机或被拍摄的物体发生移动，画面就会沿运动方向拖出拖影。`MotionBlurPost` 计算每个像素从上一帧到当前帧在屏幕上移动的路径，并沿该路径多次采样取平均，产生真实的运动模糊。

像素的移动路径有两种来源：

| 模式 | 开启方式 | 效果 |
| --- | --- | --- |
| 相机运动模糊 | 默认 | 由深度和上一帧的视图投影矩阵重建，只模糊相机平移、环绕、推拉造成的位移；相机静止时，自身在运动的物体保持清晰 |
| [对象运动模糊](#对象运动模糊) | `setting.render.objectMotionVectors = true` | 每个物体额外绘制自身的屏幕空间速度，相机静止时运动的物体也会产生拖影 |

```ts
// 初始化引擎，可在此配置默认参数
let engine = await Engine3D.init({
    setting: {
        render: {
            postProcessing: {
                motionBlur: {
                    intensity: 0.5,
                    samples: 12,
                    maxBlurPixels: 64
                }
            }
        }
    }
});

// 添加后处理组件
let postProcessing = scene.addComponent(PostProcessingComponent);

// 添加 MotionBlurPost
let motionBlur = postProcessing.addPost(MotionBlurPost);

// 也可以通过 motionBlur 对象设置，与上面的引擎配置等价
motionBlur.intensity = 0.5; // 180° 快门
motionBlur.samples = 16;
```

[engine.setting.render.postProcessing.motionBlur](../../api/types/MotionBlurSetting.md) 配置参数：

| 参数 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `enable` | `boolean` | `false` | 是否启用，添加 / 移除 `MotionBlurPost` 时自动设置 |
| `intensity` | `number` | `0.5` | 快门系数。`1` 沿像素一整帧的移动距离模糊（60 Hz 下的 360° 快门），`0.5` 为电影常用的 180° 快门，`0` 关闭 |
| `samples` | `number` | `12` | 沿运动方向的采样次数，`2 ~ 32`，越多越平滑，开销也越大 |
| `maxBlurPixels` | `number` | `64` | 模糊长度的上限（像素），避免镜头切换或瞬移时整个画面被拖花 |
| `frameRateIndependent` | `boolean` | `true` | 按 60 Hz 的帧时长归一化模糊长度，使不同帧率下的效果一致；关闭后直接按每帧的实际位移模糊 |

### 镜头切换

相机瞬间切换到另一个位置时，上一帧与当前帧的位移很大，会产生一帧不自然的拖影（虽然已被 `maxBlurPixels` 限制）。切换后调用 `resetHistory()`，下一帧将不做模糊：

```ts
camera.object3D.localPosition = newPosition;
motionBlur.resetHistory();
```

开启 [对象运动模糊](#对象运动模糊) 时，`resetHistory()` 会同时重置 `MotionVectorPass`，重置后的那一帧也不绘制逐物体速度，跟随镜头一起瞬移的物体同样不会产生拖影。

### 示例：相机运动模糊

下面的示例中相机自动环绕场景旋转，转速越快拖影越长。拖动鼠标转动视角同样会产生模糊；把 `orbitSpeed` 调为 `0` 后画面恢复清晰。

<Demo src="/demos/advanced/Sample_motionBlur.ts"></Demo>

<<< @/public/demos/advanced/Sample_motionBlur.ts

## 对象运动模糊

默认模式下，模糊只根据相机的运动计算，场景中自己在运动的物体（旋转的螺旋桨、行驶的车辆等）在相机静止时不会产生拖影。在初始化引擎时开启 `objectMotionVectors`，即可让运动的物体按各自的速度产生模糊：

```ts
let engine = await Engine3D.init({
    setting: {
        render: {
            // 必须在初始化时设置
            objectMotionVectors: true
        }
    }
});

// 用法与相机运动模糊相同
let motionBlur = scene.addComponent(PostProcessingComponent).addPost(MotionBlurPost);
motionBlur.intensity = 1;
```

开启后，引擎会保留每个物体上一帧的模型矩阵，并为每个不透明材质额外生成一个速度子通道，由 `MotionVectorPass` 把每个像素的屏幕空间速度（相机运动 + 物体自身运动）写入速度纹理，`MotionBlurPost` 再沿该速度模糊。可以通过 `motionBlur.usesVelocityTexture` 确认当前是否在使用逐物体速度。

::: tip 注意
- `objectMotionVectors` 需要在 `Engine3D.init` 时设置：速度子通道在材质设置时生成，运行时再修改不会生效；
- 只有写入深度的不透明材质会生成速度，透明物体不会被模糊；
- 蒙皮动画与 Morph 形变动画的网格只计算整体的刚体运动（上一帧的模型矩阵 + 当前姿态），骨骼与形变本身的运动不产生模糊；
- 每个不透明物体每帧多绘制一次，场景物体较多时需要关注性能开销。
:::

### 示例：对象运动模糊

下面的示例中相机保持静止，螺旋桨旋转、单摆摆动、一排小球来回移动、立方体翻滚，它们各自按速度产生拖影，静止的地面和立柱保持清晰。

<Demo src="/demos/advanced/Sample_objectMotionBlur.ts"></Demo>

<<< @/public/demos/advanced/Sample_objectMotionBlur.ts
