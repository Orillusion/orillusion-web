# 3D Graphic

`Orillusion` provides an extension package [@orillusion/graphic](/graphic/) for rendering dynamically changing points, lines, surfaces, and volumes. This package allows for the creation of dynamic meshes using specific methods, which are efficiently managed and integrated into the engine's rendering pipeline. It is both high-performance and user-friendly.


Three main modules are available for creating high-performance graphic data:

`Graphic3D`: Provides basic line drawing capabilities, commonly used for drawing auxiliary lines.
`Graphic3DMesh` Renderer: Allows batch creation of `Mesh` clones in a single renderer, with the ability to freely adjust each clone's `Transform`, `Texture`, and `Material`, offering high flexibility in creating graphics and animations.
`Shape3D` Renderer: Creates complex custom `Shape3D` objects, such as `EllipseShape3D`, `RoundRectShape3D`, `CircleShape3D`, etc. For `Shape3D` objects with continuous drawing capabilities, such as `Path2DShape3D` and `Path3DShape3D`, the design references the  [CanvasPath](https://developer.mozilla.org/en-US/docs/Web/API/Path2D) API, allowing developers to use familiar methods for graphic rendering.

## Installation
Like the engine itself, the graphic plugins can be introduced using `NPM` or `CDN` links:

### 1. Installing via `NPM` Packages
```bash
npm install @orillusion/core --save
npm install @orillusion/graphic --save
```
```ts
import { Engine3D } from "@orillusion/core"
import { Graphic3D, Shape3D } from "@orillusion/graphic"
```

### 2. Installing via `CDN` links
It is recommended to use the `ESModule` build version
```html
<script type="module">
  import { Engine3D } from "https://unpkg.com/@orillusion/core/dist/orillusion.es.js" 
  import { Graphic3D, Shape3D } from "https://unpkg.com/@orillusion/graphic/dist/graphic.es.js" 
</script>
```

Or, load the `UMD` build version using `<script>`, accessing the `Shape3D` module from the global `Orillusion` variable:
```html
<script src="https://unpkg.com/@orillusion/core/orillusion.umd.js"></script>
<script src="https://unpkg.com/@orillusion/stats/dist/graphic.umd.js"></script>
<script>
  const { Engine3D, Graphic3D, Shape3D } = Orillusion
</script>
```

## `Graphic3D`
Create a `Graphic3D` object to uniformly draw graphics in the scene. Currently, three `APIs` are provided for quick creation of different line combinations: `drawLines`, `drawBox`, and `drawCircle`.

### Basic Methods
```ts
import {Graphic3D} from '@orillusion/graphic'
// ...

// Create a Graphic3D object
let graphic3D = new Graphic3D();
// Add to the scene
scene.addChild(graphic3D);

// Use graphic3D to uniformly draw lines
// line - (uid, [start1, end1, start2, end2, ...], color)
graphic3D.drawLines('line', [new Vector3(0, 0, 0), new Vector3(0, 10, 0)], new Color(1, 0, 0));
// box - (uid, center, size, color)
graphic3D.drawBox('box', new Vector3(-5, -5, -5), new Vector3(5, 5, 5), new Color(0, 1, 0));
// circle - (uid, center, radius, segments, up, color)
graphic3D.drawCircle('circle', new Vector3(-15, -5, -5), 5, 15, Vector3.X_AXIS, new Color(0, 0, 1));
```

<Demo src="/examples/graphic/GraphicLine.ts"></Demo>

<<< @/public/examples/graphic/GraphicLine.ts


## `Graphic3DMesh` Renderer
By `Graphic3DMesh.draw()`, we can create an instance of `Graphic3DMeshRenderer`， This object can be viewed as a collection of multiple cloned `Geometry` objects. For each object in this collection, you can set the position and texture to achieve the desired visual effect.

| Parameter | Description |
| --- | --- |
| scene | which scene to add the renderer |
| geo | which geometry to clone |
| texture | the index of a given texture array |
| count | maximum number of clones in the collection that a renderer can support (choosing an appropriate value will improve performance) |

::: tip
The `geo` parameter typically uses a simple `PlaneGeometry` as the model source, with different textures applied to create various appearances. In theory, you can use any model source to create diverse effects. For example, by using a `BoxGeometry` model, you can create graphics composed of many cubes, enabling the creation of pixel art-style scenes or simulating voxel rendering.
:::

1. Modifying `Transform`: To modify the rotation, scale, or position of a specific unit at a given index, access the `object3Ds` belonging to the `Graphic3DMeshRenderer`. Use the index to obtain the corresponding `Object3D` and adjust its `Transform`. This change will be synchronized with the target unit.  

2. Modifying `Texture`: Call the function `setTextureID` to specify and modify the texture index for a particular unit at a given index. The textures are sourced from the textures array provided in the initialization parameters of the `Graphic3DMeshRenderer`.  

3. Modifying `Material`: The `Graphic3DMeshRenderer` class provides a series of APIs with names similar to `setTextureID`. The first parameter specifies the target unit, while the second parameter sets the relevant properties. Developers can use these APIs to modify various aspects of the graphics, such as `Color`, `UV`, `Emissive` properties, and more.

### Example

```ts
import { Object3D, Scene3D, Engine3D, BitmapTexture2DArray, BitmapTexture2D, PlaneGeometry, Vector3, Matrix4, Time, BlendMode, Color, ColorUtil } from "@orillusion/core";
import { Graphic3D, Graphic3DMesh, Graphic3DMeshRenderer } from '@orillusion/graphic';

// Load textures
let textureArray = [];
textureArray.push(await Engine3D.res.loadTexture("path/to/texture.png") as BitmapTexture2D);
let bitmapTexture2DArray = new BitmapTexture2DArray(textureArray[0].width, textureArray[0].height, textureArray.length);

bitmapTexture2DArray.setTextures(textureArray);

// take a plane as the clone sorce
let geometry = new PlaneGeometry(1, 1, 1, 1, Vector3.Z_AXIS);

// Create a Graphic3DMeshRenderer instance with maxium 100 clones
let mr:Graphic3DMeshRenderer = Graphic3DMesh.draw(scene, geometry, bitmapTexture2DArray, 100);

// set material properties
mr.material.blendMode = BlendMode.ADD;
mr.material.transparent = true;
mr.material.depthWriteEnabled = false;
mr.material.useBillboard = true;

// Get the corresponding object3Ds and modify the Transform property of that Object3D to synchronously update the Transform of the target clone
// By placing the same operation in the main update function of the engine, you can modify it every frame to drive the animation effect
let parts = mr.object3Ds;
for (let i = 0; i < 100; i++) {
    const element = parts[i];
    // set texture index from textureArray
    mr.setTextureID(i, 0);
    // update transform
    element.transform.x = 1;
    element.transform.scaleX = 1;
    element.transform.rotationX = 0;
    // ...
}

```

<Demo src="/demos/graphics/graphic_mesh3d.ts"></Demo>

<<< @/public/demos/graphics/graphic_mesh3d.ts

> See more `Graphic3D` API usage in [Graphic3D](/example/graphic/GraphicMesh.html)

## `Shape3D` Renderer

By `Shape3DMaker`, we can create a `Shape3DRenderer` renderer，which can hold and maintain a dataset of `Shape3D` objects. Each Shape3D corresponds to a variety of predefined shapes, such as `EllipseShape3D`、`RoundRectShape3D`、`CircleShape3D` and so on.  Additionally, `Path2DShape3D` and `Path3DShape3D` offer a more extensive API that can assist you in combining and drawing complex graphics.

| Parameter | Description |
| --- | --- |
| name | name to identify Shape3DRenderer |
| scene | which scene to add the renderer |
| textureList | the index of a given texture array |
| maxNodeCount | maximum number of nodes in the collection that a renderer can support |
| triangleEachNode | how many triangles to draw for each node |

 > The renderer is designed based on the API of `CanvasPath`, allowing developers to continue using familiar development practices while working with the `Orillusion` engine for 3D graphics rendering. The 2D drawing section of the renderer refers to drawing points, lines, and surfaces in the XZ plane. Each unit can still be independently controlled via `Transform`. For drawing shapes in 3D space, you need to use `Path3DShape3D` to begin drawing graphics that incorporate Y-axis elevation data.


### Properties

The following table provides a brief summary and description of the properties of `Shape3D`.

| Property | Description |
| --- | --- |
| lineColor | The color additive when drawing lines |
| fillColor | The color additive when drawing filled areas |
| lineTextureID | Sets the texture used when drawing lines |
| fillTextureID | Sets the texture used when filling areas |
| fillRotation | Sets the rotation angle for textures used in filled areas |
| shapeOrder | Sets the layering of each shape (to eliminate z-fighting; each `Shape3DRenderer` can define the maximum range for z-fighting, and based on this range and the number of `Shape3D` instances, calculates the offset for each `Shape3D`) |
| points3D | A placeholder for externally provided key points collection |
| isClosed | Indicates whether the shape is closed (starts and ends at the same point) |
| fill | Indicates whether the shape is filled |
| lineWidth | The width of the line when drawn |
| lineUVRect | UV data: xy correspond to the offset of the line texture, and zw correspond to the scaling of the texture data |
| fillUVRect | UV data: xy correspond to the offset of the fill area texture, and zw correspond to the scaling of the texture data |
| uvSpeed | UV data: xy correspond to the movement speed of the UVs for the fill area texture; zw corresponds to the movement speed of the UVs for the line texture. |

### Shapes

Like the `CanvasPath` API, we have provided some subclasses of `Shape3D` for users to draw specific shapes:

| Shape | Description |
| --- | --- |
| CircleShape3D | Circle and arc shapes |
| CurveShape3D | Bezier curve controlled by two anchor points |
| EllipseShape3D | Elliptical shapes |
| LineShape3D | Polyline shapes |
| Path2DShape3D | Draws line paths on the XZ plane |
| Path3DShape3D | Draws line paths in 3D space |
| QuadraticCurveShape3D | Bezier curve controlled by one anchor point |
| RoundRectShape3D | Rectangle and rounded rectangle shapes |


### Methods

All instances from `Shape3DMaker` could create shapes by the following methods：
| Method | Shape |
| --- | --- |
| ellipse | EllipseShape3D |
| arc | CircleShape3D |
| line | LineShape3D |
| quadraticCurve | QuadraticCurveShape3D |
| curve | CurveShape3D |
| path2D | Path2DShape3D |
| path3D | Path3DShape3D |
| rect | RoundRectShape3D |
| roundRect | RoundRectShape3D |

:::tip
Path2D will ignore the y-axis elevation data, and will be drawn in the XZ plane.
:::

Additionally, we could create/delete `Shape3D` from `Shape3DRenderer`：

| Methods | Description |
| --- | --- |
| createShape | create a new Shape3D instance |
| removeShape | delete a Shape3D instance |
| getShapeObject3D | get the Object3D instance of a shape3D | 

### Usage

```ts
import { Object3D, Scene3D, Engine3D, BitmapTexture2DArray, BitmapTexture2D, PlaneGeometry, Vector3, Matrix4, Time, BlendMode, Color,ColorUtil } from "@orillusion/core";
import { CircleShape3D, EllipseShape3D, Shape3DMaker, Shape3D } from "@orillusion/graphic";

// load textures
let textureArray = [];
textureArray.push(await Engine3D.res.loadTexture("path/to/texture.png") as BitmapTexture2D);
let bitmapTexture2DArray = new BitmapTexture2DArray(textureArray[0].width, textureArray[0].height, textureArray.length);
bitmapTexture2DArray.setTextures(textureArray);

// create a Shape3DRenderer in the scene with a texture array
maker = Shape3DMaker.makeRenderer(`path`, bitmapTexture2DArray, scene);
maker.renderer.material.doubleSide = true;

// create a Circle shape with radius 5 at center (0, 0)
let circle:CircleShape3D = maker.arc(5, 0, 0);
circle.lineWidth = 1; // width of line
circle.segment = 16; // the segment of circle
circle.fill = true; // if fill the circle
circle.line = true; // if draw a line border
circle.uvSpeed = new Vector4(0, 0, 0, Math.random() - 0.5).multiplyScalar(0.005); // set UV speed
circle.fillColor = Color.randomRGB(); // set a fill color
circle.lineColor = Color.randomRGB(); // set a border color

circle.startAngle = 30; // set a start angle
circle.endAngle = 240; // set the end angle

// we could tween a animation of the circle by updating properties in the main loop

```

> The above code demonstrates how to draw an independent circle/arc by creating an instance of `CircleShape3D`. You can also achieve this by creating a generic `Path2DShape3D` instance and then calling its `arc()` function.

<Demo src="/demos/graphics/graphic_shape3d.ts"></Demo>

<<< @/public/demos/graphics/graphic_shape3d.ts

> See more `Shape3D` API usage in [Shape3D](/example/graphic/Shape3D.html)