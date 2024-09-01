
# 约束

物理约束用于限制两个物理对象（通常是刚体）之间的相对运动。它们允许在物理模拟中创建更复杂的行为，如铰链、滑块或固定的连接。通过合理配置约束，可以实现现实世界中的各种机械结构和连接方式。

## 约束组件概述

约束以组件的形式添加和使用。约束父类实现了通用的约束功能，各个具体的约束组件通过继承该父类，并封装了底层的 `Ammo.js` 约束类型，提供了与原生约束类似的 `API`。这使得开发者能够省去手动创建约束的流程，可以快速、便捷地集成各种物理约束，实现复杂的物理行为。

```ts
import { Object3D } from '@orillusion/core';
import { HingeConstraint, Rigidbody } from '@orillusion/physics';

let object = new Object3D();
let targetObject = new Object3D();
let rigidbody = object.addComponent(Rigidbody);
let targetRigidbody = targetObject.addComponent(Rigidbody);

// 分别为两个刚体进行相关配置，如设置 mass、shape 等
... 

// 为 object 添加铰链约束，并指定目标刚体，约束会将这两个刚体进行连接
let hingeConstraint = object.addComponent(HingeConstraint);
hingeConstraint.targetRigidbody = targetRigidbody;
// 具体的约束配置请参考下述介绍的API
...
```

> 请注意，对象必须在添加约束组件之前添加 [刚体](/guide/physics/Rigidbody.html) 组件。

## 基本功能

以下是约束的通用 `API`，各个约束类型还提供了独特的设置选项。

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| constraint | `Ammo.btTypedConstraint` | 获取 `Ammo.js` 的原生约束。 |
| breakingThreshold | `number` | 断裂阈值，值越大，约束越不易断裂。 |
| disableCollisionsBetweenLinkedBodies | `boolean` | 禁用关联刚体的碰撞，默认值为 `true`。 |
| targetRigidbody | `Rigidbody` | 目标刚体，约束将限制当前刚体与目标刚体之间的相对运动。 |
| pivotSelf | `Vector3` | 自身刚体的枢轴点，决定了约束的旋转中心。 |
| pivotTarget | `Vector3` | 目标刚体的枢轴点。 |
| rotationSelf | `Quaternion` | 自身刚体的旋转设置。 |
| rotationTarget | `Quaternion` | 目标刚体的旋转设置。 |

| 方法 | 描述 |
| --- | --- |
| wait() | 异步获取完成初始化的原生约束实例。 |
| resetConstraint() | 重置约束，销毁当前约束实例后重新创建并返回新的约束实例。 |

## 重载支持

在原生 `Ammo.js` 中，除了 `FixedConstraint` 之外，其余约束都提供了多种构造方法的重载。为了确保这些功能的完整性，约束组件中也提供了相应的重载支持。通常情况下，如果 `targetRigidbody` 属性未设置，约束将默认以单个刚体的形式创建。开发者可以根据具体需求，自由选择适合的约束构造方式。

## 约束类型

当前系统已集成了 `Ammo.js` 中的 7 种主要约束类型，每种约束均适用于特定的应用场景。

### 1. 铰链约束  [HingeConstraint](/physics/classes/HingeConstraint)

铰链约束允许物体绕某个轴进行旋转，适用于门、机械臂等需要单轴旋转的场景。

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| axisSelf | `Vector3` | 自身刚体上的铰链轴方向，默认值为 `Vector3.UP`。 |
| axisTarget | `Vector3` | 目标刚体上的铰链轴方向，默认值为 `Vector3.UP`。 |
| useReferenceFrameA | `boolean` | 是否使用自身刚体的参考框架，默认值为 `true`。 |
| useTwoBodiesTransformOverload | `boolean` | 是否使用两个刚体的变换重载方式，默认值为 `false`。 |

| 方法 | 描述 |
| --- | --- |
| setLimit() | 设置旋转限制。 |
| enableAngularMotor() | 启用或禁用角度马达。 |

```ts
let hingeConstraint = object.addComponent(HingeConstraint);
hingeConstraint.setLimit(-Math.PI / 2, Math.PI / 2, 0.9, 0.3);
hingeConstraint.enableAngularMotor(true, 1.0, 10.0);
```

### 2. 滑动关节约束  [SliderConstraint](/physics/classes/SliderConstraint)

滑动关节约束允许物体沿着一个轴进行平移，并绕该轴旋转，适用于滑轨或电梯等应用场景。

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| lowerLinLimit | `number` | 线性运动的下限限制。 |
| upperLinLimit | `number` | 线性运动的上限限制。 |
| lowerAngLimit | `number` | 角度运动的下限限制。 |
| upperAngLimit | `number` | 角度运动的上限限制。 |
| poweredLinMotor | `boolean` | 是否启用线性马达。 |
| maxLinMotorForce | `number` | 线性马达的最大推力。 |
| targetLinMotorVelocity | `number` | 线性马达的目标速度。 |

