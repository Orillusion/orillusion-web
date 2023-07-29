# Installation

## Install by NPM
We recommend using frontend build tools based on `Node.js` to develop `Web3D` applications. For example, you can use frontend frameworks such as [Vite](https://vitejs.dev/) or [Webpack](https://webpack.js.org/) to build complex frontend projects. You can also use [TypeScript](https://www.typescriptlang.org/) for more convenient development.

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

## Import Via `CDN` Links
We support quick access to the `orillusion` engine directly through a `CDN` link with the `<script>` tag. Here is an example of using `@orillusion/core` link.
> Users can use third-party `NPM` distribution services to load various versions of `orillusion` files, such as [unpkg](https://unpkg.com/@orillusion/core) or [jsdelivr](https://www.jsdelivr.com/package/npm/@orillusion/core). For local development, users can download the corresponding version of `js` file.

### 1. Using Global Build 
```html
<!- Use the latest published version through unpkg->
<script src="https://unpkg.com/@orillusion/core/dist/orillusion.umd.js"></script>
<!- Or use the specified version ->
<script src="https://unpkg.com/@orillusion/core@0.6.7/dist/orillusion.umd.js"></script>
```
The page globally loads `<script>`, and a global variable (named `Orillusion`) is declared in the `window` object, which can be used directly as follows:
```html
<script>
  const { Engine3D, Camera3D } = Orillusion
</script>
```

### 2. Using the ESModule Build
We recommend using [ESModule](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules) for development. Most browsers already support the native `ES` module, and users can directly import the `orillusion.es.js` build that complies with `ESNext` for rapid development.

```html
<script type="module">
    // Use the latest published version through unpkg.com 
    import { Engine3D, Camera3D } from "https://unpkg.com/@orillusion/core/dist/orillusion.es.js"
    // Or use the specified version
    import { Engine3D, Camera3D } from "https://unpkg.com/@orillusion/core@0.6.7/dist/orillusion.es.js" 
</script>
```

Note that we use the `<script type="module">` label, which allows us to use modular syntax like `import` and `export` directly in the browser. And with the `vite` or other front-end build tools, we can import `CDN` links directly into our project for development.

### 3. Using `importmap`
To standardize the management of dependencies with its address, we recommend using [Import Maps](https://caniuse.com/import-maps) to manage how the browser locates dependent packages:
```html
<!-- Define the names and corresponding addresses of the ES module -->
<script type="importmap">
{
  "imports": {
    "@orillusion/core": "https://unpkg.com/@orillusion/core/dist/orillusion.es.js",
    "@orillusion/stats": "https://unpkg.com/@orillusion/stats/dist/stats.es.js"
  }
}
</script>
<!-- Use custom names to import -->
<script type="module">
    import { Engine3D, Camera3D } from "@orillusion/core"
    import { Stats } from "@orillusion/stats"
</script>
```