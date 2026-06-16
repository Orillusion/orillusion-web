# Engine3D
`Engine3D` is the core of the engine. `Engine3D.init()` creates and returns an `Engine3D` instance. The engine supports **multiple instances**—each instance owns an independent canvas, render loop, resource manager, and configuration. After obtaining the instance, the commonly used interfaces are all called on the instance:

1. Call `Engine3D.init()` to initialize the engine and obtain the `engine` instance
2. Call `engine.startRenderView()` to start the view rendering loop
3. `engine.res` loads network textures or model resources, see more in [Resource Loading](/guide/resource/Readme)
4. `engine.inputSystem` uniformly manages user input events, see more in [Interaction](/guide/interaction/pointer)
5. `engine.setting` uniformly configures rendering-related features, see more in [Config](/guide/core/config)

::: tip Migrating from Older Versions
In earlier versions, `Engine3D` was the only global singleton, and the interfaces were accessed statically (`Engine3D.startRenderView`, `Engine3D.res`, `Engine3D.aspect`, `Engine3D.setting`, etc.). It is now changed to multiple instances. Please switch to calling on the instance returned by `init()`; configuration before initialization is now passed in through `Engine3D.init({ setting })`.
:::

## Initialization
Use the `Engine3D.init()` method to initialize the engine. The default parameters can be empty, and it returns an `Engine3D` instance.

The engine's internal initialization needs to request a `GPU` device, and requesting a `GPU` device for initialization is an asynchronous process, so it needs to be called asynchronously. We recommend using the `async/await` field to call it.

```ts
Engine3D.init().then((engine)=>{
    // ...
})
// or
async function run(){
    const engine = await Engine3D.init();
    // ...
}
run()
```

## Render Loop Callback
At initialization, by passing in parameters, you can get the callbacks of the render main loop and execute custom logic in the callbacks.

```ts
const engine = await Engine3D.init({
    beforeRender: ()=>{
        // Callback before each frame is rendered
    },
    renderLoop: ()=>{
        // Callback for each frame
    },
    lateRender: ()=>{
        // Callback after each frame is rendered
    }
});
```

## Config Canvas
In addition to configuring the render callbacks, you can also specify the `canvas` to render at initialization. If not specified, the engine creates an opaque `canvas` that covers the entire window by default.

```ts
const engine = await Engine3D.init({
    canvasConfig:{
        canvas: document.getElementById("xxx"), // Specify the canvas element, you can customize the canvas size or layout
        alpha: true, // Whether the background is transparent, default false
        zIndex: 1, // CSS z-index, default 0
        backgroundImage: "path/to/bg", // Background image when alpha is transparent
        devicePixelRatio: 1 // Rendering DPR, default uses window.devicePixelRatio
    }
});
``` 
::: tip
Lowering `devicePixelRatio` can effectively reduce rendering pressure and improve rendering performance, but at the same time the rendering resolution will also decrease, which may increase the aliasing effect.
:::

For more detailed configuration, please refer to [CanvasConfig](/api/types/CanvasConfig)

## Start Rendering
After the engine is initialized, you need to create a [View3D](/api/classes/View3D) to start rendering. `View3D` needs at least one scene [Scene3D](/guide/core/scene) and one observing camera [Camera3D](/api/classes/Camera3D) to start. The basic usage is as follows:

```ts
const engine = await Engine3D.init();
// Create a scene
this.scene = new Scene3D();

// Start rendering
let view = new View3D();
view.scene = this.scene;
view.camera = this.camera;
engine.startRenderView(view);

// Pause the render loop
Engine3D.pause();
// Resume the render loop
Engine3D.resume();
```
---
For detailed usage, please refer to the [Engine3D](/api/classes/Engine3D) API
