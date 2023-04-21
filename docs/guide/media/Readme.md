# Media Extension

`Orillusion` provides the [@orillusion/media-extention](/media-extention/) extension package to support multimedia, enabling easy loading and display of images and videos, as well as providing corresponding processing capabilities. Please note that it needs to be installed separately, and the usage method after installation is similar to that of ordinary textures and materials.

Consistent with the engine installation method, we can introduce media extensions through two methods: `NPM` and `CDN` linking:
```bash
npm install @orillusion/core --save
npm install @orillusion/media-extention --save
```

Or globally load the `<script>`and obtain the `Media` module in the global `Orillusion` variable:
```html
<script src="https://cdn.orillusion.com/orillusion.umd.js"></script>
<script src="https://cdn.orillusion.com/media.umd.js"></script>
```

Currently, [media-extention](/media-extention/) supports the following types of materials:

| Material | Description |
| --- | --- |
| [ImageMaterial](/media-extention/classes/ImageMaterial.md) | Base material that does not calculate lighting and only renders through Image pixel colors |
| [VideoMaterial](/media-extention/classes/VideoMaterial.md) | Base material that does not calculate lighting and only renders through the color of Video pixels |
| [ChromaKeyMaterial](/media-extention/classes/ChromaKeyMaterial.md) | Does not calculate lighting, only renders the base material through Video pixel colors, and filters the background color |
