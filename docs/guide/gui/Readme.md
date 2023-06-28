# GPU GUI

`Orillusion` provides high-performance GUI components for developers to use.  
By using GUI components reasonably, you can flexibly display 2D/3D GUI content in the project. In this chapter, we first understand some basic concepts of GUI:

## GUI Space Mode

Currently, `GUI` supports two rendering modes `ViewSpace` and `WorldSpace`:

- ViewSpace mode: In this mode, the GUI component is rendered in screen space, and it will not change with the camera's perspective, nor will it have a 3D space occlusion relationship with other objects;
- WorldSpace mode: In this mode, the GUI component can be regarded as a canvas in three-dimensional space, with 3D properties (rotation, scaling, translation), can participate in depth detection, etc., to achieve occlusion and occlusion relationship with other objects.

```ts
import { ViewPanel, WorldPanel } from '@orillusion/core'

// Create a panel object
let panelRoot: Object3D = new Object3D()
// Add ViewPanel and set it to ViewSpace mode
panelRoot.addComponent(ViewPanel)
// Or add WorldPanel and set it to WorldSpace mode
panelRoot.addComponent(WorldPanel)
```

This following example shows the difference between `ViewPanel` and `WorldPanel`:
<Demo :height="500" src="/demos/gui/panel.ts"></Demo>

<<< @/public/demos/gui/panel.ts

## UICanvas

GUI components also need canvas for drawing. Each `View3D` in the engine has a built-in array of `Canvas`. We can activate the `UICanvas` object by specifying `enableUICanvas`:

```ts
let view = new View3D()
...
let canvas:UICanvas = view.enableUICanvas();
```

By default, we only need one `UICanvas`. If we need multiple canvas drawings, we can activate multiple `UICanvas` by setting different `index`, which are independent of each other:

```ts
let canvas0:UICanvas = view.enableUICanvas(0);
let canvas1:UICanvas = view.enableUICanvas(1);
let canvas2:UICanvas = view.enableUICanvas(2);
//...
```

This following example shows the performance of multiple `UICanvas` coexistence:

<Demo :height="500" src="/demos/gui/canvas.ts"></Demo>

<<< @/public/demos/gui/canvas.ts

## UIPanel

The panel `UIPanel` is used to carry the specific GUI component rendering, and needs to be added to the `UICanvas`;
```ts
let panelObj = new Object3D();
let panel:UIPanel = panelObj.addComponent(ViewPanel) // 创建一个屏幕空间面板组件 Create a screen space panel component
let canvas:UICanvas = view.enableUICanvas(); // 启用默认的 UICanvas Enable the default UICanvas
canvas.addChild(panel.object3D); // 添加面板 Add panel
```

Each `UIPanel` can be regarded as the root container of the GUI component. Other types of GUI components can be added in the `UIPanel`:

```ts
// Create a UIImage component
let imageQuad = new Object3D();
let image:UIImage = imageQuad.addComponent(UIImage);
// Create a UIPanel
let panel:UIPanel = new Object3D().addComponent(ViewPanel); // 创建一个屏幕空间面板组件 Create a screen space panel component
// Add the Object3D of UIImage to the Object3D of UIPanel
panel.object3D.addChild(imageQuad);
```

### Rendering Order
In the same `UICanvas`, it is allowed to have multiple `ViewPanel` or `WorldPanel` coexist, and their rendering hierarchy meets the following rules:

1. `ViewPanel` will always be displayed above `WorldPanel`.
2. The drawing priority of `ViewPanel` is controlled by the property `panelOrder`. Under the same `panelOrder`, the order of `Object3D` mounted in the scene tree is subject to.
3. The drawing priority of `WorldPanel` is controlled by the property `panelOrder`. Under the same `panelOrder`, `UIPanel` can be automatically sorted according to the distance of the camera by `needSortOnCameraZ`.

```ts
let panel1 = new Object3D().addComponent(ViewPanel);
let panel2 = new Object3D().addComponent(ViewPanel);
let panel3 = new Object3D().addComponent(WorldPanel);
let panel4 = new Object3D().addComponent(WorldPanel);

// Manually set panelOrder, panel2 covers panel1
panel1.panelOrder = 1
panel2.panelOrder = 2

// ViewPanel panel1/2 always covers WorldPanel panel3/4
panel3.panelOrder = 3
panel4.panelOrder = 4 // panel4 covers panel3 first

// If panelOrder is the same, sort automatically according to the camera position
panel3.panelOrder = panel4.panelOrder = 3
panel3.needSortOnCameraZ = true;
panel4.needSortOnCameraZ = true;
```

### WorldPanel
`WorldPanel` component has more properties and functions than `ViewPanel`:

#### Camera Lock
We can control the rendering angle of the panel by setting the `billboard` property of the panel:

```ts
let panel = new Object3D().addComponent(WorldPanel);
panel.billboard = BillboardType.None;           // Default view, keep the rendering angle of the object itself
panel.billboard = BillboardType.BillboardY;     // Lock the Y axis, the XZ plane of the panel always faces the camera direction
panel.billboard = BillboardType.BillboardXYZ;   // Always face the camera
```

#### Depth Test
Set whether the panel participates in depth sorting:

```ts
let panel = new Object3D().addComponent(WorldPanel);
panel.depthTest = true;      // Participate in depth sorting, get occlusion relationship
panel.depthTest = false;     // Do not participate in depth sorting, always float on the surface of all objects
```

#### Cull Mode
Similar to [Material Culling](guide/graphics/materials#switching-cull-mode), we can also set the `cullMode` of the `UIPanel` rendering material ball to switch the culling method:

```ts
let panel = new Object3D().addComponent(WorldPanel);
panel.cullMode = GPUCullMode.none; // Both sides are displayed
panel.cullMode = GPUCullMode.front; // Front culling, back display
panel.cullMode = GPUCullMode.back; // Default back culling, front display
```

The following example focuses on the spatial relationship between the panels and the rendering characteristics of `WorldPanel`:

<Demo :height="500" src="/demos/gui/panelOrder.ts"></Demo>
<<< @/public/demos/gui/panelOrder.ts