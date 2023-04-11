# UIButton

[UIButton](/api/classes/UIButton.md) inherits from [UIInteractive](/api/classes/UIInteractive)(an interactive component), implementing basic button functions. The button component is internally encapsulated with `UIImage` for displaying background images, integrated with the interactive component `UIInteractive`, and uses the square area described by the built-in `UITransform` as the sensing heat zone.

## Component mapping

Components have multiple states [UIInteractiveStyle](/api/enums/UIInteractiveStyle.md), with each state corresponding to a map
- `upTexture` - The map corresponding to the default state
- `downTexture` - The corresponding texture when the mouse is pressed down
- `overTexture` - The corresponding texture when the mouse is over
- `disableTexture` - The texture when the component is disabled

We can set the corresponding background images of the components in various states to achieve the effect of buttons changing styles with state switching.

## Component interaction
We can use an event listener to listen to the `GUI` series of events of the `object3D` object of the component, and obtain the user action response function callback:

- `PointerEvent3D.PICK_CLICK_GUI`：Mouse click
- `PointerEvent3D.PICK_OVER_GUI`：Mouse sliding in
- `PointerEvent3D.PICK_OUT_GUI`：mouse removal
- `PointerEvent3D.PICK_UP_GUI`：Mouse Up
- `PointerEvent3D.PICK_DOWN_GUI`：Mouse pressed

## Enable/Disable
Set whether the component is valid:
- `true` - The button will respond to mouse events
- `false` - does not respond to mouse events and renders a `disableTexture` texture

```ts
image.enable = true; //false
```

<Demo :height="500" src="/demos/gui/button.ts"></Demo>

<<< @/public/demos/gui/button.ts