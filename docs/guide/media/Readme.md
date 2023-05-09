# Media Extension

`Orillusion` provides the [@orillusion/media-extention](/media-extention/) extension package to support multimedia, enabling easy loading and display of images and videos, as well as providing corresponding processing capabilities. Please note that it needs to be installed separately, and the usage method after installation is similar to that of ordinary textures and materials.

## Installation
Same as the engine installation, we can import physic plugins through two methods: `NPM` and `CDN` linking:

## 1. Install by NPM
```bash
npm install @orillusion/core --save
npm install @orillusion/media-extention --save
```
```ts
import { Engine3D } from "@orillusion/core"
import { Physics } from "@orillusion/media-extention"
```

## 2. Import via `CDN` links
We recommend using the `ESModule` build version:
```html
<script type="module">
    import { Engine3D } from "https://unpkg.com/@orillusion/core/dist/orillusion.es.js"
    import { VideoMaterial } from "https://unpkg.com/@orillusion/media-extention/dist/media.es.js"
</script>
```

Or load the `UMD` version through `<script>` tag, and get the `VideoMaterial` module from the global `Orillusion` variable:
```html
<script src="https://unpkg.com/@orillusion/core/orillusion.umd.js"></script>
<script src="https://unpkg.com/@orillusion/media-extention/dist/media.umd.js"></script>
<script>
  const {Engine3D, VideoMaterial} = Orillusion
</script>
```

## 媒体材质
Currently, [media-extention](/media-extention/) supports the following types of materials:

| Material | Description |
| --- | --- |
| [ImageMaterial](/media-extention/classes/ImageMaterial.md) | Base material that does not calculate lighting and only renders through Image pixel colors |
| [VideoMaterial](/media-extention/classes/VideoMaterial.md) | Base material that does not calculate lighting and only renders through the color of Video pixels |
| [ChromaKeyMaterial](/media-extention/classes/ChromaKeyMaterial.md) | Does not calculate lighting, only renders the base material through Video pixel colors, and filters the background color |
