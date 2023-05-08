# 安装

## 通过 NPM 安装
我们推荐使用基于 `Node.js` 的前端构建工具来开发 `Web3D` 应用，比如配合 [Vite](https://vitejs.dev/) 或 [Webpack](https://webpack.js.org/) 等前端生态框架来构建复杂的前端项目，当然也可以更方便的使用 [TypeScript](https://www.typescriptlang.org/) 进行开发。
1. 安装依赖

使用 [npm](https://www.npmjs.com/) 命令在提示行中安装引擎依赖：
```bash
npm install @orillusion/core --save
```
2. 引入模块

引入指定模块：
```ts
import { Engine3D, Camera3D } from '@orillusion/core'
```
或引入全局模块：
```ts
import * as Orillusion from '@orillusion/core'
```

## 通过 `CDN` 链接引入
我们也支持借助 `<script>` 标签直接通过 `CDN` 链接快捷使用 `orillusion` 引擎。下面以 `@orillusion/core` 链接为例，展示三种不同的引入方法。   
> 用户可以使用第三方 `NPM` 分发服务来加载 `orillusion` 各个版本文件，如 [unpkg](https://unpkg.com/@orillusion/core) 或 [jsdelivr](https://www.jsdelivr.com/package/npm/@orillusion/core) 等。如有本地开发需求，用户可以下载对应版本的 `js` 文件，自主进行部署。

### 1. 全局构建版本
```html
<!- 最新发布版本 ->
<script src="https://cdn.orillusion.com/orillusion.umd.js"></script>
<!- 或通过 unpkg 加载指定版本 ->
<script src="https://unpkg.com/@orillusion/core@0.6.0/dist/orillusion.umd.js"></script>
```
页面全局加载 `<script>`，`window` 对象中会引入一个全局 `Orillusion` 变量，直接使用即可：
```html
<script>
  const { Engine3D, Camera3D } = Orillusion
</script>
```

### 2. ESModule 构建版本
我们推荐使用 [ESModule](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules) 语法进行开发。大多数浏览器已经支持原生 `ES` 模块，用户可以直接引入符合 `ESNext` 的 `orillusion.es.js` 构建版本进行快速开发:

```html
<script type="module">
  // 加载最新版本
  import { Engine3D, Camera3D } from "https://cdn.orillusion.com/orillusion.es.js" 
  // 或从 unpkg.com 加载指定版本 
  import { Engine3D, Camera3D } from "https://unpkg.com/@orillusion/core@0.6.0/dist/orillusion.es.js" 
</script>
```

注意我们使用了 `<script type="module">` 标签，这使得我们可以在浏览器中直接使用 `import` 和 `export` 等模块化语法。当然配合 `vite` 等前端构建工具，我们也可以直接在项目中导入 `CDN` 链接进行开发。

### 3. 使用 `importmap`
为了统一管理依赖的地址和名称，我们推荐使用 [导入映射表(Import Maps)](https://caniuse.com/import-maps) 来管理浏览器如何定位依赖包：
```html
<!-- 可以定义ES模块的名称和对应地址 -->
<script type="importmap">
{
  "imports": {
    "@orillusion/core": "https://unpkg.com/@orillusion/core/dist/orillusion.es.js",
    "@orillusion/stats": "https://unpkg.com/@orillusion/stats/dist/stats.es.js"
  }
}
</script>
<!-- 可以使用自定义名称引入 -->
<script type="module">
  import { Engine3D, Camera3D } from "@orillusion/core"
  import { Stats } from "@orillusion/stats"
</script>
```