# Installation

::: tip
`WebGPU` is a low-level access API. To prevent [man-in-the-middle attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack), most browsers restrict its access and usage to [Secure contexts](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts) only. When publishing a web application built with `WebGPU`, users need to deploy it on a secure domain based on `https`, or access it via a `localhost`-based domain, including `http://127.0.0.1`, `http://localhost`, or custom domains such as `http://*.localhost`.
:::

## Install via NPM
We recommend using frontend build tools based on `Node.js` to develop `Web3D` applications, for example using frontend ecosystem frameworks such as [Vite](https://vitejs.dev/) or [Webpack](https://webpack.js.org/) to build complex frontend projects. Of course, you can also more conveniently use [TypeScript](https://www.typescriptlang.org/) for development.
1. Install dependencies

Use the [npm](https://www.npmjs.com/) command in the command line to install the engine dependencies:
```bash
npm install @orillusion/core --save
```
2. Import modules

Import certain modules:
```ts
import { Engine3D, Camera3D } from '@orillusion/core'
```
Or import the global module:
```ts
import * as Orillusion from '@orillusion/core'
```

::: tip
The `Orillusion` engine requires a browser that supports the latest `WebGPU` standard to run, such as `Chrome >= 114`. Therefore, there is no need to maintain compatibility with older `JavaScript` syntax, and it is built and published based on `ESNext` by default. If you use build tools such as [Vite](https://vitejs.dev/) or [Webpack](https://webpack.js.org/) to deploy your project, it is recommended to set the build target to `ES2021` or above to ensure that all APIs run in their optimal state.
:::

## Import via `CDN` Link
We also support quickly using the `orillusion` engine directly through a `CDN` link with the `<script>` tag. The following uses the `@orillusion/core` link as an example to show three different import methods.
> Users can use third-party `NPM` distribution services to load various version files of `orillusion`, such as [unpkg](https://unpkg.com/@orillusion/core) or [jsdelivr](https://www.jsdelivr.com/package/npm/@orillusion/core). For local development needs, users can download the corresponding version of the `js` file and deploy it themselves.

### 1. Global Build
```html
<!- Load the latest published version through unpkg ->
<script src="https://unpkg.com/@orillusion/core/dist/orillusion.umd.js"></script>
<!- Or load a specified version ->
<script src="https://unpkg.com/@orillusion/core@0.8.x/dist/orillusion.umd.js"></script>
```
After the page globally loads the `<script>`, a global `Orillusion` variable is introduced into the `window` object, which can be used directly:
```html
<script>
  const { Engine3D, Camera3D } = Orillusion
</script>
```

### 2. ESModule Build
We recommend using [ESModule](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules) syntax for development. Most browsers already support native `ES` modules, and users can directly import the `orillusion.es.js` build that complies with the `ESNext` standard for rapid development:

```html
<script type="module">
  // Or load the latest version from unpkg.com
  import { Engine3D, Camera3D } from "https://unpkg.com/@orillusion/core/dist/orillusion.es.js" 
  // Or load a specified version 
  import { Engine3D, Camera3D } from "https://unpkg.com/@orillusion/core@0.8.x/dist/orillusion.es.js" 
</script>
```

Note that we use the `<script type="module">` tag, which allows us to use modular syntax such as `import` and `export` directly in the browser. Of course, together with frontend build tools such as `vite`, we can also import `CDN` links directly into the project for development.

### 3. Using `importmap`
To uniformly manage the addresses and names of dependencies, we recommend using [Import Maps](https://caniuse.com/import-maps) to manage how the browser locates dependency packages:
```html
<!-- You can define the names and corresponding addresses of ES modules -->
<script type="importmap">
{
  "imports": {
    "@orillusion/core": "https://unpkg.com/@orillusion/core/dist/orillusion.es.js",
    "@orillusion/stats": "https://unpkg.com/@orillusion/stats/dist/stats.es.js"
  }
}
</script>
<!-- You can import using custom names -->
<script type="module">
  import { Engine3D, Camera3D } from "@orillusion/core"
  import { Stats } from "@orillusion/stats"
</script>
```
