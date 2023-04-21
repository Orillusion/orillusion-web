# Installation

## Install by NPM
We recommend using frontend build tools based on `Node.js` to develop `Web3D` applications. For example, you can use frontend frameworks such as [vite](https://vitejs.dev/) or [webpack](https://webpack.js.org/) to build complex frontend projects. You can also use [TypeScript](https://www.typescriptlang.org/) for more convenient development.

1. Installing dependencies
Use the npm command in the command prompt to install engine dependencies:
```bash
npm install @orillusion/core --save
```
2. Import modules

Import certain modules:
```ts
import { Engine3D, Camera3D } from '@orillusion/core'
```
Or you can import the entire module:
```ts
import * as Orillusion from '@orillusion/core'
```

## Import via `CDN` links
We support quick access to the `orillusion` engine directly through a `CDN` link with the `<script>` tag. Here is an example of using `Orillusion` engine from `CDN` link.
> Users can use any third-party links that provide `npm` packages, such as [unpkg](https://unpkg.com/@orillusion/core), [jsdelivr](https://www.jsdelivr.com/package/npm/@orillusion/core) or some others. You can download and deploy relevant files locally.

### 1. Using global build 
```html
<script src="https://cdn.orillusion.com/orillusion.umd.js"></script>
```
The page globally loads `<script>`, and a global variable (named `Orillusion`) is declared in the `window` object, which can be used directly as follows:
```html
<script>
  const { Engine3D, Camera3D } = Orillusion
</script>
```

### 2. Using the ESModule build
We recommend using [ESModule](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules) for development. Most browsers already support the native `ES` module, and users can directly import the `orillusion.es.js` build that complies with `ESNext` for rapid development.

```html
<script type="module">
  import { Engine3D, Camera3D } from "https://cdn.orillusion.com/orillusion.es.js"
</script>
```

Note that we use the `<script type="module">` label, which allows us to use modular syntax like `import` and `export` directly in the browser. And with the `vite` or `webpack` front-end build tools, we can import `CDN` links directly into our code for development.
```ts
import { Engine3D, Camera3D } from "https://cdn.orillusion.com/orillusion.es.js"
```


### 3. Using `importmap`
To make it easier to manage the names of dependencies, we recommend using [Import Maps](https://caniuse.com/import-maps) to manage how the browser locates dependent packages:
```html
<!-- Define the names and corresponding addresses of the ES module -->
<script type="importmap">
{
  "imports": {
    "@orillusion/core": "https://cdn.orillusion.com/orillusion.es.js"
  }
}
</script>
<!-- Use custom names to import -->
<script type="module">
  import { Engine3D, Camera3D } from "@orillusion/core"
</script>
```