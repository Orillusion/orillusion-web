# 统计面板

`Orillusion` 提供了 [Stats](/stats/classes/Stats) 组件用来显示引擎当前的运行状态，目前支持包括当前运行时的 `FPS` 和 `运行内存`。

## 安装
跟引擎方法一致，我们可以通过 `NPM` 和 `CDN` 链接两种方式来引入物理插件:

### 1. 通过 `NPM` 包安装
```bash
npm install @orillusion/core --save
npm install @orillusion/stats --save
```
```ts
import { Engine3D } from "@orillusion/core"
import { Stats } from "@orillusion/stats"
```

### 2. 通过 `CDN` 链接引入
推荐使用 `ESModule` 构建版本
```html
<script type="module">
  import { Engine3D } from "https://unpkg.com/@orillusion/core/dist/orillusion.es.js" 
  import { Stats } from "https://unpkg.com/@orillusion/stats/dist/stats.es.js" 
</script>
```

或通过 `<script>` 加载构建 `UMD` 版本，在全局 `Orillusion` 变量中获取 `Stats` 模块：
```html
<script src="https://unpkg.com/@orillusion/core/orillusion.umd.js"></script>
<script src="https://unpkg.com/@orillusion/stats/dist/stats.umd.js"></script>
<script>
  const {Engine3D, Stats} = Orillusion
</script>
```

## 示例

一般将 `Stats` 组件添加到 `Scene3D` 对象即可：
```ts
import { Scene } from "@orillusion/core"
import { Stats } from "@orillusion/stats"
let scene = new Scene3D();
scene.addComponent(Stats);
```

<Demo :height="400" src="/demos/performance/stats.ts"></Demo>

<<< @/public/demos/performance/stats.ts{11}

默认窗口内会在左上方出现一个矩形悬浮面板，如果需要修改位置，可以通过修改 `stats.container` 的 `style` 属性进行设置，或者添加 `css` 对 `.stats` class 进行设置。

```ts
let stats = scene.addComponent(Stats);
stats.container.style.left = '10px';
stats.container.style.top = '10px';
```