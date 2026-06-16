# Stats Panel

`Orillusion` provides the [@orillusion/stats](/stats/classes/Stats) component to display the current running status of the engine. It currently supports the runtime `FPS` and `memory usage`.

## Installation
Same as the engine method, we can import the plugin in two ways: via `NPM` and via `CDN` links:

### 1. Install via the `NPM` package
```bash
npm install @orillusion/core --save
npm install @orillusion/stats --save
```
```ts
import { Engine3D } from "@orillusion/core"
import { Stats } from "@orillusion/stats"
```

### 2. Import via `CDN` links
We recommend using the `ESModule` build version
```html
<script type="module">
  import { Engine3D } from "https://unpkg.com/@orillusion/core/dist/orillusion.es.js" 
  import { Stats } from "https://unpkg.com/@orillusion/stats/dist/stats.es.js" 
</script>
```

Or load the `UMD` build version via `<script>`, and get the `Stats` module from the global `Orillusion` variable:
```html
<script src="https://unpkg.com/@orillusion/core/orillusion.umd.js"></script>
<script src="https://unpkg.com/@orillusion/stats/dist/stats.umd.js"></script>
<script>
  const { Engine3D, Stats } = Orillusion
  const { Stats } = Stats
</script>
```

## Example

Generally, just add the `Stats` component to the `Scene3D` object:
```ts
import { Scene } from "@orillusion/core"
import { Stats } from "@orillusion/stats"
let scene = new Scene3D();
scene.addComponent(Stats);
```

<Demo :height="400" src="/demos/performance/stats.ts"></Demo>

<<< @/public/demos/performance/stats.ts{11}

By default, a rectangular floating panel will appear in the upper left corner of the window. If you need to change the position, you can set the `style` attribute of `stats.container`, or add `css` to modify the `.stats` class.

```ts
let stats = scene.addComponent(Stats);
stats.container.style.left = '10px';
stats.container.style.top = '10px';
```
