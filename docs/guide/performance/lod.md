# LOD (Level of Detail)

The farther an object is from the camera, the smaller it appears on screen, and drawing it with as many triangles as up close is wasted work. LOD (Level of Detail) prepares several models of the same object with different amounts of detail: the detailed model up close, simplified ones in the distance, and nothing at all farther away, greatly reducing the drawing work with almost no visible difference.

The `LODGroup` component handles the switching. You register several levels with it, each a set of `Object3D`s with a threshold; every frame it measures the object's current size (or distance) from the camera, shows exactly one level and hides the others through `transform.enable`.

## Basic Usage

Usually the models of all levels are children of one parent object, which carries the `LODGroup`:

```ts
import { Object3D, LODGroup, MeshRenderer, SphereGeometry, BoxGeometry } from '@orillusion/core';

const root = new Object3D();
const lod = root.addComponent(LODGroup);

// Three levels: high-poly sphere, low-poly sphere, box
const high = createMesh(new SphereGeometry(1.5, 48, 48));
const mid = createMesh(new SphereGeometry(1.5, 8, 8));
const low = createMesh(new BoxGeometry(2.4, 2.4, 2.4));
root.addChild(high);
root.addChild(mid);
root.addChild(low);

// Thresholds: the object's diameter as a fraction of the viewport height
lod.addLevel(high, 0.12); // shown above 12% of the screen height
lod.addLevel(mid, 0.05);  // 5% ~ 12%
lod.addLevel(low, 0.015); // 1.5% ~ 5%; hidden when smaller

scene.addChild(root);
```

- `addLevel(objects, threshold)` takes one or more `Object3D`s. Levels are sorted from most to least detailed automatically, so they can be added in any order; the return value is the level's index after sorting;
- levels are shown and hidden through `transform.enable`, which also covers their children, so a level can be a whole glTF node tree;
- a level is hidden as soon as it is registered, and the right one is shown on the next update;
- `LODGroup`s can share geometries and materials; switching levels only changes visibility and creates no new resources.

## What Drives the Switch

`mode` decides how the object's "size" is measured; the unit of the thresholds follows it:

| `LODMode` | Measure | Threshold |
| --- | --- | --- |
| `ScreenSize` | Default. The diameter of the object's bounding sphere as a fraction of the viewport height (`0 ~ 1`), taking the camera's field of view into account (orthographic cameras use `frustumSize`), so levels switch at the same **apparent size** whatever the lens or distance | The **minimum** fraction for which the level stays visible, e.g. `0.5`, `0.15`, `0.03` |
| `Distance` | World-space distance from the camera to the object | The **maximum** distance for which the level stays visible, e.g. `20`, `60`, `150` |

Both measure from the world position of the object that carries the `LODGroup`. The bounding-sphere radius used by `ScreenSize` is computed automatically by default, as the distance from that position to the farthest corner of the levels' bounding boxes, or can be set with `radius`. Call `recalculateBounds()` after changing geometry or scale.

After switching `mode`, the old thresholds are in the wrong unit; set new ones with `setThresholds()`, from most to least detailed:

```ts
import { LODMode } from '@orillusion/core';

lod.mode = LODMode.Distance;
lod.setThresholds([25, 60, 200]); // high-poly within 25, low-poly 25 ~ 60, box 60 ~ 200
```

## Properties and Methods

| Property | Default | Description |
| --- | --- | --- |
| `mode` | `LODMode.ScreenSize` | What drives the switch, see above |
| `bias` | `1` | Global scale factor. Above `1` keeps detailed levels longer (in the same direction in both modes); can serve as a global quality setting |
| `hysteresis` | `0.1` | Dead band around the thresholds, as a fraction. Dropping to a coarser level happens as soon as a threshold is crossed, while going back to a finer level needs `threshold × (1 + hysteresis)`, so an object parked near a boundary does not flicker |
| `cullBeyondLast` | `true` | Whether to hide every level once the last threshold is crossed; with `false` the coarsest level stays visible |
| `forceLevel` | `null` | Force a level (for debugging): `null` is automatic, a number is a level index, `LODGroup.CULLED` hides everything |
| `camera` | `null` | Camera used for the measure; defaults to the camera of the current view |
| `radius` | `null` | Bounding-sphere radius used in `ScreenSize` mode; `null` computes it automatically |

| Read-only property | Description |
| --- | --- |
| `levels` | All levels, from most to least detailed |
| `currentLevel` | Index of the level shown, or `LODGroup.CULLED` (`-1`) when everything is hidden |
| `lastMetric` | The screen fraction or distance measured on the last update |

| Method | Description |
| --- | --- |
| `addLevel(objects, threshold)` | Add a level; returns its index after sorting |
| `removeLevel(index)` | Remove a level; its objects are shown again and no longer managed |
| `setThreshold(index, threshold)` | Change one level's threshold. Levels are re-sorted, so the indices of other levels may change |
| `setThresholds(thresholds)` | Rewrite every threshold in the current order, then sort once; usually paired with a `mode` switch |
| `recalculateBounds()` | Drop the automatically computed radius; it is recomputed on the next update |
| `measure(camera)` | Compute the current screen fraction or distance for a camera, without changing any state |

The `onLevelChange` callback is called when the shown level changes, for example to switch other content along with it, such as turning off particle effects in the distance:

```ts
lod.onLevelChange = (level, previous) => {
    // level is LODGroup.CULLED when everything is hidden
    effect.enable = level === 0;
};
```

::: tip
- When the `LODGroup` component is destroyed, the objects of every level are shown again;
- when an object with a `LODGroup` is cloned, level objects that are its children are mapped to the clone's children.
:::

## Example

The scene below has 24 × 24 objects, each with three levels: a green high-poly sphere (about 4,600 triangles), a yellow low-poly sphere (128 triangles) and a red box (12 triangles), hidden farther away. Zoom and orbit the camera to watch the colored rings change; the panel shows live counts per level and the total number of triangles, and lets you switch the measure, adjust `bias` and `hysteresis`, or force a level. From the default view the scene draws about 120,000 triangles; with `forceLevel` set to `0`, showing every high-poly model, it would take about 2.65 million.

<Demo src="/examples/benchmark/LOD.ts"></Demo>

<<< @/public/examples/benchmark/LOD.ts
