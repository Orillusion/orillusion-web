---
aside: false
---
# 统计面板

`Orillusion` 提供了 [Stats](/stats/classes/Stats) 组件用来显示引擎当前的运行状态，目前支持包括当前运行时的 `FPS` 和 `运行内存`， 一般添加给 `Scene3D` 对象即可。

跟引擎安装方法一致，我们可以通过 `NPM` 和 `CDN` 链接两种方式来引入统计插件:
```bash
npm install @orillusion/core --save
npm install @orillusion/stats --save
```
引入模块
```ts
import { Scene3D } from "@orillusion/core"
import { Stats } from "@orillusion/stats"

let scene = new Scene3D();
scene.addComponent(Stats);
```
或全局加载 `<script>`，在全局 `Orillusion` 变量中获取 `Stats` 模块：
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

默认窗口内会在左上方出现一个矩形悬浮面板，如果需要修改位置，可以通过修改 `stats.container` 的 `style` 属性进行设置，或者添加 `css` 对 `.stats` class 进行设置。

```ts
  let stats = scene.addComponent(Stats);
  stats.container.style.left = '10px';
  stats.container.style.top = '10px';
```