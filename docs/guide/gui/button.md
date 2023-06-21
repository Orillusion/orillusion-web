# UIButton

[UIButton](/api/classes/UIButton.md) is a subclass of [UIInteractive](/api/classes/UIInteractive), which implements basic button functionality. The button component encapsulates `UIImage` for displaying background images, inherits from the interactive component `UIInteractive`, and uses the square area described by the built-in `UITransform` as the sensing hot zone.

## Component Texture

The component has multiple states [UIInteractiveStyle](/api/enums/UIInteractiveStyle.md), each state corresponds to a texture
- `normalSprite` - Texture by default
- `downSprite` - Texture when the mouse is pressed
- `overSprite` - Texture when the mouse is over
- `disableSprite` - Texture when the component is disabled

We can set the corresponding background image of the component in various states to obtain the effect of the button changing style with the state switching
```ts
let button = new Object3D()
let guiButton: UIButton = button.addComponent(UIButton)
// Load a group of sprite textures
await Engine3D.res.loadAtlas('https://cdn.orillusion.com/atlas/UI_atlas.json')
// Set the corresponding state texture of the button
guiButton.normalSprite = Engine3D.res.getGUISprite('button-up')
guiButton.downSprite = Engine3D.res.getGUISprite('button-down')
guiButton.overSprite = Engine3D.res.getGUISprite('button-over')
guiButton.disableSprite = Engine3D.res.getGUISprite('button-disable')
```

## Enable / Disable
To set whether the component is valid:
- `true` - Button will respond to mouse events
- `false` -Does not respond to mouse events, and presents the texture of `disableSprite`

```ts
let button = new Object3D()
let guiButton: UIButton = button.addComponent(UIButton)
guiButton.enable = true; //false
```

## Component Interaction
Same as the normal `Object3D`, we can use the event listener to listen to the `GUI` series events in `PointerEvent3D`, and we can get the user operation response function callback:

- `PointerEvent3D.PICK_CLICK_GUI`: Mouse click
- `PointerEvent3D.PICK_OVER_GUI`: Mouse hover
- `PointerEvent3D.PICK_OUT_GUI`: Mouse out
- `PointerEvent3D.PICK_UP_GUI`: Mouse up
- `PointerEvent3D.PICK_DOWN_GUI`: Mouse down

```ts
let button = new Object3D()
let guiButton: UIButton = button.addComponent(UIButton)

button.addEventListener(PointerEvent3D.PICK_CLICK_GUI, this.onClick, this)
button.addEventListener(PointerEvent3D.PICK_OUT_GUI, this.onOut, this)
button.addEventListener(PointerEvent3D.PICK_OVER_GUI, this.onOver, this)
button.addEventListener(PointerEvent3D.PICK_DOWN_GUI, this.onDown, this)
```

## Button Text
A component can add multiple GUI components, such as adding `UIButton` and `UITextField` at the same time

```ts
let button = new Object3D()
let guiButton: UIButton = button.addComponent(UIButton)
...
// Load font resources
await Engine3D.res.loadFont('https://cdn.orillusion.com/fnt/0.fnt')
// Add GUI text
let buttonLabel = button.addComponent(UITextField);
buttonLabel.text = 'Click me';
```

<Demo :height="500" src="/demos/gui/button.ts"></Demo>

<<< @/public/demos/gui/button.ts