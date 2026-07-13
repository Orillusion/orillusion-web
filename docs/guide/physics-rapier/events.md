# 触发器与碰撞事件

刚体可以作为**触发器（Sensor）**检测物体进出区域，也可以监听**碰撞接触**事件。两者都通过 `Rigidbody` 上的回调实现。

::: warning 注意
`isSensor` 与 `enableEvents` 必须在组件 `start()` 之前设置（即添加组件后、物体加入场景前）。
:::

## 触发器（Sensor）

触发器不产生物理碰撞响应，只检测其它物体的进入/离开，常用于区域检测（进入区域、拾取道具等）：

```ts
import { Object3D, Vector3 } from '@orillusion/core';
import { Rigidbody, BodyType, CollisionShapeUtil } from '@orillusion/physics-rapier';

const sensor = obj.addComponent(Rigidbody);
sensor.bodyType = BodyType.Static;
sensor.shape = CollisionShapeUtil.createBoxShape(obj, new Vector3(2, 2, 2));
sensor.isSensor = true;       // 设为触发器
sensor.enableEvents = true;   // 开启事件

sensor.onTriggerEnter = (other) => console.log('进入', other.object3D.name);
sensor.onTriggerExit  = (other) => console.log('离开', other.object3D.name);
```

| 回调 | 触发时机 |
| --- | --- |
| `onTriggerEnter(other)` | 有物体进入触发器 |
| `onTriggerExit(other)` | 有物体离开触发器 |

## 碰撞接触事件

在动态刚体上开启 `enableEvents`，可监听与其它物体的接触：

```ts
const rb = body.addComponent(Rigidbody);
rb.bodyType = BodyType.Dynamic;
rb.mass = 1;
rb.shape = CollisionShapeUtil.createBoxShape(body, new Vector3(1, 1, 1));
rb.enableEvents = true;

rb.onContactBegin = (other) => { /* 开始接触（一次性） */ };
rb.onContactStay  = (other) => { /* 持续接触（每帧） */ };
rb.onContactEnd   = (other) => { /* 结束接触（一次性） */ };
```

| 回调 | 触发时机 |
| --- | --- |
| `onContactBegin(other)` | 刚开始接触 |
| `onContactStay(other)` | 接触持续中（每帧） |
| `onContactEnd(other)` | 接触结束 |

> 回调参数 `other` 为对方的 `Rigidbody`，可通过 `other.object3D` 访问其所属节点。

## 示例

<Demo src="/demos/physics-rapier/Sample_rapierTriggers.ts"></Demo>

<<< @/public/demos/physics-rapier/Sample_rapierTriggers.ts
