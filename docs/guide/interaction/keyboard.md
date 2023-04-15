# Keyboard
The engine can also listen to keyboard input events through the [inputSystem](/api/classes/InputSystem) and support developers to query the current keyboard interaction status at any time without introducing additional packages and the calling interface is very simple.

## Listen to Events
Similar to listening to mouse events, developers can attach interested keyboard keys to the event system, and when the button is triggered, the engine will trigger the corresponding callback function.

Keyboard event types supported:
| Event | Description |
| --- | --- |
| KEY_DOWN | Responds every time the button is pressed down. |
| KEY_UP | Responds every time the button is released. |

Basic usage:

```ts{6}
import { ComponentBase, KeyEvent, Engine3D } from "@orillusion/core";
export class keyScript extends ComponentBase {
  protected init() {}

  protected start() {
    Engine3D.inputSystem.addEventListener(KeyEvent.KEY_UP, this.onKeyUp, this);
  }
  onKeyUp(e: KeyEvent) {
    // Callback function for keyup
  }
}
```

## KeyEvent
The engine will listen to the keyboard events under the current `window` by default. After calling the listening function, the event of type [KeyEvent](/api/classes/KeyEvent) will be obtained in the callback function.

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| KEY_DOWN | string | 	Triggered every time a key is pressed. |
| KEY_UP | string | Triggered every time a key is released. |
| keyCode | number | Corresponding keycode, please refer to [keycode](/api/enums/KeyCode) definition for details. |


## Example
This example demonstrates the operation of six buttons: W, S, A, D, Q, E.

<Demo :height="500" src="/demos/interaction/keyboard.ts"></Demo>

<<< @/public/demos/interaction/keyboard.ts

