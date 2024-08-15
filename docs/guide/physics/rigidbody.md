# 内置组件
为了方便用户使用物理系统，引擎封装了一些常用的物理组件，如果需要更多功能可以通过 调用 `Ammo` 对象来获取更多原生 `API`。

## 刚体
刚体是指在受到外力后自身形变可以忽略的物体。尽管理想刚体不可能真实存在，但在速度远小于光速的条件下，许多硬质物体通常都可以假定为完美刚体。根据刚体的特性，引擎物理系统可以模拟真实世界中物体的运动、碰撞逻辑，使之产生逼真的动画效果。

刚体是引擎物理系统中的重要组件，连接刚体后，我们即可以使模型对象像真实世界的物体一样，拥有质量，并响应重力。为了方便用户使用，我们封装了刚体组件 [Rigidbody](/physics/classes/Rigidbody)，通过添加组件的方式，即可为对象添加刚体：
```ts
import { Object3D } from '@orillusion/core'
import { Rigidbody } from '@orillusion/physics'

let object = new Object3D();
let rigidbody = object.addComponent(Rigidbody);
```

### 基本操作

为刚体设置质量（单位：kg）：
```ts
rigidbody.mass = 50;
```

如果需要静态刚体，则设置 `mass` 为 `0` 即可实现：
```ts
rigidbody.mass = 0;
```

施加一个速度给钢体：
```ts
rigidbody.velocity = new Vector(10, 0, 0);
```

如果想要操作原生的 `Ammo.js` 的刚体，可以通过下面方式来获取：
```ts
let bt = rigidbody.btRigidbody;
// native rigidbody API
bt.getCollisionShape(); 
bt.getWorldTransform();
...
```

### 碰撞体形状
碰撞体形状 `Collision Shape` 定义了钢体响应碰撞的实际物理形状，物理系统可以通过 `Shape` 判定两个物体是否相交，从而产生碰撞效果。

:::tip
从 `@orillusion/physics@0.3` 开始，我们推荐直接使用 `Ammo` 原生 `Shape` 管理碰撞体
:::

### 常见形状

1. 盒型碰撞体

![Box Collider](/images/cube.webp)

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| size | btVector3 | 盒型碰撞体的大小。默认以物体中心沿x、y、z坐标轴的长度大小, 即为物体长宽高大小的一半 |

```ts
import { Object3D } from '@orillusion/core'
import { Ammo, Rigidbody } from '@orillusion/physics'

let object = new Object3D();
let mr = object.addComponent(MeshRenderer);
mr.geometry = new BoxGeometry(1, 1, 1); // size 1
mr.material = new LitMaterial();
let rigidbody = object.addComponent(Rigidbody);
rigidbody.mass = 10;

// half length of BoxGeometry size
let shape = new Ammo.btBoxShape(new Ammo.btVector3(1/2, 1/2, 1/2));
rigidbody.shape = shape;
```

2. 球形碰撞体

![Sphere Collider](/images/sphere.webp)

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| radius | number | 球形碰撞体的半径 |

```ts
import { Object3D } from '@orillusion/core'
import { Ammo, Rigidbody } from '@orillusion/physics'

let object = new Object3D();
let mr = object.addComponent(MeshRenderer);
mr.geometry = new SphereGeometry(1, 8, 8); // radius 1
mr.material = new LitMaterial();
let rigidbody = object.addComponent(Rigidbody);
rigidbody.mass = 10;

// shape with radius 1
let shape = new Ammo.btSphereShape(1);
rigidbody.shape = shape;
```


3. 胶囊碰撞体

![Capsule Collider](/images/capsule.webp)

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| radius | number | 胶囊上下半球体的半径 |
| height | number | 胶囊中部圆柱体的高度 |

```ts
import { Object3D } from '@orillusion/core'
import { Ammo, Rigidbody } from '@orillusion/physics'

// cylinder
let object = new Object3D();
let mr = object.addComponent(MeshRenderer);
mr.geometry = new CylinderGeometry(1, 1, 5); // radius 1, height 5
// top sphere
let topSphere = new Object3D();
topSphere.y = 2.5;
let mrTop = topSphere.addComponent(MeshRenderer);
mrTop.geometry = new SphereGeometry(1, 8, 8);
object.addChild(topSphere);
// bottom sphere
let bottomSphere = new Object3D();
bottomSphere.y = -2.5;
let mrBottom = bottomSphere.addComponent(MeshRenderer);
mrBottom.geometry = new SphereGeometry(1, 8, 8);
object.addChild(bottomSphere);
mr.material = mrBottom.material = mrTop.material = new LitMaterial();

let rigidbody = object.addComponent(Rigidbody);
rigidbody.mass = 10;

// CapsuleShape with radius 1, body height 5
let shape = new Ammo.btCapsuleShape(1, 5);
rigidbody.shape = shape;
```

### 更多形状
除了上面几个常见形状，`Ammo.js` 中还提供 `btStaticPlaneShape` `btCylinderShape` `btConeShape` `btConvexHullShape` `btConcaveShape` `btHeightfieldTerrainShape` 等更多复杂的碰撞体形状。

利用这些碰撞体，我们可以模拟出更复杂的物理场景，下面我们通过一个示例，进一步展示物理系统各类形状的用法。

<Demo src="/demos/physics/demo2.ts"></Demo>

<<< @/public/demos/physics/demo2.ts

## 软体 和 约束体

和钢体类似，引擎通过封装 `Ammo.js` 的 `btSoftBody` `btFixedConstraint` `btGeneric6DofConstraint` `btHingeConstraint` `btSliderConstraint` 等原生对象，模拟出布料、弹簧、铰链、滑轨等更复杂的物理效果。

由于这些复杂的 `Ammo` 对象包含非常多的物理参数设置，我们这里无法一一详细介绍用法，用户可以自行搜索 `Bullet` 相关文档来了解这些 `API` 的物理含义和使用规则。

这里我们通过一个示例来集中展示一些组件的基础使用方法，更多 `Ammo` 物理案例请参考 [示例](/example/physics/Dominoes)

<Demo src="/examples/physics/MultipleConstraints.ts"></Demo>

<<< @/public/examples/physics/MultipleConstraints.ts