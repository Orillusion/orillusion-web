# Class: FXAAPost

FXAA(fast approximate antialiasing)屏幕抗锯齿
一种比较注重性能的形变抗锯齿方式，只需要一次 Pass 就能得到结果，FXAA 注重快速的视觉抗锯齿效果，而非追求完美的真实抗锯齿效果。
```
//配置相关参数
let cfg = {@link Engine3D.setting.render.postProcessing.fxaa};
let renderJob = new ForwardRenderJob(this.scene);
Engine3D.startRender(renderJob);
```

## Hierarchy

- `PostBase`

  ↳ **`FXAAPost`**


### Constructors

- [constructor](FXAAPost.md#constructor)

## Constructors

### constructor

• **new FXAAPost**()

#### Overrides

PostBase.constructor

#### Defined in

[src/engine/gfx/renderJob/post/FXAAPost.ts:24](https://github.com/Orillusion/orillusion/blob/main/src/engine/gfx/renderJob/post/FXAAPost.ts#L24)
