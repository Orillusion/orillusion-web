# Keyboard
The engine can also listen to keyboard input events through the [inputSystem](/api/classes/InputSystem), and supports developers to query the current keyboard interaction status at any time. No additional package is needed and the calling interface is very simple.

## Listen to Events
Similar to listening to mouse events, developers can attach the keyboard keys they are interested in to the event system. When a key is triggered, the engine will invoke the corresponding callback function.

Keyboard event types supported:
| Event | Description |
| --- | --- |
| KEY_DOWN | Responds every time a key is pressed down. |
| KEY_UP | Responds every time a key is released. |

Basic usage:

```ts{6}
import { ComponentBase, KeyEvent, Engine3D } from "@orillusion/core";
export class keyScript extends ComponentBase {
  protected init() {}

  protected start() {
    engine.inputSystem.addEventListener(KeyEvent.KEY_UP, this.onKeyUp, this);
  }
  onKeyUp(e: KeyEvent) {
    // Key callback
  }
}
```

## KeyEvent
By default, the engine listens to keyboard events under the current `window`. After calling the listener function, an event of type [KeyEvent](/api/classes/KeyEvent) will be obtained in the callback function.

| Parameter | Type | Description |
| --- | --- | --- |
| KEY_DOWN | string | Responds every time a key is pressed down. |
| KEY_UP | string | Responds every time a key is released. |
| keyCode | number | The corresponding key code. For details, please refer to the [keycode](/api/enums/KeyCode) definition. |


## Example
This example demonstrates the operation of six keys: W, S, A, D, Q, E.

<Demo :height="500" src="/demos/interaction/keyboard.ts"></Demo>

<<< @/public/demos/interaction/keyboard.ts
