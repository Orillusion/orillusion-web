# 刚体
刚体是指在受到外力后自身形变可以忽略的物体。尽管理想刚体不可能真实存在，但在速度远小于光速的条件下，许多硬质物体通常都可以假定为完美刚体。根据刚体的特性，引擎物理系统可以模拟真实世界中物体的运动、碰撞逻辑，使之产生逼真的动画效果。

刚体是引擎物理系统中的重要组件，连接刚体后，我们即可以使模型对象像真实世界的物体一样，拥有质量，并响应重力。为了方便用户使用，我们封装了刚体组件 [Rigidbody](/physics/classes/Rigidbody)，通过添加组件的方式，即可为对象添加刚体：
```ts
import { Object3D } from '@orillusion/core'
import { Rigidbody } from '@orillusion/physics'

let object = new Object3D();
let rigidbody = object.addComponent(Rigidbody);
```

为刚体设置质量（单位：kg）：
```ts
rigidbody.mass = 50;
```

如果需要静态刚体，则设置`mass` 为 `0` 即可实现：

```ts
rigidbody.mass = 0;
```

如果想要操作原生的ammo.js的刚体，可以通过下面方式来获取：
```ts
let bt = rigidbody.btRigidbody;
```

添加刚体后，需要为继续物体添加碰撞体，才能使物体正确响应重力与碰撞。碰撞体组件 [ColliderComponent](/guide/physics/collider) 详细内容将会在下一节为大家介绍。