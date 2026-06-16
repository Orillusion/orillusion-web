# Mouse and Touchscreen
The engine provides a basic input system [inputSystem](/api/classes/InputSystem), which can handle mouse and touchscreen input operations uniformly.

## Listening for Events
The `inputSystem` interface has been integrated into the engine's `Engine3D` instance, so users can use it conveniently. By simply listening for the corresponding event type, you can obtain the corresponding event in the event callback function.
```ts{6}
import { ComponentBase, PointerEvent3D, Engine3D } from "@orillusion/core";
export class PickScript extends ComponentBase {
  protected init() {}

  protected start() {
    engine.inputSystem.addEventListener(PointerEvent3D.POINTER_CLICK, this.onClick, this);
  }
  onClick(e: PointerEvent3D) {
    // Click callback
  }
}
```

The engine has integrated touch and mouse operations using a unified event model, and uses [PointerEvent3D](/api/classes/PointerEvent3D) to specify the specific event type.
| Event | Description |
| --- | --- |
| POINTER_CLICK | Touch click event  |
| POINTER_MOVE | Touch swipe event |
| POINTER_DOWN | Touch start event  |
| POINTER_UP | Touch end event |
| POINTER_OUT | Touch out event |


## PointerEvent3D  

By default, the engine listens to the current `canvas` and unifies the event model of touch and mouse. After calling the listener function, an event of type [PointerEvent3D](/api/classes/PointerEvent3D) will be obtained in the callback function.

| Parameter | Type | Description |
| --- | --- | --- |
| target | Object3D |  The target object that triggers the event |
| data | Object |  The coordinate data when the event is triggered, including the Normal and Position information of the target object, etc. |
| pointerId | number |  A unique identifier for an event caused by a pointer |
| pointerType | string |  Indicates the device type that triggered the event, e.g. mouse / pen / touch, etc. |
| isPrimary | boolean |  Indicates whether the pointer is the primary pointer among pointers of the same type |
| pressure | number |  The normalized pressure value of the pointer input, ranging from 0 to 1, where 0 represents the minimum pressure detectable by the hardware and 1 represents the maximum value |
| mouseX | number |  The current screen x coordinate |
| mouseY | number |  The current screen y coordinate |
| movementX | number | It provides the horizontal movement value of the mouse between the current event and the previous mouse event |
| movementY | number | It provides the vertical movement value of the mouse between the current event and the previous mouse event |
| deltaX | number |  Returns a negative double value when scrolling left, a positive double value when scrolling right, and 0 otherwise |
| deltaY | number |  Returns a positive value when scrolling down, a negative value when scrolling up, and 0 otherwise |
| metaKey | boolean | Whether the Meta key is pressed |
| ctrlKey | boolean | Whether the Ctrl key is pressed |
| altKey | boolean |  Whether the Alt key is pressed |
| shiftKey | boolean |  Whether the Shift key is pressed |


## Example
This example demonstrates how to listen for left-click, right-click, and scroll wheel operations.  

<Demo :height="500" src="/demos/interaction/pointEvent.ts"></Demo>

<<< @/public/demos/interaction/pointEvent.ts
