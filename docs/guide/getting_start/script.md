---
aside: false
---
# 第一个脚本组件
`Orillusion` 的核心是 [组件系统](/guide/core/component)，除了引擎内置的基础组件，用户也可以通过编写自定义组件来扩充任意功能。这一节我们将学习如何利用自定义组件为物体添加动画脚本，比如为上一节创建的立方体添加旋转动画。先来看看最终的效果：我们为立方体添加了一个自定义 `RotateScript` 组件，使之绕 `Y` 轴连续转动。

<Demo :height="500" src="/demos/getting_start/script.ts"></Demo>

<<< @/public/demos/getting_start/script.ts

用户可以继承 `ComponentBase` 基类，并通过组件的 [生命周期](/guide/core/component#组件生命周期) 回调中编写自己的逻辑代码。借助脚本组件的更新回调设置每一帧物体的行为，状态和方位。   
示例中我们以一个包含 `onUpdate` 生命周期的简单脚本组件为例，编写一个为物体添加旋转动画的脚本。

```ts
class RotateScript extends ComponentBase {
  public onUpdate() {
    // update 生命周期，主循环每一帧执行
  }
}
```

我们可以通过 `this.object3D` 获取当前组件挂载到的 [object3D](/guide/core/object) 对象，从而更改节点的状态。例如，在 `update` 中更新 `object3D.rotationY`, 即每一帧围绕 `Y` 轴旋转加 `1` 度。

```ts
public onUpdate() {
  this.object3D.rotationY += 1;
}
```

定义好组件后，我们利用 [addComponent](/api/classes/Object3D#addcomponent) 将组件挂载到对象上即可。

```ts
obj.addComponent(RotateScript);
```
引擎主循环会自动运行 `onUpdate` 回调完成动画效果，更多自定义组件的使用方法可参考 [自定义组件](/guide/core/component) 页面。
