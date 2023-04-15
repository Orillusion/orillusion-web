# Custom Event
In addition to basic mouse and keyboard events, the engine also provides a [CEvent](#cevent) class for custom events, which can be triggered and listened to using `Engine3D.inputSystem` We recommend using the event system to communicate between components when necessary.

<Demo :height="500" src="/demos/interaction/event.ts"></Demo>

<<< @/public/demos/interaction/event.ts

## Event Dispatching
Call the `Engine3D.inputSystem.dispatchEvent` method to dispatch an event. Dispatching the corresponding event will trigger the execution of the callback function that listens for the event.
```ts
import {Engine3D, CEvent} from '@orillusion/core';

let customEvent = new CEvent("UserEvent", {name:'name',data:'data'});
Engine3D.inputSystem.dispatchEvent(customEvent);
```

## Event Listening
Event listening associates events with handler functions.
```ts
// Listen to events
Engine3D.inputSystem.addEventListener("UserEvent", this.OnUserEvent, this);
// Handler function
private OnUserEvent(e: CEvent) {
    let params = e.data;
}
```

## Removing Events
Events that are no longer needed can be removed.
```ts
Engine3D.inputSystem.removeEventListener("UserEvent", this.OnUserEvent, this);
```

## CEvent
The event handling function takes a parameter of type [CEvent](/api/classes/CEvent) , from which event information can be obtained.
| Parameter	 | Type | Description | Example |
| --- | --- | --- | --- |
| type | string |  The type identifier string for the event in the engine. | "UserEvent" | 
| data | any |  Additional data. | {{ {name: 'name', data: 'any'} }} |