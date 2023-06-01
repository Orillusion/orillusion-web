# 物理总览
物理系统是对真实世界的模拟，使场景中的模型对象可以像真实环境中的物体一样，拥有质量并正确响应重力及各种碰撞。引擎以插件的形式提供了物理引擎支持（基于[ammo.js](https://github.com/kripken/ammo.js)），并封装了常用的组件，可以帮助用户在项目中模拟物理系统。

## 安装
跟引擎方法一致，我们可以通过 `NPM` 和 `CDN` 链接两种方式来引入物理插件:

### 1. 通过 `NPM` 包安装
```bash
npm install @orillusion/core --save
npm install @orillusion/physics --save
```
```ts
import { Engine3D } from "@orillusion/core"
import { Physics } from "@orillusion/physics"
```

### 2. 通过 `CDN` 链接引入
推荐使用 `ESModule` 构建版本
```html
<script type="module">
  import { Engine3D } from "https://unpkg.com/@orillusion/core/dist/orillusion.es.js" 
  import { Physics } from "https://unpkg.com/@orillusion/physics/dist/physics.es.js" 
</script>
```

或通过 `<script>` 加载构建 `UMD` 版本，在全局 `Orillusion` 变量中获取 `Physics` 模块：
```html
<script src="https://unpkg.com/@orillusion/core/dist/orillusion.umd.js"></script>
<script src="https://unpkg.com/@orillusion/physics/dist/physics.umd.js"></script>
<script>
  const {Engine3D, Physics} = Orillusion
</script>
```

## 物理环境的运行

目前 [Physics](/physics/classes/Physics) 支持的参数及方法如下表所示：

| API | 描述 |
| --- | --- |
| init(): void | 初始化物理引擎 |
| update(): void | 更新物理系统，需要在 loop 主体中调用 |
| gravity: Vector3 | 重力参数 |
| isStop: boolean | 控制物理世界是否暂停运行 |
| world: Ammo.btDiscreteDynamicsWorld | ammo.js 原生物理世界 |

我们可以初始化 `init()` 来开启物理系统，并通过在渲染主循环中调用 `update()` 实现物理世界的运行：
```ts
import { Engine3D } from '@orillusion/core'
import { Physics } from '@orillusion/physics'

await Physics.init();
await Engine3D.init({
  renderLoop: () => {
    if (Physics.isInited) {
      Physics.update();
    }
  }
});
```
通过以上方法开启并运行物理系统后，引擎会在每一帧渲染时，根据设定的参数计算并更新物体模型对物理世界的实际响应。

在一些项目中通常会有暂停物理世界模拟的需求，因此我们提供了一个参数可以暂停&恢复物理世界的运行：
```ts
Physics.isStop = !Physics.isStop;
```

## 重力环境模拟
目前引擎中默认的重力参数为 `Vector3(0, -9.8, 0)`，模拟的是地球的重力。如果需要自定义重力参数的话，只需更改 `Physics.gravity` 属性即可，不过切记需要在初始化之前更改，否则无法生效。

例如，如果需要模拟太空中的无重力环境，则在初始化前更改 `gravity` 参数为：
```ts
Physics.gravity = new Vector3(0,0,0);
await Physics.init();
```
即可。请注意，需要在物理系统初始化前更改才能生效。

## 扩展
此外，用户可以通过以下代码来获取 `ammo.js`原生的物理世界，通过 `ammo.js` 自身提供的api 实现更多自定化需求：
```ts
let world:Ammo.btDiscreteDynamicsWorld = Physics.world;
```

## 物体落地的简单示例
这里我们通过模拟一个正方体掉落在地上的过程，看一下物理系统具体可以提供哪下效果。

<Demo src="/demos/physics/demo1.ts"></Demo>

<<< @/public/demos/physics/demo1.ts

依照前面章节所介绍的流程，我们首先将场景、相机、环境贴图、光照等基础组件初始化并设定好参数。
接下来，我们创建一个立方体，并为其添加刚体与碰撞体组件，使之拥有质量并能正确响应重力与碰撞。
```ts
const obj = new Object3D();
let mr = obj.addComponent(MeshRenderer);
mr.geometry = new BoxGeometry(5, 5, 5);
mr.material = new LitMaterial();
// 响应重力
let rigidbody = obj.addComponent(Rigidbody);
rigidbody.mass = 10;
// 设置碰撞盒子
let collider = obj.addComponent(ColliderComponent);
collider.shape = new BoxColliderShape();
collider.shape.size = new Vector3(5, 5, 5);

scene3D.addChild(obj);
```

之后，我们在正方体下方创建一个平面，作为地面，同样为其添加刚体与碰撞体组件。由于地面是静止的，所以我们设置其质量为 `0`。
```ts
const obj = new Object3D();
let mr = obj.addComponent(MeshRenderer);
mr.geometry = new PlaneGeometry(size.x, size.y);
mr.material = new LitMaterial();
// 静态钢体，不响应重力
let rigidbody = obj.addComponent(Rigidbody);
rigidbody.mass = 0;
// 设置碰撞盒子
let collider = obj.addComponent(ColliderComponent);
collider.shape = new BoxColliderShape();
collider.shape.size = new Vector3(size.x, 0.1, size.y);

scene.addChild(obj);
```

物理系统启动后，引擎立即根据物体质量响应其重力感应，所以我们将看到立方体从空中掉落的画面。由于我们设置了碰撞体组件，当立方体和地面的碰撞体形状产生交集时，即响应碰撞。在示例中我们可以看到真实的物体落地碰撞效果。