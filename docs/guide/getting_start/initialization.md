# Initialization
## Create Instances of Engine3D 
Before using the engine, it must be initialized by the `Engine3D.init()` method, and the engine will automatically create an `Engine3D` instance for following operations
```ts
import { Engine3D } from '@orillusion/core';

Engine3D.init().then(()=>{
  // for following operations
})l
```
Note that `Engine3D.init()` is an asynchronous API, it is recommended to be use with `async/await`

```ts
import { Engine3D } from '@orillusion/core';

async function demo(){
  await Engine3D.init();
  // for following operations
}
demo();
```

## Create Canvas Manually
By default, the `Engine3D.init()` instance automatically generates a `canvas` canvas with the screen size (width and height). If you do not want to use the canvas automatically created by the engine, you can also create the canvas manually.
For example, the user can insert a `<canvas>` label into the HTML and specify an id:
```html
<canvas id="canvas" style="width:800px;height:500px" />
```
::: tip
Using an external canvas requires manually setting the `style` size, such as specific pixel values, or setting it to `100%` to automatically fill the parent container.
:::

then using `document.getElementById`  in Typescript to get the canvas:
```ts
let canvas = document.getElementById('canvas');
```

and using `canvasConfig` to pass paraments of `canvas` into `init()` method for initialization:
```ts
import { Engine3D } from '@orillusion/core';

let canvas = document.getElementById('canvas');
await Engine3D.init({
  canvasConfig: { canvas }
});
```

Get more information of configuration from [Engine3D](/guide/core/engine)