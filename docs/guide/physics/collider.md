# 碰撞体
碰撞体定义物体响应碰撞的实际物理性状，通常在渲染层是不可见的。通过碰撞体组件的设定，物理系统可以判定两个物体是否相交，从而产生碰撞效果。

## 碰撞体组件概览
我们封装了以下几个常见的碰撞体形状类型，方便用户使用：

1. 盒型碰撞体

![Box Collider](/images/cube.webp)

```ts
import { ColliderComponent, BoxColliderShape } from '@orillusion/core'

// some codes here to create object...
let collider = object.addComponent(ColliderComponent);
collider.shape = new BoxColliderShape();
// set shape parameters...
collider.shape.size = new Vector3(2, 2, 2);
```
| 参数 | 类型 | 描述 |
| --- | --- | --- |
| size | Vector3 | 盒型碰撞体的大小。默认以物体中心为长方体中心，通过新建Vector3实例分别指定长方体沿x、y、z坐标轴的长度大小 |

2. 球形碰撞体

![Sphere Collider](/images/sphere.webp)

```ts
import { ColliderComponent, BoxColliderShape } from '@orillusion/core'

// some codes here to create object...
let collider = object.addComponent(ColliderComponent);
collider.shape = new SphereColliderShape();
// set shape parameters...
collider.radius = 5;
```
| 参数 | 类型 | 描述 |
| --- | --- | --- |
| radius | number | 球形碰撞体的半径。默认以物体中心为球体中心 |

3. 胶囊碰撞体

![Capsule Collider](/images/capsule.webp)

```ts
import { ColliderComponent, BoxColliderShape } from '@orillusion/core'

// some codes here to create object...
let collider = object.addComponent(ColliderComponent);
collider.shape = new CapsuleColliderShape();
// set shape parameters...
collider.radius = 2.5;
collider.height = 10;
```
| 参数 | 类型 | 描述 |
| --- | --- | --- |
| radius | number | 胶囊碰撞体上下半球体的半径 |
| height | number | 胶囊碰撞体的高度，默认以物体中心为胶囊体中心 |


## 碰撞体组件应用示例
在为对象添加了刚体组件后，我们再为它添加一个碰撞体，并指定碰撞体的形状类型，便可以让该对象响应碰撞了：
```ts
import { Vector3D, Object3D, ColliderComponent, BoxColliderShape } from '@orillusion/core'
import { Rigidbody } from '@orillusion/physics'

let object = new Object3D();
object.addComponent(Rigidbody);
let collider = obj.addComponent(ColliderComponent);
collider.shape = new BoxColliderShape();
collider.shape.size = new Vector3(2, 2, 2);
```

利用碰撞组件，我们可以模拟出逼真的物理效果，下面我们通过展示一个更复杂的示例，进一步了解物理系统可以实现的效果。

<Demo src="/demos/physics/demo2.ts"></Demo>

<<< @/public/demos/physics/demo2.ts
