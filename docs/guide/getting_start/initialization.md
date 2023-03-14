# 初始化引擎
## 创建 Engine3D 实例
在使用引擎前，必须通过 `Engine3D.init()` 方法进行初始化，引擎会自动创建一个 `Engine3D` 实例用于后续的操作
```ts
import { Engine3D } from '@orillusion/core';

Engine3D.init().then(()=>{
  // 进行后续操作
})
```
注意，`Engine3D.init()` 是一个异步 API，推荐配合 `async/await` 进行调用

```ts
import { Engine3D } from '@orillusion/core';

async function demo(){
  await Engine3D.init();
  // 进行后续操作
}
demo()
```

## 手动创建 Canvas
默认参数下，`Engine3D.init()` 实例会自动生成一个以屏幕大小为宽高的 `canvas` 画布。如果不想使用引擎自动创建的画布，用户也可以手动创建画布。
比如，用户可以在 HTML 中插入一个 `<canvas>` 标签，并指定一个 id：
```html
<canvas id="canvas" width="800" height="500" />
```

接下来，在 ts 代码中通过 `document.getElementById` 获取到该画布：
```ts
let canvas = document.getElementById('canvas')
```

并使用 `canvasConfig` 将 `canvas` 参数传入 `init()` 方法中进行初始化：
```ts
import { Engine3D } from '@orillusion/core';

let canvas = document.getElementById('canvas')
await Engine3D.init({
  canvasConfig: { canvas }
});
```

更多配置请参看 [Engine3D](/guide/core/engine)

