# Installation

## Install by NPM
We recommend using frontend build tools based on Node.js to develop Web3D applications. For example, you can use frontend ecosystem frameworks such as vite or webpack to build complex frontend projects. You can also use TypeScript for more convenient development.

1. Installing dependencies
Use the npm command in the command prompt to install engine dependencies:
```bash
npm install @orillusion/core --save
```
2. import modules

import certain modules:
```ts
import { Engine3D, Camera3D } from '@orillusion/core'
```
or you can import the entire module:
```ts
import * as Orillusion from '@orillusion/core'
```

## Use via `CDN` links
We also support quick access to the `orillusion` engine directly through a `CDN` link with the `<script>` tag. Here is an example of the official `Orillusion` `CDN` link, showing three different ways to bring it in.
> Users can also use any third-party links that provide `npm` packages, such as [unpkg](https://unpkg.com/@orillusion/core) or [jsdelivr](https://www.jsdelivr.com/package/npm/@orillusion/ core), etc. If you have local development needs, you can also download the relevant files locally and deploy them on your own.

### 1. Global build version
```html
<script src="https://cdn.orillusion.com/orillusion.umd.js"></script>
```
The page globally loads `<script>`, and a global `Orillusion` variable is introduced in the `window` object, which can be used directly as follows:
```html
<script>
  const { Engine3D, Camera3D } = Orillusion
</script>
```

### 2. ESModule build version
We recommend to use [ESModule](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules) for develop. Most browsers already support the native `ES` module, and users can directly import the `orillusion.es.js` build that complies with `ESNext` for rapid development.

```html
<script type="module">
  import { Engine3D, Camera3D } from "https://cdn.orillusion.com/orillusion.es.js"
</script>
```

Note that we use the `<script type="module">` label, which allows us to use modular syntax like `import` and `export` directly in the browser. Of course with the `vite` or `webpack` front-end build tools, we can also import `CDN` links directly into our code for development.
```ts
import { Engine3D, Camera3D } from "https://cdn.orillusion.com/orillusion.es.js"
```


### 3. Use `importmap`
To make it easier to manage the names of dependencies, we recommend using [Import Maps](https://caniuse.com/import-maps) to manage how the browser locates dependent packages:
```html
<!-- You can define the name and corresponding address of the ES module -->
<script type="importmap">
{
  "imports": {
    "@orillusion/core": "https://cdn.orillusion.com/orillusion.es.js"
  }
}
</script>
<!-- You can use custom names to import -->
<script type="module">
  import { Engine3D, Camera3D } from "@orillusion/core"
</script>
```