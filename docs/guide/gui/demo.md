---
aside: false
---
# Multi Panel Demo

In the following example, two `WorldPanel` are used to demonstrate two classic panel usage scenarios in the actual 3D scene:
1. One of the panels is fixed in the 3D scene, and the panel has a built-in text component, and the text information can dynamically update the content in real time.
2. The other panel is bound to another 3D node, and the position can be updated in real time with the parent node; and the rotation angle can be locked by setting the `billboard` type to make the panel always face the camera angle; with `depthTest` Can achieve unobstructed annotation effect

<Demo :height="500" src="/demos/gui/poi.ts"></Demo>

<<< @/public/demos/gui/poi.ts

The following example focuses on displaying a variety of `GUI` component combinations and multiple `UIPanel` mixed rendering:

<Demo :height="500" src="/demos/gui/demo.ts"></Demo>

<<< @/public/demos/gui/demo.ts
