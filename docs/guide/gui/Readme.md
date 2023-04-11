# GUI

Orillusion provides high-performance user interface (GUI) components for developers to use. Before using this module, it is necessary to load some relevant material resources for user interface component rendering.

Based on the layout and layout of art design drawings, a reasonable combination of GUI components can display 2D/3D GUI content in the project.

> GUI often rely on external font data, sprite atlases, and other materials. Please refer to the documentation for creating these atlases, such as text atlases and spirit atlases.

## GUI spatial mode

Currently, `GUISpace` supports two modes: `ViewSpace` and `WorldSpace`：

- ViewSpace mode: In this mode, the UI is in screen space and does not change with changes to the 3D camera;
- WorldSpace mode: In this mode, the UI can be seen as a canvas in 3D space, with 3D attributes (rotation, scaling, translation), and can participate in depth detection, achieving occlusion and occlusion relationships with other objects.

The engine has a built-in Canvas `guiCanvas` node as the root node of the GUI, and each user's panel`UIPanel`will be placed in the Canvas node and collected for UI rendering;
Each UIPanel can be considered as the root node of the panel, under which various UI components can be organized to display UI details.

```ts
import { Engine3D } from '@orillusion/core';
// Load support Morph state model
await Engine3D.res.loadFont('fnt/0.fnt');
// Create a panel for displaying UI
let panelRoot: Object3D = new Object3D();
panelRoot.addComponent(ViewPanel);
// Adding panels to system canvas
renderJob.guiCanvas.addGUIChild(panelRoot);
// Create Text Node
let textQuad = new Object3D();
panelRoot.addChild(textQuad);
this.text = textQuad.addComponent(UITextField);
this.text.uiTransform.resize(400, 60);
this.text.uiTransform.y = 100;

this.text.text = 'Hello，Orillusion！';
this.text.fontSize = 32;
this.text.alignment = TextAnchor.MiddleCenter;

```