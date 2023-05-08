# 实体与组件
`Orillusion` 核心借鉴了 [ECS](https://wikipedia.org/wiki/Entity_component_system) 结构，遵循 `组合优于继承` 的开发设计原则，实现了自己的组件系统。我们将传统复杂的逻辑划分为独立的、可重复利用的部分，每个部分可以单独封装运行逻辑。然后通过灵活组合的形式，将多个简单组件合并在一起运行从而表现复杂的功能和逻辑。

![ECS](/images/component.svg)

## 实体 - Entity
`Entity` 是组件的容器，用于连接各个组件。它没有实际的功能，如果不添加任何组件，它不会进行任何渲染和功能的表达。
在实际使用中，我们不会直接操作 `Entity`，一般使用 [Object3D](/guide/core/object) 和 [Scene3D](/guide/core/scene) 作为场景容器节点来连接各个组件。


## 组件 - Compnent
`Component` 是一系列可重复利用的模块或数据，`Entity` 的所有功能都要通过加载 `Component` 来实现。通过定义组件的逻辑回调和生命周期，我们可以将不同的组件进行自由组合，让 `Entity` 具备不同的功能，比如：

- `相机 = Position + Rotation + Camera3D`  
- `灯泡 = Position + Rotation + PointLight + Shadow` 
- `盒子 = Position + Rotation + Scale + BoxGeometry + Material` 

其中，所有组件都是独立且平等的，且各自只负责一个单独的功能，这样的拆分使得 `Position` 和 `Rotation` 模块可以重复利用，在使用时按需要组合即可，大大提高代码的利用效率，也能有效降低各个模块间的耦合性。

## 内置组件

在 Orillusion 引擎中，我们已经内置了常用的基础组件，封装了大量的基础功能。比如，`Object3D` 已经内置了 `Transform` 组件，已经包含了 `Position`, `Rotation`, `Scale` 等相关功能，方便用户去操作 `Object3D` 的空间变换。

以下是常用的引擎内置组件列表：
| 名称 | 描述 |
| :---: | :---: |
| Camera3D | 相机组件，设置相机节点 |
| Transform | 变换组件，用于控制物体矩阵坐标变换 |
| HoverCameraController | 相机控制组件，用于控制相机位置和朝向 |
| MeshRenderer | 网格渲染器组件, 用于渲染网格和材质 |
| DirectLight | 方向光，设定方向光类型和参数 |
| PointLight | 点光源，设定点光类型和参数 |
| SpotLight | 聚光灯，设定聚光类型和参数 |
| ColliderComponent | 碰撞体组件，用于检测碰撞 |
| SkeletonAnimationComponent | 骨骼动画组件，用于控制动画播放 |
| AtmosphericComponent | 大气天空盒组件 |

更多内置组件详见 [Components](/api/#components)

## 基础用法
```ts
//创建一个实体
let obj = new Object3D();
//将实体添加到场景中
scene.addChild(obj);
```
## 添加组件
```ts
let obj = new Object3D();
let light = obj.addComponent(DirectLight)
```

## 删除组件
```ts
let obj = new Object3D();
let light = obj.removeComponent(DirectLight)
```

## 停用组件
```ts
let obj = new Object3D();
let light = obj.getComponent(DirectLight)
light.enable = false
```

## 启用组件
```ts
let obj = new Object3D();
let light = obj.getComponent(DirectLight)
light.enable = true
```

## 组件生命周期
组件继承自 [CompnentBase](/api/classes/ComponentBase) 类，该类定义了几个基本生命周期：

| 周期 | 描述 |
| :---: | --- |
| init | 组件初始化，只在被添加创建时运行一次 |
| start | 组件开始运行，只在第一次 `onUpdate` 之前调用 |
| stop | 组件销毁前被调用 |
| onUpdate | 组件每帧更新时运行 |
| onBeforeUpdate | 组件渲染更新前运行 |
| onLateUpdate | 组件渲染更新后运行 |
| onEnable | 组件 `enable = true` 时回调，组件加入主循环更新 |
| onDisable | 组件 `enable = false` 时触发，组件将不再触发循环 |

用户可以通过继承 [CompnentBase](/api/classes/ComponentBase) 基类来扩展不同的自定义功能，详情参考 [脚本组件](/guide/core/script)