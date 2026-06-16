# Media Extension

`Orillusion` provides the [@orillusion/media-extention](/media-extention/) extension package to support multimedia, enabling easy loading and display of images, videos, and audio, as well as providing corresponding processing capabilities. Please note that it needs to be installed separately, and after installation it is used similarly to ordinary textures, materials, or components.

## Installation
Same as the engine installation, we can import the plugin through two methods: `NPM` and `CDN` linking:

### 1. Install via `NPM` Package
```bash
npm install @orillusion/core --save
npm install @orillusion/media-extention --save
```
```ts
import { Engine3D } from "@orillusion/core"
import { Physics } from "@orillusion/media-extention"
```

### 2. Import via `CDN` Links
We recommend using the `ESModule` build version:
```html
<script type="module">
  import { Engine3D } from "https://unpkg.com/@orillusion/core/dist/orillusion.es.js" 
  import { VideoMaterial } from "https://unpkg.com/@orillusion/media-extention/dist/media.es.js" 
</script>
```

Or load the `UMD` build version through the `<script>` tag, and get modules such as `VideoMaterial` from the global `Orillusion` variable:
```html
<script src="https://unpkg.com/@orillusion/core/orillusion.umd.js"></script>
<script src="https://unpkg.com/@orillusion/media-extention/dist/media.umd.js"></script>
<script>
  const { Engine3D, Media } = Orillusion
  const { VideoMaterial, ImageMaterial } = Media
</script>
```

## Media Materials

Currently, [media-extention](/media-extention/) supports the following types of materials:

| Material | Description |
| --- | --- |
| [ImageMaterial](/media-extention/classes/ImageMaterial.md) | Base material that does not calculate lighting and only renders through Image pixel colors |
| [VideoMaterial](/media-extention/classes/VideoMaterial.md) | Base material that does not calculate lighting and only renders through Video pixel colors |
| [ChromaKeyMaterial](/media-extention/classes/ChromaKeyMaterial.md) | Base material that does not calculate lighting and only renders through Video pixel colors, and filters the background color |

## Audio Components

In addition to images and videos, [media-extention](/media-extention/) also adds commonly used audio components:

| Component | Description |
| --- | --- |
| [AudioListener](/media-extention/classes/AudioListener.md) | Audio listener component, needs to be used in conjunction with the two components below |
| [StaticAudio](/media-extention/classes/StaticAudio.md) | Static audio component, the volume is independent of position |
| [PositionAudio](/media-extention/classes/PositionAudio.md) | Dynamic audio component, the volume changes with the position of the audio source |
