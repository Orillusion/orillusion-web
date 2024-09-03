# Mouse and Touchscreen
The engine provides a basic input system [inputSystem](/api/classes/InputSystem), which can handle mouse and touch screen input operations uniformly.

## Listening for Events
The `inputSystem` interface has been integrated into the engine's `Engine3D` instance, and users can use it conveniently by simply listening for the corresponding event type and obtaining the corresponding event in the event callback function.
```ts{6}
import { ComponentBase, PointerEvent3D, Engine3D } from "@orillusion/core";
export class PickScript extends ComponentBase {
  protected init() {}

  protected start() {
    Engine3D.inputSystem.addEventListener(PointerEvent3D.POINTER_CLICK, this.onClick, this);
  }
  onClick(e: PointerEvent3D) {
    // Click callback
  }
}
```

The engine has integrated the operation of touch screen and mouse, using a unified event model and specifying the specific event type with[PointerEvent3D](/api/classes/PointerEvent3D) 
| Event | Description |
| --- | --- |
| POINTER_CLICK | Touch click event  |
| POINTER_MOVE | Touch swipe event |
| POINTER_DOWN | Touch start event  |
| POINTER_UP | Touch end event |
| POINTER_OUT | Touch swipe out event |


## PointerEvent3D  

The engine will listen to the current `canvas`by default, unify the event model of touch screen and mouse, and obtain [PointerEvent3D](/api/classes/PointerEvent3D) type events in the callback function after calling the listening function.

| Parameter	 | Type | Description |
| --- | --- | --- |
| target | Object3D |  The target object3d for the event |
| data | Object |  Coordinate data for the event, including information such as the target object’s `normal` and `position` |
| pointerId | number |  A unique identifier for an event caused by a pointer |
| pointerType | string |  Indicates the type of device that caused the event (mouse/pen/touch, etc.) |
| isPrimary | boolean |  Indicates whether the pointer is the primary pointer in a set of pointers of the same type |
| pressure | number |  The normalized pressure value of the pointer input, with a value range of 0 to 1, where 0 represents the smallest pressure detectable by the hardware, and 1 represents the maximum value |
| mouseX | number |  The current x coordinate |
| mouseY | number |  The current y coordinate |
| movementX | number | It provides the horizontal movement value of the mouse between the current and previous mouse events |
| movementY | number | It provides the vertical movement value of the mouse between the current and previous mouse events |
| deltaX | number |  Returns a negative double value when scrolling left, a positive double value when scrolling right, and 0 otherwise |
| deltaY | number |  Returns a positive value when scrolling down, a negative value when scrolling up, and 0 otherwise |
| metaKey | boolean |  if the meta key is pressed, otherwise false |
| ctrlKey | boolean |  if the ctrl key is pressed, otherwise false |
| altKey | boolean |  if the alt key is pressed, otherwise false |
| shiftKey | boolean |  if the shift key is pressed, otherwise false |


## Example
This example demonstrates how to listen for left-click, right-click, and scroll wheel operations. 

<Demo :height="500" src="/demos/interaction/pointEvent.ts"></Demo>

<<< @/public/demos/interaction/pointEvent.ts