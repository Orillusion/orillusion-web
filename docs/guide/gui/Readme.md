# GUI

Orillusion provides high-performance user interface (GUI) components for developers to use. Before using these modules, it is necessary to load some relevant material resources for user interface components rendering.

User interfaces often rely on external font data, sprite sheets, and other assets. Please refer to the documentation on creating text atlas and sprite sheets for creating these assets.

> GUI often rely on external font data, sprite atlases, and other materials. Please refer to the documentation for creating these atlases, such as text atlases and spirit atlases.

## GUI spatial mode

Currently, `GUISpace` supports two modes: `ViewSpace` and `WorldSpace`：

- ViewSpace mode: In this mode, the UI is in screen space and does not change with the 3D camera's movements.a;
- WorldSpace mode: In this mode, the UI is considered a canvas in the 3D space and has 3D properties such as rotation, scaling, and translation. It can participate in depth testing and achieve occlusion relationships with other objects.

The engine has a built-in Canvas `guiCanvas` node as the root node of the GUI, and each panel's `UIPanel`will be placed in the Canvas node and collected for UI rendering;
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