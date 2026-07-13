# 关节

关节（Joint）用于约束两个刚体之间的相对运动，可用于门、活塞、链条、布偶等机械结构。每种关节都是一个组件，添加到其中一个刚体所在的 `Object3D` 上，并通过 `connectedBody` 指向另一个刚体。

## 关节类型

| 关节 | 自由度 | 说明 |
| --- | --- | --- |
| `HingeJoint` | 1 个转动 | 铰链 / 转轴（门、轮子） |
| `SliderJoint` | 1 个平移 | 滑轨 / 活塞 |
| `FixedJoint` | 0（全锁定） | 焊死两个刚体 |
| `SphericalJoint` | 3 个转动 | 球窝关节（取代旧版 P2P + ConeTwist） |
| `GenericJoint` | 6 自由度可配 | 通用关节，按轴掩码自定义，内置弹簧 |
| `RopeJoint` | 最大距离约束 | 绳索 / 链条 |
| `SpringJoint` | 弹簧 | 胡克定律弹簧 |

## 通用用法

```ts
import { HingeJoint, SliderJoint, FixedJoint, SphericalJoint, RopeJoint, SpringJoint } from '@orillusion/physics-rapier';
import { Vector3 } from '@orillusion/core';
```

关节组件加在“自身”刚体上，`connectedBody` 指向被连接的另一刚体；`anchorSelf` / `anchorTarget` 分别是两端在各自局部坐标中的锚点。

### 铰链（HingeJoint）
```ts
const hj = door.addComponent(HingeJoint);
hj.connectedBody = hingeAnchor.rb;        // 另一刚体（Rigidbody）
hj.anchorSelf = new Vector3(0, 1.5, 0);   // 自身上的锚点
hj.anchorTarget = new Vector3(0, 0, 0);   // 目标上的锚点
hj.axis = new Vector3(0, 0, 1);           // 转轴
```

### 滑轨（SliderJoint）
```ts
const sj = piston.addComponent(SliderJoint);
sj.connectedBody = slideAnchor.rb;
sj.axis = new Vector3(1, 0, 0);           // 滑动方向
```

### 固定（FixedJoint）
```ts
const fj = boxA.addComponent(FixedJoint);
fj.connectedBody = boxB.rb;
fj.anchorSelf = new Vector3(0, 0.5, 0);
fj.anchorTarget = new Vector3(0, -0.5, 0);
```

### 球窝（SphericalJoint）
```ts
const sp = ball.addComponent(SphericalJoint);
sp.connectedBody = anchor.rb;
sp.anchorSelf = new Vector3(0, 0, 0);
sp.anchorTarget = new Vector3(0, -1, 0);
```

> `GenericJoint`、`RopeJoint`、`SpringJoint` 用法类似：加组件、设 `connectedBody` 与锚点，再按各自特性配置（如 `RopeJoint` 的最大距离、`SpringJoint` 的刚度/阻尼）。完整示例见引擎仓库 `samples/physics-rapier/Sample_RapierJoints.ts`。

## 示例

<Demo src="/demos/physics-rapier/Sample_rapierJoints.ts"></Demo>

<<< @/public/demos/physics-rapier/Sample_rapierJoints.ts
