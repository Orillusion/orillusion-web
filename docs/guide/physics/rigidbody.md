# 刚体
刚体是指在受到外力后自身形变可以忽略的物体。尽管理想刚体不可能真实存在，但在速度远小于光速的条件下，许多硬质物体通常都可以假定为完美刚体。根据刚体的特性，引擎物理系统可以模拟真实世界中物体的运动、碰撞逻辑，使之产生逼真的动画效果。

在引擎的物理系统中，刚体是一个关键组件。为模型对象添加刚体组件 [Rigidbody](/physics/classes/Rigidbody) 后，物体将具备质量，并能够响应重力和其他物理力，表现出与现实世界相似的动态特性。

::: details 刚体与模型对象的同步机制
当为模型对象添加刚体组件后，物理引擎会接管该对象的变换（通常是位置和旋转）。在每一个物理模拟步长中（通常是60Hz，即每秒60帧频率），物理引擎根据刚体的物理属性（如质量、力、碰撞等）计算其运动状态，并将计算结果实时更新刚体的变换信息。刚体组件的更新函数在每一个渲染帧中通过获取刚体的插值变换，同步到模型对象，使其在场景中展现逼真的物理行为。请注意，一旦添加刚体组件，模型对象的变换将由物理引擎自动管理。
:::

## 刚体与碰撞体
刚体负责处理物体的动力学属性和运动，但仅有刚体不足以完成物理模拟，因为它不包含物体的具体形状或大小信息。为了实现完整的物理模拟，刚体必须与碰撞体关联。碰撞体定义了物体在物理空间中的边界，刚体通过这些边界参与碰撞检测和处理。


## 属性和方法
[Rigidbody](/physics/classes/Rigidbody) 组件设计封装了很多 `API`，常用属性如下表所示：

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| btRigidbody | `Ammo.btRigidBody` | 获取 `Ammo.js` 的原生刚体对象。 |
| shape | `Ammo.btCollisionShape` | 刚体的碰撞形状，定义物体的物理边界。 |
| mass | `number` | 刚体的质量（单位：kg），决定物体的惯性。默认值为 `0.01`。 |
| restitution | `number` | 弹性恢复系数，决定碰撞后物体的反弹程度。默认值为 `0.5`。 |
| friction | `number`| 摩擦力，影响刚体与其他物体接触时的滑动行为。默认值为 `0.5`。 |
| velocity | `Vector3` | 施加在刚体中心位置的力向量。 |
| damping | `[number, number]` | 阻尼系数，控制刚体的线性和角速度的衰减。 |
| enablePhysicsTransformSync | `boolean` | 是否启用刚体与模型对象的变换同步，默认值为 `false`。 |
| isSilent | `boolean` | 是否为静默状态，设置为 `true` 时，不会触发双方的碰撞回调。 |
| enableCollisionEvent | `boolean` | 是否启用碰撞事件，默认值为 `true`。 |
| collisionEvent | `Function` | 碰撞事件回调。 |

| 方法 | 描述 |
| --- | --- |
| wait() | 异步获取完成初始化的原生刚体实例。 |
| updateTransform() | 更新刚体的位置和旋转，并同步对象。 |
| clearForcesAndVelocities() | 清除刚体的所有力和速度，重置运动状态。 |

::: details 查看更多 `API`

| API | 类型 | 描述 |
| --- | --- | --- |
| collisionShape | `CollisionShapeUtil` | 创建碰撞体的工具。 |
| rollingFriction | `number` | 滚动摩擦力，影响刚体滚动时的滑动行为。 |
| ccdSettings | `[number, number]` | 连续碰撞检测的设置，用于避免高速运动物体穿透其他物体。 |
| gravity | `Vector3` | 施加于刚体的重力向量，可以自定义不同于全局重力的向量。 |
| linearVelocity | `Vector3` | 刚体的线速度。 |
| angularVelocity | `Vector3` | 刚体的角速度。 |
| activationState | `ActivationState` | 刚体的激活状态。 |
| isKinematic | `boolean` | 设置为运动学刚体，将会自动开启 `enablePhysicsTransformSync`。 |
| isTrigger | `boolean` | 设置为触发器，不参与物理反应，也不会触发碰撞事件。 |
| isDisableDebugVisible | `boolean` | 设置刚体在调试模式下是否可见。 |
| userIndex | `number` | 用户索引，可以用作刚体标识符。 |
| group | `number` | 刚体的碰撞组。 |
| mask | `number` | 刚体的碰撞掩码。 |
| margin | `number` | 定义碰撞体的碰撞边距。 |
| collisionFlags | `number` | 获取碰撞标志。 |
| addCollisionFlag() | `CollisionFlags`  | 添加单个碰撞标志。用于设置刚体的特定行为，如静态、运动学等。 |
| removeCollisionFlag() | `CollisionFlags` | 移除单个碰撞标志。 |
:::


## 基本用法

为对象添加 `Rigidbody` 组件：
```ts
import { Object3D } from '@orillusion/core'
import { Rigidbody, CollisionShapeUtil } from '@orillusion/physics'

let object = new Object3D();
let rigidbody = object.addComponent(Rigidbody);
```

在添加组件后，还需要为刚体设置碰撞体，根据上一篇介绍 [碰撞体](/guide/physics/collisionShape.html) 的相关内容，我们可以根据对象的几何形状来创建合适的碰撞体：
```ts
rigidbody.shape = CollisionShapeUtil.createShapeFromObject(object);
```

