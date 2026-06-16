# Mesh
`mesh` describes the model's geometric information `(geometry)` and material information `(material)`. If you want to use an `Object3D` object to display a 3D model, then it must add the [MeshRenderer](/api/classes/MeshRenderer) component, which mainly contains two properties:
1. The `geometry` object, which determines the specific geometric shape of the object, including `vertex position`, `topology`, `UV`, etc.;
2. The `material` object, which determines the material style presented by the object, including `texture`, `color`, `transparency`, and other properties.

`Orillusion` has several common built-in geometries, making it easy to create different `mesh` types:
## Box
The [BoxGeometry](/api/classes/BoxGeometry) class provides box creation functionality.
Parameter overview:
| Parameter | Description |
| --- | --- |
| width | The width along the X axis, default value is 1. |
| height | The height along the Y axis, default value is 1. |
| depth | The depth along the Z axis, default value is 1. |

Example:
```ts
import {Object3D, MeshRenderer, BoxGeometry} from '@orillusion/core';

let obj = new Object3D();
// Add MeshRenderer component
let mr = obj.addComponent(MeshRenderer);
// Set the component geometry
mr.geometry = new BoxGeometry(5,2,3);
```

<Demo src="/demos/mesh/box.ts"></Demo>

<<< @/public/demos/mesh/box.ts


## Sphere
The [SphereGeometry](/api/classes/SphereGeometry) class provides sphere creation functionality.
Parameter overview:
| Parameter | Description |
| --- | --- |
| widthSegments | Number of horizontal segments of the sphere (segmented along meridians) |
| heightSegments | Number of vertical segments of the sphere (segmented along parallels) |
| phiStart | (Optional) Specifies the horizontal (meridian) start angle |
| phiLength | (Optional) Specifies the size of the horizontal (meridian) sweep angle, the arc length of the sphere's equator |
| thetaStart | (Optional) Specifies the vertical (parallel) start angle |
| thetaLength | (Optional) Specifies the size of the vertical (parallel) sweep angle |

Example:
```ts
import {Object3D, MeshRenderer, SphereGeometry} from '@orillusion/core';

let obj = new Object3D();
// Add MeshRenderer component
let mr = obj.addComponent(MeshRenderer);
// Set the component geometry
mr.geometry = new SphereGeometry(2, 50, 50);
```

<Demo src="/demos/mesh/sphere.ts"></Demo>

<<< @/public/demos/mesh/sphere.ts


## Cylinder
The [CylinderGeometry](/api/classes/CylinderGeometry) class provides cylinder creation functionality.

Parameter overview:
| Parameter | Description |
| --- | --- |
| radiusTop | Top radius, default value is 1 |
| radiusBottom | Bottom radius, default value is 1 |
| height | Barrel height, default value is 1 |
| radialSegments | Number of subdivisions of the circular face, default value is 8 |
| heightSegments | Number of subdivisions of the barrel wall, default value is 8 |
| openEnded | Whether it is an open barrel (with top and bottom faces), default value is false |
| thetaStart | The start angle of the first segment, default value is 0 |
| thetaLength | The central angle of the circular sector, default value is Math.PI * 2 |

Example:
```ts
import {Object3D, MeshRenderer, CylinderGeometry} from '@orillusion/core';

let obj = new Object3D();
// Add MeshRenderer component
let mr = obj.addComponent(MeshRenderer);
// Set the component geometry
mr.geometry = new CylinderGeometry(2, 2, 10);
```
<Demo src="/demos/mesh/cylinder.ts"></Demo>

<<< @/public/demos/mesh/cylinder.ts

## Torus
The [TorusGeometry](/api/classes/TorusGeometry) class provides torus creation functionality.

Parameter overview:
| Parameter | Description |
| --- | --- |
| radius | Torus radius, default value 0.4 |
| tube | Tube radius, default value 0.1 |
| radialSegments | Number of subdivisions of the torus, default value 32 |
| tubularSegments | Number of subdivisions of the tube, default value 32 |

Example:
```ts
import {Object3D, MeshRenderer, TorusGeometry} from '@orillusion/core';

let obj = new Object3D();
// Add MeshRenderer component
let mr = obj.addComponent(MeshRenderer);
// Set the component geometry
mr.geometry = new TorusGeometry(3, 1, 32, 32);
```
<Demo src="/demos/mesh/torus.ts"></Demo>

<<< @/public/demos/mesh/torus.ts

## Plane
The [PlaneGeometry](/api/classes/PlaneGeometry) class provides plane creation functionality.

Parameter overview:
| Parameter | Description |
| --- | --- |
| width | The width of the plane along the X axis. Default value is 1. |
| height | The height of the plane along the Y axis. Default value is 1. |
| segmentW | The number of width segments of the plane, default value is 1. |
| segmentH | The number of height segments of the plane, default value is 1. |
| up | The orientation of the plane, default value is Vector3.Y_AXIS. |

Example:
```ts
import {Object3D, MeshRenderer, PlaneGeometry} from '@orillusion/core';

let obj = new Object3D();
// Add MeshRenderer component
let mr = obj.addComponent(MeshRenderer);
// Set the component geometry
mr.geometry = new PlaneGeometry(100, 100, 1, 1);
```
<Demo src="/demos/mesh/plane.ts"></Demo>

