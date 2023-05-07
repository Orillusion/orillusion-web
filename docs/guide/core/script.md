# 脚本组件

我们已经在 [组件](/guide/core/component) 中介绍了组件的 [生命周期](/guide/core/component#组件生命周期)，用户可以继承 [ComponentBase](/api/classes/ComponentBase) 基类进行自定义组件的开发工作。用户可以通过覆写 `(overwrite)` 组件基类的生命周期函数来自定义运行逻辑:
 - `初始化/卸载`: 如 `init` 和 `destroy`
 - `状态变化`: 如 `start`,`stop`, `onEnable` 和 `onDisable`
 - `更新逻辑`: 如 `onUpdate`, `onLateUpdate` 和 `onBeforeUpdate`


## 基础用法
为实体添加自定义脚本
```ts
class Script extends ComponentBase {
  // 覆写 初始化
  public init(){
    // 该函数在组件被创建时调用，可以用来初始化内部的变量
    // 注意，此时组件还没有被挂载到 Object3D 上，所以无法访问 this.object3D
  }
  // 覆写 渲染开始
  public start(){
    // 该函数在组件开始渲染前被调用，
    // 此时可以访问 this.object3D, 可以用来获取节点的属性或其他组件
  }
  // 覆写 onUpdate
  public onUpdate() {
    // 每帧渲染循环调用，通常定义节点的循环逻辑
    // 例如，每一帧更新物体旋转角度
    this.object3D.rotationY += 1;
  }
}

let ball: Object3D = new Object3D();
ball.addComponent( Script );
```
在自定义脚本中，可以通过 `this.object3D` 获取当前组件挂载到的 `object3D` 对象，从而进行对象状态的更改。   
游戏/动画开发的一个关键点是在每一帧渲染前更新物体的行为，状态和方位。这些更新操作通常可以定义在组件自己的 `onUpdate` 回调中。引擎会自动注册 `onUpdate` 回调到主循环，实现每帧更新逻辑。

## 示例
下面我们通过三个不同的脚本动画示例来了解一下更复杂的脚本组件使用方法。

### 1. 光照动画脚本组件
---
<Demo src="/demos/core/script_light.ts"></Demo>

<<< @/public/demos/core/script_light.ts

```ts
class LightAnimation extends ComponentBase {
  private light: DirectLight;
  private color: Color;

  // 覆写 start 初始化变量
  protected start() {
    this.light = this.object3D.getComponent(DirectLight);
    this.color = this.light.lightColor;
  }
  
  onUpdate() {
    // 更新 lightColor
    this.color.r = Math.pow(Math.sin(Time.time * 0.001), 10);
    this.light.lightColor = this.color;
  }
}
```
这里我们通过改变每一帧光照颜色的红色分量，使之随时间变化，从而产生最终光照动画的效果。

### 2. 材质动画脚本组件
---
<Demo src="/demos/core/script_mat.ts"></Demo>

<<< @/public/demos/core/script_mat.ts

```ts
class MaterialAnimation extends ComponentBase {
  private material: LitMaterial;

  // 覆写 start 初始化变量
  protected start() {
    let mr = this.object3D.getComponent(MeshRenderer);
    this.material = mr.material;
  }

  onUpdate() {
    // 更新 baseColor
    let delta = Time.time * 0.001
    this.material.baseColor = new Color(Math.sin(delta), Math.cos(delta), Math.sin(delta));
  }
}
```
类似的，我们通过改变对象材质对象，比如跟随时间改变材质颜色，从而达到相应的动画效果。

### 3. 路径动画脚本组件
---
<Demo src="/demos/core/script_path.ts"></Demo>

<<< @/public/demos/core/script_path.ts

```ts
class PathAnimation extends ComponentBase {
  onUpdate() {
    // 更新 Position
    this.object3D.x = Math.sin(Time.time * 0.001) * 2;
    this.object3D.y = Math.cos(Time.time * 0.001) * 2;
  }
}
```
这次我们通过更改 `Object3D` 的 `Position` 属性，使物体随时间变化在 `xy` 平面内做一个圆周运动。
