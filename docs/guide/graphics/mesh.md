# Mesh
`Mesh` describes the geometric information `(geometry)` and material information `(material)` of the model. If you want to use an `Object3D` object to display a 3D model, then it must add the [MeshRenderer](/api/classes/MeshRenderer) component, which mainly contains two properties:
1. `Geometry` object, which determines the specific geometry of the object, including `vertex position`, `topology`, `UV`, etc.;
2. `Material` object, which determines the material ball style of the object, including `texture`, `color`, `transparency`, etc.

`Orillusion` has several built-in geometry types, which can be used to create different types of `mesh`:
## Rectangular Cuboid
[BoxGeometry](/api/classes/BoxGeometry) class provides the function of creating a rectangular box.
Parameters overview:

| Parameter | Description                                       |
|-----------|---------------------------------------------------|
| width     | The width on the X axis. The default value is 1.  |
| height    | The height on the Y axis. The default value is 1. |
| depth     | The depth on the Z axis. The default value is 1.  |

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
[SphereGeometry](/api/classes/SphereGeometry) class provides the function of creating a sphere.
Parameters overview:

| Parameter      | Description                                                                     |
|----------------|---------------------------------------------------------------------------------|
| widthSegments  | The number of segments that make up the sphere along the width (longitude).     |
| heightSegments | The number of segments that make up the sphere along the height (latitude).     |
| phiStart       | (Optional) The starting angle, in radians, of the horizontal (longitude) lines. |
| phiLength      | (Optional) The central angle, in radians, of the horizontal (longitude) lines.  |
| thetaStart     | (Optional) The starting angle, in radians, of the vertical (latitude) lines.    |
| thetaLength    | (Optional) The central angle, in radians, of the vertical (latitude) lines.     |

Example:
```ts
import {Object3D, MeshRenderer, SphereGeometry} from '@orillusion/core';

let obj = new Object3D();
// Add MeshRenderer
let mr = obj.addComponent(MeshRenderer);
// Set the component geometry   
mr.geometry = new SphereGeometry(2, 50, 50);
```

<Demo src="/demos/mesh/sphere.ts"></Demo>

<<< @/public/demos/mesh/sphere.ts


## Cylinder
[CylinderGeometry](/api/classes/CylinderGeometry) class provides the function of creating a cylinder.
Parameters overview:

| Parameter      | Description                                                                                |
|----------------|--------------------------------------------------------------------------------------------|
| radiusTop      | Top radius. The default value is 1.                                                        |
| radiusBottom   | Bottom radius. The default value is 1.                                                     |
| height         | The height of the cylinder. The default value is 1.                                        |
| radialSegments | The number of subdivisions around the circumference of the circle. The default value is 8. |
| heightSegments | The number of subdivisions along the height of the cylinder. The default value is 8.       |
| openEnded      | Whether the cylinder is open (with top and bottom). The default value is false.            |
| thetaStart     | The starting angle of the first segment, in radians. The default value is 0.               |
| thetaLength    | The central angle of the circular sector, in radians. The default value is Math.PI * 2.    |

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
[TorusGeometry](/api/classes/TorusGeometry) class provides the function of creating a Torus.

Parameters overview:

| Parameter | Description |
| --- | --- |
| radius | The radius of the Torus，default value 0.4 |
| tube | The pipe radius，default value 0.1 |
| radialSegments | Number of torus segments, default value 32 |
| tubularSegments | Number of pipeline segments，default value 32 |

Example:
```ts
import {Object3D, MeshRenderer, TorusGeometry} from '@orillusion/core';

let obj = new Object3D();
// Add MeshRenderer component
let mr = obj.addComponent(MeshRenderer);
// set a torus geometry
mr.geometry = new TorusGeometry(3, 1, 32, 32);
```
<Demo src="/demos/mesh/torus.ts"></Demo>

<<< @/public/demos/mesh/torus.ts

## Plane
[PlaneGeometry](/api/classes/PlaneGeometry) class provides the function of creating a plane.
Parameters overview:

| Parameter | Description                                                                   |
|-----------|-------------------------------------------------------------------------------|
| width     | The width of the plane along the X axis. The default value is 1.              |
| height    | The height of the plane along the Y axis. The default value is 1.             |
| segmentW  | The number of segments along the width of the plane. The default value is 1.  |
| segmentH  | The number of segments along the height of the plane. The default value is 1. |
| up        | The direction of the plane. The default value is Vector3.Y_AXIS.              |

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

## Custom Geometry
We can customize the shape of the geometry by updating the vertices of the existing geometry’s [vertexBuffer](/api/classes/GeometryVertexBuffer).

Example：
```ts
import {Object3D, MeshRenderer, PlaneGeometry, LitMaterial, VertexAttributeName} from '@orillusion/core';

let obj = new Object3D();
// Add MeshRenderer component
let mr = obj.addComponent(MeshRenderer);
// Set a base plane geometry, easy to set size and segments
mr.geometry = new PlaneGeometry(100, 100, 100, 100);
mr.material = new LitMaterial()

// get current vertex position buffer
let posAttrData = mr.geometry.getAttribute(VertexAttributeName.position);
// you can reset all vertex position
for (let i = 0, count = posAttrData.data.length / 3; i < count; i++) {
    posAttrData.data[i * 3 + 0] = Math.random(); // position x
    posAttrData.data[i * 3 + 1] = Math.random(); // position y
    posAttrData.data[i * 3 + 2] = Math.random(); // poisiton z
}
// reuplaod the vertex buffer
mr.geometry.vertexBuffer.upload(VertexAttributeName.position, posAttrData);
// recompute normal buffer
mr.geometry.computeNormals();
```
We can even change the vertex buffer in the main loop every frame:

<Demo src="/demos/mesh/custom.ts"></Demo>

<<< @/public/demos/mesh/custom.ts