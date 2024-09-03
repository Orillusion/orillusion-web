# Engine3D
`Engine3D` is the only global instance of the engine core, with the following main methods:
1. Call `Engine3D.init()` to initialize the engine
2. Call `Engine3D.startRenderView()` to start the view rendering loop
3. `Engine3D.res` loads network textures or model resources, see more in [Resource Loading](/guide/resource/Readme)
4. `Engine3D.inputSystem` manages user input events, see more in [Interaction](/guide/interaction/Readme)
5. `Engine3D.setting` configures rendering-related features, see more in [Config](/guide/core/config)

## Initialization
Use `Engine3D.init()` method to initialize the engine. The default parameters can be empty.

The initialization of the engine requires a request for the `GPU` device, and the initialization request for the `GPU` device is an asynchronous process, so it needs to be called asynchronously. We recommend using the `async/await` field to call it.

```ts
Engine3D.init().then(()=>{
    // ...
})
// Or
async function run(){
    await Engine3D.init();
    // ...
}
run()
```

## Render Loop Callback
To get the rendering main loop callback, you can pass in parameters when initializing, and execute custom logic in the callback.

```ts
await Engine3D.init({
    beforeRender: ()=>{
        // Callback before each frame rendering
    },
    renderLoop: ()=>{
        // Callback for each frame
    },
    lateRender: ()=>{
        // Callback after each frame rendering
    }
});
```

## Config Canvas
In addition to configuring the rendering callback, you can also specify the `canvas` to be rendered when initializing. If not specified, an opaque `canvas` that covers the entire window will be created by default.

```ts
await Engine3D.init({
    canvasConfig:{
        canvas: document.getElementById("xxx"), // Specify the canvas element, you can customize the canvas size or layout
        alpha: true, // Whether the background is transparent, default false
        zIndex: 1, // CSS z-index, default 0
        backgroundImage: "path/to/bg", // Background image when alpha is transparent
        devicePixelRatio: 1 // Rendering DPR, default window.devicePixelRatio
    }
});
```
::: tip
Lower `devicePixelRatio` can effectively reduce rendering pressure, improve rendering performance, but at the same time rendering resolution will also decrease, may increase the aliasing effect
:::

For more detailed configuration, please refer to [CanvasConfig](/api/types/CanvasConfig)

## Start Rendering
After the engine is initialized, you need to create a [View3D](/api/classes/View3D) to start rendering. `View3D` needs at least one scene [Scene3D](/guide/core/scene) and one camera [Camera3D](/api/classes/Camera3D) to start the rendering task, the basic usage is as follows:

```ts
await Engine3D.init();
// Create a scene
this.scene = new Scene3D();

// Start rendering
let view = new View3D();
view.scene = this.scene;
view.camera = this.camera;
Engine3D.startRenderView(view);

// Pause rendering loop
Engine3D.pause();
// Resume rendering loop
Engine3D.resume();
```
---
See more in [Engine3D](/api/classes/Engine3D) API



