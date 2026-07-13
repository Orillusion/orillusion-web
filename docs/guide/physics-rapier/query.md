# 物理查询

`PhysicsQuery` 提供了射线、扫掠、重叠等空间查询能力，用于拾取、视线检测、范围检测等场景。这是 Rapier 版相较 Ammo 版新增的公开能力。

```ts
import { PhysicsQuery } from '@orillusion/physics-rapier';
import { Vector3 } from '@orillusion/core';
```

## 射线检测（raycast）

从 `origin` 沿 `dir` 方向发射射线，返回最近的命中：

```ts
const hit = PhysicsQuery.raycast(origin, dir, { maxDistance: 100 });
if (hit) {
    console.log(hit.rigidbody); // 命中的刚体
    console.log(hit.point);     // 命中点（世界坐标）
    console.log(hit.normal);    // 命中表面法线
}
```

`raycastAll(origin, dir, options)` 则返回路径上的所有命中。

## 重叠检测（overlap）

检测某个形状在指定位置/朝向下与哪些物体重叠：

```ts
const overlapping = PhysicsQuery.overlap(
    CollisionShapeUtil.createBoxShape(obj, new Vector3(2, 2, 2)),
    pos,   // 位置 Vector3
    rot,   // 朝向 Quaternion
    { excludeSensors: true },
);
```

## 方法一览

| 方法 | 说明 |
| --- | --- |
| `raycast(origin, dir, options?)` | 射线，返回最近命中（或 `null`） |
| `raycastAll(origin, dir, options?)` | 射线，返回所有命中 |
| `sweep(shape, from, to, options?)` | 形状扫掠检测 |
| `overlap(shape, pos, rot, options?)` | 形状重叠检测 |
| `closestPoint(point, options?)` | 最近点查询 |

> 常用选项：`maxDistance`（最大距离）、`excludeSensors`（是否排除触发器）等。

## 示例

<Demo src="/demos/physics-rapier/Sample_rapierRaycast.ts"></Demo>

<<< @/public/demos/physics-rapier/Sample_rapierRaycast.ts