```ts
let sliderConstraint = object.addComponent(SliderConstraint);
sliderConstraint.lowerLinLimit = -10;
sliderConstraint.upperLinLimit = 10;
sliderConstraint.poweredLinMotor = true;
sliderConstraint.maxLinMotorForce = 100;
sliderConstraint.targetLinMotorVelocity = 5;
```

### 3. 固定约束  [FixedConstraint](/physics/classes/FixedConstraint)

固定约束将两个物体完全固定在一起，限制其相对位置和旋转，从而实现刚性的连接效果。

```ts
let fixedConstraint = object.addComponent(FixedConstraint);
fixedConstraint.targetRigidbody = targetRigidbody; // 固定约束类型必须指定目标刚体
```

### 4. 点到点约束  [PointToPointConstraint](/physics/classes/PointToPointConstraint)

该约束限制了两个点之间的相对运动，但允许它们在空间中自由旋转。通常用于模拟绳索或链条的连接。

```ts
let p2pConstraint = object.addComponent(PointToPointConstraint);
p2pConstraint.targetRigidbody = targetRigidbody;
p2pConstraint.pivotSelf.set(0, 0, 0);
p2pConstraint.pivotTarget.set(0, 5, 0);
```

### 5. 锥形扭转约束  [ConeTwistConstraint](/physics/classes/ConeTwistConstraint)

锥形扭转约束用于创建类似球窝关节的运动，允许物体在一个锥形范围内自由旋转，并限制其绕某轴的扭转角度。

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| twistSpan | `number` | 扭转角度限制，绕 X 轴的扭转范围。 |
| swingSpan1 | `number` | 摆动角度限制1，绕 Y 轴的摆动范围。 |
| swingSpan2 | `number` | 摆动角度限制2，绕 Z 轴的摆动范围。 |

```ts
let coneTwistConstraint = object.addComponent(ConeTwistConstraint);
coneTwistConstraint.twistSpan = Math.PI / 4;  // 限制扭转角度为 45 度
```

### 6. 通用六自由度约束  [Generic6DofConstraint](/physics/classes/Generic6DofConstraint)

该约束允许沿三个线性轴和三个角度轴自由设置运动限制，提供了最大的灵活性以满足各种复杂的连接需求。

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| linearLowerLimit | `Vector3` | 线性运动的下限限制。 |
| linearUpperLimit | `Vector3` | 线性运动的上限限制。 |
| angularLowerLimit | `Vector3` | 角度运动的下限限制。 |
| angularUpperLimit | `Vector3` | 角度运动的上限限制。 |
| useLinearFrameReferenceFrame | `boolean` | 是否使用线性参考坐标系。 |

```ts
let sixDofConstraint = object.addComponent(Generic6DofConstraint);
sixDofConstraint.linearLowerLimit = new Vector3(-1, -1, -1);  // 设置线性下限
sixDofConstraint.linearUpperLimit = new Vector3(1, 1, 1);     // 设置线性上限
```

### 7. 弹簧特性六自由度约束  [Generic6DofSpringConstraint](/physics/classes/Generic6DofSpringConstraint)

此约束是在通用六自由度约束的基础上增加了弹簧特性，可以模拟弹簧的效果，如伸缩和振动。

| 方法 | 描述 |
| --- | --- |
| enableSpring() | 启用或禁用弹簧功能。 |
| setStiffness() | 设置弹簧的刚度。 |
| setDamping() | 设置弹簧的阻尼。 |
| setEquilibriumPoint() | 设置弹簧的平衡点。 |

```ts
let springConstraint = object.addComponent(Generic6DofSpringConstraint);
// 启用并配置弹簧：索引0、1、2对应线性轴(x, y, z)，3、4、5对应角度轴(x, y, z)
for (let j = 3; j < 6; j++) {
    dofSpringConstraint.enableSpring(j, true);
    dofSpringConstraint.setStiffness(j, 10.0);
    dofSpringConstraint.setDamping(j, 0.5);
    dofSpringConstraint.setEquilibriumPoint(j);
}
```

<Demo src="/examples/physics/dofSpringConstraint.ts"></Demo>

<<< @/public/examples/physics/dofSpringConstraint.ts

## 注意事项

当两个刚体通过约束连接时，目标刚体的连接点默认会位于自身刚体的中心位置。可以在创建约束时通过调整 `pivotSelf` 或 `pivotTarget` 属性来修改它们的相对位置。然而，如果两个刚体在添加约束前处于重叠状态，这可能会导致约束模拟的不稳定。建议在添加约束前确保两个刚体没有重叠。

## 示例

合理配置物理约束可以显著提升物理模拟的表现力和真实性。以下示例展示了刚体、多种约束和软体之间的相互联动，充分体现了它们的协同作用。

<Demo src="/examples/physics/MultipleConstraints.ts"></Demo>

<<< @/public/examples/physics/MultipleConstraints.ts
