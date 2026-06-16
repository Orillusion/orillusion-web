# Initialize the Engine
## Create an Engine3D Instance
Before using the engine, you need to initialize it via the `Engine3D.init()` method. `init()` is an asynchronous method that **returns an `Engine3D` instance**. All subsequent operations such as rendering, resource loading, and configuration are performed through this instance.

```ts
import { Engine3D } from '@orillusion/core';

Engine3D.init().then((engine) => {
  // engine is the created engine instance
});
```
::: tip
`Engine3D.init()` is an asynchronous API. It is recommended to call it together with `async/await`.
:::

```ts
import { Engine3D } from '@orillusion/core';

async function demo(){
  const engine = await Engine3D.init();
  // Perform subsequent operations through engine
}
demo();
```

::: tip Multiple Instances
Starting from the new version, the engine supports **multiple instances**: you can call `Engine3D.init()` multiple times to create multiple mutually independent `Engine3D` instances, each with its own canvas, render loop, resource manager (`engine.res`), and configuration (`engine.setting`). Interfaces that were accessed statically via `Engine3D.xxx` in earlier versions (such as `Engine3D.startRenderView`, `Engine3D.res`, `Engine3D.aspect`, `Engine3D.setting`) are now all called on the instance (`engine.startRenderView`, `engine.res`, etc.).
:::

## Create a Canvas Manually
With the default parameters, `Engine3D.init()` automatically generates a `canvas` whose width and height match the screen size. If you do not want to use the canvas created automatically by the engine, you can also create the canvas manually.
For example, you can insert a `<canvas>` tag in HTML and specify an id:
```html
<canvas id="canvas" style="width:800px;height:500px" />
```
::: tip
When using an external canvas, you need to set the `style` size manually, for example to a specific pixel value, or set it to `100%` to automatically fill the parent container.
:::

Next, in the ts code, get the canvas via `document.getElementById`:
```ts
let canvas = document.getElementById('canvas');
```

And pass the `canvas` parameter into the `init()` method using `canvasConfig` to initialize:
```ts
import { Engine3D } from '@orillusion/core';

let canvas = document.getElementById('canvas');
const engine = await Engine3D.init({
  canvasConfig: { canvas }
});
```

For more configuration, see [Engine3D](/guide/core/engine)