<<< @/public/demos/mesh/plane.ts

## Extrude Geometry
The [ExtrudeGeometry](/api/classes/ExtrudeGeometry.md) class provides the functionality to extrude a geometry from a shape path.

Example:
```ts
import {Object3D, MeshRenderer, ExtrudeGeometry, Vector3} from '@orillusion/core';

let conduitObject3D = new Object3D();
// Add MeshRenderer component
let mr = conduitObject3D.addComponent(MeshRenderer);
// Create a custom shape
let shape: Vector3[] = [], vertexCount = 8, shapeRadius = 1
for (let i = 0; i < vertexCount; i++) {
    let angle = Math.PI * 2 * i / vertexCount;
    let point = new Vector3(Math.sin(angle), 0, Math.cos(angle)).multiplyScalar(shapeRadius);
    shape.push(point);
}
// Create a custom path
let curve: Vector3[] = [], sectionCount = 60, modelRadius = 4
for (let i = 0; i < sectionCount; i++) {
    let angle = Math.PI * 2 * i / 20;
    modelRadius += 0.1 * i / sectionCount;
    let offsetY = 0.6 - Math.sqrt(i / sectionCount);
    let point = new Vector3(Math.sin(angle), offsetY * 6, Math.cos(angle)).multiplyScalar(modelRadius);
    curve.push(point);
}
// Create Extrude Geometry
mr.geometry = new ExtrudeGeometry().build(shape, true, curve, 0.2);
```

<Demo src="/demos/mesh/extrude.ts"></Demo>

<<< @/public/demos/mesh/extrude.ts

## Custom Geometry
We can customize the shape of a geometry by updating the vertices [vertexBuffer](/api/classes/GeometryVertexBuffer) of an existing geometry

Example:
```ts
import {Object3D, MeshRenderer, PlaneGeometry, LitMaterial, VertexAttributeName} from '@orillusion/core';

let obj = new Object3D();
// Add MeshRenderer component
let mr = obj.addComponent(MeshRenderer);
// Set a plane as the base, defining the size and number of segments
mr.geometry = new PlaneGeometry(100, 100, 100, 100);
mr.material = new LitMaterial()

// Get the existing vertex information
let posAttrData = mr.geometry.getAttribute(VertexAttributeName.position);
// Rewrite all vertex xyz coordinates
for (let i = 0, count = posAttrData.data.length / 3; i < count; i++) {
    posAttrData.data[i * 3 + 0] = Math.random(); // position x
    posAttrData.data[i * 3 + 1] = Math.random(); // position y
    posAttrData.data[i * 3 + 2] = Math.random(); // poisiton z
}
// Update the vertex information
mr.geometry.vertexBuffer.upload(VertexAttributeName.position, posAttrData);
// Recompute the normals
mr.geometry.computeNormals();
```
We can even change the vertex information every frame in the main loop

<Demo src="/demos/mesh/custom.ts"></Demo>

<<< @/public/demos/mesh/custom.ts


## Geometry Extensions

In addition to the common built-in geometries above, the engine also provides the [@orillusion/geometry](/geometry/) geometry extension package, which currently contains extensions and utility classes such as the font geometry `TextGeometry`, the 2D extrude geometry `ExtrudeGeometry`, the terrain geometry `TerrainGeometry`, etc.

Users can quickly introduce the geometry plugin via the `NPM` package:

```bash
npm install @orillusion/core --save
npm install @orillusion/geometry --save
```

```ts
import { Engine3D } from "@orillusion/core"
import { TextGeometry } from "@orillusion/geometry"
```
Or the `UMD` version
```html
<script src="https://unpkg.com/@orillusion/core/dist/orillusion.umd.js"></script>
<script src="https://unpkg.com/@orillusion/geometry/dist/geometry.umd.js"></script>
<script>
  const { Engine3D, Geometry } = Orillusion
  const { ExtrudeGeometry, TextGeometry } = Geometry
</script>
```
### 2D Extrude
Similar to but different from the built-in [ExtrudeGeometry](/api/classes/ExtrudeGeometry.md), this extension class simplifies the data and supports generating spatial geometries from [Shape2D](/geometry/classes/Shape2D.md) planar shapes.

<Demo src="/examples/geometry/ExtrudeGeometry.ts"></Demo>

<<< @/public/examples/geometry/ExtrudeGeometry.ts

### Font Geometry

Supports creating spatial text geometries from common font files `woff`, `otf`, `ttf`

<Demo src="/examples/geometry/TextGeometry.ts"></Demo>

<<< @/public/examples/geometry/TextGeometry.ts

### Terrain Geometry

Supports quickly creating `3D` terrain geometries from a `2D` height map or elevation map

<Demo src="/examples/geometry/TerrainGeometry.ts"></Demo>

<<< @/public/examples/geometry/TerrainGeometry.ts

### Grass Geometry

Creates simulated grassland terrain, and combined with the [grass component](/geometry/classes/GrassComponent) can simulate a dynamic effect of swaying in the wind

<Demo src="/examples/geometry/GrassGeometry.ts"></Demo>

<<< @/public/examples/geometry/GrassGeometry.ts
