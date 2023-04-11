# UITextField

[UITextField](/api/classes/UITextField.md) component provides text display functionality;

> The text component relies on the `BMFont` atlas, and you need to load the font atlas into the engine before the text can be displayed normally.


```ts
import { Engine3D } from '@orillusion/core';
// Load BMFont file
await Engine3D.res.loadFont('fnt/0.fnt');
// Create a panel for displaying the UI
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

## Set Font
The text component depends on the `BMFont` atlas. You need to load the `fnt` atlas file into the engine first before the text can be displayed normally
```ts
// Load BMFont font
await Engine3D.res.loadFont('path/to/font.fnt');
text.font = '微软雅黑';
```

## Set Content
```ts
// Modify component text
text.text = 'Hello，Orillusion！';
```

## Font size
```ts
text.fontSize = 32;
```

## Alignment
Referring to [TextAnchor](/api/enums/TextAnchor.md), there are nine alignment methods
```ts
text.alignment = TextAnchor.UpperLeft;
```

## Font Color
```ts
text.color = new Color(1.0, 0.0, 0.0, 1.0);// Default to white
```

## Row spacing
```ts
text.lineSpacing = 1.5; //Set the line spacing to 1.5 times the font size.
```

## Text box size
You can adjust the size through `resize`
```ts
text.resize(200, 200);//设Set the text block to (200200).
```

<Demo :height="500" src="/demos/gui/textfield.ts"></Demo>

<<< @/public/demos/gui/textfield.ts