---
aside: false
---
# Stats Panel

`Orillusion` provides the [Stats](/stats/classes/Stats) component to display the current performance statistics of the engine, including `FPS` and `memory usage`. It can be added to the `Scene3D` object.

Similar to the installation method of the engine, we can import the stats plugin through `NPM` or `CDN` :
```bash
npm install @orillusion/core --save
npm install @orillusion/stats --save
```
Import the module:
```ts
import { Scene3D } from "@orillusion/core"
import { Stats } from "@orillusion/stats"

let scene = new Scene3D();
scene.addComponent(Stats);
```
Or load it globally through `<script>`tag, and get the `Stats` module from the global `Orillusion` variable:
```html
<script src="https://cdn.orillusion.com/orillusion.umd.js"></script>
<script src="https://cdn.orillusion.com/stats.umd.js"></script>
```
```ts
const { Scene3D, Stats } = Orillusion 

let scene = new Scene3D();
scene.addComponent(Stats);
```

<Demo :height="400" src="/demos/performance/stats.ts"></Demo>

<<< @/public/demos/performance/stats.ts{12,21}

By default, a rectangular floating panel will appear in the upper left corner of the window. If you need to change the position, you can set the `style` attribute of `stats.container` , or add `css` to modify the `.stats` class.

```ts
  let stats = scene.addComponent(Stats);
  stats.container.style.left = '10px';
  stats.container.style.top = '10px';
```