# 初始化引擎
## 创建 Engine3D 实例
在使用引擎前，需要通过 `Engine3D.init()` 方法进行初始化。`init()` 是一个异步方法，**返回一个 `Engine3D` 实例**，后续的渲染、资源加载、配置等操作都通过这个实例进行。

```ts
import { Engine3D } from '@orillusion/core';

Engine3D.init().then((engine) => {
  // engine 即为创建好的引擎实例
});
```
::: tip
`Engine3D.init()` 是一个异步 API，推荐配合 `async/await` 进行调用
:::

```ts
import { Engine3D } from '@orillusion/core';

async function demo(){
  const engine = await Engine3D.init();
  // 通过 engine 进行后续操作
}
demo();
```

::: tip 多实例
从新版本起，引擎支持**多实例**：可以多次调用 `Engine3D.init()` 创建多个相互独立的 `Engine3D`，每个实例拥有自己的画布、渲染循环、资源管理器（`engine.res`）和配置（`engine.setting`）。早期版本中通过 `Engine3D.xxx` 静态方式访问的接口（如 `Engine3D.startRenderView`、`Engine3D.res`、`Engine3D.aspect`、`Engine3D.setting`）现在都改为在实例上调用（`engine.startRenderView`、`engine.res` …）。
:::

## 手动创建 Canvas
默认参数下，`Engine3D.init()` 会自动生成一个以屏幕大小为宽高的 `canvas` 画布。如果不想使用引擎自动创建的画布，用户也可以手动创建画布。
比如，用户可以在 HTML 中插入一个 `<canvas>` 标签，并指定一个 id：
```html
<canvas id="canvas" style="width:800px;height:500px" />
```
::: tip
使用外部画布需要手动设定 `style` 大小，比如具体的像素数值，或设置为 `100%` 来自动占满父级容器
:::

接下来，在 ts 代码中通过 `document.getElementById` 获取到该画布：
```ts
let canvas = document.getElementById('canvas');
```

并使用 `canvasConfig` 将 `canvas` 参数传入 `init()` 方法中进行初始化：
```ts
import { Engine3D } from '@orillusion/core';

let canvas = document.getElementById('canvas');
const engine = await Engine3D.init({
  canvasConfig: { canvas }
});
```

更多配置请参看 [Engine3D](/guide/core/engine)
