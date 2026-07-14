# Large-World Rendering (RTE)

When objects in a scene are very far from the world origin (for example, at planetary scale, orbital scale, or extremely large maps, where coordinates can easily reach millions of meters), the precision of `32`-bit floating-point numbers is no longer sufficient to represent these coordinates stably, leading to problems such as **image jitter**, **z-fighting**, and **misaligned mesh seams**. `Orillusion` provides a set of capabilities including **RTE (Relative-To-Eye rendering)** to solve large-world precision problems.

::: tip Version Note
The RTE-related settings require `@orillusion/core` **0.9.0 or above**. The examples in this article are distilled from the engine's official sample `Sample_RTE`.
:::

## Principle

In ordinary rendering, a vertex's world coordinates are fed directly to the GPU. When these coordinate values are very large (such as `6378137`, on the order of Earth's radius), the floating-point number has hardly any significant bits left to allocate to the "fractional/local offset", so as soon as the camera moves slightly, the object jumps on the screen.

The core idea of **RTE** is to **transform the world into a space "with the camera as the origin" before rendering**. The coordinate values near the camera thus fall back to a very small range, allowing floating-point precision to be concentrated on the local detail that actually needs it, thereby eliminating jitter when far from the origin.

It is usually used together with two other capabilities:

- **Double-precision matrices (`doublePrecision`)**: compute world matrices in double precision to further preserve transformation precision under large coordinates.
- **Logarithmic depth (`useLogDepth`)**: use a logarithmic depth buffer to allocate depth precision (more near, less far), pairing with an extremely large far clipping plane (the far-to-near ratio can reach tens of millions) to avoid z-fighting.

## Enabling RTE

Just turn on the relevant toggles in the `setting` of `Engine3D.init`:

```ts
import { Engine3D } from '@orillusion/core';

const engine = await Engine3D.init({
    setting: {
        useRTE: true,            // enable relative-to-eye rendering
        RTEScale: 1.0,           // RTE coordinate scaling factor, generally keep the default
        doublePrecision: true,   // enable double-precision matrices
        render: {
            useLogDepth: true,   // enable the logarithmic depth buffer
        },
    },
});
```

| Setting | Type | Default | Description |
| --- | --- | --- | --- |
| `useRTE` | `boolean` | `false` | Whether to render based on the camera position (relative-to-eye space); enable for large-world scenes |
| `RTEScale` | `number` | `1.0` | The scaling factor for RTE coordinates; generally keep the default, adjust only when a unit conversion of the whole world is needed |
| `doublePrecision` | `boolean` | `false` | Whether to use double-precision matrices to compute world transformations |
| `render.useLogDepth` | `boolean` | `false` | Whether to use the logarithmic depth buffer, paired with an extremely large far clipping plane to avoid z-fighting |

## Companion: Extremely Large Far Clipping Plane

A large-world camera's far clipping plane must be set large enough to cover the entire scene. For example, taking Earth's radius (about `6378137` meters) as the baseline, set the far clipping plane to several times that:

```ts
import { CameraUtil, Vector3 } from '@orillusion/core';

const camera = CameraUtil.createCamera3DObject(scene);
// Near 1 meter, far = Earth's radius × 4; combined with logarithmic depth this renders stably
camera.perspective(60, engine.aspect, 1.0, 6378137 * 4);

// At planetary scale, the camera generally lookAt the target point directly
camera.lookAt(viewPoint, targetPoint, Vector3.UP);
```

## Companion: Floating-Origin Geometry

RTE solves precision at the "rendering stage"; if the geometry's own vertex data is stored directly with absolute large coordinates, **precision is already lost when building it on the CPU side**. The best practice is to use a **floating origin**: pick a center point for each object, store the vertex data as "small offsets relative to the center", then place the object node at the world coordinates of that center.

```ts
import { Object3D, MeshRenderer, GeometryBase, VertexAttributeName, Vector3 } from '@orillusion/core';

// 1) Inside the geometry: vertices store offsets "relative to the center point"
class TileGeometry extends GeometryBase {
    public centerPoint: Vector3 = new Vector3();

    constructor(/* ... */) {
        super();
        // Compute the center of this tile (absolute world coordinates, possibly a million-scale large number)
        this.centerPoint = computeCenter(/* ... */);

        const vertices = new Float32Array(vertexCount * 3);
        for (let i = 0; i < vertexCount; i++) {
            const absolute = computeVertexWorldPos(i);        // absolute large coordinates
            const relative = absolute.sub(this.centerPoint);  // subtract the center → small offset
            vertices[i * 3 + 0] = relative.x;
            vertices[i * 3 + 1] = relative.y;
            vertices[i * 3 + 2] = relative.z;
        }
        this.setAttribute(VertexAttributeName.position, vertices);
        // ... set index / normal / uv
    }
}

// 2) Node: place the object at the absolute world coordinates of the center point
const geo = new TileGeometry(/* ... */);
const obj = new Object3D();
obj.localPosition = geo.centerPoint;   // large coordinates only appear in the node position, absorbed by RTE during rendering

const mr = obj.addComponent(MeshRenderer);
mr.geometry = geo;
scene.addChild(obj);
```

This way, the "large values" only exist in the node's `localPosition`, and are uniformly transformed into camera space and absorbed by RTE during the rendering stage; what enters the vertex buffer is always the precision-friendly small offset.

## Example

This example demonstrates a complete Earth-scale scene: it converts latitude/longitude coordinates into Earth ellipsoid coordinates, loads satellite imagery by tile, builds each tile's geometry with a floating origin, and provides toggles to compare in real time the image stability before and after enabling `useRTE` / `doublePrecision`.

<Demo src="/demos/advanced/Sample_rte.ts"></Demo>

<<< @/public/demos/advanced/Sample_rte.ts

## Summary

- When a large world (Earth/planetary scale) exhibits jitter or z-fighting, enable the trio of `useRTE`, `doublePrecision`, and `render.useLogDepth`;
- Set the camera's far clipping plane large enough;
- Use a **floating origin** for geometry: vertices store relative offsets, and the large coordinates are placed only in the node's `localPosition`.
