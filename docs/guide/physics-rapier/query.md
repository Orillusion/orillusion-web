# Physics Query

`PhysicsQuery` provides spatial query capabilities such as raycasting, sweeping, and overlap testing, for scenarios like picking, line-of-sight detection, and range detection. This is a public capability newly added in the Rapier edition compared to the Ammo edition.

```ts
import { PhysicsQuery } from '@orillusion/physics-rapier';
import { Vector3 } from '@orillusion/core';
```

## Raycast

Cast a ray from `origin` along the `dir` direction, returning the nearest hit:

```ts
const hit = PhysicsQuery.raycast(origin, dir, { maxDistance: 100 });
if (hit) {
    console.log(hit.rigidbody); // The rigidbody that was hit
    console.log(hit.point);     // Hit point (world coordinates)
    console.log(hit.normal);    // Hit surface normal
}
```

`raycastAll(origin, dir, options)` returns all hits along the path.

## Overlap Test

Detect which objects a given shape overlaps with at a specified position/orientation:

```ts
const overlapping = PhysicsQuery.overlap(
    CollisionShapeUtil.createBoxShape(obj, new Vector3(2, 2, 2)),
    pos,   // Position Vector3
    rot,   // Orientation Quaternion
    { excludeSensors: true },
);
```

## Method Overview

| Method | Description |
| --- | --- |
| `raycast(origin, dir, options?)` | Raycast, returns the nearest hit (or `null`) |
| `raycastAll(origin, dir, options?)` | Raycast, returns all hits |
| `sweep(shape, from, to, options?)` | Shape sweep test |
| `overlap(shape, pos, rot, options?)` | Shape overlap test |
| `closestPoint(point, options?)` | Closest-point query |

> Common options: `maxDistance` (maximum distance), `excludeSensors` (whether to exclude triggers), etc.
