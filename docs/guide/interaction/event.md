# Custom Event
In addition to the basic mouse and keyboard events, the engine also provides a custom event [CEvent](#cevent) class for developers to use. You can use `engine.inputSystem` to dispatch and listen to any custom event. We recommend using the event system for communication when components need to interact.

<Demo :height="500" src="/demos/interaction/event.ts"></Demo>

<<< @/public/demos/interaction/event.ts

## Event Dispatching
Call the `engine.inputSystem.dispatchEvent` method to dispatch an event. Dispatching the corresponding event will trigger the execution of the listener callback function.
```ts
import {Engine3D, CEvent} from '@orillusion/core';

let customEvent = new CEvent("UserEvent", {name:'name',data:'data'});
engine.inputSystem.dispatchEvent(customEvent);
```

## Event Listening
Event listening associates events with handler functions.
```ts
// Listen to the event
engine.inputSystem.addEventListener("UserEvent", this.OnUserEvent, this);
// Handler function
private OnUserEvent(e: CEvent) {
    let params = e.data;
}
```

## Removing Events
Events that are no longer needed can be removed.
```ts
engine.inputSystem.removeEventListener("UserEvent", this.OnUserEvent, this);
```

## CEvent
The event handler function takes a parameter of type [CEvent](/api/classes/CEvent), from which event information can be obtained.
| Parameter | Type | Description | Example |
| --- | --- | --- | --- |
| type | string |  The type identifier string for the event in the engine | "UserEvent" | 
| data | any |  Additional data | {{ {name: 'name', data: 'any'} }} |
