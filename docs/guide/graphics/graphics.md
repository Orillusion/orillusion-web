# Graphic Drawing

`Orillusion` provides the [@orillusion/graphic](/graphic/) extension package, mainly used for drawing points, lines, surfaces, and volumes that change in real time. Using specific methods, it creates a dynamic mesh that is uniformly managed and integrated into the engine's rendering pipeline, offering high performance and ease of use.

Currently, three modules are provided to create high-performance graphic data:
1. `Graphic3D`: Provides basic line drawing capabilities, commonly used for drawing auxiliary lines.
1. `Graphic3DMesh` Renderer: Batch creates a set of `Mesh` clones within a single renderer, allowing you to freely define and adjust each clone's `Transform`, `Texture`, and `Material` to compose graphics and animations with a high degree of freedom.
2. `Shape3D` Renderer: Creates complex custom `Shape3D` objects, such as `EllipseShape3D`, `RoundRectShape3D`, `CircleShape3D`, etc. For `Shape3D` objects with continuous drawing capabilities, such as `Path2DShape3D` and `Path3DShape3D`, the design references the [CanvasPath](https://developer.mozilla.org/en-US/docs/Web/API/Path2D) API design, allowing developers to draw on and reuse the development practices they are already familiar with for graphic drawing work.

## Installation
Like the engine itself, the graphic plugin can be introduced using `NPM` and `CDN` links:

### 1. Installing via `NPM` Package
```bash
npm install @orillusion/core --save
npm install @orillusion/graphic --save
```
```ts
import { Engine3D } from "@orillusion/core"
import { Graphic3D, Shape3D } from "@orillusion/graphic"
```

### 2. Introducing via `CDN` Link
It is recommended to use the `ESModule` build version
```html
<script type="module">
  import { Engine3D } from "https://unpkg.com/@orillusion/core/dist/orillusion.es.js" 
  import { Graphic3D, Shape3D } from "https://unpkg.com/@orillusion/graphic/dist/graphic.es.js" 
</script>
```

Or load the `UMD` build version using `<script>`, accessing the `Shape3D` module from the global `Orillusion` variable:
```html
<script src="https://unpkg.com/@orillusion/core/orillusion.umd.js"></script>
<script src="https://unpkg.com/@orillusion/graphic/dist/graphic.umd.js"></script>
<script>
  const { Engine3D, Graphic } = Orillusion
  const { Graphic3D, Shape3D } = Graphic
</script>
```

## `Graphic3D`
Create a `Graphic3D` object to uniformly draw graphics in the scene. Currently, three `APIs` are provided for quickly creating different line combinations: `drawLines`, `drawBox`, and `drawCircle`.

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
Using `Graphic3DMesh.draw()`, you can quickly create a `Graphic3DMeshRenderer` instance. This object can be viewed as a collection of multiple cloned `Geometry` objects. For each object in this collection, you can set its position and texture, and combine them to achieve the desired visual effect.

### Parameter Overview

| Parameter | Description |
| --- | --- |
| scene | Created in the specified Scene3D |
| geo | Specifies the mesh data source |
| texture | Texture list (indexed by subscript) |
| count | Specifies the maximum number of clone collections a renderer can support (choosing an appropriate value will improve performance) |

::: tip
For `geo`, generally inputting a simple `PlaneGeometry` as the model source is sufficient, using different textures to express different appearances. In theory, you can pass in any model source to create with. For example, passing in a `BoxGeometry` model produces a graphic composed of many cubes, enabling the creation of pixel-art scenes or simulating voxel rendering.
:::

1. Modifying `Transform`: To modify the rotation, scale, or position of a unit at a specific index.   
Get the `object3Ds` belonging to the `Graphic3DMeshRenderer`, use the array index to obtain the corresponding `Object3D`, and modifying the `Transform` of that `Object3D` will synchronize to the target unit.   

2. Modifying `Texture`: Call the function `setTextureID`, specifying the texture index (textureIndex) to modify for the unit at a specific index. The texture is obtained from the texture passed in the `Graphic3DMeshRenderer` initialization parameters.   

3. Modifying `Material`: The `Graphic3DMeshRenderer` class exposes a series of APIs named similarly to `setTextureID`. The first parameter specifies the target unit to set, and the second parameter sets the relevant property. Developers can use such APIs to modify the content of the graphics, such as Color, UV, Emissive, and other data.

### Example

```ts
import { Object3D, Scene3D, Engine3D, BitmapTexture2DArray, BitmapTexture2D, PlaneGeometry, Vector3, Matrix4, Time, BlendMode, Color, ColorUtil } from "@orillusion/core";
import { Graphic3D, Graphic3DMesh, Graphic3DMeshRenderer } from '@orillusion/graphic';

// Load texture list
let textureArray = [];
textureArray.push(await engine.res.loadTexture("path/to/texture.png") as BitmapTexture2D);
let bitmapTexture2DArray = new BitmapTexture2DArray(textureArray[0].width, textureArray[0].height, textureArray.length);

bitmapTexture2DArray.setTextures(textureArray);

// Use Plane as the mesh clone data source
let geometry = new PlaneGeometry(1, 1, 1, 1, Vector3.Z_AXIS);

// In the current scene, using plane as the clone data source, create a Graphic3DMeshRenderer instance that supports up to 100 clones.
let mr:Graphic3DMeshRenderer = Graphic3DMesh.draw(scene, geometry, bitmapTexture2DArray, 100);

// Modify material properties
mr.material.blendMode = BlendMode.ADD;
mr.material.transparent = true;
mr.material.depthWriteEnabled = false;
mr.material.useBillboard = true;

// Get the Object3D corresponding to each clone unit, and modifying the Transform property of that Object3D will synchronously modify the Transform of the target clone.
// Placing the same operation in the engine's main update function modifies it every frame to drive the animation effect.
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

> For more `Graphic3D` API usage, please refer to the [GraphicMesh](/example/graphic/GraphicMesh.html) example code.

## `Shape3D` Renderer

Using `Shape3DMaker`, create a `Shape3DRenderer` renderer, which can hold and maintain a `Shape3D` dataset. Each Shape3D is a predefined variety of shapes, such as `EllipseShape3D`, `RoundRectShape3D`, `CircleShape3D`, etc. Among them, `Path2DShape3D` and `Path3DShape3D` have a richer API that can help you combine and draw complex graphics.

| Parameter | Description |
| --- | --- |
| name | Name, used to identify the Shape3DRenderer |
| scene | Specifies which scene to put the Shape3DRenderer into |
| textureList | Texture list, indexed by index |
| maxNodeCount | Specifies the maximum number of Shape3D objects the renderer supports |
| triangleEachNode | Specifies the average number of triangles each Shape3D has |

 > The renderer is designed based on the API of `CanvasPath`, allowing developers to reuse and draw on the development practices they are already familiar with for 3D drawing work. The 2D drawing part of the renderer refers to drawing points, lines, and surfaces in the `XZ` plane. At the same time, each unit can still be independently controlled via `Transform`. To draw graphics in 3D space, you need to use `Path3DShape3D` to begin drawing graphics that incorporate Y-axis elevation data.

### Basic Properties

The engine has many built-in basic shapes, all inheriting from the `Shape3D` class, which mainly contain the following properties:

| Property | Description |
| --- | --- |
| lineColor | The color additive when drawing lines |
| fillColor | The color additive when drawing filled areas |
| lineTextureID | Sets the texture used when drawing lines |
| fillTextureID | Sets the texture used when filling areas |
| fillRotation | Sets the rotation angle of the texture used for the filled area |
| shapeOrder | Sets the layering of each Shape (to eliminate z-fighting; each `Shape3DRenderer` can define the maximum z-fighting range, and based on this range and the number of Shape3D objects, the offset each Shape3D has is derived) |
| points3D | A reserved collection of key points passed in externally |
| isClosed | Whether the shape is closed at its start and end |
| fill | Whether the shape is filled |
| lineWidth | The width of the drawn line |
| lineUVRect | UV data: xy correspond to the offset of the line texture, and zw correspond to the scaling of the texture data |
| fillUVRect | UV data: xy correspond to the offset of the fill area texture, and zw correspond to the scaling of the texture data |
| uvSpeed | UV data: xy correspond to the UV movement speed of the fill area texture; zw correspond to the UV movement speed of the texture data when drawing lines |

### Built-in Shapes

Similar to the `CanvasPath` API, the engine currently provides the following subclasses/derived classes of `Shape3D`:
| Shape | Description |
| --- | --- |
| CircleShape3D | Circle, arc |
| CurveShape3D | Bezier curve controlled by 2 anchor points |
| EllipseShape3D | Ellipse |
| LineShape3D | Polyline |
| Path2DShape3D | Draws a line path on the XZ plane |
| Path3DShape3D | Draws a line path in 3D space |
| QuadraticCurveShape3D | Bezier curve controlled by 1 anchor point |
| RoundRectShape3D | Rectangle, rounded rectangle |


### Built-in Methods

Through an instance of `Shape3DMaker`, we can call the following methods to obtain the corresponding specific shapes:
| Method | Shape Type |
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

::: tip
All 2D shapes, e.g. `path2D`, will ignore the `Y`-axis data, and the shape will be unfolded in the `XZ` plane.
:::

In addition, we can also add, delete, and modify `Shape3D` via the `Shape3DRenderer`:

| Method | Description |
| --- | --- |
| createShape | Specify the type of Shape3D and create a Shape3D instance in the renderer |
| removeShape | Delete a Shape3D instance |
| getShapeObject3D | Get the corresponding Object3D through the shapeIndex property of a Shape3D instance. Used for subsequently modifying the Transform |

### Example

```ts
import { Object3D, Scene3D, Engine3D, BitmapTexture2DArray, BitmapTexture2D, PlaneGeometry, Vector3, Matrix4, Time, BlendMode, Color,ColorUtil } from "@orillusion/core";
import { CircleShape3D, EllipseShape3D, Shape3DMaker, Shape3D } from "@orillusion/graphic";

// Load texture list
let textureArray = [];
textureArray.push(await engine.res.loadTexture("path/to/texture.png") as BitmapTexture2D);
let bitmapTexture2DArray = new BitmapTexture2DArray(textureArray[0].width, textureArray[0].height, textureArray.length);
bitmapTexture2DArray.setTextures(textureArray);

// In the current scene, create a Shape3DRenderer instance
maker = Shape3DMaker.makeRenderer(`path`, bitmapTexture2DArray, scene);
maker.renderer.material.doubleSide = true;

// Create a Circle based on the XZ plane, with a radius of 5 and a center of (0, 0)
let circle:CircleShape3D = maker.arc(5, 0, 0);
circle.lineWidth = 1; // Line width is 1
circle.segment = 16; // This arc will be fit using 16 line segments
circle.fill = true; // Set whether to fill
circle.line = true; // Set whether to draw the outline
circle.uvSpeed = new Vector4(0, 0, 0, Math.random() - 0.5).multiplyScalar(0.005); // Set UV scroll speed
circle.fillColor = Color.randomRGB(); // Set fill color additive
circle.lineColor = Color.randomRGB(); // Set line outline color additive

circle.startAngle = 30; // Set arc start angle
circle.endAngle = 240; // Set arc end angle

// Placing the control script for circle in the engine's main loop drives the animation effect

```

> The above code demonstrates drawing an independent circle/arc by creating an instance of `CircleShape3D`. You can also obtain it by creating a generic `Path2DShape3D` instance and then calling its `arc()` function.

<Demo src="/demos/graphics/graphic_shape3d.ts"></Demo>

<<< @/public/demos/graphics/graphic_shape3d.ts

> For more `Shape3D` API usage, please refer to the [Shape3D](/example/graphic/Shape3D.html) example code.