为刚体设置质量（单位：kg）：
```ts
rigidbody.mass = 50;
```

如果需要静态刚体，则设置 `mass` 为 `0` 即可实现：
```ts
rigidbody.mass = 0;
```

可以通过以下方式操作原生的 `Ammo.js` 的刚体：
```ts
// 使用 wait 方法确保刚体初始化完成
rigidbody.wait().then(bt => {
    bt.getCollisionShape(); // native rigidbody API
});

// 如果确定刚体已初始化完成，可以直接通过 btRigidbody 访问
let bt = rigidbody.btRigidbody;
bt.getCollisionShape(); // native rigidbody API
```

## 核心功能

### 碰撞检测与事件处理

刚体组件支持详细的碰撞检测，并提供 `enableCollisionEvent` 属性和 `collisionEvent` 回调函数，允许开发者监听和处理刚体的碰撞事件。
```ts
rigidbody.enableCollisionEvent = true;
rigidbody.collisionEvent = (contactPoint: Ammo.btManifoldPoint, selfBody: Ammo.btRigidBody, otherBody: Ammo.btRigidBody) => {
    // 在这里进行碰撞事件处理
};
```
> 由于物理引擎在每个模拟步中可能会多次检测到同一对刚体的碰撞，回调函数在碰撞期间会被持续触发。
>
> 为避免性能下降，可以在回调函数中加入防抖逻辑，或限制某些计算的执行频率。

通常，注册碰撞事件后，刚体与其他物体碰撞时都会触发回调。对于无需处理的对象（如地面），可设置 `isSilent` 为 `true` 以避免回调触发。

### 刚体与模型对象同步

通过启用 `enablePhysicsTransformSync` 属性，确保模型对象的变换（位置、旋转、缩放）实时同步到物理刚体，从而保持视觉与物理行为的一致性。


```ts
rigidbody.enablePhysicsTransformSync = true;

// 开启同步功能后，修改对象的位置、旋转、缩放时将会实时同步至刚体
object.transform.x += 10;
object.transform.rotationX += 10;
object.transform.scaleX = 2;
```

## 幽灵对象
幽灵对象 `Ghost Object` 是一种特殊的碰撞对象，它用于检测物体之间的重叠，而不产生物理反应。不同于刚体，幽灵对象不会受到力的影响，也不会对其他物体施加力，但它能检测到与其他物体的接触并触发相应的事件。这使得幽灵对象非常适合用于需要区域检测或触发事件的场景。

### 幽灵组件介绍
物理系统通过封装幽灵对象，提供了幽灵触发器组件 [GhostTrigger](/physics/classes/GhostTrigger) 。与刚体类似，幽灵触发器组件拥有许多相同的属性和方法，主要 `API` 如下表所示：

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| ghostObject | `Ammo.btPairCachingGhostObject` | 获取 `Ammo.js` 的原生幽灵对象。 |
| shape | `Ammo.btCollisionShape` | 幽灵对象的碰撞形状，定义物体的物理边界。 |
| enableCollisionEvent | `boolean` | 是否启用碰撞事件。 |
| collisionEvent | `Function` | 碰撞事件回调。 |

| 方法 | 描述 |
| --- | --- |
| wait() | 异步获取完全初始化的原生幽灵对象实例。 |
| createAndAddGhostObject() | 静态方法，创建幽灵对象并添加到物理世界。 |

### 基本用法
与刚体组件的使用方式类似，我们可以直接添加幽灵触发器组件并配置 `shape` 和 `collisionEvent` 即可:
```ts
import { GhostTrigger, CollisionShapeUtil } from "@orillusion/physics";

let ghostTrigger = object.addComponent(GhostTrigger);
ghostTrigger.shape = CollisionShapeUtil.createBoxShape(object);
ghostTrigger.collisionEvent = (contactPoint, selfBody, otherBody) => {
    // 在这里处理幽灵对象的碰撞事件
}
```

> 添加组件后，幽灵触发器会自动同步模型对象的变换，确保在模型移动或调整时，幽灵对象的位置和形状也会实时更新。

幽灵对象通常用于区域检测，许多情况下不需要关联具体的模型对象。对此，`GhostTrigger` 组件提供了一个静态方法，开发者可以直接调用 `createAndAddGhostObject()` 创建原生幽灵对象，无需以组件形式添加：

```ts
import { Ammo, CollisionShapeUtil, GhostTrigger, ContactProcessedUtil } from "@orillusion/physics";

let size = new Vector3(10, 5, 5);
let shape = CollisionShapeUtil.createBoxShape(null, size);
let position = new Vector3(0, 2.5, 0);
let rotation = Vector3.ZERO;
// 传入碰撞形状、位置、旋转信息以创建幽灵对象并自动添加到物理世界
let ghostObj = GhostTrigger.createAndAddGhostObject(shape, position, rotation);
// 使用碰撞工具注册事件
ContactProcessedUtil.registerCollisionCallback(ghostObj.kB, (contactPoint, selfBody, otherBody) => {
    // 在这里处理幽灵对象的碰撞事件
});
```

## 示例

在以下示例中，通过应用 `Rigidbody` 和 `GhostTrigger` 组件，实现了一个简易的区域检测。

<Demo src="/demos/physics/areaDetection.ts"></Demo>

<<< @/public/demos/physics/areaDetection.ts